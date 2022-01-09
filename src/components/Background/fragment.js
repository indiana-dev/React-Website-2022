const FragmentShader = `
precision mediump float;
uniform float time;
uniform vec3 color;
uniform vec2 uResolution;
uniform vec3 camPos;
uniform mat4 view_matrix;
uniform float progress;
uniform float animationProgress;

varying vec2 vUv;

float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

// DISTANCE FUNCTIONS

float wave(float min, float max, float frequency) {
  float s = sin(time*frequency/8.-3.141592/2.);
  s = (s+1.)/2.;
  s *= s * sign(s);
  float v = s*(max-min)+min;
  return v;
}

vec3 opElongate( in vec3 p, in vec3 h )
{
    vec3 q = p - clamp( p, -h, h );
    return  q ;
}

float sdBox( vec3 p, vec3 b )
{
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}

float round_(float a) {
  return floor(a + 0.5);
}

vec3 round_(vec3 a) {
  a.x = round_(a.x);
  a.y = round_(a.y);
  a.z = round_(a.z);
  return a;
}

float map(float value, float low1, float high1, float low2, float high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

float opRepLim( in vec3 p, in float c, in vec3 l, float r)
{
    vec3 q = p-c*clamp(round_(p/c),-l,l);
    return  length(q) - r;
}

float opRep(in vec3 p, vec3 s, float r) {
  vec3 q = mod(p+0.5*s,s)-0.5*s;
  return  length(q) - r;
}

float sdTorus( vec3 p, vec2 t )
{
  p = p.xzy;
  vec2 q = vec2(length(p.xz)-t.x,p.y);
  return length(q)-t.y;
}

float opRepTorus(in vec3 p, vec3 s, float sz) {
  p.x += 5.;
  vec3 q = mod(p+0.5*s,s)-0.5*s;

  return sdTorus(q, vec2(sz, sz*0.4));
}

float fRepeatedSphere(vec3 p, float r, float l) {
  vec3 s = vec3(10.);
  vec3 c = floor((p+0.5*s)/s);
  vec3 q = mod(p+0.5*s,s)-0.5*s;

  q = opElongate(q, vec3(0., l, 0.));
  return mix(length(q) - r, sdBox(q, vec3(1.)), progress);
}

// SCENE

float sceneSDF(vec3 p) {
  if (animationProgress < 1.) {
    float l = mix(0., 4.75, animationProgress);
    return fRepeatedSphere(p, 1., l);
  } else if (animationProgress < 2.) {
    return mix(fRepeatedSphere(p, 1., 4.75), opRepTorus(p, vec3(10.), 6.), animationProgress-1.);
  } else {
    float sz = map(animationProgress, 2., 3., 6., 8.);
    return min(fRepeatedSphere(p, 1., 0.), opRepTorus(p, vec3(10.), sz));
  }

  // {
  //   float height = map(animationProgress, 1., 2., 40., -2.);// -2.;
  //   p.y=min(max(0., p.y-height), 5.);
  //   return opRep(p, vec3(10.), 1.);
  // }
}
// RAYMARCH FUNCTIONS

const float EPSILON = 0.01;
const float MAX_DIST = 200.;
const float MAX_MARCHING_STEPS = 200.;

vec3 rayDirection(float fieldOfView, vec2 size, vec2 fragCoord) {
  vec2 xy = fragCoord - size / 2.0;
  float z = size.y / tan(radians(fieldOfView) / 2.0);
  return normalize(vec3(xy, -z));
}

vec2 shortestDistanceToSurface(vec3 eye, vec3 marchingDirection, float start, float end) {
  float depth = start;

  for (float i = 0.; i < MAX_MARCHING_STEPS; i += 1.0) {
      vec3 point = eye + depth * marchingDirection;
      float dist = sceneSDF(point);

      
      if (dist < EPSILON) {
          return vec2(depth, 0.);
      }
      
      depth += dist;
      if (depth >= end) {
          return vec2(end, -2.);
      }
  }
  return vec2(end, -1.);
}

void main() {
  vec3 viewDir = rayDirection(60., uResolution, vUv*uResolution);
  vec3 worldDir = (view_matrix * vec4(viewDir, 0.)).xyz;

  vec2 result = shortestDistanceToSurface(camPos, worldDir, 0., MAX_DIST);
  float dist = result.x;
  float type = result.y;
  vec3 p = camPos + dist * worldDir;

  // Didn't hit anything
  if (type < 0.) {
      gl_FragColor = vec4(vec3(mix(0., .9, progress)), 1.);
      return;
  }

  float fog = min(1., 
    smoothstep(0., MAX_DIST, dist) 
  );

  float d = dist/((sin(time)+1.)*250.+200.) + 0.5/dist;
  vec3 col = vec3(d, 0.01*dist*0.25, 0.01*dist*0.5);
  col = mix(col, vec3(0.), fog);

  vec3 col2 = vec3(.8);
  col2 = mix(col2, vec3(.9), fog);

  vec3 finalColor = mix(col, col2, progress);

  gl_FragColor = vec4(finalColor, 1.);
}`

export default FragmentShader
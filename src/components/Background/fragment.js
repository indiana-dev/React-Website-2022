const FragmentShader = `
precision mediump float;
uniform float time;
uniform vec3 color;
uniform vec2 uResolution;
uniform vec3 camPos;
uniform mat4 view_matrix;
uniform float progress;

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

float fRepeatedSphere(vec3 p, float r) {
  vec3 s = vec3(10.);
  vec3 c = floor((p+0.5*s)/s);
  vec3 q = mod(p+0.5*s,s)-0.5*s;

  q = opElongate(q, vec3(0., wave(0., 4.75, 2.)+noise(p)*0., 0.));
  return mix(length(q) - r, sdBox(q, vec3(1.)), progress);
}

// SCENE

float sceneSDF(vec3 p) {
  return fRepeatedSphere(p, 1.);
}
// RAYMARCH FUNCTIONS

const float EPSILON = 0.01;
const float MAX_DIST = 200.;
const int MAX_MARCHING_STEPS = 200;

vec3 rayDirection(float fieldOfView, vec2 size, vec2 fragCoord) {
  vec2 xy = fragCoord - size / 2.0;
  float z = size.y / tan(radians(fieldOfView) / 2.0);
  return normalize(vec3(xy, -z));
}

vec2 shortestDistanceToSurface(vec3 eye, vec3 marchingDirection, float start, float end, inout float i, inout float closest) {
  float depth = start;
  closest = 999999.;
  for (i = 0.; i < float(MAX_MARCHING_STEPS); i += 1.0) {
      vec3 point = eye + depth * marchingDirection;
      float dist = sceneSDF(point);
      closest = min(dist, closest);
    //   dist = min(point.y, dist);

    //   if (point.y < EPSILON) {
    //       return vec2(depth, 1.);
    //   }
      
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
  float i;
  float closest;
  vec2 result = shortestDistanceToSurface(camPos, worldDir, 0., MAX_DIST, i, closest);
  float dist = result.x;
  float type = result.y;
  vec3 p = camPos + dist * worldDir;

  // Didn't hit anything
  if (type < 0.) {
      // gl_FragColor = vec4(vUv.x < progress ? .9 : 0.);//vec4(0.,0.,0.,1.);//vec4(.2, .2, .2, 1.);
      gl_FragColor = vec4(vec3(mix(0., .9, progress)), 1.);
      return;
  }

  float fog = min(1., 
    smoothstep(0., MAX_DIST, dist) + 
    smoothstep(0., float(MAX_MARCHING_STEPS), i)
    );

  float d = dist/((sin(time)+1.)*250.+200.) + 0.5/dist;
  vec3 col = vec3(d, 0.01*dist*0.25, 0.01*dist*0.5);
  // col = vUv.x < progress ? vec3(.8) : col;
  col = mix(col, vec3(0.), fog);

  vec3 col2 = vec3(.8);
  col2 = mix(col2, vec3(.9), fog);

  // vec3 finalColor = mix(col, vec3(vUv.x < progress ? .9 : 0.), fog);
  vec3 finalColor = mix(col, col2, progress);

//   vec3 finalColor = mix(col, vec3(0.), max(0.6,dist/1000.));
  gl_FragColor = vec4(finalColor, 1.);
}`

export default FragmentShader
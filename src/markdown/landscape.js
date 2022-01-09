const md = `<br>
<div  style="text-align:center;">
  <img class="img-expand" src="assets/images/landscape/ls6.png" width="800px" height=""/>
</div>

# The project

In 2018 I made a project for my engineering school that was a landscape generator. 
The goal of this project was to become more familiar with C++, object-oriented programming and random number generators.

I've chosen to create a space-themed generator with a lot of properties you can tweak in order to change the generated landscape.

The program generates a \`.svg\` file that can be opened in a browser to see the result.
This extension stands for _Scalable Vector Graphics_ and means that it can be zoomed in and out without any loss of detail, as opposite to an image file.

<div class="image-list" style="text-align:center;">
  <img class="img-expand" src="assets/images/landscape/ls1.png" width="30%" height=""/> 
  <img class="img-expand" src="assets/images/landscape/ls2.png" width="30%" height=""/> 
  <img class="img-expand" src="assets/images/landscape/ls5.png" width="30%" height=""/> 
</div>


# The generation parameters

The scene is subdivided in 4 layers :
- **The planet's surface** contains trees and mountains
- **The atmosphere** is populated by spaceships and satellites
- **The _foreground_ space** contains all the different types of planets
- **The _background_ space** contains all the stars, blackholes and what I call supernovaes (that are juste brighter and bigger stars)

### Layers properties

For each layer, you can modify a set of parameters specific to the elements present on the layer.

#### Planet Surface

- **Trees density**
- **Mountains density**
- **Trees segments** : number of segments that make a tree

#### Atmosphere

- **Spaceships density** 
- **Satellites density** 
- **Flying objects height** : the height at which satellites and spaceships are generated

#### Space foreground

- **Planets density** 
- **Planets size** 
- **Planets brightness** : changes the halo effect around the planets that give an impression of high luminosity

#### Space background

- **Stars density and size** 
- **Supernovaes density and size** 
- **Blackholes density and size** 

<div class="image-list" style="text-align:center;">
  <img class="img-expand" src="assets/images/landscape/ls3.png" width="450px" height=""/>
  <img class="img-expand" src="assets/images/landscape/ls7.png" width="450px" height=""/> 
</div>

### Random seeds and number generator

For each layer, you also have an option to reset the seed used for the number generator for this specific layer, thus you can regenerate a layer independently from the other ones.

You can also enter a manual seed (represented by a number) or change the whole's scene seed and regenerate the 4 layers to have a completely new landscape`

export default md
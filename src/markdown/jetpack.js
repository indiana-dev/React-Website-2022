const md = `<br>
<div class="video-container" id="centered-thing">
<iframe width="100%"
src="https://www.youtube.com/embed/xekE2-Vgaos">
</iframe>
</div>

# The Project

During my years in college and high school, I was a member of a development community focused on Casio calculators named [Planet Casio](https://www.planet-casio.com/Fr) which is the french community of reference for Casio.

When I was 16 years old, I had the idea to create an adaptation of the worldwide famous mobile game [Jetpack Joyride](https://en.wikipedia.org/wiki/Jetpack_Joyride) on a Casio graphical Calculator.

I started a changelog on the website where I could post my progress and get feedbacks and ideas to improve my game. I also became friend with some developers that helped me when I had difficulties.

It took me 3 months of development to release it to the community and it was really well-recieved : it is currently ranked as the best game of all time on the site with more than 100,000 visits on the page, 40,000 downloads and an average score of 9.65/10 for 20 reviews.

It recieved the _label of quality_ given by the website administrators for really good games and also recieved the _crush of the public_ award.

You can find all these informations on my game's official page : 

[https://www.planet-casio.com/Fr/programmes/programme2749-last-jetpack-joyride-drakalex007-jeux-add-ins.html](https://www.planet-casio.com/Fr/programmes/programme2749-last-jetpack-joyride-drakalex007-jeux-add-ins.html)

# Difficulties and Challenges

Coding a game on a graphical calculator comes with a lot of constraints that I saw as challenges :

- **The screen resolution is 128x64 pixels** : Having to create a game on such a low resolution was not easy, every pixel becomes important and you need to fit a lot of objects in a relatively small game space.

- **The color palette is monochrome** : This 2-color palette combined with a really low resolution means that it is really hard to add details to the game sprites and animations. There is a lot of work done in pixel art to find the best compromise between detail and visibility (you don't want the game to become a big cluster of pixels that you have difficulties to recognize)

- **The available memory is 1Mo** : I had to optimize my code so that it wouldn't take too much memory space as it's really valuable when the capacity is this low.

- **It's a calculator** : At first, these devices are not thought to have games made on them. There are a lot of technical difficulties like the refresh rate of the screen and the actual speed of the calculator which are more apparent to the  PC that existed in the 90's than supercomputers.

All of these difficulties were really interesting challenges because I was limited and had to think about every small detail to take the most out of the calculator's power and the C programming language that I could.

# Background
When I was 14 years old, I got my first graphical calculator. It was a Casio Graph 35+.

I already knew the C programming language and wanted to create my own programs on my calculator so I learned Basic Casio, which is the default language used to create programs on Casio graphical calculators.

I was happy with Basic Casio development until I learned about add-ins a few years afterwards : the calculator's main menu is populated with various applications (Basic Calculator, Graphs, Equation Solver, Settings) and while you're limited to 64Ko of memory when creating apps in Basic, you have another option to develop add-ins in C that appear in the main menu and have access to 1Mo memory and run globally much faster.

The problem is that you can't develop add-ins on a Graph 35+, this option is only availabe starting from Graph 75+ (which are more powerful and expensive).

However, after some research on the internet, I learned that the software of a Graph 35+ and a Graph 75 is the same. Casio only restrain access to the full power and memory on a Graph 35+. It was quick until I found documentation and tutorials on how to flash the kernel of the Graph 35+ with the unbrideld kernel of a Graph 75.

After this step, I started to learn about add-in development and the Casio SDK and got the idea to recreate the famous Jetpack Joyride mobile app for Casio.`

export default md
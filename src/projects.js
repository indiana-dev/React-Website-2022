import asl_md from './markdown/asl'
import jetpack_md from './markdown/jetpack'
import causality_md from './markdown/causality'
import landscape_md from './markdown/landscape'
import tictactoe_md from './markdown/tictactoe'
import ProjectData from './classes/ProjectData'

const Projects = [
    {
        id: 'asl',
        name: 'American Sign Language Recognizer',
        skills: 'Python, Machine Learning',
        description: 'During my fourth year of engineering school, I made an internship at Capgemini where I had to develop a neural network architecture that could recognize the ASL alphabet. The input are the frames of a live webcam and the network makes a prediction and show the letter associated to the current sign.',
        markdown: asl_md,
        github: 'https://github.com/indiana-dev/ASL-Alphabet',
        vh: 2,
    },
    {
        id: 'jetpack',
        name: 'Jetpack Joyride for Casio',
        skills: 'C, assembly',
        description: 'When I was 16, I was part of a game development community focused on Casio graphical calculators. I decided to adapt the famous Jetpack Joyride mobile game on a 128x64 monochrome calculator with 1mb of memory. It resulted in a calculator app that is currently ranked as the best game on this site with more than 40,000 downloads.',
        markdown: jetpack_md,
        project_page: 'https://www.planet-casio.com/Fr/programmes/programme2749-last-jetpack-joyride-drakalex007-jeux-add-ins.html',
        vh: 3,
    },
    {
        id: 'causality',
        name: 'Causality',
        skills: 'C#, Unity',
        description: 'Causality is a game about time and rewinding the flow of time. It\'s also a solo cooperation game, but you\'re cooperating with yourself... in the future ! Or in the past, it depends on the time... I started developping this game at the beggining of September 2020 and I already made a great prototype. I\'m planning to finish and publish the game on PC and mobile mid-2021.',
        markdown: causality_md,
        vh: 2.5,
    },
    {
        id: 'landscape',
        name: 'Space-themed Landscape Generator',
        skills: 'C++, SVG',
        description: 'One of the projects I made during my second year in engineering school was a landscape generator. I really like space and its phenomenas so I chose this theme and started experimenting with SVG graphics. It was a fun experience both in code and in design, the render is really colorful, diversified and refined.',
        markdown: landscape_md,
        github: 'https://github.com/indiana-dev/Landscape-Generator',
        vh: 2.5,
    },
    {
        id: 'tictactoe',
        name: 'Recursive Ultimate Tic-Tac-Toe',
        skills: 'Javascript, Machine Learning',
        description: 'The Ultimate Tic-Tac-Toe is a game where you play tic-tac-toe inside a bigger tic-tac-toe. This implementation let you choose the deepness of the game and allow you to play against a computer using the Monte Carlo Tree Search algorithm. This algorithm was used to defeat professionals chess and go players.',
        markdown: tictactoe_md,
        try_it: 'https://indiana-dev.github.io/n-Ultimate-Tic-Tac-Toe/',
        vh: 2.5,
    }
]

export function getTotalHeight(vh) {
    let h = 0
    for (let p of Projects) {
        h += vh*p.vh
    }
    return h
}

export default function getProjects() {
    let projects = []
    let offset = 0

    console.log('getProjects()')

    Projects.forEach(p => {
        projects.push(new ProjectData(p, offset))
        offset += p.vh * window.innerHeight
    })

    return projects
}
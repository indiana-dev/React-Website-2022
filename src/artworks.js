import ArtworkData from "./classes/ArtworkData"

const Artworks = [
    {
        name: 'Luminous Fantasy',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur but also Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagesPath: 'luminous',
        video: true,
        imagesCount: 4,
        vh: 4,
    },
    {
        name: 'Concentricated',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        imagesPath: 'concentricated',
        imagesCount: 6,
        vh: 2,
    }, {
        name: 'Digital Noodles',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur but also Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagesPath: 'noodles',
        imagesCount: 8,
        vh: 2,
    }, 
    // {
    //     name: 'Luminous Fantasy',
    //     description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur but also Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //     imagesPath: 'luminous',
    //     video: true,
    //     imagesCount: 4,
    // },
]

const animationSpace = 1.5
const startAnimationSpace = 1

export function getTotalArtworksHeight(vh) {
    let h = startAnimationSpace * window.innerHeight
    for (let p of Artworks) {
        h += vh*(p.vh+animationSpace)
    }
    return h
}


export default function getArtworks() {
    let projects = []
    let offset = startAnimationSpace * window.innerHeight

    console.log('getArtworks()')

    Artworks.forEach(p => {
        projects.push(new ArtworkData(p, offset))
        offset += (p.vh+animationSpace) * window.innerHeight
    })

    return projects
}
class ProjectData {
    constructor(p, offset) {
        this.name = p.name
        this.skills = p.skills
        this.description = p.description
        this.imagesPath = p.imagesPath
        this.imagesCount = p.imagesCount
        this.video = p.video
        this.vh = p.vh
        this.offset = offset
    }

    scrollTrigger(options) {
        return {
            ...options,
            trigger: '.content',
            start: 'top top-=' + this.offset,
            end: "+=" + (100*this.vh) + "%",
            // fastScrollEnd: true,
        }
    }
}

export default ProjectData
class ProjectData {
    constructor(p, offset) {
        this.id = p.id
        this.name = p.name
        this.skills = p.skills
        this.description = p.description
        this.vh = p.vh
        this.offset = offset
    }

    scrollTrigger(options) {
        return {
            ...options,
            trigger: '.content',
            start: 'top top-=' + this.offset + 'px',
            end: "+=" + (100*this.vh) + "%",
            
        }
    }
}

export default ProjectData
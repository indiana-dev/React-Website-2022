class ProjectData {
    constructor(p, offset) {
        this.id = p.id
        this.name = p.name
        this.skills = p.skills
        this.description = p.description
        this.markdown = p.markdown
        this.github = p.github
        this.try_it = p.try_it
        this.project_page = p.project_page
        this.vh = p.vh
        this.offset = offset
        this.first = offset === 0
    }

    scrollTrigger(options) {
        return {
            ...options,
            trigger: '.content',
            start: this.first ? 'top center' : 'top top-=' + this.offset + 'px',
            end: "+=" + (100*(this.vh + 0.5*this.first)) + "%",
            fastScrollEnd: 10000,
        }
    }
}

export default ProjectData
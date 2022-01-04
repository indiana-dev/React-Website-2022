class ProjectData {
    constructor(p, offset, contentRef) {
        this.id = p.id
        this.name = p.name
        this.skills = p.skills
        this.description = p.description
        this.vh = p.vh
        this.offset = offset
        this.first = offset === 0
        this.contentRef = contentRef
    }

    scrollTrigger(options) {
        return {
            ...options,
            trigger: this.contentRef.current,
            start: this.first ? 'top center' : 'top top-=' + this.offset + 'px',
            end: "+=" + (100*(this.vh + 0.5*this.first)) + "%",
            fastScrollEnd: 10000,
        }
    }
}

export default ProjectData
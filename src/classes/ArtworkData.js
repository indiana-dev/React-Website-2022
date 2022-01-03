class ArtworkData {
    constructor(p, offset, contentRef) {
        this.name = p.name
        this.description = p.description
        this.imagesPath = p.imagesPath
        this.imagesCount = p.imagesCount
        this.video = p.video
        this.vh = p.vh
        this.offset = offset
        this.contentRef = contentRef
    }

    scrollTrigger(options) {
        return {
            ...options,
            trigger: this.contentRef.current,
            start: 'top top-=' + this.offset,
            end: "+=" + (100*this.vh) + "%",
            fastScrollEnd: true,
        }
    }
}

export default ArtworkData
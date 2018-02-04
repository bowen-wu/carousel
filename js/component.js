function Carousel({clickIndex,picContainer,picNum,picWidth}) {
    this.clickIndex = clickIndex
    this.picContainer = picContainer
    this.picNum = picNum
    this.picWidth = picWidth
    this.init()
}
Carousel.prototype.init = function () {
    this.index = 0
    this.bindEvents()
    this.timer = this.autoPlay()
    this.hoverAndPage()
}
Carousel.prototype.bindEvents = function () {
    this.clickIndex.each((indexInner, element) => {
        this.clickIndex.eq(indexInner).on('click', () => {
            this.clickIndex.eq(indexInner).addClass('active').siblings().removeClass('active')
            this.picContainer.css({
                transform: 'translate(-' + this.picWidth * indexInner + 'px)'
            })
            this.index = indexInner
        })
    }).eq(0).triggerHandler('click')
}
Carousel.prototype.hoverAndPage = function () {
    this.picContainer.hover(() => {
        clearInterval(this.timer)
    }, () => {
        this.timer = this.autoPlay()
    })
    $(document).on('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(this.timer)
        } else {
            this.timer = this.autoPlay()
        }
    })
}
Carousel.prototype.autoPlay = function () {
    return setInterval(() => {
        this.index++
        this.clickIndex.eq(this.index % this.picNum).triggerHandler('click')
    }, 2500)
}


!function () {
  let view = $('#coursel')
  let controller = {
    view: null,
    $index: null,
    $wrapper: null,
    $lis: null,
    $picWidth: null,
    index: 0,
    timer: null,
    init() {
      this.view = view
      this.$index = this.view.find('#index > ul > li')
      this.$wrapper = this.view.find('#window > #wrapper')
      this.$lis = this.$wrapper.children()
      this.$picWidth = this.$lis.eq(0).width()
      this.bindEvents()
      this.timer = this.autoPlay()
      this.hoverAndPage()
    },
    bindEvents() {
      this.$index.each((indexInner, element) => {
        this.$index.eq(indexInner).on('click', () => {
          this.$index.eq(indexInner).addClass('active').siblings().removeClass('active')
          this.$wrapper.css({
            transform: 'translate(-' + this.$picWidth * indexInner + 'px)'
          })
          this.index = indexInner
        })
      }).eq(0).triggerHandler('click')
    },
    hoverAndPage() {
      this.$wrapper.hover(() => {
        clearInterval(this.timer)
      }, () => {
        this.timer = autoPlay()
      })
      $(document).on('visibilitychange', () => {
        if (document.hidden) {
          clearInterval(this.timer)
        } else {
          this.timer = autoPlay()
        }
      })
    },
    autoPlay() {
      return setInterval(() => {
        this.index++
        this.$index.eq(this.index % this.$lis.length).triggerHandler('click')
      }, 2500)
    }
  }
  controller.init(view)
}.call()
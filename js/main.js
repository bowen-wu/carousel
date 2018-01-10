$(() => {
    let $index = $('#index > ul > li')
    let $wrapper = $('#window > .wrapper')
    let $lis = $wrapper.children()
    let $picWidth = $lis.eq(0).width()
    let index = 0
    $index.each((indexInner,element) => {
        $index.eq(indexInner).on('click',() => {
            $index.eq(indexInner).addClass('active').siblings().removeClass('active')
            $wrapper.css({transform: 'translate(-' + $picWidth * indexInner + 'px)'})
            index = indexInner
        })
    }).eq(0).triggerHandler('click')

    let timer = autoPlay()
    $wrapper.hover(() => {
        clearInterval(timer)
    },() => {
        timer = autoPlay()
    })

    function autoPlay() {
        return setInterval(() => {
            index++
            $index.eq(index % $lis.length).triggerHandler('click')
        }, 2500)
    }
})
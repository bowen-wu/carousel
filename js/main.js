$(() => {
    let $index = $('#index > ul > li')
    let $carousel = $('.carousel')
    let $picWidth = $carousel.children().eq(0).width()
    let index = 0
    $index.each((indexInner,element) => {
        $index.eq(indexInner).on('click',() => {
            $index.eq(indexInner).addClass('active').siblings().removeClass('active')
            // 此处也可以使用 margin-left  .css({'margin-left': indexInner*$picWidth+'px'})
            $carousel.eq(0).css({transform:'translateX(-'+ indexInner*$picWidth+'px)'})
            index = indexInner
        })
    }).eq(0).addClass('active')
    let timer = null
    timer = autoPlay()
    $carousel.hover(() => {
        clearInterval(timer)
    }, () => {
        timer = autoPlay()
    })
    function autoPlay() {
        return setInterval(() => {
            // 如果用 if 判断，那么就需要使用 $index.eq(index).triggerHandler('click')
            // if(index >= $index.length){
            //     index = 0
            // }
            index++
            $index.eq(index % $index.length).triggerHandler('click')
        }, 2000)
    }
})
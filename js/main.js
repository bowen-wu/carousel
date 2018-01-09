$(() => {
    let $index = $('#index > ul > li')
    let $carousel = $('.carousel')
    let $picWidth = $carousel.children().eq(0).width()
    $index.each((index,element) => {
        $index.eq(index).on('click',() => {
            $index.eq(index).addClass('active').siblings().removeClass('active')
            $carousel.eq(0).css({transform:'translateX(-'+ index*$picWidth+'px)'})
        })
    }).eq(0).addClass('active')
})
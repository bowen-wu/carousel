$(() => {
    let $index = $('#index > ul > li')
    let $carousel = $('.carousel')
    let $picWidth = $carousel.children().eq(0).width()
    $index.each((index,element) => {
        $index.eq(index).on('click',() => {
            $index.eq(index).addClass('active').siblings().removeClass('active')
            // 此处也可以使用 margin-left  .css({'margin-left': index*$picWidth+'px'})
            $carousel.eq(0).css({transform:'translateX(-'+ index*$picWidth+'px)'})
        })
    }).eq(0).addClass('active')

    let timer = null
    let index = 0
    timer = setInterval(() => {
        // 如果用 if 判断，那么就需要使用 $index.eq(index).triggerHandler('click')
        // if(index >= $index.length){
        //     index = 0
        // }
        index++
        $index.eq(index%$index.length).triggerHandler('click')
    },2500)

})
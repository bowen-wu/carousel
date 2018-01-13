$(() => {
    let $index = $('#index > ul > li')
    let $wrapper = $('#window > .wrapper')
    let $lis = $wrapper.children()
    let $picWidth = $lis.eq(0).width()
    let index = 0
    clickEvent()

    let timer = autoPlay()
    $wrapper.hover(() => {
        clearInterval(timer)
    },() => {
        timer = autoPlay()
    })
    $(document).on('visibilitychange',() => {
        console.log(document.hidden)
        if(document.hidden){
            clearInterval(timer)
        }else{
            timer = autoPlay()
        }
    })

    // 工具函数
    function clickEvent() {
        $index.each((indexInner, element) => {
            $index.eq(indexInner).on('click', () => {
                $index.eq(indexInner).addClass('active').siblings().removeClass('active')
                $wrapper.css({
                    transform: 'translate(-' + $picWidth * indexInner + 'px)'
                })
                index = indexInner
            })
        }).eq(0).triggerHandler('click')
    }
    function autoPlay() {
        return setInterval(() => {
            console.log(new Date)
            index++
            $index.eq(index % $lis.length).triggerHandler('click')
        }, 2500)
    }
    
})
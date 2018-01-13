$(() => {
    let $index = $('#index > ul > li')
    let $wrapper = $('#window > #wrapper')
    let $lis = $wrapper.children()
    let $picWidth = $lis.eq(0).width()
    let index = 0

    clickEvent()
    let timer = autoPlay()
    hoverAndPage()
   
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
            index++
            $index.eq(index % $lis.length).triggerHandler('click')
        }, 2500)
    }
    function hoverAndPage(){
        $wrapper.hover(() => {
            clearInterval(timer)
        },() => {
            timer = autoPlay()
        })
        $(document).on('visibilitychange',() => {
            if(document.hidden){
                clearInterval(timer)
            }else{
                timer = autoPlay()
            }
        })
    }
})
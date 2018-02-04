!function () {
    let carousel = new Carousel({
        clickIndex: $('#index > ul > li'),
        picContainer: $('#window > #wrapper'),
        picNum: $('#window > #wrapper > li').length,
        picWidth: $('#window > #wrapper > li').eq(0).width(),
    })
}.call()
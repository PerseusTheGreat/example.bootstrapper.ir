$(function () {
    'use strict'

    $('.tooltip-left').tooltip({
        placement: 'left',
        offset: 2,
        container: 'body'
    })
    $('.tooltip-bottom').tooltip({
        placement: 'bottom',
        offset: 2,
        container: 'body'
    })
    $('.tooltip-viewport-left').tooltip({
        placement: 'left',
        offset: 2,
        container: '.container-viewport'
    })
    $('.tooltip-viewport-bottom').tooltip({
        placement: 'bottom',
        offset: 2,
        container: '.container-viewport'
    })
})

$(function () {
    'use strict'

    $('.tooltip-left').tooltip({
        placement: 'left',
        viewport: {
            selector: 'body',
            padding: 2
        }
    })
    $('.tooltip-bottom').tooltip({
        placement: 'bottom',
        viewport: {
            selector: 'body',
            padding: 2
        }
    })
    $('.tooltip-viewport-left').tooltip({
        placement: 'left',
        viewport: {
            selector: '.container-viewport',
            padding: 2
        }
    })
    $('.tooltip-viewport-bottom').tooltip({
        placement: 'bottom',
        viewport: {
            selector: '.container-viewport',
            padding: 2
        }
    })
})

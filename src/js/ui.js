// import docready from './lib/docready';

// docready(() => {});

$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover focus manual',
        options : {
            position: 'left'
        }
    })
})
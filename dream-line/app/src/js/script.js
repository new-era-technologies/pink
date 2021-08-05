'use strict';

//declare variables
const arts = document.querySelectorAll('.art');

//show description in art
arts.forEach(
    it => it.addEventListener('mouseenter', function() {
        this.children[0].children[0].style.opacity = 0.2;
        this.children[0].children[1].classList.add('show-descr');
    })
);

//hide description in art
arts.forEach(
    it => it.addEventListener('mouseleave', function() {
        this.children[0].children[0].style.opacity = 1;
        this.children[0].children[1].classList.remove('show-descr');
    })
);
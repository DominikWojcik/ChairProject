var offersCol = document.querySelectorAll('.offers__col');
console.log(offersCol);


for(var i=0; i<offersCol.length - 1; i++){
    offersCol[i].addEventListener('mouseover', function () {
        this.querySelector('div').style.display = 'none'
    })
}

for(var i=0; i<offersCol.length - 1; i++){
    offersCol[i].addEventListener('mouseout', function () {
        this.querySelector('div').style.display = 'block'
    })
}

/*slider*/

var sliderry = document.querySelectorAll('.slider__el');
sliderry[0].classList.add('slider__el-active');
var arrowLeft = document.querySelector('.slider__nav--prev');
var arrowRight = document.querySelector('.slider__nav--next');

function slide() {
    for(var i=0; i<sliderry.length; i++){
        if (sliderry[i].classList.contains('slider__el-active')){
            sliderry[i].classList.remove('slider__el-active');
        }else {
            sliderry[i].classList.add('slider__el-active');
        }

    }
}

arrowLeft.addEventListener('click',slide )
arrowRight.addEventListener('click',slide )


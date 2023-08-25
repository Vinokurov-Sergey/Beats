(function() {
    const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.slider-btn');
const items = document.querySelectorAll('.slider__item');

const rightstep = (currentPosition, sliderWidth) => {
    if (currentPosition >= sliderWidth * (items.length - 1)) {
        currentPosition = 0;
    } else {currentPosition += sliderWidth;}
    return currentPosition;
}

const leftstep = (currentPosition, sliderWidth) => {
    if (currentPosition == 0) {
        currentPosition = sliderWidth * (items.length - 1);
    } else {currentPosition -= sliderWidth;}
    return currentPosition;
}

for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];

    button.addEventListener('click', (e) => {
        e.preventDefault()

        const sliderWidth = slider.offsetWidth;
        let currentPosition = +slider.style.left.replace('px', '').replace('-', '')

        if (button.classList.contains('slider-btn__left')) {
            currentPosition = leftstep(currentPosition, sliderWidth);

        } else {
            currentPosition = rightstep(currentPosition, sliderWidth);
        }
        slider.style.left = `-${currentPosition}px`;
    })
    
}
})()


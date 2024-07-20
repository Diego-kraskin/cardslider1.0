const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const slider = document.querySelector('.slider');
const sliderList = slider.querySelector('.list');
const thumbnail = slider.querySelector('.thumbnail');

const updateThumbnail = () => {
    const thumbnailItems = thumbnail.querySelectorAll('.item');
    if (thumbnailItems.length > 0) {
        thumbnail.appendChild(thumbnailItems[0]);
    }
};

const moveSlider = (direction) => {
    const sliderItems = sliderList.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        updateThumbnail();
        slider.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }

    slider.addEventListener('animationend', () => {
        slider.classList.remove(direction);
    }, { once: true }); // Remove o evento após ser acionado uma vez
};

nextBtn.addEventListener('click', () => moveSlider('next'));
prevBtn.addEventListener('click', () => moveSlider('prev'));

/* 
    Задание 1:

    Доделать слайдер с урока

    1. Переписать код слайдера с урока по видео
    2. Доделать автоматическое переключение слайдов с интвервалом в 2 секунды

    Автопросмотр слайдов каждые 2 секунды запускается при событии, когда мышка наведена на боковые кнопки:
на правую - слайды перемещаются слева направо, на левую = слайды перемещаются справа налево
Остановить автопросмотр слайдов можно путем снятия наведения мыши с кнопок либо нажатием на кнопки.


*/
const btnPrev = document.getElementById("btn-prev"),
    btnNext = document.getElementById("btn-next"),
    slides = document.querySelectorAll(".slide"),
    dots = document.querySelectorAll(".dot");
let index = 0;

function activeSlide(i) {
    for (let el of slides) el.classList.remove("active");
    slides[i].classList.add("active");
    //console.log(slides);
}

function activeDot(i) {
    for (let el of dots) el.classList.remove("active");
    dots[i].classList.add("active");
}

function activeElement(i) {
    activeSlide(i);
    activeDot(i);
}

function prevSlide() {
    if (index > 0) index--;
    else index = slides.length - 1;
    activeElement(index);
    //clearInterval(timerNumber);
}

function nextSlide() {
    if (index < slides.length - 1) index++;
    else index = 0;
    activeElement(index);
    //clearInterval(timerNumber);

}

dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
        index = indexDot;
        activeElement(index);
    });
});


let timerNumber = 0;

function btnPrevSlide() {
    clearInterval(timerNumber);
    prevSlide();

}

function btnNextSlide() {
    clearInterval(timerNumber);
    nextSlide();

}

function stopAutoShow() {
    clearInterval(timerNumber);
}

function nextAutoShow() {
    clearInterval(timerNumber);
    timerNumber = setInterval(nextSlide, 2000);
}

function prevAutoShow() {
    clearInterval(timerNumber);
    timerNumber = setInterval(prevSlide, 2000);
}



btnPrev.addEventListener("click", btnPrevSlide);
btnNext.addEventListener("click", btnNextSlide);


btnPrev.addEventListener("mouseover", prevAutoShow);
btnPrev.addEventListener("mouseout", stopAutoShow);

btnNext.addEventListener("mouseover", nextAutoShow);
btnNext.addEventListener("mouseout", stopAutoShow);
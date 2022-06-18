/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/
const tabs = document.querySelectorAll(".btn"); //nodeList табов
const contents = document.querySelectorAll(".content"); //nodelist контента
let activeIndex = 0; // индекс активного элемента
const divSecondary = document.querySelector(".hidden"); //блок спрятанных кнопок

//показываем блок спрятанных кнопок
function showHiddenClass() {
    divSecondary.classList.remove("hidden");
}
//прячем блок спрятанных кнопок
function setHiddenClass() {
    divSecondary.classList.add("hidden");
}

// устанавливаем class active для tabs и contents с индексом index
function setActiveClass() {
    tabs[activeIndex].classList.add("active");
    contents[activeIndex].classList.add("active");
}

//очищаем class active для каждого элемента tabs и contents
function clearActiveClass() {
    for (element of tabs) {
        element.classList.remove("active");
    }

    for (element of contents) {
        element.classList.remove("active");
    }
}

//слушаем событие click для каждого tabs и делаем его активным по нажатию вместе с contents
tabs.forEach((element, elementIndex) => {
    element.addEventListener("click", () => {
        activeIndex = elementIndex;
        clearActiveClass();
        setActiveClass();
        //если нажата 3я кнопка показываем блок со спрятанными кнопками
        if (activeIndex < 2)
            setHiddenClass();
        else
            showHiddenClass();
    });
});
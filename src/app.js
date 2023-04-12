import { getRandomColor } from "./utils";

const initApp = () => {
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'Изменить цвет страницы';

    document.body.append(button);

    button.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();;
    });

};

export default initApp;

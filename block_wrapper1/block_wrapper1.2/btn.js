import { showPrice } from '../block_wrapper1.1/price.js';
import {chekKindLis} from './pizza.js';

export const btn = document.querySelector(`button`);
const body = document.querySelector(`body`);
const selectedLi = document.getElementsByClassName(`selected_ingredients`)[0].querySelector(`ul`);
const blWr2Li = document.getElementsByClassName(`block_wrapper2`)[0].querySelectorAll(`li`);
const img = document.querySelector(`img`);

export function btnOrder () {
    body.insertAdjacentHTML('afterbegin', `
        <div class="bg-modal">
            <div class="modal">
                <p>Заказ принят</p>
                <button>Ok</button>
            </div>
        </div>
        `); 
        const modal = document.getElementsByClassName(`modal`)[0];
        modal.style.border = '3px solid green';

        const btnMod = modal.querySelector(`button`);
        btnMod.addEventListener(`click`, () => {
            document.getElementsByClassName(`bg-modal`)[0].remove();
            selectedLi.querySelectorAll(`li`).forEach(li => li.remove());
            [...blWr2Li].forEach(li => li.classList.remove(`selected_li`));
            img.src = `./img/1.png`;
            showPrice();
            chekKindLis();
        });
}

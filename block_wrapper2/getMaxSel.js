import {addSelectedIngredients, delSelectedIngredients} from '../block_wrapper1/block_wrapper1.1/add_del_ingredients.js';
import { showPrice } from '../block_wrapper1/block_wrapper1.1/price.js';
import {chekKindLis} from '../block_wrapper1/block_wrapper1.2/pizza.js';

const getMaxSel = (e) => {
    if(e.target.tagName !== `UL`) {
        if (e.target.classList.contains(`selected_li`)) {
            delSelectedIngredients(e.target.textContent);
            e.target.classList.remove(`selected_li`);
        } else {
            if  (e.target.parentElement.getElementsByClassName(`selected_li`).length === (e.target.dataset.kind === `Основа` || e.target.dataset.kind === `Соус` ? 1 : 2)) {
                delSelectedIngredients(e.target.parentElement.getElementsByClassName(`selected_li`)[0].textContent);
                e.target.parentElement.getElementsByClassName(`selected_li`)[0].classList.remove(`selected_li`);
            }
            e.target.classList.add(`selected_li`);
            addSelectedIngredients(e.target);
        }
        showPrice();
        chekKindLis();
    }
};

export {getMaxSel};

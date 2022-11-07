import {arrBases, arrIngredients1, arrIngredients2, arrSauces} from './ingredients.js';

// const ulBase = document.getElementsByClassName(`base`)[0];
// const ulIngredients1 = document.getElementsByClassName(`ingredients_wr`)[0];
// const ulIngredients2 = document.getElementsByClassName(`ingredients_wr`)[1];
// const ulSauce = document.getElementsByClassName(`sauce`)[0];

const ulBase = createIngredients(arrBases, document.getElementsByClassName(`base`)[0]);
const ulIngredients1 = createIngredients(arrIngredients1, document.getElementsByClassName(`ingredients_wr`)[0]);
const ulIngredients2 = createIngredients(arrIngredients2, document.getElementsByClassName(`ingredients_wr`)[1]);
const ulSauce = createIngredients(arrSauces, document.getElementsByClassName(`sauce`)[0]);

function createIngredients (arr, ul) {
    arr.forEach(({name, price, kind}) => {
        ul.insertAdjacentHTML(`beforeend`, `
        <li data-price=${price} data-kind=${kind}>${name}</li>
        `);
    });
    return ul;
}

export {ulBase, ulIngredients1, ulIngredients2, ulSauce}


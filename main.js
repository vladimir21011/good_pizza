import { showPrice } from './block_wrapper1/block_wrapper1.1/price.js';
import {getMaxSel} from './block_wrapper2/getMaxSel.js';
import {ulBase, ulIngredients1, ulIngredients2, ulSauce} from './ingredients/ingredientsAdd.js';
import {selectedLi, delSelLi} from './block_wrapper1/block_wrapper1.1/selected_ingredients.js';
import { btn, btnOrder } from './block_wrapper1/block_wrapper1.2/btn.js';
import {chekKindLis} from './block_wrapper1/block_wrapper1.2/pizza.js';

btn.addEventListener(`click`, btnOrder);
showPrice();
chekKindLis();

ulBase.addEventListener(`click`, getMaxSel);

ulIngredients1.addEventListener(`click`, getMaxSel);

ulIngredients2.addEventListener(`click`, getMaxSel);

ulSauce.addEventListener(`click`, getMaxSel);

selectedLi.addEventListener(`click`, delSelLi);


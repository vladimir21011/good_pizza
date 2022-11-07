
const selectedLi = document.getElementsByClassName(`selected_ingredients`)[0].querySelector(`ul`);
const priceDiv = document.getElementsByClassName(`price`)[0];

export function showPrice () {
    if (priceDiv.querySelector(`p`)) {
        priceDiv.querySelector(`p`).remove();
    }
    priceDiv.insertAdjacentHTML('beforeend', `
        <p>Цена: ${[...selectedLi.children].reduce((sum, li) => sum + Number(li.dataset.price), 0)}$
    `);
}

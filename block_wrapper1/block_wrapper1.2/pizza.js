const selectedLi = document.getElementsByClassName(`selected_ingredients`)[0].querySelector(`ul`);
const img = document.querySelector(`img`);
const btn = document.querySelector(`button`);

export function chekKindLis () {
    let arr = [...selectedLi.children].map((li) => li.dataset.kind);
    let arrCopy = new Set(arr);
    arr = [...new Set(arrCopy)];
    if (arr.length) {
        img.src = `./img/${arr.length}.png`;
    } else {
        img.src = `./img/0.png`;
    }
    if (arr.length === 4) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

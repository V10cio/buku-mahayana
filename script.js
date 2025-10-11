/**
 * Toggles the visibility of all Pinyin elements on the page.
 */
function togglePinyin() {
    const pinyinElements = document.querySelectorAll('.pinyin');
    pinyinElements.forEach(el => {
        el.classList.toggle('hidden');
    });
}

/**
 * Toggles the visibility of all Indonesian translation elements on the page.
 */
function toggleIndonesian() {
    const translationElements = document.querySelectorAll('.translation');
    translationElements.forEach(el => {
        el.classList.toggle('hidden');
    });
}
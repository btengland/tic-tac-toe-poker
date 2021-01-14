console.log('The house always wins!')

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

const setCard = () => {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}
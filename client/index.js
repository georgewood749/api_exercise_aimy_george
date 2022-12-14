const { newCat } = require("../models/cat");

const fetchAsync = async (index) => {
    const rawData = await fetch(`http://localhost:3000/cats/${index}`);
    const catData = await rawData.json();
    console.log(catData);

    const catName = catData.name;
    const nameHeading = document.getElementById('catName')
    nameHeading.textContent = catName;

    // const catImg = catData.image;
    const img = document.getElementById('catImg')
    catImg.src = catData.image
}

let index = 1;
fetchAsync(index).catch(err => console.log(err))

const button = document.getElementById('nextCat');
button.addEventListener('click', () => {
    index++
    if (index === 4) {
        index = 1;
    }
    fetchAsync(index).catch(err => console.log(err))
})

const newCatButton = document.getElementById('addCat')
newCatButton.addEventListener('click', () => {
    newCat
})

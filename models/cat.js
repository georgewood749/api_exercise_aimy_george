const catData = require('../data');

class Cat {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.image = data.image;
    }

    static get all() {
        const cats = catData.map(cat => new Cat(cat));
        return cats;
    }

    static findById(id) {
        const catsData = catData.filter(cat => cat.id == id)[0];
        const cat = new Cat(catsData);
        return cat;
    }

    static newCat(cat) {
        const newCatId = catData.length + 1;
        const newCat = new Cat({id: newCatId, ...cat})
        catData.push(newCat)
        return newCat
    }
}

module.exports = Cat;

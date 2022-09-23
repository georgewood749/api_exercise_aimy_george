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
        const catData = catData.filter(cat => cat.id == id)[0];
        const cat = new Cat(catData);
        return cat;
    }

    static newCat() {
        const newCatId = catData.length + 1;
        const newCat = new Cat({id})
    }
}

module.exports = Cat;

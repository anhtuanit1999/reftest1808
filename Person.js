class Person {
    constructor(name, age, weight = 100) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    sayHello() {
        console.log(`Xin chao toi ten la ${this.name}`);
    }
}

class Child extends Person {
    constructor(name, age, weight, toy) {
        super(name, age, weight);
        this.toy = toy;
    }

    get birthYear() {
        return 2020 - this.age;
    }

    set birthYear(value) {
        this.age = 2020 - value;
    }

    sayHello() {
        super.sayHello();
        console.log(`Xin chao toi ten la ${this.name}, thich choi ${this.toy}`);
    }
}

const tuan = new Child('Tuan', 10, 100, 'Oto');
console.log(tuan);

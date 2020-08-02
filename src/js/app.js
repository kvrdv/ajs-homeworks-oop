import sum from './basic';

console.log('worked'); // eslint-disable-line
console.log(sum([1, 2])); // eslint-disable-line

class Character {
  constructor(hero) {
    this.name = hero.name; // имя
    this.type = hero.type; // тип
    this.health = 100; // уровень жизни
    this.level = 1; // уровень персонажа
    this.attack = hero.attack; // атака
    this.defence = hero.defence; // защита

    // Проверки соответствия требованиям:

    if ((typeof this.name) !== 'string') {
      throw new Error('Некорректный формат имени!');
    }

    if ((this.name.length < 2) || (this.name.length > 10)) {
      throw new Error('Некорректная длина имени!');
    }

    if ((typeof this.type) !== 'string') {
      throw new Error('Некорректный формат типа!');
    }

    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']; // варианты типов
    if (types.includes(this.type) == false) {
      throw new Error('Некорректный тип!');
    }

    // Предустановки атаки/защиты:

    if (this.type == 'Bowerman') {
      this.attack = 55;
      this.defence = 25;
    }

    if (this.type == 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    }

    if (this.type == 'Magician') {
      this.attack = 10;
      this.defence = 40;
    }

    if (this.type == 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }

    if (this.type == 'Undead') {
      this.attack = 25;
      this.defence = 25;
    }

    if (this.type == 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error('Нельзя повысить левел умершего!');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Лежачего не бьют!');
    }
  }
}

class Bowerman extends Character {
  constructor() {
    super({
      name: 'Лучник',
      type: 'Bowerman',
    });
  }
}

class Swordsman extends Character {
  constructor() {
    super({
      name: 'Мечник',
      type: 'Swordsman',
    });
  }
}

class Magician extends Character {
  constructor() {
    super({
      name: 'Маг',
      type: 'Magician',
    });
  }
}

class Daemon extends Character {
  constructor() {
    super({
      name: 'Демон',
      type: 'Daemon',
    });
  }
}

class Undead extends Character {
  constructor() {
    super({
      name: 'Нежить',
      type: 'Undead',
    });
  }
}

class Zombie extends Character {
  constructor() {
    super({
      name: 'Зомби',
      type: 'Zombie',
    });
  }
}

const bowerman = new Bowerman();
const swordsman = new Swordsman();
const magician = new Magician();
const daemon = new Daemon();
const undead = new Undead();
const zombie = new Zombie();

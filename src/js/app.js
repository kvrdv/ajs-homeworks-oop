import sum from './basic';

console.log('worked'); // eslint-disable-line
console.log(sum([1, 2])); // eslint-disable-line

export default class Character {
  constructor(name, type) {
    this.name = name; // имя
    this.type = type; // тип
    this.health = 100; // уровень жизни
    this.level = 1; // уровень персонажа
    this.attack = 0; // атака
    this.defence = 0; // защита

    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']; // варианты типов (классов персонажей)

    // проверки соответствия требованиям:
    if ((typeof this.name !== 'string') || (typeof this.name === undefined)) {
      throw new Error('Некорректный формат имени!');
    } else if (this.name.length < 2) {
      throw new Error('Имя должно состоять минимум из 2 букв!');
    } else if (this.name.length > 10) {
      throw new Error('Имя может состоять максимум из 10 букв!');
    } else if ((typeof this.type) !== 'string') {
      throw new Error('Некорректный формат типа!');
    } else if (types.includes(this.type) === false) {
      throw new Error('Такого класса не существует! Доступные классы: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie.');
    }

    // предустановки атаки/защиты:
    if (this.type === 'Bowerman') {
      this.attack = 55;
      this.defence = 25;
    } else if (this.type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    } else if (this.type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    } else if (this.type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    } else if (this.type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (this.type === 'Zombie') {
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
export default class Character {
  constructor(name, type) {
    this.name = name; // имя
    this.type = type; // тип
    this.health = 100; // уровень жизни
    this.level = 1; // уровень персонажа

    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']; // варианты типов (классов персонажей)

    // проверки соответствия требованиям:
    if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректное имя!');
    }

    if (typeof (type) !== 'string' || types.includes(type) === false) {
      throw new Error('Некорректный класс!');
    }
  }
}
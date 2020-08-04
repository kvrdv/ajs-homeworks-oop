import Character from '../app.js';

test('Bowerman Petr', () => {
  const received = new Character('Petr', 'Bowerman');
  const expected = { name: "Petr", type: "Bowerman", health: 100, level: 1, attack: 55, defence: 25 };
  expect(received).toEqual(expected);
});

test('Swordsman Natascha', () => {
  const received = new Character('Natascha', 'Swordsman');
  const expected = { name: "Natascha", type: "Swordsman", health: 100, level: 1, attack: 40, defence: 10 };
  expect(received).toEqual(expected);
});

test('Magician David', () => {
  const received = new Character('David', 'Magician');
  const expected = { name: "David", type: "Magician", health: 100, level: 1, attack: 10, defence: 40 };
  expect(received).toEqual(expected);
});

test('Daemon Димон', () => {
  const received = new Character('Димон', 'Daemon');
  const expected = { name: "Димон", type: "Daemon", health: 100, level: 1, attack: 10, defence: 40 };
  expect(received).toEqual(expected);
});

test('Undead Владимир', () => {
  const received = new Character('Владимир', 'Undead');
  const expected = { name: "Владимир", type: "Undead", health: 100, level: 1, attack: 25, defence: 25 };
  expect(received).toEqual(expected);
});

test('Zombie Dog', () => {
  const received = new Character('Dog', 'Zombie');
  const expected = { name: "Dog", type: "Zombie", health: 100, level: 1, attack: 40, defence: 10 };
  expect(received).toEqual(expected);
});

test('Bowerman 2', () => {
  const received = new Character(2, 'Bowerman');
  // const expected = 'Некорректный формат имени!';
  expect(received).toThrowError('Некорректный формат имени!');
});

// bowerman.levelUp();


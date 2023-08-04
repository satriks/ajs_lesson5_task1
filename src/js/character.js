export default class Character {
  constructor(name, type) {
    const types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (name.length > 2 && name.length <= 10) {
      this.name = name;
    } else { throw new Error('Имя должно быть от 2 до 10 символов'); }
    if (types.includes(type)) {
      this.type = type;
    } else { throw new Error('Не верный класс персонажа'); }

    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defense = null;
  }
}

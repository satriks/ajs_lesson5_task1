import Character from '../character';

test('Char test', () => {
  const char = new Character('test1', 'Bowerman');
  expect(char).toEqual({
    attack: null,
    defense: null,
    health: 100,
    level: 1,
    name: 'test1',
    type: 'Bowerman',
  });
});

test('Char name Error', () => {
  expect(() => new Character('42', '42')).toThrow(Error('Имя должно быть от 2 до 10 символов'));
});
test('Char class Error', () => {
  expect(() => new Character('424', '42')).toThrow(Error('Не верный класс персонажа'));
});
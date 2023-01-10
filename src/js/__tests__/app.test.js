import Validator from '../app';

test('Корректное имя', () => {
  const received = new Validator().validateUsername('user');
  expect(received).toBeTruthy();
});

test('Заглавные буквы', () => {
  const received = new Validator().validateUsername('USER');
  expect(received).toBeTruthy();
});

test('имя включает кириллицу', () => {
  const received = new Validator().validateUsername('userк');
  expect(received).toBeFalsy();
});
test('Меньше 4 цифр подряд ', () => {
  const received = new Validator().validateUsername('us944er');
  expect(received).toBeTruthy();
});

test('имя заканчивается цифрами', () => {
  const received = new Validator().validateUsername('useR__55');
  expect(received).toBeFalsy();
});
test('имя начинается с подчеркивания', () => {
  const received = new Validator().validateUsername('_user');
  expect(received).toBeFalsy();
});
test('имя начинается с цифры', () => {
  const received = new Validator().validateUsername('1user');
  expect(received).toBeFalsy();
});
test('имя заканчивается дефисом', () => {
  const received = new Validator().validateUsername('user-');
  expect(received).toBeFalsy();
});
test('имя начинается с дефиса', () => {
  const received = new Validator().validateUsername('-user');
  expect(received).toBeFalsy();
});
test('имя заканчивается подчеркиванием', () => {
  const received = new Validator().validateUsername('user_');
  expect(received).toBeFalsy();
});

test('Больше трех цифр подряд', () => {
  const received = new Validator().validateUsername('user1998');
  expect(received).toBeFalsy();
});

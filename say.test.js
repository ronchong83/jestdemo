const say = require('./say');

test('returns same value if not factor of 3 or 5 or 15', () => {
  expect(say(4)).toBe(4);
});

test('returns Fizz if factor of 3', () => {
    expect(say(33)).toBe('Fizz');
});

test('returns Fizz if factor of 5', () => {
    expect(say(95)).toBe('Buzz');
});

test('returns Fizz if factor of 15', () => {
    expect(say(60)).toBe('Fizz Buzz');
});
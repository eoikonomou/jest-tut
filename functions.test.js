const functions = require('./functions');

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

// Run function before and after each test in this file
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// Run function before the first test and after the last test
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

const nameCheck = () => console.log('checking name...');

describe('Checking names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be Brad Traversy object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Brad', lastName: 'Traversy' });
});

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test('Should be equal to or under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('There is no I in team', () => {
  expect('team').not.toMatch(/[I]/i);
});

test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then((user) => {
      expect(user.name).toEqual('Leanne Graham');
    });
});

test('User fetched name should be Leanne Graham (Async)', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

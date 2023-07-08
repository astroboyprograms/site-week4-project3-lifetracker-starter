// const config = require('./config');

// describe('config tests', () => {
//   test('process.env.NODE_ENV is set to test', () => {
//     expect(process.env.NODE_ENV).toBe('test');
//   });

//   test('IS_TESTING is true when process.env.NODE_ENV is test', () => {
//     expect(config.IS_TESTING).toBe(true);
//   });

//   test('PORT, SECRET_KEY, BCRYPT_WORK_FACTOR, IS_TESTING are exported', () => {
//     expect(config.PORT).toBeDefined();
//     expect(config.SECRET_KEY).toBeDefined();
//     expect(config.BCRYPT_WORK_FACTOR).toBeDefined();
//     expect(config.IS_TESTING).toBeDefined();
//   });

//   test('getDatabaseUri function is exported', () => {
//     expect(typeof config.getDatabaseUri).toBe('function');
//   });

//   test('getDatabaseUri uses DATABASE_URL if it exists', () => {
//     process.env.DATABASE_URL = 'postgres://localhost:5432/test_db';
//     expect(config.getDatabaseUri()).toBe(process.env.DATABASE_URL);
//   });

//   test('getDatabaseUri uses test database when IS_TESTING is true', () => {
//     delete process.env.DATABASE_URL;
//     config.IS_TESTING = true;
//     expect(config.getDatabaseUri()).toBe('postgresql://postgres:postgres@localhost:5432/lifetracker_test');
//   });

//   test('getDatabaseUri constructs database URI correctly', () => {
//     delete process.env.DATABASE_URL;
//     config.IS_TESTING = false;
//     expect(config.getDatabaseUri()).toBe('postgres://localhost:5432/lifetracker');
//   });
// });




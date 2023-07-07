const { 
    PORT, 
    SECRET_KEY, 
    BCRYPT_WORK_FACTOR, 
    IS_TESTING,
    getDatabaseUri 
} = require('./config');

describe("config", function () {
    test("check environment variables are imported correctly", function () {
        expect(PORT).toBeDefined();
        expect(SECRET_KEY).toBeDefined();
        expect(BCRYPT_WORK_FACTOR).toBeDefined();
        expect(IS_TESTING).toBeDefined();
    });

    test("process.env.NODE_ENV is set to test", function () {
        expect(process.env.NODE_ENV).toBe('test');
    });

    test("IS_TESTING variable is true when NODE_ENV is set to test", function () {
        expect(IS_TESTING).toBe(true);
    });

    test("getDatabaseUri function is exported", function () {
        expect(getDatabaseUri).toBeDefined();
    });

    test("getDatabaseUri returns correct URL", function () {
        if (process.env.DATABASE_URL) {
            expect(getDatabaseUri()).toBe(process.env.DATABASE_URL);
        } else if (IS_TESTING === true) {
            expect(getDatabaseUri()).toBe('postgresql://postgres:postgres@postgres:postgres/lifetracker_test');
        } else {
            expect(getDatabaseUri()).toBe('postgresql://localhost:5432/<lifetracker>');
        }
    });
});

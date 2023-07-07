require('dotenv').config();

const {
    PORT = 3001,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR = 13,
    NODE_ENV = 'development',
    DATABASE_USER,
    DATABASE_PASS,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_NAME = 'lifetracker',
    DATABASE_TEST_NAME = 'lifetracker_test',
    DATABASE_URL
} = process.env;

const IS_TESTING = NODE_ENV === 'test';

function getDatabaseUri() {
    if (DATABASE_URL) {
        return DATABASE_URL;
    }

    const baseDbName = IS_TESTING ? DATABASE_TEST_NAME : DATABASE_NAME;
    const connectionString = `postgresql://${DATABASE_USER}:${DATABASE_PASS}@${DATABASE_HOST}:${DATABASE_PORT}/${baseDbName}`;

    return connectionString;
}

module.exports = {
    PORT,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR,
    IS_TESTING,
    getDatabaseUri
};

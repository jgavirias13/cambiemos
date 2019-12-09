module.exports = {
    DEV: {
        port: process.env.PORT || 3200,
        dbHost: 'mongodb://127.0.0.1:27017',
        dbName: 'cambiemos'
    },
    TEST: {
        port: process.env.PORT || 3100
    }
}
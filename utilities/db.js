const mongoose = require('mongoose');

module.exports = () => {
    // SETUP Database connection
    const mongoDB = process.env.MONGODB_URI || process.env.MONGO_DB_LOCAL;
    mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error'));
};

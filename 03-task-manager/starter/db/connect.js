const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://stharavi01:ynvTYg50@nodeexpressprojects.0tjicns.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects';

const connectDB = (url) => {
    return mongoose.connect(connectionString);
};


module.exports = connectDB;


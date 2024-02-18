const mongoose = require('mongoose');


const databaseUrl = process.env.DATABASE_URL;

const dbconnect = async () => {
    await mongoose.connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then(() => {
          console.log('Database connected');
        })
        .catch((error) => {
          console.error('Error connecting to database:', error);
        });
      
}
export default dbconnect;

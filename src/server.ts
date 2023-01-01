import mongoose from 'mongoose';
import express from 'express';
import Routes from '@src/route';

async function main() {
    const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, PORT} = process.env;
    const connectionString = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/ms-template?authSource=admin`;
    mongoose.connect(connectionString, (err: unknown) => {
      if (err) {
        console.log(err);
        console.log('Unable to connect to MongoDB, exiting...');
        process.exit(1);
      }
      console.log('Connected to MongoDB');
    });

    const app = express();

    app.use(express.json());

    app.use('/api', Routes);

    app.listen(PORT, () => {
        console.log('Service is now running on port', PORT)
    });
};

main();
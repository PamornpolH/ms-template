import express from 'express';
import mongoose from 'mongoose';
import Routes from '@src/route';

async function main() {
    const { PORT } = process.env;
    const connectionString = `mongodb://admin:secret@mongo:27017/ms-template-db?authSource=admin`;
    mongoose.connect(connectionString, (err: unknown) => {
        if (err) {
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
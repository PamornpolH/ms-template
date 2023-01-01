import express from 'express';

async function main() {
    const {PORT} = process.env;
    const app = express();

    app.use(express.json());

    app.listen(PORT, () => {
        console.log('Service is now running on port', PORT)
    });
};

main();
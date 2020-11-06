import mongoose from 'mongoose';
import config from 'config';


class DB {
    private static instance: DB;

    private conntection

    constructor() {
        const instance = DB.instance;
        if (instance !== undefined) return instance;

        mongoose.connect(config.db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });
        this.conntection = mongoose.connection;

        this.conntection.on('error', this.errorHandler);
        this.conntection.once('open', this.connectHandler);
    }

    errorHandler(e: unknown) {
        console.error('db error: ', e);
        process.exit();
    }

    connectHandler() {
        console.log('db connected');
    }
}

export default DB;

import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/index";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb+srv://ejam:aHgmAlLgRXW45LUp@cluster0.usclk.mongodb.net/eJam_db?retryWrites=true&w=majority';
    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void {
        try {
            mongoose.connect(this.mongoUrl, {
                useUnifiedTopology: true,
                useNewUrlParser: true  // solve error DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
            })
            console.log('database connected')
        }
        catch (error) {
            console.log(error)
        }
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
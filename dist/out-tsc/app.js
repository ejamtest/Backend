"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const index_1 = require("./routes/index");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrv = new index_1.Routes();
        this.mongoUrl = 'mongodb+srv://ejam:aHgmAlLgRXW45LUp@cluster0.usclk.mongodb.net/eJam_db?retryWrites=true&w=majority';
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    mongoSetup() {
        try {
            mongoose.connect(this.mongoUrl, {
                useUnifiedTopology: true,
                useNewUrlParser: true // solve error DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
            });
            console.log('database connected');
        }
        catch (error) {
            console.log(error);
        }
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map
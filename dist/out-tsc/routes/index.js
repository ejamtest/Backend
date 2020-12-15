"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const index_1 = require("../controllers/index");
class Routes {
    constructor() {
        this.templateController = new index_1.TemplateController();
    }
    routes(app) {
        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        // get request  
        app.route("/getTemplate")
            .get(this.templateController.getTemplate);
        // post request
        app.route("/addTemplate")
            .post(this.templateController.addNewTemplate);
        // template detail (deleteById)
        app.route("/deleteTemplate/:templateId")
            .delete(this.templateController.deleteTemplate);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map
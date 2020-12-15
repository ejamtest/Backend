import { Request, Response } from "express";
import { TemplateController } from "../controllers/index";

export class Routes {
    public templateController: TemplateController = new TemplateController();

    public routes(app: any): void {
        app.use((req: Request, res: Response, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });
         
        // get request  
        app.route("/getTemplate")
            .get(this.templateController.getTemplate)
           

        // post request
        app.route("/addTemplate")
            .post(this.templateController.addNewTemplate);

        // template detail (deleteById)
         app.route("/deleteTemplate/:templateId")
            .delete(this.templateController.deleteTemplate);
    }
}
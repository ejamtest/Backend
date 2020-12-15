import * as mongoose from "mongoose";
import { templateSchema } from "../models/index";
import { Request, Response } from "express";
import * as moment from 'moment';

const Template: any = mongoose.model("template", templateSchema);

export class TemplateController {
    public addNewTemplate(req: Request, res: Response): void {
        let requestedData = req.body;
        if(!req.body.url){
            let response = { status: 201, msg: 'Please send url'}
            res.send(response);
            return ;
        }
        if(!req.body.templateName){
            let response = { status: 201, msg: 'Please send template name.'}
            res.send(response);
            return ;
        }
        if(req.body.version.length==0){
            let response = { status: 201, msg: 'Please send version list.'}
              res.send(response);
              return ;
        }
        req.body.deployedAt = moment().format("YYYY-MM-DD");
        let newTemplate: any = new Template(req.body);
        newTemplate.save((err, template) => {
            if(err) {
                console.log(err)
                res.status(500);
                res.send({ status: 500, msg: err });
            }
           
			let response = { status: 200, msg: 'Template saved succcessfully.', template }
            res.json(response);
        });
    }

    public getTemplate (req: Request, res: Response): void {
        Template.find({}, (err, result) => {
            if(err) {
                console.log(err)
                res.status(500);
                res.send({ status: 500, msg: err });
            }
            let response = { status: 200, msg: 'Get all template succcessfully.', result }
            res.json(response);
        });
    }

    public deleteTemplate (req: Request, res: Response): void {
        if(!req.params.templateId){
            let response = { status: 201, msg: 'Please send template id'}
            res.send(response);
            return ;
        }
        Template.deleteOne({ _id: req.params.templateId }, (err, templateResult) => {
            if(err) {
                res.send(err);
            }
            let response = { status: 200, msg: 'Successfully deleted template!',}
            res.json(response);
            
        });
    }

}
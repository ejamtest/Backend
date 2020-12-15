"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateController = void 0;
const mongoose = require("mongoose");
const index_1 = require("../models/index");
const moment = require("moment");
const Template = mongoose.model("template", index_1.templateSchema);
class TemplateController {
    addNewTemplate(req, res) {
        let requestedData = req.body;
        if (!req.body.url) {
            let response = { status: 201, msg: 'Please send url' };
            res.send(response);
            return;
        }
        if (!req.body.templateName) {
            let response = { status: 201, msg: 'Please send template name.' };
            res.send(response);
            return;
        }
        if (req.body.version.length == 0) {
            let response = { status: 201, msg: 'Please send version list.' };
            res.send(response);
            return;
        }
        req.body.deployedAt = moment().format("YYYY-MM-DD");
        let newTemplate = new Template(req.body);
        newTemplate.save((err, template) => {
            if (err) {
                console.log(err);
                res.status(500);
                res.send({ status: 500, msg: err });
            }
            let response = { status: 200, msg: 'Template saved succcessfully.', template };
            res.json(response);
        });
    }
    getTemplate(req, res) {
        Template.find({}, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500);
                res.send({ status: 500, msg: err });
            }
            let response = { status: 200, msg: 'Get all template succcessfully.', result };
            res.json(response);
        });
    }
    deleteTemplate(req, res) {
        if (!req.params.templateId) {
            let response = { status: 201, msg: 'Please send template id' };
            res.send(response);
            return;
        }
        Template.deleteOne({ _id: req.params.templateId }, (err, templateResult) => {
            if (err) {
                res.send(err);
            }
            let response = { status: 200, msg: 'Successfully deleted template!', };
            res.json(response);
        });
    }
}
exports.TemplateController = TemplateController;
//# sourceMappingURL=index.js.map
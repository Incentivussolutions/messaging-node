const { WhatsAppCustom } = require('@vonage/messages');
const templateType = require("../../constants");
const templateHeaderServices = require("../templateHeaderServices");
const templateFooterServices = require("../templateFooterServices");

async function ConstructTemplate(templateConfig, languageCode, senderId, params, toNumber) {
    if (templateConfig.template_type == templateType.templateType.WhatsAppCustom) {
        var headerConfig = {};
        var footerConfig = {};

        var templateHeader = await templateHeaderServices.getTemplateHeaderByTemplateId(templateConfig.Id);
        var templateFooter = await templateFooterServices.getTemplateFooterByTemplateId(templateConfig.Id);
        if (templateHeader[0].dataValues != null) {
            headerConfig = templateHeader[0].dataValues;
        }
        if (templateFooter[0].dataValues != null) {
            footerConfig = templateFooter[0].dataValues;
        }

        var customTemplate = new WhatsAppCustom({
            custom: {
                type: "template",
                template: {
                    name: `${templateConfig.template_name}`,
                    namespace: `${templateConfig.template_key}`,
                    language: {
                        policy: "deterministic",
                        code: languageCode,
                    },
                    components: []
                }

            },
            to: toNumber.toString(),
            from: senderId.toString(),
        });

        if (headerConfig != null) {
            header = {};
            header["type"] = 'header';
            header["parameters"] = [];
            headerType = "";
            if (headerConfig.header_type == templateType.headerType.Text) {
                headerType = "text";
            }
            var templateHeader = GetPlaceHolders(headerConfig.header_text);
            var Parameters = ConstructParameters(templateHeader, header, params, headerType);
            customTemplate.custom.template.components.push(Parameters);
        }

        //Constrcut Body
        body = {};
        body["type"] = 'body';
        body["parameters"] = [];

        var templateBody = GetPlaceHolders(templateConfig.template_content);
        var bodyParameters = ConstructParameters(templateBody, body, params);
        customTemplate.custom.template.components.push(bodyParameters);
        //Construct Footer
        if (footerConfig != null) {
            footer = {};
            if (footerConfig.cta_button != "") {
                footer["type"] = "button";
                footer["index"] = "0";
                footer["sub_type"] = footerConfig.sub_type;
                footer["parameters"] = [];
                parameter = {};
                parameter["text"] = params[footerConfig.cta_button];
                parameter["type"] = "text";
                footer["parameters"].push(parameter);
            }
            customTemplate.custom.template.components.push(footer);
        }
        return customTemplate;
    }
}

function GetPlaceHolders(content) {
    return new Set(content.match(/{{([^}]+)}}/g));
}

function ConstructParameters(content, part, params, type = "text") {
    content.forEach(element => {
        var placeholderName = element.replace(/{{/g, '').replace(/}}/g, '');
        parameter = {};
        parameter["text"] = params[placeholderName];
        parameter["type"] = type;
        part["parameters"].push(parameter);
    });
    return part;
}

module.exports = { ConstructTemplate };
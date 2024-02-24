const { vonageConstant } = require("../../constants");
const dotenv = require("dotenv").config();
const fs = require('fs');
const { Vonage } = require('@vonage/server-sdk');
const { tokenGenerate } = require('@vonage/jwt');

const inbound=require("../../middleware/webhook-server");

const templateConfigServices = require("../templateConfigServices");
const clientServices = require("../clientsServices");
const tbTargetQueueServices = require("../targetQueueServices");

const customTemplate = require("./ConstructCustomTemplate");

const aclPaths = {
    "paths": {
        "/*/rtc/**": {},
        "/*/users/**": {},
        "/*/conversations/**": {},
        "/*/sessions/**": {},
        "/*/devices/**": {},
        "/*/image/**": {},
        "/*/media/**": {},
        "/*/knocking/**": {},
        "/*/legs/**": {}
    }
}

function readPrivateKey(Path) {
    try {
        const data = fs.readFileSync(Path, 'utf8');
        // console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

async function sendWhatsappMessage(request) {

    if (request == null || request.AccountId == null || request.TemplateId == null) {
        throw new Error("AccountId/TemplateId cannot be empty");
    }
    var clientInfo = await clientServices.getClientByKey(request.AccountId);
    if (clientInfo[0].dataValues == null) {
        throw new Error("The client doesnot exist");
    }

    var whatsappConfig = null;
    var templateConfig = null;
    var languageConfig = null;

    var templateConfigRepo = await templateConfigServices.getTemplateConfigByTemplateId(request.TemplateId);
    if (templateConfigRepo != null) {
        templateConfig = templateConfigRepo[0].dataValues;
        whatsappConfig = templateConfig.WhatsappConfig.dataValues;
    }

    if (templateConfig != null && whatsappConfig != null) {

        languageConfig = templateConfig.Language.dataValues;

        const token = tokenGenerate("aaaaaaaa-bbbb-cccc-dddd-0123456789ab", readPrivateKey(whatsappConfig.key_file), {
            //expire in 24 hours
            exp: Math.round(new Date().getTime() / 1000) + 86400,
            sub: "alice",
            acl: aclPaths,
        });

        const vonage = new Vonage({
            apiKey: whatsappConfig.api_key,
            apiSecret: whatsappConfig.api_secret,
            applicationId: whatsappConfig.application_id,
            privateKey: readPrivateKey(whatsappConfig.key_file)
            // ,
            // jwtOptions:{jti:token}
        });

        var constructedTemplate = await customTemplate.ConstructTemplate(templateConfig, languageConfig.code, whatsappConfig.sender_id, request.Parameters, vonageConstant.TO_NUMBER);
        request.Parameters.PhoneNo.split(',').forEach(element => {
            constructedTemplate.to = element;
            vonage.messages.send(
                constructedTemplate
            ).then(resp=>inbound.fetchMessageLog(resp.messageUUID))
            // ).then(resp => console.log("Whatsapp Success Log:" + resp.messageUUID))
                .catch(err =>
                    console.log("Whatsapp Error Log:" + err));
        });
        var isTargetQueueCreated = CreateTargetQueue(request, clientInfo[0].dataValues.client_authkey);

    }

    async function CreateTargetQueue(request, auth_key) {
        TbTargetQueue = {
            auth_key: auth_key,
            request_data: JSON.stringify(request),
            send_status: 1
        };
        var test = await tbTargetQueueServices.createTargetQueue(TbTargetQueue);
    }
async function readMessage()
{
    // vonage.channel.get(messageId, (err, data) => {
    //     if (err) {
    //       console.error('Error reading message:', err);
    //     } else {
    //       console.log('Message details:', data);
    //     }
    //   });

    inbound.fetchMessageLog();
}
};

module.exports = { sendWhatsappMessage };
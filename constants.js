const errorConstants={
    VALIDATION_ERROR:400,
    UNAUTHORIZED:401,
    FORBIDDEN:403,
    NOT_FOUND:404,
    SERVER_ERROR:500,
    SUCCESS:200
};

const vonageConstant={
    VONAGE_API_KEY:"eed59afd",
    VONAGE_API_SECRET:"3kDN9FB0pruMsNGU",
    VONAGE_APPLICATION_ID:"572bd2b4-a4e5-4599-87f9-db8b73c6628f",
    VONAGE_PRIVATE_KEY_FILE:"data/keys/private.key",
    TO_NUMBER:919629409309,
    // WHATSAPP_NUMBER:919943169300,
    WHATSAPP_NUMBER:919943169300,
    WHATSAPP_TEMPLATE_NAMESPACE :"d2ec0a66_e605_4c2e_a288_c31ba254a2d5",
    WHATSAPP_TEMPLATE_NAME :"invoice",
};

const templateType={
    WhatsAppTemplate:1,
    WhatsAppCustom:2,
    WhatsAppAudio:3,
    WhatsAppFile:4,
    WhatsAppImage:5
};
const headerType={
    Text:1
};

module.exports={vonageConstant,errorConstants,templateType,headerType};
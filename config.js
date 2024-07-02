const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"qKd0t97C3VXiQqMUXzW+PfCux/Nizig8ot9A5yjBBUs="},"public":{"type":"Buffer","data":"8OiyvQ2vv8wzwxF96BGyoyfOkVkIvgEjOwIwP3b/Wwk="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"mPJ4G2JsJ/PJpnUucd6IshOwfm7AHU6goEoO60szM1M="},"public":{"type":"Buffer","data":"TfvmckaFP1yfkRqATO1R18x6uxPKewqGFz/tpVhg5i0="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"yJy2JyED7Gsg0MLcjWcFfpYtEe8q7gQm9TC3AMntsWc="},"public":{"type":"Buffer","data":"jnEEeJcb03cIJ+gpCiztuvkS5kcp7g7y8Ap2APrEEhk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"YPl7Is1LIcniBCmn+3uDgZqhk1ULV8b+DztsOVpuZ3o="},"public":{"type":"Buffer","data":"7OYNuS8JJSqJWVHQYpnyZVc+VWP5wpD2C8QMxJAR9Dg="}},"signature":{"type":"Buffer","data":"ZYhUtOHeNqgAlJ4NgnW5sBi1uEaehzVdq3oOeSkyIncW9Z+YO2mfQg0RBm/DzeNlUnpGfMAe36SNfMEslBlmAg=="},"keyId":1},"registrationId":213,"advSecretKey":"LFbx2lgFz0zAu+UwWY8CvRH76GsD0KU9GMU78j87NoE=","processedHistoryMessages":[{"key":{"remoteJid":"2349055498796@s.whatsapp.net","fromMe":true,"id":"5E14472F6BA16895D8935072447D5440"},"messageTimestamp":1719902714},{"key":{"remoteJid":"2349055498796@s.whatsapp.net","fromMe":true,"id":"413AE8D83035B24C05E1B34AA1689B1C"},"messageTimestamp":1719902715}],"nextPreKeyId":61,"firstUnuploadedPreKeyId":61,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"ul9MECyFTnOw5L1_cHIkRQ","phoneId":"8e11c945-ea64-4f11-ac5b-658c40e50576","identityId":{"type":"Buffer","data":"L+VM194yGGck01Cy8QwmKAdsxBo="},"registered":true,"backupToken":{"type":"Buffer","data":"1TQP8ftG0SRa3rrj4JEpp8d0/lc="},"registration":{},"pairingCode":"7CKD245V","me":{"id":"2349055498796:3@s.whatsapp.net"},"account":{"details":"COSgscAHENzDjrQGGAEgACgA","accountSignatureKey":"XOXY0RDNXCH2Z5FZre4nGhtauxZBe6yaS6su8tAxwRQ=","accountSignature":"hVkk8XsrdEiXpW4KWnDZ4UYsUSKhlpPr+r5b/XwzmBu7BDvUALU/gtJcEqtRAng4ag7qI9NMkVO90EMB1NmdAg==","deviceSignature":"oofExE8Jsn43RROpFu0lZWeJ2Qw8prAbKlQC8pZx/ppyOtOzWUM7iGcuiM99cyO5yOA583UuYa3l15kXAuO1Bw=="},"signalIdentities":[{"identifier":{"name":"2349055498796:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BVzl2NEQzVwh9meRWa3uJxobWrsWQXusmkurLvLQMcEU"}}],"platform":"android","lastAccountSyncTimestamp":1719902712}`
//
global.prefa = ["/" ]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}

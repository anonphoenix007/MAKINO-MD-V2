const fs = require("fs");
const chalk = require("chalk");
//const fs = require('fs-extra')
//if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


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


//
/*global.Owner = process.env.OWNER || "2347045174399";// Owner number
global.OwnerNumber = process.env.OWNER_NUMBER || "2347045174399" ;// Also owner number
global.ownertag = process.env.OWNER_TAG || "2347045174399";// Also owner number
global.sessID = process.env.sessID || ""; //Session ID here.
global.OwnerName = process.env.OWNER_NAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";// Owner Name
global.BotName = "🐦Makino-md-v2";//Do not change 🥵
global.packname = process.env.PACKNAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";//Sticker pack name.
global.author = "🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";//Do not change                            //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change or bot will not function.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
*/
global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"gNn9XyqYcLZmLHmoYrGS7a9FiolikZcXxSZTLYjN6F0="},"public":{"type":"Buffer","data":"TVC9gKPkCXXBZHp7iruAFvnEK8L7dlsAF076DvdQO34="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"eD9sFwFy8cXP1hJ+U09j0bU1VphSSdRygowxAQFEiVQ="},"public":{"type":"Buffer","data":"Njm41YOlINlEZcSTv7QVXVZOhLjJmf7cxvtaTRw4M3U="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"+B2wJ/AV36LS6IwZn+2aEy4l7QKFliT/ezG5pRzE2V0="},"public":{"type":"Buffer","data":"G3LEQKFuFsA+KM24Yrfagph9AXDoskwcYoELZl3oD2c="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"0FpVzf1jg6kBeYWD4bkLd+LjyhEtH/REnqQrYqB4SUE="},"public":{"type":"Buffer","data":"HbG1TTlojq/wzDoVzm1rPLiYBY6mFoQgYx2eseScfBg="}},"signature":{"type":"Buffer","data":"SN3/3x4LnEElB5kMR3emS6zC78/y/tiInjrXZNybLJ5HNS0c+BDnw2s7R7dCJyByMbMCe/LIK5IsEG1X5VhLhA=="},"keyId":1},"registrationId":172,"advSecretKey":"xRVt808xc8NEwygp5tQ+aJpu8sZvKT2sGLCZKQoNxqc=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"2PRRhc_lSlmuXv5srLqEFw","phoneId":"929858e3-727b-4c98-a7a2-36bf0771ce4a","identityId":{"type":"Buffer","data":"qSIDnCvrDWZe3yD980E/GPwU+BM="},"registered":true,"backupToken":{"type":"Buffer","data":"1p0Jk5k0XRh++COJs4p9hsgVZM4="},"registration":{},"pairingCode":"RM7MMWWD","me":{"id":"263777499942:2@s.whatsapp.net"},"account":{"details":"CLHO4O0FEOXeg7QGGAEgACgA","accountSignatureKey":"kAseTLTAn4NDBeQMkhNxp0IT3FOSmQq30yD0rmmhagc=","accountSignature":"eDiQok19vxOT7ZOrar9j0T57T7tjqkrJfeye8vWFJkMHrI9UTgPaBoDmdGR7JNqRfwTAEB4q+ocEMxSQj//kCQ==","deviceSignature":"jkRGwHh9dNoP1xCripgPjeKmm1oGpMClmY5eUAEorlqH4QJrn1/Eb9oc4WNNwpEaju8Rp2zzJRFh0Emou3eMjg=="},"signalIdentities":[{"identifier":{"name":"263777499942:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZALHky0wJ+DQwXkDJITcadCE9xTkpkKt9Mg9K5poWoH"}}],"platform":"android","lastAccountSyncTimestamp":1719725939,"myAppStateKeyId":"AAAAAGv5"}`
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
//
global.sessionName = "session";                          //Do not change.


//
global.prefa = ["/"];
//process.env.PREFIX || "/";// Prefix                                 //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Lagos, Nigeria";                   
global.reactmoji = "🐦";
global.themeemoji = "😏";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };
global.websitex = "https://github.com/anonphoenix007";
global.lolhuman = "KaysaS";


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

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};

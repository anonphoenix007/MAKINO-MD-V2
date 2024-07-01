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
global.sessionName = "{"noiseKey":{"private":{"type":"Buffer","data":"0PvuFPuumtmzybwRVbx7kdfZoI/lGaFUi9AKnSzEbV0="},"public":{"type":"Buffer","data":"A57gXq/y6Mh0CFMev6pJIeKNceTGMT3AybF/LM8yOy0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"8Mh6VVP+nuHrt56q4MiUKu5Pv+3RPJQku27MpVLzqnE="},"public":{"type":"Buffer","data":"iHYutsNJs8hTa0NrpMi+rS4aZJaIkQYBV8e2/y6qvzE="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"cOhwNTb8AxgI1M42hGb6X9UpIF5tDothyV2mb7cyaE8="},"public":{"type":"Buffer","data":"SvGsSWXF9XIjXob77qnibcJ6/tNM1kOuUBisF2sZo2U="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"MLqu7PTALr4r7D16qVDWt8jkBqW47m6NmkxZjC/6inw="},"public":{"type":"Buffer","data":"zdQ0pZvGPPUM4KXXHhF1NCUQVJ+iY+Xt/m8MiqvZGQQ="}},"signature":{"type":"Buffer","data":"5J2T1xkKiJE/JD7MoFduSDj9l5u0YNvK5tuB1ayfQxM/pIQ/c+DBMomoZglh9r+KTzjOfDq0OeEOUtw5n+yrhg=="},"keyId":1},"registrationId":171,"advSecretKey":"foKTdUwUmRUtK9+kJQi8BZywNT8hUm9sL2/vOZ4XatU=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"iSpETET_TVGTzZtsegQ-3A","phoneId":"ee0e9156-1cd2-4a5d-a70a-f2849a568663","identityId":{"type":"Buffer","data":"ujFzBrO/VTn7Dpz4GKTxW1J4NZA="},"registered":true,"backupToken":{"type":"Buffer","data":"Qr3Nllm2mNxzxDddj+BnrckukYI="},"registration":{},"pairingCode":"FWXJ4RVA","me":{"id":"254102926576:17@s.whatsapp.net"},"account":{"details":"CNjH+rMCEMj4ibQGGAIgACgA","accountSignatureKey":"TGZgWKdyyRxOyltLeoHF7DhI2+Fbxwz88RXEPPTnRC8=","accountSignature":"SLtm8tp3dqsyFNHhn+XmwXBp6gCflOCsS531TRB/daOrUVe3X8cktMk5nvhhuzMUzJVtvAmQ/0HNlXwbApb0BA==","deviceSignature":"uCtKqegC6b31gBVJ4Zf0ym1KrU1wMqvE7ezQ+Y747ksU5xgjBvX2Y9VQ80dqcuR7C1Ms35nsrukIBZS//JBIiQ=="},"signalIdentities":[{"identifier":{"name":"254102926576:17@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUxmYFincskcTspbS3qBxew4SNvhW8cM/PEVxDz050Qv"}}],"platform":"android","lastAccountSyncTimestamp":1719827542}";                          //Do not change.


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

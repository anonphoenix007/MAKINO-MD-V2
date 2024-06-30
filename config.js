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
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


//
/*global.Owner = process.env.OWNER || "254783816038";// Owner number
global.OwnerNumber = process.env.OWNER_NUMBER || "254783816038" ;// Also owner number
global.ownertag = process.env.OWNER_TAG || "2347045174399";// Also owner number
global.sessID = process.env.sessID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNyY2cvOTdpM3NzNVo3S2xhc0hvUVdOdDJiTHloV1NPQ3VRcGQ5V1hrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFNTZ3RrMUQwZTJiRk9mQVk5d1JhYVJ5M1JzdUdJWjVIY2FvMVptYWsxRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpS0NKMzBEbGFMYm85MmR0U2o2TTFLNEFoek5lQzBQdDMxSzVhbUdGVDNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWSEI2d2pTdDVnQ0srZnJ3SXk5MURPNVB0VFdyUHJIbm9zK2h3WE9RVWp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFdHdzb3lnWGR5ZWhYTVVqMTNsa0tJdGxBVDhlNG44dWZCYmtrL01CbnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZEZlRzR2JxUGpwU05zOGZGWnlRUkhrNE9yR2p0ei9sMCtDS3ExbUUrbDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdOdTVQNDFyVklBQThIZlk4Y0MxVnJKZS93YzR6ZVZoVStRTUpaRzZVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDhRRE9VYmlEUk9LZy8rVkwxTkh4ZkNCVmZ5MVRRanprakxpUDRUL2szQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktnMWkwNDc3blNlMkluWkVHamdSVmp5eUdZcmlHelowcFQwQnEvVnVDWHlnakFFd0FpM3RVTTJmcC9yU0Z4VVBZMXFTd2MzL1dNc2M5RkxoeGZucERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiJ0VUR3V2MzUmc3UmJFWk9SYVJJaUVuclNQakZEaEhDOEpPeEl1dzB6TkRvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0UWpNS1lmVlJGaVg2cHZtNjEydnB3IiwicGhvbmVJZCI6ImIxYzc4NjY4LWY5NGUtNGU4Yi1iN2U0LTBjZTE2OTQ1Mzc4ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiRjVBUlRYNEJKWWNSRER4WXNaZnZGQldvMHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGdmNzRjQ3RNR0RtVi9tTjJXTDh5UHBGWXJnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjIyWFg4RTJGIiwibWUiOnsiaWQiOiIyNTQ3ODM4MTYwMzg6NDFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05ibW5MMEhFSlc3Z0xRR0dCa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdWRlBxSFBWa1dSdlF2NHRRVUJTRkdBUE5DQ2lXdHpvaGhsbHJKSVU1bUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpRSFNzTk5hNUVDSUlDWFBzZFZTaFRreDZWc09IdjJyMTRJR25oL1VhWmRMTDR0N0M4OUJXSk9zRDc2NUIxRDVNN3dtZmluU1Z5bmZDMzFsSlRaQURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPbFUzOUZHVDJCaFU3KzVFRzlXaDVlZmQ1dURvTjJDTEd0T2I5YjRTMVZVVFBveHdKeHlsVXMxS1V1d00xYngrV29DdDAzZzhOVVdKdStGR29vSGRBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc4MzgxNjAzODo0MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSbFJUNmh6MVpGa2IwTCtMVUZBVWhSZ0R6UWdvbHJjNklZWlpheVNGT1pnIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NjcyMjI3fQ=="; //Session ID here.
global.OwnerName = process.env.OWNER_NAME || "reehh";// Owner Name
global.BotName = "🐦Makino-md-v2";//Do not change 🥵
global.packname = process.env.PACKNAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";//Sticker pack name.
global.author = "🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";//Do not change                            //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change or bot will not function.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
*/
global.Owner = ["Reehh"];
global.OwnerNumber = ["254783816038"];
global.ownertag = ["@hey"]; 
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
global.location = "Nairobi, Kenya";                   
global.reactmoji = "🧐";
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

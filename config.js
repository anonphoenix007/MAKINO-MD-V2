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
global.sessID = process.env.sessID || "{"noiseKey":{"private":{"type":"Buffer","data":"CBx4lBX7SCPYm+YyDfGPXO9NyfwKmRXZguK3/ezOonk="},"public":{"type":"Buffer","data":"Eu4KGvw0qsZWrMijmkOW/Ou291s4b3HHwICAlfNQjAc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"GGvt62GxwLAayRFLK2yeRv0VCmMdL7tEzpFSK7VURW8="},"public":{"type":"Buffer","data":"RfetHQ9sYIP8S2InSpwf6eSh8/mhZouuAym1RfLRHBc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"eParqh5jo5wsg6asMKpDBmw4HMQvEot/pTZLSOk0RGs="},"public":{"type":"Buffer","data":"+rw3BrgXaM16vlexgLD0T3W/ujRewmFir/SnOU3DsmY="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"cOga0YrjNnmyHdnmkGF9cb3JtlZEONO927/cI2+44U4="},"public":{"type":"Buffer","data":"x1oCDkp4PJwPds2sJSO5jwrv03DnqN7knDMjZX661TA="}},"signature":{"type":"Buffer","data":"I7lO+J/sCt/AU5tb7Qmy8U0a5gcigdgziulY5tvSm6YHO34VdJI1MufJAs6MfZBD35zneMjMZ8JpCNn9e1mwgg=="},"keyId":1},"registrationId":251,"advSecretKey":"61z6cxSnWgRaje5Ii5Q2STZT7M80OPsWfxrx1iBDI3c=","processedHistoryMessages":[{"key":{"remoteJid":"923192084504@s.whatsapp.net","fromMe":true,"id":"1C6FBBD64D7CAD7FD1245777E2ECD495"},"messageTimestamp":1717227736}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"6CFG49CyRW6J7iyNierzOg","phoneId":"7b80c994-daaa-4c3c-bf3c-7aa1203b7473","identityId":{"type":"Buffer","data":"fE+1rZG9YLXXp3ekTkNsDjCMPa4="},"registered":true,"backupToken":{"type":"Buffer","data":"nmpK5G5AqrIqVZg+AGrW9nTTQ3U="},"registration":{},"pairingCode":"PTLF1KDC","me":{"id":"923192084504:10@s.whatsapp.net","name":"PASSWORD HACKED"},"account":{"details":"CIP45bQGEMeh67IGGAEgACgA","accountSignatureKey":"tX6O5iARvo6ZbxjPpTGx+l1nwOZdGqcEuFUHn6HhDGs=","accountSignature":"FD2haGWzLPp9U6k0wIlC7jUdaMI9/ChsWDd7u4uUDPjXyDKe4YuFtuKoKyI09q03LlJDoEfHJlWMfWhtQR5rAQ==","deviceSignature":"H3Fxo0fUKASFx4TLP0bWdwaZ9YhakG8x/rdfGP+DywkMBHoGanOuBt07L2zQYcN0Nn4A962Tn46LkEne0RKFjw=="},"signalIdentities":[{"identifier":{"name":"923192084504:10@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BbV+juYgEb6OmW8Yz6UxsfpdZ8DmXRqnBLhVB5+h4Qxr"}}],"platform":"android","lastAccountSyncTimestamp":1717227731,"myAppStateKeyId":"AAAAAB8L"}"; //Session ID here.
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
global.sessID = process.env.sessID || ""; //Session ID here.
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

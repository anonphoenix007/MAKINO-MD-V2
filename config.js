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
global.Owner = ["𝖙𝖔𝖝𝖎𝖈 𝖎𝖘 𝖏𝖚𝖘𝖙 𝖉𝖎𝖋𝖋𝖊𝖗𝖊𝖓"];
global.OwnerNumber = ["+2348112918663"];
global.ownertag = ["𝖙𝖔𝖝𝖎𝖈 𝖎𝖘 𝖏𝖚𝖘𝖙 𝖉𝖎𝖋𝖋𝖊𝖗𝖊𝖓"]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.sessID = process.env.sessID || {"noiseKey":{"private":{"type":"Buffer","data":"+NMypPkGC8YW0oxXf768P9mN1U4W7MvRFhyus5LcH3Y="},"public":{"type":"Buffer","data":"euFoQnLTyHrd75DUqSIo8IuG1tTI/OYnkQDqJwuEaCM="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"0KuR08iCNikBJCAnUQEFSjymOvUWzJWiymX+Ehyf60Q="},"public":{"type":"Buffer","data":"VVu5Oc0SWtM5j3I87bcGrbqBYVL+GF00ZPB8CJBwrDk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"2DnA7/bIw4H3wF8KJDSJkB09zu4rfdVTNcdJ/4FnVW4="},"public":{"type":"Buffer","data":"G2d43X3sTVzxaw3lEJXb/10gvPKn70mwuCaJSS0yZVk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"gC/b4APT8SFjIZP8rYlcH2MuRMyMt2VKlnRanAp6sGM="},"public":{"type":"Buffer","data":"oQks4plRbIAAvWam3lSjO/uzVHGboIAwktJJFvrk6C4="}},"signature":{"type":"Buffer","data":"HoOWGTFOGumgkhEs5L1Gw5QSW90sOgIA+603vNpdkAoJPYhpKktuzEre4b2zCEeOc+GM84xJbVLiwyo5cFmDjw=="},"keyId":1},"registrationId":145,"advSecretKey":"XJEzWD+uUpBe3b/GlsNxvnYBS3pGF9fvwz60XXfJ9+0=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"JhDJ6o3qQOOblTUR6Blang","phoneId":"261dc6ba-8a21-455a-a610-962fcaed3a07","identityId":{"type":"Buffer","data":"23vyIYGkgtn3U2J/DQfk0ST14GU="},"registered":true,"backupToken":{"type":"Buffer","data":"KXymQF6v8Vy6WLRrsdAXwLDWiQI="},"registration":{},"pairingCode":"1XPM179G","me":{"id":"2348112918663:60@s.whatsapp.net"},"account":{"details":"CMr8pqMEEM2fhLQGGAEgACgA","accountSignatureKey":"MvHvP9NMHyNUByyR5dtVUHHJGNfTGzVMAkuwHpfCdho=","accountSignature":"cd+t4r3xJ+h7nklMHLI/3kyU4nrXnJp67p/dJsR/ROVVmriNOCfcWfOPqW5RN/6NRSqNQhVauGpusF/yhmw4BA==","deviceSignature":"QOZbI1bTSzIMKtGtNm0FQ3ZCGXi+8V/qI1aAafqKG2xkqk6/X3xz9NYwfns1KPEavj+Awc3mho8i/V2PK3dMjQ=="},"signalIdentities":[{"identifier":{"name":"2348112918663:60@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BTLx7z/TTB8jVAcskeXbVVBxyRjX0xs1TAJLsB6XwnYa"}}],"platform":"android","lastAccountSyncTimestamp":1719734235,"myAppStateKeyId":"AAAAAPFv"} //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
//
global.sessionName = "session";                          //Do not change.


//
global.prefa = ["!"];
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

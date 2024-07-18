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

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"QD7dBXg7kiBQ+6Mp6NxBqmg1Fm6I9MMHyz2VGnwmC0Q="},"public":{"type":"Buffer","data":"rAYQW0LwPb+awdgbDagkNlRKTG2QF0HuUxWYNUf/Z0c="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"QDs4ALPIvdc4/Vz8QoGPhwHlNcpX4qz02iisaUxjinw="},"public":{"type":"Buffer","data":"tKgVIrEVB1EFWQH/mkKHrQJfj0xKlPXdI1PNCYNH2BQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MK1YHpbtkPkY0gLHPMLudiY4ppHdAsjWbX0AjbPXpnY="},"public":{"type":"Buffer","data":"NFH8J8O5KRMqbPXl0nGalGwo5W+y0VpJtc0tU5obxSE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"0IPRpVAUVDMVqy9mQYlT5eO8+BvmoebPQuWKZL/EBEw="},"public":{"type":"Buffer","data":"HmpMT93aLkzr3I0nTReD+7kz+/SlVv/P1BfhfifBzHQ="}},"signature":{"type":"Buffer","data":"R/qyXOWAlI73RYw1hKb8X+kKTz0dhx/UNgoYk4mkv8+7WFfFw53rwhM1F2gpqu++qvwFPQYzl5dk2h+yWf/ggg=="},"keyId":1},"registrationId":99,"advSecretKey":"piA/B/ovFPgSfFd62MbvlDaxrB5LJ861q0oBzvNkSgo=","processedHistoryMessages":[{"key":{"remoteJid":"2348189862145@s.whatsapp.net","fromMe":true,"id":"465DAC0E525883415EA8C2037C1752B6"},"messageTimestamp":1721331393}],"nextPreKeyId":32,"firstUnuploadedPreKeyId":32,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Rk3YwgTxSKeZDlO5GugnYw","phoneId":"9dcb150a-9bb9-42b2-b178-1ba735d84d5c","identityId":{"type":"Buffer","data":"GOIJmPNw+YfveWTek4hr1pGUzOQ="},"registered":true,"backupToken":{"type":"Buffer","data":"0VvB/KGzz1NcfCyfDvRvZcW1vak="},"registration":{},"pairingCode":"5EH5Q1PQ","me":{"id":"2348189862145:39@s.whatsapp.net","name":"V_Cee"},"account":{"details":"CIf2scYFEK7d5bQGGAIgACgA","accountSignatureKey":"FsxiOz2VjBIzz6mhyRGogkohffcUExWt2649n98FHyA=","accountSignature":"QsP+ajuyRAmAyBPG9HsTKkbs2622RIBgwPxy1lQxJbW2r226TcfIVNdJaBb/CmhHKEBc6dz52Onemgb4auGADA==","deviceSignature":"4tJmuutdYuq+lUfoUixiyGssNSI7f5OifNfY72iQF+LgInb47sP0G/vS6mNcMBvBoU8dNo7NRQ+4LylxNIIzhQ=="},"signalIdentities":[{"identifier":{"name":"2348189862145:39@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRbMYjs9lYwSM8+pockRqIJKIX33FBMVrduuPZ/fBR8g"}}],"platform":"smba","lastAccountSyncTimestamp":1721331388,"myAppStateKeyId":"AAAAAB+H"}`
global.prefa = ["/"]

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

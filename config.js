tuconst fs = require("fs");
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


global.Owner = ["237699645224"];
global.OwnerNumber = ["237699645224"];
global.ownertag = ["237699645224"]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makima-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"wLxDopkLwXQ3ki9Lym0rwhpcBzfNQbYmUUbleXnYI34="},"public":{"type":"Buffer","data":"SI7VqR7fWP7OVXxsC4JZw04VI3Ym87HZJoXcixyvOkc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"MIP26uoe+DX5uLAHzdEDz7QbaeNTMBNm6c5QOM5dnmk="},"public":{"type":"Buffer","data":"JJwzX87M6VlmNVo8hon/oHZMn8QKnKeTJ7SbZYVVZ3w="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"QGsqQl7Ylzd9NsHGjIGM3Qa1bBclEqI/6JBFLyPiZ08="},"public":{"type":"Buffer","data":"WWcqvGTjNhuMcodF3eqetHUmNySUM5wfiy/KHtQG3Do="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"qLK2ookXx4PsduybNHYKH333VW2VNaUZIjVU8SG9FEI="},"public":{"type":"Buffer","data":"l2cdaSFa4ZtsXxzlx2CZ8IYQ53LK2/PBb8Vi4S7LTls="}},"signature":{"type":"Buffer","data":"dePfFba+5tsn4lwQkwBk8buEG7cGALrdpc27dnLzrYBkY3YlV/7yTZApdR8sR6IPrYeGDx2qOtx5CQ4ck/bGiA=="},"keyId":1},"registrationId":185,"advSecretKey":"J5rrat1GWX04oW5z0adyM3FL7zUlZFO1/fXqHHshD6Q=","processedHistoryMessages":[{"key":{"remoteJid":"237699645224@s.whatsapp.net","fromMe":true,"id":"B7323BD882CF2B0AE14327F5C04BDA9A"},"messageTimestamp":1720908368}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"l_tbFRi3RGGARGrkPe5vxg","phoneId":"f9e7c6fe-38ca-490b-ac6d-bea93f56afeb","identityId":{"type":"Buffer","data":"ODA/NN3egmj4xMZXexb/aTDdygA="},"registered":true,"backupToken":{"type":"Buffer","data":"Vl94RKHjtkPKyN/MNat8DoyrlH8="},"registration":{},"pairingCode":"KQ6Z57BQ","me":{"id":"237699645224:1@s.whatsapp.net"},"account":{"details":"CLWnmrAFEL/0y7QGGAEgACgA","accountSignatureKey":"kwVZyvbIRFAd/n3vX3bTE9FbufFLxLh3PPtNUB1rHC0=","accountSignature":"9/K/nSkBp9353Q+YelOx2GENEdHvIoklcWWvPcBjEqumDtTOiv7/086eFXbEILstSbrK3R/p3B6KHxtmBj7PCA==","deviceSignature":"+zqs5QQOTEZow/Wj3RT/mh/IE9tbwNKF45Q5PkJSHHj2qjmAhZOLc7q8kspUMsv4WHs7qgAocZ6x8v8GZXqriA=="},"signalIdentities":[{"identifier":{"name":"237699645224:1@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZMFWcr2yERQHf5971920xPRW7nxS8S4dzz7TVAdaxwt"}}],"platform":"android","lastAccountSyncTimestamp":1720908364}`
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

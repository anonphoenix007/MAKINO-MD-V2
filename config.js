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
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "MAKINO-MD-V2";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"KKjeWIPZOGDwt5K0Nx1zL/vb6OE51M8ACAOQw8kPGFA="},"public":{"type":"Buffer","data":"vz00zSlR9omB2+LvTEUWYbbrqB6pHkuMKnpCw34ObHI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"4AXSu8yAkmsONSNRcxcvmAT/kVjF0z44qjSNl0gM2Fo="},"public":{"type":"Buffer","data":"/wnaMJVoKAyBht4DbbWK9kLZ/gitpfDev2WS+QvLTFo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"YBefgSdlFau0NpCzBARkhcGo8RBqljx8JFFkmVpo5HY="},"public":{"type":"Buffer","data":"BGi1Fwg/meHcxZLKZ2Pe3wQ0xzPTDvrxHgL1n8vdXSE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"GPGGxqW7w4PM6fV+RvX3IR+zBPQPGPoY+6ZJmaC6kkc="},"public":{"type":"Buffer","data":"+coBBAG4S8EI/o9Qz3FOiL5nK7STtYIz0biVY2KGHkk="}},"signature":{"type":"Buffer","data":"ZW/WRXJoFw2+8mj4GgPaeuIl8kzCLbHqDRdH17MbbXWeysv8sboZY+AWmFDzby+0utl4WtmveLRtbR9IL44Qhg=="},"keyId":1},"registrationId":215,"advSecretKey":"VC8OOHGmSr8MuFwD0E39znGAeVwIMg9xPp1Zo+FB1UA=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"fjLnIudGRw6WikgX5joo8Q","phoneId":"317ed781-77cb-471f-82db-55e5361d33bd","identityId":{"type":"Buffer","data":"YybcUlq2TqvAlptS9w8zMdFME1o="},"registered":true,"backupToken":{"type":"Buffer","data":"En7GVgGHXC6BlpLEBxmT/LfQ248="},"registration":{},"pairingCode":"V3T4ANCM","me":{"id":"2348074439626:13@s.whatsapp.net"},"account":{"details":"CJed7AkQkqrntQYYBSAAKAA=","accountSignatureKey":"/LTkvUF0cELTdKxaBXV/L3FBjLzvBRh+8hinZglapHg=","accountSignature":"bG2e9RKwbCwi7LHWunVDSe4nBYYYzTf1aPGOUg62MKPlBOmYsHM5pwcZqlEfcrbrXtL0ZGZmUbyCsLRJBkSRCw==","deviceSignature":"Z0d8NlerzSh8EuMoqKGyj0ULvVBP4qzrt8XCk83SmdhrWjvxxLHe6puoQVOUx1BEmsRfCJzOMuzSfdNouUjVig=="},"signalIdentities":[{"identifier":{"name":"2348074439626:13@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bfy05L1BdHBC03SsWgV1fy9xQYy87wUYfvIYp2YJWqR4"}}],"platform":"android","lastAccountSyncTimestamp":1723454751,"myAppStateKeyId":"AAAAAE93"}`
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

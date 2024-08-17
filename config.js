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


global.Owner = ["25765809718"]; //like 2347080968564 
global.OwnerName =  ".`ဂျိုနသန်။/_လူ.』";
global.BotName = "♱MAKINO-MD-V2♱♡⃤";
global.packname = "♱MAKINO-MD-V2♱♡⃤";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!


global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"aPY3TAGX/7Ge5xZG2l55eB4JOaiN6x+zPtXEryenc0E="},"public":{"type":"Buffer","data":"2w4VJBwjjiLPir+tTvo0IacoXwAq/Xppk+Sbxwq8wFY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"YF0+d/TGP9pV9WtuHDZy7Gq+i3LZRY+1b4tXG3zZx10="},"public":{"type":"Buffer","data":"C5XEMOw87MTkOufKnhzKCqXstODtxxvNeFljo0vdRAc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"4I+ekA6Zc9hgklOccdIEVaDHJFuf19pJHzRuNxSUc1k="},"public":{"type":"Buffer","data":"ivTYfQA8kqjdWe8BZYOPiaarKAkZnSPKwo4p1OaOQ2g="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"OF+U9QRefdSF+vWkl7zHAl/s8THcHeTwDgVz+u8qclQ="},"public":{"type":"Buffer","data":"C/DI5KU44njezsyjKN/MwN/PBKtPDXSXf6tuK4QvQVo="}},"signature":{"type":"Buffer","data":"kb+0W+abD8KrmOOpNAQq65D5hWrXadW+EdZgql/cBfsbzRWoeRVbeZGY69eQ74lUjLZCId1P1B/wCGhbKrZfCg=="},"keyId":1},"registrationId":206,"advSecretKey":"x2Rv5cxqZxz0b29pws3Ov7jY3QZpjxKvJmIHL5j8PNQ=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"2gj7Q-D_SAC8F-p7ZHKMdA","phoneId":"b43b0486-250c-4a76-991c-0705f3e12fad","identityId":{"type":"Buffer","data":"d0KyBQB+Jgdh+9vI0AzhzrYV3hU="},"registered":true,"backupToken":{"type":"Buffer","data":"zWcBBYdplj25LaYEg8DmI52mRrQ="},"registration":{},"pairingCode":"W2QKJQ8T","me":{"id":"25765809718:16@s.whatsapp.net","name":".`ဂျိုနသန်။/_လူ.』"},"account":{"details":"CN2fgJ4HEJff/7UGGAQgACgA","accountSignatureKey":"o4pHtAdAcWasNXMEt3xGDVFba1flQaXbgjtIkrOebEM=","accountSignature":"Yjnkg98dNIJhR6N0Uz2DFqa1+pmQjXQTyE22F+oUkigrZnqxE39Mf7stqfU9NWKRKW7QW/iu+Ps03ujwd87+CA==","deviceSignature":"7wB4I5vqkqi5RQLlPl4YeJRkqj2wg1rfSvD6lb4nxEd5igaRKwrhl9RrEOeM5Z4HgK1Biq315xsEvGTGqIGnAQ=="},"signalIdentities":[{"identifier":{"name":"25765809718:16@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BaOKR7QHQHFmrDVzBLd8Rg1RW2tX5UGl24I7SJKznmxD"}}],"platform":"smba","lastAccountSyncTimestamp":1723854756,"myAppStateKeyId":"AAAAANGZ"}`
global.prefa = ['','!','.',','] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = [""] //Ignore,Unused

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
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}

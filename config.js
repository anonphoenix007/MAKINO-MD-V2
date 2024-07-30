const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = true;
global.autoReadGc = true;
global.autoReadAll = true;
global.antitags = true;


//auto functioner
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 


global.Owner = ["M ASWAD"];
global.OwnerNumber = ["923419159670"];
global.ownertag = ["923419159670"]; 
global.OwnerName =  "M ASWAD";
global.BotName = "M ASWAD";
global.packname = "M ASWAD";                             //Do not change.
global.author = "M ASWAD";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"GOqUFS9titV5VcOG6+heaPwznQdp91aPYCOkqM4H8HM="},"public":{"type":"Buffer","data":"VZy7X5u4KHpR1dU5mXNgGbcSsxsW6xbBjHPpYgrlQRw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"YNB8vQzfV4Pb54rCPUz6rGqaslGAo0OZgO4IaNoYHUI="},"public":{"type":"Buffer","data":"SzBVGQ0cXd8KYA2w5PhORjVRnZa71R0P0uJ40cxzZUw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"yFLqqA5RY7qhbkuKfNJ4O6I0xsRycGObKXxiLrU9Cno="},"public":{"type":"Buffer","data":"8D/AwACAMG8NHQQk8F1MsUiaAmPX83DfDoDswkP42nQ="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"AMfVN/8f96E5WMwSjCs//uP6stusYTKQBEsvcoWAzl0="},"public":{"type":"Buffer","data":"LMble/0+imcM1YfW1T0T6Zg5qWn454e9mFKnIkTjLWI="}},"signature":{"type":"Buffer","data":"xGBmKGv4nbLFL84/xpZMFaqmOsTBx+DncPJWADjQAnroTKxEE3uKZjb87AJXsrCf27tHmU48j/4tqdje/dxQhQ=="},"keyId":1},"registrationId":35,"advSecretKey":"XHcMmigSl5YSoYUQKkC9OVK0GvEFSOSrkUcQyPILsMg=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Msrr7zTrQMOMH9DnWlLgCw","phoneId":"ff8d86e5-bb64-4312-8af9-722e8607ad22","identityId":{"type":"Buffer","data":"pEaH4o1iv0b2gAr5se3/HCuJKgw="},"registered":true,"backupToken":{"type":"Buffer","data":"gs851DaDEJt9Eh4Ubh0CqBs8KDo="},"registration":{},"pairingCode":"AQNNDMN6","me":{"id":"923419159670:20@s.whatsapp.net"},"account":{"details":"CJGzosEGEIXjjrQGGAMgACgA","accountSignatureKey":"mxUyLzOiacYa4MDhsUI3a5D9GxYe3q83YjVnhoGwjSo=","accountSignature":"vAW8setCryJo0yRxXHoO88IzfmjI8yGZydvNHsfu/YrZeF45VpwsV6j52oOZa/YgI7IjU5ymUnGYydhqGERBAw==","deviceSignature":"VHVujcjZ8JthJcPHvDX7LoTMJdW2nI5azAgx5PIiC/mpTmI7J2keAiRxe+bIf8v5mXp4LINYnQCc1HIQzs4Xhg=="},"signalIdentities":[{"identifier":{"name":"923419159670:20@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZsVMi8zomnGGuDA4bFCN2uQ/RsWHt6vN2I1Z4aBsI0q"}}],"platform":"android","lastAccountSyncTimestamp":1719906706,"myAppStateKeyId":"AAAAAG4G"}`
global.prefa = ["."]

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

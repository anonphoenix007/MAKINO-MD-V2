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
global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"sDENRbrgjrtp37yr78WPgiFfooLJW3nyi80OIfW+yUE="},"public":{"type":"Buffer","data":"5yuFhDwRKv7TbxJOKkUTAs5VyDIr+byqRl9xWPsq7Q4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"OHK5vQ+UbinUc0oJmxFcgJPAu/1fXnV7wsTJGuTT8no="},"public":{"type":"Buffer","data":"ORtJYhsik0x1tOQc0AKUwL6wc+K1Rx1CQ59k3UE883o="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aMdXRVuSInbg29q7P/mfJbzILhU1NDsS0uS5XfPBQGQ="},"public":{"type":"Buffer","data":"lo5xIL95/UAeUM0cKH35SblOnfwlZm074uCX70VGA0w="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"QDNjx+8khdR8MHNR2HOvlPkXY8N8lVlLfuICXywJ9E8="},"public":{"type":"Buffer","data":"Vyx1mooPwgqSR8IgrwavzdDtR6wHtIFyHE0cd1vQkBY="}},"signature":{"type":"Buffer","data":"0h2HM0iRI0Gv9G1Azh60iHSqlNGu8G/qTKZ/MuPmR06sVJgwdot1RhHo+yehnybnOXXlcIWFI8vv15k5IyUzDQ=="},"keyId":1},"registrationId":157,"advSecretKey":"v81YVSb6BNsBhr5BsrwdsCCKBNvn/G83IeoJqQHTjFQ=","processedHistoryMessages":[{"key":{"remoteJid":"263777499942@s.whatsapp.net","fromMe":true,"id":"EEA85D36F618072E2182249C0D133EC4"},"messageTimestamp":1719613769},{"key":{"remoteJid":"263777499942@s.whatsapp.net","fromMe":true,"id":"2376E44258A04E360DD7A0111D6746C1"},"messageTimestamp":1719613769}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"1CyD0eH5S7m79t2gXiVGAQ","phoneId":"2f038647-0040-4c42-9f3f-f432ac8d4d78","identityId":{"type":"Buffer","data":"R+bUpXCgVmn3s6fw5zcHncfbYz4="},"registered":true,"backupToken":{"type":"Buffer","data":"UviWyTeJoCZMSTmG8xZWckVbgtk="},"registration":{},"pairingCode":"ZBQRW36H","me":{"id":"263777499942:1@s.whatsapp.net"},"account":{"details":"CLDO4O0FELry/LMGGAEgACgA","accountSignatureKey":"kAseTLTAn4NDBeQMkhNxp0IT3FOSmQq30yD0rmmhagc=","accountSignature":"oJjeCtBx6YqWWDzGbmUnQI5fbtSEbjOr6KAKj08kVDzd3J+AuL+7w8LPRipsv2GPGV7h4g/NInQdTKkKz/A4Aw==","deviceSignature":"x0ua0/hFR1I0wLg5gEFSBJknT78pC9RoqKJ/Lw4sOKjFAfuGiNdo1B2iLr4Wj609ry3KmlRpL0P4W3fZawEvCA=="},"signalIdentities":[{"identifier":{"name":"263777499942:1@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZALHky0wJ+DQwXkDJITcadCE9xTkpkKt9Mg9K5poWoH"}}],"platform":"android","lastAccountSyncTimestamp":1719613766}`; //Session ID here.
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

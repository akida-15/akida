//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes,
//pls give credit
//© 2022 Jiraya Bot Inc. Jiraya Bot 
//Thank you to Lord Buddha, Family and Myself
//═══════════════════════════════════════════════════════//
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const hx = require('hxz-api')
const os = require('os')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const simple = require('./lib/simple.js')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const ggs = require('google-it')
const googleImage = require('g-i-s')
const yts = require( 'yt-search')
const zee = require('api-alphabot')
const { removeBackgroundFromImageFile } = require('remove.bg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { pinterest } = require('./lib/pinterest')
const { uploadimg, upload } = require('./lib/uploadimg')
const { uploadImages } = require('./lib/uploadimage')
const { mediafireDl } = require('./lib/mediafire.js')

//══════════[ Leveling and Rpg ]══════════//

let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");

//══════════[ Setting ]══════════//

self = setting.self
autoread = setting.autoread
autoketik = setting.autoketik
autovn = setting.autovn
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
gaya1 = setting.gaya1
gaya2 = setting.gaya2
const fakeimage = fs.readFileSync ('./media/jirayapic1.jpg')
const thumb = fs.readFileSync ('./media/jirayatb.jpg')

//══════════[ Developer Number ]══════════//

developerNo = '34613110267',"34612538080"
developerName= 'العم جيرايا 💙'

//══════════[ Apikeys ]══════════//
//----credit goes to all the respected owner---//

dhakey = apikey.dhakey
KingOfBearKey = apikey.BearKey
Leyscoders = apikey.Leyscoders
Lolhuman = apikey.Lolhuman
Lolhumanbykur = apikey.Lolhuman2
porn1 = apikey.porn1
lolkey = apikey.lolkey1

//══════════[ Sticker WM ]══════════//

//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))

//══════════[ TIME ]══════════//

const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'مساء الخير 🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'طاب مسائك 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'طاب مسائك 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'طاب مسائك 🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'صباح الخير 🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'مساء الخير 🏙'
}

//══════════[ Module Export ]══════════//
		
module.exports = JirayaBot = async (JirayaBot, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Kolkata').format('dddd') + ', ' + moment.tz('Asia/Kolkata').format('LL')
		const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Kolkata').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Kolkata').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = JirayaBot.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `34613110267@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? JirayaBot.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await JirayaBot.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isBanchat = isGroup ? bancht.includes(from) : false
        const itsMe = mek.key.fromMe ? true : false
        m = simple.smsg(JirayaBot, mek)
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const conts = mek.key.fromMe ? JirayaBot.user.jid : JirayaBot.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? JirayaBot.user.name : conts.notify || conts.vname || conts.name || '-'    
    
        const isBanned = ban.includes(sender)
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await JirayaBot.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
		pporang = await JirayaBot.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)

//══════════[ Send file from url ]══════════//

const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
JirayaBot.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
JirayaBot.sendMessage(from, hasil, type, options).catch(e => {
JirayaBot.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}

//══════════[ Send message from url ]══════════//

        // sticker meme
            const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("finished");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            JirayaBot.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };

//══════════[ sendWebp ]══════════//

        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('Done');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        JirayaBot.sendMessage(from, media, MessageType.sticker, {quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }

//══════════[ Mess Dll ]══════════//

mess = {
wait: 'تتحمل...',
eror: 'أسف لقد حصل خطأ!!',
success: 'تم✓',
error: {
stick: 'هذا مو ستيكر يخوي !!',
Iv: 'خطا في الرابط !!'
},
only: {
nsfw: 'لم يتم تنشيط ميزة nsfw ، يرجى الاتصال بالمسؤول للتفعيل',
group: 'هذه الميزة للمجموعة فقط!!',
owner: 'هذا الامر فقط للمطور!!',
admin: 'هذا الأمر فقط للمشرف!!',
Badmin: 'شسمه حطني مشرف اول!!'
}
}

const math = (teks) => {
return Math.floor(teks)
}
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//══════════[ BUTTON ]══════════//

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
JirayaBot.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
JirayaBot.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await JirayaBot.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
JirayaBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await JirayaBot.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
JirayaBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await JirayaBot.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
JirayaBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

const listmsg = (from, title, desc, list) => {
let po = JirayaBot.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝗠𝗘𝗡𝗨","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
return JirayaBot.relayWAMessage(po, {waitForAck: true})
}
const reply = (teks) => {
JirayaBot.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
JirayaBot.sendMessage(hehe, teks, text)
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? JirayaBot.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : JirayaBot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
JirayaBot.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
const ftrol = { key : { participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 5555, status: 1, surface : 1, message: `${ucapanWaktu} ${pushname}`, orderTitle: `${ucapanWaktu} ${pushname}`, thumbnail: thumb, sellerJid: '0@s.whatsapp.net' }}}
const floc = { key : { participant : '0@s.whatsapp.net' }, message: { liveLocationMessage: { caption: `${ucapanWaktu} ${pushname}`, jpegThumbnail: thumb }}}
const fvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": {  "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const fvoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99999", "ptt": "true" }}}
const fgi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'gifPlayback': 'true', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const textImg = (teks) => { return JirayaBot.sendMessage(from, teks, text, {quoted: fgi, thumbnail: fs.readFileSync('./media/jirayatb.jpg')})}
const fakeitem = (teks) => { JirayaBot.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/jirayatb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${ucapanWaktu} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}

//══════════[ Storage ]══════════//

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
JirayaBot.sendMessage(to, media, type, { quoted: fgi, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}  

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//══════════[ Grup ]══════════//

const hideTag = async function(from, text){
let anugroupsend = await JirayaBot.groupMetadata(from)
let members = anugroupsend.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
JirayaBot.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/jirayapic1.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}
const hideTagKontak = async function(from, nomor, nama){
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
let anuvcardoke = await JirayaBot.groupMetadata(from)
let members = anuvcardoke.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
JirayaBot.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
const sendKontak = (from, nomor, nama) => {
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
JirayaBot.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
}

//══════════[ Automatic Reply ]══════════//

for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					JirayaBot.sendMessage(from, result, sticker, { quoted: mek})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					JirayaBot.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					JirayaBot.sendMessage(from, result, image, { quoted: mek})
					}
				  }

//══════════[ Rank Function ]══════════//

			const levelRole = getLevelingLevel(sender)
   	        	     var role = 'bronz'
   	     if (levelRole <= 3) {
   	         role = 'مبتدئ ⇇ 1'
   	     } else if (levelRole <= 5) {
   	         role = 'مبتدئ ⇇ 2'
   	     } else if (levelRole <= 7) {
   	         role = 'محترف ⇇ 1'
   	     } else if (levelRole <= 10) {
   	         role = 'محترف ⇇ 2'
   	     } else if (levelRole <= 12) {
   	         role = 'خبير ⇇ 1'
   	     } else if (levelRole <= 15) {
   	         role = 'خبير ⇇ 2'
   	     } else if (levelRole <= 18) {
   	         role = 'المحنك'
   	     } else if (levelRole <= 25) {
   	         role = 'العم'
   	     }
            
//══════════[ Antilink & Antivirtex ]══════════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 تم اكتشاف رابط خارجي 🐧 !!! 」*\nيخوي قلنا بدون روابط🗿.`)
setTimeout(() => {
JirayaBot.groupRemove(from, [kic]).catch((e) => { reply(`يجب على البوت ان يكون مشرفا`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('ضع إشارة مقروء\n'.repeat(300))
reply(`「 *تم اكتشاف فيروس 🐧 !!!* 」\n\nترقب رقمك 😍.`)
console.log(color('[KICK]', 'red'), color('Received a text virus!', 'yellow'))
JirayaBot.groupRemove(from, [sender])
}     

//══════════[ Dll ]══════════//

if (autoread){
JirayaBot.chatRead(from, "read")
} else if (autoketik) {
JirayaBot.updatePresence(from, Presence.composing)
} else if (autovn) {
JirayaBot.updatePresence(from, Presence.recording)
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIVATE \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
         if (isCmd && isBanned) {
            return console.log(color('[ USUÁRIO BANEADO ] Ignorando Comando', 'blue'), color(moment.tz('Asia/Kolkata').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
            if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]))
            if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]), 'En', color(groupName))
    
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	if (!mek.key.fromMe && !isOwner && self === true) return
switch (command) {

//══════════[ MENU FEATURES ]══════════//

case 'menu':
case 'جيرايا':

timestampe = speed();
latensie = speed() - timestampe
const { wa_version, os_version } = JirayaBot.user.phone
pemilik = `${owner}@s.whatsapp.net`
menu =
`*_${ucapanWaktu} @${senderr.split('@')[0]}_*

❏「 الوقت 」
${gaya1} *تاريخ* : ${tanggal}
${gaya1} *ساعة* : ${time}

❏「 معلومات البوت 」
${gaya1} *اسم البوت* : ${botname}
${gaya1} *اسم المطور* : ${ownername}
${gaya1} *رقم المطور* : @${pemilik.split('@')[0]}
${gaya1} *مود :* ${self ? "ذاتي" : "عام"}

❏「 قروبات 」
${gaya1} *قروب ملصقات* : "https://chat.whatsapp.com/LQKA0w2JjLi9QpLOhWxoA4"

${gaya1} *قروب البوت* : "https://chat.whatsapp.com/BSOfsSGjwzs0bXMPsOKQoz"

❏「 معلومات المستخدم 」
${gaya1} *الاسم* : ${pushname}
${gaya1} *البايو* : ${bio_user}
${gaya1} *الرقم* : @${senderr.split('@')[0]}
${gaya1} *حالة* : ${isOwner ? 'Owner' : 'User'}`
teks =
`_سلام عليكم_
_بوت جيرايا الافضل_
_اتمنى ${prefix}افيدكم_`
JirayaBot.sendMessage(from, { contentText: `${teks}`, footerText: `${menu}`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'الاوامر 🗃️' }, type: 1 },{ buttonId: `${prefix}روابط`, buttonText: { displayText: 'قروبات' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,pemilik]}}}, 'buttonsMessage')
break
case 'command':

listMsg = {
buttonText: 'الاوامر 📃',
footerText: `*${botname}*`,
description: `مرحبا صديقي @${senderr.split('@')[0]}, اضغط على الاوامر`,
sections: [
{
"title": `${tanggal} - ${time}`,
rows: [
{
"title": "قائمة المجموعة",
"description": `فيها اوامر لمشرفين المجموعه بس!`,
"rowId": `${prefix}grupmenu`
},
{
"title": "قائمة الالعاب",
"description": `فيها لعبة حقيقة او سؤال`,
"rowId": `${prefix}gamemenu`
},
{
"title": "قائمة صور الحيوانات ",
"description": `عرض اوامر الصور`,
"rowId": `${prefix}randomimage`
},
{
"title": "قائمة الملصقات",
"description": `اوامر الملصقات`,
"rowId": `${prefix}stickermenu`
},
{
"title": "قائمة الانمي",
"description": `اوامر الانمي`,
"rowId": `${prefix}animemenu`
},
{
"title": "قائمة التحويل",
"description": `عرض اوامر التحويل`,
"rowId": `${prefix}convertmenu`
},
{
"title": "قائمة المستوى",
"description": `قائمة المستوى`,
"rowId": `${prefix}levelingmenu`
},
{
"title": "قائمة البحث",
"description": `عرض اوامر البحث`,
"rowId": `${prefix}searchmenu`
}
]
}],
listType: 1
}
JirayaBot.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [senderr]},quoted:fgi})
break
case 'allmenu':

reply(`*_Sorry Features ${prefix + command} Not Available Please Type ${prefix}command_*`)
break
case 'grupmenu':
case 'groupmenu':

menu =
`*「 قائمة المجموعة 」*

${gaya2} ${prefix}منشن ⇇ اعضاء القروب
${gaya2} ${prefix}دخل ⇇ ادخال رقم
${gaya2} ${prefix}طرد ⇇ طرد عضو
${gaya2} ${prefix}ترقية ⇇ الترقية لمشرف
${gaya2} ${prefix}تخفيض ⇇ خفض لعضو
${gaya2} ${prefix}فعالية ⇇ ارسلها مع استمارة
${gaya2} ${prefix}فتح /اغلاء ⇇ فتح قروب
${gaya2} ${prefix}وصف ⇇ قرائة وصف قروب
${gaya2} ${prefix}وصفف ⇇ تغيير وصف قروب
${gaya2} ${prefix}افتار ⇇ تغيير صورة قروب
${gaya2} ${prefix}اسم ⇇ تغيير اسم قروب
${gaya2} ${prefix}تاج ⇇ منشن بملصق او صورة
${gaya2} ${prefix}قروب ⇇ معلومات قروب
${gaya2} ${prefix}مؤسس ⇉مؤسس لقروب
${gaya2} ${prefix}متصل ⇇ اعضاء اونلاين
${gaya2} ${prefix}مشرفين ⇇ قائمة مسؤولين
${gaya2} ${prefix}اطلع ⇇ طرد البوت من قروب
${gaya2} ${prefix}رابط ⇇ جلب رابط قروب
${gaya2} ${prefix}ااعادة ⇇ حذف رابط قروب
${gaya2} ${prefix}رقم ⇇ انشار رقم
${gaya2} ${prefix}انشاء ⇇ انشاء قروب 
${gaya2} ${prefix}مضاد روابط ⇇ تفعيل/تعطيل
${gaya2} ${prefix}مضاد فرتكس ⇇ تفعيل/تعطيل
${gaya2} ${prefix}ترحيب ⇇ تفعيل/تعطيل`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'downloadmenu':

menu =
`*「 قائمة التحميل 」*

${gaya2} ${prefix}mediafire _Link_
${gaya2} ${prefix}soundcloud _Link_
${gaya2} ${prefix}telegramsticker _Link_
${gaya2} ${prefix}spotify _Link_
${gaya2} ${prefix}tiktok _Link_
${gaya2} ${prefix}tiktoknowm _Link_
${gaya2} ${prefix}tiktokwm _Link_
${gaya2} ${prefix}tiktokmp3 _Link_
${gaya2} ${prefix}ytmp3 _Link_
${gaya2} ${prefix}ytmp4 _Link_
${gaya2} ${prefix}play _song name_
${gaya2} ${prefix}instagram _video link_
${gaya2} ${prefix}herodetail _hero name_
${gaya2} ${prefix}herolist
${gaya2} ${prefix}lyrics _song name_`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'makermenu':

menu =
`*「 قائمة الانشاء 」*

${gaya2} ${prefix}freefire _text_
${gaya2} ${prefix}silverplaybutton _text_
${gaya2} ${prefix}goldplaybutton _text_
${gaya2} ${prefix}blackpink _text_
${gaya2} ${prefix}halloween _text_
${gaya2} ${prefix}halloween2 _text_
${gaya2} ${prefix}3dgradient _text_
${gaya2} ${prefix}naturalleaves _text_
${gaya2} ${prefix}dropwater _text_
${gaya2} ${prefix}blood _text_
${gaya2} ${prefix}blood2 _text_
${gaya2} ${prefix}snow _text_
${gaya2} ${prefix}cloud _text_
${gaya2} ${prefix}neondevil _text_
${gaya2} ${prefix}neon _text_
${gaya2} ${prefix}glowingneonlight _text_
${gaya2} ${prefix}neonlight _text_
${gaya2} ${prefix}neonlight2 _text_
${gaya2} ${prefix}neonlight3 _text_
${gaya2} ${prefix}greenneon _text_
${gaya2} ${prefix}toxic _text_
${gaya2} ${prefix}matrix _text_
${gaya2} ${prefix}thunder _text_
${gaya2} ${prefix}thunder2 _text_
${gaya2} ${prefix}bokeh _text_
${gaya2} ${prefix}carbontext _text_
${gaya2} ${prefix}christmas _text_
${gaya2} ${prefix}breakwall _text_
${gaya2} ${prefix}roadwarning _text_
${gaya2} ${prefix}engraved3d _text_
${gaya2} ${prefix}embossed _text_
${gaya2} ${prefix}3dstone _text_
${gaya2} ${prefix}futuristic _text_
${gaya2} ${prefix}sketch _text_
${gaya2} ${prefix}bluecircuit _text_
${gaya2} ${prefix}space _text_
${gaya2} ${prefix}magmahot _text_
${gaya2} ${prefix}artpapercut _text_
${gaya2} ${prefix}3dluxurygold _text_
${gaya2} ${prefix}robotr2d2 _text_
${gaya2} ${prefix}harrypotter _text_
${gaya2} ${prefix}glitch3 _text_
${gaya2} ${prefix}greenhorror _text_
${gaya2} ${prefix}horrorgift _text_
${gaya2} ${prefix}erodedmetal _text_
${gaya2} ${prefix}3dglowingmetal _text_
${gaya2} ${prefix}blackmetal _text_
${gaya2} ${prefix}bluemetal _text_
${gaya2} ${prefix}shynimetal _text_
${gaya2} ${prefix}rustymetal _text_
${gaya2} ${prefix}metalpurple _text_
${gaya2} ${prefix}metalrainbow _text_
${gaya2} ${prefix}metaldarkgold _text_
${gaya2} ${prefix}colorfullluxurymetal _text_
${gaya2} ${prefix}glossybluemetal _text_
${gaya2} ${prefix}3dglossymetal _text_
${gaya2} ${prefix}3ddeepseametal _text_
${gaya2} ${prefix}leddisplayscreen _text_
${gaya2} ${prefix}metallic _text_
${gaya2} ${prefix}glossymetallic _text_
${gaya2} ${prefix}christmastree _text_
${gaya2} ${prefix}sparklesmerrychristmas _text_
${gaya2} ${prefix}countryflag3d _text_
${gaya2} ${prefix}americanflag3d _text_
${gaya2} ${prefix}3dscfi _text_
${gaya2} ${prefix}3drainbow _text_
${gaya2} ${prefix}3dwaterpipe _text_
${gaya2} ${prefix}3dchrome _text_
${gaya2} ${prefix}bluegem _text_
${gaya2} ${prefix}purplegem _text_
${gaya2} ${prefix}pinkcandy _text_
${gaya2} ${prefix}transformer _text_
${gaya2} ${prefix}berry _text_
${gaya2} ${prefix}brokenglass _text_
${gaya2} ${prefix}3drealistic _text_
${gaya2} ${prefix}3dunderwater _text_
${gaya2} ${prefix}writeinsandsummerbeach _text_
${gaya2} ${prefix}sandwriting _text_
${gaya2} ${prefix}foilballoon _text_
${gaya2} ${prefix}3dglue _text_
${gaya2} ${prefix}1917 _text_
${gaya2} ${prefix}minion _text_
${gaya2} ${prefix}doubleexposure _text_
${gaya2} ${prefix}holographic3d _text_
${gaya2} ${prefix}deluxegold _text_
${gaya2} ${prefix}deluxesilver _text_
${gaya2} ${prefix}glossycarbon _text_
${gaya2} ${prefix}fabric _text_
${gaya2} ${prefix}xmascards3d _text_
${gaya2} ${prefix}wicker _text_
${gaya2} ${prefix}fireworksparkle _text_
${gaya2} ${prefix}skeleton _text_
${gaya2} ${prefix}ultragloss _text_
${gaya2} ${prefix}denim _text_
${gaya2} ${prefix}decorategreen _text_
${gaya2} ${prefix}peridot _text_
${gaya2} ${prefix}rock _text_
${gaya2} ${prefix}lava _text_
${gaya2} ${prefix}rainbowequalizer _text_
${gaya2} ${prefix}purpleglass _text_
${gaya2} ${prefix}decorativeglass _text_
${gaya2} ${prefix}chocolatecake _text_
${gaya2} ${prefix}strawberry _text_
${gaya2} ${prefix}koifish _text_
${gaya2} ${prefix}bread _text_
${gaya2} ${prefix}3dbox _text_
${gaya2} ${prefix}freeadvancedglow _text_
${gaya2} ${prefix}honey _text_
${gaya2} ${prefix}marble _text_
${gaya2} ${prefix}marbleslabs _text_
${gaya2} ${prefix}icecold _text_
${gaya2} ${prefix}fruitjuice _text_
${gaya2} ${prefix}abstragold _text_
${gaya2} ${prefix}biscuit _text_
${gaya2} ${prefix}bagel _text_
${gaya2} ${prefix}wood _text_
${gaya2} ${prefix}hexagolden _text_
${gaya2} ${prefix}wonderfulgraffitiart _text_
${gaya2} ${prefix}8bit _Text1&Text2_
${gaya2} ${prefix}pornhub _Text1&Text2_
${gaya2} ${prefix}glitch _Text1&Text2_
${gaya2} ${prefix}glitch2 _Text1&Text2_
${gaya2} ${prefix}layered _Text1&Text2_
${gaya2} ${prefix}3dsteel _Text1&Text2_
${gaya2} ${prefix}realistic _Text1&Text2_
${gaya2} ${prefix}lionlogo _Text1&Text2_
${gaya2} ${prefix}ninjalogo _Text1&Text2_
${gaya2} ${prefix}wolf _Text1&Text2_
${gaya2} ${prefix}wolf2 _Text1&Text2_
${gaya2} ${prefix}halloween3 _Text1&Text2_
${gaya2} ${prefix}marvel _Text1&Text2_
${gaya2} ${prefix}marvel2 _Text1&Text2_
${gaya2} ${prefix}cinematichorror _Text1&Text2_
${gaya2} ${prefix}avengers _Text1&Text2_
${gaya2} ${prefix}graffiti3 _Text1&Text2_
${gaya2} ${prefix}captainamerica _Text1&Text2_
${gaya2} ${prefix}girlneko _Text1&Text2_
${gaya2} ${prefix}sadboy _Text1&Text2_
${gaya2} ${prefix}makerkaneki _Text1&Text2_
${gaya2} ${prefix}rem _Text1&Text2_
${gaya2} ${prefix}lolimaker _Text1&Text2_
${gaya2} ${prefix}gura _Text1&Text2_`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'gamemenu':

menu =
`*「 قائمة الالعاب 」*

${gaya2} ${prefix}سؤال
${gaya2} ${prefix}احزر
${gaya2} ${prefix}نرد
${gaya2} ${prefix}سويت
${gaya2} ${prefix}حقيقة`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomimage':

menu =
`*「 قائمة الحيوانات 」*

${gaya2} ${prefix}قط
${gaya2} ${prefix}كلب
${gaya2} ${prefix}باندا
${gaya2} ${prefix}باندا1
${gaya2} ${prefix}ثعلب
${gaya2} ${prefix}راكون
${gaya2} ${prefix}بيكاتشو
${gaya2} ${prefix}طائر
${gaya2} ${prefix}كنغر
${gaya2} ${prefix}كوالا
${gaya2} ${prefix}حوت`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomvideo':

menu =
`*「 قائمة الفيديوهات العشوائية 」*

${gaya2} ${prefix}beatvn
${gaya2} ${prefix}jedagjedugff
${gaya2} ${prefix}jedagjedugml
${gaya2} ${prefix}jedagjedugpubg
${gaya2} ${prefix}storywa
${gaya2} ${prefix}storygalau
${gaya2} ${prefix}storytruk
${gaya2} ${prefix}storybus
${gaya2} ${prefix}storyanime`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nدادي جيرايا' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'asupanmenu':

menu =
`*「 AESTHETIC GIRL MENU」*

${gaya2} ${prefix}asupan
${gaya2} ${prefix}asupanloli
${gaya2} ${prefix}hijaber
${gaya2} ${prefix}bocil
${gaya2} ${prefix}rikagusriani
${gaya2} ${prefix}santuy
${gaya2} ${prefix}ukhty
${gaya2} ${prefix}gheayubi
${gaya2} ${prefix}nantalia`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'cecanmenu':

menu =
`*「 RANDOM GIRL MENU  」*

${gaya2} ${prefix}cogan
${gaya2} ${prefix}cecan
${gaya2} ${prefix}cecan2
${gaya2} ${prefix}cogan2
${gaya2} ${prefix}jeni
${gaya2} ${prefix}jiso
${gaya2} ${prefix}justina
${gaya2} ${prefix}lisa
${gaya2} ${prefix}rose
${gaya2} ${prefix}ryujin
${gaya2} ${prefix}china
${gaya2} ${prefix}vietnam
${gaya2} ${prefix}thainlad
${gaya2} ${prefix}indonesia
${gaya2} ${prefix}korea
${gaya2} ${prefix}japan
${gaya2} ${prefix}malaysia`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'animemenu':

menu =
`*「 قائمة الانمي 」*

${gaya2} ${prefix}احزر ⇇البوت يرسل صورة وانت تقول اسمها 
${gaya2} ${prefix}انمي ⇇ عرض توصيات انميt
${gaya2} ${prefix}انمي1 ⇇ صور عشوائية لانمي`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'nsfwmenu':

menu =
`*「 NSFW/HENTAI MENU 」*

${gaya2} ${prefix}hentaisearch _code_
${gaya2} ${prefix}animefeets
${gaya2} ${prefix}chiisaihentai
${gaya2} ${prefix}yaoi
${gaya2} ${prefix}bj
${gaya2} ${prefix}feet
${gaya2} ${prefix}lewd
${gaya2} ${prefix}feed
${gaya2} ${prefix}trap
${gaya2} ${prefix}eron
${gaya2} ${prefix}solo
${gaya2} ${prefix}gasm
${gaya2} ${prefix}poke
${gaya2} ${prefix}anal
${gaya2} ${prefix}holo
${gaya2} ${prefix}tits
${gaya2} ${prefix}kuni
${gaya2} ${prefix}kiss
${gaya2} ${prefix}erok
${gaya2} ${prefix}smug
${gaya2} ${prefix}baka
${gaya2} ${prefix}solog
${gaya2} ${prefix}feetg
${gaya2} ${prefix}lewdk
${gaya2} ${prefix}cuddle
${gaya2} ${prefix}cum_jpg
${gaya2} ${prefix}erofeet
${gaya2} ${prefix}holoero
${gaya2} ${prefix}classic
${gaya2} ${prefix}erokemo
${gaya2} ${prefix}fox_girl
${gaya2} ${prefix}futanari
${gaya2} ${prefix}lewdkemo
${gaya2} ${prefix}wallpaper
${gaya2} ${prefix}pussy_jpg
${gaya2} ${prefix}kemonomimi
${gaya2} ${prefix}nsfw_avatar
${gaya2} ${prefix}wallpaper
${gaya2} ${prefix}eroyuri
${gaya2} ${prefix}tictactoe
${gaya2} ${prefix}afk
${gaya2} ${prefix}sideoppai
${gaya2} ${prefix}animefeets
${gaya2} ${prefix}animebooty
${gaya2} ${prefix}animearmpits
${gaya2} ${prefix}hentaifemdom
${gaya2} ${prefix}lewdanimegirls
${gaya2} ${prefix}biganimetiddies
${gaya2} ${prefix}ass
${gaya2} ${prefix}ahegao
${gaya2} ${prefix}bdsm
${gaya2} ${prefix}blowjob
${gaya2} ${prefix}cuckold
${gaya2} ${prefix}cum
${gaya2} ${prefix}ero
${gaya2} ${prefix}femdom
${gaya2} ${prefix}foot
${gaya2} ${prefix}gangbang
${gaya2} ${prefix}glasses
${gaya2} ${prefix}hentai
${gaya2} ${prefix}jahy
${gaya2} ${prefix}masturbation
${gaya2} ${prefix}neko
${gaya2} ${prefix}orgy
${gaya2} ${prefix}panties
${gaya2} ${prefix}pussy
${gaya2} ${prefix}thighs
${gaya2} ${prefix}yuri
${gaya2} ${prefix}bokep`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'stickermenu':

menu =
`*「 قائمة الملصقات 」*

${gaya2} ${prefix}ملصق
${gaya2} ${prefix}ملصقي ( لا يدعم الحقوق بالعربي)
${gaya2} ${prefix}زرف ( لا يدعم حقوق بالعربي)
${gaya2} ${prefix}ايموجي (تحويل ايموجي لملصق)`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'funmenu':

menu =
`*「 قائمة المزح 」*

${gaya2} ${prefix}تشبيك
${gaya2} ${prefix}يمكنني
${gaya2} ${prefix}هل
${gaya2} ${prefix}متى
${gaya2} ${prefix}غبي
${gaya2} ${prefix}احمق
${gaya2} ${prefix}ذكي
${gaya2} ${prefix}وسيم
${gaya2} ${prefix}جميل
${gaya2} ${prefix}نذل
${gaya2} ${prefix}احبه
${gaya2} ${prefix}كلب
${gaya2} ${prefix}بشع
${gaya2} ${prefix}قرد
${gaya2} ${prefix}جذاب
${gaya2} ${prefix}نوب
${gaya2} ${prefix}عطوف
${gaya2} ${prefix}رائع
${gaya2} ${prefix}معرق
${gaya2} ${prefix}كيوت
${gaya2} ${prefix}ظريف
${gaya2} ${prefix}تيكن
${gaya2} ${prefix}يكرهني [منشن]
${gaya2} ${prefix} يحبني [منشن]`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'soundmenu':

menu =
`*「 قائمة الاوستات 」*
${gaya2} ${prefix}نفرلاند
${gaya2} ${prefix}ناروتو
${gaya2} ${prefix}ساسكي
${gaya2} ${prefix}ايتاشي
${gaya2} ${prefix}مادارا
${gaya2} ${prefix}بوروتو
${gaya2} ${prefix}غوكو
${gaya2} ${prefix}ناتسو
${gaya2} ${prefix}زيتسو
${gaya2} ${prefix}جيرايا1
${gaya2} ${prefix}باين
${gaya2} ${prefix}ايزن
${gaya2} ${prefix}بليتش
${gaya2} ${prefix}يوها
${gaya2} ${prefix}ونبيس
${gaya2} ${prefix}ونبيس1
${gaya2} ${prefix}ونبيس2
${gaya2} ${prefix}ونبيس3
${gaya2} ${prefix}جوجو
${gaya2} ${prefix}كونان`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ocrmenu':

menu =
`*「 قائمة OCR 」*

${gaya2} ${prefix}ninjaname _Name_
${gaya2} ${prefix}stylishcoolname
${gaya2} ${prefix}ssweb _URL_`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'convertmenu':

menu =
`*「 قائمة التحويل 」*

${gaya2} ${prefix}قل ⇇ تسجيل الكتابة_
${gaya2} ${prefix}حول ⇇ تحويل ستيكر لصورة_
${gaya2} ${prefix}حول1⇇ تحويل فيديو ل صوت_
${gaya2} ${prefix}حول2 ⇇ تحويل صورة او فيديو لرابط_`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'levelingmenu':

menu =
`*「 قائمة المستوى 」*

${gaya2} ${prefix}بروفايل
${gaya2} ${prefix}لفل`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'searchmenu':

menu =
`*「 قائمة البحث 」*

${gaya2} ${prefix}بلايستور ⇇ البحث في بلاي ستور
${gaya2} ${prefix}يوتوب ⇇ البحث في يوتوب
${gaya2} ${prefix}صورة ⇇ البحث عن صورة
${gaya2} ${prefix}جوجل ⇇ البحث في جوجل`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'apkmenu':

menu =
`*「 قائمة التطبيقات 」*

${gaya2} ${prefix}apkdone _Apk Name_
${gaya2} ${prefix}apkgoogle _Apk Name_
${gaya2} ${prefix}hostapk _Apk Name_
${gaya2} ${prefix}revdl _Apk Name_
${gaya2} ${prefix}toraccino _Apk Name_
${gaya2} ${prefix}uapkpro _Apk Name_
${gaya2} ${prefix}apkmody _Apk Name_
${gaya2} ${prefix}apkshub _Apk Name_`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'othermenu':

menu =
`*「 قائمة اوامر اخرى 」*

${gaya2} ${prefix}runtime
${gaya2} ${prefix}speed
${gaya2} ${prefix}rentbot
${gaya2} ${prefix}payment
${gaya2} ${prefix}owner
${gaya2} ${prefix}developer
${gaya2} ${prefix}script
${gaya2} ${prefix}delete _Reply to bot messages_`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ownermenu':

menu =
`*「 قائمة المطور 」*

${gaya2} ${prefix}spam _text|amount_
${gaya2} ${prefix}tospam _reply with amount_
${gaya2} ${prefix}bc _text_
${gaya2} ${prefix}bc2 _text_
${gaya2} ${prefix}bcgc _text_
${gaya2} ${prefix}setbotname _text_
${gaya2} ${prefix}setbotbio _text_
${gaya2} ${prefix}setbotpp _Reply Image_
${gaya2} ${prefix}autoread _On / Off_
${gaya2} ${prefix}autotype _On / Off_
${gaya2} ${prefix}autorecord _On / Off_
${gaya2} ${prefix}addvn _Reply audio with caption_
${gaya2} ${prefix}delvn _vn name_
${gaya2} ${prefix}listvn
${gaya2} ${prefix}addsticker _Reply sticker with caption_
${gaya2} ${prefix}delsticker _sticker name_
${gaya2} ${prefix}liststicker
${gaya2} ${prefix}addimage _Reply image with caption_
${gaya2} ${prefix}delimage_image name_
${gaya2} ${prefix}listimage
${gaya2} ${prefix}clearall
${gaya2} ${prefix}leaveall
${gaya2} ${prefix}public
${gaya2} ${prefix}self`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '⬅️ ارجع' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'abcde':

reply('احبك 🦦💙')
break

//══════════[ RENT DLL ]══════════//

case 'قروبي':
menu =
`*${ucapanWaktu} @${senderr.split('@')[0]}*

\`\`\`رابط قروبي :\`\`\`
➪ https://chat.whatsapp.com/KYPAGRbWwjPHDNiDg1JYRS

💠ذا رابط قروب انمي وكذا ... فيك تدخل استقبال وتختار لقب ومرحب بالكل 💙`
JirayaBot.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal} - ${time}_*`, buttons: [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'شراء' }, type: 1 },{ buttonId: `${prefix}developer`, buttonText: { displayText: '👨🏼‍💻 المطور' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr]}}}, 'buttonsMessage')
break
case 'bayar':
case 'payment':

gambar = fs.readFileSync('./media/jiraya.jpg')
menunya = `*「 سلام عليكم 」*

• شسمه : _غير متاح للشراء حاليا 🐧_`
but = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: '🗃️ الاوامر' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤 المطور' }, type: 1 }
]
sendButImage(from, menunya, `*_${tanggal} - ${time}_*`, gambar, but)
break

//══════════[ DOWNLOAD FEATURES ]══════════//
/*Help case ?
give credit too / add in at tqtq
--> Jiraya*/

      case 'mediafire':
        if (args.length < 1) return reply('وين الرابط؟ ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        reply(mess.wait)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `Media Fire Downloader

Name : ${res[0].nama}
Size : ${res[0].size}
Link : ${res[0].link}

Please Choose Whether Document, Audio or Video Below`
        sendButMessage(from, result, `*Jiraya Bot*`, [
          {
            buttonId: `${prefix}fire ${teks}`,
            buttonText: {
              displayText: `🖨️ Document/Other`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}fire1 ${teks}`,
            buttonText: {
              displayText: `🖨️ Video`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}fire2 ${teks}`,
            buttonText: {
              displayText: `🖨️ Audio`,
            },
            type: 1,
          },
        ]);
        break;
              case 'fire':
        if (args.length < 1) return reply('وين الرابط؟ ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `جاري التحميل...`
        reply(result)
        sendFileFromUrl(res[0].link, document, { mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
        break
              case 'fire1':
        if (args.length < 1) return reply('وين الرابط؟ ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `جاري التحميل...`
        reply(result)
        sendFileFromUrl(res[0].link, video, { quoted: mek, mimetype: 'video/mp4', filename: res[0].output })
        break
              case 'fire2':
        if (args.length < 1) return reply('وين الرابط؟ ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `Media Fire Downloader
  Wait for the Process of Sending Media......`
        reply(result)
        sendFileFromUrl(res[0].link, audio, { quoted: mek, mimetype: 'video/mp3', filename: res[0].output })
        break
case 'spotify':{
    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
    url = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Artists : ${get_result.artists}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `Popularity : ${get_result.popularity}\n`
    ini_txt += `Preview : ${get_result.preview_url}\n`
    thumbnail = await getBuffer(get_result.thumbnail)
    await JirayaBot.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
    get_audio = await getBuffer(get_result.link)
    await JirayaBot.sendMessage(from, get_audio, audio, { mimetype: 'audio/mpeg', filename: `${get_result.title}.mp3`, quoted: mek})
    }
    break
   case 'soundcloud':
                if(!q)return reply(`Example : ${prefix + command} sound cloud link`)
                if (!q.includes('m.soundcloud.com')) return reply('Thats not a SoundCloud link')
                await reply(lang.wait())
				zee.SoundCloud(`${q}`).then(async (data) => {
                    let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Duration :* ${data.duration}\n`
					txt += `*• Quality :* ${data.medias[1].quality}\n`
					txt += `*• Ext :* ${data.medias[0].extension}\n`
                    txt += `*• Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*• Url  :* ${data.url}\n\n`
                    txt += `*Please wait a moment, in the process of delivery...*`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    JirayaBot.sendMessage(from , await getBuffer(data.medias[0].url), audio,{ quoted: mek, mimetype: 'audio/mp4' })
				})
			break
	case 'telesticker': case 'telegramsticker': case 'tstiker': {
			if (!q) return reply(`Example: ${prefix + command} *https://t.me/addstickers/geestickerpack*`)
			if (!q.includes('t.me')) return reply('This is not a telegram sticker link')
			var telestc = await zee.Telesticker(`${q}`)
			await reply(mess.wait)
			for (let i = 0; i < (telestc.length < 10 ? telestc.length : 10); i++) {
			JirayaBot.sendMessage(from, await getBuffer(telestc[i].url), sticker, {mimetype:'image/webp',quoted: mek})
			}
		}
		break
case 'تيكتوك':
   case 'tiktok':
			if (!q) return reply('وين رابط؟')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('خطا فالرابط')
			reply(mess.wait)
			let nowem = q
			zee.Ttdownloader(nowem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*الرابط* : ${a.data}`
					noweem = await getBuffer(nowm)
					JirayaBot.sendMessage(from,noweem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`خطا فالرابط`))
			
             break 
case 'tiktokwm':
			if (!q) return reply('The link?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(mess.wait)
			let wem = args.join(' ')
			zee.Ttdownloader(wem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					weem = await getBuffer(wm)
					JirayaBot.sendMessage(from,weem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`Invalid link`))
			
             break 
case 'tiktokmusic':
 case 'tiktokaudio':  
 case 'tiktokmp3':
			if (!q) return reply('The link?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
			reply(mess.wait)
			let audi = q
			zee.Ttdownloader(audi)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
				.then(async (a) => {
					audnha = await getBuffer(audio)
					JirayaBot.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek})
					})
				}).catch((err) => reply(`Invalid link`))
			
             break
case 'ig':
case 'انستا':
case 'instagram':
if (!c) return reply('خطا فالرابط')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
case 'lyrics':
reply(mess.wait)
if (args.length < 1) return reply('What is the name of the song?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List of heroes for features ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Name* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Hero Features* : ${res.hero_feature}
*Special* : ${res.speciality}
*Recommended Lane* : ${res.laning_recommendation}
*Price* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Release* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
              case 'شغل':
if (args.length ==0)return reply('ما هو عنوانه؟?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=KingOfBear`)
thmb = await getBuffer(ini.thumb)
ply1 =`*العنوان:* ${ini.title}\n*القناة:* ${ini.channel}\n*مشاهداته:* ${ini.views}\n*وقت نزوله:* ${ini.published}`
ply2 =`اختر اذا تبيه فيديو ولا اغنية`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: '🎵 اغنية' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: '📽️ فيديو' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp4?query=${bo}&apikey=${KingOfBearKey}`)
mp4 = await getBuffer(ini.url)
JirayaBot.sendMessage(from, mp4, video, { quoted: mek, caption: `مشاهدة ممتعة 💙�` })
break
case 'mp3':
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=${KingOfBearKey}`)
mp3 = await getBuffer(ini.url)
JirayaBot.sendMessage(from, mp3, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
break
case 'ytmp3':

if (args.length < 1) return reply("وين الرابط؟")
url = args.join(' ')
anump3 = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=${dhakey}`)
ytmp3 = await getBuffer(anump3.result.url)
reply(`_Audio is being processed, please wait a while longer_`)
JirayaBot.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
break
case 'ytmp4':

if (args.length < 1) return reply("وين الرابط؟")
url = args.join(' ')
anump4 = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=${dhakey}`)
ytmp4 = await getBuffer(anump4.result.url)
reply(`_The video is being processed, please wait a few more moments_`)
JirayaBot.sendMessage(from, ytmp4, video, {caption:`Done✓`, thumbnail:Buffer.alloc(0), quoted:mek})
break

//══════════[ RANDOM IMAGE FEATURES ]══════════//
/*Help case ?
just give credit / add in tqtq
--> Jiraya*/

                case 'bts':
                case 'exo':
                reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhumanbykur}`).then((gambar) => {
                        JirayaBot.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                   case 'ثعلب':  
                   anufox= await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anufox.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'كلب':  
                   anudog = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anudog.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'قط':
                   anucat = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anucat.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'باندا':  
                   anupanda = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anupanda.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'باندا1':  
                   anupandao = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anupandao.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'راكون':  
                   anupandao = await fetchJson(`https://some-random-api.ml/img/Raccoon`)
                   anu1 = await getBuffer(anupandao.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'كنغر':  
                   anupandao = await fetchJson(`https://some-random-api.ml/img/Kangaroo`)
                   anu1 = await getBuffer(anupandao.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'عناق':  
                   anupandao = await fetchJson(`https://some-random-api.ml/animu/hug`)
                   anu1 = await getBuffer(anupandao.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'غمز':  
                   anupandao = await fetchJson(`https://some-random-api.ml/animu/wink`)
                   anu1 = await getBuffer(anupandao.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'لمس':  
                   anupandao = await fetchJson(`https://some-random-api.ml/animu/pat`)
                   anu1 = await getBuffer(anupandao.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'بيكاتشو':  
                   anupandao = await fetchJson(`https://some-random-api.ml/img/Pikachu`)
                   anu1 = await getBuffer(anupandao.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'زوجة':  
                   anupandao = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
                   anu1 = await getBuffer(anupandao.url)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'طائر': 
                   anubird = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anubird.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'حوت': 
                   anubird = await fetchJson(`https://some-random-api.ml/img/whale`)
                   anu1 = await getBuffer(anubird.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
                   case 'كوالا':  
                   anukoala = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anukoala.link)
                   JirayaBot.sendMessage(from, anu1, image, {caption: `تمم 🦦`, quoted: mek})
                   break
case 'تطقيم':
case 'ppcouple':

anucpp = await fetchJson(`https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json?apikey=${dhakey}`)
cowo = await getBuffer(anucpp.male)
Cowok = `_هذا للولد_`
sendButImage(from, Cowok, `*_${tanggal} - ${time}_*`, cowo, [                      
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `⬅️ التالي`,
},
type: 1,
},
]);
cewe = await getBuffer(anu.female)
Cewek = `_وذا للبنت_`
sendButImage(from, Cewek, `*_${tanggal} - ${time}_*`, cewe, [                      
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `⬅️ التالي`,
},
type: 1,
},
]);
break
case 'قهوة': case 'kopi': {
    let buttons = [
            {buttonId: `قهوة`, buttonText: {displayText: '➡️الصورة  التالية➡️'}, type: 1}
        ]
        let buttonMessage = {
            image: { file: 'https://coffee.alexflipnote.dev/random' },
            caption: `☕قائمة القهوة☕`,
            footer: JirayaBot.user.name,
            buttons: buttons,
            headerType: 4
        }
        JirayaBot.sendMessage(from, file, image, {caption: `تمم 🦦`, quoted: mek})
    }

break
case 'wallpaperhackerssd':
case 'wallpaperhacker2sd':
case 'wallpaperharleyds':
case 'wallpaperjokerds':
case 'wallpaperpubgds':
case 'wallpaperhpd':
case 'wallpaperhp2ds':
case 'wallpaperkpopds':
case 'wallpaperblackpinkds':
case 'wallpapergameds':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `انقر فوق التالي  ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `⬅️ التالي`,
},
type: 1,
},
]);
break
case 'quotesimage':
case 'katakataimage':
case 'renungan':
case 'memeindo':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'mobil':
case 'motor':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `⬅️ التالي`,
},
type: 1,
},
]);
break
case 'darkjoker':
case 'darkjokes':
case 'darkjokesindo':
case 'darkjokers':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/darkjokes?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `⬅️ التالي`,
},
type: 1,
},
]);
break

case 'otak':
    client.sendMessage(from, otak(prefix, sender), text, {quoted: mek})
    break

case 'ابلاغ':
              if (args.length < 1) return reply(`اكتب ${prefix}بلاغك`) 
              teks = args.join(' ')
              reply('شكرا على بلاغك عن المشكل، رح يجي جيرايا قريب...')
              JirayaBot.sendMessage('34613110267@s.whatsapp.net',`*تم الابلاغ:* ${teks}`, text)
              
              break
//----> ANIME FEATURES <----//
                case 'شبيهي':
                jds = []
				const kira = groupMembers
				const aki = groupMembers
				const tlf = kira[Math.floor(Math.random() * kira.length)]
				const hob = aki[Math.floor(Math.random() * aki.length)]
                teks = `👫شبيهك هو👫 @${tlf.jid.split('@')[0]} `
                let buttons = [
                { buttonId: 'اتفق 🌚', buttonText: { displayText: 'اتفق 🌚' }, type: 1 },{ buttonId: 'لا هش 🗿', buttonText: { displayText: 'لا هش 🗿' }, type: 1 }
                ]
            jds.push(tlf.jid)
			jds.push(hob.jid)
			mentions(teks, jds, true)
			break
            
            case 'قرعة':
                jds = []
				const kiraa = groupMembers
				const akia = groupMembers
				const tlfa = kiraa[Math.floor(Math.random() * kiraa.length)]
				const hoba = akia[Math.floor(Math.random() * akia.length)]
                teks = `دورك @${tlfa.jid.split('@')[0]} `
                let buttonss = [
                { buttonId: 'اتفق 🌚', buttonText: { displayText: 'اتفق 🌚' }, type: 1 },{ buttonId: 'لا هش 🗿', buttonText: { displayText: 'لا هش 🗿' }, type: 1 }
                ]
            jds.push(tlfa.jid)
			jds.push(hoba.jid)
			mentions(teks, jds, true)
			break

//----> akida <----//
             case 'احزر':
				JirayaBot.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 JirayaBot.sendMessage(from, swordartonline, image, {quoted: mek, caption: 'احزر اسم الشخصية\n'})
				 break
				case 'انمي':
				 JirayaBot.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 JirayaBot.sendMessage(from, highschooldxd, image, {quoted: mek, caption: 'تم.'})
				break
                case '2انمي':
				 JirayaBot.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/jiraya.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 JirayaBot.sendMessage(from, highschooldxd, image, {quoted: mek, caption: 'تم ان شاء الله يعجبك.'})
				break
				 case '1انمي':
				 JirayaBot.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 JirayaBot.sendMessage(from, lovelive, image, {quoted: mek, caption: 'تمم'})

/******JUEGOS SHANDUY LA PUTA MADRE NO TE OLVIDES******/
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
	    if (room.x !== room.o) await JirayaBot.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await JirayaBot.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
/******JUEGOS SHANDUY LA PUTA MADRE NO TE OLVIDES******/
case 'سويت':
              if (!q) return reply(`ارسل ${prefix}سويت ✂️ / 🪨 / 📄`)
              const userspilih = q
              if (!userspilih.match(/🪨|✂️|📄/)) return reply(`اختر 🪨, 📄, ✂️`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = '🪨';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = '✂️';
              } else {
              computer = '📄';
}
              if ( userspilih == computer ) {
              reply(`اخترنا نفس الشي، تعادل.`)
              } else if ( userspilih == '🪨' ) {
              if( computer == '✂️' ) {
              reply(`انت: 🪨 وانا:   ✂️\nلقد فزت`)
              } else {
              reply(`انت: 🪨 وانا: 📄\nلقد خسرت`)
}
              } else if ( userspilih == '✂️' ) {
              if( computer == 'حجر' ) {
              reply(`انت: ✂️ وانا: 🪨\nلقد خسرت`)
              } else {
              reply(`انت: ✂️ وانا: 📄\nلقد فزت`)
}
              } else if ( userspilih == '📄' ) {
              if( computer == 'حجر' ) {
              reply(`انت: 📄 وانا: 🪨\nلقد فزت`)
              } else {
              reply(`انت: 📄 وانا: ✂️\nلقد خسرت`)
}
}
              break

              case 'روابط': // by jiraya
        sendButMessage(from, `سلام عليكم ${pushname} `, `اختر اي مجموعه`, [
          {
            buttonId: `ahello`,
            buttonText: {
              displayText: `مجموعه الملصقات`,
            },
            type: 1,
          },
          {
            buttonId: `alah`,
            buttonText: {
              displayText: `قروب البوت`,
            },
            type: 1,
          },
        ]);
        break;
        case 'hello':
reply('https://chat.whatsapp.com/LQKA0w2JjLi9QpLOhWxoA4')
break
case 'lah':
reply('https://chat.whatsapp.com/BSOfsSGjwzs0bXMPsOKQoz')
break
case 'awokkk':
reply('https://chat.whatsapp.com/HnXTfqMVVf1KKdCJEgClQa')
break
case 'h':
reply('he/she is gone bro.. may he/she go to hell too 😏')
break
case 'okeyx':
reply('💐🌺🌻I WELCOME THE NEW MEMBER WITH SOME FLOWERS🌻🌺💐')
break

case 'نرد':
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			JirayaBot.sendMessage(from, damdu, sticker, {quoted: mek})
			break
    
    case 'ttc': case 'ttt': case 'tictactoe': {
        let TicTacToe = require("./lib/tictactoe")
        this.game = this.game ? this.game : {}
        if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
        let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
        if (room) {
        reply('Partner found!')
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

Type *surrender* to surrender and admit defeat`
        if (room.x !== room.o) await JirayaBot.sendText(room.x, str, m, { mentions: parseMention(str) } )
        await JirayaBot.sendText(room.o, str, m, { mentions: parseMention(str) } )
        } else {
        room = {
        id: 'tictactoe-' + (+new Date),
        x: m.chat,
        o: '',
        game: new TicTacToe(m.sender, 'o'),
        state: 'WAITING'
        }
        if (text) room.name = text
        reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
        this.game[room.id] = room
        }
        }

if (isBanchat){
    if (!itsMe && !isOwner)return 
    }
        const ftokoo = {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
          },
          message: {
            productMessage: {
              product: {
                productImage: {
                  mimetype: "image/jpeg",
                  jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`), //Gambarnye
                },
                title: "FakeReply Bang", //Kasih namalu
                description: "Xeon",
                currencyCode: "USD",
                priceAmount1000: "2000",
                retailerId: "𝐃𝐨𝐠𝐞 𝐁𝐨𝐭",
                productImageCount: 1,
              },
              businessOwnerJid: `0@s.whatsapp.net`,
            },
          },
        };
     const ftok = {
    key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
            },
            message: {
                "productMessage": {
                    "product": {
                        "productImage":{
                            "mimetype": "image/jpeg",
                            "jpegThumbnail": iye //Gambarnye
                        },
                        "title": `${ucapanWaktu} ${pushname}`, //Kasih namalu 
                        "description": `${ucapanWaktu} ${pushname}`, 
                        "currencyCode": "USD",
                        "priceAmount1000": "2000",
                        "retailerId": `${ucapanWaktu} ${pushname}`,
                        "productImageCount": 1
                    },
                        "businessOwnerJid": `0@s.whatsapp.net`
            }
        }
    }

 // banchat fixed by xeon
 case 'banchat':
    if (!isGroup) return reply('this feature is only for groups')
    if (!itsMe && !isOwner && !isGroupAdmins)return mentions(`*This Order is Specially for owner @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
    //if (!isBotGroupAdmins) return reply(mess.only.Badmin)
    if (isBanchat) return reply(`already banned`)
    bancht.push(from)
    fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
    reply(`Successful bot Ban on this group`)
    break
    
    case 'unbanchat':
    if (!itsMe && !isOwner)return reply('Only owner can use this feature')
    if (!isBanchat) return reply(`Already at UnBan`)
    let ubc = bancht.indexOf(from)
    bancht.splice(ubc, 1)
    fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
    reply(`The bot has been unbanned in this group`)
    break
    
    case 'listbanchat': case 'listbc':
     teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
    for(let i of bancht){
    met = await JirayaBot.groupMetadata(i)
    teks += 'Nama Group : ' + met.subject + '\n\n'
    }
    reply(teks)
    break
//══════════[ OTHER FEATURES ]══════════//
case 'owner':

members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Owner Of Jiraya Bot ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
JirayaBot.sendMessage(from, {displayName: `The owner ${botname}`, vcard: vcard2}, contact, 
{ quoted: fgi, 
})
break
case 'owner':

members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${developerName}\n`
+ `ORG: Developer Of Jiraya Bot ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${developerNo}:${developerNo}\n`
+ 'END:VCARD'.trim()
JirayaBot.sendMessage(from, {displayName: `The owner ${botname}`, vcard: vcard2}, contact, 
{ quoted: fgi, 
})
const devsound = fs.readFileSync('./media/botdev.mp3')
JirayaBot.sendMessage(from, devsound, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
break
case 'sc':
case 'script':
case 'sourcode':

scpic = fs.readFileSync('./media/scpic.jpg')
scsell = `*سلام عليكم*\n\n_• My Number: http://wa.me/+34613110267_\n\n_شسمه اذا تبي البوت كلمني 🐧._`
but = [
{ buttonId: `${prefix}rentbot`, buttonText: { displayText: 'قروبي' }, type: 1 },
{ buttonId: `${prefix}developer`, buttonText: { displayText: '👨🏼‍💻 المطور' }, type: 1 }
]
sendButImage(from, scsell, `*_${tanggal} - ${time}_*`, scpic, but)
break
case 'runtime':

textImg(`Bot Active Since ${runtime(process.uptime())}`)
break
case 'بينج':
case 'speed':

timestampe = speed();
latensie = speed() - timestampe
textImg(`「 *𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧* 」\nRespond in ${latensie.toFixed(4)} Sec 💬`)
break
case 'd':
case 'احذف':
case 'حذف':

JirayaBot.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break

 //══════════[ SEARCH FEATURES ]══════════//

    case 'بلايستور':
            if(!c) return reply('عن ماذا تبحث؟')
            let play = await hx.playstore(`${c}`)
            let store = '❋・───────━•⊰🌑⊱•━───────・❋\n'
            for (let i of play){
            store += `\n*「 *بحث بلاي ستور* 」*\n
- *الاسم* : ${i.name}
- *الرابط* : ${i.link}\n
- *مطوره* : ${i.developer}
- *رابط المطور* : ${i.link_dev}\n❋・───────━•⊰🌑⊱•━───────・❋`
            }
            reply(store)
            break
case 'يوتوب':
          if (args.length < 1) return reply('عن ماذا تبحث؟')
          teks = args.join(' ')
          reply(mess.wait)
          res = await yts(`${teks}`)
          kant = ``
          for (let i of res.videos) {
          kant += (`❒「  بحث يوتوب  」\n• العنوان : ${i.title}\n• المشاهدات : ${i.views}\n• تم تنزيله في : ${i.ago}\n• المدة : ${i.timestamp}\n• اسم القناة : ${i.author.name}\n• رابط الفيد : ${i.url}\n\n\n`)
          }
          var akhir = kant.trim()
          sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: akhir})
          break
case 'بنتر':
if (!c) return reply('عن ماذا تبحث؟')
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `صورة : ${c}`)
})
break
case 'جوجل':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('عن ماذا تبحث؟?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*العنوان* : ${i.title}
*الرابط* : ${i.link}
*الوصف* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'صورة':
case 'googleimage':
case 'googleimg':
if (args.length > 2) return reply('عن اي صورة تبحث؟')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_فشل في تحميل الصورة.._')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*صورة :* ${teks}`})
}
}
break

//══════════[ CONVERT FEATURES ]══════════//

      case 'squirrel':
        encmedia012 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await JirayaBot.downloadAndSaveMediaMessage(encmedia012)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          JirayaBot.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
          fs.unlinkSync(ran)
        })
 case 'حول1':
					JirayaBot.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('اي فيديو تبي تحول؟')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await JirayaBot.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						JirayaBot.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
 case 'حول':

if (!isQuotedSticker) return reply('رد عملصق')
encmediatoimg = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await JirayaBot.downloadAndSaveMediaMessage(encmediatoimg)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('فشل تحويل الملصق إلى صورة')
buffer = fs.readFileSync(ran)
JirayaBot.sendMessage(from, buffer, image, {quoted: mek, caption: 'تمم'})
fs.unlinkSync(ran)
})
break
case 'قل':
					  try{
        if (args.length > 1) {
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return JirayaBot.sendMessage(from, 'اين النص ؟؟', text, {quoted: mek})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('النص كثير جدًا ، الحد الأقصى لعدد الكلمات هو 600')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('فشل:(')
                JirayaBot.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./lib/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                JirayaBot.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(mess.error.api)
}
break
                    case 'حول2':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await JirayaBot.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('اختر فيديو او صورة')
            }
            break

//FUNCIONES DE BAN Y DESBAN			
			
case 'حضر':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '*\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `『 تم الحضر 🚫 』\n\n◉الرقم: @${mentioned[0].split('@')[0]}\n\n*تم حضرك من استخدام البوت ، كلم جيرايا يفكه.*`
mentions(`${susp}`, mentioned, true)   
break

case 'فك-الحضر':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '*\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `『 تم فك الحضر ✅ 』\n\n◉الرقم: @${mentioned[0].split('@')[0]}\n\n*تم فك الحضر ، يمكنك استخدام البوت الان.*`
mentions(`${susp}`, mentioned, true)   
break
//══════════[ LEVELING FEATURES ]══════════//

	case 'لفل':
					if (!isGroup) return reply(mess.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 500 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *لفل خاص بك*\n  ├─ ► الاسم : ${pushname}\n  ├─ ► رانك : ${role}\n  ├─ ► اكس بي : ${userXp}/${requiredXp}\n  └─ ► لفل : ${userLevel}\n`
					JirayaBot.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
					case 'بروفايل':
					if (!isGroup) return reply(mess.group)
				    let anuprofileoke = await JirayaBot.groupMetadata(from)
                    const thu = await JirayaBot.getStatus(anuprofileoke.participants[0], MessageType.text)
    				JirayaBot.updatePresence(from, Presence.composing)
    				try {
					ppimg = await JirayaBot.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					profile = `╭─「 *💖بروفايل الخاص بك💖* 」\n│• المنشن : ${pushname}\n│• الرقم : ${sender.split("@")[0]}\n│• البايو : ${bio_user}\n│• اكس بي : ${getLevelingXp(sender)}\n│• لفل : ${getLevelingLevel(sender)}\n│• رانك : ${role}\n│• رابط رقمه : wa.me/${sender.split("@")[0]}\n╰──────────────────`
					buffer = await getBuffer(ppimg)
					JirayaBot.sendMessage(from, buffer, image, {quoted: mek, caption: profile})
					break

//══════════[ STICKER FEATURES ]══════════//

case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp':
            
					if (!isUser) return reply(mess.only.daftarB)
					        if (args.length < 1) return reply(`¿Dónde está el texto?\n*Ejemplo:* ${prefix}attp shanduy`)
						reply(mess.only.attp)
					        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						client.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
						break
case 'memegenerator': case 'memegen':{
									if (args.length < 1) return reply(`Reply to sticker with up and down text for example *${prefix + command}* top text|bottom text`)
									if (!q.includes('|')) return reply(`Send orders *${prefix + command}* top text|bottom text`)
									try {
										if (!isQuotedImage) return reply(`Reply To An Image!`)
										reply(mess.wait)
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmediaokekek = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await JirayaBot.downloadMediaMessage(enmediaokekek)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										JirayaBot.sendMessage(from, resu, image, {caption:'.stikerin bang', thumbnail: Buffer.alloc(0), quoted: mek})
										fs.unlinkSync(mediiia)
										} catch (e) {
											reply(mess.eror)
											console.log(e)
										}
										}
									break
 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`Send orders *${prefix + command}* JirayaBot`)
									if (q.includes('|')) return reply(`Reply to an image with a caption, For Example *${prefix + command}* Jiraya`)
									try {
										if (!isQuotedImage) return reply(`Reply to an image!`)
										reply(mess.wait)
										var teks2 = args.join(' ')
										var enmedialel = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await JirayaBot.downloadMediaMessage(enmedialel)
										var njay = await uploadImages(mediia)
										var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
										sendStickerFromUrl(from,`${resu}`)	
										} catch (e) {
											reply(mess.eror)
											console.log(e)
										}
										}
									break
case 'takestick':
case 'زرف':
					case 'take':
                        if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
						if (!isQuotedSticker) return reply(`وين ملصق الي تبي تزرفه؟ *${prefix}+الحقوق حط بالانجليزي بدون ايموجي.*`)
						ppp = `${args.join(' ')}`
						const encmediaoo1 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media2 = await JirayaBot.downloadAndSaveMediaMessage(encmediaoo1, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							JirayaBot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media2)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
case 'ملصقي':
					case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia9191 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await JirayaBot.downloadAndSaveMediaMessage(encmedia9191, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											JirayaBot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`منشن صورة *${prefix}.*`)
							const encmediaokekak = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await JirayaBot.downloadAndSaveMediaMessage(encmediaokekak, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											JirayaBot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftex})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`منشن صورة ${prefix}.\n.`)
						}
						break
case 'ايموجي':
			if (args === 0) return reply('وين الايموجي؟')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('فشل'))
           })
    	   break
case 'gifstiker':
case 'ملصق':
case 'stickergif':  
case 'sticker':
case 'stiker':

if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedialoli = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await JirayaBot.downloadAndSaveMediaMessage(encmedialoli)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
JirayaBot.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedialoli22 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await JirayaBot.downloadAndSaveMediaMessage(encmedialoli22)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
JirayaBot.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`أرسل صورة ${prefix}ملصق\nفيديو مدة الملصق 1-9 ثواني`)
}
break
case 'stcmemepic': case 'stickermemepic':

if (args.length < 1) return reply(`Send orders *${prefix + command}* top text|bottom text`)
if (!q.includes('|')) return reply(`Send orders *${prefix + command}* top text|bottom text`)
try {
if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY PICTURE OR STICKER!!`)
reply(mess.wait)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
var imgbb = require('imgbb-uploader')
var enmediahe1 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await JirayaBot.downloadAndSaveMediaMessage(enmediahe1)
var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
JirayaBot.sendMessage(from, resu, image, {quoted: mek})
fs.unlinkSync(media)
} catch (e) {
return reply(`${e}`)
}
break

//══════════[ FUN FEATURES ]══════════//
case 'rateggh':
				case 'تشبيك':
					rate = body.slice(1)
					const ra =['ميؤوس منكم 🤣💔 1','ميؤوس منكم 🤣💔 2','ميؤوس منكم 🤣💔 3','ميؤوس منكم 🤣💔 4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					JirayaBot.sendMessage(from, 'تست نشوف : *'+rate+'*\n\nنسبة الحب المتوقعة : '+ te+'%', text, { quoted: mek})
					break
                case 'اقدر':
					bisakah = body.slice(1)
					const bisa =['اجل يمكنك ذالك', 'لا كنسل', ' ما في مستحيل','اذا واثق من نفسك يب','ممممم حسب الوضع']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					JirayaBot.sendMessage(from, 'السؤال : *'+bisakah+'*\n\nالجواب : '+ keh, text, { quoted: mek })
					break
				case 'متى':
					kapankah = body.slice(1)
					const kapan =['بكرا','شرايك الحين🐧؟','اسبوع جاي','السنة المقبلة ان شاء الله','ما في لا تحلم ابد 🤣','بعد 3 ايام','بعد يومين','بعد 3 ثواني🐧','مممممم انسى ما في','بعد قرن🐧','طيب الان','متى ما بدك ان شاء الله','حسب ضروفك','بعد سنتين','بعد شهر ونص🐧']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					JirayaBot.sendMessage(from, 'السؤال : *'+kapankah+'*\n\nالجواب : '+ koh, text, { quoted: mek })
					break
         			  case 'هل':
					apakah = body.slice(1)
					const apa =['نعم','لا','شرايك انت ؟','اذلف مدري 🗿','هو شوف على حسب 🐧','يمكن','مدري صراحة','اتوقعععع يب 🐧🤣']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					JirayaBot.sendMessage(from, 'السؤال : *'+apakah+'*\n\nالجواب : '+ kah, text, { quoted: mek })
					break
case 'ggiuغبي':
      case 'ffadsاحمق':
      case 'asfذكي':
      case 'afdsوسيم':
      case 'afdsجميل':
      case 'asfنذل':
      case 'afdاحبه':
      case 'adfكلب':
      case 'adfبشع':
      case 'afsdقرد':
      case 'adsجذاب':
      case 'afdcsنوب':
      case 'asfعطوف':
      case 'asfcرائع':
      case 'asdfasمعرق':
      case 'asdكيوت':
      case 'ascfظريف':
      case 'prgdsetty':
      case 'radsfndi':
      case 'gadsfndu':
      case 'maddsfarchod':
      case 'kafddfsla':
      case 'gosadfra':
      case 'chfdutiya':
      case 'nidfsbba':
      case 'nidfbbi':
      case 'bhodfssdiwala':
      case 'chfdfsdutmarika':
      case 'bofdkachoda':
      case 'suadfrerbaccha':
      case 'boldfsochoda':
      case 'mutdshal':
      case 'mutdsfhbaaz':
      case 'radsfndibaaz':
      case 'todsfpibaaz':
      case 'cudsfnt':
      case 'nedfrd':
      case 'behesdsdfnchod':
      case 'besdfhnchoda':
      case 'bhdsdsfosdika':
      case 'hodt':
      if (!isGroup) return reply(mess.only.group)
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        teks = `*(كله مزح)...اكثر واحد ${command} فالقروب هو:* @${goo.jid.split('@')[0]}`
        membr.push(goo.jid)
        mentions(teks, membr, true, { quoted: mek })
        break
                     case "adsfتيكن":
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `متيكنين فالسر 😶‍🌫️... + ( كله مزح لحد يصيح🗿) @${akuu.jid.split('@')[0]} 😉💙 @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
					                        case 'uglyasdcheck':
					// source code by Jiraya⛔
                  sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					JirayaBot.sendMessage(from, 'Question : *'+sange+'*\n\nAnswer: '+ nge+'%', text, { quoted: mek })
					break
                case 'يكرهني':
					// source code by Jiraya⛔
                  gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					JirayaBot.sendMessage(from, 'السؤال : *'+gayy+'*\n\nالجواب : '+ yag+'%', text, { quoted: mek })
					break
                case 'lghasdfkl':
                case 'lkhasasdfuk':
					// source code by Jiraya⛔
                  lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					JirayaBot.sendMessage(from, 'Question : *'+lesbii+'*\n\nAnswer : '+ bi+'%', text, { quoted: mek })
					break
                case 'safdsad':
					// source code by Jiraya⛔
ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					JirayaBot.sendMessage(from, 'Question : *'+ganteng+'*\n\nAnswer : '+ teng+'%', text, { quoted: mek })
					break
		case 'يحبني':
					// source code by Jiraya⛔
cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					JirayaBot.sendMessage(from, 'السؤال : *'+cantik+'*\n\nAnswer : '+ tik+'%', text, { quoted: mek })
					break
		case 'يحبني':
					// source code by Jiraya⛔
watak = body.slice(1)
					const wa =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					JirayaBot.sendMessage(from, 'Question : *'+watak+'*\n\nالجواب : '+ tak, text, { quoted: mek })
				        break
				
//══════════[ GAME FEATURES ]══════════//
       case 'حقيقة':
              const dare =[
    "هل حدث غدر في حياتك قبل ذلك ؟",
    "هل تتميز بكونك شخص متسامح أم لا؟",
    "ما هي عيوبك؟",
    "هل حدث في يوم أنك تعرضت للخيانة ؟",
    "ما هي القرارات في حياتك التي لم تندم عليها ؟",
    "هل تمتلك شخصية متميزة في حياتك ؟",
    "من هو الشخص الذي يلزم تفكيرك ؟",
    "من الشخص المفضل لديك الذي ترغب اصطحابه في نزهة ؟",
  	"هل لديك الشجاعة أن تتدخل عندما ترى حادثًا أمامك ؟",
    "من هو الشخص الذي لا تتمكن من رفض طلبه ؟",
    "كيف يمكنك أن تظهر إعجابك بشخص ما ؟",
    "هل تمتلك شخصية متناقضة ؟",
    "في أي موقف تعرضت للإحراج الشديد ؟",
    "هل تعمل بإتقان أو لا تحب العمل ؟    ",
    "هل تتذكر موقف أبكاك أمام الناس دون أن تشعر ؟",
    "هل لديك تجربة سابقة تتمنى تكرارها ؟",
    "لو أحضرت لك ورقة بيضاء ماذا سترسم لتعبر عن حالتك الآن ؟",
    "هل أنت من الشخصيات العدوانية ؟",
    "هل سبق لك وخططت لحرب من أجل شخص ؟",
    "ما هي الكلمات التي تشعرك بالارتباك",
    "من هو مثلك الأعلى ؟",
    "من هو الشخص الذي تظهر أمامه نقطة ضعفك ؟",
    "منشن الشخص الذي تحبه",
    "منشن الشخص الذي تكرهه",
    "هل تحب المطور جيرايا؟",
    "هل تحب السيسي 🤣؟",
    "كم مرة ضحكت اليوم؟",
    "هل قرأت القرآن اليوم؟ اذا كان جواب لا، انصحك تروح تقرأه فهو مريح",
    "هل صليت؟ اذا كان لا قم صلي الان والله يتقبل",
    "هل تحب خامس منشن؟",
    "هل تحب اول منشن؟",
    "اذا كنت قائد المجموعه ماذا ستقدم كقائد؟",
    "اوصف قائد المجموعه بالنسبة لك؟",
    "هل مشرفين المجموعه مقصرين؟",
    "هل أنت من الأشخاص الاجتماعيين أو الانطوائيين ؟",
    "ماذا يكون رد فعلك عندما يطلب منك شريك حياتك الإنفصال ؟",
    "هل من الممكن أن تعبر عن حياتك بكلمة واحدة ؟",
    "ما هو الخبر السيئ لك ؟",
    "هل قمت قبل ذلك بالكذب على شخص من خلال الاحتيال عليه ؟",
    "مالذي يشعرك بالخوف ؟    ",
    "ما هي مقدار ثقتك في نفسك ؟",
    "هل أنت فخوراً بوالديك ؟",
    "هل يمكن أن تستعر من والدك بسبب عمله ؟",
    "هل لديك شخص إذا خرج من حياتك لا تشعر بالندم ؟",
    "هل سبق لك أن تحدثت بكلام تندم عليه الآن ؟",
    "ما هي الشخصية التي أثرت في شخصيتك ؟",
    "هل لديك رغبة تملك كل شيء ؟",
    "هل أنت راضٍ عن نفسك ؟",
    "ما هو الشيء الذي يغضبك بشدة ؟",
    "هل تمتلك نفسه الحب لكل إخوتك ؟",
    "هل سبق لك ودمرت حياة أحد أقاربك ؟",
    "من هو الشخص الذي تأتمنه على كل أسرارك ؟",
    "هل تحكم على الأشخاص بسبب ملابسهم ؟",
    "ماذا يلفت إنتباهك ؟",
    "هل تمتلك شخصية صادقة أم منافقة ؟",
    "هل يوجد شخص متعلق به بشكل لا يمكن وصفه ؟",
    "هل وجهت تحديد لأي شخص من قبل بسبب تصرفاته ؟",
    "هل يتملكك شعور بالسعادة ؟",
    "من الشخص الذي رحيله عن الحياة يشعرك بالألم ؟",
    "هل خذلك أحدًا من قبل ؟",
    "هل أنت إنسان سلبي أم إيجابي .",
    "هل استخدمت كلمة أحبك من قبل ؟",
    "ما هو مستوى تعليمك ؟",
    "ما هو الإقرار الذي يمكن أن تتخذه على نفسك ؟",
    "هل من الممكن أن يتحول صديقك إلى حبيب ؟",
    "هل سبق وتعرضت للظلم من قبل ؟",
    "هل سبق وكذبت من قبل ؟",
    "من الشخص الأغلى في حياتك ؟",
    "هل سبق لك وقمت بتناول المخدر والحشيش ؟",
    "هل ندمتي على حب شخص من قبل ؟",
    "ما الموقف الصعب الذي تعرضتي له ولن تنسيه أبدًا ؟",
    "هل هناك شخص يطاردك .",
     "هل راودك بالرغبة في الموت ؟",
     "هل سبق لك و قمت بتوبيخ نفسك ؟",
     "هل تفضل الزوجة العاملة أو الزوجة التي تجلس في المنزل ؟",
     "وجه كلمة للمرأة التي ترتدي ملابس خادشة للحياء ؟",
     "هل تصدر أحكامًا على المرأة بسبب ملابسها ؟",
     "كم مرة تنازلت عن مبادئك بسبب شخص ؟",
     "هل تؤمن بالحب من النظرة الأولى ؟     "
]
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/HtyFcs1/Tlok-L0r0-Ptqst5v35-O9p-GAHa-E6.jpg`)
              JirayaBot.sendMessage(from, buffer, image, { quoted: mek, caption: '_*حقيقة*_\n'+ der })
              break
       case 'سؤال':
              const truth =[
    "💠↲ما هوا أسم غوكو الحقيقي؟*",
    "💠↲من هوا نائب اليونكو شانكس؟",
    "💠↲أين ظهر دراغون أول مرة؟",
    "💠↲كم كان عمر تانجيرو في بداية الأنمي؟",
    "💠↲من هوا مؤدي صوت ليفاي؟",
    "💠↲ما هوا أسم اخت لايت (كيرا)؟",
    "💠↲من هو الهومنكلوس الأول التي تم صنعه؟",
    "💠↲من أول عملاق ظهر في هجوم العمالقة؟", 
    "💠↲كم يبلغ عمر ليوريو؟",
    "💠توقع اسم الانمي  👨🐲🐵",
    "💠توقع اسم الانمي  🥷🦊",
    "💠توقع اسم الانمي  💀🍎👨📓", 
    "💠توقع اسم الانمي  🏴‍☠️🍖👑", 
    "💠توقع اسم الانمي  👨🎣🤡", 
    "💠توقع اسم الانمي  👨👊🤖", 
    "💠ما أسماء فريق ساسكي الجديد المسمى هيبي؟",
    "💠كم عدد مضادات السم التي صنعتها ساكورا بقرية الرمل؟",
    "💠من هو البيجو الذي يمتلك أكبر كمية من التشاكرا؟", 
    "💠ما اسم القائد الثاني لفريق كاكاشي ؟", 
    "💠مااسم ام روبين التي ماتت؟", 
    "💠مين قاتل هيدان ?",
    "💠ما اسم الحجر الذي يؤدي الى الكنز ؟",
    "💠ما اسم اليد اليمنى لملك القراصنة ؟    ",
    "💠ما اسم والدة آيس ؟    ", 
    "💠ما اسم مطعم زيف ؟", 
    "💠ماهو اسم حآرس امبل دآون ؟", 
    "💠أي عائلة ينتمي كيلوا", 
    "💠كم عدد الاسبادا انمى بليتش ؟",
    "💠مااسم الحقيقي لمستر 5 منظمة كروكودايل",
    "💠هل كورابيكا بنت أم ولد ؟", 
    "💠ماذا تعني كلمة ناروتو ؟", 
    "💠ماإسم الأعين التي يمتلكها باين أو ناغاتو؟", 
    "💠ماذا يستعمل الاسبادا رقم 1 في القتال ؟", 
    "💠من الذي كان يتنكر احيانا بهيئة كودو شينتشي ",
    "💠ما إسم بطل ديث نوت    ",
    "💠تراكس يتحد مع من دراغون بول؟", 
    "💠اول عدو لجهان من ؟", 
    "💠انمي فيه بنتوتة خجولة وحلوة وشعرها قصير ولونه كحلي زي كذا ولون عينها ابيض وهي نينجا؟؟؟", 
    "💠ولد كان شاب ومجرمين حوله طفل صغير وهو محقق ذكي وبفضله ابو خطيبته سار محقق مشهور؟؟", 
    "💠ما اسم زعيم عصابة العناكب ؟",
    "💠ما هى اسماء ( ال ) الاخرى التى ظهرت فى الانمى؟",
    "💠من أول شخص تعرف عليه جون من أصدقائه ؟ ", 
    "💠حركة قوية يجيدها كاكاشي و ساسكي ماهي اسم هذه الحركة؟", 
    "💠من هو شقيق ساسوكي ?", 
    "💠من هو قاتل اوروتشيمارو ?",
    "💠 ديــث نوت: جملة ريوك (في النهاية اي واحد يأخذ الديث نوت يصبح ......)",
    "💠 كــونــان : مــن هــو مــؤلف انمــي كــونــان؟",
    "💠 نــاروتــو: ماذا تعني (( كــيكي توتا))",
    "💠 نــاروتــو : من قتل نيــنجا الســيوف الاســطورية؟؟",
    "💠 جينتاما: شو اسم قبيلة كاغورا؟",
    "💠 نــاروتــو : مين مدرب اوبيتو الثاني؟؟",
    "💠 هنــتر اكــس هنتــر : اي سنــة صــدرت اول حــلقة من الانــمي؟",
    "💠 جــوجــو: مين اول شــخص فــعــل قــوة الاســتان؟",
    "💠 ديــث نــوت: الوسيــلة الوحــيدة لــقتل الــشينيغامــي؟؟",
    "💠 هــنتر اكــس هنتــر: مــا اســم اب كيــلوا؟",
    "💠 الخــطايا السبــع المــميتة: ما قوة اليزابيث؟",
    "💠 كــونــان : ما عــدد افــلام الانــمي",
    "💠 من اول رجل قاتله لوفي ؟",
    "💠 من اول من انضم لطاقم شانكس ؟",
    "💠 ما إسم طاقم كايدو ؟؟",
    "💠 ما إسم زامبكتو بياكويا ؟؟",
    "💠 من قائد الفرقة الثامنة في مجمع الارواح ؟",
    "💠 م إسم زوجة بياكويا ؟",
    "💠 ماسم بانكاي ايتشيقو ؟",
    "💠 من صاحب زامباكتو هانيكو ؟",
    "💠 من قائد الفرقة التاسعة في مقر الارواح النقية ، اسم كامل ؟ ",
    "💠 ما اسم فن التقيد 63 ، بالياباني ؟",
    "💠 ما اسم بانكاي بياكيا",
    "💠 ما اسم شيكاي اوراهارا ؟",
    "💠 من صاحب فاكهة سونا سونا نومي ؟",
    "💠 أين ظهر ايس لأول مرة ؟",
    "💠 ما اسم الجزيرة التي تقيم بها هانكوك ؟",
    "💠 من صاحب فاكهة سوبا سوبا نومي ؟",
    "💠 ما اسم سياف طاقم تيتش ؟",
    "💠 ما اسم ملاح طاقم اللحية السوداء ؟",
    "💠 من قائد الفرقة الخامسة في قراصنة اللحية البيضاء ؟",
    "💠 ما اسم فاكهة تيتش ؟",
    "💠 من هو عضو عصابة العنكبوت الذي لم يكن يثق بهيسوكا و كان يريد قتله ؟",
    "💠 ما اسم البوابة التي تدخلك الى ممتلكات عائلة الزولديك ؟ ",
    "💠 ما اسم الدولة التي يوجد بها جبل كوكورو ؟",
    "💠 ما اسم فاكهة اوكيجي ؟",
    "💠 كم مرة تم القبض على كايدو ؟",
    "💠 من ثاني تشوبيكاي ظهر في ون بيس ؟",
    "💠 كم مرة تقاتل غوكو و كوريوين في جزء Z ؟",
    "💠 ما اسم بولما الأول ؟",
    "💠 من هو أول شخص يتحول لسوبر سايان ؟",
    "💠 من اكثر فتاة لها شعبية بـ فيري تيل؟",
    "💠 من هي اكبر شخصية من البشر في ون بيس ؟",
    "💠 كم عدد مستويات الامبل داون ؟",
    "💠 ماهي علاقة شانكس مع باغي ؟",
    "💠 لوفي قاتل اثنان مستخدمين فاكهة لوجيا قبل السنتين من هم ؟",
    "💠 من هو صاحب ثاني اعلى رتبة بـ حكومة العالم ؟",
    "💠 من هو ملاح طاقم اللحية السوداء ؟",
    "💠 ما اسم فاكهة كوما ؟",
    "💠 كم مره يأخذ الصياد بطاقة الصيادين؟",
    "💠 كم مره تعرض كيلوا ل الصفع؟",
    "💠 كم عدد الاشخاص الذين قتلتهم عصابة العنكبوت من قبيلة كوروتا",
    "💠 كم استغرق من الوقت ل صنع حلقة١٣٦من انمي هنتر؟",
    "💠 لماذا يستطيع مادرا استخدام عنصر الخشب؟",
    "💠 ما اسم العائلة التي تمتلك خاصية (( البياكوجان ))؟",
    "💠 ا العنصر الذي يشتهر فيه عشيرة الأوتشيها؟",
    "💠 كم عدد أعضاء منظمة الأكاتسكي ؟",
    "💠 مين اللي قتل الكازيكاجي الرابع؟",
    "💠 من الشخص الذي قتله إيتاشي لكي يحصل على المنجيكيو شارينقان ؟",
    "💠  كم عدد البوابات التي قام لي بفتحها ضد جارا؟",
    "💠 من الذي أدخل الكيوبي في جسد ناروتو؟",
    "💠 من هو رفيق إيتاشي في الأكاتسكي ؟",
    "💠 من هو خصم كاكاشي في اول مهمة له مع ناروتو؟",
    "💠 ما اسم اخ ميوزيناشي رينا ؟",
    "💠 من الذي تنكر بشكل جاك السفاح عندما كان شينتشي و ران في امريكا؟",
    "💠 وش اسم الدواء الي قلص كودو سينتشي",
    "💠 وش اسم سيارة جين؟",
    "💠 كم مره مات ايشيغو في الانمي",
    "💠 من اول شخصية رسمها كوبو",
    "💠 كم عدد المرات التي قالت اوريهمي كورساكي كن",
    "💠 من هي اكثر شخصية يحب ان يرسمها كوبو",
    "💠 من هو اصغر شينوبي اصبح تشونين في كونوها ؟",
    "💠 من القائل:عندما تكون قرصان تستطيع ان تفعل ما تؤمن به",
    "💠 من هي اصغر شخصية تتحول ل سوبر سايان",
    "💠 كم عمر السلحفاة اللي مع مستر روشي،",
    "💠 من اذكى اوراهارا كيسكي ولا ايزن؟؟",
    "💠 في اي حلقة ظهر اسم البانكاي ل اول مره",
    "💠 من قائد الفرقة السادسة في مجتمع الأرواح ؟",
    "💠 ما اسماء الكهنة الاربعة؟",
    "💠 ما اسم سفينة روجر",
    "💠 من أي نوع ينتمي [ إيشيدا ] ؟",
    "💠 من هو القائد الثالث لمقر الأرواح النقية ؟",
    "💠 ما هي الشخصية المفضلة لدا الكاتب في هنتر اكس هنتر",
    "💠 ما اسم اكبر عضو في عائلة الزولدك",
    "💠 مين اللي قتل الكازيكاجي الرابع؟",
    "💠 وش نوع النين الخاص ب قون",
    "💠 رتب عائلت الزولديك من الأكبر الى الأصغر",
    "💠 ماهي افضل شخصية لدا قوشو",
    "💠 ما اسم اليد اليمنى لرئيس المنظمة السوداء",
    "💠 كم عدد الاشخاص الذين يعرفون ان كونان هو سينشي",
    "💠 لماذا سمي اللحية البيضاء وهو ليس لدية لحية",
    "💠 من هي اول امرآه رفع سانجي السلاح عليها",
    "💠 مامعنى اسم أنمي ديث نوت",
    "💠 منهم الذين قتلو قبيلة كوروتا",
    "💠 من هو اخطر رجل في تاريخ ون بيس ؟",
    "💠 من هو قائد الفرقة الحادية عشر في مقر الأرواح النقية ؟",
    "💠 ماسم فاكهة كروكودايل الرمال  ؟",
    "💠 اول ظهور لكروكودايل في الانمي الحلقة كم ؟",
    "💠 ماسم منظمة كروكودايل ؟",
    "💠 ماهو [ تمثال جيدو ] في إنمي ناروتو شيبودن ؟",
    "💠 كم شخص قتل من قبل ناروتو ؟",
    "💠 ماسم مطعم زيف ؟",
    "💠 ماهم اقوى خمس أشخاص في بليتش ؟",
    "💠  كم يبلغ المعلم روشي في انمي دراغون بول من العمر ؟",
    "💠 ماهي اقوى قراصنة في الجيل الأسوى ؟ بدون لوفي ",
    "💠 هل تتوقع ان يصبح باجي يونكو ؟",
    "💠 من تتوقع ان يقضي على تيتش ؟",
    "💠 اكثر شخصية في ون بيس تستمتع بقتالها ؟",
    "💠 هل تتوقع ظهور اخر لإينل ؟",
    "💠 ماهي اكثر شخصية غثيثة في ون بيس ؟",
    "💠 ماهي افضل فاكهة شيطان من وجهة نظرك ؟",
    "💠 هل ترى بالفعل ان اكاينو قادر على منافسة اليونكو ؟",
    "💠 تتوقع الحلقة كم كونان ينتهي نهائيا ؟",
    "💠 ضع نهاية لانمي كونان من جميع النواحي : العصابه ، كايتو ، مصير كونان وران ، هيبارا ، اكاي ؟",
    "💠 متى تتوقع تعرف ران ان كونان هو سينشي ؟",
    "💠 ضع نهاية لانمي هنتر ، موضحاً مصير العصابه ؟",
    "💠 افضل خمس تقنيات من وجهة نظرك في هنتر ؟",
    "💠 ماهو اكثر انمي يعجبك قتاله ؟",
    "💠 ماهو اقوى شخص في هنتر ؟",
    "💠ما مهنة ابو فرآنكي ؟",
    "💠من هو أول مدرب لناروتو ?",
    "💠من هو الرصاصة الفضية ؟", 
    "💠من هو قاتل ساسوري ?", 
    "💠من هو المتحكم بشخصية باين?", 
    "💠هل والد غوغو حي او ميت ؟",
    "💠اخر اتحاد بين عوعو وفيجيتا ما هو اسمهـ؟", 
    "💠ما هو اسم الاسباد رقم 0", 
    "💠من الذي تنكر بشكل جاك السفاح عندما كان شينتشي و ران في امريكا ؟", 
    "💠ما هو الاسم الحقيقي لشيري (هايبرا)؟",
    "💠ماهي هيئة أول وحش قاتله سايتاما من أنمي وان بيش مان ؟", 
    "💠من فاز في أخر قتال بين ناروتو و ساسوكي ?",
    "💠↲ما هوا أسم عائلة ميناتو؟"
]
              const trut = truth[Math.floor(Math.random() * truth.length)]
              buffer = await getBuffer(`https://i.ibb.co/9bg6Qzn/quiz-anime-840x600.jpg`)
              JirayaBot.sendMessage(from, buffer, image, { quoted: mek, caption: '_*سؤال*_\n'+ trut })
              break
              
//══════════[ OWNER FEATURES ]══════════//

case 'نش':
             
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('وين الكتابة يخي؟')
             anu100 = await JirayaBot.chats.all()
             if (isMedia && !JirayaBot.message.videoMessage || isQuotedImage) {
             const encmediaboomb = isQuotedImage ? JSON.parse(JSON.stringify(JirayaBot).replace('quotedM','m')).message.extendedTextMessage.contextInfo : JirayaBot
             bc100 = await JirayaBot.downloadMediaMessage(encmediaboomb)
             for (let _ of anu100) {
             JirayaBot.sendMessage(_.jid, bc100, image, {quoted: fgi, caption: `*「 اعلان عن البوت 」*\n\n${body.slice(4)}`})
}
             reply('تم النشر.')
             } else {
             for (let _ of anu100) {
             JirayaBot.sendMessage(_.jid, 
			{"contentText": `*「 اعلان عن البوت 」*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "🗃️ الاوامر"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('تم النشر.')
}
             break
case 'نشر':

if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('الكتابة ?')
anubc2 = await JirayaBot.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia12345 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await JirayaBot.downloadMediaMessage(encmedia12345)
for (let _ of anubc2) {
JirayaBot.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`تم النشر. ✓${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmediaki = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await JirayaBot.downloadMediaMessage(encmediaki)
for (let _ of anubc2) {
JirayaBot.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`تم النشر. ✓${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmediadirk = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await JirayaBot.downloadMediaMessage(encmediadirk)
for (let _ of anubc2) {
JirayaBot.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
}
reply(` تم النشر.✓${body.slice(4)}`)
} else {
for (let _ of anubc2) {
sendMess(_.jid, `\n\n${body.slice(4)}`)
}
reply(`تم النشر.`)
}
break
case 'نشر2':

if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('وين الكتابة يخي؟ ?')
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmediabcgc = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bcgc = await JirayaBot.downloadMediaMessage(encmediabcgc)
for (let _ of groupMembers) {
JirayaBot.sendMessage(_.jid, bcgc, image, { caption: `*「 اعلان عن البوت 」*\n*Group* : ${groupName}\n\n${body.slice(6)}` })
}
reply('')
} else {
for (let _ of groupMembers) {
sendMess(_.jid, `*「 اعلان عن البوت 」*\n*المجموعه* : ${groupName}\n\n${body.slice(6)}`)
}
reply('تم الارسال لاعضاء المجموعة')
}
break
case 'clearallhj':

if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
anuclearall = await JirayaBot.chats.all()
JirayaBot.setMaxListeners(25)
for (let _ of anuclearall) {
JirayaBot.deleteChat(_.jid)
}
textImg('Successfully deleted all chat')
break
case 'حطه':
case 'setppbotgh':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedImage) return reply(`منشن عالصورة ${prefix}الي تبي احط`)
enmediaheheh = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await JirayaBot.downloadAndSaveMediaMessage(enmediaheheh, './database/sampah/media_user')
await JirayaBot.updateProfilePicture(botNumber, media)
reply('تمم يحب')
break
case 'setbotbiougjhhj':
case 'حطه1':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('The text?')
iyek = body.slice(8)
JirayaBot.setStatus(`${iyek}`)
reply(`تم تغيير الوصف ${body.slice(8)}`)
break
case 'setbotnamejg':

if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
anuoke112 = body.slice(11)
JirayaBot.updateProfileName(anuoke112)
reply(`تم تغيير اسم البوت ${body.slice(11)}`)
break
case 'عام':
if (!mek.key.fromMe && !isOwner) return reply('اطلب من جيرايا')
if (self === false) return
self = false
reply(`\`\`\`يمكنك استخدامي الان\`\`\``)

break
case 'اسكت':
if (!mek.key.fromMe && !isOwner) return reply('دز بس، شتبي؟')
if (self === true) return
self = true
reply(`\`\`\`تم\`\`\``)
break
case 'autoread':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autoread = true
reply('Success..')
} else if(args[0] == 'off'){
autoread = false
reply('Success..')
}
break
case 'autotype':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autoketik = true
reply('Success..')
reply('Remember if autovn is on, please turn it off first')
} else if(args[0] == 'off'){
autoketik = false
reply('Success..')
}
break
case 'autorecord':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autovn = true
reply('Succes..')
reply('Remember if autotype is on, please turn it off first')
} else if(args[0] == 'off'){
autovn = false
reply('Success..')
}
break
case 'tospambbn':
              if (!isOwner && !mek.key.fromMe) return reply('Only Owner Can Use This Feature.')
              if (!arg) return reply(`Reply to sticker, contact, doc, or media with ${prefix}tospam amount in number`)
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Max 50!')
if (!Number(oi2)) return reply('The number must be a number!')
	  for (let i = 0; i < oi2; i++) {
	  JirayaBot.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Amount must be a number!')
if (Number(args[0]) >= 50) return reply('Max 50!')
	  for (let i = 0; i < args[0]; i++) {
	  JirayaBot.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await JirayaBot.downloadAndSaveMediaMessage(encmedian)
				anutospem = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Amount must be a number!')
	if (Number(args[0]) >= 50) return reply('Max 50!')
	  for (let i = 0; i < args[0]; i++) {
	  JirayaBot.sendMessage(from, anutospem, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await JirayaBot.downloadAndSaveMediaMessage(encmediat)
				anutospem2 = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Amount must be a number!')
	if (Number(args[0]) >= 50) return reply('Max 50!')
	  for (let i = 0; i < args[0]; i++) {
	  JirayaBot.sendMessage(from, anu2spem2, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await JirayaBot.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Max 50!')
	if (!Number(oi2)) return reply('Amount must be a number!')
	  for (let i = 0; i < oi2; i++) {
	  JirayaBot.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'spamhjg':
				if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
					if (!arg) return reply(`Use ${prefix}spam text|amount`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Use ${prefix}spam text|amount`)
				if (Number(argzi[1]) >= 50) return reply('Max 50!')
				if (isNaN(argzi[1])) return reply(`must be a number`)
				for (let i = 0; i < argzi[1]; i++){
					JirayaBot.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = JirayaBot.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'مع السلامه 💙', null)
             JirayaBot.groupLeave(id)
}
             break
             case 'addvn':
					if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Whats the vn name??')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await JirayaBot.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					JirayaBot.sendMessage(from, `Success, please check with *${prefix}vnlist*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
					try {
					 nmm = body.slice(7)
					 wanudelvn = vien.indexOf(nmm)
					 vien.splice(wanudelvn, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Successfully deleted vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'vnlist':
				case 'listvn':
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_To retrieve the vn, please reply to this message with the caption of the vn name_`
					JirayaBot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
					case 'addimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Whats the name of the image??')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await JirayaBot.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					JirayaBot.sendMessage(from, `Success, please check with *${prefix}imglist*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
					try {
					 nmm = body.slice(10)
					 wanudelimg = imagi.indexOf(nmm)
					 imagi.splice(wanudelimg, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 reply(`Successfully deleted image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
					teks = '*IMAGE List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_To take a picture, please reply to this message with the caption of the image name_`
					JirayaBot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
					case 'addsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
					if (!isQuotedSticker) return reply('Reply sticker')
					nm = body.slice(12)
					if (!nm) return reply('حط اسم للملصق')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await JirayaBot.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					JirayaBot.sendMessage(from, `تم اضافة الملصق *${prefix}للائحة*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
					try {
					 nmm = body.slice(12)
					 wanudelstick = setik.indexOf(nmm)
					 setik.splice(wanudelstick, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 reply(`Successfully deleted the sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_To take a sticker, please reply to this message with the caption of the sticker name_`
					JirayaBot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					
//══════════[ GROUP FEATURES ]══════════//

                   case 'انشاء':
			case 'creategroup':
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`اكتب ${prefix}منشن احد واكتب اسم المجموعه`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anucgc = []
						anucgc.push(mentioned[i])
                    }
					JirayaBot.groupCreate(argz[0], anucgc)
					reply(`تم انشاء قروب ${argz[0]}`)
                }
				break
case '1وصف':
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await JirayaBot.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
case 'getpict':
case 'getpp':
case 'getdp':
				case 'جيب-صورة':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await JirayaBot.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            JirayaBot.sendMessage(from, pict, image, {quoted: mek})
            break
                    case 'جيب-اسم':
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = JirayaBot.contacts[ambl] != undefined ? JirayaBot.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : JirayaBot.contacts[ambl].notify || JirayaBot.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
case 'اطلع':
            if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	JirayaBot.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'وصف':
				case 'getdesc':
              
				if (!isGroup) return reply(mess.only.group)
					anugetdescgc = from
			   metadete = await JirayaBot.groupMetadata(anugetdescgc)
				JirayaBot.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
case 'nsfwgh':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}nsfw on untuk mengaktifkan\n${prefix}nsfw off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isNsfw) return reply('*nsfw is active !!*')
_nsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
reply(`\`\`\`تم, تفعيله\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isNsfw) return reply('*nsfw is already off before !!*')
_nsfw.splice(from, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
reply(`\`\`\`تم, تعطيله\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*on to enable, off to disable*')
}
break
case 'ترحيب':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`اكتب :\n${prefix}ترحيب\n${prefix}لتفعيله او تعطيله`)
if ((args[0]) === 'تفعيل') {
if (isWelkom) return reply('*الترحيب مفعل مسبقا*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`تم, تفعيل الترحيب فالمجموعة\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'تعطيل') {
if (!isWelkom) return reply('*الترحيب معطل مسبقا*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`تم, تعطيل الترحيب فالمجموعة\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*تفعيل  او تعطيل*')
}
break
case 'مضاد':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`اختر تفعيل ام تعطيل`)
if (args[0].toLowerCase() === 'تفعيل'){
if (isAntiLink) return reply(`مفعل مسبقا`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`تم, تفعيل مضاد الروابط فالمجموعة\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'تعطيل'){
let anuantilink = _antilink.indexOf(from)
_antilink.splice(anuantilink, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`تم, تعطيل مضاد الروابط\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_اختر تفعيل او تعطيل_`)
}
break
case 'فرتكس':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`اختر تفعيل ام تعطيل`)
if (args[0].toLowerCase() === 'تفعيل'){
if (isAntiVirtex) return reply(`مفعل مسبقا`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`تم, تفعيل مضاد الفيروسات\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'تعطيل'){
let anuantivtex = _antivirtex.indexOf(from)
_antivirtex.splice(anuantivtex, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`تم, تعطيل مضاد الفيروسات\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_اختر تفعيل او تعطيل_`)
}
break
case 'gc': case 'غف':
buttonss = [{buttonId: `${prefix}opengc`, buttonText: {displayText: 'فتح ⚙️'}, type: 1},{buttonId: `${prefix}closegc`, buttonText: {displayText: 'اغلاق ⚙️'}, type: 1}]
const bMess = {
    contentText: 'اغلاق / فتح\n\nقروب',
    footerText: 'اختر وحدة',
    buttons: buttonss,
    headerType: 1
}
await JirayaBot.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: mek})
break
					case 'فتح':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.group)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
                   reply(`تم فتح قروب ${groupName}`)
						JirayaBot.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'غلق':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
						reply(`تم غلق قروب ${groupName}`)
						JirayaBot.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
case 'grouplink':
case 'gruplink':
case 'رابط':
case 'linkgroup':
case 'linkgrup':
case 'linkgc':

if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await JirayaBot.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n*${groupName}* رابط قروب`
JirayaBot.sendMessage(from, yeh, text, { quoted: fgi })
break
case 'ترقية' :

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('منشن الي تبي ترقيه 🐧')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'منشن الي تبي ترقيه :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
JirayaBot.groupMakeAdmin(from, mentioned)
} else {
mentions(`تم ترقية: @${mentioned[0].split('@')[0]} لمشرف في *${groupMetadata.subject}*`, mentioned, true)
JirayaBot.groupMakeAdmin(from, mentioned)
}
break
case 'تخفيض' :

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('منشن المشرف الي تبي تخفضه')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'منشن الي تبي تخفضه :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
JirayaBot.groupDemoteAdmin(from, mentioned)
} else {
mentions(`تم خفض : @${mentioned[0].split('@')[0]} لعضو في`, mentioned, true)
JirayaBot.groupDemoteAdmin(from, mentioned)
}
break
case 'sehwakorchi':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
JirayaBot.groupDemoteAdmin(from, members_id)
break
case 'sirikorchi':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
JirayaBot.groupMakeAdmin(from, members_id)
break
case 'دخل' :

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('مين تبي تدخل؟')
if (args[0].startsWith('08')) return reply('حط رمز الدولة')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
JirayaBot.groupAdd(from, [num])
} catch (e) {
console.log('خطأ :', e)
reply('فشل ادخاله للمجموعه, يمكن حاط الدعوة مخصصه')
}
break
case "طرد":

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("منشن الشخص الي بدك تطرده!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
JirayaBot.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anukick = mek.message.extendedTextMessage.contextInfo.participant;
JirayaBot.groupRemove(from, [anukick]);
reply(mess.success);
} else {
JirayaBot.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'منشن':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `💠⇉ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions('⏣|━─━─━⏣⊰🌑〘 *المنشن الجماعي* 〙🌑⊱⏣━─━─━|⏣\n'+teks+'〘 _*اسفين عالازعاج*_ 〙', members_id, true)
break
case 'اسم':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
JirayaBot.groupUpdateSubject(from, `${body.slice(9)}`)
JirayaBot.sendMessage(from, `\`\`\`تم تغير اسم المجموعه ل\`\`\` *${body.slice(9)}*`, text, { quoted: mek })
break
case 'وصفف':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
JirayaBot.groupUpdateDescription(from, `${body.slice(9)}`)
JirayaBot.sendMessage(from, `\`\`\`تم تغيير وصف القروب\`\`\` *${groupMetadata.subject}* ل: *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'setgrouppp':
case 'افتار':
case 'setpp':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmediasetppgc = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await JirayaBot.downloadMediaMessage(encmediasetppgc)
JirayaBot.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`ارسل صورة وبحطها افتار قروب ${prefix}🐧`)
}
break
case 'فعالية':
    case 'مسابقة':

        if (!isGroup) return reply(mess.only.group)
        if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
        try {
        quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
        hideTag(from, `${quotedText}`)
        } catch {
        hideTag(from, `${q}`)
        }
        break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
case 'قروب':

if (!isGroup) return reply(mess.only.group)
try {
var pic = await JirayaBot.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*معلومات القروب*\n\n*الاسم :* ${groupName}\n*وقت انشائه :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*مؤسس المجموعه :* @${groupMetadata.owner.split('@')[0]}\n*عدد المشرفين :* ${groupAdmins.length}\n*عدد الاعضاء :* ${groupMembers.length}\n*الترحيب :* ${isWelkom ? 'شغال' : 'معطل'}\n*مضاد الروابط :* ${isAntiLink ? 'شغال' : 'معطل'}\n*ديسك :* \n\n${groupMetadata.desc}`
JirayaBot.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'اعادة':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
JirayaBot.query({json, expect200: true})
reply('تم حذف رابط القروب القديم')
break
       case 'online':
       case 'onlinelist':
       case 'listonline':
       case 'متصل':                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(JirayaBot.chats.get(ido).presences), JirayaBot.user.jid]
             JirayaBot.sendMessage(from, 'قائمة المتصلين:\n' + online.map(v => '📍 @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
                           case 'منشن':
                case 'tag':
					if (!isGroup) return reply(mess.group)
					if (!isGroupAdmins && !mek.key.fromMe) return reply('هذا الامر فقط للمشرفين')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `💠 @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
case 'تاج':
case 'sticktag':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins && !mek.key.fromMe) return reply('هذا الامر فقط للمشرفين')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await JirayaBot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await JirayaBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            JirayaBot.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await JirayaBot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await JirayaBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            JirayaBot.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await JirayaBot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await JirayaBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            JirayaBot.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await JirayaBot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await JirayaBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            JirayaBot.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await JirayaBot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await JirayaBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            JirayaBot.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await JirayaBot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await JirayaBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            JirayaBot.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply image/document/gif/sticker/audio/video with caption ${prefix}totag`)
        }
        break   
case 'مشرفين':
case 'adminlist':

if (!isGroup) return reply(mess.only.group)
teks = `قائمة مشرفي *${groupMetadata.subject}*\nعدد المشرفين  : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `${no.toString()}💂 @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'مؤسس':
case 'ownergroup':

if (!isGroup) return reply(mess.only.group)
options = {
text: ` 🤴: https://wa.me/${from.split("-")[0]}`,
contextInfo: { mentionedJid: [from] }
}
JirayaBot.sendMessage(from, options, text, { quoted: mek })
break
case 'contag':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
argzi = arg.split('|')
if (!argzi) return reply(`Use ${prefix}kontag @tag|name`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
hidetagKontak(from, mentioned[0].split('@')[0], argzi[1])
} else {
hidetagKontak(from, argzi[0], argzi[1])
}
break
case 'رقم':

if (!isGroup) return reply(mess.only.group)
argzu = arg.split('|')
if (!argzu) return reply(`Use ${prefix}contact @tag|name`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
sendKontak(from, mentioned[0].split('@')[0], argzu[1])
} else {
sendKontak(from, argzu[0], argzu[1])
}
break

//━━━━━━━━━━━━━━━[ THE END OF ALL FEATURES ]━━━━━━━━━━━━━━━━━//
				
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
if (budy.includes(`قروب ملصقات`)) {
    reply(`https://chat.whatsapp.com/LQKA0w2JjLi9QpLOhWxoA4`)
    }

if (budy.includes(`سلام عليكم`)) {
    reply(`وعليكم السلام ورحمه الله وبركاته`)
    }

if (budy.includes(`نرتبط`)) {
    reply(`ممنوع احتكاك فالقروب`)
    }
      
if (budy.includes(`Buenos dias`)) {
    reply(`Buenos Dias trolos de mierda`)
    }
        
if (budy.includes(`برب`)) {
    reply(`شفيه الحلو/ه زعل 😿`)
    }
    if (budy.includes(`اية الكرسي`)) {
    reply(`﴿ اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ ﴾
    [ البقرة: 255]`)
    }

if (budy.includes(`تصبحون على خير`)) {
    reply(`وانت من اهله`)
    }
   
if (budy.includes(`صباح الخير`)) {
    reply(`صباح النور والسرور`)
    }
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
	JirayaBot.sendMessage(`${owner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "جيرايا",body:"Dont forget to subscribe Jiraya",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/jirayapic1.jpg'),sourceUrl:"https://wa.me/34613110267"}}})
        }
	// console.log(e)
	}
}


	
    

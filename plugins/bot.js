
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./Assets/mp3/${pickRandom(["fluxxwave_(lay_with_me)_-_clovis_reyes_&_the_dive_[edit_audio](256k)"])}.mp3`

m.reply( `Hello ${taguser} Need help?  type ∆menu to see full features @𐏕˹ꭗ 𝑵͢ꭺ͢ꮮ͢ꮴ͢ꮜ͢ꮢ ꭗ˼𐏕 `)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|guru)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

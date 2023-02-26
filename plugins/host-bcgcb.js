import fs from 'fs'
let handler = async (m, { conn, text } ) => {
 let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
 text = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.quoted && m.quoted.caption ? m.quoted.caption : m.quoted && m.quoted.description ? m.quoted.description : ''
 for (let id of groups) {
 let member = (await conn.groupMetadata(id)).participants.map(v => v.jid)
conn.sendButton(id, htki + ' *BROADCAST* ' + htka + '\n\n*Pesan:*\n' + text, wm, fla + 'BROADCAST', [['Owner 🎐', '.owner'],['Donasi ✨', '.donasi']], fakes, adReplyS)
  }
}
handler.command = ['bcgcb']
handler.tags = ['host']
handler.help = ['bcgcb']
export default handler
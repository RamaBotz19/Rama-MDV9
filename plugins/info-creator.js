const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: Mass Aji>3
item.ORG: Mass Aji>3
item1.TEL;waid=6287793236775:79609055704@s.whatsapp.net
item1.X-ABLabel:NEED DOI CEWE
item2.YOUTUBE;type=INTERNET: https://youtube.com/channel/UCJNi-zXIsky4nheONnxoY1w
item2.X-ABLabel:YOUTUBE
item3.ADR:;;🎍AMERIKA SERIKAT;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https//github.com/RamaBotz19 
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let jarot = 'https://telegra.ph/file/0321666c0d11259297013.jpg'
await conn.send3ButtonImg(m.chat, jarot, `*Hai kak @${m.sender.split('@')[0]} 👋,  Itu nomor ayng gw, mksudnya owner gw*`, '📮: Lagi need Ayng cewe ka', 'Store', '.store', 'Back', '.menu', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler

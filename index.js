const TelegramBot = require('node-telegram-bot-api')
const token = '6968485063:AAGBH5VvCG-_5sFsrTlOwkZui_3K1Or2epo'
global.bot = new TelegramBot(token, { polling: true })
bot.on('message', (msg) => {
    console.log(msg)
    if (msg.chat.id == '1080302297' && msg.chat.username == 'roberth0') {
        console.log('Admin request')
        if (msg.video) {
            bot.sendVideo('-1002075728489', msg.video.file_id, {
                caption: '<a href="https://t.me/kotpesik">Котопес</a>',
                parse_mode: 'HTML' 
            })
            console.log('A video is sent')
        }
        if (msg.photo) {
            bot.sendPhoto('-1002075728489', msg.photo[2].file_id, {
                caption: '<a href="https://t.me/kotpesik">Котопес</a>',
                parse_mode: 'HTML' 
            })
            console.log('A photo is sent')
        }
        if (msg.animation) {
            bot.sendAnimation('-1002075728489', msg.animation.file_id, {
                caption: '<a href="https://t.me/kotpesik">Котопес</a>',
                parse_mode: 'HTML' 
            })
            console.log('An animation is sent')
        }
    } else {
        console.log('Access denied!')
    }
    // bot.deleteMessage(msg.chat.id, msg.message_id)
})

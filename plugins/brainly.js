const { fetchJson } = require('../module/util');

let brainly = {
    name: 'brainly',
    status: false,
    clue: ['Fungsi: Brainly', 'Format:\n<code>\n .brain kata\n .wikipedia kata</code>'],
    regex: /^[!\/\.]brain(?:ly) (.+)$/i,
    run: function (tg, update) {
        let message = update.message
        let text = message.content.text.text

        if (cocok = this.regex.exec(text)) {
            tg.sendChatAction(message.chat_id)
            let url = 'https://pencarikode.xyz/api/brainly?search='+ cocok[1] +'&apikey=Tester'

            let data = {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            }

            fetchJson(url, data).then(res => {
                if (res.status == 200) {
                    pesan = res.data.jawaban
                } else {
                    pesan = 'Not Found!'
                }
                tg.sendMessage(message.chat_id, pesan)
            })

            return true;
        }
    }
}

module.exports = {
    brainly
}

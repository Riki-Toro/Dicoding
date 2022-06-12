const mail = {
    from: "pengirim@dicoding.com",
    sendMessage: function(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
};

console.log(mail.from);
mail.sendMessage('apakabar', 'penerima@dicoding.com');

mail.from = 'pengirim2@dicoding.com';

mail.saveContact = function(addr) {
    console.log(`email saved ${addr}`);
}

console.log('-------------------------------- Introduction to OOP --------------------------------');
console.log('');
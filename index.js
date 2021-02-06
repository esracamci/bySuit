const Discord = require("discord.js");
const fetch = require('node-fetch')
const bot = new Discord.Client();
const token = 'YOUR-BOT-TOKEN'


///////// SHUFFLE SUITE BUT ONLY ONCE OKAY? 
function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {

// Pick a remaining element...
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex -= 1;

// And swap it with the current element.
temporaryValue = array[currentIndex];
array[currentIndex] = array[randomIndex];
array[randomIndex] = temporaryValue;
}
return array;
}

///////// SUITS
///hearts
let hearts = [
'**Ace of Hearts**',
'**Two of Hearts**',
'**Three of Hearts**',
'**Four of Hearts**',
'**Five of Hearts**',
'**Six of Hearts**',
'**Seven of Hearts**',
'**Eight of Hearts** ',
'**Nine of Hearts** ',
'**Ten of Hearts**',
'**Jack of Hearts**',
'**Queen of Hearts**',
'**King of Hearts**'
];
shuffle(hearts);


let diamonds = [
'**Ace of Diamonds**',
'**Two of Diamonds**',
'**Three of Diamonds**',
'**Four of Diamonds**',
'**Five of Diamonds:**',
'**Six of Diamonds**',
'**Seven of Diamonds**',
'**Eight of Diamonds** ',
'**Nine of Diamonds** ',
'**Ten of Diamonds**',
'**Jack of Diamonds**',
'**Queen of Diamonds**',
'**King of Diamonds**'
];
shuffle(diamonds);


let spades = [
'**Ace of Spades**',
'**Two of Spades**',
'**Three of Spades**',
'**Four of Spades**',
'**Five of Spades:**',
'**Six of Spades**',
'**Seven of Spades**',
'**Eight of Spades** ',
'**Nine of Spades** ',
'**Ten of Spades**',
'**Jack of Spades**',
'**Queen of Spades**',
'**King of Spades**'
];
shuffle(spades);


let clubs = [
'**Ace of Clubs**',
'**Two of Clubs**',
'**Three of Clubs**',
'**Four of Clubs**',
'**Five of Clubs:**',
'**Six of Clubs**',
'**Seven of Clubs**',
'**Eight of Clubs** ',
'**Nine of Clubs** ',
'**Ten of Clubs**',
'**Jack of Clubs**',
'**Queen of Clubs**',
'**King of Clubs**'
];
shuffle(clubs);


///////// GO WAKE UP YOUR BOT OR HE'S GONNA BE LATE FOR SCHOOL
bot.on('ready', () => {
console.log('bot is ready')
})

bot.login(token)

///////// ADMIN
const prefix = '!'
bot.on('message', async (msg) => {
//if our message doesnt start with our defined prefix, dont go any further into function
if(!msg.content.startsWith(prefix)) {
console.log('no prefix')
return
}

//slices off prefix from our message, then trims extra whitespace, then returns our array of words from the message
const args = msg.content.slice(prefix.length).trim().split(' ')

//splits off the first word from the array, which will be our command
const command = args.shift().toLowerCase()
//log the command
console.log('command: ', command)
//log any arguments passed with a command
console.log(args)


/////////////////////////////////////////////////////////

///////// CRAZY ON YOU
if(command === 'hearts') {
let w = hearts.pop();
console.log(hearts);
console.log(w);

msg.reply(`you've drawn the ${w}. :hearts:
`)
}/// closes if(command


///////// LUCY IN THE SKY WITH DIAMONDS
if(command === 'diamonds') {
let x = diamonds.pop();
console.log(diamonds);
console.log(x);

msg.reply(`you've drawn the ${x}. :diamonds:
`)
}/// closes if(command


///////// ACE OF SPADES
if(command === 'spades') {
let y = spades.pop();
console.log(spades);
console.log(y);

msg.reply(`you've drawn the ${y}. :spades:
`)
}/// closes if(command

///////// CLUBFOOT 
if(command === 'clubs') {
let z = clubs.pop();
console.log(clubs);
console.log(z);

msg.reply(`you've drawn the ${z}. :clubs:
`)
}/// closes if(command



})

const kahootJS = require("kahoot.js-updated");
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function wait(n){
  n = n || 1;
  return new Promise(resolve=>{
    setTimeout(resolve,n * 1000);
  });
}
async function sendBots(pin,name,amount){
  for(let i = 0; i < amount;i++){
    const bot = new kahootJS;
    await bot.join(pin,name + i);
    await wait(0.1);
  }
}

rl.question("Pin: ", pin => {
	rl.question("Name: ", name => {
		rl.question("Amount of bots: ", botAmount => {
			console.log(pin,name,botAmount);
			sendBots(pin,name,botAmount);
		});
	});
});

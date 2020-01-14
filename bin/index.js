#!/usr/bin/env node

const readline = require("readline");
const kahoot = require("kahoot.js-updated");
const client = new kahoot();

const artStr = decodeURI(
  "%0A%20,ggg,%20%20%20%20%20%20%20%20gg%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20,ggggggggggg,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0AdP%22%22Y8b%20%20%20%20%20%20%20dP%20%20%20%20%20%20%20%20%20%20%20%20%20%20,dPYb,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20I8%20%20%20%20%20%20%20dP%22%22%2288%22%22%22%22%22%22Y8,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20I8%20%20%20%0AYb,%20%6088%20%20%20%20%20%20d8'%20%20%20%20%20%20%20%20%20%20%20%20%20%20IP'%60Yb%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20I8%20%20%20%20%20%20%20Yb,%20%2088%20%20%20%20%20%20%608b%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20I8%20%20%20%0A%20%60%22%20%2088%20%20%20%20,dP'%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20I8%20%208I%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2088888888%20%20%20%20%20%60%22%20%2088%20%20%20%20%20%20,8P%20%20%20%20%20%20%20%20%20%20%20%2088888888%0A%20%20%20%20%2088aaad8%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20I8%20%208'%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20I8%20%20%20%20%20%20%20%20%20%20%20%2088aaaad8P%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20I8%20%20%20%0A%20%20%20%20%2088%22%22%22%22Yb,%20%20%20%20%20%20,gggg,gg%20%20I8%20dPgg,%20%20%20%20%20,ggggg,%20%20%20%20%20%20,ggggg,%20%20%20%20%20I8%20%20%20%20%20%20%20%20%20%20%20%2088%22%22%22%22Y8ba%20%20%20%20,ggggg,%20%20%20%20%20I8%20%20%20%0A%20%20%20%20%2088%20%20%20%20%20%228b%20%20%20%20dP%22%20%20%22Y8I%20%20I8dP%22%20%228I%20%20%20dP%22%20%20%22Y8ggg%20%20dP%22%20%20%22Y8ggg%20%20I8%20%20%20%20%20%20%20%20%20%20%20%2088%20%20%20%20%20%20%608b%20%20dP%22%20%20%22Y8ggg%20%20I8%20%20%20%0A%20%20%20%20%2088%20%20%20%20%20%20%608i%20%20i8'%20%20%20%20,8I%20%20I8P%20%20%20%20I8%20%20i8'%20%20%20%20,8I%20%20%20i8'%20%20%20%20,8I%20%20%20,I8,%20%20%20%20%20%20%20%20%20%20%2088%20%20%20%20%20%20,8P%20i8'%20%20%20%20,8I%20%20%20,I8,%20%20%0A%20%20%20%20%2088%20%20%20%20%20%20%20Yb,,d8,%20%20%20,d8b,,d8%20%20%20%20%20I8,,d8,%20%20%20,d8'%20%20,d8,%20%20%20,d8'%20%20,d88b,%20%20%20%20%20%20%20%20%20%2088_____,d8',d8,%20%20%20,d8'%20%20,d88b,%20%0A%20%20%20%20%2088%20%20%20%20%20%20%20%20Y8P%22Y8888P%22%60Y888P%20%20%20%20%20%60Y8P%22Y8888P%22%20%20%20%20P%22Y8888P%22%20%20%2088P%22%22Y88%20%20%20%20%20%20%20%2088888888P%22%20%20P%22Y8888P%22%20%20%2088P%22%22Y88%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A"
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(artStr);

//Remeber only close readline in last nested rl.question.
rl.question("What do you want to do now?\n", answer => {
  if (answer.match("Join Game")) {
    //rl.close();
    rl.question("Enter Game Pin: ", pin => {
      rl.question("Enter your name: ", name => {
        //rl.close();
        console.log(pin);
        console.log(name);
        client.join(pin, name);
        client.on("joined", () => {
          console.log("I joined the Kahoot!");
        });
        client.on("questionStart", question => {
          rl.question("Guess now: ", guess => {
            rl.resume();
            console.log(guess);
            question.answer(Number(guess));
            rl.pause();
          });
          //question.answer(Math.floor(Math.random() * 3));
        });
        client.on("quizEnd", () => {
          console.log("The quiz has ended.");
        });
      });
    });
  }
});

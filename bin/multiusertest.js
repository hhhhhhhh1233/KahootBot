#!/usr/bin/env node

function sleep(milliseconds) {
  //define sleep function
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

const kahoot = require("kahoot.js-updated");

i = 0;
amount = 10000;
name = "Test";
pin = "6047629";

// TODO: Fixa så att den inte bara joina en tredjedel av amount
while (i < amount) {
  const client = new kahoot();
  fname = name;
  fname += i;
  i++;

  client.join(pin, fname);
  client.on("joined", () => {
    console.log("I joined the Kahoot!");
  });
  client.on("questionStart", question => {
    question.answer(Math.floor(Math.random() * 3));
  });
  console.log(fname);
}

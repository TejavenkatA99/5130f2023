const readline = require('readline');

const emailRegex = /^([a-zA-Z0-9._%+-]+)@(gmail|yahoo|hotmail)\.(com)$/i;
const usMobileNumberRegex = /^(?:\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
const urlRegex = /^(https:\/\/)(www\.)?([a-zA-Z0-9.-]+)\.(com|org|net|io|me|co|edu)([\/\w .-]*)*\/?$/;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an email address: ', (email) => {
  if (emailRegex.test(email)) {
    console.log(`${email} is a valid email address.`);
  } else {
    console.log(`${email} is not a valid email address.`);
  }

  rl.question('Enter a US mobile number: ', (phoneNumber) => {
    if (usMobileNumberRegex.test(phoneNumber)) {
      console.log(`${phoneNumber} is a valid US mobile number.`);
    } else {
      console.log(`${phoneNumber} is not a valid US mobile number.`);
    }

    rl.question('Enter a URL: ', (url) => {
      if (urlRegex.test(url)) {
        console.log(`${url} is a valid URL.`);
      } else {
        console.log(`${url} is not a valid URL.`);
      }

      rl.close();
    });
  });
});

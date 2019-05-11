const validateUsername = (input) => {
      const regexUsername = /[a-z]{8}/;
      return regexUsername.test(input);
}
const validateEmail = (input) => {
      const regexEmail = /[a-z]{4}/;
      return regexEmail.test(input);
}

const validataEmail = (input) => {
      const regrexEmail = /[\w\W\d]{}/;
      return regrexEmail.test(input);
}

console.log(validateUsername('zeronull'));
console.log(validateEmail('aku@kamu.com'));
console.log(validataEmail('kamu@aku.com'));
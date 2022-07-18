// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowel_count(str1) {
  return str1.replace(/[^a|e|i|o|u|y]/gi, "").length;
}
console.log(vowel_count("The quick brown fox"));

//2
// Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l) {
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let stringID = "";
  for (let i = 1; i <= l; i++) {
    stringID += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return stringID;
}
console.log(makeid(8));

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function abc(id, callBack) {
  callBack();
}

function anotherFunction() {
  console.log("Hello");
}

abc(1, anotherFunction);

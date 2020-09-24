/*Exercice 1*/

var Age = prompt;

if (Age >= 42) {
  console.log("Patron");
} else if (Age >= 18) {
  console.log("Vous pouvez  entrez vous n’êtes pas majeur vous avez " + Age);
} else {
  console.log(
    "Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez" + Age
  );
}
/*Exercice 2*/

var rand = Math.floor(Math.random() * 32 + 1);

if (rand >= 0 && rand <= 10) {
  console.log("Cool");
} else if (rand >= 11 && rand <= 20) {
  console.log("Tepid");
} else if (rand >= 21 && rand <= 30) {
  console.log("Warm");
} else {
  console.log("Error");
}
/*Exercice 3*/

var date = new Date();
var getDay = date.getDay;
switch (getDay) {
  case 1:
    console.log("nous sommes" + Date);
    break;

  case 2:
    console.log("nous sommes" + Date);
    break;
  case 3:
    console.log("nous sommes" + Date);
    break;
  case 4:
    console.log("nous sommes" + Date);
    break;
  case 5:
    console.log("nous sommes" + Date);
    break;
  case 6:
    console.log("nous sommes" + Date);
    break;
  case 7:
    console.log("nous sommes" + Date);
    break;
  default:
    console.log("nous sommes");
    break;
}

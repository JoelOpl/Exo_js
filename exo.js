/*Exercice 1*/

var Age = prompt "quel avez vous ?";


if (Age >= 42) {
    console.log("Patron");
  }

else if (Age >= 18) {
  console.log("Vous pouvez  entrez vous n’êtes pas majeur vous avez " + Age);
  
} else {
  console.log(
    "Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez" + Age
  );
}
/*Exercice 2*/

var rand = Math.floor((Math.random() * (42)) + 1) ;


if (rand >= 0 && rand <= 10 ) {
    console.log("Cool")
} 

else if (rand >= 11 && rand <= 20) {
    console.log("Tepid")
}

else if (rand >= 21 && rand <= 30) {
    console.log("Warm")
}

else{
    console.log("Error")
}
/*Exercice 3*/

var = Date 

switch (Date) {
    case lundi:
        console.log("nous sommes" + Date)
        break;

        case mardi:
            console.log("nous sommes" + Date)
            break;
            case mercredi:
                console.log("nous sommes" + Date)
                break;
                case jeudi:
                    console.log("nous sommes" + Date)
                      break;
                      case vendredi:
                        console.log("nous sommes" + Date)
                           break;
                           case samedi:
                            console.log("nous sommes" + Date)
        break;
        case dimenche:
            console.log("nous sommes" + Date)
        break;
    default:
        console.log("nous sommes")
        break;
}
const studenti = [
  { ime: "Pero", prosek: 7.1, grad: "Berovo" },
  { ime: "Stojko", prosek: 6, grad: "Kavadarci" },
  { ime: "Stojna", prosek: 10, grad: "Veles" },
  { ime: "Mara", prosek: 5, grad: "Kicevo" },
  { ime: "Petka", prosek: 8.3, grad: "Skopje" },
  { ime: "Mitre", prosek: 7.5, grad: "Ohrid" },
  { ime: "Risto", prosek: 9, grad: "Strumica" },
  { ime: "Tosho", prosek: 8.3, grad: "Gevgelija" },
  { ime: "Jasmina", prosek: 9.3, grad: "Gostivar" },
  { ime: "Vele", prosek: 6.4, grad: "Struga" },
  { ime: "Magda", prosek: 7.8, grad: "Berovo" },
];

var vkupno = 0;
function prosekVkupen() {
    for (let i = 0; i < studenti.length; i++) {
        vkupno += studenti[i].prosek;
      }
      return prosek = vkupno / studenti.length;
}

console.log(prosekVkupen());


var studentName = studenti.filter((student) => 
   { if(student.ime.length <=4){
    console.log(student.ime);
    
}}
);



var studentOdStrumica = studenti.filter((student) =>
  student.grad.includes("Strumica")
);
console.log(studentOdStrumica);


function calculator(month, date) {
  if ((month == 1 && date >= 20  && date <= 30) || (month == 2 && date <= 18)) {
    return (horoscope = "Aquarius");
  } else if ((month == 2 && date >= 19 && date <= 29) || (month == 3 && date <= 20)) {
    return (horoscope = "Pisces");
  } else if ((month == 3 && date >= 21 && date <= 31) || (month == 4 && date <= 19)) {
    return (horoscope = "Aries");
  } else if ((month == 4 && date >= 20 && date <= 30) || (month == 5 && date <= 20)) {
    return (horoscope = "Taurus");
  } else if ((month == 5 && date >= 21 && date <= 31) || (month == 6 && date <= 21)) {
    return (horoscope = "Gemini");
  } else if ((month == 6 && date >= 22 && date <= 30) || (month == 7 && date <= 22)) {
    return (horoscope = "Cancer");
  } else if ((month == 7 && date >= 23 && date <= 31) || (month == 8 && date <= 22)) {
    return (horoscope = "Leo");
  } else if ((month == 8 && date >= 23 && date <= 31) || (month == 9 && date <= 22)) {
    return (horoscope = "Virgo");
  } else if ((month == 9 && date >= 23 && date <= 30) || (month == 10 && date <= 22)) {
    return (horoscope = "Libra");
  } else if ((month == 10 && date >= 23 && date <= 31) || (month == 11 && date <= 21)) {
    return (horoscope = "Scorpio");
  } else if ((month == 11 && date >= 22 && date <= 30) || (month == 12 && date <= 21)) {
    return (horoscope = "Sagittarius");
  } else if ((month == 12 && date >= 22 && date <= 31) || (month == 1 && date <= 19)) {
    return (horoscope = "Capricorn");
  } else return horoscope = "ERROR fix date" ;
}

console.log(calculator(5, 26));
console.log(calculator(2, 31));

function praviagolnik(operacija) {
    return function (a, b) {
        switch (operacija) {
            case 'plostina':
                return a * b;
            case 'perimetar':
                return 2 * a + 2* b;
        }
    };
}

const plostinaNaPravoagolnik = praviagolnik('plostina');
console.log(plostinaNaPravoagolnik(5, 3));

const perimetarNaPravoagolnik = praviagolnik('perimetar');
console.log(perimetarNaPravoagolnik(5, 3));


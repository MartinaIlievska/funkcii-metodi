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
  { ime: "Sevda", prosek: 7.8, grad: "Skopje" },
  { ime: "Sashe", prosek: 10, grad: "Skopje" },
  { ime: "Nade", prosek: 7, grad: "Kumanovo" },
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

// Domasna 2
//1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име ?(растечки)
var studentOdSkopje = studenti.filter((student) => {
  return student.grad.includes("Skopje") && student.ime.endsWith('a') && student.prosek > 7
});
console.log(studentOdSkopje);

// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
var visokProsek = studenti.filter((student) => 
  !student.grad.includes('Skopje') && student.prosek >= 9).sort((a, b) => b.prosek - a.prosek);
console.log(visokProsek);

//? 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
var triStudenti = studenti.filter((student) => 
student.ime.length ==5).slice(0,3).sort((a,b) => a.prosek - b.prosek);
console.log(triStudenti);

//? 4. Вкупен просек на студенти кои се од Куманово
var prosekKumanovo = studenti.filter((student) => student.grad.includes("Kumanovo")).reduce((sum, student) => sum + student.prosek, 0);
console.log('Вкупен просек на студенти кои се од Куманово',prosekKumanovo);

//? 5. Просек на просеците од градовите Скопје и Охрид
var studentiNov = studenti.filter((student) => student.grad.includes("Skopje") || student.grad.includes("Ohrid"));
// console.log(studentiNov);

var prosekOhridISkopje = studentiNov.reduce((sum, studentNov) => sum + studentNov.prosek, 0)/studentiNov.length;
console.log('Просек на просеците од градовите Скопје и Охрид',prosekOhridISkopje);

//? 6. Да се додаде уште еден студент со име Горан, просек 7.3 и град Делчево
studenti.push({ime: 'Goran', prosek: 7.3, grad: 'Delcevo'});
console.log(studenti);

//? 7. Да се избрише првиот студент во студенти
studenti.shift();
console.log(studenti);

//? 8. Да се креира нов array каде што студентите од Охрид и Куманово каде што оценките со просек се за 1 поголем(Динамички)
var studentiArray = studenti.filter((student) => student.grad.includes("Kumanovo") || student.grad.includes("Ohrid"));
console.log(studentiArray);

studentiArray.forEach((studentArray) => studentArray.prosek +=1);
console.log(studentiArray);
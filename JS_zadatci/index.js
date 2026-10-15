/*
1.Zadatak
 for (let i = 0; i <= 10; i++) {
  console.log(i);
} */

/* 2.
let unos = prompt("Upiši broj:");
let n = Number(unos);
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

console.log(sum);
 */
/* 3.
let brojevi = [4, 5, 3, 4, 2];
let sum = 0;
for (let i = 0; i < brojevi.length; i++) {
  sum += i;
}
let prosjek = sum / brojevi.length;
console.log(prosjek); */
/* 4.
let unos = prompt("Upiši broj:");
let n = Number(unos);
for (let i = 1; i < n; i++) {
  if (i % 2 == 0) {
    console.log(i, "Paran");
  } else {
    console.log(i, "Neparan");
  }
} */
/* 5.
let polje = [12, 7, 25, 4, 19];
max = polje[0];
for (let i = 0; i < polje.length; i++) {
  if (polje[i] > max) {
    max = polje[i];
    console.log(polje[i]);
  }
} */
/* 6.
let polje = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let unos = prompt("Upiši broj koji zelis pronaci:");
let n = Number(unos);

for (let i = 0; i < polje.length; i++) {
  if (polje[i] == n) {
    console.log("Pronasli ste broj");
  } else {
    console.log("Niste pronasli broj");
  }
}
 */
/* 7.
let unos = prompt("Upiši godinu:");
let godina = Number(unos);

function jePrijestupna(godina) {
  if (godina % 400 == 0) {
    return true;
  } else if (godina % 4 == 0 && godina % 100 != 0) {
    return true;
  } else {
    return false;
  }
}

if (jePrijestupna(godina)) {
  console.log("Godina " + godina + " je prijestupna.");
} else {
  console.log("Godina " + godina + " nije prijestupna.");
} */
/* 
8.
let unos = prompt("Upiši neki tekst:");
let tekst = unos.toLowerCase();

let samoglasnici = ["a", "e", "i", "o", "u"];
let brojac = 0;

for (let i = 0; i < tekst.length; i++) {
  if (samoglasnici.includes(tekst[i])) {
    brojac++;
  }
}

console.log("Broj samoglasnika je: " + brojac);
 */
/* 
10.
let a = Number(prompt("Upiši prvi broj:"));
let b = Number(prompt("Upiši drugi broj:"));

function zbroji(a, b) {
  return a + b;
}

function oduzmi(a, b) {
  return a - b;
}

function pomnozi(a, b) {
  return a * b;
}

function podijeli(a, b) {
  if (b == 0) {
    return "Dijeljenje s nulom nije dozvoljeno!";
  } else {
    return a / b;
  }
}

console.log("Zbroj: " + zbroji(a, b));
console.log("Razlika: " + oduzmi(a, b));
console.log("Umnožak: " + pomnozi(a, b));
console.log("Količnik: " + podijeli(a, b)); */
let polje = ["Max Verstappen"];

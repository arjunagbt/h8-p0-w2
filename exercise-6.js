//Looping menggunakan while


var counter = 2

console.log("LOOPING PERTAMA")
while (counter <= 20) {
 console.log (`${counter} - I love coding`)
 counter += 2
}
var counter = 20
console.log ("LOOPING KEDUA")

while (counter > 0){
    console.log (`${counter} - I will become fullstack developer`)
    counter -= 2
}

//Looping menggunakan for

console.log("LOOPING PERTAMA")
for (var angka = 1; angka <= 20; angka ++){
    console.log(`${angka} - I love coding`)
}

console.log("LOOPING KEDUA")
for (var angka=20; angka >0; angka --){
    console.log(`${angka} - I love coding`)
}

//Angka Ganjil dan Genap

var oddEvenCounter = 1

while (oddEvenCounter <= 100){
    if (oddEvenCounter % 2 === 0){
        console.log(`${oddEvenCounter} - GENAP`)
    } else {
        console.log(`${oddEvenCounter} - GANJIL`)
    }
    oddEvenCounter ++
}



//pertambahan counter 2

var Counter2 = 1

while (Counter2 <= 100) {
    if(Counter2 % 3 === 0) {
        console.log(`${Counter2} KELIPATAN 3`)
    } else {
        console.log("")
    }
    Counter2 += 2
}



//pertambahan counter 5

var Counter5 = 1

while (Counter5 <=100) {
    if(Counter5 % 6 === 0){
        console.log(`${Counter5} KELIPATAN 6`)
    } else {
        console.log("")
    }
    Counter5 += 5
}



//pertambahan counter 9

var Counter9 = 1

while(Counter9 <= 100) {
    if(Counter9 % 10 === 0){
        console.log(`${Counter9} KELIPATAN 10`)
    }else {
        console.log("")
    }
    Counter9 += 9
}
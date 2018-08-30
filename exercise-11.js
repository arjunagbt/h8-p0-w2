function balikKata(kata) {
   var str = "" //string kosong untuk menampung
   var counter = kata.length // counter untuk while

   while (counter > 0){
       str += kata[counter - 1] // menambahkan string  dari index, dihitung mundur dari belakang sesuai counter
       counter -- //decrement
     }
    return str
   }

   
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS

  //Arjuna Sarumpaet
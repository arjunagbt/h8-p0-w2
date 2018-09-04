function balikKata(kata) {
   var str = "" //string kosong untuk menampung
   

   for (counter=kata.length;counter > 0; counter --){
       str += kata[counter - 1] // menambahkan string  dari index, dihitung mundur dari belakang sesuai counter
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
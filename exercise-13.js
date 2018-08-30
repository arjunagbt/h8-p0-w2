function xo(str) {
  var x = 0 //variabel number sebagai counter jumlah x
  var o = 0 //variabel number sebagai counter jumlah 0
  counter = 1 //counter while

  while (counter <= str.length){
      if (str[counter - 1] == 'x'){
        x ++    //akses isi str dengan index, bila 'x', counter x bertambah 1
    }
      else if (str[counter - 1] == 'o'){
          o ++  //bila 'o' counter o bertambah 1
      }
     counter ++ //increment while
    }
    if (x == o){
        return true  // bila jumlah x == o, true
    } else {
        return false // bula jumlah x != o, false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true

  //Arjuna Sarumpaet
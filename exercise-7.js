//1.) Menyusun barisan bintang


var rows1 = 8;

while (rows1 > 0 ){
    console.log('*')
    rows1 --
}


//2.) nested looping

var rows2 = 3 // input row
var counter2 = rows2 // counter untuk while pertama

while (counter2 > 0){   
    var col2 = '' //string untuk menampung kolom '*' yang akan selalu dikosongkan tiap while pertama melakukan looping
    var colcount = 0 // counter untuk while ke 2

    while(colcount < rows2){
        col2 += '*' //menambah string '*' ke string penampung 'col2'
        colcount ++ //increment while 2
        
    }
    counter2 -- // decrement while 1

    console.log(col2)
}



//3.) Barisan tangga

var rows3 = 5  // input row
var counter3 = 0 // counter while 1

while (counter3 <= rows3) {
  var col3 = '' //tempat menampung '*'
  var colcount = 0 // counter while 2

  while (colcount < counter3) {
    col3 += '*' //menambah '*' ke container selama counter while 2 lebih kecil dari counter while 1 (yang selalu bertambah sampai = rows3)
    colcount++ //increment while 2
  }
  counter3++ //increment while3
  console.log(col3)
}

//Arjuna Sarumpaet
function konversiMenit(menit) {
    jam = null // assign variabel kosong untuk jam
    min = null //assign variabel kosong untuk menit
    if (menit >= 60){
        jam = Math.floor(menit/60) //simpan jumlah jam di variabel
        if (menit % 60 <10){ 
            min = `0${menit%60}` //simpan sisa pembagian sebagai menit, apabila lebih kecil dari 10, tambahkan 0 di depannya
        } else {
            min = menit%60 // bila sisa pembagian lebih besar dari 10 langsung di simpan
        }
    }
        else {
            jam = 0 // bila menit tidak lebih dari 60, set jam 0
            if (menit < 10){
                min = `0${menit}` //bila menit tidak lebih dari 10, tambahkan 0 di depannya
            } else
            min = menit // bila menit lebih dari 10, langsung di simpan
        }
  
  return `${jam}:${min}` //display jam
    }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00


  //Arjuna Sarumpaet
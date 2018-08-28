var tanggal = 29; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2200; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var bulanStr = '' // assign string kosong ke variabel bulanStr

var kabisat = true // assign boolean sembarang ke variabel kabisat

//Ubah bulan dari datatype number ke string dengan switch case
//untuk input bulan diluar 1-12, switch ke default (nilai tidak valid)
//Jan Mar Mei Jul Aug Okt Des, tanggal diluar 1-31 tidak valid
//Apr Jun Sept Nov, tanggal diluar 1-30 tidak valid
//Februari, dicek tahun kabisat, kalau true nilai valid 1-29, false 1-28
switch (bulan) {
  case 1:
    bulanStr = 'Januari'
    if ((tanggal > 0 && tanggal <= 31) && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    } else {
      console.log('Masukkan nilai yang valid!')
    }
    break;
  case 2:
    bulanStr = 'Februari'
    //cek kabisat dengan modulo
    if (tahun % 4 == 0) {
      if (tahun % 100 == 0) {
        if (tahun % 400 == 0) {
          kabisat = true
        } else {
          kabisat = false
        }
      } else {
        kabisat = true
      }
    } else {
      kabisat = false
    } //endif kabisat
    if ((tanggal > 0 && tanggal <= 28) && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    } else if (tanggal == 29 && kabisat == true && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    }
    else {
      console.log('Masukkan nilai yang valid!')
    }
    break;
  case 3:
    bulanStr = 'Maret'
    if ((tanggal > 0 && tanggal <= 31) && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    } else {
      console.log('Masukkan nilai yang valid!')
    }
    break;
  case 4:
    bulanStr = 'April'
    if ((tanggal > 0 && tanggal <= 30) && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    } else {
      console.log('Masukkan nilai yang valid!')
    }
    break;
  case 5:
    bulanStr = 'Mei'
    if ((tanggal > 0 && tanggal <= 31) && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    } else {
      console.log('Masukkan nilai yang valid!')
    }
    break;
  case 6:
    bulanStr = 'Juni'
    if ((tanggal > 0 && tanggal <= 30) && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    } else {
      console.log('Masukkan nilai yang valid!')
    }
    break;
  case 7:
    bulanStr = 'Juli'
    if ((tanggal > 0 && tanggal <= 31) && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    } else {
      console.log('Masukkan nilai yang valid!')
    }
    break;
  case 8:
    bulanStr = 'Agustus'
    if ((tanggal > 0 && tanggal <= 31) && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    } else {
      console.log('Masukkan nilai yang valid!')
    }
    break;
  case 9:
    bulanStr = 'September'
    if ((tanggal > 0 && tanggal <= 30) && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    } else {
      console.log('Masukkan nilai yang valid!')
    }
    break;
  case 10:
    bulanStr = 'Oktober'
    if ((tanggal > 0 && tanggal <= 31) && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    } else {
      console.log('Masukkan nilai yang valid!')
    }
    break;
  case 11:
    bulanStr = 'November'
    if ((tanggal > 0 && tanggal <= 30) && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    } else {
      console.log('Masukkan nilai yang valid!')
    }
    break;
  case 12:
    bulanStr = 'Desember'
    if ((tanggal > 0 && tanggal <= 31) && (tahun >= 1900 && tahun <= 2200)) {
      console.log(`${tanggal} ${bulanStr} ${tahun}`)
    } else {
      console.log('Masukkan nilai yang valid!')
    }
    break;
  default:
    console.log('Masukkan nilai yang valid!')
    break;
}



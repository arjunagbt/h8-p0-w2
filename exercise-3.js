var nama = ''
var peran = ''

//apabila variabel nama dan peran kosong, atau nama kosong namun variabel peran memiliki nilai string
if (nama === '' && peran === '' || nama ==='' && peran !=='') {
    console.log('Nama harus diisi!')
} 
//apabila nama sudah diisi namun variabel peran masih memiliki string kosong
else if (nama !== '' && peran === '') {
    console.log(`Halo, ${nama} ! Pilih peranmu untuk memulai game! (Ksatria, Penyihir, atau Tabib)`)
} 
//apabila nama sudah diisi dan memilih peran ksatria
else if (nama !== '' && peran === 'Ksatria'){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}!`)
    console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
} 
//apabila nama sudah diisi dan memilih peran tabib
else if (nama !== '' && peran === 'Tabib'){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}!`)
    console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`)
}
//apabila nama sudah diisi dan memilih peran penyihir
else if (nama !== '' && peran === 'Penyihir'){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}!`)
    console.log(`Halo ${peran} ${nama},  ciptakan keajaiban yang membantu kemenanganmu!`)
} 
//apabila nama sudah diisi namun peran tidak termasuk dalam pilihan peran yang tersedia
else {
    console.log('Pilihan peran tidak tersedia! pilih Ksatria, Penyihir, atau Tabib!')
}


//variabel peran case sensitive
//Arjuna Sarumpaet 27 Aug 2018 (tested on repl.it)
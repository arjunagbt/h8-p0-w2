function xo(str){
    var counter = str.length
    var counterX = 0
    var counterO = 0

    while (counter >= 0){
        if (str[counter] == 'x'){
            counterX ++
        } else if (str[counter] == 'o'){
            counterO ++
        }
        counter --
    }

    var total =`X = ${counterX} O= ${counterO}`
    return total
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
var row = 6
var counter = 0

while (counter < Math.ceil(row/2)){
    var counterColumn = 0
    var column = ''
    while (counterColumn <= counter){
        if (counterColumn % 2 == 0){
            column += 'x'
        } else {
            column += 'o'
        }
        counterColumn ++
    }
    console.log(column)
    counter ++
}
if (row % 2 == 0){
    var counterInvers = Math.ceil(row/2)
} else{
    var counterInvers = Math.ceil((row/2)-1)
}

while (counterInvers > 0){
    var counterColumnInvers = 0
    var columnInvers = ''
        while (counterColumnInvers < counterInvers ){
            if (counterColumnInvers % 2 == 0){
                columnInvers += 'x'
            } else {
                columnInvers += 'o'
            }
            counterColumnInvers ++
    }
    console.log(columnInvers)
    counterInvers --
   }

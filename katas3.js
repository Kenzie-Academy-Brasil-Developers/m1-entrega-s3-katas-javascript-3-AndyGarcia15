const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1(num) {
    let resultado = [];
    
    for(let i = 1; i <= num; i++ ){
        resultado  = console.log(i)
    }
    return resultado
}   
// kata1(25)

function kata2(num) {
    let resultado = num
    
    for(let i = num; 1 <= i; i-- ){
        resultado = console.log(i)
    }
    return resultado
}
// kata2(23)

function kata3(num) {
    let resultado = num
    
    for(let i = -1; num <= i; i-- ){
        resultado = console.log(i)
    }
    return resultado
}
// kata3(-25)
function kata4(num) {
    let resultado = num
    
    for(let i = num; i <= -1; i++ ){
        resultado = console.log(i)
    }
    return resultado
}
 // kata4(-25)

function kata5(num) {
    let resultado = num
    
    for(let i = num; i >= -25; i-- ){
        if(i % 2 != 0){
            resultado = console.log(i)
        }
    }
    return resultado
}
// kata5(25)

function kata6(num) {
    let resultado = num
    
    for(let i = 3; i <= num; i++ ){
        if(i % 3 == 0){
            resultado = console.log(i)
        }
    }
    return resultado
}
// kata6(100)

function kata7(num) {
    let resultado = num
    
    for(let i = 7; i <= num; i++ ){
        if(i % 7 == 0){
            resultado = console.log(i)
        }
    }
    return resultado
}
// kata7(100)

function kata8(num) {
    let resultado = num
    
    for(let i = num; i >= 3; i-- ){
        if(i % 7 == 0){
            resultado = console.log(i)
        }
        if(i % 3 == 0){
            resultado = console.log(i)
        }
    }
    return resultado
}
// kata8(100)

function kata9(num) {
    let resultado = num
    
    for(let i = 5; i <= num; i++ ){
        if(i % 5 == 0 && i % 2 != 0){
            resultado = console.log(i)
        }
    }
    return resultado
}
// kata9(100)

function kata10(arr) {
    return console.log(arr)
}
// kata10(sampleArray)
function kata11(arr) {
    let impares = []
    for(let i = 0; i < arr.length; i++){
        if(i % 2 != 0){
           impares = impares.push(i)
        }
    }
    return console.log(impares)
}
 kata11(sampleArray)

function kata12() {
    // implemente o código do kata 12 aqui
}

function kata13() {
    // implemente o código do kata 13 aqui
}

function kata14() {
    // implemente o código do kata 14 aqui
}

function kata15() {
    // implemente o código do kata 15 aqui
}

function kata16() {
    // implemente o código do kata 16 aqui
}

function kata17() {
    // implemente o código do kata 17 aqui
}

function kata18() {
    // implemente o código do kata 18 aqui
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}

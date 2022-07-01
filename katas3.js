

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResult(r){
    return console.log(r)
}
function kata1(num) {
    let resultado = [];
    
    for(let i = 1; i <= num; i++ ){
        resultado.push(i)
    }
    return showResult(resultado)
}   
// kata1(25)

function kata2(num) {
    let resultado = [];
    
    for(let i = num; 1 <= i; i-- ){
        resultado.push(i)
    }
    return showResult(resultado)
}
// kata2(23)

function kata3(num) {
    let resultado = [];
    
    for(let i = -1; num <= i; i-- ){
        resultado.push(i)
    }
    return showResult(resultado)
}
// kata3(-25)
function kata4(num) {
    let resultado = [];
    
    for(let i = num; i <= -1; i++ ){
        resultado.push(i)
    }
    return showResult(resultado)
}
 // kata4(-25)

function kata5(num) {
    let resultado = [];
    
    for(let i = num; i >= -25; i-- ){
        if(i % 2 != 0){
            resultado.push(i)
        }
    }
    return showResult(resultado)
}
// kata5(25)

function kata6(num) {
    let resultado = [];
    
    for(let i = 3; i <= num; i++ ){
        if(i % 3 == 0){
            resultado.push(i)
        }
    }
    return showResult(resultado)
}
// kata6(100)

function kata7(num) {
    let resultado = [];
    
    for(let i = 7; i <= num; i++ ){
        if(i % 7 == 0){
            resultado.push(i)
        }
    }
    return showResult(resultado)
}
// kata7(100)

function kata8(num) {
    let resultado = [];
    
    for(let i = num; i >= 3; i-- ){
        if(i % 7 == 0){
            resultado.push(i)
        }
        if(i % 3 == 0){
            resultado.push(i)
        }
    }
    return showResult(resultado)
}
// kata8(100)

function kata9(num) {
    let resultado = [];
    
    for(let i = 5; i <= num; i++ ){
        if(i % 5 == 0 && i % 2 != 0){
            resultado.push(i)
        }
    }
    return showResult(resultado)
}
// kata9(100)

function kata10(arr) {
    return console.log(arr)
}
// kata10(sampleArray)
function kata11(arr) {
    let resultado = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
           resultado.push(arr[i])
        }
    }
    return showResult(resultado);
}
 kata11(sampleArray)

function kata12(arr) {
    let resultado = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
           resultado.push(arr[i])
        }
    }
    return showResult(resultado);
}
 kata12(sampleArray)
function kata13(arr) {
    let resultado = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 8 == 0){
           resultado.push(arr[i])
        }
    }
    return showResult(resultado);
}
 kata13(sampleArray)

function kata14(arr) {
    let resultado = [];
    for(let i = 0; i < arr.length; i++){
           
           resultado.push(arr[i]**2)
        
    }
    return showResult(resultado);
}
kata14(sampleArray)

function kata15(num) {
    let resultado = 0;
    for(let i = 0; i <= num;i++){
        resultado += i
        
    }
    return showResult(resultado)
}
kata15(20)

function kata16(num) {
    let resultado = 0;
    for(let i = 0; i < num.length;i++){
       resultado += num[i]
        
    }
    return showResult(resultado)
}
kata16(sampleArray)

function kata17(num) {
    return showResult(Math.min(...num))
}

kata17(sampleArray)

function kata18(num) {
    return showResult(Math.max(...num))
}
kata18(sampleArray)
console.log(Math.max())
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

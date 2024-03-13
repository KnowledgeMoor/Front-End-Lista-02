window.addEventListener("load", function (){

solucao_a = document.getElementById("solucao_a");
solucao_b = document.getElementById("solucao_b");
solucao_c = document.getElementById("solucao_c");
solucao_d = document.getElementById("solucao_d");
solucao_e = document.getElementById("solucao_e");
solucao_f = document.getElementById("solucao_f");
solucao_g = document.getElementById("solucao_g");
solucao_h = document.getElementById("solucao_h");

var idade = [10, 21, 35, 40, 56,];


// Problema a
var solA = idade.reduce((accum, element) => accum+=element);
solucao_a.innerHTML = solA;

// Problema b
var sum = idade.reduce((accum, element) => accum+=element);
solB = sum / idade.length;
solucao_b.innerHTML = solB;

// Problema c
var solC = idade.reduce((big,current) => (big < current) ? current : big);
solucao_c.innerHTML = solC;

// Problema d
var solD = idade.filter(element => element % 2 != 0);
solucao_d.innerHTML = solD;

// Problema e
var solE = idade.every(element => element>=18);
solucao_e.innerHTML = solE;


// Problemas com user input
userInput = document.getElementById("user_input");
userInput.value = 10;
userInput.addEventListener("input", function(){
    // Problema f
    var solF = idade.every(element => element>=userInput.value);
    solucao_f.innerHTML = solF;
    
    // Problema g
    var solG = idade.filter(element => element >= userInput.value);
    solucao_g.innerHTML = solG;

    // Problema h
    var idadesH = idade.filter(element => element >= userInput.value);
    var sumH = idadesH.reduce((accum, element) => accum+=element);
    var solH = sumH / idadesH.length;
    solucao_h.innerHTML = solH;
})





});
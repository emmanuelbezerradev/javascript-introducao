// //Questão 1
// let idadeMinina = 16;
// if(idadeMinina >= 18){
//     console.log("Maior de idade");
// }else{
//     console.log("Menor de idade");
// }


// //Questão 2
// let numero = 0;
// if(numero > 0){
//     console.log("Positivo");
// }else if (numero == 0){
//     console.log("Zero");
// }else{
//     console.log("Negativo");
// }

// //Questão 3
// let numeroA = 4;
// let numeroB = 4;
// if(numeroA > numeroB){
// console.log(`${numeroA} é maior que ${numeroB}`);
// } else if(numeroA < numeroB){
// console.log(`${numeroB} é maior que ${numeroA}`);
// } else {
//     console.log("Os números são iguais");
// }

// //Questão 4
// let numeroA = 10;
// if((numeroA % 2) == 0){
//     console.log(`${numeroA} é par`);
// } else if(numeroA % 2 !=0){
//     console.log(`${numeroA} É impar`);
// }

// //Questão 5
// let notaA = 6;
// let notaB = 4;
// let notaC = 3;
// let media = ((notaA + notaB + notaC) / 3).toFixed(1);
// let situacao = "";

// if (media >=7) {
//     situacao = "Aprovado";
// }else if (media > 5 && media < 7){
//     situacao = "Recuperação";
// }else {
//     situacao = "Reprovado";
// }
// console.log(`${situacao}, média: ${media}`);

// // //Questão 6
// let valor = 80;
// let desconto = 0.1;
// if(valor> 100){
//     console.log(`Total a pagar: ${(valor - (valor * desconto)).toFixed(2)}`);
// }else{
//     console.log(`Total a pagar: ${valor}`);
// }

// //Questão 7

// let ano = 2023;

// if (ano % 400 == 0) {
//     console.log(`${ano} é bisexto`);
// } else if (ano % 4 == 0 && ano % 100 != 0) {
//     console.log(`${ano} é bisexto`);
// } else {
//     console.log(`${ano} não é bisexto`);
// }


// // //Questão 8
// let usuario = "admin";
// let senha = "1234";
//  if(usuario == "admin" && senha == "1234"){
//     console.log("Aceso permitido");
//  } else{
//     console.log("Acesso negado");
//  }

//Questão 9 
let valorDaCompra = 30;
let valorMinimo = 200;
let ganhouFrete = valorMinimo - valorDaCompra;
console.log(`Compre mais ${ganhouFrete} e ganhe frete grátis`);
if (valorDaCompra >= 200) {
    console.log(`Valor total da compra: R$ ${valorDaCompra} , gostaria de frete grátis?`);
}
else {
    console.log(`ou se preferir pague R$20 de frete`);
}

//Questão 10
let 

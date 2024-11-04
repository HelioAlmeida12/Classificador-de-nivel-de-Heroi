

let nomeHeroi = prompt("Digite o nome do seu Heroi: ");
let xp = parseFloat(prompt("Digite o XP do seu Heroi: "));

if(xp <= 1000){
    alert("Ferro")
}else if(xp > 1001 && xp <= 2000) {    
    alert("Bronze");
}else if(xp >= 2001 && xp <= 5000){
    alert("Prata");
}else if(xp > 5001 && xp <= 7000){
    alert("Ouro");
}else if(xp >= 7001 && xp <= 8000){
    alert("Platina");
}else if(xp >= 8001 && xp <=  9000){
    alert("Ascendente");
}else if(xp >= 9001 && xp <= 10000){
    alert("Imortal");
}else{
    alert("Radiante");
}
 
alert("O Héroi " + nomeHeroi + " está no nivel " + xp);
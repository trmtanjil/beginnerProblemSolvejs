function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1 ) +min);
    //?max - min + 1 = 10 - 5 + 1 = 6
    //?Math.random() * (max - min + 1);  <>  0.5 * 6 = 3
}
console.log(getRandom(5,10));
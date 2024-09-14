function tipCalculator(tipPercent, billAmount){
    return (tipPercent/100)*billAmount;
}
let billAmount=Number(prompt("Enter the Bill Amount"));
let tipPercent=Number(prompt("Enter the appropriate tip percentage"))
console.log(`Tip Amount is: ${tipCalculator(tipPercent,billAmount)}`);
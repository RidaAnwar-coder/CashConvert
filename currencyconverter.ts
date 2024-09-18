import inquirer from "inquirer";

const Currency: any= {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let userAns= await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter From Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
        {
            name: "to",
            message: "Enter To Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
        {
            name: "amount",
            type: "number",
            message: "Enter Your Amount"
        }
    ]
)

let fromAmount=  Currency[userAns.from];
let toAmount= Currency[userAns.to];
let amount= userAns.amount;
let baseAmount= amount / fromAmount
let convertedAmount= baseAmount * toAmount
//console.log(fromAmount);
//console.log(toAmount);
//console.log(amount);
console.log(convertedAmount);
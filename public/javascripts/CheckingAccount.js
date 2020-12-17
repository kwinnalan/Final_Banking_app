'use strict'

let checkingBal;
let checkTrans = ["Deposit: +$100,000"];
let amount;
export default class CheckingAccount {


    constructor(CHECKING_BAL) {
        checkingBal = CHECKING_BAL;
        console.log("newCheckingAccount");
        document.getElementById("checkingAccount1").innerText = `Balance $${checkingBal.toLocaleString()}`;
        document.getElementById("checkTransList").innerText = `**Transactions**\n\n${checkTrans[0]}`;

        document.getElementById('checkingDepBtn').addEventListener('click',  () => {
            let input = document.getElementById('checkAmountInput').value;
            amount = parseFloat(input);
            this.deposit(amount);
        });
        document.getElementById('checkingDebBtn').addEventListener('click',  () => {
            let input = document.getElementById('checkAmountInput').value;
            amount = parseFloat(input);
            this.debit(amount);
        });
        document.getElementById('checkingWithBtn').addEventListener('click',  () => {
            let input = document.getElementById('checkAmountInput').value;
            amount = parseFloat(input);
            this.withdraw(amount);
        });
        document.getElementById('checkingTransferBtn').addEventListener('click',  () => {
            let input = document.getElementById('checkAmountInput').value;
            amount = parseFloat(input);
            this.transfer(amount);
        });

    }

    deposit(amount){
    checkingBal = checkingBal + amount;
    checkTrans.push(`Deposit: +$${amount}`);
    let currIndex = checkTrans.length - 1;
        document.getElementById("checkingAccount1").innerText = `Balance $${checkingBal.toLocaleString()}`;
        document.getElementById("checkTransList").innerHTML += `<h4>${checkTrans[currIndex]}</h4>`;
}
    debit(amount){
        checkingBal = checkingBal - amount;
        checkTrans.push(`Debit: -$${amount}`);
        let currIndex = checkTrans.length - 1;
        document.getElementById("checkingAccount1").innerText = `Balance $${checkingBal.toLocaleString()}`;
        document.getElementById("checkTransList").innerHTML += `<h4>${checkTrans[currIndex]}</h4>`;
    }


    withdraw(amount){
    checkingBal = checkingBal - amount;
    checkTrans.push(`Withdraw: -$${amount}`);
    let currIndex = checkTrans.length - 1;
    document.getElementById("checkingAccount1").innerText = `Balance $${checkingBal.toLocaleString()}`;
    document.getElementById("checkTransList").innerHTML += `<h4>${checkTrans[currIndex]}</h4>`;
    }
    transfer(amount){
        checkingBal = checkingBal - amount;
        checkTrans.push(`Transfer: -$${amount}`);
        let currIndex = checkTrans.length - 1;
        document.getElementById("checkingAccount1").innerText = `Balance $${checkingBal.toLocaleString()}`;
        document.getElementById("checkTransList").innerHTML += `<h4>${checkTrans[currIndex]}</h4>`;
    }
}
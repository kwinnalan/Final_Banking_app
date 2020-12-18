'use strict'

let savingsBal;
let saveTrans = ["Deposit: +$1,000,000"];
let amount;

    export default class SavingsAccount {

        constructor(SAVINGS_BAL) {
            savingsBal = SAVINGS_BAL;
            console.log("newSavingsAccount");
            document.getElementById("savingsAccount1").innerText = `$${savingsBal.toLocaleString()}`;
            document.getElementById("saveTransList").innerText = `**Transactions**\n\n${saveTrans[0]}`;

            document.getElementById('savingsDepBtn').addEventListener('click', () => {
                let input = document.getElementById('saveAmountInput').value;
                amount = parseFloat(input);
                this.deposit(amount);
            });
            document.getElementById('savingsDebBtn').addEventListener('click', () => {
                let input = document.getElementById('saveAmountInput').value;
                amount = parseFloat(input);
                this.debit(amount);
            });
            document.getElementById('savingsWithBtn').addEventListener('click', () => {
                let input = document.getElementById('saveAmountInput').value;
                amount = parseFloat(input);
                this.withdraw(amount);
            });
            document.getElementById('savingsTransferBtn').addEventListener('click', () => {
                let input = document.getElementById('saveAmountInput').value;
                amount = parseFloat(input);
                this.transfer(amount);
            });
            document.getElementById('saveBackBtn').addEventListener('click',  () => {
                console.log("clicked go back");
                this.goBack();
            });

        }

        deposit(amount) {
            savingsBal = savingsBal + amount;
            saveTrans.push(`Deposit: +$${amount}`);
            let currIndex = saveTrans.length - 1;
            document.getElementById("savingsAccount1").innerText = `Balance $${savingsBal.toLocaleString()}`;
            document.getElementById("saveTransList").innerHTML += `<h4>${saveTrans[currIndex]}</h4>`;
        }

        debit(amount) {
            if (savingsBal >= amount) {
                savingsBal = savingsBal - amount;
                saveTrans.push(`Debit: -$${amount}`);
                let currIndex = saveTrans.length - 1;
                document.getElementById("savingsAccount1").innerText = `Balance $${savingsBal.toLocaleString()}`;
                document.getElementById("saveTransList").innerHTML += `<h4>${saveTrans[currIndex]}</h4>`;
            } else {
                saveTrans.push(`!Debit: -$${amount} not aloud, insufficient funds!`);
                let currIndex = saveTrans.length - 1;
                document.getElementById("saveTransList").innerHTML += `<h4>${saveTrans[currIndex]}</h4>`;
            }
        }


        withdraw(amount) {
                if(savingsBal >= amount){
                    savingsBal = savingsBal - amount;
                    saveTrans.push(`Withdraw: -$${amount}`);
                    let currIndex = saveTrans.length - 1;
                    document.getElementById("savingsAccount1").innerText = `Balance $${savingsBal.toLocaleString()}`;
                    document.getElementById("saveTransList").innerHTML += `<h4>${saveTrans[currIndex]}</h4>`;
                } else {
                    saveTrans.push(`!Withdraw: -$${amount} not aloud, insufficient funds!`);
                    let currIndex = saveTrans.length - 1;
                    document.getElementById("saveTransList").innerHTML += `<h4>${saveTrans[currIndex]}</h4>`;
                }
        }

        transfer(amount) {
                if(savingsBal >= amount){
                    savingsBal = savingsBal - amount;
                    saveTrans.push(`Transfer: -$${amount}`);
                    let currIndex = saveTrans.length - 1;
                    document.getElementById("savingsAccount1").innerText = `Balance $${savingsBal.toLocaleString()}`;
                    document.getElementById("saveTransList").innerHTML += `<h4>${saveTrans[currIndex]}</h4>`;
                } else {
                    saveTrans.push(`!Transfer: -$${amount} not aloud, insufficient funds!`);
                    let currIndex = saveTrans.length - 1;
                    document.getElementById("saveTransList").innerHTML += `<h4>${saveTrans[currIndex]}</h4>`;
                }
        }

        goBack(){
            console.log("in go back");
            document.getElementById(`welcomePage`).style.display = 'block';
            document.getElementById(`savingsAccountMore`).style.display = 'none';
        }
    }
'use strict';

import EventHandler from './EventHandler.js';

let checkingBal;
let checkTrans = ["Deposit: +$100,000"];
let amount;

/**
 * Event handling class for Checking Account
 */
export default class CheckingAccount {


    constructor(CHECKING_BAL) {

        /**
         * @constructor
         */
        console.log("newCheckingAccount");
        document.getElementById("checkingAccount1").innerText = `Balance $${checkingBal.toLocaleString()}`;
        document.getElementById("checkTransList").innerText = `**Transactions**\n\n${checkTrans[0]}`;
        document.getElementById("checkingAccount").innerText = `$${CHECKING_BAL.toLocaleString()}`;
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
        document.getElementById('checkBackBtn').addEventListener('click',  () => {
            console.log("clicked go back");
            this.goBack();
        });

    }

    /**
     * @returns {void}
     */
    deposit(amount){
    checkingBal = checkingBal + amount;
    checkTrans.push(`Deposit: +$${amount}`);
    let currIndex = checkTrans.length - 1;
        document.getElementById("checkingAccount1").innerText = `Balance $${checkingBal.toLocaleString()}`;
        document.getElementById("checkTransList").innerHTML += `<h4>${checkTrans[currIndex]}</h4>`;
}

    /**
     * @returns {void}
     */
    debit(amount){
        if(checkingBal >= amount){
            checkingBal = checkingBal - amount;

            checkTrans.push(`Debit: -$${amount}`);
            let currIndex = checkTrans.length - 1;
            document.getElementById("checkingAccount1").innerText = `Balance $${checkingBal.toLocaleString()}`;
            document.getElementById("checkTransList").innerHTML += `<h4>${checkTrans[currIndex]}</h4>`;
        } else {
            checkTrans.push(`!Debit: -$${amount} not aloud, insufficient funds!`);
            let currIndex = checkTrans.length - 1;
            document.getElementById("checkTransList").innerHTML += `<h4>${checkTrans[currIndex]}</h4>`;
        }
    }

    /**
     * @returns {void}
     */
    withdraw(amount){
        if(checkingBal >= amount){
            checkingBal = checkingBal - amount;
            checkTrans.push(`Withdraw: -$${amount}`);
            let currIndex = checkTrans.length - 1;
            document.getElementById("checkingAccount1").innerText = `Balance $${checkingBal.toLocaleString()}`;
            document.getElementById("checkTransList").innerHTML += `<h4>${checkTrans[currIndex]}</h4>`;
        } else {
            checkTrans.push(`!Withdraw: -$${amount} not aloud, insufficient funds!`);
            let currIndex = checkTrans.length - 1;
            document.getElementById("checkTransList").innerHTML += `<h4>${checkTrans[currIndex]}</h4>`;
        }
    }

    /**
     * @returns {void}
     */
    transfer(amount){
        if(checkingBal >= amount){
            checkingBal = checkingBal - amount;
            checkTrans.push(`Transfer: -$${amount}`);
            let currIndex = checkTrans.length - 1;
            document.getElementById("checkingAccount1").innerText = `Balance $${checkingBal.toLocaleString()}`;
            document.getElementById("checkTransList").innerHTML += `<h4>${checkTrans[currIndex]}</h4>`;
        } else {
            checkTrans.push(`!Transfer: -$${amount} not aloud, insufficient funds!`);
            let currIndex = checkTrans.length - 1;
            document.getElementById("checkTransList").innerHTML += `<h4>${checkTrans[currIndex]}</h4>`;
        }
    }

    /**
     * @returns {void}
     */
    goBack(){
        console.log("in go back");
        document.getElementById(`welcomePage`).style.display = 'block';
        document.getElementById(`checkingAccountMore`).style.display = 'none';
    }

}
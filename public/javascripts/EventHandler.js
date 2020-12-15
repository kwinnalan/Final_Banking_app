'use strict'
const SAVINGS_BAL = 1000000;
const CHECKING_BAL = 100000;

const USERS = ['kdanforth', 'vdanforth'];
const PASSWDS = ['pass123','1234abcd!'];
let isUser = false;
let userId;

export default class EventHandler {
    constructor() {
        this.handleSubmit();
        this.handleMoreChecking();
        this.user = null;
    }

    async handleSubmit() {
        document.getElementById('submit').addEventListener('click',  () => {
            let userInfo = [];
            userInfo[0] = document.getElementById('uname').value;
            userInfo[1] = document.getElementById('pwd').value;
            console.log(userInfo[1], userInfo[0]);
            let isUser = this.checkUser(userInfo[0]);
            if (document.getElementById('uname').value === '' || !isUser) {
                alert('You must provide your proper username to continue.');
            } else if(this.checkPass() === true){
                console.log(document.getElementById('uname').value);
                let username = document.getElementById('uname').value;
                document.getElementById(`installBanner`).style.display = 'none';
                document.getElementById(`login`).style.display = 'none';
                document.getElementById('welcomeUsername').innerText = `Welcome ${username}`;
                document.getElementById("checkingAccount").innerText = `$${CHECKING_BAL.toLocaleString()}`;
                document.getElementById("savingsAccount").innerText = `$${SAVINGS_BAL.toLocaleString()}`;
                document.getElementById(`welcomePage`).style.display = 'block';
            }else{
                alert('Incorrect Password!');
            }
        });
    }

    checkUser(userInfo){
        for(let i =0; i < USERS.length; i++){
            if(userInfo === USERS[i]){
                userId = i;
                isUser = true;
                }
            }
        return isUser;
    }

    checkPass(){
       return document.getElementById('pwd').value === PASSWDS[userId];
}

    async handleMoreChecking() {
       document.getElementById("moreChecking").addEventListener('click',  async() => {

        await setTimeout(alert('whaaooo'), 30000);
           console.log('clicked More');
        });
    }





}
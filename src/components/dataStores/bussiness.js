import { observable, action, computed, makeObservable } from 'mobx';
class Bussiness{
    data = {
        id: '1',
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        logo: "https://coding-academy.org/images/ca_logo.png",
        description: "The best coding academy in the world",
    }
    constructor(){
        makeObservable(this, {
            data: observable,
            bussiness: computed,
            updateBussiness: action,
            createBussiness: action
        });
    }

    createBussiness() {
        fetch('http://localhost:8787/businessData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bussiness)
        }).then(response => response.json()).then(data => {
            console.log(data);
            this._bussiness = data;

        }).catch(err => {
            console.log(err);
        });
    }  

    get bussiness() {
        return this.data;
    }

    updateBussiness(bussiness) {
        fetch('http://localhost:8787/businessData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bussiness)
        }).then(response => response.json()).then(data => {
            console.log(data);
            this._bussiness = data;

        }).catch(err => {
            console.log(err);
        });
    }


}

export default new Bussiness();
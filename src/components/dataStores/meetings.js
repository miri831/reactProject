import {observable, computed, action, makeObservable, runInAction } from 'mobx';

class Meetings {
    data = [];

    constructor(){
        makeObservable(this, {
            data: observable,
            getMeetings: computed,
            addMeeting: action,
            deleteMeeting: action,
            updateMeeting: action
        });  
        this.initData();
    }

    initData(){
        fetch('http://localhost:8787/appointments').then(response => response.json()).then(data => {
            this.data = data;
        
        }); 
    }

    addMeeting(meeting) {
        fetch('http://localhost:8787/appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(meeting)
        }).then(response => response.json()).then(data => {
            console.log(data);
            this.data.push(data);

        }).catch(err => {
            console.log(err);
        });
    }
    
    get getMeetings() {
        
        return this.data;
    }
    
    deleteMeeting(id) {
        const index = this.data.findIndex(meeting => meeting.id === id);
        this.data = this.data.splice(index, 1);
    }   

    updateMeeting(id, meeting) {
        const index = this.data.findIndex(meeting => meeting.id === id);
        this.data[index] = meeting;
    }
}

export default new Meetings();
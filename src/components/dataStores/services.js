import { runInAction, observable, computed, action, makeAutoObservable } from 'mobx';
class Services {
    _services = [];
    
    constructor() {
        makeAutoObservable(this, {
            _services: observable,
            services: computed,
            addService: action,
            deleteService: action,
            updateService: action
        });   
        this.initData();
         
    }

    initData() { 
        this._services = [{
            id: '1',
            name: "פגישת ייעוץ",
            description: "פגישת ייעוץ עם יריב כץ",
            price: 500,
            duration: 60, 
        },
        {
            id: '2',
            name: "פגישה פרונטלית אצל הלקוח ",
            description: "פגישת ייעוץ באתר הלקוח",
            price: 750,
            duration: 90, 
        },
        {
            id: '3',
            name: "פגישה אונליין ",
            description: "פגישת ייעוץ  בזום",
            price: 500,
            duration: 60, 
        },
        {
            id: '2',
            name: "פגישה פרונטלית אצל הלקוח ",
            description: "פגישת ייעוץ באתר הלקוח",
            price: 750,
            duration: 90, 
        },
        {
            id: '3',
            name: "פגישה אונליין ",
            description: "פגישת ייעוץ  בזום",
            price: 500,
            duration: 60, 
        }
    ]
        // fetch('http://localhost:8787/services').then(response => response.json()).then(data => {
        //     this._services = data;
            
        // }).catch(err => {
        //     console.log(err);
        // });
    }
    
    addService(service) {
        this._services.push(service);
    }
    
    get services() {
        return this._services;
    }
    
    deleteService(id) {
        const index = this._services.findIndex(service => service.id === id);
        this._services = this._services.splice(index, 1);
    }   

    updateService(id, service) {
        const index = this._services.findIndex(service => service.id === id);
        this._services[index] = service;
    }
}

export default new Services();
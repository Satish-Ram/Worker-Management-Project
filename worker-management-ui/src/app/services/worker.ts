import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class Worker {
    private apiUrl='http://localhost:8080/api/workers';
    constructor(private http:HttpClient){}
    
    getAllWorkers(){
        return this.http.get(this.apiUrl);
    }
    addWorker(worker:any){
        return this.http.post(this.apiUrl,worker);
    }
}

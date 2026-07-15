import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { LoginRequest } from '../models/login.request';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth.response';

@Injectable({
    providedIn:'root'
})
export class Auth {
    private apiUrl='http://localhost:8080/api/auth';

    constructor(private http:HttpClient){}

    login(loginRequest:LoginRequest):Observable<AuthResponse>{
        return this.http.post<AuthResponse>(
            `${this.apiUrl}/login`,loginRequest
        );
    }
    saveToken(token:string):void{
        localStorage.setItem('token',token);
    }
    getToken():string|null{
        return localStorage.getItem('token');
    }
    logout():void{
        localStorage.removeItem('token');
    }
}

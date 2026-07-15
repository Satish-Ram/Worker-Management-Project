import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequest } from '../../models/login.request';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginData:LoginRequest={
    email:'',
    password:''
  };
  constructor(
    private authService:Auth,
    private router:Router
  ){}
  login(){
    this.authService.login(this.loginData).subscribe({
      next:(response)=>{
        console.log(response);
        this.authService.saveToken(response.token);
        alert("Login Successful");
        this.router.navigate(['/dashboard']);
      },
      error:(error)=>{
        console.log(error);
        alert("Invalid Email or Password");
      }
    })
  }
}

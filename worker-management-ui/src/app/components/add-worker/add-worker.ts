import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Worker } from '../../services/worker';
import { response } from 'express';

@Component({
  selector: 'app-add-worker',
  standalone:true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-worker.html',
  styleUrl: './add-worker.css',
})
export class AddWorker {
  worker={
     workerName: '',
    mobile: '',
    address: '',
    dailyWage: 0,
    siteName: '',
    joiningDate: ''
  };
  constructor(private workerService:Worker ,private router:Router){}
  addWorker(){
    this.workerService.addWorker(this.worker).subscribe({
      next:(response)=>{
        console.log(response);
        alert("Worker Added Successfully");
        this.router.navigate(['/workers']);
      },
      error:(err)=>{
        console.log(err);
        alert("Error While Adding Worker")
      }
    });
  }
}

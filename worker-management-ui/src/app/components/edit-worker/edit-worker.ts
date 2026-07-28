import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Worker } from '../../services/worker';
@Component({
  selector: 'app-edit-worker',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-worker.html',
  styleUrl: './edit-worker.css',
})
export class EditWorker implements OnInit {
  id!:number;
  worker={
    workerId:0,
    workerName:'',
    mobile:'',
    address:'',
    dailyWage:0,
    siteName:'',
    joiningDate:''
  };

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private workerService:Worker
  ){}

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));

    this.workerService.getWorkerById(this.id).subscribe({
      next:(data:any)=>{
        this.worker=data;
      },
      error:(err)=>{
        console.log(err);
        alert("Unable to load worker details")
      }
    });
  }
  updateWorker(){
    this.workerService.updateWorker(this.id,this.worker).subscribe({
      next:()=>{
        alert("Worker Updated Successfully");
        this.router.navigate(['/workers']);
      },
      error:(err)=>{
        console.log(err);
        alert("Unable to update worker")
      }
    });
  }
}

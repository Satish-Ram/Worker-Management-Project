import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Worker } from '../../services/worker';
@Component({
  selector: 'app-worker-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './worker-list.html',
  styleUrl: './worker-list.css',
})
export class WorkerList implements OnInit{
  workers:any[]=[];

  constructor(private workerService:Worker){}

  ngOnInit(): void {
    this.workerService.getAllWorkers().subscribe({
      next:(data:any)=>{
        console.log(data);
        this.workers=data;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}

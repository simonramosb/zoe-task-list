import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit{

  form:FormGroup;

  constructor(
    private taskService:TaskService, 
    private builder:FormBuilder
  ) {
    this.form = this.builder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  ngOnInit() {

  }

  createTask(){
    console.log(this.form)
    this.taskService.createTask(this.form.value)
  }

}

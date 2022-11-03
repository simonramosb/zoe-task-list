import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(
    private taskService:TaskService
  ) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(res => {
      console.log(res)
    })
  }

}

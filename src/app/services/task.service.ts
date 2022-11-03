import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http:HttpClient
  ) { 
  }

  createTask(task) {
    return this.http.post('http://localhost:4000/task', JSON.stringify(task))
  }

  getTasks(){
    return this.http.get('http://localhost:4000/task')
  }
}

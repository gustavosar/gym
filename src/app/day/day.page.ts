import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { TaskI } from '../models/task.interface';


@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit{
  public today = Date.now();
  todos: TaskI[];


  constructor(
    private firestoreService: FirestoreService,
    ) { }

  ngOnInit(){

    /* SERVICO */
    this.firestoreService.getTodos().subscribe((todos) =>{
      this.todos = todos;
    });

  }


}

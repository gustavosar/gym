import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { FirestoredayService } from '../services/firestoreday.service';
import { TaskI } from '../models/task.interface';
import { TaskII } from '../models/day.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit{
  public today = Date.now();
  todos: TaskI[];

  days: TaskII[];
  dayId= null;

  day: TaskII = {
    task: '',
    day: ''
  };

  constructor(
    private firestoreService: FirestoreService,
    private firestoredayService: FirestoredayService,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(){

    /* SERVICO TODOS*/
    this.firestoreService.getTodos().subscribe((todos) =>{
      this.todos = todos;
    });

    /* SERVICO DAY */
    this.firestoredayService.getdays().subscribe((days) =>{
      this.days = days;
    });

  }

  async loadDay(){
    this.firestoreService.getTodo(this.dayId).subscribe(todo => {
      this.day = this.day;
    });
  }

    /* Salvando Tarefa */
    async saveDay() { 
      this.firestoredayService.addDay(this.day).then(() => {
      });
    }

}

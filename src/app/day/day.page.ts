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
  public navDay;
  public today = Date.now();
  todos: TaskI[];

  days: TaskII[];
  dayId= null;

  day: TaskII = {
    task: '',
    day: this.route.snapshot.queryParamMap.get("navDay"),
    user: '',
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
    this.firestoredayService.getDays().subscribe((days) =>{
      this.days = days;
    });

    this.dayId = this.route.snapshot.params['id'];
    if (this.dayId){
      this.loadDay();
    }

    /* RECUPERA DATA PASSADA NA HOME */
    this.navDay = this.route.snapshot.queryParamMap.get("navDay")

  }


  /* Loading */
  async loadDay(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.firestoredayService.getDay(this.dayId).subscribe(day => {
      loading.dismiss();;
      this.day = day;
    });
  }

  /* Salvando Tarefa */
  async saveDay() {
    const loading = await this.loadingController.create({
      message: 'Salvando ...'
    });

    this.firestoredayService.addDay(this.day).then(() => {
      loading.dismiss();
    });
  }

  /* PEGA DATA DA URL VINDA DA HOME */
/*   getDate(){
    let navDay= this.activeRoute.snapshot.queryParams['navDay']
    this.dataSelecionada = this.conversor.convertToJson(navDay)
  } */
  
    /* Deletando */
    async onRemoveDay(idTodo:string) {
      this.firestoredayService.removeDay(idTodo);
    }

}

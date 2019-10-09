import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { TaskI } from '../models/task.interface';
import { FirestoreService } from '../services/firestore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarefas',
  templateUrl: 'tarefas.page.html',
  styleUrls: ['tarefas.page.scss'],
})
export class TarefasPage {
  public today = Date.now();
  todos: TaskI[];
  todoId= null;

  todo: TaskI = {
    task: ''
  };

  constructor(
    public alertController: AlertController, 
    private firestoreService: FirestoreService,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private nav: NavController
    ) {}
  
  /* Alert */
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Adicionar',
      message: '<input class="tarefa-text" [(ngModel)]="todo.task" type="text">',
      buttons: [{
        text: 'OK',
        handler: () => { this.saveTodo() },

      }],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  /* Serviço Firestore */
  ngOnInit(){
    this.firestoreService.getTodos().subscribe((todos) =>{
      this.todos = todos;
    });

    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId){
      this.loadTodo();
    }
  }

  /* Loading */
  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.firestoreService.getTodo(this.todoId).subscribe(todo => {
      loading.dismiss();;
      this.todo = todo;
    });
  }

  /* Salvando Tarefa */
  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Salvando ...'
    });
    await loading.present();
 
    if (this.todoId) {
      this.firestoreService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
      });
    } else {
      this.firestoreService.addTodo(this.todo).then(() => {
        loading.dismiss();
      });
    }
  }


  /* Deletando */
  async onRemoveTodo(idTodo:string) {
    this.firestoreService.removeTodo(idTodo);
  }

}

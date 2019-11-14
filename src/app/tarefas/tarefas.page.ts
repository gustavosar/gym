import { Component, AfterViewInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { TaskI } from '../models/task.interface';
import { FirestoreService } from '../services/firestore.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarefas',
  templateUrl: 'tarefas.page.html',
  styleUrls: ['tarefas.page.scss'],
})

export class TarefasPage implements AfterViewInit {
  public today = Date.now();
  todos: TaskI[];
  todoId= null;

  todo: TaskI = {
    task: '',
    user: ''
    };

  constructor(
    public alertController: AlertController, 
    private firestoreService: FirestoreService,
    private activeRoute: ActivatedRoute,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private nav: NavController,
    private routes: Router,
    public ngxSmartModalService: NgxSmartModalService
    ) { }

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
      message: 'Loading  ...'
    });
    await loading.present();
   

    this.firestoreService.addTodo(this.todo).then(() => {
      loading.dismiss();
      this.ngxSmartModalService.closeLatestModal();
    });
  }
  
  /* MODAL */
  ngAfterViewInit() {
    const pen: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{ a: 'a', b: 'b' }, { c: 'c', d: 'd' }],
      prop4: 327652175423
    };
    this.ngxSmartModalService.setModalData(pen, 'popupOne');
  }


  /* Deletando */
  async onRemoveTodo(idTodo:string) {
    this.firestoreService.removeTodo(idTodo);
  }


  navBtn () {
    this.routes.navigate(['home'])
  }
}

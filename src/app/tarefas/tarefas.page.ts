import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: 'tarefas.page.html',
  styleUrls: ['tarefas.page.scss'],
})
export class TarefasPage {
  public today = Date.now();
  constructor() {}

}

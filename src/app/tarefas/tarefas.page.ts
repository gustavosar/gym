import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tarefas',
  templateUrl: 'tarefas.page.html',
  styleUrls: ['tarefas.page.scss'],
})
export class TarefasPage {
  public today = Date.now();

  constructor(public alertController: AlertController) {}
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Adicionar',
      message: '<input class="tarefa-text" type="text">',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }


}

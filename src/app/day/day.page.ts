import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {

  public today = Date.now();

  constructor(private pickerCtrl: PickerController) { }

  ngOnInit() {
  }


  async openPicker() {
    const picker = await this.pickerCtrl.create({
      buttons: [{
        text: 'Confirmar'
      },
      {
        text: 'Cancelar'
      }],
      columns: [
        {
          name: 'tarefas',
          options: [
            {
              text: 'Ombro',
              value: 1
            },
            {
              text: 'Peito',
              value: 2
            },
            {
              text: 'Costas',
              value: 3
            },
          ]
        }
      ]
    });
    await picker.present();
  }




}

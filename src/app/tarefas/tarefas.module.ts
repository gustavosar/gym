import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TarefasPage } from './tarefas.page';

import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

@NgModule({
  imports: [
    NgxSmartModalModule.forRoot(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TarefasPage
      }
    ])
  ],
  declarations: [TarefasPage],
  providers: [ NgxSmartModalService ]
})
export class TarefasPageModule {}

import { Component } from '@angular/core';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public today = Date.now();

  public m = moment();
  public mm = moment();
  public mmm = moment();
  public mmmm = moment();

  public startWeek;
  public endWeek;
  public weekNumber;

  
/*   public nextStartWeek;
  public nextEndWeek;
  public previousStartWeek;
  public previousEndWeek; */


  
  constructor(
    private activeRoute: ActivatedRoute,
		private routes: Router,
  ) {

    this.endWeek = this.m.endOf('isoWeek');
    this.startWeek = this.mm.startOf('isoWeek');
    this.weekNumber = this.mmm.weeks()-this.mmm.add(0, 'month').startOf('month').weeks() + 1;

    /*  
    this.nextStartWeek = this.moment.add(1, 'weeks').startOf('isoWeek');
    this.nextEndWeek = this.moment.add(1, 'weeks').endOf('isoWeek');

    this.previousStartWeek = this.moment.subtract(1, 'weeks').startOf('isoWeek');
    this.previousEndWeek = this.moment.subtract(1, 'weeks').endOf('isoWeek') 
    */

  }

  navDay() {
    const startWeek = JSON.stringify(this.startWeek);
    this.routes.navigate(['/day'], { queryParams:  { startWeek } });
  }

}


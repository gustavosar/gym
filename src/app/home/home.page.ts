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

  public startWeek;
  public endWeek;
  public weekNumber;
  public weekday;
  public wdate;

  public days  = [
    {id: '1', wday: 'Monday', wdate: moment().startOf('isoWeek').format('DD/MM') },
    {id: '2', wday: 'Tuesday', wdate: moment().startOf('isoWeek').add(1, 'days').format('DD/MM') },
    {id: '3', wday: 'Wednesday', wdate: moment().startOf('isoWeek').add(2, 'days').format('DD/MM') },
    {id: '4', wday: 'Thursday', wdate: moment().startOf('isoWeek').add(3, 'days').format('DD/MM') },
    {id: '5', wday: 'Friday', wdate: moment().startOf('isoWeek').add(4, 'days').format('DD/MM') },
    {id: '6', wday: 'Saturday', wdate: moment().startOf('isoWeek').add(5, 'days').format('DD/MM') },
    {id: '7', wday: 'Sunday', wdate: moment().startOf('isoWeek').add(6, 'days').format('DD/MM') }
    ];

  /*
  public nextStartWeek;
  public nextEndWeek;
  public previousStartWeek;
  public previousEndWeek;
  */
 


  constructor(
    private activeRoute: ActivatedRoute,
		private routes: Router,
  ) {

    this.endWeek = this.m.endOf('isoWeek');
    this.startWeek = this.mm.startOf('isoWeek');
    this.weekNumber = this.mmm.weeks()-this.mmm.add(0, 'month').startOf('month').weeks() + 1;
    this.weekday = moment().format('dddd');

    /*  
    this.nextStartWeek = this.moment.add(1, 'weeks').startOf('isoWeek');
    this.nextEndWeek = this.moment.add(1, 'weeks').endOf('isoWeek');

    this.previousStartWeek = this.moment.subtract(1, 'weeks').startOf('isoWeek');
    this.previousEndWeek = this.moment.subtract(1, 'weeks').endOf('isoWeek') 
    */

  }



/*   navDay() {
    const wdate = JSON.stringify(this.wdate);
    this.routes.navigate(['/day'], { queryParams:  { wdate } });
  } */

  navDay(navDay: string) {
    const navDay1 = JSON.stringify(this.navDay);
    this.routes.navigate(['/day'], { queryParams:  { navDay } });
  }

}


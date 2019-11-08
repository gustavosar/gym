import { Component } from '@angular/core';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskII } from '../models/day.interface';

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
    {wday: 'Monday', wdate: moment().startOf('isoWeek').format('DD/MM'), date: moment().startOf('isoWeek').format('L') },
    {wday: 'Tuesday', wdate: moment().startOf('isoWeek').add(1, 'days').format('DD/MM'), date: moment().startOf('isoWeek').add(1, 'days').format('L') },
    {wday: 'Wednesday', wdate: moment().startOf('isoWeek').add(2, 'days').format('DD/MM'), date: moment().startOf('isoWeek').add(2, 'days').format('L') },
    {wday: 'Thursday', wdate: moment().startOf('isoWeek').add(3, 'days').format('DD/MM'), date: moment().startOf('isoWeek').add(3, 'days').format('L') },
    {wday: 'Friday', wdate: moment().startOf('isoWeek').add(4, 'days').format('DD/MM'), date: moment().startOf('isoWeek').add(4, 'days').format('L') },
    {wday: 'Saturday', wdate: moment().startOf('isoWeek').add(5, 'days').format('DD/MM'), date: moment().startOf('isoWeek').add(5, 'days').format('L') },
    {wday: 'Sunday', wdate: moment().startOf('isoWeek').add(6, 'days').format('DD/MM'), date: moment().startOf('isoWeek').add(6, 'days').format('L') }
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

  /* PASSA POR URL DATA */
  navDay(navDay: string) {
    const navDay1 = JSON.stringify(this.navDay);
    this.routes.navigate(['/day'], { queryParams:  { navDay } });
  }

}


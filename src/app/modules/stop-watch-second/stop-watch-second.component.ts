import {Component, ElementRef, ViewChild} from '@angular/core';
import {interval, timer} from "rxjs";
import {startWith} from "rxjs/operators";



@Component({
  selector: 'app-stop-watch-second',
  templateUrl: './stop-watch-second.component.html',
  styleUrls: ['./stop-watch-second.component.scss']
})
export class StopWatchSecondComponent {
  public started = false;
  public time = 0;
  public title = '0:0:0';
  constructor() {
      interval( 100)
        .subscribe(
        value => {
          if (!this.started){ return; }
          this.time++;
          this.title = Math.floor(this.time / 600) + ':' + Math.floor((this.time / 10) % 60)  + ':' + (this.time % 10);
        });
    }
  }

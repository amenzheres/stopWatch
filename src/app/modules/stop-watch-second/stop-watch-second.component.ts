import {Component, ElementRef, ViewChild} from '@angular/core';
import {fromEvent, interval} from 'rxjs';
import {buffer} from "rxjs/operators";



@Component({
  selector: 'app-stop-watch-second',
  templateUrl: './stop-watch-second.component.html',
  styleUrls: ['./stop-watch-second.component.scss']
})
export class StopWatchSecondComponent {
  @ViewChild('mybutton') button!: ElementRef;
  public started = false;
  public time = 0;
  public title = '0:0:0';
  public isSingleClick = false;
  constructor() {
      interval( 100)
        .subscribe(
        value => {
          if (!this.started){ return; }
          this.time++;
          this.title = Math.floor(this.time / 600) + ':' + Math.floor((this.time / 10) % 60)  + ':' + (this.time % 10);
        });
    }
  public clickTimeout = null;
  public test(): void {
    if (this.clickTimeout) {
      // @ts-ignore
      clearTimeout(this.clickTimeout);
      this.started = false;
    } else {
      // @ts-ignore
      this.clickTimeout = setTimeout(() => {
        this.clickTimeout = null;
      }, 300);
    }
  }
  }

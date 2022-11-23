import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-count-down',
  template: `
  <app-navbar></app-navbar>
    <div class=" my-12 flex justify-center item-center">
      <h4 class="text-5xl font-lubre font-extrabold">
        Counting down to Musa and Musonda's wedding
      </h4>
    </div>
    <div class="flex justify-center item-center font-bold text-4xl">
      <div class="bg-slate-400 p-8 ">
      {{ daysToWDay }}
      </div>
      <span class=" flex p-4 item-center justify-center -mb-3 text-2xl"> Day(s)</span>
        <span class="bg-slate-400 p-8"> {{ hoursToWDay }} </span>Hours
        <span class="bg-slate-400 p-8"> {{ minutesToWDay }} </span>Minutes
        <span class="bg-slate-400 p-8"> {{ secondsToWDay }} </span>Seconds
      
    </div>
    
  `,
  styles: [],
})
export class CountDownComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  public dateNow = new Date();
  public wDay = new Date('Dec 10 2022 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  secondsInAMinute = 60;

  public timeDifference!: number;
  public secondsToWDay!: number;
  public minutesToWDay!: number;
  public hoursToWDay!: number;
  public daysToWDay!: number;

  private getTimeDifference() {
    this.timeDifference = this.wDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: number) {
    this.secondsToWDay = Math.floor(
      (timeDifference / this.milliSecondsInASecond) % this.secondsInAMinute
    );
    this.minutesToWDay = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.secondsInAMinute
    );
    this.hoursToWDay = Math.floor(
      (timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.secondsInAMinute)) %
        this.hoursInADay
    );
    this.daysToWDay = Math.floor(
      timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.secondsInAMinute *
          this.hoursInADay)
    );
  }

  constructor() {}

  ngOnInit() {
    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

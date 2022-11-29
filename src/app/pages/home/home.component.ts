import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  template: ` <div class=" my-12 flex justify-center item-center">
      <h4 class="text-2xl font-lubra font-extrabold">
        Counting down to Muse and Musonda's wedding
      </h4>
    </div>
    <div class=" ">
      {{ daysToWDay }}
      <span class=""> Days</span>
      <span class=""> {{ hoursToWDay }} </span>Hours
      <span class=""> {{ minutesToWDay }} </span>Minutes
      <span class=""> {{ secondsToWDay }} </span>Seconds
    </div>`,
  styles: [],
})
export class HomeComponent implements OnInit, OnDestroy {
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

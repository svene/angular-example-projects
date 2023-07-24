import {Component, effect, OnDestroy, OnInit, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {interval, Observable, tap} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-signal-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="component-container">Signal Child</div>
  `,
  styles: [
    `
      .component-container {
        color: white;
        background-color: green;
        margin: 5px;
        padding: 10px;
        border-radius: 5px;
      }
    `
  ],
})
export class SignalChildComponent implements OnInit, OnDestroy {
  counter$!: Observable<number>;
  counter!: Signal<number | undefined>;
  id = new Date().getTime()

  constructor() {
    this.counter$ = interval(1000).pipe(
      tap(it => console.count(`id: ${this.id}`)),
    );
    this.counter = toSignal(this.counter$);
  }

  ngOnInit(): void {
    console.log('SignalChild: ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('SignalChild: ngOnDestroy');
  }
}

import {Component, effect, OnDestroy, OnInit, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {interval, Observable, tap} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-signal-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>Signal Child</article>
  `,
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
    console.log('Child: ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Child: ngOnDestroy');
  }
}

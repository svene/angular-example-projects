import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {interval, Observable, tap} from "rxjs";

@Component({
  selector: 'app-leaking-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="component-container">Leaking Child</div>
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
export class LeakingChildComponent implements OnInit, OnDestroy {
  counter$!: Observable<number>;
  id = new Date().getTime()


  constructor() {
    this.counter$ = interval(1000).pipe(
      tap(_ => console.count(`id: ${this.id}`)),
    );
  }

  ngOnInit(): void {
    console.log('LeakingChild: ngOnInit');
    this.counter$.subscribe(_ => {});
  }

  ngOnDestroy(): void {
    console.log('LeakingChild: ngOnDestroy');
  }
}

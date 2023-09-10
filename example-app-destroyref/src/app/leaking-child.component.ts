import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {interval, Observable, tap} from "rxjs";

@Component({
  selector: 'app-leaking-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>Leaking Child</article>
  `,
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
    console.log('Child: ngOnInit');
    this.counter$.subscribe(_ => {});
  }

  ngOnDestroy(): void {
    console.log('Child: ngOnDestroy');
  }
}

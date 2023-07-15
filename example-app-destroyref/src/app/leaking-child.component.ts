import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="component-container">Leaking Child</div>
  `,
  styleUrls: ['./leaking-child.component.scss'],
})
export class LeakingChildComponent implements OnInit, OnDestroy {
  counter$!: Observable<number>;
  id = new Date().getTime()
  ngOnInit(): void {
    console.log('Child: ngOnInit');
    this.counter$ = interval(1000);
    this.counter$.subscribe(_ => console.count(`id: ${this.id}`));
  }

  ngOnDestroy(): void {
    console.log('Child: ngOnDestroy');
  }
}

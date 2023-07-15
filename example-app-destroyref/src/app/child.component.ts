import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="component-container">Child</div>
  `,
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnDestroy {
  counter$!: Observable<number>;
  id = new Date().getTime()
  ngOnInit(): void {
    console.log('Child: ngOnInit');
    this.counter$ = interval(1000);
    this.counter$.subscribe(it => console.count(`id: ${this.id}`));
  }

  ngOnDestroy(): void {
    console.log('Child: ngOnDestroy');
  }
}

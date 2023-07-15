import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ngOnInit(): void {
    console.log('Child: ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Child: ngOnDestroy');
  }
}

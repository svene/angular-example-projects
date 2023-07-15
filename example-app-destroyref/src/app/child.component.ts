import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="component-container">child</div>
  `,
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
}

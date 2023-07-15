import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildComponent} from "./child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChildComponent],

  template: `
    <div class="app-header">{{title}}</div>
    <div class="app-container">
      <div>App</div>
      <app-child/>
      <div>App</div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-app-destroyref';
}

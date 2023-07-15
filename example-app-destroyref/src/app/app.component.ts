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
      <div><button class="app-button" type="button" (click)="toggleChild()">Toggle Child</button></div>
      <app-child *ngIf="childVisible"/>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-app-destroyref';
  childVisible = true;

  toggleChild() {
    this.childVisible = !this.childVisible;
  }
}

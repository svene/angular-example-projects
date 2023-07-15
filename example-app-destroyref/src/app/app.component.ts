import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeakingChildComponent} from "./leaking-child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LeakingChildComponent],

  template: `
    <div class="app-header">{{title}}</div>
    <div class="app-container">
      <div><button class="app-button" type="button" (click)="toggleChild()">Toggle Child</button></div>
      <app-child *ngIf="childVisible"/>
    </div>
  `,
  styles: [
    `
      .app-header {
        margin: 10px 0 10px 0;
      }
      .app-button {
        color: white;
        background-color: #000d6e;
        border-radius: 3px;
      }
      .app-container {
        background-color: white;
        border-style: dashed;
        border-width: 1px;
        padding: 10px;
        border-radius: 5px;

        width: 10%;
      }
    `
  ],
})
export class AppComponent {
  title = 'example-app-destroyref';
  childVisible = true;

  toggleChild() {
    this.childVisible = !this.childVisible;
  }
}

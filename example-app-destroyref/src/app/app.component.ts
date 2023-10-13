import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeakingChildComponent} from "./leaking-child.component";
import {SignalChildComponent} from "./signal-child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LeakingChildComponent, SignalChildComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  template: `
    <div class="app-header">{{title}}</div>
    <div class="app-container">
      <div>
        <sl-button size="small">Click me</sl-button>
        <button class="app-button" type="button" (click)="toggleLeakingChild()">Toggle Leaking Child</button>
        <button class="app-button" type="button" (click)="toggleSignalChild()">Toggle Signal Child</button>
      </div>
      <app-leaking-child *ngIf="leakingChildVisible"/>
      <app-signal-child *ngIf="signalChildVisible"/>
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
  leakingChildVisible = true;
  signalChildVisible = true;

  toggleLeakingChild() {
    this.leakingChildVisible = !this.leakingChildVisible;
  }

  toggleSignalChild() {
    this.signalChildVisible = !this.signalChildVisible;
  }
}

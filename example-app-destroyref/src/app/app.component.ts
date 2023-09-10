import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeakingChildComponent} from "./leaking-child.component";
import {SignalChildComponent} from "./signal-child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LeakingChildComponent, SignalChildComponent],

  template: `
    <main class="container">
      <h1>{{title}}</h1>
      <div class="grid">
        <div><button class="app-button" type="button" (click)="toggleLeakingChild()">Toggle Leaking Child</button></div>
        <div><button class="app-button" type="button" (click)="toggleSignalChild()">Toggle Signal Child</button></div>
      </div>

      <app-leaking-child *ngIf="leakingChildVisible"/>
      <article *ngIf="!leakingChildVisible" class="black-background">NO Leaking Child</article>

      <app-signal-child *ngIf="signalChildVisible"/>
      <article *ngIf="!signalChildVisible" class="black-background">NO Signal Child</article>
    </main>

  `,
  styles: [
    `
      .black-background {
        background-color: var(--h1-color);
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

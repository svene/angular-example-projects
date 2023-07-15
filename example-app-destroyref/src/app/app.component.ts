import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeakingChildComponent} from "./leaking-child.component";
import {SignalChildComponent} from "./signal-child.component";
import {BaloiseDesignSystemModule} from "@baloise/design-system-components-angular";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LeakingChildComponent, SignalChildComponent, BaloiseDesignSystemModule],
  styleUrls: ['app.component.scss'],
  template: `
    <bal-app>
      <bal-heading level="h1" space="bottom">Heading</bal-heading>
      <bal-card>
        <bal-card-title>BaloiseCombi</bal-card-title>
      </bal-card>
      <h1 class="title is-size-xxx-large">{{title}}</h1>
    <div class="app-container">
      <div>
        <button class="app-button" type="button" (click)="toggleLeakingChild()">Toggle Leaking Child</button>
        <button class="app-button" type="button" (click)="toggleSignalChild()">Toggle Signal Child</button>
      </div>
      <app-leaking-child *ngIf="leakingChildVisible"/>
      <app-signal-child *ngIf="signalChildVisible"/>
    </div>
    </bal-app>
  `,
})
export class AppComponent {
  title = 'example-app-destroyref';
  leakingChildVisible = false;
  signalChildVisible = true;

  toggleLeakingChild() {
    this.leakingChildVisible = !this.leakingChildVisible;
  }

  toggleSignalChild() {
    this.signalChildVisible = !this.signalChildVisible;
  }
}

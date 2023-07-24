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
      <bal-heading level="h1" space="bottom">{{title}}</bal-heading>
      <bal-card style="width: 50%; margin: 20px">
        <bal-card-title>Children</bal-card-title>
        <bal-card-content>
          <app-leaking-child *ngIf="leakingChildVisible"/>
          <app-signal-child *ngIf="signalChildVisible"/>
        </bal-card-content>
        <bal-card-actions>
          <bal-button (click)="toggleLeakingChild()">Toggle Leaking Child</bal-button>
          <bal-button (click)="toggleSignalChild()">Toggle Signal Child</bal-button>
        </bal-card-actions>
      </bal-card>
    </bal-app>
  `,
})
export class AppComponent {
  title = 'Example: DestroyRef';
  leakingChildVisible = false;
  signalChildVisible = true;

  toggleLeakingChild() {
    this.leakingChildVisible = !this.leakingChildVisible;
  }

  toggleSignalChild() {
    this.signalChildVisible = !this.signalChildVisible;
  }
}

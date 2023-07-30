import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeakingChildComponent} from "./leaking-child.component";
import {SignalChildComponent} from "./signal-child.component";
import {BaloiseDesignSystemModule} from "@baloise/design-system-components-angular";
import {AppStore} from "./app.store";
import {LetDirective} from "@ngrx/component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LeakingChildComponent, SignalChildComponent, BaloiseDesignSystemModule, LetDirective],
  styleUrls: ['app.component.scss'],
  providers: [AppStore],
  template: `
    <bal-app *ngrxLet="vm$ as vm">
      <bal-card class="app-card">
        <bal-card-title>{{title}}</bal-card-title>
        <bal-card-subtitle>use toSignal() instead of takeUntil(destroy$)</bal-card-subtitle>
        <bal-card-content>
        <bal-field>
          <bal-field-label>Options</bal-field-label>
          <bal-field-control>
              <bal-checkbox [value]="vm.leakingChildVisible" (balChange)="toggleLeakingChild()">Leaking Child</bal-checkbox>
              <bal-checkbox [value]="vm.signalChildVisible" (balChange)="toggleSignalChild()">Signal Child</bal-checkbox>
          </bal-field-control>
        </bal-field>
        <bal-card-actions>
        </bal-card-actions>
        </bal-card-content>
      </bal-card>

      <bal-card class="app-card">
        <bal-card-title>Content</bal-card-title>
        <bal-card-content>
          <app-leaking-child *ngIf="vm.leakingChildVisible"/>
          <app-signal-child *ngIf="vm.signalChildVisible"/>
        </bal-card-content>
      </bal-card>
    </bal-app>
  `,
})
export class AppComponent {
  title = 'DestroyRef Demo';
  readonly vm$ = this.appStore.vm$;

  constructor(
    private readonly appStore: AppStore
  ) {
  }

  toggleLeakingChild() {
    this.appStore.toggleLeakingChild();
  }

  toggleSignalChild() {
    this.appStore.toggleSignalChild();
  }
}

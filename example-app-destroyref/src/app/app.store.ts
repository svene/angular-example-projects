import {ComponentStore} from "@ngrx/component-store";
import {Injectable} from "@angular/core";

export interface AppState {
  leakingChildVisible: boolean;
  signalChildVisible: boolean;
}

@Injectable()
export class AppStore extends ComponentStore<AppState> {
  constructor() {
    super({
      leakingChildVisible: false,
      signalChildVisible: false,
    });

  }
  readonly toggleSignalChild = this.updater((state) => ({
    ...state,
    signalChildVisible: !state.signalChildVisible,
  }));
  readonly toggleLeakingChild = this.updater((state) => ({
    ...state,
    leakingChildVisible: !state.leakingChildVisible,
  }));

  readonly vm$ = this.select({
    leakingChildVisible: this.select(state => state.leakingChildVisible),
    signalChildVisible: this.select(state => state.signalChildVisible),
  });
}

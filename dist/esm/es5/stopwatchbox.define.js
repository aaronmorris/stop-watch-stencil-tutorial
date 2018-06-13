// stopwatchbox: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './stopwatchbox.core.js';
import {
  StopWatchBoxComponent,
  StopWatchComponent
} from './stopwatchbox.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    StopWatchBoxComponent,
    StopWatchComponent
  ], opts);
}
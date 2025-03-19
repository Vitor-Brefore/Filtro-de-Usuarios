import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PoListViewModule,
  PoModule,
  PoInfoModule,
  PoDividerModule,
  PoFieldModule,
  PoTableModule,
} from '@po-ui/ng-components';

@NgModule({
  imports: [
    PoModule,
    PoListViewModule,
    PoInfoModule,
    BrowserAnimationsModule,
    PoDividerModule,
    PoFieldModule,
    PoTableModule,
  ],
  exports: [
    PoModule,
    PoListViewModule,
    PoInfoModule,
    BrowserAnimationsModule,
    PoDividerModule,
    PoFieldModule,
  ],
})
export class Poui {}

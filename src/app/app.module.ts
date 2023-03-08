import { setBackgroundDirective } from './CustomDirective/setbackground.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeighlightDirective } from './CustomDirective/heighlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { HostBindingDirective } from './CustomDirective/host-binding.directive';
import { AppClassDirective } from './CustomDirective/app-class.directive';
import { StyleDirective } from './style.directive';
import { CustomStructuralDirective } from './custom-structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    setBackgroundDirective,
    HeighlightDirective,
    HoverDirective,
    HostBindingDirective,
    AppClassDirective,
    StyleDirective,
    CustomStructuralDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

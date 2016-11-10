import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/platform';
import { SIDEDRAWER_DIRECTIVES } from 'nativescript-telerik-ui/sidedrawer/angular';

import { SideDrawerPageComponent } from './side-drawer-page';
import { BorderlessBtnDirective } from './borderless-btn.directive';

@NgModule({
  imports: [
    NativeScriptModule,
  ],
  declarations: [
    SIDEDRAWER_DIRECTIVES,
    SideDrawerPageComponent,
    BorderlessBtnDirective
  ],
  exports: [
    SideDrawerPageComponent,
    BorderlessBtnDirective
  ]
})
export class SharedModule {

}

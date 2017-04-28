import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives';

import { SideDrawerPageComponent } from './side-drawer-page';
import { BorderlessBtnDirective } from './borderless-btn.directive';

@NgModule({
  imports: [
    NativeScriptModule,
  ],
  declarations: [
    NativeScriptUISideDrawerModule,
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

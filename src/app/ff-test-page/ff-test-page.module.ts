import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FfTestPageRoutingModule} from './ff-test-page-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {FfTestPageComponent} from '@app/ff-test-page/ff-test-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FfTestPageRoutingModule
  ],
  declarations: [FfTestPageComponent]
})
export class FfTestPageModule {
}

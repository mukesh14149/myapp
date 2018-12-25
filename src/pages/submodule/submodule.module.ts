import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmodulePage } from './submodule';

@NgModule({
  declarations: [
    SubmodulePage,
  ],
  imports: [
    IonicPageModule.forChild(SubmodulePage),
  ],
})
export class SubmodulePageModule {}

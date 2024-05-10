import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { ActivePipe } from './active.pipe';
import { AddressPipe } from './address.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';



@NgModule({
  declarations: [
    PhonePipe,
    ActivePipe,
    AddressPipe,
    DashIfEmptyPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhonePipe,
    ActivePipe,
    AddressPipe,
    DashIfEmptyPipe,
  ]
})

export class PipesModule { }

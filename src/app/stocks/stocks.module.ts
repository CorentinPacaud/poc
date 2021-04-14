import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksComponent } from './stocks.component';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    StocksComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class StocksModule { }

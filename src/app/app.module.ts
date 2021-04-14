import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksModule } from './stocks/stocks.module';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import {AutoCompleteModule} from 'primeng/autocomplete';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    StocksModule,
    ChipsModule,
    FormsModule,
    TagModule,
    ChipModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

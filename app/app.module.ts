import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {KeyFilterModule} from 'primeng/keyfilter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent, FocusDirective } from './app.component';

import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {DataTableModule} from 'primeng/datatable';
import {FileUploadModule} from 'primeng/fileupload';
import {InputMaskModule} from 'primeng/inputmask';
import {MultiSelectModule} from 'primeng/multiselect';
import {
  DropdownModule,
  ButtonModule
} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, DropdownModule, AutoCompleteModule, CalendarModule,KeyFilterModule, FileUploadModule, DataTableModule, InputMaskModule, MultiSelectModule ],
  declarations: [ AppComponent, FocusDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

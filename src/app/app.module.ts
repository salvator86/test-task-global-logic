import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {SearchComponent} from "./features/search/search.component";
import {VideoListComponent} from "./features/video-list/video-list.component";
import {FilterComponent} from "./features/filter/filter.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SearchComponent,
    FilterComponent,
    VideoListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

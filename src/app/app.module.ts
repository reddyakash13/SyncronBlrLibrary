import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookShelfComponent } from './book-shelf.component';
import { ListViewComponent } from './listview.component';
import { TitleComponent } from './title.component';

@NgModule({
  declarations: [
    AppComponent,
    BookShelfComponent,
    ListViewComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

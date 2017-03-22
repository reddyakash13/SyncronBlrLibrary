import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookShelfComponent } from './book-shelf.component';
import { ListViewComponent } from './listview.component';
import { TitleComponent } from './title.component';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ModalModule } from 'angular2-modal';

import { CustomModal } from './custom-modal-sample';

@NgModule({
  declarations: [
    AppComponent,
    BookShelfComponent,
    ListViewComponent,
    TitleComponent,
    CustomModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BootstrapModalModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomModal]
})
export class AppModule { }

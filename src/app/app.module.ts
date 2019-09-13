import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemViewNotesComponent } from './item-view/item-view-notes.component';
import { DetailViewNoteComponent } from './detail-view/detail-view-note.component';
import { PageNotFoundComponent, } from './shared/components/page-not-found.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { DataStorage } from './item-view/data.provider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DetailViewNoteComponent,
    ItemViewNotesComponent,

  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    DataStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

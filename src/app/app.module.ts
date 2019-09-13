import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemViewNotesComponent } from './item-view/item-view-notes.component';
import { DetailViewNoteComponent } from './detail-view/detail-view-note.component';
import { PageNotFoundComponent, } from './shared/components/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DetailViewNoteComponent,
    ItemViewNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

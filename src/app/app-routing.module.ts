import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailViewNoteComponent } from './detail-view/detail-view-note.component';
import { ItemViewNotesComponent } from './item-view/item-view-notes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'note-list',
    pathMatch: 'full'
  },
  {
    path: 'note-list',
    component: ItemViewNotesComponent, pathMatch: 'full'
  },
  {
    path: 'note-detail',
    component: DetailViewNoteComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRouting {
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Note } from './note';
import { NotesService } from './notes.service';
import { DetailViewNoteComponent } from '../detail-view/detail-view-note.component';
import { DataStorage } from './data.provider';

@Component({
    selector: 'app-item-view-notes',
    templateUrl: './item-view-notes.component.html',
    providers: [NotesService],
    styleUrls: ['./item-view-notes.component.scss']
})

export class ItemViewNotesComponent implements OnInit {
    @ViewChild(DetailViewNoteComponent, { static: true }) detailNoteRef: DetailViewNoteComponent;
    notes: Note[];
    editNote: Note;

    constructor(
        private router: Router,
        private notesService: NotesService,
        private _data: DataStorage,
    ) { }

    ngOnInit() {
        this.getNotes();
    }

    getNotes(): void {
        this.notesService.getNotes()
            .subscribe(notes => (this.notes = notes));
    }
    add(title: string): void {
        this.editNote = undefined;
        title = title.trim();
        if (!title) {
            return;
        }

        // The server will generate the id for this new hero
        const newNote: Note = { title } as Note;
        this.notesService
            .addNote(newNote)
            .subscribe(note => this.notes.push(note));
    }

    delete(note: Note): void {
        this.notes = this.notes.filter(h => h !== note);
        this.notesService
            .deleteNote(note.id)
            .subscribe();
    }

    getDetail(note) {
        console.log('Přejdi na tuhle stránku: ', note);
        this._data.data = {
            title: note.title,
        }

        this.router.navigate(['/note-detail'], { queryParams: { id: note.id } });
        //console.log('Reference: ', this.detailNoteRef);

    }

    edit(note: Note) {
        this.editNote = note;
    }
    /*
ngOnInit() {
    this.loadAllTodoList();
}

loadAllTodoList() {
    // window.fetch('http://private-9aad-note10.apiary-mock.com').then(r => r.json()).then(j => { console.log(j); });
}

onClickEditTodoDetail(id) {
    this.router.navigate(['/todo-detail'], { queryParams: { id: id } });
}

onClickAddTodo() {
    this.router.navigate(['/todo-detail']);
}

onClickItem(id) {
    this.router.navigate(['/note-detail'], { queryParams: { id: id } });
}

onClickTodoDelete(id) {
    this.loadAllTodoList();
}*/
}


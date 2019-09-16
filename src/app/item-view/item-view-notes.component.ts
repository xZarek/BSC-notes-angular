import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from './note';
import { NotesService } from './notes.service';
import { DetailViewNoteComponent } from '../detail-view/detail-view-note.component';

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
    ) {

    }

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
        this.router.navigate(['/note-detail'], { queryParams: { id: note.id } });

    }

    edit(note: Note) {
        this.editNote = note;
    }
}


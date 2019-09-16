import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Note } from '../item-view/note';
import { NotesService } from '../item-view/notes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
    selector: 'app-detail-view-note',
    templateUrl: './detail-view-note.component.html',
    providers: [NotesService],
    styleUrls: ['./detail-view-note.component.scss']
})
export class DetailViewNoteComponent implements OnInit, OnDestroy {
    note: Note[];
    title: string;
    public cuForm: FormGroup;
    editNote: Note;
    constructor(
        private route: ActivatedRoute,
        public translate: TranslateService,
        private notesService: NotesService,
        private fb: FormBuilder,
        private _location: Location

    ) {
        this.cuForm = this.fb.group({
            'areaName': ['', [Validators.required]],
        });
    }

    ngOnInit() {
        this.getNotes(this.route.snapshot.queryParams.id);

    }

    getNotes(noteId): void {
        this.notesService.getNoteTitle(noteId)
            .subscribe(notes => {
                this.title = notes.title,
                    this.cuForm.get('areaName').setValue(notes.title);
            });
    }

    edit(): void {
        this.notesService.updateNote(this.route.snapshot.queryParams.id, this.cuForm.get('areaName').value)
            .subscribe(notes => (
                this.cuForm.get('areaName').setValue(notes.title))
            );
    }
    goBack(): void {
        this._location.back();
    }
    ngOnDestroy() {
        // this.modalAction.next(this.modalData);
    }

}

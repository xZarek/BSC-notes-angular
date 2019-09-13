import { Component, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { TranslateService } from '@ngx-translate/core';
import { DataStorage } from '../item-view/data.provider';
import { NotesService } from '../item-view/notes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../item-view/note';


@Component({
    selector: 'app-detail-view-note',
    templateUrl: './detail-view-note.component.html',
    providers: [NotesService],
    styleUrls: ['./detail-view-note.component.scss']
})
export class DetailViewNoteComponent implements OnInit, OnDestroy {
    public cuForm: FormGroup;
    editNote: Note;
    constructor(
        private router: Router,
        // public translate: TranslateService,
        private notesService: NotesService,
        private _data: DataStorage,
        private fb: FormBuilder,

    ) {
        console.log('STANO', JSON.stringify(this._data.data.title));
        this.cuForm = this.fb.group({
            'areaName': [this._data.data.title, [Validators.required]],
        });
    }

    ngOnInit() {

    }
    edit(note: Note): void {
        console.log('update')
        this.notesService.updateNote(1, note)
            .subscribe(notes => (note = notes));
    }
    ngOnDestroy() {
        // this.modalAction.next(this.modalData);
    }

}

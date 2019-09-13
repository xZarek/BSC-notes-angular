import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-detail-view-note',
    templateUrl: './detail-view-note.component.html',
    styleUrls: ['./detail-view-note.component.scss']
})
export class DetailViewNoteComponent implements OnInit, OnDestroy {

    constructor(
        route: ActivatedRoute,
        router: Router,
        // public translate: TranslateService,

    ) {

    }

    ngOnInit() {

    }
    ngOnDestroy() {
        // this.modalAction.next(this.modalData);
    }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-item-view-notes',
    templateUrl: './item-view-notes.component.html',
    styles: ['./item-view-notes.component.scss']
})

export class ItemViewNotesComponent implements OnInit {

    constructor(private router: Router) { }

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
    }
}


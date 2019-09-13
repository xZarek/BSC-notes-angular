import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Note } from './note';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class NotesService {
    notesUrl = 'http://private-9aad-note10.apiary-mock.com';  // URL to web api
    private handleError: HandleError;

    constructor(
        private http: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('NotesService');
    }

    /** GET notes from the server */
    getNotes(): Observable<Note[]> {
        return this.http.get<Note[]>(`${this.notesUrl}/notes`)
            .pipe(
                catchError(this.handleError('getNotes', []))
            );
    }
    //////// Save methods //////////

    /** POST: add a new note to the database */
    addNote(note: Note): Observable<Note> {
        console.log('Note v add', note)
        return this.http.post<Note>(`${this.notesUrl}/notes`, note, httpOptions)
            .pipe(
                catchError(this.handleError('addNote', note))
            );
    }

    /** DELETE: delete the note from the server */
    deleteNote(id: number): Observable<{}> {
        const url = `${this.notesUrl}/notes/${id}`; // DELETE api/notes/42
        return this.http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError('deleteNote'))
            );
    }

    /** PUT: update the note on the server. Returns the updated note upon success. */
    updateNote(id: number, note: Note): Observable<Note> {
        httpOptions.headers =
            httpOptions.headers.set('Authorization', 'my-new-auth-token');

        return this.http.put<Note>(`${this.notesUrl}/notes/${id}`, note, httpOptions)
            .pipe(
                catchError(this.handleError('updateNote', note))
            );
    }
}
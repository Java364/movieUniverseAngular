import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieMark } from './movieMark';

@Injectable()
export class MovieMarkService {
    constructor(private httpClient: HttpClient) {
    }

    public getById(id: number, callback: Function) {
        this.httpClient.get('http://localhost:8080/movieMark/show/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public getAll(callback: Function) {
        this.httpClient.get('http://localhost:8080/movieMark/list').subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public create(movieMark: MovieMark, callback: Function) {
        this.httpClient.post('http://localhost:8080/movieMark/create', movieMark).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public update(id: number, movieMark: MovieMark, callback: Function) {
        this.httpClient.put('http://localhost:8080/movieMark/update/' + id, movieMark).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public delete(id: number, callback: Function) {
        this.httpClient.delete('http://localhost:8080/movieMark/delete/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
}

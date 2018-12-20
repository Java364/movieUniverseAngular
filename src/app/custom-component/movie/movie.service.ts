import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

@Injectable()
export class MovieService {
    constructor(private httpClient: HttpClient) {
    }

    public getById(id: number, callback: Function) {
        this.httpClient.get('http://localhost:8080/movie/show/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public getAll(callback: Function) {
        this.httpClient.get('http://localhost:8080/movie/list').subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public create(movie: Movie, callback: Function) {
        this.httpClient.post('http://localhost:8080/movie/create', movie).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public update(id: number, movie: Movie, callback: Function) {
        this.httpClient.put('http://localhost:8080/movie/update/' + id, movie).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public delete(id: number, callback: Function) {
        this.httpClient.delete('http://localhost:8080/movie/delete/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
}

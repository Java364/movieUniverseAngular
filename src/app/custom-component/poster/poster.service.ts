import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poster } from './poster';
@Injectable()
export class PosterService {
    constructor(private httpClient: HttpClient) {
    }
    public getPoster(id: number, callback: Function) {
        this.httpClient.get('http://localhost:8080/poster/show/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public createPoster(poster: Poster, callback: Function) {
        this.httpClient.post('http://localhost:8080/poster/create', poster).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public updatePoster(id: number, poster: Poster, callback: Function, ) {
        this.httpClient.put('http://localhost:8080/poster/update/' + id, poster).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public deletePoster(id: number, callback: Function) {
        this.httpClient.delete('http://localhost:8080/poster/delete/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
}

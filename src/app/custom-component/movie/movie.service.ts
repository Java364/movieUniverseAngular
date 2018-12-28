import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { Country } from '../country/country';

@Injectable()
export class MovieService {
    constructor(private httpClient: HttpClient) {
    }

    public getById(id: number, callback: Function) {
        this.httpClient.get('http://localhost:8080/movies/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public getAll(callback: Function) {
        this.httpClient.get('http://localhost:8080/movies').subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public create(movie: Movie, callback: Function) {
        this.httpClient.post('http://localhost:8080/movies', movie).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public update(id: number, movie: Movie, callback: Function) {
        this.httpClient.put('http://localhost:8080/movies/' + id, movie).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public delete(id: number, callback: Function) {
        this.httpClient.delete('http://localhost:8080/movies/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public addCountries(id:number, countries: Country[], callback: Function) {
        this.httpClient.post('http://localhost:8080/movies/' + id + '/countries', countries).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public addCountries2(movieCountries:string, countries: Country[], callback: Function) {
        this.httpClient.post(movieCountries, countries).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
}

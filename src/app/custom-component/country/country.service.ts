import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';

@Injectable()
export class CountryService {
    constructor(private httpClient: HttpClient) {
    }

    public getById(id: number, callback: Function) {
        this.httpClient.get('http://localhost:8080/country/show/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public getAll(callback: Function) {
        this.httpClient.get('http://localhost:8080/country/list').subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public create(country: Country, callback: Function) {
        this.httpClient.post('http://localhost:8080/country/create', country).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public update(id: number, country: Country, callback: Function) {
        this.httpClient.put('http://localhost:8080/country/update/' + id, country).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public delete(id: number, callback: Function) {
        this.httpClient.delete('http://localhost:8080/country/delete/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
}

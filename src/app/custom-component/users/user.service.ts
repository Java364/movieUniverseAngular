import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) {
    }

    public getById(id: number, callback: Function) {
        this.httpClient.get('http://localhost:8080/users/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
    public getAll(callback: Function) {
        this.httpClient.get('http://localhost:8080/users/').subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public getAllIncludingRemoved (callback: Function) {
        this.httpClient.get('http://localhost:8080/users/include-removed/').subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public create(user: User, callback: Function) {
        this.httpClient.post('http://localhost:8080/users/', user).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public update(id: number, user: User, callback: Function) {
        this.httpClient.put('http://localhost:8080/users/' + id, user).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public delete(id: number, callback: Function) {
        this.httpClient.delete('http://localhost:8080/users/' + id + '/remove').subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public getLinkData(url:string, callback: Function) {
        this.httpClient.get(url).subscribe(
            (success) => {
                callback(success);
            }
        )
    }
}

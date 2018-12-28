import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from './genre';

@Injectable()
export class GenreService {
  constructor(private httpClient: HttpClient) {
  }

  public getAll(callback: Function) {
    this.httpClient.get('http://localhost:8080/genres').subscribe(
      (success) => {
        callback(success);
      }
    );
  }
  public create(country: Genre, callback: Function) {
    this.httpClient.post('http://localhost:8080/genres', country).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public update(id: number, country: Genre, callback: Function) {
    this.httpClient.put('http://localhost:8080/genres/' + id, country).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public delete(id: number, callback: Function) {
    this.httpClient.delete('http://localhost:8080/genres/' + id).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
}

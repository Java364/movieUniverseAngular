import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Links } from './links';

@Injectable()
export class LinksService {
  constructor(private httpClient: HttpClient) {

  }

  public getLinks(id: number, callback: Function) {
    this.httpClient.get('http://localhost:8080/links/link/' + id).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
  public deleteLinks(id: number, callback: Function) {
    this.httpClient.delete('http://localhost:8080/links/delete/' + id).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public getAllLinks(callback: Function) {
    this.httpClient.get('http://localhost:8080/links/listAll').subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public createLinks(links: Links, callback: Function) {
    this.httpClient.post('http://localhost:8080/links/createLinks', links).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public updateLinks(id: number, links: Links, callback: Function) {
    this.httpClient.put('http://localhost:8080/links/link/' + id , links).subscribe(
      (success) => {
        callback(success);
      }
    );
  }


 /* public showAll( callback: Function) {
    this.httpClient.put('http://localhost:8080/links/listAll' , links).subscribe(
      (success) => {
        callback(success);
      }
    );
  }*/
}

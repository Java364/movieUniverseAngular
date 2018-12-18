
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Profession} from './profession';


@Injectable()
export class ProfessionService {
  constructor(private httpClient: HttpClient) {

  }

  public getProfession(id: number, callback: Function) {
    this.httpClient.get('http://localhost:8080/profession/profession/' + id).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
  public deleteProfession(id: number, callback: Function) {
    this.httpClient.delete('http://localhost:8080/profession/delete/' + id).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public getAllProfession(callback: Function) {
    this.httpClient.get('http://localhost:8080/profession/listAll').subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public createProfession(profession: Profession, callback: Function) {
    this.httpClient.post('http://localhost:8080/profession/createProfession', profession).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public updateProfession(id: number, profession: Profession, callback: Function) {
    this.httpClient.put('http://localhost:8080/profession/profession/' + id , profession).subscribe(
      (success) => {
        callback(success);
      }
    );
  }}

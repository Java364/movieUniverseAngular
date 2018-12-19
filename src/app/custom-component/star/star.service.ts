import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Star} from './star';

@Injectable()
export class StarService {
  constructor(private httpClient: HttpClient) {
  }
  public getStar(id: number, callback: Function) {
    this.httpClient.get('http://localhost:8080/star/' + id).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public createStar(star: Star, callback: Function) {
    this.httpClient.post('http://localhost:8080/star/create', star).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public updateStar(id: number, star: Star, callback: Function) {
    this.httpClient.put('http://localhost:8080/star/update/' + id, star).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public deleteStar(id: number, callback: Function) {
    this.httpClient.delete('http://localhost:8080/star/' + id).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
}

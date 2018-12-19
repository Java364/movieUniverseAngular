import { Component, OnInit } from '@angular/core';
import {LinksService} from './links.service';
import {Links} from './links';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  public links: Links;
  public linksList: Links[] = [];
  constructor(private linksService: LinksService) {
    this.links = new Links();
  }

  ngOnInit(): void {
    this.showAll();
  }

  linkGet(id: number) {
  this.linksService.getLinks(id, (success) => {
    this.links = <Links>success;
  });
}
  linkDelete(id: number) {
    this.linksService.deleteLinks(id, (success) => {
      this.links = <Links>success;
    });
  }
  createPost() {
    this.linksService.createLinks(this.links, (success) => {
      this.links = <Links>success;
    });
  }

  updatePut(id: number) {
    this.linksService.updateLinks(id, this.links, (success) => {
      this.links = <Links>success;
    });

  }
  showAll() {
    this.linksService.showAll( (success) => {
      this.linksList = <Links[]>success;
    });
  }
 /* saveCountry = () => {
    if (this.links.id > -1) {
      this.updatePut(this.links.id);
    } else {
      this.createPost();
    }
  }*/
}

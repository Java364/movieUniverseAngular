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
  constructor(private linksService: LinksService) {
    this.links = new Links();
  }

  ngOnInit(): void {
  }

  linkGet() {
  this.linksService.getLinks(6, (success) => {
    this.links = <Links>success;
  });
}
  linkDelete() {
    this.linksService.deleteLinks(25, (success) => {
      this.links = <Links>success;
    });
  }
  createPost() {
    this.linksService.createLinks(this.links, (success) => {
      this.links = <Links>success;
    });
  }

  updatePut() {
    this.linksService.updateLinks(6, this.links, (success) => {
      this.links = <Links>success;
    });

  }
/*  testAll() {
    this.linksService.showAll( (success) => {
      this.links = <Links>success;
    });
  }*/
}

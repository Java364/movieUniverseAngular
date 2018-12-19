import { Component, OnInit } from '@angular/core';
import {Profession} from './profession';
import {ProfessionService} from './profession.service';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css']
})
export class ProfessionComponent implements OnInit {
  public profession: Profession;
  public professionList: Profession[] = [];
  constructor(private professionService: ProfessionService) {
    this.profession = new Profession();
  }

  ngOnInit(): void {
    this.testAll();
  }

  professionGet(id: number) {
    this.professionService.getProfession(id, (success) => {
      this.profession = <Profession>success;
    });
  }
  professionDelete(id: number) {
    this.professionService.deleteProfession(id, (success) => {
      this.profession = <Profession>success;
    });
  }
  professionPost() {
    this.professionService.createProfession(this.profession, (success) => {
      this.profession = <Profession>success;
    });
  }

  professionPut(id: number) {
    this.professionService.updateProfession(id, this.profession, (success) => {
      this.profession = <Profession>success;
    });

  }
  testAll() {
    this.professionService.showAll( (success) => {
      this.professionList = <Profession[]>success;
    });
  }

}

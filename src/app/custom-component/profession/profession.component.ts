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
  constructor(private professionService: ProfessionService) {
    this.profession = new Profession();
  }

  ngOnInit(): void {
  }

  professionGet() {
    this.professionService.getProfession(7, (success) => {
      this.profession = <Profession>success;
    });
  }
  professionDelete() {
    this.professionService.deleteProfession(6, (success) => {
      this.profession = <Profession>success;
    });
  }
  professionPost() {
    this.professionService.createProfession(this.profession, (success) => {
      this.profession = <Profession>success;
    });
  }

  professionPut() {
    this.professionService.updateProfession(2, this.profession, (success) => {
      this.profession = <Profession>success;
    });

  }

}

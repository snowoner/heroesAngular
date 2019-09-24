import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute, private _heroesSrv: HeroesService) { 
    this.activatedRoute.params.subscribe(params  => {
      this.heroe = this._heroesSrv.getHeroe(params['id']);      
    })
  }

  ngOnInit() {    
  }

}

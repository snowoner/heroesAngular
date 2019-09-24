import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private heroeSrv:HeroesService) { }
 
  ngOnInit() {
  }
  

  buscarHeroe(dataToFind: string ) {
    console.log(dataToFind);
    let heroesFound: number[]
    heroesFound = this.heroeSrv.buscarHeroe(dataToFind);
    console.log(heroesFound);    
  }
}

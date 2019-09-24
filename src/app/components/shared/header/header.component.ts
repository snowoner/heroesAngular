import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private heroeSrv:HeroesService) { }
 
  ngOnInit() {
    // this.buscarHeroe(null);
  }

  buscarHeroe(dataToFind: string ) {
    this.heroeSrv.buscarHeroe(dataToFind);
  }
}

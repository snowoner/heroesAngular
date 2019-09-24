import { Component, OnInit, OnChanges } from "@angular/core";
import { HeroesService, Heroe } from "src/app/services/heroes.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit, OnChanges {
  heroes: Heroe[];
  // $heroes: Observable<Heroe[]>;
  constructor(private _heroesSrv: HeroesService, private router: Router) {
    // this._heroesSrv.getHeroes().subscribe($heroes => {
    //   console.log('HeroesComponentConsturctor',this.$heroes);
      
    //   this.heroes = $heroes;
    // });
  }

  ngOnInit() {
    // this._heroesSrv.getHeroes().subscribe(data => {
    //   this.heroes = data;
    // })
    this._heroesSrv.heroes.subscribe(data => {
      this.heroes = data;
    });
    console.log('hEROES',this.heroes);
    
    this._heroesSrv.getHeroes();
  }
  ngOnChanges() {
  }
  detalle(idx: number) {
    this.router.navigate(["/heroe", idx]);
  }
}

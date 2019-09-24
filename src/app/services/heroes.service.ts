import { Injectable, OnInit } from "@angular/core";
import { Subject, Observable, of, PartialObserver, BehaviorSubject } from "rxjs";
import { HEROES } from "../../assets/recursos/data";

@Injectable()
export class HeroesService implements OnInit{
  private _heroes = new BehaviorSubject<Heroe[]>([]);
  public heroes = this._heroes.asObservable();
  private dataStore: { heroes: Heroe[] } = { heroes: [] };

  private filteredHeroes: Heroe[] = [];
  constructor() { }


  ngOnInit(): void {
  }


  getHeroes () {
    this.dataStore.heroes = HEROES;
    this._heroes.next(Object.assign({}, this.dataStore).heroes);
  }

  getHeroe(idx: string): Heroe {
    return this.dataStore.heroes[idx];
  }
  buscarHeroe(heroeName: string) {
    if(heroeName) {
      this.dataStore.heroes = HEROES;
      let heroesFound :number[] =[]
      this.filteredHeroes = [];
      this.dataStore.heroes.forEach((hero,i) => {
        if(hero.nombre.toLowerCase().includes(heroeName.toLowerCase())){
          heroesFound.push(i);
          this.filteredHeroes.push(this.dataStore.heroes[i]);
        }
      })
      this.dataStore.heroes = this.filteredHeroes;      
      this._heroes.next(Object.assign({}, this.dataStore).heroes);
    } else {
      this.dataStore.heroes = HEROES;
      this._heroes.next(Object.assign({}, this.dataStore).heroes);
    }
  }
}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}

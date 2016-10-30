import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({  
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  hero: Hero = {
                  id: 1,
                  name: 'Windstorm'
                };

  //Manter o construtor leve e sem acesso a serviços
  constructor(private heroService: HeroService, private router: Router) { }

  //Equivalente ao @PostConstruct
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }                
  
  getHeroes(): void {
    //O serviço retorna uma promessa. Quando o dado vem a promessa chama esse método lambda. 
    //Quando heroes chegar, faça a variavel local his.heroes receber os heroes que vieram do serviço.
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
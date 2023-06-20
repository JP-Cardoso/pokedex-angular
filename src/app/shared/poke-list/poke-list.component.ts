import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(
    private apiService: PokeApiService,
  ) {

  }

  ngOnInit(): void {
    this.apiService.apiListAllPokemons.subscribe(
      res => res
    )
    
  }


}

import { Component, signal } from '@angular/core';
import { FavoritesService } from '../../../core/services/favoritesService';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LeagueService } from '../../../features/leagues/services/leagueService';
import { SearchService } from '../../../features/search-result/services/searchServices';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  constructor(
    public favoritesService: FavoritesService,
    public searchService: SearchService,
  ) {}

  showSearch = false;

  toggleFavorites() {
    this.favoritesService.toggle();
  }
menuOpen = signal(false);

toggleMenu() {
  this.menuOpen.update(v => !v);
}

closeMenu() {
  this.menuOpen.set(false);
}

  buscador = new FormControl('', { nonNullable: true });
  ngOnInit() {
    this.buscador.valueChanges.subscribe((value) => {
      this.searchService.search.set(value);
    });
  }
}

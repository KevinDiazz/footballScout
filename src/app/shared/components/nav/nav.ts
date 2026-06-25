import { Component } from '@angular/core';
import { FavoritesService } from '../../../core/services/favoritesService';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  constructor(public favoritesService: FavoritesService) {}
  toggleFavorites() {
    this.favoritesService.toggle();
  }
}

import { Component, signal } from '@angular/core';
import { FavoritesService } from '../../../core/services/favoritesService';
import { Player } from '../../../models/player.model';
import { Team } from '../../../models/team.model';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  constructor(public favoriteService: FavoritesService) {}
  selectedTab = signal<'teams' | 'players'>('teams');
  toggleFavorites() {
    this.favoriteService.toggle();
  }
}

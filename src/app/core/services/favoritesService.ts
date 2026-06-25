import { Injectable, signal } from '@angular/core';
import { Team } from '../../models/team.model';
import { Favorites } from '../../models/favorites';
import { Player } from '../../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites = signal<Favorites>({ players: [], teams: [] });
  isOpen = signal(false);

  toggle() {
    this.isOpen.update((open) => !open);
  }
  open() {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }

  addTeam(team: Team) {
    this.favorites.update((favorites) => ({
      ...favorites,
      teams: [...favorites.teams, team],
    }));
    console.log(this.favorites());
  }

  addPlayer(player: Player) {
    this.favorites.update((favorites) => ({
      ...favorites,
      players: [...favorites.players, player],
    }));
    console.log(this.favorites);
  }

  removeTeam(id: string) {
    this.favorites.update((favorites) => ({
      ...favorites,
      teams: favorites.teams.filter((team) => team.idTeam !== id),
    }));
  }

  removePlayer(id: string) {
    this.favorites.update((favorites) => ({
      ...favorites,
      players: favorites.players.filter((player) => player.idPlayer !== id),
    }));
  }

  hasTeam(idteam: string): boolean {
    return this.favorites().teams.some((team) => team.idTeam === idteam);
  }

  hasPlayer(idPlayer: string): boolean {
    console.log(idPlayer)
    return this.favorites().players.some((player) => player.idPlayer === idPlayer);
  }
}

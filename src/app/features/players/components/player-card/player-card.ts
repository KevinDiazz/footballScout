import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlayerService } from '../../services/playerService';
import { PlayerResponse } from '../../../../models/responses/playerResponse';
import { Player } from '../../../../models/player.model';
import { TeamService } from '../../../teams/services/teamService';
import { Team } from '../../../../models/team.model';
import { FavoritesService } from '../../../../core/services/favoritesService';
@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
})
export class PlayerCard {
  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private teamService: TeamService,
    private favoriteService:FavoritesService
  ) {}
  teamName: string | null = null;
  teamId: string | null = null;
  player = signal<Player[]>([]);
  team = signal<Team[]>([]);

  addTeam(event: MouseEvent, team: Team) {
    event.preventDefault();
    event.stopPropagation();
    if (this.favoriteService.hasTeam(team.idTeam)) {
      this.favoriteService.removeTeam(team.idTeam);
    } else {
      this.favoriteService.addTeam(team);
    }
  }

  addPlayer(event: MouseEvent, player: Player) {
    event.preventDefault();
    event.stopPropagation();
    if (this.favoriteService.hasPlayer(player.idPlayer)) {
      this.favoriteService.removePlayer(player.idPlayer);
    } else {
      this.favoriteService.addPlayer(player);
    }
  }

  isFavorite(idPlayer: string) {
    return this.favoriteService.hasPlayer(idPlayer);
  }

  ngOnInit() {
    this.teamId = this.route.snapshot.paramMap.get('idTeam');
    if (this.teamId) {
      this.playerService.getPlayersByIdTeam(this.teamId).subscribe((data) => {
        this.player.set(data.player);
        console.log(data);
      });
    }
    this.teamName = decodeURIComponent(this.route.snapshot.paramMap.get('teamName') ?? '').replace(
      /\s+/g,
      '_',
    );
    this.teamService.getTeamByName(this.teamName).subscribe((data) => {
      this.team.set(data.teams);
      console.log(data);
    });
  }
}

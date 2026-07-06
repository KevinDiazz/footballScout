import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlayerService } from '../../services/playerService';
import { PlayerResponse } from '../../../../models/responses/playerResponse';
import { Player } from '../../../../models/player.model';
import { TeamService } from '../../../teams/services/teamService';
import { Team } from '../../../../models/team.model';
import { FavoritesService } from '../../../../core/services/favoritesService';
import { catchError, delay, finalize, of } from 'rxjs';
import { Loader } from '../../../../shared/components/loader/loader';
import { ErrorAnimation } from '../../../../shared/components/error-animation/error-animation';
@Component({
  selector: 'app-player-card',
  imports: [Loader, ErrorAnimation],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
})
export class PlayerCard {
  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private teamService: TeamService,
    private favoriteService: FavoritesService,
  ) {}
  teamName: string | null = null;
  teamId: string | null = null;
  player = signal<Player[]>([]);
  team = signal<Team[]>([]);
  loading = signal(false);
  error = signal(false);
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

  retry() {
    this.route.paramMap.subscribe((params) => {
      const teamId = params.get('idTeam');
      const teamName = params.get('teamName');

      if (!teamId || !teamName) return;

      this.teamId = teamId;
      this.teamName = decodeURIComponent(teamName).replace(/\s+/g, '_');
      this.error.set(false);
      this.loading.set(true);
      this.playerService
        .getPlayersByIdTeam(teamId)
        .pipe(
          delay(2000),
          catchError(() => {
            this.error.set(true);
            return of({ player: [] });
          }),
          finalize(() => this.loading.set(false)),
        )
        .subscribe((data) => {
          this.player.set(data.player);
        });

      this.teamService.getTeamByName(this.teamName).subscribe((data) => {
        this.team.set(data.teams);
      });
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const teamId = params.get('idTeam');
      const teamName = params.get('teamName');

      if (!teamId || !teamName) return;

      this.teamId = teamId;
      this.teamName = decodeURIComponent(teamName).replace(/\s+/g, '_');
      this.error.set(false);
      this.loading.set(true);
      this.playerService
        .getPlayersByIdTeam(teamId)
        .pipe(
          delay(2000),
          catchError(() => {
            this.error.set(true);
            return of({ player: [] });
          }),
          finalize(() => this.loading.set(false)),
        )
        .subscribe((data) => {
          this.player.set(data.player);
        });

      this.teamService.getTeamByName(this.teamName).subscribe((data) => {
        this.team.set(data.teams);
      });
    });
  }
}

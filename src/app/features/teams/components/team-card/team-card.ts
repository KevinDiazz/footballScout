import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TeamService } from '../../services/teamService';
import { Team } from '../../../../models/team.model';
import { FavoritesService } from '../../../../core/services/favoritesService';
import { Loader } from '../../../../shared/components/loader/loader';
import { ErrorAnimation } from '../../../../shared/components/error-animation/error-animation';
import { catchError, delay, finalize, of } from 'rxjs';

@Component({
  selector: 'app-team-card',
  imports: [RouterLink, Loader, ErrorAnimation],
  templateUrl: './team-card.html',
  styleUrl: './team-card.css',
})
export class TeamCard {
  constructor(
    private route: ActivatedRoute,
    public teamService: TeamService,
    private favoriteService: FavoritesService,
  ) {}
  leagueName: string = '';
  teams = signal<Team[]>([]);
  retry() {
    this.leagueName = decodeURIComponent(this.route.snapshot.paramMap.get('name') ?? '').replace(
      /\s+/g,
      '_',
    );
    this.teamService.error.set(false);
    this.teamService.loading.set(true);
    this.teamService
      .getTeamByCountry(this.leagueName)
      .pipe(
        delay(2000),
        catchError(() => {
          this.teamService.error.set(true);
          return of({ teams: [] });
        }),
        finalize(() => this.teamService.loading.set(false)),
      )
      .subscribe((data) => {
        this.teams.set(data.teams);
      });
  }

  addTeam(event: MouseEvent, team: Team) {
    event.preventDefault();
    event.stopPropagation();
    if (this.favoriteService.hasTeam(team.idTeam)) {
      this.favoriteService.removeTeam(team.idTeam);
    } else {
      this.favoriteService.addTeam(team);
    }
  }

  isFavorite(idteam: string) {
    return this.favoriteService.hasTeam(idteam);
  }

  ngOnInit() {
    this.leagueName = decodeURIComponent(this.route.snapshot.paramMap.get('name') ?? '').replace(
      /\s+/g,
      '_',
    );
    this.teamService.error.set(false);
    this.teamService.loading.set(true);
    this.teamService
      .getTeamByCountry(this.leagueName)
      .pipe(
        delay(2000),
        catchError(() => {
          this.teamService.error.set(true);
          return of({ teams: [] });
        }),
        finalize(() => this.teamService.loading.set(false)),
      )
      .subscribe((data) => {
        this.teams.set(data.teams);
      });
  }
}

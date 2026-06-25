import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TeamService } from '../../services/teamService';
import { Team } from '../../../../models/team.model';
import { FavoritesService } from '../../../../core/services/favoritesService';

@Component({
  selector: 'app-team-card',
  imports: [RouterLink],
  templateUrl: './team-card.html',
  styleUrl: './team-card.css',
})
export class TeamCard {
  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private favoriteService: FavoritesService,
  ) {}

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

  leagueName: string = '';
  teams = signal<Team[]>([]);
  ngOnInit() {
    this.leagueName = decodeURIComponent(this.route.snapshot.paramMap.get('name') ?? '').replace(
      /\s+/g,
      '_',
    );
    this.teamService.getTeamByCountry(this.leagueName).subscribe((data) => {
      this.teams.set(data.teams);
      console.log(data.teams);
    });
  }
}

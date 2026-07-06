import { Component, signal } from '@angular/core';
import { LeagueService } from '../../services/leagueService';
import { League } from '../../../../models/league.model';
import { RouterLink } from '@angular/router';
import { TeamService } from '../../../teams/services/teamService';
import { Loader } from '../../../../shared/components/loader/loader';
import { ErrorAnimation } from '../../../../shared/components/error-animation/error-animation';

@Component({
  selector: 'app-leagues-card',
  imports: [RouterLink, Loader, ErrorAnimation],
  templateUrl: './leagues-card.html',
  styleUrl: './leagues-card.css',
})
export class LeaguesCard {
  retry() {
    this.leagueService.loadLeagues().subscribe(() => {
      this.teamServices.loadTeams().subscribe();
    });
  }
  constructor(
    public leagueService: LeagueService,
    private teamServices: TeamService,
  ) {}

  ngOnInit() {
    this.leagueService.loadLeagues().subscribe(() => {
      this.teamServices.loadTeams().subscribe();
    });
  }
}

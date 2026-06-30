import { Component, signal } from '@angular/core';
import { LeagueService } from '../../services/leagueService';
import { League } from '../../../../models/league.model';
import { RouterLink } from '@angular/router';
import { TeamService } from '../../../teams/services/teamService';

@Component({
  selector: 'app-leagues-card',
  imports: [RouterLink],
  templateUrl: './leagues-card.html',
  styleUrl: './leagues-card.css',
})
export class LeaguesCard {
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

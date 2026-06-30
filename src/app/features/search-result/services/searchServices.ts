import { computed, Injectable, signal } from '@angular/core';
import { League } from '../../../models/league.model';
import { Team } from '../../../models/team.model';
import { Player } from '../../../models/player.model';
import { LeagueService } from '../../leagues/services/leagueService';
import { TeamService } from '../../teams/services/teamService';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  search = signal('');
  constructor(
    private leagueService: LeagueService,
    private teamService: TeamService,
  ) {}
  results = computed(() => {
    const query = this.search().trim().toLowerCase();

    if (!query) {
      return {
        leagues: [],
        teams: [],
      };
    }

    return {
      leagues: this.leagueService
        .leagues()
        .filter((league) => league.strLeague.toLowerCase().includes(query)),

      teams: this.teamService.teams().filter((team) => team.strTeam.toLowerCase().includes(query)),
    };
  });
}

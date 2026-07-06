import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { TeamResponse } from '../../../models/responses/teamResponse';
import { catchError, delay, finalize, forkJoin, map, Observable, of, tap } from 'rxjs';
import { League } from '../../../models/league.model';
import { Team } from '../../../models/team.model';
import { LeagueService } from '../../leagues/services/leagueService';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private readonly API_URL = 'https://www.thesportsdb.com/api/v1/json/123';
  teams = signal<Team[]>([]);
  loading = signal(false);
  error = signal(false);
  constructor(
    private http: HttpClient,
    private leagueService: LeagueService,
  ) {}
  getTeamByCountry(nameLeague: string): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(`${this.API_URL}/search_all_teams.php?l=${nameLeague}`);
  }
  getTeamByName(nameTeam: string): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(`${this.API_URL}/searchteams.php?t=${nameTeam}`);
  }

  loadTeams(): Observable<Team[]> {
    this.loading.set(true);
    this.error.set(false);
    const leagues = this.leagueService.leagues();

    return forkJoin(
      leagues.map((league) =>
        this.getTeamByCountry(league.strLeague.replace(/\s+/g, '_')).pipe(
          catchError(() => {
            this.error.set(true);
            return of({ teams: [] });
          }),
        ),
      ),
    ).pipe(
      map((responses) => responses.flatMap((r) => r.teams)),
      delay(2000),
      tap((teams) => {
        this.teams.set(teams);
      }),
      finalize(() => this.loading.set(false)),
    );
  }
}

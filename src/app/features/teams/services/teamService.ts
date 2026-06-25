import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamResponse } from '../../../models/responses/teamResponse';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';
import { League } from '../../../models/league.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private readonly API_URL = 'https://www.thesportsdb.com/api/v1/json/123';
  private readonly TOP_LEAGUES_IDS = [
    '4335', // La Liga
    '4328', // Premier League
    '4332', // Serie A
    '4331', // Bundesliga
    '4334', // Ligue 1
  ];
  constructor(private http: HttpClient) {}

  getTeamByCountry(nameLeague: string): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(`${this.API_URL}/search_all_teams.php?l=${nameLeague}`);
  }
   getTeamByName(nameTeam: string): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(`${this.API_URL}/searchteams.php?t=${nameTeam}`);
  }
}

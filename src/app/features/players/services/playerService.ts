import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamResponse } from '../../../models/responses/teamResponse';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';
import { League } from '../../../models/league.model';
import { PlayerResponse } from '../../../models/responses/playerResponse';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private readonly API_URL = 'https://www.thesportsdb.com/api/v1/json/123';

  constructor(private http: HttpClient) {}

  getPlayersByIdTeam(idTeam: string): Observable<PlayerResponse> {
    return this.http.get<PlayerResponse>(`${this.API_URL}/lookup_all_players.php?id=${idTeam}`);
  }
}

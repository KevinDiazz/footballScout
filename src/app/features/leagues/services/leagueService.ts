import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { LeaguesResponse } from '../../../models/responses/leaguesResponse';
import { catchError, forkJoin, map, Observable, of, tap } from 'rxjs';
import { League } from '../../../models/league.model';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  private readonly API_URL = 'https://www.thesportsdb.com/api/v1/json/123';
  private readonly TOP_LEAGUES_IDS = [
    '4335', // La Liga
    '4328', // Premier League
    '4332', // Serie A
    '4331', // Bundesliga
    '4334', // Ligue 1
    '4346', //MLS
  ];
  leagues = signal<League[]>([]);
  constructor(private http: HttpClient) {}
  getLeagueById(id: string): Observable<LeaguesResponse> {
    return this.http.get<LeaguesResponse>(`${this.API_URL}/lookupleague.php?id=${id}`);
  }
  getTopLeagues(): Observable<League[]> {
    return forkJoin(
      this.TOP_LEAGUES_IDS.map((id) =>
        this.getLeagueById(id).pipe(catchError(() => of({ leagues: [] }))),
      ),
    ).pipe(map((responses) => responses.map((response) => response.leagues[0]).filter(Boolean)));
  }

  loadLeagues(): Observable<League[]> {
    if (this.leagues().length > 0) {
      return of(this.leagues());
    }
    return this.getTopLeagues().pipe(tap((leagues:League[]) => this.leagues.set(leagues)));
  }
}

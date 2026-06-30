import { Component, computed, signal } from '@angular/core';
import { SearchService } from '../services/searchServices';
import { LeagueService } from '../../leagues/services/leagueService';
import { TeamService } from '../../teams/services/teamService';

@Component({
  selector: 'app-search-result',
  imports: [],
  templateUrl: './search-result.html',
  styleUrl: './search-result.css',
})
export class SearchResult {
constructor(
  public searchService: SearchService
) {}

}

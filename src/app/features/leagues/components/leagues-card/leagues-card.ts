import { Component, signal } from '@angular/core';
import { LeagueService } from '../../services/leagueService';
import { League } from '../../../../models/league.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leagues-card',
  imports: [RouterLink],
  templateUrl: './leagues-card.html',
  styleUrl: './leagues-card.css',
})
export class LeaguesCard {
  constructor(private leagueService: LeagueService) {}

  leagues = signal<League[]>([]);

  ngOnInit() {
    this.leagueService.getTopLeagues().subscribe((data) => {
     this.leagues.set(data)
     console.log(data)
    });
  }
}

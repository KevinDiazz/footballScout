import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../services/teamService';
import { Team } from '../../../../models/team.model';

@Component({
  selector: 'app-team-card',
  imports: [],
  templateUrl: './team-card.html',
  styleUrl: './team-card.css',
})
export class TeamCard {
  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
  ) {}
  leagueName: string = '';
  teams = signal<Team[]>([]);
  ngOnInit() {
    this.leagueName = decodeURIComponent(this.route.snapshot.paramMap.get('name') ?? '').replace(
      /\s+/g,
      '_',
    );
    this.teamService.getTeamByCountry(this.leagueName).subscribe((data) => {
      this.teams.set(data.teams);
      console.log(data.teams)
    });
  }
}

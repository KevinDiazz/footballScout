import { Routes } from '@angular/router';
import { LeaguesCard } from './features/leagues/components/leagues-card/leagues-card';
import { TeamCard } from './features/teams/components/team-card/team-card';
import { PlayerCard } from './features/players/components/player-card/player-card';

export const routes: Routes = [
  { path: '', component: LeaguesCard },
  { path: 'teams/:name', component: TeamCard },
  { path: 'players/:idTeam/:teamName', component: PlayerCard },
];

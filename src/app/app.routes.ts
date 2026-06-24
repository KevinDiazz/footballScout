import { Routes } from '@angular/router';
import { LeaguesCard } from './features/leagues/components/leagues-card/leagues-card';
import { TeamCard } from './features/teams/components/team-card/team-card';

export const routes: Routes = [
  { path: '', component: LeaguesCard },
  { path: 'teams/:name', component: TeamCard },
];

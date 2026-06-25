import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './shared/components/nav/nav';
import { Footer } from './shared/components/footer/footer';
import { Favorites } from './shared/components/favorites/favorites';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer,Favorites],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('footballScout');
}

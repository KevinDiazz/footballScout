import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-loader',
  imports: [LottieComponent],
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader {
  options: AnimationOptions = {
    path: '/lottie/Footballloader.json',
  };
}

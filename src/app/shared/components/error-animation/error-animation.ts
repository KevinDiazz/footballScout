import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-error-animation',
  imports: [LottieComponent],
  templateUrl: './error-animation.html',
  styleUrl: './error-animation.css',
})
export class ErrorAnimation {
  errorAnimation: AnimationOptions = {
    path: '/lottie/error.json',
    loop: false,
    autoplay: true,
  };
}

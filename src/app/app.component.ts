import { Component, OnInit } from '@angular/core';
import { TimelineLite, Back, Power1, gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let timeline = gsap.timeline({ repeat: -1, yoyo: true });
    timeline.to('#circle', { y: 250 });
    timeline.to('#circle', { x: 250 });
    timeline.to('#circle', { y: 0 });
    timeline.to('#circle', { x: -250 });
  }
}

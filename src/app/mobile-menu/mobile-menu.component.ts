import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(DrawSVGPlugin);
@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  constructor() {}
  @ViewChild('line1') line1Ref: ElementRef;
  @ViewChild('line2') line2Ref: ElementRef;
  links = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Menu',
      href: '/menu',
    },
    {
      title: 'Reservations',
      href: '/reservations',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Gallery',
      href: '/gallery',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ];

  closeMenu() {
    const tl = gsap.timeline();
    tl.to(
      this.line1Ref.nativeElement,
      {
        duration: 0.3,
        drawSVG: '50% 50%',
        ease: 'power3.inOut',
      },
      'lines'
    ).to(
      this.line2Ref.nativeElement,
      {
        duration: 0.3,
        drawSVG: '50% 50%',
        ease: 'power3.inOut',
      },
      'lines'
    );
    tl.play();
  }

  ngOnInit(): void {}
}

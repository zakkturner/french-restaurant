import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  constructor() {}

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
    let tl = gsap.timeline();
    // tl.to();
  }

  ngOnInit(): void {}
}

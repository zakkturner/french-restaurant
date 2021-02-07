import { NONE_TYPE } from '@angular/compiler';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  OnChanges,
} from '@angular/core';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

import { MenuService } from '../menu.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  constructor(public menuService: MenuService) {}
  @ViewChild('line1') line1Ref: ElementRef;
  @ViewChild('line2') line2Ref: ElementRef;
  @ViewChild('overlay') overlay: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  @ViewChild('grid') grid: ElementRef;
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

  menuTrigger: void;

  openMenu() {
    const tl = gsap.timeline();

    if (this.menuService.showMenu === true) {
      console.log('working');
      console.log(this.grid);
    } else {
      console.log('damn');
    }
  }

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
    )
      .to(
        this.line2Ref.nativeElement,
        {
          duration: 0.3,
          drawSVG: '50% 50%',
          ease: 'power3.inOut',
        },
        'lines'
      )
      .to(this.grid.nativeElement, { duration: 0.2, opacity: 0 })
      .to(
        this.overlay.nativeElement,
        {
          duration: 0.5,
          x: '100%',
          ease: 'circ.inOut',
          css: {
            borderRadius: '50% 0 0 50%',
            right: '0',
            width: '0',
            height: '0',
          },
        },
        'menu'
      )
      .to(
        this.menu.nativeElement,
        {
          duration: 0.5,
          x: '100%',
          ease: 'circ.inOut',

          css: {
            borderRadius: '0 0 0 50%',
            right: '0',
            width: '0',
            height: '0',
          },
          delay: 0.1,
        },
        'menu'
      )
      .to(this.menu.nativeElement, { css: { display: 'none' } });
    tl.play();
  }

  ngOnInit(): void {
    this.menuTrigger = this.openMenu();
  }
}

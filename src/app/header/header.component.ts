import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';
import { MenuService } from '../menu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public menuService: MenuService) {}
  @ViewChild('ham') ham: ElementRef;

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

  public menuActive() {
    this.menuService.showMenu = true;
    console.log(this.menuService.showMenu);
  }

  public hover(linkItem) {
    console.log('entered');
    return gsap.to(linkItem, { duration: 0.5, css: { color: '#F39957' } });
  }

  public unHover(linkItem) {
    console.log('left');
    return gsap.to(linkItem, { duration: 0.5, css: { color: '#FFF' } });
  }
  ngOnInit(): void {}
}

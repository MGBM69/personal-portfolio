import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule, DrawerModule, ButtonModule, RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit {
  items: MenuItem[] | undefined;
  drawerVisible: boolean = false;
  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Portfolio',
        icon: 'pi pi-star',
        routerLink: '/portfolio',
      },
      {
        label: 'Resume',
        icon: 'pi pi-star',
        routerLink: '/resume',
      },
      // {
      //   label: 'Projects',
      //   icon: 'pi pi-search',
      //   routerLink: '/projects',
      //   items: [
      //     {
      //       label: 'Components',
      //       icon: 'pi pi-bolt',
      //     },
      //     {
      //       label: 'Blocks',
      //       icon: 'pi pi-server',
      //     },
      //     {
      //       label: 'UI Kit',
      //       icon: 'pi pi-pencil',
      //     },
      //     {
      //       label: 'Templates',
      //       icon: 'pi pi-palette',
      //       items: [
      //         {
      //           label: 'Apollo',
      //           icon: 'pi pi-palette',
      //         },
      //         {
      //           label: 'Ultima',
      //           icon: 'pi pi-palette',
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact',
      },
    ];
  }
}

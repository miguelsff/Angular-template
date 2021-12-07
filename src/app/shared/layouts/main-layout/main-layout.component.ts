import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  items: MenuItem[] = [];
  version: string = '';

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.version = environment.version;
    this.items = [
      {
        label: 'Public',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: ['/'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Admin',
        icon: 'pi pi-fw pi-table',
        routerLink: ['/admin'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Auth',
        icon: 'pi pi-fw pi-search',
        routerLink: ['/auth'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-fw pi-sign-out',
        command: (event) => {
          //this.tokenService.signOut();
          this.router.navigate(['/auth/login']);
        }
      }
    ]
  }

}

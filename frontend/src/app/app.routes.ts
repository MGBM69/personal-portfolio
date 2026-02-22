import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { Projects } from './projects/projects';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'portfolio', component: Projects },

  { path: 'resume', component: Resume },
  // { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];

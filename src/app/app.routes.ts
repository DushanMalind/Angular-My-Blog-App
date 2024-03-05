import { Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {AboutComponent} from "./page/about/about.component";

export const routes: Routes = [
  { path: 'home', 'title': "Home", component: HomeComponent },
  { path: 'about', 'title': "About", component: AboutComponent },
  { path: '', redirectTo: "/home", pathMatch: "full" },

];

import { Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {AboutComponent} from "./page/about/about.component";
import {ContactComponent} from "./page/contact/contact.component";

export const routes: Routes = [
  { path: 'home', 'title': "Home", component: HomeComponent },
  { path: 'about', 'title': "About", component: AboutComponent },
  { path: 'contact', 'title': "Contact", component: ContactComponent },
  { path: '', redirectTo: "/home", pathMatch: "full" },

];

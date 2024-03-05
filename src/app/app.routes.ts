import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubComponent } from './pages/github/github.component';

export const routes: Routes = [

    {path: '', component:HomeComponent},
    { path: 'clima', component: ClimaComponent },
    { path: 'github', component: GithubComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' },
    

];


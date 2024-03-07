import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubComponent } from './pages/github/github.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { AdivinanzaComponent } from './pages/adivinanza/adivinanza.component';
import { ValidacionComponent } from './pages/validacion/validacion.component';
import { ObjetoWindowComponent } from './pages/objeto-window/objeto-window.component';

export const routes: Routes = [

    {path: '', component:HomeComponent},
    { path: 'clima', component: ClimaComponent },
    { path: 'github', component: GithubComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'adivinanza', component: AdivinanzaComponent },
    { path: 'validacion', component: ValidacionComponent },
    { path: 'objeto-window', component: ObjetoWindowComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' },
    

];


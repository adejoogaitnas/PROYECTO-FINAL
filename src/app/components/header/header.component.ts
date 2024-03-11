import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Interfaz para los elementos del array
interface Elemento {
  id: string;
  routerLink: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  elementos: Elemento[] = [
    { id: 'clima app', routerLink: '/clima' },
    { id: 'github app', routerLink: '/github' },
    { id: 'adivinanza app', routerLink: '/adivinanza' },
    { id: 'validacion app', routerLink: '/validacion' },
    { id: 'films app', routerLink: '/peliculas' },
    { id: 'objeto window app', routerLink: '/objeto-window' },
    { id: 'notas', routerLink: '/tutorials' },
    { id: 'añadir notas', routerLink: '/add-tutorial' }
  ];

  // Variable para el texto de búsqueda
  textoBusqueda = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscar() {
    const resultados = this.elementos.filter(elemento => elemento.id.toLowerCase().includes(this.textoBusqueda.toLowerCase().toLowerCase()));

    if (resultados.length > 0 && this.textoBusqueda.toLowerCase() === 'clima app') {
      this.router.navigate(['/clima'], { queryParams: { resultados } });
    }
    else if (resultados.length > 0 && this.textoBusqueda.toLowerCase() === 'github app') {
      this.router.navigate(['/github'], { queryParams: { resultados } });
    }
    else if (resultados.length > 0 && this.textoBusqueda.toLowerCase() === 'adivinanza app') {
      this.router.navigate(['/adivinanza'], { queryParams: { resultados } });
    }
    else if (resultados.length > 0 && this.textoBusqueda.toLowerCase() === 'validacion app') {
      this.router.navigate(['/validacion'], { queryParams: { resultados } });
    }
    else if (resultados.length > 0 && this.textoBusqueda.toLowerCase() === 'films app') {
      this.router.navigate(['/peliculas'], { queryParams: { resultados } });
    }
    else if (resultados.length > 0 && this.textoBusqueda.toLowerCase() === 'objeto window app') {
      this.router.navigate(['/objeto-window'], { queryParams: { resultados } });
    }
    else if (resultados.length > 0 && this.textoBusqueda.toLowerCase() === 'notas') {
      this.router.navigate(['/tutorials'], { queryParams: { resultados } });
    }
    else if (resultados.length > 0 && this.textoBusqueda.toLowerCase() === 'añadir notas') {
      this.router.navigate(['/add-tutorial'], { queryParams: { resultados } });
    }
    else {
      alert('No se encontraron resultados');
    }
  }

}
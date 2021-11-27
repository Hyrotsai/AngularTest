import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  nombre: string;
  texto: string;

  constructor() {
    this.nombre = 'Luis';
    this.texto = 'Texto de prueba';
  }

  ngOnInit(): void {}

  getNombre(): string {
    return (this.texto = 'Alfredo');
  }
  cambiarTexto(): void {
    // this.nombre = 'Alfredo';
    this.getNombre();
  }
}

import { Component, OnInit } from '@angular/core';
import { Icategorias } from 'src/app/Interface/Icategory';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  displaylist() {
    console.log('Estoy dentro :>> Display');
  }

  categoria: Icategorias[] = [
    {
      idselect: 1,
      nombreselect: 'Belleza y peluqueria',
    },
    {
      idselect: 2,
      nombreselect: 'Bisuteria y relojes',
    },
    {
      idselect: 3,
      nombreselect: 'Bolsos',
    },
    {
      idselect: 4,
      nombreselect: 'Calsado Caballero',
    },
    {
      idselect: 5,
      nombreselect: 'Calsado Infantil',
    },
    {
      idselect: 6,
      nombreselect: 'Calsado Dama',
    },
    {
      idselect: 7,
      nombreselect: 'Deporte',
    },
    {
      idselect: 8,
      nombreselect: 'Electronica',
    },
    { idselect: 9, nombreselect: 'Hogar' },
    {
      idselect: 10,
      nombreselect: 'Juguete Infantil',
    },
    {
      idselect: 11,
      nombreselect: 'Mascota',
    },
    {
      idselect: 12,
      nombreselect: 'Moda Dama',
    },
    {
      idselect: 13,
      nombreselect: 'Moda Caballero',
    },
    {
      idselect: 14,
      nombreselect: 'Moda para niñ@s',
    },
    {
      idselect: 15,
      nombreselect: 'Salud',
    },
    {
      idselect: 16,
      nombreselect: 'Telefonia y comunicaciones',
    },
  ];
}


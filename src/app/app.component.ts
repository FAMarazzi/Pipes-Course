import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Spiderman';
  nombre2:string= 'feDeRico aNdRES MARaZzi'
  PI: number= Math.PI;
  personajes: string[]=['Ironman', 'BeerBoy', 'Spiderman', 'Thanos', 'Loki'];
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  porcentaje: number= 0.235;
  sueldo: number=93000;
  fecha: Date=new Date();
  idioma: string='es';
  video: string= 'https://www.youtube.com/embed/PtK2a8FrS50';
  activar: boolean= true;
  valorPromesa = new Promise<string>((resolve) =>{

    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  heroe={
    nombre: 'Amber',
    clave: 'BeerBoy',
    edad: 37,
    direccion: {
      calle: 'Falsa',
      numero: 123
    }
  }
}
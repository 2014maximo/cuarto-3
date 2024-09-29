import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { C_ARITMETICA } from 'src/shared/constants/aritmetica.cuaderno.constant';
import { C_ARTISTICA } from 'src/shared/constants/artistica.cuaderno.constant';
import { C_CASTELLANO } from 'src/shared/constants/castellano.cuaderno.constant';
import { C_E_FISICA } from 'src/shared/constants/efisica.cuaderno.constant';
import { C_EMPRENDIMIENTO } from 'src/shared/constants/emprendimiento.cuaderno.constant';
import { C_ESTADISTICA } from 'src/shared/constants/estadistica.cuaderno.constant';
import { C_ETICA } from 'src/shared/constants/etica.cuaderno.constant';
import { C_INGLES } from 'src/shared/constants/ingles.cuaderno.constant';
import { C_MATEMATICAS } from 'src/shared/constants/matematicas.cuaderno.constant';
import { MATERIA } from 'src/shared/constants/materias.constant';
import { C_NATURALES } from 'src/shared/constants/naturales.cuaderno.constant';
import { C_RELIGION } from 'src/shared/constants/religion.cuaderno.constant';
import { C_SOCIALES } from 'src/shared/constants/sociales.cuaderno.constant';
import { C_TECNOLOGIA } from 'src/shared/constants/tecnologia.cuaderno.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public materias = MATERIA;
  public artistica = C_ARTISTICA;
  public aritmetica = C_ARITMETICA;
  public castellano = C_CASTELLANO;
  public edufisica = C_E_FISICA;
  public estadistica = C_ESTADISTICA;
  public emprendimiento = C_EMPRENDIMIENTO;
  public etica = C_ETICA;
  public ingles = C_INGLES;
  public matematicas = C_MATEMATICAS;
  public naturales = C_NATURALES;
  public religion = C_RELIGION;
  public sociales = C_SOCIALES;
  public tecnologia = C_TECNOLOGIA;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}

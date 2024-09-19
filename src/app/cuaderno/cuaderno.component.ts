import { Component, Input } from '@angular/core';
import { CuadernoModel } from 'src/shared/models/cuaderno.model';

@Component({
  selector: 'app-cuaderno',
  templateUrl: './cuaderno.component.html',
  styleUrls: ['./cuaderno.component.css']
})
export class CuadernoComponent {

  @Input() cuaderno: CuadernoModel[]=[];

}

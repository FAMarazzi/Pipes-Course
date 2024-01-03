import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean=true): string {
    if (activar)
    {
    value.split('');
    let caracteres=value.split('');
    caracteres= caracteres.map(caracter =>{
      return '*';
      })
    
    return caracteres.join('');
    }
    else
    {
      return value;
    }
  }

}

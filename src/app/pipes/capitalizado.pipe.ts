import { ValueTransformer } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean=true) : string {    //value recibe el valor al que le aplicamos el pipe en el html
    console.log(value);                                      //args recibiria todos los argumentos por ejemplo
                                                              //capitalizado:1:true
    value = value.toLocaleLowerCase();
    let nombres= value.split(' ');          //divide por los espacios del nombre en un arreglo de 3 palabras
    if (todas){
      nombres= nombres.map(nombre =>{
        return nombre[0].toUpperCase() + nombre.substring(1);
        })
    return nombres.join(' '); //return devuelve el valor modificado que se va a mostrar en la web
    }
    else{
      nombres[0]=nombres[0][0].toUpperCase() + nombres [0].substring(1);
      return nombres.join(' ');
    }                          
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {
 
  transform(value: any, times?: number){
    let param="";
    for(let i=0;i<times;i++){
         param = param+ " "+value; 
    }
    return param;
  }

}
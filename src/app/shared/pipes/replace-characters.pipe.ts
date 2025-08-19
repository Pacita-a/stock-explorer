import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCharacters',
})
export class ReplaceCharactersPipe implements PipeTransform {
  transform(
    value: string,
    caracterOriginal: string,
    caracterNuevo: string
  ): string {
    if (!value) {
      return value;
    }
    return value.replace(new RegExp(caracterOriginal, 'g'), caracterNuevo);
  }
}

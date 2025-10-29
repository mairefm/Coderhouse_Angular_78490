import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separateLetters',
  standalone: false
})
export class SeparateLettersPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const words = value.split(' ');

    const result = words.map(word => {
      const wordwithSpac = word.split('').map(letter => {
        return letter + ' ';
      })
      return wordwithSpac.join('');
    });

    return result.join(' ');
  }

}

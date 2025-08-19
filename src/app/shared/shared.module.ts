import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceCharactersPipe } from './pipes/replace-characters.pipe';

@NgModule({
  declarations: [ReplaceCharactersPipe],
  imports: [CommonModule],
  exports: [ReplaceCharactersPipe],
})
export class SharedModule {}

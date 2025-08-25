import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';

import { ProductFormComponent } from './product-form/product-form.component';

import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [ProductFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DynamicDialogModule,
    DropdownModule,
    MultiSelectModule,
    SharedModule,
  ],
  exports: [ProductFormComponent],
})
export class ProductModule {}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged, filter, map, Subject, take, tap } from 'rxjs';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/core/models/product/product.model';
import { categories } from 'src/assets/mocks/categories';
import { ProductService } from '../../../services/product/product.service';
import { ProductListService } from '../../../services/product-list/product-list.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  public productForm!: FormGroup;
  public groupedCategories: any;
  private productToEdit?: Product;
  private isEditMode = false;
  private destroy$ = new Subject<void>();
  private productCreated$ = this.productService.getProductState().pipe(
    map((state) => state.productCreated),
    distinctUntilChanged()
  );

  constructor(
    private productService: ProductService,
    private productListService: ProductListService,
    private fb: FormBuilder,
    private messageService: MessageService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {
    this.productForm = this.fb.group({
      productName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      stock: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      description: ['', [Validators.maxLength(200)]],
    });

    this.productToEdit = this.config.data?.selectedProduct;
    this.isEditMode = this.config.data?.isEditMode ?? false;
  }

  ngOnInit(): void {
    if (this.isEditMode && this.productToEdit) {
      this.productForm.patchValue(this.productToEdit);
    } else if (!this.isEditMode) {
      this.storeSelector();
    }
    this.groupedCategories = categories;
  }

  public onSubmit() {
    if (this.productForm.valid) {
      this.productService.fetchPendingCreateProduct(this.productForm.value);
      this.ref.close();
    }
  }

  public onCancel() {
    this.ref.close();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.productService.clearState();
  }

  private storeSelector() {
    this.productCreated$
      .pipe(
        filter((product): product is Product => !!product),
        take(1),
        tap((product) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Producto creado correctamente',
          });
          this.productListService.addNewProduct(product);
        })
      )
      .subscribe();
  }
}

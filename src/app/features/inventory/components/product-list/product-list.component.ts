import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { Product } from 'src/app/core/models/product/product.model';
import { ProductListService } from '../../services/product-list/product-list.service';
import { ProductFormComponent } from '../product/product-form/product-form.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public isSummaryMode = false;
  public products$?: Observable<Product[]>;

  constructor(
    private productListService: ProductListService,
    private dialogService: DialogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isSummaryMode = this.route.snapshot.data['summary'] || false;
    this.products$ = this.isSummaryMode
      ? this.productListService
          .getLowStockProducts()
          .pipe(map((products) => products.sort((a, b) => a.stock - b.stock)))
      : (this.products$ = this.productListService
          .getProducts()
          .pipe(map((products) => [...products])));
  }

  public openEditDialog(product: Product) {
    this.dialogService.open(ProductFormComponent, {
      header: 'Edit Product',
      width: '50%',
      data: {
        isEditMode: true,
        selectedProduct: product,
      },
    });
  }

  public deleteProduct(product: Product) {}
}

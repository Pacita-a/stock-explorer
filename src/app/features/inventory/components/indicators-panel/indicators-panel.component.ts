import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product/product.model';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-indicators-panel',
  templateUrl: './indicators-panel.component.html',
  styleUrls: ['./indicators-panel.component.scss'],
})
export class IndicatorsPanelComponent {
  totalProducts$: Observable<number>;
  lowStockProducts$: Observable<Product[]>;
  totalInventoryValue$: Observable<number>;

  constructor(private productListService: ProductListService) {
    this.totalProducts$ = this.productListService.getTotalProducts();

    this.lowStockProducts$ = this.productListService
      .getLowStockProducts()
      .pipe(
        map((products) =>
          products.filter((p) => p.stock < 5).sort((a, b) => a.stock - b.stock)
        )
      );

    this.totalInventoryValue$ =
      this.productListService.getTotalInventoryValue();
  }
}

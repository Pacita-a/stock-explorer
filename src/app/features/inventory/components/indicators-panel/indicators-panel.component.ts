import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product/product.model';
import { ProductListService } from '../../services/product-list/product-list.service';

@Component({
  selector: 'app-indicators-panel',
  templateUrl: './indicators-panel.component.html',
  styleUrls: ['./indicators-panel.component.scss'],
})
export class IndicatorsPanelComponent {
  public totalProducts$: Observable<number>;
  public totalLowStockProducts$: Observable<Product[]>;
  public totalInventoryValue$: Observable<number>;

  constructor(private productListService: ProductListService) {
    this.totalProducts$ = this.productListService.getTotalProducts();

    this.totalLowStockProducts$ = this.productListService.getLowStockProducts();

    this.totalInventoryValue$ =
      this.productListService.getTotalInventoryValue();
  }
}

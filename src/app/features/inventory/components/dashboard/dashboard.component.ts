import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private productListService: ProductListService
  ) {}

  ngOnInit(): void {
    this.router.navigate(['/summary']);
    this.productListService.fetchPendingProducts();
  }

  onTabChange(event: any) {
    switch (event.index) {
      case 0:
        this.router.navigate(['/summary']);
        break;
      case 1:
        this.router.navigate(['/products']);
        break;
    }
  }
}

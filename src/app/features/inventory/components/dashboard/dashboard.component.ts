import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductListService } from '../../services/product-list/product-list.service';
import { ProductFormComponent } from '../product/product-form/product-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public userMenuItems!: MenuItem[];

  constructor(
    private router: Router,
    private productListService: ProductListService,
    private dialogService: DialogService
  ) {
    this.userMenuItems = [
      { label: 'My profile', icon: 'pi pi-user' },
      { label: 'Edit profile', icon: 'pi pi-pencil' },
      { label: 'Log out', icon: 'pi pi-sign-out' },
    ];
  }

  ngOnInit(): void {
    this.router.navigate(['/summary']);
    this.productListService.fetchPendingProducts();
  }

  public onTabChange(event: any) {
    switch (event.index) {
      case 0:
        this.router.navigate(['/summary']);
        break;
      case 1:
        this.router.navigate(['/products']);
        break;
    }
  }

  public openCreateDialog() {
    this.dialogService.open(ProductFormComponent, {
      header: 'New Product',
      width: '50%',
      data: {
        isEditMode: false,
      },
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProductList from './stores/product-list/product-list.reducer';
import { ProductListEffects } from './stores/product-list/product-list.effects';

import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { IndicatorsPanelComponent } from './components/indicators-panel/indicators-panel.component';

import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    ProductListComponent,
    DashboardComponent,
    IndicatorsPanelComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromProductList.productListFeatureKey,
      fromProductList.reducer
    ),
    EffectsModule.forFeature([ProductListEffects]),
    SharedModule,
    // PrimeNG
    TableModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    TabViewModule,
    PanelModule,
  ],
  exports: [DashboardComponent],
})
export class InventoryModule {}

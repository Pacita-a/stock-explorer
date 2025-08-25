import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProductList from './stores/product-list/product-list.reducer';
import { ProductListEffects } from './stores/product-list/product-list.effects';
import * as fromProduct from './stores/product/product.reducer';
import { ProductEffects } from './stores/product/product.effects';

import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { IndicatorsPanelComponent } from './components/indicators-panel/indicators-panel.component';
import { ProductModule } from './components/product/product.module';
import { ThemeComponent } from './components/dashboard/theme/theme.component';

import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    ProductListComponent,
    DashboardComponent,
    IndicatorsPanelComponent,
    ThemeComponent,
  ],
  providers: [DialogService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromProductList.productListFeatureKey,
      fromProductList.reducer
    ),
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductListEffects, ProductEffects]),
    SharedModule,
    ProductModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    TabViewModule,
    PanelModule,
    ToolbarModule,
    MenuModule,
    InputSwitchModule,
    DynamicDialogModule,
    ToastModule,
    MultiSelectModule,
  ],
  exports: [DashboardComponent],
})
export class InventoryModule {}

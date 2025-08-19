import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/inventory/components/product-list/product-list.component';
import { IndicatorsPanelComponent } from './features/inventory/components/indicators-panel/indicators-panel.component';

const routes: Routes = [
  { path: 'summary', component: IndicatorsPanelComponent },
  { path: 'products', component: ProductListComponent },
  { path: '**', redirectTo: 'summary' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

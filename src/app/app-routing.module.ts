import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { WheretobuyComponent } from './wheretobuy/wheretobuy.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'wheretobuy', component: WheretobuyComponent },
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  title = 'Barelife';
}

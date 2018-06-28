import { ProductComponent } from './product.component';
import {ProductDetailComponent} from "./product-detail.component";
import {CateComponent} from "./cate.component";

export const routes = [
    { path: '', component: ProductComponent,
        children: [
                {path: '', pathMatch: 'full', redirectTo: 'cate'},
                {path: 'cate', component: CateComponent},
                { path: 'detail', component: ProductDetailComponent }
            ]
        }
];

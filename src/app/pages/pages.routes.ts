
import { WarrantyComponent} from "./warranty.component";
import { ReviewsComponent} from "./reviews.component";
import { NewsComponent } from "./news.component";
import { ServiceComponent} from "./service.component";
import { PhilosophyComponent } from "./philosophy.component";
import { VacuumtubeComponent} from "./vacuumtube.component";
import { ContactComponent } from "./contact.component";

export const routes = [
  { path: '', pathMatch: 'full', redirectTo: 'contact'},
  { path: 'reviews', component: ReviewsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'warranty', component: WarrantyComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'philosophy', component: PhilosophyComponent},
  { path: 'vacuumtube', component: VacuumtubeComponent},
  { path: 'contact', component: ContactComponent},
];
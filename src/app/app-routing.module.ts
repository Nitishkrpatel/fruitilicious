import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog/blog.component';
import { DetailsBlogComponent } from './blog/details-blog/details-blog.component';
import { CoolingdrinkComponent } from './coolingdrink/coolingdrink.component';
import { DetoxdrinkComponent } from './detoxdrink/detoxdrink.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'menuitems/:id', component:MenuItemsComponent},
  {path:'feedback', component:FeedbackComponent},
  {path:'blog', component:BlogComponent},
  {path:'blogs/:id', component:DetailsBlogComponent},
  {path:'detoxDrinks', component:DetoxdrinkComponent},
  {path:'coolingDrinks', component:CoolingdrinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

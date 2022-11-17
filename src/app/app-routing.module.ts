import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'menuitems/:id', component:MenuItemsComponent},
  {path:'feedback', component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

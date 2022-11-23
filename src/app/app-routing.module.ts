import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TabacosComponent } from './tabacos/tabacos.component';

const routes: Routes = [
  {
    path: '',
    component: TabacosComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  /**
   * PATH por defecto '**'
   */
  { path: '**', component: TabacosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

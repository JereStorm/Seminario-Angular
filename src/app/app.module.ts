import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabacoListComponent } from './tabaco-list/tabaco-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TabacosComponent } from './tabacos/tabacos.component';
import { AboutComponent } from './about/about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    TabacoListComponent,
    ShoppingCartComponent,
    TabacosComponent,
    AboutComponent,
    InputIntegerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

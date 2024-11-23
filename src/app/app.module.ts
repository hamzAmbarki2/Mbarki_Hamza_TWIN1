import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AproposComponent } from './apropos/apropos.component';
import { HeaderComponent } from './header/header.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ProductModule } from './product/product.module';
import { ContactModule } from './contact/contact.module';
import { ProfileModule } from './profile/profile.module';
import { AproposModule } from './apropos/apropos.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    AproposComponent,
    HeaderComponent,
    ListCategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    ContactModule,
    ProfileModule,
    AproposModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { KeyvalueComponent } from './keyvalue/keyvalue.component';

@NgModule({
  declarations: [
    AppComponent,
    EncapsulationComponent,
    HomeComponent,
    DetailsComponent,
    KeyvalueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

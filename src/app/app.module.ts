import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './views/todos/todos.component';
import { AutosComponent } from './views/autos/autos.component';
import { SaludComponent } from './views/salud/salud.component';
import { HogarComponent } from './views/hogar/hogar.component';
import { NormalButtonComponent } from './components/normal-button/normal-button.component';
import { LinkButtonComponent } from './components/link-button/link-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AutosComponent,
    SaludComponent,
    HogarComponent,
    NormalButtonComponent,
    LinkButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { FiltersComponent } from './components/filters/filters.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AutosComponent,
    SaludComponent,
    HogarComponent,
    NormalButtonComponent,
    LinkButtonComponent,
    FiltersComponent,
    CardComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

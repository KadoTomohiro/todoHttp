import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './api/in-memory.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';
import { TabComponent } from './tab/tab.component';
import { HeaderComponent } from './header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatIconModule,
  MatInputModule,
  MatListModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TodoPageComponent } from './todo-page/todo-page.component';
import {ApiInterceptorService} from './core/api-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    TodoComponent,
    TabComponent,
    HeaderComponent,
    TodoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

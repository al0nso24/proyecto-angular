import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AddComponent } from './components/addTask/add.component';
import { ListTask } from './components/list-task/list-task';

@NgModule({
  declarations: [
    App,
    ListTask
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddComponent
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }

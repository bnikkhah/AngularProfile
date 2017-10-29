import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects.component';
import { AboutComponent } from './about.component';
import { ProjectDetailComponent } from './project-detail.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    ProjectDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

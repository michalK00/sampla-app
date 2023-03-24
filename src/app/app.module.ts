import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { StatusNavComponent } from './components/dashboard/status-nav/status-nav.component';
import { ResearchesComponent } from './components/dashboard/researches/researches.component';
import { ResearchItemComponent } from './components/dashboard/research-item/research-item.component';
import { ResearchesHeaderComponent } from './components/dashboard/researches-header/researches-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    StatusNavComponent,
    ResearchesComponent,
    ResearchItemComponent,
    ResearchesHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

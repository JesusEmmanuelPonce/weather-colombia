import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { GradesPipe } from './pipes/grades.pipe';
import { IconsPipe } from './pipes/icons.pipe';
import { PlacesComponent } from './components/places/places.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ForecastComponent,
    CollaboratorsComponent,
    GradesPipe,
    IconsPipe,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

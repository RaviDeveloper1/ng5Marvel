import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MarvelherosComponent } from './marvelheros/marvelheros.component';

import { MarvelherosService } from './marvelheros.service';
import { DisneyComponent } from './disney/disney.component';

import { RouterModule, Routes } from '@angular/router';

const routeLists: Routes = [
  {path: '', component: MarvelherosComponent},
  {path: 'disney', component: DisneyComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MarvelherosComponent,
    DisneyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeLists)
  ],
  providers: [MarvelherosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

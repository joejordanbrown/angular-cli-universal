import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {
  MdButtonModule, MdCardModule, MdIconModule, MdSlideToggleModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';

// import { DragScrollModule } from 'angular2-drag-scroll/src/angular2-drag-scroll';

import { DragScrollModule } from 'angular2-drag-scroll';

// import { MetaModule } from '@ngx-meta/core/bundles/core.umd.min';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './shared/components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';

import { ExamplesComponent } from './pages/examples/examples.component';
import { ExampleNavComponent } from './pages/examples/nav/nav.component';

import { ExampleTabsComponent } from './pages/examples/tabs/tabs.component';
import { ExampleTabRouteComponent } from './pages/examples/tabs/route/route.component';
import { ExampleHttpComponent } from './pages/examples/http/http.component';
import { ExampleDragScrollComponent } from './pages/examples/drag-scroll/drag-scroll.component';





// import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ExamplesComponent,
    ExampleNavComponent,
    ExampleTabsComponent,
    ExampleTabRouteComponent,
    ExampleHttpComponent,
    ExampleDragScrollComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({appId: 'angular-cli-universal-app'}),
    // MetaModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdTabsModule,
    MdIconModule,
    MdSlideToggleModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

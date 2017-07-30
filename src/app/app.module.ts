import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdButtonModule, MdCardModule, MdIconModule, MdTabsModule, MdToolbarModule } from '@angular/material';

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
import { HttpClientModule } from '@angular/common/http';



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
    ExampleHttpComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({appId: 'angular-cli-universal-app'}),
    // MetaModule.forRoot(),
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdTabsModule,
    MdIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { ExampleNavComponent } from './pages/examples/nav/nav.component';
import { ExampleTabsComponent } from './pages/examples/tabs/tabs.component';
import { ExampleTabRouteComponent } from './pages/examples/tabs/route/route.component';
import { ExampleHttpComponent } from './pages/examples/http/http.component';
import { ExampleDragScrollComponent } from './pages/examples/drag-scroll/drag-scroll.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      description: 'Description of the home page',
      meta: {
        themeColor: '#FFFFFF'
      }
    }
  },
  {
    path: 'examples',
    component: ExamplesComponent,
    data: {
      title: 'Examples',
      description: 'Description of the examples page',
      meta: {
        themeColor: '#2196F3'
      }
    },
    children: [
      {
        path: '',
        component: ExampleNavComponent,
        data: {
          title: 'Examples',
          description: 'Description of the examples page',
          meta: {
            themeColor: '#2196F3'
          }
        }
      },
      {
        path: 'tabs',
        component: ExampleTabsComponent,
        data: {
          title: 'Example - Tabs',
          description: 'Description of the example tab page',
          meta: {
            themeColor: '#2196F3'
          }
        },
        children: [
          {
            path: '',
            redirectTo: 'one',
            pathMatch: 'full'
          },
          {
            path: 'one',
            component: ExampleTabRouteComponent,
            data: {
              title: 'Example - Tab One',
              description: 'Description of the example tab one page',
              meta: {
                themeColor: '#2196F3'
              }
            }
          },
          {
            path: 'two',
            component: ExampleTabRouteComponent,
            data: {
              title: 'Example - Tab Two',
              description: 'Description of the example tab two page',
              meta: {
                themeColor: '#2196F3'
              }
            }
          },
          {
            path: 'three',
            component: ExampleTabRouteComponent,
            data: {
              title: 'Example - Tab Three',
              description: 'Description of the example tab three page',
              meta: {
                themeColor: '#2196F3'
              }
            }
          }
        ]
      },
      {
        path: 'http',
        component: ExampleHttpComponent,
        data: {
          title: 'Example - Http',
          description: 'Description of the example http page',
          meta: {
            themeColor: '#2196F3'
          }
        }
      },
      {
        path: 'drag-scroll',
        component: ExampleDragScrollComponent,
        data: {
          title: 'Example - Drag Scroll',
          description: 'Description of the example Drag Scroll page',
          meta: {
            themeColor: '#2196F3'
          }
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

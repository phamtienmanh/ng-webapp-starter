import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../../themes/app/core/modules/shared.module';

import {HomeComponent} from './home.component';

const routes = [
  {
    path: 'sample',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}

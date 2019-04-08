import {
  NgModule
} from '@angular/core';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule
} from '@angular/material';

import {ScrollDispatchModule} from '@angular/cdk/scrolling';

@NgModule({
  imports: [
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    ScrollDispatchModule
  ]
})
export class MaterialModule {}

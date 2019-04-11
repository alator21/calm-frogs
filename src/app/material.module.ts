import {
  NgModule
} from '@angular/core';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule
} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

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
    ScrollDispatchModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class MaterialModule {}

import { NgModule, LOCALE_ID } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatMenuModule } from '@angular/material/menu'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatTableModule } from '@angular/material/table'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTabsModule } from '@angular/material/tabs'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSelectModule } from '@angular/material/select'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatChipsModule } from '@angular/material/chips'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatBadgeModule } from '@angular/material/badge'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSortModule } from '@angular/material/sort'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'

import { DragDropModule } from '@angular/cdk/drag-drop'

// Paginador

import { MatPaginatorIntl } from '@angular/material/paginator'
import { MatPaginatorIntlEs } from './custom-paginator'

// pipes

import es from '@angular/common/locales/es-MX'
import { registerLocaleData } from '@angular/common'

registerLocaleData(es)




@NgModule({
  imports: [
    CommonModule,
    MatMomentDateModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatSelectModule,
    MatPaginatorModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatExpansionModule,
    DragDropModule,
    MatSortModule,
    MatBottomSheetModule,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatSelectModule,
    MatPaginatorModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatExpansionModule,
    DragDropModule,
    MatSortModule,
    MatBottomSheetModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlEs },
    
    
    { provide: LOCALE_ID, useValue: 'es-MX' },
  ],
  declarations: [],
})
export class CustomMaterialModule {
  constructor() {}
  static forRoot() {
    return {
      ngModule: CustomMaterialModule,
    }
  }
}

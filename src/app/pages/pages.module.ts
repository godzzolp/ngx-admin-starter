import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';

import { EditorModule } from '@tinymce/tinymce-angular';

import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbTabsetModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,

    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbTabsetModule,
    NbButtonModule,

    EditorModule,

    DashboardModule,
  ],
  declarations: [
    PagesComponent,

    TinyEditorComponent,
  ],
})
export class PagesModule {
}

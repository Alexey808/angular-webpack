import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './main/test.component';

const appRoutes: Routes = [
    { path: '', component: TestComponent }
    // { path: 'test', loadChildren: './modules/test/test.module#MenuModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
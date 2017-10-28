import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailComponent } from './project-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/projects', pathMatch: 'full' },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'projects/:name', component: ProjectDetailComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
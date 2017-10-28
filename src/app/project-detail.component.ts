import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Location } from '@angular/common';

import { ProjectService } from './project.service';
import { Project } from './project';

@Component({
	selector: 'project-details',
	templateUrl: './project-detail.component.html',
	styleUrls: [ './project-detail.component.css' ],
	providers: [ ProjectService ]
})
export class ProjectDetailComponent implements OnInit {
	selectedProject: Project;

	constructor(
		private location: Location,
		private route: ActivatedRoute,
		private projectService: ProjectService) {}

	goBack(): void {
		this.location.back();
	}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.selectedProject = this.projectService.getProject(params.name);
		});
	}
}
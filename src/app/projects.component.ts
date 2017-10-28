import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

import { Router } from '@angular/router';

@Component({
	selector: 'projects',
	templateUrl: './projects.component.html',
	styleUrls: [ './projects.component.css' ],
	providers: [ ProjectService ]
})
export class ProjectsComponent implements OnInit{
	projects: Project[];
	selectedProject: Project;

	constructor(
		private router: Router, 
		private projectService: ProjectService) {}

	getProjects(): void {
		this.projects = this.projectService.getProjects();
	}

	gotoDetail(project: Project): void {
		this.router.navigate(['/projects', project.name]);
	}

	ngOnInit(): void {
		this.getProjects();
	}
}
import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './completed-projects';

@Injectable()
export class ProjectService {
	getProjects(): Project[] {
		return PROJECTS;
	}

	getProject(name: string): Project {
		return this.getProjects().find(project => project.name === name);
	}
}
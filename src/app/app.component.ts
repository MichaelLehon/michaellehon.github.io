import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./comps/home-page/home-page.component";
import { ResumePageComponent } from "./comps/resume-page/resume-page.component";
import { NavbarComponent } from "./comps/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ResumePageComponent, NavbarComponent, HomePageComponent]
})
export class AppComponent {
  title = 'michaellehon.github.io';

  selectedPage: string = "home";

	onPageSelected(page: string) {
		this.selectedPage = page;
	}
}

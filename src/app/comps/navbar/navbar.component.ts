import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent {
	@Output() pageSelected = new EventEmitter<string>();
	list = [
		{
			external: false,
			text: "Home",
			icon: "nav/home.png",
			link: "",
			click: this.setPage.bind(this, "home"),
		},
		{
			external: false,
			text: "Resume",
			icon: "nav/resume.png",
			link: "",
			click: this.setPage.bind(this, "resume"),
		},
		{
			external: true,
			text: "Linkedin",
			icon: "nav/linkedin.png",
			link: "https://www.linkedin.com/in/michael-lehon-1390431b5/",
			click: this.setPage.bind(this, ""),
		},
		{
			external: true,
			text: "Github",
			icon: "nav/github.png",
			link: "https://www.linkedin.com/in/michael-lehon-1390431b5/",
			click: this.setPage.bind(this, ""),
		}
	]

	setPage(page: string) {
        this.pageSelected.emit(page);
    }
}

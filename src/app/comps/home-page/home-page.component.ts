import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SimpleListComponent } from "../simple-list/simple-list.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [CommonModule, SimpleListComponent]
})
export class HomePageComponent {

	personal_info = [
		{
			header: "Email",
			text: ["michaellehonbusiness@gmail.com"],
		},
		{
			header: "Location",
			text: ["Greer SC, 29651"],
		},
		{
			header: "Language",
			text: ["English",this.germanLearning()],
		},
		{
			header: "Education",
			text: ["Greenville Tech (2022)","    Associate Degree","Clemson University (Dec 2024)","    BS Computer Science"],
		},
	]

	germanLearning(): string {
		const startDate = new Date(2024, 4, 26);
		const now = new Date();
		const weeks = Math.floor((now.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000));
		return "Learning German ("+weeks+" weeks so far)";
	}

	programming_languages = [
		{
			header:"C++",
			text:["(Used: College)"]
		},
		{
			header:"C#",
			text:["(Used: Unity)"]
		},
		{
			header:"Python",
			text:["(Used: College, Internship)"]
		},
		{
			header:"JavaScript",
			text:["(Used: College, Internship)"]
		},
		{
			header:"TypeScript",
			text:["(Used: Internship)"]
		},
	]

	technology = [
		{
			header: "Suites",
			text:["Microsoft Office","Google Workspace"]
		},
		{
			header: "Organizers",
			text:["Trello","Github Projects"]
		},
		{
			header: "Webdev",
			text:["HTML/CSS, Angular"]
		},
		{
			header: "Ver. Control",
			text:["Git, Github"]
		},
		{
			header: "Gamedev",
			text:["Unity, Unreal"]
		},
		{
			header: "Database",
			text:["AWS"]
		},
		{
			header: "OS",
			text:["Windows 7/10/11, Mac OS"]
		},
		{
			header: "Networking",
			text:["Python Sockets, Wireshark"]
		},
	]

	basic_showcases = [
		{
			title:"General",
			list:this.personal_info
		},
		{
			title:"Languages",
			list:this.programming_languages
		},
		{
			title:"Technology",
			list:this.technology
		},
	]

	columns_2 = [
		{
			title:"General",
			list:this.personal_info
		},
		{
			title:"Languages",
			list:this.programming_languages
		},
	]

	hobby_experience = [
		{
			title:"Open Source",
			information:"I have worked in a team developing for an open source repo."
		},
		{
			title:"Game Jam",
			information:"I participated in the GameDev.tv 2023 Game Jam (Unity)."
		},
	]

	professional_experience = [
		{
			company:"Chick-fil-A",
			duration:"July 2019-2024",
			position: "Front Of House",
			description:"Dedicated team member with comprehensive experience working in multiple front-of-house positions. Proficient in delivering exceptional customer service with a helpful and enthusiastic attitude. Proven ability to work efficiently with others even in stressful situations.",
		}
	]

	references = [
		{
			name: "Audrey Chapman",
			position: "Owner/Operator at Chick-fil-A of Pelham Rd",
			contact_info: ["Store Number: 864-297-9912", "Linkedin: audrey-chapman-39746049"]
		}
	]
}

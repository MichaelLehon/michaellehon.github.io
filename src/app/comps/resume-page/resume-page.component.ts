import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SimpleListComponent } from "../simple-list/simple-list.component";

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [CommonModule, SimpleListComponent],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css'
})
export class ResumePageComponent {

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

	hobby_experience = [
		{
			title:"Open Source",
			information:"I've had the experience of collaborating within a team to develop a project for an open-source repository. This endeavor not only improved my technical skills but also deepened my understanding of the collaborative nature of the open-source community. For privacy reasons, you must reach out to me if you are interested in hearing more."
		},
		{
			title:"Game Jam",
			information:"I participated in the GameDev.tv Game Jam 2023, an annual event that challenges developers to create a playable game within 10 days. My game, developed using Unity, was inspired by this Jams theme \"Life in 2 dimensions,\" where I explored the idea of a shifting perspective. This experience honed my skills in rapid game development, problem-solving, and working under tight deadlines. For privacy reasons, you must reach out to me if you are interested in hearing more."
		},
	]

	professional_experience = [
		{
			company:"Chick-fil-A",
			duration:"July 2019 - Feb 2024",
			position: "Front Of House",
			description:"Dedicated team member with comprehensive experience working in multiple front-of-house positions. Proficient in delivering exceptional customer service with a helpful and enthusiastic attitude. Proven ability to work efficiently with others even in stressful situations.",
		},
		{
			company:"BMW",
			duration:"May 2024 - August 2024",
			position: "Innovation and Research Intern",
			description:"During my internship at BMW, I had the opportunity to work closely with a talented team on a cutting-edge AI projects. The focus was on developing and implementing solutions to complex problems that existing LLM's struggle with. I gained valuable hands-on experience in AI development, working with both front-end and back-end systems, and contributing to innovative projects that are shaping the future of the industry.",
		}
	]

	references = [
		{
			name: "Audrey Chapman",
			position: "Owner/Operator at Chick-fil-A of Pelham Rd",
			contact_info: ["Store Number: 864-297-9912", "Linkedin: https://www.linkedin.com/in/audrey-chapman-39746049/"]
		}
	]
}

import { CodeIcon, Gamepad, Github, Globe, HomeIcon, Instagram, Linkedin, LucideYoutube, NotebookIcon, Youtube } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import InstagramSvg from '$lib/imgs/instagram.svg';
import InstagramDarkSvg from '$lib/imgs/instagram-dark.svg';

// Your resume data
export let DATA = {
	name: 'Rami Hadid',
	nameComposed: {
		first: 'Ramy',
		last: 'Hadid'
	},
	initials: 'RH',
	url: 'https://github.com/rhpo',
	img: 'https://avatars.githubusercontent.com/u/69460661?v=4',
	location: 'Hydra, Algiers, Algeria',
	locationLink: 'https://www.google.com/maps/place/algiers',
	description:
		'Software Engineer turned Entrepreneur. I love innovation. Very active on Github and Discord.',
	summary:
		'At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Sil// icon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).',
	avatarUrl: 'https://avatars.githubusercontent.com/u/69460661?v=4',
	skills: [
		{
			name: 'Svelte',
			icon: 'svelte'
		},

		{
			name: 'React / React Native',
			icon: 'react'
		},

		{
			name: 'Fiber',
			icon: 'fiber'
		},

		{
			name: 'NodeJS',
			icon: 'nodejs'
		},

		{
			name: 'JavaScript',
			icon: 'javascript'
		},

		{
			name: 'TypeScript',
			icon: 'typescript'
		},


		{
			name: 'Go',
			icon: 'go'
		},

		{
			name: 'C',
			icon: 'c'
		},

		{
			name: 'Zig',
			icon: 'zig'
		},

		{
			name: 'C#',
			icon: 'csharp'
		},

		{
			name: 'Python',
			icon: 'python'
		},

		{
			name: 'Ruby',
			icon: 'ruby'
		},

		{
			name: 'MongoDB',
			icon: 'mongodb'
		},

		{
			name: 'PostgreSQL',
			icon: 'azuresqldatabase'
		},

		{
			name: 'Supabase',
			icon: 'supabase'
		},

		// {
		// 	name: 'Markdown',
		// 	icon: 'markdown',
		// 	colorless: true
		// },

		// {
		// 	name: 'Git',
		// 	icon: 'git'
		// },

		{
			name: 'GitHub',
			icon: 'github',
			colorless: true
		},

		{
			name: '.NET',
			icon: 'dot-net'
		}
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '#', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'ramyhadid.js@gmail.com',
		tel: '+213 553 238 410',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/rhpo',
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/ramihadid/',
				// // icon: Icons.linkedin,
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			Instagram: {
				name: 'Instagram',
				url: 'https://www.instagram.com/jelparo/',
				icon: InstagramSvg,
				dark_icon: InstagramDarkSvg,
				navbar: true,

			},
			Youtube: {
				name: 'Youtube',
				url: 'https://www.youtube.com/@ramyhadid',
				icon: Youtube,
				dark_icon: Youtube,
				navbar: true
			},
			email: {
				name: 'Send Email',
				url: 'mailto:ramyhadid.js@gmail.com',
				icon: GmailSvg,
				navbar: true,
				dark_icon: GmailDarkSvg
			}
		}
	},
	internships: [
		{
			company: 'Fast Delivery',
			href: 'https://www.fastapp.dz',
			badges: [
				"Svelte", "Nuxt.js", "PostgreSQL"
			],
			location: 'Remote',
			title: 'Full stack development intern',
			logoUrl: '/fast.png',
			start: 'Jun 2025',
			end: 'Oct 2025',
			description:
				'Design and Implementation of a Real-Time Svelte Order Management and Tracking System for a Meal Delivery Platform.'
		},
	],
	work: [
		{
			company: 'Shopiha&trade;',
			href: 'https://www.shopiha.net/',
			badges: [],
			location: 'Algiers, Algeria',
			title: 'Founder, Self-Employed',
			logoUrl: '/shopiha-black.jpg',
			start: 'Mar 2026',
			description:
				'Shopiha is a SaaS built to make selling online simple, accessible, and reliable for businesses in Algeria. It gives entrepreneurs everything they need to create, manage, and grow an online store without dealing with technical complexity. From setting up a storefront to handling products, orders, and payments, the goal is to remove friction and let businesses focus on what matters: selling and growing.'
		},
		{
			company: 'Gentleman',
			href: 'https://www.gentlemandz.com/',
			badges: [
				"SvelteKit",
				"TS",
				"Supabase",
				"ProgreSQL"
			],
			location: 'Algiers, Algeria',
			title: 'Full stack developer, Contract',
			logoUrl: '/gentlemanfull.png',
			start: 'Nov 2025',
			end: 'Mar 2026',
			description:
				'Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.'
		},
		{
			company: 'Servana Circle',
			href: 'https://www.servanacircle.com/',
			badges: [
				"Next.js", "TS"
			],
			location: 'Dubai, UAE',
			title: 'Full stack Developer, Contract',
			logoUrl: '/servana.png',
			start: 'Feb 2025',
			end: 'Jul 2025',
			description:
				'Web application in Next.js for a Dubai-based concierge, in a beautifully studied UI/UX design, and optimized visual interfaces.'
		},

		{
			company: 'Livres d\'Algérie',
			href: 'https://www.livresdz.com',
			badges: [
				"Svelte", "TS", "Go", "SQLite"
			],
			location: 'Remote',
			title: 'Full Stack Developer, Self-Employed',
			logoUrl: '/livres.jpg',
			start: 'Jun 2025',
			end: 'Oct 2025',
			description:
				'E-commerce full-stack online library, with an undetectable handmade Amazon scraper, literature-related AI Chatbot Integration, built with SvelteKit and Golang.'
		},
		{
			company: 'SocialGYM',
			badges: [],
			href: 'https://socialgym.shop',
			location: 'Dubai, UAE',
			title: 'Full Stack Developer, Self-Employed',
			logoUrl: '/socialgym.jpg',
			start: 'Jul 2023',
			end: 'Sep 2023',
			description:
				'E-Commerce web-app for the SocialGYM company, with the online-payment features, administration panel and Analytics.'
		},
	],
	education: [
		// {
		// 	school: 'Sheridan College, Toronto, Ontario, Canada',
		// 	href: 'https://sheridancollege.ca/',
		// 	degree: 'PGDip in Artificial Intelligence D&A',
		// 	logoUrl: "/sheridan.png",
		// 	start: 'Jan 2027',
		// 	end: 'May 2028'
		// },
		{
			school: 'École Supérieure des Sciences et Technologies, Algeria',
			href: 'https://esst-sup.com',
			degree: 'Bachelors in Mathematics & Computer Science',
			logoUrl: "/esst.png",
			start: 'Sep 2023',
			end: 'May 2026'
		},
		// {
		// 	school: 'University of Waterloo',
		// 	href: 'https://uwaterloo.ca',
		// 	degree: "Bachelor's Degree of Computer Science (BCS)",
		// 	logoUrl: WaterLooImg,
		// 	start: '2016',
		// 	end: '2021'
		// },
	],
	projects: [
		{
			title: 'Luxury perfume store',
			href: 'https://gentlemandz.com',
			dates: 'Nov 2025 - Mar 2026',
			active: true,
			description:
				'Full-stack luxury graphics-rich web application with SvelteKit & Supabase suite.',
			technologies: [
				'SvelteKit',
				'Typescript',
				'Cloudflare',
				'Supabase',
				'S3',
				'PostgreSQL',
			],
			links: [
				{
					type: 'Website',
					href: 'https://gentlemandz.com',
					icon: Globe
				}
			],
			image: '',
			video: '/gentleman.mp4'
		},

		{
			title: 'Scraper-Powerded Library',
			href: 'https://livresdz.com',
			dates: 'June 2025 - Oct 2025',
			active: true,
			description:
				'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
			technologies: [
				'SvelteKit',
				'Typescript',
				'Go Programming Language',
				'Gorm (Golang ORM)',
				'SQLite',
				'Scraping',
				'Cloudflare',
			],
			links: [
				{
					type: 'Website',
					href: 'https://www.livresdz.com',
					icon: Globe
				}
			],
			image: '',
			video: '/livresdz.mp4'
		},

		{
			title: 'The Luna programming language',
			href: '#',
			dates: 'Jul 2023 - Present',
			active: true,
			description:
				'An elegant, versatile programming language with efficient scripting capabilities, built in  TypeScript for simplicity and productivity in both general programming and automation tasks 🤖.',
			technologies: [
				'Compilers',
				'Interpreters',
				'Lexers',
				'Transpilers',
				'Go',
				'TypeScript',
			],
			links: [
				{
					type: 'Source',
					href: 'https://www.github.com/rhpo/luna',
					icon: Github
				}
			],
			image: '/luna.png'
		},

		{
			title: 'Academic Project Management Platform (LMS)',
			href: '#',
			dates: 'Jan 2026 - May 2026',
			active: true,
			description:
				'A full-stack platform for managing the lifecycle of university graduation projects (PFE), built with Go, Fiber v3, SQLite, and SvelteKit 5.',
			technologies: [
				'Go',
				'Fiber v3',
				'SvelteKit 5',
				'SQLite',
				'TypeScript',
			],
			links: [
				{
					type: 'Source',
					href: 'https://www.github.com/rhpo/lms',
					icon: Github
				}
			],
			image: '/lms.png'
		},
	],
	hackathons: [
		{
			title: '(Tutor) - Devshroom Hackathon',
			location: 'ESST, Algiers, Algeria',
			description: 'I hosted workshops, taught and guided hackathon participants, told stories about my career, and most importantly developed a complex CTF (Capture-the-flag) challenge in SvelteKit (The famous NIBBI CTF), while I was at the event.',
			image: '/dev.jpg',
			links: []
		},

		{
			title: '🏆 (1st place Champion) - Hackiwha 2.0 ',
			dates: 'April, 2025',
			location: 'USTHB, Algiers, Algeria',
			description:
				`Champion of the Hackiwha 2.0 hackathon organized by Micro Club USTHB in the presence of the Algerian Minister of Youth and Sports, ranked 1/200, I developed
with my teammate a real-time educational quiz game combining Next.js, Node.js with Real-time
communication, combining technological innovation and pedagogy.`,
			image: '/mc.jpg',
			links: [
				{
					title: 'Micro Club',
					icon: Linkedin,
					href: 'https://www.linkedin.com/company/micro-club-usthb-85/'
				},
			]
		},
		{
			title: '🏆 (1st place Champion) - OpenCamp24\'s Hackathon',
			dates: 'November, 2024',
			location: 'Higher Institute of Science, Algiers, Algeria',
			description: `Champion of the OpenCamp 2024 hackathon, I developed ALGEO, a full-stack application in SvelteKit
integrating AI and prompt engineering to explore the regions of Algeria and their future developments up to
2080, combining technological innovation and interactive data visualization.`,
			image: '/his.jpg',
			links: [
				{
					title: 'Demo',
					icon: Gamepad,
					href: 'https://algeo.netlify.app/'
				},
				{
					title: 'Source',
					icon: Github,
					href: 'https://github.com/rhpo/algeo/'
				},
			]
		},
		{
			title: '(Participant) - MicroHack 2.0 Hackathon',
			dates: 'April, 2024',
			location: 'USTHB, Algiers, Algeria',
			description:
				"Developed a full stack project, combining SvelteKit for the web application, and Flutter for the mobile application. First ever, unforgettable hackathon experience, where I met amazing people and learned a lot about teamwork and collaboration.",
			image:
				'/mc.jpg',
			win: '1st Place Winner',
			links: []
		},

		{
			title: '(Participant) - BSC Hackathon',
			location: 'Boumerdes, Algiers, Algeria',
			description: 'Collaborated with my team to make a full stack project, I took care of the Database conception, It was a great experience to work with a team and learn from each other.',
			image: '/bsc.jpg',
			links: []
		},

	]
};

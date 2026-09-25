import {
	CodeIcon,
	Gamepad,
	Github,
	Globe,
	HomeIcon,
	Linkedin,
	NotebookIcon,
	Youtube
} from 'lucide-svelte';
import type { Locale } from '$lib/i18n';

// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import InstagramSvg from '$lib/imgs/instagram.svg';
import InstagramDarkSvg from '$lib/imgs/instagram-dark.svg';

const SKILLS = [
	{ name: 'Svelte', icon: 'svelte' },
	{ name: 'React / React Native', icon: 'react' },
	{ name: 'Fiber', icon: 'fiber' },
	{ name: 'NodeJS', icon: 'nodejs' },
	{ name: 'JavaScript', icon: 'javascript' },
	{ name: 'TypeScript', icon: 'typescript' },
	{ name: 'Go', icon: 'go' },
	{ name: 'C', icon: 'c' },
	{ name: 'Zig', icon: 'zig' },
	{ name: 'C#', icon: 'csharp' },
	{ name: 'Python', icon: 'python' },
	{ name: 'Ruby', icon: 'ruby' },
	{ name: 'MongoDB', icon: 'mongodb' },
	{ name: 'PostgreSQL', icon: 'azuresqldatabase' },
	{ name: 'Supabase', icon: 'supabase' },
	{ name: 'GitHub', icon: 'github', colorless: true },
	{ name: '.NET', icon: 'dot-net' }
];

export const DATA_FR = {
	name: 'Rami Hadid',
	nameComposed: {
		first: 'Rami',
		last: 'Hadid'
	},
	initials: 'RH',
	url: 'https://github.com/rhpo',
	img: 'https://avatars.githubusercontent.com/u/69460661?v=4',
	location: 'Hydra, Alger, Algérie',
	locationLink: 'https://www.google.com/maps/place/algiers',
	description:
		'Ingénieur logiciel devenu entrepreneur. Passionné par l’innovation. Très actif sur GitHub et Discord.',
	summary:
		`Tout a commencé par des projets personnels pour le plaisir d'expérimenter, bricoler, casser du code et concevoir des trucs improbables que personne ne demandait, juste pour voir si j'en étais capable. Quelques années plus tard, c'est devenu une véritable vocation : faire du freelancing et déployer de véritables applications en production tout en achevant mes études. En 2026, cette passion s'est concrétisée par la création et le développement de mes propres startups et projets, en full-stack, de bout en bout, avec toujours la même intuition des débuts : coder d'abord, comprendre en construisant.`,
	avatarUrl: 'https://avatars.githubusercontent.com/u/69460661?v=4',
	skills: SKILLS,
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Accueil' },
		{ href: '/university', icon: NotebookIcon, label: 'Université' },
		{ href: '#projects', icon: CodeIcon, label: 'Projets' }
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
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			Instagram: {
				name: 'Instagram',
				url: 'https://www.instagram.com/jelparo/',
				icon: InstagramSvg,
				dark_icon: InstagramDarkSvg,
				navbar: true
			},
			Youtube: {
				name: 'YouTube',
				url: 'https://www.youtube.com/@ramyhadid',
				icon: Youtube,
				dark_icon: Youtube,
				navbar: true
			},
			email: {
				name: 'Envoyer un e-mail',
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
			badges: ['Svelte', 'Nuxt.js', 'PostgreSQL'],
			location: 'Télétravail',
			title: 'Stagiaire Développeur Full Stack',
			logoUrl: '/fast.png',
			start: 'Juin 2025',
			end: 'Oct 2025',
			description:
				'Conception et implémentation d’un système temps réel de gestion et de suivi des commandes sous Svelte pour une plateforme de livraison de repas.'
		}
	],
	work: [
		{
			company: 'Shopiha&trade;',
			href: 'https://www.shopiha.net/',
			badges: [],
			location: 'Alger, Algérie',
			title: 'Fondateur, Indépendant',
			logoUrl: '/shopiha-black.jpg',
			start: 'Mars 2026',
			end: '',
			description:
				'Shopiha est une plateforme SaaS conçue pour rendre la vente en ligne simple, accessible et performante pour les entreprises en Algérie. Elle offre aux entrepreneurs tous les outils nécessaires pour concevoir, gérer et développer leur boutique en ligne sans aucune complexité technique. De la configuration de la vitrine à la gestion du catalogue, des commandes et des paiements, la mission est de supprimer toute friction afin de permettre aux commerçants de se concentrer sur l’essentiel : vendre et croître.'
		},
		{
			company: 'Gentleman',
			href: 'https://www.gentlemandz.com/',
			badges: ['SvelteKit', 'TS', 'Supabase', 'PostgreSQL'],
			location: 'Alger, Algérie',
			title: 'Développeur Full Stack, Freelance',
			logoUrl: '/gentlemanfull.png',
			start: 'Nov 2025',
			end: 'Mars 2026',
			description:
				'Conception architecturale et réalisation complète de l’application web Gentleman, boutique de parfumerie haut de gamme avec gestion des commandes en temps réel, interfaces riches et panel d’administration sur-mesure.'
		},
		{
			company: 'Servana Circle',
			href: 'https://www.servanacircle.com/',
			badges: ['Next.js', 'TS'],
			location: 'Dubaï, ÉAU',
			title: 'Développeur Full Stack, Freelance',
			logoUrl: '/servana.png',
			start: 'Fév 2025',
			end: 'Juil 2025',
			description:
				'Application web en Next.js pour un service de conciergerie privée basé à Dubaï, dotée d’une ergonomie UI/UX élégante et d’interfaces visuelles haute performance.'
		},
		{
			company: "Livres d'Algérie",
			href: 'https://www.livresdz.com',
			badges: ['Svelte', 'TS', 'Go', 'SQLite'],
			location: 'Télétravail',
			title: 'Développeur Full Stack, Indépendant',
			logoUrl: '/livres.jpg',
			start: 'Juin 2025',
			end: 'Oct 2025',
			description:
				'Plateforme e-commerce de librairie en ligne full-stack, dotée d’un scraper Amazon sur-mesure indétectable et d’un assistant IA conversationnel spécialisé en littérature, propulsée par SvelteKit et Go.'
		},
		{
			company: 'SocialGYM',
			badges: [],
			href: 'https://socialgym.shop',
			location: 'Dubaï, ÉAU',
			title: 'Développeur Full Stack, Indépendant',
			logoUrl: '/socialgym.jpg',
			start: 'Juil 2023',
			end: 'Sept 2023',
			description:
				'Application web e-commerce pour l’enseigne SocialGYM, intégrant des passerelles de paiement en ligne, un tableau de bord d’administration complet et des outils d’analyse statistique.'
		}
	],
	education: [
		{
			school: 'École Supérieure des Sciences et Technologies, Algérie',
			href: 'https://esst-sup.com',
			degree: 'Licence en Mathématiques et Informatique',
			logoUrl: '/esst.png',
			start: 'Sept 2023',
			end: 'Mai 2026'
		}
	],
	projects: [
		{
			title: 'Boutique de parfumerie de luxe',
			href: 'https://gentlemandz.com',
			dates: 'Nov 2025 - Mars 2026',
			active: true,
			description:
				'Application web full-stack de prestige aux visuels soignés et animations fluides, développée avec SvelteKit et l’écosystème Supabase.',
			technologies: ['SvelteKit', 'TypeScript', 'Cloudflare', 'Supabase', 'S3', 'PostgreSQL'],
			links: [
				{
					type: 'Site web',
					href: 'https://gentlemandz.com',
					icon: Globe
				}
			],
			image: '',
			video: '/gentleman.mp4'
		},
		{
			title: 'Librairie augmentée par scraping',
			href: 'https://livresdz.com',
			dates: 'Juin 2025 - Oct 2025',
			active: true,
			description:
				'Librairie numérique full-stack connectée à un moteur d’extraction automatisé et enrichie d’un assistant IA pour guider les passionnés de lecture.',
			technologies: [
				'SvelteKit',
				'TypeScript',
				'Go',
				'Gorm (Golang ORM)',
				'SQLite',
				'Scraping',
				'Cloudflare'
			],
			links: [
				{
					type: 'Site web',
					href: 'https://www.livresdz.com',
					icon: Globe
				}
			],
			image: '',
			video: '/livresdz.mp4'
		},
		{
			title: 'Le langage de programmation Luna',
			href: '#',
			dates: 'Juil 2023 - Présent',
			active: true,
			description:
				'Un langage de programmation élégant et polyvalent doté de capacités d’automatisation performantes, conçu en TypeScript pour allier simplicité et productivité au quotidien 🤖.',
			technologies: ['Compilers', 'Interpreters', 'Lexers', 'Transpilers', 'Go', 'TypeScript'],
			links: [
				{
					type: 'Code source',
					href: 'https://www.github.com/rhpo/luna',
					icon: Github
				}
			],
			image: '/luna.png'
		},
		{
			title: 'Plateforme de gestion de projets académiques (LMS)',
			href: '#',
			dates: 'Janv 2026 - Mai 2026',
			active: true,
			description:
				'Plateforme full-stack pour le suivi et la gestion complète du cycle de vie des projets de fin d’études universitaires (PFE), conçue avec Go, Fiber v3, SQLite et SvelteKit 5.',
			technologies: ['Go', 'Fiber v3', 'SvelteKit 5', 'SQLite', 'TypeScript'],
			links: [
				{
					type: 'Code source',
					href: 'https://www.github.com/rhpo/lms',
					icon: Github
				}
			],
			image: '/lms.png'
		}
	],
	hackathons: [
		{
			title: '(Formateur & Mentor) - Hackathon Devshroom',
			location: 'ESST, Alger, Algérie',
			description:
				'Animation d’ateliers pratiques, encadrement des participants, retour d’expérience et création en direct durant l’événement d’une épreuve CTF (Capture-the-flag) complexe sous SvelteKit (le réputé CTF NIBBI).',
			image: '/dev.jpg',
			links: []
		},
		{
			title: '🏆 (1ère place - Vainqueur) - Hackiwha 2.0',
			dates: 'Avril 2025',
			location: 'USTHB, Alger, Algérie',
			description:
				'Vainqueur du hackathon Hackiwha 2.0 organisé par le Micro Club USTHB en présence du Ministre de la Jeunesse et des Sports. Classé 1er sur 200 participants, j’ai développé avec mon coéquipier un jeu de quiz éducatif en temps réel alliant Next.js, Node.js et WebSockets, mêlant innovation technique et pédagogie.',
			image: '/mc.jpg',
			links: [
				{
					title: 'Micro Club',
					icon: Linkedin,
					href: 'https://www.linkedin.com/company/micro-club-usthb-85/'
				}
			]
		},
		{
			title: '🏆 (1ère place - Vainqueur) - Hackathon OpenCamp24',
			dates: 'Novembre 2024',
			location: 'Institut Supérieur des Sciences, Alger, Algérie',
			description:
				'Grand vainqueur du hackathon OpenCamp 2024 avec le projet ALGEO, une application full-stack sous SvelteKit associant IA et ingénierie de prompts pour explorer les régions d’Algérie et leurs perspectives de développement à l’horizon 2080, conjuguant innovation technique et visualisation de données interactive.',
			image: '/his.jpg',
			links: [
				{
					title: 'Démo',
					icon: Gamepad,
					href: 'https://algeo.netlify.app/'
				},
				{
					title: 'Code source',
					icon: Github,
					href: 'https://github.com/rhpo/algeo/'
				}
			]
		},
		{
			title: '(Participant) - Hackathon MicroHack 2.0',
			dates: 'Avril 2024',
			location: 'USTHB, Alger, Algérie',
			description:
				'Conception d’un projet full-stack articulant SvelteKit pour la partie web et Flutter pour le mobile. Une toute première expérience de hackathon mémorable, propice aux rencontres stimulantes et au travail d’équipe.',
			image: '/mc.jpg',
			win: '1ère place',
			links: []
		},
		{
			title: '(Participant) - Hackathon BSC',
			location: 'Boumerdès, Alger, Algérie',
			description:
				'Collaboration d’équipe sur un projet full-stack au sein duquel j’ai assuré la modélisation et l’architecture de la base de données. Une enrichissante expérience de travail collaboratif et de partage de compétences.',
			image: '/bsc.jpg',
			links: []
		}
	]
};

export const DATA_EN = {
	name: 'Rami Hadid',
	nameComposed: {
		first: 'Rami',
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
		`It started with side projects for the fun of it, tinkering, breaking things, building weird stuff nobody asked for, just to see if I could. That turned into actually becoming a developer a few years later, freelancing and shipping real production apps while finishing my degree. By 2026 it turned into building and scaling my own startups and projects, full-stack, end to end, with the same instinct I started with: build it first, understand it by building it.`,
	avatarUrl: 'https://avatars.githubusercontent.com/u/69460661?v=4',
	skills: SKILLS,
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/university', icon: NotebookIcon, label: 'Université' },
		{ href: '#projects', icon: CodeIcon, label: 'Projects' }
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
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			Instagram: {
				name: 'Instagram',
				url: 'https://www.instagram.com/jelparo/',
				icon: InstagramSvg,
				dark_icon: InstagramDarkSvg,
				navbar: true
			},
			Youtube: {
				name: 'YouTube',
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
			badges: ['Svelte', 'Nuxt.js', 'PostgreSQL'],
			location: 'Remote',
			title: 'Full stack development intern',
			logoUrl: '/fast.png',
			start: 'Jun 2025',
			end: 'Oct 2025',
			description:
				'Design and Implementation of a Real-Time Svelte Order Management and Tracking System for a Meal Delivery Platform.'
		}
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
			end: '',
			description:
				'Shopiha is a SaaS built to make selling online simple, accessible, and reliable for businesses in Algeria. It gives entrepreneurs everything they need to create, manage, and grow an online store without dealing with technical complexity. From setting up a storefront to handling products, orders, and payments, the goal is to remove friction and let businesses focus on what matters: selling and growing.'
		},
		{
			company: 'Gentleman',
			href: 'https://www.gentlemandz.com/',
			badges: ['SvelteKit', 'TS', 'Supabase', 'PostgreSQL'],
			location: 'Algiers, Algeria',
			title: 'Full stack developer, Contract',
			logoUrl: '/gentlemanfull.png',
			start: 'Nov 2025',
			end: 'Mar 2026',
			description:
				'Architected and developed the entire web application for Gentleman, an upscale fragrance e-commerce store with real-time order processing, bespoke admin dashboard, and modern UX.'
		},
		{
			company: 'Servana Circle',
			href: 'https://www.servanacircle.com/',
			badges: ['Next.js', 'TS'],
			location: 'Dubai, UAE',
			title: 'Full stack Developer, Contract',
			logoUrl: '/servana.png',
			start: 'Feb 2025',
			end: 'Jul 2025',
			description:
				'Web application in Next.js for a Dubai-based concierge, in a beautifully studied UI/UX design, and optimized visual interfaces.'
		},
		{
			company: "Livres d'Algérie",
			href: 'https://www.livresdz.com',
			badges: ['Svelte', 'TS', 'Go', 'SQLite'],
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
				'E-Commerce web-app for the SocialGYM company, with online-payment features, administration panel and Analytics.'
		}
	],
	education: [
		{
			school: 'École Supérieure des Sciences et Technologies, Algeria',
			href: 'https://esst-sup.com',
			degree: 'Bachelors in Mathematics & Computer Science',
			logoUrl: '/esst.png',
			start: 'Sep 2023',
			end: 'May 2026'
		}
	],
	projects: [
		{
			title: 'Luxury perfume store',
			href: 'https://gentlemandz.com',
			dates: 'Nov 2025 - Mar 2026',
			active: true,
			description:
				'Full-stack luxury graphics-rich web application with SvelteKit & Supabase suite.',
			technologies: ['SvelteKit', 'TypeScript', 'Cloudflare', 'Supabase', 'S3', 'PostgreSQL'],
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
			title: 'Scraper-Powered Library',
			href: 'https://livresdz.com',
			dates: 'June 2025 - Oct 2025',
			active: true,
			description:
				'Full-stack online bookstore featuring automated catalogue scraping, real-time inventory, and AI-assisted book recommendations.',
			technologies: [
				'SvelteKit',
				'TypeScript',
				'Go Programming Language',
				'Gorm (Golang ORM)',
				'SQLite',
				'Scraping',
				'Cloudflare'
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
				'An elegant, versatile programming language with efficient scripting capabilities, built in TypeScript for simplicity and productivity in both general programming and automation tasks 🤖.',
			technologies: ['Compilers', 'Interpreters', 'Lexers', 'Transpilers', 'Go', 'TypeScript'],
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
			technologies: ['Go', 'Fiber v3', 'SvelteKit 5', 'SQLite', 'TypeScript'],
			links: [
				{
					type: 'Source',
					href: 'https://www.github.com/rhpo/lms',
					icon: Github
				}
			],
			image: '/lms.png'
		}
	],
	hackathons: [
		{
			title: '(Tutor) - Devshroom Hackathon',
			location: 'ESST, Algiers, Algeria',
			description:
				'I hosted workshops, taught and guided hackathon participants, told stories about my career, and most importantly developed a complex CTF (Capture-the-flag) challenge in SvelteKit (The famous NIBBI CTF), while I was at the event.',
			image: '/dev.jpg',
			links: []
		},
		{
			title: '🏆 (1st place Champion) - Hackiwha 2.0',
			dates: 'April, 2025',
			location: 'USTHB, Algiers, Algeria',
			description:
				'Champion of the Hackiwha 2.0 hackathon organized by Micro Club USTHB in the presence of the Algerian Minister of Youth and Sports, ranked 1/200, I developed with my teammate a real-time educational quiz game combining Next.js, Node.js with Real-time communication, combining technological innovation and pedagogy.',
			image: '/mc.jpg',
			links: [
				{
					title: 'Micro Club',
					icon: Linkedin,
					href: 'https://www.linkedin.com/company/micro-club-usthb-85/'
				}
			]
		},
		{
			title: '🏆 (1st place Champion) - OpenCamp24\'s Hackathon',
			dates: 'November, 2024',
			location: 'Higher Institute of Science, Algiers, Algeria',
			description:
				'Champion of the OpenCamp 2024 hackathon, I developed ALGEO, a full-stack application in SvelteKit integrating AI and prompt engineering to explore the regions of Algeria and their future developments up to 2080, combining technological innovation and interactive data visualization.',
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
				}
			]
		},
		{
			title: '(Participant) - MicroHack 2.0 Hackathon',
			dates: 'April, 2024',
			location: 'USTHB, Algiers, Algeria',
			description:
				'Developed a full stack project, combining SvelteKit for the web application, and Flutter for the mobile application. First ever, unforgettable hackathon experience, where I met amazing people and learned a lot about teamwork and collaboration.',
			image: '/mc.jpg',
			win: '1st Place Winner',
			links: []
		},
		{
			title: '(Participant) - BSC Hackathon',
			location: 'Boumerdes, Algiers, Algeria',
			description:
				'Collaborated with my team to make a full stack project, I took care of the Database conception, It was a great experience to work with a team and learn from each other.',
			image: '/bsc.jpg',
			links: []
		}
	]
};

export function getResumeData(loc: Locale = 'fr') {
	return loc === 'en' ? DATA_EN : DATA_FR;
}

// Default export in French as requested
export let DATA = DATA_FR;

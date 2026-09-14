export interface DocumentVariant {
	id: string;
	label: string;
	shortLabel: string;
	subLabel?: string;
	year?: string;
	hasOriginal: boolean;
	originalLanguage?: 'FR' | 'AR';
	translatedSrc: string;
	originalSrc?: string;
	translatedDownloadName: string;
	originalDownloadName?: string;
	pdfSrc?: string;
	pdfDownloadName?: string;
}

export interface DocumentGroup {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	badge: string;
	institution: string;
	hasOriginal: boolean;
	originalLanguage?: 'FR' | 'AR';
	variants: DocumentVariant[];
}

export interface UniversityDossier {
	candidateName: string;
	degree: string;
	field: string;
	institution: string;
	period: string;
	fullTranscriptPdf: {
		src: string;
		filename: string;
		fileSize: string;
	};
	groups: DocumentGroup[];
}

export const UNIVERSITY_DATA: UniversityDossier = {
	candidateName: 'Rami Hadid',
	degree: 'Bachelors Degree (Licence)',
	field: 'Mathematics & Computer Science',
	institution: 'École Supérieure des Sciences et Technologies (ESST)',
	period: '2023 - 2026',
	fullTranscriptPdf: {
		src: '/university/licence/full_transcript.pdf',
		filename: 'Rami_Hadid_Full_University_Transcript_Dossier.pdf',
		fileSize: '9.8 MB'
	},
	groups: [
		{
			id: 'diploma',
			title: 'Bachelors Degree',
			subtitle: 'Diplôme de Licence en Mathématiques et Informatique',
			description: 'Official undergraduate degree diploma conferred upon completing the university curriculum.',
			badge: 'Official Degree',
			institution: 'École Supérieure des Sciences et Technologies',
			hasOriginal: true,
			originalLanguage: 'AR',
			variants: [
				{
					id: 'diploma-licence',
					label: "Bachelor's Degree",
					shortLabel: 'Degree Diploma',
					subLabel: 'Undergraduate Degree',
					year: 'Graduation 2026',
					hasOriginal: true,
					originalLanguage: 'AR',
					translatedSrc: '/university/licence/diploma/Translated-EN.jpg',
					originalSrc: '/university/licence/diploma/Original-AR.jpg',
					translatedDownloadName: 'Rami_Hadid_Bachelors_Degree_EN.jpg',
					originalDownloadName: 'Rami_Hadid_Bachelors_Degree_AR.jpg'
				}
			]
		},
		{
			id: 'transcripts',
			title: 'Transcripts',
			subtitle: 'Licence en Mathématiques et Informatique (L1, L2, L3)',
			description: 'Official academic grade reports detailing semester courses, evaluations, and academic progression.',
			badge: 'Certified Transcripts',
			institution: 'École Supérieure des Sciences et Technologies',
			hasOriginal: true,
			originalLanguage: 'FR',
			variants: [
				{
					id: 'transcript-l1',
					label: '1st Year (L1)',
					shortLabel: '1st Year',
					subLabel: 'Semester 1 & 2',
					year: '2023 - 2024',
					hasOriginal: true,
					originalLanguage: 'FR',
					translatedSrc: '/university/licence/transcripts/Translated-EN/1st Year.jpg',
					originalSrc: '/university/licence/transcripts/Original-FR/1st Year.jpg',
					translatedDownloadName: 'Rami_Hadid_Transcript_Year1_EN.jpg',
					originalDownloadName: 'Rami_Hadid_Transcript_Year1_FR.jpg'
				},
				{
					id: 'transcript-l2',
					label: '2nd Year (L2)',
					shortLabel: '2nd Year',
					subLabel: 'Semester 3 & 4',
					year: '2024 - 2025',
					hasOriginal: true,
					originalLanguage: 'FR',
					translatedSrc: '/university/licence/transcripts/Translated-EN/2nd Year.jpg',
					originalSrc: '/university/licence/transcripts/Original-FR/2nd Year.jpg',
					translatedDownloadName: 'Rami_Hadid_Transcript_Year2_EN.jpg',
					originalDownloadName: 'Rami_Hadid_Transcript_Year2_FR.jpg'
				},
				{
					id: 'transcript-l3',
					label: '3rd Year (L3)',
					shortLabel: '3rd Year',
					subLabel: 'Semester 5 & 6',
					year: '2025 - 2026',
					hasOriginal: true,
					originalLanguage: 'FR',
					translatedSrc: '/university/licence/transcripts/Translated-EN/3rd Year.jpg',
					originalSrc: '/university/licence/transcripts/Original-FR/3rd Year.jpg',
					translatedDownloadName: 'Rami_Hadid_Transcript_Year3_EN.jpg',
					originalDownloadName: 'Rami_Hadid_Transcript_Year3_FR.jpg'
				}
			]
		},
		{
			id: 'rankings',
			title: 'Ranking Certificates',
			subtitle: 'Attestation de Classement (L1 & L2)',
			description: 'Official cohort rank certifications issued by the university board validating top academic performance.',
			badge: 'Cohort Ranking',
			institution: 'École Supérieure des Sciences et Technologies',
			hasOriginal: true,
			originalLanguage: 'FR',
			variants: [
				{
					id: 'ranking-l1',
					label: '1st Year Ranking',
					shortLabel: '1st Year',
					subLabel: 'L1 Promotion',
					year: '2023 - 2024',
					hasOriginal: true,
					originalLanguage: 'FR',
					translatedSrc: '/university/licence/ranking/Translaion-EN/1st Year.jpg',
					originalSrc: '/university/licence/ranking/Original-FR/1st Year.jpg',
					translatedDownloadName: 'Rami_Hadid_Ranking_Year1_EN.jpg',
					originalDownloadName: 'Rami_Hadid_Ranking_Year1_FR.jpg'
				},
				{
					id: 'ranking-l2',
					label: '2nd Year Ranking',
					shortLabel: '2nd Year',
					subLabel: 'L2 Promotion',
					year: '2024 - 2025',
					hasOriginal: true,
					originalLanguage: 'FR',
					translatedSrc: '/university/licence/ranking/Translaion-EN/2nd Year.jpg',
					originalSrc: '/university/licence/ranking/Original-FR/2nd Year.jpg',
					translatedDownloadName: 'Rami_Hadid_Ranking_Year2_EN.jpg',
					originalDownloadName: 'Rami_Hadid_Ranking_Year2_FR.jpg'
				}
			]
		},
		{
			id: 'references',
			title: 'Reference Letters',
			subtitle: 'Academic & Professional Reference Letters',
			description: 'Faculty and professional evaluations endorsing academic potential, research rigor, and engineering experience.',
			badge: 'Reference Letters',
			institution: 'ESST & Industry Partners',
			hasOriginal: false,
			variants: [
				{
					id: 'ref-academic',
					label: 'Dr. Mahmoudi (Academic)',
					shortLabel: 'Dr. Mahmoudi',
					subLabel: 'Faculty Reference Letter',
					year: 'Faculty Reference',
					hasOriginal: false,
					translatedSrc: '/university/licence/reference/Dr.Mahmoudi.jpg',
					translatedDownloadName: 'Rami_Hadid_Reference_Dr_Mahmoudi.jpg'
				},
				{
					id: 'ref-industry',
					label: 'Fast Delivery (Industry)',
					shortLabel: 'Fast Delivery',
					subLabel: 'Engineering Reference Letter',
					year: 'Industry Reference',
					hasOriginal: false,
					translatedSrc: '/university/licence/reference/Fast-Internship.jpg',
					translatedDownloadName: 'Rami_Hadid_Reference_Fast_Delivery.jpg'
				}
			]
		},
		{
			id: 'language',
			title: 'IELTS',
			subtitle: 'English Language Proficiency Assessment',
			description: 'Official IELTS Academic Test Report Form with certified band scores issued by British Council / IDP.',
			badge: 'IELTS Academic',
			institution: 'British Council / IDP IELTS',
			hasOriginal: false,
			variants: [
				{
					id: 'ielts-report',
					label: 'IELTS Test Report',
					shortLabel: 'Test Report',
					subLabel: 'CEFR C1 Level',
					year: 'Official Report',
					hasOriginal: false,
					translatedSrc: '/university/IELTS/IELTS.jpg',
					pdfSrc: '/university/IELTS/IELTS.pdf',
					translatedDownloadName: 'Rami_Hadid_IELTS_Report.jpg',
					pdfDownloadName: 'Rami_Hadid_IELTS_Report.pdf'
				}
			]
		}
	]
};

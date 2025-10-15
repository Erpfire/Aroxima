<script lang="ts">
	import CareersHero from '$lib/careers/CareersHero.svelte';
	import CultureSection from '$lib/careers/CultureSection.svelte';
	import BenefitsSection from '$lib/careers/BenefitsSection.svelte';
	import OpeningsSection from '$lib/careers/OpeningsSection.svelte';
	import ProcessSection from '$lib/careers/ProcessSection.svelte';
	import CareersCtaSection from '$lib/careers/CareersCtaSection.svelte';
	import ComplianceFooter from '$lib/sections/ComplianceFooter.svelte';

	const hero = {
		eyebrow: 'Careers at Aroxima',
		title: 'Join the teams rebuilding access to quality healthcare.',
		lead:
			'We are a growing pharmaceutical manufacturer blending scientific rigor with practical compassion. From formulation to field support, you will work with multidisciplinary experts who put patients and partners first.',
		image: {
			src: '/images/placeholders/joinourteam.jpg',
			alt: 'Team of pharmaceutical professionals collaborating at a daylight-filled workspace.'
		},
		stats: [
			{ value: '320+', label: 'Team members across India' },
			{ value: '60+', label: 'Products stewarded with care' },
			{ value: '3', label: 'Core therapeutic divisions' }
		],
		highlights: [
			{
				title: 'People-first leadership',
				description: 'Managers mentor through weekly check-ins, skill plans, and transparent goal tracking.'
			},
			{
				title: 'Built for learning',
				description: 'Cross-functional projects, GMP refreshers, and clinical immersion days keep your growth continuous.'
			}
		],
		ctas: [
			{ label: 'See current openings', href: '#openings' },
			{
				label: 'Share your profile',
				href: 'mailto:aroxima@zohomail.in?subject=Career%20opportunity',
				variant: 'secondary' as const
			}
		]
	};

	const culture = {
		title: 'How we work together',
		intro:
			'Culture at Aroxima combines the discipline of pharmaceutical manufacturing with the empathy of patient-first organisations. We value responsibility, collaboration, and craft in equal measure.',
		pillars: [
			{
				title: 'Impact with integrity',
				description:
					'Every batch, document, and partnership is treated as a promise. We follow GMP-aligned routines and celebrate doing the right thing even when no one is watching.',
				icon: '🛡️'
			},
			{
				title: 'Shared expertise',
				description:
					'Scientists, pharmacists, marketers, and supply planners sit at the same table. We encourage open knowledge-sharing and regular brown-bag sessions.',
				icon: '🤝'
			},
			{
				title: 'Growth mindsets',
				description:
					'We set ambitious learning goals, fund certifications, and offer mentoring so every teammate can expand their craft and leadership potential.',
				icon: '🌱',
				footer: 'Learning budget & mentorship'
			}
		]
	};

	const benefits = {
		title: 'Benefits that help you thrive',
		intro: 'Competitive compensation is paired with tangible support for wellbeing and career momentum.',
		benefits: [
			{
				title: 'Health & wellness cover',
				description:
					'Medical insurance, annual check-ups, and wellness reimbursements for you and immediate dependents.'
			},
			{
				title: 'Performance-linked rewards',
				description:
					'Quarterly recognition programs and transparent appraisal cycles tied to measurable outcomes.'
			},
			{
				title: 'Learning accelerators',
				description:
					'Certification sponsorships, conference passes, and internal rotations to broaden your expertise.'
			},
			{
				title: 'Supportive leave policy',
				description:
					'Generous PTO with floating wellness days, parental leave, and compassionate leave for life’s unexpected turns.'
			},
			{
				title: 'Modern workspaces',
				description:
					'Comfortable offices in Mumbai and Jamnagar with collaboration zones, quiet focus spaces, and safe transit planning.'
			},
			{
				title: 'Community initiatives',
				description:
					'Volunteer drives, patient education camps, and sustainability programs you can lead or join.'
			}
		],
		note: 'Perks may vary by role and location; our talent team shares a detailed benefits dossier during the selection process.'
	};

	const openings = {
		title: 'Current opportunities',
		intro:
			'These roles reflect immediate priorities across manufacturing, quality, and commercial functions. If you do not see a perfect match, send us your profile—new roles open frequently.',
		applyEmail: 'aroxima@zohomail.in',
		openings: [
			{
				role: 'Assistant Manager — Quality Assurance',
				location: 'Jamnagar, Gujarat',
				type: 'Full-time • On-site',
				summary:
					'Lead in-process quality checks, documentation reviews, and CAPA initiatives across sterile and non-sterile lines.',
				tags: ['QA systems', 'GMP', '3+ years']
			},
			{
				role: 'Production Executive — Cardiac Division',
				location: 'Jamnagar, Gujarat',
				type: 'Full-time • Shift-based',
				summary:
					'Coordinate day-to-day manufacturing operations, ensure batch compliance, and partner with planning for timely dispatches.',
				tags: ['Manufacturing', 'Cardiac', 'B.Pharm']
			},
			{
				role: 'Regulatory Affairs Specialist',
				location: 'Mumbai, Maharashtra',
				type: 'Full-time • Hybrid',
				summary:
					'Prepare dossiers, manage change control documentation, and liaise with semi-regulated market authorities.',
				tags: ['Dossiers', 'Change control', '5+ years']
			},
			{
				role: 'Business Development Manager — Institutional Sales',
				location: 'Mumbai & Western India travel',
				type: 'Full-time • Field',
				summary:
					'Build hospital and distributor relationships, run product orientations, and drive revenue targets with transparent reporting.',
				tags: ['Sales', 'Healthcare network', 'MBA/PGDM']
			},
			{
				role: 'Clinical Product Trainer',
				location: 'Mumbai, Maharashtra',
				type: 'Full-time • Hybrid',
				summary:
					'Design and deliver product education for clinicians and pharmacy teams, combining scientific nuance with practical guidance.',
				tags: ['Training', 'Pharmacy', 'Travel-ready']
			},
			{
				role: 'Supply Planning Analyst',
				location: 'Mumbai, Maharashtra',
				type: 'Full-time • On-site',
				summary:
					'Analyse demand signals, manage inventory health, and coordinate with production to maintain reliable availability.',
				tags: ['Demand planning', 'Analytics', 'ERP']
			}
		]
	};

	const process = {
		title: 'Transparent hiring journey',
		intro:
			'We respect your time. Our talent partners keep you informed at every stage and share feedback wherever possible.',
		steps: [
			{
				title: 'Share your profile',
				description: 'Upload your resume or email us with career aspirations and availability.',
				timeline: 'Day 0'
			},
			{
				title: 'Conversation with talent partner',
				description: 'A short call to understand your experience, interests, and clarify role expectations.',
				timeline: 'Within 3 business days'
			},
			{
				title: 'Functional discussions',
				description: 'Meet hiring managers and future teammates; showcase case studies or assessments where relevant.',
				timeline: '1–2 weeks'
			},
			{
				title: 'Offer & onboarding',
				description: 'If it’s a fit, receive an offer plus a customised onboarding roadmap to help you start confidently.',
				timeline: 'Final week'
			}
		]
	};

	const cta = {
		title: 'Bring your expertise to Aroxima',
		body: 'Tell us what drives you, the skills you want to hone, and the impact you hope to create. We will connect you to the opportunity that fits best.',
		primary: { label: 'Email the talent team', href: 'mailto:aroxima@zohomail.in' },
		secondary: {
			label: 'Request company profile',
			href: 'mailto:aroxima@zohomail.in?subject=Request%20for%20company%20profile'
		}
	};

	const complianceContent = {
		brand: 'Aroxima Lifesciences Private Limited',
		disclaimer:
			'All information on this website is intended for educational awareness among healthcare professionals and partners. Product availability, indications, and usage should always align with guidance from qualified medical practitioners and prevailing regulatory approvals.',
		links: [
			{ label: 'About', href: '/about' },
			{ label: 'Careers', href: '/careers' },
			{ label: 'Products', href: '/products' },
			{ label: 'Contact', href: '/contact' }
		],
		copy: '© ' + new Date().getFullYear() + ' Aroxima Lifesciences. All rights reserved.'
	};
</script>

<svelte:head>
	<title>Careers — Aroxima Lifesciences</title>
	<meta
		name="description"
		content="Explore careers at Aroxima Lifesciences. Discover our culture, benefits, open roles across manufacturing, quality, commercial teams, and learn about our hiring process."
	/>
	<link rel="canonical" href="https://aroxima.com/careers" />
</svelte:head>

<main>
	<CareersHero data={hero} />
	<CultureSection {...culture} />
	<BenefitsSection {...benefits} />
	<OpeningsSection {...openings} />
	<ProcessSection {...process} />
	<CareersCtaSection {...cta} />
	<ComplianceFooter data={complianceContent} />
</main>

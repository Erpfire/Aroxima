<script lang="ts">
import HeroSection from '$lib/sections/HeroSection.svelte';
import AboutMetricsSection from '$lib/sections/AboutMetricsSection.svelte';
import DivisionsSection from '$lib/sections/DivisionsSection.svelte';
import VisionStrip from '$lib/sections/VisionStrip.svelte';
import ProductHighlightsSection from '$lib/sections/ProductHighlightsSection.svelte';
import ResearchQualitySection from '$lib/sections/ResearchQualitySection.svelte';
import ImpactNotesSection from '$lib/sections/ImpactNotesSection.svelte';
import ContactSection from '$lib/sections/ContactSection.svelte';
import ComplianceFooter from '$lib/sections/ComplianceFooter.svelte';
import QuickCta from '$lib/sections/QuickCta.svelte';
import { catalog, divisions } from '$lib/products/catalog';

	const heroContent = {
		title: 'Innovative solutions for a healthier world.',
		lead: 'In a recovering world, Aroxima Lifesciences advances modern medicine with care, courage, and science.',
		backgroundImage: '/images/placeholders/hero-rebirth.avif',
		primaryCta: {
			label: 'Explore Divisions',
			href: '/products'
		},
		secondaryCta: {
			label: 'Our Vision',
			href: '/research'
		},
		subcue: 'Scroll to explore ↓'
	};

	const aboutContent = {
		heading: 'Science with purpose.',
		body: 'Aroxima Lifesciences is an Indian pharmaceutical manufacturer committed to accessible, high-quality medicines across key therapeutic areas. We work with rigorous quality practices and a people-first mission.',
		metrics: ['60+ Products', '320+ Team Members', '600+ Happy Clients'],
		image: {
			src: '/images/placeholders/about-lab-team.avif',
			alt: 'Researchers collaborating inside a bright pharmaceutical laboratory.'
		}
	};

	const divisionContent = {
		title: 'Divisions that restore confidence',
		intro:
			'Each division responds to the evolving needs of hospitals, practitioners, and distributors across India and abroad.',
		divisions: [
			{
				name: 'Cardiac Division',
				line: 'Therapies focused on cardiovascular wellness.',
				image: {
					src: '/images/placeholders/division-cardiac.avif',
					alt: 'Cardiac monitor waveform overlayed on a clinician review.'
				},
				href: '/products?division=cardiac'
			},
			{
				name: 'General Division',
				line: 'Everyday essentials built on rigorous standards.',
				image: {
					src: '/images/placeholders/division-general.avif',
					alt: 'Array of capsule medicines organised on a light table.'
				},
				href: '/products?division=general'
			},
			{
				name: 'Ophthalmic Division',
				line: 'Precise eye-care formulations.',
				image: {
					src: '/images/placeholders/division-ophthalmic.avif',
					alt: 'Macro shot of a lab technician inspecting an optical lens.'
				},
				href: '/products?division=ophthalmic'
			}
		]
	};

	const visionContent = {
		headline: 'Rebuilding health beyond boundaries.',
		body: 'From supply to science, we strengthen care where it matters most—turning uncertainty into measurable outcomes for patients and partners.',
		image: {
			src: '/images/placeholders/vision-cinemagraph.avif',
			alt: 'Soft daylight view of a resilient city skyline with greenery emerging.'
		}
	};

	const divisionLabelById = new Map(divisions.map((division) => [division.id, division.name]));

	const highlightedProducts = catalog.slice(0, 5).map((item) => ({
		name: item.name,
		division: divisionLabelById.get(item.divisionId) ?? item.divisionId,
		short_line: item.summary,
		image: item.image,
		cta: {
			label: 'View division',
			href: `/products?division=${item.divisionId}`
		}
	}));

	const productContent = {
		title: 'Product highlights',
		subtitle:
			'A preview of the formulations empowering practitioners and patients across our divisions.',
		products: highlightedProducts
	};

	const researchContent = {
		title: 'Research & quality snapshot',
		body: 'Our R&D teams co-create with clinicians to refine formulations and introduce new therapies with consistent quality benchmarks.',
		chips: ['GMP-aligned practices', 'Quality-first processes', 'Continuous improvement'],
		image: {
			src: '/images/placeholders/research-lab.avif',
			alt: 'Scientist handling lab glassware under bright ambient light.'
		},
		link: {
			label: 'Discover our research',
			href: '/research'
		}
	};

	const impactContent = {
		title: 'Impact notes',
		subtitle: 'Voices from our partners and teams driving the revival of accessible care.',
		notes: [
			{
				quote:
					'Aroxima delivers consistent product integrity, ensuring our cardiac wards stay prepared.',
				person: 'Dr. Tanvi Rao',
				role: 'Consultant Cardiologist'
			},
			{
				quote:
					'The ophthalmic line demonstrates remarkable clarity in both formulation and support.',
				person: 'Arvind Sharma',
				role: 'Procurement Lead, VisionCare Clinics'
			},
			{
				quote:
					'Our distribution teams rely on Aroxima for timely deliveries with transparent documentation.',
				person: 'Sonia Patel',
				role: 'Regional Supply Coordinator'
			}
		]
	};

	const contactContent = {
		heading: 'Contact & offices',
		body: 'Let us know how we can partner on product availability, distribution, or research collaborations.',
		offices: {
			corporate: {
				title: 'Corporate Office — Mumbai',
				lines: [
					'Aroxima Lifesciences Private Limited',
					'F No-24, 6th Floor, Kalpataru Tower, Santacruz (East)',
					'Near International Airport, Mumbai, Maharashtra — 400056'
				]
			},
			registered: {
				title: 'Registered Office — Jamnagar',
				lines: [
					'Aroxima Lifesciences Private Limited',
					'F.No.-302, Shivdarshan Apt., Indraprasth Society, Vasai',
					'Jamnagar, Gujarat — 361006'
				]
			}
		},
		contact: {
			phone: '9910584811',
			email: 'aroxima@zohomail.in'
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

	const quickCta = {
		href: 'mailto:aroxima@zohomail.in',
		label: 'Quick contact'
	};
</script>

<svelte:head>
	<title>Aroxima Lifesciences — Innovative solutions for a healthier world</title>
	<meta
		name="description"
		content="Indian pharmaceutical manufacturer across Cardiac, General, and Ophthalmic divisions. 60+ products, 600+ clients."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://aroxima.com/" />
	<meta
		property="og:title"
		content="Aroxima Lifesciences — Innovative solutions for a healthier world"
	/>
	<meta
		property="og:description"
		content="Indian pharmaceutical manufacturer across Cardiac, General, and Ophthalmic divisions. 60+ products, 600+ clients."
	/>
	<meta property="og:image" content="/images/placeholders/og-hero.avif" />
	<meta property="og:type" content="website" />
</svelte:head>

<main>
	<HeroSection data={heroContent} />
	<AboutMetricsSection data={aboutContent} />
	<DivisionsSection data={divisionContent} />

	<VisionStrip data={visionContent} />
	<ProductHighlightsSection data={productContent} />
	<ResearchQualitySection data={researchContent} />
	<ImpactNotesSection data={impactContent} />
	<ContactSection data={contactContent} />
	<ComplianceFooter data={complianceContent} />
	<QuickCta data={quickCta} />
</main>

<script lang="ts">
	import ProductsHero from '$lib/products/ProductsHero.svelte';
	import ProductCatalogSection from '$lib/products/ProductCatalogSection.svelte';
	import DivisionSpotlights from '$lib/products/DivisionSpotlights.svelte';
	import ProductSupportSection from '$lib/products/ProductSupportSection.svelte';
	import ProductCtaBand from '$lib/products/ProductCtaBand.svelte';
	import ComplianceFooter from '$lib/sections/ComplianceFooter.svelte';
	import { catalog, divisions, packagingHighlights, supportContacts } from '$lib/products/catalog';

	const hero = {
		eyebrow: 'Products',
		title: 'Formulations designed for dependable care.',
		lead:
			'The Aroxima catalog spans cardiac, general, and ophthalmic therapies—backed by documentation, lot traceability, and responsive partner support.',
		image: {
			src: '/images/placeholders/eatthepills.webp',
			alt: 'Assorted pharmaceutical packs displayed under warm daylight.'
		},
		stats: [
			{ value: '60+', label: 'Catalogued formulations' },
			{ value: `${divisions.length}`, label: 'Therapeutic divisions' },
			{ value: '48h', label: 'Standard documentation dispatch' }
		],
		badges: [
			{ label: 'GMP-aligned production' },
			{ label: 'Traceable batches' },
			{ label: 'Responsive supply planning' }
		]
	};

	const catalogContent = {
		title: 'Browse the catalog',
		intro:
			'Filter by division or keyword to discover the formulations available through Aroxima. Detailed dossiers and regulatory documents are shared directly with partner teams.',
		products: catalog,
		divisions
	};

	const divisionContent = {
		title: 'Divisions at a glance',
		intro:
			'Each division is supported by dedicated supply, quality, and medical affairs teams who ensure clarity from onboarding to sustained delivery.',
		divisions
	};

	const supportContent = {
		title: 'Supply documentation & partner support',
		intro:
			'Need batch records, pricing, or stability data? Our support desks respond with the right documentation and scheduling guidance.',
		highlights: packagingHighlights,
		contacts: supportContacts
	};

	const ctaContent = {
		title: 'Ready to collaborate on availability?',
		body: 'Share your formulary needs and we will coordinate samples, dossiers, and commercial discussions with the relevant teams.',
		primary: { label: 'Contact supply team', href: 'mailto:aroxima@zohomail.in' },
		secondary: { label: 'Explore divisions', href: '/about' }
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
	<title>Products — Aroxima Lifesciences</title>
	<meta
		name="description"
		content="Discover Aroxima Lifesciences’ cardiac, general, and ophthalmic formulations. Filter the catalog, review division capabilities, and connect with our supply desks."
	/>
	<link rel="canonical" href="https://aroxima.com/products" />
</svelte:head>

<main>
	<ProductsHero data={hero} />
	<ProductCatalogSection {...catalogContent} />
	<DivisionSpotlights {...divisionContent} />
	<ProductSupportSection {...supportContent} />
	<ProductCtaBand {...ctaContent} />
	<ComplianceFooter data={complianceContent} />
</main>

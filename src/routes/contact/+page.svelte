<script lang="ts">
	import ContactHero from '$lib/contact/ContactHero.svelte';
	import ContactChannels from '$lib/contact/ContactChannels.svelte';
	import OfficeGrid from '$lib/contact/OfficeGrid.svelte';
	import ContactFormSection from '$lib/contact/ContactFormSection.svelte';
	import SupportResources from '$lib/contact/SupportResources.svelte';
	import ComplianceFooter from '$lib/sections/ComplianceFooter.svelte';

	const hero = {
		tagline: 'Connect with Aroxima',
		title: 'Let’s plan dependable access to essential therapies.',
		lead:
			'Whether you need catalog availability, documentation, or partnership details, our supply and medical affairs desks are ready to collaborate. Reach out with your requirements and we will coordinate the right specialists.',
		highlights: [
			{
				label: 'Response within 24 hours',
				description: 'Our coordination team replies to most enquiries on the next working day.'
			},
			{
				label: 'Pan-India support',
				description: 'Corporate and registered offices enable fulfilment across key Indian healthcare hubs.'
			}
		],
		image: {
			src: '/images/placeholders/hearttreatment.webp',
			alt: 'Daylight-lit meeting space with pharmaceutical professionals collaborating.'
		}
	};

	const channels = {
		title: 'Start the conversation',
		subtitle: 'Choose the channel that matches your request—we will route it internally.',
		items: [
			{
				title: 'Call our team',
				description: 'Speak with an availability specialist for urgent supply coordination or shipment tracking.',
				icon: '☎',
				actions: [{ label: 'Dial +91 9910584811', href: 'tel:+919910584811' }]
			},
			{
				title: 'Write to us',
				description: 'Share product requirements, dossiers needed, or partnership ideas via email.',
				icon: '✉',
				actions: [{ label: 'Email aroxima@zohomail.in', href: 'mailto:aroxima@zohomail.in' }]
			},
			{
				title: 'Schedule a visit',
				description: 'Book an in-person meeting at our Mumbai corporate office for supply planning or audits.',
				icon: '🗓',
				actions: [{ label: 'Request appointment', href: 'mailto:aroxima@zohomail.in?subject=Office%20visit%20request' }]
			}
		]
	};

	const officeData = {
		title: 'Where to find us',
		intro:
			'Our offices coordinate manufacturing, documentation, and distribution support. Visits are hosted by appointment only—please contact us beforehand so we can prepare the right team.',
		offices: [
			{
				title: 'Corporate Office — Mumbai',
				lines: [
					'Aroxima Lifesciences Private Limited',
					'F No-24, 6th Floor, Kalpataru Tower, Santacruz (East)',
					'Near International Airport',
					'Mumbai, Maharashtra — 400056'
				],
				availability: 'Supply coordination & partner meetings'
			},
			{
				title: 'Registered Office — Jamnagar',
				lines: [
					'Aroxima Lifesciences Private Limited',
					'F.No.-302, Shivdarshan Apt., Indraprasth Society, Vasai',
					'Jamnagar, Gujarat — 361006'
				],
				availability: 'Regulatory documentation & statutory correspondence'
			}
		],
		image: {
			src: '/images/placeholders/medicinelocation.webp',
			alt: 'Stylised map of India highlighting Mumbai and Jamnagar locations.'
		}
	};

	const formContent = {
		title: 'Send us a message',
		intro:
			'Provide a brief overview of your requirement—product demand, distribution query, or documentation request—and we will direct it to the right team member.',
		note: 'Submitting this form initiates an email follow-up; for urgent clinical supply requirements, please call us directly.'
	};

	const supportResources = {
		title: 'How we support your next steps',
		intro: 'Our teams collaborate across functions to make sure you receive complete and timely information.',
		items: [
			{
				title: 'Supply planning',
				description: 'Coordinate forecasts, delivery schedules, and stock transfers tailored to your geography.',
				points: ['Rolling availability updates across cardiac, general, ophthalmic lines', 'Temperature-control guidance for sensitive SKUs', 'Dedicated SPOC for institutional distribution partners']
			},
			{
				title: 'Quality & compliance',
				description: 'Access dossiers, stability data, and GMP documentation aligned with regulatory reviews.',
				points: ['Batch-specific certificates shared on request', 'Change control and CAPA summaries available for audits', 'Support for hospital and tender onboarding forms']
			},
			{
				title: 'Medical affairs',
				description: 'Engage with our clinicians and pharmacists for product education or training support.',
				points: ['Clinician-led product walkthroughs', 'Training decks for pharmacy and nursing teams', 'Pharmacovigilance reporting guidance']
			}
		]
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
	<title>Contact — Aroxima Lifesciences</title>
	<meta
		name="description"
		content="Contact Aroxima Lifesciences for product availability, documentation, and partnership support. Reach our Mumbai corporate office, Jamnagar registered office, or send us a message."
	/>
	<link rel="canonical" href="https://aroxima.com/contact" />
</svelte:head>

<main>
	<ContactHero data={hero} />
	<ContactChannels {...channels} />
	<OfficeGrid {...officeData} />
	<ContactFormSection {...formContent} />
	<SupportResources {...supportResources} />
	<ComplianceFooter data={complianceContent} />
</main>

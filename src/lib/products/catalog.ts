export type DivisionId = 'cardiac' | 'diabetic' | 'general' | 'ophthalmic';

export interface ProductDivision {
	id: DivisionId;
	name: string;
	summary: string;
	description: string;
	bulletPoints: string[];
	image: {
		src: string;
		alt: string;
	};
	accent: 'life' | 'rust' | 'sun';
}

export interface ProductItem {
	id: string;
	name: string;
	divisionId: DivisionId;
	summary: string;
	form: string;
	presentation: string;
	tags: string[];
	image: {
		src: string;
		alt: string;
	};
}

export const divisions: ProductDivision[] = [
	{
		id: 'cardiac',
		name: 'Cardiac Division',
		summary: 'Formulations supporting cardiovascular wards and recovery programs.',
		description:
			'Designed with cardiology teams and distributors to keep critical therapies available when patients need them most.',
		bulletPoints: [
			'Stability data to support controlled room-temperature logistics',
			'Batch documentation aligned with cardiology-specific protocols',
			'Quick-reference guides for hospital pharmacy teams'
		],
		image: {
			src: '/images/placeholders/cardiovascular.webp',
			alt: 'Clinician reviewing ECG output next to cardiac care supplies.'
		},
		accent: 'life'
	},
	{
		id: 'general',
		name: 'General Division',
		summary: 'Essential therapies for everyday clinical practice and retail counters.',
		description:
			'Reliable formulations covering analgesics, gastro care, anti-infectives, and nutritional support with consistent supply.',
		bulletPoints: [
			'Balanced product mix for outpatient departments and retail partners',
			'Transparent lead times and support documentation',
			'SRLs and COAs available on request for each batch'
		],
		image: {
			src: '/images/placeholders/division-general.webp',
			alt: 'Array of capsule and tablet packs organised on a bright surface.'
		},
		accent: 'rust'
	},
	{
		id: 'diabetic',
		name: 'Diabetic Division',
		summary: 'Glucose management therapies tailored for endocrinology and primary care programs.',
		description:
			'Focused on chronic diabetes management with reliable release profiles, patient-friendly guidance, and supply support for long-term adherence.',
		bulletPoints: [
			'Protocols aligned with current ADA-referenced glycemic targets',
			'Refill-ready pack sizes and stability data for tropical climates',
			'Patient counselling inserts on dose titration and adherence'
		],
		image: {
			src: '/images/placeholders/diabetic-division.webp',
			alt: 'Placeholder depiction of glucose monitoring equipment alongside tablets.'
		},
		accent: 'sun'
	},
	{
		id: 'ophthalmic',
		name: 'Ophthalmic Division',
		summary: 'Precise eye-care drops and ointments crafted for clarity and comfort.',
		description:
			'Maintains stringent fill-volume accuracy and tamper-evident packaging for clinics and specialty retailers.',
		bulletPoints: [
			'Sterile manufacturing environments with validated cleanrooms',
			'Tamper-evident secondary packaging for transit integrity',
			'Guidance leaflets written for ophthalmology practice teams'
		],
		image: {
			src: '/images/placeholders/eyedrops.webp',
			alt: 'Technician handling ophthalmic dropper bottles under cleanroom lighting.'
		},
		accent: 'sun'
	}
];

export const catalog: ProductItem[] = [
	{
		id: 'aroxima-d',
		name: 'Aroxima-D Tablet',
		divisionId: 'cardiac',
		summary: 'Resveratrol, EPA, DHA, Grape Seed Extract, Zinc, Selenium with Vitamin D3 Tablet.',
		form: 'Tablet',
		presentation: 'Composition: Resveratrol, EPA, DHA, Grape Seed Extract, Zinc, Selenium, Vitamin D3.',
		tags: ['resveratrol', 'omega-3', 'vitamin d3'],
		image: {
			src: '/images/placeholders/aroxima.webp',
			alt: 'Placeholder packaging for Aroxima-D Tablet.'
		}
	},
	{
		id: 'opticomox',
		name: 'Opticomox Eye Drops',
		divisionId: 'ophthalmic',
		summary: 'Moxifloxacin Eye Drops IP 0.5% w/v.',
		form: 'Eye drops',
		presentation: 'Strength: Moxifloxacin 0.5% w/v.',
		tags: ['moxifloxacin', 'ophthalmic anti-infective'],
		image: {
			src: '/images/placeholders/opticmox.webp',
			alt: 'Placeholder dropper bottle representing Opticomox Eye Drops.'
		}
	},
	{
		id: 'opticomox-lp',
		name: 'Opticomox LP Eye Drops',
		divisionId: 'ophthalmic',
		summary: 'Moxifloxacin and Loteprednol Etabonate Ophthalmic Suspension Eye Drops.',
		form: 'Ophthalmic suspension',
		presentation: 'Actives: Moxifloxacin with Loteprednol Etabonate.',
		tags: ['moxifloxacin', 'loteprednol'],
		image: {
			src: '/images/placeholders/opticmoxlp.webp',
			alt: 'Placeholder ophthalmic suspension bottle for Opticomox LP.'
		}
	},
	{
		id: 'nepam-g',
		name: 'Nepam G Eye Drops',
		divisionId: 'ophthalmic',
		summary: 'Sodium Carboxymethyl Cellulose & Glycerin Eye Drops.',
		form: 'Lubricating eye drops',
		presentation: 'Composition: Sodium Carboxymethyl Cellulose and Glycerin.',
		tags: ['ocular lubrication', 'dry eye relief'],
		image: {
			src: '/images/placeholders/nepamg.webp',
			alt: 'Placeholder single-use vials for Nepam G lubricating drops.'
		}
	},
	{
		id: 'nepam-ppg',
		name: 'Nepam PPG Eye Drops',
		divisionId: 'ophthalmic',
		summary: 'Sodium Hyaluronate, Polyethylene Glycol 400 & Propylene Glycol Eye Drops.',
		form: 'Lubricating eye drops',
		presentation: 'Composition: Sodium Hyaluronate, PEG 400, Propylene Glycol.',
		tags: ['ocular surface', 'dry eye care'],
		image: {
			src: '/images/placeholders/nepamppg.webp',
			alt: 'Placeholder depiction of Nepam PPG lubricating eye drops.'
		}
	},
	{
		id: 'metformin',
		name: 'Metformin',
		divisionId: 'diabetic',
		summary: 'Used in the treatment of type 2 diabetes mellitus and polycystic ovarian syndrome (PCOS).',
		form: 'Oral anti-diabetic tablet',
		presentation:
			'Mechanism: Lowers hepatic glucose production, delays glucose absorption, increases insulin sensitivity.',
		tags: ['type 2 diabetes', 'pcos', 'biguanide'],
		image: {
			src: '/images/placeholders/product-3.webp',
			alt: 'Placeholder blister pack for Metformin tablets.'
		}
	},
	{
		id: 'metformin-g',
		name: 'Metformin G Tablet',
		divisionId: 'diabetic',
		summary: 'Combination of two medicines used to treat type 2 diabetes mellitus in adults.',
		form: 'Oral tablet',
		presentation: 'Administration: Take with food as prescribed; continue as directed by the physician.',
		tags: ['type 2 diabetes', 'combination therapy', 'gliclazide'],
		image: {
			src: '/images/placeholders/product-4.webp',
			alt: 'Placeholder tablet bottle for Metformin G.'
		}
	},
	{
		id: 'hylosm',
		name: 'Hylosm Eye Drops',
		divisionId: 'ophthalmic',
		summary: 'Hylosum Sodium Hyaluronate Eye Drops, 0.1% w/v.',
		form: 'Eye drops',
		presentation: 'Strength: Sodium Hyaluronate 0.1% w/v.',
		tags: ['sodium hyaluronate', 'ocular hydration'],
		image: {
			src: '/images/placeholders/product-5.webp',
			alt: 'Placeholder depiction of Hylosm sodium hyaluronate drops.'
		}
	},
	{
		id: 'arozol-dsr',
		name: 'Arozol-DSR Capsule',
		divisionId: 'general',
		summary:
			'Combination medicine used to treat gastroesophageal reflux disease (acid reflux) and relieve related symptoms.',
		form: 'Capsule (sustained release)',
		presentation: 'Usage: Take without food under medical guidance; continue for the prescribed duration.',
		tags: ['gerd', 'acid reflux', 'combination therapy'],
		image: {
			src: '/images/placeholders/product-3.webp',
			alt: 'Placeholder capsule packaging for Arozol-DSR.'
		}
	}
];

export const packagingHighlights = [
	'Tamper-evident and barcoded packs across the catalog',
	'Climate-aware logistics guidance for each division',
	'Lot traceability dashboards shared with partner teams'
];

export const supportContacts = [
	{
		label: 'Product availability desk',
		phone: '+91 99105 84811',
		email: 'supply@aroxima.com'
	},
	{
		label: 'Quality documentation',
		phone: '+91 98110 22567',
		email: 'quality@aroxima.com'
	}
];

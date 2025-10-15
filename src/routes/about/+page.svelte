<script lang="ts">
  import AboutHero from '$lib/aboutus/AboutHero.svelte';
  import StoryPanel from '$lib/aboutus/StoryPanel.svelte';
  import MissionVisionCards from '$lib/aboutus/MissionVisionCards.svelte';
  import QualityAssurance from '$lib/aboutus/QualityAssurance.svelte';
  import CapabilitiesGrid from '$lib/aboutus/CapabilitiesGrid.svelte';
  import CertificationsStrip from '$lib/aboutus/CertificationsStrip.svelte';
  import AboutCta from '$lib/aboutus/AboutCta.svelte';
  import ComplianceFooter from '$lib/sections/ComplianceFooter.svelte';

  const hero = {
    eyebrow: 'About Aroxima',
    title: 'Building reliable access to quality medicines.',
    lead:
      'Aroxima Lifesciences is an Indian pharmaceutical manufacturer focused on accessible, high‑quality formulations across key therapeutic areas. Our work blends scientific rigor with a people‑first mindset.',
    image: { src: '/images/placeholders/qualitymedicine.webp', alt: 'A collaborative lab team at work.' },
    primary: { label: 'Explore Products', href: '/products' },
    secondary: { label: 'Research & Quality', href: '/research' }
  };

  const story = {
    title: 'Who we are',
    paragraphs: [
      'We operate with robust, quality‑oriented processes and a culture of accountability. From raw‑material qualification to finished‑goods release, our teams prioritize safety, documentation, and patient outcomes.',
      'Our offices coordinate closely with partners across India to support availability and service. The organization is led by experienced professionals across pharmacy, life sciences, and operations.',
      'We aim to keep essential therapies within reach through dependable supply and transparent communication with clinicians, distributors, and institutions.'
    ],
    highlight: 'Accessible, dependable, and well‑documented pharmaceutical supply for real‑world care.'
  };

  const missionVision: Array<{ title: string; body: string; tone: 'life' | 'rust' | 'sun' }> = [
    {
      title: 'Vision',
      body:
        'Advance healthier lives by delivering innovative, affordable formulations—grounded in measurable quality and resilient operations.',
      tone: 'sun'
    },
    {
      title: 'Mission',
      body:
        'Bring together science, manufacturing discipline, and service to offer products that balance performance, safety, and value for every stakeholder.',
      tone: 'life'
    }
  ];

  const qa = {
    title: 'Quality and compliance',
    bullets: [
      'GMP‑aligned procedures and batch documentation',
      'Stability studies and in‑process controls',
      'Cleanroom hygiene and environmental monitoring',
      'Vendor qualification and material traceability',
      'Deviation management and CAPA discipline',
      'Continuous training and periodic audits'
    ],
    note: 'Quality statements reflect our operating principles. Formal certifications, where applicable, are shared with partners during onboarding.'
  };

  const capabilities = [
    {
      title: 'Formulation Development',
      body: 'Translating clinical needs into robust, scalable compositions with clear dossiers.',
      icon: '🧪'
    },
    {
      title: 'cGMP Manufacturing',
      body: 'Standardized processes with documented controls and release protocols.',
      icon: '🏭'
    },
    {
      title: 'Regulatory & QA',
      body: 'End‑to‑end documentation, audits, and change control for sustained compliance.',
      icon: '🗂️'
    },
    {
      title: 'Distribution Network',
      body: 'Partner‑centric supply planning and responsive support across regions.',
      icon: '🚚'
    }
  ];

  const certifications = [
    'GMP‑aligned processes',
    'Quality‑first manufacturing',
    'Validated stability studies',
    'Qualified supplier program'
  ];

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
  <title>About — Aroxima Lifesciences</title>
  <meta name="description" content="Aroxima Lifesciences is an Indian pharmaceutical manufacturer focused on accessible, high‑quality formulations backed by GMP‑aligned practices and dependable supply." />
  <link rel="canonical" href="https://aroxima.com/about" />
</svelte:head>

<main>
  <AboutHero data={hero} />
  <StoryPanel data={story} />
  <MissionVisionCards cards={missionVision} />
  <QualityAssurance data={qa} />
  <CapabilitiesGrid items={capabilities} />
  <CertificationsStrip items={certifications} />
  <AboutCta href="/contact" label="Contact us" sub="We’re happy to collaborate on availability, distribution, and research." />
  <ComplianceFooter data={complianceContent} />
  
</main>

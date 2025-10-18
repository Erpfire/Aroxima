<script lang="ts">
	import { resolve } from '$app/paths';

	interface CtaConfig {
		label: string;
		href: string;
	}

	interface HeroContent {
		title: string;
		lead: string;
		backgroundImage: string;
		primaryCta: CtaConfig;
		secondaryCta: CtaConfig;
		subcue: string;
	}

	let { data } = $props<{ data: HeroContent }>();

	type ResolveParam = Parameters<typeof resolve>[0];
	const primaryHref = resolve(data.primaryCta.href as ResolveParam);
	const secondaryHref = resolve(data.secondaryCta.href as ResolveParam);
</script>

<section
	class="relative isolate flex min-h-[90vh] items-center overflow-hidden py-24"
	aria-labelledby="hero-title"
>
	<div
		class="absolute inset-0 -z-10 bg-cover bg-center"
		style={`background-image: url('${data.backgroundImage}')`}
		aria-hidden="true"
	></div>
	<div
		class="absolute inset-0 -z-10 bg-gradient-to-br from-[rgba(244,242,236,0.92)] via-[rgba(244,242,236,0.86)] to-[rgba(244,242,236,0.75)]"
	></div>
	<div
		class="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(74,147,92,0.12),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(168,111,60,0.15),transparent_60%)]"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute inset-0 -z-30 opacity-70 [background:repeating-linear-gradient(120deg,rgba(248,229,178,0.08),rgba(248,229,178,0.08)_12px,transparent_12px,transparent_24px)]"
		aria-hidden="true"
	></div>
	<div class="pointer-events-none absolute inset-0 -z-40 overflow-hidden">
		<div
			class="motion-safe:animate-slow-drift absolute -top-24 left-1/3 h-[320px] w-[320px] rounded-full bg-[rgba(74,147,92,0.18)] blur-[180px]"
			aria-hidden="true"
		></div>
		<div
			class="motion-safe:animate-slow-drift absolute right-1/4 bottom-[-160px] h-[280px] w-[420px] rounded-[200px] bg-[rgba(248,229,178,0.22)] blur-[220px]"
			aria-hidden="true"
		></div>
	</div>

	<div
		class="relative z-10 container mx-auto flex max-w-[1200px] flex-col gap-10 px-6 md:px-10 lg:flex-row lg:items-center"
	>
		<div class="max-w-2xl space-y-6">
			<p
				class="inline-flex items-center gap-2 rounded-full bg-[rgba(74,147,92,0.15)] px-4 py-2 text-sm font-medium tracking-[0.3em] text-[var(--life)] uppercase"
			>
				<span
					class="h-2 w-2 rounded-full bg-[var(--life)] shadow-[0_0_12px_rgba(74,147,92,0.6)]"
					aria-hidden="true"
				></span>
				Rebirth of Science
			</p>
			<h1
				id="hero-title"
				class="font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl"
			>
				{data.title}
			</h1>
			<p class="max-w-xl text-lg text-[var(--muted)] sm:text-xl">
				{data.lead}
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					class="inline-flex items-center justify-center rounded-full bg-[var(--life)] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_24px_rgba(74,147,92,0.2)] transition-transform duration-300 hover:-translate-y-1 hover:bg-[color-mix(in_srgb,var(--life)_90%,white)] hover:shadow-[0_18px_30px_rgba(74,147,92,0.24)] focus-visible:-translate-y-1"
					href={primaryHref}
				>
					{data.primaryCta.label}
				</a>
				<a
					class="inline-flex items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--life)_40%,var(--border))] bg-white/70 px-6 py-3 text-base font-semibold text-[var(--life)] shadow-sm backdrop-blur-md transition duration-300 hover:border-[var(--life)] hover:text-[var(--life)] focus-visible:outline-[var(--rust)]"
					href={secondaryHref}
				>
					{data.secondaryCta.label}
				</a>
			</div>
		</div>
		<div
			class="relative max-w-md flex-1 self-start rounded-[var(--radius)] border border-[var(--border)] bg-white/60 p-6 shadow-[var(--shadow)] backdrop-blur-md md:self-center"
		>
			<div class="space-y-4">
				<h2 class="font-display text-xl text-[var(--ink)]">Vital Signs</h2>
				<ul class="space-y-3 text-[var(--muted)]">
					<li class="flex items-start gap-3">
						<span
							class="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--life)] shadow-[0_0_12px_rgba(74,147,92,0.6)]"
							aria-hidden="true"
						></span>
						Supply networks stabilised across cardiac, general, and ophthalmic pipelines.
					</li>
					<li class="flex items-start gap-3">
						<span
							class="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--rust)] shadow-[0_0_12px_rgba(168,111,60,0.45)]"
							aria-hidden="true"
						></span>
						Patient-first manufacturing, anchored by certified quality systems.
					</li>
					<li class="flex items-start gap-3">
						<span
							class="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--sun)] shadow-[0_0_12px_rgba(248,229,178,0.5)]"
							aria-hidden="true"
						></span>
						Future-ready R&D centers focused on measurable outcomes.
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div
		class="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-sm text-[var(--muted)]"
	>
		<span>{data.subcue}</span>
		<span
			class="motion-safe:animate-bounce-slow inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white/70 text-[var(--life)] shadow-sm backdrop-blur"
			aria-hidden="true"
		>
			↓
		</span>
	</div>
</section>

<style>
	@keyframes slow-drift {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(20px, 30px, 0);
		}
	}

	.motion-safe\:animate-slow-drift {
		animation: slow-drift 12s ease-in-out infinite alternate;
	}

	@keyframes bounce-slow {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(6px);
		}
	}

	.motion-safe\:animate-bounce-slow {
		animation: bounce-slow 2.8s ease-in-out infinite;
	}
</style>

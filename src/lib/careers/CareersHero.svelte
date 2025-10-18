<script lang="ts">
	interface HeroStat {
		label: string;
		value: string;
	}

	interface HeroHighlight {
		title: string;
		description: string;
	}

	interface HeroCta {
		label: string;
		href: string;
		variant?: 'primary' | 'secondary';
	}

	interface HeroData {
		eyebrow?: string;
		title: string;
		lead: string;
		image?: { src: string; alt: string };
		stats?: HeroStat[];
		highlights?: HeroHighlight[];
		ctas?: HeroCta[];
	}

	let { data } = $props<{ data: HeroData }>();
</script>

<section class="relative isolate overflow-hidden py-20 md:py-28">
	<div class="absolute inset-0 -z-20 bg-[rgba(255,255,255,0.78)] backdrop-blur-3xl"></div>
	<div
		class="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_20%_20%,rgba(74,147,92,0.2),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(248,229,178,0.45),transparent_65%)]"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute inset-0 -z-40 opacity-80 [background:repeating-linear-gradient(120deg,rgba(233,226,205,0.32),rgba(233,226,205,0.32)_14px,transparent_14px,transparent_28px)]"
		aria-hidden="true"
	></div>

	<div class="container mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10">
		<div class="space-y-6">
			{#if data.eyebrow}
				<p class="inline-flex items-center gap-2 rounded-full bg-[rgba(74,147,92,0.14)] px-4 py-2 text-xs font-semibold tracking-[0.3em] text-[var(--life)] uppercase">
					<span class="h-2 w-2 rounded-full bg-[var(--life)] shadow-[0_0_9px_rgba(74,147,92,0.45)]"></span>
					{data.eyebrow}
				</p>
			{/if}
			<h1 class="font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
				{data.title}
			</h1>
			<p class="max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">{data.lead}</p>

			{#if data.ctas?.length}
				<div class="flex flex-wrap gap-4 pt-2">
					{#each data.ctas as cta}
						{#if cta.variant === 'secondary'}
							<a
								class="inline-flex items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--life)_35%,var(--border))] bg-white/85 px-6 py-3 text-sm font-semibold text-[var(--life)] shadow-sm transition hover:border-[var(--life)]"
								href={cta.href}
							>
								{cta.label}
							</a>
						{:else}
							<a
								class="inline-flex items-center justify-center rounded-full bg-[var(--life)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(74,147,92,0.22)] transition-transform hover:-translate-y-1 hover:bg-[color-mix(in_srgb,var(--life)_88%,white)]"
								href={cta.href}
							>
								{cta.label}
							</a>
						{/if}
					{/each}
				</div>
			{/if}

			{#if data.stats?.length}
				<div class="grid gap-4 pt-6 sm:grid-cols-3">
					{#each data.stats as stat}
						<div class="rounded-[var(--radius)] border border-[var(--border)] bg-white/80 p-5 shadow-sm backdrop-blur">
							<p class="text-3xl font-semibold text-[var(--ink)]">{stat.value}</p>
							<p class="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
						</div>
					{/each}
				</div>
			{/if}

			{#if data.highlights?.length}
				<div class="grid gap-4 pt-4 sm:grid-cols-2">
					{#each data.highlights as highlight}
						<div class="rounded-[var(--radius)] border border-[var(--border)] bg-white/75 p-5 shadow-sm backdrop-blur">
							<h2 class="text-base font-semibold text-[var(--ink)]">{highlight.title}</h2>
							<p class="mt-1 text-sm text-[var(--muted)]">{highlight.description}</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<div class="relative">
			<div
				class="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(74,147,92,0.25),transparent_60%)] opacity-80"
				aria-hidden="true"
			></div>
			<div class="overflow-hidden rounded-[26px] border border-[var(--border)] bg-white/70 shadow-[var(--shadow)] backdrop-blur">
				{#if data.image}
					<img
						src={data.image.src}
						alt={data.image.alt}
						class="h-full w-full object-cover"
						loading="lazy"
						decoding="async"
					/>
				{:else}
					<div class="flex aspect-[4/5] items-center justify-center bg-[rgba(74,147,92,0.1)]">
						<span class="text-sm font-medium text-[var(--muted)]">Team culture imagery placeholder</span>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

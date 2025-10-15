<script lang="ts">
	interface HeroStat {
		label: string;
		value: string;
	}

	interface HeroBadge {
		label: string;
	}

	interface ProductsHeroData {
		title: string;
		lead: string;
		eyebrow?: string;
		image?: { src: string; alt: string };
		stats?: HeroStat[];
		badges?: HeroBadge[];
	}

	let { data } = $props<{ data: ProductsHeroData }>();
</script>

<section class="relative isolate overflow-hidden py-20 md:py-28">
	<div class="absolute inset-0 -z-20 bg-[rgba(255,255,255,0.7)] backdrop-blur-[40px]"></div>
	<div
		class="absolute inset-0 -z-30 bg-[radial-gradient(1200px_600px_at_10%_20%,rgba(74,147,92,0.18),transparent),radial-gradient(900px_500px_at_90%_80%,rgba(248,229,178,0.3),transparent)]"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute inset-0 -z-40 opacity-80 [background:repeating-linear-gradient(115deg,rgba(233,226,205,0.35),rgba(233,226,205,0.35)_12px,transparent_12px,transparent_26px)]"
		aria-hidden="true"
	></div>

	<div
		class="container mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:px-10"
	>
		<div class="space-y-6">
			{#if data.eyebrow}
				<p class="inline-flex items-center gap-2 rounded-full bg-[rgba(74,147,92,0.12)] px-4 py-2 text-xs font-semibold tracking-[0.3em] text-[var(--life)] uppercase">
					<span class="h-2 w-2 rounded-full bg-[var(--life)] shadow-[0_0_10px_rgba(74,147,92,0.6)]"></span>
					{data.eyebrow}
				</p>
			{/if}
			<h1 class="font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
				{data.title}
			</h1>
			<p class="max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
				{data.lead}
			</p>

			{#if data.badges?.length}
				<ul class="flex flex-wrap gap-3 pt-2" role="list">
					{#each data.badges as badge}
						<li class="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-4 py-2 text-xs font-semibold text-[var(--muted)] shadow-sm backdrop-blur">
							<span class="h-1.5 w-1.5 rounded-full bg-[var(--life)]"></span>
							{badge.label}
						</li>
					{/each}
				</ul>
			{/if}

			{#if data.stats?.length}
				<div class="grid gap-4 pt-4 sm:grid-cols-3">
					{#each data.stats as stat}
						<div class="rounded-[var(--radius)] border border-[var(--border)] bg-white/70 p-5 shadow-sm backdrop-blur">
							<p class="text-3xl font-semibold text-[var(--ink)]">{stat.value}</p>
							<p class="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<div class="relative">
			<div
				class="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(74,147,92,0.22),transparent_65%)] opacity-80"
				aria-hidden="true"
			></div>
			<div class="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white/70 shadow-[var(--shadow)] backdrop-blur">
				{#if data.image}
					<img
						src={data.image.src}
						alt={data.image.alt}
						class="h-full w-full object-cover"
						loading="lazy"
						decoding="async"
					/>
				{:else}
					<div class="flex aspect-[4/5] items-center justify-center bg-[rgba(74,147,92,0.08)]">
						<span class="text-sm font-medium text-[var(--muted)]">Product imagery placeholder</span>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	interface HeroHighlight {
		label: string;
		description: string;
	}

	interface HeroData {
		title: string;
		lead: string;
		tagline?: string;
		highlights?: HeroHighlight[];
		image?: { src: string; alt: string };
	}

	let { data } = $props<{ data: HeroData }>();
</script>

<section class="relative isolate overflow-hidden py-20 md:py-28">
	<div class="absolute inset-0 -z-20 bg-[rgba(255,255,255,0.78)] backdrop-blur-3xl"></div>
	<div
		class="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_left_top,rgba(74,147,92,0.2),transparent_60%),radial-gradient(circle_at_right_bottom,rgba(248,229,178,0.42),transparent_65%)]"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute inset-0 -z-40 opacity-80 [background:repeating-linear-gradient(104deg,rgba(233,226,205,0.32),rgba(233,226,205,0.32)_14px,transparent_14px,transparent_28px)]"
		aria-hidden="true"
	></div>

	<div class="container mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10">
		<div class="space-y-6">
			{#if data.tagline}
				<p class="inline-flex items-center gap-2 rounded-full bg-[rgba(74,147,92,0.14)] px-4 py-2 text-xs font-semibold tracking-[0.3em] text-[var(--life)] uppercase">
					<span class="h-2 w-2 rounded-full bg-[var(--life)] shadow-[0_0_9px_rgba(74,147,92,0.45)]"></span>
					{data.tagline}
				</p>
			{/if}
			<h1 class="font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
				{data.title}
			</h1>
			<p class="max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">{data.lead}</p>

			{#if data.highlights?.length}
				<div class="grid gap-4 sm:grid-cols-2">
					{#each data.highlights as highlight}
						<div class="rounded-[var(--radius)] border border-[var(--border)] bg-white/80 p-5 shadow-sm backdrop-blur">
							<p class="text-sm font-semibold text-[var(--life)]">{highlight.label}</p>
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
						<span class="text-sm font-medium text-[var(--muted)]">Contact imagery placeholder</span>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

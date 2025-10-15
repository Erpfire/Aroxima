<script lang="ts">
	import SectionShell from '$lib/sections/SectionShell.svelte';

	interface OfficeLocation {
		title: string;
		lines: string[];
		mapLabel?: string;
		availability?: string;
	}

	type OfficeGridProps = {
		title: string;
		intro?: string;
		offices: OfficeLocation[];
		image?: { src: string; alt: string };
	};

	const props: OfficeGridProps = $props();
	let { title, intro, offices, image } = props;
</script>

<SectionShell id="offices">
	<div class="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
		<div class="space-y-4">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{title}</h2>
			{#if intro}
				<p class="text-lg text-[var(--muted)]">{intro}</p>
			{/if}
			<div class="grid gap-6">
				{#each offices as office (office.title)}
					<article class="rounded-[var(--radius)] border border-[var(--border)] bg-white/85 p-6 shadow-[var(--shadow)] backdrop-blur">
						<h3 class="font-display text-xl text-[var(--ink)]">{office.title}</h3>
						<ul class="mt-3 space-y-2 text-sm text-[var(--muted)]" role="list">
							{#each office.lines as line (line)}
								<li>{line}</li>
							{/each}
						</ul>
						{#if office.availability}
							<p class="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
								{office.availability}
							</p>
						{/if}
					</article>
				{/each}
			</div>
		</div>
		<div class="space-y-6">
			<div class="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white/75 shadow-[var(--shadow)] backdrop-blur">
				{#if image}
					<img
						src={image.src}
						alt={image.alt}
						class="h-full w-full object-cover"
						loading="lazy"
						decoding="async"
					/>
				{:else}
					<div class="flex aspect-[4/3] items-center justify-center bg-[rgba(74,147,92,0.1)]">
						<span class="text-sm font-medium text-[var(--muted)]">Regional coverage map forthcoming</span>
					</div>
				{/if}
			</div>
			<p class="text-sm text-[var(--muted)]">
				Our corporate and registered offices coordinate closely with distribution hubs across Gujarat and Maharashtra to
				maintain consistent product availability. Site visits are hosted by appointment for supply, QA, and compliance reviews.
			</p>
		</div>
	</div>
</SectionShell>

<script lang="ts">
	import SectionShell from '$lib/sections/SectionShell.svelte';
	import type { ProductDivision } from './catalog';

	type DivisionSpotlightsProps = {
		title: string;
		intro: string;
		divisions: ProductDivision[];
	};

	const props: DivisionSpotlightsProps = $props();
	let { title, intro, divisions } = props;

	const accentTokens: Record<ProductDivision['accent'], string> = {
		life: 'bg-[rgba(74,147,92,0.15)] text-[var(--life)]',
		rust: 'bg-[rgba(168,111,60,0.16)] text-[var(--rust)]',
		sun: 'bg-[rgba(248,229,178,0.45)] text-[var(--muted)]'
	};
</script>

<SectionShell id="divisions">
	<div class="space-y-10">
		<div class="space-y-3 text-center md:text-left">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{title}</h2>
			<p class="mx-auto max-w-3xl text-lg text-[var(--muted)] md:mx-0">{intro}</p>
		</div>

		<div class="space-y-10">
			{#each divisions as division (division.id)}
				<article class="grid gap-8 rounded-[var(--radius)] border border-[var(--border)] bg-white/75 p-6 shadow-[var(--shadow)] backdrop-blur md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center">
					<div class="space-y-4">
						<span class={`inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${accentTokens[division.accent]}`}>
							{division.name}
						</span>
						<h3 class="font-display text-2xl text-[var(--ink)]">{division.summary}</h3>
						<p class="text-sm text-[var(--muted)]">{division.description}</p>
						<ul class="space-y-3 text-sm text-[var(--muted)]" role="list">
							{#each division.bulletPoints as bullet (bullet)}
								<li class="flex items-start gap-3">
									<span class="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--life)] shadow-[0_0_10px_rgba(74,147,92,0.4)]"></span>
									{bullet}
								</li>
							{/each}
						</ul>
					</div>
					<div>
						<div class="relative overflow-hidden rounded-[22px] border border-[var(--border)] bg-white/80 shadow-lg">
							<img
								src={division.image.src}
								alt={division.image.alt}
								class="h-full w-full object-cover"
								loading="lazy"
								decoding="async"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-[rgba(28,31,27,0.2)] to-transparent" aria-hidden="true"></div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</SectionShell>

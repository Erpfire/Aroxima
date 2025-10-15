<script lang="ts">
	import { resolve } from '$app/paths';
	import SectionShell from './SectionShell.svelte';

	interface DivisionItem {
		name: string;
		line: string;
		image: {
			src: string;
			alt: string;
		};
		href: string;
	}

	interface DivisionContent {
		title: string;
		intro: string;
		divisions: DivisionItem[];
	}

	let { data } = $props<{ data: DivisionContent }>();
	type ResolveParam = Parameters<typeof resolve>[0];
</script>

<SectionShell id="divisions" className="relative">
	<div
		class="absolute inset-x-0 top-12 -z-10 mx-auto max-w-[1100px] rounded-[var(--radius)] bg-[rgba(255,255,255,0.75)] blur-3xl"
		aria-hidden="true"
	></div>
	<div class="space-y-8 text-center">
		<div class="space-y-4">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{data.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-[var(--muted)]">
				{data.intro}
			</p>
		</div>
		<div class="grid gap-6 md:grid-cols-3">
			{#each data.divisions as division (division.name)}
				<a
					class="group flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-white/80 shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-2 focus-visible:-translate-y-2"
					href={resolve(division.href as ResolveParam)}
				>
					<div class="relative h-48 overflow-hidden">
						<img
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							src={division.image.src}
							alt={division.image.alt}
							loading="lazy"
							decoding="async"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-[rgba(28,31,27,0.35)] to-transparent"
							aria-hidden="true"
						></div>
					</div>
					<div class="flex flex-1 flex-col items-center gap-3 px-6 py-6 text-center">
						<h3 class="font-display text-xl text-[var(--ink)]">{division.name}</h3>
						<p class="text-[var(--muted)]">{division.line}</p>
						<span
							class="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--life)]"
						>
							Explore
							<span aria-hidden="true">→</span>
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</SectionShell>

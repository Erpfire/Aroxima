<script lang="ts">
	import { resolve } from '$app/paths';
	import SectionShell from './SectionShell.svelte';

	interface ResearchContent {
		title: string;
		body: string;
		chips: string[];
		image: {
			src: string;
			alt: string;
		};
		link: {
			label: string;
			href: string;
		};
	}

	let { data } = $props<{ data: ResearchContent }>();
	type ResolveParam = Parameters<typeof resolve>[0];
</script>

<SectionShell id="research" className="relative overflow-hidden">
	<div
		class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(74,147,92,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(248,229,178,0.25),transparent_60%)]"
		aria-hidden="true"
	></div>
	<div class="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
		<div class="space-y-6">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{data.title}</h2>
			<p class="text-lg text-[var(--muted)]">
				{data.body}
			</p>
			<ul class="flex flex-wrap gap-3">
				{#each data.chips as chip (chip)}
					<li
						class="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--muted)]"
					>
						{chip}
					</li>
				{/each}
			</ul>
			<a
				class="inline-flex items-center gap-2 text-sm font-semibold text-[var(--life)]"
				href={resolve(data.link.href as ResolveParam)}
			>
				{data.link.label}
				<span aria-hidden="true">→</span>
			</a>
		</div>
		<figure class="relative">
			<div
				class="absolute top-8 -left-8 -z-10 h-24 w-24 rounded-full bg-[rgba(74,147,92,0.15)] blur-3xl"
				aria-hidden="true"
			></div>
			<img
				class="w-full rounded-[var(--radius)] border border-[var(--border)] object-cover shadow-[var(--shadow)]"
				src={data.image.src}
				alt={data.image.alt}
				loading="lazy"
				decoding="async"
			/>
		</figure>
	</div>
</SectionShell>

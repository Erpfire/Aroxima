<script lang="ts">
	import SectionShell from '$lib/sections/SectionShell.svelte';

	interface CulturePillar {
		title: string;
		description: string;
		icon?: string;
		footer?: string;
	}

	type CultureSectionProps = {
		title: string;
		intro: string;
		pillars: CulturePillar[];
	};

	const props: CultureSectionProps = $props();
	let { title, intro, pillars } = props;
</script>

<SectionShell id="culture">
	<div class="space-y-8">
		<div class="space-y-3 text-center md:text-left">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{title}</h2>
			<p class="mx-auto max-w-3xl text-lg text-[var(--muted)] md:mx-0">{intro}</p>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each pillars as pillar (pillar.title)}
				<article class="flex h-full flex-col gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-white/80 p-6 shadow-[var(--shadow)] backdrop-blur">
					<div class="flex items-center gap-3">
						{#if pillar.icon}
							<span class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(74,147,92,0.15)] text-2xl text-[var(--life)]">
								{pillar.icon}
							</span>
						{/if}
						<h3 class="font-display text-xl text-[var(--ink)]">{pillar.title}</h3>
					</div>
					<p class="text-sm text-[var(--muted)]">{pillar.description}</p>
					{#if pillar.footer}
						<p class="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
							{pillar.footer}
						</p>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</SectionShell>

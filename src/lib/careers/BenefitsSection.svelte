<script lang="ts">
	import SectionShell from '$lib/sections/SectionShell.svelte';

	interface BenefitItem {
		title: string;
		description: string;
	}

	type BenefitsSectionProps = {
		title: string;
		intro?: string;
		benefits: BenefitItem[];
		note?: string;
	};

	const props: BenefitsSectionProps = $props();
	let { title, intro, benefits, note } = props;
</script>

<SectionShell id="benefits">
	<div class="space-y-6">
		<div class="space-y-3 text-center md:text-left">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{title}</h2>
			{#if intro}
				<p class="mx-auto max-w-3xl text-lg text-[var(--muted)] md:mx-0">{intro}</p>
			{/if}
		</div>

		<div class="grid gap-5 md:grid-cols-2">
			{#each benefits as benefit (benefit.title)}
				<article class="rounded-[var(--radius)] border border-[var(--border)] bg-white/85 p-6 shadow-[var(--shadow)] backdrop-blur">
					<h3 class="font-display text-xl text-[var(--ink)]">{benefit.title}</h3>
					<p class="mt-2 text-sm text-[var(--muted)]">{benefit.description}</p>
				</article>
			{/each}
		</div>

		{#if note}
			<p class="rounded-[var(--radius)] border border-dashed border-[var(--border)] bg-white/65 px-5 py-4 text-sm text-[var(--muted)]">
				{note}
			</p>
		{/if}
	</div>
</SectionShell>

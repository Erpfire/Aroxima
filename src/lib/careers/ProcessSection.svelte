<script lang="ts">
	import SectionShell from '$lib/sections/SectionShell.svelte';

	interface ProcessStep {
		title: string;
		description: string;
		timeline: string;
	}

	type ProcessSectionProps = {
		title: string;
		intro?: string;
		steps: ProcessStep[];
	};

	const props: ProcessSectionProps = $props();
	let { title, intro, steps } = props;
</script>

<SectionShell id="process">
	<div class="space-y-8">
		<div class="space-y-3 text-center md:text-left">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{title}</h2>
			{#if intro}
				<p class="mx-auto max-w-3xl text-lg text-[var(--muted)] md:mx-0">{intro}</p>
			{/if}
		</div>

		<ol class="space-y-6" role="list">
			{#each steps as step, index (step.title)}
				<li class="relative rounded-[var(--radius)] border border-[var(--border)] bg-white/85 p-6 shadow-[var(--shadow)] backdrop-blur">
					<div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
						<div class="flex items-center gap-3">
							<span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(74,147,92,0.15)] text-base font-semibold text-[var(--life)]">
								{index + 1}
							</span>
							<div>
								<h3 class="font-display text-xl text-[var(--ink)]">{step.title}</h3>
								<p class="mt-1 text-sm text-[var(--muted)]">{step.description}</p>
							</div>
						</div>
						<p class="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)] md:text-right">
							{step.timeline}
						</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</SectionShell>

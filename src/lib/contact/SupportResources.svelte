<script lang="ts">
	import SectionShell from '$lib/sections/SectionShell.svelte';

	interface ResourceItem {
		title: string;
		description: string;
		points: string[];
	}

	type SupportResourcesProps = {
		title: string;
		intro?: string;
		items: ResourceItem[];
	};

	const props: SupportResourcesProps = $props();
	let { title, intro, items } = props;
</script>

<SectionShell id="support-resources">
	<div class="space-y-8">
		<div class="text-center md:text-left">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{title}</h2>
			{#if intro}
				<p class="mt-2 text-lg text-[var(--muted)]">{intro}</p>
			{/if}
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each items as item (item.title)}
				<article class="flex h-full flex-col gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-white/80 p-6 shadow-[var(--shadow)] backdrop-blur">
					<h3 class="font-display text-xl text-[var(--ink)]">{item.title}</h3>
					<p class="text-sm text-[var(--muted)]">{item.description}</p>
					<ul class="space-y-2 text-sm text-[var(--muted)]" role="list">
						{#each item.points as point (point)}
							<li class="flex items-start gap-3">
								<span class="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--life)] shadow-[0_0_8px_rgba(74,147,92,0.4)]"></span>
								{point}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</SectionShell>

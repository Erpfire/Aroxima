<script lang="ts">
	import SectionShell from '$lib/sections/SectionShell.svelte';

	interface ChannelItem {
		title: string;
		description: string;
		icon?: string;
		actions: Array<{ label: string; href: string }>;
	}

	type ContactChannelsProps = {
		title: string;
		subtitle?: string;
		items: ChannelItem[];
	};

	const props: ContactChannelsProps = $props();
	let { title, subtitle, items } = props;
</script>

<SectionShell id="contact-channels" className="relative">
	<div class="absolute inset-0 -z-10 rounded-[var(--radius)] bg-[rgba(255,255,255,0.65)]"></div>
	<div class="absolute inset-0 -z-20 rounded-[var(--radius)] border border-[var(--border)]"></div>

	<div class="space-y-8">
		<div class="text-center md:text-left">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{title}</h2>
			{#if subtitle}
				<p class="mt-2 text-lg text-[var(--muted)]">{subtitle}</p>
			{/if}
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each items as item (item.title)}
				<article class="flex h-full flex-col gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-white/85 p-6 shadow-[var(--shadow)] backdrop-blur">
					<div class="flex items-center gap-3">
						{#if item.icon}
							<span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(74,147,92,0.15)] text-lg text-[var(--life)]">
								{item.icon}
							</span>
						{/if}
						<h3 class="font-display text-xl text-[var(--ink)]">{item.title}</h3>
					</div>
					<p class="flex-1 text-sm text-[var(--muted)]">{item.description}</p>
					<div class="flex flex-wrap gap-3">
						{#each item.actions as action (action.href)}
							<a
								class="inline-flex items-center gap-1 rounded-full border border-[color-mix(in_srgb,var(--life)_35%,var(--border))] bg-white/90 px-4 py-2 text-xs font-semibold text-[var(--life)] transition hover:border-[var(--life)] focus-visible:outline-[var(--rust)]"
								href={action.href}
							>
								{action.label}
								<span aria-hidden="true">→</span>
							</a>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</SectionShell>

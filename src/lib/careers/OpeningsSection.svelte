<script lang="ts">
	import SectionShell from '$lib/sections/SectionShell.svelte';

	interface Opening {
		role: string;
		location: string;
		type: string;
		summary: string;
		tags: string[];
	}

	type OpeningsSectionProps = {
		title: string;
		intro: string;
		openings: Opening[];
		applyEmail: string;
	};

	const props: OpeningsSectionProps = $props();
	let { title, intro, openings, applyEmail } = props;
</script>

<SectionShell id="openings" className="relative">
	<div class="absolute inset-0 -z-10 rounded-[var(--radius)] bg-[rgba(255,255,255,0.65)]"></div>
	<div class="absolute inset-0 -z-20 rounded-[var(--radius)] border border-[var(--border)]"></div>

	<div class="space-y-8">
		<div class="space-y-3 text-center md:text-left">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{title}</h2>
			<p class="mx-auto max-w-3xl text-lg text-[var(--muted)] md:mx-0">{intro}</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#each openings as opening (opening.role)}
				<article class="flex h-full flex-col gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-white/85 p-6 shadow-[var(--shadow)] backdrop-blur">
					<div>
						<h3 class="font-display text-xl text-[var(--ink)]">{opening.role}</h3>
						<p class="mt-2 text-sm text-[var(--muted)]">{opening.summary}</p>
					</div>
					<dl class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
						<dt>Location</dt>
						<dd class="text-[var(--ink)] tracking-normal normal-case">{opening.location}</dd>
						<dt>Type</dt>
						<dd class="text-[var(--ink)] tracking-normal normal-case">{opening.type}</dd>
					</dl>
					<ul class="flex flex-wrap gap-2 text-xs font-semibold text-[var(--muted)]" role="list">
						{#each opening.tags as tag}
							<li class="rounded-full bg-[rgba(74,147,92,0.1)] px-3 py-1 text-[var(--life)]">{tag}</li>
						{/each}
					</ul>
					<a
						class="mt-auto inline-flex items-center gap-1 rounded-full bg-[var(--life)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(74,147,92,0.2)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--life)_88%,white)]"
						href={`mailto:${applyEmail}?subject=${encodeURIComponent('Application: ' + opening.role)}`}
					>
						Apply via email
						<span aria-hidden="true">→</span>
					</a>
				</article>
			{/each}
		</div>
	</div>
</SectionShell>

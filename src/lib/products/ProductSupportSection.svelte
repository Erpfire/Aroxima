<script lang="ts">
	import SectionShell from '$lib/sections/SectionShell.svelte';

	interface SupportContact {
		label: string;
		phone: string;
		email: string;
	}

	type SupportSectionProps = {
		title: string;
		intro: string;
		highlights: string[];
		contacts: SupportContact[];
	};

	const props: SupportSectionProps = $props();
	let { title, intro, highlights, contacts } = props;
</script>

<SectionShell id="support" className="relative">
	<div class="absolute inset-0 -z-10 rounded-[var(--radius)] bg-[rgba(255,255,255,0.6)]"></div>
	<div class="absolute inset-0 -z-20 rounded-[var(--radius)] border border-[var(--border)]"></div>

	<div class="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
		<div class="space-y-4">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{title}</h2>
			<p class="max-w-xl text-lg text-[var(--muted)]">{intro}</p>
			<ul class="space-y-3 rounded-[var(--radius)] border border-[var(--border)] bg-white/70 p-6 backdrop-blur" role="list">
				{#each highlights as point (point)}
					<li class="flex items-start gap-3 text-sm text-[var(--muted)]">
						<span class="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--life)] shadow-[0_0_8px_rgba(74,147,92,0.4)]"></span>
						{point}
					</li>
				{/each}
			</ul>
		</div>
		<div class="space-y-4">
			<h3 class="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
				Partner desks
			</h3>
			<div class="space-y-4">
				{#each contacts as contact (contact.email)}
					<article class="rounded-[var(--radius)] border border-[var(--border)] bg-white/85 p-6 shadow-sm backdrop-blur">
						<h4 class="text-lg font-semibold text-[var(--ink)]">{contact.label}</h4>
						<dl class="mt-3 space-y-2 text-sm text-[var(--muted)]">
							<div class="flex items-center gap-2">
								<dt class="font-semibold text-[var(--ink)]">Phone</dt>
								<dd>
									<a class="text-[var(--life)] hover:underline" href={`tel:${contact.phone.replaceAll(' ', '')}`}>
										{contact.phone}
									</a>
								</dd>
							</div>
							<div class="flex items-center gap-2">
								<dt class="font-semibold text-[var(--ink)]">Email</dt>
								<dd>
									<a class="text-[var(--life)] hover:underline" href={`mailto:${contact.email}`}>
										{contact.email}
									</a>
								</dd>
							</div>
						</dl>
					</article>
				{/each}
			</div>
		</div>
	</div>
</SectionShell>

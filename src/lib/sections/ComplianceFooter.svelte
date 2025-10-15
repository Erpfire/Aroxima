<script lang="ts">
	import { resolve } from '$app/paths';

	interface FooterLink {
		label: string;
		href: string;
	}

	interface ComplianceContent {
		brand: string;
		disclaimer: string;
		links: FooterLink[];
		copy: string;
	}

	let { data } = $props<{ data: ComplianceContent }>();
	type ResolveParam = Parameters<typeof resolve>[0];
</script>

<footer class="mt-24 bg-white/70 pt-12">
	<div class="container mx-auto max-w-[1200px] px-6 md:px-10">
		<section
			class="rounded-[var(--radius)] border border-[var(--border)] bg-white/80 px-6 py-6 text-sm text-[var(--muted)] shadow-[var(--shadow)]"
		>
			<strong class="block font-semibold text-[var(--ink)]">Compliance reminder</strong>
			<p class="mt-2 leading-relaxed">
				{data.disclaimer}
			</p>
		</section>
		<div
			class="flex flex-col gap-6 border-t border-[var(--border)] py-8 md:flex-row md:items-center md:justify-between"
		>
			<div>
				<p class="font-display text-lg text-[var(--ink)]">{data.brand}</p>
				<p class="text-sm text-[var(--muted)]">{data.copy}</p>
			</div>
			<nav aria-label="Footer navigation">
				<ul class="flex flex-wrap gap-4 text-sm font-semibold text-[var(--life)]">
					{#each data.links as link (link.label)}
						<li>
							<a href={resolve(link.href as ResolveParam)}>{link.label}</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</footer>

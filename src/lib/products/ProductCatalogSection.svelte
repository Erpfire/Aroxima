<script lang="ts">
	import SectionShell from '$lib/sections/SectionShell.svelte';
	import type { DivisionId, ProductDivision, ProductItem } from './catalog';

	type CatalogProps = {
		title: string;
		intro: string;
		products: ProductItem[];
		divisions: ProductDivision[];
	};

	const props: CatalogProps = $props();
	let { title, intro, products, divisions } = props;

	type FilterValue = DivisionId | 'all';

	let activeDivision = $state<FilterValue>('all');
	let searchQuery = $state('');

	const divisionLookup = $derived.by(() => {
		const map = new Map<DivisionId, ProductDivision>();
		for (const division of divisions) {
			map.set(division.id, division);
		}
		return map;
	});

	const divisionCounts = $derived.by(() => {
		const counts: Record<FilterValue, number> = { all: products.length } as Record<FilterValue, number>;
		for (const division of divisions) {
			counts[division.id] = 0;
		}
		for (const product of products) {
			counts[product.divisionId] = (counts[product.divisionId] ?? 0) + 1;
		}
		return counts;
	});

	const filteredProducts = $derived.by(() => {
		const trimmed = searchQuery.trim().toLowerCase();
		return products.filter((product) => {
			const matchesDivision = activeDivision === 'all' || product.divisionId === activeDivision;
			if (!matchesDivision) return false;
			if (!trimmed) return true;
			const text = `${product.name} ${product.summary} ${product.form} ${product.presentation} ${product.tags.join(' ')}`.toLowerCase();
			return text.includes(trimmed);
		});
	});

	const visibleCount = $derived(filteredProducts.length);
</script>

<SectionShell id="catalog">
	<div class="space-y-10">
		<div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
			<div class="space-y-3">
				<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{title}</h2>
				<p class="max-w-2xl text-lg text-[var(--muted)]">{intro}</p>
			</div>
			<p class="text-sm text-[var(--muted)]">
				Showing <span class="font-semibold text-[var(--ink)]">{visibleCount}</span> of {products.length} formulations
			</p>
		</div>

		<div class="flex flex-col gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-white/70 p-6 shadow-sm backdrop-blur">
			<label class="flex items-center gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-white/80 px-4 py-3 shadow-sm focus-within:border-[var(--life)] focus-within:ring-2 focus-within:ring-[rgba(74,147,92,0.25)]">
				<span class="text-sm font-semibold text-[var(--muted)]">Search</span>
				<input
					class="h-10 flex-1 border-none bg-transparent text-base text-[var(--ink)] focus:ring-0"
					type="search"
					placeholder="Search by name, division, or keyword"
					value={searchQuery}
					oninput={(event) => (searchQuery = event.currentTarget.value)}
				/>
			</label>

			<div class="flex flex-wrap gap-3 md:flex-nowrap md:overflow-x-auto md:pb-1">
				<button
					type="button"
					class={`inline-flex flex-shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-[var(--rust)] ${activeDivision === 'all' ? 'border-[var(--life)] bg-[rgba(74,147,92,0.12)] text-[var(--life)]' : 'border-[var(--border)] bg-white/80 text-[var(--muted)] hover:border-[var(--life)] hover:text-[var(--life)]'}`}
					onclick={() => (activeDivision = 'all')}
				>
					All divisions
					<span class="rounded-full bg-[rgba(74,147,92,0.15)] px-2 py-0.5 text-xs font-semibold text-[var(--life)]">
						{divisionCounts.all}
					</span>
				</button>
				{#each divisions as division (division.id)}
					<button
						type="button"
						class={`inline-flex flex-shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-[var(--rust)] ${activeDivision === division.id ? 'border-[var(--life)] bg-[rgba(74,147,92,0.12)] text-[var(--life)]' : 'border-[var(--border)] bg-white/80 text-[var(--muted)] hover:border-[var(--life)] hover:text-[var(--life)]'}`}
						onclick={() => (activeDivision = division.id)}
					>
						{division.name}
						<span class="rounded-full bg-[rgba(74,147,92,0.15)] px-2 py-0.5 text-xs font-semibold text-[var(--life)]">
							{divisionCounts[division.id]}
						</span>
					</button>
				{/each}
			</div>
		</div>

		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#if filteredProducts.length === 0}
				<div class="col-span-full rounded-[var(--radius)] border border-dashed border-[var(--border)] bg-white/60 p-10 text-center text-[var(--muted)]">
					No products matched the filters. Try adjusting the division or keywords.
				</div>
			{:else}
				{#each filteredProducts as product (product.id)}
					<article class="group flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-white/80 shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-2">
						<div class="relative h-44 overflow-hidden">
							<img
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								src={product.image.src}
								alt={product.image.alt}
								loading="lazy"
								decoding="async"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-[rgba(28,31,27,0.35)] to-transparent" aria-hidden="true"></div>
							<span class="absolute bottom-4 left-4 rounded-full bg-[rgba(255,255,255,0.85)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
								{divisionLookup.get(product.divisionId)?.name ?? product.divisionId}
							</span>
						</div>
						<div class="flex flex-1 flex-col gap-4 px-5 py-6">
							<div class="space-y-1.5">
								<h3 class="font-display text-2xl text-[var(--ink)]">{product.name}</h3>
								<p class="text-sm text-[var(--muted)]">{product.summary}</p>
							</div>
							<dl class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm text-[var(--muted)]">
								<dt class="font-semibold text-[var(--ink)]">Form</dt>
								<dd>{product.form}</dd>
								<dt class="font-semibold text-[var(--ink)]">Details</dt>
								<dd>{product.presentation}</dd>
							</dl>
							{#if product.tags.length}
								<ul class="flex flex-wrap gap-2 pt-2 text-xs font-semibold text-[var(--muted)]" role="list">
									{#each product.tags as tag}
										<li class="rounded-full bg-[rgba(74,147,92,0.1)] px-3 py-1 text-[var(--life)]">{tag}</li>
									{/each}
								</ul>
							{/if}
						</div>
					</article>
				{/each}
			{/if}
		</div>
	</div>
</SectionShell>

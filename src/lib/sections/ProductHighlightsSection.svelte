<script lang="ts">
	import { resolve } from '$app/paths';
	import SectionShell from './SectionShell.svelte';
	import { onMount } from 'svelte';

	interface ProductCard {
		name: string;
		division: string;
		short_line: string;
		image: {
			src: string;
			alt: string;
		};
		cta: {
			label: string;
			href: string;
		};
	}

	interface ProductHighlightsContent {
		title: string;
		subtitle: string;
		products: ProductCard[];
	}

	let { data } = $props<{ data: ProductHighlightsContent }>();
	type ResolveParam = Parameters<typeof resolve>[0];

	let scroller: HTMLDivElement | null = null;
	const scrollAmount = 340;

	function scroll(direction: 'next' | 'prev') {
		const element = scroller;
		if (!element) return;
		const offset = direction === 'next' ? scrollAmount : -scrollAmount;
		element.scrollBy({ left: offset, behavior: 'smooth' });
	}

	onMount(() => {
		if (scroller) {
			scroller.scrollLeft = 0;
		}
	});
</script>

<SectionShell id="products" className="relative">
	<div class="space-y-8">
		<div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
			<div class="space-y-2">
				<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">
					{data.title}
				</h2>
				<p class="max-w-xl text-lg text-[var(--muted)]">
					{data.subtitle}
				</p>
			</div>
			<div class="flex gap-3">
				<button
					class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white/80 text-[var(--life)] shadow-sm transition hover:border-[var(--life)] hover:text-[var(--life)] focus-visible:outline-[var(--rust)]"
					type="button"
					onclick={() => scroll('prev')}
				>
					<span aria-hidden="true">←</span>
					<span class="sr-only">Previous products</span>
				</button>
				<button
					class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white/80 text-[var(--life)] shadow-sm transition hover:border-[var(--life)] hover:text-[var(--life)] focus-visible:outline-[var(--rust)]"
					type="button"
					onclick={() => scroll('next')}
				>
					<span aria-hidden="true">→</span>
					<span class="sr-only">Next products</span>
				</button>
			</div>
		</div>
		<div class="relative">
			<div
				class="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[var(--bg-base)] via-[var(--bg-base)]/70 to-transparent"
				aria-hidden="true"
			></div>
			<div
				class="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--bg-base)] via-[var(--bg-base)]/70 to-transparent"
				aria-hidden="true"
			></div>
			<div
				bind:this={scroller}
				class="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pt-2 pb-4"
			>
				{#each data.products as product (product.name)}
					<article
						class="flex max-w-[280px] min-w-[260px] flex-1 snap-start flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-white/85 shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-2"
					>
						<div class="relative h-40">
							<img
								class="h-full w-full object-cover"
								src={product.image.src}
								alt={product.image.alt}
								loading="lazy"
								decoding="async"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-[rgba(28,31,27,0.35)] to-transparent"
								aria-hidden="true"
							></div>
						</div>
						<div class="flex flex-1 flex-col gap-3 px-5 py-4">
							<span class="text-xs font-semibold tracking-[0.3em] text-[var(--muted)] uppercase">
								{product.division}
							</span>
							<h3 class="font-display text-xl text-[var(--ink)]">{product.name}</h3>
							<p class="flex-1 text-sm text-[var(--muted)]">{product.short_line}</p>
							<a
								class="inline-flex items-center gap-1 text-sm font-semibold text-[var(--life)]"
								href={resolve(product.cta.href as ResolveParam)}
							>
								{product.cta.label}
								<span aria-hidden="true">→</span>
							</a>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</SectionShell>

<style>
	.no-scrollbar {
		scrollbar-width: none;
	}

	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>

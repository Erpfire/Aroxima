<script lang="ts">
	import SectionShell from './SectionShell.svelte';

	interface ImageContent {
		src: string;
		alt: string;
	}

	interface AboutMetricsContent {
		heading: string;
		body: string;
		metrics: string[];
		image: ImageContent;
	}

	let { data } = $props<{ data: AboutMetricsContent }>();
</script>

<SectionShell id="about" className="overflow-hidden">
	<div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
		<div class="space-y-6">
			<h2 class="group relative font-display text-3xl text-[var(--ink)] sm:text-4xl">
				<span class="relative inline-block">
					<span class="animate-text-shimmer bg-gradient-to-r from-[var(--life)] via-[var(--rust)] to-[var(--life)] bg-[length:200%_auto] bg-clip-text text-transparent">
						{data.heading}
					</span>
					<span class="absolute -bottom-2 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-[var(--life)] to-[var(--rust)] transition-all duration-700 group-hover:w-full" aria-hidden="true"></span>
				</span>
			</h2>
			<p class="text-lg leading-relaxed text-[var(--muted)]">
				{data.body}
			</p>
			<ul class="flex flex-wrap gap-4">
				{#each data.metrics as metric (metric)}
					<li
						class="flex flex-col rounded-[var(--radius)] border border-[var(--border)] bg-white/80 px-5 py-4 text-center shadow-[var(--shadow)] backdrop-blur-sm"
					>
						<span class="text-lg font-semibold text-[var(--ink)]">{metric}</span>
					</li>
				{/each}
			</ul>
		</div>
		<figure class="relative">
			<div
				class="absolute -inset-4 -z-10 rounded-[var(--radius)] bg-[rgba(248,229,178,0.35)] blur-2xl"
				aria-hidden="true"
			></div>
			<img
				class="h-full w-full rounded-[var(--radius)] border border-[var(--border)] object-cover shadow-[var(--shadow)]"
				loading="lazy"
				decoding="async"
				src={data.image.src}
				alt={data.image.alt}
			/>
		</figure>
	</div>
</SectionShell>

<style>
	@keyframes text-shimmer {
		0% {
			background-position: 0% center;
		}
		100% {
			background-position: 200% center;
		}
	}

	.animate-text-shimmer {
		animation: text-shimmer 3s linear infinite;
	}
</style>

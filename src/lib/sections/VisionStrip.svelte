<script lang="ts">
	import SectionShell from './SectionShell.svelte';

	interface VisionContent {
		headline: string;
		body: string;
		image?: {
			src: string;
			alt: string;
		};
	}

	let { data } = $props<{ data: VisionContent }>();
</script>

<SectionShell
	id="vision"
	className="bg-[linear-gradient(135deg,rgba(248,229,178,0.55)_0%,rgba(244,242,236,0.9)_40%,rgba(74,147,92,0.08)_100%)]"
	containerClass="flex flex-col gap-8 lg:flex-row lg:items-center"
	padding="py-24 md:py-32"
>
	<div class="space-y-6 lg:flex-1">
		<p class="text-sm font-semibold tracking-[0.3em] text-[var(--rust)] uppercase">
			A Vision in Motion
		</p>
		<h2 class="font-display text-3xl text-[var(--ink)] sm:text-[40px]">
			{data.headline}
		</h2>
		<p class="max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
			{data.body}
		</p>
	</div>
	{#if data.image}
		<figure class="relative flex-1">
			<div
				class="absolute -inset-6 -z-10 rounded-[var(--radius)] bg-[rgba(74,147,92,0.25)] blur-[120px]"
				aria-hidden="true"
			></div>
			<img
				class="w-full rounded-[var(--radius)] border border-[var(--border)] object-cover shadow-[var(--shadow)]"
				src={data.image.src}
				alt={data.image.alt}
				loading="lazy"
				decoding="async"
			/>
		</figure>
	{/if}
</SectionShell>

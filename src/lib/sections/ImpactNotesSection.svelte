<script lang="ts">
	import SectionShell from './SectionShell.svelte';

	interface ImpactNote {
		quote: string;
		person: string;
		role: string;
	}

	interface ImpactContent {
		title: string;
		subtitle: string;
		notes: ImpactNote[];
	}

	let { data } = $props<{ data: ImpactContent }>();
</script>

<SectionShell id="impact" className="relative">
	<div class="space-y-8">
		<div class="text-center">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{data.title}</h2>
			<p class="mx-auto mt-3 max-w-2xl text-lg text-[var(--muted)]">
				{data.subtitle}
			</p>
		</div>
		<div class="grid gap-6 md:grid-cols-3">
			{#each data.notes as note (note.person)}
				<figure
					class="flex h-full flex-col justify-between rounded-[var(--radius)] border border-[var(--border)] bg-white/80 px-6 py-8 text-left shadow-[var(--shadow)]"
				>
					<blockquote class="text-[var(--muted)]">
						“{note.quote}”
					</blockquote>
					<figcaption class="mt-8">
						<p class="font-display text-lg text-[var(--ink)]">{note.person}</p>
						<p class="text-sm text-[var(--muted)]">{note.role}</p>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</SectionShell>

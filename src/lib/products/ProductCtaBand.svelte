<script lang="ts">
	type ProductCtaProps = {
		title: string;
		body: string;
		primary: { label: string; href: string };
		secondary?: { label: string; href: string };
	};

	const props: ProductCtaProps = $props();
	let { title, body, primary, secondary } = props;
</script>

<section class="relative isolate overflow-hidden py-16">
	<div class="absolute inset-0 -z-20 bg-[rgba(74,147,92,0.12)]"></div>
	<div class="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_30%_40%,rgba(248,229,178,0.45),transparent_70%),radial-gradient(circle_at_80%_20%,rgba(74,147,92,0.3),transparent_70%)]"></div>
	<div class="absolute inset-0 -z-10 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"></div>

	<div class="container mx-auto max-w-[1100px] px-6 md:px-10">
		<div class="relative overflow-hidden rounded-[var(--radius)] border border-[color-mix(in_srgb,var(--life)_40%,var(--border))] bg-white/80 p-8 shadow-[var(--shadow)] backdrop-blur md:p-12">
			<div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
				<div class="space-y-4">
					<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{title}</h2>
					<p class="max-w-2xl text-lg text-[var(--muted)]">{body}</p>
				</div>
				<div class="flex flex-wrap gap-4">
					<a
						class="inline-flex items-center justify-center rounded-full bg-[var(--life)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(74,147,92,0.22)] transition-transform hover:-translate-y-1 hover:bg-[color-mix(in_srgb,var(--life)_88%,white)]"
						href={primary.href}
					>
						{primary.label}
					</a>
					{#if secondary}
						<a
							class="inline-flex items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--life)_35%,var(--border))] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--life)] shadow-sm backdrop-blur transition hover:border-[var(--life)]"
							href={secondary.href}
						>
							{secondary.label}
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

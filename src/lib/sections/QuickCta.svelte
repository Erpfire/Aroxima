<script lang="ts">
	interface QuickCtaData {
		href: string;
		label: string;
	}

	let { data } = $props<{ data: QuickCtaData }>();
</script>

<a
	class="fixed right-6 bottom-6 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--rust)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(168,111,60,0.35)] transition hover:bg-[color-mix(in_srgb,var(--rust)_85%,white)] focus-visible:outline-[var(--life)]"
	href={`mailto:${data.href.replace(/^mailto:/, '')}`}
	aria-label={data.label}
	rel="external"
>
	<span aria-hidden="true">✉</span>
	{data.label}
</a>

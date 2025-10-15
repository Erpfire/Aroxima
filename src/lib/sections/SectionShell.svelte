<script lang="ts">
	let {
		id,
		className = '',
		containerClass = '',
		padding = 'py-20 md:py-28',
		children
	} = $props<{
		id?: string;
		className?: string;
		containerClass?: string;
		padding?: string;
		children?: () => unknown;
	}>();
</script>

<section {id} class={`relative ${padding} ${className}`}>
	<div class={`container mx-auto max-w-[1200px] px-6 md:px-10 ${containerClass}`}>
		{@render children?.()}
	</div>
</section>

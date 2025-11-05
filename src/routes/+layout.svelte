<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import reallogoUrl from '$lib/assets/reallogo2.webp?url';
	import { resolve } from '$app/paths';

	type ResolveParam = Parameters<typeof resolve>[0];
	const navLinks = [
		{ label: 'About', href: resolve('/about' as ResolveParam) },
		{ label: 'Careers', href: resolve('/careers' as ResolveParam) },
		{ label: 'Products', href: resolve('/products' as ResolveParam) },
		{ label: 'Contact', href: resolve('/contact' as ResolveParam) }
	];

	let menuOpen = $state(false);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
	/>
	<meta name="theme-color" content="#f4f2ec" />
</svelte:head>

<header class="sticky top-0 z-50 border-b border-[var(--border)] bg-white/70 backdrop-blur-md">
    <div class="mx-auto flex max-w-[1200px] items-center justify-between px-6 md:px-10">
        <!-- Brand -->
        <a href={resolve('/' as ResolveParam)} class="inline-flex items-center gap-3 py-3" aria-label="Aroxima Lifesciences Pvt Ltd — Growing With Life">
            <img src={reallogoUrl} alt="Aroxima Lifesciences logo" class="h-10 w-auto sm:h-12" />
            <div class="flex flex-col">
                <span class="font-display text-base leading-tight text-[var(--ink)] sm:text-lg md:text-xl lg:text-2xl">Aroxima Lifesciences Pvt Ltd</span>
                <span class="text-xs leading-tight text-[var(--muted)] sm:text-sm md:text-base">Growing With Life</span>
            </div>
        </a>

        <!-- Desktop navigation -->
        <nav aria-label="Primary" class="hidden items-center gap-6 md:flex">
            {#each navLinks as link}
                <a href={link.href} class="text-[var(--ink)] transition-colors hover:text-[var(--life)]">{link.label}</a>
            {/each}
        </nav>

        <!-- Mobile menu button -->
        <button
            class="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-white/70 px-3 py-2 text-sm text-[var(--ink)] shadow-sm backdrop-blur-md md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onclick={() => (menuOpen = !menuOpen)}
        >
            Menu
            <span aria-hidden="true">▾</span>
        </button>
    </div>

    <!-- Mobile navigation panel -->
    {#if menuOpen}
        <nav id="mobile-nav" aria-label="Primary mobile" class="md:hidden">
            <ul role="list" class="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 pb-3 md:px-10">
                {#each navLinks as link}
                    <li>
                        <a
                            href={link.href}
                            class="block rounded-md px-3 py-2 text-[var(--ink)] hover:bg-[rgba(74,147,92,0.08)] hover:text-[var(--life)]"
                            onclick={() => (menuOpen = false)}
                        >
                            {link.label}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    {/if}
</header>

{@render children?.()}

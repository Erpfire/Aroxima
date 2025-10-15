<script lang="ts">
  interface HeroData {
    eyebrow?: string;
    title: string;
    lead: string;
    image?: { src: string; alt: string };
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  }

  let { data } = $props<{ data: HeroData }>();
</script>

<section class="relative isolate overflow-hidden py-16 md:py-24">
  <!-- softly themed background -->
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(74,147,92,0.12),transparent),radial-gradient(900px_500px_at_90%_120%,rgba(168,111,60,0.12),transparent)]"></div>
  <div class="absolute inset-0 -z-20 bg-[rgba(255,255,255,0.6)] backdrop-blur-sm"></div>

  <div class="container mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
    <div class="space-y-5">
      {#if data.eyebrow}
        <p class="inline-flex items-center gap-2 rounded-full bg-[rgba(74,147,92,0.12)] px-4 py-1.5 text-xs font-semibold tracking-widest text-[var(--life)] uppercase">
          <span class="h-1.5 w-1.5 rounded-full bg-[var(--life)]"></span>{data.eyebrow}
        </p>
      {/if}
      <h1 class="font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl">{data.title}</h1>
      <p class="max-w-xl text-[1.05rem] leading-relaxed text-[var(--muted)]">{data.lead}</p>

      {#if data.primary || data.secondary}
        <div class="flex flex-wrap gap-3 pt-1">
          {#if data.primary}
            <a href={data.primary.href} class="inline-flex items-center rounded-full bg-[var(--life)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(74,147,92,0.2)] transition-transform hover:-translate-y-0.5">
              {data.primary.label}
            </a>
          {/if}
          {#if data.secondary}
            <a href={data.secondary.href} class="inline-flex items-center rounded-full border border-[color-mix(in_srgb,var(--life)_40%,var(--border))] bg-white/80 px-5 py-2.5 text-sm font-semibold text-[var(--life)] shadow-sm backdrop-blur">
              {data.secondary.label}
            </a>
          {/if}
        </div>
      {/if}
    </div>

    <div class="relative">
      <div class="pointer-events-none absolute -inset-3 -z-10 rounded-[28px] bg-[conic-gradient(from_120deg_at_60%_40%,rgba(248,229,178,0.28),rgba(74,147,92,0.2),transparent_70%)] blur-xl"></div>
      <div class="rounded-[20px] border border-[var(--border)] bg-white/70 p-3 shadow-[var(--shadow)] backdrop-blur">
        {#if data.image}
          <img src={data.image.src} alt={data.image.alt} class="h-auto w-full rounded-[14px] object-cover" />
        {/if}
      </div>
    </div>
  </div>
</section>


<script lang="ts">
  interface StoryData {
    title: string;
    paragraphs: string[];
    image?: { src: string; alt: string };
    highlight?: string;
  }

  let { data } = $props<{ data: StoryData }>();
</script>

<section class="relative py-14 md:py-20">
  <div class="container mx-auto max-w-[1200px] px-6 md:px-10">
    <div class="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.2fr_1fr]">
      <div class="space-y-5">
        <h2 class="font-display text-3xl text-[var(--ink)] md:text-4xl">{data.title}</h2>
        <div class="prose prose-neutral max-w-none text-[var(--muted)] prose-p:leading-relaxed">
          {#each data.paragraphs as p}
            <p>{p}</p>
          {/each}
        </div>
        {#if data.highlight}
          <div class="mt-4 rounded-xl border border-[var(--border)] bg-[rgba(248,229,178,0.2)] p-4 text-[var(--ink)]">
            <span class="font-semibold">Our commitment:</span>
            <span class="ml-2">{data.highlight}</span>
          </div>
        {/if}
      </div>

      {#if data.image}
        <figure class="relative">
          <div class="pointer-events-none absolute -inset-4 -z-10 rounded-[28px] bg-[radial-gradient(400px_200px_at_20%_0%,rgba(74,147,92,0.12),transparent),radial-gradient(360px_200px_at_100%_100%,rgba(168,111,60,0.12),transparent)]"></div>
          <img src={data.image.src} alt={data.image.alt} class="w-full rounded-[18px] border border-[var(--border)] bg-white/70 shadow-[var(--shadow)] object-cover" />
        </figure>
      {/if}
    </div>
  </div>
</section>


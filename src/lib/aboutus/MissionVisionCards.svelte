<script lang="ts">
  type Card = { title: string; body: string; tone?: 'life' | 'rust' | 'sun'; };
  let { cards } = $props<{ cards: Card[] }>();
</script>

<section class="py-14 md:py-20">
  <div class="container mx-auto max-w-[1200px] px-6 md:px-10">
    <div class="mb-8">
      <h2 class="font-display text-3xl text-[var(--ink)] md:text-4xl">Vision & Mission</h2>
      <p class="mt-2 max-w-2xl text-[var(--muted)]">A clear direction that keeps our teams focused on long‑term health outcomes and everyday reliability.</p>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      {#each cards as c, i}
        <article class="relative overflow-hidden rounded-[18px] border border-[var(--border)] bg-white/70 p-6 shadow-[var(--shadow)] backdrop-blur">
          <div class="pointer-events-none absolute -inset-1 -z-10 opacity-70 {c.tone === 'life' ? 'bg-[radial-gradient(600px_300px_at_-10%_-20%,rgba(74,147,92,0.18),transparent)]' : c.tone === 'rust' ? 'bg-[radial-gradient(600px_300px_at_110%_120%,rgba(168,111,60,0.18),transparent)]' : 'bg-[radial-gradient(500px_260px_at_50%_0%,rgba(248,229,178,0.24),transparent)]'}"></div>
          <div class="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white/80 text-sm text-[var(--ink)]">{i + 1}</div>
          <h3 class="font-display text-2xl text-[var(--ink)]">{c.title}</h3>
          <p class="mt-2 text-[var(--muted)]">{c.body}</p>
        </article>
      {/each}
    </div>
  </div>
  </section>


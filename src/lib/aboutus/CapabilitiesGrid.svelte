<script lang="ts">
  type Capability = { title: string; body: string; icon?: string };
  let { items } = $props<{ items: Capability[] }>();
</script>

<section class="py-14 md:py-20">
  <div class="container mx-auto max-w-[1200px] px-6 md:px-10">
    <div class="mb-8">
      <h2 class="font-display text-3xl text-[var(--ink)] md:text-4xl">Capabilities</h2>
      <p class="mt-2 max-w-2xl text-[var(--muted)]">Where science meets dependable operations — from formulation to last‑mile delivery.</p>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {#each items as cap}
        <article class="rounded-[18px] border border-[var(--border)] bg-white/70 p-5 shadow-[var(--shadow)] backdrop-blur">
          {#if cap.icon}
            <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(248,229,178,0.25)] text-lg">{cap.icon}</div>
          {/if}
          <h3 class="font-display text-xl text-[var(--ink)]">{cap.title}</h3>
          <p class="mt-2 text-[var(--muted)]">{cap.body}</p>
        </article>
      {/each}
    </div>
  </div>
</section>


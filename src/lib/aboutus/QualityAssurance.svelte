<script lang="ts">
  interface QAData {
    title: string;
    bullets: string[];
    note?: string;
  }

  let { data } = $props<{ data: QAData }>();
</script>

<section class="py-14 md:py-20">
  <div class="container mx-auto max-w-[1200px] px-6 md:px-10">
    <div class="rounded-[18px] border border-[var(--border)] bg-white/70 p-6 shadow-[var(--shadow)] backdrop-blur">
      <h2 class="font-display text-3xl text-[var(--ink)] md:text-4xl">{data.title}</h2>
      <ul class="mt-5 grid grid-cols-1 gap-3 text-[var(--muted)] md:grid-cols-2">
        {#each data.bullets as item}
          <li class="flex items-start gap-3 rounded-md border border-[var(--border)] bg-[rgba(74,147,92,0.06)] p-3">
            <span class="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--life)] shadow-[0_0_10px_rgba(74,147,92,0.5)]"></span>
            <span>{item}</span>
          </li>
        {/each}
      </ul>

      {#if data.note}
        <p class="mt-4 text-sm text-[var(--muted)]">{data.note}</p>
      {/if}
    </div>
  </div>
</section>


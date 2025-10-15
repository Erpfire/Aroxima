<script lang="ts">
  let { items } = $props<{ items: string[] }>();
</script>

<section class="py-10 md:py-14">
  <div class="container mx-auto max-w-[1200px] px-6 md:px-10">
    <div class="rounded-[18px] border border-[var(--border)] bg-white/60 p-5 shadow-[var(--shadow)] backdrop-blur">
      <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {#each items as text}
          <span class="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(74,147,92,0.06)] px-4 py-2 text-sm text-[var(--ink)]">
            <span class="h-2 w-2 rounded-full bg-[var(--rust)]"></span>{text}
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>


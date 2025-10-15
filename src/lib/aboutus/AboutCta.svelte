<script lang="ts">
  let { href, label, sub } = $props<{ href: string; label: string; sub?: string }>();
</script>

<section class="py-8 md:py-12">
  <div class="container mx-auto max-w-[1200px] px-6 md:px-10">
    <div class="flex flex-col items-center justify-between gap-4 rounded-[18px] border border-[var(--border)] bg-[linear-gradient(90deg,rgba(248,229,178,0.18),rgba(74,147,92,0.12))] p-6 text-center shadow-[var(--shadow)] sm:flex-row sm:text-left">
      <div>
        <h3 class="font-display text-2xl text-[var(--ink)]">Ready to connect?</h3>
        {#if sub}
          <p class="mt-1 text-[var(--muted)]">{sub}</p>
        {/if}
      </div>
      <a href={href} class="inline-flex items-center rounded-full bg-[var(--life)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(74,147,92,0.2)]">{label}</a>
    </div>
  </div>
</section>


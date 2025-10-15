<script lang="ts">
	import SectionShell from './SectionShell.svelte';

	interface OfficeLocation {
		title: string;
		lines: string[];
	}

	interface ContactChannels {
		phone: string;
		email: string;
	}

	interface ContactContent {
		heading: string;
		body: string;
		offices: {
			corporate: OfficeLocation;
			registered: OfficeLocation;
		};
		contact: ContactChannels;
	}

	type SubmissionState = 'idle' | 'success' | 'error';

	let { data } = $props<{ data: ContactContent }>();

	let form = $state({
		name: '',
		email: '',
		message: ''
	});

	let errors = $state<{
		name?: string;
		email?: string;
		message?: string;
	}>({});

	let submission = $state<SubmissionState>('idle');
	const offices: OfficeLocation[] = [data.offices.corporate, data.offices.registered];

	function validate(): boolean {
		const nextErrors = {
			name: form.name.trim() ? undefined : 'Name is required.',
			email: /\S+@\S+\.\S+/.test(form.email) ? undefined : 'Provide a valid email address.',
			message:
				form.message.trim().length >= 15
					? undefined
					: 'Share a short note (at least 15 characters).'
		};

		errors.name = nextErrors.name;
		errors.email = nextErrors.email;
		errors.message = nextErrors.message;

		return !nextErrors.name && !nextErrors.email && !nextErrors.message;
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		if (!validate()) {
			submission = 'error';
			return;
		}

		submission = 'success';
		form.name = '';
		form.email = '';
		form.message = '';
	}
</script>

<SectionShell id="contact" className="relative">
	<div class="space-y-10">
		<div class="text-center">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{data.heading}</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
				{data.body}
			</p>
		</div>
		<div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
			<div class="space-y-6">
				<div class="grid gap-4 sm:grid-cols-2">
					{#each offices as office (office.title)}
						<section
							class="h-full rounded-[var(--radius)] border border-[var(--border)] bg-white/80 p-6 shadow-[var(--shadow)]"
						>
							<h3 class="font-display text-xl text-[var(--ink)]">{office.title}</h3>
							<ul class="mt-3 space-y-1 text-sm text-[var(--muted)]">
								{#each office.lines as line, index (index)}
									<li>{line}</li>
								{/each}
							</ul>
						</section>
					{/each}
				</div>
				<div
					class="flex flex-wrap gap-6 rounded-[var(--radius)] border border-[var(--border)] bg-white/70 px-6 py-5 text-sm text-[var(--muted)] shadow-[var(--shadow)]"
				>
					<a
						class="inline-flex items-center gap-2 font-semibold text-[var(--life)]"
						href={`tel:${data.contact.phone}`}
					>
						<span aria-hidden="true">☎</span>
						{data.contact.phone}
					</a>
					<a
						class="inline-flex items-center gap-2 font-semibold text-[var(--life)]"
						href={`mailto:${data.contact.email}`}
					>
						<span aria-hidden="true">✉</span>
						{data.contact.email}
					</a>
				</div>
			</div>
			<form
				class="space-y-4 rounded-[var(--radius)] border border-[var(--border)] bg-white/90 p-6 shadow-[var(--shadow)] backdrop-blur-sm"
				onsubmit={handleSubmit}
				novalidate
			>
				<div>
					<label class="block text-sm font-semibold text-[var(--ink)]" for="contact-name"
						>Name</label
					>
					<input
						id="contact-name"
						class="mt-2 w-full rounded-[var(--radius)] border border-[var(--border)] bg-white/80 px-4 py-3 text-[var(--ink)] shadow-sm transition focus:border-[var(--life)] focus:ring-0"
						name="name"
						type="text"
						placeholder="Your name"
						bind:value={form.name}
					/>
					{#if errors.name}
						<p class="mt-1 text-sm text-[var(--rust)]">{errors.name}</p>
					{/if}
				</div>
				<div>
					<label class="block text-sm font-semibold text-[var(--ink)]" for="contact-email"
						>Email</label
					>
					<input
						id="contact-email"
						class="mt-2 w-full rounded-[var(--radius)] border border-[var(--border)] bg-white/80 px-4 py-3 text-[var(--ink)] shadow-sm transition focus:border-[var(--life)] focus:ring-0"
						name="email"
						type="email"
						placeholder="name@example.com"
						bind:value={form.email}
						required
					/>
					{#if errors.email}
						<p class="mt-1 text-sm text-[var(--rust)]">{errors.email}</p>
					{/if}
				</div>
				<div>
					<label class="block text-sm font-semibold text-[var(--ink)]" for="contact-message"
						>Message</label
					>
					<textarea
						id="contact-message"
						class="mt-2 h-32 w-full rounded-[var(--radius)] border border-[var(--border)] bg-white/80 px-4 py-3 text-[var(--ink)] shadow-sm transition focus:border-[var(--life)] focus:ring-0"
						name="message"
						placeholder="Tell us a little about your needs…"
						bind:value={form.message}
						minlength="15"
						required
					></textarea>
					{#if errors.message}
						<p class="mt-1 text-sm text-[var(--rust)]">{errors.message}</p>
					{/if}
				</div>
				<button
					class="w-full rounded-full bg-[var(--life)] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_20px_rgba(74,147,92,0.2)] transition hover:bg-[color-mix(in_srgb,var(--life)_88%,white)] focus-visible:outline-[var(--rust)]"
					type="submit"
				>
					Send Message
				</button>
				<div class="min-h-[1.25rem] text-sm" aria-live="polite">
					{#if submission === 'success'}
						<p class="text-[var(--life)]">Thanks—our team will reach out shortly.</p>
					{:else if submission === 'error'}
						<p class="text-[var(--rust)]">Check the highlighted fields before submitting.</p>
					{/if}
				</div>
			</form>
		</div>
	</div>
</SectionShell>

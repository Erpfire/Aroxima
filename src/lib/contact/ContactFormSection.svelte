<script lang="ts">
	import SectionShell from '$lib/sections/SectionShell.svelte';

	type ContactFormSectionProps = {
		title: string;
		intro: string;
		note?: string;
	};

	const props: ContactFormSectionProps = $props();
	let { title, intro, note } = props;

	type FormState = {
		name: string;
		email: string;
		phone: string;
		company: string;
		message: string;
	};

	let form = $state<FormState>({
		name: '',
		email: '',
		phone: '',
		company: '',
		message: ''
	});

	let errors = $state<Record<keyof FormState, string>>({
		name: '',
		email: '',
		phone: '',
		company: '',
		message: ''
	});

	let status = $state<'idle' | 'success'>('idle');

	function validate() {
		let valid = true;
		const nextErrors: Record<keyof FormState, string> = {
			name: '',
			email: '',
			phone: '',
			company: '',
			message: ''
		};

		if (!form.name.trim()) {
			nextErrors.name = 'Please share your full name.';
			valid = false;
		}

		const trimmedEmail = form.email.trim();
		if (!trimmedEmail) {
			nextErrors.email = 'Email is required.';
			valid = false;
		} else {
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailPattern.test(trimmedEmail)) {
				nextErrors.email = 'Enter a valid email address.';
				valid = false;
			}
		}

		if (!form.message.trim() || form.message.trim().length < 15) {
			nextErrors.message = 'Please provide at least 15 characters so we can assist accurately.';
			valid = false;
		}

		errors = nextErrors;
		return valid;
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		status = 'idle';
		if (!validate()) {
			return;
		}
		status = 'success';
		form = {
			name: '',
			email: '',
			phone: '',
			company: '',
			message: ''
		};
	}
</script>

<SectionShell id="contact-form">
	<div class="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
		<div class="space-y-5">
			<h2 class="font-display text-3xl text-[var(--ink)] sm:text-4xl">{title}</h2>
			<p class="text-lg text-[var(--muted)]">{intro}</p>
			{#if note}
				<p class="rounded-[var(--radius)] border border-[var(--border)] bg-white/70 p-4 text-sm text-[var(--muted)] backdrop-blur">
					{note}
				</p>
			{/if}
			<ul class="space-y-2 text-sm text-[var(--muted)]" role="list">
				<li>Office hours: Monday to Saturday, 9:00 AM – 6:00 PM IST</li>
				<li>For regulatory statements or tender participation, attach documents in your email reply.</li>
				<li>We aim to respond within one business day for most requests.</li>
			</ul>
		</div>
		<form
			class="space-y-6 rounded-[var(--radius)] border border-[var(--border)] bg-white/85 p-8 shadow-[var(--shadow)] backdrop-blur"
			aria-describedby="contact-form-note"
			onsubmit={handleSubmit}
		>
			{#if status === 'success'}
				<div
					class="rounded-[var(--radius)] border border-[color-mix(in_srgb,var(--life)_50%,var(--border))] bg-[rgba(74,147,92,0.12)] px-4 py-3 text-sm text-[var(--life)]"
					role="status"
				>
					Thank you—we have received your message. Our team will reach out shortly.
				</div>
			{/if}

			<div class="grid gap-4 md:grid-cols-2">
				<label class="flex flex-col gap-2 text-sm text-[var(--muted)]">
					<span class="font-semibold text-[var(--ink)]">Name *</span>
					<input
						class="h-11 rounded-[var(--radius)] border border-[var(--border)] bg-white/95 px-4 text-[var(--ink)] shadow-sm focus:border-[var(--life)] focus:outline-none focus:ring-2 focus:ring-[rgba(74,147,92,0.2)]"
						type="text"
						name="name"
						value={form.name}
						oninput={(event) => (form.name = event.currentTarget.value)}
						aria-invalid={errors.name ? 'true' : 'false'}
						aria-describedby={errors.name ? 'contact-error-name' : undefined}
						required
					/>
					{#if errors.name}
						<span id="contact-error-name" class="text-xs text-[#b83a3a]">{errors.name}</span>
					{/if}
				</label>

				<label class="flex flex-col gap-2 text-sm text-[var(--muted)]">
					<span class="font-semibold text-[var(--ink)]">Email *</span>
					<input
						class="h-11 rounded-[var(--radius)] border border-[var(--border)] bg-white/95 px-4 text-[var(--ink)] shadow-sm focus:border-[var(--life)] focus:outline-none focus:ring-2 focus:ring-[rgba(74,147,92,0.2)]"
						type="email"
						name="email"
						value={form.email}
						oninput={(event) => (form.email = event.currentTarget.value)}
						aria-invalid={errors.email ? 'true' : 'false'}
						aria-describedby={errors.email ? 'contact-error-email' : undefined}
						required
					/>
					{#if errors.email}
						<span id="contact-error-email" class="text-xs text-[#b83a3a]">{errors.email}</span>
					{/if}
				</label>
			</div>

			<div class="grid gap-4 md:grid-cols-2">
				<label class="flex flex-col gap-2 text-sm text-[var(--muted)]">
					<span class="font-semibold text-[var(--ink)]">Phone (optional)</span>
					<input
						class="h-11 rounded-[var(--radius)] border border-[var(--border)] bg-white/95 px-4 text-[var(--ink)] shadow-sm focus:border-[var(--life)] focus:outline-none focus:ring-2 focus:ring-[rgba(74,147,92,0.2)]"
						type="tel"
						name="phone"
						value={form.phone}
						oninput={(event) => (form.phone = event.currentTarget.value)}
					/>
				</label>

				<label class="flex flex-col gap-2 text-sm text-[var(--muted)]">
					<span class="font-semibold text-[var(--ink)]">Company / Institution</span>
					<input
						class="h-11 rounded-[var(--radius)] border border-[var(--border)] bg-white/95 px-4 text-[var(--ink)] shadow-sm focus:border-[var(--life)] focus:outline-none focus:ring-2 focus:ring-[rgba(74,147,92,0.2)]"
						type="text"
						name="company"
						value={form.company}
						oninput={(event) => (form.company = event.currentTarget.value)}
					/>
				</label>
			</div>

			<label class="flex flex-col gap-2 text-sm text-[var(--muted)]">
				<span class="font-semibold text-[var(--ink)]">How can we help? *</span>
				<textarea
					class="min-h-[140px] rounded-[var(--radius)] border border-[var(--border)] bg-white/95 px-4 py-3 text-[var(--ink)] shadow-sm focus:border-[var(--life)] focus:outline-none focus:ring-2 focus:ring-[rgba(74,147,92,0.2)]"
					name="message"
					value={form.message}
					oninput={(event) => (form.message = event.currentTarget.value)}
					aria-invalid={errors.message ? 'true' : 'false'}
					aria-describedby={errors.message ? 'contact-error-message' : undefined}
					required
				></textarea>
				{#if errors.message}
					<span id="contact-error-message" class="text-xs text-[#b83a3a]">{errors.message}</span>
				{/if}
			</label>

			<button
				class="inline-flex w-full items-center justify-center rounded-full bg-[var(--life)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(74,147,92,0.2)] transition-transform hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--life)_90%,white)] focus-visible:outline-[var(--rust)]"
				type="submit"
			>
				Send message
			</button>
		</form>
	</div>
</SectionShell>

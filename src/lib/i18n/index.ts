import { writable, derived } from 'svelte/store';
import { translations, type Locale, type TranslationKey } from './translations';

export { type Locale, type TranslationKey };

const DEFAULT_LOCALE: Locale = 'fr';
const STORAGE_KEY = 'preferred_locale';

function createLocaleStore() {
	const { subscribe, set, update } = writable<Locale>(DEFAULT_LOCALE);

	return {
		subscribe,
		set: (newLocale: Locale) => {
			if (typeof window !== 'undefined') {
				try {
					localStorage.setItem(STORAGE_KEY, newLocale);
					document.documentElement.lang = newLocale;
				} catch (e) {
					// Local storage might be blocked in private mode
				}
			}
			set(newLocale);
		},
		toggle: () => {
			update((current) => {
				const next: Locale = current === 'fr' ? 'en' : 'fr';
				if (typeof window !== 'undefined') {
					try {
						localStorage.setItem(STORAGE_KEY, next);
						document.documentElement.lang = next;
					} catch (e) {
						// Ignore
					}
				}
				return next;
			});
		},
		init: () => {
			if (typeof window !== 'undefined') {
				try {
					const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
					if (saved === 'fr' || saved === 'en') {
						set(saved);
						document.documentElement.lang = saved;
						return;
					}
				} catch (e) {
					// Ignore
				}
				document.documentElement.lang = DEFAULT_LOCALE;
			}
		}
	};
}

export const locale = createLocaleStore();

export function setLocale(newLocale: Locale) {
	locale.set(newLocale);
}

export function toggleLocale() {
	locale.toggle();
}

export const t = derived(locale, ($locale) => {
	return (key: TranslationKey, params?: Record<string, string | number>): string => {
		const dict = translations[$locale] || translations[DEFAULT_LOCALE];
		let text: string = dict[key] || translations.en[key] || key;
		if (params) {
			for (const [k, v] of Object.entries(params)) {
				text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
			}
		}
		return text;
	};
});

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { runInNewContext } from 'node:vm';

// Exercise the actual early script, including redirects, without a browser dependency.
const layout = readFileSync(new URL('../src/layouts/Layout.astro', import.meta.url), 'utf8');
const script = layout.match(/<script id="language-preference" is:inline>([\s\S]*?)<\/script>/)[1];

function visit({ path = '/', languages = ['en-US'], language = 'en-US', saved, storageBlocked = false } = {}) {
	const writes = [];
	const redirects = [];
	runInNewContext(script, {
		URL,
		navigator: { languages, language },
		window: { location: { href: `https://henryxaz.github.io${path}`, replace: (url) => redirects.push(url) } },
		localStorage: {
			getItem(key) {
				assert.equal(key, 'portfolio-language');
				if (storageBlocked) throw new Error('Storage unavailable');
				return saved ?? null;
			},
			setItem(key, value) {
				if (storageBlocked) throw new Error('Storage unavailable');
				writes.push([key, value]);
			},
		},
	});
	return { redirects, writes };
}

test('Spanish regional preferences select the Spanish page', () => {
	for (const locale of ['es', 'es-GT', 'es-MX', 'es-ES', 'ES-ar']) {
		assert.deepEqual(visit({ languages: [locale] }).redirects, ['https://henryxaz.github.io/es/']);
	}
});

test('uses the first supported browser preference, with English as the final fallback', () => {
	assert.deepEqual(visit({ languages: ['fr-FR', 'es-GT', 'en-US'] }).redirects, ['https://henryxaz.github.io/es/']);
	assert.deepEqual(visit({ languages: ['en-US', 'es-GT'] }).redirects, []);
	assert.deepEqual(visit({ languages: ['fr-FR', 'de-DE'] }).redirects, []);
	assert.deepEqual(visit({ languages: [] }).redirects, []);
	assert.deepEqual(visit({ languages: undefined, language: undefined }).redirects, []);
});

test('falls back to navigator.language when the preference list is unavailable or empty', () => {
	assert.deepEqual(visit({ languages: null, language: 'es-GT' }).redirects, ['https://henryxaz.github.io/es/']);
	assert.deepEqual(visit({ languages: [], language: 'es-MX' }).redirects, ['https://henryxaz.github.io/es/']);
});

test('manual language preferences take precedence over browser preferences', () => {
	assert.deepEqual(visit({ saved: 'en', languages: ['es-GT'] }).redirects, []);
	assert.deepEqual(visit({ saved: 'es', languages: ['en-US'] }).redirects, ['https://henryxaz.github.io/es/']);
	assert.deepEqual(visit({ saved: 'invalid', languages: ['es-GT'] }).redirects, ['https://henryxaz.github.io/es/']);
});

test('direct Spanish URLs remain Spanish even with a saved English preference', () => {
	for (const path of ['/es/', '/es', '/es/?source=linkedin#contact']) {
		assert.deepEqual(visit({ path, saved: 'en' }).redirects, []);
	}
});

test('explicit switcher URLs persist the choice and work without storage', () => {
	assert.deepEqual(visit({ path: '/?lang=en', languages: ['es-GT'], saved: 'es' }), {
		redirects: [], writes: [['portfolio-language', 'en']],
	});
	assert.deepEqual(visit({ path: '/es/?lang=es', saved: 'en' }), {
		redirects: [], writes: [['portfolio-language', 'es']],
	});
	assert.deepEqual(visit({ path: '/?lang=en', languages: ['es-GT'], storageBlocked: true }).redirects, []);
	assert.deepEqual(visit({ path: '/es/?lang=es', storageBlocked: true }).redirects, []);
});

test('blocked storage does not prevent detection or cause redirect loops', () => {
	assert.deepEqual(visit({ languages: ['es-GT'], storageBlocked: true }).redirects, ['https://henryxaz.github.io/es/']);
	assert.deepEqual(visit({ path: '/es/', languages: ['es-GT'], storageBlocked: true }).redirects, []);
});

test('redirects preserve query parameters and section anchors', () => {
	assert.deepEqual(visit({ path: '/?source=linkedin#contact', languages: ['es-GT'] }).redirects,
		['https://henryxaz.github.io/es/?source=linkedin#contact']);
	assert.deepEqual(visit({ path: '/es/?lang=en#work' }), {
		redirects: ['https://henryxaz.github.io/?lang=en#work'], writes: [['portfolio-language', 'en']],
	});
});

test('invalid language parameters cannot set arbitrary redirect targets', () => {
	assert.deepEqual(visit({ path: '/?lang=https://example.com', languages: ['en'] }), { redirects: [], writes: [] });
});

test('404 pages and other routes never trigger language redirects', () => {
	for (const path of ['/404.html', '/missing/', '/missing/?lang=es']) {
		assert.deepEqual(visit({ path, languages: ['es-GT'] }), { redirects: [], writes: [] });
	}
});

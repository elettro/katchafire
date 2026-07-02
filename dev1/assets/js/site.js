// Katchafire static prototype JavaScript. No external libraries.
const videoData = [
  { title: 'Colour Me Life With Kolohe Kai', caption: 'FPO official video entry pending final YouTube URL.', youtubeUrl: 'https://www.youtube.com/', thumbnailUrl: '' },
  { title: 'Revival 2.0 Live Session', caption: 'FPO live performance placeholder.', youtubeUrl: 'https://www.youtube.com/', thumbnailUrl: '' },
  { title: 'Katchafire Interview', caption: 'FPO interview placeholder for future Google Sheet data.', youtubeUrl: 'https://www.youtube.com/', thumbnailUrl: '' },
  { title: 'Global Roots Reggae', caption: 'FPO visual release placeholder.', youtubeUrl: 'https://www.youtube.com/', thumbnailUrl: '' }
];

const mediaData = [
  { location: 'scenestr, AUSTRALIA', caption: 'NZ reggae icons Katchafire launch “Revival 2.0,” reimagining their debut album 25 years on.', readMoreUrl: '#', graphicUrl: '' },
  { location: 'scenestr, AUSTRALIA', caption: 'Reggae icons Katchafire return for their annual pilgrimage to Australia with a 12-date tour this November.', readMoreUrl: '#', graphicUrl: '' },
  { location: 'ROADIE MUSIC, BRAZIL', caption: 'Katchafire revives their iconic single in a project that seeks to breathe new life into Revival, their debut album. The song is born through a sharp vocal harmony promoted by a union of falsetto voices.', readMoreUrl: '#', graphicUrl: '' },
  { location: 'LA CAVERNA, MEXICO', caption: 'Desde Hamilton, Nueva Zelanda, Katchafire vuelve a sorprender con la nueva versión de su emblemático sencillo “Seriously”. Esta “Revived Version” es un adelanto del ambicioso proyecto Reviving Revival.', readMoreUrl: '#', graphicUrl: '' },
  { location: 'BEACH HOUSE, USA', caption: 'Katchafire’s “Seriously (Revived Version)” is pure reggae magic and I can’t get enough of it. The remixed and remastered version breathes new life into a classic.', readMoreUrl: '#', graphicUrl: '' },
  { location: 'GOOD MUSIC RADAR, NETHERLANDS', caption: 'Katchafire, the iconic Māori reggae band from Kirikiriroa (Hamilton, New Zealand).', readMoreUrl: '#', graphicUrl: '' },
  { location: 'IGGY MAGAZINE, FRANCE', caption: 'Le groupe reggae emblématique Katchafire n’a pas fini de marquer l’histoire musicale. Vingt ans après la sortie de leur album Revival, ils offrent à leurs fans une version réactualisée de « Seriously »', readMoreUrl: '#', graphicUrl: '' },
  { location: 'INDIE OCLOCK, BRAZIL', caption: 'Katchafire acaba de lançar seu novo e poderoso single, uma faixa de raggae e dancehall que nos envolve, nos revigora e nos faz celebrar, nós estamos apaixonados por essa canção.', readMoreUrl: '#', graphicUrl: '' }
];

const newsData = [
  { imageUrl: '', title: 'Revival 2.0 Guest Edition Album', caption: 'Official campaign placeholder for Revival 2.0 Guest Edition Album updates.', buttonText: 'READ MORE', buttonUrl: '#' },
  { imageUrl: '', title: 'Colour Me Life With Kolohe Kai', caption: 'Pre-save and release information placeholder for the Kolohe Kai collaboration.', buttonText: 'PRE-SAVE', buttonUrl: '#' },
  { imageUrl: '', title: 'Global Merch Store Has Moved', caption: 'Shipping available worldwide through the global Katchafire merch store.', buttonText: 'SHOP MERCH', buttonUrl: 'https://promomerch.co.nz/product-category/artists/katchafire/' },
  { imageUrl: '', title: 'Annual Australia Tour', caption: 'Tour announcement placeholder for upcoming Australia dates.', buttonText: 'DETAILS SOON', buttonUrl: '#' },
  { imageUrl: '', title: 'New Videos From Katchafire', caption: 'Video release placeholder for official videos and live performances.', buttonText: 'WATCH VIDEOS', buttonUrl: '../videos/' },
  { imageUrl: '', title: 'Join The Fyah Family', caption: 'Subscribe for music, tour dates, merch drops, videos, and official updates.', buttonText: 'JOIN NOW', buttonUrl: '../mail-list/' }
];

const quoteData = [
  { quote: '“...One of the most cherished, original live reggae bands in the world.”', source: '— The Brag mag' },
  { quote: '“They transformed the place into a freedom-founded club where the only rule was to enjoy the music. No external force could stop the fire!”', source: '— KDHX 88.1 USA' },
  { quote: '“Katchafire just keep coming up with goods. Their songwriting ability over the years has become second-to-none and time has allowed them to develop older songs to a point of perfection.”', source: '— ARTSHUB Australia' },
  { quote: '“The crowd reaction indicated that almost every song played was a crowd favourite in itself.”', source: '— FASTERLOUDER Australia' }
];

function fpo(label, className = '') { return `<div class="fpo ${className}" role="img" aria-label="${label}">${label}</div>`; }
function cardLink(url, text) { const external = url.startsWith('http'); return `<a class="btn" href="${url}"${external ? ' target="_blank" rel="noopener"' : ''}>${text}</a>`; }
function renderVideos() { const grid = document.querySelector('[data-videos-grid]'); if (!grid) return; grid.innerHTML = videoData.map(v => `<article class="media-card">${v.thumbnailUrl ? `<img src="${v.thumbnailUrl}" alt="Thumbnail for ${v.title}">` : fpo('FPO VIDEO', 'fpo-video')}<h2>${v.title}</h2><p>${v.caption}</p>${cardLink(v.youtubeUrl, 'WATCH')}</article>`).join(''); }
function renderMedia() { const grid = document.querySelector('[data-media-grid]'); if (!grid) return; grid.innerHTML = mediaData.map(m => `<article class="media-card">${m.graphicUrl ? `<img src="${m.graphicUrl}" alt="Press graphic for ${m.location}">` : fpo('FPO IMAGE')}<h2>${m.location}</h2><p>${m.caption}</p>${cardLink(m.readMoreUrl, 'READ MORE')}</article>`).join(''); }
function renderNews() { const grid = document.querySelector('[data-news-grid]'); if (!grid) return; grid.innerHTML = newsData.map(n => `<article class="media-card">${n.imageUrl ? `<img src="${n.imageUrl}" alt="${n.title}">` : fpo('FPO IMAGE')}<h2>${n.title}</h2><p>${n.caption}</p>${cardLink(n.buttonUrl, n.buttonText)}</article>`).join(''); }
function rotateQuotes() { const el = document.querySelector('[data-quote-carousel]'); if (!el) return; let i = 0; setInterval(() => { i = (i + 1) % quoteData.length; el.innerHTML = `${quoteData[i].quote}<cite>${quoteData[i].source}</cite>`; }, 4500); }
function setupNav() { const btn = document.querySelector('.nav-toggle'); const nav = document.querySelector('.nav-links'); if (!btn || !nav) return; btn.addEventListener('click', () => { const open = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', String(open)); btn.textContent = open ? '×' : '☰'; }); }
document.addEventListener('DOMContentLoaded', () => { setupNav(); renderVideos(); renderMedia(); renderNews(); rotateQuotes(); });

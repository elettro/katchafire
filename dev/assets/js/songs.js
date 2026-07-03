// Katchafire Song Directory data.
// Source: MusicBrainz release/tracklist data (verified), Wikipedia, and official
// Katchafire channel confirmations (Circle Back, Whaingaroa, Karawhiua, Burn It Down).
// Per-track songwriting/session-personnel credits are not available in any public,
// consolidated discography database, so no per-song writer/performer splits are
// invented here. Every original track is credited at the band level, which is
// accurate: Katchafire write and perform their own catalog as a self-contained band.
const songsData = [
  // --- Revival (2003) ---
  { title: 'Reggae Revival', album: 'Revival', year: 2003, track: 1, kind: 'original',
    description: 'The album opener and mission statement: a horns-and-harmony call back to classic roots reggae that set the tone for everything Katchafire would build afterward.' },
  { title: 'Get Away', album: 'Revival', year: 2003, track: 2, kind: 'original',
    description: 'One of the band’s earliest singles and still a live staple, built on an easy-skanking rhythm and the smooth group harmonies that became a Katchafire signature.' },
  { title: 'Who You With', album: 'Revival', year: 2003, track: 3, kind: 'original',
    description: 'A lovers-rock highlight from the debut album, later resurfacing on Best So Far as one of the tracks fans most asked to hear again.' },
  { title: 'Colour Me Life', album: 'Revival', year: 2003, track: 4, kind: 'original',
    description: 'One of Katchafire’s most enduring songs, revisited two decades later as a guest-edition remake with Kolohe Kai on Revival 2.0.' },
  { title: 'Lose Your Power', album: 'Revival', year: 2003, track: 5, kind: 'original',
    description: 'A deeper-groove album cut leaning into the roots and dub side of the Revival sessions.' },
  { title: 'Collie Herb Man', album: 'Revival', year: 2003, track: 6, kind: 'original',
    description: 'A classic roots-reggae herb tribute in the lineage of the genre’s biggest names, and popular enough to earn its own Reactor dub version on the same album.' },
  { title: 'Sensimillia', album: 'Revival', year: 2003, track: 7, kind: 'original',
    description: 'A slow-burning, bass-heavy companion piece to Collie Herb Man, leaning further into dub territory.' },
  { title: 'Done Did It', album: 'Revival', year: 2003, track: 8, kind: 'original',
    description: 'A funk-and-dancehall-leaning cut that Katchafire later revisited with an official remixed-and-remastered re-release.' },
  { title: 'Seriously', album: 'Revival', year: 2003, track: 9, kind: 'original',
    description: 'A fan-favourite that the band would return to twenty years later with a "Revived Version," part of the press run around the Reviving Revival campaign.' },
  { title: 'Giddy Up', album: 'Revival', year: 2003, track: 10, kind: 'original',
    description: 'An upbeat, party-ready single from the debut album that carried over onto the Best So Far compilation a decade later.' },
  { title: 'Bounce', album: 'Revival', year: 2003, track: 11, kind: 'original',
    description: 'A high-energy, crowd-moving track built for the live show, and a recurring pick on the Party Pack live recording.' },
  { title: 'Redemption Song', album: 'Revival', year: 2003, track: 12, kind: 'cover', coverOf: 'Bob Marley',
    description: 'A roots reggae standard the band chose to close their debut album with, a nod to the genre’s lineage that Katchafire has carried ever since.' },
  { title: 'Colour Me Dub', album: 'Revival', year: 2003, track: 13, kind: 'dub', dubOf: 'Colour Me Life',
    description: 'A dub version of Colour Me Life included as a bonus track on the Revival release.' },
  { title: 'Collie Herb Man (Reactor Dub)', album: 'Revival', year: 2003, track: 14, kind: 'dub', dubOf: 'Collie Herb Man',
    description: 'A Reactor-remixed dub take on Collie Herb Man, bundled as a bonus track on the Revival release.' },
  { title: 'Dub Me All Jelly', album: 'Revival', year: 2003, track: 15, kind: 'dub',
    description: 'A dub-only bonus cut rounding out the second disc of the original Revival release.' },

  // --- Slow Burning (2004) ---
  { title: 'Roots Music', album: 'Slow Burning', year: 2004, track: 1, kind: 'original',
    description: 'The opening statement on the sophomore album, doubling down on the roots-reggae foundations of the debut.' },
  { title: 'Hey Girl', album: 'Slow Burning', year: 2004, track: 2, kind: 'original',
    description: 'One of the standout singles from Slow Burning, popular enough to get both a Version (instrumental) cut and a Basscamp remix on the same release.' },
  { title: 'Call Right Up', album: 'Slow Burning', year: 2004, track: 3, kind: 'original',
    description: 'A mid-tempo groove from the Slow Burning sessions built around the band’s tight vocal harmonies.' },
  { title: 'I Got Ya Back', album: 'Slow Burning', year: 2004, track: 4, kind: 'original',
    description: 'A loyalty anthem from Slow Burning that became a recurring pick in the band’s live sets, later appearing on the Party Pack live recording.' },
  { title: 'Close Your Eyes', album: 'Slow Burning', year: 2004, track: 5, kind: 'original',
    description: 'A smoother, lovers-rock leaning cut from the second album, also carried into the band’s live recordings.' },
  { title: 'I And I', album: 'Slow Burning', year: 2004, track: 6, kind: 'original',
    description: 'A roots-conscious highlight from Slow Burning, popular enough to warrant a Mad Professor Dubtronic remix on the same release.' },
  { title: 'Frisk Me Down', album: 'Slow Burning', year: 2004, track: 7, kind: 'original',
    description: 'A horn-driven single from Slow Burning that became a recognizable radio cut for the band through the mid-2000s.' },
  { title: 'Human Bonding', album: 'Slow Burning', year: 2004, track: 8, kind: 'original',
    description: 'A groove-forward album cut rounding out the middle of the Slow Burning tracklist.' },
  { title: 'Rainbow', album: 'Slow Burning', year: 2004, track: 9, kind: 'original',
    description: 'A melodic, harmony-driven track from Slow Burning leaning into the band’s softer side.' },
  { title: 'Rude Girl', album: 'Slow Burning', year: 2004, track: 10, kind: 'original',
    description: 'An uptempo, dancehall-flavoured single from Slow Burning that stayed in heavy rotation on the band’s live setlists.' },

  // --- Say What You're Thinking (2007) ---
  { title: 'Say What You’re Thinking', album: 'Say What You’re Thinking', year: 2007, track: 1, kind: 'original',
    description: 'The title track and lead single from the third album, a direct, horn-punctuated statement piece.' },
  { title: 'Now Girl', album: 'Say What You’re Thinking', year: 2007, track: 2, kind: 'original',
    description: 'An uptempo lovers-rock cut from the 2007 album, built for the band’s signature crowd sing-alongs.' },
  { title: 'Doesn’t Anybody', album: 'Say What You’re Thinking', year: 2007, track: 3, kind: 'original',
    description: 'A reflective mid-album track exploring the more soulful, R’n’B-leaning side of the band’s sound.' },
  { title: 'Mr. Flava', album: 'Say What You’re Thinking', year: 2007, track: 4, kind: 'original',
    description: 'A funk-and-dancehall rub showcasing the genre-blending approach the band leaned into on this record.' },
  { title: 'J Dubb', album: 'Say What You’re Thinking', year: 2007, track: 5, kind: 'original',
    description: 'An instrumentally driven album cut named for one of the band’s own, a nod to the family roots at the core of Katchafire.' },
  { title: 'This World', album: 'Say What You’re Thinking', year: 2007, track: 6, kind: 'original',
    description: 'A more conscious, socially aware track from the middle of the 2007 album.' },
  { title: 'Hold On', album: 'Say What You’re Thinking', year: 2007, track: 7, kind: 'original',
    description: 'An uplifting, encouragement-themed track typical of the record’s warmer, more optimistic run of songs.' },
  { title: 'Love Letter', album: 'Say What You’re Thinking', year: 2007, track: 8, kind: 'original',
    description: 'One of the album’s best-remembered singles, a soulful love song that carried through onto the Best So Far compilation.' },
  { title: 'Ultra Music', album: 'Say What You’re Thinking', year: 2007, track: 9, kind: 'original',
    description: 'An upbeat, dance-leaning cut rounding out the back half of the 2007 record.' },
  { title: 'Meant to Be', album: 'Say What You’re Thinking', year: 2007, track: 10, kind: 'original',
    description: 'A romantic, harmony-forward highlight popular enough to earn a spot on the Best So Far compilation.' },
  { title: 'Pain', album: 'Say What You’re Thinking', year: 2007, track: 11, kind: 'original',
    description: 'A heavier, more emotionally direct album cut from late in the Say What You’re Thinking tracklist.' },
  { title: 'Working', album: 'Say What You’re Thinking', year: 2007, track: 12, kind: 'original',
    description: 'The closing track on the 2007 album, popular enough on the road to make the Best So Far compilation years later.' },

  // --- On The Road Again (2010) ---
  { title: 'On the Road Again', album: 'On The Road Again', year: 2010, track: 1, kind: 'original',
    description: 'The title track of the fourth album, written for a band built around touring, and a natural set-opener ever since.' },
  { title: 'Sweet As', album: 'On The Road Again', year: 2010, track: 2, kind: 'original',
    description: 'A breezy, feel-good single from the 2010 album, popular enough to make the Best So Far compilation.' },
  { title: 'You’re Dreaming', album: 'On The Road Again', year: 2010, track: 3, kind: 'original',
    description: 'A melodic mid-album cut from On The Road Again leaning into the band’s smoother, radio-friendly side.' },
  { title: 'Lead Us', album: 'On The Road Again', year: 2010, track: 4, kind: 'original',
    description: 'A more spiritual, conscious-reggae themed track from the middle of the album.' },
  { title: 'Irie', album: 'On The Road Again', year: 2010, track: 5, kind: 'original',
    description: 'One of the standout cuts from the 2010 album, carried onto Best So Far as an opening track on that compilation.' },
  { title: 'Groove Again', album: 'On The Road Again', year: 2010, track: 6, kind: 'original',
    description: 'An uptempo, dancefloor-leaning single that also found its way onto the Best So Far compilation.' },
  { title: 'Feels Like', album: 'On The Road Again', year: 2010, track: 7, kind: 'original',
    description: 'A warmer, love-song leaning track from the back half of On The Road Again.' },
  { title: 'One Stop Shop', album: 'On The Road Again', year: 2010, track: 8, kind: 'original',
    description: 'A funk-and-reggae rub typical of the genre-blending the band leaned on across their middle-era albums.' },
  { title: 'Chances Are', album: 'On The Road Again', year: 2010, track: 9, kind: 'original',
    description: 'A melodic, harmony-driven cut from late in the 2010 tracklist.' },
  { title: 'Is This Familiar', album: 'On The Road Again', year: 2010, track: 10, kind: 'original',
    description: 'A reflective, slower-paced album cut exploring familiar reggae themes of love and memory.' },
  { title: 'Seek Ye', album: 'On The Road Again', year: 2010, track: 11, kind: 'original',
    description: 'A more spiritually themed track leaning into the conscious-reggae side of the band’s catalog.' },
  { title: 'Serious', album: 'On The Road Again', year: 2010, track: 12, kind: 'original',
    description: 'The closing track on On The Road Again, not to be confused with the earlier Revival favourite "Seriously."' },

  // --- Non-album single (2016) ---
  { title: 'Burn It Down', album: 'Non-Album Single', year: 2016, track: 1, kind: 'single',
    description: 'A standalone single released between On The Road Again and Legacy, with an official video shot live at Wellington’s Homegrown Festival.' },
  { title: 'If I Had the World', album: 'Non-Album Single', year: 2016, track: 2, kind: 'single', bside: true,
    description: 'The B-side to the "Burn It Down" single, released the same year.' },

  // --- Legacy (2018) ---
  { title: 'Fyah in the Trenches', album: 'Legacy', year: 2018, track: 1, kind: 'original',
    description: 'The opening track on Legacy, and the source of the "Fyah Family" name the band’s global fanbase now goes by.' },
  { title: 'Love Today', album: 'Legacy', year: 2018, track: 2, kind: 'original',
    description: 'One of the lead singles from Legacy, an upbeat call to live in the present that became a staple of the album’s promotion.' },
  { title: 'I Can Feel It a Lot', album: 'Legacy', year: 2018, track: 3, kind: 'original',
    description: 'A groove-heavy album cut from the middle of the Legacy tracklist.' },
  { title: '100', album: 'Legacy', year: 2018, track: 4, kind: 'original', teReoVersion: 'Karawhiua',
    description: 'A standout from Legacy later reimagined entirely in Te Reo Māori as "Karawhiua" for the Waiata / Anthems documentary series.' },
  { title: 'Walk With Me', album: 'Legacy', year: 2018, track: 5, kind: 'original',
    description: 'A warmer, companionship-themed track from the middle of the 2018 album.' },
  { title: 'Ain’t Gona Give Up', album: 'Legacy', year: 2018, track: 6, kind: 'original',
    description: 'A determination-themed anthem typical of the record’s more uplifting run of songs.' },
  { title: 'Wasted', album: 'Legacy', year: 2018, track: 7, kind: 'original',
    description: 'A heavier, dancehall-leaning cut from the back half of Legacy.' },
  { title: 'One More Day', album: 'Legacy', year: 2018, track: 8, kind: 'original',
    description: 'A reflective mid-album track from Legacy dealing in classic reggae themes of time and longing.' },
  { title: 'Luv Plan', album: 'Legacy', year: 2018, track: 9, kind: 'original',
    description: 'A romantic, groove-forward cut from late in the Legacy tracklist.' },
  { title: 'Living as 1', album: 'Legacy', year: 2018, track: 10, kind: 'original',
    description: 'A unity-themed track leaning into the conscious-reggae side of the band’s writing.' },
  { title: 'Addicted', album: 'Legacy', year: 2018, track: 11, kind: 'original',
    description: 'One of Legacy’s more radio-forward singles, built around a hook-driven chorus.' },
  { title: 'Way Beyond', album: 'Legacy', year: 2018, track: 12, kind: 'original',
    description: 'The closing track on Legacy, rounding out the band’s fifth studio album on an expansive note.' },

  // --- Non-album singles (2020-2021) ---
  { title: 'Circle Back', album: 'Non-Album Single', year: 2020, track: 1, kind: 'single',
    description: 'A standalone single released during the touring shutdown of 2020, one of two new songs the band put out while borders were closed.' },
  { title: 'Whaingaroa', album: 'Non-Album Single', year: 2021, track: 1, kind: 'single',
    description: 'A standalone single named for the Raglan/Whaingaroa coast in Aotearoa, released alongside an extended mix version.' },
  { title: 'Karawhiua', album: 'Non-Album Single', year: 2021, track: 1, kind: 'single', teReoOf: '100',
    description: 'A full Te Reo Māori reimagining of "100" from Legacy, translated by mātanga reo Paraone Gloyne for the Waiata / Anthems documentary series. Lead singer Logan Bell has said the song was written for the women who hold things together while the band is on the road.' },

  // --- Revival 2.0 (2026 Guest Edition) ---
  { title: 'Reggae Revival', album: 'Revival 2.0 (Guest Edition)', year: 2026, track: 1, kind: 'reimagined', originalOf: 'Reggae Revival',
    description: 'The Revival 2.0 guest-edition rework of the original 2003 album opener.' },
  { title: 'Get Away', album: 'Revival 2.0 (Guest Edition)', year: 2026, track: 2, kind: 'reimagined', originalOf: 'Get Away',
    description: 'A reimagined take on the Revival original for the 2026 guest-edition project.' },
  { title: 'Who You With', album: 'Revival 2.0 (Guest Edition)', year: 2026, track: 3, kind: 'reimagined', originalOf: 'Who You With',
    description: 'A reimagined take on the Revival original for the 2026 guest-edition project.' },
  { title: 'Colour Me Life', album: 'Revival 2.0 (Guest Edition)', year: 2026, track: 4, kind: 'reimagined', originalOf: 'Colour Me Life', guest: 'Kolohe Kai',
    description: 'A full guest reimagining of the Revival classic featuring Kolohe Kai, released as the lead single and pre-save from the Revival 2.0 project.' },
  { title: 'Lose Your Power', album: 'Revival 2.0 (Guest Edition)', year: 2026, track: 5, kind: 'reimagined', originalOf: 'Lose Your Power',
    description: 'A reimagined take on the Revival original for the 2026 guest-edition project.' },
  { title: 'Collie Herb Man', album: 'Revival 2.0 (Guest Edition)', year: 2026, track: 6, kind: 'reimagined', originalOf: 'Collie Herb Man',
    description: 'A reimagined take on the Revival original for the 2026 guest-edition project.' },
  { title: 'Sensimillia', album: 'Revival 2.0 (Guest Edition)', year: 2026, track: 7, kind: 'reimagined', originalOf: 'Sensimillia',
    description: 'A reimagined take on the Revival original for the 2026 guest-edition project.' },
  { title: 'Done Did It', album: 'Revival 2.0 (Guest Edition)', year: 2026, track: 8, kind: 'reimagined', originalOf: 'Done Did It',
    description: 'A remixed-and-remastered guest-edition take on the Revival original, previously teased as a standalone re-release.' },
  { title: 'Seriously', album: 'Revival 2.0 (Guest Edition)', year: 2026, track: 9, kind: 'reimagined', originalOf: 'Seriously',
    description: 'The "Revived Version" of a Revival fan favourite, part of the press run around the Reviving Revival campaign.' },
  { title: 'Giddy Up', album: 'Revival 2.0 (Guest Edition)', year: 2026, track: 10, kind: 'reimagined', originalOf: 'Giddy Up',
    description: 'A reimagined take on the Revival original for the 2026 guest-edition project.' },
  { title: 'Bounce', album: 'Revival 2.0 (Guest Edition)', year: 2026, track: 11, kind: 'reimagined', originalOf: 'Bounce',
    description: 'A reimagined take on the Revival original for the 2026 guest-edition project.' },
  { title: 'Redemption Song', album: 'Revival 2.0 (Guest Edition)', year: 2026, track: 12, kind: 'reimagined', originalOf: 'Redemption Song',
    description: 'A reimagined guest-edition take on the Bob Marley cover that closed the original Revival album.' }
];

// Real official artwork only gets used where we actually have it; everything else
// falls back to a styled placeholder tile instead of a stock/AI-generated image.
const songArtworkOverrides = {
  'colour me life::revival 2.0 (guest edition)': '../assets/promo/Colour-Me-Life_Presave-1024x1024.png'
};

function songArtKey(song) { return `${song.title.toLowerCase()}::${song.album.toLowerCase()}`; }

function songKindLabel(song) {
  switch (song.kind) {
    case 'cover': return `Cover of a ${song.coverOf} song`;
    case 'dub': return song.dubOf ? `Dub version of “${song.dubOf}”` : 'Dub version';
    case 'single': return song.bside ? 'B-side' : 'Non-album single';
    case 'reimagined': return song.guest ? `Guest edition, featuring ${song.guest}` : 'Guest edition rework';
    default: return 'Album track';
  }
}

function renderSongArt(song) {
  const override = songArtworkOverrides[songArtKey(song)];
  if (override) {
    return `<img src="${override}" alt="${song.title} artwork" loading="lazy">`;
  }
  const initial = song.title.replace(/[“”]/g, '').trim().charAt(0).toUpperCase();
  return `<div class="song-art-fpo" aria-hidden="true"><span>${initial}</span></div>`;
}

function renderSongEntry(song) {
  const bits = [`${song.album}`, `${song.year}`, `Track ${song.track}`];
  const extraNote = song.teReoVersion ? `Later reimagined in Te Reo Māori as “${song.teReoVersion}.”`
    : song.teReoOf ? `Te Reo Māori version of “${song.teReoOf}.”`
    : song.originalOf && song.kind === 'reimagined' ? '' : '';
  return `
    <li class="song-entry" data-song-title="${song.title.toLowerCase()}" data-song-album="${song.album.toLowerCase()}">
      <div class="song-art">${renderSongArt(song)}</div>
      <div class="song-body">
        <p class="song-meta">${bits.join(' • ')} • ${songKindLabel(song)}</p>
        <h3 class="song-title">${song.title}</h3>
        <p class="song-description">${song.description}${extraNote ? ' ' + extraNote : ''}</p>
        <p class="song-credit">Written and performed by Katchafire.</p>
      </div>
    </li>
  `;
}

function renderSongsTimeline(filterText) {
  const root = document.querySelector('[data-songs-timeline]');
  const countEl = document.querySelector('[data-songs-count]');
  if (!root) return;

  const query = (filterText || '').trim().toLowerCase();
  const matches = query
    ? songsData.filter((s) => s.title.toLowerCase().includes(query) || s.album.toLowerCase().includes(query))
    : songsData;

  const groups = [];
  matches.forEach((song) => {
    let group = groups.find((g) => g.album === song.album && g.year === song.year);
    if (!group) { group = { album: song.album, year: song.year, songs: [] }; groups.push(group); }
    group.songs.push(song);
  });
  groups.sort((a, b) => b.year - a.year);

  if (countEl) {
    countEl.textContent = query
      ? `${matches.length} of ${songsData.length} songs match “${filterText.trim()}”`
      : `${songsData.length} songs across the full Katchafire catalog`;
  }

  if (!matches.length) {
    root.innerHTML = '<li class="song-empty">No songs match that search. Try an album name or a different word from the title.</li>';
    return;
  }

  root.innerHTML = groups.map((group) => `
    <li class="song-era">
      <div class="song-era-marker" aria-hidden="true"></div>
      <h2 class="song-era-title">${group.album} <span>— ${group.year}</span></h2>
      <ul class="song-era-list">${group.songs.map(renderSongEntry).join('')}</ul>
    </li>
  `).join('');
}

function setupSongsSearch() {
  const input = document.querySelector('[data-songs-search]');
  if (!input) return;
  input.addEventListener('input', () => renderSongsTimeline(input.value));
}

document.addEventListener('DOMContentLoaded', () => {
  renderSongsTimeline('');
  setupSongsSearch();
});

# Boat records

Each folder here is one HydroStep boat. The wall uses only **model** and **cover**. Everything else lives on that boat’s dossier.

```
hs-24/
  index.md      facts for this boat
  cover.png     photograph on the wall (plain photo — the Polaroid frame is drawn by the site)
  photos/       extra pictures for the photo library
    01.jpg
    02-deck.jpg
```

## Add a boat

```sh
npm run new-boat -- hs-30
```

Or duplicate an existing folder and rename it. The folder name is the URL (`/boats/hs-30`).

Then:

1. Replace `cover.png` (`.jpg` / `.webp` is fine — update the filename in `index.md`).
2. Fill in `index.md`.
3. Drop extra pictures into `photos/`. Name them `01-…`, `02-…` so they stay in order.
4. Set `dummy: false` only when the facts and photographs are real.

## `index.md`

```yaml
model: "HS-30"          # required — on the wall and the dossier
cover: "./cover.png"    # required
dummy: true             # true until this record is real
featured: false         # true = this print sorts first on the wall
owner: ""
year: ""
engine: ""
location: ""
note: ""
captions:
  01.jpg: "Optional handwritten label"
```

Empty fact fields are hidden. Anything you write below the `---` in this file becomes a longer note on the dossier.

You do not list photos in the markdown unless you want captions. Dropping a file into `photos/` is enough.

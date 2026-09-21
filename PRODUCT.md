# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro with content collections for boat records, static hosting (Vercel or equivalent). The public job is browsing a photo-rich catalog; only the design owner writes records, so there is no public write API or backend requirement yet.

## Users

Primary: people interested in the HydroStep boat design, or in fast boats generally, who want to look through boats that already exist.

Operator: the HydroStep design owner, who catalogs those boats and adds factual information to each record.

## Product Purpose

A digital library of existing HydroStep boats. Visitors browse the fleet; the design owner adds and updates information on each boat (owner, model, and further fields as they are defined). Success is that someone curious about HydroStep can see the real boats and learn who and what they are.

## Positioning

This is the library of HydroStep boats, kept by the owner of that design. A generic boat marketplace or marina listing cannot truthfully be that catalog.

## Operating Context

Visitors open a website and look through existing HydroStep boats. The design owner maintains each record with information such as owner and model. There is no confirmed in-person ritual, brokerage workflow, or third-party listing feed.

## Capabilities and Constraints

- Visitors can browse the library of existing boats.
- Only the HydroStep design owner can add and edit boat records.
- Overview (the wall) shows only a photograph and the model name. No other fields.
- Clicking a boat opens its dossier: extra fields (owner, year, location, note, photo library) may appear as dummy text until real facts exist, and must be labeled dummy so they cannot be mistaken for HydroStep records.
- Confirmed real fields so far: model (on the wall and the dossier) and photograph. Owner and further fields are dummy until replaced.
- No public submission or visitor editing.
- No confirmed authentication product, payments, or brokerage/sales flow.
- Stack choice was delegated; Astro + content collections is the recorded decision, not a user-named framework.

## Brand Commitments

- Name: HydroStep is the boat design; this product is the digital library of existing HydroStep boats (repo: HydroStepLibrary).
- The design owner is the source of catalog truth.
- No other voice, logo, or identity system was made binding.

## Evidence on Hand

No real boat list, owner names, or HydroStep photography is confirmed. Placeholder hull images and dummy dossier copy may ship only when labeled dummy/synthetic. Future work must not present invented owners, specifications, testimonials, or photography as real.

## Product Principles

- The boats are the catalog. The site exists to show real HydroStep boats, not a generic marine brand.
- Looking is public; writing is not. Only the design owner adds and edits records.
- Records stay factual. Owner, model, and later fields are attributes of existing boats, never filler.
- Curiosity is the audience. Serve people interested in HydroStep and fast boats, not industry operations software.
- HydroStep lineage is the difference. This library is of that design’s existing boats, and nothing else.

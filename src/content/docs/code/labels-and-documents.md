---
title: SYS-2 Labels and documents
description: What every installation is labelled with and what the user receives.
status: draft
sidebar:
  order: 2
sources:
  - title: Summary of IEC TS 62257-9-8 (VeraSol)
    url: https://verasol.org/wp-content/uploads/import/Summary-of-IEC-62257-9-8.pdf
    note: fuse ratings on product and manual, spare fuses, battery and panel labels, user manual in words and pictures
  - title: ABYC E-11 AC and DC Electrical Systems on Boats (2003)
    url: https://law.resource.org/pub/us/cfr/ibr/inc/ansi/abyc.e-11.2003.pdf
    note: wiring diagram as identification
  - title: ISO 10133:2012, Small craft - extra-low-voltage DC installations (preview)
    url: https://cdn.standards.iteh.ai/samples/45867/0dceabde692c42a2abe7f580f3b099ff/ISO-10133-2012.pdf
    note: wiring diagram
---

## SYS-2.1 Wiring diagram

**must** - Every installation has a wiring diagram that shows each fuse with its rating and each
cable with its size. A copy is fixed inside or next to the distribution board, and the owner
keeps another.

*Why:* the next person to repair the system, often years later, needs to know what was meant.
ABYC and ISO 10133 accept a diagram as the record of how circuits are identified.

## SYS-2.2 Labels

**must** - These labels are on the installation:

- Every outlet and branch: its voltage ("24 V DC") and branch number.
- Every terminal: polarity (+ / −).
- The main battery fuse: its rating. Every fuse holder: its rating.
- The battery: chemistry, voltage and capacity.
- The charge controller: the maximum panel voltage allowed.
- Next to outlets: "Switch off before unplugging" where [DIST-3.3](/code/connectors-and-outlets/#dist-33-switch-off-before-unplugging) applies.

*Why:* VeraSol requires fuse ratings, battery and panel data on the product. Labels keep the wrong
fuse or the wrong device out of the system.

## SYS-2.3 User guide

**must** - The user receives a short guide, in words and pictures they understand and in their
language, covering: what the system can run, how to switch off and reset, what the lights and
alarms mean, basic safety, the regular checks, and who to call.

*Why:* VeraSol asks for a manual "a typical user understands". A system the household cannot
operate gets misused or abandoned.

## SYS-2.4 Spare fuses

**should** - Where fuses can be replaced by the user, a spare of each rating is kept in or next to
the distribution board.

*Why:* without a spare, people replace a blown fuse with a bigger one, or with a wire.

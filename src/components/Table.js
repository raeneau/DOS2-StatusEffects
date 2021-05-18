import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

// Status Effects
import { RESISTANCE, SKILLS } from "../constants";

// Icons
import {
  acid,
  atrophy,
  bleeding,
  blinded,
  burning,
  charmed,
  chilled,
  crippled,
  cursed,
  decaying,
  diseased,
  frozen,
  knockedDown,
  necrofire,
  petrified,
  poisoned,
  shacklesOfPain,
  shocked,
  silenced,
  sleeping,
  slowed,
  stunned,
  suffocating,
  terrified,
} from "../assets/statusEffects";

import "./Table.css";

// -----------------------------------------------------------------------------

// Destruct skill variables
const {
  ARCANE_STITCH,
  ARMOUR_OF_FROST,
  BLESS,
  BREAK_THE_SHACKLES,
  BREATHING_BUBBLE,
  CLEANSE_WOUNDS,
  CRYOGENIC_STASIS,
  CRYOTHERAPY,
  ENRAGE,
  FIRST_AID,
  FORTIFY,
  HASTE,
  MASS_BREATHING_BUBBLES,
  MASS_CLEANSE_WOUNDS,
  MASS_CRYOTHERAPY,
  OILY_CARAPACE,
  PEACE_OF_MIND,
  RESTED,
  RESTORATION,
  SOUL_MATE,
  TACTICAL_RETREAT,
  TORNADO,
  TURN_TO_OIL,
  VAPORIZE,
} = SKILLS;

const { MAGIC, PHYSICAL } = RESISTANCE;

// -----------------------------------------------------------------------------

export const tableCnBase = "StatusEffectsTable";

const Table = () => (
  <table className="StatusEffectsTable">
    <TableHeader />
    <tbody>
      <TableRow
        icon={acid}
        statusName="Acid"
        effect=""
        cures={[FORTIFY, MASS_CLEANSE_WOUNDS]}
      />
      <TableRow
        icon={atrophy}
        statusName="Atrophy"
        effect=""
        resist={PHYSICAL}
        cures={[FIRST_AID, BREAK_THE_SHACKLES]}
      />
      <TableRow
        icon={bleeding}
        statusName="Bleeding"
        effect=""
        resist={PHYSICAL}
        cures={[
          CLEANSE_WOUNDS,
          MASS_CLEANSE_WOUNDS,
          FIRST_AID,
          FORTIFY,
          RESTORATION,
        ]}
      />
      <TableRow
        icon={blinded}
        statusName="Blinded"
        effect=""
        resist={MAGIC}
        cures={[FIRST_AID, PEACE_OF_MIND]}
      />
      <TableRow
        icon={burning}
        statusName="Burning"
        effect=""
        resist={MAGIC}
        cures={[
          ARMOUR_OF_FROST,
          CLEANSE_WOUNDS,
          MASS_CLEANSE_WOUNDS,
          CRYOTHERAPY,
          CRYOGENIC_STASIS,
          ARCANE_STITCH,
          FIRST_AID,
          FORTIFY,
          TORNADO,
        ]}
      />
      <TableRow
        icon={charmed}
        statusName="Charmed"
        effect=""
        resist={MAGIC}
        cures={[ENRAGE, PEACE_OF_MIND]}
      />
      <TableRow
        icon={chilled}
        statusName="Chilled"
        effect=""
        resist={MAGIC}
        cures={[BREAK_THE_SHACKLES]}
      />
      <TableRow
        icon={crippled}
        statusName="Crippled"
        effect=""
        resist={PHYSICAL}
        cures={[RESTED, FIRST_AID, HASTE, BREAK_THE_SHACKLES]}
      />
      <TableRow
        icon={cursed}
        statusName="Cursed"
        effect=""
        resist={MAGIC}
        cures={[BLESS]}
      />
      <TableRow
        icon={decaying}
        statusName="Decaying"
        effect=""
        resist={PHYSICAL}
        cures={[FORTIFY, CLEANSE_WOUNDS, MASS_CLEANSE_WOUNDS]}
      />
      <TableRow
        icon={diseased}
        statusName="Diseased"
        effect=""
        resist={PHYSICAL}
        cures={[
          FORTIFY,
          BLESS,
          FIRST_AID,
          CLEANSE_WOUNDS,
          MASS_CLEANSE_WOUNDS,
          BREAK_THE_SHACKLES,
        ]}
      />
      <TableRow
        icon={frozen}
        statusName="Frozen"
        effect=""
        resist={MAGIC}
        cures={[VAPORIZE, ARCANE_STITCH, SOUL_MATE]}
      />
      <TableRow
        icon={knockedDown}
        statusName="Knocked Down"
        effect=""
        resist={PHYSICAL}
        cures={[RESTED, FIRST_AID, SOUL_MATE]}
      />
      <TableRow
        icon={necrofire}
        statusName="Necrofire"
        effect=""
        resist={MAGIC}
        cures={[
          BLESS,
          ARCANE_STITCH,
          MASS_CLEANSE_WOUNDS,
          CRYOTHERAPY,
          MASS_CRYOTHERAPY,
        ]}
      />
      <TableRow
        icon={petrified}
        statusName="Petrified"
        effect=""
        resist={MAGIC}
        cures={[BLESS, VAPORIZE, ARMOUR_OF_FROST, ARCANE_STITCH]}
      />
      <TableRow
        icon={poisoned}
        statusName="Poisoned"
        effect=""
        resist={MAGIC}
        cures={[
          FIRST_AID,
          FORTIFY,
          RESTORATION,
          CLEANSE_WOUNDS,
          ARCANE_STITCH,
          MASS_CLEANSE_WOUNDS,
        ]}
      />
      <TableRow
        icon={shocked}
        statusName="Shocked"
        effect=""
        resist={MAGIC}
        cures={[TURN_TO_OIL, BREAK_THE_SHACKLES]}
      />
      <TableRow
        icon={shacklesOfPain}
        statusName="Shackles of Pain"
        effect=""
        resist={PHYSICAL}
        cures={[BREAK_THE_SHACKLES, CRYOGENIC_STASIS]}
      />
      <TableRow
        icon={silenced}
        statusName="Silenced"
        effect=""
        resist={MAGIC}
        cures={[FIRST_AID, ARCANE_STITCH, BREAK_THE_SHACKLES]}
      />
      <TableRow
        icon={sleeping}
        statusName="Sleeping"
        effect=""
        resist={MAGIC}
        cures={[PEACE_OF_MIND]}
      />
      <TableRow
        icon={slowed}
        statusName="Slowed"
        effect=""
        resist={MAGIC}
        cures={[
          HASTE,
          TACTICAL_RETREAT,
          TORNADO,
          OILY_CARAPACE,
          BREAK_THE_SHACKLES,
        ]}
      />
      <TableRow
        icon={stunned}
        statusName="Stunned"
        effect=""
        resist={MAGIC}
        cures={[BLESS, ARMOUR_OF_FROST, ARCANE_STITCH, TURN_TO_OIL]}
      />
      <TableRow
        icon={suffocating}
        statusName="Suffocating"
        effect=""
        cures={[
          FIRST_AID,
          BREATHING_BUBBLE,
          ARCANE_STITCH,
          MASS_BREATHING_BUBBLES,
          MASS_CLEANSE_WOUNDS,
          BREAK_THE_SHACKLES,
        ]}
      />
      <TableRow
        icon={terrified}
        statusName="Terrified"
        effect=""
        cures={[PEACE_OF_MIND, ENRAGE, ARCANE_STITCH]}
      />
    </tbody>
  </table>
);

// -----------------------------------------------------------------------------

export default Table;

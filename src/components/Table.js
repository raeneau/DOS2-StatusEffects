import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

// Status Effects
import { SKILLS } from "../constants";

// Icons
import {
  acid,
  atrophy,
  bleeding,
  blinded,
  burning,
} from "../assets/statusEffects";

import "./Table.css";

// -----------------------------------------------------------------------------

// Destruct skill variables
const {
  // PHYSICAL_ARMOR,
  // MAGIC_ARMOR,
  ARCANE_STITCH,
  ARMOUR_OF_FROST,
  // BLESS,
  BREAK_THE_SHACKLES,
  CLEANSE_WOUNDS,
  CRYOGENIC_STASIS,
  CRYOTHERAPY,
  // ENRAGE,
  FIRST_AID,
  FORTIFY,
  // HASTE,
  MASS_CLEANSE_WOUNDS,
  // OILY_CARAPACE,
  PEACE_OF_MIND,
  // RESTED,
  RESTORATION,
  TORNADO,
  // TURN_TO_OIL,
  // VAPORIZE,
} = SKILLS;

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
        cures={[FIRST_AID, BREAK_THE_SHACKLES]}
      />
      <TableRow
        icon={bleeding}
        statusName="Bleeding"
        effect=""
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
        cures={[FIRST_AID, PEACE_OF_MIND]}
      />
      <TableRow
        icon={burning}
        statusName="Burning"
        effect=""
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
    </tbody>
  </table>
);

// -----------------------------------------------------------------------------

export default Table;

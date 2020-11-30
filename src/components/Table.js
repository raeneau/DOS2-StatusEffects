import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

// import { ARMOR_TYPE } from "../constants";

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

export const tableCnBase = "StatusEffectsTable";

const Table = () => (
  <table className="StatusEffectsTable">
    <TableHeader />
    <tbody>
      <TableRow icon={acid} statusName="Acid" effect="" cure="" />
      <TableRow icon={atrophy} statusName="Atrophy" />
      <TableRow icon={bleeding} statusName="Bleeding" />
      <TableRow icon={blinded} statusName="Blinded" />
      <TableRow icon={burning} statusName="Burning" />
    </tbody>
  </table>
);

// -----------------------------------------------------------------------------

export default Table;

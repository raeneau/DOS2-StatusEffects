import React from "react";
import "./TableHeader.css";

// -----------------------------------------------------------------------------

const cnBase = "StatusEffectsTable";
const cn = {
  header: `${cnBase}--Header`,
};

const TableHeader = () => (
  <thead>
    <tr>
      <th className={cn.header}>Status</th>
      <th className={cn.header}>Effect</th>
      <th className={cn.header}>Resisted By</th>
      <th className={cn.header}>Cured By</th>
    </tr>
  </thead>
);

// -----------------------------------------------------------------------------

export default TableHeader;

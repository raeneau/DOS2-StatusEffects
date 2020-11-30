import React from "react";
import { ARMOR_TYPE } from "../constants";

import { physicalArmor, magicArmor } from "../assets/skills";

// -----------------------------------------------------------------------------

const cnBase = "StatusEffectsTable";
const cn = {
  header: `${cnBase}--Header`,
};

const TableHeader = ({ type }) => {
  switch (type) {
    case ARMOR_TYPE.MAGIC: {
      return (
        <div>
          <img src={magicArmor} alt="Magic Armor" className={cn.image} />
          <h4 className={cn.text}>Magic Armor</h4>
        </div>
      );
    }

    case ARMOR_TYPE.PHYSICAL: {
      return (
        <div>
          <img src={physicalArmor} alt="Physical Armor" className={cn.image} />
          <h4 className={cn.text}>Physical Armor</h4>
        </div>
      );
    }

    default: {
      return (
        <div>
          <h4 className={cn.text}>N/A</h4>
        </div>
      );
    }
  }
};

// -----------------------------------------------------------------------------

export default TableHeader;

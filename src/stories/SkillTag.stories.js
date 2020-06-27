import React from "react";
import { SkillTag } from "../components/SkillTag/SkillTag";

export default { title: "SkillTag" };

const SkillTxt = 'Java'

export const Skill = () => (
  <div style={{ margin: "0 10px" }}>
    <SkillTag>
      {SkillTxt}
    </SkillTag>
  </div>
);

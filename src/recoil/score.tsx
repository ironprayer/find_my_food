import * as React from "react";
import { atom } from "recoil";

export const totalScoreState = atom({
    key: "totalScore",
    default: 0
})

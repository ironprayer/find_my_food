import * as React from "react";
import { atom } from "recoil";

export const questionNumberState = atom({
    key: "questionNumber",
    default: -1
})
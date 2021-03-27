import { IVitalsScore } from "../typings/types";
export declare const webVitalsScore: Record<string, number[]>;
export declare const getVitalsScore: (measureName: string, value: number) => IVitalsScore;

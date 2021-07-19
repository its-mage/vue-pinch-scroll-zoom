import Vue from "vue";
import { PinchScrollZoomEmitData } from "./types";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, any, {
    getEmitData(): PinchScrollZoomEmitData;
    stopDrag(): void;
    startDrag(touchEvent: any): void;
    doDrag(touchEvent: any): void;
    doStopScallingEvent(): void;
    doDragEvent(touchEvent: any): void;
    getBoundingTouchClientX(touch: any): number;
    getBoundingTouchClientY(touch: any): number;
    submitDrag(): void;
    getDistance(x1: number, y1: number, x2: number, y2: number): number;
    doScale(touchEvent: any): void;
    submitScale(scale: number): void;
    doWheelScale(event: any): void;
    checkWithin(): void;
    getContainerStyle(): any;
}, unknown, {
    contentWidth: number;
    contentHeight: number;
    width: number;
    height: number;
    originX: number;
    originY: number;
    translateX: number;
    translateY: number;
    scale: number;
    throttleDelay: number;
    within: boolean;
    minScale: number;
    maxScale: number;
    wheelVelocity: number;
}>;
export default _default;

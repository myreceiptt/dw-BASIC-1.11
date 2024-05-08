/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const sp = new URLSearchParams(window.location.search);

$fx.params([
  {
    id: "particle_size",
    name: "dw Size",
    type: "number",
    default: 11,
    // update: "code-driven",
    options: {
      min: 11,
      max: 111,
      step: 0.01,
    },
  },
  {
    id: "interval_rate",
    name: "dw Rate",
    type: "number",
    default: 11,
    // update: "code-driven",
    options: {
      min: 1,
      max: 11,
      step: 1,
    },
  },
  {
    id: "finale_number",
    name: "dw Number",
    type: "number",
    default: 11,
    // update: "code-driven",
    options: {
      min: 11,
      max: 111,
      step: 1,
    },
  },
  {
    id: "percentage_spread",
    name: "dw Spread",
    type: "number",
    default: 111,
    // update: "code-driven",
    options: {
      min: 11,
      max: 111,
      step: 0.01,
    },
  },
  {
    id: "variant_number",
    name: "dw Variant",
    type: "number",
    default: 1,
    // update: "code-driven",
    options: {
      min: 0,
      max: 7,
      step: 1,
    },
  },
  {
    id: "rapidity_x",
    name: "dwX Rapidity",
    type: "number",
    default: 111,
    // update: "code-driven",
    options: {
      min: -111,
      max: 111,
      step: 0.01,
    },
  },
  {
    id: "rapidity_y",
    name: "dwY Rapidity",
    type: "number",
    default: 1.11,
    // update: "code-driven",
    options: {
      min: -111,
      max: 111,
      step: 0.01,
    },
  },
]);

$fx.features({
  "dw Size": "Maximum Size " + $fx.getParam("particle_size"),
  "dw Rate": "1 dw per " + $fx.getParam("interval_rate") + " Frame",
  "dw Number": $fx.getParam("finale_number") + " dw Sparked",
  "dw Spread": $fx.getParam("percentage_spread") + "% of the Canvas",
  "dw Variant": "Variant number " + $fx.getParam("variant_number"),
  "dwX Rapidity": "Maximum dwX " + $fx.getParam("rapidity_x"),
  "dwY Rapidity": "Maximum dwY " + $fx.getParam("rapidity_y"),
});
/******/ })()
;

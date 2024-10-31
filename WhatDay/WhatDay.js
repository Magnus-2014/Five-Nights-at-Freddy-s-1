/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class WhatDay extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("12:00AM 1 Night", "./WhatDay/costumes/12:00AM 1 Night.png", {
        x: 226,
        y: 96,
      }),
      new Costume("12:00AM 2 Night", "./WhatDay/costumes/12:00AM 2 Night.png", {
        x: 230,
        y: 96,
      }),
      new Costume("12:00AM 3 Night", "./WhatDay/costumes/12:00AM 3 Night.png", {
        x: 230,
        y: 96,
      }),
      new Costume("12:00AM 4 Night", "./WhatDay/costumes/12:00AM 4 Night.png", {
        x: 230,
        y: 96,
      }),
      new Costume("12:00AM 5 Night", "./WhatDay/costumes/12:00AM 5 Night.png", {
        x: 230,
        y: 96,
      }),
      new Costume("12:00AM 6 Night", "./WhatDay/costumes/12:00AM 6 Night.png", {
        x: 232,
        y: 96,
      }),
      new Costume("12:00AM 7 Night", "./WhatDay/costumes/12:00AM 7 Night.png", {
        x: 240,
        y: 100,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "intro" }, this.whenIReceiveIntro),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveIntro() {
    this.broadcast("blip");
    this.effects.clear();
    this.costume =
      "12:00AM " + (this.toString(this.stage.vars.level) + " Night");
    this.visible = true;
    this.goto(0, 10);
    this.size = 40;
    this.stopAllSounds();
    yield* this.wait(2);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
    this.broadcast("loading");
  }
}

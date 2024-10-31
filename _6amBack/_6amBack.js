/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _6amBack extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("slide", "./_6amBack/costumes/slide.png", { x: 48, y: 60 }),
    ];

    this.sounds = [
      new Sound("chimes 2", "./_6amBack/sounds/chimes 2.wav"),
      new Sound(
        "CROWD_SMALL_CHIL_EC049202",
        "./_6amBack/sounds/CROWD_SMALL_CHIL_EC049202.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveWin() {
    this.visible = false;
    yield* this.startSound("chimes 2");
    this.y = -17;
    this.effects.ghost = 100;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield;
    }
    this.visible = true;
    yield* this.glide(3, -20, 21);
    yield* this.startSound("CROWD_SMALL_CHIL_EC049202");
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}

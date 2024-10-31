/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _6amFore extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("am5", "./_6amFore/costumes/am5.png", { x: 480, y: 360 }),
      new Costume("am", "./_6amFore/costumes/am.png", { x: 480, y: 360 }),
      new Costume("am6", "./_6amFore/costumes/am6.png", { x: 480, y: 360 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveWin() {
    this.costume = "am5";
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield;
    }
    this.costume = "am";
    yield* this.wait(3);
    this.costume = "am6";
    yield* this.wait(2);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
    yield* this.wait(2);
    if (this.compare(this.stage.vars.level, 5) < 0) {
      this.stage.vars.level++;
      this.broadcast("intro");
    } else {
      if (this.toNumber(this.stage.vars.level) === 5) {
        this.broadcast("beat5");
      } else {
        if (this.toNumber(this.stage.vars.level) === 6) {
          this.broadcast("beat6");
        } else {
          if (this.toNumber(this.stage.vars.level) === 7) {
            this.broadcast("beat7");
          } else {
            null;
          }
        }
      }
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}

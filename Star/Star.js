/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Star extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("beat4/20", "./Star/costumes/beat4/20.png", {
        x: 178,
        y: 58,
      }),
      new Costume("beat6", "./Star/costumes/beat6.png", { x: 178, y: 58 }),
      new Costume("beat5", "./Star/costumes/beat5.png", { x: 178, y: 58 }),
    ];

    this.sounds = [new Sound("circus", "./Star/sounds/circus.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "help wanted" },
        this.whenIReceiveHelpWanted
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
    ];

    this.audioEffects.volume = 5;
  }

  *whenGreenFlagClicked() {
    this.goto(-130, 0);
    this.size = 50;
    this.visible = false;
  }

  *whenIReceiveMessage1() {
    if (this.toNumber(this.stage.vars.beat5) === 1) {
      if (this.toNumber(this.stage.vars.beat420) === 1) {
        this.costume = "beat4/20";
      } else {
        if (this.toNumber(this.stage.vars.beat6) === 1) {
          this.costume = "beat6";
        } else {
          if (this.toNumber(this.stage.vars.beat5) === 1) {
            this.costume = "beat5";
          } else {
            null;
          }
        }
      }
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveHelpWanted() {
    this.visible = false;
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.audioEffects.volume = 5;
    while (true) {
      yield* this.wait(5);
      if (this.random(1, 100) === 1) {
        yield* this.playSoundUntilDone("circus");
      }
      yield;
    }
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}

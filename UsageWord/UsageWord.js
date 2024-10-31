/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class UsageWord extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("text", "./UsageWord/costumes/text.png", { x: 72, y: 14 }),
    ];

    this.sounds = [
      new Sound("deep steps", "./UsageWord/sounds/deep steps.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "very close" },
        this.whenIReceiveVeryClose
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "closer" },
        this.whenIReceiveCloser
      ),
      new Trigger(Trigger.BROADCAST, { name: "far" }, this.whenIReceiveFar),
      new Trigger(Trigger.BROADCAST, { name: "close" }, this.whenIReceiveClose),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
    ];

    this.audioEffects.volume = 10;
  }

  *whenGreenFlagClicked() {
    this.size = 40;
    this.goto(-212, -117);
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
  }

  *whenIReceivePowerOut() {
    this.visible = false;
  }

  *whenIReceiveVeryClose() {
    this.audioEffects.volume = 40;
    yield* this.startSound("deep steps");
  }

  *whenIReceiveCloser() {
    this.audioEffects.volume = 30;
    yield* this.startSound("deep steps");
  }

  *whenIReceiveFar() {
    this.audioEffects.volume = 10;
    yield* this.startSound("deep steps");
  }

  *whenIReceiveClose() {
    this.audioEffects.volume = 20;
    yield* this.startSound("deep steps");
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}

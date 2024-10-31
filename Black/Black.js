/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Black extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blank", "./Black/costumes/blank.png", { x: 480, y: 270 }),
    ];

    this.sounds = [
      new Sound("garble1", "./Black/sounds/garble1.wav"),
      new Sound("garble2", "./Black/sounds/garble2.wav"),
      new Sound("garble3", "./Black/sounds/garble3.wav"),
      new Sound(
        "COMPUTER_DIGITAL_L2076505",
        "./Black/sounds/COMPUTER_DIGITAL_L2076505.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "inturrupt" },
        this.whenIReceiveInturrupt
      ),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "creepy end" },
        this.whenIReceiveCreepyEnd
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveInturrupt() {
    if (!(this.toString(this.stage.vars.camera) === "Kitchen")) {
      this.broadcast("camera");
      this.visible = true;
      yield* this.startSound(this.random(1, 4));
      yield* this.wait(3);
      this.visible = false;
    }
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveCreepyEnd() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}

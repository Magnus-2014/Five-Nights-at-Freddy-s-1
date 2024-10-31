/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Black2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blank", "./Black2/costumes/blank.png", { x: 480, y: 270 }),
    ];

    this.sounds = [
      new Sound("garble1", "./Black2/sounds/garble1.wav"),
      new Sound("garble2", "./Black2/sounds/garble2.wav"),
      new Sound("garble3", "./Black2/sounds/garble3.wav"),
      new Sound(
        "COMPUTER_DIGITAL_L2076505",
        "./Black2/sounds/COMPUTER_DIGITAL_L2076505.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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

  *whenIReceiveCreepyEnd() {
    this.moveAhead();
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = true;
  }
}

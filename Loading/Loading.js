/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Loading extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("icon", "./Loading/costumes/icon.png", { x: 40, y: 40 }),
    ];

    this.sounds = [
      new Sound(
        "DOOR_POUNDING_ME_D0291401",
        "./Loading/sounds/DOOR_POUNDING_ME_D0291401.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "loading" },
        this.whenIReceiveLoading
      ),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
    ];

    this.audioEffects.volume = 47;
  }

  *whenGreenFlagClicked() {}

  *whenIReceiveLoading() {}

  *whenIReceiveStart() {}

  *whenIReceiveWin() {}

  *whenIReceiveDead() {}
}

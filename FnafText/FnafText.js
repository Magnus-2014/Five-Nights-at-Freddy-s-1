/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class FnafText extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("text", "./FnafText/costumes/text.png", { x: 200, y: 212 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Help Wanted" },
        this.whenIReceiveHelpWanted
      ),
    ];
  }

  *whenIReceiveMessage1() {
    this.goto(-135, 55);
    this.size = 40;
    this.visible = true;
  }

  *whenIReceiveHelpWanted() {
    this.visible = false;
  }
}

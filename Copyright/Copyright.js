/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Copyright extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("text", "./Copyright/costumes/text.png", { x: -14, y: 38 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "help wanted" },
        this.whenIReceiveHelpWanted
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
    ];
  }

  *whenIReceiveHelpWanted() {
    this.visible = false;
  }

  *whenIReceiveMessage1() {
    this.goto(145, -135);
    this.size = 40;
    this.visible = true;
  }
}

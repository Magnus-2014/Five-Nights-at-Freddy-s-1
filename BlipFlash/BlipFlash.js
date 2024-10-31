/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlipFlash extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("4", "./BlipFlash/costumes/4.png", { x: 480, y: 154 }),
      new Costume("6", "./BlipFlash/costumes/6.png", { x: 480, y: 182 }),
      new Costume("8", "./BlipFlash/costumes/8.png", { x: 480, y: 270 }),
      new Costume("9", "./BlipFlash/costumes/9.png", { x: 480, y: 76 }),
      new Costume("10", "./BlipFlash/costumes/10.png", { x: 480, y: -126 }),
      new Costume("11", "./BlipFlash/costumes/11.png", { x: 480, y: 270 }),
      new Costume("21", "./BlipFlash/costumes/21.png", { x: 480, y: 194 }),
      new Costume("22", "./BlipFlash/costumes/22.png", { x: 480, y: -54 }),
      new Costume("25", "./BlipFlash/costumes/25.png", { x: 480, y: 198 }),
    ];

    this.sounds = [new Sound("blip3", "./BlipFlash/sounds/blip3.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "blip" }, this.whenIReceiveBlip),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
    ];
  }

  *whenIReceiveBlip() {
    this.visible = true;
    yield* this.startSound("blip3");
    this.costume = 11;
    yield* this.wait(0);
    for (let i = 0; i < 8; i++) {
      this.costumeNumber++;
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveCamera() {
    this.broadcast("blip");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }
}

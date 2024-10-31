/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Fan extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fan1", "./Fan/costumes/fan1.svg", { x: 7, y: 19 }),
      new Costume("fan2", "./Fan/costumes/fan2.svg", { x: 7, y: 19 }),
      new Costume("fan3", "./Fan/costumes/fan3.svg", { x: 7, y: 19 }),
    ];

    this.sounds = [new Sound("ambience2", "./Fan/sounds/ambience2.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "office" },
        this.whenIReceiveOffice
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(60, 0);
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
    while (true) {
      if (this.toNumber(this.stage.vars.moniter) === 0) {
        this.costumeNumber++;
      }
      yield;
    }
  }

  *whenIReceiveOffice() {
    this.visible = true;
  }

  *whenIReceiveCamera() {
    this.visible = false;
  }

  *whenIReceiveStart2() {
    while (true) {
      this.goto(this.sprites["Pan"].x, this.sprites["Pan"].y);
      yield;
    }
  }

  *whenIReceivePowerOut() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    while (true) {
      yield* this.playSoundUntilDone("ambience2");
      yield;
    }
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

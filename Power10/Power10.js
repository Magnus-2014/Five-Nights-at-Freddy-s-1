/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Power10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("0", "./Power10/costumes/0.png", { x: 12, y: 16 }),
      new Costume("1", "./Power10/costumes/1.png", { x: 8, y: 16 }),
      new Costume("2", "./Power10/costumes/2.png", { x: 12, y: 16 }),
      new Costume("3", "./Power10/costumes/3.png", { x: 12, y: 16 }),
      new Costume("4", "./Power10/costumes/4.png", { x: 12, y: 16 }),
      new Costume("5", "./Power10/costumes/5.png", { x: 12, y: 16 }),
      new Costume("6", "./Power10/costumes/6.png", { x: 12, y: 16 }),
      new Costume("7", "./Power10/costumes/7.png", { x: 12, y: 16 }),
      new Costume("8", "./Power10/costumes/8.png", { x: 12, y: 16 }),
      new Costume("9", "./Power10/costumes/9.png", { x: 12, y: 16 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
    ];
  }

  *whenIReceiveStart() {
    while (true) {
      this.costume = this.letterOf(
        this.toNumber(this.stage.vars.power) / 10,
        0
      );
      yield;
    }
  }

  *whenIReceiveStart2() {
    while (true) {
      if (this.compare(this.toNumber(this.stage.vars.power) / 10, 10) < 0) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(-165, -105);
    this.costume = 9;
    this.size = 55;
    this.visible = false;
  }

  *whenIReceivePowerOut() {
    this.visible = false;
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

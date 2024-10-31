/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Power01 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("0", "./Power01/costumes/0.png", { x: 12, y: 16 }),
      new Costume("1", "./Power01/costumes/1.png", { x: 8, y: 16 }),
      new Costume("2", "./Power01/costumes/2.png", { x: 12, y: 16 }),
      new Costume("3", "./Power01/costumes/3.png", { x: 12, y: 16 }),
      new Costume("4", "./Power01/costumes/4.png", { x: 12, y: 16 }),
      new Costume("5", "./Power01/costumes/5.png", { x: 12, y: 16 }),
      new Costume("6", "./Power01/costumes/6.png", { x: 12, y: 16 }),
      new Costume("7", "./Power01/costumes/7.png", { x: 12, y: 16 }),
      new Costume("8", "./Power01/costumes/8.png", { x: 12, y: 16 }),
      new Costume("9", "./Power01/costumes/9.png", { x: 12, y: 16 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-157, -105);
    this.costume = 9;
    this.size = 55;
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
    while (true) {
      if (this.compare(this.toNumber(this.stage.vars.power) / 10, 10) > 0) {
        this.costume = this.letterOf(
          this.toNumber(this.stage.vars.power) / 10,
          1
        );
      } else {
        this.costume = this.letterOf(
          this.toNumber(this.stage.vars.power) / 10,
          0
        );
      }
      yield;
    }
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

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TimeAm extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("text", "./TimeAm/costumes/text.png", { x: 42, y: 26 }),
      new Costume("12am", "./TimeAm/costumes/12am.png", { x: 151, y: 30 }),
      new Costume("1am", "./TimeAm/costumes/1am.png", { x: 93, y: 30 }),
      new Costume("2am", "./TimeAm/costumes/2am.png", { x: 111, y: 28 }),
      new Costume("3am", "./TimeAm/costumes/3am.png", { x: 101, y: 30 }),
      new Costume("4am", "./TimeAm/costumes/4am.png", { x: 101, y: 30 }),
      new Costume("5am", "./TimeAm/costumes/5am.png", { x: 106, y: 30 }),
      new Costume("6am", "./TimeAm/costumes/6am.png", { x: 101, y: 30 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "Intro" }, this.whenIReceiveIntro),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 40;
    this.goto(216, 116);
    this.visible = false;
  }

  *whenIReceivePowerOut() {
    this.visible = false;
  }

  *whenIReceiveIntro() {
    this.costume = "12am";
    this.stage.vars.time = 0;
  }

  *whenIReceiveStart() {
    this.visible = true;
    for (let i = 0; i < 6; i++) {
      yield* this.wait(90);
      this.stage.vars.time++;
      this.costume = this.toString(this.stage.vars.time) + "am";
      yield;
    }
    this.broadcast("win");
    this.stopAllSounds();
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}

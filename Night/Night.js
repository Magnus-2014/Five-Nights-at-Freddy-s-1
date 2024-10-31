/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Night extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("text", "./Night/costumes/text.png", { x: 62, y: 14 }),
      new Costume("string", "./Night/costumes/string.png", { x: 62, y: 22 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Continue HL" },
        this.whenIReceiveContinueHl
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NewGame HL" },
        this.whenIReceiveNewgameHl
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Continue" },
        this.whenIReceiveContinue
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "6Night HL" },
        this.whenIReceive6nightHl
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Custom HL" },
        this.whenIReceiveCustomHl
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 40;
    this.visible = false;
  }

  *whenIReceivePowerOut() {
    this.visible = false;
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

  *whenIReceiveStart() {
    this.costume = "text";
    this.goto(200, 105);
    this.visible = true;
  }

  *whenIReceiveContinueHl() {
    this.visible = true;
  }

  *whenIReceiveNewgameHl() {
    this.visible = false;
  }

  *whenIReceiveContinue() {
    this.visible = false;
  }

  *whenIReceiveMessage1() {
    this.costume = "string";
    this.goto(-160, -70);
  }

  *whenIReceive6nightHl() {
    this.visible = false;
  }

  *whenIReceiveCustomHl() {
    this.visible = false;
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class UsageBars extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Usage1", "./UsageBars/costumes/Usage1.png", {
        x: 102,
        y: 32,
      }),
      new Costume("Usage2", "./UsageBars/costumes/Usage2.png", {
        x: 102,
        y: 32,
      }),
      new Costume("Usage3", "./UsageBars/costumes/Usage3.png", {
        x: 102,
        y: 32,
      }),
      new Costume("Usage4", "./UsageBars/costumes/Usage4.png", {
        x: 102,
        y: 32,
      }),
      new Costume("Usage5", "./UsageBars/costumes/Usage5.png", {
        x: 102,
        y: 32,
      }),
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
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-175, -118);
    this.size = 40;
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
    while (true) {
      this.costume =
        "Usage" +
        this.toString(
          1 +
            (this.toNumber(this.stage.vars.leftDoor) +
              this.toNumber(this.stage.vars.leftLight) +
              (this.toNumber(this.stage.vars.rightDoor) +
                this.toNumber(this.stage.vars.rightLight)) +
              this.toNumber(this.stage.vars.cams))
        );
      yield;
    }
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
}

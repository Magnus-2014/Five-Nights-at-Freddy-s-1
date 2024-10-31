/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PowerLeft extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("text", "./PowerLeft/costumes/text.png", { x: 136, y: 14 }),
    ];

    this.sounds = [new Sound("powerdown", "./PowerLeft/sounds/powerdown.wav")];

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
    this.goto(-200, -105);
    this.size = 40;
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
    this.stage.vars.power = 999;
    while (
      !(
        this.toNumber(this.stage.vars.power) === 0 ||
        this.compare(this.stage.vars.power, 0) < 0
      )
    ) {
      yield* this.wait(1);
      if (this.compare(this.stage.vars.level, 5) < 0) {
        this.stage.vars.power +=
          -1 *
          this.toNumber(
            this.toString(
              1 +
                (this.toNumber(this.stage.vars.leftDoor) +
                  this.toNumber(this.stage.vars.leftLight) +
                  (this.toNumber(this.stage.vars.rightDoor) +
                    this.toNumber(this.stage.vars.rightLight)) +
                  this.toNumber(this.stage.vars.cams))
            ) +
              ("." + this.toString(this.toNumber(this.stage.vars.level) - 1))
          );
      } else {
        this.stage.vars.power +=
          -1 *
          this.toNumber(
            this.toString(
              1 +
                (this.toNumber(this.stage.vars.leftDoor) +
                  this.toNumber(this.stage.vars.leftLight) +
                  (this.toNumber(this.stage.vars.rightDoor) +
                    this.toNumber(this.stage.vars.rightLight)) +
                  this.toNumber(this.stage.vars.cams))
            ) + ".4"
          );
      }
      yield;
    }
    this.broadcast("Office");
    this.stage.vars.moniter = 0;
    this.broadcast("power out");
    yield* this.startSound("powerdown");
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

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SupplyCloset extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("clear", "./SupplyCloset/costumes/clear.png", {
        x: 480,
        y: 216,
      }),
      new Costume("bonnie", "./SupplyCloset/costumes/bonnie.png", {
        x: 480,
        y: 216,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office" },
        this.whenIReceiveOffice
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveOffice() {
    this.visible = false;
  }

  *whenIReceiveCamera() {
    if (this.toString(this.stage.vars.bonnieLocation) === "Supply Closet") {
      this.costume = "bonnie";
    } else {
      this.costume = "clear";
    }
    if (this.toString(this.stage.vars.camera) === "Supply Closet") {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveStart() {
    this.goto(60, 0);
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

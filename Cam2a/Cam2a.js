/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cam2a extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Inactive", "./Cam2a/costumes/Inactive.png", {
        x: 60,
        y: 40,
      }),
      new Costume("Active", "./Cam2a/costumes/Active.png", { x: 60, y: 40 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office" },
        this.whenIReceiveOffice
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera2
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera3
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 40;
    this.goto(126, -91);
    this.visible = false;
  }

  *whenIReceiveCamera() {
    this.visible = true;
  }

  *whenIReceiveOffice() {
    this.visible = false;
  }

  *whenIReceiveCamera2() {
    if (!(this.toString(this.stage.vars.camera) === "West Hall")) {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.costume = "Inactive";
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("Camera");
    this.stage.vars.camera = "West Hall";
  }

  *whenIReceiveCamera3() {
    while (true) {
      this.moveAhead();
      if (this.toString(this.stage.vars.camera) === "West Hall") {
        this.costume = "Active";
        yield* this.wait(0.5);
        this.costume = "Inactive";
        yield* this.wait(0.5);
      }
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

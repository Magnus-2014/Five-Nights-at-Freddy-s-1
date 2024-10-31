/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Backstage extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("clear", "./Backstage/costumes/clear.png", {
        x: 480,
        y: 216,
      }),
      new Costume("stare", "./Backstage/costumes/stare.png", {
        x: 480,
        y: 216,
      }),
      new Costume("bonnie", "./Backstage/costumes/bonnie.png", {
        x: 480,
        y: 216,
      }),
      new Costume("bonnie stare", "./Backstage/costumes/bonnie stare.png", {
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Moniter" },
        this.whenIReceiveMoniter
      ),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
    ];

    this.vars.visions = 82;
  }

  *whenGreenFlagClicked() {
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveOffice() {
    this.visible = false;
  }

  *whenIReceiveCamera() {
    if (this.toString(this.stage.vars.bonnieLocation) === "Backstage") {
      if (this.toNumber(this.stage.vars.bonniePosition) === 1) {
        this.costume = "bonnie";
      } else {
        if (this.toNumber(this.stage.vars.bonniePosition) === 2) {
          this.costume = "bonnie stare";
        } else {
          null;
        }
      }
    } else {
      if (this.toNumber(this.vars.visions) === 1) {
        this.costume = "stare";
      } else {
        this.costume = "clear";
      }
    }
    if (this.toString(this.stage.vars.camera) === "Backstage") {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveStart() {
    while (true) {
      this.goto(this.sprites["ShowStage"].x, this.sprites["ShowStage"].y);
      yield;
    }
  }

  *whenIReceiveMoniter() {
    this.vars.visions = this.random(1, 100);
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

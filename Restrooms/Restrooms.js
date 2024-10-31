/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Restrooms extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("clear", "./Restrooms/costumes/clear.png", {
        x: 480,
        y: 216,
      }),
      new Costume("chica", "./Restrooms/costumes/chica.png", {
        x: 480,
        y: 216,
      }),
      new Costume("chica close", "./Restrooms/costumes/chica close.png", {
        x: 480,
        y: 216,
      }),
      new Costume("freddy", "./Restrooms/costumes/freddy.png", {
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
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
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
    if (this.toString(this.stage.vars.chicaLocation) === "Restrooms") {
      if (this.toNumber(this.stage.vars.chicaPosition) === 1) {
        this.costume = "chica";
      } else {
        if (this.toNumber(this.stage.vars.chicaPosition) === 2) {
          this.costume = "chica close";
        } else {
          null;
        }
      }
    } else {
      if (this.toString(this.stage.vars.freddyLocation) === "Restrooms") {
        this.costume = "freddy";
      } else {
        this.costume = "clear";
      }
    }
    if (this.toString(this.stage.vars.camera) === "Restrooms") {
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

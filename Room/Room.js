/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Room extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Show Stage", "./Room/costumes/Show Stage.png", {
        x: 216,
        y: 26,
      }),
      new Costume("Dining Area", "./Room/costumes/Dining Area.png", {
        x: 238,
        y: 26,
      }),
      new Costume("Pirate Cove", "./Room/costumes/Pirate Cove.png", {
        x: 260,
        y: 28,
      }),
      new Costume("West Hall", "./Room/costumes/West Hall.png", {
        x: 192,
        y: 26,
      }),
      new Costume("W. Hall Corner", "./Room/costumes/W. Hall Corner.png", {
        x: 304,
        y: 26,
      }),
      new Costume("Supply Closet", "./Room/costumes/Supply Closet.png", {
        x: 284,
        y: 26,
      }),
      new Costume("East Hall", "./Room/costumes/East Hall.png", {
        x: 192,
        y: 26,
      }),
      new Costume("E. Hall Corner", "./Room/costumes/E. Hall Corner.png", {
        x: 304,
        y: 26,
      }),
      new Costume("Backstage", "./Room/costumes/Backstage.png", {
        x: 194,
        y: 26,
      }),
      new Costume("Kitchen", "./Room/costumes/Kitchen.png", { x: 150, y: 26 }),
      new Costume("Restrooms", "./Room/costumes/Restrooms.png", {
        x: 196,
        y: 26,
      }),
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
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "Show Stage";
    this.goto(112, 17);
    this.size = 40;
    this.visible = false;
  }

  *whenIReceiveCamera() {
    this.visible = true;
  }

  *whenIReceiveOffice() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    while (true) {
      this.costume = this.stage.vars.camera;
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

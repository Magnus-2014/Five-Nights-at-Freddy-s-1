/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DoorR extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("DoorR (5)", "./DoorR/costumes/DoorR (5).png", {
        x: 106,
        y: 326,
      }),
      new Costume("DoorR (6)", "./DoorR/costumes/DoorR (6).png", {
        x: 108,
        y: 326,
      }),
      new Costume("DoorR (8)", "./DoorR/costumes/DoorR (8).png", {
        x: 106,
        y: 326,
      }),
      new Costume("DoorR (12)", "./DoorR/costumes/DoorR (12).png", {
        x: 106,
        y: 328,
      }),
      new Costume("DoorR (13)", "./DoorR/costumes/DoorR (13).png", {
        x: 106,
        y: 326,
      }),
      new Costume("DoorR (1)", "./DoorR/costumes/DoorR (1).png", {
        x: 106,
        y: 326,
      }),
      new Costume("DoorR (4)", "./DoorR/costumes/DoorR (4).png", {
        x: 106,
        y: 326,
      }),
      new Costume("DoorR (3)", "./DoorR/costumes/DoorR (3).png", {
        x: 106,
        y: 328,
      }),
      new Costume("DoorR (10)", "./DoorR/costumes/DoorR (10).png", {
        x: 106,
        y: 326,
      }),
      new Costume("DoorR (2)", "./DoorR/costumes/DoorR (2).png", {
        x: 106,
        y: 326,
      }),
      new Costume("DoorR (11)", "./DoorR/costumes/DoorR (11).png", {
        x: 106,
        y: 328,
      }),
      new Costume("DoorR (7)", "./DoorR/costumes/DoorR (7).png", {
        x: 106,
        y: 326,
      }),
      new Costume("DoorR (9)", "./DoorR/costumes/DoorR (9).png", {
        x: 106,
        y: 326,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
    ];

    this.vars.frame = 13;
  }

  *whenGreenFlagClicked() {
    this.size = 78;
    this.visible = false;
  }

  *whenIReceiveStart() {
    while (true) {
      this.goto(this.sprites["Pan"].x + 223, 6);
      yield;
    }
  }

  *whenIReceiveCamera() {
    this.visible = false;
  }

  *whenIReceiveStart2() {
    while (true) {
      while (!(this.toNumber(this.stage.vars.rightDoor) === 1)) {
        yield;
      }
      this.broadcast("door sound");
      this.visible = true;
      this.vars.frame = 1;
      this.costume = "DoorR (1)";
      while (!(this.sprites["DoorR"].costume.name === "DoorR (13)")) {
        this.vars.frame++;
        this.costume = "DoorR (" + (this.toString(this.vars.frame) + ")");
        yield;
      }
      while (!(this.toNumber(this.stage.vars.rightDoor) === 0)) {
        yield;
      }
      this.broadcast("door sound");
      this.vars.frame = 13;
      this.costume = "DoorR (13)";
      while (!(this.sprites["DoorR"].costume.name === "DoorR (1)")) {
        this.vars.frame--;
        this.costume = "DoorR (" + (this.toString(this.vars.frame) + ")");
        yield;
      }
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveOffice() {
    while (true) {
      if (this.compare(this.x, 265) > 0) {
        yield* this.wait(0.01);
        this.visible = false;
      } else {
        if (this.toNumber(this.stage.vars.rightDoor) === 1) {
          if (this.toNumber(this.stage.vars.cams) === 1) {
            this.visible = false;
          } else {
            this.visible = true;
          }
        }
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

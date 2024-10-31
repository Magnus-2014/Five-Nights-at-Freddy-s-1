/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DoorL extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("DoorL (2)", "./DoorL/costumes/DoorL (2).png", {
        x: 82,
        y: 328,
      }),
      new Costume("DoorL (3)", "./DoorL/costumes/DoorL (3).png", {
        x: 82,
        y: 328,
      }),
      new Costume("DoorL (4)", "./DoorL/costumes/DoorL (4).png", {
        x: 82,
        y: 328,
      }),
      new Costume("DoorL (10)", "./DoorL/costumes/DoorL (10).png", {
        x: 84,
        y: 330,
      }),
      new Costume("DoorL (12)", "./DoorL/costumes/DoorL (12).png", {
        x: 84,
        y: 328,
      }),
      new Costume("DoorL (9)", "./DoorL/costumes/DoorL (9).png", {
        x: 84,
        y: 328,
      }),
      new Costume("DoorL (1)", "./DoorL/costumes/DoorL (1).png", {
        x: -100,
        y: 190,
      }),
      new Costume("DoorL (11)", "./DoorL/costumes/DoorL (11).png", {
        x: 84,
        y: 331,
      }),
      new Costume("DoorL (13)", "./DoorL/costumes/DoorL (13).png", {
        x: 84,
        y: 328,
      }),
      new Costume("DoorL (6)", "./DoorL/costumes/DoorL (6).png", {
        x: 82,
        y: 328,
      }),
      new Costume("DoorL (7)", "./DoorL/costumes/DoorL (7).png", {
        x: 82,
        y: 328,
      }),
      new Costume("DoorL (5)", "./DoorL/costumes/DoorL (5).png", {
        x: 82,
        y: 328,
      }),
      new Costume("DoorL (8)", "./DoorL/costumes/DoorL (8).png", {
        x: 84,
        y: 328,
      }),
    ];

    this.sounds = [
      new Sound("SFXBible_12478", "./DoorL/sounds/SFXBible_12478.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "door sound" },
        this.whenIReceiveDoorSound
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
    ];

    this.vars.frame = 13;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCamera() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    while (true) {
      while (!(this.toNumber(this.stage.vars.leftDoor) === 1)) {
        yield;
      }
      this.broadcast("door sound");
      this.visible = true;
      this.vars.frame = 1;
      this.costume = "DoorL (1)";
      while (!(this.sprites["DoorL"].costume.name === "DoorL (13)")) {
        this.vars.frame++;
        this.costume = "DoorL (" + (this.toString(this.vars.frame) + ")");
        yield;
      }
      while (!(this.toNumber(this.stage.vars.leftDoor) === 0)) {
        yield;
      }
      this.broadcast("door sound");
      this.vars.frame = 13;
      this.costume = "DoorL (13)";
      while (!(this.sprites["DoorL"].costume.name === "DoorL (1)")) {
        this.vars.frame--;
        this.costume = "DoorL (" + (this.toString(this.vars.frame) + ")");
        yield;
      }
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveStart2() {
    while (true) {
      this.goto(this.sprites["Pan"].x - 235, 4);
      yield;
    }
  }

  *whenIReceiveOffice() {
    while (true) {
      if (this.x === -268) {
        yield* this.wait(0.01);
        this.visible = false;
      } else {
        if (this.toNumber(this.stage.vars.leftDoor) === 1) {
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

  *whenIReceiveDoorSound() {
    yield* this.startSound("SFXBible_12478");
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

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RightButtonPanel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("both off", "./RightButtonPanel/costumes/both off.png", {
        x: 52,
        y: 164,
      }),
      new Costume("door on", "./RightButtonPanel/costumes/door on.png", {
        x: 52,
        y: 164,
      }),
      new Costume("light on", "./RightButtonPanel/costumes/light on.png", {
        x: 52,
        y: 164,
      }),
      new Costume("both on", "./RightButtonPanel/costumes/both on.png", {
        x: 52,
        y: 164,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(Trigger.BROADCAST, { name: "Intro" }, this.whenIReceiveIntro),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart3
      ),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    if (this.compare(this.mouse.y, -25) < 0) {
      if (this.toNumber(this.stage.vars.rightLight) === 0) {
        if (this.toString(this.stage.vars.chicaLocation) === "Got You") {
          this.broadcast("Error");
        } else {
          this.stage.vars.rightLight = 1;
          this.stage.vars.leftLight = 0;
        }
      } else {
        if (this.toNumber(this.stage.vars.rightLight) === 1) {
          this.stage.vars.rightLight = 0;
        } else {
          null;
        }
      }
    } else {
      if (this.compare(this.mouse.y, -18) > 0) {
        if (this.toNumber(this.stage.vars.rightDoor) === 0) {
          if (this.toString(this.stage.vars.chicaLocation) === "Got You") {
            this.broadcast("Error");
          } else {
            this.stage.vars.rightDoor = 1;
          }
        } else {
          if (this.toNumber(this.stage.vars.rightDoor) === 1) {
            this.stage.vars.rightDoor = 0;
          } else {
            null;
          }
        }
      } else {
        null;
      }
    }
  }

  *whenIReceiveStart() {
    while (true) {
      if (
        this.toNumber(this.stage.vars.rightDoor) === 1 &&
        this.toNumber(this.stage.vars.rightLight) === 1
      ) {
        this.costume = "both on";
      } else {
        if (
          this.toNumber(this.stage.vars.rightDoor) === 1 &&
          this.toNumber(this.stage.vars.rightLight) === 0
        ) {
          this.costume = "door on";
        } else {
          if (
            this.toNumber(this.stage.vars.rightDoor) === 0 &&
            this.toNumber(this.stage.vars.rightLight) === 1
          ) {
            this.costume = "light on";
          } else {
            if (
              this.toNumber(this.stage.vars.rightDoor) === 0 &&
              this.toNumber(this.stage.vars.rightLight) === 0
            ) {
              this.costume = "both off";
            } else {
              null;
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveCamera() {
    this.stage.vars.rightLight = 0;
  }

  *whenIReceiveIntro() {
    this.stage.vars.rightLight = 0;
    this.stage.vars.rightDoor = 0;
    this.size = 34;
  }

  *whenIReceiveCamera2() {
    this.visible = false;
  }

  *whenIReceiveStart2() {
    while (true) {
      if (this.toNumber(this.stage.vars.cams) === 1) {
        this.visible = false;
      } else {
        if (this.compare(this.x, 238) > 0) {
          this.visible = false;
        } else {
          this.visible = true;
        }
      }
      yield;
    }
  }

  *whenIReceivePowerOut() {
    this.stage.vars.rightDoor = 0;
    this.stage.vars.rightLight = 0;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveStart3() {
    while (true) {
      this.goto(this.sprites["Pan"].x + 275, -24);
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

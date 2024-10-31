/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LeftButtonPanel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("both off", "./LeftButtonPanel/costumes/both off.png", {
        x: 465,
        y: 6,
      }),
      new Costume("door on", "./LeftButtonPanel/costumes/door on.png", {
        x: 465,
        y: 6,
      }),
      new Costume("light on", "./LeftButtonPanel/costumes/light on.png", {
        x: 465,
        y: 6,
      }),
      new Costume("both on", "./LeftButtonPanel/costumes/both on.png", {
        x: 465,
        y: 6,
      }),
    ];

    this.sounds = [
      new Sound(
        "BallastHumMedium2",
        "./LeftButtonPanel/sounds/BallastHumMedium2.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart3
      ),
      new Trigger(Trigger.BROADCAST, { name: "Intro" }, this.whenIReceiveIntro),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
    ];

    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveOffice() {
    this.visible = true;
  }

  *whenIReceiveStart() {
    while (true) {
      this.goto(this.sprites["Pan"].x, this.sprites["Pan"].y);
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.compare(this.mouse.y, -25) < 0) {
      if (this.toNumber(this.stage.vars.leftLight) === 0) {
        if (this.toString(this.stage.vars.bonnieLocation) === "Got You") {
          this.broadcast("Error");
        } else {
          this.stage.vars.leftLight = 1;
          this.stage.vars.rightLight = 0;
        }
      } else {
        if (this.toNumber(this.stage.vars.leftLight) === 1) {
          this.stage.vars.leftLight = 0;
        } else {
          null;
        }
      }
    } else {
      if (this.compare(this.mouse.y, -18) > 0) {
        if (this.toNumber(this.stage.vars.leftDoor) === 0) {
          if (this.toString(this.stage.vars.bonnieLocation) === "Got You") {
            this.broadcast("Error");
          } else {
            this.stage.vars.leftDoor = 1;
          }
        } else {
          if (this.toNumber(this.stage.vars.leftDoor) === 1) {
            this.stage.vars.leftDoor = 0;
          } else {
            null;
          }
        }
      } else {
        null;
      }
    }
  }

  *whenIReceiveStart2() {
    while (true) {
      if (
        this.toNumber(this.stage.vars.leftDoor) === 1 &&
        this.toNumber(this.stage.vars.leftLight) === 1
      ) {
        this.costume = "both on";
      } else {
        if (
          this.toNumber(this.stage.vars.leftDoor) === 1 &&
          this.toNumber(this.stage.vars.leftLight) === 0
        ) {
          this.costume = "door on";
        } else {
          if (
            this.toNumber(this.stage.vars.leftDoor) === 0 &&
            this.toNumber(this.stage.vars.leftLight) === 1
          ) {
            this.costume = "light on";
          } else {
            if (
              this.toNumber(this.stage.vars.leftDoor) === 0 &&
              this.toNumber(this.stage.vars.leftLight) === 0
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

  *whenIReceiveStart3() {
    while (true) {
      if (this.compare(this.x, 42) < 0) {
        this.visible = false;
      } else {
        if (this.toNumber(this.stage.vars.cams) === 1) {
          this.visible = false;
        } else {
          this.visible = true;
        }
      }
      yield;
    }
  }

  *whenIReceiveIntro() {
    this.stage.vars.leftLight = 0;
    this.stage.vars.leftDoor = 0;
    this.goto(60, 0);
    this.size = 125;
  }

  *whenIReceiveCamera() {
    this.visible = false;
  }

  *whenIReceiveStart4() {
    while (true) {
      if (
        this.toNumber(this.stage.vars.leftLight) === 1 ||
        this.toNumber(this.stage.vars.rightLight) === 1
      ) {
        this.audioEffects.volume = 100;
      } else {
        this.audioEffects.volume = 0;
      }
      yield;
    }
  }

  *whenIReceiveCamera2() {
    this.stage.vars.leftLight = 0;
  }

  *whenIReceiveStart5() {
    while (true) {
      yield* this.playSoundUntilDone("BallastHumMedium2");
      yield;
    }
  }

  *whenIReceivePowerOut() {
    this.stage.vars.leftLight = 0;
    this.stage.vars.leftDoor = 0;
    this.audioEffects.volume = 0;
    /* TODO: Implement stop other scripts in sprite */ null;
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

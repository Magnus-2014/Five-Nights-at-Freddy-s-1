/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PirateCove extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "curtain closed",
        "./PirateCove/costumes/curtain closed.png",
        { x: 480, y: 216 }
      ),
      new Costume("peeking out", "./PirateCove/costumes/peeking out.png", {
        x: 480,
        y: 216,
      }),
      new Costume(
        "standing outside",
        "./PirateCove/costumes/standing outside.png",
        { x: 480, y: 216 }
      ),
      new Costume("leave cove", "./PirateCove/costumes/leave cove.png", {
        x: 480,
        y: 216,
      }),
      new Costume(
        "leave cove it's me",
        "./PirateCove/costumes/leave cove it's me.png",
        { x: 480, y: 216 }
      ),
    ];

    this.sounds = [
      new Sound("pirate song2", "./PirateCove/sounds/pirate song2.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Moniter" },
        this.whenIReceiveMoniter
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart3
      ),
    ];

    this.audioEffects.volume = 5;

    this.vars.visions = 0;
  }

  *whenGreenFlagClicked() {
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveOffice() {
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

  *whenIReceiveStart() {
    while (true) {
      this.goto(this.sprites["ShowStage"].x, this.sprites["ShowStage"].y);
      yield;
    }
  }

  *whenIReceiveMoniter() {
    if (this.random(1, 100) === 1) {
      this.vars.visions = 1;
    } else {
      this.vars.visions = 0;
    }
  }

  *whenIReceiveStart2() {
    while (true) {
      if (
        this.toNumber(this.stage.vars.cams) === 1 &&
        this.toString(this.stage.vars.camera) === "Pirate Cove"
      ) {
        this.audioEffects.volume = 15;
      } else {
        this.audioEffects.volume = 5;
      }
      yield;
    }
  }

  *whenIReceiveCamera() {
    if (this.toNumber(this.stage.vars.foxyProgress) === 1) {
      this.costume = "curtain closed";
    } else {
      if (this.toNumber(this.stage.vars.foxyProgress) === 2) {
        this.costume = "peeking out";
      } else {
        if (this.toNumber(this.stage.vars.foxyProgress) === 3) {
          this.costume = "standing outside";
        } else {
          if (this.compare(this.stage.vars.foxyProgress, 3) > 0) {
            if (this.toNumber(this.vars.visions) === 1) {
              this.costume = "leave cove it's me";
            } else {
              this.costume = "leave cove";
            }
          } else {
            null;
          }
        }
      }
    }
    if (this.toString(this.stage.vars.camera) === "Pirate Cove") {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveStart3() {
    while (true) {
      if (this.toNumber(this.stage.vars.foxyProgress) === 1) {
        yield* this.wait(1);
        if (this.random(1, 100) === 1) {
          yield* this.playSoundUntilDone("pirate song2");
        }
      }
      yield;
    }
  }
}

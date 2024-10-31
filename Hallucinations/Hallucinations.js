/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hallucinations extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("It's Me1", "./Hallucinations/costumes/It's Me1.png", {
        x: 480,
        y: 270,
      }),
      new Costume("It's Me2", "./Hallucinations/costumes/It's Me2.png", {
        x: 480,
        y: 270,
      }),
      new Costume("Bonnie Eyes", "./Hallucinations/costumes/Bonnie Eyes.png", {
        x: 480,
        y: 270,
      }),
      new Costume("Freddy", "./Hallucinations/costumes/Freddy.png", {
        x: 480,
        y: 270,
      }),
      new Costume("Bonnie", "./Hallucinations/costumes/Bonnie.png", {
        x: 480,
        y: 270,
      }),
      new Costume(
        "Golden Freddy",
        "./Hallucinations/costumes/Golden Freddy.png",
        { x: 480, y: 270 }
      ),
      new Costume("NoJSGFreddy", "./Hallucinations/costumes/NoJSGFreddy.svg", {
        x: 240,
        y: 135,
      }),
    ];

    this.sounds = [
      new Sound("robotvoice", "./Hallucinations/sounds/robotvoice.wav"),
      new Sound("XSCREAM2", "./Hallucinations/sounds/XSCREAM2.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "scream" },
        this.whenIReceiveScream
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "golden freddy" },
        this.whenIReceiveGoldenFreddy
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.audioEffects.volume = 0;

    this.vars.a = 0;
    this.vars.b = 1;
    this.vars.vision = 4;
    this.vars.yellowbearShow = 0;
    this.vars.creepyEnd = 5264;
  }

  *whenIReceivePowerOut() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.audioEffects.volume = 0;
    this.visible = false;
  }

  *whenIReceiveScream() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.audioEffects.volume = 0;
    this.visible = false;
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.audioEffects.volume = 0;
    this.visible = false;
  }

  *whenIReceiveStart() {
    if (this.toNumber(this.stage.vars.jumpscares) === 1) {
      while (true) {
        this.vars.vision = this.random(1, 4);
        if (this.toNumber(this.vars.vision) === 1) {
          this.costume = "Freddy";
        } else {
          if (this.toNumber(this.vars.vision) === 2) {
            this.costume = "It's Me2";
          } else {
            if (this.toNumber(this.vars.vision) === 3) {
              this.costume = "Bonnie";
            } else {
              if (this.toNumber(this.vars.vision) === 4) {
                this.costume = "It's Me1";
              } else {
                null;
              }
            }
          }
        }
        yield;
      }
    }
  }

  *whenIReceiveStart2() {
    while (true) {
      if (
        (this.toNumber(this.vars.a) === 1 &&
          this.toNumber(this.vars.b) === 1) ||
        this.toNumber(this.vars.yellowbearShow) === 1
      ) {
        this.audioEffects.volume = 100;
      } else {
        if (
          this.compare(this.stage.vars.level, 4) > 0 &&
          this.toNumber(this.stage.vars.cams) === 1 &&
          ((this.toString(this.stage.vars.bonnieLocation) ===
            "W. Hall Corner" &&
            this.toString(this.stage.vars.camera) === "W. Hall Corner") ||
            (this.toString(this.stage.vars.camera) === "E. Hall Corner" &&
              this.toString(this.stage.vars.chicaLocation) ===
                "E. Hall Corner"))
        ) {
          this.audioEffects.volume = this.random(0, 100);
        } else {
          this.audioEffects.volume = 0;
        }
      }
      yield;
    }
  }

  *whenIReceiveStart3() {
    this.audioEffects.volume = 0;
    this.vars.a = 0;
    this.vars.b = 1;
    this.vars.yellowbearShow = 0;
    while (true) {
      yield* this.playSoundUntilDone("robotvoice");
      yield;
    }
  }

  *whenIReceiveStart4() {
    if (this.toNumber(this.stage.vars.jumpscares) === 1) {
      while (true) {
        this.vars.b = this.random(1, 10);
        if (
          this.toNumber(this.vars.a) === 1 &&
          this.toNumber(this.vars.b) === 1
        ) {
          this.visible = true;
        } else {
          this.visible = false;
        }
        yield;
      }
    }
  }

  *whenIReceiveStart5() {
    if (this.toNumber(this.stage.vars.jumpscares) === 1) {
      while (true) {
        yield* this.wait(1);
        this.vars.a = this.random(1, 1000);
        yield;
      }
    }
  }

  *whenIReceiveCamera() {
    this.vars.yellowbearShow = 0;
  }

  *whenIReceiveGoldenFreddy() {
    while (!(this.toNumber(this.stage.vars.cams) === 0)) {
      yield;
    }
    this.vars.yellowbearShow = 1;
  }

  *whenIReceiveGameOver() {
    for (let i = 0; i < 10; i++) {
      yield* this.wait(1);
      this.vars.creepyEnd = this.random(1, 10000);
      yield;
    }
    if (this.toNumber(this.vars.creepyEnd) === 1) {
      this.broadcast("creepy end");
    }
  }

  *whenGreenFlagClicked() {
    if (this.random(1, 1000) === 1) {
      this.costume = "Bonnie";
      this.visible = true;
      yield* this.wait(9.5);
      this.costume = "Bonnie Eyes";
      yield* this.wait(0.5);
    }
    this.visible = false;
    this.broadcast("message1");
  }
}

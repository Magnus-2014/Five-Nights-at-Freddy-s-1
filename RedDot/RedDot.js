/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RedDot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blinking", "./RedDot/costumes/blinking.png", {
        x: 46,
        y: 48,
      }),
      new Costume(
        "FreddyScare2 (4)",
        "./RedDot/costumes/FreddyScare2 (4).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (1)",
        "./RedDot/costumes/FreddyScare2 (1).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (6)",
        "./RedDot/costumes/FreddyScare2 (6).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (3)",
        "./RedDot/costumes/FreddyScare2 (3).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (2)",
        "./RedDot/costumes/FreddyScare2 (2).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (5)",
        "./RedDot/costumes/FreddyScare2 (5).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (11)",
        "./RedDot/costumes/FreddyScare2 (11).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (12)",
        "./RedDot/costumes/FreddyScare2 (12).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (10)",
        "./RedDot/costumes/FreddyScare2 (10).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (13)",
        "./RedDot/costumes/FreddyScare2 (13).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (14)",
        "./RedDot/costumes/FreddyScare2 (14).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (8)",
        "./RedDot/costumes/FreddyScare2 (8).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (19)",
        "./RedDot/costumes/FreddyScare2 (19).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (15)",
        "./RedDot/costumes/FreddyScare2 (15).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (16)",
        "./RedDot/costumes/FreddyScare2 (16).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (9)",
        "./RedDot/costumes/FreddyScare2 (9).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (7)",
        "./RedDot/costumes/FreddyScare2 (7).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (20)",
        "./RedDot/costumes/FreddyScare2 (20).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (21)",
        "./RedDot/costumes/FreddyScare2 (21).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (17)",
        "./RedDot/costumes/FreddyScare2 (17).png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "FreddyScare2 (18)",
        "./RedDot/costumes/FreddyScare2 (18).png",
        { x: 480, y: 270 }
      ),
    ];

    this.sounds = [new Sound("music box", "./RedDot/sounds/music box.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
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
      new Trigger(Trigger.BROADCAST, { name: "beat5" }, this.whenIReceiveBeat5),
      new Trigger(Trigger.BROADCAST, { name: "beat6" }, this.whenIReceiveBeat6),
      new Trigger(Trigger.BROADCAST, { name: "beat7" }, this.whenIReceiveBeat7),
      new Trigger(
        Trigger.BROADCAST,
        { name: "freddy jingle" },
        this.whenIReceiveFreddyJingle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "blackout" },
        this.whenIReceiveBlackout
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart4
      ),
    ];

    this.audioEffects.volume = 0;

    this.vars.frame = 21;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.cams = 0;
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.costume = "blinking";
    this.size = 40;
    this.goto(-205, 95);
    while (true) {
      if (this.toNumber(this.stage.vars.cams) === 1) {
        this.visible = true;
      }
      yield* this.wait(0.25);
      this.visible = false;
      yield* this.wait(0.25);
      yield;
    }
  }

  *whenIReceivePowerOut() {
    yield* this.wait(5 * this.random(1, 4));
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(5);
    this.broadcast("closer");
    this.broadcast("freddy jingle");
    yield* this.startSound("music box");
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveOffice() {
    this.visible = false;
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveStart2() {
    while (true) {
      if (this.toString(this.stage.vars.freddyLocation) === "Kitchen") {
        yield* this.playSoundUntilDone("music box");
      }
      yield;
    }
  }

  *whenIReceiveStart3() {
    while (true) {
      if (this.toString(this.stage.vars.freddyLocation) === "Kitchen") {
        if (
          this.toNumber(this.stage.vars.cams) === 1 &&
          this.toString(this.stage.vars.camera) === "Kitchen"
        ) {
          this.audioEffects.volume = 50;
        } else {
          this.audioEffects.volume = 5;
        }
      } else {
        this.audioEffects.volume = 0;
      }
      yield;
    }
  }

  *whenIReceiveBeat5() {
    this.audioEffects.volume = 100;
    yield* this.startSound("music box");
  }

  *whenIReceiveBeat6() {
    this.audioEffects.volume = 100;
    yield* this.startSound("music box");
  }

  *whenIReceiveBeat7() {
    this.audioEffects.volume = 100;
    yield* this.startSound("music box");
  }

  *whenIReceiveFreddyJingle() {
    this.audioEffects.volume = 100;
    yield* this.wait(5 * this.random(1, 4));
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stopAllSounds();
    this.broadcast("blackout");
  }

  *whenIReceiveBlackout() {
    yield* this.wait(5 * this.random(1, 4));
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("very close");
    yield* this.wait(5);
    this.goto(0, 0);
    this.broadcast("scream");
    if (this.toNumber(this.stage.vars.jumpscares) === 1) {
      this.visible = true;
      this.vars.frame = 0;
      this.costume = "FreddyScare2 (1)";
      this.size = 100;
      for (let i = 0; i < 21; i++) {
        this.vars.frame++;
        this.costume =
          "FreddyScare2 (" + (this.toString(this.vars.frame) + ")");
        yield;
      }
    }
    yield* this.wait(0.001);
    this.stage.vars.killedyou = "Freddy";
    this.broadcast("dead");
  }

  *whenIReceiveStart4() {
    while (true) {
      if (this.toNumber(this.stage.vars.cams) === 0) {
        this.visible = false;
      }
      yield;
    }
  }
}

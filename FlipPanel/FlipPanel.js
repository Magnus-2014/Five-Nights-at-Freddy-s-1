/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class FlipPanel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("flip down", "./FlipPanel/costumes/flip down.svg", {
        x: 239,
        y: 18,
      }),
    ];

    this.sounds = [
      new Sound("put down", "./FlipPanel/sounds/put down.wav"),
      new Sound(
        "CAMERA_VIDEO_LOA_60105303",
        "./FlipPanel/sounds/CAMERA_VIDEO_LOA_60105303.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
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
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "monitor down" },
        this.whenIReceiveMonitorDown
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "moniter" },
        this.whenIReceiveMoniter
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "golden freddy" },
        this.whenIReceiveGoldenFreddy
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.size = 45;
    this.goto(-35, -115);
  }

  *whenIReceiveStart() {
    this.effects.brightness = -10;
    this.visible = true;
    while (true) {
      while (
        !(
          !this.touching("mouse") &&
          this.compare(this.mouse.y, this.y) > 0 &&
          (this.sprites["Moniter"].costume.name === "Moniter (1)" ||
            this.sprites["Moniter"].costume.name === "Moniter (10)")
        )
      ) {
        yield;
      }
      this.visible = true;
      while (
        !(
          this.touching("mouse") &&
          (this.sprites["Moniter"].costume.name === "Moniter (1)" ||
            this.sprites["Moniter"].costume.name === "Moniter (10)")
        )
      ) {
        yield;
      }
      this.visible = false;
      if (this.toNumber(this.stage.vars.moniter) === 0) {
        this.stage.vars.moniter = 1;
        yield* this.broadcastAndWait("moniter");
      } else {
        if (this.toNumber(this.stage.vars.moniter) === 1) {
          this.stage.vars.moniter = 0;
          this.broadcast("monitor down");
          this.broadcast("office");
        } else {
          null;
        }
      }
      yield;
    }
  }

  *whenIReceivePowerOut() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    if (!(this.sprites["Moniter"].costume.name === "Moniter (1)")) {
      yield* this.startSound("put down");
    }
  }

  *whenIReceiveScream() {
    /* TODO: Implement stop other scripts in sprite */ null;
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

  *whenthisspriteclicked() {}

  *whenIReceiveMonitorDown() {
    this.audioEffects.volume = 100;
    yield* this.playSoundUntilDone("put down");
    this.audioEffects.volume = 0;
  }

  *whenIReceiveMoniter() {
    this.audioEffects.volume = 100;
    yield* this.startSound("CAMERA_VIDEO_LOA_60105303");
  }

  *whenIReceiveGoldenFreddy() {}
}

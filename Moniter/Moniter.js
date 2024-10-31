/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Moniter extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Moniter (1)", "./Moniter/costumes/Moniter (1).png", {
        x: 342,
        y: -216,
      }),
      new Costume("Moniter (2)", "./Moniter/costumes/Moniter (2).png", {
        x: 362,
        y: -156,
      }),
      new Costume("Moniter (3)", "./Moniter/costumes/Moniter (3).png", {
        x: 382,
        y: -93,
      }),
      new Costume("Moniter (4)", "./Moniter/costumes/Moniter (4).png", {
        x: 404,
        y: -19,
      }),
      new Costume("Moniter (5)", "./Moniter/costumes/Moniter (5).png", {
        x: 426,
        y: 65,
      }),
      new Costume("Moniter (6)", "./Moniter/costumes/Moniter (6).png", {
        x: 451,
        y: 141,
      }),
      new Costume("Moniter (7)", "./Moniter/costumes/Moniter (7).png", {
        x: 474,
        y: 210,
      }),
      new Costume("Moniter (8)", "./Moniter/costumes/Moniter (8).png", {
        x: 480,
        y: 264,
      }),
      new Costume("Moniter (9)", "./Moniter/costumes/Moniter (9).png", {
        x: 480,
        y: 270,
      }),
      new Costume("Moniter (10)", "./Moniter/costumes/Moniter (10).png", {
        x: 480,
        y: 270,
      }),
    ];

    this.sounds = [
      new Sound(
        "MiniDV_Tape_Eject_1",
        "./Moniter/sounds/MiniDV_Tape_Eject_1.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "intro" }, this.whenIReceiveIntro),
      new Trigger(
        Trigger.BROADCAST,
        { name: "moniter" },
        this.whenIReceiveMoniter
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(
        Trigger.BROADCAST,
        { name: "office" },
        this.whenIReceiveOffice2
      ),
    ];

    this.vars.frame = 1;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveIntro() {
    this.costume = "Moniter (1)";
    this.vars.frame = 1;
    this.stage.vars.moniter = 0;
  }

  *whenIReceiveMoniter() {
    while (!(this.sprites["Moniter"].costume.name === "Moniter (10)")) {
      this.costume = "Moniter (" + (this.toString(this.vars.frame) + ")");
      this.visible = true;
      this.vars.frame++;
      yield;
    }
    this.stage.vars.cams = 1;
    this.visible = false;
    this.broadcast("camera");
    this.audioEffects.volume = 100;
    yield* this.startSound("MiniDV_Tape_Eject_1");
  }

  *whenIReceiveOffice() {
    if (this.toNumber(this.stage.vars.moniter) === 0) {
      while (!(this.sprites["Moniter"].costume.name === "Moniter (1)")) {
        this.costume = "Moniter (" + (this.toString(this.vars.frame) + ")");
        this.visible = true;
        this.vars.frame--;
        yield;
      }
    }
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

  *whenIReceiveOffice2() {
    this.audioEffects.volume = 0;
    this.stage.vars.cams = 0;
  }
}

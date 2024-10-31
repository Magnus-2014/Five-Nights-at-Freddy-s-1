/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Level extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Level/costumes/1.png", { x: 8, y: 16 }),
      new Costume("2", "./Level/costumes/2.png", { x: 12, y: 16 }),
      new Costume("3", "./Level/costumes/3.png", { x: 12, y: 16 }),
      new Costume("4", "./Level/costumes/4.png", { x: 12, y: 16 }),
      new Costume("5", "./Level/costumes/5.png", { x: 12, y: 16 }),
      new Costume("6", "./Level/costumes/6.png", { x: 12, y: 16 }),
      new Costume("7", "./Level/costumes/7.png", { x: 12, y: 16 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Continue HL" },
        this.whenIReceiveContinueHl
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NewGame HL" },
        this.whenIReceiveNewgameHl
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Continue" },
        this.whenIReceiveContinue
      ),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Night 6" },
        this.whenIReceiveNight6
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "6Night HL" },
        this.whenIReceive6nightHl
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "Intro" }, this.whenIReceiveIntro),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NewGame" },
        this.whenIReceiveNewgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Night 7" },
        this.whenIReceiveNight7
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Custom HL" },
        this.whenIReceiveCustomHl
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.costume = this.stage.vars.level;
    this.goto(220, 105);
    this.visible = true;
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveContinueHl() {
    this.costume = this.stage.vars.level;
    this.visible = true;
  }

  *whenIReceiveNewgameHl() {
    this.visible = false;
  }

  *whenIReceiveMessage1() {
    this.stage.vars.level = this.stage.vars.iniLevel;
    this.costume = 7;
    this.size = 40;
    this.goto(-140, -69);
  }

  *whenIReceiveContinue() {
    this.visible = false;
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveNight6() {
    this.stage.vars.iniLevel = this.stage.vars.level;
    this.stage.vars.level = 6;
  }

  *whenIReceive6nightHl() {
    this.visible = false;
  }

  *whenIReceivePowerOut() {
    this.visible = false;
  }

  *whenIReceiveIntro() {
    if (this.compare(this.stage.vars.level, 6) < 0) {
      this.stage.vars.iniLevel = this.stage.vars.level;
    }
  }

  *whenIReceiveNewgame() {
    this.stage.vars.iniLevel = 1;
  }

  *whenIReceiveNight7() {
    this.stage.vars.iniLevel = this.stage.vars.level;
    this.stage.vars.level = 7;
  }

  *whenIReceiveCustomHl() {
    this.visible = false;
  }
}

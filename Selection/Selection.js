/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Selection extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrows", "./Selection/costumes/arrows.png", {
        x: 42,
        y: 26,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Help Wanted" },
        this.whenIReceiveHelpWanted
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Night 6" },
        this.whenIReceiveNight6
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Continue" },
        this.whenIReceiveContinue
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "6Night HL" },
        this.whenIReceive6nightHl
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NewGame HL" },
        this.whenIReceiveNewgameHl
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Continue HL" },
        this.whenIReceiveContinueHl
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Custom HL" },
        this.whenIReceiveCustomHl
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Custom Night" },
        this.whenIReceiveCustomNight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings Menu" },
        this.whenIReceiveSettingsMenu
      ),
      new Trigger(Trigger.BROADCAST, { name: "hide" }, this.whenIReceiveHide),
    ];
  }

  *whenIReceiveHelpWanted() {
    this.visible = false;
  }

  *whenIReceiveNight6() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveContinue() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceive6nightHl() {
    this.visible = true;
    this.goto(-195, this.sprites["_6thNight"].y);
  }

  *whenIReceiveNewgameHl() {
    this.visible = true;
    this.goto(-195, this.sprites["NewGame"].y);
  }

  *whenIReceiveContinueHl() {
    this.visible = true;
    this.goto(-195, this.sprites["Continue"].y);
  }

  *whenIReceiveMessage1() {
    this.size = 40;
    if (this.toNumber(this.stage.vars.beat6) === 1) {
      this.visible = true;
      this.broadcast("Custom HL");
    } else {
      if (this.toNumber(this.stage.vars.beat5) === 1) {
        this.visible = true;
        this.broadcast("6Night HL");
      } else {
        if (this.toNumber(this.stage.vars.level) === 1) {
          this.visible = true;
          this.broadcast("NewGame HL");
        } else {
          this.visible = true;
          this.broadcast("Continue HL");
        }
      }
    }
  }

  *whenIReceiveCustomHl() {
    this.visible = true;
    this.goto(-195, this.sprites["CustomNight"].y);
  }

  *whenIReceiveCustomNight() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveSettingsMenu() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveHide() {
    this.visible = false;
  }
}

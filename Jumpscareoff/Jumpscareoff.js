/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Jumpscareoff extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "OffActiveAsset 5@4x",
        "./Jumpscareoff/costumes/OffActiveAsset 5@4x.png",
        { x: 361, y: 193 }
      ),
      new Costume(
        "OffInactiveAsset 6@4x",
        "./Jumpscareoff/costumes/OffInactiveAsset 6@4x.png",
        { x: 361, y: 193 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings Menu" },
        this.whenIReceiveSettingsMenu
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings Menu" },
        this.whenIReceiveSettingsMenu2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ExitSettingsMenu" },
        this.whenIReceiveExitsettingsmenu
      ),
    ];
  }

  *whenthisspriteclicked() {
    this.stage.vars.jumpscares = 0;
  }

  *whenIReceiveSettingsMenu() {
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(-44, 30);
    this.size = 15;
    this.visible = false;
  }

  *whenIReceiveSettingsMenu2() {
    while (true) {
      if (this.toNumber(this.stage.vars.jumpscares) === 0) {
        this.costume = "OffActiveAsset 5@4x";
      } else {
        this.costume = "OffInactiveAsset 6@4x";
      }
      yield;
    }
  }

  *whenIReceiveExitsettingsmenu() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}

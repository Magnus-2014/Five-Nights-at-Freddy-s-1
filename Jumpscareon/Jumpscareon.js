/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Jumpscareon extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "OnActiveAsset 4@4x",
        "./Jumpscareon/costumes/OnActiveAsset 4@4x.png",
        { x: 259, y: 193 }
      ),
      new Costume(
        "OnInactiveAsset 3@4x",
        "./Jumpscareon/costumes/OnInactiveAsset 3@4x.png",
        { x: 259, y: 193 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
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
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ExitSettingsMenu" },
        this.whenIReceiveExitsettingsmenu
      ),
    ];
  }

  *whenIReceiveSettingsMenu() {
    while (true) {
      if (this.toNumber(this.stage.vars.jumpscares) === 1) {
        this.costume = "OnActiveAsset 4@4x";
      } else {
        this.costume = "OnInactiveAsset 3@4x";
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(44, 30);
    this.size = 15;
    this.visible = false;
  }

  *whenIReceiveSettingsMenu2() {
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.jumpscares = 1;
  }

  *whenIReceiveExitsettingsmenu() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Confirmsettings extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "ConfirmAsset 7@4x2",
        "./Confirmsettings/costumes/ConfirmAsset 7@4x2.png",
        { x: 480, y: 116 }
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
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
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
    this.goto(0, -100);
    this.size = 25;
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("ExitSettingsMenu");
    this.stage.vars.settings = 0;
    this.visible = false;
    this.broadcast("message1");
  }
}

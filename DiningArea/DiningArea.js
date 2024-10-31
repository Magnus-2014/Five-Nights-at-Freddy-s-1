/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DiningArea extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("empty", "./DiningArea/costumes/empty.png", {
        x: 480,
        y: 216,
      }),
      new Costume("bonnie", "./DiningArea/costumes/bonnie.png", {
        x: 480,
        y: 216,
      }),
      new Costume("bonnie close", "./DiningArea/costumes/bonnie close.png", {
        x: 480,
        y: 216,
      }),
      new Costume("chica", "./DiningArea/costumes/chica.png", {
        x: 480,
        y: 216,
      }),
      new Costume("chica close", "./DiningArea/costumes/chica close.png", {
        x: 480,
        y: 216,
      }),
      new Costume("freddy", "./DiningArea/costumes/freddy.png", {
        x: 480,
        y: 216,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveOffice() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    while (true) {
      this.goto(this.sprites["ShowStage"].x, this.sprites["ShowStage"].y);
      yield;
    }
  }

  *whenIReceiveCamera() {
    if (this.toString(this.stage.vars.chicaLocation) === "Dining Area") {
      if (this.toNumber(this.stage.vars.chicaPosition) === 1) {
        this.costume = "chica";
      } else {
        if (this.toNumber(this.stage.vars.chicaPosition) === 2) {
          this.costume = "chica close";
        }
      }
    } else {
      if (this.toString(this.stage.vars.bonnieLocation) === "Dining Area") {
        if (this.toNumber(this.stage.vars.bonniePosition) === 1) {
          this.costume = "bonnie";
        } else {
          if (this.toNumber(this.stage.vars.bonniePosition) === 2) {
            this.costume = "bonnie close";
          }
        }
      } else {
        if (this.toString(this.stage.vars.freddyLocation) === "Dining Area") {
          this.costume = "freddy";
        } else {
          this.costume = "empty";
        }
      }
    }
    if (this.toString(this.stage.vars.camera) === "Dining Area") {
      this.visible = true;
    } else {
      this.visible = false;
    }
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
}

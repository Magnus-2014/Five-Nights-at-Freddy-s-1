/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Nose extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("normal", "./Nose/costumes/normal.svg", { x: 39, y: 39 }),
    ];

    this.sounds = [
      new Sound(
        "PartyFavorraspyPart_AC01__3",
        "./Nose/sounds/PartyFavorraspyPart_AC01__3.wav"
      ),
      new Sound("windowscare", "./Nose/sounds/windowscare.wav"),
      new Sound("error", "./Nose/sounds/error.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "error" }, this.whenIReceiveError),
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
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
    ];

    this.vars.scareLeft = 1;
    this.vars.scareRight = 1;
  }

  *whenGreenFlagClicked() {
    this.goto(60, 0);
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.effects.ghost = 99;
    while (true) {
      this.goto(this.sprites["Pan"].x, this.sprites["Pan"].y);
      yield;
    }
  }

  *whenIReceiveCamera() {
    this.visible = false;
  }

  *whenIReceiveOffice() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    yield* this.startSound("PartyFavorraspyPart_AC01__3");
  }

  *whenIReceiveStart2() {
    this.vars.scareLeft = 1;
    while (true) {
      while (
        !(this.toString(this.stage.vars.bonnieLocation) === "Ready to Attack")
      ) {
        yield;
      }
      this.vars.scareLeft = 0;
      while (
        !!(this.toString(this.stage.vars.bonnieLocation) === "Ready to Attack")
      ) {
        yield;
      }
      this.vars.scareLeft = 1;
      yield;
    }
  }

  *whenIReceivePowerOut() {
    this.visible = false;
  }

  *whenIReceiveError() {
    yield* this.startSound("error");
  }

  *whenIReceiveStart3() {
    while (true) {
      if (this.toNumber(this.stage.vars.leftLight) === 1) {
        if (this.toNumber(this.vars.scareLeft) === 0) {
          yield* this.startSound("windowscare");
          this.vars.scareLeft = 1;
        }
      } else {
        if (this.toNumber(this.stage.vars.rightLight) === 1) {
          if (this.toNumber(this.vars.scareRight) === 0) {
            yield* this.startSound("windowscare");
            this.vars.scareRight = 1;
          }
        } else {
          null;
        }
      }
      yield;
    }
  }

  *whenIReceiveStart4() {
    this.vars.scareRight = 1;
    while (true) {
      while (
        !(this.toString(this.stage.vars.chicaLocation) === "Ready to Attack")
      ) {
        yield;
      }
      this.vars.scareRight = 0;
      while (
        !!(this.toString(this.stage.vars.chicaLocation) === "Ready to Attack")
      ) {
        yield;
      }
      this.vars.scareRight = 1;
      yield;
    }
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
}

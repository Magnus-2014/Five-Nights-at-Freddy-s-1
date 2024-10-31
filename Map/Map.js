/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Map extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dot small", "./Map/costumes/dot small.png", {
        x: 344,
        y: 282,
      }),
      new Costume("dot big", "./Map/costumes/dot big.png", { x: 344, y: 282 }),
    ];

    this.sounds = [
      new Sound(
        "EerieAmbienceLargeSca_MV005",
        "./Map/sounds/EerieAmbienceLargeSca_MV005.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "intro" }, this.whenIReceiveIntro),
      new Trigger(
        Trigger.BROADCAST,
        { name: "office" },
        this.whenIReceiveOffice
      ),
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
    ];

    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked() {
    this.goto(150, -60);
    this.size = 40;
    this.visible = false;
  }

  *whenIReceiveCamera() {
    this.visible = true;
  }

  *whenIReceiveStart() {
    while (true) {
      this.costumeNumber++;
      yield* this.wait(1);
      yield;
    }
  }

  *whenIReceiveIntro() {
    this.stage.vars.camera = "Show Stage";
  }

  *whenIReceiveOffice() {
    this.visible = false;
  }

  *whenIReceiveStart2() {
    while (true) {
      yield* this.playSoundUntilDone("EerieAmbienceLargeSca_MV005");
      yield;
    }
  }

  *whenIReceiveStart3() {
    while (true) {
      if (this.toString(this.stage.vars.freddyLocation) === "Got You") {
        this.audioEffects.volume = 100;
      } else {
        if (
          this.toString(this.stage.vars.bonnieLocation) === "Ready to Attack" ||
          this.toString(this.stage.vars.bonnieLocation) === "Got You" ||
          this.toString(this.stage.vars.chicaLocation) === "Ready to Attack" ||
          this.toString(this.stage.vars.chicaLocation) === "Got You"
        ) {
          this.audioEffects.volume = 75;
        } else {
          if (
            this.toString(this.stage.vars.bonnieLocation) ===
              "W. Hall Corner" ||
            this.toString(this.stage.vars.chicaLocation) === "E. Hall Corner" ||
            this.toString(this.stage.vars.freddyLocation) === "E. Hall Corner"
          ) {
            this.audioEffects.volume = 50;
          } else {
            if (
              this.toString(this.stage.vars.bonnieLocation) === "West Hall" ||
              this.toString(this.stage.vars.bonnieLocation) ===
                "Supply Closet" ||
              this.toString(this.stage.vars.chicaLocation) === "East Hall" ||
              this.compare(this.stage.vars.foxyProgress, 2) > 0 ||
              this.toString(this.stage.vars.freddyLocation) === "East Hall"
            ) {
              this.audioEffects.volume = 30;
            } else {
              this.audioEffects.volume = 0;
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceivePowerOut() {
    /* TODO: Implement stop other scripts in sprite */ null;
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
}

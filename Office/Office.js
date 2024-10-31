/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Office extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("normal", "./Office/costumes/normal.png", { x: 480, y: 216 }),
      new Costume("left light on", "./Office/costumes/left light on.png", {
        x: 480,
        y: 216,
      }),
      new Costume("right light on", "./Office/costumes/right light on.png", {
        x: 480,
        y: 216,
      }),
      new Costume(
        "left light bonnie",
        "./Office/costumes/left light bonnie.png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "right light chica",
        "./Office/costumes/right light chica.png",
        { x: 480, y: 216 }
      ),
      new Costume("power out", "./Office/costumes/power out.png", {
        x: 480,
        y: 216,
      }),
      new Costume(
        "power out freddy",
        "./Office/costumes/power out freddy.png",
        { x: 480, y: 216 }
      ),
      new Costume("Blackout", "./Office/costumes/Blackout.png", {
        x: 480,
        y: 216,
      }),
    ];

    this.sounds = [
      new Sound(
        "Buzz_Fan_Florescent2",
        "./Office/sounds/Buzz_Fan_Florescent2.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
        { name: "office" },
        this.whenIReceiveOffice
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "freddy jingle" },
        this.whenIReceiveFreddyJingle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "blackout" },
        this.whenIReceiveBlackout
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
    ];

    this.audioEffects.volume = 10;

    this.vars.hallFlicker = 10;
  }

  *whenIReceiveStart() {
    while (true) {
      yield* this.playSoundUntilDone("Buzz_Fan_Florescent2");
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(60, 0);
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveStart2() {
    this.broadcast("office");
    while (true) {
      this.goto(this.sprites["Pan"].x, this.sprites["Pan"].y);
      yield;
    }
  }

  *whenIReceiveStart3() {
    while (true) {
      if (this.toNumber(this.stage.vars.leftLight) === 1) {
        if (this.compare(this.vars.hallFlicker, 1) > 0) {
          if (
            this.toString(this.stage.vars.bonnieLocation) === "Ready to Attack"
          ) {
            this.costume = "left light bonnie";
          } else {
            this.costume = "left light on";
          }
        } else {
          if (this.compare(this.vars.hallFlicker, 2) < 0) {
            this.costume = "normal";
          } else {
            null;
          }
        }
      } else {
        if (this.toNumber(this.stage.vars.rightLight) === 1) {
          if (this.compare(this.vars.hallFlicker, 1) > 0) {
            if (
              this.toString(this.stage.vars.chicaLocation) === "Ready to Attack"
            ) {
              this.costume = "right light chica";
            } else {
              this.costume = "right light on";
            }
          } else {
            if (this.compare(this.vars.hallFlicker, 2) < 0) {
              this.costume = "normal";
            } else {
              null;
            }
          }
        } else {
          this.costume = "normal";
        }
      }
      yield;
    }
  }

  *whenIReceiveOffice() {
    this.visible = true;
    this.audioEffects.volume = 25;
  }

  *whenIReceivePowerOut() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.audioEffects.volume = 0;
    this.costume = "power out";
    while (true) {
      this.goto(this.sprites["Pan"].x, this.sprites["Pan"].y);
      yield;
    }
  }

  *whenIReceiveStart4() {
    while (true) {
      this.vars.hallFlicker = this.random(1, 10);
      yield* this.wait(0);
      yield;
    }
  }

  *whenIReceiveFreddyJingle() {
    while (true) {
      yield* this.wait(0.05);
      if (this.random(1, 4) === 1) {
        this.costume = "power out freddy";
      } else {
        this.costume = "power out";
      }
      yield;
    }
  }

  *whenIReceiveBlackout() {
    /* TODO: Implement stop other scripts in sprite */ null;
    for (let i = 0; i < 10; i++) {
      if (this.random(1, 2) === 1) {
        this.costume = "power out";
        this.audioEffects.volume = 100;
        yield* this.startSound("Buzz_Fan_Florescent2");
      } else {
        this.costume = "Blackout";
        this.audioEffects.volume = 0;
      }
      yield;
    }
    this.costume = "Blackout";
    this.stopAllSounds();
    while (true) {
      this.goto(this.sprites["Pan"].x, this.sprites["Pan"].y);
      yield;
    }
  }

  *whenIReceiveCamera() {
    this.visible = false;
    this.audioEffects.volume = 10;
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

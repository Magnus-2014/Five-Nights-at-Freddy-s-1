/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class WestHall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("light off", "./WestHall/costumes/light off.png", {
        x: 480,
        y: 216,
      }),
      new Costume("light on", "./WestHall/costumes/light on.png", {
        x: 480,
        y: 216,
      }),
      new Costume("bonnie", "./WestHall/costumes/bonnie.png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (2)", "./WestHall/costumes/FoxyRun (2).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (6)", "./WestHall/costumes/FoxyRun (6).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (9)", "./WestHall/costumes/FoxyRun (9).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (11)", "./WestHall/costumes/FoxyRun (11).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (1)", "./WestHall/costumes/FoxyRun (1).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (5)", "./WestHall/costumes/FoxyRun (5).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (8)", "./WestHall/costumes/FoxyRun (8).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (12)", "./WestHall/costumes/FoxyRun (12).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (10)", "./WestHall/costumes/FoxyRun (10).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (3)", "./WestHall/costumes/FoxyRun (3).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (4)", "./WestHall/costumes/FoxyRun (4).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (18)", "./WestHall/costumes/FoxyRun (18).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (16)", "./WestHall/costumes/FoxyRun (16).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (7)", "./WestHall/costumes/FoxyRun (7).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (25)", "./WestHall/costumes/FoxyRun (25).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (27)", "./WestHall/costumes/FoxyRun (27).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (22)", "./WestHall/costumes/FoxyRun (22).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (13)", "./WestHall/costumes/FoxyRun (13).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (14)", "./WestHall/costumes/FoxyRun (14).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (26)", "./WestHall/costumes/FoxyRun (26).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (28)", "./WestHall/costumes/FoxyRun (28).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (17)", "./WestHall/costumes/FoxyRun (17).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (19)", "./WestHall/costumes/FoxyRun (19).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (24)", "./WestHall/costumes/FoxyRun (24).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (23)", "./WestHall/costumes/FoxyRun (23).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (20)", "./WestHall/costumes/FoxyRun (20).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (30)", "./WestHall/costumes/FoxyRun (30).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (29)", "./WestHall/costumes/FoxyRun (29).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (15)", "./WestHall/costumes/FoxyRun (15).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (21)", "./WestHall/costumes/FoxyRun (21).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyRun (31)", "./WestHall/costumes/FoxyRun (31).png", {
        x: 480,
        y: 216,
      }),
    ];

    this.sounds = [
      new Sound("run", "./WestHall/sounds/run.wav"),
      new Sound("running fast3", "./WestHall/sounds/running fast3.wav"),
      new Sound("whispering2", "./WestHall/sounds/whispering2.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "freddy run" },
        this.whenIReceiveFreddyRun
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "foxy run" },
        this.whenIReceiveFoxyRun
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "foxy run" },
        this.whenIReceiveFoxyRun2
      ),
    ];

    this.audioEffects.volume = 35;

    this.vars.hallFlicker = 10;
    this.vars.frame = 31;
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

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveStart2() {
    while (true) {
      this.vars.hallFlicker = this.sprites["Office"].vars.hallFlicker;
      yield;
    }
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveStart3() {
    while (true) {
      if (!(this.toNumber(this.stage.vars.foxyProgress) === 5)) {
        if (this.compare(this.vars.hallFlicker, 3) > 0) {
          this.costume = "light off";
        } else {
          if (this.compare(this.vars.hallFlicker, 4) < 0) {
            if (this.toString(this.stage.vars.bonnieLocation) === "West Hall") {
              this.costume = "bonnie";
            } else {
              this.costume = "light on";
            }
          } else {
            null;
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveCamera() {
    if (this.toString(this.stage.vars.camera) === "West Hall") {
      this.visible = true;
      if (this.toNumber(this.stage.vars.foxyProgress) === 4) {
        this.broadcast("foxy run");
      }
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveFreddyRun() {
    if (this.toString(this.stage.vars.freddyLocation) === "Show Stage") {
      this.audioEffects.volume = 30;
    } else {
      if (this.toString(this.stage.vars.freddyLocation) === "Dining Area") {
        this.audioEffects.volume = 35;
      } else {
        if (this.toString(this.stage.vars.freddyLocation) === "Restrooms") {
          this.audioEffects.volume = 40;
        } else {
          if (this.toString(this.stage.vars.freddyLocation) === "Kitchen") {
            this.audioEffects.volume = 60;
          } else {
            if (
              this.toString(this.stage.vars.freddyLocation) === "East Hall" ||
              this.toString(this.stage.vars.freddyLocation) === "E. Hall Corner"
            ) {
              this.audioEffects.volume = 75;
            } else {
              if (this.toString(this.stage.vars.freddyLocation) === "Got You") {
                this.audioEffects.volume = 100;
                while (true) {
                  yield* this.playSoundUntilDone("whispering2");
                  yield;
                }
              } else {
                null;
              }
            }
          }
        }
      }
    }
    yield* this.startSound("running fast3");
  }

  *whenIReceiveFoxyRun() {
    this.stage.vars.foxyProgress = 5;
    this.audioEffects.volume = 100;
    yield* this.startSound("run");
    this.costume = "FoxyRun (1)";
    this.vars.frame = 0;
    for (let i = 0; i < 31; i++) {
      this.vars.frame++;
      this.costume = "FoxyRun (" + (this.toString(this.vars.frame) + ")");
      yield;
    }
  }

  *whenIReceiveFoxyRun2() {
    yield* this.wait(2);
    this.stage.vars.foxyProgress = 6;
  }
}

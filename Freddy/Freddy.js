/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Freddy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "FreddyOffice (3)",
        "./Freddy/costumes/FreddyOffice (3).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (4)",
        "./Freddy/costumes/FreddyOffice (4).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (2)",
        "./Freddy/costumes/FreddyOffice (2).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (5)",
        "./Freddy/costumes/FreddyOffice (5).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (25)",
        "./Freddy/costumes/FreddyOffice (25).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (23)",
        "./Freddy/costumes/FreddyOffice (23).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (6)",
        "./Freddy/costumes/FreddyOffice (6).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (1)",
        "./Freddy/costumes/FreddyOffice (1).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (7)",
        "./Freddy/costumes/FreddyOffice (7).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (10)",
        "./Freddy/costumes/FreddyOffice (10).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (11)",
        "./Freddy/costumes/FreddyOffice (11).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (21)",
        "./Freddy/costumes/FreddyOffice (21).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (22)",
        "./Freddy/costumes/FreddyOffice (22).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (30)",
        "./Freddy/costumes/FreddyOffice (30).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (8)",
        "./Freddy/costumes/FreddyOffice (8).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (9)",
        "./Freddy/costumes/FreddyOffice (9).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (13)",
        "./Freddy/costumes/FreddyOffice (13).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (31)",
        "./Freddy/costumes/FreddyOffice (31).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (20)",
        "./Freddy/costumes/FreddyOffice (20).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (27)",
        "./Freddy/costumes/FreddyOffice (27).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (17)",
        "./Freddy/costumes/FreddyOffice (17).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (14)",
        "./Freddy/costumes/FreddyOffice (14).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (28)",
        "./Freddy/costumes/FreddyOffice (28).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (26)",
        "./Freddy/costumes/FreddyOffice (26).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (29)",
        "./Freddy/costumes/FreddyOffice (29).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (16)",
        "./Freddy/costumes/FreddyOffice (16).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (12)",
        "./Freddy/costumes/FreddyOffice (12).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (24)",
        "./Freddy/costumes/FreddyOffice (24).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (18)",
        "./Freddy/costumes/FreddyOffice (18).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (15)",
        "./Freddy/costumes/FreddyOffice (15).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "FreddyOffice (19)",
        "./Freddy/costumes/FreddyOffice (19).png",
        { x: 480, y: 216 }
      ),
    ];

    this.sounds = [
      new Sound(
        "Laugh_Giggle_Girl_1d",
        "./Freddy/sounds/Laugh_Giggle_Girl_1d.wav"
      ),
      new Sound(
        "Laugh_Giggle_Girl_2d",
        "./Freddy/sounds/Laugh_Giggle_Girl_2d.wav"
      ),
      new Sound(
        "Laugh_Giggle_Girl_8d",
        "./Freddy/sounds/Laugh_Giggle_Girl_8d.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "intro" }, this.whenIReceiveIntro),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
    ];

    this.audioEffects.volume = 15;

    this.vars.frame = 31;
  }

  *whenIReceiveIntro() {
    this.stage.vars.freddyLocation = "Show Stage";
    if (this.toNumber(this.stage.vars.level) === 1) {
      this.stage.vars.freddyai = 0;
    } else {
      if (this.toNumber(this.stage.vars.level) === 2) {
        this.stage.vars.freddyai = 0;
      } else {
        if (this.toNumber(this.stage.vars.level) === 3) {
          this.stage.vars.freddyai = 1;
        } else {
          if (this.toNumber(this.stage.vars.level) === 4) {
            this.stage.vars.freddyai = this.random(1, 3);
          } else {
            if (this.toNumber(this.stage.vars.level) === 5) {
              this.stage.vars.freddyai = 3;
            } else {
              if (this.toNumber(this.stage.vars.level) === 6) {
                this.stage.vars.freddyai = 4;
              } else {
                null;
              }
            }
          }
        }
      }
    }
  }

  *whenIReceiveStart() {
    while (true) {
      yield* this.wait(3 + 2 / 100);
      if (
        !(
          this.toString(this.stage.vars.bonnieLocation) === "Show Stage" ||
          this.toString(this.stage.vars.chicaLocation) === "Show Stage"
        )
      ) {
        if (
          this.compare(
            this.random(1, 20),
            this.toNumber(this.stage.vars.freddyai) + 1
          ) < 0
        ) {
          if (this.toString(this.stage.vars.freddyLocation) === "Got You") {
            if (this.toNumber(this.stage.vars.cams) === 1) {
              this.stage.vars.moniter = 0;
              this.broadcast("office");
            }
            this.broadcast("scream");
            if (this.toNumber(this.stage.vars.jumpscares) === 1) {
              this.costume = "FreddyOffice (1)";
              this.vars.frame = 0;
              this.visible = true;
              for (let i = 0; i < 31; i++) {
                this.vars.frame++;
                this.costume =
                  "FreddyOffice (" + (this.toString(this.vars.frame) + ")");
                this.goto(this.sprites["Pan"].x, this.sprites["Pan"].y);
                yield;
              }
            }
            yield* this.wait(0.001);
            this.stage.vars.killedyou = "Freddy";
            this.broadcast("dead");
          } else {
            if (
              (this.toNumber(this.stage.vars.cams) === 1 &&
                !(
                  this.compare(
                    this.stage.vars.camera,
                    this.stage.vars.freddyLocation
                  ) === 0
                )) ||
              this.toNumber(this.stage.vars.cams) === 0
            ) {
              this.broadcast("freddy run");
              if (
                this.toString(this.stage.vars.freddyLocation) === "Show Stage"
              ) {
                this.stage.vars.freddyLocation = "Dining Area";
                this.audioEffects.volume = 15;
              } else {
                if (
                  this.toString(this.stage.vars.freddyLocation) ===
                  "Dining Area"
                ) {
                  this.stage.vars.freddyLocation = "Restrooms";
                  this.audioEffects.volume = 20;
                } else {
                  if (
                    this.toString(this.stage.vars.freddyLocation) ===
                    "Restrooms"
                  ) {
                    this.stage.vars.freddyLocation = "Kitchen";
                    this.audioEffects.volume = 30;
                  } else {
                    if (
                      this.toString(this.stage.vars.freddyLocation) ===
                      "Kitchen"
                    ) {
                      this.stage.vars.freddyLocation = "East Hall";
                      this.audioEffects.volume = 40;
                    } else {
                      if (
                        this.toString(this.stage.vars.freddyLocation) ===
                        "East Hall"
                      ) {
                        this.stage.vars.freddyLocation = "E. Hall Corner";
                        this.audioEffects.volume = 60;
                      } else {
                        if (
                          this.toString(this.stage.vars.freddyLocation) ===
                          "E. Hall Corner"
                        ) {
                          while (
                            !(
                              this.toNumber(this.stage.vars.cams) === 1 &&
                              !(
                                this.compare(
                                  this.stage.vars.camera,
                                  this.stage.vars.freddyLocation
                                ) === 0
                              )
                            )
                          ) {
                            yield;
                          }
                          if (this.toNumber(this.stage.vars.rightDoor) === 1) {
                            this.stage.vars.freddyLocation = "East Hall";
                            this.audioEffects.volume = 60;
                          } else {
                            this.stage.vars.freddyLocation = "Got You";
                            this.audioEffects.volume = 80;
                          }
                          this.broadcast("freddy run");
                        } else {
                          null;
                        }
                      }
                    }
                  }
                }
              }
              yield* this.startSound(this.random(1, 3));
              if (this.toNumber(this.stage.vars.cams) === 1) {
                if (
                  this.compare(
                    this.stage.vars.camera,
                    this.stage.vars.freddyLocation
                  ) === 0
                ) {
                  this.broadcast("inturrupt");
                }
              }
            } else {
              null;
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

  *whenGreenFlagClicked() {
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}

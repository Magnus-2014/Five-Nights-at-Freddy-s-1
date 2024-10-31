/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Chica extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Chica_Scare (2)", "./Chica/costumes/Chica_Scare (2).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (3)", "./Chica/costumes/Chica_Scare (3).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (6)", "./Chica/costumes/Chica_Scare (6).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (1)", "./Chica/costumes/Chica_Scare (1).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (5)", "./Chica/costumes/Chica_Scare (5).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (10)", "./Chica/costumes/Chica_Scare (10).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (8)", "./Chica/costumes/Chica_Scare (8).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (13)", "./Chica/costumes/Chica_Scare (13).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (4)", "./Chica/costumes/Chica_Scare (4).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (7)", "./Chica/costumes/Chica_Scare (7).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (9)", "./Chica/costumes/Chica_Scare (9).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (12)", "./Chica/costumes/Chica_Scare (12).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (11)", "./Chica/costumes/Chica_Scare (11).png", {
        x: 480,
        y: 216,
      }),
      new Costume("Chica_Scare (14)", "./Chica/costumes/Chica_Scare (14).png", {
        x: 480,
        y: 216,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "move chica" },
        this.whenIReceiveMoveChica
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
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "intro" }, this.whenIReceiveIntro),
    ];

    this.vars.chicaMove = 1;
    this.vars.frame = 16;
  }

  *whenIReceiveStart() {
    while (true) {
      this.vars.chicaMove = this.random(1, 2);
      yield* this.wait(1);
      yield;
    }
  }

  *whenIReceiveStart2() {
    while (true) {
      yield* this.wait(4.98);
      if (
        this.compare(
          this.random(1, 20),
          this.toNumber(this.stage.vars.chicaai) + 1
        ) < 0
      ) {
        this.broadcast("move chica");
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMoveChica() {
    this.stage.vars.chicaPosition = this.random(1, 2);
    if (this.toNumber(this.stage.vars.cams) === 1) {
      if (
        this.compare(this.stage.vars.chicaLocation, this.stage.vars.camera) ===
        0
      ) {
        this.broadcast("inturrupt");
      }
    }
    if (this.toString(this.stage.vars.chicaLocation) === "Show Stage") {
      this.stage.vars.chicaLocation = "Dining Area";
    } else {
      if (this.toString(this.stage.vars.chicaLocation) === "Ready to Attack") {
        if (this.toNumber(this.stage.vars.rightDoor) === 1) {
          this.stage.vars.chicaLocation = "East Hall";
          this.stage.vars.chicaPosition = 1;
          this.broadcast("close");
        } else {
          this.stage.vars.chicaLocation = "Got You";
          this.stage.vars.rightLight = 0;
          /* TODO: Implement stop other scripts in sprite */ null;
        }
      } else {
        if (this.toNumber(this.vars.chicaMove) === 1) {
          if (this.toString(this.stage.vars.chicaLocation) === "Dining Area") {
            this.stage.vars.chicaLocation = "Restrooms";
          } else {
            if (this.toString(this.stage.vars.chicaLocation) === "Kitchen") {
              this.stage.vars.chicaLocation = "Restrooms";
            } else {
              if (
                this.toString(this.stage.vars.chicaLocation) === "Restrooms"
              ) {
                this.stage.vars.chicaLocation = "Kitchen";
              } else {
                if (
                  this.toString(this.stage.vars.chicaLocation) === "East Hall"
                ) {
                  this.stage.vars.chicaLocation = "Dining Area";
                } else {
                  if (
                    this.toString(this.stage.vars.chicaLocation) ===
                    "E. Hall Corner"
                  ) {
                    this.stage.vars.chicaLocation = "East Hall";
                    if (this.toNumber(this.stage.vars.chicaPosition) === 1) {
                      this.broadcast("far");
                    } else {
                      this.broadcast("close");
                    }
                  } else {
                    null;
                  }
                }
              }
            }
          }
        } else {
          if (this.toString(this.stage.vars.chicaLocation) === "Dining Area") {
            this.stage.vars.chicaLocation = "Kitchen";
          } else {
            if (this.toString(this.stage.vars.chicaLocation) === "Kitchen") {
              this.stage.vars.chicaLocation = "East Hall";
              if (this.toNumber(this.stage.vars.chicaPosition) === 1) {
                this.broadcast("far");
              } else {
                this.broadcast("close");
              }
            } else {
              if (
                this.toString(this.stage.vars.chicaLocation) === "Restrooms"
              ) {
                this.stage.vars.chicaLocation = "East Hall";
                if (this.toNumber(this.stage.vars.chicaPosition) === 1) {
                  this.broadcast("far");
                } else {
                  this.broadcast("close");
                }
              } else {
                if (
                  this.toString(this.stage.vars.chicaLocation) === "East Hall"
                ) {
                  this.broadcast("closer");
                  this.stage.vars.chicaLocation = "E. Hall Corner";
                } else {
                  if (
                    this.toString(this.stage.vars.chicaLocation) ===
                    "E. Hall Corner"
                  ) {
                    this.broadcast("very close");
                    this.stage.vars.chicaLocation = "Ready to Attack";
                  } else {
                    null;
                  }
                }
              }
            }
          }
        }
      }
    }
    if (this.toNumber(this.stage.vars.cams) === 1) {
      if (
        this.compare(this.stage.vars.chicaLocation, this.stage.vars.camera) ===
        0
      ) {
        this.broadcast("inturrupt");
      }
    }
  }

  *whenIReceiveStart3() {
    while (!(this.toNumber(this.stage.vars.time) === 3)) {
      yield;
    }
    this.stage.vars.chicaai++;
    while (!(this.toNumber(this.stage.vars.time) === 4)) {
      yield;
    }
    this.stage.vars.chicaai++;
  }

  *whenIReceiveOffice() {
    if (this.compare(this.stage.vars.power, 0) > 0) {
      if (this.toString(this.stage.vars.chicaLocation) === "Got You") {
        this.broadcast("scream");
        if (this.toNumber(this.stage.vars.jumpscares) === 1) {
          this.visible = true;
          for (let i = 0; i < 3; i++) {
            this.costume = "Chica_Scare (1)";
            this.vars.frame = 2;
            while (
              !(this.sprites["Chica"].costume.name === "Chica_Scare (14)")
            ) {
              this.costume =
                "Chica_Scare (" + (this.toString(this.vars.frame) + ")");
              this.vars.frame += 2;
              this.goto(this.sprites["Pan"].x, this.sprites["Pan"].y);
              yield;
            }
            yield;
          }
        }
        yield* this.wait(0.001);
        this.stage.vars.killedyou = "Chica";
        this.broadcast("dead");
      }
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

  *whenIReceivePowerOut() {
    if (this.toString(this.stage.vars.chicaLocation) === "Got You") {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.visible = false;
    }
  }

  *whenIReceiveIntro() {
    this.stage.vars.chicaLocation = "Show Stage";
    if (this.toNumber(this.stage.vars.level) === 1) {
      this.stage.vars.chicaai = 0;
    } else {
      if (this.toNumber(this.stage.vars.level) === 2) {
        this.stage.vars.chicaai = 1;
      } else {
        if (this.toNumber(this.stage.vars.level) === 3) {
          this.stage.vars.chicaai = 5;
        } else {
          if (this.toNumber(this.stage.vars.level) === 4) {
            this.stage.vars.chicaai = 4;
          } else {
            if (this.toNumber(this.stage.vars.level) === 5) {
              this.stage.vars.chicaai = 7;
            } else {
              if (this.toNumber(this.stage.vars.level) === 6) {
                this.stage.vars.chicaai = 12;
              } else {
                null;
              }
            }
          }
        }
      }
    }
  }
}

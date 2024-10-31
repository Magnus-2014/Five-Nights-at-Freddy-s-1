/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ShowStage extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("all present", "./ShowStage/costumes/all present.png", {
        x: 480,
        y: 216,
      }),
      new Costume("all stare", "./ShowStage/costumes/all stare.png", {
        x: 480,
        y: 216,
      }),
      new Costume("bonnie gone", "./ShowStage/costumes/bonnie gone.png", {
        x: 480,
        y: 216,
      }),
      new Costume("freddy", "./ShowStage/costumes/freddy.png", {
        x: 480,
        y: 216,
      }),
      new Costume("freddy stare", "./ShowStage/costumes/freddy stare.png", {
        x: 480,
        y: 216,
      }),
      new Costume("all gone", "./ShowStage/costumes/all gone.png", {
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
        { name: "moniter" },
        this.whenIReceiveMoniter
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "moniter" },
        this.whenIReceiveMoniter2
      ),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera
      ),
    ];

    this.vars.vision = 13;
  }

  *whenGreenFlagClicked() {
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveOffice() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.goto(60, 0);
    while (true) {
      yield* this.glide(6, -60, 0);
      yield* this.wait(2);
      yield* this.glide(6, 60, 0);
      yield* this.wait(2);
      yield;
    }
  }

  *whenIReceiveMoniter() {
    if (
      this.toString(this.stage.vars.bonnieLocation) === "Show Stage" &&
      this.toString(this.stage.vars.chicaLocation) === "Show Stage" &&
      this.toString(this.stage.vars.freddyLocation) === "Show Stage"
    ) {
      if (this.toNumber(this.vars.vision) === 1) {
        this.costume = "all stare";
      } else {
        this.costume = "all present";
      }
    } else {
      if (
        !(this.toString(this.stage.vars.bonnieLocation) === "Show Stage") &&
        this.toString(this.stage.vars.chicaLocation) === "Show Stage" &&
        this.toString(this.stage.vars.freddyLocation) === "Show Stage"
      ) {
        this.costume = "bonnie gone";
      } else {
        if (
          this.toString(this.stage.vars.bonnieLocation) === "Show Stage" &&
          !(this.toString(this.stage.vars.chicaLocation) === "Show Stage") &&
          this.toString(this.stage.vars.freddyLocation) === "Show Stage"
        ) {
          this.costume = "chica gone";
        } else {
          if (
            !(
              this.toString(this.stage.vars.bonnieLocation) === "Show Stage" &&
              this.toString(this.stage.vars.chicaLocation) === "Show Stage"
            ) &&
            this.toString(this.stage.vars.freddyLocation) === "Show Stage"
          ) {
            if (this.toNumber(this.vars.vision) === 1) {
              this.costume = "freddy stare";
            } else {
              this.costume = "freddy";
            }
          } else {
            this.costume = "all gone";
          }
        }
      }
    }
  }

  *whenIReceiveMoniter2() {
    this.vars.vision = this.random(1, 100);
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

  *whenIReceiveCamera() {
    if (
      this.toString(this.stage.vars.bonnieLocation) === "Show Stage" &&
      this.toString(this.stage.vars.chicaLocation) === "Show Stage" &&
      this.toString(this.stage.vars.freddyLocation) === "Show Stage"
    ) {
      if (this.toNumber(this.vars.vision) === 1) {
        this.costume = "all stare";
      } else {
        this.costume = "all present";
      }
    } else {
      if (
        !(this.toString(this.stage.vars.bonnieLocation) === "Show Stage") &&
        this.toString(this.stage.vars.chicaLocation) === "Show Stage" &&
        this.toString(this.stage.vars.freddyLocation) === "Show Stage"
      ) {
        this.costume = "bonnie gone";
      } else {
        if (
          this.toString(this.stage.vars.bonnieLocation) === "Show Stage" &&
          !(this.toString(this.stage.vars.chicaLocation) === "Show Stage") &&
          this.toString(this.stage.vars.freddyLocation) === "Show Stage"
        ) {
          this.costume = "chica gone";
        } else {
          if (
            !(
              this.toString(this.stage.vars.bonnieLocation) === "Show Stage" &&
              this.toString(this.stage.vars.chicaLocation) === "Show Stage"
            ) &&
            this.toString(this.stage.vars.freddyLocation) === "Show Stage"
          ) {
            if (this.toNumber(this.vars.vision) === 1) {
              this.costume = "freddy stare";
            } else {
              this.costume = "freddy";
            }
          } else {
            this.costume = "all gone";
          }
        }
      }
    }
    if (this.toString(this.stage.vars.camera) === "Show Stage") {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}

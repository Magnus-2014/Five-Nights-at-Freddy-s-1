/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class EastHall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("clear", "./EastHall/costumes/clear.png", { x: 480, y: 216 }),
      new Costume("crying kids", "./EastHall/costumes/crying kids.png", {
        x: 480,
        y: 216,
      }),
      new Costume("it's me", "./EastHall/costumes/it's me.png", {
        x: 480,
        y: 216,
      }),
      new Costume("chica", "./EastHall/costumes/chica.png", { x: 480, y: 216 }),
      new Costume("chica close", "./EastHall/costumes/chica close.png", {
        x: 480,
        y: 216,
      }),
      new Costume("freddy", "./EastHall/costumes/freddy.png", {
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
        { name: "camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
    ];

    this.vars.visions = 34;
    this.vars.posters = 2;
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

  *whenIReceiveMoniter() {
    this.vars.visions = this.random(1, 100);
    this.vars.posters = this.random(1, 2);
    if (this.toString(this.stage.vars.chicaLocation) === "East Hall") {
      if (this.toNumber(this.stage.vars.chicaPosition) === 1) {
        this.costume = "chica";
      } else {
        if (this.toNumber(this.stage.vars.chicaPosition) === 2) {
          this.costume = "chica close";
        } else {
          null;
        }
      }
    } else {
      if (this.toString(this.stage.vars.freddyLocation) === "East Hall") {
        this.costume = "freddy";
      } else {
        if (this.toNumber(this.vars.visions) === 1) {
          if (this.toNumber(this.vars.posters) === 1) {
            this.costume = "crying kids";
          } else {
            this.costume = "it's me";
          }
        } else {
          this.costume = "clear";
        }
      }
    }
  }

  *whenIReceiveCamera() {
    if (this.toString(this.stage.vars.chicaLocation) === "East Hall") {
      if (this.toNumber(this.stage.vars.chicaPosition) === 1) {
        this.costume = "chica";
      } else {
        if (this.toNumber(this.stage.vars.chicaPosition) === 2) {
          this.costume = "chica close";
        } else {
          null;
        }
      }
    } else {
      if (this.toString(this.stage.vars.freddyLocation) === "East Hall") {
        this.costume = "freddy";
      } else {
        if (this.toNumber(this.vars.visions) === 1) {
          if (this.toNumber(this.vars.posters) === 1) {
            this.costume = "crying kids";
          } else {
            this.costume = "it's me";
          }
        } else {
          this.costume = "clear";
        }
      }
    }
    if (this.toString(this.stage.vars.camera) === "East Hall") {
      this.visible = true;
    } else {
      this.visible = false;
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

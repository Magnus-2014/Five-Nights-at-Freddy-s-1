/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Golden extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("yellow bear", "./Golden/costumes/yellow bear.png", {
        x: 373,
        y: 358,
      }),
      new Costume("GFweFNAF2", "./Golden/costumes/GFweFNAF2.png", {
        x: 354,
        y: 350,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "golden freddy" },
        this.whenIReceiveGoldenFreddy
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "creepy end" },
        this.whenIReceiveCreepyEnd
      ),
    ];
  }

  *whenIReceiveStart() {
    this.stage.vars.goldenFreddy = this.random(1, 30);
  }

  *whenIReceiveGoldenFreddy() {
    while (!(this.toNumber(this.stage.vars.cams) === 0)) {
      yield;
    }
    this.visible = true;
    yield* this.wait(this.random(1, 5));
    if (
      this.toNumber(this.sprites["Hallucinations"].vars.yellowbearShow) === 1
    ) {
      this.broadcast("creepy end");
    }
  }

  *whenIReceiveCamera() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.size = 50;
    this.visible = false;
  }

  *whenIReceiveStart2() {
    while (true) {
      this.goto(this.sprites["Pan"].x - 50, -40);
      yield;
    }
  }

  *whenIReceiveCreepyEnd() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}

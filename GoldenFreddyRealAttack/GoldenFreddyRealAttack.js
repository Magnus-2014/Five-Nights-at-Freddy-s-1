/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GoldenFreddyRealAttack extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "golden freddy real attack-0",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-0.png",
        { x: 480, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-1",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-1.png",
        { x: 480, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-2",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-2.png",
        { x: 500, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-3",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-3.png",
        { x: 500, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-4",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-4.png",
        { x: 480, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-5",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-5.png",
        { x: 480, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-6",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-6.png",
        { x: 500, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-7",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-7.png",
        { x: 480, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-8",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-8.png",
        { x: 480, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-9",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-9.png",
        { x: 480, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-10",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-10.png",
        { x: 500, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-11",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-11.png",
        { x: 500, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-12",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-12.png",
        { x: 500, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-13",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-13.png",
        { x: 500, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-14",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-14.png",
        { x: 500, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-15",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-15.png",
        { x: 500, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-16",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-16.png",
        { x: 500, y: 280 }
      ),
      new Costume(
        "golden freddy real attack-17",
        "./GoldenFreddyRealAttack/costumes/golden freddy real attack-17.png",
        { x: 480, y: 280 }
      ),
      new Costume(
        "NoJSGFreddy",
        "./GoldenFreddyRealAttack/costumes/NoJSGFreddy.svg",
        { x: 240, y: 135 }
      ),
    ];

    this.sounds = [
      new Sound("XSCREAM", "./GoldenFreddyRealAttack/sounds/XSCREAM.wav"),
      new Sound("XSCREAM2", "./GoldenFreddyRealAttack/sounds/XSCREAM2.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "creepy end" },
        this.whenIReceiveCreepyEnd
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveCreepyEnd() {
    /* TODO: Implement stop other scripts in sprite */ null;
    if (this.toNumber(this.stage.vars.jumpscares) === 1) {
      yield* this.wait(this.random(1, 7));
      this.visible = true;
      this.moveAhead();
      this.audioEffects.volume = 100;
      yield* this.startSound("XSCREAM2");
      this.costume = "golden freddy real attack-0";
      for (let i = 0; i < 17; i++) {
        this.costumeNumber++;
        yield;
      }
      this.stopAllSounds();
      this.visible = false;
    } else {
      this.costume = "NoJSGFreddy";
    }
    this.visible = true;
    yield* this.wait(1);
    /* TODO: Implement stop all */ null;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}

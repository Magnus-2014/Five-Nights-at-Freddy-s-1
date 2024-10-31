/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GoldenFreddyGif extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Golden Freddy gif",
        "./GoldenFreddyGif/costumes/Golden Freddy gif.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif2",
        "./GoldenFreddyGif/costumes/Golden Freddy gif2.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif3",
        "./GoldenFreddyGif/costumes/Golden Freddy gif3.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif4",
        "./GoldenFreddyGif/costumes/Golden Freddy gif4.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif5",
        "./GoldenFreddyGif/costumes/Golden Freddy gif5.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif6",
        "./GoldenFreddyGif/costumes/Golden Freddy gif6.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif7",
        "./GoldenFreddyGif/costumes/Golden Freddy gif7.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif8",
        "./GoldenFreddyGif/costumes/Golden Freddy gif8.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif9",
        "./GoldenFreddyGif/costumes/Golden Freddy gif9.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif10",
        "./GoldenFreddyGif/costumes/Golden Freddy gif10.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif11",
        "./GoldenFreddyGif/costumes/Golden Freddy gif11.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif12",
        "./GoldenFreddyGif/costumes/Golden Freddy gif12.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif13",
        "./GoldenFreddyGif/costumes/Golden Freddy gif13.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif14",
        "./GoldenFreddyGif/costumes/Golden Freddy gif14.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif15",
        "./GoldenFreddyGif/costumes/Golden Freddy gif15.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif16",
        "./GoldenFreddyGif/costumes/Golden Freddy gif16.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif17",
        "./GoldenFreddyGif/costumes/Golden Freddy gif17.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif18",
        "./GoldenFreddyGif/costumes/Golden Freddy gif18.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif19",
        "./GoldenFreddyGif/costumes/Golden Freddy gif19.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif20",
        "./GoldenFreddyGif/costumes/Golden Freddy gif20.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif21",
        "./GoldenFreddyGif/costumes/Golden Freddy gif21.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif22",
        "./GoldenFreddyGif/costumes/Golden Freddy gif22.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif23",
        "./GoldenFreddyGif/costumes/Golden Freddy gif23.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif24",
        "./GoldenFreddyGif/costumes/Golden Freddy gif24.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif25",
        "./GoldenFreddyGif/costumes/Golden Freddy gif25.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif26",
        "./GoldenFreddyGif/costumes/Golden Freddy gif26.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif27",
        "./GoldenFreddyGif/costumes/Golden Freddy gif27.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif28",
        "./GoldenFreddyGif/costumes/Golden Freddy gif28.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif29",
        "./GoldenFreddyGif/costumes/Golden Freddy gif29.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif30",
        "./GoldenFreddyGif/costumes/Golden Freddy gif30.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif31",
        "./GoldenFreddyGif/costumes/Golden Freddy gif31.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif32",
        "./GoldenFreddyGif/costumes/Golden Freddy gif32.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif33",
        "./GoldenFreddyGif/costumes/Golden Freddy gif33.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif34",
        "./GoldenFreddyGif/costumes/Golden Freddy gif34.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif35",
        "./GoldenFreddyGif/costumes/Golden Freddy gif35.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif36",
        "./GoldenFreddyGif/costumes/Golden Freddy gif36.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif37",
        "./GoldenFreddyGif/costumes/Golden Freddy gif37.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif38",
        "./GoldenFreddyGif/costumes/Golden Freddy gif38.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif39",
        "./GoldenFreddyGif/costumes/Golden Freddy gif39.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif40",
        "./GoldenFreddyGif/costumes/Golden Freddy gif40.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif41",
        "./GoldenFreddyGif/costumes/Golden Freddy gif41.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif42",
        "./GoldenFreddyGif/costumes/Golden Freddy gif42.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif43",
        "./GoldenFreddyGif/costumes/Golden Freddy gif43.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif44",
        "./GoldenFreddyGif/costumes/Golden Freddy gif44.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif45",
        "./GoldenFreddyGif/costumes/Golden Freddy gif45.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif46",
        "./GoldenFreddyGif/costumes/Golden Freddy gif46.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif47",
        "./GoldenFreddyGif/costumes/Golden Freddy gif47.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif48",
        "./GoldenFreddyGif/costumes/Golden Freddy gif48.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif49",
        "./GoldenFreddyGif/costumes/Golden Freddy gif49.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif50",
        "./GoldenFreddyGif/costumes/Golden Freddy gif50.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif51",
        "./GoldenFreddyGif/costumes/Golden Freddy gif51.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif52",
        "./GoldenFreddyGif/costumes/Golden Freddy gif52.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif53",
        "./GoldenFreddyGif/costumes/Golden Freddy gif53.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif54",
        "./GoldenFreddyGif/costumes/Golden Freddy gif54.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif55",
        "./GoldenFreddyGif/costumes/Golden Freddy gif55.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif56",
        "./GoldenFreddyGif/costumes/Golden Freddy gif56.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif57",
        "./GoldenFreddyGif/costumes/Golden Freddy gif57.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif58",
        "./GoldenFreddyGif/costumes/Golden Freddy gif58.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif59",
        "./GoldenFreddyGif/costumes/Golden Freddy gif59.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif60",
        "./GoldenFreddyGif/costumes/Golden Freddy gif60.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif61",
        "./GoldenFreddyGif/costumes/Golden Freddy gif61.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif62",
        "./GoldenFreddyGif/costumes/Golden Freddy gif62.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif63",
        "./GoldenFreddyGif/costumes/Golden Freddy gif63.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif64",
        "./GoldenFreddyGif/costumes/Golden Freddy gif64.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif65",
        "./GoldenFreddyGif/costumes/Golden Freddy gif65.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif66",
        "./GoldenFreddyGif/costumes/Golden Freddy gif66.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif67",
        "./GoldenFreddyGif/costumes/Golden Freddy gif67.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif68",
        "./GoldenFreddyGif/costumes/Golden Freddy gif68.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif69",
        "./GoldenFreddyGif/costumes/Golden Freddy gif69.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif70",
        "./GoldenFreddyGif/costumes/Golden Freddy gif70.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif71",
        "./GoldenFreddyGif/costumes/Golden Freddy gif71.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif72",
        "./GoldenFreddyGif/costumes/Golden Freddy gif72.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif73",
        "./GoldenFreddyGif/costumes/Golden Freddy gif73.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif74",
        "./GoldenFreddyGif/costumes/Golden Freddy gif74.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif75",
        "./GoldenFreddyGif/costumes/Golden Freddy gif75.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif76",
        "./GoldenFreddyGif/costumes/Golden Freddy gif76.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif77",
        "./GoldenFreddyGif/costumes/Golden Freddy gif77.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif78",
        "./GoldenFreddyGif/costumes/Golden Freddy gif78.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif79",
        "./GoldenFreddyGif/costumes/Golden Freddy gif79.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif80",
        "./GoldenFreddyGif/costumes/Golden Freddy gif80.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif81",
        "./GoldenFreddyGif/costumes/Golden Freddy gif81.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif82",
        "./GoldenFreddyGif/costumes/Golden Freddy gif82.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif83",
        "./GoldenFreddyGif/costumes/Golden Freddy gif83.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif84",
        "./GoldenFreddyGif/costumes/Golden Freddy gif84.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif85",
        "./GoldenFreddyGif/costumes/Golden Freddy gif85.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif86",
        "./GoldenFreddyGif/costumes/Golden Freddy gif86.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif87",
        "./GoldenFreddyGif/costumes/Golden Freddy gif87.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif88",
        "./GoldenFreddyGif/costumes/Golden Freddy gif88.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif89",
        "./GoldenFreddyGif/costumes/Golden Freddy gif89.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif90",
        "./GoldenFreddyGif/costumes/Golden Freddy gif90.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif91",
        "./GoldenFreddyGif/costumes/Golden Freddy gif91.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif92",
        "./GoldenFreddyGif/costumes/Golden Freddy gif92.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif93",
        "./GoldenFreddyGif/costumes/Golden Freddy gif93.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif94",
        "./GoldenFreddyGif/costumes/Golden Freddy gif94.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif95",
        "./GoldenFreddyGif/costumes/Golden Freddy gif95.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif96",
        "./GoldenFreddyGif/costumes/Golden Freddy gif96.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif97",
        "./GoldenFreddyGif/costumes/Golden Freddy gif97.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif98",
        "./GoldenFreddyGif/costumes/Golden Freddy gif98.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif99",
        "./GoldenFreddyGif/costumes/Golden Freddy gif99.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif100",
        "./GoldenFreddyGif/costumes/Golden Freddy gif100.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif101",
        "./GoldenFreddyGif/costumes/Golden Freddy gif101.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif102",
        "./GoldenFreddyGif/costumes/Golden Freddy gif102.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif103",
        "./GoldenFreddyGif/costumes/Golden Freddy gif103.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif104",
        "./GoldenFreddyGif/costumes/Golden Freddy gif104.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif105",
        "./GoldenFreddyGif/costumes/Golden Freddy gif105.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif106",
        "./GoldenFreddyGif/costumes/Golden Freddy gif106.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif107",
        "./GoldenFreddyGif/costumes/Golden Freddy gif107.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif108",
        "./GoldenFreddyGif/costumes/Golden Freddy gif108.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif109",
        "./GoldenFreddyGif/costumes/Golden Freddy gif109.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif110",
        "./GoldenFreddyGif/costumes/Golden Freddy gif110.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif111",
        "./GoldenFreddyGif/costumes/Golden Freddy gif111.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif112",
        "./GoldenFreddyGif/costumes/Golden Freddy gif112.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif113",
        "./GoldenFreddyGif/costumes/Golden Freddy gif113.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif114",
        "./GoldenFreddyGif/costumes/Golden Freddy gif114.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif115",
        "./GoldenFreddyGif/costumes/Golden Freddy gif115.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif116",
        "./GoldenFreddyGif/costumes/Golden Freddy gif116.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif117",
        "./GoldenFreddyGif/costumes/Golden Freddy gif117.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif118",
        "./GoldenFreddyGif/costumes/Golden Freddy gif118.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif119",
        "./GoldenFreddyGif/costumes/Golden Freddy gif119.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif120",
        "./GoldenFreddyGif/costumes/Golden Freddy gif120.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif121",
        "./GoldenFreddyGif/costumes/Golden Freddy gif121.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif122",
        "./GoldenFreddyGif/costumes/Golden Freddy gif122.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif123",
        "./GoldenFreddyGif/costumes/Golden Freddy gif123.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif124",
        "./GoldenFreddyGif/costumes/Golden Freddy gif124.png",
        { x: 320, y: 180 }
      ),
      new Costume(
        "Golden Freddy gif125",
        "./GoldenFreddyGif/costumes/Golden Freddy gif125.png",
        { x: 320, y: 180 }
      ),
    ];

    this.sounds = [];

    this.triggers = [];
  }
}

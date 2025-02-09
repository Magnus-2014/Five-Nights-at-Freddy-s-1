import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import FreddyBg from "./FreddyBg/FreddyBg.js";
import GreyBar from "./GreyBar/GreyBar.js";
import BlipFlash2 from "./BlipFlash2/BlipFlash2.js";
import Static from "./Static/Static.js";
import FnafText from "./FnafText/FnafText.js";
import Star from "./Star/Star.js";
import NewGame from "./NewGame/NewGame.js";
import Continue from "./Continue/Continue.js";
import _6thNight from "./_6thNight/_6thNight.js";
import CustomNight from "./CustomNight/CustomNight.js";
import Selection from "./Selection/Selection.js";
import Copyright from "./Copyright/Copyright.js";
import Backdrop from "./Backdrop/Backdrop.js";
import WhatDay from "./WhatDay/WhatDay.js";
import BlipFlash from "./BlipFlash/BlipFlash.js";
import Loading from "./Loading/Loading.js";
import Pan from "./Pan/Pan.js";
import Office from "./Office/Office.js";
import Nose from "./Nose/Nose.js";
import Fan from "./Fan/Fan.js";
import LeftButtonPanel from "./LeftButtonPanel/LeftButtonPanel.js";
import RightButtonPanel from "./RightButtonPanel/RightButtonPanel.js";
import DoorL from "./DoorL/DoorL.js";
import DoorR from "./DoorR/DoorR.js";
import Moniter from "./Moniter/Moniter.js";
import PowerLeft from "./PowerLeft/PowerLeft.js";
import UsageWord from "./UsageWord/UsageWord.js";
import Power10 from "./Power10/Power10.js";
import Power01 from "./Power01/Power01.js";
import UsageBars from "./UsageBars/UsageBars.js";
import FlipPanel from "./FlipPanel/FlipPanel.js";
import PhoneCalls from "./PhoneCalls/PhoneCalls.js";
import TimeAm from "./TimeAm/TimeAm.js";
import Night from "./Night/Night.js";
import Level from "./Level/Level.js";
import Border from "./Border/Border.js";
import Map from "./Map/Map.js";
import Room from "./Room/Room.js";
import RedDot from "./RedDot/RedDot.js";
import Black from "./Black/Black.js";
import ShowStage from "./ShowStage/ShowStage.js";
import Cam1a from "./Cam1a/Cam1a.js";
import DiningArea from "./DiningArea/DiningArea.js";
import Cam1b from "./Cam1b/Cam1b.js";
import PirateCove from "./PirateCove/PirateCove.js";
import Cam1c from "./Cam1c/Cam1c.js";
import WestHall from "./WestHall/WestHall.js";
import Cam2a from "./Cam2a/Cam2a.js";
import WestHallCorner from "./WestHallCorner/WestHallCorner.js";
import Cam2b from "./Cam2b/Cam2b.js";
import SupplyCloset from "./SupplyCloset/SupplyCloset.js";
import Cam3 from "./Cam3/Cam3.js";
import EastHall from "./EastHall/EastHall.js";
import Cam4a from "./Cam4a/Cam4a.js";
import EastHallCorner from "./EastHallCorner/EastHallCorner.js";
import Cam4b from "./Cam4b/Cam4b.js";
import Backstage from "./Backstage/Backstage.js";
import Cam5 from "./Cam5/Cam5.js";
import Kitchen from "./Kitchen/Kitchen.js";
import Cam6 from "./Cam6/Cam6.js";
import Restrooms from "./Restrooms/Restrooms.js";
import Cam7 from "./Cam7/Cam7.js";
import Bonnie from "./Bonnie/Bonnie.js";
import Chica from "./Chica/Chica.js";
import Foxy from "./Foxy/Foxy.js";
import Freddy from "./Freddy/Freddy.js";
import Golden from "./Golden/Golden.js";
import _6amBack from "./_6amBack/_6amBack.js";
import _6amFore from "./_6amFore/_6amFore.js";
import Hallucinations from "./Hallucinations/Hallucinations.js";
import AiSet from "./AiSet/AiSet.js";
import Custom10 from "./Custom10/Custom10.js";
import Custom01 from "./Custom01/Custom01.js";
import Ready from "./Ready/Ready.js";
import Settingsbutton from "./Settingsbutton/Settingsbutton.js";
import Jumpscareoff from "./Jumpscareoff/Jumpscareoff.js";
import Jumpscareon from "./Jumpscareon/Jumpscareon.js";
import Confirmsettings from "./Confirmsettings/Confirmsettings.js";
import Icon from "./Icon/Icon.js";
import Bonnie2 from "./Bonnie2/Bonnie2.js";
import GoldenFreddyRealAttack from "./GoldenFreddyRealAttack/GoldenFreddyRealAttack.js";
import Black2 from "./Black2/Black2.js";
import GoldenFreddyGif from "./GoldenFreddyGif/GoldenFreddyGif.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  FreddyBg: new FreddyBg({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9,
  }),
  GreyBar: new GreyBar({
    x: 0,
    y: -75.2125,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11,
  }),
  BlipFlash2: new BlipFlash2({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 12,
  }),
  Static: new Static({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 6,
    size: 100,
    visible: true,
    layerOrder: 56,
  }),
  FnafText: new FnafText({
    x: -135,
    y: 55,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 15,
  }),
  Star: new Star({
    x: -130,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 47,
  }),
  NewGame: new NewGame({
    x: -135,
    y: -30,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 81,
  }),
  Continue: new Continue({
    x: -135,
    y: -55,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 82,
  }),
  _6thNight: new _6thNight({
    x: -130,
    y: -85,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 83,
  }),
  CustomNight: new CustomNight({
    x: -115,
    y: -110,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 62,
  }),
  Selection: new Selection({
    x: -195,
    y: -30,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 16,
  }),
  Copyright: new Copyright({
    x: 145,
    y: -135,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 61,
  }),
  Backdrop: new Backdrop({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 49,
  }),
  WhatDay: new WhatDay({
    x: 0,
    y: 10,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 31,
  }),
  BlipFlash: new BlipFlash({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 17,
  }),
  Loading: new Loading({
    x: 225,
    y: -120,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 18,
  }),
  Pan: new Pan({
    x: 60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 25,
  }),
  Office: new Office({
    x: 60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 19,
  }),
  Nose: new Nose({
    x: 60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 26,
  }),
  Fan: new Fan({
    x: 60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 20,
  }),
  LeftButtonPanel: new LeftButtonPanel({
    x: 60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 30,
  }),
  RightButtonPanel: new RightButtonPanel({
    x: 239,
    y: -24,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 34,
    visible: false,
    layerOrder: 29,
  }),
  DoorL: new DoorL({
    x: -229,
    y: 4,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 9,
    size: 77,
    visible: false,
    layerOrder: 21,
  }),
  DoorR: new DoorR({
    x: 229,
    y: 6,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 78,
    visible: false,
    layerOrder: 27,
  }),
  Moniter: new Moniter({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 45,
  }),
  PowerLeft: new PowerLeft({
    x: -200,
    y: -105,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 40,
  }),
  UsageWord: new UsageWord({
    x: -212,
    y: -117,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 39,
  }),
  Power10: new Power10({
    x: -165,
    y: -105,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 10,
    size: 55.00000000000001,
    visible: false,
    layerOrder: 37,
  }),
  Power01: new Power01({
    x: -157,
    y: -105,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 10,
    size: 55.00000000000001,
    visible: false,
    layerOrder: 38,
  }),
  UsageBars: new UsageBars({
    x: -175,
    y: -118,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 40,
    visible: false,
    layerOrder: 35,
  }),
  FlipPanel: new FlipPanel({
    x: -35,
    y: -115,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 45,
    visible: false,
    layerOrder: 41,
  }),
  PhoneCalls: new PhoneCalls({
    x: -200,
    y: 117,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 78,
  }),
  TimeAm: new TimeAm({
    x: 216,
    y: 116,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 40,
    visible: false,
    layerOrder: 36,
  }),
  Night: new Night({
    x: -160,
    y: -70,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 40,
    visible: false,
    layerOrder: 42,
  }),
  Level: new Level({
    x: -140,
    y: -69,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 7,
    size: 41.66666666666667,
    visible: false,
    layerOrder: 44,
  }),
  Border: new Border({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22,
  }),
  Map: new Map({
    x: 150,
    y: -60,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 40,
    visible: false,
    layerOrder: 23,
  }),
  Room: new Room({
    x: 112,
    y: 17,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 43,
  }),
  RedDot: new RedDot({
    x: -205,
    y: 95,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 46,
  }),
  Black: new Black({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14,
  }),
  ShowStage: new ShowStage({
    x: -60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 125,
    visible: false,
    layerOrder: 8,
  }),
  Cam1a: new Cam1a({
    x: 127,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 77,
  }),
  DiningArea: new DiningArea({
    x: 3.219999999999999,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 13,
  }),
  Cam1b: new Cam1b({
    x: 119,
    y: -23,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 79,
  }),
  PirateCove: new PirateCove({
    x: -60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 7,
  }),
  Cam1c: new Cam1c({
    x: 109,
    y: -52,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 72,
  }),
  WestHall: new WestHall({
    x: -60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 5,
  }),
  Cam2a: new Cam2a({
    x: 126,
    y: -91,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 68,
  }),
  WestHallCorner: new WestHallCorner({
    x: 3.219999999999999,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 10,
  }),
  Cam2b: new Cam2b({
    x: 126,
    y: -107,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 69,
  }),
  SupplyCloset: new SupplyCloset({
    x: 60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 4,
  }),
  Cam3: new Cam3({
    x: 97,
    y: -86,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 70,
  }),
  EastHall: new EastHall({
    x: -60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 2,
  }),
  Cam4a: new Cam4a({
    x: 167,
    y: -91,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 76,
  }),
  EastHallCorner: new EastHallCorner({
    x: -60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 1,
  }),
  Cam4b: new Cam4b({
    x: 167,
    y: -107,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 73,
  }),
  Backstage: new Backstage({
    x: -60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 125,
    visible: false,
    layerOrder: 3,
  }),
  Cam5: new Cam5({
    x: 80,
    y: -30,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 71,
  }),
  Kitchen: new Kitchen({
    x: 0,
    y: 95,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 24,
  }),
  Cam6: new Cam6({
    x: 198,
    y: -81,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 74,
  }),
  Restrooms: new Restrooms({
    x: -60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 125,
    visible: false,
    layerOrder: 6,
  }),
  Cam7: new Cam7({
    x: 205,
    y: -34,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 75,
  }),
  Bonnie: new Bonnie({
    x: 60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 125,
    visible: false,
    layerOrder: 32,
  }),
  Chica: new Chica({
    x: -19,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 14,
    size: 125,
    visible: false,
    layerOrder: 33,
  }),
  Foxy: new Foxy({
    x: 60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 9,
    size: 125,
    visible: false,
    layerOrder: 28,
  }),
  Freddy: new Freddy({
    x: -60,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 125,
    visible: false,
    layerOrder: 34,
  }),
  Golden: new Golden({
    x: -44,
    y: -40,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 64,
  }),
  _6amBack: new _6amBack({
    x: -20,
    y: 21,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 48,
  }),
  _6amFore: new _6amFore({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 50,
  }),
  Hallucinations: new Hallucinations({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 55,
  }),
  AiSet: new AiSet({
    x: 0,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 51,
  }),
  Custom10: new Custom10({
    x: 0,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 40,
    visible: false,
    layerOrder: 53,
  }),
  Custom01: new Custom01({
    x: 0,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 52,
  }),
  Ready: new Ready({
    x: 175,
    y: -110,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 54,
  }),
  Settingsbutton: new Settingsbutton({
    x: -210,
    y: -125,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 80,
  }),
  Jumpscareoff: new Jumpscareoff({
    x: -44,
    y: 30,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 15,
    visible: false,
    layerOrder: 58,
  }),
  Jumpscareon: new Jumpscareon({
    x: 44,
    y: 30,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 15,
    visible: false,
    layerOrder: 59,
  }),
  Confirmsettings: new Confirmsettings({
    x: 0,
    y: -100,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 60,
  }),
  Icon: new Icon({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 57,
  }),
  Bonnie2: new Bonnie2({
    x: 220,
    y: -120,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 6,
    size: 60,
    visible: false,
    layerOrder: 63,
  }),
  GoldenFreddyRealAttack: new GoldenFreddyRealAttack({
    x: -2,
    y: -3,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 18,
    size: 100,
    visible: false,
    layerOrder: 66,
  }),
  Black2: new Black2({
    x: -43.19505164341213,
    y: -5.433838581921224,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 65,
  }),
  GoldenFreddyGif: new GoldenFreddyGif({
    x: -79,
    y: 29,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 44,
    size: 100,
    visible: false,
    layerOrder: 67,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;

'use strict';

import {Horloge} from "./horloge";

let div = document.querySelector('#horloge');

let horloge = new Horloge(div);
horloge.update();
horloge.start();


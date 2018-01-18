/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(1);


window.leftPressed = false;
window.rightPressed = false;

let difficultyModifier = 1;
let rotateSpeed = 98;
let lineSpeed1 = 5;
let lineSpeed2 = 3;
let lineLifeTimer = 74;
let ballSpeed = .1;

const mainMenu = new Image();
mainMenu.src = 'assets/images/MainMenu.png';

const menuBgm = new Audio('./assets/audio/Mangetsu.mp3');
menuBgm.addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
}, false);

menuBgm.play();

const bgm = new Audio('./assets/audio/Xeleuiem.mp3');
bgm.addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
}, false);

const hitSound = new Audio('./assets/audio/hitSound.mp3');

document.addEventListener('DOMContentLoaded', () => {
  const gameCanvas = document.getElementById('game');
  gameCanvas.height = 500;
  gameCanvas.width = 500;
  const canvasContext = gameCanvas.getContext('2d');

  mainMenu.onload = () => {
    canvasContext.drawImage(mainMenu, 0, 0);
  };

  let game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](
    canvasContext,
    gameCanvas,
    bgm,
    hitSound,
    lineSpeed1, //lineSpeeds
    lineSpeed2,
    difficultyModifier,
    rotateSpeed,
    lineLifeTimer,
    ballSpeed
  );

  window.addEventListener('keydown', checkKeyPressed, false);
  window.addEventListener('keyup', checkKeyLifted, false);

  function checkKeyPressed(event) {
    switch (event.keyCode) {
      case 37:
        window.leftPressed = true;
        break;
      case 39:
        window.rightPressed = true;
        break;
      case 32:
        if (game.gameOver === true) {
          game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](
            canvasContext,
            gameCanvas,
            bgm,
            hitSound,
            lineSpeed1, //lineSpeeds
            lineSpeed2,
            difficultyModifier,
            rotateSpeed,
            lineLifeTimer,
            ballSpeed
          );
          game.gameActive = true;
          menuBgm.pause();
          bgm.play();
          game.begin();
        } else if (game.gameActive === false) {
          game.gameActive = true;
          menuBgm.pause();
          bgm.play();
          game.begin();
        }

        break;
      case 49:
        if (game.gameActive === false) {
          difficultyModifier = 1;
          rotateSpeed = 98;
          lineSpeed1 = 5;
          lineSpeed2 = 3;
          lineLifeTimer = 74;
          ballSpeed = .1;
        }

        break;
      case 50:
        if (game.gameActive === false) {
          difficultyModifier = 2;
          rotateSpeed = 70;
          lineSpeed1 = 6;
          lineSpeed2 = 4;
          lineLifeTimer = 64;
          ballSpeed = .14;
        }

        break;
      case 51:
        if (game.gameActive === false) {
          difficultyModifier = 3;
          rotateSpeed = 50;
          lineSpeed1 = 6.8;
          lineSpeed2 = 4.8;
          lineLifeTimer = 54;
          ballSpeed = .17;
        }

        break;
      case 77:
        if (game.gameActive === true) {
          if (bgm.paused) {
            bgm.play();
          } else {
            bgm.pause();
          }
        } else {
          if (menuBgm.paused) {
            menuBgm.play();
          } else {
            menuBgm.pause();
          }
        }
    }
  }

  function checkKeyLifted(event) {
    switch (event.keyCode) {
      case 37:
        window.leftPressed = false;
        break;
      case 39:
        window.rightPressed = false;
        break;
    }
  }

});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__line_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__center_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_line_circle_collision__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_line_circle_collision___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_line_circle_collision__);





class Game {
  constructor(ctx, gameCanvas, bgm, hitSound, lineSpeed1, lineSpeed2, difficultyModifier, rotateSpeed, lineLifeTimer, ballSpeed) {
    this.ctx = ctx;
    this.gameCanvas = gameCanvas;
    this.bgm = bgm;
    this.hitSound = hitSound;

    this.gameActive = false;
    this.gameOver = false;

    this.lines = [];
    this.lines2 = [];
    this.frames;

    this.r = Math.floor(Math.random() * 250) + 6;
    this.g = Math.floor(Math.random() * 250) + 6;
    this.b = Math.floor(Math.random() * 250) + 6;
    this.color = 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';

    this.center = new __WEBPACK_IMPORTED_MODULE_1__center_js__["a" /* default */](ctx, gameCanvas);
    this.difficultyModifier = difficultyModifier;

    this.interval = 0;
    this.interval2 = -(lineLifeTimer / 2);

    this.rotateTimer = 130;
    this.rotateDir = 'left';
    this.rotateSpeed = rotateSpeed;
    this.lineSpeed1 = lineSpeed1;
    this.lineSpeed2 = lineSpeed2;
    this.lineLifeTimer = lineLifeTimer;
    this.ballSpeed = ballSpeed;
    this.player = new __WEBPACK_IMPORTED_MODULE_2__player_js__["a" /* default */](ctx, gameCanvas, this.color, this.ballSpeed);

    this.gameOverScreen = new Image();
    this.gameOverScreen.src = 'assets/images/GameOver.png';
  }

  moveLines() {
    this.lines.forEach(line => {
      line.closeIn();
    });
    this.lines2.forEach(line => {
      line.closeIn();
    });
  };

  begin() {

    const animateCallback = () => {
      this.render(this.ctx);
      this.frames = requestAnimationFrame(animateCallback);
    };

    if (this.gameActive === true) {
      animateCallback();
    } else {
      cancelAnimationFrame(frames);
    }
  };

  end() {
    this.color = 'red';
    this.hitSound.play();
    this.bgm.pause();
    this.bgm.currentTime = 0;
    this.gameActive = false;
    this.gameOver = true;
    this.ctx.resetTransform();
    cancelAnimationFrame(this.frames);
  }

  choosePattern(ctx) {
    let allDiagLines = [
                new __WEBPACK_IMPORTED_MODULE_0__line_js__["a" /* default */](ctx, this.gameCanvas, 1, this.color, this.lineSpeed1, this.lineSpeed2),
                new __WEBPACK_IMPORTED_MODULE_0__line_js__["a" /* default */](ctx, this.gameCanvas, 2, this.color, this.lineSpeed1, this.lineSpeed2),
                new __WEBPACK_IMPORTED_MODULE_0__line_js__["a" /* default */](ctx, this.gameCanvas, 3, this.color, this.lineSpeed1, this.lineSpeed2),
                new __WEBPACK_IMPORTED_MODULE_0__line_js__["a" /* default */](ctx, this.gameCanvas, 4, this.color, this.lineSpeed1, this.lineSpeed2),
                ];
    let allLines = [
                new __WEBPACK_IMPORTED_MODULE_0__line_js__["a" /* default */](ctx, this.gameCanvas, 5, this.color, this.lineSpeed1, this.lineSpeed2),
                new __WEBPACK_IMPORTED_MODULE_0__line_js__["a" /* default */](ctx, this.gameCanvas, 6, this.color, this.lineSpeed1, this.lineSpeed2),
                new __WEBPACK_IMPORTED_MODULE_0__line_js__["a" /* default */](ctx, this.gameCanvas, 7, this.color, this.lineSpeed1, this.lineSpeed2),
                new __WEBPACK_IMPORTED_MODULE_0__line_js__["a" /* default */](ctx, this.gameCanvas, 8, this.color, this.lineSpeed1, this.lineSpeed2),
                ];
    return Math.floor(Math.random() * 3) === 1 ? allDiagLines : allLines;
  }

  makePatterns(ctx) {
    let chosenLines = this.choosePattern(ctx);
    if (this.interval > this.lineLifeTimer) {
      let randNum = Math.floor(Math.random() * chosenLines.length);
      if (Math.floor(Math.random() * this.difficultyModifier) === 0) {
        chosenLines.splice((randNum + Math.floor((Math.random() * 3) + 1)) % 4, 1);
      }

      chosenLines.splice(randNum, 1);
      this.lines = chosenLines;
      this.interval = 0;
    } else {
      this.interval += 1;
    }

    let chosenLines2 = this.choosePattern(ctx);
    if (this.interval2 > this.lineLifeTimer) {
      let randNum2 = Math.floor(Math.random() * chosenLines2.length);
      if (Math.floor(Math.random() * this.difficultyModifier) === 0) {
        chosenLines2.splice((randNum2 + Math.floor((Math.random() * 3) + 1)) % 4, 1);
      }

      chosenLines2.splice(randNum2, 1);
      this.lines2 = chosenLines2;
      this.interval2 = 0;
    } else {
      this.interval2 += 1;
    }

  }

  checkCollision() {
    let circle = [this.player.ball.x, this.player.ball.y];
    let radius = this.player.ball.radius;
    this.lines.forEach((line) => {
      let a = line.startPoint;
      let b = line.endPoint;
      let hit = __WEBPACK_IMPORTED_MODULE_3_line_circle_collision___default()(a, b, circle, radius);
      if (hit === true) {
        this.end();
      }
    });
    this.lines2.forEach((line) => {
      let a = line.startPoint;
      let b = line.endPoint;
      let hit = __WEBPACK_IMPORTED_MODULE_3_line_circle_collision___default()(a, b, circle, radius);
      if (hit === true) {
        this.end();
      }
    });
  }

  rotate(ctx, flip) {
    if (flip === true) this.rotateDir = this.rotateDir === 'left' ? 'right' : 'left';
    let rotation = this.rotateDir === 'left' ? -this.rotateSpeed : this.rotateSpeed;
    ctx.translate(this.gameCanvas.width / 2, this.gameCanvas.width / 2);
    ctx.rotate(Math.PI / rotation);
    ctx.translate(-this.gameCanvas.width / 2, -this.gameCanvas.width / 2);
  }

  setColor() {
    this.r += Math.floor(Math.random() * 250) + 2;
    this.r = this.r % 256;
    if (this.r < 40) this.r = 40;

    this.g += Math.floor(Math.random() * 250) + 2;
    this.g = this.g % 256;
    if (this.g < 40) this.g = 40;

    this.b += Math.floor(Math.random() * 250) + 2;
    this.b = this.b % 256;
    if (this.b < 40) this.b = 40;
    this.color = 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
  }

  render(ctx) {
    if (this.gameActive === true) {
      this.makePatterns(ctx);

      this.checkCollision();
      ctx.clearRect(-700, -700, this.gameCanvas.width + 700, this.gameCanvas.height + 700);
      if (this.rotateTimer < 1) {
        this.rotate(ctx, true);
        this.rotateTimer = Math.floor(Math.random() * 190) + 70;
      } else {
        this.rotate(ctx, false);
        this.rotateTimer = this.rotateTimer - 1;
      }

      this.setColor();

      this.moveLines();
      this.player.render(ctx);
      this.lines.forEach((line) => {
        line.render(ctx);
      });
      this.lines2.forEach((line) => {
        line.render(ctx);
      });
      this.center.render(ctx);
    } else {
      this.ctx.drawImage(this.gameOverScreen, 0, 0);
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Line {
  constructor(ctx, gameCanvas, type, color, lineSpeed1, lineSpeed2) {
    this.ctx = ctx;
    this.gameCanvas = gameCanvas;
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.halfWidth = this.gameCanvas.width / 2;
    this.halfHeight = this.gameCanvas.height / 2;
    this.fullWidth = this.gameCanvas.width;
    this.fullHeight = this.gameCanvas.height;

    this.lineSpeed1 = lineSpeed1;
    this.lineSpeed2 = lineSpeed2;

    this.lineWidth = 10;
    this.type = type;
    this.handleType(type);
    this.startPoint = [0, 0];
    this.endPoint = [0, 0];
  }

  handleType(type) {
    if (type === 1) {
      this.x = -200;
      this.y = 0;
    } else if (type === 2) {
      this.x = this.gameCanvas.height + 200;
      this.y = this.gameCanvas.width;
    } else if (type === 3) {
      this.x = (this.gameCanvas.width / 2);
      this.y = -200;
    } else if (type === 4) {
      this.x = -200;
      this.y = this.gameCanvas.height / 2;
    } else if (type === 5) {
      this.x = 0;
      this.y = 0;
    } else if (type === 6) {
      this.x = this.gameCanvas.width;
      this.y = 0;
    } else if (type === 7) {
      this.x = 0;
      this.y = 0;
    } else if (type === 8) {
      this.x = 0;
      this.y = this.gameCanvas.height;
    }

  }

  // randomColor() {
  //   const HEX_DIGITS = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += HEX_DIGITS[Math.floor((Math.random() * 16))];
  //   }
  //
  //   return color;
  // }

  closeIn() {
    if (this.type < 5) {
      if (this.type === 1) {
        this.x = this.x + this.lineSpeed1;
        this.y = this.y + this.lineSpeed1;
      } else if (this.type === 2) {
        this.x = this.x - this.lineSpeed1;
        this.y = this.y - this.lineSpeed1;
      } else if (this.type === 3) {
        this.fullWidth = this.fullWidth - this.lineSpeed1;
        this.y = this.y + this.lineSpeed1;
      } else if (this.type === 4) {
        this.x = this.x + this.lineSpeed1;
        this.fullHeight = this.fullHeight - this.lineSpeed1;
      }

    } else {
      if (this.type === 5) {
        this.x = this.x + this.lineSpeed2;
        this.y = this.y + this.lineSpeed2;
        this.fullHeight = this.fullHeight - this.lineSpeed2;
      } else if (this.type === 6) {
        this.x = this.x - this.lineSpeed2;
        this.y = this.y + this.lineSpeed2;
        this.fullHeight = this.fullHeight - this.lineSpeed2;
      } else if (this.type === 7) {
        this.x = this.x + this.lineSpeed2;
        this.y = this.y + this.lineSpeed2;
        this.fullWidth = this.fullWidth - this.lineSpeed2;
      } else if (this.type === 8) {
        this.x = this.x + this.lineSpeed2;
        this.y = this.y - this.lineSpeed2;
        this.fullWidth = this.fullWidth - this.lineSpeed2;
      }

    }

  }

  render(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    if (this.type === 1) {
      this.startPoint = [this.x, this.halfHeight];
      ctx.moveTo(this.x, this.halfHeight);
      this.endPoint = [this.halfWidth, this.y - 200];
      ctx.lineTo(this.halfWidth, this.y - 200);
    } else if (this.type === 2) {
      this.startPoint = [this.x, this.halfHeight];
      ctx.moveTo(this.x, this.halfHeight);
      this.endPoint = [this.halfWidth, this.y + 200];
      ctx.lineTo(this.halfWidth, this.y + 200);
    } else if (this.type === 3) {
      this.startPoint = [this.x, this.y];
      ctx.moveTo(this.x, this.y);
      this.endPoint = [this.fullWidth + 200, this.halfHeight];
      ctx.lineTo(this.fullWidth + 200, this.halfHeight);
    } else if (this.type === 4) {
      this.startPoint = [this.x, this.y];
      ctx.moveTo(this.x, this.y);
      this.endPoint = [this.halfWidth, this.fullHeight + 200];
      ctx.lineTo(this.halfWidth, this.fullHeight + 200);
    } else if (this.type === 5) {
      this.startPoint = [this.x, this.y];
      ctx.moveTo(this.x, this.y);
      this.endPoint = [this.x, this.fullHeight];
      ctx.lineTo(this.x, this.fullHeight);
    } else if (this.type === 6) {
      this.startPoint = [this.x, this.y];
      ctx.moveTo(this.x, this.y);
      this.endPoint = [this.x, this.fullHeight];
      ctx.lineTo(this.x, this.fullHeight);
    } else if (this.type === 7) {
      this.startPoint = [this.x, this.y];
      ctx.moveTo(this.x, this.y);
      this.endPoint = [this.fullWidth, this.y];
      ctx.lineTo(this.fullWidth, this.y);
    } else if (this.type === 8) {
      this.startPoint = [this.x, this.y];
      ctx.moveTo(this.x, this.y);
      this.endPoint = [this.fullWidth, this.y];
      ctx.lineTo(this.fullWidth, this.y);
    }

    ctx.closePath();
    ctx.stroke();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Line);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Center {
  constructor(ctx, gameCanvas) {
    this.ctx = ctx;
    this.gameCanvas = gameCanvas;
    this.color = 'darkgray';
  }

  render(ctx) {
    let centerX = this.gameCanvas.width / 2;
    let centerY = this.gameCanvas.height / 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 55, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Center);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Player {
  constructor(ctx, gameCanvas, color, ballSpeed) {
    this.ctx = ctx;
    this.gameCanvas = gameCanvas;
    this.color = color;
    this.circle = {
      centerX: this.gameCanvas.width / 2,
      centerY: this.gameCanvas.height / 2,
      radius: 75,
      angle: 0,
    };
    this.ball = { x: 0, y: 0, speed: 0 };
    this.ball.x = 0;
    this.ball.y = 0;
    this.ball.radius = 8;
    this.ballSpeed = ballSpeed;
  }

  render(ctx) {

    if (window.rightPressed) {
      this.ball.speed = this.ballSpeed;
    }

    if (window.leftPressed) {
      this.ball.speed = -(this.ballSpeed);
    }

    if (!window.leftPressed && !window.rightPressed) {
      this.ball.speed = 0;
    }

    ctx.strokeStyle = this.color;

    this.ball.x = this.circle.centerX + Math.cos(this.circle.angle) * this.circle.radius;
    this.ball.y = this.circle.centerY + Math.sin(this.circle.angle) * this.circle.radius;

    this.circle.angle += this.ball.speed;

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Player);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var pointCircleCollide = __webpack_require__(6)

var tmp = [0, 0]

function lineCircleCollide(a, b, circle, radius, nearest) {
    //check to see if start or end points lie within circle 
    if (pointCircleCollide(a, circle, radius)) {
        if (nearest) {
            nearest[0] = a[0]
            nearest[1] = a[1]
        }
        return true
    } if (pointCircleCollide(b, circle, radius)) {
        if (nearest) {
            nearest[0] = b[0]
            nearest[1] = b[1]
        }
        return true
    }
    
    var x1 = a[0],
        y1 = a[1],
        x2 = b[0],
        y2 = b[1],
        cx = circle[0],
        cy = circle[1]

    //vector d
    var dx = x2 - x1
    var dy = y2 - y1
    
    //vector lc
    var lcx = cx - x1
    var lcy = cy - y1
    
    //project lc onto d, resulting in vector p
    var dLen2 = dx * dx + dy * dy //len2 of d
    var px = dx
    var py = dy
    if (dLen2 > 0) {
        var dp = (lcx * dx + lcy * dy) / dLen2
        px *= dp
        py *= dp
    }
    
    if (!nearest)
        nearest = tmp
    nearest[0] = x1 + px
    nearest[1] = y1 + py
    
    //len2 of p
    var pLen2 = px * px + py * py
    
    //check collision
    return pointCircleCollide(nearest, circle, radius)
            && pLen2 <= dLen2 && (px * dx + py * dy) >= 0
}

module.exports = lineCircleCollide

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function pointCircleCollision(point, circle, r) {
    if (r===0) return false
    var dx = circle[0] - point[0]
    var dy = circle[1] - point[1]
    return dx * dx + dy * dy <= r * r
}

module.exports = pointCircleCollision

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
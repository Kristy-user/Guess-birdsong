/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeLevel": () => (/* binding */ changeLevel)
/* harmony export */ });
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _modules_fillGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fillGame.js */ "./src/modules/fillGame.js");
/* harmony import */ var _modules_createQuestions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createQuestions.js */ "./src/modules/createQuestions.js");
/* harmony import */ var _modules_checkAnswers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/checkAnswers.js */ "./src/modules/checkAnswers.js");
/* harmony import */ var _assets_img_bird_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/bird.jpg */ "./src/assets/img/bird.jpg");
/* harmony import */ var _modules_countScore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/countScore */ "./src/modules/countScore.js");
/* harmony import */ var _modules_renderContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/renderContent */ "./src/modules/renderContent.js");







var currentScore = document.querySelector('.current-score');
var answersBlock = document.querySelector('.answers-list');
var LANG_BUTTON = document.querySelector('#lang');
var level;
var changeLevel = function changeLevel() {
  if (level < 5) {
    _modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.NEXT_BUTTON.disabled = false;
    level++;
  } else if (level === 5) {
    var score = currentScore.textContent;
    localStorage.setItem('score', score);
    window.location.href = './results.html';
  }
};
var location = window.location.pathname.includes('index') || window.location.pathname.endsWith('songbird/') ? 'start' : window.location.pathname.includes('play') ? 'play' : 'other';
var startApp = function startApp() {
  (0,_modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.setLangButton)(LANG_BUTTON);
  level = 0;
  function startGame() {
    var currentGroup = '';
    var currentGameContent = (0,_modules_createQuestions_js__WEBPACK_IMPORTED_MODULE_2__.createGame)();
    var warmup = currentGameContent.warmup,
      passerines = currentGameContent.passerines,
      forest = currentGameContent.forest,
      singing = currentGameContent.singing,
      predatory = currentGameContent.predatory,
      marine = currentGameContent.marine;
    _modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.NEXT_BUTTON.disabled = true;
    currentScore.textContent = 0;
    var selectLevel = function selectLevel() {
      var levelGroups = Object.keys(currentGameContent);
      currentGroup = currentGameContent[levelGroups[level]];
      _modules_fillGame_js__WEBPACK_IMPORTED_MODULE_1__.questionSound.src = currentGroup.question.audio;
      (0,_modules_fillGame_js__WEBPACK_IMPORTED_MODULE_1__.fillListAnswers)(currentGroup.answers);
    };
    selectLevel();
    _modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.NEXT_BUTTON.addEventListener('click', function () {
      selectLevel();
      _modules_fillGame_js__WEBPACK_IMPORTED_MODULE_1__.answerSound.pause();
      _modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.NEXT_BUTTON.disabled = true;
      (0,_modules_checkAnswers_js__WEBPACK_IMPORTED_MODULE_3__.hiddenBirdInfo)();
      _modules_fillGame_js__WEBPACK_IMPORTED_MODULE_1__.birdMainTitle.textContent = '********';
      _modules_fillGame_js__WEBPACK_IMPORTED_MODULE_1__.birdMainImg.style.background = "url(".concat(_assets_img_bird_jpg__WEBPACK_IMPORTED_MODULE_4__, ") center/cover");
      (0,_modules_countScore__WEBPACK_IMPORTED_MODULE_5__.changeActiveLevel)(level);
    });
    answersBlock.addEventListener('click', function (e) {
      return (0,_modules_checkAnswers_js__WEBPACK_IMPORTED_MODULE_3__.checkAnswer)(e, currentGroup);
    });
  }
  if (location === 'start') {
    (0,_modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.fillStartPage)();
    _modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.START_BUTTON.addEventListener('click', function () {
      return window.location.href = './play.html';
    });
  }
  if (location === 'play') {
    (0,_modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.fillGamePage)();
    startGame();
  }
  if (location === 'other') {
    (0,_modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.fillResultPage)();
    (0,_modules_countScore__WEBPACK_IMPORTED_MODULE_5__.showResult)();
    _modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.AGAIN_BUTTON.addEventListener('click', function () {
      level = 0;
      window.location.href = './play.html';
      startGame();
    });
  }
};
startApp();
LANG_BUTTON.addEventListener('click', function (e) {
  (0,_modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.changeLangImg)(e);
  location === 'start' ? (0,_modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.fillStartPage)() : location === 'play' ? window.location.href = './play.html' : (0,_modules_renderContent__WEBPACK_IMPORTED_MODULE_6__.fillResultPage)();
});


/***/ }),

/***/ "./src/modules/audio.js":
/*!******************************!*\
  !*** ./src/modules/audio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newSound": () => (/* binding */ newSound)
/* harmony export */ });
/* harmony import */ var _assets_sounds_birds_singing_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sounds/birds-singing.wav */ "./src/assets/sounds/birds-singing.wav");
/* harmony import */ var _assets_sounds_do_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sounds/do.mp3 */ "./src/assets/sounds/do.mp3");
/* harmony import */ var _assets_sounds_re_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/sounds/re.mp3 */ "./src/assets/sounds/re.mp3");
/* harmony import */ var _assets_sounds_mi_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sounds/mi.mp3 */ "./src/assets/sounds/mi.mp3");
/* harmony import */ var _assets_sounds_fa_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sounds/fa.mp3 */ "./src/assets/sounds/fa.mp3");
/* harmony import */ var _assets_sounds_soli_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/sounds/soli.mp3 */ "./src/assets/sounds/soli.mp3");
/* harmony import */ var _assets_sounds_lya_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/sounds/lya.mp3 */ "./src/assets/sounds/lya.mp3");
/* harmony import */ var _assets_sounds_si_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/sounds/si.mp3 */ "./src/assets/sounds/si.mp3");








var BIRD = document.querySelector('#bird');
var NOTE_LIST = document.querySelector('.note-list');
var newSound = function newSound(src) {
  var audio = new Audio();
  audio.src = src;
  return audio;
};
var mainBirdAudio = newSound(_assets_sounds_birds_singing_wav__WEBPACK_IMPORTED_MODULE_0__);
if (BIRD && NOTE_LIST) {
  BIRD.addEventListener('click', function () {
    mainBirdAudio.currentTime = 0;
    !BIRD.classList.contains('pause') ? mainBirdAudio.play() : mainBirdAudio.pause();
    BIRD.classList.toggle('pause');
  });
  var createNotes = [_assets_sounds_do_mp3__WEBPACK_IMPORTED_MODULE_1__, _assets_sounds_re_mp3__WEBPACK_IMPORTED_MODULE_2__, _assets_sounds_mi_mp3__WEBPACK_IMPORTED_MODULE_3__, _assets_sounds_fa_mp3__WEBPACK_IMPORTED_MODULE_4__, _assets_sounds_soli_mp3__WEBPACK_IMPORTED_MODULE_5__, _assets_sounds_lya_mp3__WEBPACK_IMPORTED_MODULE_6__, _assets_sounds_si_mp3__WEBPACK_IMPORTED_MODULE_7__].map(function (item) {
    return newSound(item);
  });
  NOTE_LIST.addEventListener('click', function (e) {
    switch (e.target.id) {
      case 'do':
        createNotes[0].play();
        break;
      case 're':
        createNotes[1].play();
        break;
      case 'mi':
        createNotes[2].play();
        break;
      case 'fa':
        createNotes[3].play();
        break;
      case 'sol':
        createNotes[4].play();
        break;
      case 'lya':
        createNotes[5].play();
        break;
      case 'si':
        createNotes[6].play();
        break;
    }
  });
}


/***/ }),

/***/ "./src/modules/checkAnswers.js":
/*!*************************************!*\
  !*** ./src/modules/checkAnswers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "answerAudioPlayer": () => (/* binding */ answerAudioPlayer),
/* harmony export */   "checkAnswer": () => (/* binding */ checkAnswer),
/* harmony export */   "hiddenBirdInfo": () => (/* binding */ hiddenBirdInfo),
/* harmony export */   "loadingContentAnswer": () => (/* binding */ loadingContentAnswer)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio */ "./src/modules/audio.js");
/* harmony import */ var _countScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countScore */ "./src/modules/countScore.js");
/* harmony import */ var _createAudioPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createAudioPlayer */ "./src/modules/createAudioPlayer.js");
/* harmony import */ var _assets_sounds_error_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sounds/error.mp3 */ "./src/assets/sounds/error.mp3");
/* harmony import */ var _assets_sounds_correct_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/sounds/correct.mp3 */ "./src/assets/sounds/correct.mp3");
/* harmony import */ var _fillGame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fillGame */ "./src/modules/fillGame.js");







var birdInfoBlock = document.querySelector('.chosen-bird-wrapper');
var gameInfoBlock = document.querySelector('.game-description');
var loadingContentAnswer = document.querySelector('.chosen-bird-main .audio-loading');
var answerAudioPlayer = document.querySelector('.chosen-audio-player');
var showBirdInfo = function showBirdInfo() {
  birdInfoBlock.classList.remove('hidden');
  gameInfoBlock.classList.add('hidden');
};
var hiddenBirdInfo = function hiddenBirdInfo() {
  birdInfoBlock.classList.add('hidden');
  gameInfoBlock.classList.remove('hidden');
};
var soundCheck = (0,_audio__WEBPACK_IMPORTED_MODULE_1__.newSound)('');
var maxScore = 5;
var correctChoice = function correctChoice(soundCorrect, soundBird) {
  soundCorrect.src = _assets_sounds_correct_mp3__WEBPACK_IMPORTED_MODULE_5__;
  soundCorrect.play();
  soundBird.pause();
  _fillGame__WEBPACK_IMPORTED_MODULE_6__.playButton.innerHTML = _fillGame__WEBPACK_IMPORTED_MODULE_6__.playSvg;
  (0,_countScore__WEBPACK_IMPORTED_MODULE_2__.showScore)(maxScore);
  maxScore = 5;
  (0,___WEBPACK_IMPORTED_MODULE_0__.changeLevel)();
};
var checkAnswer = function checkAnswer(e, currentGroup) {
  var chosenAnswer = e.target.closest('li');
  var isRightAnswer = document.querySelector('.answer-list-item.right');
  var idRightBird = 0;
  if (Number(chosenAnswer.id) === currentGroup.question.id && !isRightAnswer) {
    chosenAnswer.classList.add('right');
    idRightBird = Number(chosenAnswer.id);
    correctChoice(soundCheck, _fillGame__WEBPACK_IMPORTED_MODULE_6__.questionSound);
  } else if (!isRightAnswer && !chosenAnswer.classList.contains('error')) {
    soundCheck.src = _assets_sounds_error_mp3__WEBPACK_IMPORTED_MODULE_4__;
    soundCheck.play();
    chosenAnswer.classList.add('error');
    maxScore--;
  }
  if (_fillGame__WEBPACK_IMPORTED_MODULE_6__.chosenBirdName.textContent !== chosenAnswer.textContent) {
    (0,_createAudioPlayer__WEBPACK_IMPORTED_MODULE_3__.hiddenPlayer)(loadingContentAnswer, answerAudioPlayer);
    showBirdInfo();
    (0,_fillGame__WEBPACK_IMPORTED_MODULE_6__.fillCurrentAnswerInfo)(Number(chosenAnswer.id), idRightBird, currentGroup);
  }
};


/***/ }),

/***/ "./src/modules/countScore.js":
/*!***********************************!*\
  !*** ./src/modules/countScore.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeActiveLevel": () => (/* binding */ changeActiveLevel),
/* harmony export */   "showResult": () => (/* binding */ showResult),
/* harmony export */   "showScore": () => (/* binding */ showScore)
/* harmony export */ });
var currentScore = document.querySelector('.current-score');
var questionsGroups = document.querySelectorAll('.questions-list-item');
var showScore = function showScore(maxScore) {
  var previousScore = Number(currentScore.textContent);
  currentScore.textContent = previousScore + maxScore;
};
var showResult = function showResult() {
  var lang = localStorage.getItem('lang');
  var resultScore = localStorage.getItem('score');
  var resultContent = document.querySelector('#results');
  var resultText = document.querySelector('.results-text');
  Number(resultScore) === 30 ? resultText.textContent = lang === 'ru' ? 'Вы прошли игру и набрали максимальное количество баллов' : 'You completed the game and scored the maximum number of points' : resultContent.textContent = resultScore;
};
var changeActiveLevel = function changeActiveLevel(level) {
  questionsGroups.forEach(function (group) {
    return group.classList.remove('active');
  });
  questionsGroups[level].classList.add('active');
};


/***/ }),

/***/ "./src/modules/createAudioPlayer.js":
/*!******************************************!*\
  !*** ./src/modules/createAudioPlayer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeDuration": () => (/* binding */ changeDuration),
/* harmony export */   "controlVolume": () => (/* binding */ controlVolume),
/* harmony export */   "hiddenPlayer": () => (/* binding */ hiddenPlayer),
/* harmony export */   "onAudioLoad": () => (/* binding */ onAudioLoad),
/* harmony export */   "showPlayer": () => (/* binding */ showPlayer),
/* harmony export */   "toggleBtn": () => (/* binding */ toggleBtn),
/* harmony export */   "updateTime": () => (/* binding */ updateTime)
/* harmony export */ });
/* harmony import */ var _fillGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fillGame */ "./src/modules/fillGame.js");

var toggleBtn = function toggleBtn(btn, sound, e) {
  var target = e.target.closest('div');
  if (target) {
    target.classList.toggle('pause');
    if (target.classList.contains('pause')) {
      sound.play();
      btn.innerHTML = _fillGame__WEBPACK_IMPORTED_MODULE_0__.pauseSvg;
    } else {
      sound.pause();
      btn.innerHTML = _fillGame__WEBPACK_IMPORTED_MODULE_0__.playSvg;
    }
  }
};
var showPlayer = function showPlayer(loadingBox, player) {
  loadingBox.classList.add('hidden');
  player.classList.remove('hidden');
};
var hiddenPlayer = function hiddenPlayer(loadingBox, player) {
  loadingBox.classList.remove('hidden');
  player.classList.add('hidden');
};
function getTimeCodeFromNum(num) {
  var seconds = parseInt(num);
  var minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  var hours = parseInt(minutes / 60);
  minutes -= hours * 60;
  if (hours === 0) {
    return "".concat(String(minutes).padStart(2, 0), ":").concat(String(seconds % 60).padStart(2, 0));
  }
  return "".concat(String(hours).padStart(2, 0), ":").concat(minutes, ":").concat(String(seconds % 60).padStart(2, 0));
}
var updateTime = function updateTime(sound, timebar, currentTimeContainer) {
  var duration = sound.duration,
    currentTime = sound.currentTime;
  timebar.value = currentTime === 0 ? 0 : currentTime / duration;
  currentTimeContainer.textContent = getTimeCodeFromNum(currentTime);
};
var changeDuration = function changeDuration(sound, timebar) {
  timebar.addEventListener('input', function (e) {
    sound.currentTime = sound.duration * e.target.value;
  });
};
var controlVolume = function controlVolume(controller, loud, audio) {
  controller.addEventListener('input', function (e) {
    loud = e.target.value;
    audio.volume = e.target.value;
  });
};
var onAudioLoad = function onAudioLoad(sound, loadingBox, player, durationTimeContainer, timebar) {
  showPlayer(loadingBox, player);
  durationTimeContainer.textContent = getTimeCodeFromNum(sound.duration);
  changeDuration(sound, timebar);
};


/***/ }),

/***/ "./src/modules/createQuestions.js":
/*!****************************************!*\
  !*** ./src/modules/createQuestions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chooseGameQuestions": () => (/* binding */ chooseGameQuestions),
/* harmony export */   "createGame": () => (/* binding */ createGame)
/* harmony export */ });
/* harmony import */ var _helpers_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/random */ "./src/modules/helpers/random.js");
/* harmony import */ var _data_birdsDataEn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/birdsDataEn */ "./src/modules/data/birdsDataEn.js");
/* harmony import */ var _data_birdsDataRu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/birdsDataRu */ "./src/modules/data/birdsDataRu.js");
/* harmony import */ var _helpers_shuffle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/shuffle */ "./src/modules/helpers/shuffle.js");




var getQuestionsGroup = function getQuestionsGroup(lang) {
  var questionsGroup = lang === 'en' ? ['Warmup', 'Passerines', 'Forest birds', 'Songbirds ', 'Raptors ', 'Seabirds'] : ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  return questionsGroup;
};
var chooseGameQuestions = function chooseGameQuestions(birdsData, group) {
  var result = {};
  birdsData.forEach(function (data, i) {
    result[group[i]] = {
      question: data[(0,_helpers_random__WEBPACK_IMPORTED_MODULE_0__.getRandomNum)(0, data.length)]
    };
  });
  return result;
};
var shuffleAnswers = function shuffleAnswers(birdsData) {
  var result = [];
  birdsData.forEach(function (data) {
    return result.push((0,_helpers_shuffle__WEBPACK_IMPORTED_MODULE_3__.shuffleArray)(data));
  });
  return result;
};
var createGame = function createGame() {
  var lang = localStorage.getItem('lang') || 'en';
  var birdsData = lang === 'en' ? _data_birdsDataEn__WEBPACK_IMPORTED_MODULE_1__["default"] : _data_birdsDataRu__WEBPACK_IMPORTED_MODULE_2__["default"];
  var questionsGroup = getQuestionsGroup(lang);
  var newGameContent = chooseGameQuestions(birdsData, questionsGroup);
  var answers = shuffleAnswers(birdsData);
  answers.forEach(function (data, i) {
    return newGameContent[questionsGroup[i]]['answers'] = answers[i];
  });
  return newGameContent;
};


/***/ }),

/***/ "./src/modules/data/birdsDataEn.js":
/*!*****************************************!*\
  !*** ./src/modules/data/birdsDataEn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var birdsData = [[{
  id: 1,
  name: 'Сrow',
  species: 'Corvus corax',
  description: 'Crow - is a large bird. The body length reaches 70 centimeters, the wingspan is up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that the day the black crows fly away from the Tower, the monarchy will collapse..',
  image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
}, {
  id: 2,
  name: 'Crane',
  species: 'Grus grus',
  description: "The sounds made by the crane are similar to the voiced \u201Ckur-ly - kur-ly\u201D. Cranes most often sing in a duet - one bird begins the song with the syllable \"kur\", and the second picks up \"ly\". If a bird sings alone, then it makes only the sound of \xABchickens\xBB.",
  image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
}, {
  id: 3,
  name: 'Swallow',
  species: 'Delichon urbicum',
  description: "Swallows are characterized by a low chirping. The songs of the swallows do not stop throughout the summer. Researchers distinguish up to 6 chirping sounds in birds: \u201Cvit\u201D, \u201Cvi-vit\u201D, \u201Cchivit\u201D, \u201Cchirivit\u201D, etc. Swallows love to sing a duet.",
  image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
}, {
  id: 4,
  name: 'Nightjar',
  species: 'Caprimulgus europaeus',
  description: 'Nightjar is an inconspicuous bird known for its voice. The song of the nightjar sounds like a monotonous trill similar to the rattling of a motorcycle. Such rattling is heard from dusk to dawn, its tonality, frequency and volume change.',
  image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
}, {
  id: 5,
  name: 'Cuckoo',
  species: 'Cuculus canorus',
  description: 'The cuckoo was named so because of the peculiarities of its songs. The voiced “cuckoo” cannot be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which cuckoos throw their eggs.',
  image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
}, {
  id: 6,
  name: 'Tit',
  species: 'Parus major',
  description: 'More than 40 different sound combinations are distinguished in the chirping of tits. They sing almost all year round, fading a little only in winter. Tits are real orderlies of the forest. One pair of tits during the nesting period protects dozens of trees from pests.',
  image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
}], [{
  id: 1,
  name: 'Sparrow',
  species: 'Passer domesticus',
  description: 'Sparrows are the most famous and recognizable birds. They are easily recognizable by their colorful plumage and perky chirping. Sparrows belong to the synotropic species - they settle close to human habitation.',
  image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
}, {
  id: 2,
  name: 'Rook',
  species: 'Corvus frugilegus',
  description: 'Rooks are very smart and quick-witted birds. With the help of a beak, they create and use the simplest tools. Rooks have a developed reflex to the sounds of a tractor. Hearing "rattling", they fly to the sound - the tractor plows the ground, which means that there is a lot of food in this place.',
  image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
}, {
  id: 3,
  name: 'Jackdaw',
  species: 'Coloeus monedula',
  description: "The word \"jackdaw\" comes from the Old Slavonic language and is translated as \"black\". This word is often used to refer to ravens or other black birds. The Latin name of the jackdaw \"monedula\" is associated with the words coin for the bird's love for shiny and bright things.",
  image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
}, {
  id: 4,
  name: 'Thrush',
  species: 'Turdus philomelos',
  description: 'Thrush — is the best singer from the sparrow squad. The song consists only of beautiful sonorous whistles and short trills. Most often it can be heard in the morning and evening. Thrushes sing during the entire nesting period.',
  image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
}, {
  id: 5,
  name: 'Magpie',
  species: 'Pica pica',
  description: 'Magpie is a very hardworking bird. She builds up to eight nests, and then chooses the best of them. The entrance to the nest of magpies is always facing south, so that it is warmer in the dwelling. Magpies are the only birds that recognize themselves in a mirror.',
  image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
}, {
  id: 6,
  name: 'Jay',
  species: 'Garrulus glandarius',
  description: 'When the jay is worried, the tuft on her head is ruffled. The bird tries to create a frightening sight. Jays are able to imitate the voices of other birds, animals and the sounds that humans create. For the winter they make large stocks of acorns and nuts.',
  image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
}], [{
  id: 1,
  name: 'Finch',
  species: 'Fringilla coelebs',
  description: 'There are 450 species of finches in the wild. In winter, finches lead a flocking lifestyle. Sometimes sparrows can be seen in their families. Finches sing in the spring, with the onset of the mating season. Their singing is flooded multi-minute roulades.',
  image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
}, {
  id: 2,
  name: 'Klyst',
  species: 'Loxia curvirostra',
  description: "Crossbills are called \"Christmas\" birds. Under natural conditions, they give birth in winter - in January. These birds insulate their nests with moss and animal hair, so the chicks are not cold. In search of cones crossbills can fly 3500 km from the nest.",
  image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
}, {
  id: 3,
  name: 'Dove',
  species: 'Streptopelia turtur',
  description: 'The dove lives in mixed and broad-leaved forests, as well as in city parks and towns. Birds often choose places of life next to humans and easily get used to people. Due to the melodic pleasant singing of turtle doves, they are often bred at home.',
  image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
}, {
  id: 4,
  name: 'Woodpecker',
  species: 'Dendrocopos major',
  description: "The woodpecker is a conspicuous and noisy bird that often lives next to humans. From mid-January to the end of June, you can hear the \"drum roll\" of woodpeckers - a trill from the vibration of branches under the quick beats of the bird's beak. In good weather, the shot can be heard within a radius of 1.5 km.",
  image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
}, {
  id: 5,
  name: 'Hoopoe',
  species: 'Upupa epops',
  description: "Hoopoe prefer to live in open landscapes with individual trees or groves. The most convenient for the bird are the forest-steppe and savannah. Hoopoe can choose places of residence next to a person: pastures, vineyards, orchards.",
  image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
}, {
  id: 6,
  name: 'Swift',
  species: 'Apus apus',
  description: 'Swift can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.',
  image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
}], [{
  id: 1,
  name: 'Larks',
  species: 'Alauda arvensis',
  description: 'Larks are migratory birds. From the beginning of September, they fly south. They return at the beginning of March, regardless of whether the snow has melted or not. By the arrival of the larks, they determined the onset of spring and the time when it was time to plow the land.',
  image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
}, {
  id: 2,
  name: 'Nightingale',
  species: 'Luscinia luscinia',
  description: 'Nightingales sing from the beginning of May until the end of summer. Each song of the nightingale consists of 12 repeating elements, which are also called knees. In addition to their own trills, nightingales easily and well adopt the singing of other birds.',
  image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
}, {
  id: 3,
  name: 'Starling',
  species: 'Sturnus vulgaris',
  description: 'Starlings are migratory birds. Synchronous flight of large flocks of starlings is called murmuration. This is a beautiful and mesmerizing phenomenon - many birds seem to dance in the air, forming intricate shapes that decrease and increase in the sky.',
  image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
}, {
  id: 4,
  name: 'Oriole',
  species: 'Oriolus oriolus',
  description: "The melody of the oriole's voice is compared to the sound of a flute. It is difficult for a person to see the oriole, as it lives high in the trees. The oriole is not only a very beautiful, but also a useful bird. It destroys poisonous caterpillars that other birds do not eat.",
  image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
}, {
  id: 5,
  name: 'Waxwing',
  species: 'Bombycilla garrulus',
  description: 'The waxwing has very tenacious claws, which helps the bird to stay on the branches and peck at the berries that are the hardest to get. During courtship, the male offers the female a berry or other treat. If the female accepts it, then the birds create a pair.',
  image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
}, {
  id: 6,
  name: 'Goldfinch',
  species: 'Carduelis carduelis',
  description: 'Goldfinches sing beautifully and melodiously. Both in nature and in captivity, they chirp almost all year round. More than 20 iridescent trills are distinguished in the singing of the goldfinch. Goldfinches get used to people, and can even return to the owner after they are released into the wild.',
  image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
}], [{
  id: 1,
  name: 'Eagle',
  species: 'Aquila nipalensis',
  description: 'In ancient times, the eagle was a symbol of the sun. Eagles often soar above the ground, while their speed can reach 240 km / h. The illusion of slow movement is due to the flight altitude - more than 700 meters',
  image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
}, {
  id: 2,
  name: 'Kite',
  species: 'Milvus migrans',
  description: 'Kites are large predators, they reach a height of about half a meter, and the weight of adults reaches 1 kg. The wings are narrow and long, their span is 1.5 m. Kites often nest in large flocks and even form large colonies.',
  image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
}, {
  id: 3,
  name: 'Lun',
  species: 'Circus cyaneus',
  description: 'Lun is a small falcon. It feeds mainly on mouse-like rodents, the basis of its diet is voles, hamsters, and mice. The plumage of the Harrier may be ash grey. The comparison "gray-haired like a harrier" is associated with such a bird.',
  image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
}, {
  id: 4,
  name: 'Falcon',
  species: 'Falco peregrinus',
  description: 'The Latin name of the falcon Falco comes from the word "sickle" because of the sickle-shaped wings. Long and wide wings allow the falcon to rise high into the sky and soar freely. The flight speed of the falcon reaches 280-320 kilometers per hour.',
  image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
}, {
  id: 5,
  name: 'Hawk',
  species: 'Accipiter gentilis',
  description: 'All hawks are characterized by wide and short wings. Another distinguishing feature is the white "eyebrows" above the eyes. Slavic warriors placed the image of a hawk on their banners as a symbol of courage, power and ruthlessness towards enemies.',
  image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
}, {
  id: 6,
  name: 'Owl',
  species: 'Bubo bubo',
  description: 'The flight of the eagle owl is silent, the eyesight is very sharp. These features make the bird an unsurpassed night hunter. The eagle owl has no natural enemies, not a single animal preys on adult birds. But foxes and wolves attack the chicks.',
  image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
}], [{
  id: 1,
  name: 'Albatross',
  species: 'Diomedea exulans',
  description: 'Albatross is the largest flying bird in the world. The wingspan reaches three and a half, weight - ten kilograms. Albatrosses spend most of their lives in the air, covering vast distances above the ocean.',
  image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
}, {
  id: 2,
  name: 'Gannet',
  species: 'Sula nebouxii',
  description: 'A feature of the blue-footed booby is not only the rich bright blue color of the legs, but also the fact that they are very warm. While other species of birds warm the clutches with their bodies, the blue-footed gannet does this with the help of its paws.',
  image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
}, {
  id: 3,
  name: 'Petrel',
  species: 'Puffinus griseus',
  description: 'The sizes of petrels are different. The smallest of them are up to 25 cm long, the largest - up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of a petrel in the air portends a storm, as the very name of the bird indicates.',
  image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
}, {
  id: 4,
  name: 'Pelican',
  species: 'Pelecanus',
  description: 'Pelicans are inhabitants of the seas and rivers. They walk awkwardly, but fly and swim well. They feed mainly on fish, organize collective hunts - lining up in a semicircle, they flap their wings and beaks on the water and force out the frightened fish in shallow water.',
  image: 'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
}, {
  id: 5,
  name: 'Penguin',
  species: 'Aptenodytes forsteri',
  description: "The male emperor penguin reaches a height of 130 cm, its weight can approach 50 kg. Of all modern penguins, this species is the largest. The penguin's diet consists of fish, squid and krill. Birds hunt in the ocean in large groups.",
  image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
}, {
  id: 6,
  name: 'Seagull',
  species: 'Larus argentatus',
  description: 'Seagulls inhabit the shores of the seas, lakes, rivers, reservoirs, swamps, often nest on islands. Since the end of the last century, seagulls began to appear in large cities, where they nest on the roofs of buildings. All seagulls lead a colonial lifestyle.',
  image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
}]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (birdsData);

/***/ }),

/***/ "./src/modules/data/birdsDataRu.js":
/*!*****************************************!*\
  !*** ./src/modules/data/birdsDataRu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var birdsData = [[{
  id: 1,
  name: 'Ворон',
  species: 'Corvus corax',
  description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
  image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
}, {
  id: 2,
  name: 'Журавль',
  species: 'Grus grus',
  description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
  image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
}, {
  id: 3,
  name: 'Ласточка',
  species: 'Delichon urbicum',
  description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
  image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
}, {
  id: 4,
  name: 'Козодой',
  species: 'Caprimulgus europaeus',
  description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
  image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
}, {
  id: 5,
  name: 'Кукушка',
  species: 'Cuculus canorus',
  description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
  image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
}, {
  id: 6,
  name: 'Синица',
  species: 'Parus major',
  description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
  image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
}], [{
  id: 1,
  name: 'Воробей',
  species: 'Passer domesticus',
  description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
  image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
}, {
  id: 2,
  name: 'Грач',
  species: 'Corvus frugilegus',
  description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
  image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
}, {
  id: 3,
  name: 'Галка',
  species: 'Coloeus monedula',
  description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
  image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
}, {
  id: 4,
  name: 'Певчий дрозд',
  species: 'Turdus philomelos',
  description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
  image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
}, {
  id: 5,
  name: 'Сорока',
  species: 'Pica pica',
  description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
  image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
}, {
  id: 6,
  name: 'Сойка',
  species: 'Garrulus glandarius',
  description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
  image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
}], [{
  id: 1,
  name: 'Зяблик',
  species: 'Fringilla coelebs',
  description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
  image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
}, {
  id: 2,
  name: 'Клёст',
  species: 'Loxia curvirostra',
  description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
  image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
}, {
  id: 3,
  name: 'Горлица',
  species: 'Streptopelia turtur',
  description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
  image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
}, {
  id: 4,
  name: 'Дятел',
  species: 'Dendrocopos major',
  description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
  image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
}, {
  id: 5,
  name: 'Удод',
  species: 'Upupa epops',
  description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
  image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
}, {
  id: 6,
  name: 'Стриж',
  species: 'Apus apus',
  description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
  image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
}], [{
  id: 1,
  name: 'Жаворонок',
  species: 'Alauda arvensis',
  description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
  image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
}, {
  id: 2,
  name: 'Соловей',
  species: 'Luscinia luscinia',
  description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
  image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
}, {
  id: 3,
  name: 'Скворец',
  species: 'Sturnus vulgaris',
  description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
  image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
}, {
  id: 4,
  name: 'Иволга',
  species: 'Oriolus oriolus',
  description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
  image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
}, {
  id: 5,
  name: 'Свиристель',
  species: 'Bombycilla garrulus',
  description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
  image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
}, {
  id: 6,
  name: 'Щегол',
  species: 'Carduelis carduelis',
  description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
  image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
}], [{
  id: 1,
  name: 'Орёл',
  species: 'Aquila nipalensis',
  description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
  image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
}, {
  id: 2,
  name: 'Коршун',
  species: 'Milvus migrans',
  description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
  image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
}, {
  id: 3,
  name: 'Лунь',
  species: 'Circus cyaneus',
  description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
  image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
}, {
  id: 4,
  name: 'Сокол',
  species: 'Falco peregrinus',
  description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
  image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
}, {
  id: 5,
  name: 'Ястреб',
  species: 'Accipiter gentilis',
  description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
  image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
}, {
  id: 6,
  name: 'Филин',
  species: 'Bubo bubo',
  description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
  image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
}], [{
  id: 1,
  name: 'Альбатрос',
  species: 'Diomedea exulans',
  description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
  image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
}, {
  id: 2,
  name: 'Олуша',
  species: 'Sula nebouxii',
  description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
  image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
}, {
  id: 3,
  name: 'Буревестник',
  species: 'Puffinus griseus',
  description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
  image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
}, {
  id: 4,
  name: 'Пеликан',
  species: 'Pelecanus',
  description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
  image: 'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
}, {
  id: 5,
  name: 'Пингвин',
  species: 'Aptenodytes forsteri',
  description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
  image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
}, {
  id: 6,
  name: 'Чайка',
  species: 'Larus argentatus',
  description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
  image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
}]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (birdsData);

/***/ }),

/***/ "./src/modules/data/dataContent.js":
/*!*****************************************!*\
  !*** ./src/modules/data/dataContent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContent": () => (/* binding */ getContent)
/* harmony export */ });
var getContent = function getContent(lang) {
  var questionsGroup = lang === 'en' ? ['Warmup', 'Passerines', 'Forest birds', 'Songbirds ', 'Raptors ', 'Seabirds'] : ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  var startButton = lang === 'en' ? 'start' : 'Старт';
  var nextButton = lang === 'en' ? 'next level' : 'следующий уровень';
  var headerLinks = lang === 'en' ? ['Home', 'Play'] : ['Главная', 'Играть'];
  var gameDescription = lang === 'en' ? ['Listen to the player. Select a bird from the list.'] : ['Послушайте плеер.Выберите птицу из списка.'];
  var congratulateText1 = lang === 'en' ? ['Сongratulations!'] : ['Поздравляем!'];
  var congratulateText2 = lang === 'en' ? ["<p class=\"results-text\">\n    You passed the quiz and scored <span id=\"results\"></span> points out of 30.\n  </p>"] : [" <p class=\"results-text\">\n    \u0412\u044B \u043F\u0440\u043E\u0448\u043B\u0438 \u0432\u0438\u043A\u0442\u043E\u0440\u0438\u043D\u0443 \u0438 \u043D\u0430\u0431\u0440\u0430\u043B\u0438 <span id=\"results\"></span> \u0438\u0437 30\n    \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u0431\u0430\u043B\u043B\u043E\u0432.\n  </p>"];
  var startText = lang === 'en' ? 'You can click notes or birds' : 'Можете нажать на птичку или ноту';
  var score = lang === 'en' ? 'Score: ' : "\u0421\u0447\u0451\u0442: ";
  var againButton = lang === 'en' ? 'solve again ' : 'Пройти ещё раз';
  return [questionsGroup, startButton, nextButton, headerLinks, gameDescription, congratulateText1, congratulateText2, startText, score, againButton];
};


/***/ }),

/***/ "./src/modules/fillGame.js":
/*!*********************************!*\
  !*** ./src/modules/fillGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "answerSound": () => (/* binding */ answerSound),
/* harmony export */   "birdMainImg": () => (/* binding */ birdMainImg),
/* harmony export */   "birdMainTitle": () => (/* binding */ birdMainTitle),
/* harmony export */   "chosenBirdName": () => (/* binding */ chosenBirdName),
/* harmony export */   "fillCurrentAnswerInfo": () => (/* binding */ fillCurrentAnswerInfo),
/* harmony export */   "fillListAnswers": () => (/* binding */ fillListAnswers),
/* harmony export */   "pauseSvg": () => (/* binding */ pauseSvg),
/* harmony export */   "playButton": () => (/* binding */ playButton),
/* harmony export */   "playSvg": () => (/* binding */ playSvg),
/* harmony export */   "questionSound": () => (/* binding */ questionSound)
/* harmony export */ });
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio */ "./src/modules/audio.js");
/* harmony import */ var _checkAnswers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkAnswers */ "./src/modules/checkAnswers.js");
/* harmony import */ var _createAudioPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAudioPlayer */ "./src/modules/createAudioPlayer.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var pauseSvg = '<svg viewBox="0 0 47.607 47.607"><path fill="#397593" d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"></path></svg>';
var playSvg = "<svg viewBox=\"-200 0 1200 1000\">\n<path\n  fill=\"#397593\"\n  d=\"M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z\"></path></svg>";
var birdMainTitle = document.querySelector('.current-bird-title');
var birdMainImg = document.querySelector('.current-bird-img');
var playButton = document.querySelector('#button-play-question');
var playButtonChosen = document.querySelector('#button-play-answer');
var answersList = document.querySelector('.answers-list');
var questionAudioCurrentTime = document.querySelector('.current-time.question');
var questionAudioDuration = document.querySelector('.duration-time.question');
var chosenBirdImg = document.querySelector('.chosen-bird-img');
var chosenBirdName = document.querySelector('.chosen-bird-name');
var chosenBirdSpecies = document.querySelector('.chosen-bird-species');
var answerAudioCurrentTime = document.querySelector('.current-time.answer');
var answerAudioDuration = document.querySelector('.duration-time.answer');
var timebarAnswer = document.querySelector('#timebar-answer');
var timebarQuestion = document.querySelector('#timebar-question');
var chosenBirdDescription = document.querySelector('.chosen-bird-description');
var loadingContentQuestion = document.querySelector('.current-bird-audio .audio-loading');
var questionAudioPlayer = document.querySelector('.audio-player');
var questionVolume = document.querySelector('#questionVolume');
var answerVolume = document.querySelector('#answerVolume');
var createNewElement = function createNewElement(el, className) {
  var _element$classList;
  var element = document.createElement(el);
  (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(className));
  return element;
};
var questionSound = (0,_audio__WEBPACK_IMPORTED_MODULE_0__.newSound)('');
var answerSound = (0,_audio__WEBPACK_IMPORTED_MODULE_0__.newSound)('');
var questionLoud = 0.5;
var answerLoud = 0.5;
questionSound.addEventListener('loadeddata', function () {
  playButton.innerHTML = playSvg;
  playButton.classList.remove('pause');
  (0,_createAudioPlayer__WEBPACK_IMPORTED_MODULE_2__.controlVolume)(questionVolume, questionLoud, questionSound);
  (0,_createAudioPlayer__WEBPACK_IMPORTED_MODULE_2__.onAudioLoad)(questionSound, loadingContentQuestion, questionAudioPlayer, questionAudioDuration, playButton, timebarQuestion);
  timebarQuestion.addEventListener('input', function (e) {
    (0,_createAudioPlayer__WEBPACK_IMPORTED_MODULE_2__.changeDuration)(e, questionSound);
  });
  questionSound.addEventListener('timeupdate', function () {
    (0,_createAudioPlayer__WEBPACK_IMPORTED_MODULE_2__.updateTime)(questionSound, timebarQuestion, questionAudioCurrentTime);
    if (questionSound.currentTime === questionSound.duration) {
      playButton.innerHTML = playSvg;
    }
  });
}, false);
!!playButton ? playButton.addEventListener('click', function (e) {
  return (0,_createAudioPlayer__WEBPACK_IMPORTED_MODULE_2__.toggleBtn)(playButton, questionSound, e);
}) : null;
!!playButtonChosen ? playButtonChosen.addEventListener('click', function (e) {
  return (0,_createAudioPlayer__WEBPACK_IMPORTED_MODULE_2__.toggleBtn)(playButtonChosen, answerSound, e);
}) : null;
var fillListAnswers = function fillListAnswers(list) {
  answersList.innerHTML = '';
  var listElements = [];
  list.forEach(function (bird) {
    var li = createNewElement('li', ['answer-list-item']);
    li.id = "".concat(bird.id);
    var liText = createNewElement('p', ['list-item-text']);
    liText.textContent = bird.name;
    var liCheck = createNewElement('div', ['li-check']);
    li.append(liCheck, liText);
    listElements.push(li);
  });
  answersList.append.apply(answersList, listElements);
};
var fillIfRightAnswer = function fillIfRightAnswer(birds, id) {
  var bird = birds.find(function (item) {
    return item.id === id;
  });
  birdMainTitle.textContent = bird.name;
  birdMainImg.style.background = "url(".concat(bird.image, ") center/cover");
};
var fillCurrentAnswerInfo = function fillCurrentAnswerInfo(id, rightId, currentGroup) {
  var bird = currentGroup.answers.find(function (item) {
    return item.id === id;
  });
  !!rightId ? fillIfRightAnswer(currentGroup.answers, rightId) : null;
  answerSound.src = bird.audio;
  playButtonChosen.innerHTML = playSvg;
  if (playButtonChosen.classList.contains('pause')) {
    playButtonChosen.classList.remove('pause');
  }
  answerSound.pause();
  chosenBirdImg.style.background = "url(".concat(bird.image, ") center/cover");
  chosenBirdName.textContent = bird.name;
  chosenBirdSpecies.textContent = bird.species;
  chosenBirdDescription.textContent = bird.description;
  answerSound.addEventListener('loadeddata', function () {
    (0,_createAudioPlayer__WEBPACK_IMPORTED_MODULE_2__.controlVolume)(answerVolume, answerLoud, answerSound);
    (0,_createAudioPlayer__WEBPACK_IMPORTED_MODULE_2__.onAudioLoad)(answerSound, _checkAnswers__WEBPACK_IMPORTED_MODULE_1__.loadingContentAnswer, _checkAnswers__WEBPACK_IMPORTED_MODULE_1__.answerAudioPlayer, answerAudioDuration, timebarAnswer);
  }, false);
  answerSound.currentTime = 0;
  timebarAnswer.addEventListener('input', function (e) {
    (0,_createAudioPlayer__WEBPACK_IMPORTED_MODULE_2__.changeDuration)(e, questionSound);
  });
  answerSound.addEventListener('timeupdate', function () {
    (0,_createAudioPlayer__WEBPACK_IMPORTED_MODULE_2__.updateTime)(answerSound, timebarAnswer, answerAudioCurrentTime);
    if (answerSound.currentTime === answerSound.duration) {
      playButtonChosen.innerHTML = playSvg;
    }
  });
};


/***/ }),

/***/ "./src/modules/helpers/random.js":
/*!***************************************!*\
  !*** ./src/modules/helpers/random.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomNum": () => (/* binding */ getRandomNum)
/* harmony export */ });
var getRandomNum = function getRandomNum(min, max) {
  var rand = Math.random() * (max - min) + min;
  return Math.floor(rand);
};

/***/ }),

/***/ "./src/modules/helpers/shuffle.js":
/*!****************************************!*\
  !*** ./src/modules/helpers/shuffle.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shuffleArray": () => (/* binding */ shuffleArray)
/* harmony export */ });
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


/***/ }),

/***/ "./src/modules/renderContent.js":
/*!**************************************!*\
  !*** ./src/modules/renderContent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGAIN_BUTTON": () => (/* binding */ AGAIN_BUTTON),
/* harmony export */   "NEXT_BUTTON": () => (/* binding */ NEXT_BUTTON),
/* harmony export */   "START_BUTTON": () => (/* binding */ START_BUTTON),
/* harmony export */   "changeLangImg": () => (/* binding */ changeLangImg),
/* harmony export */   "fillGamePage": () => (/* binding */ fillGamePage),
/* harmony export */   "fillResultPage": () => (/* binding */ fillResultPage),
/* harmony export */   "fillStartPage": () => (/* binding */ fillStartPage),
/* harmony export */   "setLangButton": () => (/* binding */ setLangButton)
/* harmony export */ });
/* harmony import */ var _countScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countScore */ "./src/modules/countScore.js");
/* harmony import */ var _data_dataContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/dataContent */ "./src/modules/data/dataContent.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var START_BUTTON = document.querySelector('.button-play');
var NEXT_BUTTON = document.querySelector('.next.button');
var AGAIN_BUTTON = document.querySelector('.again.button');
var GAME_DESCRIPTION = document.querySelector('.game-description');
var SCORE = document.querySelector('.score-title');
var headerLinksEl = document.querySelectorAll('.list-item .item-link');
var questionsGroupEle = document.querySelectorAll('.questions-list-item');
var startPageText = document.querySelector('.start-app-description');
var changeContentLang = function changeContentLang() {
  var language = localStorage.getItem('lang') || 'en';
  var content = (0,_data_dataContent__WEBPACK_IMPORTED_MODULE_1__.getContent)(language);
  return content;
};
var setLangButton = function setLangButton(btn) {
  var language = localStorage.getItem('lang') || 'en';
  btn.classList.contains(language) ? null : btn.classList.add(language);
};
var fillStartPage = function fillStartPage() {
  var _changeContentLang = changeContentLang(),
    _changeContentLang2 = _slicedToArray(_changeContentLang, 9),
    startButton = _changeContentLang2[1],
    headerLinks = _changeContentLang2[3],
    startText = _changeContentLang2[7];
  startPageText.textContent = startText;
  START_BUTTON.textContent = startButton;
  headerLinksEl.forEach(function (link, i) {
    return link.textContent = headerLinks[i];
  });
};
var fillGamePage = function fillGamePage() {
  var _changeContentLang3 = changeContentLang(),
    _changeContentLang4 = _slicedToArray(_changeContentLang3, 9),
    questionsGroup = _changeContentLang4[0],
    nextButton = _changeContentLang4[2],
    headerLinks = _changeContentLang4[3],
    gameDescription = _changeContentLang4[4],
    score = _changeContentLang4[8];
  headerLinksEl.forEach(function (link, i) {
    return link.textContent = headerLinks[i];
  });
  questionsGroupEle.forEach(function (question, i) {
    return question.textContent = questionsGroup[i];
  });
  NEXT_BUTTON.textContent = nextButton;
  GAME_DESCRIPTION.textContent = gameDescription;
  SCORE.textContent = score;
};
var fillResultPage = function fillResultPage() {
  var _changeContentLang5 = changeContentLang(),
    _changeContentLang6 = _slicedToArray(_changeContentLang5, 10),
    headerLinks = _changeContentLang6[3],
    congratulateText1 = _changeContentLang6[5],
    congratulateText2 = _changeContentLang6[6],
    againButton = _changeContentLang6[9];
  headerLinksEl.forEach(function (link, i) {
    return link.textContent = headerLinks[i];
  });
  document.querySelector('.results-wrapper h4').textContent = congratulateText1;
  document.querySelector('.results-text').innerHTML = congratulateText2;
  (0,_countScore__WEBPACK_IMPORTED_MODULE_0__.showResult)();
  document.querySelector('.again').textContent = againButton;
};
var changeLangImg = function changeLangImg(e) {
  e.target.classList.toggle('en');
  e.target.classList.toggle('ru');
  e.target.classList.contains('ru') ? localStorage.setItem('lang', 'ru') : localStorage.setItem('lang', 'en');
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/feather.jpg */ "./src/assets/img/feather.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/bird-bottom.png */ "./src/assets/img/bird-bottom.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/bird-corner.png */ "./src/assets/img/bird-corner.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/bird.jpg */ "./src/assets/img/bird.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/yes.png */ "./src/assets/img/yes.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/no.png */ "./src/assets/img/no.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/arrow.png */ "./src/assets/img/arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/en.png */ "./src/assets/img/en.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/ru.png */ "./src/assets/img/ru.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/github.svg */ "./src/assets/svg/github.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/rs_school_js.svg */ "./src/assets/svg/rs_school_js.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/volume.png */ "./src/assets/img/volume.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Risque&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Risque&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".start-app-description {\n  position: absolute;\n  left: calc(50% - 138px);\n  top: 20px;\n  font-size: 20px;\n  color: rgb(125, 154, 198);\n  text-align: center;\n  animation: fade 2s ease infinite;\n}\n\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.start-app-wrapper {\n  max-width: 100%;\n  overflow: hidden;\n  background-color: rgba(138, 195, 203, 0.77);\n  min-height: calc(100vh - 100px);\n  position: relative;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n}\n\n.button-container {\n  position: absolute;\n  top: 80%;\n  left: calc(50% - 100px);\n}\n\n.button-play,\n.next.button,\n.again.button {\n  font-family: \"Risque\", cursive;\n  font-size: 32px;\n  text-transform: uppercase;\n  color: #301235;\n  z-index: 15;\n  width: 200px;\n  height: fit-content;\n  padding: 5px 3px;\n  padding-left: 45px;\n  background: rgb(206, 233, 222);\n  border-radius: 16px;\n  position: relative;\n  cursor: pointer;\n}\n.button-play::before,\n.next.button::before,\n.again.button::before {\n  position: absolute;\n  display: block;\n  content: \"\";\n  top: 3px;\n  left: 12px;\n  width: 48px;\n  height: 42px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center no-repeat;\n  background-size: contain;\n  filter: hue-rotate(205deg);\n}\n.button-play:hover,\n.next.button:hover,\n.again.button:hover {\n  box-shadow: inset 0px 0px 4px rgba(17, 47, 69, 0.59);\n  transform: scale(0.98);\n  transition: all 0.2s ease-in;\n}\n\n.next.button,\n.again.button {\n  font-size: 28px;\n  width: fit-content;\n  margin: 20px auto;\n  padding: 8px;\n  padding-left: 70px;\n  display: flex;\n}\n.next.button:disabled,\n.again.button:disabled {\n  background-color: rgb(153, 153, 153);\n  opacity: 0.5;\n}\n.next.button:disabled:hover,\n.again.button:disabled:hover {\n  box-shadow: none;\n  text-shadow: none;\n  transform: none;\n}\n\n.note-list {\n  display: flex;\n  flex-direction: column;\n}\n\n.note-list-item {\n  -webkit-tap-highlight-color: transparent;\n  margin-bottom: 5px;\n  font-size: 56px;\n  color: rgb(60, 69, 112);\n  text-shadow: 0 -1px 0 #ccc, 0 1px 0 rgb(23, 19, 39);\n  position: relative;\n  z-index: 1;\n  animation: noteJump 5s ease-in-out both infinite;\n  left: 5%;\n  width: fit-content;\n  cursor: pointer;\n}\n.note-list-item:hover {\n  color: rgb(124, 141, 224);\n}\n.note-list-item:nth-child(2) {\n  animation-duration: 2s;\n  left: 30%;\n}\n.note-list-item:nth-child(3) {\n  animation-duration: 3s;\n  left: 75%;\n}\n.note-list-item:nth-child(4n) {\n  animation-duration: 5s;\n  left: 20%;\n}\n.note-list-item:nth-child(5) {\n  animation-duration: 2s;\n  left: 90%;\n}\n.note-list-item:nth-child(6) {\n  animation-duration: 4s;\n  left: 75%;\n}\n.note-list-item:nth-child(8) {\n  animation-duration: 3s;\n  left: 81%;\n}\n\n@keyframes noteJump {\n  0%, 100% {\n    -webkit-transform: translate3d(-5px, -10px, -10px);\n  }\n  50% {\n    -webkit-transform: translate3d(0, 10px, 10px);\n  }\n}\n@media (max-width: 768px) {\n  .note-list-item:nth-child(4n) {\n    left: 87%;\n  }\n  .note-list-item:nth-child(7) {\n    left: 3%;\n  }\n  .note-list-item:nth-child(5) {\n    left: 10%;\n  }\n  .note-list-item:nth-child(6) {\n    left: 19%;\n  }\n}\n@media (max-width: 570px) {\n  .start-app-description {\n    left: 18%;\n  }\n  .note-list-item {\n    font-size: 40px;\n    margin-bottom: 33px;\n    z-index: 10;\n  }\n  .note-list-item:last-child {\n    margin-bottom: 0;\n  }\n  .note-list-item:nth-child(3) {\n    left: 79%;\n  }\n  .button-play,\n  .next.button,\n  .again.button {\n    font-size: 22px;\n  }\n  .button-play::before,\n  .next.button::before,\n  .again.button::before {\n    top: 1px;\n    left: 12px;\n    width: 42px;\n    height: 36px;\n  }\n  .button-play {\n    width: 150px;\n  }\n}\n@media (max-width: 470px) {\n  .start-app-description {\n    left: 20px;\n    margin-right: 20px;\n  }\n}\n.score {\n  display: flex;\n  align-items: center;\n  background-color: rgb(237, 255, 244);\n  padding: 5px 10px;\n  padding-left: 35px;\n  font-size: 20px;\n  box-shadow: 1px 1px 5px rgba(49, 17, 62, 0.447);\n  border-radius: 6px;\n  width: fit-content;\n  margin: auto;\n  position: relative;\n}\n.score .current-score {\n  margin-top: 2px;\n  color: rgb(25, 56, 102);\n  font-weight: 600;\n}\n.score h5,\n.score span {\n  font-size: 20px;\n}\n.score::before {\n  position: absolute;\n  display: block;\n  content: \"\";\n  top: 0px;\n  left: 0px;\n  width: 33px;\n  height: 32px;\n  filter: hue-rotate(205deg);\n  border-radius: 6px 0 0 0;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") center no-repeat;\n  background-size: cover;\n}\n\n.game {\n  color: #301235;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n}\n\n.questions {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  align-content: space-between;\n}\n\n.questions-list {\n  display: flex;\n  justify-content: stretch;\n  width: 100%;\n}\n.questions-list .questions-list-item {\n  font-size: 18px;\n  padding: 5px;\n  margin-right: 5px;\n  background-color: rgb(177, 216, 204);\n  box-shadow: 1px 1px 5px rgba(6, 37, 18, 0.447);\n  border-radius: 8px;\n  width: 100%;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.questions-list .questions-list-item.active {\n  background-color: rgb(237, 255, 244);\n  box-shadow: inset 0 0 8px rgb(62, 90, 111);\n}\n\n.current,\n.answers,\n.chosen-bird {\n  margin-top: 15px;\n  background-color: rgb(177, 216, 204);\n  border-radius: 8px;\n  padding: 10px;\n  box-shadow: 1px 1px 5px rgba(62, 42, 17, 0.447);\n}\n\n.current-bird-title {\n  font-size: 32px;\n  text-align: left;\n}\n\n.answers,\n.chosen-bird {\n  padding: 0;\n  width: 100%;\n  box-shadow: 1px 1px 5px rgba(62, 42, 17, 0.447);\n}\n\n.chosen-bird {\n  padding: 15px;\n  min-height: 100%;\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n}\n\n.current-question-wrapper,\n.variants {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  align-content: center;\n}\n\n.variants.container {\n  justify-content: space-between;\n  text-align: left;\n  margin-bottom: 10px;\n  align-items: flex-start;\n}\n\n.current-bird-img,\n.chosen-bird-img {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") center no-repeat;\n  width: 200px;\n  height: 150px;\n  background-size: cover;\n  border-radius: 8px;\n  margin-right: 15px;\n}\n\n.current-bird-audio {\n  width: 60%;\n  position: relative;\n}\n.current-bird-audio::before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  width: 100%;\n  height: 0.2px;\n  top: 50px;\n  background-color: rgba(68, 68, 68, 0.242);\n}\n\n.answer-list-item {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  font-size: 18px;\n  position: relative;\n  cursor: pointer;\n  padding: 10px 15px;\n  border: 1px solid rgba(68, 68, 68, 0.242);\n}\n.answer-list-item:first-child {\n  border-radius: 8px 8px 0 0;\n}\n.answer-list-item:last-child {\n  border-radius: 0 0 8px 8px;\n}\n.answer-list-item:hover {\n  background-color: rgb(237, 255, 244);\n}\n.answer-list-item.right .li-check {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") center no-repeat;\n}\n.answer-list-item.error .li-check {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") center no-repeat;\n}\n.answer-list-item.error .li-check, .answer-list-item.right .li-check {\n  margin-right: 15px;\n  width: 20px;\n  height: 20px;\n  background-size: contain;\n  margin-left: 0px;\n}\n\n.li-check {\n  background-color: #444;\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-left: 5px;\n  margin-right: 25px;\n  border-radius: 50%;\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n}\n\n.chosen-bird-main {\n  width: 55%;\n  text-align: left;\n}\n\n.chosen-bird-wrapper,\n.game-description {\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n  text-align: center;\n  margin: auto;\n}\n.chosen-bird-wrapper.hidden,\n.game-description.hidden {\n  display: none;\n}\n.chosen-bird-wrapper .chosen-bird-description,\n.game-description .chosen-bird-description {\n  text-align: left;\n  margin-top: 10px;\n}\n.chosen-bird-wrapper .chosen-bird-name,\n.game-description .chosen-bird-name {\n  font-size: 20px;\n}\n.chosen-bird-wrapper .chosen-bird-species,\n.game-description .chosen-bird-species {\n  padding: 10px 0;\n  font-size: 16px;\n}\n.chosen-bird-wrapper .chosen-bird-species,\n.chosen-bird-wrapper .chosen-bird-name,\n.game-description .chosen-bird-species,\n.game-description .chosen-bird-name {\n  position: relative;\n}\n.chosen-bird-wrapper .chosen-bird-species::after,\n.chosen-bird-wrapper .chosen-bird-name::after,\n.game-description .chosen-bird-species::after,\n.game-description .chosen-bird-name::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  height: 1px;\n  width: 100%;\n  top: 33px;\n  background-color: rgba(68, 68, 68, 0.242);\n}\n\n.chosen-bird-title {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n@media (max-width: 992px) {\n  .chosen-bird-title {\n    flex-direction: column;\n  }\n  .chosen-bird-main {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .variants.container {\n    flex-direction: column;\n  }\n  .chosen-bird {\n    margin-left: 0;\n  }\n  .answer-list-item {\n    font-size: 16px;\n    padding: 10px;\n  }\n  .header .header-wrapper .nav-list .list-item:first-child {\n    margin-right: 40px;\n  }\n  .header .header-wrapper .logo {\n    font-size: 24px;\n  }\n  .questions-list .questions-list-item {\n    font-size: 14px;\n  }\n}\n@media (max-width: 570px) {\n  .chosen-bird {\n    min-height: 430px;\n  }\n  .questions-list {\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    width: 100%;\n  }\n  .questions-list .questions-list-item {\n    width: auto;\n    min-width: 110px;\n    margin: 5px;\n  }\n  .questions-list .questions-list-item.active {\n    position: relative;\n    margin-right: 35px;\n  }\n  .questions-list .questions-list-item.active::after {\n    position: absolute;\n    display: block;\n    content: \"\";\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") center;\n    background-size: contain;\n    width: 30px;\n    height: 30px;\n    right: -32%;\n  }\n  .questions-list .questions-list-item.active:last-child::after {\n    display: none;\n  }\n  .current-question-wrapper {\n    flex-direction: column;\n  }\n  .current-question-wrapper .current-bird-img {\n    margin: 0px auto;\n  }\n  .current-question-wrapper .current-bird-title {\n    font-size: 28px;\n    margin-top: 10px;\n    text-align: center;\n  }\n  .current-question-wrapper .current-bird-audio {\n    width: 90%;\n  }\n  .score h5,\n  .score span {\n    font-size: 16px;\n  }\n}\n.bird-container {\n  height: 400px;\n  width: 400px;\n  position: absolute;\n  z-index: 10;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.bird-container * {\n  position: absolute;\n}\n\n.bird-container {\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n}\n.bird-container .bird {\n  animation: birdMove 1.3s linear alternate infinite;\n  -webkit-tap-highlight-color: transparent;\n}\n.bird-container .head {\n  height: 200px;\n  width: 201px;\n  background-color: rgb(227, 175, 203);\n  border-radius: 50%;\n  top: 50px;\n  left: 49px;\n}\n.bird-container .head:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 80px;\n  width: 80px;\n  border-radius: 50% 50% 0 0;\n  background-color: rgb(227, 175, 203);\n  top: 29px;\n  left: 30px;\n  animation: eyeMove 1.3s linear alternate infinite;\n}\n.bird-container .head:before {\n  content: \"\";\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: #fff;\n  border-radius: 100%;\n  top: 60px;\n  left: 40px;\n  box-shadow: 6px -12px 0 15px #fff, inset -8px -8px 0 16px #333;\n}\n.bird-container .mouth {\n  height: 25px;\n  border-left: solid 18px rgb(251, 127, 208);\n  border-radius: 100% 0 0 0;\n  top: 50px;\n  left: -8px;\n  transform: rotate(-70deg);\n  animation: mouthMoveTop 0.8s linear alternate infinite;\n  z-index: -1;\n}\n.bird-container .mouth:before {\n  content: \"\";\n  position: absolute;\n  height: 20px;\n  border-right: solid 12px rgb(251, 127, 208);\n  border-radius: 0 100% 0 0;\n  top: 5px;\n  left: -25px;\n  transform: rotate(0deg);\n  animation: mouthMove 0.8s linear alternate infinite;\n}\n.bird-container .sound {\n  height: 3px;\n  width: 8px;\n  background-color: rgb(135, 189, 242);\n  border: 1px solid rgb(135, 189, 242);\n  border-radius: 18px;\n  transform: rotate(35deg);\n  top: 40px;\n  left: -25px;\n  box-shadow: 1px 1px 5px rgba(135, 64, 173, 0.604);\n  opacity: 0;\n  animation: soundOn 0.8s linear alternate infinite;\n}\n.bird-container .sound:before, .bird-container .sound:after {\n  border-radius: 18px;\n  box-shadow: 1px 1px 5px rgba(135, 64, 173, 0.604);\n  height: 3px;\n  width: 8px;\n  background-color: rgb(135, 189, 242);\n  border-radius: 18px;\n}\n.bird-container .sound:before {\n  content: \"\";\n  position: absolute;\n  transform: rotate(-20deg);\n  top: 20px;\n  left: 0px;\n}\n.bird-container .sound:after {\n  content: \"\";\n  position: absolute;\n  transform: rotate(-50deg);\n  top: 35px;\n  left: 10px;\n}\n.bird-container .body {\n  position: absolute;\n  top: 130px;\n  left: 72px;\n  width: 300px;\n  height: 200px;\n  border-left: solid 200px rgb(227, 175, 203);\n  border-radius: 0 0 0 85%;\n  transform: rotate(-15deg);\n}\n.bird-container .body:before {\n  content: \"\";\n  position: absolute;\n  border-radius: 100% 0% 64% 36%/62% 0% 100% 38%;\n  height: 160px;\n  width: 160px;\n  background-color: rgb(177, 137, 183);\n  transform: rotate(35deg);\n  left: -100px;\n  box-shadow: 15px -10px 25px rgba(0, 0, 0, 0.1);\n  animation: wingMove 1.3s linear alternate infinite;\n}\n.bird-container .leg {\n  height: 50px;\n  width: 6px;\n  background-color: #513e1a;\n}\n.bird-container .leg:before, .bird-container .leg:after {\n  content: \"\";\n  position: absolute;\n  top: 97%;\n  height: 18px;\n  width: 4px;\n  background-color: #513e1a;\n  transform-origin: top center;\n}\n.bird-container .leg:before {\n  left: 0;\n  transform: rotate(65deg);\n  animation: legMove 1.3s linear alternate infinite;\n}\n.bird-container .leg:after {\n  right: 0;\n  transform: rotate(-65deg);\n  animation: legMoveLeft 1.3s linear alternate infinite;\n}\n.bird-container .leg.one {\n  top: 265px;\n  left: 180px;\n  z-index: -1;\n}\n.bird-container .leg.two {\n  top: 255px;\n  left: 150px;\n  z-index: -1;\n}\n\n@keyframes birdMove {\n  from {\n    transform: translateY(-10px);\n  }\n  to {\n    transform: translateY(10px);\n  }\n}\n@keyframes mouthMove {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(35deg);\n  }\n}\n@keyframes mouthMoveTop {\n  from {\n    transform: rotate(-70deg);\n  }\n  to {\n    transform: rotate(-90deg);\n  }\n}\n@keyframes wingMove {\n  from {\n    transform: rotate(95deg);\n    box-shadow: none;\n  }\n  to {\n    transform: rotate(55deg);\n  }\n}\n@keyframes soundOn {\n  from {\n    opacity: 1;\n  }\n}\n@keyframes legMove {\n  from {\n    transform: rotate(35deg);\n  }\n  to {\n    transform: rotate(75deg);\n  }\n}\n@keyframes eyeMove {\n  from {\n    height: 10px;\n  }\n  to {\n    height: 40px;\n  }\n}\n@keyframes legMoveLeft {\n  from {\n    transform: rotate(-35deg);\n  }\n  to {\n    transform: rotate(-75deg);\n  }\n}\n@media (max-width: 768px) {\n  .bird-container {\n    z-index: 0;\n  }\n}\n@media (max-width: 570px) {\n  .bird-container {\n    left: 50%;\n    top: 28%;\n    height: 150px;\n    width: 300px;\n  }\n  .bird-container .head {\n    height: 150px;\n    width: 150px;\n    left: 35px;\n  }\n  .bird-container .head:before {\n    height: 30px;\n    width: 30px;\n    top: 48px;\n    box-shadow: 0px -4px 0 13px #fff, inset -8px -7px 0 12px #333;\n  }\n  .bird-container .head:after {\n    height: 40px;\n    width: 60px;\n    top: 17px;\n    left: 26px;\n  }\n  .bird-container .body {\n    width: 270px;\n    height: 200px;\n    left: 72px;\n    top: 108px;\n    border-left: solid 147px rgb(227, 175, 203);\n    transform: rotate(339deg);\n  }\n  .bird-container .body:before {\n    height: 120px;\n    width: 120px;\n  }\n}\n.header {\n  height: 50px;\n  background-color: rgb(206, 233, 222);\n  position: relative;\n}\n.header .header-wrapper {\n  padding-top: 7px;\n  align-self: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: space-between;\n}\n.header .header-wrapper .nav-list {\n  display: flex;\n}\n.header .header-wrapper .nav-list .list-item {\n  color: #301235;\n  font-size: 22px;\n  font-family: \"Risque\", cursive;\n}\n.header .header-wrapper .nav-list .list-item:first-child {\n  margin-right: 60px;\n}\n.header .header-wrapper .nav-list .list-item:hover {\n  color: #5e99d0;\n  transform: scale(0.98);\n  transition: all 0.2s ease;\n}\n\n.logo {\n  background-image: url(https://img.freepik.com/premium-vector/painted-background-multicoloured-palette_23-2148427592.jpg?w=2000);\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  color: #4d5f6d;\n  font-size: 30px;\n  font-weight: 600;\n  background-position: 5% 21%;\n  font-family: \"Risque\", cursive;\n}\n.logo:hover {\n  background-position: 15% 0%;\n}\n\n.language {\n  width: 30px;\n  height: 30px;\n  margin-left: 30px;\n  cursor: pointer;\n}\n.language.en {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") center no-repeat;\n  background-size: cover;\n}\n.language.ru {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") center no-repeat;\n  background-size: cover;\n}\n\n@media (max-width: 768px) {\n  .header .header-wrapper .nav-list .list-item:first-child {\n    margin-right: 60px;\n  }\n}\n@media (max-width: 570px) {\n  .header .header-wrapper .logo {\n    font-size: 22px;\n  }\n  .header .header-wrapper .nav-list .list-item {\n    font-size: 18px;\n  }\n  .header .header-wrapper .nav-list .list-item:first-child {\n    margin-right: 30px;\n  }\n}\n@media (max-width: 491px) {\n  .score {\n    padding: 3px;\n  }\n  .score::before {\n    display: none;\n  }\n  .header .header-wrapper .nav-list .list-item {\n    font-size: 16px;\n  }\n  .header .header-wrapper .nav-list .list-item:first-child {\n    margin-right: 15px;\n  }\n  .language {\n    margin-left: 5px;\n    width: 20px;\n    height: 20px;\n  }\n}\n.footer {\n  height: 50px;\n  background-color: rgb(206, 233, 222);\n}\n.footer .container {\n  padding-top: 15px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: space-between;\n  color: #301235;\n  font-family: \"Risque\", cursive;\n}\n\n.my-links {\n  position: relative;\n}\n\n.rss,\n.github {\n  position: absolute;\n  content: \"\";\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  height: 26px;\n  top: -15px;\n}\n.rss:hover,\n.github:hover {\n  transform: scale(0.95);\n  transition: all 0.2s ease-in;\n}\n\n.github {\n  left: 0px;\n  width: 30px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n\n.rss {\n  left: 90px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n  width: 68px;\n}\n\n@media (max-width: 768px) {\n  .license {\n    font-size: 14px;\n  }\n}\n@media (max-width: 570px) {\n  .rss,\n  .github {\n    height: 20px;\n    top: -10px;\n  }\n  .rss {\n    left: 40px;\n    width: 45px;\n  }\n}\n.audio-player {\n  margin: 10px 40px 8px 0;\n  width: 100%;\n  min-width: 100px;\n  border-radius: 8px;\n  padding: 10px 0px;\n  display: block;\n}\n.audio-player.hidden {\n  display: none;\n}\n\n.chosen-audio-player {\n  display: block;\n}\n.chosen-audio-player.hidden {\n  display: none;\n}\n\n.audio-loading {\n  margin-top: 20px;\n  font-size: 16px;\n  color: #301235;\n  text-align: left;\n  display: block;\n}\n.audio-loading.hidden {\n  display: none;\n}\n\n.controls {\n  display: flex;\n  align-items: center;\n}\n\n.playback-button {\n  transition: 0.2s;\n  width: 40px;\n  height: 40px;\n  border: 2px solid #397593;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-right: 20px;\n  margin-bottom: 12px;\n  cursor: pointer;\n}\n.playback-button:hover {\n  border-color: #52a7d2;\n}\n\n.playback-button svg {\n  transition: 0.2s;\n  width: 18px;\n  height: 18px;\n  color: #51a1c9;\n}\n\n.playback-button:hover svg {\n  width: 18px;\n  height: 18px;\n  transform: scale(1.03);\n}\n.playback-button:hover svg path {\n  fill: #52a7d2;\n}\n\n.timebar {\n  position: relative;\n  flex: 1 1;\n  margin-top: 3px;\n}\n\n.timebar-bar {\n  height: 4px;\n  -webkit-appearance: none;\n  width: 100%;\n  border-radius: 5px;\n  background: linear-gradient(to right top, #004d7a, #008793, #00bf72);\n  outline: none;\n  opacity: 0.9;\n  -webkit-transition: 0.2s;\n  transition: opacity 0.2s;\n}\n\n.timebar-bar::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: linear-gradient(to right top, #004d7a, #008793, #00bf72);\n  cursor: pointer;\n}\n\n.timebar-bar::-moz-range-thumb {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: grey;\n  cursor: pointer;\n}\n\n.timebar-time-info {\n  margin-top: 6px;\n  font-size: 11px;\n  color: rgb(11, 42, 51);\n  display: flex;\n  justify-content: space-between;\n}\n\n.volume-container {\n  display: flex;\n  flex-direction: row;\n  margin-left: 20px;\n  margin-bottom: 9px;\n}\n\n.volume {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n  background-size: contain;\n  background-position: center;\n  width: 17px;\n  height: 17px;\n}\n\n.volume-slider {\n  width: 55px;\n  position: relative;\n  top: -4px;\n}\n\n.slider {\n  margin-left: 5px;\n  -webkit-appearance: none;\n  width: 100%;\n  height: 3px;\n  border-radius: 5px;\n  background: #718f98;\n  outline: none;\n  -webkit-transition: 0.2s;\n  transition: opacity 0.2s;\n}\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #2b697b;\n  cursor: pointer;\n}\n\n.slider::-moz-range-thumb {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #2b697b;\n  cursor: pointer;\n}\n\n.chosen-bird-wrapper .volume-container {\n  margin: 0 10px;\n  margin-bottom: 9px;\n}\n.chosen-bird-wrapper .volume-container .volume-slider {\n  width: 40px;\n}\n\n@media (max-width: 570px) {\n  .audio-player {\n    margin: 0;\n    padding: 0;\n    padding-top: 15px;\n  }\n}\n.results-wrapper.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  border-radius: 8px;\n  background-color: rgb(177, 216, 204);\n  box-shadow: 1px 1px 5px rgba(62, 42, 17, 0.447);\n  height: 50vh;\n  width: 50%;\n  margin: 5% auto;\n  padding: 20px;\n}\n.results-wrapper.container h4 {\n  font-size: 36px;\n}\n.results-wrapper.container p {\n  font-size: 24px;\n  padding-top: 30px;\n}\n.results-wrapper.container #results {\n  color: rgb(36, 14, 90);\n  text-shadow: 0 0 4px rgb(119, 101, 217);\n}\n\n.game {\n  min-height: calc(100vh - 100px);\n}\n\n@media (max-width: 992px) {\n  .results-wrapper.container {\n    width: 70%;\n  }\n}\n@media (max-width: 768px) {\n  .results-wrapper.container {\n    width: 90%;\n  }\n  .results-wrapper.container h4 {\n    font-size: 28px;\n  }\n  .results-wrapper.container p {\n    font-size: 24px;\n    padding-top: 30px;\n  }\n}\n* {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\na {\n  background-color: transparent;\n  color: inherit;\n}\n\na:active,\na:hover {\n  outline: 0;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton,\ninput {\n  border: none;\n  overflow: visible;\n  background-color: inherit;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\ninput {\n  line-height: normal;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.container {\n  max-width: 1200px;\n  margin: auto;\n  text-align: center;\n}\n\n@media (max-width: 1300px) {\n  .container {\n    max-width: 980px;\n  }\n}\n@media (max-width: 1025px) {\n  .container {\n    max-width: 860px;\n  }\n}\n@media (max-width: 992px) {\n  .container {\n    max-width: 690px;\n  }\n}\n@media (max-width: 768px) {\n  .container {\n    max-width: 510px;\n  }\n}\n@media (max-width: 576px) {\n  .container {\n    max-width: 100%;\n    margin: auto 10px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/start-page/main.scss","webpack://./src/styles/style.scss","webpack://./src/styles/play-page/game.scss","webpack://./src/styles/start-page/bird.scss","webpack://./src/styles/start-page/header.scss","webpack://./src/styles/start-page/footer.scss","webpack://./src/styles/play-page/audioPlayer.scss","webpack://./src/styles/results-page/results.scss"],"names":[],"mappings":"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","sourcesContent":["$hover-item-color: rgb(237, 255, 244);\n$backgroundCardColor: rgb(177, 216, 204);\n$main-color: rgb(227, 175, 203);\n$wing-color: rgb(177 137 183);\n$second-color: #513e1a;\n$sound-color: rgb(135, 189, 242);\n$beak-color: rgb(251, 127, 208);\n$main-text-color: #301235;\n.start-app-description {\n  position: absolute;\n  left: calc(50% - 276px / 2);\n  top: 20px;\n  font-size: 20px;\n  color: rgb(125, 154, 198);\n  text-align: center;\n  animation: fade 2s ease infinite;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.start-app-wrapper {\n  max-width: 100%;\n  overflow: hidden;\n  background-color: rgb(138 195 203 / 77%);\n  min-height: calc(100vh - 100px);\n  position: relative;\n  background: url(../assets/img/feather.jpg) center no-repeat;\n}\n.button-container {\n  position: absolute;\n  top: 80%;\n  left: calc(50% - 200px / 2);\n}\n.button-play,\n.next.button,\n.again.button {\n  font-family: 'Risque', cursive;\n  font-size: 32px;\n  text-transform: uppercase;\n  color: $main-text-color;\n  z-index: 15;\n  width: 200px;\n  height: fit-content;\n  padding: 5px 3px;\n  padding-left: 45px;\n  background: rgb(206 233 222);\n  border-radius: 16px;\n  position: relative;\n\n  cursor: pointer;\n  &::before {\n    position: absolute;\n    display: block;\n    content: '';\n    top: 3px;\n    left: 12px;\n    width: 48px;\n    height: 42px;\n    background: url(../assets/img/bird-bottom.png) center no-repeat;\n    background-size: contain;\n    filter: hue-rotate(205deg);\n  }\n  &:hover {\n    box-shadow: inset 0px 0px 4px rgba(17, 47, 69, 0.59);\n\n    transform: scale(0.98);\n    transition: all 0.2s ease-in;\n  }\n}\n.next.button,\n.again.button {\n  font-size: 28px;\n  width: fit-content;\n  margin: 20px auto;\n  padding: 8px;\n  padding-left: 70px;\n  display: flex;\n  &:disabled {\n    background-color: rgb(153, 153, 153);\n    opacity: 0.5;\n    &:hover {\n      box-shadow: none;\n      text-shadow: none;\n      transform: none;\n    }\n  }\n}\n.note-list {\n  display: flex;\n  flex-direction: column;\n}\n\n.note-list-item {\n  -webkit-tap-highlight-color: transparent;\n  margin-bottom: 5px;\n  font-size: 56px;\n  color: rgb(60, 69, 112);\n  text-shadow: 0 -1px 0 #ccc, 0 1px 0 rgb(23, 19, 39);\n  position: relative;\n  z-index: 1;\n  animation: noteJump 5s ease-in-out both infinite;\n  left: 5%;\n  width: fit-content;\n  cursor: pointer;\n  &:hover {\n    color: rgb(124, 141, 224);\n  }\n  &:nth-child(2) {\n    animation-duration: 2s;\n    left: 30%;\n  }\n  &:nth-child(3) {\n    animation-duration: 3s;\n    left: 75%;\n  }\n  &:nth-child(4n) {\n    animation-duration: 5s;\n    left: 20%;\n  }\n  &:nth-child(5) {\n    animation-duration: 2s;\n    left: 90%;\n  }\n  &:nth-child(6) {\n    animation-duration: 4s;\n    left: 75%;\n  }\n  &:nth-child(8) {\n    animation-duration: 3s;\n    left: 81%;\n  }\n}\n@keyframes noteJump {\n  0%,\n  100% {\n    -webkit-transform: translate3d(-5px, -10px, -10px);\n  }\n  50% {\n    -webkit-transform: translate3d(0, 10px, 10px);\n  }\n}\n\n@media (max-width: 768px) {\n  .note-list-item {\n    &:nth-child(4n) {\n      left: 87%;\n    }\n\n    &:nth-child(7) {\n      left: 3%;\n    }\n    &:nth-child(5) {\n      left: 10%;\n    }\n    &:nth-child(6) {\n      left: 19%;\n    }\n  }\n}\n@media (max-width: 570px) {\n  .start-app-description {\n    left: 18%;\n  }\n  .note-list-item {\n    font-size: 40px;\n\n    margin-bottom: 33px;\n    z-index: 10;\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    &:nth-child(3) {\n      left: 79%;\n    }\n  }\n  .button-play,\n  .next.button,\n  .again.button {\n    font-size: 22px;\n\n    &::before {\n      top: 1px;\n      left: 12px;\n      width: 42px;\n      height: 36px;\n    }\n  }\n  .button-play {\n    width: 150px;\n  }\n}\n@media (max-width: 470px) {\n  .start-app-description {\n    left: 20px;\n    margin-right: 20px;\n  }\n}\n","@import url('https://fonts.googleapis.com/css2?family=Risque&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');\n@import './start-page/main.scss';\n@import './play-page/game.scss';\n@import './start-page/bird.scss';\n@import './start-page/header.scss';\n@import './start-page/footer.scss';\n@import './play-page/audioPlayer.scss';\n@import './results-page/results.scss';\n\n* {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\na {\n  background-color: transparent;\n  color: inherit;\n}\n\na:active,\na:hover {\n  outline: 0;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton,\ninput {\n  border: none;\n  overflow: visible;\n  background-color: inherit;\n}\nbutton,\nselect {\n  text-transform: none;\n}\ninput {\n  line-height: normal;\n}\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  font-family: 'Montserrat', sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.container {\n  max-width: 1200px;\n  margin: auto;\n  text-align: center;\n}\n@media (max-width: 1300px) {\n  .container {\n    max-width: 980px;\n  }\n}\n@media (max-width: 1025px) {\n  .container {\n    max-width: 860px;\n  }\n}\n@media (max-width: 992px) {\n  .container {\n    max-width: 690px;\n  }\n}\n@media (max-width: 768px) {\n  .container {\n    max-width: 510px;\n  }\n}\n@media (max-width: 576px) {\n  .container {\n    max-width: 100%;\n    margin: auto 10px;\n  }\n}\n",".score {\n  display: flex;\n  align-items: center;\n\n  background-color: $hover-item-color;\n  padding: 5px 10px;\n  padding-left: 35px;\n  font-size: 20px;\n  box-shadow: 1px 1px 5px rgba(49, 17, 62, 0.447);\n  border-radius: 6px;\n  width: fit-content;\n  margin: auto;\n  position: relative;\n  & .current-score {\n    margin-top: 2px;\n    color: rgb(25, 56, 102);\n    font-weight: 600;\n  }\n  & h5,\n  span {\n    font-size: 20px;\n  }\n  &::before {\n    position: absolute;\n    display: block;\n    content: '';\n    top: 0px;\n    left: 0px;\n    width: 33px;\n    height: 32px;\n    filter: hue-rotate(205deg);\n    border-radius: 6px 0 0 0;\n    background: url(../assets/img/bird-corner.png) center no-repeat;\n    background-size: cover;\n  }\n}\n.game {\n  color: $main-text-color;\n  background: url(../assets/img/feather.jpg) center no-repeat;\n}\n.questions {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  align-content: space-between;\n}\n\n.questions-list {\n  display: flex;\n  justify-content: stretch;\n  width: 100%;\n  .questions-list-item {\n    font-size: 18px;\n    padding: 5px;\n    margin-right: 5px;\n    background-color: $backgroundCardColor;\n    box-shadow: 1px 1px 5px rgba(6, 37, 18, 0.447);\n    border-radius: 8px;\n    width: 100%;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    &.active {\n      background-color: $hover-item-color;\n      box-shadow: inset 0 0 8px rgb(62, 90, 111);\n    }\n  }\n}\n.current,\n.answers,\n.chosen-bird {\n  margin-top: 15px;\n  background-color: $backgroundCardColor;\n  border-radius: 8px;\n  padding: 10px;\n  box-shadow: 1px 1px 5px rgba(62, 42, 17, 0.447);\n}\n.current-bird-title {\n  font-size: 32px;\n  text-align: left;\n}\n.answers,\n.chosen-bird {\n  padding: 0;\n  width: 100%;\n  box-shadow: 1px 1px 5px rgba(62, 42, 17, 0.447);\n}\n.chosen-bird {\n  padding: 15px;\n  min-height: 100%;\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n}\n\n.current-question-wrapper,\n.variants {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  align-content: center;\n}\n.variants.container {\n  justify-content: space-between;\n  text-align: left;\n  margin-bottom: 10px;\n  align-items: flex-start;\n}\n.current-bird-img,\n.chosen-bird-img {\n  background: url(../assets/img/bird.jpg) center no-repeat;\n  width: 200px;\n  height: 150px;\n  background-size: cover;\n  border-radius: 8px;\n  margin-right: 15px;\n}\n.current-bird-audio {\n  width: 60%;\n  position: relative;\n  &::before {\n    display: block;\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 0.2px;\n    top: 50px;\n    background-color: rgba(68, 68, 68, 0.242);\n  }\n}\n\n.answer-list-item {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  font-size: 18px;\n  position: relative;\n  cursor: pointer;\n  padding: 10px 15px;\n  border: 1px solid rgba(68, 68, 68, 0.242);\n  &:first-child {\n    border-radius: 8px 8px 0 0;\n  }\n  &:last-child {\n    border-radius: 0 0 8px 8px;\n  }\n  &:hover {\n    background-color: $hover-item-color;\n  }\n\n  &.right .li-check {\n    background: url('../assets/img/yes.png') center no-repeat;\n  }\n  &.error .li-check {\n    background: url('../assets/img/no.png') center no-repeat;\n  }\n  &.error,\n  &.right {\n    .li-check {\n      margin-right: 15px;\n\n      width: 20px;\n      height: 20px;\n      background-size: contain;\n      margin-left: 0px;\n    }\n  }\n}\n.li-check {\n  background-color: #444;\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-left: 5px;\n  margin-right: 25px;\n  border-radius: 50%;\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n}\n.chosen-bird-main {\n  width: 55%;\n  text-align: left;\n}\n.chosen-bird-wrapper,\n.game-description {\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n  text-align: center;\n  margin: auto;\n  &.hidden {\n    display: none;\n  }\n  & .chosen-bird-description {\n    text-align: left;\n    margin-top: 10px;\n  }\n  & .chosen-bird-name {\n    font-size: 20px;\n  }\n  & .chosen-bird-species {\n    padding: 10px 0;\n    font-size: 16px;\n  }\n  & .chosen-bird-species,\n  .chosen-bird-name {\n    position: relative;\n    &::after {\n      position: absolute;\n      display: block;\n      content: '';\n      height: 1px;\n      width: 100%;\n      top: 33px;\n      background-color: rgba(68, 68, 68, 0.242);\n    }\n  }\n}\n.chosen-bird-title {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n@media (max-width: 992px) {\n  .chosen-bird-title {\n    flex-direction: column;\n  }\n  .chosen-bird-main {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .variants.container {\n    flex-direction: column;\n  }\n  .chosen-bird {\n    margin-left: 0;\n  }\n  .answer-list-item {\n    font-size: 16px;\n    padding: 10px;\n  }\n  .header .header-wrapper {\n    & .nav-list .list-item:first-child {\n      margin-right: 40px;\n    }\n    & .logo {\n      font-size: 24px;\n    }\n  }\n  .questions-list .questions-list-item {\n    font-size: 14px;\n  }\n}\n\n@media (max-width: 570px) {\n  .chosen-bird {\n    min-height: 430px;\n  }\n  .questions-list {\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    width: 100%;\n    & .questions-list-item {\n      width: auto;\n      min-width: 110px;\n      margin: 5px;\n      &.active {\n        position: relative;\n        margin-right: 35px;\n        &::after {\n          position: absolute;\n          display: block;\n          content: '';\n          background: url('../assets/img/arrow.png') center;\n          background-size: contain;\n          width: 30px;\n          height: 30px;\n\n          right: -32%;\n        }\n        &:last-child::after {\n          display: none;\n        }\n      }\n    }\n  }\n\n  .current-question-wrapper {\n    flex-direction: column;\n    & .current-bird-img {\n      margin: 0px auto;\n    }\n    & .current-bird-title {\n      font-size: 28px;\n      margin-top: 10px;\n      text-align: center;\n    }\n\n    & .current-bird-audio {\n      width: 90%;\n    }\n  }\n  .score {\n    & h5,\n    span {\n      font-size: 16px;\n    }\n  }\n}\n",".bird-container {\n  height: 400px;\n  width: 400px;\n  position: absolute;\n  z-index: 10;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.bird-container * {\n  position: absolute;\n}\n\n.bird-container {\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  .bird {\n    animation: birdMove 1.3s linear alternate infinite;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .head {\n    height: 200px;\n    width: 201px;\n    background-color: $main-color;\n    border-radius: 50%;\n    top: 50px;\n    left: 49px;\n    &:after {\n      content: '';\n      display: block;\n      position: absolute;\n      height: 80px;\n      width: 80px;\n      border-radius: 50% 50% 0 0;\n      background-color: $main-color;\n      top: 29px;\n      left: 30px;\n      animation: eyeMove 1.3s linear alternate infinite;\n    }\n    &:before {\n      content: '';\n      position: absolute;\n      height: 40px;\n      width: 40px;\n      background-color: #fff;\n      border-radius: 100%;\n      top: 60px;\n      left: 40px;\n      box-shadow: 6px -12px 0 15px #fff, inset -8px -8px 0 16px #333;\n    }\n  }\n  .mouth {\n    height: 25px;\n    border-left: solid 18px $beak-color;\n    border-radius: 100% 0 0 0;\n    top: 50px;\n    left: -8px;\n    transform: rotate(-70deg);\n    animation: mouthMoveTop 0.8s linear alternate infinite;\n    z-index: -1;\n    &:before {\n      content: '';\n      position: absolute;\n      height: 20px;\n      border-right: solid 12px $beak-color;\n      border-radius: 0 100% 0 0;\n      top: 5px;\n      left: -25px;\n      transform: rotate(-0deg);\n      animation: mouthMove 0.8s linear alternate infinite;\n    }\n  }\n  .sound {\n    height: 3px;\n    width: 8px;\n    background-color: $sound-color;\n    border: 1px solid $sound-color;\n    border-radius: 18px;\n    transform: rotate(35deg);\n    top: 40px;\n    left: -25px;\n    box-shadow: 1px 1px 5px rgba(135, 64, 173, 0.604);\n    opacity: 0;\n    animation: soundOn 0.8s linear alternate infinite;\n    &:before,\n    &:after {\n      border-radius: 18px;\n      box-shadow: 1px 1px 5px rgba(135, 64, 173, 0.604);\n      height: 3px;\n      width: 8px;\n      background-color: $sound-color;\n      border-radius: 18px;\n    }\n    &:before {\n      content: '';\n      position: absolute;\n      transform: rotate(-20deg);\n      top: 20px;\n      left: 0px;\n    }\n    &:after {\n      content: '';\n      position: absolute;\n      transform: rotate(-50deg);\n      top: 35px;\n      left: 10px;\n    }\n  }\n  .body {\n    position: absolute;\n    top: 130px;\n    left: 72px;\n    width: 300px;\n    height: 200px;\n    border-left: solid 200px $main-color;\n    border-radius: 0 0 0 85%;\n    transform: rotate(-15deg);\n    &:before {\n      content: '';\n      position: absolute;\n      border-radius: 100% 0% 64% 36% / 62% 0% 100% 38%;\n      height: 160px;\n      width: 160px;\n      background-color: $wing-color;\n      transform: rotate(35deg);\n      left: -100px;\n      box-shadow: 15px -10px 25px rgba(0, 0, 0, 0.1);\n      animation: wingMove 1.3s linear alternate infinite;\n    }\n  }\n  .leg {\n    height: 50px;\n    width: 6px;\n    background-color: $second-color;\n    &:before,\n    &:after {\n      content: '';\n      position: absolute;\n      top: 97%;\n      height: 18px;\n      width: 4px;\n      background-color: $second-color;\n      transform-origin: top center;\n    }\n    &:before {\n      left: 0;\n      transform: rotate(65deg);\n      animation: legMove 1.3s linear alternate infinite;\n    }\n    &:after {\n      right: 0;\n      transform: rotate(-65deg);\n      animation: legMoveLeft 1.3s linear alternate infinite;\n    }\n\n    &.one {\n      top: 265px;\n      left: 180px;\n      z-index: -1;\n    }\n    &.two {\n      top: 255px;\n      left: 150px;\n      z-index: -1;\n    }\n  }\n}\n\n@keyframes birdMove {\n  from {\n    transform: translateY(-10px);\n  }\n  to {\n    transform: translateY(10px);\n  }\n}\n\n@keyframes mouthMove {\n  from {\n    transform: rotate(-0deg);\n  }\n  to {\n    transform: rotate(35deg);\n  }\n}\n@keyframes mouthMoveTop {\n  from {\n    transform: rotate(-70deg);\n  }\n  to {\n    transform: rotate(-90deg);\n  }\n}\n\n@keyframes wingMove {\n  from {\n    transform: rotate(95deg);\n    box-shadow: none;\n  }\n  to {\n    transform: rotate(55deg);\n  }\n}\n@keyframes soundOn {\n  from {\n    opacity: 1;\n  }\n}\n@keyframes legMove {\n  from {\n    transform: rotate(35deg);\n  }\n  to {\n    transform: rotate(75deg);\n  }\n}\n@keyframes eyeMove {\n  from {\n    height: 10px;\n  }\n  to {\n    height: 40px;\n  }\n}\n\n@keyframes legMoveLeft {\n  from {\n    transform: rotate(-35deg);\n  }\n  to {\n    transform: rotate(-75deg);\n  }\n}\n@media (max-width: 768px) {\n  .bird-container {\n    z-index: 0;\n  }\n}\n@media (max-width: 570px) {\n  .bird-container {\n    left: 50%;\n    top: 28%;\n    height: 150px;\n    width: 300px;\n\n    .head {\n      height: 150px;\n      width: 150px;\n      left: 35px;\n      &:before {\n        height: 30px;\n        width: 30px;\n        top: 48px;\n        box-shadow: 0px -4px 0 13px #fff, inset -8px -7px 0 12px #333;\n      }\n      &:after {\n        height: 40px;\n        width: 60px;\n        top: 17px;\n        left: 26px;\n      }\n    }\n    & .body {\n      width: 270px;\n      height: 200px;\n      left: 72px;\n      top: 108px;\n      border-left: solid 147px $main-color;\n      transform: rotate(339deg);\n    }\n    .body:before {\n      height: 120px;\n      width: 120px;\n    }\n  }\n}\n","@import url('https://fonts.googleapis.com/css2?family=Risque&display=swap');\n\n.header {\n  height: 50px;\n  background-color: rgb(206 233 222);\n  position: relative;\n  & .header-wrapper {\n    padding-top: 7px;\n    align-self: center;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-content: center;\n    justify-content: space-between;\n\n    & .nav-list {\n      display: flex;\n\n      & .list-item {\n        color: $main-text-color;\n        font-size: 22px;\n        font-family: 'Risque', cursive;\n        &:first-child {\n          margin-right: 60px;\n        }\n        &:hover {\n          color: #5e99d0;\n          transform: scale(0.98);\n          transition: all 0.2s ease;\n        }\n      }\n    }\n  }\n}\n\n.logo {\n  background-image: url(https://img.freepik.com/premium-vector/painted-background-multicoloured-palette_23-2148427592.jpg?w=2000);\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  color: #4d5f6d;\n  font-size: 30px;\n  font-weight: 600;\n  background-position: 5% 21%;\n  font-family: 'Risque', cursive;\n\n  &:hover {\n    background-position: 15% 0%;\n  }\n}\n.language {\n  width: 30px;\n  height: 30px;\n\n  margin-left: 30px;\n  cursor: pointer;\n  &.en {\n    background: url(../assets/img/en.png) center no-repeat;\n    background-size: cover;\n  }\n  &.ru {\n    background: url(../assets/img/ru.png) center no-repeat;\n    background-size: cover;\n  }\n}\n@media (max-width: 768px) {\n  .header .header-wrapper .nav-list .list-item:first-child {\n    margin-right: 60px;\n  }\n}\n@media (max-width: 570px) {\n  .header .header-wrapper {\n    & .logo {\n      font-size: 22px;\n    }\n    .nav-list .list-item {\n      font-size: 18px;\n      &:first-child {\n        margin-right: 30px;\n      }\n    }\n  }\n}\n@media (max-width: 491px) {\n  .score {\n    padding: 3px;\n    &::before {\n      display: none;\n    }\n  }\n  .header .header-wrapper .nav-list .list-item {\n    font-size: 16px;\n    &:first-child {\n      margin-right: 15px;\n    }\n  }\n  .language {\n    margin-left: 5px;\n    width: 20px;\n    height: 20px;\n  }\n}\n",".footer {\n  height: 50px;\n  background-color: rgb(206 233 222);\n\n  & .container {\n    padding-top: 15px;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: space-between;\n    color: $main-text-color;\n    font-family: 'Risque', cursive;\n  }\n}\n.my-links {\n  position: relative;\n}\n.rss,\n.github {\n  position: absolute;\n  content: '';\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  height: 26px;\n  top: -15px;\n\n  &:hover {\n    transform: scale(0.95);\n    transition: all 0.2s ease-in;\n  }\n}\n\n.github {\n  left: 0px;\n  width: 30px;\n  background-image: url(../assets/svg/github.svg);\n}\n.rss {\n  left: 90px;\n  background-image: url(../assets/svg/rs_school_js.svg);\n  width: 68px;\n}\n@media (max-width: 768px) {\n  .license {\n    font-size: 14px;\n  }\n}\n@media (max-width: 570px) {\n  .rss,\n  .github {\n    height: 20px;\n    top: -10px;\n  }\n  .rss {\n    left: 40px;\n    width: 45px;\n  }\n}\n",".audio-player {\n  margin: 10px 40px 8px 0;\n  width: 100%;\n  min-width: 100px;\n  border-radius: 8px;\n\n  padding: 10px 0px;\n  display: block;\n  &.hidden {\n    display: none;\n  }\n}\n.chosen-audio-player {\n  display: block;\n  &.hidden {\n    display: none;\n  }\n}\n.audio-loading {\n  margin-top: 20px;\n  font-size: 16px;\n  color: $main-text-color;\n  text-align: left;\n  display: block;\n  &.hidden {\n    display: none;\n  }\n}\n.controls {\n  display: flex;\n  align-items: center;\n}\n\n.playback-button {\n  transition: 0.2s;\n  width: 40px;\n  height: 40px;\n  border: 2px solid #397593;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-right: 20px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  &:hover {\n    border-color: #52a7d2;\n  }\n}\n\n.playback-button svg {\n  transition: 0.2s;\n  width: 18px;\n  height: 18px;\n  color: #51a1c9;\n}\n\n.playback-button:hover svg {\n  width: 18px;\n  height: 18px;\n\n  transform: scale(1.03);\n  & path {\n    fill: #52a7d2;\n  }\n}\n\n.timebar {\n  position: relative;\n  flex: 1 1;\n  margin-top: 3px;\n}\n.timebar-bar {\n  height: 4px;\n  -webkit-appearance: none;\n  width: 100%;\n\n  border-radius: 5px;\n  background: linear-gradient(to right top, #004d7a, #008793, #00bf72);\n  outline: none;\n  opacity: 0.9;\n  -webkit-transition: 0.2s;\n  transition: opacity 0.2s;\n}\n.timebar-bar::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: linear-gradient(to right top, #004d7a, #008793, #00bf72);\n  cursor: pointer;\n}\n\n.timebar-bar::-moz-range-thumb {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: grey;\n  cursor: pointer;\n}\n\n.timebar-time-info {\n  margin-top: 6px;\n  font-size: 11px;\n  color: rgb(11, 42, 51);\n  display: flex;\n  justify-content: space-between;\n}\n.volume-container {\n  display: flex;\n  flex-direction: row;\n  margin-left: 20px;\n  margin-bottom: 9px;\n}\n\n.volume {\n  background-image: url('../assets/img/volume.png');\n  background-size: contain;\n  background-position: center;\n  width: 17px;\n  height: 17px;\n}\n\n.volume-slider {\n  width: 55px;\n  position: relative;\n  top: -4px;\n}\n.slider {\n  margin-left: 5px;\n  -webkit-appearance: none;\n  width: 100%;\n  height: 3px;\n  border-radius: 5px;\n  background: #718f98;\n  outline: none;\n  -webkit-transition: 0.2s;\n  transition: opacity 0.2s;\n}\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #2b697b;\n  cursor: pointer;\n}\n\n.slider::-moz-range-thumb {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #2b697b;\n  cursor: pointer;\n}\n.chosen-bird-wrapper {\n  .volume-container {\n    margin: 0 10px;\n    margin-bottom: 9px;\n    .volume-slider {\n      width: 40px;\n    }\n  }\n}\n\n@media (max-width: 570px) {\n  .audio-player {\n    margin: 0;\n    padding: 0;\n    padding-top: 15px;\n  }\n}\n",".results-wrapper.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  border-radius: 8px;\n  background-color: $backgroundCardColor;\n  box-shadow: 1px 1px 5px rgba(62, 42, 17, 0.447);\n  height: 50vh;\n  width: 50%;\n  margin: 5% auto;\n  padding: 20px;\n  & h4 {\n    font-size: 36px;\n  }\n  & p {\n    font-size: 24px;\n    padding-top: 30px;\n  }\n  #results {\n    color: rgb(36, 14, 90);\n    text-shadow: 0 0 4px rgb(119 101 217);\n  }\n}\n\n.game {\n  min-height: calc(100vh - 100px);\n}\n\n@media (max-width: 992px) {\n  .results-wrapper.container {\n    width: 70%;\n  }\n}\n@media (max-width: 768px) {\n  .results-wrapper.container {\n    width: 90%;\n    & h4 {\n      font-size: 28px;\n    }\n    & p {\n      font-size: 24px;\n      padding-top: 30px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/img/arrow.png":
/*!**********************************!*\
  !*** ./src/assets/img/arrow.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/be136398bf2cad32d368.png";

/***/ }),

/***/ "./src/assets/img/bird-bottom.png":
/*!****************************************!*\
  !*** ./src/assets/img/bird-bottom.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/db65eebd6528d3d2cd62.png";

/***/ }),

/***/ "./src/assets/img/bird-corner.png":
/*!****************************************!*\
  !*** ./src/assets/img/bird-corner.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3965a9632f04ee8f5f19.png";

/***/ }),

/***/ "./src/assets/img/bird.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/bird.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cbd08c29fc4a2f0108e8.jpg";

/***/ }),

/***/ "./src/assets/img/en.png":
/*!*******************************!*\
  !*** ./src/assets/img/en.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/357fd3bd8484b48991f4.png";

/***/ }),

/***/ "./src/assets/img/feather.jpg":
/*!************************************!*\
  !*** ./src/assets/img/feather.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6c3e3c5b82973d8b0d44.jpg";

/***/ }),

/***/ "./src/assets/img/no.png":
/*!*******************************!*\
  !*** ./src/assets/img/no.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/531745eb6f8929634d1f.png";

/***/ }),

/***/ "./src/assets/img/ru.png":
/*!*******************************!*\
  !*** ./src/assets/img/ru.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/9f75fd2aeca2b2444174.png";

/***/ }),

/***/ "./src/assets/img/volume.png":
/*!***********************************!*\
  !*** ./src/assets/img/volume.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/87711ffefc85c46a4f9e.png";

/***/ }),

/***/ "./src/assets/img/yes.png":
/*!********************************!*\
  !*** ./src/assets/img/yes.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2e1001f79a91776de835.png";

/***/ }),

/***/ "./src/assets/sounds/birds-singing.wav":
/*!*********************************************!*\
  !*** ./src/assets/sounds/birds-singing.wav ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/9dd7796456e954ac688a.wav";

/***/ }),

/***/ "./src/assets/sounds/correct.mp3":
/*!***************************************!*\
  !*** ./src/assets/sounds/correct.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3500ed0940d1a3c79bc9.mp3";

/***/ }),

/***/ "./src/assets/sounds/do.mp3":
/*!**********************************!*\
  !*** ./src/assets/sounds/do.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/76526382377f1019567f.mp3";

/***/ }),

/***/ "./src/assets/sounds/error.mp3":
/*!*************************************!*\
  !*** ./src/assets/sounds/error.mp3 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/33a337e55b37aa5226e7.mp3";

/***/ }),

/***/ "./src/assets/sounds/fa.mp3":
/*!**********************************!*\
  !*** ./src/assets/sounds/fa.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6795e10dc2f3739b37a5.mp3";

/***/ }),

/***/ "./src/assets/sounds/lya.mp3":
/*!***********************************!*\
  !*** ./src/assets/sounds/lya.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/52ebaeacf0cdee91b219.mp3";

/***/ }),

/***/ "./src/assets/sounds/mi.mp3":
/*!**********************************!*\
  !*** ./src/assets/sounds/mi.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7c167a40df8166d372ac.mp3";

/***/ }),

/***/ "./src/assets/sounds/re.mp3":
/*!**********************************!*\
  !*** ./src/assets/sounds/re.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d65ecd53792662933cb9.mp3";

/***/ }),

/***/ "./src/assets/sounds/si.mp3":
/*!**********************************!*\
  !*** ./src/assets/sounds/si.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/4bd3157c560647b362ce.mp3";

/***/ }),

/***/ "./src/assets/sounds/soli.mp3":
/*!************************************!*\
  !*** ./src/assets/sounds/soli.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2c3bbbec7884ac0542e4.mp3";

/***/ }),

/***/ "./src/assets/svg/github.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/github.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/22e65707326e3e1e37af.svg";

/***/ }),

/***/ "./src/assets/svg/rs_school_js.svg":
/*!*****************************************!*\
  !*** ./src/assets/svg/rs_school_js.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ad178c0df28bc133be34.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.6dca6b30dabcda93dad6.js.map
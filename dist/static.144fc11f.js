(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-grid-system");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Title1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Title2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Title3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Title4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigNumber; });
/* unused harmony export Question */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SmallText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BoxGreyNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BoxTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ChartNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ChartDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ScoringPoints; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
function _templateObject13(){var data=_taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 19.2px;\n  color: #4a4a4a;\n  text-align: center;\n  margin: 0.5rem;\n"]);_templateObject13=function _templateObject13(){return data;};return data;}function _templateObject12(){var data=_taggedTemplateLiteral(["\n  font-size: 16px;\n  color: #6e6e6e;\n  line-height: 22px;\n  font-weight: 200;\n"]);_templateObject12=function _templateObject12(){return data;};return data;}function _templateObject11(){var data=_taggedTemplateLiteral(["\n  font-size: 48px;\n  color: #373434;\n  margin: 0;\n"]);_templateObject11=function _templateObject11(){return data;};return data;}function _templateObject10(){var data=_taggedTemplateLiteral(["\n  text-transform: uppercase;\n  font-size: 16px;\n  color: #00b990;\n  text-align: center;\n  font-weight: 800;\n"]);_templateObject10=function _templateObject10(){return data;};return data;}function _templateObject9(){var data=_taggedTemplateLiteral(["\n  line-height: 0;\n  opacity: 0.4;\n  font-size: 42px;\n  color: #949494;\n  text-align: center;\n"]);_templateObject9=function _templateObject9(){return data;};return data;}function _templateObject8(){var data=_taggedTemplateLiteral(["\n  font-size: 12px;\n  color: #373434;\n  font-weight: 400;\n"]);_templateObject8=function _templateObject8(){return data;};return data;}function _templateObject7(){var data=_taggedTemplateLiteral(["\n  margin: 0.5rem auto;\n  font-weight: 500;\n  transition: all 0.1s;\n  cursor: pointer;\n  &:hover {\n    color: #707070;\n  }\n"]);_templateObject7=function _templateObject7(){return data;};return data;}function _templateObject6(){var data=_taggedTemplateLiteral(["\n  opacity: 0.19;\n  font-size: 66px;\n  color: #000000;\n  margin: 0;\n"]);_templateObject6=function _templateObject6(){return data;};return data;}function _templateObject5(){var data=_taggedTemplateLiteral(["\n  font-size: 18px;\n  line-height: 27px;\n  font-weight: 400;\n  color: ",";\n  width: 100%;\n"]);_templateObject5=function _templateObject5(){return data;};return data;}function _templateObject4(){var data=_taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 500;\n  color: ",";\n  text-align: ",";\n"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){var data=_taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 500;\n  color: ",";\n  text-align: ",";\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral(["\n  font-size: 26px;\n  font-weight: 500;\n  color: ",";\n  text-align: ",";\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral(["\n  font-size: 26px;\n  font-weight: 600;\n  color: ",";\n  width: 100%;\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Title1=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1(_templateObject(),function(props){return props.light?_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textColorLight:_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textColorDark;});var Title2=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2(_templateObject2(),function(props){return props.light?_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textColorLight:_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textColorDark;},function(props){return props.center?"center":"";});var Title3=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3(_templateObject3(),function(props){return props.light?_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textColorLight:_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textColorDark;},function(props){return props.center?"center":"";});var Title4=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4(_templateObject4(),function(props){return props.light?_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textColorLight:_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textColorDark;},function(props){return props.center?"center":"";});var Text=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(_templateObject5(),function(props){return props.light?_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textColorLight:_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textColorDark;});var BigNumber=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(_templateObject6());var Question=styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Text)(_templateObject7());var SmallText=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(_templateObject8());var BoxGreyNumber=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(_templateObject9());var BoxTitle=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(_templateObject10());var ChartNumber=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(_templateObject11());var ChartDescription=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(_templateObject12());var ScoringPoints=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(_templateObject13());

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var strings={landingPage:{meta:{siteRoot:"https://www.brive.io",title:"BRIVE - Fahrzeugflotten mit Telematik effizienter machen"},header:{headline:"BRIVE hilft Fahrzeugflotten effizienter zu machen.",text:"Kosten senken indem gute Fahrweise belohnt wird.",button:"Kontaktieren",changeLanguage:{text:"English",link:"https://eng.brive.io"}},intro:{headline:"Den größten Anteil an Flottenkosten haben ihre Fahrer",text:"Umso wichtiger sind deshalb motivierte Mitarbeiter, die mit Ihrer Fahrweise Rücksicht auf die Fahrzeuge, die laufenden Kosten und die Umwelt nehmen. BRIVE hilft dabei Mitarbeiter nachhaltig zu motivieren, um die Kosten Ihrer Flotte signifikant zu senken. ",chartDescription:"Beeinflussbarer Anteil des Fahrers an Flottenkosten",chartPercent:63,chartUpTo:"Bis zu",bulletPoints:["Kraftstoffverbrauch","Unfallkosten","Versicherungskosten","Wartung","Verschleiß"]},hotItWorks:{headline:"Wie BRIVE Fahrzeugflotten effizienter macht",text:"BRIVE besteht aus mehreren Komponenten: Analyse, Bewertung und anschließende Belohnung der Fahrer.",boxes:[{title:"Analyse",text:"Die BRIVE App liest die Sensoren im Smartphone aus und bereitet die Daten auf."},{title:"Bewertung",text:"Algorithmen berechnen anhand der Sensoren eine Bewertung des Fahrstils für den einzelnen Fahrer."},{title:"Belohnung",text:"Aus der Bewertung ergibt sich ein Bonus, den der Fahrer auf die BRIVE Kreditkarte steuerfrei überwiesen bekommt."},{title:"Verbesserung",text:"Je besser der Fahrstil, desto größer ist die Ersparnis für Ihre Flotte."}]},analyseSection:{number:1,title:"Analyse von Sensorwerten aus dem Smartphone",description:"BRIVE nutzt eine Vielzahl von Sensoren im Smartphone, um herauszufinden wie das Fahrzeug gefahren wird. Anhand dieser Sensoren werden Ereignisse berechnet, die einen Aufschluss über das Fahrverhalten geben (z.B. starke Bremsung oder Geschwindigkeitsüberschreitung).",img:""},ratingSection:{number:2,title:"Bewertung des Fahrstils verständlich gemacht",description:"Aus den Ereignissen berechnet BRIVE Punktzahlen in verschiedenen Kategorien, die für den Fahrer verständlich dargestellt werden. Daraus erhalten sie Einblicke in ihre Fahrweise und können sich gezielt verbessern. Sie profitieren von gesteigerter Flotteneffizienz.",sections:[{title:"Anfahrverhalten",scoring:80},{title:"Bremsverhalten",scoring:67},{title:"Geschwindigkeit",scoring:43},{title:"Leerlauf",scoring:58},{title:"Handynutzung",scoring:91},{title:"Kurvenverhalten",scoring:85}]},rewardSection:{number:3,title:"Belohnung berechnet nach der Qualität des Fahrstils",description:"Aus der Bewertung des Fahrstils berechnet BRIVE einen Geldbetrag, der dem Fahrer als steuerfreie Sachleistung auf die BRIVE Kreditkarte überwiesen wird*.",notice:"*bis maximal 44€ monatlich steuerfrei, danach Pauschalbesteuerung"},improvementSection:{number:4,title:"Die Effizienz der Flotte steigert sich signifikant",description:"Einsparungen bei Verbrauch, Unfallkosten und Kosten für Wartung und Verschleiß steigern die Profitabilität Ihrer Flotte. Gleichzeitig motivieren Sie Ihre Mitarbeiter durch zusätzliche Gehaltsleistungen. "},advantages:{title:"Weitere Vorteile mit der Nutzung von BRIVE für ihre Flotte",sections:[{icon:"heart.svg",title:"Höhere Mitarbeiterzufriedenheit",description:"Durch den ausgezahlten Bonus steigert sich nicht nur die Effizienz ihrer Flotte, sondern gleichzeitig auch die Zufriedenheit ihrer Mitarbeiter."},{icon:"plus.svg",title:"BRIVE berücksichtigt Ihre Bewertungsfaktoren",description:"BRIVE beschränkt sich nicht nur auf die Fahrweise an sich. Sollten weitere Faktoren wie z.B. Kundenzufriedenheit oder Pünktlichkeit berücksichtigt werden, ist dies einfach möglich."},{icon:"camera.svg",title:"WER MÖCHTE SCHON ÜBERWACHT WERDEN?",description:"BRIVE nimmt Ihnen die Arbeit Ihrer Flotte ab und informiert Sie auf Flottenebene über den Fortschritt. Überwachung der Mitarbeiter durch den Arbeitgeber ist somit unmöglich."}]},support:{title:"Gefördert durch",images:["europaeische_union_sozialfonds.png","efre.png","berlin.png","berliner_startup_stipendium.png","project_together.png","zu.png"]},faq:{headline:"Häufige Fragen",questions:[{question:"Wann kommt BRIVE auf den Markt?",answer:"Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? "},{question:"Wieviel wird BRIVE pro Fahrer kosten?",answer:"Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? "},{question:"Um wieviel Prozent werden Flotten effizienter wenn sie BRIVE nutzen?",answer:"Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? "},{question:"Wann kommt BRIVE auf den Markt?",answer:"Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? "},{question:"Wieviel wird BRIVE pro Fahrer kosten?",answer:"Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? "},{question:"Um wieviel Prozent werden Flotten effizenter wenn sie BRIVE nutzen?",answer:"Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? "}]},contact:{contactUs:"Kontaktieren",headline:"Machen Sie Ihre Flotte effizienter. \n"+"BRIVE kommt 2019.\n"+"Seien Sie einer der Ersten, um Neuigkeiten zu erhalten.",newsletter:{tab:"Newsletter abonnieren",placeholder:"E-Mail-Adresse",privacy:"Hiermit akzeptiere ich die Erklärung zum Datenschutz gemäß DSGVO und wünsche, dass BRIVE mich über Neuigkeiten informiert.",button:"Abonnieren"},mail:"E-Mail Adresse",message:"Ihre Nachricht",send:"Nachricht Senden",contact:{tab:"Kontaktieren"},privacePolicyText:'Ihre Daten werden ausschließlich für die Bearbeitung Ihres Anliegens verwendet und werden nach 90 Tagen gelöscht. Hier finden Sie unsere Erklärung zum <a href="/datenschutz"> Datenschutz </a>.'}},routing:{imprint:"/impressum",imprintText:"Impressum",imprintComponentPath:"src/containers/Imprint_GER",privacePolicy:"/datenschutz",privacePolicyText:"Datenschutzerklärung",privacePolicyPath:"src/containers/PrivacyPolicy_GER"}};/* harmony default export */ __webpack_exports__["a"] = (strings);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SectionBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SectionLight; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject3(){var data=_taggedTemplateLiteral(["\n  background-image: linear-gradient(\n    -135deg,\n    rgba(144, 169, 0, 0.32) 0%,\n    rgba(0, 184, 163, 0.32) 100%\n  );\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral(["\n  background-image: linear-gradient(-180deg, #f5faf7 0%, #d3f1ef 100%);\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral(["\n  padding: 3rem 0;\n  width: 100vw;\n  //height: 100vh;\n  background-image: linear-gradient(-135deg, #90a900 0%, #00b8a3 100%);\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Section=styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());var SectionBlue=styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Section)(_templateObject2());var SectionLight=styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Section)(_templateObject3());

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export breakpoints */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return containerWidthsConfid; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject(){var data=_taggedTemplateLiteral(["\n    @media (max-width: ","em) {\n      ","\n    }\n  "]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var breakpoints={xl:1200,lg:992,md:768,sm:576};var media=Object.keys(breakpoints).reduce(function(acc,label){acc[label]=function(){return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(),breakpoints[label]/16,styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0,arguments));};return acc;},{});var containerWidthsConfid={// containerwidths: [540, 750, 960, 1140]
containerWidths:[540,750,960,1024]};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var ColorDefinitons={white:"#fff",dark:"#373434"};var Defintions={boxBackgroundColor:ColorDefinitons.white,textColorDark:ColorDefinitons.dark,textColorLight:ColorDefinitons.white};var Colors=_objectSpread({},ColorDefinitons,Defintions);/* harmony default export */ __webpack_exports__["a"] = (Colors);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(58);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(60);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(40);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(61);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(28);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var _render = userRender || (0, _utils.createDefaultRender)(Loading, Err);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req2.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = {
        error: null
      };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props),
            addModule = _req3.addModule,
            requireSync = _req3.requireSync,
            requireAsync = _req3.requireAsync,
            asyncOnly = _req3.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({
            error: error
          });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({
            mod: mod
          }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, this.props),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var mod = void 0;

            try {
              mod = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _mod = requireSync(nextProps, this.context);

            this.setState({
              mod: function mod() {
                return null;
              }
            }); // HMR /w Redux and HOCs can be finicky, so we

            setTimeout(function () {
              return _this2.setState({
                mod: _mod
              });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.mod && loadingTransition) {
          this.update({
            mod: null
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (mod) {
          var state = {
            mod: mod
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({
            error: error
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return _render(props, mod, isLoading, userError || error);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}

exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Loading: true,
  withLoading: true,
  onLoading: true,
  removal: true,
  getRoutePath: true,
  getBasePath: true,
  Head: true,
  scrollTo: true,
  RouteData: true,
  withRouteData: true,
  SiteData: true,
  withSiteData: true,
  Prefetch: true,
  Routes: true,
  Root: true
};
Object.defineProperty(exports, "removal", {
  enumerable: true,
  get: function get() {
    return _utils.removal;
  }
});
Object.defineProperty(exports, "getRoutePath", {
  enumerable: true,
  get: function get() {
    return _utils.getRoutePath;
  }
});
Object.defineProperty(exports, "getBasePath", {
  enumerable: true,
  get: function get() {
    return _utils.getBasePath;
  }
});
Object.defineProperty(exports, "Head", {
  enumerable: true,
  get: function get() {
    return _reactHelmet.Helmet;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _scrollTo.default;
  }
});
Object.defineProperty(exports, "RouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.default;
  }
});
Object.defineProperty(exports, "withRouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.withRouteData;
  }
});
Object.defineProperty(exports, "SiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.default;
  }
});
Object.defineProperty(exports, "withSiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.withSiteData;
  }
});
Object.defineProperty(exports, "Prefetch", {
  enumerable: true,
  get: function get() {
    return _Prefetch.default;
  }
});
Object.defineProperty(exports, "Routes", {
  enumerable: true,
  get: function get() {
    return _Routes.default;
  }
});
Object.defineProperty(exports, "Root", {
  enumerable: true,
  get: function get() {
    return _Root.default;
  }
});
exports.onLoading = exports.withLoading = exports.Loading = void 0;

var _utils = __webpack_require__(17);

var _reactHelmet = __webpack_require__(63);

var _browser = __webpack_require__(15);

Object.keys(_browser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _browser[key];
    }
  });
});

var _scrollTo = _interopRequireDefault(__webpack_require__(41));

var _RouteData = _interopRequireWildcard(__webpack_require__(64));

var _SiteData = _interopRequireWildcard(__webpack_require__(65));

var _Prefetch = _interopRequireDefault(__webpack_require__(66));

var _Routes = _interopRequireDefault(__webpack_require__(43));

var _Root = _interopRequireDefault(__webpack_require__(67));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})(); // Migration Hints


var Loading = function Loading() {
  (0, _utils.removal)('Loading');
};

exports.Loading = Loading;

var withLoading = function withLoading() {
  (0, _utils.removal)('withLoading');
};

exports.withLoading = withLoading;

var onLoading = function onLoading() {
  (0, _utils.removal)('onLoading');
};

exports.onLoading = onLoading;
;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(withLoading, "withLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(onLoading, "onLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerTemplateForPath = registerTemplateForPath;
exports.reloadRouteData = reloadRouteData;
exports.getRouteInfo = getRouteInfo;
exports.prefetchData = prefetchData;
exports.prefetchTemplate = prefetchTemplate;
exports.prefetch = prefetch;
exports.getCurrentRoutePath = getCurrentRoutePath;
exports.registerTemplates = exports.templateErrorByPath = exports.templatesByPath = exports.templateUpdated = exports.templates = exports.registerPlugins = exports.plugins = exports.sharedDataByHash = exports.routeErrorByPath = exports.routeInfoByPath = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(16));

var _axios = _interopRequireDefault(__webpack_require__(37));

var _utils = __webpack_require__(17);

var _Visibility = _interopRequireDefault(__webpack_require__(38));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
} // RouteInfo / RouteData


var routeInfoByPath = {};
exports.routeInfoByPath = routeInfoByPath;
var routeErrorByPath = {};
exports.routeErrorByPath = routeErrorByPath;
var sharedDataByHash = {};
exports.sharedDataByHash = sharedDataByHash;
var inflightRouteInfo = {};
var inflightPropHashes = {};
var requestPool = (0, _utils.createPool)({
  concurrency: Number("5")
}); // Plugins

var plugins = [];
exports.plugins = plugins;

var registerPlugins = function registerPlugins(newPlugins) {
  plugins.splice.apply(plugins, [0, Infinity].concat(_toConsumableArray(newPlugins)));
}; // Templates


exports.registerPlugins = registerPlugins;
var templates = [];
exports.templates = templates;
var templateUpdated = {
  cb: function cb() {}
};
exports.templateUpdated = templateUpdated;
var templateIndexByPath = {
  '404': 0
};
var templatesByPath = {
  '404': templates[0]
};
exports.templatesByPath = templatesByPath;
var templateErrorByPath = {};
exports.templateErrorByPath = templateErrorByPath;

var registerTemplates = function registerTemplates(tmps) {
  templates.splice.apply(templates, [0, Infinity].concat(_toConsumableArray(tmps)));
  templatesByPath['404'] = templates[0];
  templateUpdated.cb();
};

exports.registerTemplates = registerTemplates;
init(); // When in development, init a socket to listen for data changes
// When the data changes, we invalidate and reload all of the route data

function init() {
  // In development, we need to open a socket to listen for changes to data
  if (false) { var run, io; }

  if (true) startPreloader();
}

function startPreloader() {
  if (typeof document !== 'undefined') {
    var run = function run() {
      var els = [].slice.call(document.getElementsByTagName('a'));
      els.forEach(function (el) {
        var href = el.getAttribute('href');

        if (href) {
          (0, _Visibility.default)(el, function () {
            prefetch(href);
          });
        }
      });
    };

    setInterval(run, Number("300"));
  }
}

function registerTemplateForPath(path, index) {
  path = (0, _utils.getRoutePath)(path);
  templateIndexByPath[path] = index;
  templatesByPath[path] = templates[index];
}

function reloadRouteData() {
  // Delete all cached data
  ;
  [routeInfoByPath, sharedDataByHash, routeErrorByPath, inflightRouteInfo, inflightPropHashes].forEach(function (part) {
    Object.keys(part).forEach(function (key) {
      delete part[key];
    });
  }); // Force each RouteData component to reload

  global.reloadAll();
}

function getRouteInfo(_x) {
  return _getRouteInfo.apply(this, arguments);
}

function _getRouteInfo() {
  _getRouteInfo = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(path) {
    var _ref4,
        priority,
        routeInfo,
        _ref7,
        data,
        routeInfoRoot,
        cacheBuster,
        getPath,
        _ref8,
        _data,
        _ref9,
        _data2,
        _args2 = arguments;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref4 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, priority = _ref4.priority;
            path = (0, _utils.getRoutePath)(path); // Check if we should fetch RouteData for this url et all.

            if ((0, _utils.isPrefetchableRoute)(path)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return");

          case 4:
            if (!routeInfoByPath[path]) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 6:
            if (!routeErrorByPath[path]) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return");

          case 8:
            _context2.prev = 8;

            if (true) {
              _context2.next = 18;
              break;
            } // In dev, request from the webpack dev server


            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = _axios.default.get("/__react-static__/routeInfo/".concat(path === '/' ? '' : path));
            }

            _context2.next = 13;
            return inflightRouteInfo[path];

          case 13:
            _ref7 = _context2.sent;
            data = _ref7.data;
            routeInfo = data;
            _context2.next = 35;
            break;

          case 18:
            // In production, fetch the JSON file
            // Find the location of the routeInfo.json file
            routeInfoRoot = ( false ? undefined : "/") || false;
            cacheBuster = process.env.REACT_STATIC_CACHE_BUST ? "?".concat(process.env.REACT_STATIC_CACHE_BUST) : '';
            getPath = "".concat(routeInfoRoot).concat((0, _utils.pathJoin)(path, 'routeInfo.json')).concat(cacheBuster); // If this is a priority call bypass the queue

            if (!priority) {
              _context2.next = 29;
              break;
            }

            _context2.next = 24;
            return _axios.default.get(getPath);

          case 24:
            _ref8 = _context2.sent;
            _data = _ref8.data;
            routeInfo = _data;
            _context2.next = 35;
            break;

          case 29:
            // Otherwise, add it to the queue
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = requestPool.add(function () {
                return _axios.default.get(getPath);
              });
            }

            _context2.next = 32;
            return inflightRouteInfo[path];

          case 32:
            _ref9 = _context2.sent;
            _data2 = _ref9.data;
            routeInfo = _data2;

          case 35:
            _context2.next = 41;
            break;

          case 37:
            _context2.prev = 37;
            _context2.t0 = _context2["catch"](8); // If there was an error, mark the path as errored

            routeErrorByPath[path] = true;
            return _context2.abrupt("return");

          case 41:
            if (!priority) {
              delete inflightRouteInfo[path];
            }

            if (_typeof(routeInfo) !== 'object' || !routeInfo.path) {
              // routeInfo must have returned 200, but is not actually
              // a routeInfo object. Mark it as an error and move on silently
              routeErrorByPath[path] = true;
            } else {
              routeInfoByPath[path] = routeInfo;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 44:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[8, 37]]);
  }));
  return _getRouteInfo.apply(this, arguments);
}

function prefetchData(_x2) {
  return _prefetchData.apply(this, arguments);
}

function _prefetchData() {
  _prefetchData = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(path) {
    var _ref5,
        priority,
        routeInfo,
        _args4 = arguments;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref5 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, priority = _ref5.priority;
            _context4.next = 3;
            return getRouteInfo(path, {
              priority: priority
            });

          case 3:
            routeInfo = _context4.sent;

            if (routeInfo) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return");

          case 6:
            if (!routeInfo.fullData) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", routeInfo.fullData);

          case 8:
            // Request and build the props one by one
            routeInfo.fullData = _objectSpread({}, routeInfo.data || {}); // Request the template and loop over the routeInfo.sharedHashesByProp, requesting each prop

            _context4.next = 11;
            return Promise.all(Object.keys(routeInfo.sharedHashesByProp).map(
            /*#__PURE__*/
            function () {
              var _ref10 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee3(key) {
                var hash, _ref11, prop, _ref12, _prop;

                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        hash = routeInfo.sharedHashesByProp[key]; // Check the sharedDataByHash first

                        if (sharedDataByHash[hash]) {
                          _context3.next = 24;
                          break;
                        }

                        _context3.prev = 2;

                        if (!priority) {
                          _context3.next = 11;
                          break;
                        }

                        _context3.next = 6;
                        return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));

                      case 6:
                        _ref11 = _context3.sent;
                        prop = _ref11.data;
                        sharedDataByHash[hash] = prop;
                        _context3.next = 17;
                        break;

                      case 11:
                        // Non priority, share inflight requests and use pool
                        if (!inflightPropHashes[hash]) {
                          inflightPropHashes[hash] = requestPool.add(function () {
                            return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));
                          });
                        }

                        _context3.next = 14;
                        return inflightPropHashes[hash];

                      case 14:
                        _ref12 = _context3.sent;
                        _prop = _ref12.data; // Place it in the cache

                        sharedDataByHash[hash] = _prop;

                      case 17:
                        _context3.next = 23;
                        break;

                      case 19:
                        _context3.prev = 19;
                        _context3.t0 = _context3["catch"](2);
                        console.log('Error: There was an error retrieving a prop for this route! hashID:', hash);
                        console.error(_context3.t0);

                      case 23:
                        if (!priority) {
                          delete inflightPropHashes[hash];
                        }

                      case 24:
                        // Otherwise, just set it as the key
                        routeInfo.fullData[key] = sharedDataByHash[hash];

                      case 25:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[2, 19]]);
              }));

              return function (_x5) {
                return _ref10.apply(this, arguments);
              };
            }()));

          case 11:
            return _context4.abrupt("return", routeInfo.fullData);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _prefetchData.apply(this, arguments);
}

function prefetchTemplate(_x3) {
  return _prefetchTemplate.apply(this, arguments);
}

function _prefetchTemplate() {
  _prefetchTemplate = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(path) {
    var _ref6,
        priority,
        routeInfo,
        Template,
        _args5 = arguments;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref6 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {}, priority = _ref6.priority; // Clean the path

            path = (0, _utils.getRoutePath)(path); // Get route info so we can check if path has any data

            _context5.next = 4;
            return getRouteInfo(path, {
              priority: priority
            });

          case 4:
            routeInfo = _context5.sent;

            if (routeInfo) {
              registerTemplateForPath(path, routeInfo.templateIndex);
            } // Preload the template if available


            Template = templatesByPath[path];

            if (Template) {
              _context5.next = 10;
              break;
            } // If no template was found, mark it with an error


            templateErrorByPath[path] = true;
            return _context5.abrupt("return");

          case 10:
            if (!(!routeInfo.templateLoaded && Template.preload)) {
              _context5.next = 19;
              break;
            }

            if (!priority) {
              _context5.next = 16;
              break;
            }

            _context5.next = 14;
            return Template.preload();

          case 14:
            _context5.next = 18;
            break;

          case 16:
            _context5.next = 18;
            return requestPool.add(function () {
              return Template.preload();
            });

          case 18:
            routeInfo.templateLoaded = true;

          case 19:
            return _context5.abrupt("return", Template);

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _prefetchTemplate.apply(this, arguments);
}

function prefetch(_x4) {
  return _prefetch.apply(this, arguments);
}

function _prefetch() {
  _prefetch = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(path) {
    var options,
        type,
        data,
        _ref13,
        _ref14,
        _args6 = arguments;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {}; // Clean the path

            path = (0, _utils.getRoutePath)(path);
            type = options.type; // If it's priority, we stop the queue temporarily

            if (options.priority) {
              requestPool.stop();
            }

            if (!(type === 'data')) {
              _context6.next = 10;
              break;
            }

            _context6.next = 7;
            return prefetchData(path, options);

          case 7:
            data = _context6.sent;
            _context6.next = 21;
            break;

          case 10:
            if (!(type === 'template')) {
              _context6.next = 15;
              break;
            }

            _context6.next = 13;
            return prefetchTemplate(path, options);

          case 13:
            _context6.next = 21;
            break;

          case 15:
            ;
            _context6.next = 18;
            return Promise.all([prefetchData(path, options), prefetchTemplate(path, options)]);

          case 18:
            _ref13 = _context6.sent;
            _ref14 = _slicedToArray(_ref13, 1);
            data = _ref14[0];

          case 21:
            // If it was priority, start the queue again
            if (options.priority) {
              requestPool.start();
            }

            return _context6.abrupt("return", data);

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _prefetch.apply(this, arguments);
}

function getCurrentRoutePath() {
  // If in the browser, use the window
  if (typeof document !== 'undefined') {
    return (0, _utils.getRoutePath)(decodeURIComponent(window.location.href));
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routeInfoByPath, "routeInfoByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(routeErrorByPath, "routeErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(sharedDataByHash, "sharedDataByHash", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightRouteInfo, "inflightRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightPropHashes, "inflightPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(requestPool, "requestPool", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerPlugins, "registerPlugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templates, "templates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateUpdated, "templateUpdated", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateIndexByPath, "templateIndexByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templatesByPath, "templatesByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateErrorByPath, "templateErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplates, "registerTemplates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(startPreloader, "startPreloader", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplateForPath, "registerTemplateForPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(reloadRouteData, "reloadRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getRouteInfo, "getRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchData, "prefetchData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchTemplate, "prefetchTemplate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetch, "prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getCurrentRoutePath, "getCurrentRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathJoin = pathJoin;
exports.getRoutePath = getRoutePath;
exports.unwrapArray = unwrapArray;
exports.isObject = isObject;
exports.deprecate = deprecate;
exports.removal = removal;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.makePathAbsolute = makePathAbsolute;
exports.makeHookReducer = makeHookReducer;
exports.makeHookMapper = makeHookMapper;
exports.isSSR = isSSR;
exports.getBasePath = getBasePath;
exports.isPrefetchableRoute = isPrefetchableRoute;
Object.defineProperty(exports, "poolAll", {
  enumerable: true,
  get: function get() {
    return _swimmer.poolAll;
  }
});
Object.defineProperty(exports, "createPool", {
  enumerable: true,
  get: function get() {
    return _swimmer.createPool;
  }
});
exports.cleanSlashes = exports.trimDoubleSlashes = exports.trimTrailingSlashes = exports.trimLeadingSlashes = exports.cutPathToRoot = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(16));

var _swimmer = __webpack_require__(55);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var REGEX_TO_CUT_TO_ROOT = /(\..+?)\/.*/g;
var REGEX_TO_REMOVE_LEADING_SLASH = /^\/{1,}/g;
var REGEX_TO_REMOVE_TRAILING_SLASH = /\/{1,}$/g;
var REGEX_TO_REMOVE_DOUBLE_SLASH = /\/{2,}/g;

var cutPathToRoot = function cutPathToRoot() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_CUT_TO_ROOT, '$1');
};

exports.cutPathToRoot = cutPathToRoot;

var trimLeadingSlashes = function trimLeadingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_LEADING_SLASH, '');
};

exports.trimLeadingSlashes = trimLeadingSlashes;

var trimTrailingSlashes = function trimTrailingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_TRAILING_SLASH, '');
};

exports.trimTrailingSlashes = trimTrailingSlashes;

var trimDoubleSlashes = function trimDoubleSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isAbsoluteUrl(string)) {
    var _string$split = string.split('://'),
        _string$split2 = _slicedToArray(_string$split, 2),
        _string$split2$ = _string$split2[0],
        scheme = _string$split2$ === void 0 ? '' : _string$split2$,
        _string$split2$2 = _string$split2[1],
        path = _string$split2$2 === void 0 ? '' : _string$split2$2;

    return [scheme, path.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/')].join('://');
  }

  return string.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/');
};

exports.trimDoubleSlashes = trimDoubleSlashes;

var cleanSlashes = function cleanSlashes(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!string) return '';
  var _options$leading = options.leading,
      leading = _options$leading === void 0 ? true : _options$leading,
      _options$trailing = options.trailing,
      trailing = _options$trailing === void 0 ? true : _options$trailing,
      _options$double = options.double,
      double = _options$double === void 0 ? true : _options$double;
  var cleanedString = string;

  if (leading) {
    cleanedString = trimLeadingSlashes(cleanedString);
  }

  if (trailing) {
    cleanedString = trimTrailingSlashes(cleanedString);
  }

  if (double) {
    cleanedString = trimDoubleSlashes(cleanedString);
  }

  return cleanedString;
};

exports.cleanSlashes = cleanSlashes;

function pathJoin() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var newPath = paths.map(cleanSlashes).join('/');

  if (!newPath || newPath === '/') {
    return '/';
  }

  newPath = cleanSlashes(newPath);

  if (newPath.includes('?')) {
    newPath = newPath.substring(0, newPath.indexOf('?'));
  }

  return newPath;
} // This function is for extracting a routePath from a path or string
// RoutePaths do not have query params, basePaths, and should
// resemble the same string as passed in the static.config.js routes


function getRoutePath(routePath) {
  // Detect falsey paths and the root path
  if (!routePath || routePath === '/') {
    return '/';
  } // Remove origin, hashes, and query params


  if (typeof document !== 'undefined') {
    routePath = routePath.replace(window.location.origin, '');
    routePath = routePath.replace(/#.*/, '');
    routePath = routePath.replace(/\?.*/, '');
  } // Be sure to remove the base path


  if (false) {}

  routePath = routePath || '/';
  return pathJoin(routePath);
}

function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  }

  return arg;
}

function isObject(a) {
  return !Array.isArray(a) && _typeof(a) === 'object' && a !== null;
}

function deprecate(from, to) {
  console.warn("React-Static deprecation notice: ".concat(from, " will be deprecated in favor of ").concat(to, " in the next major release."));
}

function removal(from) {
  console.warn("React-Static removal notice: ".concat(from, " is no longer supported in this version of React-Static. Please refer to the CHANGELOG for details."));
}

function isAbsoluteUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }

  return /^[a-z][a-z0-9+.-]*:/.test(url);
}

function makePathAbsolute(path) {
  if (typeof path !== 'string') {
    return '/';
  }

  if (isAbsoluteUrl(path)) {
    return path;
  }

  return "/".concat(trimLeadingSlashes(path));
}

function makeHookReducer() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      sync = _ref.sync;

  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes a value (and opts) and
  // reduces the value through each hook, returning the
  // final value
  // compare is a function which is used to compare
  // the prev and next value and decide which to use.
  // By default, if undefined is returned from a reducer, the prev value
  // is retained

  if (sync) {
    return function (value, opts) {
      return hooks.reduce(function (prev, hook) {
        var next = hook(prev, opts);
        return typeof next !== 'undefined' ? next : prev;
      }, value);
    };
  }

  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(value, opts) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(prevPromise, hook) {
                    var prev, next;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return prevPromise;

                          case 2:
                            prev = _context.sent;
                            _context.next = 5;
                            return hook(prev, opts);

                          case 5:
                            next = _context.sent;
                            return _context.abrupt("return", typeof next !== 'undefined' ? next : prev);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref3.apply(this, arguments);
                  };
                }(), Promise.resolve(value));

              case 2:
                value = _context2.sent;
                return _context2.abrupt("return", value);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function makeHookMapper() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;
  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes options and returns
  // a flat array of values mapped from each hook

  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(opts) {
        var vals;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                vals = [];
                _context4.next = 3;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee3(prevPromise, hook) {
                    var val;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return prevPromise;

                          case 2:
                            _context3.next = 4;
                            return hook(opts);

                          case 4:
                            val = _context3.sent;
                            vals.push(val);

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x6, _x7) {
                    return _ref5.apply(this, arguments);
                  };
                }(), Promise.resolve());

              case 3:
                return _context4.abrupt("return", vals.filter(function (d) {
                  return typeof d !== 'undefined';
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function flattenHooks(plugins, hook) {
  // The flat hooks
  var hooks = []; // Adds a plugin hook to the hook list

  var addToHooks = function addToHooks(plugin) {
    // Add the hook
    hooks.push(plugin.hooks[hook]); // Recurse into sub plugins if needs be

    if (plugin.plugins) {
      plugin.plugins.forEach(addToHooks);
    }
  }; // Start with the config plugins


  plugins.forEach(addToHooks); // Filter out falsey entries

  return hooks.filter(Boolean);
}

function isSSR() {
  return typeof document === 'undefined';
}

function getBasePath() {
  return  false ? undefined : "";
}

function isPrefetchableRoute(path) {
  // when rendering static pages we dont need this et all
  if (isSSR()) {
    return false;
  } // script links
  // eslint-disable-next-line


  if (path.indexOf('javascript:') === 0) {
    return false;
  }

  var self = document.location;
  var link;

  try {
    link = new URL(path);
  } catch (e) {
    // if a path is not parsable by URL its a local relative path
    return true;
  } // if the hostname/port/proto doesnt match its not a route link


  if (self.hostname !== link.hostname || self.port !== link.port || self.protocol !== link.protocol) {
    return false;
  } // deny all files with extension other than .html


  if (link.pathname.includes('.') && !link.pathname.includes('.html')) {
    return false;
  }

  return true;
}

;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REGEX_TO_CUT_TO_ROOT, "REGEX_TO_CUT_TO_ROOT", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_LEADING_SLASH, "REGEX_TO_REMOVE_LEADING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_TRAILING_SLASH, "REGEX_TO_REMOVE_TRAILING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_DOUBLE_SLASH, "REGEX_TO_REMOVE_DOUBLE_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cutPathToRoot, "cutPathToRoot", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimLeadingSlashes, "trimLeadingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimTrailingSlashes, "trimTrailingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimDoubleSlashes, "trimDoubleSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cleanSlashes, "cleanSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(pathJoin, "pathJoin", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getRoutePath, "getRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(unwrapArray, "unwrapArray", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isObject, "isObject", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(deprecate, "deprecate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(removal, "removal", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isAbsoluteUrl, "isAbsoluteUrl", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makePathAbsolute, "makePathAbsolute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookReducer, "makeHookReducer", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookMapper, "makeHookMapper", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(flattenHooks, "flattenHooks", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isSSR, "isSSR", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getBasePath, "getBasePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isPrefetchableRoute, "isPrefetchableRoute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_brive_logo_white_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _assets_img_brive_logo_white_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_brive_logo_white_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
function _templateObject3(){var data=_taggedTemplateLiteral(["\n  height: 2rem;\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral(["\n  justify-content: space-between !important;\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral(["\n  padding: 5rem 0;\n  width: 100vw;\n  background-image: linear-gradient(-135deg, #232900 0%, #001f1b 100%);\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Footer=function Footer(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterSection,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Container"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RowExt,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"],{style:ColMargin,xs:12,sm:2},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_5__["Link"],{exact:true,to:"/"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo,{src:_assets_img_brive_logo_white_svg__WEBPACK_IMPORTED_MODULE_3___default.a}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"],{style:ColMargin,xs:12,sm:2,offset:{sm:4}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_5__["Link"],{exact:true,to:_assets_strings__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].routing.imprint},_assets_strings__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].routing.imprintText)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"],{style:ColMargin,xs:12,sm:2},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_5__["Link"],{exact:true,to:_assets_strings__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].routing.privacePolicy},_assets_strings__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].routing.privacePolicyText)))));};/* harmony default export */ __webpack_exports__["a"] = (Footer);var FooterSection=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject());var RowExt=styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"])(_templateObject2());var Logo=styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img(_templateObject3());var ColMargin={marginBottom:32,textAlign:"center"};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(28);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(59)("" + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStaticInfo = useStaticInfo;
exports.withStaticInfo = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} // eslint-disable-next-line


var context = _react.default.createContext({});

if (typeof document !== 'undefined') {
  context = _react.default.createContext(window.__routeInfo);
}

var _default = context;
var _default2 = _default;
exports.default = _default2;

var StaticInfo = function StaticInfo(_ref) {
  var children = _ref.children;
  return _react.default.createElement(context.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children);
};

var withStaticInfo = function withStaticInfo(Comp) {
  return function (props) {
    return _react.default.createElement(StaticInfo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, function (staticInfo) {
      return _react.default.createElement(Comp, _extends({}, props, {
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    });
  };
};

exports.withStaticInfo = withStaticInfo;

function useStaticInfo() {
  return _react.default.useContext(context);
}

;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(context, "context", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(StaticInfo, "StaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(withStaticInfo, "withStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(useStaticInfo, "useStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brive_logo.f89aeec1.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brive_credit_card.3ac89032.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAxNDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJMYW5kaW5ncGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkJyaXZlLUxQIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAyMS4wMDAwMDAsIC02NzA0LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIzLjAwMDAwMCwgNjcwNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzk5LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIHN0cm9rZT0iIzRBNEE0QSIgc3Ryb2tlLXdpZHRoPSIyIiBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDx0ZXh0IGlkPSIrIiBmb250LWZhbWlseT0iSUJNUGxleFNhbnMtTWVkaXVtLCBJQk0gUGxleCBTYW5zIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSIjNEE0QTRBIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9IjcuMSIgeT0iMTgiPis8L3RzcGFuPgogICAgICAgICAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/map.0b3e496f.png";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-minimal-pie-chart");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(21);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function Spinner() {
  return _react.default.createElement("div", {
    className: "react-static-loading",
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'center',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\n        @keyframes react-static-loader {\n          0% {\n            transform: rotate(0deg)\n          }\n          100% {\n            transform: rotate(360deg)\n          }\n        }\n      "), _react.default.createElement("svg", {
    style: {
      width: '50px',
      height: '50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _react.default.createElement("circle", {
    style: {
      transformOrigin: '50% 50% 0px',
      animation: 'react-static-loader 1s infinite',
      r: 20,
      stroke: 'rgba(0,0,0,0.4)',
      strokeWidth: 4,
      cx: 25,
      cy: 25,
      strokeDasharray: 10.4,
      strokeLinecap: 'round',
      fill: 'transparent'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
}

;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, "Spinner", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjY5cHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDI2OSA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkxvZ288L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjEuMTEwMjIzMDJlLTE0JSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMS4xMTAyMjMwMmUtMTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5MEE5MDAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwQjhBMyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJMb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCAxNy4wMDAwMDApIiBmaWxsPSIjNEE0QTRBIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAuOTI4MDAxMzQ3LDQwIEwwLjkyODAwMTM0NywwLjkxMjAwMDY2NiBMMTkuMDE2MDAxLDAuOTEyMDAwNjY2IEMyNS40NTYwMDA5LDAuOTEyMDAwNjY2IDI5LjM3NjAwMDksNC44ODgwMDA2IDI5LjM3NjAwMDksMTAuOTM2MDAwNSBDMjkuMzc2MDAwOSwxNi44NzIwMDA0IDI1Ljk2MDAwMDksMTkuMTEyMDAwNCAyMi4zNzYwMDEsMTkuMzM2MDAwNCBMMjIuMzc2MDAxLDE5LjY3MjAwMDMgQzI1Ljc5MjAwMDksMTkuNzI4MDAwMyAzMC44MzIwMDA4LDIyLjEzNjAwMDMgMzAuODMyMDAwOCwyOC44MDAwMDAyIEMzMC44MzIwMDA4LDM1LjA3MjAwMDEgMjYuNTIwMDAwOSw0MCAyMC43NTIwMDEsNDAgTDAuOTI4MDAxMzQ3LDQwIFogTTguMzIwMDAxMjIsMjMuMjU2MDAwMyBMOC4zMjAwMDEyMiwzMy43MjgwMDAxIEwxOC42MjQwMDEsMzMuNzI4MDAwMSBDMjEuNDI0MDAxLDMzLjcyODAwMDEgMjMuMTA0MDAxLDMyLjIxNjAwMDEgMjMuMTA0MDAxLDI5LjQ3MjAwMDIgTDIzLjEwNDAwMSwyNy41NjgwMDAyIEMyMy4xMDQwMDEsMjQuODI0MDAwMyAyMS40MjQwMDEsMjMuMjU2MDAwMyAxOC42MjQwMDEsMjMuMjU2MDAwMyBMOC4zMjAwMDEyMiwyMy4yNTYwMDAzIFogTTguMzIwMDAxMjIsNy4xODQwMDA1NiBMOC4zMjAwMDEyMiwxNy4yMDgwMDA0IEwxNy40NDgwMDExLDE3LjIwODAwMDQgQzIwLjEzNjAwMSwxNy4yMDgwMDA0IDIxLjcwNDAwMSwxNS42NDAwMDA0IDIxLjcwNDAwMSwxMy4wNjQwMDA1IEwyMS43MDQwMDEsMTEuMzI4MDAwNSBDMjEuNzA0MDAxLDguNjk2MDAwNTMgMjAuMTM2MDAxLDcuMTg0MDAwNTYgMTcuNDQ4MDAxMSw3LjE4NDAwMDU2IEw4LjMyMDAwMTIyLDcuMTg0MDAwNTYgWiBNNDUuNDQ4MDAwNiwyNC45MzYwMDAzIEw0NS40NDgwMDA2LDQwIEwzOC4wNTYwMDA3LDQwIEwzOC4wNTYwMDA3LDAuOTEyMDAwNjY2IEw1NS42OTYwMDA0LDAuOTEyMDAwNjY2IEM2Mi44MDgwMDAzLDAuOTEyMDAwNjY2IDY3LjIzMjAwMDIsNS42MTYwMDA1OSA2Ny4yMzIwMDAyLDEzLjAwODAwMDUgQzY3LjIzMjAwMDIsMTguMzg0MDAwNCA2NC43NjgwMDAzLDIyLjQ3MjAwMDMgNTkuOTUyMDAwMywyNC4wOTYwMDAzIEw2Ny45NjAwMDAyLDQwIEw1OS43MjgwMDAzLDQwIEw1Mi40NDgwMDA1LDI0LjkzNjAwMDMgTDQ1LjQ0ODAwMDYsMjQuOTM2MDAwMyBaIE00NS40NDgwMDA2LDE4LjcyMDAwMDQgTDU0Ljk2ODAwMDQsMTguNzIwMDAwNCBDNTcuODI0MDAwNCwxOC43MjAwMDA0IDU5LjU2MDAwMDMsMTcuMTUyMDAwNCA1OS41NjAwMDAzLDE0LjI5NjAwMDQgTDU5LjU2MDAwMDMsMTEuNzIwMDAwNSBDNTkuNTYwMDAwMyw4Ljg2NDAwMDUzIDU3LjgyNDAwMDQsNy4zNTIwMDA1NiA1NC45NjgwMDA0LDcuMzUyMDAwNTYgTDQ1LjQ0ODAwMDYsNy4zNTIwMDA1NiBMNDUuNDQ4MDAwNiwxOC43MjAwMDA0IFogTTkxLjM2Nzk5OTgsNDAgTDczLjYxNjAwMDEsNDAgTDczLjYxNjAwMDEsMzQuMDY0MDAwMSBMNzguNzY4LDM0LjA2NDAwMDEgTDc4Ljc2OCw2Ljg0ODAwMDU2IEw3My42MTYwMDAxLDYuODQ4MDAwNTYgTDczLjYxNjAwMDEsMC45MTIwMDA2NjYgTDkxLjM2Nzk5OTgsMC45MTIwMDA2NjYgTDkxLjM2Nzk5OTgsNi44NDgwMDA1NiBMODYuMTU5OTk5OSw2Ljg0ODAwMDU2IEw4Ni4xNTk5OTk5LDM0LjA2NDAwMDEgTDkxLjM2Nzk5OTgsMzQuMDY0MDAwMSBMOTEuMzY3OTk5OCw0MCBaIE0xMTYuMzk5OTk5LDQwIEwxMDgsNDAgTDk1LjIzMTk5OTcsMC45MTIwMDA2NjYgTDEwMi43OTIsMC45MTIwMDA2NjYgTDEwOC43ODQsMTkuOTUyMDAwMyBMMTEyLjI1NTk5OSwzMi45NDQwMDAxIEwxMTIuNDIzOTk5LDMyLjk0NDAwMDEgTDExNS44Mzk5OTksMTkuOTUyMDAwMyBMMTIxLjgzMTk5OSwwLjkxMjAwMDY2NiBMMTI5LjE2Nzk5OSwwLjkxMjAwMDY2NiBMMTE2LjM5OTk5OSw0MCBaIE0xNjAuNDE1OTk5LDQwIEwxMzQuNjU1OTk5LDQwIEwxMzQuNjU1OTk5LDAuOTEyMDAwNjY2IEwxNjAuNDE1OTk5LDAuOTEyMDAwNjY2IEwxNjAuNDE1OTk5LDcuNDY0MDAwNTUgTDE0Mi4wNDc5OTksNy40NjQwMDA1NSBMMTQyLjA0Nzk5OSwxNi42NDgwMDA0IEwxNTguMjg3OTk5LDE2LjY0ODAwMDQgTDE1OC4yODc5OTksMjMuMjAwMDAwMyBMMTQyLjA0Nzk5OSwyMy4yMDAwMDAzIEwxNDIuMDQ3OTk5LDMzLjQ0ODAwMDEgTDE2MC40MTU5OTksMzMuNDQ4MDAwMSBMMTYwLjQxNTk5OSw0MCBaIiBpZD0iQlJJVkUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkFydGJvYXJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAuMDAwMDAwLCAyLjAwMDAwMCkiPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iVHJpYW5nbGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0LjUwMDAwMCwgMzQuNTAwMDAwKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTM0LjUwMDAwMCwgLTM0LjUwMDAwMCkgIiBwb2ludHM9IjM0LjUgMCA2OSA2OSAzNC41IDUzIC02LjEyODQzMTFlLTE0IDY5Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZSIgZmlsbC1vcGFjaXR5PSIwLjMiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzLjAzODQ4NywgNTEuNzUwMDAwKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTIzLjAzODQ4NywgLTUxLjc1MDAwMCkgIiBwb2ludHM9IjE3LjI1IDI4LjcxMTUxMzMgNDAuMjg4NDg2NyA3NC43ODg0ODY3IDUuNzg4NDg2NjggNTguNzg4NDg2NyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iVHJpYW5nbGUiIGZpbGwtb3BhY2l0eT0iMC4xIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy4wMDAwMDAsIDE3LjI1MDAwMCkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0yMy4wMDAwMDAsIC0xNy4yNTAwMDApICIgcG9pbnRzPSIyOC43NSAtNS43NSA0MC4yNSAyNC4yNSA1Ljc1IDQwLjI1Ij48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brive_app_iphone.5842cf83.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brive_app_iphone_2.7f20ac5c.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brive_app_iphone_3.173b3297.png";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjY5cHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDI2OSA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkxvZ29fMl9XaGl0ZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJMb2dvXzJfV2hpdGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wMDAwMDAsIDE3LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMC45MjgwMDEzNDcsNDAgTDAuOTI4MDAxMzQ3LDAuOTEyMDAwNjY2IEwxOS4wMTYwMDEsMC45MTIwMDA2NjYgQzI1LjQ1NjAwMDksMC45MTIwMDA2NjYgMjkuMzc2MDAwOSw0Ljg4ODAwMDYgMjkuMzc2MDAwOSwxMC45MzYwMDA1IEMyOS4zNzYwMDA5LDE2Ljg3MjAwMDQgMjUuOTYwMDAwOSwxOS4xMTIwMDA0IDIyLjM3NjAwMSwxOS4zMzYwMDA0IEwyMi4zNzYwMDEsMTkuNjcyMDAwMyBDMjUuNzkyMDAwOSwxOS43MjgwMDAzIDMwLjgzMjAwMDgsMjIuMTM2MDAwMyAzMC44MzIwMDA4LDI4LjgwMDAwMDIgQzMwLjgzMjAwMDgsMzUuMDcyMDAwMSAyNi41MjAwMDA5LDQwIDIwLjc1MjAwMSw0MCBMMC45MjgwMDEzNDcsNDAgWiBNOC4zMjAwMDEyMiwyMy4yNTYwMDAzIEw4LjMyMDAwMTIyLDMzLjcyODAwMDEgTDE4LjYyNDAwMSwzMy43MjgwMDAxIEMyMS40MjQwMDEsMzMuNzI4MDAwMSAyMy4xMDQwMDEsMzIuMjE2MDAwMSAyMy4xMDQwMDEsMjkuNDcyMDAwMiBMMjMuMTA0MDAxLDI3LjU2ODAwMDIgQzIzLjEwNDAwMSwyNC44MjQwMDAzIDIxLjQyNDAwMSwyMy4yNTYwMDAzIDE4LjYyNDAwMSwyMy4yNTYwMDAzIEw4LjMyMDAwMTIyLDIzLjI1NjAwMDMgWiBNOC4zMjAwMDEyMiw3LjE4NDAwMDU2IEw4LjMyMDAwMTIyLDE3LjIwODAwMDQgTDE3LjQ0ODAwMTEsMTcuMjA4MDAwNCBDMjAuMTM2MDAxLDE3LjIwODAwMDQgMjEuNzA0MDAxLDE1LjY0MDAwMDQgMjEuNzA0MDAxLDEzLjA2NDAwMDUgTDIxLjcwNDAwMSwxMS4zMjgwMDA1IEMyMS43MDQwMDEsOC42OTYwMDA1MyAyMC4xMzYwMDEsNy4xODQwMDA1NiAxNy40NDgwMDExLDcuMTg0MDAwNTYgTDguMzIwMDAxMjIsNy4xODQwMDA1NiBaIE00NS40NDgwMDA2LDI0LjkzNjAwMDMgTDQ1LjQ0ODAwMDYsNDAgTDM4LjA1NjAwMDcsNDAgTDM4LjA1NjAwMDcsMC45MTIwMDA2NjYgTDU1LjY5NjAwMDQsMC45MTIwMDA2NjYgQzYyLjgwODAwMDMsMC45MTIwMDA2NjYgNjcuMjMyMDAwMiw1LjYxNjAwMDU5IDY3LjIzMjAwMDIsMTMuMDA4MDAwNSBDNjcuMjMyMDAwMiwxOC4zODQwMDA0IDY0Ljc2ODAwMDMsMjIuNDcyMDAwMyA1OS45NTIwMDAzLDI0LjA5NjAwMDMgTDY3Ljk2MDAwMDIsNDAgTDU5LjcyODAwMDMsNDAgTDUyLjQ0ODAwMDUsMjQuOTM2MDAwMyBMNDUuNDQ4MDAwNiwyNC45MzYwMDAzIFogTTQ1LjQ0ODAwMDYsMTguNzIwMDAwNCBMNTQuOTY4MDAwNCwxOC43MjAwMDA0IEM1Ny44MjQwMDA0LDE4LjcyMDAwMDQgNTkuNTYwMDAwMywxNy4xNTIwMDA0IDU5LjU2MDAwMDMsMTQuMjk2MDAwNCBMNTkuNTYwMDAwMywxMS43MjAwMDA1IEM1OS41NjAwMDAzLDguODY0MDAwNTMgNTcuODI0MDAwNCw3LjM1MjAwMDU2IDU0Ljk2ODAwMDQsNy4zNTIwMDA1NiBMNDUuNDQ4MDAwNiw3LjM1MjAwMDU2IEw0NS40NDgwMDA2LDE4LjcyMDAwMDQgWiBNOTEuMzY3OTk5OCw0MCBMNzMuNjE2MDAwMSw0MCBMNzMuNjE2MDAwMSwzNC4wNjQwMDAxIEw3OC43NjgsMzQuMDY0MDAwMSBMNzguNzY4LDYuODQ4MDAwNTYgTDczLjYxNjAwMDEsNi44NDgwMDA1NiBMNzMuNjE2MDAwMSwwLjkxMjAwMDY2NiBMOTEuMzY3OTk5OCwwLjkxMjAwMDY2NiBMOTEuMzY3OTk5OCw2Ljg0ODAwMDU2IEw4Ni4xNTk5OTk5LDYuODQ4MDAwNTYgTDg2LjE1OTk5OTksMzQuMDY0MDAwMSBMOTEuMzY3OTk5OCwzNC4wNjQwMDAxIEw5MS4zNjc5OTk4LDQwIFogTTExNi4zOTk5OTksNDAgTDEwOCw0MCBMOTUuMjMxOTk5NywwLjkxMjAwMDY2NiBMMTAyLjc5MiwwLjkxMjAwMDY2NiBMMTA4Ljc4NCwxOS45NTIwMDAzIEwxMTIuMjU1OTk5LDMyLjk0NDAwMDEgTDExMi40MjM5OTksMzIuOTQ0MDAwMSBMMTE1LjgzOTk5OSwxOS45NTIwMDAzIEwxMjEuODMxOTk5LDAuOTEyMDAwNjY2IEwxMjkuMTY3OTk5LDAuOTEyMDAwNjY2IEwxMTYuMzk5OTk5LDQwIFogTTE2MC40MTU5OTksNDAgTDEzNC42NTU5OTksNDAgTDEzNC42NTU5OTksMC45MTIwMDA2NjYgTDE2MC40MTU5OTksMC45MTIwMDA2NjYgTDE2MC40MTU5OTksNy40NjQwMDA1NSBMMTQyLjA0Nzk5OSw3LjQ2NDAwMDU1IEwxNDIuMDQ3OTk5LDE2LjY0ODAwMDQgTDE1OC4yODc5OTksMTYuNjQ4MDAwNCBMMTU4LjI4Nzk5OSwyMy4yMDAwMDAzIEwxNDIuMDQ3OTk5LDIzLjIwMDAwMDMgTDE0Mi4wNDc5OTksMzMuNDQ4MDAwMSBMMTYwLjQxNTk5OSwzMy40NDgwMDAxIEwxNjAuNDE1OTk5LDQwIFoiIGlkPSJCUklWRSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwMC4wMDAwMDAsIDIuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZSIgZmlsbC1vcGFjaXR5PSIwLjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0LjUwMDAwMCwgMzQuNTAwMDAwKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTM0LjUwMDAwMCwgLTM0LjUwMDAwMCkgIiBwb2ludHM9IjM0LjUgMCA2OSA2OSAzNC41IDUzIC02LjEyODQzMTFlLTE0IDY5Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZSIgb3BhY2l0eT0iMC43IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy4wMzg0ODcsIDUxLjc1MDAwMCkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0yMy4wMzg0ODcsIC01MS43NTAwMDApICIgcG9pbnRzPSIxNy4yNSAyOC43MTE1MTMzIDQwLjI4ODQ4NjcgNzQuNzg4NDg2NyA1Ljc4ODQ4NjY4IDU4Ljc4ODQ4NjciPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlRyaWFuZ2xlIiBmaWxsLW9wYWNpdHk9IjAuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuMDAwMDAwLCAxNy4yNTAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjMuMDAwMDAwLCAtMTcuMjUwMDAwKSAiIHBvaW50cz0iMjguNzUgLTUuNzUgNDAuMjUgMjQuMjUgNS43NSA0MC4yNSI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins=[{location:"/Users/Daniel/Daniel/BRIVE/brive-lp",plugins:[],hooks:{}}];// Export em!
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onVisible;

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

if (typeof document !== 'undefined') {
  // Polyfill that shiz!
  __webpack_require__(56); // Do manual polling for intersections every second. This isn't very fast
  // but should handle most edge cases for now


  IntersectionObserver.POLL_INTERVAL = 1000;
}

var list = new Map();

function onVisible(element, callback) {
  if (list.get(element)) {
    return;
  }

  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Edge doesn't support isIntersecting. intersectionRatio > 0 works as a fallback
      if (element === entry.target && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        io.unobserve(element);
        io.disconnect();
        callback();
      }
    });
  });
  io.observe(element);
  list.set(element, true);
}

;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(list, "list", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  reactHotLoader.register(onVisible, "onVisible", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_Daniel_Daniel_BRIVE_brive_lp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _Users_Daniel_Daniel_BRIVE_brive_lp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_Daniel_Daniel_BRIVE_brive_lp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__);
Object(_Users_Daniel_Daniel_BRIVE_brive_lp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__["setHasBabelPlugin"])();var universalOptions={loading:function loading(){return null;},error:function error(props){console.error(props.error);return React.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.");}};var t_0=_Users_Daniel_Daniel_BRIVE_brive_lp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/404.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-404 */).then(__webpack_require__.bind(null, 45))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/404.js');},resolve:function resolve(){return /*require.resolve*/(45);},chunkName:function chunkName(){return"src-pages-404";}}),universalOptions);var t_1=_Users_Daniel_Daniel_BRIVE_brive_lp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/About.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-About */).then(__webpack_require__.bind(null, 46))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/About.js');},resolve:function resolve(){return /*require.resolve*/(46);},chunkName:function chunkName(){return"src-pages-About";}}),universalOptions);var t_2=_Users_Daniel_Daniel_BRIVE_brive_lp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/Blog.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-Blog */).then(__webpack_require__.bind(null, 47))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/Blog.js');},resolve:function resolve(){return /*require.resolve*/(47);},chunkName:function chunkName(){return"src-pages-Blog";}}),universalOptions);var t_3=_Users_Daniel_Daniel_BRIVE_brive_lp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/index.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-index */).then(__webpack_require__.bind(null, 52))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/index.js');},resolve:function resolve(){return /*require.resolve*/(52);},chunkName:function chunkName(){return"src-pages-index";}}),universalOptions);var t_4=_Users_Daniel_Daniel_BRIVE_brive_lp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/Imprint_GER",load:function load(){return Promise.all([Promise.resolve(/* import() | src-containers-Imprint_GER */).then(__webpack_require__.bind(null, 49))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/Imprint_GER');},resolve:function resolve(){return /*require.resolve*/(49);},chunkName:function chunkName(){return"src-containers-Imprint_GER";}}),universalOptions);var t_5=_Users_Daniel_Daniel_BRIVE_brive_lp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/PrivacyPolicy_GER",load:function load(){return Promise.all([Promise.resolve(/* import() | src-containers-PrivacyPolicy_GER */).then(__webpack_require__.bind(null, 50))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/PrivacyPolicy_GER');},resolve:function resolve(){return /*require.resolve*/(50);},chunkName:function chunkName(){return"src-containers-PrivacyPolicy_GER";}}),universalOptions);// Template Map
/* harmony default export */ __webpack_exports__["default"] = ([t_0,t_1,t_2,t_3,t_4,t_5]);
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _raf = _interopRequireDefault(__webpack_require__(42));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //


var ease = function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

var defaultOptions = {
  duration: 800,
  offset: 0,
  context: typeof document !== 'undefined' && window
};

var getTop = function getTop(element, offset, contextScrollHeight, contextVisibleHeight) {
  return Math.min(element.getBoundingClientRect().top + window.pageYOffset + offset, contextScrollHeight - contextVisibleHeight);
};

var getPosition = function getPosition(start, end, elapsed, duration, easeFn) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeFn(elapsed / duration);
};

function scrollTo(element, options) {
  var _defaultOptions$optio = _objectSpread({}, defaultOptions, options),
      duration = _defaultOptions$optio.duration,
      offset = _defaultOptions$optio.offset,
      context = _defaultOptions$optio.context;

  var start = window.pageYOffset;
  var innerHeight;
  var scrollHeight;

  if (context !== window) {
    innerHeight = context.offsetHeight;
    scrollHeight = context.scrollHeight;
  } else {
    innerHeight = window.innerHeight;
    scrollHeight = document.body.scrollHeight;
  }

  var clock = Date.now() - 1;
  return new Promise(function (resolve) {
    var step = function step() {
      var elapsed = Date.now() - clock;
      var end = typeof element === 'number' ? parseInt(element) : getTop(element, offset, scrollHeight, innerHeight);

      if (context !== window) {
        context.scrollTop = getPosition(start, end, elapsed, duration, ease);
      } else {
        window.scroll(0, getPosition(start, end, elapsed, duration, ease));
      }

      if (typeof duration === 'undefined' || elapsed > duration) {
        resolve();
        return;
      } // Sanity check to prevent taking over the scroll once we prematurely got to the element


      if (start === end) {
        resolve();
        return;
      }

      (0, _raf.default)(step);
    };

    step();
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ease, "ease", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(defaultOptions, "defaultOptions", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getTop, "getTop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getPosition, "getPosition", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(scrollTo, "scrollTo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("raf");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withRoutePathContext = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(16));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _ = __webpack_require__(15);

var _StaticInfo = __webpack_require__(22);

var _utils = __webpack_require__(17);

var _Location = _interopRequireDefault(__webpack_require__(44));

var _Spinner = _interopRequireDefault(__webpack_require__(29));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js",
    _class,
    _temp;

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var RoutePathContext = _react.default.createContext();

var withRoutePathContext = function withRoutePathContext(Comp) {
  return function (props) {
    return _react.default.createElement(RoutePathContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, function (routePath) {
      return _react.default.createElement(Comp, _extends({}, props, {
        routePath: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    });
  };
};

exports.withRoutePathContext = withRoutePathContext;

var _default = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Routes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Routes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(Routes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _.templateUpdated.cb = function () {
        return _this2.safeForceUpdate();
      };

      this.offLocationChange = (0, _Location.default)(function () {
        return _this2.safeForceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
      if (this.offLocationChange) this.offLocationChange();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader,
          staticInfo = _this$props.staticInfo;
      var routePath = (0, _utils.isSSR)() ? staticInfo.path : (0, _.getCurrentRoutePath)();

      var getComponentForPath = function getComponentForPath(routePath) {
        // Clean the path
        routePath = (0, _utils.getRoutePath)(routePath); // Try and get the component

        var Comp = _.templatesByPath[routePath]; // Detect a 404

        var is404 = routePath === '404'; // Detect a failed template

        if (_.templateErrorByPath[routePath]) {
          is404 = true;
          Comp = _.templatesByPath['404'];
        } // Detect an unloaded template
        // TODO:suspense - This will become a suspense resource


        if (!Comp) {
          if (is404) {
            throw new Error('This page template could not be found and a 404 template could not be found to fall back on. This means something is terribly wrong and you should probably file an issue!');
          }

          ;

          _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee() {
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Promise.all([(0, _.prefetch)(routePath, {
                      priority: true
                    }), new Promise(function (resolve) {
                      return setTimeout(resolve, "200");
                    })]);

                  case 2:
                    _this3.safeForceUpdate();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }))();

          return Loader;
        }

        return function () {
          var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Comp ? _react.default.createElement(Comp, _extends({}, newProps, is404 ? {
            is404: true
          } : {}, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          })) : null;
        };
      };

      var Comp = getComponentForPath(routePath);
      return _react.default.createElement(RoutePathContext.Provider, {
        value: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, children ? children({
        routePath: routePath,
        getComponentForPath: getComponentForPath
      }) : _react.default.createElement(Comp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Routes;
}(_react.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RoutePathContext, "RoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(withRoutePathContext, "withRoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

var locationSubscribers = [];

var triggerLocationChange = function triggerLocationChange(location) {
  return locationSubscribers.forEach(function (s) {
    return s(location);
  });
};

var onLocationChange = function onLocationChange(cb) {
  locationSubscribers.push(cb);
  return function () {
    locationSubscribers = locationSubscribers.filter(function (d) {
      return d !== cb;
    });
  };
};

init();
var _default = onLocationChange;
var _default2 = _default;
exports.default = _default2;

function init() {
  if (typeof document !== 'undefined') {
    var oldPopstate = window.onpopstate;

    window.onpopstate = function () {
      if (oldPopstate) {
        oldPopstate.apply(void 0, arguments);
      }

      triggerLocationChange(window.location);
    };

    ['pushState', 'replaceState'].forEach(function (methodName) {
      var old = window.history[methodName];

      window.history[methodName] = function () {
        setTimeout(function () {
          return triggerLocationChange(window.location);
        }, 0);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return old.apply(window.history, args);
      };
    });
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(locationSubscribers, "locationSubscribers", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(triggerLocationChange, "triggerLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(onLocationChange, "onLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"404"));});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preloadMyComponent", function() { return preloadMyComponent; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);
var Failed=function Failed(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{color:"red"}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1",null,"Failed to load the heavy component!"));};var Loading=function Loading(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{color:"yellow"}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1",null,"Loading this heavy component..."));};var MyComponent=react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../components/MyComponent",load:function load(){return Promise.all([Promise.resolve(/* import() | components-MyComponent */).then(__webpack_require__.bind(null, 51))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,"../components/MyComponent");},resolve:function resolve(){return /*require.resolve*/(51);},chunkName:function chunkName(){return"components-MyComponent";}}),{loading:Loading,error:Failed});var preloadMyComponent=function preloadMyComponent(){return MyComponent.preload();};/* harmony default export */ __webpack_exports__["default"] = (function(props){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MyComponent,props);});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
//
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function(_ref){var posts=_ref.posts;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"It's blog time."));}));

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Logo.svg": 73,
	"./berlin.png": 74,
	"./berliner_startup_stipendium.png": 75,
	"./brive_app_iphone.png": 31,
	"./brive_app_iphone_2.png": 32,
	"./brive_app_iphone_2.svg": 76,
	"./brive_app_iphone_3.png": 33,
	"./brive_credit_card.svg": 24,
	"./brive_logo.png": 23,
	"./brive_logo.svg": 30,
	"./brive_logo_white.svg": 34,
	"./camera.svg": 77,
	"./efre.png": 78,
	"./europaeische_union_sozialfonds.png": 79,
	"./heart.svg": 80,
	"./map.png": 26,
	"./open_question.svg": 25,
	"./plus.svg": 81,
	"./project_together.png": 82,
	"./zu.png": 83
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 48;

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Imprint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _sections_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _assets_primitives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_5__);
function _templateObject(){var data=_taggedTemplateLiteral(["\n  padding: 3rem 0;\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var Imprint=/*#__PURE__*/function(_Component){_inherits(Imprint,_Component);function Imprint(props){var _this;_classCallCheck(this,Imprint);_this=_possibleConstructorReturn(this,_getPrototypeOf(Imprint).call(this,props));_this.contactRef=react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();return _this;}_createClass(Imprint,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerExt,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Row"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Col"],{xs:12},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Title1 */ "i"],null,"Impressum"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Angaben gem\xE4\xDF \xA7 5 TMG",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Roman Safronov",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Rheinsberger Str. 76/77",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"10115 Berlin",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Vertreten durch:",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Roman Safronov",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Kontakt:",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Telefon: +49152-04267406",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"E-Mail: info@brive.io"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Haftungsausschluss: ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Haftung f\xFCr Inhalte ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Die Inhalte unserer Seiten wurden mit gr\xF6\xDFter Sorgfalt erstellt. F\xFCr die Richtigkeit, Vollst\xE4ndigkeit und Aktualit\xE4t der Inhalte k\xF6nnen wir jedoch keine Gew\xE4hr \xFCbernehmen. Als Diensteanbieter sind wir gem\xE4\xDF \xA7 7 Abs.1 TMG f\xFCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \xA7\xA7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \xFCbermittelte oder gespeicherte fremde Informationen zu \xFCberwachen oder nach Umst\xE4nden zu forschen, die auf eine rechtswidrige T\xE4tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\xFChrt. Eine diesbez\xFCgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\xF6glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Haftung f\xFCr Links",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Unser Angebot enth\xE4lt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\xF6nnen wir f\xFCr diese fremden Inhalte auch keine Gew\xE4hr \xFCbernehmen. F\xFCr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\xF6gliche Rechtsverst\xF6\xDFe \xFCberpr\xFCft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Urheberrecht",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\xE4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\xDFerhalb der Grenzen des Urheberrechtes bed\xFCrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f\xFCr den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Website Impressum von impressum-generator.de")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_Footer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],null));}}]);return Imprint;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);var ContainerExt=styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"])(_templateObject());

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Datenschutz; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _sections_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _assets_primitives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_5__);
function _templateObject(){var data=_taggedTemplateLiteral(["\n  padding: 3rem 0;\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var Datenschutz=/*#__PURE__*/function(_Component){_inherits(Datenschutz,_Component);function Datenschutz(props){var _this;_classCallCheck(this,Datenschutz);_this=_possibleConstructorReturn(this,_getPrototypeOf(Datenschutz).call(this,props));_this.contactRef=react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();return _this;}_createClass(Datenschutz,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerExt,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Row"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Col"],{xs:12},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Title1 */ "i"],null,"Datenschutzerkl\xE4rung"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Personenbezogene Daten (nachfolgend zumeist nur \u201EDaten\u201C genannt) werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsf\xE4higen und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet. Gem\xE4\xDF Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung (nachfolgend nur \u201EDSGVO\u201C genannt), gilt als \u201EVerarbeitung\u201C jeder mit oder ohne Hilfe automatisierter Verfahren ausgef\xFChrter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Ver\xE4nderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch \xDCbermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verkn\xFCpfung, die Einschr\xE4nkung, das L\xF6schen oder die Vernichtung."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Mit der nachfolgenden Datenschutzerkl\xE4rung informieren wir Sie insbesondere \xFCber Art, Umfang, Zweck, Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir entweder allein oder gemeinsam mit anderen \xFCber die Zwecke und Mittel der Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend \xFCber die von uns zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualit\xE4t eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum eigener Verantwortung verarbeiten. Unsere Datenschutzerkl\xE4rung ist wie folgt gegliedert:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"I. Informationen \xFCber uns als Verantwortliche"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"II. Rechte der Nutzer und Betroffenen"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"III. Informationen zur Datenverarbeitung"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Title3 */ "k"],null,"I. Informationen \xFCber uns als Verantwortliche"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Roman Safronov",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Rheinsberger Str. 76/77",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"10115 Berlin",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Deutschland",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Telefon: +4915204267406",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"E-Mail: info@brive.io"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Title3 */ "k"],null,"II. Rechte der Nutzer und Betroffenen"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Mit Blick auf die nachfolgend noch n\xE4her beschriebene Datenverarbeitung haben die Nutzer und Betroffenen das Recht",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"auf Best\xE4tigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft \xFCber die verarbeiteten Daten, auf weitere Informationen \xFCber die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"auf Berichtigung oder Vervollst\xE4ndigung unrichtiger bzw. unvollst\xE4ndiger Daten (vgl. auch Art. 16 DSGVO);"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"auf unverz\xFCgliche L\xF6schung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gem\xE4\xDF Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschr\xE4nkung der Verarbeitung nach Ma\xDFgabe von Art. 18 DSGVO;"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf \xDCbermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"auf Beschwerde gegen\xFCber der Aufsichtsbeh\xF6rde, sofern sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter unter Versto\xDF gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO)."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Dar\xFCber hinaus ist der Anbieter dazu verpflichtet, alle Empf\xE4nger, denen gegen\xFCber Daten durch den Anbieter offengelegt worden sind, \xFCber jedwede Berichtigung oder L\xF6schung von Daten oder die Einschr\xE4nkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese Mitteilung unm\xF6glich oder mit einem unverh\xE4ltnism\xE4\xDFigen Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft \xFCber diese Empf\xE4nger."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch gegen die k\xFCnftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den Anbieter nach Ma\xDFgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Title3 */ "k"],null,"III. Informationen zur Datenverarbeitung"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gel\xF6scht oder gesperrt, sobald der Zweck der Speicherung entf\xE4llt, der L\xF6schung der Daten keine gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht werden."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Title4 */ "l"],null,"Serverdaten"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Aus technischen Gr\xFCnden, insbesondere zur Gew\xE4hrleistung eines sicheren und stabilen Internetauftritts, werden Daten durch Ihren Internet-Browser an uns bzw. an unseren Webspace-Provider \xFCbermittelt. Mit diesen sog. Server-Logfiles werden u.a. Typ und Version Ihres Internetbrowsers, das Betriebssystem, die Website, von der aus Sie auf unseren Internetauftritt gewechselt haben (Referrer URL), die Website(s) unseres Internetauftritts, die Sie besuchen, Datum und Uhrzeit des jeweiligen Zugriffs sowie die IP-Adresse des Internetanschlusses, von dem aus die Nutzung unseres Internetauftritts erfolgt, erhoben."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Diese so erhobenen Daten werden vorr\xFCbergehend gespeichert, dies jedoch nicht gemeinsam mit anderen Daten von Ihnen. Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung, Stabilit\xE4t, Funktionalit\xE4t und Sicherheit unseres Internetauftritts. Die Daten werden sp\xE4testens nach sieben Tage wieder gel\xF6scht, soweit keine weitere Aufbewahrung zu Beweiszwecken erforderlich ist. Andernfalls sind die Daten bis zur endg\xFCltigen Kl\xE4rung eines Vorfalls ganz oder teilweise von der L\xF6schung ausgenommen."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Title4 */ "l"],null,"Cookies"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"a) Sitzungs-Cookies/Session-Cookies"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind kleine Textdateien oder andere Speichertechnologien, die durch den von Ihnen eingesetzten Internet-Browser auf Ihrem Endger\xE4t ablegt und gespeichert werden. Durch diese Cookies werden im individuellen Umfang bestimmte Informationen von Ihnen, wie beispielsweise Ihre Browser- oder Standortdaten oder Ihre IP-Adresse, verarbeitet. Durch diese Verarbeitung wird unser Internetauftritt benutzerfreundlicher, effektiver und sicherer, da die Verarbeitung bspw. die Wiedergabe unseres Internetauftritts in unterschiedlichen Sprachen oder das Angebot einer Warenkorbfunktion erm\xF6glicht. Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO, sofern diese Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung verarbeitet werden. Falls die Verarbeitung nicht der Vertragsanbahnung oder Vertragsabwicklung dient, liegt unser berechtigtes Interesse in der Verbesserung der Funktionalit\xE4t unseres Internetauftritts. Rechtsgrundlage ist in dann Art. 6 Abs. 1 lit. f) DSGVO. Mit Schlie\xDFen Ihres Internet-Browsers werden diese Session-Cookies gel\xF6scht."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"b) Drittanbieter-Cookies"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse oder der Funktionalit\xE4ten unseres Internetauftritts zusammenarbeiten, verwendet. Die Einzelheiten hierzu, insbesondere zu den Zwecken und den Rechtsgrundlagen der Verarbeitung solcher Drittanbieter-Cookies, entnehmen Sie bitte den nachfolgenden Informationen."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"c) Beseitigungsm\xF6glichkeit"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Sie k\xF6nnen die Installation der Cookies durch eine Einstellung Ihres Internet-Browsers verhindern oder einschr\xE4nken. Ebenfalls k\xF6nnen Sie bereits gespeicherte Cookies jederzeit l\xF6schen. Die hierf\xFCr erforderlichen Schritte und Ma\xDFnahmen h\xE4ngen jedoch von Ihrem konkret genutzten Internet-Browser ab. Bei Fragen benutzen Sie daher bitte die Hilfefunktion oder Dokumentation Ihres Internet-Browsers oder wenden sich an dessen Hersteller bzw. Support. Bei sog. Flash-Cookies kann die Verarbeitung allerdings nicht \xFCber die Einstellungen des Browsers unterbunden werden. Stattdessen m\xFCssen Sie insoweit die Einstellung Ihres Flash-Players \xE4ndern. Auch die hierf\xFCr erforderlichen Schritte und Ma\xDFnahmen h\xE4ngen von Ihrem konkret genutzten Flash-Player ab. Bei Fragen benutzen Sie daher bitte ebenso die Hilfefunktion oder Dokumentation Ihres Flash-Players oder wenden sich an den Hersteller bzw. Benutzer-Support. Sollten Sie die Installation der Cookies verhindern oder einschr\xE4nken, kann dies allerdings dazu f\xFChren, dass nicht s\xE4mtliche Funktionen unseres Internetauftritts vollumf\xE4nglich nutzbar sind. Kontaktanfragen / Kontaktm\xF6glichkeit Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und Beantwortung Ihre Anfrage erforderlich - ohne deren Bereitstellung k\xF6nnen wir Ihre Anfrage nicht oder allenfalls eingeschr\xE4nkt beantworten. Rechtsgrundlage f\xFCr diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO. Ihre Daten werden gel\xF6scht, sofern Ihre Anfrage abschlie\xDFend beantwortet worden ist und der L\xF6schung keine gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw. bei einer sich etwaig anschlie\xDFenden Vertragsabwicklung."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Google Analytics"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"In unserem Internetauftritt setzen wir Google Analytics ein. Hierbei handelt es sich um einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend nur \u201EGoogle\u201C genannt.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Durch die Zertifizierung nach dem EU-US-Datenschutzschild (\u201EEU-US Privacy Shield\u201C)"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"garantiert Google, dass die Datenschutzvorgaben der EU auch bei der Verarbeitung von Daten in den USA eingehalten werden. Der Dienst Google Analytics dient zur Analyse des Nutzungsverhaltens unseres Internetauftritts. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Analyse, Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts. Nutzungs- und nutzerbezogene Informationen, wie bspw. IP-Adresse, Ort, Zeit oder H\xE4ufigkeit des Besuchs unseres Internetauftritts, werden dabei an einen Server von Google in den USA \xFCbertragen und dort gespeichert. Allerdings nutzen wir Google Analytics mit der sog. Anonymisierungsfunktion. Durch diese Funktion k\xFCrzt Google die IP-Adresse schon innerhalb der EU bzw. des EWR. Die so erhobenen Daten werden wiederum von Google genutzt, um uns eine Auswertung \xFCber den Besuch unseres Internetauftritts sowie \xFCber die dortigen Nutzungsaktivit\xE4ten zur Verf\xFCgung zu stellen. Auch k\xF6nnen diese Daten genutzt werden, um weitere Dienstleistungen zu erbringen, die mit der Nutzung unseres Internetauftritts und der Nutzung des Internets zusammenh\xE4ngen. Google gibt an, Ihre IP-Adresse nicht mit anderen Daten zu verbinden. Zudem h\xE4lt Google unter"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"https://www.google.com/intl/de/policies/privacy/partners"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"weitere datenschutzrechtliche Informationen f\xFCr Sie bereit, so bspw. auch zu den M\xF6glichkeiten, die Datennutzung zu unterbinden. Zudem bietet Google unter"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"https://tools.google.com/dlpage/gaoptout?hl=de"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"ein sog. Deaktivierungs-Add-on nebst weiteren Informationen hierzu an. Dieses Add-on l\xE4sst sich mit den g\xE4ngigen Internet-Browsern installieren und bietet Ihnen weitergehende Kontrollm\xF6glichkeit \xFCber die Daten, die Google bei Aufruf unseres Internetauftritts erfasst. Dabei teilt das Add-on dem JavaScript (ga.js) von Google Analytics mit, dass Informationen zum Besuch unseres Internetauftritts nicht an Google Analytics \xFCbermittelt werden sollen. Dies verhindert aber nicht, dass Informationen an uns oder an andere Webanalysedienste \xFCbermittelt werden. Ob und welche weiteren Webanalysedienste von uns eingesetzt werden, erfahren Sie nat\xFCrlich ebenfalls in dieser Datenschutzerkl\xE4rung."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Google-Maps"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"In unserem Internetauftritt setzen wir Google Maps zur Darstellung unseres Standorts sowie zur Erstellung einer Anfahrtsbeschreibung ein. Es handelt sich hierbei um einen Dienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend nur \u201EGoogle\u201C genannt. Durch die Zertifizierung nach dem EU-US-Datenschutzschild (\u201EEU-US Privacy Shield\u201C)"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"garantiert Google, dass die Datenschutzvorgaben der EU auch bei der Verarbeitung von Daten in den USA eingehalten werden. Um die Darstellung bestimmter Schriften in unserem Internetauftritt zu erm\xF6glichen, wird bei Aufruf unseres Internetauftritts eine Verbindung zu dem Google-Server in den USA aufgebaut. Sofern Sie die in unseren Internetauftritt eingebundene Komponente Google Maps aufrufen, speichert Google \xFCber Ihren Internet-Browser ein Cookie auf Ihrem Endger\xE4t. Um unseren Standort anzuzeigen und eine Anfahrtsbeschreibung zu erstellen, werden Ihre Nutzereinstellungen und -daten verarbeitet. Hierbei k\xF6nnen wir nicht ausschlie\xDFen, dass Google Server in den USA einsetzt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Optimierung der Funktionalit\xE4t unseres Internetauftritts. Durch die so hergestellte Verbindung zu Google kann Google ermitteln, von welcher Website Ihre Anfrage gesendet worden ist und an welche IP-Adresse die Anfahrtsbeschreibung zu \xFCbermitteln ist. Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie die M\xF6glichkeit, die Installation der Cookies durch die entsprechenden Einstellungen in Ihrem Internet-Browser zu verhindern. Einzelheiten hierzu finden Sie vorstehend unter dem Punkt \u201ECookies\u201C. Zudem erfolgt die Nutzung von Google Maps sowie der \xFCber Google Maps erlangten Informationen nach den Google-Nutzungsbedingungen https://policies.google.com/terms?gl=DE&hl=de und den Gesch\xE4ftsbedingungen f\xFCr Google Maps https://www.google.com/intl/de_de/help/terms_maps.html."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"\xDCberdies bietet Google unter",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"https://adssettings.google.com/authenticated",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"https://policies.google.com/privacy",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"weitergehende Informationen an.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_primitives__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"],null,"Muster-Datenschutzerkl\xE4rung der Anwaltskanzlei Wei\xDF & Partner")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_Footer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],null));}}]);return Datenschutz;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);var ContainerExt=styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_grid_system__WEBPACK_IMPORTED_MODULE_5__["Container"])(_templateObject());

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{color:"green"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Heavy component loaded !"));});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(14);

// EXTERNAL MODULE: external "react-grid-system"
var external_react_grid_system_ = __webpack_require__(2);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/img/brive_logo.png
var brive_logo = __webpack_require__(23);

// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/img/open_question.svg
var open_question = __webpack_require__(25);
var open_question_default = /*#__PURE__*/__webpack_require__.n(open_question);

// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/primitives.js
var primitives = __webpack_require__(3);

// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/strings.js
var strings = __webpack_require__(4);

// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/styles.js
var styles = __webpack_require__(6);

// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/view/button.js
function _templateObject3(){var data=_taggedTemplateLiteral(["\n  background-image: linear-gradient(135deg, #90a900 0%, #00b8a3 100%);\n  position: absolute;\n  height: 20px;\n  width: 90%;\n  bottom: -0rem;\n  border-radius: 8px;\n  filter: blur(11px);\n  left: 5%;\n  transition: all 0.2s;\n  z-index: 0;\n  transform: translateY(0rem);\n  ",":hover & {\n    transform: translateY(0.2rem);\n  }\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral(["\n  font-family: \"IBM Plex Sans\", sans-serif !important;\n  background-color: initial !important;\n  border: none !important;\n  font-size: 16px;\n\n  text-transform: uppercase;\n  background-image: linear-gradient(\n    135deg,\n    rgba(144, 168, 0, 0.8) 0%,\n    rgba(0, 184, 163, 0.8) 100%\n  );\n  color: white;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  font-weight: 600 !important;\n  position: relative;\n  z-index: 1;\n  transition: all 0.2s;\n  ",":hover & {\n    background-image: linear-gradient(\n      135deg,\n      rgba(144, 168, 0, 1) 0%,\n      rgba(0, 184, 163, 1) 100%\n    );\n  }\n\n  :focus {\n    outline: none;\n  }\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function PrimaryButton(_ref){var onClick=_ref.onClick,text=_ref.text,_ref$active=_ref.active,active=_ref$active===void 0?true:_ref$active;return external_react_default.a.createElement(Wrapper,{onClick:onClick},external_react_default.a.createElement(Button,null,text),external_react_default.a.createElement(ButtonShadow,null));}var Wrapper=external_styled_components_default.a.div(_templateObject());var Button=external_styled_components_default.a.button(_templateObject2(),Wrapper);var ButtonShadow=external_styled_components_default.a.div(_templateObject3(),Wrapper);
// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/colors.js
var colors = __webpack_require__(9);

// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/view/box.js
function _templateObject4(){var data=box_taggedTemplateLiteral(["\n  width: 3rem;\n  display: block;\n  margin: 2rem auto 2rem auto;\n"]);_templateObject4=function _templateObject4(){return data;};return data;}function box_templateObject3(){var data=box_taggedTemplateLiteral(["\n  background: rgba(0, 0, 0, 0.15);\n  position: absolute;\n  width: 80%;\n  height: 80%;\n  bottom: -0rem;\n  border-radius: 8px;\n  filter: blur(11px);\n  left: 10%;\n  transition: all 0.2s;\n  transform: translateY(0rem);\n  ",":hover & {\n    transform: translateY(0.5rem) scale(1.1);\n  }\n"]);box_templateObject3=function _templateObject3(){return data;};return data;}function box_templateObject2(){var data=box_taggedTemplateLiteral(["\n  background-color: ",";\n  border-radius: 8px;\n  padding: 0.5rem;\n  position: relative;\n  //height: 264px;\n  transition: all 0.2s;\n  z-index: 1000;\n"]);box_templateObject2=function _templateObject2(){return data;};return data;}function box_templateObject(){var data=box_taggedTemplateLiteral(["\n  display: flex;\n"]);box_templateObject=function _templateObject(){return data;};return data;}function box_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function Box(_ref){var number=_ref.number,iconPath=_ref.iconPath,headline=_ref.headline,text=_ref.text;return external_react_default.a.createElement(box_Wrapper,null,external_react_default.a.createElement(BoxStyle,null,number?external_react_default.a.createElement(primitives["b" /* BoxGreyNumber */],null,number):null,iconPath?external_react_default.a.createElement(Icon,{src:iconPath}):null,external_react_default.a.createElement(primitives["c" /* BoxTitle */],null,headline),external_react_default.a.createElement(primitives["h" /* Text */],{style:{textAlign:"center",fontSize:16}},text)),external_react_default.a.createElement(BoxShadow,null));}var box_Wrapper=external_styled_components_default.a.div(box_templateObject());var BoxStyle=external_styled_components_default.a.div(box_templateObject2(),colors["a" /* default */].boxBackgroundColor);var BoxShadow=external_styled_components_default.a.div(box_templateObject3(),box_Wrapper);var Icon=external_styled_components_default.a.img(_templateObject4());
// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/styleconfig.js
var styleconfig = __webpack_require__(7);

// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/view/contactBox.js
function _templateObject11(){var data=contactBox_taggedTemplateLiteral(["\n  text-transform: uppercase;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 800;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.1s;\n  color: ",";\n"]);_templateObject11=function _templateObject11(){return data;};return data;}function _templateObject10(){var data=contactBox_taggedTemplateLiteral(["\n  background: rgba(255, 255, 255, 0.8);\n  box-sizing: border-box;\n  border: 1px solid #d8d8d8;\n  border-radius: 4px;\n  padding: 1rem 0.5rem;\n  height: 4rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  font-family: \"IBM Plex Sans\", sans-serif !important;\n  width: 100%;\n  margin: 0 0 1rem 0;\n  resize: vertical;\n  min-height: 36px;\n"]);_templateObject10=function _templateObject10(){return data;};return data;}function _templateObject9(){var data=contactBox_taggedTemplateLiteral(["\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid #d8d8d8;\n  border-radius: 4px;\n  box-sizing: border-box;\n  padding: 1rem 0.5rem;\n  height: 1.25rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  width: 100%;\n  margin: 0 0 1rem 0;\n  font-family: \"IBM Plex Sans\", sans-serif !important;\n"]);_templateObject9=function _templateObject9(){return data;};return data;}function _templateObject8(){var data=contactBox_taggedTemplateLiteral(["\n  margin: 0 -2rem -2rem -2rem;\n  /* padding: 2rem 4rem 3rem 4rem; */\n  background-color: #ecfbfa;\n  border-radius: 0 0 8px 8px;\n  //height: 19rem;\n"]);_templateObject8=function _templateObject8(){return data;};return data;}function _templateObject7(){var data=contactBox_taggedTemplateLiteral(["padding: 3rem 2rem;"]);_templateObject7=function _templateObject7(){return data;};return data;}function _templateObject6(){var data=contactBox_taggedTemplateLiteral(["padding: 3rem 2rem;"]);_templateObject6=function _templateObject6(){return data;};return data;}function _templateObject5(){var data=contactBox_taggedTemplateLiteral(["padding: 4rem;"]);_templateObject5=function _templateObject5(){return data;};return data;}function contactBox_templateObject4(){var data=contactBox_taggedTemplateLiteral(["padding: 4rem;"]);contactBox_templateObject4=function _templateObject4(){return data;};return data;}function contactBox_templateObject3(){var data=contactBox_taggedTemplateLiteral(["\n  \n  ","\n  ","\n  ","\n  ","\n\n  padding: 3rem 2rem;\n\n"]);contactBox_templateObject3=function _templateObject3(){return data;};return data;}function contactBox_templateObject2(){var data=contactBox_taggedTemplateLiteral(["\n  background: rgba(0, 0, 0, 0.15);\n  position: absolute;\n  width: 90%;\n  bottom: -0rem;\n  border-radius: 8px;\n  filter: blur(11px);\n  left: 5%;\n  transition: all 0.2s;\n  transform: translateY(1rem);\n  height: 2rem;\n"]);contactBox_templateObject2=function _templateObject2(){return data;};return data;}function contactBox_templateObject(){var data=contactBox_taggedTemplateLiteral(["\n  background-color: ",";\n  border-radius: 8px;\n  padding: 1rem;\n  position: relative;\n  transition: all 0.2s;\n  z-index: 1000;\n  padding: 2rem;\n"]);contactBox_templateObject=function _templateObject(){return data;};return data;}function contactBox_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var ReactGA=__webpack_require__(19);var contactBox_ContactBox=/*#__PURE__*/function(_Component){_inherits(ContactBox,_Component);function ContactBox(props){var _this;_classCallCheck(this,ContactBox);_this=_possibleConstructorReturn(this,_getPrototypeOf(ContactBox).call(this,props));_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),"_setActive",function(index){_this.setState({active:index});});_this.state={active:0};return _this;}_createClass(ContactBox,[{key:"render",value:function render(){var _this2=this;return external_react_default.a.createElement(external_react_default.a.Fragment,null,external_react_default.a.createElement(contactBox_BoxStyle,null,external_react_default.a.createElement(primitives["j" /* Title2 */],{center:true},this.props.headline),external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12,sm:12},external_react_default.a.createElement(ClickTitle// active={this.state.active === 1 ? true : false}
,{onClick:function onClick(){_this2._setActive(1);}},strings["a" /* default */].landingPage.contact.contactUs))),external_react_default.a.createElement(SubArea,null,external_react_default.a.createElement(Form,{action:"https://formspree.io/info@brive.io",method:"POST"},external_react_default.a.createElement(StyledInput,{placeholder:strings["a" /* default */].landingPage.contact.mail,name:"mail",type:"email"}),external_react_default.a.createElement(StyledTextArea,{name:"text",placeholder:strings["a" /* default */].landingPage.contact.message}),external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12},external_react_default.a.createElement(primitives["g" /* SmallText */],{dangerouslySetInnerHTML:{__html:strings["a" /* default */].landingPage.contact.privacePolicyText}}))),external_react_default.a.createElement("br",null),external_react_default.a.createElement(PrimaryButton,{type:"submit",onClick:function onClick(){ReactGA.event({category:"Conversion",action:"Use Contact Form"});},text:strings["a" /* default */].landingPage.contact.send})))),external_react_default.a.createElement(contactBox_BoxShadow,null));}}]);return ContactBox;}(external_react_["Component"]);var contactBox_BoxStyle=external_styled_components_default.a.div(contactBox_templateObject(),colors["a" /* default */].boxBackgroundColor);var contactBox_BoxShadow=external_styled_components_default.a.div(contactBox_templateObject2());var Form=external_styled_components_default.a.form(contactBox_templateObject3(),styleconfig["b" /* media */].xl(contactBox_templateObject4()),styleconfig["b" /* media */].lg(_templateObject5()),styleconfig["b" /* media */].md(_templateObject6()),styleconfig["b" /* media */].sm(_templateObject7()));//  TODO Remove inline Color
var SubArea=external_styled_components_default.a.div(_templateObject8());var StyledInput=external_styled_components_default.a.input(_templateObject9());var StyledTextArea=external_styled_components_default.a.textarea(_templateObject10());var ClickTitle=external_styled_components_default.a.p(_templateObject11(),function(props){return props.active?"#00B8A3":"#4A4A4A";});
// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/img/brive_logo.svg
var img_brive_logo = __webpack_require__(30);
var img_brive_logo_default = /*#__PURE__*/__webpack_require__.n(img_brive_logo);

// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/img/brive_app_iphone.png
var brive_app_iphone = __webpack_require__(31);
var brive_app_iphone_default = /*#__PURE__*/__webpack_require__.n(brive_app_iphone);

// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/img/brive_app_iphone_2.png
var brive_app_iphone_2 = __webpack_require__(32);
var brive_app_iphone_2_default = /*#__PURE__*/__webpack_require__.n(brive_app_iphone_2);

// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/img/brive_app_iphone_3.png
var brive_app_iphone_3 = __webpack_require__(33);
var brive_app_iphone_3_default = /*#__PURE__*/__webpack_require__.n(brive_app_iphone_3);

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(19);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/sections/headerSection.js
function _templateObject17(){var data=headerSection_taggedTemplateLiteral(["\n  text-align: right;\n  display: inline-block;\n  padding: 0.5rem;\n  color: #524e4e;\n  box-sizing: border-box;\n  border: 1px solid #524e4e;\n  border-radius: 8px;\n  :hover {\n    color: #373434;\n    border: 1px solid #373434;\n  }\n"]);_templateObject17=function _templateObject17(){return data;};return data;}function _templateObject16(){var data=headerSection_taggedTemplateLiteral(["\n  padding: 1rem 1rem 1rem 2rem;\n  display: flex;\n  flex: 1;\n"]);_templateObject16=function _templateObject16(){return data;};return data;}function _templateObject15(){var data=headerSection_taggedTemplateLiteral(["display: none"]);_templateObject15=function _templateObject15(){return data;};return data;}function _templateObject14(){var data=headerSection_taggedTemplateLiteral(["display: none"]);_templateObject14=function _templateObject14(){return data;};return data;}function _templateObject13(){var data=headerSection_taggedTemplateLiteral(["display: none"]);_templateObject13=function _templateObject13(){return data;};return data;}function _templateObject12(){var data=headerSection_taggedTemplateLiteral(["\n  transform: scale(0.8) translateX(-10rem);\n  z-index: 3;\n  display: block;\n  ","\n  ","\n  ","\n"]);_templateObject12=function _templateObject12(){return data;};return data;}function headerSection_templateObject11(){var data=headerSection_taggedTemplateLiteral(["display: none"]);headerSection_templateObject11=function _templateObject11(){return data;};return data;}function headerSection_templateObject10(){var data=headerSection_taggedTemplateLiteral(["display: none"]);headerSection_templateObject10=function _templateObject10(){return data;};return data;}function headerSection_templateObject9(){var data=headerSection_taggedTemplateLiteral(["display: none"]);headerSection_templateObject9=function _templateObject9(){return data;};return data;}function headerSection_templateObject8(){var data=headerSection_taggedTemplateLiteral(["\n  transform: scale(0.9) translateX(-4rem);\n  display: block;\n  z-index: 4;\n  ","\n  ","\n  ","\n"]);headerSection_templateObject8=function _templateObject8(){return data;};return data;}function headerSection_templateObject7(){var data=headerSection_taggedTemplateLiteral(["margin-top: 2rem;"]);headerSection_templateObject7=function _templateObject7(){return data;};return data;}function headerSection_templateObject6(){var data=headerSection_taggedTemplateLiteral(["margin-top: 2rem;"]);headerSection_templateObject6=function _templateObject6(){return data;};return data;}function headerSection_templateObject5(){var data=headerSection_taggedTemplateLiteral(["\n  height: 30rem;\n  margin: -4rem auto 0 auto;\n  ","\n  ","\n  z-index: 5;\n"]);headerSection_templateObject5=function _templateObject5(){return data;};return data;}function headerSection_templateObject4(){var data=headerSection_taggedTemplateLiteral(["text-align: center"]);headerSection_templateObject4=function _templateObject4(){return data;};return data;}function headerSection_templateObject3(){var data=headerSection_taggedTemplateLiteral(["text-align: left"]);headerSection_templateObject3=function _templateObject3(){return data;};return data;}function headerSection_templateObject2(){var data=headerSection_taggedTemplateLiteral(["\n  ","\n  ","\n"]);headerSection_templateObject2=function _templateObject2(){return data;};return data;}function headerSection_templateObject(){var data=headerSection_taggedTemplateLiteral(["\n  overflow: hidden;\n  z-index: -4;\n"]);headerSection_templateObject=function _templateObject(){return data;};return data;}function headerSection_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var headerSection_HeaderSection=function HeaderSection(){var scrollToElement=function scrollToElement(){external_react_ga_default.a.event({category:"Conversion",action:"Scroll to contact"});var element=document.getElementById("contact-box");Object(lib["scrollTo"])(element);};return external_react_default.a.createElement(SectionLightExt,null,external_react_default.a.createElement(external_react_grid_system_["Container"],null,external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(external_react_grid_system_["Col"],{style:{textAlign:"center"},xs:6,sm:6,md:3,lg:2// offset={{ xs: 3, sm: 3, md: 0 }}
},external_react_default.a.createElement("img",{className:"margin-bottom-3",src:img_brive_logo_default.a})),external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:6,sm:3,md:3,lg:2,offset:{md:6,lg:8},style:{textAlign:"right"}},external_react_default.a.createElement(LanguageLink,{href:strings["a" /* default */].landingPage.header.changeLanguage.link},strings["a" /* default */].landingPage.header.changeLanguage.text))),external_react_default.a.createElement(external_react_grid_system_["Row"],{style:{height:440},align:"center"},external_react_default.a.createElement(ColExt,{sm:12,lg:6},external_react_default.a.createElement(primitives["i" /* Title1 */],{className:"margin-bottom-1"},strings["a" /* default */].landingPage.header.headline),external_react_default.a.createElement(primitives["h" /* Text */],{style:headerSection_styles.text},strings["a" /* default */].landingPage.header.text),external_react_default.a.createElement(PrimaryButton,{onClick:scrollToElement,text:strings["a" /* default */].landingPage.header.button})),external_react_default.a.createElement(ImgContainer,null,external_react_default.a.createElement(Img,{src:brive_app_iphone_default.a}),external_react_default.a.createElement(Img2,{src:brive_app_iphone_2_default.a}),external_react_default.a.createElement(Img3,{src:brive_app_iphone_3_default.a})))));};/* harmony default export */ var headerSection = (headerSection_HeaderSection);var headerSection_styles={text:{marginBottom:24}};var SectionLightExt=external_styled_components_default()(styles["c" /* SectionLight */])(headerSection_templateObject());var ColExt=external_styled_components_default()(external_react_grid_system_["Col"])(headerSection_templateObject2(),styleconfig["b" /* media */].md(headerSection_templateObject3()),styleconfig["b" /* media */].sm(headerSection_templateObject4()));var Img=external_styled_components_default.a.img(headerSection_templateObject5(),styleconfig["b" /* media */].md(headerSection_templateObject6()),styleconfig["b" /* media */].sm(headerSection_templateObject7()));var Img2=external_styled_components_default()(Img)(headerSection_templateObject8(),styleconfig["b" /* media */].lg(headerSection_templateObject9()),styleconfig["b" /* media */].md(headerSection_templateObject10()),styleconfig["b" /* media */].sm(headerSection_templateObject11()));var Img3=external_styled_components_default()(Img)(_templateObject12(),styleconfig["b" /* media */].lg(_templateObject13()),styleconfig["b" /* media */].md(_templateObject14()),styleconfig["b" /* media */].sm(_templateObject15()));var ImgContainer=external_styled_components_default.a.div(_templateObject16());var LanguageLink=external_styled_components_default.a.a(_templateObject17());
// EXTERNAL MODULE: external "react-minimal-pie-chart"
var external_react_minimal_pie_chart_ = __webpack_require__(27);
var external_react_minimal_pie_chart_default = /*#__PURE__*/__webpack_require__.n(external_react_minimal_pie_chart_);

// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/sections/problemSection.js
function problemSection_templateObject7(){var data=problemSection_taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);problemSection_templateObject7=function _templateObject7(){return data;};return data;}function problemSection_templateObject6(){var data=problemSection_taggedTemplateLiteral(["\n  position: relative;\n"]);problemSection_templateObject6=function _templateObject6(){return data;};return data;}function problemSection_templateObject5(){var data=problemSection_taggedTemplateLiteral(["padding: 3rem 0;"]);problemSection_templateObject5=function _templateObject5(){return data;};return data;}function problemSection_templateObject4(){var data=problemSection_taggedTemplateLiteral(["padding: 3rem 0;"]);problemSection_templateObject4=function _templateObject4(){return data;};return data;}function problemSection_templateObject3(){var data=problemSection_taggedTemplateLiteral(["padding: 6rem 0;"]);problemSection_templateObject3=function _templateObject3(){return data;};return data;}function problemSection_templateObject2(){var data=problemSection_taggedTemplateLiteral(["padding: 6rem 0;"]);problemSection_templateObject2=function _templateObject2(){return data;};return data;}function problemSection_templateObject(){var data=problemSection_taggedTemplateLiteral(["\n  padding: 6rem 0;\n  ","\n  ","\n  ","\n  ","\n  \n  "]);problemSection_templateObject=function _templateObject(){return data;};return data;}function problemSection_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var problemSection_ProblemSection=function ProblemSection(){return external_react_default.a.createElement(SectionBlueMargin,null,external_react_default.a.createElement(external_react_grid_system_["Container"],null,external_react_default.a.createElement(external_react_grid_system_["Row"],{align:"center"},external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12,sm:5},external_react_default.a.createElement(primitives["j" /* Title2 */],null,strings["a" /* default */].landingPage.intro.headline),external_react_default.a.createElement(primitives["h" /* Text */],null,strings["a" /* default */].landingPage.intro.text)),external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:10,sm:3,offset:{xs:1,sm:1}},external_react_default.a.createElement(ChartContainer,null,external_react_default.a.createElement(AmountContainer,null,external_react_default.a.createElement(primitives["e" /* ChartNumber */],null,external_react_default.a.createElement(primitives["g" /* SmallText */],{style:problemSection_styles.upto},strings["a" /* default */].landingPage.intro.chartUpTo),strings["a" /* default */].landingPage.intro.chartPercent,"%")),external_react_default.a.createElement(external_react_minimal_pie_chart_default.a,{lineWidth:10,rounded:true,lengthAngle:-360,startAngle:-90,data:[{title:"One",value:37,color:"#D9D9D9"},{title:"Two",value:63,color:"#50E3C2"}]}))),external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12,sm:3},external_react_default.a.createElement(primitives["d" /* ChartDescription */],null,external_react_default.a.createElement("p",null,strings["a" /* default */].landingPage.intro.chartDescription),external_react_default.a.createElement("ul",null,strings["a" /* default */].landingPage.intro.bulletPoints.map(function(point,i){return external_react_default.a.createElement("li",{key:i},point);}))))))," ");};/* harmony default export */ var problemSection = (problemSection_ProblemSection);var SectionBlueMargin=external_styled_components_default()(styles["b" /* SectionBlue */])(problemSection_templateObject(),styleconfig["b" /* media */].xl(problemSection_templateObject2()),styleconfig["b" /* media */].lg(problemSection_templateObject3()),styleconfig["b" /* media */].md(problemSection_templateObject4()),styleconfig["b" /* media */].sm(problemSection_templateObject5()));var ChartContainer=external_styled_components_default.a.div(problemSection_templateObject6());var AmountContainer=external_styled_components_default.a.div(problemSection_templateObject7());var problemSection_styles={upto:{position:"relative",textAlign:"center",marginTop:-16,marginBottom:0}};
// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/sections/solutionOverviewSection.js
function solutionOverviewSection_templateObject2(){var data=solutionOverviewSection_taggedTemplateLiteral(["\n  display: flex;\n"]);solutionOverviewSection_templateObject2=function _templateObject2(){return data;};return data;}function solutionOverviewSection_templateObject(){var data=solutionOverviewSection_taggedTemplateLiteral(["\n  padding-bottom: 20rem;\n  margin-bottom: -15rem;\n"]);solutionOverviewSection_templateObject=function _templateObject(){return data;};return data;}function solutionOverviewSection_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var solutionOverviewSection_SolutionOverviewSection=function SolutionOverviewSection(){return external_react_default.a.createElement(SectionExtended,null,external_react_default.a.createElement(external_react_grid_system_["Container"],null,external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12,sm:5,style:{marginBottom:16}},external_react_default.a.createElement(primitives["j" /* Title2 */],{light:true},strings["a" /* default */].landingPage.hotItWorks.headline),external_react_default.a.createElement(primitives["h" /* Text */],{light:true},strings["a" /* default */].landingPage.hotItWorks.text))),external_react_default.a.createElement(external_react_grid_system_["Row"],{justify:"center"},strings["a" /* default */].landingPage.hotItWorks.boxes.map(function(box,index){return external_react_default.a.createElement(ColFlex,{key:index,className:"margin-bottom-3",xs:10,sm:3},external_react_default.a.createElement(Box,{number:index+1,headline:box.title,text:box.text}));}))));};/* harmony default export */ var solutionOverviewSection = (solutionOverviewSection_SolutionOverviewSection);var SectionExtended=external_styled_components_default()(styles["a" /* Section */])(solutionOverviewSection_templateObject());var ColFlex=external_styled_components_default()(external_react_grid_system_["Col"])(solutionOverviewSection_templateObject2());
// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/sections/faqSection.js
function faqSection_templateObject3(){var data=faqSection_taggedTemplateLiteral(["\n  margin: 0.5rem auto;\n  font-weight: 500;\n  transition: all 0.1s;\n  cursor: pointer;\n  ",":hover & {\n    color: #707070;\n  }\n"]);faqSection_templateObject3=function _templateObject3(){return data;};return data;}function faqSection_templateObject2(){var data=faqSection_taggedTemplateLiteral(["\n  border: 0;\n  height: 2px;\n  background-color: #d4dedc;\n  margin-bottom: 1rem;\n"]);faqSection_templateObject2=function _templateObject2(){return data;};return data;}function faqSection_templateObject(){var data=faqSection_taggedTemplateLiteral(["\n  cursor: pointer;\n"]);faqSection_templateObject=function _templateObject(){return data;};return data;}function faqSection_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function faqSection_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){faqSection_typeof=function _typeof(obj){return typeof obj;};}else{faqSection_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return faqSection_typeof(obj);}function faqSection_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function faqSection_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function faqSection_createClass(Constructor,protoProps,staticProps){if(protoProps)faqSection_defineProperties(Constructor.prototype,protoProps);if(staticProps)faqSection_defineProperties(Constructor,staticProps);return Constructor;}function faqSection_possibleConstructorReturn(self,call){if(call&&(faqSection_typeof(call)==="object"||typeof call==="function")){return call;}return faqSection_assertThisInitialized(self);}function faqSection_getPrototypeOf(o){faqSection_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return faqSection_getPrototypeOf(o);}function faqSection_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)faqSection_setPrototypeOf(subClass,superClass);}function faqSection_setPrototypeOf(o,p){faqSection_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return faqSection_setPrototypeOf(o,p);}function faqSection_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function faqSection_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var faqSection_FaqSection=/*#__PURE__*/function(_Component){faqSection_inherits(FaqSection,_Component);function FaqSection(){var _getPrototypeOf2;var _this;faqSection_classCallCheck(this,FaqSection);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=faqSection_possibleConstructorReturn(this,(_getPrototypeOf2=faqSection_getPrototypeOf(FaqSection)).call.apply(_getPrototypeOf2,[this].concat(args)));faqSection_defineProperty(faqSection_assertThisInitialized(faqSection_assertThisInitialized(_this)),"state",{openFaq:strings["a" /* default */].landingPage.faq.questions.map(function(){return false;})});faqSection_defineProperty(faqSection_assertThisInitialized(faqSection_assertThisInitialized(_this)),"_openFaq",function(i){_this.setState({openFaq:_this.state.openFaq.map(function(q,k){return i===k;})});});return _this;}faqSection_createClass(FaqSection,[{key:"render",value:function render(){var _this2=this;return external_react_default.a.createElement(styles["b" /* SectionBlue */],null,external_react_default.a.createElement(external_react_grid_system_["Container"],null,external_react_default.a.createElement(external_react_grid_system_["Row"],{justify:"center"},external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12},external_react_default.a.createElement(primitives["j" /* Title2 */],{center:true},strings["a" /* default */].landingPage.faq.headline)),strings["a" /* default */].landingPage.faq.questions.map(function(question,i){return external_react_default.a.createElement(ColWithCursor,{onClick:function onClick(){_this2._openFaq(i);},key:i,xs:12,sm:8},external_react_default.a.createElement(external_react_grid_system_["Row"],{align:"center"},external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:10,sm:11},external_react_default.a.createElement(Question,null,question.question)),external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:2,sm:1},external_react_default.a.createElement("img",{src:open_question_default.a})),external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12},_this2.state.openFaq[i]&&external_react_default.a.createElement(primitives["h" /* Text */],null,question.answer),external_react_default.a.createElement(Hr,null))));}))));}}]);return FaqSection;}(external_react_["Component"]);var ColWithCursor=external_styled_components_default()(external_react_grid_system_["Col"])(faqSection_templateObject());var Hr=external_styled_components_default.a.hr(faqSection_templateObject2());var Question=external_styled_components_default()(primitives["h" /* Text */])(faqSection_templateObject3(),ColWithCursor);
// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/sections/contactSection.js
function contactSection_templateObject(){var data=contactSection_taggedTemplateLiteral(["\n  padding-top: 6rem;\n  padding-bottom: 6rem;\n"]);contactSection_templateObject=function _templateObject(){return data;};return data;}function contactSection_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var contactSection_ContactSection=function ContactSection(){return external_react_default.a.createElement(SectionExt,{id:"contact-box"},external_react_default.a.createElement(external_react_grid_system_["Container"],null,external_react_default.a.createElement(external_react_grid_system_["Row"],{justify:"center"},external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12,sm:8},external_react_default.a.createElement(contactBox_ContactBox,{id:"contactBox",headline:strings["a" /* default */].landingPage.contact.headline})))));};/* harmony default export */ var contactSection = (contactSection_ContactSection);var SectionExt=external_styled_components_default()(styles["a" /* Section */])(contactSection_templateObject());
// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/sections/advantagesSection.js
function advantagesSection_templateObject(){var data=advantagesSection_taggedTemplateLiteral(["\n  margin: -8rem 0 0 0;\n  padding: 14rem 0 2rem 0;\n"]);advantagesSection_templateObject=function _templateObject(){return data;};return data;}function advantagesSection_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var advantagesSection_AdvantagesSection=function AdvantagesSection(){return external_react_default.a.createElement(SectionLightMargin,null,external_react_default.a.createElement(external_react_grid_system_["Container"],null,external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12,sm:5,style:{marginBottom:16}},external_react_default.a.createElement(primitives["j" /* Title2 */],null,strings["a" /* default */].landingPage.advantages.title))),external_react_default.a.createElement(external_react_grid_system_["Row"],{justify:"center"},strings["a" /* default */].landingPage.advantages.sections.map(function(box,index){return external_react_default.a.createElement(external_react_grid_system_["Col"],{style:{display:"flex"},key:index,className:"margin-bottom-3",xs:10,sm:4},external_react_default.a.createElement(Box,{iconPath:__webpack_require__(48)("./".concat(box.icon)),headline:box.title,text:box.description}));}))));};/* harmony default export */ var advantagesSection = (advantagesSection_AdvantagesSection);var SectionLightMargin=external_styled_components_default()(styles["c" /* SectionLight */])(advantagesSection_templateObject());
// EXTERNAL MODULE: external "react-pose"
var external_react_pose_ = __webpack_require__(84);

// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/components/ScrollerComponent.js
function ScrollerComponent_templateObject3(){var data=ScrollerComponent_taggedTemplateLiteral(["\n  display: flex;\n  animation: "," ","s\n    linear infinite;\n"]);ScrollerComponent_templateObject3=function _templateObject3(){return data;};return data;}function ScrollerComponent_templateObject2(){var data=ScrollerComponent_taggedTemplateLiteral(["\n   0%   {transform: translateX(0)}\n   99.999999999%  {transform: translateX(-25%)}\n  100%  {transform: translateX(0)}\n"]);ScrollerComponent_templateObject2=function _templateObject2(){return data;};return data;}function ScrollerComponent_templateObject(){var data=ScrollerComponent_taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  z-index: 10;\n  overflow-x: hidden;\n  max-width: 100vw;\n"]);ScrollerComponent_templateObject=function _templateObject(){return data;};return data;}function ScrollerComponent_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function ScrollerComponent_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){ScrollerComponent_typeof=function _typeof(obj){return typeof obj;};}else{ScrollerComponent_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return ScrollerComponent_typeof(obj);}function ScrollerComponent_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function ScrollerComponent_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function ScrollerComponent_createClass(Constructor,protoProps,staticProps){if(protoProps)ScrollerComponent_defineProperties(Constructor.prototype,protoProps);if(staticProps)ScrollerComponent_defineProperties(Constructor,staticProps);return Constructor;}function ScrollerComponent_possibleConstructorReturn(self,call){if(call&&(ScrollerComponent_typeof(call)==="object"||typeof call==="function")){return call;}return ScrollerComponent_assertThisInitialized(self);}function ScrollerComponent_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function ScrollerComponent_getPrototypeOf(o){ScrollerComponent_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return ScrollerComponent_getPrototypeOf(o);}function ScrollerComponent_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)ScrollerComponent_setPrototypeOf(subClass,superClass);}function ScrollerComponent_setPrototypeOf(o,p){ScrollerComponent_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return ScrollerComponent_setPrototypeOf(o,p);}var ScrollerComponent_ScrollerComponent=/*#__PURE__*/function(_React$PureComponent){ScrollerComponent_inherits(ScrollerComponent,_React$PureComponent);function ScrollerComponent(){ScrollerComponent_classCallCheck(this,ScrollerComponent);return ScrollerComponent_possibleConstructorReturn(this,ScrollerComponent_getPrototypeOf(ScrollerComponent).apply(this,arguments));}ScrollerComponent_createClass(ScrollerComponent,[{key:"render",value:function render(){return external_react_default.a.createElement(ScrollerComponent_Wrapper,null,external_react_default.a.createElement(AnimatedWrapper,{duration:this.props.duration},this.props.children,this.props.children,this.props.children,this.props.children));}}]);return ScrollerComponent;}(external_react_default.a.PureComponent);var ScrollerComponent_Wrapper=external_styled_components_default.a.div(ScrollerComponent_templateObject());var Scrolling=Object(external_styled_components_["keyframes"])(ScrollerComponent_templateObject2());var AnimatedWrapper=external_styled_components_default.a.div(ScrollerComponent_templateObject3(),Scrolling,function(props){return props.duration?props.duration:15;});
// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/sections/supportSection.js
function supportSection_templateObject3(){var data=supportSection_taggedTemplateLiteral(["\n  height: 10rem;\n"]);supportSection_templateObject3=function _templateObject3(){return data;};return data;}function supportSection_templateObject2(){var data=supportSection_taggedTemplateLiteral(["\n  width: 12rem;\n  margin-left: 6rem;\n  display: flex;\n  align-items: center;\n"]);supportSection_templateObject2=function _templateObject2(){return data;};return data;}function supportSection_templateObject(){var data=supportSection_taggedTemplateLiteral(["\n  margin: 0 0 1rem 0;\n"]);supportSection_templateObject=function _templateObject(){return data;};return data;}function supportSection_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var supportSection_SupportSection=function SupportSection(){return external_react_default.a.createElement(styles["b" /* SectionBlue */],null,external_react_default.a.createElement(external_react_grid_system_["Container"],null,external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(ColMargin,{xs:12},external_react_default.a.createElement(primitives["j" /* Title2 */],null,strings["a" /* default */].landingPage.support.title)))),external_react_default.a.createElement(external_react_grid_system_["Container"],{fluid:true},external_react_default.a.createElement(RowExt,null,external_react_default.a.createElement(ScrollerComponent_ScrollerComponent,{duration:60},strings["a" /* default */].landingPage.support.images.map(function(image,i){return external_react_default.a.createElement(ImgWrapper,null,external_react_default.a.createElement("img",{className:"margin-bottom-3",src:__webpack_require__(48)("./".concat(image))}));})))));};/* harmony default export */ var supportSection = (supportSection_SupportSection);var ColMargin=external_styled_components_default()(external_react_grid_system_["Col"])(supportSection_templateObject());var ImgWrapper=external_styled_components_default.a.div(supportSection_templateObject2());var RowExt=external_styled_components_default()(external_react_grid_system_["Row"])(supportSection_templateObject3());
// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/img/map.png
var map = __webpack_require__(26);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/sections/1_analyseSection.js
function _1_analyseSection_templateObject2(){var data=_1_analyseSection_taggedTemplateLiteral(["\n  transform: skewY(9deg);\n"]);_1_analyseSection_templateObject2=function _templateObject2(){return data;};return data;}function _1_analyseSection_templateObject(){var data=_1_analyseSection_taggedTemplateLiteral(["\n  transform: skewY(-9deg);\n  text-align: center;\n"]);_1_analyseSection_templateObject=function _templateObject(){return data;};return data;}function _1_analyseSection_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var _1_analyseSection_AnalyseSection=function AnalyseSection(){return external_react_default.a.createElement(SkewedSectionBlue,null,external_react_default.a.createElement(NoSkew,null,external_react_default.a.createElement(external_react_grid_system_["Container"],null,external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12},external_react_default.a.createElement(primitives["a" /* BigNumber */],null,strings["a" /* default */].landingPage.analyseSection.number))),external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12},external_react_default.a.createElement(primitives["j" /* Title2 */],null,strings["a" /* default */].landingPage.analyseSection.title),external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12,sm:6,offset:{sm:3}},external_react_default.a.createElement(primitives["h" /* Text */],null,strings["a" /* default */].landingPage.analyseSection.description))),external_react_default.a.createElement(external_react_grid_system_["Col"],{style:style.Col,xs:12},external_react_default.a.createElement("img",{src:map_default.a}))))));};/* harmony default export */ var _1_analyseSection = (_1_analyseSection_AnalyseSection);var SkewedSectionBlue=external_styled_components_default()(styles["b" /* SectionBlue */])(_1_analyseSection_templateObject());var NoSkew=external_styled_components_default.a.div(_1_analyseSection_templateObject2());var style={Col:{marginTop:32}};
// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/view/ratingBox.js
function ratingBox_templateObject7(){var data=ratingBox_taggedTemplateLiteral(["\n  background: #d8d8d8;\n  width: 2rem;\n  height: 2px;\n  border-radius: 20px;\n  margin: 0 auto;\n"]);ratingBox_templateObject7=function _templateObject7(){return data;};return data;}function ratingBox_templateObject6(){var data=ratingBox_taggedTemplateLiteral(["\n  position: absolute;\n  top: 4.8rem;\n  left: 0;\n  right: 0;\n"]);ratingBox_templateObject6=function _templateObject6(){return data;};return data;}function ratingBox_templateObject5(){var data=ratingBox_taggedTemplateLiteral(["\n  background: rgba(0, 0, 0, 0.15);\n  position: absolute;\n  width: 235px;\n  height: 235px;\n  bottom: -1rem;\n  border-radius: 20px;\n  filter: blur(11px);\n  left: 3%;\n  transition: all 0.2s;\n  transform: translateY(0rem);\n"]);ratingBox_templateObject5=function _templateObject5(){return data;};return data;}function ratingBox_templateObject4(){var data=ratingBox_taggedTemplateLiteral(["\n  background-color: ",";\n  border-radius: 20px;\n  padding: 0.5rem;\n  position: relative;\n  height: 235px;\n  width: 235px;\n  transition: all 0.2s;\n  z-index: 1000;\n  margin: 0.5rem 0;\n"]);ratingBox_templateObject4=function _templateObject4(){return data;};return data;}function ratingBox_templateObject3(){var data=ratingBox_taggedTemplateLiteral(["\n  padding: 3rem 3rem 3rem 3rem;\n  margin: -2rem 0 0 0;\n  position: relative;\n"]);ratingBox_templateObject3=function _templateObject3(){return data;};return data;}function ratingBox_templateObject2(){var data=ratingBox_taggedTemplateLiteral(["\n  position: relative;\n"]);ratingBox_templateObject2=function _templateObject2(){return data;};return data;}function ratingBox_templateObject(){var data=ratingBox_taggedTemplateLiteral(["\n  margin: 0 1rem;\n  height: 19rem;\n  position: relative;\n"]);ratingBox_templateObject=function _templateObject(){return data;};return data;}function ratingBox_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function RatingBox(_ref){var headline=_ref.headline,score=_ref.score;return external_react_default.a.createElement(ratingBox_Wrapper,null,external_react_default.a.createElement(BoxWrapper,null,external_react_default.a.createElement(ratingBox_BoxStyle,null,external_react_default.a.createElement(primitives["c" /* BoxTitle */],null,headline),external_react_default.a.createElement(ChartWrapper,null,external_react_default.a.createElement(external_react_minimal_pie_chart_default.a,{startAngle:-90,lineWidth:18,totalValue:100,rounded:true,lengthAngle:-360,data:[{title:"One",value:100-score,color:"#FF5E00"},{title:"One",value:score,color:"#39FF9A"}]}),external_react_default.a.createElement(TextContainer,null,external_react_default.a.createElement(primitives["f" /* ScoringPoints */],null,score),external_react_default.a.createElement(Divider,null),external_react_default.a.createElement(primitives["f" /* ScoringPoints */],null,"100")))),external_react_default.a.createElement(ratingBox_BoxShadow,null)));}var ratingBox_Wrapper=external_styled_components_default.a.div(ratingBox_templateObject());var BoxWrapper=external_styled_components_default.a.div(ratingBox_templateObject2());var ChartWrapper=external_styled_components_default.a.div(ratingBox_templateObject3());var ratingBox_BoxStyle=external_styled_components_default.a.div(ratingBox_templateObject4(),colors["a" /* default */].boxBackgroundColor);var ratingBox_BoxShadow=external_styled_components_default.a.div(ratingBox_templateObject5());var TextContainer=external_styled_components_default.a.div(ratingBox_templateObject6());var Divider=external_styled_components_default.a.div(ratingBox_templateObject7());
// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/sections/2_ratingSection.js
function _2_ratingSection_templateObject4(){var data=_2_ratingSection_taggedTemplateLiteral(["\n  height: 19rem;\n"]);_2_ratingSection_templateObject4=function _templateObject4(){return data;};return data;}function _2_ratingSection_templateObject3(){var data=_2_ratingSection_taggedTemplateLiteral(["\n  width: 100rem;\n  display: flex;\n  justify-content: space-between;\n"]);_2_ratingSection_templateObject3=function _templateObject3(){return data;};return data;}function _2_ratingSection_templateObject2(){var data=_2_ratingSection_taggedTemplateLiteral(["\n  transform: skewY(9deg);\n"]);_2_ratingSection_templateObject2=function _templateObject2(){return data;};return data;}function _2_ratingSection_templateObject(){var data=_2_ratingSection_taggedTemplateLiteral(["\n  transform: skewY(-9deg);\n  text-align: center;\n"]);_2_ratingSection_templateObject=function _templateObject(){return data;};return data;}function _2_ratingSection_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var _2_ratingSection_RatingSection=function RatingSection(){return external_react_default.a.createElement(_2_ratingSection_SkewedSectionBlue,null,external_react_default.a.createElement(_2_ratingSection_NoSkew,null,external_react_default.a.createElement(external_react_grid_system_["Container"],null,external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12},external_react_default.a.createElement(primitives["a" /* BigNumber */],null,strings["a" /* default */].landingPage.ratingSection.number))),external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12},external_react_default.a.createElement(primitives["j" /* Title2 */],null,strings["a" /* default */].landingPage.ratingSection.title)),external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12,sm:6,offset:{sm:3}},external_react_default.a.createElement(primitives["h" /* Text */],null,strings["a" /* default */].landingPage.ratingSection.description)))),external_react_default.a.createElement(external_react_grid_system_["Container"],{style:_2_ratingSection_style.AnimatedContainer,fluid:true},external_react_default.a.createElement(_2_ratingSection_RowExt,null,external_react_default.a.createElement(ScrollerComponent_ScrollerComponent,{duration:100},strings["a" /* default */].landingPage.ratingSection.sections.map(function(rating,i){return external_react_default.a.createElement(RatingBox,{key:i,headline:rating.title,score:rating.scoring});}))))));};/* harmony default export */ var _2_ratingSection = (_2_ratingSection_RatingSection);var _2_ratingSection_SkewedSectionBlue=external_styled_components_default()(styles["b" /* SectionBlue */])(_2_ratingSection_templateObject());var _2_ratingSection_NoSkew=external_styled_components_default.a.div(_2_ratingSection_templateObject2());var CarouselWrapper=external_styled_components_default.a.div(_2_ratingSection_templateObject3());var _2_ratingSection_RowExt=external_styled_components_default()(external_react_grid_system_["Row"])(_2_ratingSection_templateObject4());var _2_ratingSection_style={AnimatedContainer:{marginTop:32}};
// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/img/brive_credit_card.svg
var brive_credit_card = __webpack_require__(24);
var brive_credit_card_default = /*#__PURE__*/__webpack_require__.n(brive_credit_card);

// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/sections/3_rewardSection.js
function _3_rewardSection_templateObject8(){var data=_3_rewardSection_taggedTemplateLiteral(["\n  opacity: 0.3;\n  transform: rotate(7deg) translateY(5rem) translateX(18rem);\n  position: absolute;\n"]);_3_rewardSection_templateObject8=function _templateObject8(){return data;};return data;}function _3_rewardSection_templateObject7(){var data=_3_rewardSection_taggedTemplateLiteral(["\n  z-index: 10;\n  animation: "," 2s ease-in-out;\n"]);_3_rewardSection_templateObject7=function _templateObject7(){return data;};return data;}function _3_rewardSection_templateObject6(){var data=_3_rewardSection_taggedTemplateLiteral(["\n  opacity: 0.3;\n  position: absolute;\n  transform: rotate(-7deg) translateY(5rem) translateX(-18rem);\n"]);_3_rewardSection_templateObject6=function _templateObject6(){return data;};return data;}function _3_rewardSection_templateObject5(){var data=_3_rewardSection_taggedTemplateLiteral(["\n  from {\n    transform: translateY(5rem);\n    opacity: 0\n  }\n\n  to {\n    transform: translateY(0);\n    opacity: 1\n  }\n"]);_3_rewardSection_templateObject5=function _templateObject5(){return data;};return data;}function _3_rewardSection_templateObject4(){var data=_3_rewardSection_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]);_3_rewardSection_templateObject4=function _templateObject4(){return data;};return data;}function _3_rewardSection_templateObject3(){var data=_3_rewardSection_taggedTemplateLiteral(["\n  width: 100rem;\n  display: flex;\n  justify-content: space-between;\n"]);_3_rewardSection_templateObject3=function _templateObject3(){return data;};return data;}function _3_rewardSection_templateObject2(){var data=_3_rewardSection_taggedTemplateLiteral(["\n  transform: skewY(9deg);\n"]);_3_rewardSection_templateObject2=function _templateObject2(){return data;};return data;}function _3_rewardSection_templateObject(){var data=_3_rewardSection_taggedTemplateLiteral(["\n  transform: skewY(-9deg);\n  text-align: center;\n  overflow: hidden;\n  padding-bottom: 8rem;\n"]);_3_rewardSection_templateObject=function _templateObject(){return data;};return data;}function _3_rewardSection_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function _3_rewardSection_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_3_rewardSection_typeof=function _typeof(obj){return typeof obj;};}else{_3_rewardSection_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _3_rewardSection_typeof(obj);}function _3_rewardSection_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _3_rewardSection_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _3_rewardSection_createClass(Constructor,protoProps,staticProps){if(protoProps)_3_rewardSection_defineProperties(Constructor.prototype,protoProps);if(staticProps)_3_rewardSection_defineProperties(Constructor,staticProps);return Constructor;}function _3_rewardSection_possibleConstructorReturn(self,call){if(call&&(_3_rewardSection_typeof(call)==="object"||typeof call==="function")){return call;}return _3_rewardSection_assertThisInitialized(self);}function _3_rewardSection_getPrototypeOf(o){_3_rewardSection_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _3_rewardSection_getPrototypeOf(o);}function _3_rewardSection_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_3_rewardSection_setPrototypeOf(subClass,superClass);}function _3_rewardSection_setPrototypeOf(o,p){_3_rewardSection_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _3_rewardSection_setPrototypeOf(o,p);}function _3_rewardSection_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _3_rewardSection_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// import ReactVisibilitySensor from "react-visibility-sensor";
var _3_rewardSection_RewardSection=/*#__PURE__*/function(_React$PureComponent){_3_rewardSection_inherits(RewardSection,_React$PureComponent);function RewardSection(){var _getPrototypeOf2;var _this;_3_rewardSection_classCallCheck(this,RewardSection);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_3_rewardSection_possibleConstructorReturn(this,(_getPrototypeOf2=_3_rewardSection_getPrototypeOf(RewardSection)).call.apply(_getPrototypeOf2,[this].concat(args)));_3_rewardSection_defineProperty(_3_rewardSection_assertThisInitialized(_3_rewardSection_assertThisInitialized(_this)),"state",{isVisible:false});_3_rewardSection_defineProperty(_3_rewardSection_assertThisInitialized(_3_rewardSection_assertThisInitialized(_this)),"onVisibilityChange",function(visible){console.log(_this.state.isVisible,visible);_this.setState({isVisible:true});});return _this;}_3_rewardSection_createClass(RewardSection,[{key:"render",value:function render(){return external_react_default.a.createElement(_3_rewardSection_SkewedSectionBlue,null,external_react_default.a.createElement(_3_rewardSection_NoSkew,null,external_react_default.a.createElement(external_react_grid_system_["Container"],null,external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12},external_react_default.a.createElement(primitives["a" /* BigNumber */],null,strings["a" /* default */].landingPage.rewardSection.number))),external_react_default.a.createElement(external_react_grid_system_["Row"],{align:"center"},external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12},external_react_default.a.createElement(primitives["j" /* Title2 */],null,strings["a" /* default */].landingPage.rewardSection.title)),external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12,sm:6,offset:{sm:3}},external_react_default.a.createElement(primitives["h" /* Text */],null,strings["a" /* default */].landingPage.rewardSection.description)),external_react_default.a.createElement(CCContainer,null,external_react_default.a.createElement(CreditCard1,{src:brive_credit_card_default.a}),external_react_default.a.createElement(CreditCard2,{animation:true,src:brive_credit_card_default.a}),external_react_default.a.createElement(CreditCard3,{src:brive_credit_card_default.a})),external_react_default.a.createElement(primitives["g" /* SmallText */],{style:_3_rewardSection_style.noticeText},strings["a" /* default */].landingPage.rewardSection.notice)))));}}]);return RewardSection;}(external_react_default.a.PureComponent);var _3_rewardSection_style={noticeText:{width:"100%",paddingLeft:16,paddingRight:16}};var _3_rewardSection_SkewedSectionBlue=external_styled_components_default()(styles["b" /* SectionBlue */])(_3_rewardSection_templateObject());var _3_rewardSection_NoSkew=external_styled_components_default.a.div(_3_rewardSection_templateObject2());var _3_rewardSection_CarouselWrapper=external_styled_components_default.a.div(_3_rewardSection_templateObject3());var CCContainer=external_styled_components_default.a.div(_3_rewardSection_templateObject4());var CreditCard2Animation=Object(external_styled_components_["keyframes"])(_3_rewardSection_templateObject5());var CreditCard1=external_styled_components_default.a.img(_3_rewardSection_templateObject6());var CreditCard2=external_styled_components_default.a.img(_3_rewardSection_templateObject7(),CreditCard2Animation);var CreditCard3=external_styled_components_default.a.img(_3_rewardSection_templateObject8());
// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/sections/4_improvementSection.js
function _4_improvementSection_templateObject7(){var data=_4_improvementSection_taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 1rem;\n  justify-content: space-between;\n  padding: 0 1rem;\n"]);_4_improvementSection_templateObject7=function _templateObject7(){return data;};return data;}function _4_improvementSection_templateObject6(){var data=_4_improvementSection_taggedTemplateLiteral(["\n  flex: ",";\n  background-image: linear-gradient(\n    -135deg,\n    #90a900 0%,\n    #4bb04e 52%,\n    #00b8a3 100%\n  );\n  border-radius: 0 20px 20px 0;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);_4_improvementSection_templateObject6=function _templateObject6(){return data;};return data;}function _4_improvementSection_templateObject5(){var data=_4_improvementSection_taggedTemplateLiteral(["\n  flex: ",";\n  height: 5rem;\n  background-color: #425759;\n  border-radius: 20px 0 0 20px;\n"]);_4_improvementSection_templateObject5=function _templateObject5(){return data;};return data;}function _4_improvementSection_templateObject4(){var data=_4_improvementSection_taggedTemplateLiteral(["\n  width: 100%;\n  height: 5rem;\n  display: flex;\n  padding: 1rem;\n  margin-bottom: 2rem;\n"]);_4_improvementSection_templateObject4=function _templateObject4(){return data;};return data;}function _4_improvementSection_templateObject3(){var data=_4_improvementSection_taggedTemplateLiteral(["\n  margin: 4rem 0 10rem 0;\n"]);_4_improvementSection_templateObject3=function _templateObject3(){return data;};return data;}function _4_improvementSection_templateObject2(){var data=_4_improvementSection_taggedTemplateLiteral(["\n  transform: skewY(9deg);\n"]);_4_improvementSection_templateObject2=function _templateObject2(){return data;};return data;}function _4_improvementSection_templateObject(){var data=_4_improvementSection_taggedTemplateLiteral(["\n  transform: skewY(-9deg);\n  text-align: center;\n  padding: 2rem 0 0 0;\n"]);_4_improvementSection_templateObject=function _templateObject(){return data;};return data;}function _4_improvementSection_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var _4_improvementSection_ImprovementSection=function ImprovementSection(){return external_react_default.a.createElement(_4_improvementSection_SkewedSectionBlue,null,external_react_default.a.createElement(_4_improvementSection_NoSkew,null,external_react_default.a.createElement(external_react_grid_system_["Container"],null,external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12},external_react_default.a.createElement(primitives["a" /* BigNumber */],null,strings["a" /* default */].landingPage.improvementSection.number))),external_react_default.a.createElement(external_react_grid_system_["Row"],null,external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12},external_react_default.a.createElement(primitives["j" /* Title2 */],null,strings["a" /* default */].landingPage.improvementSection.title)),external_react_default.a.createElement(external_react_grid_system_["Col"],{xs:12,sm:6,offset:{sm:3}},external_react_default.a.createElement(primitives["h" /* Text */],null,strings["a" /* default */].landingPage.improvementSection.description))),external_react_default.a.createElement(RowMargin,null,external_react_default.a.createElement(_4_improvementSection_TextContainer,null,external_react_default.a.createElement("div",null,"Verbrauchskosten"),external_react_default.a.createElement("div",null,"Einsparung mit BRIVE")),external_react_default.a.createElement(BarContainer,null,external_react_default.a.createElement(FullBar,{percentage:79}),external_react_default.a.createElement(ImprovementBar,{percentage:21},"7 \u2013 21%")),external_react_default.a.createElement(_4_improvementSection_TextContainer,null,external_react_default.a.createElement("div",null,"Wartung & Verschlei\xDF"),external_react_default.a.createElement("div",null,"Einsparung mit BRIVE")),external_react_default.a.createElement(BarContainer,null,external_react_default.a.createElement(FullBar,{percentage:84}),external_react_default.a.createElement(ImprovementBar,{percentage:16},"8 \u2013 16%")),external_react_default.a.createElement(_4_improvementSection_TextContainer,null,external_react_default.a.createElement("div",null,"Unfallkosten"),external_react_default.a.createElement("div",null,"Einsparung mit BRIVE")),external_react_default.a.createElement(BarContainer,null,external_react_default.a.createElement(FullBar,{percentage:75}),external_react_default.a.createElement(ImprovementBar,{percentage:25},"14 \u2013 25%"))))));};/* harmony default export */ var _4_improvementSection = (_4_improvementSection_ImprovementSection);var _4_improvementSection_SkewedSectionBlue=external_styled_components_default()(styles["b" /* SectionBlue */])(_4_improvementSection_templateObject());var _4_improvementSection_NoSkew=external_styled_components_default.a.div(_4_improvementSection_templateObject2());var RowMargin=external_styled_components_default()(external_react_grid_system_["Row"])(_4_improvementSection_templateObject3());var BarContainer=external_styled_components_default.a.div(_4_improvementSection_templateObject4());var FullBar=external_styled_components_default.a.div(_4_improvementSection_templateObject5(),function(props){return props.percentage;});var ImprovementBar=external_styled_components_default.a.div(_4_improvementSection_templateObject6(),function(props){return props.percentage;});var _4_improvementSection_TextContainer=external_styled_components_default.a.div(_4_improvementSection_templateObject7());
// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/sections/Footer.js
var Footer = __webpack_require__(20);

// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_Home; });
function pages_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){pages_typeof=function _typeof(obj){return typeof obj;};}else{pages_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return pages_typeof(obj);}function pages_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function pages_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function pages_createClass(Constructor,protoProps,staticProps){if(protoProps)pages_defineProperties(Constructor.prototype,protoProps);if(staticProps)pages_defineProperties(Constructor,staticProps);return Constructor;}function pages_possibleConstructorReturn(self,call){if(call&&(pages_typeof(call)==="object"||typeof call==="function")){return call;}return pages_assertThisInitialized(self);}function pages_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function pages_getPrototypeOf(o){pages_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return pages_getPrototypeOf(o);}function pages_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)pages_setPrototypeOf(subClass,superClass);}function pages_setPrototypeOf(o,p){pages_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return pages_setPrototypeOf(o,p);}var pages_Home=/*#__PURE__*/function(_Component){pages_inherits(Home,_Component);function Home(props){var _this;pages_classCallCheck(this,Home);_this=pages_possibleConstructorReturn(this,pages_getPrototypeOf(Home).call(this,props));_this.contactRef=external_react_default.a.createRef();return _this;}pages_createClass(Home,[{key:"render",value:function render(){return external_react_default.a.createElement(external_react_default.a.Fragment,null,external_react_default.a.createElement(headerSection,null),external_react_default.a.createElement(problemSection,null),external_react_default.a.createElement(solutionOverviewSection,null),external_react_default.a.createElement(_1_analyseSection,null),external_react_default.a.createElement(_2_ratingSection,null),external_react_default.a.createElement(_3_rewardSection_RewardSection,null),external_react_default.a.createElement(advantagesSection,null),external_react_default.a.createElement(supportSection,null),external_react_default.a.createElement(contactSection,null),external_react_default.a.createElement(Footer["a" /* default */],null));}}]);return Home;}(external_react_["Component"]);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(57);
module.exports = __webpack_require__(62);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();
/* eslint-disable import/no-dynamic-require */


var plugins = __webpack_require__(36).default;

var _require = __webpack_require__(15),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/Daniel/Daniel/BRIVE/brive-lp/dist/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(36).default);
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapPlugins.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("swimmer");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();
/* eslint-disable import/no-dynamic-require */


var templates = __webpack_require__(39).default;

var _require = __webpack_require__(15),
    registerTemplates = _require.registerTemplates;

registerTemplates(templates);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/Daniel/Daniel/BRIVE/brive-lp/dist/react-static-templates.js", function () {
    registerTemplates(__webpack_require__(39).default);
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(templates, "templates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapTemplates.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = requireUniversalModule;

var _utils = __webpack_require__(28);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 21,
	"./": 21,
	"./index": 21,
	"./index.js": 21
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 59;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(40);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _StaticInfo = _interopRequireDefault(__webpack_require__(22));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var App = __webpack_require__(85).default;

var _default = function _default(staticInfo) {
  return function (props) {
    return _react.default.createElement(_StaticInfo.default.Provider, {
      value: staticInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, _react.default.createElement(App, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })));
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouteData = withRouteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(16));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ = __webpack_require__(15);

var _Spinner = _interopRequireDefault(__webpack_require__(29));

var _StaticInfo = __webpack_require__(22);

var _Routes = __webpack_require__(43);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var instances = [];

global.reloadAll = function () {
  instances.forEach(function (instance) {
    return instance.safeForceUpdate();
  });
};

var RouteData = (0, _StaticInfo.withStaticInfo)((0, _Routes.withRoutePathContext)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouteData, _React$Component);

  function RouteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(RouteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      instances.push(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      instances = instances.filter(function (d) {
        return d !== _this2;
      });
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader,
          routePath = _this$props.routePath; // If there was an error reported for this path, throw an error

      if (_.routeErrorByPath[routePath]) {
        throw new Error("React-Static: <RouteData> could not find any data for this route: ".concat(routePath, ". If this is a dynamic route, please remove any reliance on RouteData or withRouteData from this routes components"));
      } // If we haven't requested the routeInfo yet, or it's loading
      // Show a spinner and prefetch the data
      // TODO:suspense - This will become a suspense resource


      if (!_.routeInfoByPath[routePath] || !_.routeInfoByPath[routePath].data) {
        ;

        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(routePath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this3.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        });
      } // Otherwise, get it from the routeInfoByPath (subsequent client side)


      return children(_.routeInfoByPath[routePath].data);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp)));
var _default = RouteData;
var _default2 = _default;
exports.default = _default2;

function withRouteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(RouteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), function (routeData) {
      return _react.default.createElement(Comp, _extends({}, routeData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(instances, "instances", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(RouteData, "RouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(withRouteData, "withRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSiteData = withSiteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(16));

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(37));

var _Spinner = _interopRequireDefault(__webpack_require__(29));

var _StaticInfo = __webpack_require__(22);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // Share a single promise for all siteData requests


var siteDataPromise;
var SiteData = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SiteData, _React$Component);

  function SiteData(props) {
    var _this;

    _classCallCheck(this, SiteData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiteData).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeSetState", function () {
      var _this2;

      if (_this.unmounted) {
        return;
      }

      (_this2 = _this).setState.apply(_this2, arguments);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchSiteData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref2, siteData;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return function () {
                if (siteDataPromise) {
                  return siteDataPromise;
                }

                siteDataPromise = _axios.default.get('/__react-static__/siteData');
                return siteDataPromise;
              }();

            case 3:
              _ref2 = _context.sent;
              siteData = _ref2.data;

              _this.safeSetState({
                siteData: siteData
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    var staticInfo = _this.props.staticInfo;
    _this.state = {
      // Default siteData to use the staticInfo if possible
      // This will be undefined in development, which will
      // then be requested at runtime.
      siteData: staticInfo ? staticInfo.siteData : null
    };
    return _this;
  }

  _createClass(SiteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchSiteData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader;
      var _this$state = this.state,
          siteData = _this$state.siteData,
          siteDataError = _this$state.siteDataError; // If there was a fetch error in dev, throw it to the nearest ErrorBoundary

      if (siteDataError) {
        throw siteDataError;
      }

      if (!siteData) {
        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        });
      }

      return children(siteData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SiteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));
var _default = SiteData;
var _default2 = _default;
exports.default = _default2;

function withSiteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(SiteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), function (siteData) {
      return _react.default.createElement(Comp, _extends({}, siteData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(siteDataPromise, "siteDataPromise", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(SiteData, "SiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(withSiteData, "withSiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(16));

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(17);

var _ = __webpack_require__(15);

var _Visibility = _interopRequireDefault(__webpack_require__(38));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Prefetch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Prefetch, _React$Component);

  function Prefetch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Prefetch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Prefetch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runPrefetch", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, path = _this$props.path, onLoad = _this$props.onLoad;
                cleanedPath = (0, _utils.getRoutePath)(path);
                _context.next = 4;
                return (0, _.prefetch)(cleanedPath);

              case 4:
                data = _context.sent;
                onLoad(data, cleanedPath);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (el) {
      if (!_this.props.force && el) {
        (0, _Visibility.default)(el, _this.runPrefetch);
      }
    });

    return _this;
  }

  _createClass(Prefetch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.force) {
        this.runPrefetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["children"]);

      if (children) {
        return children({
          handleRef: this.handleRef
        });
      }

      return _react.default.createElement("div", _extends({
        ref: this.handleRef
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Prefetch;
}(_react.default.Component);

exports.default = Prefetch;

_defineProperty(Prefetch, "defaultProps", {
  children: null,
  path: null,
  force: false,
  onLoad: function onLoad() {}
});

;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Prefetch, "Prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _router = __webpack_require__(18);

var _ = __webpack_require__(15);

var _utils = __webpack_require__(17);

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(68));

var _HashScroller = _interopRequireDefault(__webpack_require__(69));

var _StaticInfo = __webpack_require__(22);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js",
    _class,
    _temp;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DefaultPath = function DefaultPath(_ref) {
  var render = _ref.render;
  return render;
};

var DefaultRouter = function DefaultRouter(_ref2) {
  var children = _ref2.children,
      basepath = _ref2.basepath;
  return _react.default.createElement(_router.Router, {
    basepath: basepath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _react.default.createElement(DefaultPath, {
    default: true,
    render: children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

var RouterHook = (0, _utils.makeHookReducer)(_.plugins, 'Router', {
  sync: true
});
var ResolvedRouter = RouterHook(DefaultRouter);
var Root = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this));
    var staticInfo = props.staticInfo;

    if ( true && staticInfo) {
      var path = staticInfo.path,
          sharedData = staticInfo.sharedData,
          sharedHashesByProp = staticInfo.sharedHashesByProp,
          templateIndex = staticInfo.templateIndex; // Hydrate routeInfoByPath with the embedded routeInfo

      _.routeInfoByPath[path] = staticInfo; // Hydrate sharedDataByHash with the embedded routeInfo

      Object.keys(sharedHashesByProp).forEach(function (propKey) {
        _.sharedDataByHash[sharedHashesByProp[propKey]] = sharedData[propKey];
      }); // In SRR and production, synchronously register the templateIndex for the
      // initial path

      (0, _.registerTemplateForPath)(path, templateIndex);
    }

    return _this;
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disableScroller = _this$props.disableScroller,
          autoScrollToTop = _this$props.autoScrollToTop,
          autoScrollToHash = _this$props.autoScrollToHash,
          scrollToTopDuration = _this$props.scrollToTopDuration,
          scrollToHashDuration = _this$props.scrollToHashDuration,
          scrollToHashOffset = _this$props.scrollToHashOffset,
          staticInfo = _this$props.staticInfo;
      var scrollerProps = {
        autoScrollToTop: autoScrollToTop,
        autoScrollToHash: autoScrollToHash,
        scrollToTopDuration: scrollToTopDuration,
        scrollToHashDuration: scrollToHashDuration,
        scrollToHashOffset: scrollToHashOffset
      };

      var Wrapper = function Wrapper(_ref3) {
        var children = _ref3.children;
        return children;
      };

      var basepath = (0, _utils.getBasePath)(); // Add the scroller if not disabled

      if (!disableScroller) {
        Wrapper = function Wrapper(_ref4) {
          var children = _ref4.children;
          return _react.default.createElement(_HashScroller.default, _extends({}, scrollerProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }), children);
        };
      }

      return _react.default.createElement(_ErrorBoundary.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, _react.default.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, _react.default.createElement(ResolvedRouter, {
        basepath: basepath,
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, children)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Root;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  disableScroller: false,
  // TODO:v6 document this!
  autoScrollToTop: true,
  autoScrollToHash: true,
  scrollToTopDuration: 0,
  scrollToHashDuration: 800,
  scrollToHashOffset: 0
}), _temp));
var _default = Root;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DefaultPath, "DefaultPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(DefaultRouter, "DefaultRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(RouterHook, "RouterHook", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(ResolvedRouter, "ResolvedRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(Root, "Root", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(17);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: false
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      if (typeof document === 'undefined') {
        throw error;
      }

      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      if (error) {
        return _react.default.createElement("div", {
          style: {
            margin: '1rem',
            padding: '1rem',
            background: 'rgba(0,0,0,0.05)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, _react.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Oh-no! Something\u2019s gone wrong!"), _react.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), _react.default.createElement("button", {
          size: "s",
          onClick: function onClick() {
            return window.location.reload();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Reload"));
      }

      return (0, _utils.unwrapArray)(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ErrorBoundary;
}(_react.default.Component);

exports.default = ErrorBoundary;
;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorBoundary, "ErrorBoundary", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _raf = _interopRequireDefault(__webpack_require__(42));

var _Location = _interopRequireDefault(__webpack_require__(44));

var _scrollTo = _interopRequireDefault(__webpack_require__(41));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(5).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var RouterScroller =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouterScroller, _React$Component);

  function RouterScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouterScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouterScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToTop", function () {
      var _this$props = _this.props,
          autoScrollToTop = _this$props.autoScrollToTop,
          scrollToTopDuration = _this$props.scrollToTopDuration;

      if (autoScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToTopDuration
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToHash", function (hash) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$orScrollToTop = _ref.orScrollToTop,
          orScrollToTop = _ref$orScrollToTop === void 0 ? true : _ref$orScrollToTop;

      var _this$props2 = _this.props,
          scrollToHashDuration = _this$props2.scrollToHashDuration,
          autoScrollToHash = _this$props2.autoScrollToHash,
          scrollToHashOffset = _this$props2.scrollToHashOffset;

      if (!autoScrollToHash) {
        return;
      }

      if (hash) {
        var resolvedHash = hash.substring(1);

        if (resolvedHash) {
          // We must attempt to scroll synchronously or we risk the browser scrolling for us
          var element = document.getElementById(resolvedHash);

          if (element !== null) {
            (0, _scrollTo.default)(element, {
              duration: scrollToHashDuration,
              offset: scrollToHashOffset
            });
          } else {
            (0, _raf.default)(function () {
              var element = document.getElementById(resolvedHash);

              if (element !== null) {
                (0, _scrollTo.default)(element, {
                  duration: scrollToHashDuration,
                  offset: scrollToHashOffset
                });
              }
            });
          }
        }
      } else if (orScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToHashDuration
        });
      }
    });

    return _this;
  }

  _createClass(RouterScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this; // Do not scroll to top on initial page load if hash does not exist


      this.scrollToHash(window.location.hash, {
        orScrollToTop: false
      });
      (0, _Location.default)(function (_ref2) {
        var hash = _ref2.hash,
            pathname = _ref2.pathname;

        if (_this2.prevPathname !== pathname && !hash) {
          _this2.scrollToTop();
        } else if (_this2.prevHash !== hash) {
          _this2.scrollToHash(hash);
        }

        _this2.prevPathname = pathname;
        _this2.prevHash = hash;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouterScroller;
}(_react.default.Component);

exports.default = RouterScroller;
;

(function () {
  var reactHotLoader = __webpack_require__(5).default;

  var leaveModule = __webpack_require__(5).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RouterScroller, "RouterScroller", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/HashScroller.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(false);
// Module
exports.push([module.i, "body {\n  font-family: 'IBM Plex Sans', sans-serif !important;\n  font-weight: 500;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n\na {\n  text-decoration: none;\n  color: #ffffff;\n  color: rgba(255,255,255,0.80);\n  font-weight: 400;\n  -webkit-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\na:hover {\n  color: rgba(255,255,255,1);\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #108db8;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  /*padding: 1rem;*/\n}\n\nh1 {\n  margin: 0;\n  color: #373434;\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n\n.fullsection {\n  width: 100vw;\n  height: 100vh;\n}\n\n.fullsection--light {\n  background-image: -webkit-linear-gradient(315deg, rgba(144, 169, 0, 0.32) 0%, rgba(0, 184, 163, 0.32) 100%);\n  background-image: -o-linear-gradient(315deg, rgba(144, 169, 0, 0.32) 0%, rgba(0, 184, 163, 0.32) 100%);\n  background-image: linear-gradient(135deg, rgba(144, 169, 0, 0.32) 0%, rgba(0, 184, 163, 0.32) 100%);\n}\n\n\n.margin-bottom-1 {\n  margin-bottom: 1rem;\n}\n\n.margin-bottom-2 {\n  margin-bottom: 2rem;\n}\n\n.margin-bottom-3 {\n  margin-bottom: 3rem;\n}\n\n.margin-top-3 {\n  margin-top: 3rem;\n}", ""]);



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("webfontloader");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjY5cHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDI2OSA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkxvZ288L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjEuMTEwMjIzMDJlLTE0JSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMS4xMTAyMjMwMmUtMTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5MEE5MDAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwQjhBMyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJMb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiIGZpbGw9IiM0QTRBNEEiIGZvbnQtZmFtaWx5PSJJQk1QbGV4U2Fucy1TZW1pQm9sZCwgSUJNIFBsZXggU2FucyIgZm9udC1zaXplPSI1NS45OTk5OTkiIGZvbnQtd2VpZ2h0PSI1MDAiPgogICAgICAgICAgICA8dGV4dCBpZD0iQlJJVkUiPgogICAgICAgICAgICAgICAgPHRzcGFuIHg9IjAuMzM2MDAxNDI1IiB5PSI1NyI+QlJJVkU8L3RzcGFuPgogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAwLjAwMDAwMCwgMi4wMDAwMDApIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlRyaWFuZ2xlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNC41MDAwMDAsIDM0LjUwMDAwMCkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0zNC41MDAwMDAsIC0zNC41MDAwMDApICIgcG9pbnRzPSIzNC41IDAgNjkgNjkgMzQuNSA1NiAtNi4xMjg0MzExZS0xNCA2OSI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAABsCAYAAAAbiWtTAAAUr0lEQVR4AezUMQ2AAAwAwdooIlr/eOrGDojoQMJ9chY+9tNkn9fR92QBHxaTtQ4DBAM0QMAADRAwQAMEDNAAAQM0QMAADRAwQAMEDNAAAQM0QMAADRAwQAMEDNAAAQM0QMAADRAwQAMEDNAAAQM0QMAADRB+wADfHvbOAkpxpdnjeXrdVyCz7jIEZt13r7u7u7u7u7u7u7u7u7v7HUiCO/X637N53+FMB3qYwLcD3ef8D7tD0oRA/ajuqq7+j2S/yf7ooNDo1KBgG2mb/xeTVke5A1BJyRegyErjKbziOAqvMJbCy4/p0nKjhYoMDNTwOkoKgCtOX9byGwdF9eDrpt+IsL+lLd2wbL/xftQXPP7vAe0DmbR6SAFQyQ1+5sjpFF1ra4ptthvFdjyA4vscSYlDTqTkMWdQ8oRzKHnSeVz838eeReb4OQyC7b2Hrq9lQKoA+E9bKGT7gx9k9BABRAyEZDLhMc7+j7/H9OC34YHGKkya1+qzAPQFyr2R5aExAom9Ffy923M4fsWxFOk/oeW9GXh9sU12ISqVSLbZCzaiSL8JtbwePE2mcWQOnUKRwR3c44wMmKjA18wAjOnGWFsP/prSQxXfOADFvEP7bz00m0nzUH0TgPBORkyjxLFnUvJk5oEcdxYljjqNEoeeRIkDj6PE/sfyR+6tHH0691JSZ11KqYuuofQVN1L66lsofe1tlL7udvyb/f1aSp52IT8+tvVeZM/ZgMzh0wBDGCK8mpYEIDw/6ZbLkz1vQwCwptey19iSsg8+QYVvf6DC51+zz+VWsoyVAUYFv2YE4HuTJ/9PxGc8lxbBT6Bk13GfdvYbuwyT5pH6JAABJLN9PpXiCapHK2WyVPj+J8rc9yjFdzmoC4YrjGHgbTEAbrQzUS5XVwDy19l0VypFY926LHz1HVkdqzKPvAk9QeUBBteM+XsGHg5LPbgLk+aR+i4AJ86jYmeEGtEKX35L8b2PgHHjtVtnDnDYFLLnb4ShMHv/R1LqjIsp+9izRIWCJwDEa2DIW/jiG3JrmdvvByQVAJsNgKY/eKW79+fuBYZ9xqNMmkfquwCcMJeKf3dSI1vm5nso0hZqKQgCaAAQnx9dagSZoVWolEp5A8CVxiPIUnGesfjbH2SOmtF891wB0Hi5p+BZ6DF+9e2oUYsxaV6ozwZB2DXbq21OiYOOp/TlN1D20Wco//4nVEqm6gvBm+6iMIzc13oGiKGoNX1tSQDKD38rtVLYJHPCvOYDoBoCB96J9xA80S4A/vhP/4lLM2keqG+nwfQb70SCuTHBQHOvvkWiln/jPYrvdghP5eDa72hKHMACJYedTMnjz6bUuVdQ9qEnqfjHX1StxXc5GMERBcBeAhBRXmvy6lSKuc/l5t/7GMc2YWqMigI/kezhEBjAZJ7jB+IEaZUIDePLvfKm61xS5+JDhKkyACgEqJnj5vCocSkWdzfKDz6FBwqjVAD0IAiSvupmcmvx3Q9txh8bBcCwP3Accvx6GgQx/YGrmDSP1FQAhIG6AvCuhxDJlfBK2im8zEiKbrwzlawoCVuxSNG1t/EgRUMBkA9tB0+i9I13IfpeNvRFClO4X1PeYwXAzrbgGMtvxC3JN292DYELJssFZNK8kgKgWIBg8qjTyaVh9QO8Rom+FAClIMhAZ6+8CSX2PZriux2KoXGze34qEbpTD5ySlfQC+XG+4PVMmqdSAHSPNI+eyaKQf4r7u/VeDJ9l+lIAlJ/CwD3F56RWgbQCABHNNf3B2zAUtl1yAq2F8LMYqH4cFlqeSfNSCoDuCrOlWbmnXyRRyz7xvHt+mgKgkgKg/IoQNrw9Nuo3wpjjSzElFz4uBGOcwe98J/LrtRQA3YXjcZ6gMTC+VPscoC+A9cbo31mDjOEeVB7VHthee/+O0Ee53IehK/F8P2dNdCMAKL7WAVy9SX0Rv3/eZ6DK5zIR98H5LPAZ4bOot0eqymH96QsNi+uhfRnsbrX04GO2HrzT1o3Dw/728UxavaQA6C5AAPmFwv7ufrjHQ2AYH86BMVoz1+URztS5l1Pmlnsp+8ATlH3wScrcdDfWNyM/DgnAOL668fn4tcJwnWN5QQFz+FQ2jJ9B5tjZPLptjp/LNAfJ3OVFCJiBW2xlTXT97Sm+5+GUOPgEim23b10AiPfuAB8/Ahw6uJ5hU/B+2XXO5sscrcACrPbBc1KeelcUfwx/Pxx2bUGKDOV94j2jL/SL/3eL3uMcXBOCMda0tSm60U4U3/kgiu91BP+MYpvtStbkNXBvAcNmAqCSAqBYjmEWPvtKHAQ5+XwYXY9gCoNMHHAs5V57Wyphu/DjLzw/kUMLwHC5ToAOxQOybLiOvvMffMKX7xV++JmKv/7OcxuLf/7NV84UfvoFxox7xSEUZUUIMvc+wp77pzzQ/c33TqqPZwAEQPDa6RvupOxDT1HupTco/+5HVPj8Kyp89yMVf/4N18kjwCXT5vOv1tQ1AUr3+8qeA6yQSoMfpewzL/Gcz/wnX1LhW9bnL+z9//UPXzZZipgogOEEV3CtEI/o4/6hCEMpkSRRw1rl3POvUGzLPfCDgfvSvABUAFQAhDdlr7oZUTYrSARkxr76FohcSoC0aygdZetp8x9/TjU0wAFpOfBShB4VvKZSxJIs9JDhXk542VGUOPwUIczQCp9+6T0AsfRtve17VJTCmrFORQACZjmsT5ZsmXsfdTxQBte14HXzz1O6FYuUuuAqx3tVAOzrUgB0rzUIz0jUci++Dm9G2vNLHnUaN+betFI8SbFt9sZ7EABwlnRhiFIyiTJTfIhLhSKhNRSA624n/55TaSkAZh9+imQbn7pYfCgf5hZ//4tqbcmTzsV3pLkAqACoAAiwYWiLJFwqChbppzMYMmHeqWpfMJDEEaeQW4PXln3iOUpdch0f6mZuvhurTFyLAxTDJtmz1oPn2a02IqLSxR9/wVDN9Xw0rHCBZwuvEq2BAMRz7JiNePWXEoCdy/UegCuOw1pwDJ2lphUyt97H6z2WTMv1/mDIXIrGq/wgJcievT6uTQGwjxdleKnQ1oHIc6OFxO5/LwB5lJCJT26PBfj4wnvMJ2GoI2goBy8FUhgmggqldFp8PWzlgxVa1XldR/zc2Ka7YD7KLfqM63XA1A2E1qTVKLrmVhTf6QAAUQDRCKUvu6H6SO/bHzwHoHOdCNBYE+eTPX9jim21J+4pgFQTALkGdWAagB8bXW87iu24P+XYXKCooehq7o13y/4G7xmFclH2y5q0Og8aWR2rUXzfo/i8pEtj59zUUC+QJQ4bG7SiLCb2ZVyDWMoMk+ahkAx9MvMAHzF9xsONVBjSje+Q/9gQAN75IFZ3AB4Qho4wcEADE/PcENPX3OpeDCGXR9EEeH4wYgkjn0T5Dz8lUUN1ahgODNtt+G21z0cgQ+B6lBAhFkYjHZhjqAmY5t/+QOi5FH/9o+xvGApm7niwq7L2/segsjaqYyOSWp80GB+usx3HOj8mCNjUDEAn3QXHYe62838HU+r0i8Wemx0t85DhOePzd1KPnO8GHvF9seeszz1CUSt8/R1Fhkxu2FyghmIArSjkBJp6IGwPCazApDWLwnrgLOQ+NgKAiICiUkzu9Xcp/yaLEr7zIQ9KFH/6FcOeqgVRY1vuCWOV+rIDYIj2ilr2qRcwhK265wgMMrbFHsLio5n7H4fnWDXdBBHWag1rcJEi4+Qf8kdohYblAeJHCBHv2gEouHepcy6XmQ/E61cKZgGCiPi7BpQaOQzWWjUDnHtJeuCPZgNgRDfObRAAa46+olwWhljSQx0YlB5EbUJhVDOK6LHE/KEDWswJdoP5P2GnRl6vAJi55xF4tG4G3MwARKoQvLeqwSy8NiBXSmdI0BxvvPkAqACoAIj5n/T1d1Bs893QP/K/ZKscCz233MtvwKB6ZMiYZxK12Oa7w/BqBmDxz3+QbOxcT0sBENca22gnuWILA/n2oDyfUNRiO+yHfpoIgAqACoCClnv1bYqusy2GwdWN78xLxAEUtotd5xJDAUkphZcYhvk4+URseQAilw25gDi25QCYe/5VDHvlPfqhk9l83/d9F4AKgAqAJcvmQYn8ex8BDHhEqgd2f8PKA0R9pfLSEkecWnH+DYaVe+4VEjUEGZBAHV13Wymh5H/qwqslq9HIA7CUzZK9YBNca0sCEBXBce8UABUAWwWAmPAGuMrm15w1qFb7Ar4kLHHkqdw7oHyhAgVL8MrcVmVguITAiuu5HjUse8NcYk0AxPK+yKAQ7kPLARBRcGvKmngvCoAKgC0EQOQBLj8aX+juGtDupI5wA0YuGVJI3BrWi9qrbIpzur0+lpkhIbfODdFsTODXBEDcCwfgrQZA5FciqIXXVQDsI1IAbOxSOHyh8aXPPu66xhT743YDIP6PVSLw9Ord8m+93xUF9vUcgMlTLgAkWgeAYs+57wEQZeFbT85ucIE/LVYQlUlrFpm6cc6iCEAIhmyOnUXF739ymw/EsrQy48QQG/mCDWjIYxSAQQqAKPPUsh4gEuKd994XPcB8K4p5gHnmAf4a93X0J23BfzeDXmRiUD9/UQUghCgpChm4NNTNKzMmGAKWoIkaVjogCozVJF4ovuMBGLrXBMDY1nsB1q0JwNvu67sANAca7a0qyxeYz27Cu5bf+DTSDNKNT5h322ktwgVRYXjW9HXc5vSwdA7GJgVA1L4LLzUCx3sjJwdQHoDi5N1WAyCCYX3YA2xZdQ4d7w/7jTQqt8SaRNYiXhGaGyeLEhdchsGo4owvf/kQeA/xkPXdD53lb15JAVABsIWktw9mjzEODaVGARCpMq6FTLOPPF0OkpXGoxKLqIwWIIrKzeizbwBQAVABUAFQARDrRQvffC83oT5gIsopiWrJYRgNeOAa+wAAFQAVABUAFQBh8FPW4MmzopY67wpubOXAnESFr74jQcMGOx7Uj1MAVABUAFRqUBQ4USEKHN/pwG5ffvw/c9+j7kNm741FAVABUAFQyfNNkbB3hmsVkFLERDWVbqkoMC4UFXXNHVx1M1SVWQQBqACoAKgAqADoC8CA+D6yead0ujCf7H7xFx/zgMYqrru05V5+kyI6P653G34rAIqlAKgAaHMFpWRK3nzL+z4dNa4k/nKjytcAD/xXKXVnbw5EfeO7HIRiqJU3xJmzgauxA7SZm+6qsDHPvU7ajPSG6s5aZaxjRcEFXL8CYIsB8G89NLuaYnpwzm9txiAmTUZ/DTQGmOycSn3i+bAeGMekSQh9LhXRQ7PMSn0y2boxiTTtP5m0auoBAEtMnUx/hf3G35WEY5iy1YDFn9cNuwd9phoKQV+AGyfm7HIvvU5ogjLyqICCVBTk9jFNheHxTcdtZmQoP4+ghszevcnjzoYRVU6gnrku36ENzc0TtNfaCsfCYAFNABGCQaFwA/4O8PHrRHpN8tQLeIXo+J6H45jGAhD3mJ2DKLcrANl7xgbuOLYnn5s5eJL7niDYxH1F3qcCIIy/mrJ6iJghHs2kSckX2Cmjhyr2mdZDgMBDTJqM/tGDHY4nZrko7g8Se+3vaNiwxZm0KpICIH/OZ9jmoEAgpk/uJyN2D16KV9kWE88zg9pFpr8/eJ+BW1MeLHGT2bsXhowvqDVtLVRJ5hvVoInSUDCfB08Dxgah4jM2vIGhybb0VbdIbYqNa0ueeC5VbLkc91iTrIBqfLdDeBI1BA8UdQfTl15PuadfxO5uZfUK4/sejf7rDkD08f+rTgbxndy4wZeEm8UX8B5QWgwbQgGWOBdDfXGfgEZbiPU5D7UPsa2lsG5hjC35s4wF+IxRv9D5UWg1AMoXQwDMwnrwKCZNSj5jx4WAc1WKPx98kEmTkAPAklWhz5ifQ+cbjwGIRysxbKqPSZMQ9gV+utq+wHg+7A9uwqTJiJ1zTe1rfOW/lNicOvvoM8jT4yWq6tmwn0fy9IvgscCIpa4Rx2Xuf4y8bvF9jqo/ADGX2bEqKkfjHvMyUiXTrlw4tlhC4Vm+iVT28ecoffG1zLte14EgAkYAJN8DOfvQk8zb/qJrf+BCoXKfdpR/xrlnX6b01bfgRwI/Qq0HQJmD0jUAsJq3kqwNgMVKw8BoHQEYHhRsY9IkJLUxOn/eZ2zGpEnJb1xbVwCi8Gj7fD4X14iWe+Ut7PEr3hWuCkSQF5i591FvAbj/sXUHIJ6HR93bhsoz/L45K2XW25562fCjgvffugBUAFQARJS2GDapTg0biMNLQeUUvPead/5y9plFOXwM83rbMHSPYkOflSSKIbz/idhoN9tNBoA4rvcA3OOwMgBiuNu7Bog9VA2A8DLF5977SG0A/FYcFMMm7AqACoCNB+CEuV1DX9OiUqQG4TzLxn4gfKPw/CdfUPaJ5/geHPhVRw4gn8eSmICXna9E3mDi6NN5AATXINMw/EMhhdQl18FzQwQYUJW6R7nnX+t2f/D/2IY7VgMonsdxzvk132OU7eL30AHgGls5z9XYp03p626vBB3ca2wahWO7n3vDnTi3xwDMv/OR+F5uvWeDt8VUAFQAhNqCGAYDVLUruAqfkzJHzcCEPIzemaCXg0wN3iCM08kVhCeXOOQEPs+GtBmk6mRuv5/SV95EyWPO4ENQq2M1nOsEI5z5RymZ4+eK3jfWN8OwZdZB4/heCRF357XgSSNA0us+x8yqfP0+vpWl5LkS0g3swyy+l0OnyPWnAKgA6D1Q2gGTXqodUJH4EnsPQwAXQATc8IihovN/B3g4ruZrG+hyf+TTVHp/f9GHt33KB6H+r506wEAoCqIwfFdRdxFVe0sbaLmJhLuARj0ABjw4PnxgDBz8/e+uWwqgAAICKICAAAogIIACCAigAAICKICAAAogIIACCAhgUAABARRAQAAFEBBAAQQEUAABARRAQAAFEBDAjAACAiiA7/IBegKYFcBtm1VetVkDEMCgAP42n+fH83A6rhYggEEB/N+vtzJ6gACmBXBe7mW0AAEUwDAggAIICKAAAgIogIAACiAQH0ABBARQAAEBFEBAAAUQyA+gAAICKICAAAogIIACCAigAEIkARRAQAAFEBBAAQQEUACBLx05Dx2c+NdKAAAAAElFTkSuQmCC"

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/berliner_startup_stipendium.92f987a8.png";

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjY5cHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDI2OSA3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPl8yPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxLjExMDIyMzAyZS0xNCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjEuMTEwMjIzMDJlLTE0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTBBOTAwIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMEI4QTMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iXzIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wMDAwMDAsIDE3LjAwMDAwMCkiIGZpbGw9IiM0QTRBNEEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMC45MjgwMDEzNDcsNDAgTDAuOTI4MDAxMzQ3LDAuOTEyMDAwNjY2IEwxOS4wMTYwMDEsMC45MTIwMDA2NjYgQzI1LjQ1NjAwMDksMC45MTIwMDA2NjYgMjkuMzc2MDAwOSw0Ljg4ODAwMDYgMjkuMzc2MDAwOSwxMC45MzYwMDA1IEMyOS4zNzYwMDA5LDE2Ljg3MjAwMDQgMjUuOTYwMDAwOSwxOS4xMTIwMDA0IDIyLjM3NjAwMSwxOS4zMzYwMDA0IEwyMi4zNzYwMDEsMTkuNjcyMDAwMyBDMjUuNzkyMDAwOSwxOS43MjgwMDAzIDMwLjgzMjAwMDgsMjIuMTM2MDAwMyAzMC44MzIwMDA4LDI4LjgwMDAwMDIgQzMwLjgzMjAwMDgsMzUuMDcyMDAwMSAyNi41MjAwMDA5LDQwIDIwLjc1MjAwMSw0MCBMMC45MjgwMDEzNDcsNDAgWiBNOC4zMjAwMDEyMiwyMy4yNTYwMDAzIEw4LjMyMDAwMTIyLDMzLjcyODAwMDEgTDE4LjYyNDAwMSwzMy43MjgwMDAxIEMyMS40MjQwMDEsMzMuNzI4MDAwMSAyMy4xMDQwMDEsMzIuMjE2MDAwMSAyMy4xMDQwMDEsMjkuNDcyMDAwMiBMMjMuMTA0MDAxLDI3LjU2ODAwMDIgQzIzLjEwNDAwMSwyNC44MjQwMDAzIDIxLjQyNDAwMSwyMy4yNTYwMDAzIDE4LjYyNDAwMSwyMy4yNTYwMDAzIEw4LjMyMDAwMTIyLDIzLjI1NjAwMDMgWiBNOC4zMjAwMDEyMiw3LjE4NDAwMDU2IEw4LjMyMDAwMTIyLDE3LjIwODAwMDQgTDE3LjQ0ODAwMTEsMTcuMjA4MDAwNCBDMjAuMTM2MDAxLDE3LjIwODAwMDQgMjEuNzA0MDAxLDE1LjY0MDAwMDQgMjEuNzA0MDAxLDEzLjA2NDAwMDUgTDIxLjcwNDAwMSwxMS4zMjgwMDA1IEMyMS43MDQwMDEsOC42OTYwMDA1MyAyMC4xMzYwMDEsNy4xODQwMDA1NiAxNy40NDgwMDExLDcuMTg0MDAwNTYgTDguMzIwMDAxMjIsNy4xODQwMDA1NiBaIE00NS40NDgwMDA2LDI0LjkzNjAwMDMgTDQ1LjQ0ODAwMDYsNDAgTDM4LjA1NjAwMDcsNDAgTDM4LjA1NjAwMDcsMC45MTIwMDA2NjYgTDU1LjY5NjAwMDQsMC45MTIwMDA2NjYgQzYyLjgwODAwMDMsMC45MTIwMDA2NjYgNjcuMjMyMDAwMiw1LjYxNjAwMDU5IDY3LjIzMjAwMDIsMTMuMDA4MDAwNSBDNjcuMjMyMDAwMiwxOC4zODQwMDA0IDY0Ljc2ODAwMDMsMjIuNDcyMDAwMyA1OS45NTIwMDAzLDI0LjA5NjAwMDMgTDY3Ljk2MDAwMDIsNDAgTDU5LjcyODAwMDMsNDAgTDUyLjQ0ODAwMDUsMjQuOTM2MDAwMyBMNDUuNDQ4MDAwNiwyNC45MzYwMDAzIFogTTQ1LjQ0ODAwMDYsMTguNzIwMDAwNCBMNTQuOTY4MDAwNCwxOC43MjAwMDA0IEM1Ny44MjQwMDA0LDE4LjcyMDAwMDQgNTkuNTYwMDAwMywxNy4xNTIwMDA0IDU5LjU2MDAwMDMsMTQuMjk2MDAwNCBMNTkuNTYwMDAwMywxMS43MjAwMDA1IEM1OS41NjAwMDAzLDguODY0MDAwNTMgNTcuODI0MDAwNCw3LjM1MjAwMDU2IDU0Ljk2ODAwMDQsNy4zNTIwMDA1NiBMNDUuNDQ4MDAwNiw3LjM1MjAwMDU2IEw0NS40NDgwMDA2LDE4LjcyMDAwMDQgWiBNOTEuMzY3OTk5OCw0MCBMNzMuNjE2MDAwMSw0MCBMNzMuNjE2MDAwMSwzNC4wNjQwMDAxIEw3OC43NjgsMzQuMDY0MDAwMSBMNzguNzY4LDYuODQ4MDAwNTYgTDczLjYxNjAwMDEsNi44NDgwMDA1NiBMNzMuNjE2MDAwMSwwLjkxMjAwMDY2NiBMOTEuMzY3OTk5OCwwLjkxMjAwMDY2NiBMOTEuMzY3OTk5OCw2Ljg0ODAwMDU2IEw4Ni4xNTk5OTk5LDYuODQ4MDAwNTYgTDg2LjE1OTk5OTksMzQuMDY0MDAwMSBMOTEuMzY3OTk5OCwzNC4wNjQwMDAxIEw5MS4zNjc5OTk4LDQwIFogTTExNi4zOTk5OTksNDAgTDEwOCw0MCBMOTUuMjMxOTk5NywwLjkxMjAwMDY2NiBMMTAyLjc5MiwwLjkxMjAwMDY2NiBMMTA4Ljc4NCwxOS45NTIwMDAzIEwxMTIuMjU1OTk5LDMyLjk0NDAwMDEgTDExMi40MjM5OTksMzIuOTQ0MDAwMSBMMTE1LjgzOTk5OSwxOS45NTIwMDAzIEwxMjEuODMxOTk5LDAuOTEyMDAwNjY2IEwxMjkuMTY3OTk5LDAuOTEyMDAwNjY2IEwxMTYuMzk5OTk5LDQwIFogTTE2MC40MTU5OTksNDAgTDEzNC42NTU5OTksNDAgTDEzNC42NTU5OTksMC45MTIwMDA2NjYgTDE2MC40MTU5OTksMC45MTIwMDA2NjYgTDE2MC40MTU5OTksNy40NjQwMDA1NSBMMTQyLjA0Nzk5OSw3LjQ2NDAwMDU1IEwxNDIuMDQ3OTk5LDE2LjY0ODAwMDQgTDE1OC4yODc5OTksMTYuNjQ4MDAwNCBMMTU4LjI4Nzk5OSwyMy4yMDAwMDAzIEwxNDIuMDQ3OTk5LDIzLjIwMDAwMDMgTDE0Mi4wNDc5OTksMzMuNDQ4MDAwMSBMMTYwLjQxNTk5OSwzMy40NDgwMDAxIEwxNjAuNDE1OTk5LDQwIFoiIGlkPSJCUklWRSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwMC4wMDAwMDAsIDIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQuNTAwMDAwLCAzNC41MDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMzQuNTAwMDAwLCAtMzQuNTAwMDAwKSAiIHBvaW50cz0iMzQuNSAwIDY5IDY5IDM0LjUgNTMgLTYuMTI4NDMxMWUtMTQgNjkiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlRyaWFuZ2xlIiBmaWxsLW9wYWNpdHk9IjAuMyIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuMDM4NDg3LCA1MS43NTAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjMuMDM4NDg3LCAtNTEuNzUwMDAwKSAiIHBvaW50cz0iMTcuMjUgMjguNzExNTEzMyA0MC4yODg0ODY3IDc0Ljc4ODQ4NjcgNS43ODg0ODY2OCA1OC43ODg0ODY3Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZSIgZmlsbC1vcGFjaXR5PSIwLjEiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzLjAwMDAwMCwgMTcuMjUwMDAwKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTIzLjAwMDAwMCwgLTE3LjI1MDAwMCkgIiBwb2ludHM9IjI4Ljc1IC01Ljc1IDQwLjI1IDI0LjI1IDUuNzUgNDAuMjUiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/camera.96a6afa8.svg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/efre.3fa35553.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/europaeische_union_sozialfonds.cdbbdaf1.png";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTlweCIgaGVpZ2h0PSI1M3B4IiB2aWV3Qm94PSIwIDAgNTkgNTMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjIgKDY3MTQ1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5ub3VuX0hlYXJ0XzE5MjA1MzQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iTGFuZGluZ3BhZ2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJCcml2ZS1MUCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2OS4wMDAwMDAsIC01NTc3LjAwMDAwMCkiIGZpbGw9IiNEM0QzRDMiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJub3VuX0hlYXJ0XzE5MjA1MzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2OS4wMDAwMDAsIDU1NzcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDIuNTQyMTA3MywwLjAwMDk5MTExNDI2MyBDMzcuNDM0MTk2NCwwLjAwMzc1OTQ5MDcyIDMyLjYxNjU1ODEsMi4zODAzMDYzMyAyOS41LDYuNDM0Njc4NTggQzI1LjIwMzIxNDIsMC44Mzk1MDMwNzggMTcuODI3NTA0NSwtMS4zOTQxNDkwOSAxMS4xNTY0MzU5LDAuODc5NTMyOTQ1IEM0LjQ4NTM2NzIzLDMuMTUzMjE0OTggLTAuMDAwNDkxMjU1MTAzLDkuNDI5NjEyOTYgMCwxNi40ODkwODI3IEMxLjc0Njc1MDg5ZS0xNSwzOC41OTU3MDc3IDI3LjY1MjMxMDEsNTIuMTEzNDc2IDI4LjgyOTUxNzQsNTIuNjc4MjQ4IEwyOS41LDUzIEwzMC4xNzA0ODI2LDUyLjY3ODI2NzcgQzMxLjM0NzY4OTksNTIuMTEzNDc2IDU5LDM4LjU5NTcwNzcgNTksMTYuNDg5MDgyNyBDNTguOTg5ODA4NCw3LjM4NzIwNDAyIDUxLjYyNzMyOTksMC4wMTEyMTU4ODE5IDQyLjU0MjEwNzMsMC4wMDA5OTExMTQyNjMgWiBNMjkuNSw0OS41MzAyMzI0IEMyNS4zMjI0NTI2LDQ3LjM0MTAxNyAzLjEwNTI2MTc4LDM0LjgyOTEzODMgMy4xMDUyNjE3OCwxNi40ODkwODI3IEMzLjEwNTI5NzExLDEwLjM4ODk0MzEgNy4yMjQ2MTAwNCw1LjA2MTQyODU5IDEzLjEyMDI5NTMsMy41MzY2MjI3MSBDMTkuMDE1OTgwNSwyLjAxMTgxNjg0IDI1LjE5NDYyNTIsNC42NzU5NjIxNyAyOC4xNDIwNTYsMTAuMDEzNzk2MyBMMjkuNSwxMi40NjY3MTI5IEwzMC44NTc5NDQsMTAuMDEzNzk2MyBDMzMuODA1Mzc0OCw0LjY3NTk2MjE3IDM5Ljk4NDAxOTUsMi4wMTE4MTY4NCA0NS44Nzk3MDQ3LDMuNTM2NjIyNzEgQzUxLjc3NTM5LDUuMDYxNDI4NTkgNTUuODk0NzAyOSwxMC4zODg5NDMxIDU1Ljg5NDczODIsMTYuNDg5MDgyNyBDNTUuODk0NzM4MiwzNC44MjkxMzgzIDMzLjY3NzU0NzQsNDcuMzQxMDE3IDI5LjUsNDkuNTMwMjMyNCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTNweCIgaGVpZ2h0PSI1M3B4IiB2aWV3Qm94PSIwIDAgNTMgNTMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjIgKDY3MTQ1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5ub3VuX2FkZF80MzcxNTEgKDEpPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkxhbmRpbmdwYWdlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQnJpdmUtTFAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MTMuMDAwMDAwLCAtNTU3Ny4wMDAwMDApIiBmaWxsPSIjRDNEM0QzIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0ibm91bl9hZGRfNDM3MTUxLSgxKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjEzLjAwMDAwMCwgNTU3Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOS40OTE0Nzk1LDI1LjIwMzg1NTYgTDI4LjEwMjk1NzMsMjUuMjA0NDQ0NCBMMjguMTAyMzY4NCwxMy44MTQ3NDQ0IEMyOC4xMDIzNjg0LDEzLjQyNzg0NDQgMjcuOTUxNjEyOCwxMy4wNjM5MTExIDI3LjY3NzE5MDYsMTIuNzkwNjY2NyBDMjcuNDA0NTM1MSwxMi41MTc0MjIyIDI3LjA0MDYwMTcsMTIuMzY2NjY2NyAyNi42NTMxMTI4LDEyLjM2NjY2NjcgQzI1Ljg1NDU3OTUsMTIuMzY3MjU1NiAyNS4yMDQ0NDYyLDEzLjAxNjggMjUuMjA0NDQ2MiwxMy44MTU5MjIyIEwyNS4yMDQ0NDYyLDI1LjIwNDQ0NDQgTDEzLjgxMjM5MDYsMjUuMjA1MDMzMyBDMTMuNDI2NjY4NCwyNS4yMDUwMzMzIDEzLjA2MzkxMjgsMjUuMzU1Nzg4OSAxMi43OTA2Njg0LDI1LjYyOTAzMzMgQzEyLjUxNjgzNTEsMjUuOTAyODY2NyAxMi4zNjYwNzk1LDI2LjI2NjggMTIuMzY2NjY4NCwyNi42NTMxMTExIEMxMi4zNjYwNzk1LDI3LjA0MDAxMTEgMTIuNTE2ODM1MSwyNy40MDMzNTU2IDEyLjc5MDY2ODQsMjcuNjc3MTg4OSBDMTMuMDY0NTAxNywyNy45NTE2MTExIDEzLjQyNzg0NjIsMjguMTAyMzY2NyAxMy44MTUzMzUxLDI4LjEwMjM2NjcgTDI1LjIwNDQ0NjIsMjguMTAyOTU1NiBMMjUuMjAzODU3MywzOS40OTE0Nzc4IEMyNS4yMDUwMzUxLDQwLjI4ODgzMzMgMjUuODU0NTc5NSw0MC45Mzk1NTU2IDI2LjY1MzExMjgsNDAuOTQwNzMzMyBMMjYuNjUzNzAxNyw0MC45NDA3MzMzIEMyNy4wNDA2MDE3LDQwLjk0MDczMzMgMjcuNDA0NTM1MSw0MC43OTA1NjY3IDI3LjY3ODM2ODQsNDAuNTE2NzMzMyBDMjcuOTUyMjAxNyw0MC4yNDI5IDI4LjEwMjk1NzMsMzkuODc4OTY2NyAyOC4xMDE3Nzk1LDM5LjQ5MjA2NjcgTDI4LjEwMjk1NzMsMjguMTAyOTU1NiBMMzkuNDkyMDY4NCwyOC4xMDI5NTU2IEMzOS44ODA3MzUxLDI4LjEwMTc3NzggNDAuMjQ0MDc5NSwyNy45NTEwMjIyIDQwLjUxNzMyMzksMjcuNjc4MzY2NyBDNDAuNzg5OTc5NSwyNy40MDQ1MzMzIDQwLjk0MDE0NjIsMjcuMDQxNzc3OCA0MC45NDEzMjM5LDI2LjY1MjUyMjIgQzQwLjk0MDE0NjIsMjUuODUzOTg4OSA0MC4yODg4MzUxLDI1LjIwMzg1NTYgMzkuNDkxNDc5NSwyNS4yMDM4NTU2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ1LjI0NzU3MjIsNy43NTMzMTExMSBDNDAuMjQ4NDk0NCwyLjc1MzY0NDQ0IDMzLjU4OTkyNzgsMCAyNi41MDAyOTQ0LDAgQzE5LjQxMDY2MTEsMCAxMi43NTI2ODMzLDIuNzUzMDU1NTYgNy43NTMwMTY2Nyw3Ljc1MzMxMTExIEMtMi41ODQzMzg4OSwxOC4wOTA2NjY3IC0yLjU4NDMzODg5LDM0LjkxMDUxMTEgNy43NTMwMTY2Nyw0NS4yNDcyNzc4IEMxMi43NTI2ODMzLDUwLjI0NjM1NTYgMTkuNDEwNjYxMSw1MyAyNi41MDAyOTQ0LDUzIEMzMy41ODk5Mjc4LDUzIDQwLjI0ODQ5NDQsNTAuMjQ2MzU1NiA0NS4yNDc1NzIyLDQ1LjI0NzI3NzggQzU1LjU4NDkyNzgsMzQuOTA5OTIyMiA1NS41ODQ5Mjc4LDE4LjA5MDA3NzggNDUuMjQ3NTcyMiw3Ljc1MzMxMTExIFogTTQzLjE5ODIzODksNDMuMTk3OTQ0NCBDMzguNzQ1MDYxMSw0Ny42NTA1MzMzIDMyLjgxNjEyNzgsNTAuMTAyNjY2NyAyNi41MDAyOTQ0LDUwLjEwMjY2NjcgQzIwLjE4NTA1LDUwLjEwMjY2NjcgMTQuMjU0OTM4OSw0Ny42NTA1MzMzIDkuODAyMzUsNDMuMTk3OTQ0NCBDMC41OTU2NjExMTEsMzMuOTg5NDg4OSAwLjU5NTY2MTExMSwxOS4wMDgxNTU2IDkuODAyMzUsOS44MDE0NjY2NyBDMTQuMjU1NTI3OCw1LjM0ODg3Nzc4IDIwLjE4NTA1LDIuODk2NzQ0NDQgMjYuNDk5NzA1NiwyLjg5Njc0NDQ0IEMzMi44MTQ5NSwyLjg5Njc0NDQ0IDM4Ljc0NTA2MTEsNS4zNDk0NjY2NyA0My4xOTgyMzg5LDkuODAyMDU1NTYgQzUyLjQwNDMzODksMTkuMDA5MzMzMyA1Mi40MDQzMzg5LDMzLjk5MTI1NTYgNDMuMTk4MjM4OSw0My4xOTc5NDQ0IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/project_together.453634a1.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/zu.683333c7.png";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(35);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(14);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(18);

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(19);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// EXTERNAL MODULE: external "react-grid-system"
var external_react_grid_system_ = __webpack_require__(2);

// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/assets/styleconfig.js
var styleconfig = __webpack_require__(7);

// EXTERNAL MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/app.css
var app = __webpack_require__(70);

// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/App.js
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var App_App=/*#__PURE__*/function(_React$PureComponent){_inherits(App,_React$PureComponent);function App(){_classCallCheck(this,App);return _possibleConstructorReturn(this,_getPrototypeOf(App).apply(this,arguments));}_createClass(App,[{key:"componentDidMount",value:function componentDidMount(){external_react_ga_default.a.initialize("UA-131835509-1",{debug:false});external_react_ga_default.a.pageview(window.location.pathname+window.location.search);Object(external_react_grid_system_["setConfiguration"])(styleconfig["a" /* containerWidthsConfid */]);}},{key:"render",value:function render(){return external_react_default.a.createElement(lib["Root"],null,external_react_default.a.createElement("div",{className:"content"},external_react_default.a.createElement(lib["Routes"],null)));}}]);return App;}(external_react_default.a.PureComponent);/* harmony default export */ var src_App = (App_App);
// CONCATENATED MODULE: /Users/Daniel/Daniel/BRIVE/brive-lp/src/index.js
// Your top level component
// Export your top level component as JSX (for static rendering)
/* harmony default export */ var src = __webpack_exports__["default"] = (src_App);if(typeof window!=="undefined"){var WebFont=__webpack_require__(72);WebFont.load({google:{families:["IBM Plex Sans:400,500,600,700"]}});}// Render your app
if(typeof document!=="undefined"){var renderMethod= false?undefined:external_react_dom_default.a.hydrate||external_react_dom_default.a.render;var src_render=function render(Comp){renderMethod(external_react_default.a.createElement(Comp,null),document.getElementById("root"));};// Render!
src_render(src_App);// Hot Module Replacement
if(false){}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.144fc11f.js.map
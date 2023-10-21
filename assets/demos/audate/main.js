"use strict";
(self["webpackChunkaudate"] = self["webpackChunkaudate"] || []).push([["main"],{

/***/ 4542:
/*!**************************************************************!*\
  !*** ./src/app/components/audate-root/app-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content-popup/content-popup.component */ 5267);
/* harmony import */ var _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../onboarding/onboarding.component */ 2586);
/* harmony import */ var _permission_request_permission_request_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../permission-request/permission-request.component */ 4611);
/* harmony import */ var _voice_search_voice_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../voice-search/voice-search.component */ 9800);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








const routes = [{
  path: 'popup',
  component: _voice_search_voice_search_component__WEBPACK_IMPORTED_MODULE_3__.VoiceSearchComponent
}, {
  path: 'popup?demo=true',
  component: _voice_search_voice_search_component__WEBPACK_IMPORTED_MODULE_3__.VoiceSearchComponent
}, {
  path: 'content-popup',
  component: _content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_0__.ContentPopupComponent
}, {
  path: 'request-permissions',
  component: _permission_request_permission_request_component__WEBPACK_IMPORTED_MODULE_2__.PermissionRequestComponent
}, {
  path: 'onboard',
  component: _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_1__.OnboardingComponent
}, {
  path: '',
  component: _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent,
  pathMatch: 'full'
}, {
  path: '**',
  component: _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 642:
/*!*********************************************************!*\
  !*** ./src/app/components/audate-root/app.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var src_app_services_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics.service */ 7478);
/* harmony import */ var src_app_services_logging_logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/logging/logging.service */ 2686);





class AppComponent {
  constructor(router, primengConfig, analytics, loggingService) {
    this.router = router;
    this.primengConfig = primengConfig;
    this.analytics = analytics;
    this.logger = loggingService.getLogger('audate-root');
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.addExtensionRedirects();
    this.analytics.logStart("AudateRoot#onInit");
  }
  /**
   * Enables navigating to different pages in chrome extension
   * where paths are not supported but fragments are.
   * This function would redirect index.html/#popup
   * (or simply /#popup) to the path /popup.
   */
  addExtensionRedirects() {
    const fragment = window.location.href.split('#')[1];
    const matchingRoute = this.router.config.map(r => r.path).find(p => p === fragment);
    if (matchingRoute) {
      this.router.navigateByUrl(fragment, {
        skipLocationChange: true
      });
    } else {
      this.logger.error('Invalid fragment ', fragment);
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_logging_logging_service__WEBPACK_IMPORTED_MODULE_1__.LoggingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["audate-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
    styles: ["@font-face {\n  font-family: \"Inter\";\n  src: url('Inter-VariableFont.ttf') format(\"truetype\");\n}\nbody,\n* {\n  font-family: \"Inter\", sans-serif;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdWRhdGUtcm9vdC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLHFEQUFBO0FBQ0Y7QUFFQTs7RUFFRSxnQ0FBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9JbnRlci1WYXJpYWJsZUZvbnQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5ib2R5LFxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 470:
/*!******************************************************!*\
  !*** ./src/app/components/audate-root/app.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dialog */ 3311);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/card */ 4722);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/carousel */ 1720);
/* harmony import */ var _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sentry/angular-ivy */ 9236);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4542);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 642);
/* harmony import */ var _voice_search_voice_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../voice-search/voice-search.component */ 9800);
/* harmony import */ var _input_plate_input_plate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input-plate/input-plate.component */ 9165);
/* harmony import */ var _transcript_transcript_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transcript/transcript.component */ 3468);
/* harmony import */ var _audio_waves_audio_waves_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audio-waves/audio-waves.component */ 7866);
/* harmony import */ var _quick_settings_quick_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quick-settings/quick-settings.component */ 9879);
/* harmony import */ var _content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content-popup/content-popup.component */ 5267);
/* harmony import */ var _permission_request_permission_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../permission-request/permission-request.component */ 4611);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../onboarding/onboarding.component */ 2586);
























class AppModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(injector, trace) {
    this.injector = injector;
  }
  ngDoBootstrap(appRef) {
    if (document.querySelector('audate-root')) {
      appRef.bootstrap(_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent);
    }
  }
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_11__.TraceService));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ErrorHandler,
      useValue: _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_11__.createErrorHandler({
        showDialog: true
      })
    }, {
      provide: _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_11__.TraceService,
      deps: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router]
    }, {
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__.APP_BASE_HREF,
      useValue: '/'
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_17__.CardModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_18__.CarouselModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__.DropdownModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_20__.DialogModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _voice_search_voice_search_component__WEBPACK_IMPORTED_MODULE_2__.VoiceSearchComponent, _input_plate_input_plate_component__WEBPACK_IMPORTED_MODULE_3__.InputPlateComponent, _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_9__.OnboardingComponent, _transcript_transcript_component__WEBPACK_IMPORTED_MODULE_4__.TranscriptComponent, _audio_waves_audio_waves_component__WEBPACK_IMPORTED_MODULE_5__.AudioWavesComponent, _quick_settings_quick_settings_component__WEBPACK_IMPORTED_MODULE_6__.QuickSettingsComponent, _content_popup_content_popup_component__WEBPACK_IMPORTED_MODULE_7__.ContentPopupComponent, _permission_request_permission_request_component__WEBPACK_IMPORTED_MODULE_8__.PermissionRequestComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_17__.CardModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_18__.CarouselModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__.DropdownModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_20__.DialogModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule]
  });
})();

/***/ }),

/***/ 9973:
/*!******************************************************!*\
  !*** ./src/app/components/audio-waves/audio-wave.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioWave: () => (/* binding */ AudioWave),
/* harmony export */   DefaultConfig: () => (/* binding */ DefaultConfig),
/* harmony export */   applyConfig: () => (/* binding */ applyConfig)
/* harmony export */ });
// A class for generating audio-waves inside a given Canvas element.
/*
 * To test changes to this function, copy-paste this entire file here https://codepen.io/justiceo/pen/PoEVEvw.
 * and uncomment the lines below:
 * document.addEventListener("DOMContentLoaded",
 *     () => {
 *         const aw = new AudioWave();
 *         aw.init(document.getElementById('canvas') as HTMLCanvasElement);
 *     }, false);
 */
class AudioWave {
  constructor() {
    this.waves = [];
  }
  // TODO: Slowly add and remove nodes to avoid jank due to complete canvas redraw.
  init(canvas, config) {
    this.canvas = canvas;
    this.config = config;
    // This may be null if another context already in use, https://stackoverflow.com/a/13406681.
    const context = this.canvas.getContext('2d');
    if (context == null) {
      console.error("Unable to obtain '2d' context for Canvas");
      return false;
    }
    this.renderingContext = context;
    // Clear waves since #init may be called multiple times per instance.
    this.waves = [];
    // Clear animation frames.
    if (this.animationId) {
      window.cancelAnimationFrame(this.animationId);
    }
    this.resizeCanvas(this.canvas, this.config.width);
    this.rotateCanvas(this.canvas, this.config.rotation);
    this.config.screenColors.forEach(color => this.waves.push(new Wave(this.canvas, color, this.config.nodeCount)));
    this.update();
    return true;
  }
  /*
   * This function runs the animation. To get its gist, comment out #requestAnimationFrame.
   * It may be invoked 60x per second on 60fps browsers to update the canvas and should be as fast as possible to avoid dropping frames.
   * count = 0;
   */
  update() {
    /*
     * Anneal node count.
     * each 2 seconds call the createNewObject() function
     */
    /*
     * if (++this.count % 10 ==  0) {
     *   this.count = 0;
     *   if (this.nodeCount > this.targetNodeCount) {
     *     this.waves.forEach((w) => w.pop());
     *     this.nodeCount--;
     *   }
     * }
     * TODO: Try adjusting the height via Math.sin.
     */
    this.renderingContext.fillStyle = this.config.opaqueColor;
    this.renderingContext.globalCompositeOperation = 'source-over';
    this.renderingContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.renderingContext.globalCompositeOperation = 'screen';
    this.waves.forEach(wave => {
      wave.points.forEach(point => this.bounceY(point));
      this.drawWave(wave);
    });
    this.animationId = requestAnimationFrame(() => this.update());
  }
  bounceY(point) {
    // The smaller this number, the more the actual height is determined by the random yBase leading to more entropy.
    const entropy = 20;
    point.y = this.config.height / 2 * Math.sin(point.yBase / entropy) + this.canvas.height / 2;
    // Increase the randomly generated Y value with a tiny amount to avoid a repeating loop.
    point.yBase += 0.3;
  }
  drawWave(wave) {
    let diff = function (a, b) {
      return (b - a) / 2 + a;
    };
    this.renderingContext.fillStyle = wave.color;
    this.renderingContext.beginPath();
    this.renderingContext.moveTo(0, this.canvas.height);
    this.renderingContext.lineTo(wave.points[0].x, wave.points[0].y);
    // Draw a quadratic curve from point i to the middle of point i and i+1.
    for (let i = 0; i < wave.points.length; i++) {
      if (wave.points[i + 1]) {
        // Change this to #lineTo to visualize points.
        this.renderingContext.quadraticCurveTo(wave.points[i].x, wave.points[i].y, diff(wave.points[i].x, wave.points[i + 1].x), diff(wave.points[i].y, wave.points[i + 1].y));
      } else {
        this.renderingContext.lineTo(wave.points[i].x, wave.points[i].y);
        this.renderingContext.lineTo(this.canvas.width, this.canvas.height);
      }
    }
    // Join all the end points and paint.
    this.renderingContext.closePath();
    this.renderingContext.fill();
  }
  resizeCanvas(canvas, width) {
    if (width) {
      canvas.width = width;
    } else {
      if (window.innerWidth > 1920) {
        canvas.width = window.innerWidth;
      } else {
        canvas.width = 1920;
      }
    }
    canvas.height = this.config.height;
  }
  rotateCanvas(canvas, rotation) {
    canvas.style.transform = 'rotate(' + rotation + 'deg)';
  }
}
class Wave {
  constructor(canvas, color, nodeCount) {
    this.color = color;
    this.points = [];
    this.canvasWidth = canvas.width;
    for (let i = 0; i <= nodeCount + 2; i++) {
      const p = new Point();
      p.x = (i - 1) * canvas.width / nodeCount;
      // p.y is derived in #bounce using this base.
      p.yBase = Math.random() * 200;
      this.points.push(p);
    }
  }
  pop() {
    const i = Math.random() * this.points.length;
    this.points.splice(i, 1);
    const step = this.canvasWidth / this.points.length;
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].x = (i - 1) * step;
    }
  }
}
/*
 * To see this point on the canvas,
 * change #quadraticCurveTo to #lineTo in #drawWave.
 */
class Point {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.yBase = 0;
  }
}
const DefaultConfig = {
  width: 400,
  height: 10,
  nodeCount: 2,
  targetNodeCount: 2,
  opaqueColor: '#2136BB',
  screenColors: ['#ff0000', '#00ff00', '#0000ff'],
  rotation: 0
};
const applyConfig = props => {
  return Object.assign({}, DefaultConfig, props);
};

/***/ }),

/***/ 7866:
/*!*****************************************************************!*\
  !*** ./src/app/components/audio-waves/audio-waves.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioWavesComponent: () => (/* binding */ AudioWavesComponent)
/* harmony export */ });
/* harmony import */ var _audio_wave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio-wave */ 9973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_logging_logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/logging/logging.service */ 2686);



const _c0 = ["waveCanvas"];
class AudioWavesComponent {
  constructor(loggingService) {
    this.audioWave = new _audio_wave__WEBPACK_IMPORTED_MODULE_0__.AudioWave();
    this.logger = loggingService.getLogger('audio-waves');
  }
  ngOnInit() {
    if (!this.config) {
      this.config = _audio_wave__WEBPACK_IMPORTED_MODULE_0__.DefaultConfig;
    }
  }
  ngAfterViewInit() {
    // Initialize the waves.
    if (!this.audioWave.init(this.canvasView.nativeElement, this.config)) {
      this.logger.error('Unable to initialize audio waves');
    }
  }
  /** Listen for changes on the config input and update canvas. */
  ngOnChanges(changes) {
    for (const propName in changes) {
      if (propName == 'config') {
        const chng = changes[propName];
        this.logger.debug('Updating config to curr:', chng.currentValue, 'from prev:', chng.previousValue);
        this.config = chng.currentValue;
        if (this.canvasView) this.audioWave.init(this.canvasView.nativeElement, this.config);
      }
    }
  }
  onResize(unusedEvent) {
    this.audioWave.init(this.canvasView.nativeElement, this.config);
  }
  static #_ = this.ɵfac = function AudioWavesComponent_Factory(t) {
    return new (t || AudioWavesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_logging_logging_service__WEBPACK_IMPORTED_MODULE_1__.LoggingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AudioWavesComponent,
    selectors: [["audate-audio-waves"]],
    viewQuery: function AudioWavesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvasView = _t.first);
      }
    },
    hostBindings: function AudioWavesComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function AudioWavesComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      config: "config"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 0,
    consts: [["id", "wave-canvas"], ["waveCanvas", ""]],
    template: function AudioWavesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "canvas", 0, 1);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5267:
/*!*********************************************************************!*\
  !*** ./src/app/components/content-popup/content-popup.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentPopupComponent: () => (/* binding */ ContentPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dialog */ 3311);
/* harmony import */ var _voice_search_voice_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../voice-search/voice-search.component */ 9800);



class ContentPopupComponent {
  static #_ = this.ɵfac = function ContentPopupComponent_Factory(t) {
    return new (t || ContentPopupComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContentPopupComponent,
    selectors: [["audate-content-popup"]],
    decls: 2,
    vars: 3,
    consts: [["position", "topright", 3, "resizable", "visible", "baseZIndex"]],
    template: function ContentPopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "audate-voice-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizable", false)("visible", true)("baseZIndex", 10000);
      }
    },
    dependencies: [primeng_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, _voice_search_voice_search_component__WEBPACK_IMPORTED_MODULE_0__.VoiceSearchComponent],
    styles: [".p-dialog {\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\n}\n\n.p-dialog-header {\n  padding: 0 !important;\n  transition-duration: 0.5s;\n}\n.p-dialog-header:hover {\n  background-color: #f0f0f0;\n}\n\n.p-dialog-content {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50LXBvcHVwL2NvbnRlbnQtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0UseUJBQUE7QUFDSjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucC1kaWFsb2cge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOCkgMHB4IDJweCA0cHg7XG59XG5cbi5wLWRpYWxvZy1oZWFkZXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgfVxufVxuLnAtZGlhbG9nLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9165:
/*!*****************************************************************!*\
  !*** ./src/app/components/input-plate/input-plate.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputPlateComponent: () => (/* binding */ InputPlateComponent)
/* harmony export */ });
/* harmony import */ var _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/recognition/recognition-state */ 9038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_recognition_recognition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recognition/recognition.service */ 5684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _quick_settings_quick_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quick-settings/quick-settings.component */ 9879);






const _c0 = function (a0) {
  return {
    listening: a0
  };
};
const _c1 = function (a0) {
  return {
    "show-settings": a0
  };
};
const _c2 = function (a0, a1) {
  return {
    "pi-angle-up": a0,
    "pi-angle-down": a1
  };
};
class InputPlateComponent {
  constructor(router, speechRecognizer, ref) {
    this.router = router;
    this.speechRecognizer = speechRecognizer;
    this.ref = ref;
    this.listening = false;
    this.showSettings = false;
    this.idleTimeoutMs = 1000;
  }
  ngOnInit() {
    this.speechRecognizer.getRecognitionState().subscribe(rstate => {
      switch (rstate.state) {
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.UNKNOWN:
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.NOT_SUPPORTED:
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.PERMISSION_NOT_GRANTED:
          this.requestPermissions();
          break;
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.LANGUAGE_NOT_SUPPORTED:
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.SERVICE_NOT_ALLOWED:
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.NO_AUDIO_INPUT_DEVICE:
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.NO_CONNECTION:
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.NO_SPEECH_DETECTED:
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.IDLE:
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.ABORTED:
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.END:
          this.listening = false;
          break;
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.START:
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.TRANSCRIBING:
          this.listening = true;
          break;
      }
      this.ref.detectChanges();
    });
  }
  ngAfterViewInit() {
    // Trigger mic tap.
    if (this.router.url === '/onboard' || this.router.url === '/popup?demo=true') {
      this.showSettings = true;
      this.ref.detectChanges();
    } else {
      this.micTap();
    }
  }
  requestPermissions() {
    setTimeout(() => {
      const url = chrome.runtime.getURL('index.html#request-permissions');
      chrome.tabs.create({
        url: url
      });
    }, this.idleTimeoutMs);
  }
  micTap() {
    if (this.listening) {
      this.speechRecognizer.stop();
    } else {
      this.speechRecognizer.start(false);
    }
  }
  onGearTap() {
    this.showSettings = !this.showSettings;
  }
  static #_ = this.ɵfac = function InputPlateComponent_Factory(t) {
    return new (t || InputPlateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_recognition_recognition_service__WEBPACK_IMPORTED_MODULE_1__.RecognitionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: InputPlateComponent,
    selectors: [["audate-input-plate"]],
    decls: 8,
    vars: 10,
    consts: [["id", "audate-input-plate"], ["id", "record-button-wrapper"], [1, "pi", "pi-circle-on", 3, "ngClass", "click"], [3, "ngClass"], ["id", "more-button-wrapper"], [2, "visibility", "hidden"], [1, "pi", 3, "ngClass", "click"]],
    template: function InputPlateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InputPlateComponent_Template_i_click_2_listener() {
          return ctx.micTap();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "audate-quick-settings", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Voice Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InputPlateComponent_Template_i_click_7_listener() {
          return ctx.onGearTap();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.listening === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, ctx.showSettings === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c2, ctx.showSettings === true, ctx.showSettings === false));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _quick_settings_quick_settings_component__WEBPACK_IMPORTED_MODULE_2__.QuickSettingsComponent],
    styles: ["#audate-input-plate {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 0;\n  background-color: #2136bb;\n  color: white;\n}\n#audate-input-plate #record-button-wrapper {\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n#audate-input-plate #record-button-wrapper i {\n  font-size: 3rem;\n  border: 1.5px solid;\n  border-radius: 50%;\n  padding: 3px;\n  transition: all 0.2s ease-in;\n}\n#audate-input-plate #record-button-wrapper i:hover {\n  transform: scale(1.1);\n}\n#audate-input-plate #record-button-wrapper i.listening {\n  color: yellow;\n  opacity: 0.95;\n}\n#audate-input-plate #more-button-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#audate-input-plate #more-button-wrapper .p-dropdown-label,\n#audate-input-plate #more-button-wrapper .p-dropdown-trigger-icon {\n  font-size: 0.6rem;\n}\n#audate-input-plate #more-button-wrapper i {\n  font-size: 1.2rem;\n  padding: 10px;\n  transition-duration: 0.5s;\n}\n#audate-input-plate #more-button-wrapper i:hover {\n  transform: scale(1.5);\n}\n\naudate-quick-settings {\n  display: none;\n  overflow: hidden;\n  transition: max-height 0.5s;\n}\naudate-quick-settings.show-settings {\n  display: block;\n  transition: max-height 0.5s ease-out;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dC1wbGF0ZS9pbnB1dC1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFDTjtBQUNNO0VBQ0UscUJBQUE7QUFDUjtBQUVNO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFBUjtBQUtFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUtJOztFQUVFLGlCQUFBO0FBSE47QUFNSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBSk47QUFLTTtFQUNFLHFCQUFBO0FBSFI7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQU5GO0FBUUU7RUFDRSxjQUFBO0VBQ0Esb0NBQUE7QUFOSiIsInNvdXJjZXNDb250ZW50IjpbIiNhdWRhdGUtaW5wdXQtcGxhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMzZiYjtcbiAgY29sb3I6IHdoaXRlO1xuXG4gICNyZWNvcmQtYnV0dG9uLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBib3JkZXI6IDEuNXB4IHNvbGlkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIH1cblxuICAgICAgJi5saXN0ZW5pbmcge1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgICBvcGFjaXR5OiAwLjk1O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNtb3JlLWJ1dHRvbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnAtZHJvcGRvd24tbGFiZWwsXG4gICAgLnAtZHJvcGRvd24tdHJpZ2dlci1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIH1cblxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmF1ZGF0ZS1xdWljay1zZXR0aW5ncyB7XG4gIGRpc3BsYXk6bm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzO1xuXG4gICYuc2hvdy1zZXR0aW5ncyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2Utb3V0O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 2586:
/*!***************************************************************!*\
  !*** ./src/app/components/onboarding/onboarding.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingComponent: () => (/* binding */ OnboardingComponent)
/* harmony export */ });
/* harmony import */ var _audio_waves_audio_wave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../audio-waves/audio-wave */ 9973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_logging_logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/logging/logging.service */ 2686);
/* harmony import */ var _voice_search_voice_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../voice-search/voice-search.component */ 9800);
/* harmony import */ var _audio_waves_audio_waves_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audio-waves/audio-waves.component */ 7866);





class OnboardingComponent {
  /*
   * TODO: Use InputDeviceService.getDefaultInputDevice to check that there is a microphone.
   * Display a notice if none.
   */
  constructor(loggingService) {
    this.steps = ['hello', 'world'];
    this.notice = "";
    this.headerWave = _audio_waves_audio_wave__WEBPACK_IMPORTED_MODULE_0__.DefaultConfig;
    this.footerWave = _audio_waves_audio_wave__WEBPACK_IMPORTED_MODULE_0__.DefaultConfig;
    this.logger = loggingService.getLogger("onboarding");
    this.headerWave = (0,_audio_waves_audio_wave__WEBPACK_IMPORTED_MODULE_0__.applyConfig)({
      width: 0,
      height: 30,
      nodeCount: 70,
      opaqueColor: '#410ff8'
    });
    this.footerWave = (0,_audio_waves_audio_wave__WEBPACK_IMPORTED_MODULE_0__.applyConfig)({
      width: 0,
      height: 20,
      opaqueColor: '#410ff8',
      rotation: 180,
      nodeCount: 180
    });
  }
  requestPermission() {
    navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true
    }).then(stream => {
      stream.getTracks().forEach(track => {
        track.stop();
      });
      this.notice = 'Permission Granted';
    }).catch(err => {
      /*
       * TODO: Handle errors:
       *
       * Chrome error messages.
       * err: DOMException: Permission denied
       * err: DOMException: Permission dismissed
       * err: DOMException: Permission denied by system // browser doesn't have access
       *
       * Firefox:
       * err: DOMException: The request is not allowed by the user agent or the platform in the current context.
       * err: DOMException: The object can not be found here - (the browser doesn't have mic permission).
       *
       * Safari:
       * err: NotAllowedError: The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.
       *
       */
      this.logger.error('Error requesting permission ', err);
      this.notice = 'Permission not granted';
    });
  }
  static #_ = this.ɵfac = function OnboardingComponent_Factory(t) {
    return new (t || OnboardingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_logging_logging_service__WEBPACK_IMPORTED_MODULE_1__.LoggingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: OnboardingComponent,
    selectors: [["audate-onboarding"]],
    decls: 55,
    vars: 3,
    consts: [[1, "header"], [1, "logo"], ["src", "assets/images/audate-logo.png"], [3, "config"], [1, "content"], [1, "pin-extension"], ["src", "assets/images/pin-audate.gif", "alt", "Pin Audate Extension"], ["id", "mic-permission"], ["src", "assets/images/mic-permission.png", "alt", "Grant Microphone Permission"], ["pRipple", "", 1, "p-button", 3, "click"], [1, "configure-options"], [1, "footer"], ["width", "70px", "src", "assets/images/audate-logo.png"], ["href", "https://audate.app"], ["href", "mailto:dev@justiceo.com"]],
    template: function OnboardingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "to increased");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "productivity");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "audate-audio-waves", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4)(12, "div", 5)(13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Step 1: Pin the extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "The browser icon is the only way of interacting with this extension, pinning it makes it accessible. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div")(19, "ol")(20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Click on the extensions icon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Find Audate in the list of extensions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Click on the pin icon on the right of Audate icon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 7)(27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Step 2: Grant microphone permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "This permission is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "necessary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " to record audio and convert it to search query.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p")(36, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OnboardingComponent_Template_button_click_36_listener() {
          return ctx.requestPermission();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Click to Grant permission ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 10)(41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Step 3: Configure the extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "You set the language you speak, search engine to use and other properties below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "audate-voice-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "audate-audio-waves", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div")(50, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "About Audate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.headerWave);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.notice);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.footerWave);
      }
    },
    dependencies: [_voice_search_voice_search_component__WEBPACK_IMPORTED_MODULE_2__.VoiceSearchComponent, _audio_waves_audio_waves_component__WEBPACK_IMPORTED_MODULE_3__.AudioWavesComponent],
    styles: [".header[_ngcontent-%COMP%] {\n  background: #410ff8;\n  color: white;\n  min-height: 200px;\n  padding: 30px;\n  padding-bottom: 20px;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  margin-left: 10px;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5em;\n  padding-left: 30px;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: yellow;\n}\n\n.content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.content[_ngcontent-%COMP%]   .pin-extension[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: -20px;\n}\n.content[_ngcontent-%COMP%]   #mic-permission[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  background: #410ff8;\n}\n.content[_ngcontent-%COMP%]   #mic-permission[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: -4px;\n  bottom: 0px;\n  background: #410ff8;\n  color: white;\n  min-height: 200px;\n  padding: 50px;\n}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: yellow;\n}\n\n.pin-extension[_ngcontent-%COMP%], #mic-permission[_ngcontent-%COMP%], .configure-options[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.pin-extension[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #mic-permission[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .configure-options[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  margin-bottom: 30px;\n}\n.pin-extension[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], #mic-permission[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .configure-options[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 800px;\n}\n.pin-extension[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], #mic-permission[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .configure-options[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 500px;\n  margin: 0 auto;\n}\n.pin-extension[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], #mic-permission[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .configure-options[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.pin-extension[_ngcontent-%COMP%]   audate-voice-search[_ngcontent-%COMP%], #mic-permission[_ngcontent-%COMP%]   audate-voice-search[_ngcontent-%COMP%], .configure-options[_ngcontent-%COMP%]   audate-voice-search[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 250px;\n  margin-bottom: 100px;\n  text-align: initial;\n  border-radius: 10px;\n  border: 1px solid #aaa;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDRSxnQkFBQTtBQUFOO0FBSUU7RUFDRSxZQUFBO0FBRko7QUFJSTtFQUNFLGFBQUE7QUFGTjs7QUFRRTtFQUNFLG1CQUFBO0FBTEo7QUFTSTtFQUNFLGtCQUFBO0FBUE47QUFXRTtFQUNFLG1CQUFBO0FBVEo7QUFXSTtFQUNFLDRDQUFBO0FBVE47O0FBY0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFaRjtBQWNFO0VBQ0UsWUFBQTtBQVpKO0FBY0k7RUFDRSxhQUFBO0FBWk47O0FBaUJBOzs7RUFHRSxrQkFBQTtBQWRGO0FBZ0JFOzs7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBWko7QUFlRTs7O0VBQ0UsWUFBQTtBQVhKO0FBY0U7OztFQUNFLFlBQUE7RUFDQSxjQUFBO0FBVko7QUFhRTs7O0VBQ0UsZ0JBQUE7QUFUSjtBQVlFOzs7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBUkoiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzQxMGZmODtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDMuNWVtO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICB9XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgfVxuICB9XG59XG5cbi5jb250ZW50IHtcbiAgJj5kaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAucGluLWV4dGVuc2lvbiB7XG4gICAgaW1nIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICB9XG4gIH1cblxuICAjbWljLXBlcm1pc3Npb24gLnAtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDEwZmY4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzNSUpIDBweCA1cHggMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIGJvdHRvbTogMHB4O1xuXG4gIGJhY2tncm91bmQ6ICM0MTBmZjg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDUwcHg7XG5cbiAgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgIH1cbiAgfVxufVxuXG4ucGluLWV4dGVuc2lvbixcbiNtaWMtcGVybWlzc2lvbixcbi5jb25maWd1cmUtb3B0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBoMiB7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogODAwcHg7XG4gIH1cblxuICBkaXYge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIG9sIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgYXVkYXRlLXZvaWNlLXNlYXJjaCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4611:
/*!*******************************************************************************!*\
  !*** ./src/app/components/permission-request/permission-request.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionRequestComponent: () => (/* binding */ PermissionRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_logging_logging_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/logging/logging.service */ 2686);


class PermissionRequestComponent {
  constructor(loggingService) {
    this.notice = '';
    this.logger = loggingService.getLogger('permission-request');
  }
  /*
   * Also request permissions to display popups,
   * This is necessary for opening search from content script.
   */
  requestPermission() {
    navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true
    }).then(stream => {
      stream.getTracks().forEach(track => {
        track.stop();
        // Wait a second then close the tab.
        setTimeout(() => {
          window.close();
        }, 2000);
      });
      this.notice = 'Permission Granted';
    }).catch(err => {
      /*
       * TODO: Handle errors:
       *
       * Chrome error messages.
       * err: DOMException: Permission denied
       * err: DOMException: Permission dismissed
       * err: DOMException: Permission denied by system // browser doesn't have access
       *
       * Firefox:
       * err: DOMException: The request is not allowed by the user agent or the platform in the current context.
       * err: DOMException: The object can not be found here - (the browser doesn't have mic permission).
       *
       * Safari:
       * err: NotAllowedError: The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.
       *
       */
      this.logger.error('Error requesting permission ', err);
      this.notice = 'Permission not granted';
    });
  }
  static #_ = this.ɵfac = function PermissionRequestComponent_Factory(t) {
    return new (t || PermissionRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_logging_logging_service__WEBPACK_IMPORTED_MODULE_0__.LoggingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PermissionRequestComponent,
    selectors: [["audate-permission-request"]],
    decls: 10,
    vars: 1,
    consts: [[1, "wrapper"], [1, "logo"], ["src", "../../../assets/images/logo-128x128.png"], [1, "content"], ["pRipple", "", 1, "p-button", 3, "click"]],
    template: function PermissionRequestComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Audate Voice Search needs microphone access to record audio for transcription.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionRequestComponent_Template_button_click_6_listener() {
          return ctx.requestPermission();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Grant permission ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.notice);
      }
    },
    styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 30px;\n}\nsection.logo[_ngcontent-%COMP%] {\n  background-color: #4010f8;\n  justify-content: center;\n}\nsection.content[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\nsection.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\nsection.content[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  background: #4010f8;\n  border: 1px solid #4010f8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wZXJtaXNzaW9uLXJlcXVlc3QvcGVybWlzc2lvbi1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUVFO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNFLG1CQUFBO0FBQU47QUFHSTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFETiIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAzMHB4O1xuXG4gICYubG9nbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwMTBmODtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICYuY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICAucC1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogIzQwMTBmODtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MDEwZjg7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9879:
/*!***********************************************************************!*\
  !*** ./src/app/components/quick-settings/quick-settings.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickSettingsComponent: () => (/* binding */ QuickSettingsComponent)
/* harmony export */ });
/* harmony import */ var src_app_services_locale_locale_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/locale/locale-properties */ 9971);
/* harmony import */ var src_app_model_search_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/search-engine */ 9541);
/* harmony import */ var src_app_services_launch_target_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/launch-target.service */ 1129);
/* harmony import */ var src_app_services_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/i18n-mssg */ 2209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_locale_locale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/locale/locale.service */ 5637);
/* harmony import */ var src_app_services_search_engine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/search-engine.service */ 3251);
/* harmony import */ var src_app_services_input_device_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/input-device.service */ 6034);
/* harmony import */ var src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/i18n.service */ 8938);
/* harmony import */ var src_app_services_logging_logging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/logging/logging.service */ 2686);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);












function QuickSettingsComponent_p_30_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 16);
  }
}
function QuickSettingsComponent_p_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_p_30_Template_p_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const locale_r6 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r8.setLocale(locale_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.activeSection = "quick-settings");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, QuickSettingsComponent_p_30_i_3_Template, 1, 0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const locale_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](locale_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", locale_r6 === ctx_r0.currentLocale);
  }
}
function QuickSettingsComponent_p_36_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 16);
  }
}
function QuickSettingsComponent_p_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_p_36_Template_p_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const se_r10 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r12.setSearchEngine(se_r10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.activeSection = "quick-settings");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, QuickSettingsComponent_p_36_i_4_Template, 1, 0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const se_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", se_r10.iconPath, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](se_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", se_r10 === ctx_r1.currentSearchEngine);
  }
}
function QuickSettingsComponent_p_42_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 16);
  }
}
function QuickSettingsComponent_p_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_p_42_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.activeSection = "quick-settings");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, QuickSettingsComponent_p_42_i_3_Template, 1, 0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const device_r14 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](device_r14.label || "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", device_r14 === ctx_r2.currentInputDevice);
  }
}
function QuickSettingsComponent_p_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.i18n.get(ctx_r3.Mssg.QsCannotChangeMic), " ");
  }
}
function QuickSettingsComponent_i_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 16);
  }
}
function QuickSettingsComponent_i_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 16);
  }
}
class QuickSettingsComponent {
  constructor(localeService, searchEngineService, inputDeviceService, launchTargetService, i18n, ref, loggingService) {
    this.localeService = localeService;
    this.searchEngineService = searchEngineService;
    this.inputDeviceService = inputDeviceService;
    this.launchTargetService = launchTargetService;
    this.i18n = i18n;
    this.ref = ref;
    this.locales = src_app_services_locale_locale_properties__WEBPACK_IMPORTED_MODULE_0__.LocalesForDefaultModel;
    this.currentLocale = src_app_services_locale_locale_properties__WEBPACK_IMPORTED_MODULE_0__.DefaultLocale;
    this.Mssg = src_app_services_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__.Mssg;
    this.searchEngines = src_app_model_search_engine__WEBPACK_IMPORTED_MODULE_1__.SearchEngines;
    this.currentSearchEngine = src_app_model_search_engine__WEBPACK_IMPORTED_MODULE_1__.DefaultSearchEngine;
    this.inputDevices = [];
    this.activeSection = 'quick-settings';
    this.logger = loggingService.getLogger('quick-settings');
    this.NO_DEFAULT_INPUT_DEVICE = {
      label: i18n.get(src_app_services_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__.Mssg.QsNoDefaultInput),
      kind: 'audioinput',
      groupId: '',
      deviceId: '',
      toJSON: function () {
        throw new Error('Function not implemented.');
      }
    };
    this.launchTarget = this.launchTargetService.toI18n(src_app_services_launch_target_service__WEBPACK_IMPORTED_MODULE_2__.DefaultLaunchTarget);
  }
  ngOnInit() {
    this.localeService.getRecognitionLocale().subscribe(locale => {
      this.currentLocale = locale;
      this.ref.detectChanges();
    });
    this.searchEngineService.getSearchEngine().subscribe(se => {
      this.currentSearchEngine = se;
      this.ref.detectChanges();
    });
    this.inputDeviceService.getDefaultDevice().then(d => {
      this.inputDevices.push(d);
      this.currentInputDevice = d;
      this.ref.detectChanges();
    }, error => {
      this.logger.error(error);
      if (!this.currentInputDevice) {
        this.currentInputDevice = this.NO_DEFAULT_INPUT_DEVICE;
      }
    });
    this.launchTargetService.getLaunchTarget().subscribe(lt => {
      this.launchTarget = this.launchTargetService.toI18n(lt);
      this.ref.detectChanges();
    });
  }
  setLocale(locale) {
    this.localeService.setRecognitionLocale(locale);
  }
  setSearchEngine(se) {
    this.searchEngineService.setSearchEngine(se);
  }
  setLaunchTarget(lt) {
    if (lt === 'Current Tab') {
      this.launchTargetService.setLaunchTarget(src_app_services_launch_target_service__WEBPACK_IMPORTED_MODULE_2__.LaunchTarget.CURRENT_TAB);
    } else if (lt === 'New Tab') {
      this.launchTargetService.setLaunchTarget(src_app_services_launch_target_service__WEBPACK_IMPORTED_MODULE_2__.LaunchTarget.NEW_TAB);
    }
  }
  static #_ = this.ɵfac = function QuickSettingsComponent_Factory(t) {
    return new (t || QuickSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_locale_locale_service__WEBPACK_IMPORTED_MODULE_4__.LocaleService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_search_engine_service__WEBPACK_IMPORTED_MODULE_5__.SearchEngineService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_input_device_service__WEBPACK_IMPORTED_MODULE_6__.InputDeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_launch_target_service__WEBPACK_IMPORTED_MODULE_2__.LaunchTargetService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_7__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_logging_logging_service__WEBPACK_IMPORTED_MODULE_8__.LoggingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: QuickSettingsComponent,
    selectors: [["audate-quick-settings"]],
    decls: 57,
    vars: 26,
    consts: [[1, "settings-wrapper", 3, "hidden"], [1, "setting", 3, "click"], [1, "label"], [1, "value"], [3, "src"], [1, "listbox", "language-selection", 3, "hidden"], [1, "header", 3, "click"], [1, "selected", "pi", "pi-angle-left"], [1, "items"], ["class", "item", 3, "click", 4, "ngFor", "ngForOf"], [1, "listbox", "search-engine-selection", 3, "hidden"], [1, "listbox", "microphone-selection", 3, "hidden"], ["class", "notice", 4, "ngIf"], [1, "listbox", "launch-target-selection", 3, "hidden"], [1, "item", 3, "click"], ["class", "selected pi pi-check", 4, "ngIf"], [1, "selected", "pi", "pi-check"], [1, "notice"]],
    template: function QuickSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_Template_div_click_1_listener() {
          return ctx.activeSection = "language";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_Template_div_click_7_listener() {
          return ctx.activeSection = "search-engine";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_Template_div_click_14_listener() {
          return ctx.activeSection = "microphone";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_Template_div_click_20_listener() {
          return ctx.activeSection = "launch-target";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "section", 5)(26, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_Template_p_click_26_listener() {
          return ctx.activeSection = "quick-settings";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, QuickSettingsComponent_p_30_Template, 4, 2, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "section", 10)(32, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_Template_p_click_32_listener() {
          return ctx.activeSection = "quick-settings";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, QuickSettingsComponent_p_36_Template, 5, 3, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "section", 11)(38, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_Template_p_click_38_listener() {
          return ctx.activeSection = "quick-settings";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](39, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, QuickSettingsComponent_p_42_Template, 4, 2, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, QuickSettingsComponent_p_43_Template, 2, 1, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "section", 13)(45, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_Template_p_click_45_listener() {
          return ctx.activeSection = "quick-settings";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 8)(49, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_Template_p_click_49_listener() {
          ctx.setLaunchTarget("Current Tab");
          return ctx.activeSection = "quick-settings";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, QuickSettingsComponent_i_52_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function QuickSettingsComponent_Template_p_click_53_listener() {
          ctx.setLaunchTarget("New Tab");
          return ctx.activeSection = "quick-settings";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, QuickSettingsComponent_i_56_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.activeSection !== "quick-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.i18n.get(ctx.Mssg.QsSpeechLanguage));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.currentLocale.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.i18n.get(ctx.Mssg.QsSearchEngine));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx.currentSearchEngine.iconPath, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.currentSearchEngine.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.i18n.get(ctx.Mssg.QsMicrophone));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx.currentInputDevice == null ? null : ctx.currentInputDevice.label) || "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.i18n.get(ctx.Mssg.QsLaunchTarget));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.launchTarget);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.activeSection !== "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.i18n.get(ctx.Mssg.QsGoBack), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.locales);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.activeSection !== "search-engine");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.i18n.get(ctx.Mssg.QsGoBack), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.searchEngines);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.activeSection !== "microphone");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.i18n.get(ctx.Mssg.QsGoBack), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.inputDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.inputDevices.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.activeSection !== "launch-target");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.i18n.get(ctx.Mssg.QsGoBack), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.i18n.get(ctx.Mssg.QsLaunchCurrentTab));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.launchTarget === "Current Tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.i18n.get(ctx.Mssg.QsLaunchNewTab));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.launchTarget === "New Tab");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf],
    styles: [".settings-wrapper[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.setting[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n.setting[_ngcontent-%COMP%]::before {\n  content: \"\\e932\";\n  font-family: \"primeicons\";\n  float: right;\n  padding-top: 10px;\n  padding-right: 5px;\n}\n.setting[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.setting[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 200;\n  text-transform: lowercase;\n  font-size: 0.7rem;\n  margin-bottom: 0;\n  padding-bottom: 5px;\n}\n.setting[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  display: flex;\n  align-items: baseline;\n  margin-top: 0;\n  padding-top: 0;\n}\n.setting[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 13px;\n  margin-right: 5px;\n  filter: invert(100%) sepia(0%) saturate(5101%) hue-rotate(193deg) brightness(123%) contrast(87%);\n}\n\nhr[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n\n.listbox[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 -15px;\n  padding: 10px;\n  padding-left: 20px;\n  font-size: 0.8rem;\n  font-weight: 200;\n}\n.listbox[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.listbox[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  font-size: 0.9rem;\n  scrollbar-width: thin;\n  scrollbar-color: #90A4AE #2136BB;\n}\n.listbox[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 11px;\n}\n.listbox[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #2136BB;\n}\n.listbox[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #90A4AE;\n  border-radius: 6px;\n  height: 30px;\n  border: 3px solid #2136BB;\n}\n.listbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n  padding: 15px;\n}\n.listbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.listbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.listbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  align-self: end;\n  margin-right: 10px;\n}\n.listbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n  margin-right: 10px;\n  filter: invert(100%) sepia(0%) saturate(5101%) hue-rotate(193deg) brightness(123%) contrast(87%);\n}\n\n.language-selection[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-left: -10px;\n  padding: 10px;\n  padding-left: 20px;\n}\n\n.notice[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9xdWljay1zZXR0aW5ncy9xdWljay1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFRTtFQUNFLFVBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRko7QUFJSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUVBLGdHQUFBO0FBSE47O0FBUUE7RUFDRSxZQUFBO0FBTEY7O0FBU0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVFJO0VBQ0UsMENBQUE7QUFOTjtBQVVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBUko7QUFVSTtFQUNFLFdBQUE7QUFSTjtBQVdJO0VBQ0UsbUJBQUE7QUFUTjtBQVlJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQVZOO0FBY0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFaSjtBQWNJO0VBQ0UsMENBQUE7QUFaTjtBQWVJO0VBQ0UsWUFBQTtBQWJOO0FBZ0JJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBZE47QUFrQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxnR0FBQTtBQWpCSjs7QUFzQkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQW5CSjs7QUF3QkU7RUFDRSxZQUFBO0FBckJKIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uc2V0dGluZyB7XG4gIG9wYWNpdHk6IDAuNzU7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkzMlwiO1xuICAgIGZvbnQtZmFtaWx5OiBcInByaW1laWNvbnNcIjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC5sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZy10b3A6IDA7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEzcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIC8vIEhleCBmb3IgI2VlZSBmcm9tIGh0dHBzOi8vY29kZXBlbi5pby9zb3N1a2UvcGVuL1Bqb3FxcC5cbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg1MTAxJSkgaHVlLXJvdGF0ZSgxOTNkZWcpIGJyaWdodG5lc3MoMTIzJSkgY29udHJhc3QoODclKTtcbiAgICB9XG4gIH1cbn1cblxuaHIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5saXN0Ym94IHtcbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgLTE1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIH1cbiAgfVxuXG4gIC5pdGVtcyB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICAgIHNjcm9sbGJhci1jb2xvcjogIzkwQTRBRSAjMjEzNkJCO1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDExcHg7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZDogIzIxMzZCQjtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBBNEFFO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgIzIxMzZCQjtcbiAgICB9XG4gIH1cblxuICAuaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIH1cblxuICAgIC5sYWJlbCB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuXG4gICAgLnNlbGVjdGVkIHtcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAvLyBIZXggZm9yICNlZWUgZnJvbSBodHRwczovL2NvZGVwZW4uaW8vc29zdWtlL3Blbi9Qam9xcXAuXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDUxMDElKSBodWUtcm90YXRlKDE5M2RlZykgYnJpZ2h0bmVzcygxMjMlKSBjb250cmFzdCg4NyUpO1xuICB9XG59XG5cbi5sYW5ndWFnZS1zZWxlY3Rpb24ge1xuICAuaXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG59XG5cbi5ub3RpY2Uge1xuICBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3468:
/*!***************************************************************!*\
  !*** ./src/app/components/transcript/transcript.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranscriptComponent: () => (/* binding */ TranscriptComponent)
/* harmony export */ });
/* harmony import */ var src_app_services_i18n_mssg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/i18n-mssg */ 2209);
/* harmony import */ var src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/recognition/recognition-state */ 9038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_recognition_recognition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/recognition/recognition.service */ 5684);
/* harmony import */ var src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/i18n.service */ 8938);





class TranscriptComponent {
  constructor(speechRecognizer, i18n, ref) {
    this.speechRecognizer = speechRecognizer;
    this.i18n = i18n;
    this.ref = ref;
    this.idleMessage = this.i18n.get(src_app_services_i18n_mssg__WEBPACK_IMPORTED_MODULE_0__.Mssg.StatusIdle);
    this.idleTimeoutMs = 2000;
    this.idleTimeout = null;
    this.message = this.idleMessage;
  }
  ngOnInit() {
    this.speechRecognizer.getRecognitionState().subscribe(rstate => {
      clearTimeout(this.idleTimeout);
      switch (rstate.state) {
        case src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__.State.START:
          this.message = this.i18n.get(src_app_services_i18n_mssg__WEBPACK_IMPORTED_MODULE_0__.Mssg.StatusListening);
          break;
        case src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__.State.TRANSCRIBING:
          if (rstate.transcript?.partialText) {
            this.message = rstate.transcript?.partialText;
          }
          break;
        case src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__.State.END:
          // Do nothing.
          break;
        case src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__.State.IDLE:
          if (this.message !== this.idleMessage) {
            this.idleTimeout = setTimeout(() => {
              this.message = this.idleMessage;
              this.ref.detectChanges();
            }, this.idleTimeoutMs);
          }
          break;
        case src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__.State.NOT_SUPPORTED:
        case src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__.State.PERMISSION_NOT_GRANTED:
        case src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__.State.NO_AUDIO_INPUT_DEVICE:
        case src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__.State.NO_CONNECTION:
        case src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__.State.NO_SPEECH_DETECTED:
        case src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__.State.ABORTED:
        case src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__.State.LANGUAGE_NOT_SUPPORTED:
        case src_app_services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_1__.State.SERVICE_NOT_ALLOWED:
          this.message = rstate.errorMessage;
      }
      this.ref.detectChanges();
    });
  }
  static #_ = this.ɵfac = function TranscriptComponent_Factory(t) {
    return new (t || TranscriptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_recognition_recognition_service__WEBPACK_IMPORTED_MODULE_2__.RecognitionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_3__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: TranscriptComponent,
    selectors: [["audate-transcript"]],
    decls: 3,
    vars: 1,
    consts: [["id", "audate-transcript"], [1, "message"]],
    template: function TranscriptComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.message);
      }
    },
    styles: [".message[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  margin: 0;\n  white-space: pre-line;\n}\n\n#audate-transcript[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 80px;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmFuc2NyaXB0L3RyYW5zY3JpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgLy8gUmVzcGVjdCBcXG4gaW4gdGV4dC5cbn1cblxuI2F1ZGF0ZS10cmFuc2NyaXB0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9800:
/*!*******************************************************************!*\
  !*** ./src/app/components/voice-search/voice-search.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VoiceSearchComponent: () => (/* binding */ VoiceSearchComponent)
/* harmony export */ });
/* harmony import */ var _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/recognition/recognition-state */ 9038);
/* harmony import */ var _audio_waves_audio_wave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio-waves/audio-wave */ 9973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_recognition_recognition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/recognition/recognition.service */ 5684);
/* harmony import */ var src_app_services_search_engine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search-engine.service */ 3251);
/* harmony import */ var _input_plate_input_plate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-plate/input-plate.component */ 9165);
/* harmony import */ var _transcript_transcript_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transcript/transcript.component */ 3468);
/* harmony import */ var _audio_waves_audio_waves_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../audio-waves/audio-waves.component */ 7866);








class VoiceSearchComponent {
  constructor(speechRecognizer, searchEngineService, ref) {
    this.speechRecognizer = speechRecognizer;
    this.searchEngineService = searchEngineService;
    this.ref = ref;
    this.waveConfig = _audio_waves_audio_wave__WEBPACK_IMPORTED_MODULE_1__.DefaultConfig;
    this.waveConfig.rotation = 180;
  }
  ngOnInit() {
    this.speechRecognizer.getRecognitionState().subscribe(rstate => {
      switch (rstate.state) {
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.START:
          this.finalTrascript = undefined;
          this.waveConfig = (0,_audio_waves_audio_wave__WEBPACK_IMPORTED_MODULE_1__.applyConfig)({
            nodeCount: 10,
            rotation: 180
          });
          break;
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.TRANSCRIBING:
          if (rstate.transcript?.finalText) {
            this.finalTrascript = rstate.transcript?.finalText;
          }
          if (rstate.transcript?.partialText) {
            if (this.waveConfig.nodeCount != 20) {
              this.waveConfig = (0,_audio_waves_audio_wave__WEBPACK_IMPORTED_MODULE_1__.applyConfig)({
                nodeCount: 20,
                rotation: 180
              });
            }
          }
          break;
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.END:
          this.waveConfig = (0,_audio_waves_audio_wave__WEBPACK_IMPORTED_MODULE_1__.applyConfig)({
            nodeCount: 2,
            rotation: 180
          });
          break;
        case _services_recognition_recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.IDLE:
          if (this.finalTrascript) {
            this.searchEngineService.performSearch(this.finalTrascript);
            setTimeout(() => window.close(), 1000);
          }
          this.finalTrascript = undefined;
          this.waveConfig = (0,_audio_waves_audio_wave__WEBPACK_IMPORTED_MODULE_1__.applyConfig)({
            nodeCount: 2,
            rotation: 180
          });
      }
    });
  }
  static #_ = this.ɵfac = function VoiceSearchComponent_Factory(t) {
    return new (t || VoiceSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_recognition_recognition_service__WEBPACK_IMPORTED_MODULE_2__.RecognitionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_search_engine_service__WEBPACK_IMPORTED_MODULE_3__.SearchEngineService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: VoiceSearchComponent,
    selectors: [["audate-voice-search"]],
    decls: 7,
    vars: 1,
    consts: [["id", "audate-voice-search"], [1, "waves"], [3, "config"]],
    template: function VoiceSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "audate-transcript");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "audate-audio-waves", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "audate-input-plate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.waveConfig);
      }
    },
    dependencies: [_input_plate_input_plate_component__WEBPACK_IMPORTED_MODULE_4__.InputPlateComponent, _transcript_transcript_component__WEBPACK_IMPORTED_MODULE_5__.TranscriptComponent, _audio_waves_audio_waves_component__WEBPACK_IMPORTED_MODULE_6__.AudioWavesComponent],
    styles: ["#audate-voice-search[_ngcontent-%COMP%] {\n  width: 250px;\n  overflow: hidden;\n}\n#audate-voice-search[_ngcontent-%COMP%]   section.waves[_ngcontent-%COMP%] {\n  margin-bottom: -4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92b2ljZS1zZWFyY2gvdm9pY2Utc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIjYXVkYXRlLXZvaWNlLXNlYXJjaCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBzZWN0aW9uLndhdmVzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9541:
/*!****************************************!*\
  !*** ./src/app/model/search-engine.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultSearchEngine: () => (/* binding */ DefaultSearchEngine),
/* harmony export */   SearchEngines: () => (/* binding */ SearchEngines)
/* harmony export */ });
// TODO: Add default provider: https://developer.chrome.com/docs/extensions/reference/search/
const SearchEngines = [{
  name: 'Google',
  queryTemplate: 'https://google.com/search?q=%QUERY%',
  iconPath: 'assets/icons/google.svg'
}, {
  name: 'Bing',
  queryTemplate: 'https://www.bing.com/search?q=%QUERY%',
  iconPath: 'assets/icons/bing.svg'
}, {
  name: 'Baidu',
  queryTemplate: 'https://www.baidu.com/s?wd=%QUERY%',
  iconPath: 'assets/icons/baidu.svg'
}, {
  name: 'Yahoo!',
  queryTemplate: 'https://search.yahoo.com/search?p=%QUERY%',
  iconPath: 'assets/icons/yahoo.svg'
}, {
  name: 'Yandex',
  queryTemplate: 'https://yandex.com/search/?text=%QUERY%',
  iconPath: 'assets/icons/yandex.svg'
}, {
  name: 'DuckDuckGo',
  queryTemplate: 'https://duckduckgo.com/?q=%QUERY%',
  iconPath: 'assets/icons/duckduckgo.svg'
}, {
  name: 'Ecosia',
  queryTemplate: 'https://www.ecosia.org/search?q=%QUERY%',
  iconPath: ''
}];
const DefaultSearchEngine = SearchEngines[0];

/***/ }),

/***/ 7478:
/*!***********************************************!*\
  !*** ./src/app/services/analytics.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsService: () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

window.dataLayer = window.dataLayer || [];
function gtag(...args) {
  window.dataLayer.push(...args);
}
class AnalyticsService {
  constructor() {
    gtag('js', new Date());
    // The chrome dashboard uses legacy, UA-41478922-4.
    gtag('config', 'G-2VCZGVT0KN');
  }
  logStart(event) {
    gtag('event', event, {
      type: "start"
    });
  }
  logMilestone(event) {
    gtag('event', event, {
      type: "milestone"
    });
  }
  logEnd(event, status) {
    gtag('event', event, {
      type: "end",
      status: status
    });
  }
  static #_ = this.ɵfac = function AnalyticsService_Factory(t) {
    return new (t || AnalyticsService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AnalyticsService,
    factory: AnalyticsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2209:
/*!***************************************!*\
  !*** ./src/app/services/i18n-mssg.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mssg: () => (/* binding */ Mssg)
/* harmony export */ });
class Mssg {
  /*
   * The string values need to match a corresponding key in messages.json.
   * To use the keys in manifest.json or CSS files, add "__MSG__" prefix and "__" suffix.
   */
  static #_ = this.AppName = "AppName";
  static #_2 = this.AppDesc = "AppDesc";
  static #_3 = this.StatusListening = "StatusListening";
  static #_4 = this.StatusIdle = "StatusIdle";
  static #_5 = this.ErrNoSoundDetected = "ErrNoSoundDetected";
  static #_6 = this.ErrNoSpeechDetected = "ErrNoSpeechDetected";
  static #_7 = this.ErrNoAudioCapture = "ErrNoAudioCapture";
  static #_8 = this.ErrPermissionNotGranted = "ErrPermissionNotGranted";
  static #_9 = this.ErrNoNetwork = "ErrNoNetwork";
  static #_10 = this.ErrAborted = "ErrAborted";
  static #_11 = this.ErrLangNotSupported = "ErrLangNotSupported";
  static #_12 = this.ErrServiceNotAllowed = "ErrServiceNotAllowed";
  static #_13 = this.ErrBadGrammer = "ErrBadGrammer";
  static #_14 = this.ErrUnhandledError = "ErrUnhandledError";
  static #_15 = this.QsGoBack = "QsGoBack";
  static #_16 = this.QsSpeechLanguage = "QsSpeechLanguage";
  static #_17 = this.QsSearchEngine = "QsSearchEngine";
  static #_18 = this.QsMicrophone = "QsMicrophone";
  static #_19 = this.QsLaunchTarget = "QsLaunchTarget";
  static #_20 = this.QsLaunchNewTab = "QsLaunchNewTab";
  static #_21 = this.QsLaunchCurrentTab = "QsLaunchCurrentTab";
  static #_22 = this.QsCannotChangeMic = "QsCannotChangeMic";
  static #_23 = this.QsNoDefaultInput = "QsNoDefaultInput";
}

/***/ }),

/***/ 8938:
/*!******************************************!*\
  !*** ./src/app/services/i18n.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var _locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I18nService: () => (/* binding */ I18nService)
/* harmony export */ });
/* harmony import */ var _locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_locales/en/messages.json */ 2911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _logging_logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logging/logging.service */ 2686);



class I18nService {
  constructor(loggingService) {
    this.i18n = [];
    this.logger = loggingService.getLogger('i18n.service');
  }
  get(key) {
    if (chrome?.i18n) {
      return chrome.i18n.getMessage(key);
    }
    this.logger.warn('chrome.i18n is not available in the current context, trying en-US as fallback');
    Object.keys(/*#__PURE__*/ (_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0__, 2)))).forEach(k => {});
    for (const [translationKey, translatedText] of Object.entries(/*#__PURE__*/ (_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0__, 2))))) {
      if (translationKey === key) {
        return translatedText['message'];
      }
    }
    this.logger.error('No translation available for key', key);
    return key;
  }
  static #_ = this.ɵfac = function I18nService_Factory(t) {
    return new (t || I18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_logging_logging_service__WEBPACK_IMPORTED_MODULE_1__.LoggingService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: I18nService,
    factory: I18nService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6034:
/*!**************************************************!*\
  !*** ./src/app/services/input-device.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputDeviceService: () => (/* binding */ InputDeviceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _logging_logging_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logging/logging.service */ 2686);


/** Provide abstraction for audio input devices. */
class InputDeviceService {
  constructor(loggingService) {
    this.logger = loggingService.getLogger('InputDevService');
  }
  getInputDevices() {
    return navigator.mediaDevices.enumerateDevices().then(devices => {
      const inputDevices = devices.filter(device => device.kind === 'audioinput');
      // Remove the default device's normal input from this list.
      const defaultInputDevice = inputDevices.find(d => d.deviceId == 'default');
      if (!defaultInputDevice) {
        return inputDevices;
      }
      return inputDevices.filter(d => d.groupId != defaultInputDevice?.groupId);
    });
  }
  getDefaultDevice() {
    return navigator.mediaDevices.enumerateDevices().then(devices => {
      const device = devices.find(d => d.deviceId == 'default');
      if (device) {
        return device;
      } else {
        this.logger.warn('Default device not found in devices list: ', devices);
        const audioInputDevices = devices.filter(d => d.kind === 'audioinput');
        const firstInputDevice = audioInputDevices.length > 0 ? audioInputDevices[0] : null;
        if (firstInputDevice) {
          return firstInputDevice;
        }
        throw 'Input device not found';
      }
    }, error => {
      throw error;
    });
  }
  static #_ = this.ɵfac = function InputDeviceService_Factory(t) {
    return new (t || InputDeviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_logging_logging_service__WEBPACK_IMPORTED_MODULE_0__.LoggingService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: InputDeviceService,
    factory: InputDeviceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1129:
/*!***************************************************!*\
  !*** ./src/app/services/launch-target.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLaunchTarget: () => (/* binding */ DefaultLaunchTarget),
/* harmony export */   LaunchTarget: () => (/* binding */ LaunchTarget),
/* harmony export */   LaunchTargetService: () => (/* binding */ LaunchTargetService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5584);
/* harmony import */ var _i18n_mssg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n-mssg */ 2209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage/storage.service */ 1922);
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n.service */ 8938);
/* harmony import */ var _logging_logging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logging/logging.service */ 2686);






// How/where to open the URL
var LaunchTarget;
(function (LaunchTarget) {
  LaunchTarget["CURRENT_TAB"] = "Current Tab";
  LaunchTarget["NEW_TAB"] = "New Tab";
})(LaunchTarget || (LaunchTarget = {}));
// Open in "New Tab" by default, as it is non disruptive.
const DefaultLaunchTarget = LaunchTarget.CURRENT_TAB;
/** Provide abstraction for target for opening URLs. */
class LaunchTargetService {
  constructor(storageService, i18n, loggingService) {
    this.storageService = storageService;
    this.i18n = i18n;
    this.currentLaunchTarget = DefaultLaunchTarget;
    this.currentLaunchTarget$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.logger = loggingService.getLogger('LaunchTargetService');
    // Emit value from store as initial value.
    this.getSavedLaunchTarget().then(lt => this.currentLaunchTarget$.next(lt));
  }
  getLaunchTarget() {
    return this.currentLaunchTarget$.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.share)());
  }
  toI18n(lt) {
    switch (lt) {
      case LaunchTarget.CURRENT_TAB:
        return this.i18n.get(_i18n_mssg__WEBPACK_IMPORTED_MODULE_0__.Mssg.QsLaunchCurrentTab);
      case LaunchTarget.NEW_TAB:
        return this.i18n.get(_i18n_mssg__WEBPACK_IMPORTED_MODULE_0__.Mssg.QsLaunchNewTab);
    }
  }
  getSavedLaunchTarget() {
    return this.storageService.get('launch_target').then(lt => {
      if (!lt) {
        return DefaultLaunchTarget;
      }
      return lt;
    }, errorReason => {
      this.logger.error('Failed to fetch launch target due to error: ', errorReason);
      this.logger.warn('Using default launch target instead');
      return DefaultLaunchTarget;
    });
  }
  setLaunchTarget(lt) {
    this.storageService.put('launch_target', lt).then(() => {
      this.currentLaunchTarget$.next(lt);
    }, error => {
      this.logger.error(error);
    });
  }
  static #_ = this.ɵfac = function LaunchTargetService_Factory(t) {
    return new (t || LaunchTargetService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_logging_logging_service__WEBPACK_IMPORTED_MODULE_3__.LoggingService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: LaunchTargetService,
    factory: LaunchTargetService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9971:
/*!******************************************************!*\
  !*** ./src/app/services/locale/locale-properties.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLocale: () => (/* binding */ DefaultLocale),
/* harmony export */   LocalesForDefaultModel: () => (/* binding */ LocalesForDefaultModel)
/* harmony export */ });
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.json */ 8872);

const SupportedLocalesAndProperties = _locale_json__WEBPACK_IMPORTED_MODULE_0__;
const LocalesForDefaultModel = SupportedLocalesAndProperties.filter(l => l.model === 'Default');
const DefaultLocale = LocalesForDefaultModel.filter(l => l.bcp_47 === 'en-US')[0];

/***/ }),

/***/ 5637:
/*!***************************************************!*\
  !*** ./src/app/services/locale/locale.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocaleService: () => (/* binding */ LocaleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5584);
/* harmony import */ var _locale_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale-properties */ 9971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _logging_logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging/logging.service */ 2686);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ 1922);





/**
 * Class for answering locale-related questions
 */
class LocaleService {
  constructor(loggingService, storageService) {
    this.storageService = storageService;
    this.localeSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.logger = loggingService.getLogger('LocaleService');
    // Fetch and broadcast saved locale, set it if not available.
    this.getSavedLocale().then(locale => {
      if (locale) {
        this.localeSubject$.next(locale);
      } else {
        this.setRecognitionLocale(LocaleService.getDefaultLocale());
      }
    });
  }
  /**
   * Update the user locale.
   *
   * @param {string} locale
   */
  setRecognitionLocale(locale) {
    this.storageService.put('voice_recognition_locale', locale).then(() => {
      this.localeSubject$.next(locale);
    }, error => {
      this.logger.error(error);
    });
  }
  /** Return an observable over locale data. */
  getRecognitionLocale() {
    return this.localeSubject$.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.share)());
  }
  /**
   * Get the recognition language.
   *
   * If it is not set, set it to default locale.
   * @return {string} a BCP-47 locale.
   */
  getSavedLocale() {
    return this.storageService.get('voice_recognition_locale').then(locale => {
      this.logger.log('#getRecognitionLocale() :', locale);
      return locale;
    }, errorReason => {
      this.logger.error('Failed to fetch locale due to error: ', errorReason);
      this.logger.warn('Using default locale instead');
      return LocaleService.getDefaultLocale();
    });
  }
  /**
   * Get the locale from the browser.
   *
   * @return {string} a BCP-47 locale.
   */
  static getDefaultLocale() {
    let defaultLocale = _locale_properties__WEBPACK_IMPORTED_MODULE_0__.DefaultLocale;
    /*
     * Navigator.language returns the preferred language of the user for the browser UI.
     * See https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language.
     */
    let navLocale = undefined;
    if (navigator.languages !== undefined) {
      navLocale = _locale_properties__WEBPACK_IMPORTED_MODULE_0__.LocalesForDefaultModel.find(l => l.bcp_47 == navigator.languages[0]);
    } else if (navigator.language) {
      navLocale = _locale_properties__WEBPACK_IMPORTED_MODULE_0__.LocalesForDefaultModel.find(l => l.bcp_47 == navigator.language);
    } else if (chrome?.i18n) {
      const i18nLocale = chrome.i18n.getUILanguage();
      navLocale = _locale_properties__WEBPACK_IMPORTED_MODULE_0__.LocalesForDefaultModel.find(l => l.bcp_47 == i18nLocale);
    }
    if (navLocale) {
      defaultLocale = navLocale;
    }
    return defaultLocale;
  }
  static #_ = this.ɵfac = function LocaleService_Factory(t) {
    return new (t || LocaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_logging_logging_service__WEBPACK_IMPORTED_MODULE_1__.LoggingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: LocaleService,
    factory: LocaleService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7474:
/*!****************************************************!*\
  !*** ./src/app/services/logging/console-logger.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleLogger: () => (/* binding */ ConsoleLogger)
/* harmony export */ });
class ConsoleLogger {
  constructor(tag) {
    this.tag = '';
    this.tag = tag;
  }
  debug(...logs) {
    const d = new Date(Date.now());
    console.debug('%c%s %s', 'color: blue', `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`, this.tag, ...logs);
  }
  log(...logs) {
    const d = new Date(Date.now());
    console.log('%c%s %s', 'color: blue', `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`, this.tag, ...logs);
  }
  warn(...logs) {
    const d = new Date(Date.now());
    console.warn('%c%s %s', 'color: blue', `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`, this.tag, ...logs);
  }
  error(...logs) {
    const d = new Date(Date.now());
    console.error('%c%s %s', 'color: blue', `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`, this.tag, ...logs);
  }
}

/***/ }),

/***/ 2686:
/*!*****************************************************!*\
  !*** ./src/app/services/logging/logging.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggingService: () => (/* binding */ LoggingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _console_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console-logger */ 7474);
/* harmony import */ var _remote_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-logger */ 9805);




class LoggingService {
  getLogger(tag) {
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)()) {
      return new _console_logger__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogger(tag);
    } else {
      return new _remote_logger__WEBPACK_IMPORTED_MODULE_1__.RemoteLogger();
    }
  }
  static #_ = this.ɵfac = function LoggingService_Factory(t) {
    return new (t || LoggingService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: LoggingService,
    factory: LoggingService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9805:
/*!***************************************************!*\
  !*** ./src/app/services/logging/remote-logger.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoteLogger: () => (/* binding */ RemoteLogger)
/* harmony export */ });
/* harmony import */ var _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/angular-ivy */ 5404);

class RemoteLogger {
  debug(...unused) {
    // Ignore these.
  }
  log(...unused) {
    // Ignore these.
  }
  warn(...messages) {
    _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_0__.captureMessage(messages.join(","));
  }
  error(...err) {
    _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_0__.captureException(err);
  }
}

/***/ }),

/***/ 5900:
/*!**********************************************************************!*\
  !*** ./src/app/services/recognition/browser-recognition-provider.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserRecognitionProvider: () => (/* binding */ BrowserRecognitionProvider)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5584);
/* harmony import */ var _recognition_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recognition-state */ 9038);
/* harmony import */ var _locale_locale_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/locale-properties */ 9971);
/* harmony import */ var _locale_locale_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale/locale.service */ 5637);
/* harmony import */ var _i18n_mssg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n-mssg */ 2209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../analytics.service */ 7478);
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n.service */ 8938);
/* harmony import */ var _logging_logging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logging/logging.service */ 2686);










// tslint:disable-next-line:no-any
const {
  webkitSpeechRecognition
} = window;
const IdleState = {
  state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.IDLE
};
class BrowserRecognitionProvider {
  constructor(localeService, analytics, i18n, loggingService) {
    this.localeService = localeService;
    this.analytics = analytics;
    this.i18n = i18n;
    this.locale = _locale_locale_service__WEBPACK_IMPORTED_MODULE_2__.LocaleService.getDefaultLocale();
    this.recognitionState = IdleState;
    this.recognitionState$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.detectedSpeech = false;
    /**
     * Fired when the speech recognition service has begun listening to
     * incoming audio with intent to recognize grammars associated with
     * the current SpeechRecognition.
     */
    this.#onStart = () => {
      this.logger.log('#onStart');
      this.detectedSpeech = false;
      this.recognitionState = {
        state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.START
      };
      this.recognitionState$.next(this.recognitionState);
      this.analytics.logMilestone("#onStart");
    };
    /** Fired when the user agent has started to capture audio. */
    this.#onAudioStart = () => {
      this.logger.log('#onAudioStart');
    };
    /** Fired when any sound — recognizable speech or not — has been detected. */
    this.#onSoundStart = () => {
      this.logger.log('#onSoundStart');
    };
    /** Fired when sound that is recognized by the speech recognition service as speech has been detected. */
    this.#onSpeechStart = () => {
      this.logger.log('#onSpeechStart');
      this.analytics.logMilestone("#onSpeechStart");
    };
    /** Fired when speech recognized by the speech recognition service has stopped being detected. */
    this.#onSpeechEnd = () => {
      this.logger.log('#onSpeechEnd');
      this.analytics.logMilestone("#onSpeechEnd");
    };
    /** Fired when any sound — recognizable speech or not — has stopped being detected. */
    this.#onSoundEnd = () => {
      this.logger.log('#onSoundEnd');
    };
    /** Fired when the user agent has finished capturing audio. */
    this.#onAudioEnd = () => {
      this.logger.log('#onAudioEnd');
      this.recognitionState = {
        state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.END
      };
      this.recognitionState$.next(this.recognitionState);
      if (!this.detectedSpeech) {
        this.recognitionState = {
          state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.NO_SPEECH_DETECTED,
          errorMessage: this.i18n.get(_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__.Mssg.ErrNoSpeechDetected)
        };
        this.recognitionState$.next(this.recognitionState);
      }
    };
    /**
     * Fired when the speech recognition service has disconnected.
     *
     * This method is guaranteed to be executed, even if #onStart was never called,
     * and even in instances where #onSpeechEnd or #onAudioEnd are not invoked.
     */
    this.#onEnd = () => {
      this.logger.log('#onEnd');
      this.recognitionState = IdleState;
      this.recognitionState$.next(this.recognitionState);
      this.recognition = null;
    };
    /** Fired when a speech recognition error occurs. */
    this.#onError = event => {
      const eventError = event.error;
      // Not using errorMessage below as it is not very descriptive.
      switch (eventError) {
        case 'no-speech':
          this.recognitionState = {
            state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.NO_SPEECH_DETECTED,
            errorMessage: this.i18n.get(_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__.Mssg.ErrNoSoundDetected)
          };
          this.analytics.logEnd("NO_SPEECH_DETECTED", "failure");
          break;
        case 'audio-capture':
          this.recognitionState = {
            state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.NO_AUDIO_INPUT_DEVICE,
            errorMessage: this.i18n.get(_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__.Mssg.ErrNoAudioCapture)
          };
          this.analytics.logEnd("NO_AUDIO_INPUT_DEVICE", "failure");
          break;
        case 'not-allowed':
          this.recognitionState = {
            state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.PERMISSION_NOT_GRANTED,
            errorMessage: this.i18n.get(_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__.Mssg.ErrPermissionNotGranted)
          };
          this.analytics.logEnd("PERMISSION_NOT_GRANTED", "failure");
          break;
        case 'network':
          this.recognitionState = {
            state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.NO_CONNECTION,
            errorMessage: this.i18n.get(_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__.Mssg.ErrNoNetwork)
          };
          this.analytics.logEnd("NO_CONNECTION", "failure");
          break;
        case 'aborted':
          this.recognitionState = {
            state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.ABORTED,
            errorMessage: this.i18n.get(_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__.Mssg.ErrAborted)
          };
          this.analytics.logEnd("ABORTED", "cancel");
          break;
        case 'language-not-supported':
          this.localeService.setRecognitionLocale(_locale_locale_properties__WEBPACK_IMPORTED_MODULE_1__.DefaultLocale);
          this.recognitionState = {
            state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.LANGUAGE_NOT_SUPPORTED,
            errorMessage: this.i18n.get(_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__.Mssg.ErrLangNotSupported)
          };
          this.analytics.logEnd("LANGUAGE_NOT_SUPPORTED", "cancel");
          break;
        case 'service-not-allowed':
          this.recognitionState = {
            state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.SERVICE_NOT_ALLOWED,
            errorMessage: this.i18n.get(_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__.Mssg.ErrServiceNotAllowed)
          };
          this.analytics.logEnd("SERVICE_NOT_ALLOWED", "cancel");
          break;
        case 'bad-grammar':
        default:
          this.recognitionState = {
            state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.UNKNOWN,
            errorMessage: this.i18n.get(_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__.Mssg.ErrUnhandledError)
          };
          this.analytics.logEnd("UNHANDLED_ERROR", "failure");
          this.logger.error('#onError unhandled error', eventError, event.message);
          break;
      }
      this.recognitionState$.next(this.recognitionState);
    };
    /**
     * Fired when the speech recognition service returns a
     * result — a word or phrase has been positively recognized
     * and this has been communicated back to the app.
     */
    this.#onResult = event => {
      this.logger.log('#onResult', event);
      this.detectedSpeech = true;
      let interimContent = '';
      let finalContent = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalContent += event.results[i][0].transcript;
          this.recognitionState = {
            state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.TRANSCRIBING,
            transcript: {
              finalText: finalContent
            }
          };
          this.recognitionState$.next(this.recognitionState);
        } else {
          interimContent += event.results[i][0].transcript;
          this.recognitionState = {
            state: _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.TRANSCRIBING,
            transcript: {
              partialText: interimContent
            }
          };
          this.recognitionState$.next(this.recognitionState);
        }
      }
    };
    this.logger = loggingService.getLogger('RecognitionService');
    localeService.getRecognitionLocale().subscribe({
      next: locale => this.locale = locale ? locale : this.locale,
      error: error => this.logger.error(error)
    });
  }
  #initialize(language, isContinuous) {
    /*
     * When using the chrome recognition API via popup, no special permission is required.
     * See permsisiosn list here - https://developer.chrome.com/docs/extensions/mv3/declare_permissions/
     * When accessing on a webpage, microphone access is a required permission. If this extension is installed, it has it.
     */
    if (!('webkitSpeechRecognition' in window)) {
      return _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.NOT_SUPPORTED;
    }
    this.recognition = new webkitSpeechRecognition();
    /*
     * When disabled, recognition would automatically stop after the first continguous audio streams.
     * The final transcript is sent one, after #onAudioEnd.
     */
    this.recognition.continuous = isContinuous; // TODO: Parameterize.
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 3;
    this.recognition.lang = this.locale.bcp_47;
    // Wire up life-cycle methods, in the order they are invoked.
    this.recognition.onstart = this.#onStart;
    this.recognition.onaudiostart = this.#onAudioStart;
    this.recognition.onsoundstart = this.#onSoundStart;
    this.recognition.onspeechstart = this.#onSpeechStart;
    this.recognition.onspeechend = this.#onSpeechEnd;
    this.recognition.onsoundend = this.#onSoundEnd;
    this.recognition.onaudioend = this.#onAudioEnd;
    this.recognition.onend = this.#onEnd;
    // Wire up response handlers.
    this.recognition.onresult = this.#onResult;
    this.recognition.onerror = this.#onError;
    return _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.IDLE;
  }
  /**
   * Fired when the speech recognition service has begun listening to
   * incoming audio with intent to recognize grammars associated with
   * the current SpeechRecognition.
   */
  #onStart;
  /** Fired when the user agent has started to capture audio. */
  #onAudioStart;
  /** Fired when any sound — recognizable speech or not — has been detected. */
  #onSoundStart;
  /** Fired when sound that is recognized by the speech recognition service as speech has been detected. */
  #onSpeechStart;
  /** Fired when speech recognized by the speech recognition service has stopped being detected. */
  #onSpeechEnd;
  /** Fired when any sound — recognizable speech or not — has stopped being detected. */
  #onSoundEnd;
  /** Fired when the user agent has finished capturing audio. */
  #onAudioEnd;
  /**
   * Fired when the speech recognition service has disconnected.
   *
   * This method is guaranteed to be executed, even if #onStart was never called,
   * and even in instances where #onSpeechEnd or #onAudioEnd are not invoked.
   */
  #onEnd;
  /** Fired when a speech recognition error occurs. */
  #onError;
  /**
   * Fired when the speech recognition service returns a
   * result — a word or phrase has been positively recognized
   * and this has been communicated back to the app.
   */
  #onResult;
  start(isContinuous) {
    if (this.recognition) {
      this.logger.log('stopping recognition');
      this.recognition.abort();
      /*
       * TODO: Wait for recognition object to become null, i.e. onEnd has fired.
       * If this function is invoked twice back-to-back, it would fail.
       */
    }

    const state = this.#initialize(this.locale, isContinuous);
    if (state === _recognition_state__WEBPACK_IMPORTED_MODULE_0__.State.NOT_SUPPORTED) {
      this.recognitionState = {
        state: state,
        errorMessage: this.i18n.get(_i18n_mssg__WEBPACK_IMPORTED_MODULE_3__.Mssg.ErrServiceNotAllowed)
      };
      this.recognitionState$.next(this.recognitionState);
      return;
    }
    this.recognition.start();
  }
  stop() {
    if (!this.recognition) {
      this.logger.error("Stopping recognition that isn't initialized");
      return;
    }
    // Aborting instead of stopping prevents streaming results after closure.
    this.recognition.abort();
  }
  getRecognitionState() {
    return this.recognitionState$.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.share)());
  }
  static #_ = this.ɵfac = function BrowserRecognitionProvider_Factory(t) {
    return new (t || BrowserRecognitionProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_locale_locale_service__WEBPACK_IMPORTED_MODULE_2__.LocaleService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_i18n_service__WEBPACK_IMPORTED_MODULE_5__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_logging_logging_service__WEBPACK_IMPORTED_MODULE_6__.LoggingService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: BrowserRecognitionProvider,
    factory: BrowserRecognitionProvider.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9038:
/*!***********************************************************!*\
  !*** ./src/app/services/recognition/recognition-state.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
var State;
(function (State) {
  State["UNKNOWN"] = "unknown";
  // Full error-list here - https://wicg.github.io/speech-api/#dom-speechrecognitionerrorcode-service-not-allowed
  State["NOT_SUPPORTED"] = "not-supported";
  State["PERMISSION_NOT_GRANTED"] = "permission-not-granted";
  State["LANGUAGE_NOT_SUPPORTED"] = "language-not-supported";
  State["SERVICE_NOT_ALLOWED"] = "service-not-allowed";
  State["NO_AUDIO_INPUT_DEVICE"] = "no-audio-capture";
  State["NO_CONNECTION"] = "no-connection";
  State["NO_SPEECH_DETECTED"] = "no-speech-detected";
  State["ABORTED"] = "aborted";
  State["IDLE"] = "idle";
  State["START"] = "start";
  State["TRANSCRIBING"] = "transcribing";
  State["END"] = "end";
})(State || (State = {}));

/***/ }),

/***/ 5684:
/*!*************************************************************!*\
  !*** ./src/app/services/recognition/recognition.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecognitionService: () => (/* binding */ RecognitionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _browser_recognition_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-recognition-provider */ 5900);


class RecognitionService {
  constructor(browserProvider) {
    this.recognitionProvider = browserProvider;
    /*
     * To use Google, uncomment below
     * this.recognitionProvider = new GoogleRecognitionProvider();
     */
  }

  start(isContinuous) {
    this.recognitionProvider.start(isContinuous);
  }
  stop() {
    this.recognitionProvider.stop();
  }
  getRecognitionState() {
    return this.recognitionProvider.getRecognitionState();
  }
  static #_ = this.ɵfac = function RecognitionService_Factory(t) {
    return new (t || RecognitionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_browser_recognition_provider__WEBPACK_IMPORTED_MODULE_0__.BrowserRecognitionProvider));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: RecognitionService,
    factory: RecognitionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3251:
/*!***************************************************!*\
  !*** ./src/app/services/search-engine.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchEngineService: () => (/* binding */ SearchEngineService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5584);
/* harmony import */ var _model_search_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/search-engine */ 9541);
/* harmony import */ var _launch_target_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launch-target.service */ 1129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage/storage.service */ 1922);
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics.service */ 7478);
/* harmony import */ var _logging_logging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logging/logging.service */ 2686);








class SearchEngineService {
  constructor(storageService, launchTargetService, analytics, loggingService) {
    this.storageService = storageService;
    this.launchTargetService = launchTargetService;
    this.analytics = analytics;
    this.currentSearchEngine = _model_search_engine__WEBPACK_IMPORTED_MODULE_0__.DefaultSearchEngine;
    this.currentSearchEngine$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.logger = loggingService.getLogger('SearchEngService');
    // Fetch and broadcast saved search engine, set it if not available.
    this.getSavedSearchEngine().then(se => {
      if (se) {
        this.currentSearchEngine$.next(se);
      } else {
        this.setSearchEngine(_model_search_engine__WEBPACK_IMPORTED_MODULE_0__.DefaultSearchEngine);
      }
    });
    // Update currentSearchEngine everytime search engine changes.
    this.getSearchEngine().subscribe(se => this.currentSearchEngine = se);
  }
  getSearchEngine() {
    return this.currentSearchEngine$.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.share)());
  }
  getSavedSearchEngine() {
    return this.storageService.get('search_engine').then(se => {
      return se;
    }, errorReason => {
      this.logger.error('Failed to fetch search engine due to error: ', errorReason);
      this.logger.warn('Using default search engine instead');
      return _model_search_engine__WEBPACK_IMPORTED_MODULE_0__.DefaultSearchEngine;
    });
  }
  setSearchEngine(se) {
    this.storageService.put('search_engine', se).then(() => {
      this.currentSearchEngine$.next(se);
    }, error => {
      this.logger.error(error);
    });
  }
  // TODO: Use default provider: https://developer.chrome.com/docs/extensions/reference/search/
  performSearch(query) {
    const url = this.currentSearchEngine.queryTemplate.replace('%QUERY%', query);
    this.launchTargetService.getSavedLaunchTarget().then(lt => {
      switch (lt) {
        case _launch_target_service__WEBPACK_IMPORTED_MODULE_1__.LaunchTarget.CURRENT_TAB:
          this.openInCurrentTab(url);
          break;
        case _launch_target_service__WEBPACK_IMPORTED_MODULE_1__.LaunchTarget.NEW_TAB:
          this.openInNewTab(url);
          break;
        default:
          this.openInNewTab(url);
          break;
      }
    });
  }
  openInNewTab(url) {
    if (!chrome?.tabs) {
      window.open(url, '_blank');
      return;
    }
    chrome.tabs.create({
      url: url,
      active: true
    }).then(() => {
      this.analytics.logEnd('#createNewTab', 'success');
    }, err => {
      this.logger.error('#createTab error', err);
      this.analytics.logEnd('#createNewTab', 'failure');
    });
  }
  openInCurrentTab(url) {
    if (!chrome?.tabs) {
      window.open(url, '_top');
      return;
    }
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }).then(tabs => {
      if (tabs.length !== 1) {
        this.logger.error('Wrong number of active tabs, expected 1, got ', tabs.length);
        this.openInNewTab(url);
        return;
      }
      const tab = tabs[0];
      if (!tab.id) {
        this.logger.error('No tab ID, context is not appropriate to updating tab');
        this.openInNewTab(url);
        return;
      }
      chrome.tabs.update(tab.id, {
        url: url,
        active: true
      }).then(() => {
        this.logger.debug('successfully opened url');
        this.analytics.logEnd('#updateTab', 'success');
      }, err => {
        this.logger.error('#performSearch: error opening url', err);
        this.analytics.logEnd('#updateTab', 'failure');
      });
    });
  }
  static #_ = this.ɵfac = function SearchEngineService_Factory(t) {
    return new (t || SearchEngineService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_launch_target_service__WEBPACK_IMPORTED_MODULE_1__.LaunchTargetService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_logging_logging_service__WEBPACK_IMPORTED_MODULE_4__.LoggingService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: SearchEngineService,
    factory: SearchEngineService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2067:
/*!*************************************************************!*\
  !*** ./src/app/services/storage/chrome-storage-provider.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeStorageProvider: () => (/* binding */ ChromeStorageProvider)
/* harmony export */ });
/* harmony import */ var _Users_justiceo_code_audate_voice_search_extension_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 4672);

/** Wrapper for chrome.storage.sync. */
class ChromeStorageProvider {
  constructor() {
    this.storageService = chrome.storage.sync;
  }
  put(key, value) {
    if (!value) {
      return Promise.reject('Attempting to save a null value');
    }
    const data = {};
    data[key] = value;
    return this.storageService.set(data);
  }
  get(key) {
    var _this = this;
    return (0,_Users_justiceo_code_audate_voice_search_extension_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this.storageService.get(key);
      return response[key];
    })();
  }
  getAll() {
    return this.storageService.get(null);
  }
}

/***/ }),

/***/ 854:
/*!************************************************************!*\
  !*** ./src/app/services/storage/local-storage-provider.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageProvider: () => (/* binding */ LocalStorageProvider)
/* harmony export */ });
/* harmony import */ var _Users_justiceo_code_audate_voice_search_extension_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 4672);

/** Fallback storage for development and testing. */
class LocalStorageProvider {
  constructor() {
    this.storageService = window.localStorage;
  }
  put(key, value) {
    var _this = this;
    return (0,_Users_justiceo_code_audate_voice_search_extension_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!value) {
        return Promise.reject('Attempting to save a null value');
      }
      let audate = yield _this.getAll();
      if (audate == null) {
        audate = {};
      }
      audate[key] = value;
      _this.storageService.setItem('audate', JSON.stringify(audate));
      Promise.resolve();
    })();
  }
  get(key) {
    var _this2 = this;
    return (0,_Users_justiceo_code_audate_voice_search_extension_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const audate = _this2.storageService.getItem('audate');
      if (audate == null) {
        return Promise.resolve(null);
      }
      return Promise.resolve(JSON.parse(audate)[key]);
    })();
  }
  getAll() {
    const audate = this.storageService.getItem('audate');
    if (audate == null) {
      return Promise.resolve(null);
    }
    return Promise.resolve(JSON.parse(audate));
  }
}

/***/ }),

/***/ 1922:
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _chrome_storage_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chrome-storage-provider */ 2067);
/* harmony import */ var _local_storage_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage-provider */ 854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




/**
 * Provides abstraction over different storage mechanisms and contexts for the app.
 *
 * TODO: Consider using https://github.com/fregante/webext-detect-page/blob/main/index.ts
 * to determine the current page context.
 */
class StorageService {
  constructor(router) {
    this.router = router;
    if (chrome?.storage) {
      this.storageProvider = new _chrome_storage_provider__WEBPACK_IMPORTED_MODULE_0__.ChromeStorageProvider();
    } else {
      this.storageProvider = new _local_storage_provider__WEBPACK_IMPORTED_MODULE_1__.LocalStorageProvider();
    }
  }
  put(key, value) {
    return this.storageProvider.put(key, value);
  }
  get(key) {
    return this.storageProvider.get(key);
  }
  getAll() {
    return this.storageProvider.getAll();
  }
  static #_ = this.ɵfac = function StorageService_Factory(t) {
    return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: StorageService,
    factory: StorageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 108:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/*
 * This file can be replaced during build by using the `fileReplacements` array.
 * `ng build` replaces `environment.ts` with `environment.prod.ts`.
 * The list of file replacements can be found in `angular.json`.
 */
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 6792:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/angular-ivy */ 9236);
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/tracing */ 3423);
/* harmony import */ var _app_components_audate_root_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/components/audate-root/app.module */ 470);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 108);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_4__.init({
  dsn: 'https://e3cc3436f33741a996dbfdd7f2f3ed59@o526305.ingest.sentry.io/6371071',
  integrations: [
  /*
   * Registers and configures the Tracing integration,
   * which automatically instruments your application to monitor its
   * performance, including custom Angular routing instrumentation
   */
  new _sentry_tracing__WEBPACK_IMPORTED_MODULE_0__.BrowserTracing({
    routingInstrumentation: _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_4__.routingInstrumentation
  })],
  /*
   * Set tracesSampleRate to 1.0 to capture 100%
   * of transactions for performance monitoring.
   * We recommend adjusting this value in production
   */
  tracesSampleRate: 0.1,
  release: 'audate-voice-search@23.01.10',
  environment: 'PROD'
});
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.platformBrowser().bootstrapModule(_app_components_audate_root_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 2911:
/*!***************************************!*\
  !*** ./src/_locales/en/messages.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"AppName":{"message":"Voice Search","description":"The name of the extension"},"AppDesc":{"message":"Search the web with your voice","description":"A description of its function"},"StatusIdle":{"message":"Click ⓞ to start speaking","description":"The text displayed when microphone is not listening."},"StatusListening":{"message":"Listening...","description":"The text displayed when microphone is listening for input."},"ErrNoSoundDetected":{"message":"No sound was detected.","description":"This text is displayed when the microphone does not detect any speech."},"ErrNoSpeechDetected":{"message":"No recognizable speech detected.","description":"This text is displayed when the microphone does not detect any speech."},"ErrNoAudioCapture":{"message":"No microphone devices detected or microphone is muted.","description":"The extension is unable to detect any connected microphone, also happens when mic is muted."},"ErrPermissionNotGranted":{"message":"Cannot access microphone, permission not granted","description":"The user has not granted microphone permission"},"ErrNoNetwork":{"message":"Network disconnected.","description":"There is no network connection."},"ErrAborted":{"message":"Recognition cancelled.","description":"User initiated cancellation of recognition."},"ErrLangNotSupported":{"message":"Locale not supported.","description":"The user\'s selected locale is not supported."},"ErrServiceNotAllowed":{"message":"Browser does not support speech recognition.","description":"Browser doesn\'t support recognition."},"ErrUnhandledError":{"message":"Unhandled Error","description":"We encountered an unknown error."},"QsGoBack":{"message":"Go Back","description":"Text on button used to navigate backwards"},"QsSpeechLanguage":{"message":"Speech Language","description":"Label for the drop-down to select user speech language."},"QsSearchEngine":{"message":"Search Engine","description":"Label for drop-down to select search engine."},"QsMicrophone":{"message":"Microphone","description":"Label for drop-down to select microphone to use."},"QsLaunchTarget":{"message":"Launch Target","description":"Label for drop-down to select launch target."},"QsLaunchNewTab":{"message":"New Tab","description":"Option to open URLs in new tab."},"QsLaunchCurrentTab":{"message":"Current Tab","description":"Option to open URLs in current tab."},"QsCannotChangeMic":{"message":"Mic selection not available for browser recognition.","description":"Error message for mic selection not available."},"QsNoDefaultInput":{"message":"No Default Input Device","description":"Message displayed when there\'s no input device."},"AppDetailDescription":{"message":"Audate brings a voice-forward affordances to the browsing experience.\\n\\nSearch the web using your voice by clicking on the browser icon.\\n\\nSpeak in your natural language and let advanced AI and ML models convert them to text. Over 300 locales around the world are supported!\\n\\nChoose from any of the top search engines like Google and Bing.\\n\\nIt\'s open source and published at https: //github.com/AudateApp.","description":"Detailed description displayed on extension page."},"Google":{"message":"Google","description":"Google"},"Bing":{"message":"Bing Search","description":"Google"},"Yandex":{"message":"Yandex","description":"Google"},"Yahoo":{"message":"Yahoo","description":"Google"},"Baidu":{"message":"Baidu","description":"Google"},"Ecosia":{"message":"Ecosia","description":"Google"},"DuckDuckGo":{"message":"DuckDuckGo","description":"Google"},"key":{"message":"Text to display","description":"It\'s description in english"}}');

/***/ }),

/***/ 8872:
/*!*********************************************!*\
  !*** ./src/app/services/locale/locale.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Afrikaans (South Africa)","bcp_47":"af-ZA","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Afrikaans (South Africa)","bcp_47":"af-ZA","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Albanian (Albania)","bcp_47":"sq-AL","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Albanian (Albania)","bcp_47":"sq-AL","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Amharic (Ethiopia)","bcp_47":"am-ET","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Amharic (Ethiopia)","bcp_47":"am-ET","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Algeria)","bcp_47":"ar-DZ","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Algeria)","bcp_47":"ar-DZ","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Bahrain)","bcp_47":"ar-BH","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Bahrain)","bcp_47":"ar-BH","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Egypt)","bcp_47":"ar-EG","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Egypt)","bcp_47":"ar-EG","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Iraq)","bcp_47":"ar-IQ","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Iraq)","bcp_47":"ar-IQ","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Israel)","bcp_47":"ar-IL","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Israel)","bcp_47":"ar-IL","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Jordan)","bcp_47":"ar-JO","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Jordan)","bcp_47":"ar-JO","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Kuwait)","bcp_47":"ar-KW","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Kuwait)","bcp_47":"ar-KW","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Lebanon)","bcp_47":"ar-LB","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Lebanon)","bcp_47":"ar-LB","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Morocco)","bcp_47":"ar-MA","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Morocco)","bcp_47":"ar-MA","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Oman)","bcp_47":"ar-OM","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Oman)","bcp_47":"ar-OM","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Qatar)","bcp_47":"ar-QA","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Qatar)","bcp_47":"ar-QA","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Saudi Arabia)","bcp_47":"ar-SA","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Saudi Arabia)","bcp_47":"ar-SA","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (State of Palestine)","bcp_47":"ar-PS","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (State of Palestine)","bcp_47":"ar-PS","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Tunisia)","bcp_47":"ar-TN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Tunisia)","bcp_47":"ar-TN","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (United Arab Emirates)","bcp_47":"ar-AE","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (United Arab Emirates)","bcp_47":"ar-AE","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Yemen)","bcp_47":"ar-YE","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Arabic (Yemen)","bcp_47":"ar-YE","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Armenian (Armenia)","bcp_47":"hy-AM","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Armenian (Armenia)","bcp_47":"hy-AM","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Azerbaijani (Azerbaijan)","bcp_47":"az-AZ","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Azerbaijani (Azerbaijan)","bcp_47":"az-AZ","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Basque (Spain)","bcp_47":"eu-ES","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Basque (Spain)","bcp_47":"eu-ES","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Bengali (Bangladesh)","bcp_47":"bn-BD","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Bengali (Bangladesh)","bcp_47":"bn-BD","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Bengali (India)","bcp_47":"bn-IN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Bengali (India)","bcp_47":"bn-IN","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Bosnian (Bosnia and Herzegovina)","bcp_47":"bs-BA","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Bosnian (Bosnia and Herzegovina)","bcp_47":"bs-BA","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Bulgarian (Bulgaria)","bcp_47":"bg-BG","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Bulgarian (Bulgaria)","bcp_47":"bg-BG","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Burmese (Myanmar)","bcp_47":"my-MM","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Burmese (Myanmar)","bcp_47":"my-MM","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Catalan (Spain)","bcp_47":"ca-ES","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Catalan (Spain)","bcp_47":"ca-ES","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Chinese, Cantonese (Traditional Hong Kong)","bcp_47":"yue-Hant-HK","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Chinese, Cantonese (Traditional Hong Kong)","bcp_47":"yue-Hant-HK","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Chinese, Mandarin (Simplified, China)","bcp_47":"zh (cmn-Hans-CN)","model":"Command and search","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Chinese, Mandarin (Simplified, China)","bcp_47":"zh (cmn-Hans-CN)","model":"Default","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Chinese, Mandarin (Traditional, Taiwan)","bcp_47":"zh-TW (cmn-Hant-TW)","model":"Command and search","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Chinese, Mandarin (Traditional, Taiwan)","bcp_47":"zh-TW (cmn-Hant-TW)","model":"Default","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Croatian (Croatia)","bcp_47":"hr-HR","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Croatian (Croatia)","bcp_47":"hr-HR","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Czech (Czech Republic)","bcp_47":"cs-CZ","model":"Command and search","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Czech (Czech Republic)","bcp_47":"cs-CZ","model":"Default","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Danish (Denmark)","bcp_47":"da-DK","model":"Command and search","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Danish (Denmark)","bcp_47":"da-DK","model":"Default","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Dutch (Belgium)","bcp_47":"nl-BE","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Dutch (Belgium)","bcp_47":"nl-BE","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Dutch (Netherlands)","bcp_47":"nl-NL","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Dutch (Netherlands)","bcp_47":"nl-NL","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"English (Australia)","bcp_47":"en-AU","model":"Command and search","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (Australia)","bcp_47":"en-AU","model":"Default","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (Australia)","bcp_47":"en-AU","model":"Enhanced phone call","automatic_punctuation":"✔","diarization":"","boost":"","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"English (Canada)","bcp_47":"en-CA","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (Canada)","bcp_47":"en-CA","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"English (Ghana)","bcp_47":"en-GH","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"English (Ghana)","bcp_47":"en-GH","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"English (Hong Kong)","bcp_47":"en-HK","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (Hong Kong)","bcp_47":"en-HK","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (India)","bcp_47":"en-IN","model":"Command and search","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (India)","bcp_47":"en-IN","model":"Default","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (Ireland)","bcp_47":"en-IE","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (Ireland)","bcp_47":"en-IE","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (Kenya)","bcp_47":"en-KE","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"English (Kenya)","bcp_47":"en-KE","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"English (New Zealand)","bcp_47":"en-NZ","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (New Zealand)","bcp_47":"en-NZ","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (Nigeria)","bcp_47":"en-NG","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"English (Nigeria)","bcp_47":"en-NG","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"English (Pakistan)","bcp_47":"en-PK","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (Pakistan)","bcp_47":"en-PK","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (Philippines)","bcp_47":"en-PH","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":"✔"},{"name":"English (Philippines)","bcp_47":"en-PH","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"English (Singapore)","bcp_47":"en-SG","model":"Command and search","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (Singapore)","bcp_47":"en-SG","model":"Default","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"English (South Africa)","bcp_47":"en-ZA","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"English (South Africa)","bcp_47":"en-ZA","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"English (Tanzania)","bcp_47":"en-TZ","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"English (Tanzania)","bcp_47":"en-TZ","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"English (United Kingdom)","bcp_47":"en-GB","model":"Command and search","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (United Kingdom)","bcp_47":"en-GB","model":"Default","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (United Kingdom)","bcp_47":"en-GB","model":"Enhanced phone call","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (United Kingdom)","bcp_47":"en-GB","model":"Phone call","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (United States)","bcp_47":"en-US","model":"Command and search","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"English (United States)","bcp_47":"en-US","model":"Default","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"English (United States)","bcp_47":"en-US","model":"Enhanced phone call","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"English (United States)","bcp_47":"en-US","model":"Enhanced video","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"English (United States)","bcp_47":"en-US","model":"Medical Conversation","automatic_punctuation":"","diarization":"✔","boost":"","word_level_confidence":"","profanity_filter":"","spoken_punctuation":"","spoken_emojis":""},{"name":"English (United States)","bcp_47":"en-US","model":"Medical Dictation","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"","spoken_punctuation":"","spoken_emojis":""},{"name":"English (United States)","bcp_47":"en-US","model":"Phone call","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Estonian (Estonia)","bcp_47":"et-EE","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Estonian (Estonia)","bcp_47":"et-EE","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Filipino (Philippines)","bcp_47":"fil-PH","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Filipino (Philippines)","bcp_47":"fil-PH","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Finnish (Finland)","bcp_47":"fi-FI","model":"Command and search","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Finnish (Finland)","bcp_47":"fi-FI","model":"Default","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"French (Belgium)","bcp_47":"fr-BE","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"French (Belgium)","bcp_47":"fr-BE","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"French (Canada)","bcp_47":"fr-CA","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"French (Canada)","bcp_47":"fr-CA","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"French (Canada)","bcp_47":"fr-CA","model":"Enhanced phone call","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"French (France)","bcp_47":"fr-FR","model":"Command and search","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"French (France)","bcp_47":"fr-FR","model":"Default","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"French (France)","bcp_47":"fr-FR","model":"Enhanced phone call","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"French (France)","bcp_47":"fr-FR","model":"Phone call","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"French (Switzerland)","bcp_47":"fr-CH","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"French (Switzerland)","bcp_47":"fr-CH","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":"✔"},{"name":"Galician (Spain)","bcp_47":"gl-ES","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Galician (Spain)","bcp_47":"gl-ES","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Georgian (Georgia)","bcp_47":"ka-GE","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Georgian (Georgia)","bcp_47":"ka-GE","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"German (Austria)","bcp_47":"de-AT","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"German (Austria)","bcp_47":"de-AT","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"German (Germany)","bcp_47":"de-DE","model":"Command and search","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"German (Germany)","bcp_47":"de-DE","model":"Default","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"German (Switzerland)","bcp_47":"de-CH","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"German (Switzerland)","bcp_47":"de-CH","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Greek (Greece)","bcp_47":"el-GR","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Greek (Greece)","bcp_47":"el-GR","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Gujarati (India)","bcp_47":"gu-IN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Gujarati (India)","bcp_47":"gu-IN","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Hebrew (Israel)","bcp_47":"iw-IL","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Hebrew (Israel)","bcp_47":"iw-IL","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Hindi (India)","bcp_47":"hi-IN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Hindi (India)","bcp_47":"hi-IN","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Hungarian (Hungary)","bcp_47":"hu-HU","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Hungarian (Hungary)","bcp_47":"hu-HU","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Icelandic (Iceland)","bcp_47":"is-IS","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Icelandic (Iceland)","bcp_47":"is-IS","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Indonesian (Indonesia)","bcp_47":"id-ID","model":"Command and search","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Indonesian (Indonesia)","bcp_47":"id-ID","model":"Default","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Italian (Italy)","bcp_47":"it-IT","model":"Command and search","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Italian (Italy)","bcp_47":"it-IT","model":"Default","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Italian (Switzerland)","bcp_47":"it-CH","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Italian (Switzerland)","bcp_47":"it-CH","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Japanese (Japan)","bcp_47":"ja-JP","model":"Command and search","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Japanese (Japan)","bcp_47":"ja-JP","model":"Default","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Japanese (Japan)","bcp_47":"ja-JP","model":"Enhanced phone call","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Japanese (Japan)","bcp_47":"ja-JP","model":"Phone call","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Javanese (Indonesia)","bcp_47":"jv-ID","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Javanese (Indonesia)","bcp_47":"jv-ID","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Kannada (India)","bcp_47":"kn-IN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Kannada (India)","bcp_47":"kn-IN","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Kazakh (Kazakhstan)","bcp_47":"kk-KZ","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Kazakh (Kazakhstan)","bcp_47":"kk-KZ","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Khmer (Cambodia)","bcp_47":"km-KH","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Khmer (Cambodia)","bcp_47":"km-KH","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Korean (South Korea)","bcp_47":"ko-KR","model":"Command and search","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Korean (South Korea)","bcp_47":"ko-KR","model":"Default","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Lao (Laos)","bcp_47":"lo-LA","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Lao (Laos)","bcp_47":"lo-LA","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Latvian (Latvia)","bcp_47":"lv-LV","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Latvian (Latvia)","bcp_47":"lv-LV","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Lithuanian (Lithuania)","bcp_47":"lt-LT","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Lithuanian (Lithuania)","bcp_47":"lt-LT","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Macedonian (North Macedonia)","bcp_47":"mk-MK","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Macedonian (North Macedonia)","bcp_47":"mk-MK","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Malay (Malaysia)","bcp_47":"ms-MY","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Malay (Malaysia)","bcp_47":"ms-MY","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Malayalam (India)","bcp_47":"ml-IN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Malayalam (India)","bcp_47":"ml-IN","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Marathi (India)","bcp_47":"mr-IN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Marathi (India)","bcp_47":"mr-IN","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Mongolian (Mongolia)","bcp_47":"mn-MN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Mongolian (Mongolia)","bcp_47":"mn-MN","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Nepali (Nepal)","bcp_47":"ne-NP","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Nepali (Nepal)","bcp_47":"ne-NP","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Norwegian Bokmål (Norway)","bcp_47":"no-NO","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Norwegian Bokmål (Norway)","bcp_47":"no-NO","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Persian (Iran)","bcp_47":"fa-IR","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Persian (Iran)","bcp_47":"fa-IR","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Polish (Poland)","bcp_47":"pl-PL","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Polish (Poland)","bcp_47":"pl-PL","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Portuguese (Brazil)","bcp_47":"pt-BR","model":"Command and search","automatic_punctuation":"","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Portuguese (Brazil)","bcp_47":"pt-BR","model":"Default","automatic_punctuation":"","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Portuguese (Brazil)","bcp_47":"pt-BR","model":"Enhanced phone call","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Portuguese (Brazil)","bcp_47":"pt-BR","model":"Phone call","automatic_punctuation":"✔","diarization":"✔","boost":"✔","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Portuguese (Portugal)","bcp_47":"pt-PT","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Portuguese (Portugal)","bcp_47":"pt-PT","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Punjabi (Gurmukhi India)","bcp_47":"pa-Guru-IN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Punjabi (Gurmukhi India)","bcp_47":"pa-Guru-IN","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Romanian (Romania)","bcp_47":"ro-RO","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Romanian (Romania)","bcp_47":"ro-RO","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Russian (Russia)","bcp_47":"ru-RU","model":"Command and search","automatic_punctuation":"","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Russian (Russia)","bcp_47":"ru-RU","model":"Default","automatic_punctuation":"","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Russian (Russia)","bcp_47":"ru-RU","model":"Enhanced phone call","automatic_punctuation":"","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Russian (Russia)","bcp_47":"ru-RU","model":"Phone call","automatic_punctuation":"","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Serbian (Serbia)","bcp_47":"sr-RS","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Serbian (Serbia)","bcp_47":"sr-RS","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Sinhala (Sri Lanka)","bcp_47":"si-LK","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Sinhala (Sri Lanka)","bcp_47":"si-LK","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Slovak (Slovakia)","bcp_47":"sk-SK","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Slovak (Slovakia)","bcp_47":"sk-SK","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Slovenian (Slovenia)","bcp_47":"sl-SI","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Slovenian (Slovenia)","bcp_47":"sl-SI","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Spanish (Argentina)","bcp_47":"es-AR","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Argentina)","bcp_47":"es-AR","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Bolivia)","bcp_47":"es-BO","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Bolivia)","bcp_47":"es-BO","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Chile)","bcp_47":"es-CL","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Chile)","bcp_47":"es-CL","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Colombia)","bcp_47":"es-CO","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Colombia)","bcp_47":"es-CO","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Costa Rica)","bcp_47":"es-CR","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Costa Rica)","bcp_47":"es-CR","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Dominican Republic)","bcp_47":"es-DO","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Dominican Republic)","bcp_47":"es-DO","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Ecuador)","bcp_47":"es-EC","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Ecuador)","bcp_47":"es-EC","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (El Salvador)","bcp_47":"es-SV","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (El Salvador)","bcp_47":"es-SV","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Guatemala)","bcp_47":"es-GT","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Guatemala)","bcp_47":"es-GT","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Honduras)","bcp_47":"es-HN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Honduras)","bcp_47":"es-HN","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Mexico)","bcp_47":"es-MX","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Mexico)","bcp_47":"es-MX","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Nicaragua)","bcp_47":"es-NI","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Nicaragua)","bcp_47":"es-NI","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Panama)","bcp_47":"es-PA","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Panama)","bcp_47":"es-PA","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Paraguay)","bcp_47":"es-PY","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Paraguay)","bcp_47":"es-PY","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Peru)","bcp_47":"es-PE","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Peru)","bcp_47":"es-PE","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Puerto Rico)","bcp_47":"es-PR","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Puerto Rico)","bcp_47":"es-PR","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Spain)","bcp_47":"es-ES","model":"Command and search","automatic_punctuation":"","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Spain)","bcp_47":"es-ES","model":"Default","automatic_punctuation":"","diarization":"✔","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Spain)","bcp_47":"es-ES","model":"Enhanced phone call","automatic_punctuation":"","diarization":"✔","boost":"","word_level_confidence":"✔","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (United States)","bcp_47":"es-US","model":"Command and search","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (United States)","bcp_47":"es-US","model":"Default","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (United States)","bcp_47":"es-US","model":"Enhanced phone call","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (United States)","bcp_47":"es-US","model":"Phone call","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Uruguay)","bcp_47":"es-UY","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Uruguay)","bcp_47":"es-UY","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Venezuela)","bcp_47":"es-VE","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Spanish (Venezuela)","bcp_47":"es-VE","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Sundanese (Indonesia)","bcp_47":"su-ID","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Sundanese (Indonesia)","bcp_47":"su-ID","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Swahili (Kenya)","bcp_47":"sw-KE","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Swahili (Kenya)","bcp_47":"sw-KE","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Swahili (Tanzania)","bcp_47":"sw-TZ","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Swahili (Tanzania)","bcp_47":"sw-TZ","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Swedish (Sweden)","bcp_47":"sv-SE","model":"Command and search","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Swedish (Sweden)","bcp_47":"sv-SE","model":"Default","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Tamil (India)","bcp_47":"ta-IN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Tamil (India)","bcp_47":"ta-IN","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Tamil (Malaysia)","bcp_47":"ta-MY","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Tamil (Malaysia)","bcp_47":"ta-MY","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Tamil (Singapore)","bcp_47":"ta-SG","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Tamil (Singapore)","bcp_47":"ta-SG","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Tamil (Sri Lanka)","bcp_47":"ta-LK","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Tamil (Sri Lanka)","bcp_47":"ta-LK","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Telugu (India)","bcp_47":"te-IN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Telugu (India)","bcp_47":"te-IN","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Thai (Thailand)","bcp_47":"th-TH","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Thai (Thailand)","bcp_47":"th-TH","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Turkish (Turkey)","bcp_47":"tr-TR","model":"Command and search","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Turkish (Turkey)","bcp_47":"tr-TR","model":"Default","automatic_punctuation":"✔","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"✔","spoken_emojis":""},{"name":"Ukrainian (Ukraine)","bcp_47":"uk-UA","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Ukrainian (Ukraine)","bcp_47":"uk-UA","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Urdu (India)","bcp_47":"ur-IN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Urdu (India)","bcp_47":"ur-IN","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Urdu (Pakistan)","bcp_47":"ur-PK","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Urdu (Pakistan)","bcp_47":"ur-PK","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Uzbek (Uzbekistan)","bcp_47":"uz-UZ","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Uzbek (Uzbekistan)","bcp_47":"uz-UZ","model":"Default","automatic_punctuation":"","diarization":"","boost":"","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Vietnamese (Vietnam)","bcp_47":"vi-VN","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Vietnamese (Vietnam)","bcp_47":"vi-VN","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Zulu (South Africa)","bcp_47":"zu-ZA","model":"Command and search","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""},{"name":"Zulu (South Africa)","bcp_47":"zu-ZA","model":"Default","automatic_punctuation":"","diarization":"","boost":"✔","word_level_confidence":"","profanity_filter":"✔","spoken_punctuation":"","spoken_emojis":""}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6792)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
var IS_DEV_BUILD=true;
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
      if (decorator = decorators[i3])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js
  var require_webcomponents_bundle = __commonJS({
    "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"(exports) {
      (function() {
        "use strict";
        var v2;
        function ba(a3) {
          var b2 = 0;
          return function() {
            return b2 < a3.length ? { done: false, value: a3[b2++] } : { done: true };
          };
        }
        var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a3, b2, c3) {
          if (a3 == Array.prototype || a3 == Object.prototype)
            return a3;
          a3[b2] = c3.value;
          return a3;
        };
        function da(a3) {
          a3 = ["object" == typeof globalThis && globalThis, a3, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
          for (var b2 = 0; b2 < a3.length; ++b2) {
            var c3 = a3[b2];
            if (c3 && c3.Math == Math)
              return c3;
          }
          throw Error("Cannot find global object");
        }
        var ea = da(this);
        function fa(a3, b2) {
          if (b2)
            a: {
              var c3 = ea;
              a3 = a3.split(".");
              for (var d3 = 0; d3 < a3.length - 1; d3++) {
                var e7 = a3[d3];
                if (!(e7 in c3))
                  break a;
                c3 = c3[e7];
              }
              a3 = a3[a3.length - 1];
              d3 = c3[a3];
              b2 = b2(d3);
              b2 != d3 && null != b2 && ca(c3, a3, { configurable: true, writable: true, value: b2 });
            }
        }
        fa("Symbol", function(a3) {
          function b2(e7) {
            if (this instanceof b2)
              throw new TypeError("Symbol is not a constructor");
            return new c3("jscomp_symbol_" + (e7 || "") + "_" + d3++, e7);
          }
          function c3(e7, f2) {
            this.g = e7;
            ca(this, "description", { configurable: true, writable: true, value: f2 });
          }
          if (a3)
            return a3;
          c3.prototype.toString = function() {
            return this.g;
          };
          var d3 = 0;
          return b2;
        });
        fa("Symbol.iterator", function(a3) {
          if (a3)
            return a3;
          a3 = Symbol("Symbol.iterator");
          for (var b2 = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c3 = 0; c3 < b2.length; c3++) {
            var d3 = ea[b2[c3]];
            "function" === typeof d3 && "function" != typeof d3.prototype[a3] && ca(d3.prototype, a3, { configurable: true, writable: true, value: function() {
              return ja(ba(this));
            } });
          }
          return a3;
        });
        function ja(a3) {
          a3 = { next: a3 };
          a3[Symbol.iterator] = function() {
            return this;
          };
          return a3;
        }
        function ka(a3) {
          var b2 = "undefined" != typeof Symbol && Symbol.iterator && a3[Symbol.iterator];
          return b2 ? b2.call(a3) : { next: ba(a3) };
        }
        function w2(a3) {
          if (!(a3 instanceof Array)) {
            a3 = ka(a3);
            for (var b2, c3 = []; !(b2 = a3.next()).done; )
              c3.push(b2.value);
            a3 = c3;
          }
          return a3;
        }
        var la;
        if ("function" == typeof Object.setPrototypeOf)
          la = Object.setPrototypeOf;
        else {
          var na;
          a: {
            var oa = { a: true }, pa = {};
            try {
              pa.__proto__ = oa;
              na = pa.a;
              break a;
            } catch (a3) {
            }
            na = false;
          }
          la = na ? function(a3, b2) {
            a3.__proto__ = b2;
            if (a3.__proto__ !== b2)
              throw new TypeError(a3 + " is not extensible");
            return a3;
          } : null;
        }
        var qa = la;
        function ra() {
          this.u = false;
          this.h = null;
          this.Oa = void 0;
          this.g = 1;
          this.ea = 0;
          this.i = null;
        }
        function ua(a3) {
          if (a3.u)
            throw new TypeError("Generator is already running");
          a3.u = true;
        }
        ra.prototype.O = function(a3) {
          this.Oa = a3;
        };
        function wa(a3, b2) {
          a3.i = { ab: b2, fb: true };
          a3.g = a3.ea;
        }
        ra.prototype.return = function(a3) {
          this.i = { return: a3 };
          this.g = this.ea;
        };
        function ya(a3, b2) {
          a3.g = 3;
          return { value: b2 };
        }
        function za(a3) {
          this.g = new ra();
          this.h = a3;
        }
        function Aa(a3, b2) {
          ua(a3.g);
          var c3 = a3.g.h;
          if (c3)
            return Ba(a3, "return" in c3 ? c3["return"] : function(d3) {
              return { value: d3, done: true };
            }, b2, a3.g.return);
          a3.g.return(b2);
          return Ca(a3);
        }
        function Ba(a3, b2, c3, d3) {
          try {
            var e7 = b2.call(a3.g.h, c3);
            if (!(e7 instanceof Object))
              throw new TypeError("Iterator result " + e7 + " is not an object");
            if (!e7.done)
              return a3.g.u = false, e7;
            var f2 = e7.value;
          } catch (g2) {
            return a3.g.h = null, wa(a3.g, g2), Ca(a3);
          }
          a3.g.h = null;
          d3.call(a3.g, f2);
          return Ca(a3);
        }
        function Ca(a3) {
          for (; a3.g.g; )
            try {
              var b2 = a3.h(a3.g);
              if (b2)
                return a3.g.u = false, { value: b2.value, done: false };
            } catch (c3) {
              a3.g.Oa = void 0, wa(a3.g, c3);
            }
          a3.g.u = false;
          if (a3.g.i) {
            b2 = a3.g.i;
            a3.g.i = null;
            if (b2.fb)
              throw b2.ab;
            return { value: b2.return, done: true };
          }
          return { value: void 0, done: true };
        }
        function Da(a3) {
          this.next = function(b2) {
            ua(a3.g);
            a3.g.h ? b2 = Ba(a3, a3.g.h.next, b2, a3.g.O) : (a3.g.O(b2), b2 = Ca(a3));
            return b2;
          };
          this.throw = function(b2) {
            ua(a3.g);
            a3.g.h ? b2 = Ba(a3, a3.g.h["throw"], b2, a3.g.O) : (wa(a3.g, b2), b2 = Ca(a3));
            return b2;
          };
          this.return = function(b2) {
            return Aa(a3, b2);
          };
          this[Symbol.iterator] = function() {
            return this;
          };
        }
        function Ea(a3, b2) {
          b2 = new Da(new za(b2));
          qa && a3.prototype && qa(b2, a3.prototype);
          return b2;
        }
        Array.from || (Array.from = function(a3) {
          return [].slice.call(a3);
        });
        Object.assign || (Object.assign = function(a3) {
          for (var b2 = [].slice.call(arguments, 1), c3 = 0, d3; c3 < b2.length; c3++)
            if (d3 = b2[c3])
              for (var e7 = a3, f2 = Object.keys(d3), g2 = 0; g2 < f2.length; g2++) {
                var h3 = f2[g2];
                e7[h3] = d3[h3];
              }
          return a3;
        });
        var Fa = setTimeout;
        function Ga() {
        }
        function Ha(a3, b2) {
          return function() {
            a3.apply(b2, arguments);
          };
        }
        function A2(a3) {
          if (!(this instanceof A2))
            throw new TypeError("Promises must be constructed via new");
          if ("function" !== typeof a3)
            throw new TypeError("not a function");
          this.N = 0;
          this.Ha = false;
          this.I = void 0;
          this.ba = [];
          Ia(a3, this);
        }
        function Ja(a3, b2) {
          for (; 3 === a3.N; )
            a3 = a3.I;
          0 === a3.N ? a3.ba.push(b2) : (a3.Ha = true, Ka(function() {
            var c3 = 1 === a3.N ? b2.hb : b2.ib;
            if (null === c3)
              (1 === a3.N ? La : Ma)(b2.promise, a3.I);
            else {
              try {
                var d3 = c3(a3.I);
              } catch (e7) {
                Ma(b2.promise, e7);
                return;
              }
              La(b2.promise, d3);
            }
          }));
        }
        function La(a3, b2) {
          try {
            if (b2 === a3)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (b2 && ("object" === typeof b2 || "function" === typeof b2)) {
              var c3 = b2.then;
              if (b2 instanceof A2) {
                a3.N = 3;
                a3.I = b2;
                Na(a3);
                return;
              }
              if ("function" === typeof c3) {
                Ia(Ha(c3, b2), a3);
                return;
              }
            }
            a3.N = 1;
            a3.I = b2;
            Na(a3);
          } catch (d3) {
            Ma(a3, d3);
          }
        }
        function Ma(a3, b2) {
          a3.N = 2;
          a3.I = b2;
          Na(a3);
        }
        function Na(a3) {
          2 === a3.N && 0 === a3.ba.length && Ka(function() {
            a3.Ha || "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a3.I);
          });
          for (var b2 = 0, c3 = a3.ba.length; b2 < c3; b2++)
            Ja(a3, a3.ba[b2]);
          a3.ba = null;
        }
        function Oa(a3, b2, c3) {
          this.hb = "function" === typeof a3 ? a3 : null;
          this.ib = "function" === typeof b2 ? b2 : null;
          this.promise = c3;
        }
        function Ia(a3, b2) {
          var c3 = false;
          try {
            a3(function(d3) {
              c3 || (c3 = true, La(b2, d3));
            }, function(d3) {
              c3 || (c3 = true, Ma(b2, d3));
            });
          } catch (d3) {
            c3 || (c3 = true, Ma(b2, d3));
          }
        }
        A2.prototype["catch"] = function(a3) {
          return this.then(null, a3);
        };
        A2.prototype.then = function(a3, b2) {
          var c3 = new this.constructor(Ga);
          Ja(this, new Oa(a3, b2, c3));
          return c3;
        };
        A2.prototype["finally"] = function(a3) {
          var b2 = this.constructor;
          return this.then(function(c3) {
            return b2.resolve(a3()).then(function() {
              return c3;
            });
          }, function(c3) {
            return b2.resolve(a3()).then(function() {
              return b2.reject(c3);
            });
          });
        };
        function Pa(a3) {
          return new A2(function(b2, c3) {
            function d3(h3, k2) {
              try {
                if (k2 && ("object" === typeof k2 || "function" === typeof k2)) {
                  var l5 = k2.then;
                  if ("function" === typeof l5) {
                    l5.call(k2, function(m2) {
                      d3(h3, m2);
                    }, c3);
                    return;
                  }
                }
                e7[h3] = k2;
                0 === --f2 && b2(e7);
              } catch (m2) {
                c3(m2);
              }
            }
            if (!a3 || "undefined" === typeof a3.length)
              return c3(new TypeError("Promise.all accepts an array"));
            var e7 = Array.prototype.slice.call(a3);
            if (0 === e7.length)
              return b2([]);
            for (var f2 = e7.length, g2 = 0; g2 < e7.length; g2++)
              d3(g2, e7[g2]);
          });
        }
        function Qa(a3) {
          return a3 && "object" === typeof a3 && a3.constructor === A2 ? a3 : new A2(function(b2) {
            b2(a3);
          });
        }
        function Ra(a3) {
          return new A2(function(b2, c3) {
            c3(a3);
          });
        }
        function Sa(a3) {
          return new A2(function(b2, c3) {
            if (!a3 || "undefined" === typeof a3.length)
              return c3(new TypeError("Promise.race accepts an array"));
            for (var d3 = 0, e7 = a3.length; d3 < e7; d3++)
              Qa(a3[d3]).then(b2, c3);
          });
        }
        var Ka = "function" === typeof setImmediate && function(a3) {
          setImmediate(a3);
        } || function(a3) {
          Fa(a3, 0);
        };
        if (!window.Promise) {
          window.Promise = A2;
          A2.prototype.then = A2.prototype.then;
          A2.all = Pa;
          A2.race = Sa;
          A2.resolve = Qa;
          A2.reject = Ra;
          var Ta = document.createTextNode(""), Ua = [];
          new MutationObserver(function() {
            for (var a3 = Ua.length, b2 = 0; b2 < a3; b2++)
              Ua[b2]();
            Ua.splice(0, a3);
          }).observe(Ta, { characterData: true });
          Ka = function(a3) {
            Ua.push(a3);
            Ta.textContent = 0 < Ta.textContent.length ? "" : "a";
          };
        }
        ;
        (function(a3, b2) {
          if (!(b2 in a3)) {
            var c3 = typeof global === typeof c3 ? window : global, d3 = 0, e7 = String(Math.random()), f2 = "__symbol@@" + e7, g2 = a3.getOwnPropertyNames, h3 = a3.getOwnPropertyDescriptor, k2 = a3.create, l5 = a3.keys, m2 = a3.freeze || a3, q = a3.defineProperty, H2 = a3.defineProperties, C2 = h3(a3, "getOwnPropertyNames"), t3 = a3.prototype, F = t3.hasOwnProperty, E2 = t3.propertyIsEnumerable, N2 = t3.toString, y2 = function(I2, u2, G) {
              F.call(I2, f2) || q(I2, f2, { enumerable: false, configurable: false, writable: false, value: {} });
              I2[f2]["@@" + u2] = G;
            }, X = function(I2, u2) {
              var G = k2(I2);
              g2(u2).forEach(function(p2) {
                sa.call(
                  u2,
                  p2
                ) && Va(G, p2, u2[p2]);
              });
              return G;
            }, x2 = function() {
            }, ta = function(I2) {
              return I2 != f2 && !F.call(ha, I2);
            }, ia = function(I2) {
              return I2 != f2 && F.call(ha, I2);
            }, sa = function(I2) {
              var u2 = String(I2);
              return ia(u2) ? F.call(this, u2) && !!this[f2] && this[f2]["@@" + u2] : E2.call(this, I2);
            }, n6 = function(I2) {
              q(t3, I2, { enumerable: false, configurable: true, get: x2, set: function(u2) {
                xa(this, I2, { enumerable: false, configurable: true, writable: true, value: u2 });
                y2(this, I2, true);
              } });
              ha[I2] = q(a3(I2), "constructor", jc);
              return m2(ha[I2]);
            }, J = function G(u2) {
              if (this instanceof G)
                throw new TypeError("Symbol is not a constructor");
              return n6("__symbol:".concat(u2 || "", e7, ++d3));
            }, ha = k2(null), jc = { value: J }, ib = function(u2) {
              return ha[u2];
            }, Va = function(u2, G, p2) {
              var r4 = String(G);
              if (ia(r4)) {
                G = xa;
                if (p2.enumerable) {
                  var B = k2(p2);
                  B.enumerable = false;
                } else
                  B = p2;
                G(u2, r4, B);
                y2(u2, r4, !!p2.enumerable);
              } else
                q(u2, G, p2);
              return u2;
            }, jb = function(u2) {
              return g2(u2).filter(ia).map(ib);
            };
            C2.value = Va;
            q(a3, "defineProperty", C2);
            C2.value = jb;
            q(a3, b2, C2);
            C2.value = function(u2) {
              return g2(u2).filter(ta);
            };
            q(a3, "getOwnPropertyNames", C2);
            C2.value = function(u2, G) {
              var p2 = jb(G);
              p2.length ? l5(G).concat(p2).forEach(function(r4) {
                sa.call(
                  G,
                  r4
                ) && Va(u2, r4, G[r4]);
              }) : H2(u2, G);
              return u2;
            };
            q(a3, "defineProperties", C2);
            C2.value = sa;
            q(t3, "propertyIsEnumerable", C2);
            C2.value = J;
            q(c3, "Symbol", C2);
            C2.value = function(u2) {
              u2 = "__symbol:".concat("__symbol:", u2, e7);
              return u2 in t3 ? ha[u2] : n6(u2);
            };
            q(J, "for", C2);
            C2.value = function(u2) {
              if (ta(u2))
                throw new TypeError(u2 + " is not a symbol");
              if (F.call(ha, u2) && (u2 = u2.slice(10), "__symbol:" === u2.slice(0, 10) && (u2 = u2.slice(10), u2 !== e7)))
                return u2 = u2.slice(0, u2.length - e7.length), 0 < u2.length ? u2 : void 0;
            };
            q(J, "keyFor", C2);
            C2.value = function(u2, G) {
              var p2 = h3(u2, G);
              p2 && ia(G) && (p2.enumerable = sa.call(u2, G));
              return p2;
            };
            q(a3, "getOwnPropertyDescriptor", C2);
            C2.value = function(u2, G) {
              return 1 === arguments.length || "undefined" === typeof G ? k2(u2) : X(u2, G);
            };
            q(a3, "create", C2);
            C2.value = function() {
              var u2 = N2.call(this);
              return "[object String]" === u2 && ia(this) ? "[object Symbol]" : u2;
            };
            q(t3, "toString", C2);
            try {
              if (true === k2(q({}, "__symbol:", { get: function() {
                return q(this, "__symbol:", { value: true })["__symbol:"];
              } }))["__symbol:"])
                var xa = q;
              else
                throw "IE11";
            } catch (u2) {
              xa = function(G, p2, r4) {
                var B = h3(t3, p2);
                delete t3[p2];
                q(G, p2, r4);
                q(t3, p2, B);
              };
            }
          }
        })(Object, "getOwnPropertySymbols");
        (function(a3, b2) {
          var c3 = a3.defineProperty, d3 = a3.prototype, e7 = d3.toString, f2;
          "iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(g2) {
            g2 in b2 || (c3(b2, g2, { value: b2(g2) }), "toStringTag" === g2 && (f2 = a3.getOwnPropertyDescriptor(d3, "toString"), f2.value = function() {
              var h3 = e7.call(this), k2 = null == this ? this : this[b2.toStringTag];
              return null == k2 ? h3 : "[object " + k2 + "]";
            }, c3(d3, "toString", f2)));
          });
        })(Object, Symbol);
        (function(a3, b2, c3) {
          function d3() {
            return this;
          }
          b2[a3] || (b2[a3] = function() {
            var e7 = 0, f2 = this, g2 = { next: function() {
              var h3 = f2.length <= e7;
              return h3 ? { done: h3 } : { done: h3, value: f2[e7++] };
            } };
            g2[a3] = d3;
            return g2;
          });
          c3[a3] || (c3[a3] = function() {
            var e7 = String.fromCodePoint, f2 = this, g2 = 0, h3 = f2.length, k2 = { next: function() {
              var l5 = h3 <= g2, m2 = l5 ? "" : e7(f2.codePointAt(g2));
              g2 += m2.length;
              return l5 ? { done: l5 } : { done: l5, value: m2 };
            } };
            k2[a3] = d3;
            return k2;
          });
        })(Symbol.iterator, Array.prototype, String.prototype);
        var Wa = Object.prototype.toString;
        Object.prototype.toString = function() {
          return void 0 === this ? "[object Undefined]" : null === this ? "[object Null]" : Wa.call(this);
        };
        Object.keys = function(a3) {
          return Object.getOwnPropertyNames(a3).filter(function(b2) {
            return (b2 = Object.getOwnPropertyDescriptor(a3, b2)) && b2.enumerable;
          });
        };
        String.prototype[Symbol.iterator] && String.prototype.codePointAt || (String.prototype[Symbol.iterator] = function Xa() {
          var b2, c3 = this;
          return Ea(Xa, function(d3) {
            1 == d3.g && (b2 = 0);
            if (3 != d3.g)
              return b2 < c3.length ? d3 = ya(d3, c3[b2]) : (d3.g = 0, d3 = void 0), d3;
            b2++;
            d3.g = 2;
          });
        });
        Set.prototype[Symbol.iterator] || (Set.prototype[Symbol.iterator] = function Ya() {
          var b2, c3 = this, d3;
          return Ea(Ya, function(e7) {
            1 == e7.g && (b2 = [], c3.forEach(function(f2) {
              b2.push(f2);
            }), d3 = 0);
            if (3 != e7.g)
              return d3 < b2.length ? e7 = ya(e7, b2[d3]) : (e7.g = 0, e7 = void 0), e7;
            d3++;
            e7.g = 2;
          });
        });
        Map.prototype[Symbol.iterator] || (Map.prototype[Symbol.iterator] = function Za() {
          var b2, c3 = this, d3;
          return Ea(Za, function(e7) {
            1 == e7.g && (b2 = [], c3.forEach(function(f2, g2) {
              b2.push([g2, f2]);
            }), d3 = 0);
            if (3 != e7.g)
              return d3 < b2.length ? e7 = ya(e7, b2[d3]) : (e7.g = 0, e7 = void 0), e7;
            d3++;
            e7.g = 2;
          });
        });
        var $a = document.createEvent("Event");
        $a.initEvent("foo", true, true);
        $a.preventDefault();
        if (!$a.defaultPrevented) {
          var ab = Event.prototype.preventDefault;
          Event.prototype.preventDefault = function() {
            this.cancelable && (ab.call(this), Object.defineProperty(this, "defaultPrevented", { get: function() {
              return true;
            }, configurable: true }));
          };
        }
        var bb = /Trident/.test(navigator.userAgent);
        if (!window.Event || bb && "function" !== typeof window.Event) {
          var cb = window.Event;
          window.Event = function(a3, b2) {
            b2 = b2 || {};
            var c3 = document.createEvent("Event");
            c3.initEvent(a3, !!b2.bubbles, !!b2.cancelable);
            return c3;
          };
          if (cb) {
            for (var db in cb)
              window.Event[db] = cb[db];
            window.Event.prototype = cb.prototype;
          }
        }
        if (!window.CustomEvent || bb && "function" !== typeof window.CustomEvent)
          window.CustomEvent = function(a3, b2) {
            b2 = b2 || {};
            var c3 = document.createEvent("CustomEvent");
            c3.initCustomEvent(a3, !!b2.bubbles, !!b2.cancelable, b2.detail);
            return c3;
          }, window.CustomEvent.prototype = window.Event.prototype;
        if (!window.MouseEvent || bb && "function" !== typeof window.MouseEvent) {
          var eb = window.MouseEvent;
          window.MouseEvent = function(a3, b2) {
            b2 = b2 || {};
            var c3 = document.createEvent("MouseEvent");
            c3.initMouseEvent(a3, !!b2.bubbles, !!b2.cancelable, b2.view || window, b2.detail, b2.screenX, b2.screenY, b2.clientX, b2.clientY, b2.ctrlKey, b2.altKey, b2.shiftKey, b2.metaKey, b2.button, b2.relatedTarget);
            return c3;
          };
          if (eb)
            for (var fb in eb)
              window.MouseEvent[fb] = eb[fb];
          window.MouseEvent.prototype = eb.prototype;
        }
        ;
        var gb, hb = function() {
          function a3() {
            e7++;
          }
          var b2 = false, c3 = false, d3 = { get capture() {
            return b2 = true;
          }, get once() {
            return c3 = true;
          } }, e7 = 0, f2 = document.createElement("div");
          f2.addEventListener("click", a3, d3);
          var g2 = b2 && c3;
          g2 && (f2.dispatchEvent(new Event("click")), f2.dispatchEvent(new Event("click")), g2 = 1 == e7);
          f2.removeEventListener("click", a3, d3);
          return g2;
        }(), kb = null !== (gb = window.EventTarget) && void 0 !== gb ? gb : window.Node;
        if (!hb && "addEventListener" in kb.prototype) {
          var lb = function(a3) {
            if (!a3 || "object" !== typeof a3 && "function" !== typeof a3) {
              var b2 = !!a3;
              a3 = false;
            } else
              b2 = !!a3.capture, a3 = !!a3.once;
            return { capture: b2, once: a3 };
          }, mb = kb.prototype.addEventListener, nb = kb.prototype.removeEventListener, qb = /* @__PURE__ */ new WeakMap(), rb = /* @__PURE__ */ new WeakMap(), sb = function(a3, b2, c3) {
            var d3 = c3 ? qb : rb;
            c3 = d3.get(a3);
            void 0 === c3 && d3.set(a3, c3 = /* @__PURE__ */ new Map());
            a3 = c3.get(b2);
            void 0 === a3 && c3.set(b2, a3 = /* @__PURE__ */ new WeakMap());
            return a3;
          };
          kb.prototype.addEventListener = function(a3, b2, c3) {
            var d3 = this;
            if (null != b2) {
              c3 = lb(c3);
              var e7 = c3.capture;
              c3 = c3.once;
              var f2 = sb(this, a3, e7);
              if (!f2.has(b2)) {
                var g2 = c3 ? function(h3) {
                  f2.delete(b2);
                  nb.call(d3, a3, g2, e7);
                  if ("function" === typeof b2)
                    return b2.call(d3, h3);
                  if ("function" === typeof (null === b2 || void 0 === b2 ? void 0 : b2.handleEvent))
                    return b2.handleEvent(h3);
                } : null;
                f2.set(b2, g2);
                mb.call(this, a3, null !== g2 && void 0 !== g2 ? g2 : b2, e7);
              }
            }
          };
          kb.prototype.removeEventListener = function(a3, b2, c3) {
            if (null != b2) {
              c3 = lb(c3).capture;
              var d3 = sb(this, a3, c3), e7 = d3.get(b2);
              void 0 !== e7 && (d3.delete(b2), nb.call(this, a3, null !== e7 && void 0 !== e7 ? e7 : b2, c3));
            }
          };
        }
        ;
        Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") || Object.defineProperty(Node.prototype, "baseURI", { get: function() {
          var a3 = (this.ownerDocument || this).querySelector("base[href]");
          return a3 && a3.href || window.location.href;
        }, configurable: true, enumerable: true });
        var tb, ub, vb = Element.prototype, wb = null !== (tb = Object.getOwnPropertyDescriptor(vb, "attributes")) && void 0 !== tb ? tb : Object.getOwnPropertyDescriptor(Node.prototype, "attributes"), xb = null !== (ub = null === wb || void 0 === wb ? void 0 : wb.get) && void 0 !== ub ? ub : function() {
          return this.attributes;
        }, yb = Array.prototype.map;
        vb.hasOwnProperty("getAttributeNames") || (vb.getAttributeNames = function() {
          return yb.call(xb.call(this), function(a3) {
            return a3.name;
          });
        });
        var zb, Ab = Element.prototype;
        Ab.hasOwnProperty("matches") || (Ab.matches = null !== (zb = Ab.webkitMatchesSelector) && void 0 !== zb ? zb : Ab.msMatchesSelector);
        var Bb = Node.prototype.appendChild;
        function Cb(a3) {
          a3 = a3.prototype;
          a3.hasOwnProperty("append") || Object.defineProperty(a3, "append", { configurable: true, enumerable: true, writable: true, value: function(b2) {
            for (var c3 = [], d3 = 0; d3 < arguments.length; ++d3)
              c3[d3] = arguments[d3];
            c3 = ka(c3);
            for (d3 = c3.next(); !d3.done; d3 = c3.next())
              d3 = d3.value, Bb.call(this, "string" === typeof d3 ? document.createTextNode(d3) : d3);
          } });
        }
        Cb(Document);
        Cb(DocumentFragment);
        Cb(Element);
        var Db, Eb, Fb = Node.prototype.insertBefore, Gb = null !== (Eb = null === (Db = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) || void 0 === Db ? void 0 : Db.get) && void 0 !== Eb ? Eb : function() {
          return this.firstChild;
        };
        function Hb(a3) {
          a3 = a3.prototype;
          a3.hasOwnProperty("prepend") || Object.defineProperty(a3, "prepend", { configurable: true, enumerable: true, writable: true, value: function(b2) {
            for (var c3 = [], d3 = 0; d3 < arguments.length; ++d3)
              c3[d3] = arguments[d3];
            d3 = Gb.call(this);
            c3 = ka(c3);
            for (var e7 = c3.next(); !e7.done; e7 = c3.next())
              e7 = e7.value, Fb.call(this, "string" === typeof e7 ? document.createTextNode(e7) : e7, d3);
          } });
        }
        Hb(Document);
        Hb(DocumentFragment);
        Hb(Element);
        var Ib, Jb, Kb = Node.prototype.appendChild, Lb = Node.prototype.removeChild, Mb = null !== (Jb = null === (Ib = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) || void 0 === Ib ? void 0 : Ib.get) && void 0 !== Jb ? Jb : function() {
          return this.firstChild;
        };
        function Nb(a3) {
          a3 = a3.prototype;
          a3.hasOwnProperty("replaceChildren") || Object.defineProperty(a3, "replaceChildren", { configurable: true, enumerable: true, writable: true, value: function(b2) {
            for (var c3 = [], d3 = 0; d3 < arguments.length; ++d3)
              c3[d3] = arguments[d3];
            for (; null !== (d3 = Mb.call(this)); )
              Lb.call(this, d3);
            c3 = ka(c3);
            for (d3 = c3.next(); !d3.done; d3 = c3.next())
              d3 = d3.value, Kb.call(this, "string" === typeof d3 ? document.createTextNode(d3) : d3);
          } });
        }
        Nb(Document);
        Nb(DocumentFragment);
        Nb(Element);
        var Ob, Pb, Qb, Rb, Sb = Node.prototype.insertBefore, Tb = null !== (Pb = null === (Ob = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Ob ? void 0 : Ob.get) && void 0 !== Pb ? Pb : function() {
          return this.parentNode;
        }, Ub = null !== (Rb = null === (Qb = Object.getOwnPropertyDescriptor(Node.prototype, "nextSibling")) || void 0 === Qb ? void 0 : Qb.get) && void 0 !== Rb ? Rb : function() {
          return this.nextSibling;
        };
        function Vb(a3) {
          a3 = a3.prototype;
          a3.hasOwnProperty("after") || Object.defineProperty(a3, "after", { configurable: true, enumerable: true, writable: true, value: function(b2) {
            for (var c3 = [], d3 = 0; d3 < arguments.length; ++d3)
              c3[d3] = arguments[d3];
            d3 = Tb.call(this);
            if (null !== d3) {
              var e7 = Ub.call(this);
              c3 = ka(c3);
              for (var f2 = c3.next(); !f2.done; f2 = c3.next())
                f2 = f2.value, Sb.call(d3, "string" === typeof f2 ? document.createTextNode(f2) : f2, e7);
            }
          } });
        }
        Vb(CharacterData);
        Vb(Element);
        var Wb, Xb, Yb = Node.prototype.insertBefore, Zb = null !== (Xb = null === (Wb = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Wb ? void 0 : Wb.get) && void 0 !== Xb ? Xb : function() {
          return this.parentNode;
        };
        function $b(a3) {
          a3 = a3.prototype;
          a3.hasOwnProperty("before") || Object.defineProperty(a3, "before", { configurable: true, enumerable: true, writable: true, value: function(b2) {
            for (var c3 = [], d3 = 0; d3 < arguments.length; ++d3)
              c3[d3] = arguments[d3];
            d3 = Zb.call(this);
            if (null !== d3) {
              c3 = ka(c3);
              for (var e7 = c3.next(); !e7.done; e7 = c3.next())
                e7 = e7.value, Yb.call(d3, "string" === typeof e7 ? document.createTextNode(e7) : e7, this);
            }
          } });
        }
        $b(CharacterData);
        $b(Element);
        var ac, bc, cc = Node.prototype.removeChild, dc = null !== (bc = null === (ac = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === ac ? void 0 : ac.get) && void 0 !== bc ? bc : function() {
          return this.parentNode;
        };
        function ec(a3) {
          a3 = a3.prototype;
          a3.hasOwnProperty("remove") || Object.defineProperty(a3, "remove", { configurable: true, enumerable: true, writable: true, value: function() {
            var b2 = dc.call(this);
            b2 && cc.call(b2, this);
          } });
        }
        ec(CharacterData);
        ec(Element);
        var fc, gc, hc = Node.prototype.insertBefore, ic = Node.prototype.removeChild, kc = null !== (gc = null === (fc = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === fc ? void 0 : fc.get) && void 0 !== gc ? gc : function() {
          return this.parentNode;
        };
        function lc(a3) {
          a3 = a3.prototype;
          a3.hasOwnProperty("replaceWith") || Object.defineProperty(a3, "replaceWith", { configurable: true, enumerable: true, writable: true, value: function(b2) {
            for (var c3 = [], d3 = 0; d3 < arguments.length; ++d3)
              c3[d3] = arguments[d3];
            d3 = kc.call(this);
            if (null !== d3) {
              c3 = ka(c3);
              for (var e7 = c3.next(); !e7.done; e7 = c3.next())
                e7 = e7.value, hc.call(d3, "string" === typeof e7 ? document.createTextNode(e7) : e7, this);
              ic.call(d3, this);
            }
          } });
        }
        lc(CharacterData);
        lc(Element);
        var mc = window.Element.prototype, nc = window.HTMLElement.prototype, oc = window.SVGElement.prototype;
        !nc.hasOwnProperty("classList") || mc.hasOwnProperty("classList") || oc.hasOwnProperty("classList") || Object.defineProperty(mc, "classList", Object.getOwnPropertyDescriptor(nc, "classList"));
        var pc = document.createElement("style");
        pc.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
        var qc = document.querySelector("head");
        qc.insertBefore(pc, qc.firstChild);
        var rc = window;
        rc.WebComponents = rc.WebComponents || { flags: {} };
        var sc = document.querySelector('script[src*="webcomponents-bundle"]'), tc = /wc-(.+)/, uc = {};
        if (!uc.noOpts) {
          location.search.slice(1).split("&").forEach(function(a3) {
            a3 = a3.split("=");
            var b2;
            a3[0] && (b2 = a3[0].match(tc)) && (uc[b2[1]] = a3[1] || true);
          });
          if (sc)
            for (var vc = 0, wc = void 0; wc = sc.attributes[vc]; vc++)
              "src" !== wc.name && (uc[wc.name] = wc.value || true);
          var xc = {};
          uc.log && uc.log.split && uc.log.split(",").forEach(function(a3) {
            xc[a3] = true;
          });
          uc.log = xc;
        }
        rc.WebComponents.flags = uc;
        var yc = uc.shadydom;
        if (yc) {
          rc.ShadyDOM = rc.ShadyDOM || {};
          rc.ShadyDOM.force = yc;
          var zc = uc.noPatch;
          rc.ShadyDOM.noPatch = "true" === zc ? true : zc;
        }
        var Ac = uc.register || uc.ce;
        Ac && window.customElements && (rc.customElements.forcePolyfill = Ac);
        (function() {
          function a3() {
          }
          function b2(p2, r4) {
            if (!p2.childNodes.length)
              return [];
            switch (p2.nodeType) {
              case Node.DOCUMENT_NODE:
                return F.call(p2, r4);
              case Node.DOCUMENT_FRAGMENT_NODE:
                return E2.call(p2, r4);
              default:
                return t3.call(p2, r4);
            }
          }
          var c3 = "undefined" === typeof HTMLTemplateElement, d3 = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment), e7 = false;
          /Trident/.test(navigator.userAgent) && function() {
            function p2(z2, R2) {
              if (z2 instanceof DocumentFragment)
                for (var ob; ob = z2.firstChild; )
                  B.call(this, ob, R2);
              else
                B.call(
                  this,
                  z2,
                  R2
                );
              return z2;
            }
            e7 = true;
            var r4 = Node.prototype.cloneNode;
            Node.prototype.cloneNode = function(z2) {
              z2 = r4.call(this, z2);
              this instanceof DocumentFragment && (z2.__proto__ = DocumentFragment.prototype);
              return z2;
            };
            DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll;
            DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector;
            Object.defineProperties(DocumentFragment.prototype, { nodeType: { get: function() {
              return Node.DOCUMENT_FRAGMENT_NODE;
            }, configurable: true }, localName: {
              get: function() {
              },
              configurable: true
            }, nodeName: { get: function() {
              return "#document-fragment";
            }, configurable: true } });
            var B = Node.prototype.insertBefore;
            Node.prototype.insertBefore = p2;
            var K = Node.prototype.appendChild;
            Node.prototype.appendChild = function(z2) {
              z2 instanceof DocumentFragment ? p2.call(this, z2, null) : K.call(this, z2);
              return z2;
            };
            var aa = Node.prototype.removeChild, ma = Node.prototype.replaceChild;
            Node.prototype.replaceChild = function(z2, R2) {
              z2 instanceof DocumentFragment ? (p2.call(this, z2, R2), aa.call(this, R2)) : ma.call(this, z2, R2);
              return R2;
            };
            Document.prototype.createDocumentFragment = function() {
              var z2 = this.createElement("df");
              z2.__proto__ = DocumentFragment.prototype;
              return z2;
            };
            var va = Document.prototype.importNode;
            Document.prototype.importNode = function(z2, R2) {
              R2 = va.call(this, z2, R2 || false);
              z2 instanceof DocumentFragment && (R2.__proto__ = DocumentFragment.prototype);
              return R2;
            };
          }();
          var f2 = Node.prototype.cloneNode, g2 = Document.prototype.createElement, h3 = Document.prototype.importNode, k2 = Node.prototype.removeChild, l5 = Node.prototype.appendChild, m2 = Node.prototype.replaceChild, q = DOMParser.prototype.parseFromString, H2 = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML") || { get: function() {
            return this.innerHTML;
          }, set: function(p2) {
            this.innerHTML = p2;
          } }, C2 = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes") || { get: function() {
            return this.childNodes;
          } }, t3 = Element.prototype.querySelectorAll, F = Document.prototype.querySelectorAll, E2 = DocumentFragment.prototype.querySelectorAll, N2 = function() {
            if (!c3) {
              var p2 = document.createElement("template"), r4 = document.createElement("template");
              r4.content.appendChild(document.createElement("div"));
              p2.content.appendChild(r4);
              p2 = p2.cloneNode(true);
              return 0 === p2.content.childNodes.length || 0 === p2.content.firstChild.content.childNodes.length || d3;
            }
          }();
          if (c3) {
            var y2 = document.implementation.createHTMLDocument("template"), X = true, x2 = document.createElement("style");
            x2.textContent = "template{display:none;}";
            var ta = document.head;
            ta.insertBefore(x2, ta.firstElementChild);
            a3.prototype = Object.create(HTMLElement.prototype);
            var ia = !document.createElement("div").hasOwnProperty("innerHTML");
            a3.Z = function(p2) {
              if (!p2.content && p2.namespaceURI === document.documentElement.namespaceURI) {
                p2.content = y2.createDocumentFragment();
                for (var r4; r4 = p2.firstChild; )
                  l5.call(p2.content, r4);
                if (ia)
                  p2.__proto__ = a3.prototype;
                else if (p2.cloneNode = function(B) {
                  return a3.va(this, B);
                }, X)
                  try {
                    n6(p2), J(p2);
                  } catch (B) {
                    X = false;
                  }
                a3.bootstrap(p2.content);
              }
            };
            var sa = { option: ["select"], thead: ["table"], col: ["colgroup", "table"], tr: ["tbody", "table"], th: ["tr", "tbody", "table"], td: ["tr", "tbody", "table"] }, n6 = function(p2) {
              Object.defineProperty(p2, "innerHTML", { get: function() {
                return xa(this);
              }, set: function(r4) {
                var B = sa[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(r4) || ["", ""])[1].toLowerCase()];
                if (B)
                  for (var K = 0; K < B.length; K++)
                    r4 = "<" + B[K] + ">" + r4 + "</" + B[K] + ">";
                y2.body.innerHTML = r4;
                for (a3.bootstrap(y2); this.content.firstChild; )
                  k2.call(this.content, this.content.firstChild);
                r4 = y2.body;
                if (B)
                  for (K = 0; K < B.length; K++)
                    r4 = r4.lastChild;
                for (; r4.firstChild; )
                  l5.call(this.content, r4.firstChild);
              }, configurable: true });
            }, J = function(p2) {
              Object.defineProperty(p2, "outerHTML", { get: function() {
                return "<template>" + this.innerHTML + "</template>";
              }, set: function(r4) {
                if (this.parentNode) {
                  y2.body.innerHTML = r4;
                  for (r4 = this.ownerDocument.createDocumentFragment(); y2.body.firstChild; )
                    l5.call(r4, y2.body.firstChild);
                  m2.call(this.parentNode, r4, this);
                } else
                  throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
              }, configurable: true });
            };
            n6(a3.prototype);
            J(a3.prototype);
            a3.bootstrap = function(p2) {
              p2 = b2(p2, "template");
              for (var r4 = 0, B = p2.length, K; r4 < B && (K = p2[r4]); r4++)
                a3.Z(K);
            };
            document.addEventListener("DOMContentLoaded", function() {
              a3.bootstrap(document);
            });
            Document.prototype.createElement = function() {
              var p2 = g2.apply(this, arguments);
              "template" === p2.localName && a3.Z(p2);
              return p2;
            };
            DOMParser.prototype.parseFromString = function() {
              var p2 = q.apply(this, arguments);
              a3.bootstrap(p2);
              return p2;
            };
            Object.defineProperty(HTMLElement.prototype, "innerHTML", { get: function() {
              return xa(this);
            }, set: function(p2) {
              H2.set.call(this, p2);
              a3.bootstrap(this);
            }, configurable: true, enumerable: true });
            var ha = /[&\u00A0"]/g, jc = /[&\u00A0<>]/g, ib = function(p2) {
              switch (p2) {
                case "&":
                  return "&amp;";
                case "<":
                  return "&lt;";
                case ">":
                  return "&gt;";
                case '"':
                  return "&quot;";
                case "\xA0":
                  return "&nbsp;";
              }
            };
            x2 = function(p2) {
              for (var r4 = {}, B = 0; B < p2.length; B++)
                r4[p2[B]] = true;
              return r4;
            };
            var Va = x2("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), jb = x2("style script xmp iframe noembed noframes plaintext noscript".split(" ")), xa = function(p2, r4) {
              "template" === p2.localName && (p2 = p2.content);
              for (var B = "", K = r4 ? r4(p2) : C2.get.call(p2), aa = 0, ma = K.length, va; aa < ma && (va = K[aa]); aa++) {
                a: {
                  var z2 = va;
                  var R2 = p2;
                  var ob = r4;
                  switch (z2.nodeType) {
                    case Node.ELEMENT_NODE:
                      for (var Jc = z2.localName, pb = "<" + Jc, Uh = z2.attributes, ze = 0; R2 = Uh[ze]; ze++)
                        pb += " " + R2.name + '="' + R2.value.replace(ha, ib) + '"';
                      pb += ">";
                      z2 = Va[Jc] ? pb : pb + xa(z2, ob) + "</" + Jc + ">";
                      break a;
                    case Node.TEXT_NODE:
                      z2 = z2.data;
                      z2 = R2 && jb[R2.localName] ? z2 : z2.replace(jc, ib);
                      break a;
                    case Node.COMMENT_NODE:
                      z2 = "<!--" + z2.data + "-->";
                      break a;
                    default:
                      throw window.console.error(z2), Error("not implemented");
                  }
                }
                B += z2;
              }
              return B;
            };
          }
          if (c3 || N2) {
            a3.va = function(p2, r4) {
              var B = f2.call(p2, false);
              this.Z && this.Z(B);
              r4 && (l5.call(B.content, f2.call(p2.content, true)), I2(B.content, p2.content));
              return B;
            };
            var I2 = function(p2, r4) {
              if (r4.querySelectorAll && (r4 = b2(r4, "template"), 0 !== r4.length)) {
                p2 = b2(p2, "template");
                for (var B = 0, K = p2.length, aa, ma; B < K; B++)
                  ma = r4[B], aa = p2[B], a3 && a3.Z && a3.Z(ma), m2.call(aa.parentNode, u2.call(ma, true), aa);
              }
            }, u2 = Node.prototype.cloneNode = function(p2) {
              if (!e7 && d3 && this instanceof DocumentFragment)
                if (p2)
                  var r4 = G.call(this.ownerDocument, this, true);
                else
                  return this.ownerDocument.createDocumentFragment();
              else
                this.nodeType === Node.ELEMENT_NODE && "template" === this.localName && this.namespaceURI == document.documentElement.namespaceURI ? r4 = a3.va(this, p2) : r4 = f2.call(
                  this,
                  p2
                );
              p2 && I2(r4, this);
              return r4;
            }, G = Document.prototype.importNode = function(p2, r4) {
              r4 = r4 || false;
              if ("template" === p2.localName)
                return a3.va(p2, r4);
              var B = h3.call(this, p2, r4);
              if (r4) {
                I2(B, p2);
                p2 = b2(B, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
                for (var K, aa = 0; aa < p2.length; aa++) {
                  K = p2[aa];
                  r4 = g2.call(document, "script");
                  r4.textContent = K.textContent;
                  for (var ma = K.attributes, va = 0, z2; va < ma.length; va++)
                    z2 = ma[va], r4.setAttribute(z2.name, z2.value);
                  m2.call(K.parentNode, r4, K);
                }
              }
              return B;
            };
          }
          c3 && (window.HTMLTemplateElement = a3);
        })();
        function Bc() {
        }
        Bc.prototype.toJSON = function() {
          return {};
        };
        function D(a3) {
          a3.__shady || (a3.__shady = new Bc());
          return a3.__shady;
        }
        function L(a3) {
          return a3 && a3.__shady;
        }
        ;
        var M2 = window.ShadyDOM || {};
        M2.cb = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
        var Cc = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
        M2.D = !!(Cc && Cc.configurable && Cc.get);
        M2.Ba = M2.force || !M2.cb;
        M2.J = M2.noPatch || false;
        M2.ha = M2.preferPerformance;
        M2.Da = "on-demand" === M2.J;
        var Dc;
        var Ec = M2.querySelectorImplementation;
        Dc = -1 < ["native", "selectorEngine"].indexOf(Ec) ? Ec : void 0;
        M2.wb = Dc;
        M2.Ra = navigator.userAgent.match("Trident");
        function Fc() {
          return Document.prototype.msElementsFromPoint ? "msElementsFromPoint" : "elementsFromPoint";
        }
        function Gc(a3) {
          return (a3 = L(a3)) && void 0 !== a3.firstChild;
        }
        function O(a3) {
          return a3 instanceof ShadowRoot;
        }
        function Hc(a3) {
          return (a3 = (a3 = L(a3)) && a3.root) && Ic(a3);
        }
        var Kc = Element.prototype, Lc = Kc.matches || Kc.matchesSelector || Kc.mozMatchesSelector || Kc.msMatchesSelector || Kc.oMatchesSelector || Kc.webkitMatchesSelector, Mc = document.createTextNode(""), Nc = 0, Oc = [];
        new MutationObserver(function() {
          for (; Oc.length; )
            try {
              Oc.shift()();
            } catch (a3) {
              throw Mc.textContent = Nc++, a3;
            }
        }).observe(Mc, { characterData: true });
        function Pc(a3) {
          Oc.push(a3);
          Mc.textContent = Nc++;
        }
        var Qc = document.contains ? function(a3, b2) {
          return a3.__shady_native_contains(b2);
        } : function(a3, b2) {
          return a3 === b2 || a3.documentElement && a3.documentElement.__shady_native_contains(b2);
        };
        function Rc(a3, b2) {
          for (; b2; ) {
            if (b2 == a3)
              return true;
            b2 = b2.__shady_parentNode;
          }
          return false;
        }
        function Sc(a3) {
          for (var b2 = a3.length - 1; 0 <= b2; b2--) {
            var c3 = a3[b2], d3 = c3.getAttribute("id") || c3.getAttribute("name");
            d3 && "length" !== d3 && isNaN(d3) && (a3[d3] = c3);
          }
          a3.item = function(e7) {
            return a3[e7];
          };
          a3.namedItem = function(e7) {
            if ("length" !== e7 && isNaN(e7) && a3[e7])
              return a3[e7];
            for (var f2 = ka(a3), g2 = f2.next(); !g2.done; g2 = f2.next())
              if (g2 = g2.value, (g2.getAttribute("id") || g2.getAttribute("name")) == e7)
                return g2;
            return null;
          };
          return a3;
        }
        function Tc(a3) {
          var b2 = [];
          for (a3 = a3.__shady_native_firstChild; a3; a3 = a3.__shady_native_nextSibling)
            b2.push(a3);
          return b2;
        }
        function Uc(a3) {
          var b2 = [];
          for (a3 = a3.__shady_firstChild; a3; a3 = a3.__shady_nextSibling)
            b2.push(a3);
          return b2;
        }
        function Vc(a3, b2, c3) {
          c3.configurable = true;
          if (c3.value)
            a3[b2] = c3.value;
          else
            try {
              Object.defineProperty(a3, b2, c3);
            } catch (d3) {
            }
        }
        function P2(a3, b2, c3, d3) {
          c3 = void 0 === c3 ? "" : c3;
          for (var e7 in b2)
            d3 && 0 <= d3.indexOf(e7) || Vc(a3, c3 + e7, b2[e7]);
        }
        function Wc(a3, b2) {
          for (var c3 in b2)
            c3 in a3 && Vc(a3, c3, b2[c3]);
        }
        function Q(a3) {
          var b2 = {};
          Object.getOwnPropertyNames(a3).forEach(function(c3) {
            b2[c3] = Object.getOwnPropertyDescriptor(a3, c3);
          });
          return b2;
        }
        function Xc(a3, b2) {
          for (var c3 = Object.getOwnPropertyNames(b2), d3 = 0, e7; d3 < c3.length; d3++)
            e7 = c3[d3], a3[e7] = b2[e7];
        }
        function Yc(a3) {
          return a3 instanceof Node ? a3 : document.createTextNode("" + a3);
        }
        function Zc(a3) {
          for (var b2 = [], c3 = 0; c3 < arguments.length; ++c3)
            b2[c3] = arguments[c3];
          if (1 === b2.length)
            return Yc(b2[0]);
          c3 = document.createDocumentFragment();
          b2 = ka(b2);
          for (var d3 = b2.next(); !d3.done; d3 = b2.next())
            c3.appendChild(Yc(d3.value));
          return c3;
        }
        function $c(a3) {
          var b2;
          for (b2 = void 0 === b2 ? 1 : b2; 0 < b2; b2--)
            a3 = a3.reduce(function(c3, d3) {
              Array.isArray(d3) ? c3.push.apply(c3, w2(d3)) : c3.push(d3);
              return c3;
            }, []);
          return a3;
        }
        function ad(a3) {
          var b2 = [], c3 = /* @__PURE__ */ new Set();
          a3 = ka(a3);
          for (var d3 = a3.next(); !d3.done; d3 = a3.next())
            d3 = d3.value, c3.has(d3) || (b2.push(d3), c3.add(d3));
          return b2;
        }
        ;
        var bd = [], cd;
        function dd(a3) {
          cd || (cd = true, Pc(ed));
          bd.push(a3);
        }
        function ed() {
          cd = false;
          for (var a3 = !!bd.length; bd.length; )
            bd.shift()();
          return a3;
        }
        ed.list = bd;
        function fd() {
          this.g = false;
          this.addedNodes = [];
          this.removedNodes = [];
          this.qa = /* @__PURE__ */ new Set();
        }
        function gd(a3) {
          a3.g || (a3.g = true, Pc(function() {
            a3.flush();
          }));
        }
        fd.prototype.flush = function() {
          if (this.g) {
            this.g = false;
            var a3 = this.takeRecords();
            a3.length && this.qa.forEach(function(b2) {
              b2(a3);
            });
          }
        };
        fd.prototype.takeRecords = function() {
          if (this.addedNodes.length || this.removedNodes.length) {
            var a3 = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];
            this.addedNodes = [];
            this.removedNodes = [];
            return a3;
          }
          return [];
        };
        function hd(a3, b2) {
          var c3 = D(a3);
          c3.ga || (c3.ga = new fd());
          c3.ga.qa.add(b2);
          var d3 = c3.ga;
          return { Va: b2, X: d3, Wa: a3, takeRecords: function() {
            return d3.takeRecords();
          } };
        }
        function id(a3) {
          var b2 = a3 && a3.X;
          b2 && (b2.qa.delete(a3.Va), b2.qa.size || (D(a3.Wa).ga = null));
        }
        function jd(a3, b2) {
          var c3 = b2.getRootNode();
          return a3.map(function(d3) {
            var e7 = c3 === d3.target.getRootNode();
            if (e7 && d3.addedNodes) {
              if (e7 = [].slice.call(d3.addedNodes).filter(function(f2) {
                return c3 === f2.getRootNode();
              }), e7.length)
                return d3 = Object.create(d3), Object.defineProperty(d3, "addedNodes", { value: e7, configurable: true }), d3;
            } else if (e7)
              return d3;
          }).filter(function(d3) {
            return d3;
          });
        }
        ;
        var kd = /[&\u00A0"]/g, ld = /[&\u00A0<>]/g;
        function md(a3) {
          switch (a3) {
            case "&":
              return "&amp;";
            case "<":
              return "&lt;";
            case ">":
              return "&gt;";
            case '"':
              return "&quot;";
            case "\xA0":
              return "&nbsp;";
          }
        }
        function nd(a3) {
          for (var b2 = {}, c3 = 0; c3 < a3.length; c3++)
            b2[a3[c3]] = true;
          return b2;
        }
        var od = nd("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), pd = nd("style script xmp iframe noembed noframes plaintext noscript".split(" "));
        function qd(a3, b2) {
          "template" === a3.localName && (a3 = a3.content);
          for (var c3 = "", d3 = b2 ? b2(a3) : a3.childNodes, e7 = 0, f2 = d3.length, g2 = void 0; e7 < f2 && (g2 = d3[e7]); e7++) {
            a: {
              var h3 = g2;
              var k2 = a3, l5 = b2;
              switch (h3.nodeType) {
                case Node.ELEMENT_NODE:
                  k2 = h3.localName;
                  for (var m2 = "<" + k2, q = h3.attributes, H2 = 0, C2; C2 = q[H2]; H2++)
                    m2 += " " + C2.name + '="' + C2.value.replace(kd, md) + '"';
                  m2 += ">";
                  h3 = od[k2] ? m2 : m2 + qd(h3, l5) + "</" + k2 + ">";
                  break a;
                case Node.TEXT_NODE:
                  h3 = h3.data;
                  h3 = k2 && pd[k2.localName] ? h3 : h3.replace(ld, md);
                  break a;
                case Node.COMMENT_NODE:
                  h3 = "<!--" + h3.data + "-->";
                  break a;
                default:
                  throw window.console.error(h3), Error("not implemented");
              }
            }
            c3 += h3;
          }
          return c3;
        }
        ;
        var rd = M2.D, sd = { querySelector: function(a3) {
          return this.__shady_native_querySelector(a3);
        }, querySelectorAll: function(a3) {
          return this.__shady_native_querySelectorAll(a3);
        } }, td = {};
        function ud(a3) {
          td[a3] = function(b2) {
            return b2["__shady_native_" + a3];
          };
        }
        function vd(a3, b2) {
          P2(a3, b2, "__shady_native_");
          for (var c3 in b2)
            ud(c3);
        }
        function S3(a3, b2) {
          b2 = void 0 === b2 ? [] : b2;
          for (var c3 = 0; c3 < b2.length; c3++) {
            var d3 = b2[c3], e7 = Object.getOwnPropertyDescriptor(a3, d3);
            e7 && (Object.defineProperty(a3, "__shady_native_" + d3, e7), e7.value ? sd[d3] || (sd[d3] = e7.value) : ud(d3));
          }
        }
        var wd = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, false), xd = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, false), yd = document.implementation.createHTMLDocument("inert");
        function zd(a3) {
          for (var b2; b2 = a3.__shady_native_firstChild; )
            a3.__shady_native_removeChild(b2);
        }
        var Ad = ["firstElementChild", "lastElementChild", "children", "childElementCount"], Bd = ["querySelector", "querySelectorAll", "append", "prepend", "replaceChildren"];
        function Cd() {
          var a3 = ["dispatchEvent", "addEventListener", "removeEventListener"];
          window.EventTarget ? (S3(window.EventTarget.prototype, a3), void 0 === window.__shady_native_addEventListener && S3(Window.prototype, a3)) : (S3(Node.prototype, a3), S3(Window.prototype, a3), S3(XMLHttpRequest.prototype, a3));
          rd ? S3(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : vd(Node.prototype, {
            parentNode: { get: function() {
              wd.currentNode = this;
              return wd.parentNode();
            } },
            firstChild: { get: function() {
              wd.currentNode = this;
              return wd.firstChild();
            } },
            lastChild: { get: function() {
              wd.currentNode = this;
              return wd.lastChild();
            } },
            previousSibling: { get: function() {
              wd.currentNode = this;
              return wd.previousSibling();
            } },
            nextSibling: { get: function() {
              wd.currentNode = this;
              return wd.nextSibling();
            } },
            childNodes: { get: function() {
              var b2 = [];
              wd.currentNode = this;
              for (var c3 = wd.firstChild(); c3; )
                b2.push(c3), c3 = wd.nextSibling();
              return b2;
            } },
            parentElement: { get: function() {
              xd.currentNode = this;
              return xd.parentNode();
            } },
            textContent: { get: function() {
              switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                  for (var b2 = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, false), c3 = "", d3; d3 = b2.nextNode(); )
                    c3 += d3.nodeValue;
                  return c3;
                default:
                  return this.nodeValue;
              }
            }, set: function(b2) {
              if ("undefined" === typeof b2 || null === b2)
                b2 = "";
              switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                  zd(this);
                  (0 < b2.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b2), void 0);
                  break;
                default:
                  this.nodeValue = b2;
              }
            } }
          });
          S3(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
          S3(HTMLElement.prototype, ["parentElement", "contains"]);
          a3 = { firstElementChild: { get: function() {
            xd.currentNode = this;
            return xd.firstChild();
          } }, lastElementChild: { get: function() {
            xd.currentNode = this;
            return xd.lastChild();
          } }, children: { get: function() {
            var b2 = [];
            xd.currentNode = this;
            for (var c3 = xd.firstChild(); c3; )
              b2.push(c3), c3 = xd.nextSibling();
            return Sc(b2);
          } }, childElementCount: { get: function() {
            return this.children ? this.children.length : 0;
          } } };
          rd ? (S3(Element.prototype, Ad), S3(Element.prototype, [
            "previousElementSibling",
            "nextElementSibling",
            "innerHTML",
            "className"
          ]), S3(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (vd(Element.prototype, a3), vd(Element.prototype, { previousElementSibling: { get: function() {
            xd.currentNode = this;
            return xd.previousSibling();
          } }, nextElementSibling: { get: function() {
            xd.currentNode = this;
            return xd.nextSibling();
          } }, innerHTML: { get: function() {
            return qd(this, Tc);
          }, set: function(b2) {
            var c3 = "template" === this.localName ? this.content : this;
            zd(c3);
            var d3 = this.localName || "div";
            d3 = this.namespaceURI && this.namespaceURI !== yd.namespaceURI ? yd.createElementNS(this.namespaceURI, d3) : yd.createElement(d3);
            d3.innerHTML = b2;
            for (b2 = "template" === this.localName ? d3.content : d3; d3 = b2.__shady_native_firstChild; )
              c3.__shady_native_insertBefore(d3, void 0);
          } }, className: { get: function() {
            return this.getAttribute("class") || "";
          }, set: function(b2) {
            this.setAttribute("class", b2);
          } } }));
          S3(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));
          S3(Element.prototype, Bd);
          S3(HTMLElement.prototype, ["focus", "blur"]);
          window.HTMLTemplateElement && S3(window.HTMLTemplateElement.prototype, ["innerHTML"]);
          rd ? S3(DocumentFragment.prototype, Ad) : vd(DocumentFragment.prototype, a3);
          S3(DocumentFragment.prototype, Bd);
          rd ? (S3(Document.prototype, Ad), S3(Document.prototype, ["activeElement"])) : vd(Document.prototype, a3);
          S3(Document.prototype, ["importNode", "getElementById", "elementFromPoint", Fc()]);
          S3(Document.prototype, Bd);
        }
        ;
        var Dd = Q({ get childNodes() {
          return this.__shady_childNodes;
        }, get firstChild() {
          return this.__shady_firstChild;
        }, get lastChild() {
          return this.__shady_lastChild;
        }, get childElementCount() {
          return this.__shady_childElementCount;
        }, get children() {
          return this.__shady_children;
        }, get firstElementChild() {
          return this.__shady_firstElementChild;
        }, get lastElementChild() {
          return this.__shady_lastElementChild;
        }, get shadowRoot() {
          return this.__shady_shadowRoot;
        } }), Ed = Q({ get textContent() {
          return this.__shady_textContent;
        }, set textContent(a3) {
          this.__shady_textContent = a3;
        }, get innerHTML() {
          return this.__shady_innerHTML;
        }, set innerHTML(a3) {
          this.__shady_innerHTML = a3;
        } }), Fd = Q({ get parentElement() {
          return this.__shady_parentElement;
        }, get parentNode() {
          return this.__shady_parentNode;
        }, get nextSibling() {
          return this.__shady_nextSibling;
        }, get previousSibling() {
          return this.__shady_previousSibling;
        }, get nextElementSibling() {
          return this.__shady_nextElementSibling;
        }, get previousElementSibling() {
          return this.__shady_previousElementSibling;
        }, get className() {
          return this.__shady_className;
        }, set className(a3) {
          this.__shady_className = a3;
        } });
        function Gd(a3) {
          for (var b2 in a3) {
            var c3 = a3[b2];
            c3 && (c3.enumerable = false);
          }
        }
        Gd(Dd);
        Gd(Ed);
        Gd(Fd);
        var Hd = M2.D || true === M2.J, Id = Hd ? function() {
        } : function(a3) {
          var b2 = D(a3);
          b2.Ta || (b2.Ta = true, Wc(a3, Fd));
        }, Jd = Hd ? function() {
        } : function(a3) {
          var b2 = D(a3);
          b2.Sa || (b2.Sa = true, Wc(a3, Dd), window.customElements && window.customElements.polyfillWrapFlushCallback && !M2.J || Wc(a3, Ed));
        };
        var Kd = "__eventWrappers" + Date.now(), Ld = function() {
          var a3 = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
          return a3 ? function(b2) {
            return a3.get.call(b2);
          } : null;
        }(), Md = function() {
          function a3() {
          }
          var b2 = false, c3 = { get capture() {
            b2 = true;
            return false;
          } };
          window.addEventListener("test", a3, c3);
          window.removeEventListener("test", a3, c3);
          return b2;
        }();
        function Nd(a3) {
          if (null === a3 || "object" !== typeof a3 && "function" !== typeof a3) {
            var b2 = !!a3;
            var c3 = false;
          } else {
            b2 = !!a3.capture;
            c3 = !!a3.once;
            var d3 = a3.U;
          }
          return { Pa: d3, capture: b2, once: c3, Na: Md ? a3 : b2 };
        }
        var Od = {
          blur: true,
          focus: true,
          focusin: true,
          focusout: true,
          click: true,
          dblclick: true,
          mousedown: true,
          mouseenter: true,
          mouseleave: true,
          mousemove: true,
          mouseout: true,
          mouseover: true,
          mouseup: true,
          wheel: true,
          beforeinput: true,
          input: true,
          keydown: true,
          keyup: true,
          compositionstart: true,
          compositionupdate: true,
          compositionend: true,
          touchstart: true,
          touchend: true,
          touchmove: true,
          touchcancel: true,
          pointerover: true,
          pointerenter: true,
          pointerdown: true,
          pointermove: true,
          pointerup: true,
          pointercancel: true,
          pointerout: true,
          pointerleave: true,
          gotpointercapture: true,
          lostpointercapture: true,
          dragstart: true,
          drag: true,
          dragenter: true,
          dragleave: true,
          dragover: true,
          drop: true,
          dragend: true,
          DOMActivate: true,
          DOMFocusIn: true,
          DOMFocusOut: true,
          keypress: true
        }, Pd = { DOMAttrModified: true, DOMAttributeNameChanged: true, DOMCharacterDataModified: true, DOMElementNameChanged: true, DOMNodeInserted: true, DOMNodeInsertedIntoDocument: true, DOMNodeRemoved: true, DOMNodeRemovedFromDocument: true, DOMSubtreeModified: true };
        function Qd(a3) {
          return a3 instanceof Node ? a3.__shady_getRootNode() : a3;
        }
        function Rd(a3, b2) {
          var c3 = [], d3 = a3;
          for (a3 = Qd(a3); d3; )
            c3.push(d3), d3 = d3.__shady_assignedSlot ? d3.__shady_assignedSlot : d3.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d3.host && (b2 || d3 !== a3) ? d3.host : d3.__shady_parentNode;
          c3[c3.length - 1] === document && c3.push(window);
          return c3;
        }
        function Sd(a3) {
          a3.__composedPath || (a3.__composedPath = Rd(a3.target, true));
          return a3.__composedPath;
        }
        function Td(a3, b2) {
          if (!O)
            return a3;
          a3 = Rd(a3, true);
          for (var c3 = 0, d3, e7 = void 0, f2, g2 = void 0; c3 < b2.length; c3++)
            if (d3 = b2[c3], f2 = Qd(d3), f2 !== e7 && (g2 = a3.indexOf(f2), e7 = f2), !O(f2) || -1 < g2)
              return d3;
        }
        var Ud = { get composed() {
          void 0 === this.__composed && (Ld ? this.__composed = "focusin" === this.type || "focusout" === this.type || Ld(this) : false !== this.isTrusted && (this.__composed = Od[this.type]));
          return this.__composed || false;
        }, composedPath: function() {
          this.__composedPath || (this.__composedPath = Rd(this.__target, this.composed));
          return this.__composedPath;
        }, get target() {
          return Td(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
        }, get relatedTarget() {
          if (!this.__relatedTarget)
            return null;
          this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = Rd(this.__relatedTarget, true));
          return Td(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
        }, stopPropagation: function() {
          Event.prototype.stopPropagation.call(this);
          this.ua = true;
        }, stopImmediatePropagation: function() {
          Event.prototype.stopImmediatePropagation.call(this);
          this.ua = this.__immediatePropagationStopped = true;
        } }, Vd = M2.D && Object.getOwnPropertyDescriptor(Event.prototype, "eventPhase");
        Vd && (Object.defineProperty(Ud, "eventPhase", { get: function() {
          return this.currentTarget === this.target ? Event.AT_TARGET : this.__shady_native_eventPhase;
        }, enumerable: true, configurable: true }), Object.defineProperty(Ud, "__shady_native_eventPhase", Vd));
        function Wd(a3) {
          function b2(c3, d3) {
            c3 = new a3(c3, d3);
            c3.__composed = d3 && !!d3.composed;
            return c3;
          }
          b2.__proto__ = a3;
          b2.prototype = a3.prototype;
          return b2;
        }
        var Xd = { focus: true, blur: true };
        function Yd(a3) {
          return a3.__target !== a3.target || a3.__relatedTarget !== a3.relatedTarget;
        }
        function Zd(a3, b2, c3) {
          if (c3 = b2.__handlers && b2.__handlers[a3.type] && b2.__handlers[a3.type][c3])
            for (var d3 = 0, e7; (e7 = c3[d3]) && (!Yd(a3) || a3.target !== a3.relatedTarget) && (e7.call(b2, a3), !a3.__immediatePropagationStopped); d3++)
              ;
        }
        var $d = new Event("e").hasOwnProperty("currentTarget");
        function ae(a3) {
          a3 = $d ? Object.create(a3) : a3;
          var b2 = a3.composedPath(), c3 = b2.map(function(m2) {
            return Td(m2, b2);
          }), d3 = a3.bubbles, e7 = Object.getOwnPropertyDescriptor(a3, "currentTarget");
          Object.defineProperty(a3, "currentTarget", { configurable: true, enumerable: true, get: function() {
            return k2;
          } });
          var f2 = Event.CAPTURING_PHASE, g2 = Object.getOwnPropertyDescriptor(a3, "eventPhase");
          Object.defineProperty(a3, "eventPhase", { configurable: true, enumerable: true, get: function() {
            return f2;
          } });
          try {
            for (var h3 = b2.length - 1; 0 <= h3; h3--) {
              var k2 = b2[h3];
              f2 = k2 === c3[h3] ? Event.AT_TARGET : Event.CAPTURING_PHASE;
              Zd(a3, k2, "capture");
              if (a3.ua)
                return;
            }
            for (h3 = 0; h3 < b2.length; h3++) {
              k2 = b2[h3];
              var l5 = k2 === c3[h3];
              if (l5 || d3) {
                if (f2 = l5 ? Event.AT_TARGET : Event.BUBBLING_PHASE, Zd(a3, k2, "bubble"), a3.ua)
                  break;
              }
            }
          } finally {
            $d || (e7 ? Object.defineProperty(a3, "currentTarget", e7) : delete a3.currentTarget, g2 ? Object.defineProperty(a3, "eventPhase", g2) : delete a3.eventPhase);
          }
        }
        function be(a3, b2, c3, d3) {
          for (var e7 = 0; e7 < a3.length; e7++) {
            var f2 = a3[e7], g2 = f2.type, h3 = f2.capture;
            if (b2 === f2.node && c3 === g2 && d3 === h3)
              return e7;
          }
          return -1;
        }
        function ce(a3) {
          ed();
          return !M2.ha && this instanceof Node && !Qc(document, this) ? (a3.__target || de(a3, this), ae(a3)) : this.__shady_native_dispatchEvent(a3);
        }
        function ee(a3, b2, c3) {
          var d3 = this, e7 = Nd(c3), f2 = e7.capture, g2 = e7.once, h3 = e7.Pa;
          e7 = e7.Na;
          if (b2) {
            var k2 = typeof b2;
            if ("function" === k2 || "object" === k2) {
              if ("object" !== k2 || b2.handleEvent && "function" === typeof b2.handleEvent) {
                if (Pd[a3])
                  return this.__shady_native_addEventListener(a3, b2, e7);
                var l5 = h3 || this;
                if (h3 = b2[Kd]) {
                  if (-1 < be(h3, l5, a3, f2))
                    return;
                } else
                  b2[Kd] = [];
                h3 = function(m2) {
                  g2 && d3.__shady_removeEventListener(a3, b2, c3);
                  m2.__target || de(m2);
                  if (l5 !== d3) {
                    var q = Object.getOwnPropertyDescriptor(m2, "currentTarget");
                    Object.defineProperty(m2, "currentTarget", {
                      get: function() {
                        return l5;
                      },
                      configurable: true
                    });
                    var H2 = Object.getOwnPropertyDescriptor(m2, "eventPhase");
                    Object.defineProperty(m2, "eventPhase", { configurable: true, enumerable: true, get: function() {
                      return f2 ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
                    } });
                  }
                  m2.__previousCurrentTarget = m2.currentTarget;
                  if (!O(l5) && "slot" !== l5.localName || -1 != m2.composedPath().indexOf(l5)) {
                    if (m2.composed || -1 < m2.composedPath().indexOf(l5)) {
                      if (Yd(m2) && m2.target === m2.relatedTarget)
                        m2.eventPhase === Event.BUBBLING_PHASE && m2.stopImmediatePropagation();
                      else if (m2.eventPhase === Event.CAPTURING_PHASE || m2.bubbles || m2.target === l5 || l5 instanceof Window) {
                        var C2 = "function" === k2 ? b2.call(l5, m2) : b2.handleEvent && b2.handleEvent(m2);
                        l5 !== d3 && (q ? (Object.defineProperty(m2, "currentTarget", q), q = null) : delete m2.currentTarget, H2 ? (Object.defineProperty(m2, "eventPhase", H2), H2 = null) : delete m2.eventPhase);
                        return C2;
                      }
                    }
                  }
                };
                b2[Kd].push({ node: l5, type: a3, capture: f2, ub: h3 });
                this.__handlers = this.__handlers || {};
                this.__handlers[a3] = this.__handlers[a3] || { capture: [], bubble: [] };
                this.__handlers[a3][f2 ? "capture" : "bubble"].push(h3);
                Xd[a3] || this.__shady_native_addEventListener(
                  a3,
                  h3,
                  e7
                );
              }
            }
          }
        }
        function fe(a3, b2, c3) {
          if (b2) {
            var d3 = Nd(c3);
            c3 = d3.capture;
            var e7 = d3.Pa;
            d3 = d3.Na;
            if (Pd[a3])
              return this.__shady_native_removeEventListener(a3, b2, d3);
            var f2 = e7 || this;
            e7 = void 0;
            var g2 = null;
            try {
              g2 = b2[Kd];
            } catch (h3) {
            }
            g2 && (f2 = be(g2, f2, a3, c3), -1 < f2 && (e7 = g2.splice(f2, 1)[0].ub, g2.length || (b2[Kd] = void 0)));
            this.__shady_native_removeEventListener(a3, e7 || b2, d3);
            e7 && this.__handlers && this.__handlers[a3] && (a3 = this.__handlers[a3][c3 ? "capture" : "bubble"], b2 = a3.indexOf(e7), -1 < b2 && a3.splice(b2, 1));
          }
        }
        function ge() {
          for (var a3 in Xd)
            window.__shady_native_addEventListener(a3, function(b2) {
              b2.__target || (de(b2), ae(b2));
            }, true);
        }
        var he = Q(Ud);
        function de(a3, b2) {
          b2 = void 0 === b2 ? a3.target : b2;
          a3.__target = b2;
          a3.__relatedTarget = a3.relatedTarget;
          if (M2.D) {
            b2 = Object.getPrototypeOf(a3);
            if (!b2.hasOwnProperty("__shady_patchedProto")) {
              var c3 = Object.create(b2);
              c3.__shady_sourceProto = b2;
              P2(c3, he);
              b2.__shady_patchedProto = c3;
            }
            a3.__proto__ = b2.__shady_patchedProto;
          } else
            P2(a3, he);
        }
        var ie = Wd(Event), je = Wd(CustomEvent), ke = Wd(MouseEvent);
        function le() {
          if (!Ld && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
            var a3 = function() {
              var b2 = new MouseEvent("click", { bubbles: true, cancelable: true, composed: true });
              this.__shady_dispatchEvent(b2);
            };
            Element.prototype.click ? Element.prototype.click = a3 : HTMLElement.prototype.click && (HTMLElement.prototype.click = a3);
          }
        }
        var me = Object.getOwnPropertyNames(Element.prototype).filter(function(a3) {
          return "on" === a3.substring(0, 2);
        }), ne = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function(a3) {
          return "on" === a3.substring(0, 2);
        });
        function oe(a3) {
          return { set: function(b2) {
            var c3 = D(this), d3 = a3.substring(2);
            c3.T || (c3.T = {});
            c3.T[a3] && this.removeEventListener(d3, c3.T[a3]);
            this.__shady_addEventListener(d3, b2);
            c3.T[a3] = b2;
          }, get: function() {
            var b2 = L(this);
            return b2 && b2.T && b2.T[a3];
          }, configurable: true };
        }
        ;
        function pe(a3, b2) {
          return { index: a3, ia: [], pa: b2 };
        }
        function qe(a3, b2, c3, d3) {
          var e7 = 0, f2 = 0, g2 = 0, h3 = 0, k2 = Math.min(b2 - e7, d3 - f2);
          if (0 == e7 && 0 == f2)
            a: {
              for (g2 = 0; g2 < k2; g2++)
                if (a3[g2] !== c3[g2])
                  break a;
              g2 = k2;
            }
          if (b2 == a3.length && d3 == c3.length) {
            h3 = a3.length;
            for (var l5 = c3.length, m2 = 0; m2 < k2 - g2 && re(a3[--h3], c3[--l5]); )
              m2++;
            h3 = m2;
          }
          e7 += g2;
          f2 += g2;
          b2 -= h3;
          d3 -= h3;
          if (0 == b2 - e7 && 0 == d3 - f2)
            return [];
          if (e7 == b2) {
            for (b2 = pe(e7, 0); f2 < d3; )
              b2.ia.push(c3[f2++]);
            return [b2];
          }
          if (f2 == d3)
            return [pe(e7, b2 - e7)];
          k2 = e7;
          g2 = f2;
          d3 = d3 - g2 + 1;
          h3 = b2 - k2 + 1;
          b2 = Array(d3);
          for (l5 = 0; l5 < d3; l5++)
            b2[l5] = Array(h3), b2[l5][0] = l5;
          for (l5 = 0; l5 < h3; l5++)
            b2[0][l5] = l5;
          for (l5 = 1; l5 < d3; l5++)
            for (m2 = 1; m2 < h3; m2++)
              if (a3[k2 + m2 - 1] === c3[g2 + l5 - 1])
                b2[l5][m2] = b2[l5 - 1][m2 - 1];
              else {
                var q = b2[l5 - 1][m2] + 1, H2 = b2[l5][m2 - 1] + 1;
                b2[l5][m2] = q < H2 ? q : H2;
              }
          k2 = b2.length - 1;
          g2 = b2[0].length - 1;
          d3 = b2[k2][g2];
          for (a3 = []; 0 < k2 || 0 < g2; )
            0 == k2 ? (a3.push(2), g2--) : 0 == g2 ? (a3.push(3), k2--) : (h3 = b2[k2 - 1][g2 - 1], l5 = b2[k2 - 1][g2], m2 = b2[k2][g2 - 1], q = l5 < m2 ? l5 < h3 ? l5 : h3 : m2 < h3 ? m2 : h3, q == h3 ? (h3 == d3 ? a3.push(0) : (a3.push(1), d3 = h3), k2--, g2--) : q == l5 ? (a3.push(3), k2--, d3 = l5) : (a3.push(2), g2--, d3 = m2));
          a3.reverse();
          b2 = void 0;
          k2 = [];
          for (g2 = 0; g2 < a3.length; g2++)
            switch (a3[g2]) {
              case 0:
                b2 && (k2.push(b2), b2 = void 0);
                e7++;
                f2++;
                break;
              case 1:
                b2 || (b2 = pe(e7, 0));
                b2.pa++;
                e7++;
                b2.ia.push(c3[f2]);
                f2++;
                break;
              case 2:
                b2 || (b2 = pe(
                  e7,
                  0
                ));
                b2.pa++;
                e7++;
                break;
              case 3:
                b2 || (b2 = pe(e7, 0)), b2.ia.push(c3[f2]), f2++;
            }
          b2 && k2.push(b2);
          return k2;
        }
        function re(a3, b2) {
          return a3 === b2;
        }
        ;
        var se = Q({ dispatchEvent: ce, addEventListener: ee, removeEventListener: fe });
        var te = null;
        function ue() {
          te || (te = window.ShadyCSS && window.ShadyCSS.ScopingShim);
          return te || null;
        }
        function ve(a3, b2, c3) {
          var d3 = ue();
          return d3 && "class" === b2 ? (d3.setElementClass(a3, c3), true) : false;
        }
        function we(a3, b2) {
          var c3 = ue();
          c3 && c3.unscopeNode(a3, b2);
        }
        function xe(a3, b2) {
          var c3 = ue();
          if (!c3)
            return true;
          if (a3.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            c3 = true;
            for (a3 = a3.__shady_firstChild; a3; a3 = a3.__shady_nextSibling)
              c3 = c3 && xe(a3, b2);
            return c3;
          }
          return a3.nodeType !== Node.ELEMENT_NODE ? true : c3.currentScopeForNode(a3) === b2;
        }
        function ye(a3) {
          if (a3.nodeType !== Node.ELEMENT_NODE)
            return "";
          var b2 = ue();
          return b2 ? b2.currentScopeForNode(a3) : "";
        }
        function Ae(a3, b2) {
          if (a3)
            for (a3.nodeType === Node.ELEMENT_NODE && b2(a3), a3 = a3.__shady_firstChild; a3; a3 = a3.__shady_nextSibling)
              a3.nodeType === Node.ELEMENT_NODE && Ae(a3, b2);
        }
        ;
        var Be = window.document, Ce = M2.ha, De = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"), Ee = De && De.get;
        function Fe(a3) {
          for (var b2; b2 = a3.__shady_firstChild; )
            a3.__shady_removeChild(b2);
        }
        function Ge(a3) {
          var b2 = L(a3);
          if (b2 && void 0 !== b2.ta)
            for (b2 = a3.__shady_firstChild; b2; b2 = b2.__shady_nextSibling)
              Ge(b2);
          if (a3 = L(a3))
            a3.ta = void 0;
        }
        function He(a3) {
          var b2 = a3;
          if (a3 && "slot" === a3.localName) {
            var c3 = L(a3);
            (c3 = c3 && c3.aa) && (b2 = c3.length ? c3[0] : He(a3.__shady_nextSibling));
          }
          return b2;
        }
        function Ie(a3, b2, c3) {
          if (a3 = (a3 = L(a3)) && a3.ga) {
            if (b2)
              if (b2.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                for (var d3 = 0, e7 = b2.childNodes.length; d3 < e7; d3++)
                  a3.addedNodes.push(b2.childNodes[d3]);
              else
                a3.addedNodes.push(b2);
            c3 && a3.removedNodes.push(c3);
            gd(a3);
          }
        }
        var Pe = Q({
          get parentNode() {
            var a3 = L(this);
            a3 = a3 && a3.parentNode;
            return void 0 !== a3 ? a3 : this.__shady_native_parentNode;
          },
          get firstChild() {
            var a3 = L(this);
            a3 = a3 && a3.firstChild;
            return void 0 !== a3 ? a3 : this.__shady_native_firstChild;
          },
          get lastChild() {
            var a3 = L(this);
            a3 = a3 && a3.lastChild;
            return void 0 !== a3 ? a3 : this.__shady_native_lastChild;
          },
          get nextSibling() {
            var a3 = L(this);
            a3 = a3 && a3.nextSibling;
            return void 0 !== a3 ? a3 : this.__shady_native_nextSibling;
          },
          get previousSibling() {
            var a3 = L(this);
            a3 = a3 && a3.previousSibling;
            return void 0 !== a3 ? a3 : this.__shady_native_previousSibling;
          },
          get childNodes() {
            if (Gc(this)) {
              var a3 = L(this);
              if (!a3.childNodes) {
                a3.childNodes = [];
                for (var b2 = this.__shady_firstChild; b2; b2 = b2.__shady_nextSibling)
                  a3.childNodes.push(b2);
              }
              var c3 = a3.childNodes;
            } else
              c3 = this.__shady_native_childNodes;
            c3.item = function(d3) {
              return c3[d3];
            };
            return c3;
          },
          get parentElement() {
            var a3 = L(this);
            (a3 = a3 && a3.parentNode) && a3.nodeType !== Node.ELEMENT_NODE && (a3 = null);
            return void 0 !== a3 ? a3 : this.__shady_native_parentElement;
          },
          get isConnected() {
            if (Ee && Ee.call(this))
              return true;
            if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE)
              return false;
            var a3 = this.ownerDocument;
            if (null === a3 || Qc(a3, this))
              return true;
            for (a3 = this; a3 && !(a3 instanceof Document); )
              a3 = a3.__shady_parentNode || (O(a3) ? a3.host : void 0);
            return !!(a3 && a3 instanceof Document);
          },
          get textContent() {
            if (Gc(this)) {
              for (var a3 = [], b2 = this.__shady_firstChild; b2; b2 = b2.__shady_nextSibling)
                b2.nodeType !== Node.COMMENT_NODE && a3.push(b2.__shady_textContent);
              return a3.join("");
            }
            return this.__shady_native_textContent;
          },
          set textContent(a3) {
            if ("undefined" === typeof a3 || null === a3)
              a3 = "";
            switch (this.nodeType) {
              case Node.ELEMENT_NODE:
              case Node.DOCUMENT_FRAGMENT_NODE:
                if (!Gc(this) && M2.D) {
                  var b2 = this.__shady_firstChild;
                  (b2 != this.__shady_lastChild || b2 && b2.nodeType != Node.TEXT_NODE) && Fe(this);
                  this.__shady_native_textContent = a3;
                } else
                  Fe(this), (0 < a3.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a3));
                break;
              default:
                this.nodeValue = a3;
            }
          },
          insertBefore: function(a3, b2) {
            if (this.ownerDocument !== Be && a3.ownerDocument !== Be)
              return this.__shady_native_insertBefore(a3, b2), a3;
            if (a3 === this)
              throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
            if (b2) {
              var c3 = L(b2);
              c3 = c3 && c3.parentNode;
              if (void 0 !== c3 && c3 !== this || void 0 === c3 && b2.__shady_native_parentNode !== this)
                throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
            }
            if (b2 === a3)
              return a3;
            Ie(this, a3);
            var d3 = [], e7 = (c3 = Je(this)) ? c3.host.localName : ye(this), f2 = a3.__shady_parentNode;
            if (f2) {
              var g2 = ye(a3);
              var h3 = !!c3 || !Je(a3) || Ce && void 0 !== this.__noInsertionPoint;
              f2.__shady_removeChild(a3, h3);
            }
            f2 = true;
            var k2 = (!Ce || void 0 === a3.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !xe(a3, e7), l5 = c3 && !a3.__noInsertionPoint && (!Ce || a3.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
            if (l5 || k2)
              k2 && (g2 = g2 || ye(a3)), Ae(a3, function(m2) {
                l5 && "slot" === m2.localName && d3.push(m2);
                if (k2) {
                  var q = g2;
                  ue() && (q && we(m2, q), (q = ue()) && q.scopeNode(m2, e7));
                }
              });
            d3.length && (Ke(c3), c3.i.push.apply(c3.i, w2(d3)), Le(c3));
            Gc(this) && (Me(a3, this, b2), h3 = L(this), h3.root ? (f2 = false, Hc(this) && Le(h3.root)) : c3 && "slot" === this.localName && (f2 = false, Le(c3)));
            f2 ? (c3 = O(this) ? this.host : this, b2 ? (b2 = He(b2), c3.__shady_native_insertBefore(a3, b2)) : c3.__shady_native_appendChild(a3)) : a3.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a3);
            return a3;
          },
          appendChild: function(a3) {
            if (this != a3 || !O(a3))
              return this.__shady_insertBefore(a3);
          },
          removeChild: function(a3, b2) {
            b2 = void 0 === b2 ? false : b2;
            if (this.ownerDocument !== Be)
              return this.__shady_native_removeChild(a3);
            if (a3.__shady_parentNode !== this)
              throw Error("The node to be removed is not a child of this node: " + a3);
            Ie(this, null, a3);
            var c3 = Je(a3), d3 = c3 && Ne(c3, a3), e7 = L(this);
            if (Gc(this) && (Oe(a3, this), Hc(this))) {
              Le(e7.root);
              var f2 = true;
            }
            if (ue() && !b2 && c3 && a3.nodeType !== Node.TEXT_NODE) {
              var g2 = ye(a3);
              Ae(a3, function(h3) {
                we(h3, g2);
              });
            }
            Ge(a3);
            c3 && ((b2 = "slot" === this.localName) && (f2 = true), (d3 || b2) && Le(c3));
            f2 || (f2 = O(this) ? this.host : this, (!e7.root && "slot" !== a3.localName || f2 === a3.__shady_native_parentNode) && f2.__shady_native_removeChild(a3));
            return a3;
          },
          replaceChild: function(a3, b2) {
            this.__shady_insertBefore(a3, b2);
            this.__shady_removeChild(b2);
            return a3;
          },
          cloneNode: function(a3) {
            if ("template" == this.localName)
              return this.__shady_native_cloneNode(a3);
            var b2 = this.__shady_native_cloneNode(false);
            if (a3 && b2.nodeType !== Node.ATTRIBUTE_NODE) {
              a3 = this.__shady_firstChild;
              for (var c3; a3; a3 = a3.__shady_nextSibling)
                c3 = a3.__shady_cloneNode(true), b2.__shady_appendChild(c3);
            }
            return b2;
          },
          getRootNode: function(a3) {
            if (this && this.nodeType) {
              var b2 = D(this), c3 = b2.ta;
              void 0 === c3 && (O(this) ? (c3 = this, b2.ta = c3) : (c3 = (c3 = this.__shady_parentNode) ? c3.__shady_getRootNode(a3) : this, document.documentElement.__shady_native_contains(this) && (b2.ta = c3)));
              return c3;
            }
          },
          contains: function(a3) {
            return Rc(this, a3);
          }
        });
        var Re = Q({ get assignedSlot() {
          var a3 = this.__shady_parentNode;
          (a3 = a3 && a3.__shady_shadowRoot) && Qe(a3);
          return (a3 = L(this)) && a3.assignedSlot || null;
        } });
        var Se = /* @__PURE__ */ new Map();
        [["(", { end: ")", sa: true }], ["[", { end: "]", sa: true }], ['"', { end: '"', sa: false }], ["'", { end: "'", sa: false }]].forEach(function(a3) {
          var b2 = ka(a3);
          a3 = b2.next().value;
          b2 = b2.next().value;
          Se.set(a3, b2);
        });
        function Te(a3, b2, c3, d3) {
          for (d3 = void 0 === d3 ? true : d3; b2 < a3.length; b2++)
            if ("\\" === a3[b2] && b2 < a3.length - 1 && "\n" !== a3[b2 + 1])
              b2++;
            else {
              if (-1 !== c3.indexOf(a3[b2]))
                return b2;
              if (d3 && Se.has(a3[b2])) {
                var e7 = Se.get(a3[b2]);
                b2 = Te(a3, b2 + 1, [e7.end], e7.sa);
              }
            }
          return a3.length;
        }
        function Ue(a3) {
          function b2() {
            if (0 < d3.length) {
              for (; " " === d3[d3.length - 1]; )
                d3.pop();
              c3.push({ La: d3.filter(function(k2, l5) {
                return 0 === l5 % 2;
              }), Za: d3.filter(function(k2, l5) {
                return 1 === l5 % 2;
              }) });
              d3.length = 0;
            }
          }
          for (var c3 = [], d3 = [], e7 = 0; e7 < a3.length; ) {
            var f2 = d3[d3.length - 1], g2 = Te(a3, e7, [",", " ", ">", "+", "~"]), h3 = g2 === e7 ? a3[e7] : a3.substring(e7, g2);
            if ("," === h3)
              b2();
            else if (-1 === [void 0, " ", ">", "+", "~"].indexOf(f2) || " " !== h3)
              " " === f2 && -1 !== [">", "+", "~"].indexOf(h3) ? d3[d3.length - 1] = h3 : d3.push(h3);
            e7 = g2 + (g2 === e7 ? 1 : 0);
          }
          b2();
          return c3;
        }
        ;
        function Ve(a3, b2, c3) {
          var d3 = [];
          We(a3, b2, c3, d3);
          return d3;
        }
        function We(a3, b2, c3, d3) {
          for (a3 = a3.__shady_firstChild; a3; a3 = a3.__shady_nextSibling) {
            var e7;
            if (e7 = a3.nodeType === Node.ELEMENT_NODE) {
              e7 = a3;
              var f2 = b2, g2 = c3, h3 = d3, k2 = f2(e7);
              k2 && h3.push(e7);
              g2 && g2(k2) ? e7 = k2 : (We(e7, f2, g2, h3), e7 = void 0);
            }
            if (e7)
              break;
          }
        }
        var Xe = { get firstElementChild() {
          var a3 = L(this);
          if (a3 && void 0 !== a3.firstChild) {
            for (a3 = this.__shady_firstChild; a3 && a3.nodeType !== Node.ELEMENT_NODE; )
              a3 = a3.__shady_nextSibling;
            return a3;
          }
          return this.__shady_native_firstElementChild;
        }, get lastElementChild() {
          var a3 = L(this);
          if (a3 && void 0 !== a3.lastChild) {
            for (a3 = this.__shady_lastChild; a3 && a3.nodeType !== Node.ELEMENT_NODE; )
              a3 = a3.__shady_previousSibling;
            return a3;
          }
          return this.__shady_native_lastElementChild;
        }, get children() {
          return Gc(this) ? Sc(Array.prototype.filter.call(
            Uc(this),
            function(a3) {
              return a3.nodeType === Node.ELEMENT_NODE;
            }
          )) : this.__shady_native_children;
        }, get childElementCount() {
          var a3 = this.__shady_children;
          return a3 ? a3.length : 0;
        } }, Ye = Q((Xe.append = function(a3) {
          for (var b2 = [], c3 = 0; c3 < arguments.length; ++c3)
            b2[c3] = arguments[c3];
          this.__shady_insertBefore(Zc.apply(null, w2(b2)), null);
        }, Xe.prepend = function(a3) {
          for (var b2 = [], c3 = 0; c3 < arguments.length; ++c3)
            b2[c3] = arguments[c3];
          this.__shady_insertBefore(Zc.apply(null, w2(b2)), this.__shady_firstChild);
        }, Xe.replaceChildren = function(a3) {
          for (var b2 = [], c3 = 0; c3 < arguments.length; ++c3)
            b2[c3] = arguments[c3];
          for (; null !== (c3 = this.__shady_firstChild); )
            this.__shady_removeChild(c3);
          this.__shady_insertBefore(Zc.apply(null, w2(b2)), null);
        }, Xe));
        function Ze(a3, b2) {
          function c3(e7, f2) {
            return (e7 === a3 || -1 === f2.indexOf(":scope")) && Lc.call(e7, f2);
          }
          var d3 = Ue(b2);
          if (1 > d3.length)
            return [];
          for (b2 = $c(Ve(a3, function() {
            return true;
          }).map(function(e7) {
            return $c(d3.map(function(f2) {
              var g2 = f2.La, h3 = g2.length - 1;
              return c3(e7, g2[h3]) ? { target: e7, da: f2, fa: e7, index: h3 } : [];
            }));
          })); b2.some(function(e7) {
            return 0 < e7.index;
          }); )
            b2 = $c(b2.map(function(e7) {
              if (0 >= e7.index)
                return e7;
              var f2 = e7.target, g2 = e7.fa, h3 = e7.da;
              e7 = e7.index - 1;
              var k2 = h3.Za[e7], l5 = h3.La[e7];
              if (" " === k2) {
                k2 = [];
                for (g2 = g2.__shady_parentElement; g2; g2 = g2.__shady_parentElement)
                  c3(
                    g2,
                    l5
                  ) && k2.push({ target: f2, da: h3, fa: g2, index: e7 });
                return k2;
              }
              if (">" === k2)
                return g2 = g2.__shady_parentElement, c3(g2, l5) ? { target: f2, da: h3, fa: g2, index: e7 } : [];
              if ("+" === k2)
                return (g2 = g2.__shady_previousElementSibling) && c3(g2, l5) ? { target: f2, da: h3, fa: g2, index: e7 } : [];
              if ("~" === k2) {
                k2 = [];
                for (g2 = g2.__shady_previousElementSibling; g2; g2 = g2.__shady_previousElementSibling)
                  c3(g2, l5) && k2.push({ target: f2, da: h3, fa: g2, index: e7 });
                return k2;
              }
              throw Error("Unrecognized combinator: '" + k2 + "'.");
            }));
          return ad(b2.map(function(e7) {
            return e7.target;
          }));
        }
        var $e = M2.querySelectorImplementation, af = Q({ querySelector: function(a3) {
          if ("native" === $e) {
            var b2 = Array.prototype.slice.call((this instanceof ShadowRoot ? this.host : this).__shady_native_querySelectorAll(a3)), c3 = this.__shady_getRootNode();
            b2 = ka(b2);
            for (var d3 = b2.next(); !d3.done; d3 = b2.next())
              if (d3 = d3.value, d3.__shady_getRootNode() == c3)
                return d3;
            return null;
          }
          if ("selectorEngine" === $e)
            return Ze(this, a3)[0] || null;
          if (void 0 === $e)
            return Ve(this, function(e7) {
              return Lc.call(e7, a3);
            }, function(e7) {
              return !!e7;
            })[0] || null;
          throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '" + ($e + "'"));
        }, querySelectorAll: function(a3, b2) {
          if (b2 || "native" === $e) {
            b2 = Array.prototype.slice.call((this instanceof ShadowRoot ? this.host : this).__shady_native_querySelectorAll(a3));
            var c3 = this.__shady_getRootNode();
            return Sc(b2.filter(function(d3) {
              return d3.__shady_getRootNode() == c3;
            }));
          }
          if ("selectorEngine" === $e)
            return Sc(Ze(this, a3));
          if (void 0 === $e)
            return Sc(Ve(this, function(d3) {
              return Lc.call(d3, a3);
            }));
          throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '" + ($e + "'"));
        } }), bf = M2.ha && !M2.J ? Xc({}, Ye) : Ye;
        Xc(Ye, af);
        var cf = Q({ after: function(a3) {
          for (var b2 = [], c3 = 0; c3 < arguments.length; ++c3)
            b2[c3] = arguments[c3];
          c3 = this.__shady_parentNode;
          if (null !== c3) {
            var d3 = this.__shady_nextSibling;
            c3.__shady_insertBefore(Zc.apply(null, w2(b2)), d3);
          }
        }, before: function(a3) {
          for (var b2 = [], c3 = 0; c3 < arguments.length; ++c3)
            b2[c3] = arguments[c3];
          c3 = this.__shady_parentNode;
          null !== c3 && c3.__shady_insertBefore(Zc.apply(null, w2(b2)), this);
        }, remove: function() {
          var a3 = this.__shady_parentNode;
          null !== a3 && a3.__shady_removeChild(this);
        }, replaceWith: function(a3) {
          for (var b2 = [], c3 = 0; c3 < arguments.length; ++c3)
            b2[c3] = arguments[c3];
          c3 = this.__shady_parentNode;
          if (null !== c3) {
            var d3 = this.__shady_nextSibling;
            c3.__shady_removeChild(this);
            c3.__shady_insertBefore(Zc.apply(null, w2(b2)), d3);
          }
        } });
        var df = window.document;
        function ef(a3, b2) {
          if ("slot" === b2)
            a3 = a3.__shady_parentNode, Hc(a3) && Le(L(a3).root);
          else if ("slot" === a3.localName && "name" === b2 && (b2 = Je(a3))) {
            if (b2.g) {
              ff(b2);
              var c3 = a3.Ua, d3 = gf(a3);
              if (d3 !== c3) {
                c3 = b2.h[c3];
                var e7 = c3.indexOf(a3);
                0 <= e7 && c3.splice(e7, 1);
                c3 = b2.h[d3] || (b2.h[d3] = []);
                c3.push(a3);
                1 < c3.length && (b2.h[d3] = hf(c3));
              }
            }
            Le(b2);
          }
        }
        var jf = Q({
          get previousElementSibling() {
            var a3 = L(this);
            if (a3 && void 0 !== a3.previousSibling) {
              for (a3 = this.__shady_previousSibling; a3 && a3.nodeType !== Node.ELEMENT_NODE; )
                a3 = a3.__shady_previousSibling;
              return a3;
            }
            return this.__shady_native_previousElementSibling;
          },
          get nextElementSibling() {
            var a3 = L(this);
            if (a3 && void 0 !== a3.nextSibling) {
              for (a3 = this.__shady_nextSibling; a3 && a3.nodeType !== Node.ELEMENT_NODE; )
                a3 = a3.__shady_nextSibling;
              return a3;
            }
            return this.__shady_native_nextElementSibling;
          },
          get slot() {
            return this.getAttribute("slot");
          },
          set slot(a3) {
            this.__shady_setAttribute("slot", a3);
          },
          get className() {
            return this.getAttribute("class") || "";
          },
          set className(a3) {
            this.__shady_setAttribute("class", a3);
          },
          setAttribute: function(a3, b2) {
            this.ownerDocument !== df ? this.__shady_native_setAttribute(a3, b2) : ve(this, a3, b2) || (this.__shady_native_setAttribute(a3, b2), ef(this, a3));
          },
          removeAttribute: function(a3) {
            this.ownerDocument !== df ? this.__shady_native_removeAttribute(a3) : ve(this, a3, "") ? "" === this.getAttribute(a3) && this.__shady_native_removeAttribute(a3) : (this.__shady_native_removeAttribute(a3), ef(this, a3));
          }
        });
        M2.ha || me.forEach(function(a3) {
          jf[a3] = oe(a3);
        });
        var of = Q({ attachShadow: function(a3) {
          if (!this)
            throw Error("Must provide a host.");
          if (!a3)
            throw Error("Not enough arguments.");
          if (a3.shadyUpgradeFragment && !M2.Ra) {
            var b2 = a3.shadyUpgradeFragment;
            b2.__proto__ = ShadowRoot.prototype;
            kf(b2, this, a3);
            lf(b2, b2);
            a3 = b2.__noInsertionPoint ? null : b2.querySelectorAll("slot");
            b2.__noInsertionPoint = void 0;
            if (a3 && a3.length) {
              var c3 = b2;
              Ke(c3);
              c3.i.push.apply(c3.i, w2(a3));
              Le(b2);
            }
            b2.host.__shady_native_appendChild(b2);
          } else
            b2 = new mf(nf, this, a3);
          return this.__CE_shadowRoot = b2;
        }, get shadowRoot() {
          var a3 = L(this);
          return a3 && a3.lb || null;
        } });
        Xc(jf, of);
        var pf = document.implementation.createHTMLDocument("inert"), qf = Q({ get innerHTML() {
          return Gc(this) ? qd("template" === this.localName ? this.content : this, Uc) : this.__shady_native_innerHTML;
        }, set innerHTML(a3) {
          if ("template" === this.localName)
            this.__shady_native_innerHTML = a3;
          else {
            Fe(this);
            var b2 = this.localName || "div";
            b2 = this.namespaceURI && this.namespaceURI !== pf.namespaceURI ? pf.createElementNS(this.namespaceURI, b2) : pf.createElement(b2);
            for (M2.D ? b2.__shady_native_innerHTML = a3 : b2.innerHTML = a3; a3 = b2.__shady_firstChild; )
              this.__shady_insertBefore(a3);
          }
        } });
        var rf = Q({ blur: function() {
          var a3 = L(this);
          (a3 = (a3 = a3 && a3.root) && a3.activeElement) ? a3.__shady_blur() : this.__shady_native_blur();
        } });
        M2.ha || ne.forEach(function(a3) {
          rf[a3] = oe(a3);
        });
        var sf = Q({ assignedNodes: function(a3) {
          if ("slot" === this.localName) {
            var b2 = this.__shady_getRootNode();
            b2 && O(b2) && Qe(b2);
            return (b2 = L(this)) ? (a3 && a3.flatten ? b2.aa : b2.assignedNodes) || [] : [];
          }
        }, addEventListener: function(a3, b2, c3) {
          if ("slot" !== this.localName || "slotchange" === a3)
            ee.call(this, a3, b2, c3);
          else {
            "object" !== typeof c3 && (c3 = { capture: !!c3 });
            var d3 = this.__shady_parentNode;
            if (!d3)
              throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
            c3.U = this;
            d3.__shady_addEventListener(a3, b2, c3);
          }
        }, removeEventListener: function(a3, b2, c3) {
          if ("slot" !== this.localName || "slotchange" === a3)
            fe.call(this, a3, b2, c3);
          else {
            "object" !== typeof c3 && (c3 = { capture: !!c3 });
            var d3 = this.__shady_parentNode;
            if (!d3)
              throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
            c3.U = this;
            d3.__shady_removeEventListener(a3, b2, c3);
          }
        } });
        var tf = Q({ getElementById: function(a3) {
          return "" === a3 ? null : Ve(this, function(b2) {
            return b2.id == a3;
          }, function(b2) {
            return !!b2;
          })[0] || null;
        } });
        function uf(a3, b2) {
          for (var c3; b2 && !a3.has(c3 = b2.__shady_getRootNode()); )
            b2 = c3.host;
          return b2;
        }
        function vf(a3) {
          var b2 = /* @__PURE__ */ new Set();
          for (b2.add(a3); O(a3) && a3.host; )
            a3 = a3.host.__shady_getRootNode(), b2.add(a3);
          return b2;
        }
        var wf = "__shady_native_" + Fc(), xf = Q({ get activeElement() {
          var a3 = M2.D ? document.__shady_native_activeElement : document.activeElement;
          if (!a3 || !a3.nodeType)
            return null;
          var b2 = !!O(this);
          if (!(this === document || b2 && this.host !== a3 && this.host.__shady_native_contains(a3)))
            return null;
          for (b2 = Je(a3); b2 && b2 !== this; )
            a3 = b2.host, b2 = Je(a3);
          return this === document ? b2 ? null : a3 : b2 === this ? a3 : null;
        }, elementsFromPoint: function(a3, b2) {
          a3 = document[wf](a3, b2);
          if (this === document && M2.useNativeDocumentEFP)
            return a3;
          a3 = [].slice.call(a3);
          b2 = vf(this);
          for (var c3 = /* @__PURE__ */ new Set(), d3 = 0; d3 < a3.length; d3++)
            c3.add(uf(b2, a3[d3]));
          var e7 = [];
          c3.forEach(function(f2) {
            return e7.push(f2);
          });
          return e7;
        }, elementFromPoint: function(a3, b2) {
          return this === document && M2.useNativeDocumentEFP ? this.__shady_native_elementFromPoint(a3, b2) : this.__shady_elementsFromPoint(a3, b2)[0] || null;
        } });
        var yf = window.document, zf = Q({ importNode: function(a3, b2) {
          if (a3.ownerDocument !== yf || "template" === a3.localName)
            return this.__shady_native_importNode(a3, b2);
          var c3 = this.__shady_native_importNode(a3, false);
          if (b2)
            for (a3 = a3.__shady_firstChild; a3; a3 = a3.__shady_nextSibling)
              b2 = this.__shady_importNode(a3, true), c3.__shady_appendChild(b2);
          return c3;
        } });
        var Af = Q({ dispatchEvent: ce, addEventListener: ee.bind(window), removeEventListener: fe.bind(window) });
        var Bf = {};
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Bf.parentElement = Pe.parentElement);
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Bf.contains = Pe.contains);
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Bf.children = Ye.children);
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Bf.innerHTML = qf.innerHTML);
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Bf.className = jf.className);
        var Cf = { EventTarget: [se], Node: [Pe, window.EventTarget ? null : se], Text: [Re], Comment: [Re], CDATASection: [Re], ProcessingInstruction: [Re], Element: [jf, Ye, cf, Re, !M2.D || "innerHTML" in Element.prototype ? qf : null, window.HTMLSlotElement ? null : sf], HTMLElement: [rf, Bf], HTMLSlotElement: [sf], DocumentFragment: [bf, tf], Document: [zf, bf, tf, xf], Window: [Af], CharacterData: [cf], XMLHttpRequest: [window.EventTarget ? null : se] }, Df = M2.D ? null : ["innerHTML", "textContent"];
        function Ef(a3, b2, c3, d3) {
          b2.forEach(function(e7) {
            return a3 && e7 && P2(a3, e7, c3, d3);
          });
        }
        function Ff(a3) {
          var b2 = a3 ? null : Df, c3;
          for (c3 in Cf)
            Ef(window[c3] && window[c3].prototype, Cf[c3], a3, b2);
        }
        ["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function(a3) {
          var b2 = window[a3], c3 = Object.create(b2.prototype);
          c3.__shady_protoIsPatched = true;
          Ef(c3, Cf.EventTarget);
          Ef(c3, Cf.Node);
          Cf[a3] && Ef(c3, Cf[a3]);
          b2.prototype.__shady_patchedProto = c3;
        });
        function Gf(a3) {
          a3.__shady_protoIsPatched = true;
          Ef(a3, Cf.EventTarget);
          Ef(a3, Cf.Node);
          Ef(a3, Cf.Element);
          Ef(a3, Cf.HTMLElement);
          Ef(a3, Cf.HTMLSlotElement);
          return a3;
        }
        ;
        var Hf = M2.Da, If = M2.D;
        function Jf(a3, b2) {
          if (Hf && !a3.__shady_protoIsPatched && !O(a3)) {
            var c3 = Object.getPrototypeOf(a3), d3 = c3.hasOwnProperty("__shady_patchedProto") && c3.__shady_patchedProto;
            d3 || (d3 = Object.create(c3), Gf(d3), c3.__shady_patchedProto = d3);
            Object.setPrototypeOf(a3, d3);
          }
          If || (1 === b2 ? Id(a3) : 2 === b2 && Jd(a3));
        }
        function Kf(a3, b2, c3, d3) {
          Jf(a3, 1);
          d3 = d3 || null;
          var e7 = D(a3), f2 = d3 ? D(d3) : null;
          e7.previousSibling = d3 ? f2.previousSibling : b2.__shady_lastChild;
          if (f2 = L(e7.previousSibling))
            f2.nextSibling = a3;
          if (f2 = L(e7.nextSibling = d3))
            f2.previousSibling = a3;
          e7.parentNode = b2;
          d3 ? d3 === c3.firstChild && (c3.firstChild = a3) : (c3.lastChild = a3, c3.firstChild || (c3.firstChild = a3));
          c3.childNodes = null;
        }
        function Me(a3, b2, c3) {
          Jf(b2, 2);
          var d3 = D(b2);
          void 0 !== d3.firstChild && (d3.childNodes = null);
          if (a3.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
            for (a3 = a3.__shady_native_firstChild; a3; a3 = a3.__shady_native_nextSibling)
              Kf(a3, b2, d3, c3);
          else
            Kf(a3, b2, d3, c3);
        }
        function Oe(a3, b2) {
          var c3 = D(a3);
          b2 = D(b2);
          a3 === b2.firstChild && (b2.firstChild = c3.nextSibling);
          a3 === b2.lastChild && (b2.lastChild = c3.previousSibling);
          a3 = c3.previousSibling;
          var d3 = c3.nextSibling;
          a3 && (D(a3).nextSibling = d3);
          d3 && (D(d3).previousSibling = a3);
          c3.parentNode = c3.previousSibling = c3.nextSibling = void 0;
          void 0 !== b2.childNodes && (b2.childNodes = null);
        }
        function lf(a3, b2) {
          var c3 = D(a3);
          if (b2 || void 0 === c3.firstChild) {
            c3.childNodes = null;
            var d3 = c3.firstChild = a3.__shady_native_firstChild;
            c3.lastChild = a3.__shady_native_lastChild;
            Jf(a3, 2);
            c3 = d3;
            for (d3 = void 0; c3; c3 = c3.__shady_native_nextSibling) {
              var e7 = D(c3);
              e7.parentNode = b2 || a3;
              e7.nextSibling = c3.__shady_native_nextSibling;
              e7.previousSibling = d3 || null;
              d3 = c3;
              Jf(c3, 1);
            }
          }
        }
        ;
        var Lf = Q({ addEventListener: function(a3, b2, c3) {
          "object" !== typeof c3 && (c3 = { capture: !!c3 });
          c3.U = c3.U || this;
          this.host.__shady_addEventListener(a3, b2, c3);
        }, removeEventListener: function(a3, b2, c3) {
          "object" !== typeof c3 && (c3 = { capture: !!c3 });
          c3.U = c3.U || this;
          this.host.__shady_removeEventListener(a3, b2, c3);
        } });
        function Mf(a3, b2) {
          P2(a3, Lf, b2);
          P2(a3, xf, b2);
          P2(a3, qf, b2);
          P2(a3, Ye, b2);
          M2.J && !b2 ? (P2(a3, Pe, b2), P2(a3, tf, b2)) : M2.D || (P2(a3, Fd), P2(a3, Dd), P2(a3, Ed));
        }
        ;
        var nf = {}, Nf = M2.deferConnectionCallbacks && "loading" === document.readyState, Of;
        function Pf(a3) {
          var b2 = [];
          do
            b2.unshift(a3);
          while (a3 = a3.__shady_parentNode);
          return b2;
        }
        function mf(a3, b2, c3) {
          if (a3 !== nf)
            throw new TypeError("Illegal constructor");
          this.g = null;
          kf(this, b2, c3);
        }
        function kf(a3, b2, c3) {
          a3.host = b2;
          a3.mode = c3 && c3.mode;
          lf(a3.host);
          b2 = D(a3.host);
          b2.root = a3;
          b2.lb = "closed" !== a3.mode ? a3 : null;
          b2 = D(a3);
          b2.firstChild = b2.lastChild = b2.parentNode = b2.nextSibling = b2.previousSibling = null;
          if (M2.preferPerformance)
            for (; b2 = a3.host.__shady_native_firstChild; )
              a3.host.__shady_native_removeChild(b2);
          else
            Le(a3);
        }
        function Le(a3) {
          a3.Y || (a3.Y = true, dd(function() {
            return Qe(a3);
          }));
        }
        function Qe(a3) {
          var b2;
          if (b2 = a3.Y) {
            for (var c3; a3; )
              a: {
                a3.Y && (c3 = a3), b2 = a3;
                a3 = b2.host.__shady_getRootNode();
                if (O(a3) && (b2 = L(b2.host)) && 0 < b2.ka)
                  break a;
                a3 = void 0;
              }
            b2 = c3;
          }
          (c3 = b2) && c3._renderSelf();
        }
        mf.prototype._renderSelf = function() {
          var a3 = Nf;
          Nf = true;
          this.Y = false;
          if (this.g) {
            ff(this);
            for (var b2 = 0, c3; b2 < this.g.length; b2++) {
              c3 = this.g[b2];
              var d3 = L(c3), e7 = d3.assignedNodes;
              d3.assignedNodes = [];
              d3.aa = [];
              if (d3.Ja = e7)
                for (d3 = 0; d3 < e7.length; d3++) {
                  var f2 = L(e7[d3]);
                  f2.xa = f2.assignedSlot;
                  f2.assignedSlot === c3 && (f2.assignedSlot = null);
                }
            }
            for (b2 = this.host.__shady_firstChild; b2; b2 = b2.__shady_nextSibling)
              Qf(this, b2);
            for (b2 = 0; b2 < this.g.length; b2++) {
              c3 = this.g[b2];
              e7 = L(c3);
              if (!e7.assignedNodes.length)
                for (d3 = c3.__shady_firstChild; d3; d3 = d3.__shady_nextSibling)
                  Qf(
                    this,
                    d3,
                    c3
                  );
              (d3 = (d3 = L(c3.__shady_parentNode)) && d3.root) && (Ic(d3) || d3.Y) && d3._renderSelf();
              Rf(this, e7.aa, e7.assignedNodes);
              if (d3 = e7.Ja) {
                for (f2 = 0; f2 < d3.length; f2++)
                  L(d3[f2]).xa = null;
                e7.Ja = null;
                d3.length > e7.assignedNodes.length && (e7.Aa = true);
              }
              e7.Aa && (e7.Aa = false, Sf(this, c3));
            }
            c3 = this.g;
            b2 = [];
            for (e7 = 0; e7 < c3.length; e7++)
              d3 = c3[e7].__shady_parentNode, (f2 = L(d3)) && f2.root || !(0 > b2.indexOf(d3)) || b2.push(d3);
            for (c3 = 0; c3 < b2.length; c3++) {
              f2 = b2[c3];
              e7 = f2 === this ? this.host : f2;
              d3 = [];
              for (f2 = f2.__shady_firstChild; f2; f2 = f2.__shady_nextSibling)
                if ("slot" == f2.localName)
                  for (var g2 = L(f2).aa, h3 = 0; h3 < g2.length; h3++)
                    d3.push(g2[h3]);
                else
                  d3.push(f2);
              f2 = Tc(e7);
              g2 = qe(d3, d3.length, f2, f2.length);
              for (var k2 = h3 = 0, l5 = void 0; h3 < g2.length && (l5 = g2[h3]); h3++) {
                for (var m2 = 0, q = void 0; m2 < l5.ia.length && (q = l5.ia[m2]); m2++)
                  q.__shady_native_parentNode === e7 && e7.__shady_native_removeChild(q), f2.splice(l5.index + k2, 1);
                k2 -= l5.pa;
              }
              k2 = 0;
              for (l5 = void 0; k2 < g2.length && (l5 = g2[k2]); k2++)
                for (h3 = f2[l5.index], m2 = l5.index; m2 < l5.index + l5.pa; m2++)
                  q = d3[m2], e7.__shady_native_insertBefore(q, h3), f2.splice(m2, 0, q);
            }
          }
          if (!M2.preferPerformance && !this.Ia)
            for (b2 = this.host.__shady_firstChild; b2; b2 = b2.__shady_nextSibling)
              c3 = L(b2), b2.__shady_native_parentNode !== this.host || "slot" !== b2.localName && c3.assignedSlot || this.host.__shady_native_removeChild(b2);
          this.Ia = true;
          Nf = a3;
          Of && Of();
        };
        function Qf(a3, b2, c3) {
          var d3 = D(b2), e7 = d3.xa;
          d3.xa = null;
          c3 || (c3 = (a3 = a3.h[b2.__shady_slot || "__catchall"]) && a3[0]);
          c3 ? (D(c3).assignedNodes.push(b2), d3.assignedSlot = c3) : d3.assignedSlot = void 0;
          e7 !== d3.assignedSlot && d3.assignedSlot && (D(d3.assignedSlot).Aa = true);
        }
        function Rf(a3, b2, c3) {
          for (var d3 = 0, e7 = void 0; d3 < c3.length && (e7 = c3[d3]); d3++)
            if ("slot" == e7.localName) {
              var f2 = L(e7).assignedNodes;
              f2 && f2.length && Rf(a3, b2, f2);
            } else
              b2.push(c3[d3]);
        }
        function Sf(a3, b2) {
          b2.__shady_native_dispatchEvent(new Event("slotchange"));
          b2 = L(b2);
          b2.assignedSlot && Sf(a3, b2.assignedSlot);
        }
        function Ke(a3) {
          a3.i = a3.i || [];
          a3.g = a3.g || [];
          a3.h = a3.h || {};
        }
        function ff(a3) {
          if (a3.i && a3.i.length) {
            for (var b2 = a3.i, c3, d3 = 0; d3 < b2.length; d3++) {
              var e7 = b2[d3];
              lf(e7);
              var f2 = e7.__shady_parentNode;
              lf(f2);
              f2 = L(f2);
              f2.ka = (f2.ka || 0) + 1;
              f2 = gf(e7);
              a3.h[f2] ? (c3 = c3 || {}, c3[f2] = true, a3.h[f2].push(e7)) : a3.h[f2] = [e7];
              a3.g.push(e7);
            }
            if (c3)
              for (var g2 in c3)
                a3.h[g2] = hf(a3.h[g2]);
            a3.i = [];
          }
        }
        function gf(a3) {
          var b2 = a3.name || a3.getAttribute("name") || "__catchall";
          return a3.Ua = b2;
        }
        function hf(a3) {
          return a3.sort(function(b2, c3) {
            b2 = Pf(b2);
            for (var d3 = Pf(c3), e7 = 0; e7 < b2.length; e7++) {
              c3 = b2[e7];
              var f2 = d3[e7];
              if (c3 !== f2)
                return b2 = Uc(c3.__shady_parentNode), b2.indexOf(c3) - b2.indexOf(f2);
            }
          });
        }
        function Ne(a3, b2) {
          if (a3.g) {
            ff(a3);
            var c3 = a3.h, d3;
            for (d3 in c3)
              for (var e7 = c3[d3], f2 = 0; f2 < e7.length; f2++) {
                var g2 = e7[f2];
                if (Rc(b2, g2)) {
                  e7.splice(f2, 1);
                  var h3 = a3.g.indexOf(g2);
                  0 <= h3 && (a3.g.splice(h3, 1), (h3 = L(g2.__shady_parentNode)) && h3.ka && h3.ka--);
                  f2--;
                  g2 = L(g2);
                  if (h3 = g2.aa)
                    for (var k2 = 0; k2 < h3.length; k2++) {
                      var l5 = h3[k2], m2 = l5.__shady_native_parentNode;
                      m2 && m2.__shady_native_removeChild(l5);
                    }
                  g2.aa = [];
                  g2.assignedNodes = [];
                  h3 = true;
                }
              }
            return h3;
          }
        }
        function Ic(a3) {
          ff(a3);
          return !(!a3.g || !a3.g.length);
        }
        (function(a3) {
          a3.__proto__ = DocumentFragment.prototype;
          Mf(a3, "__shady_");
          Mf(a3);
          Object.defineProperties(a3, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: true }, nodeName: { value: "#document-fragment", configurable: true }, nodeValue: { value: null, configurable: true } });
          ["localName", "namespaceURI", "prefix"].forEach(function(b2) {
            Object.defineProperty(a3, b2, { value: void 0, configurable: true });
          });
          ["ownerDocument", "baseURI", "isConnected"].forEach(function(b2) {
            Object.defineProperty(a3, b2, {
              get: function() {
                return this.host[b2];
              },
              configurable: true
            });
          });
        })(mf.prototype);
        if (window.customElements && window.customElements.define && M2.Ba && !M2.preferPerformance) {
          var Tf = /* @__PURE__ */ new Map();
          Of = function() {
            var a3 = [];
            Tf.forEach(function(d3, e7) {
              a3.push([e7, d3]);
            });
            Tf.clear();
            for (var b2 = 0; b2 < a3.length; b2++) {
              var c3 = a3[b2][0];
              a3[b2][1] ? c3.__shadydom_connectedCallback() : c3.__shadydom_disconnectedCallback();
            }
          };
          Nf && document.addEventListener("readystatechange", function() {
            Nf = false;
            Of();
          }, { once: true });
          var Uf = function(a3, b2, c3) {
            var d3 = 0, e7 = "__isConnected" + d3++;
            if (b2 || c3)
              a3.prototype.connectedCallback = a3.prototype.__shadydom_connectedCallback = function() {
                Nf ? Tf.set(this, true) : this[e7] || (this[e7] = true, b2 && b2.call(this));
              }, a3.prototype.disconnectedCallback = a3.prototype.__shadydom_disconnectedCallback = function() {
                Nf ? this.isConnected || Tf.set(this, false) : this[e7] && (this[e7] = false, c3 && c3.call(this));
              };
            return a3;
          }, Vf = window.customElements.define, Wf = function(a3, b2) {
            var c3 = b2.prototype.connectedCallback, d3 = b2.prototype.disconnectedCallback;
            Vf.call(window.customElements, a3, Uf(b2, c3, d3));
            b2.prototype.connectedCallback = c3;
            b2.prototype.disconnectedCallback = d3;
          };
          window.customElements.define = Wf;
          Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: Wf, configurable: true });
        }
        function Je(a3) {
          a3 = a3.__shady_getRootNode();
          if (O(a3))
            return a3;
        }
        ;
        function Xf(a3) {
          this.node = a3;
        }
        v2 = Xf.prototype;
        v2.addEventListener = function(a3, b2, c3) {
          return this.node.__shady_addEventListener(a3, b2, c3);
        };
        v2.removeEventListener = function(a3, b2, c3) {
          return this.node.__shady_removeEventListener(a3, b2, c3);
        };
        v2.appendChild = function(a3) {
          return this.node.__shady_appendChild(a3);
        };
        v2.insertBefore = function(a3, b2) {
          return this.node.__shady_insertBefore(a3, b2);
        };
        v2.removeChild = function(a3) {
          return this.node.__shady_removeChild(a3);
        };
        v2.replaceChild = function(a3, b2) {
          return this.node.__shady_replaceChild(a3, b2);
        };
        v2.cloneNode = function(a3) {
          return this.node.__shady_cloneNode(a3);
        };
        v2.getRootNode = function(a3) {
          return this.node.__shady_getRootNode(a3);
        };
        v2.contains = function(a3) {
          return this.node.__shady_contains(a3);
        };
        v2.dispatchEvent = function(a3) {
          return this.node.__shady_dispatchEvent(a3);
        };
        v2.setAttribute = function(a3, b2) {
          this.node.__shady_setAttribute(a3, b2);
        };
        v2.getAttribute = function(a3) {
          return this.node.__shady_native_getAttribute(a3);
        };
        v2.hasAttribute = function(a3) {
          return this.node.__shady_native_hasAttribute(a3);
        };
        v2.removeAttribute = function(a3) {
          this.node.__shady_removeAttribute(a3);
        };
        v2.attachShadow = function(a3) {
          return this.node.__shady_attachShadow(a3);
        };
        v2.focus = function() {
          this.node.__shady_native_focus();
        };
        v2.blur = function() {
          this.node.__shady_blur();
        };
        v2.importNode = function(a3, b2) {
          if (this.node.nodeType === Node.DOCUMENT_NODE)
            return this.node.__shady_importNode(a3, b2);
        };
        v2.getElementById = function(a3) {
          if (this.node.nodeType === Node.DOCUMENT_NODE)
            return this.node.__shady_getElementById(a3);
        };
        v2.elementsFromPoint = function(a3, b2) {
          return this.node.__shady_elementsFromPoint(a3, b2);
        };
        v2.elementFromPoint = function(a3, b2) {
          return this.node.__shady_elementFromPoint(a3, b2);
        };
        v2.querySelector = function(a3) {
          return this.node.__shady_querySelector(a3);
        };
        v2.querySelectorAll = function(a3, b2) {
          return this.node.__shady_querySelectorAll(a3, b2);
        };
        v2.assignedNodes = function(a3) {
          if ("slot" === this.node.localName)
            return this.node.__shady_assignedNodes(a3);
        };
        v2.append = function(a3) {
          for (var b2 = [], c3 = 0; c3 < arguments.length; ++c3)
            b2[c3] = arguments[c3];
          return this.node.__shady_append.apply(this.node, w2(b2));
        };
        v2.prepend = function(a3) {
          for (var b2 = [], c3 = 0; c3 < arguments.length; ++c3)
            b2[c3] = arguments[c3];
          return this.node.__shady_prepend.apply(this.node, w2(b2));
        };
        v2.after = function(a3) {
          for (var b2 = [], c3 = 0; c3 < arguments.length; ++c3)
            b2[c3] = arguments[c3];
          return this.node.__shady_after.apply(this.node, w2(b2));
        };
        v2.before = function(a3) {
          for (var b2 = [], c3 = 0; c3 < arguments.length; ++c3)
            b2[c3] = arguments[c3];
          return this.node.__shady_before.apply(this.node, w2(b2));
        };
        v2.remove = function() {
          return this.node.__shady_remove();
        };
        v2.replaceWith = function(a3) {
          for (var b2 = [], c3 = 0; c3 < arguments.length; ++c3)
            b2[c3] = arguments[c3];
          return this.node.__shady_replaceWith.apply(this.node, w2(b2));
        };
        ea.Object.defineProperties(Xf.prototype, {
          activeElement: { configurable: true, enumerable: true, get: function() {
            if (O(this.node) || this.node.nodeType === Node.DOCUMENT_NODE)
              return this.node.__shady_activeElement;
          } },
          _activeElement: { configurable: true, enumerable: true, get: function() {
            return this.activeElement;
          } },
          host: { configurable: true, enumerable: true, get: function() {
            if (O(this.node))
              return this.node.host;
          } },
          parentNode: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_parentNode;
          } },
          firstChild: {
            configurable: true,
            enumerable: true,
            get: function() {
              return this.node.__shady_firstChild;
            }
          },
          lastChild: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_lastChild;
          } },
          nextSibling: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_nextSibling;
          } },
          previousSibling: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_previousSibling;
          } },
          childNodes: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_childNodes;
          } },
          parentElement: {
            configurable: true,
            enumerable: true,
            get: function() {
              return this.node.__shady_parentElement;
            }
          },
          firstElementChild: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_firstElementChild;
          } },
          lastElementChild: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_lastElementChild;
          } },
          nextElementSibling: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_nextElementSibling;
          } },
          previousElementSibling: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_previousElementSibling;
          } },
          children: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_children;
          } },
          childElementCount: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_childElementCount;
          } },
          shadowRoot: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_shadowRoot;
          } },
          assignedSlot: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_assignedSlot;
          } },
          isConnected: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_isConnected;
          } },
          innerHTML: {
            configurable: true,
            enumerable: true,
            get: function() {
              return this.node.__shady_innerHTML;
            },
            set: function(a3) {
              this.node.__shady_innerHTML = a3;
            }
          },
          textContent: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_textContent;
          }, set: function(a3) {
            this.node.__shady_textContent = a3;
          } },
          slot: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_slot;
          }, set: function(a3) {
            this.node.__shady_slot = a3;
          } },
          className: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_className;
          }, set: function(a3) {
            this.node.__shady_className = a3;
          } }
        });
        function Yf(a3) {
          Object.defineProperty(Xf.prototype, a3, { get: function() {
            return this.node["__shady_" + a3];
          }, set: function(b2) {
            this.node["__shady_" + a3] = b2;
          }, configurable: true });
        }
        me.forEach(function(a3) {
          return Yf(a3);
        });
        ne.forEach(function(a3) {
          return Yf(a3);
        });
        var Zf = /* @__PURE__ */ new WeakMap();
        function $f(a3) {
          if (O(a3) || a3 instanceof Xf)
            return a3;
          var b2 = Zf.get(a3);
          b2 || (b2 = new Xf(a3), Zf.set(a3, b2));
          return b2;
        }
        ;
        if (M2.Ba) {
          var ag = M2.D ? function(a3) {
            return a3;
          } : function(a3) {
            Jd(a3);
            Id(a3);
            return a3;
          }, ShadyDOM = {
            inUse: M2.Ba,
            patch: ag,
            isShadyRoot: O,
            enqueue: dd,
            flush: ed,
            flushInitial: function(a3) {
              !a3.Ia && a3.Y && Qe(a3);
            },
            settings: M2,
            filterMutations: jd,
            observeChildren: hd,
            unobserveChildren: id,
            deferConnectionCallbacks: M2.deferConnectionCallbacks,
            preferPerformance: M2.preferPerformance,
            handlesDynamicScoping: true,
            wrap: M2.J ? $f : ag,
            wrapIfNeeded: true === M2.J ? $f : function(a3) {
              return a3;
            },
            Wrapper: Xf,
            composedPath: Sd,
            noPatch: M2.J,
            patchOnDemand: M2.Da,
            nativeMethods: sd,
            nativeTree: td,
            patchElementProto: Gf,
            querySelectorImplementation: M2.querySelectorImplementation
          };
          window.ShadyDOM = ShadyDOM;
          Cd();
          Ff("__shady_");
          Object.defineProperty(document, "_activeElement", xf.activeElement);
          P2(Window.prototype, Af, "__shady_");
          M2.J ? M2.Da && P2(Element.prototype, of) : (Ff(), le());
          ge();
          window.Event = ie;
          window.CustomEvent = je;
          window.MouseEvent = ke;
          window.ShadowRoot = mf;
        }
        ;
        var bg = window.Document.prototype.createElement, cg = window.Document.prototype.createElementNS, dg = window.Document.prototype.importNode, eg = window.Document.prototype.prepend, fg = window.Document.prototype.append, gg = window.DocumentFragment.prototype.prepend, hg = window.DocumentFragment.prototype.append, ig = window.Node.prototype.cloneNode, jg = window.Node.prototype.appendChild, kg = window.Node.prototype.insertBefore, lg = window.Node.prototype.removeChild, mg = window.Node.prototype.replaceChild, ng = Object.getOwnPropertyDescriptor(
          window.Node.prototype,
          "textContent"
        ), og = window.Element.prototype.attachShadow, pg = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), qg = window.Element.prototype.getAttribute, rg = window.Element.prototype.setAttribute, sg = window.Element.prototype.removeAttribute, tg = window.Element.prototype.getAttributeNS, ug = window.Element.prototype.setAttributeNS, vg = window.Element.prototype.removeAttributeNS, wg = window.Element.prototype.insertAdjacentElement, xg = window.Element.prototype.insertAdjacentHTML, yg = window.Element.prototype.prepend, zg = window.Element.prototype.append, Ag = window.Element.prototype.before, Bg = window.Element.prototype.after, Cg = window.Element.prototype.replaceWith, Dg = window.Element.prototype.remove, Eg = window.HTMLElement, Fg = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), Gg = window.HTMLElement.prototype.insertAdjacentElement, Hg = window.HTMLElement.prototype.insertAdjacentHTML;
        var Ig = /* @__PURE__ */ new Set();
        "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a3) {
          return Ig.add(a3);
        });
        function Jg(a3) {
          var b2 = Ig.has(a3);
          a3 = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a3);
          return !b2 && a3;
        }
        var Kg = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
        function T2(a3) {
          var b2 = a3.isConnected;
          if (void 0 !== b2)
            return b2;
          if (Kg(a3))
            return true;
          for (; a3 && !(a3.__CE_isImportDocument || a3 instanceof Document); )
            a3 = a3.parentNode || (window.ShadowRoot && a3 instanceof ShadowRoot ? a3.host : void 0);
          return !(!a3 || !(a3.__CE_isImportDocument || a3 instanceof Document));
        }
        function Lg(a3) {
          var b2 = a3.children;
          if (b2)
            return Array.prototype.slice.call(b2);
          b2 = [];
          for (a3 = a3.firstChild; a3; a3 = a3.nextSibling)
            a3.nodeType === Node.ELEMENT_NODE && b2.push(a3);
          return b2;
        }
        function Mg(a3, b2) {
          for (; b2 && b2 !== a3 && !b2.nextSibling; )
            b2 = b2.parentNode;
          return b2 && b2 !== a3 ? b2.nextSibling : null;
        }
        function Ng(a3, b2, c3) {
          for (var d3 = a3; d3; ) {
            if (d3.nodeType === Node.ELEMENT_NODE) {
              var e7 = d3;
              b2(e7);
              var f2 = e7.localName;
              if ("link" === f2 && "import" === e7.getAttribute("rel")) {
                d3 = e7.import;
                void 0 === c3 && (c3 = /* @__PURE__ */ new Set());
                if (d3 instanceof Node && !c3.has(d3))
                  for (c3.add(d3), d3 = d3.firstChild; d3; d3 = d3.nextSibling)
                    Ng(d3, b2, c3);
                d3 = Mg(a3, e7);
                continue;
              } else if ("template" === f2) {
                d3 = Mg(a3, e7);
                continue;
              }
              if (e7 = e7.__CE_shadowRoot)
                for (e7 = e7.firstChild; e7; e7 = e7.nextSibling)
                  Ng(e7, b2, c3);
            }
            d3 = d3.firstChild ? d3.firstChild : Mg(a3, d3);
          }
        }
        ;
        function Og() {
          var a3 = !(null === Pg || void 0 === Pg || !Pg.noDocumentConstructionObserver), b2 = !(null === Pg || void 0 === Pg || !Pg.shadyDomFastWalk);
          this.ca = [];
          this.g = [];
          this.W = false;
          this.shadyDomFastWalk = b2;
          this.sb = !a3;
        }
        function Qg(a3, b2, c3, d3) {
          var e7 = window.ShadyDOM;
          if (a3.shadyDomFastWalk && e7 && e7.inUse) {
            if (b2.nodeType === Node.ELEMENT_NODE && c3(b2), b2.querySelectorAll)
              for (a3 = e7.nativeMethods.querySelectorAll.call(b2, "*"), b2 = 0; b2 < a3.length; b2++)
                c3(a3[b2]);
          } else
            Ng(b2, c3, d3);
        }
        function Rg(a3, b2) {
          a3.W = true;
          a3.ca.push(b2);
        }
        function Sg(a3, b2) {
          a3.W = true;
          a3.g.push(b2);
        }
        function Tg(a3, b2) {
          a3.W && Qg(a3, b2, function(c3) {
            return Ug(a3, c3);
          });
        }
        function Ug(a3, b2) {
          if (a3.W && !b2.__CE_patched) {
            b2.__CE_patched = true;
            for (var c3 = 0; c3 < a3.ca.length; c3++)
              a3.ca[c3](b2);
            for (c3 = 0; c3 < a3.g.length; c3++)
              a3.g[c3](b2);
          }
        }
        function Vg(a3, b2) {
          var c3 = [];
          Qg(a3, b2, function(e7) {
            return c3.push(e7);
          });
          for (b2 = 0; b2 < c3.length; b2++) {
            var d3 = c3[b2];
            1 === d3.__CE_state ? a3.connectedCallback(d3) : Wg(a3, d3);
          }
        }
        function Xg(a3, b2) {
          var c3 = [];
          Qg(a3, b2, function(e7) {
            return c3.push(e7);
          });
          for (b2 = 0; b2 < c3.length; b2++) {
            var d3 = c3[b2];
            1 === d3.__CE_state && a3.disconnectedCallback(d3);
          }
        }
        function Yg(a3, b2, c3) {
          c3 = void 0 === c3 ? {} : c3;
          var d3 = c3.tb, e7 = c3.upgrade || function(g2) {
            return Wg(a3, g2);
          }, f2 = [];
          Qg(a3, b2, function(g2) {
            a3.W && Ug(a3, g2);
            if ("link" === g2.localName && "import" === g2.getAttribute("rel")) {
              var h3 = g2.import;
              h3 instanceof Node && (h3.__CE_isImportDocument = true, h3.__CE_registry = document.__CE_registry);
              h3 && "complete" === h3.readyState ? h3.__CE_documentLoadHandled = true : g2.addEventListener("load", function() {
                var k2 = g2.import;
                if (!k2.__CE_documentLoadHandled) {
                  k2.__CE_documentLoadHandled = true;
                  var l5 = /* @__PURE__ */ new Set();
                  d3 && (d3.forEach(function(m2) {
                    return l5.add(m2);
                  }), l5.delete(k2));
                  Yg(a3, k2, { tb: l5, upgrade: e7 });
                }
              });
            } else
              f2.push(g2);
          }, d3);
          for (b2 = 0; b2 < f2.length; b2++)
            e7(f2[b2]);
        }
        function Wg(a3, b2) {
          try {
            var c3 = b2.ownerDocument, d3 = c3.__CE_registry;
            var e7 = d3 && (c3.defaultView || c3.__CE_isImportDocument) ? Zg(d3, b2.localName) : void 0;
            if (e7 && void 0 === b2.__CE_state) {
              e7.constructionStack.push(b2);
              try {
                try {
                  if (new e7.constructorFunction() !== b2)
                    throw Error("The custom element constructor did not produce the element being upgraded.");
                } finally {
                  e7.constructionStack.pop();
                }
              } catch (k2) {
                throw b2.__CE_state = 2, k2;
              }
              b2.__CE_state = 1;
              b2.__CE_definition = e7;
              if (e7.attributeChangedCallback && b2.hasAttributes()) {
                var f2 = e7.observedAttributes;
                for (e7 = 0; e7 < f2.length; e7++) {
                  var g2 = f2[e7], h3 = b2.getAttribute(g2);
                  null !== h3 && a3.attributeChangedCallback(b2, g2, null, h3, null);
                }
              }
              T2(b2) && a3.connectedCallback(b2);
            }
          } catch (k2) {
            $g(k2);
          }
        }
        Og.prototype.connectedCallback = function(a3) {
          var b2 = a3.__CE_definition;
          if (b2.connectedCallback)
            try {
              b2.connectedCallback.call(a3);
            } catch (c3) {
              $g(c3);
            }
        };
        Og.prototype.disconnectedCallback = function(a3) {
          var b2 = a3.__CE_definition;
          if (b2.disconnectedCallback)
            try {
              b2.disconnectedCallback.call(a3);
            } catch (c3) {
              $g(c3);
            }
        };
        Og.prototype.attributeChangedCallback = function(a3, b2, c3, d3, e7) {
          var f2 = a3.__CE_definition;
          if (f2.attributeChangedCallback && -1 < f2.observedAttributes.indexOf(b2))
            try {
              f2.attributeChangedCallback.call(a3, b2, c3, d3, e7);
            } catch (g2) {
              $g(g2);
            }
        };
        function ah(a3, b2, c3, d3) {
          var e7 = b2.__CE_registry;
          if (e7 && (null === d3 || "http://www.w3.org/1999/xhtml" === d3) && (e7 = Zg(e7, c3)))
            try {
              var f2 = new e7.constructorFunction();
              if (void 0 === f2.__CE_state || void 0 === f2.__CE_definition)
                throw Error("Failed to construct '" + c3 + "': The returned value was not constructed with the HTMLElement constructor.");
              if ("http://www.w3.org/1999/xhtml" !== f2.namespaceURI)
                throw Error("Failed to construct '" + c3 + "': The constructed element's namespace must be the HTML namespace.");
              if (f2.hasAttributes())
                throw Error("Failed to construct '" + c3 + "': The constructed element must not have any attributes.");
              if (null !== f2.firstChild)
                throw Error("Failed to construct '" + c3 + "': The constructed element must not have any children.");
              if (null !== f2.parentNode)
                throw Error("Failed to construct '" + c3 + "': The constructed element must not have a parent node.");
              if (f2.ownerDocument !== b2)
                throw Error("Failed to construct '" + c3 + "': The constructed element's owner document is incorrect.");
              if (f2.localName !== c3)
                throw Error("Failed to construct '" + c3 + "': The constructed element's local name is incorrect.");
              return f2;
            } catch (g2) {
              return $g(g2), b2 = null === d3 ? bg.call(b2, c3) : cg.call(b2, d3, c3), Object.setPrototypeOf(b2, HTMLUnknownElement.prototype), b2.__CE_state = 2, b2.__CE_definition = void 0, Ug(a3, b2), b2;
            }
          b2 = null === d3 ? bg.call(b2, c3) : cg.call(b2, d3, c3);
          Ug(a3, b2);
          return b2;
        }
        function $g(a3) {
          var b2 = "", c3 = "", d3 = 0, e7 = 0;
          a3 instanceof Error ? (b2 = a3.message, c3 = a3.sourceURL || a3.fileName || "", d3 = a3.line || a3.lineNumber || 0, e7 = a3.column || a3.columnNumber || 0) : b2 = "Uncaught " + String(a3);
          var f2 = void 0;
          void 0 === ErrorEvent.prototype.initErrorEvent ? f2 = new ErrorEvent("error", { cancelable: true, message: b2, filename: c3, lineno: d3, colno: e7, error: a3 }) : (f2 = document.createEvent("ErrorEvent"), f2.initErrorEvent("error", false, true, b2, c3, d3), f2.preventDefault = function() {
            Object.defineProperty(this, "defaultPrevented", { configurable: true, get: function() {
              return true;
            } });
          });
          void 0 === f2.error && Object.defineProperty(f2, "error", { configurable: true, enumerable: true, get: function() {
            return a3;
          } });
          window.dispatchEvent(f2);
          f2.defaultPrevented || console.error(a3);
        }
        ;
        function bh() {
          var a3 = this;
          this.I = void 0;
          this.Ka = new Promise(function(b2) {
            a3.g = b2;
          });
        }
        bh.prototype.resolve = function(a3) {
          if (this.I)
            throw Error("Already resolved.");
          this.I = a3;
          this.g(a3);
        };
        function ch(a3) {
          var b2 = document;
          this.X = void 0;
          this.S = a3;
          this.g = b2;
          Yg(this.S, this.g);
          "loading" === this.g.readyState && (this.X = new MutationObserver(this.h.bind(this)), this.X.observe(this.g, { childList: true, subtree: true }));
        }
        function dh(a3) {
          a3.X && a3.X.disconnect();
        }
        ch.prototype.h = function(a3) {
          var b2 = this.g.readyState;
          "interactive" !== b2 && "complete" !== b2 || dh(this);
          for (b2 = 0; b2 < a3.length; b2++)
            for (var c3 = a3[b2].addedNodes, d3 = 0; d3 < c3.length; d3++)
              Yg(this.S, c3[d3]);
        };
        function U(a3) {
          this.ma = /* @__PURE__ */ new Map();
          this.na = /* @__PURE__ */ new Map();
          this.Fa = /* @__PURE__ */ new Map();
          this.wa = false;
          this.za = /* @__PURE__ */ new Map();
          this.la = function(b2) {
            return b2();
          };
          this.V = false;
          this.oa = [];
          this.S = a3;
          this.Ga = a3.sb ? new ch(a3) : void 0;
        }
        v2 = U.prototype;
        v2.jb = function(a3, b2) {
          var c3 = this;
          if (!(b2 instanceof Function))
            throw new TypeError("Custom element constructor getters must be functions.");
          eh(this, a3);
          this.ma.set(a3, b2);
          this.oa.push(a3);
          this.V || (this.V = true, this.la(function() {
            return fh(c3);
          }));
        };
        v2.define = function(a3, b2) {
          var c3 = this;
          if (!(b2 instanceof Function))
            throw new TypeError("Custom element constructors must be functions.");
          eh(this, a3);
          gh(this, a3, b2);
          this.oa.push(a3);
          this.V || (this.V = true, this.la(function() {
            return fh(c3);
          }));
        };
        function eh(a3, b2) {
          if (!Jg(b2))
            throw new SyntaxError("The element name '" + b2 + "' is not valid.");
          if (Zg(a3, b2))
            throw Error("A custom element with name '" + (b2 + "' has already been defined."));
          if (a3.wa)
            throw Error("A custom element is already being defined.");
        }
        function gh(a3, b2, c3) {
          a3.wa = true;
          var d3;
          try {
            var e7 = c3.prototype;
            if (!(e7 instanceof Object))
              throw new TypeError("The custom element constructor's prototype is not an object.");
            var f2 = function(m2) {
              var q = e7[m2];
              if (void 0 !== q && !(q instanceof Function))
                throw Error("The '" + m2 + "' callback must be a function.");
              return q;
            };
            var g2 = f2("connectedCallback");
            var h3 = f2("disconnectedCallback");
            var k2 = f2("adoptedCallback");
            var l5 = (d3 = f2("attributeChangedCallback")) && c3.observedAttributes || [];
          } catch (m2) {
            throw m2;
          } finally {
            a3.wa = false;
          }
          c3 = {
            localName: b2,
            constructorFunction: c3,
            connectedCallback: g2,
            disconnectedCallback: h3,
            adoptedCallback: k2,
            attributeChangedCallback: d3,
            observedAttributes: l5,
            constructionStack: []
          };
          a3.na.set(b2, c3);
          a3.Fa.set(c3.constructorFunction, c3);
          return c3;
        }
        v2.upgrade = function(a3) {
          Yg(this.S, a3);
        };
        function fh(a3) {
          if (false !== a3.V) {
            a3.V = false;
            for (var b2 = [], c3 = a3.oa, d3 = /* @__PURE__ */ new Map(), e7 = 0; e7 < c3.length; e7++)
              d3.set(c3[e7], []);
            Yg(a3.S, document, { upgrade: function(k2) {
              if (void 0 === k2.__CE_state) {
                var l5 = k2.localName, m2 = d3.get(l5);
                m2 ? m2.push(k2) : a3.na.has(l5) && b2.push(k2);
              }
            } });
            for (e7 = 0; e7 < b2.length; e7++)
              Wg(a3.S, b2[e7]);
            for (e7 = 0; e7 < c3.length; e7++) {
              for (var f2 = c3[e7], g2 = d3.get(f2), h3 = 0; h3 < g2.length; h3++)
                Wg(a3.S, g2[h3]);
              (f2 = a3.za.get(f2)) && f2.resolve(void 0);
            }
            c3.length = 0;
          }
        }
        v2.get = function(a3) {
          if (a3 = Zg(this, a3))
            return a3.constructorFunction;
        };
        v2.whenDefined = function(a3) {
          if (!Jg(a3))
            return Promise.reject(new SyntaxError("'" + a3 + "' is not a valid custom element name."));
          var b2 = this.za.get(a3);
          if (b2)
            return b2.Ka;
          b2 = new bh();
          this.za.set(a3, b2);
          var c3 = this.na.has(a3) || this.ma.has(a3);
          a3 = -1 === this.oa.indexOf(a3);
          c3 && a3 && b2.resolve(void 0);
          return b2.Ka;
        };
        v2.polyfillWrapFlushCallback = function(a3) {
          this.Ga && dh(this.Ga);
          var b2 = this.la;
          this.la = function(c3) {
            return a3(function() {
              return b2(c3);
            });
          };
        };
        function Zg(a3, b2) {
          var c3 = a3.na.get(b2);
          if (c3)
            return c3;
          if (c3 = a3.ma.get(b2)) {
            a3.ma.delete(b2);
            try {
              return gh(a3, b2, c3());
            } catch (d3) {
              $g(d3);
            }
          }
        }
        U.prototype.define = U.prototype.define;
        U.prototype.upgrade = U.prototype.upgrade;
        U.prototype.get = U.prototype.get;
        U.prototype.whenDefined = U.prototype.whenDefined;
        U.prototype.polyfillDefineLazy = U.prototype.jb;
        U.prototype.polyfillWrapFlushCallback = U.prototype.polyfillWrapFlushCallback;
        function hh(a3, b2, c3) {
          function d3(e7) {
            return function(f2) {
              for (var g2 = [], h3 = 0; h3 < arguments.length; ++h3)
                g2[h3] = arguments[h3];
              h3 = [];
              for (var k2 = [], l5 = 0; l5 < g2.length; l5++) {
                var m2 = g2[l5];
                m2 instanceof Element && T2(m2) && k2.push(m2);
                if (m2 instanceof DocumentFragment)
                  for (m2 = m2.firstChild; m2; m2 = m2.nextSibling)
                    h3.push(m2);
                else
                  h3.push(m2);
              }
              e7.apply(this, g2);
              for (g2 = 0; g2 < k2.length; g2++)
                Xg(a3, k2[g2]);
              if (T2(this))
                for (g2 = 0; g2 < h3.length; g2++)
                  k2 = h3[g2], k2 instanceof Element && Vg(a3, k2);
            };
          }
          void 0 !== c3.prepend && (b2.prepend = d3(c3.prepend));
          void 0 !== c3.append && (b2.append = d3(c3.append));
        }
        ;
        function ih(a3) {
          Document.prototype.createElement = function(b2) {
            return ah(a3, this, b2, null);
          };
          Document.prototype.importNode = function(b2, c3) {
            b2 = dg.call(this, b2, !!c3);
            this.__CE_registry ? Yg(a3, b2) : Tg(a3, b2);
            return b2;
          };
          Document.prototype.createElementNS = function(b2, c3) {
            return ah(a3, this, c3, b2);
          };
          hh(a3, Document.prototype, { prepend: eg, append: fg });
        }
        ;
        function jh(a3) {
          function b2(d3) {
            return function(e7) {
              for (var f2 = [], g2 = 0; g2 < arguments.length; ++g2)
                f2[g2] = arguments[g2];
              g2 = [];
              for (var h3 = [], k2 = 0; k2 < f2.length; k2++) {
                var l5 = f2[k2];
                l5 instanceof Element && T2(l5) && h3.push(l5);
                if (l5 instanceof DocumentFragment)
                  for (l5 = l5.firstChild; l5; l5 = l5.nextSibling)
                    g2.push(l5);
                else
                  g2.push(l5);
              }
              d3.apply(this, f2);
              for (f2 = 0; f2 < h3.length; f2++)
                Xg(a3, h3[f2]);
              if (T2(this))
                for (f2 = 0; f2 < g2.length; f2++)
                  h3 = g2[f2], h3 instanceof Element && Vg(a3, h3);
            };
          }
          var c3 = Element.prototype;
          void 0 !== Ag && (c3.before = b2(Ag));
          void 0 !== Bg && (c3.after = b2(Bg));
          void 0 !== Cg && (c3.replaceWith = function(d3) {
            for (var e7 = [], f2 = 0; f2 < arguments.length; ++f2)
              e7[f2] = arguments[f2];
            f2 = [];
            for (var g2 = [], h3 = 0; h3 < e7.length; h3++) {
              var k2 = e7[h3];
              k2 instanceof Element && T2(k2) && g2.push(k2);
              if (k2 instanceof DocumentFragment)
                for (k2 = k2.firstChild; k2; k2 = k2.nextSibling)
                  f2.push(k2);
              else
                f2.push(k2);
            }
            h3 = T2(this);
            Cg.apply(this, e7);
            for (e7 = 0; e7 < g2.length; e7++)
              Xg(a3, g2[e7]);
            if (h3)
              for (Xg(a3, this), e7 = 0; e7 < f2.length; e7++)
                g2 = f2[e7], g2 instanceof Element && Vg(a3, g2);
          });
          void 0 !== Dg && (c3.remove = function() {
            var d3 = T2(this);
            Dg.call(this);
            d3 && Xg(a3, this);
          });
        }
        ;
        function kh(a3) {
          function b2(e7, f2) {
            Object.defineProperty(e7, "innerHTML", { enumerable: f2.enumerable, configurable: true, get: f2.get, set: function(g2) {
              var h3 = this, k2 = void 0;
              T2(this) && (k2 = [], Qg(a3, this, function(q) {
                q !== h3 && k2.push(q);
              }));
              f2.set.call(this, g2);
              if (k2)
                for (var l5 = 0; l5 < k2.length; l5++) {
                  var m2 = k2[l5];
                  1 === m2.__CE_state && a3.disconnectedCallback(m2);
                }
              this.ownerDocument.__CE_registry ? Yg(a3, this) : Tg(a3, this);
              return g2;
            } });
          }
          function c3(e7, f2) {
            e7.insertAdjacentElement = function(g2, h3) {
              var k2 = T2(h3);
              g2 = f2.call(this, g2, h3);
              k2 && Xg(a3, h3);
              T2(g2) && Vg(a3, h3);
              return g2;
            };
          }
          function d3(e7, f2) {
            function g2(h3, k2) {
              for (var l5 = []; h3 !== k2; h3 = h3.nextSibling)
                l5.push(h3);
              for (k2 = 0; k2 < l5.length; k2++)
                Yg(a3, l5[k2]);
            }
            e7.insertAdjacentHTML = function(h3, k2) {
              h3 = h3.toLowerCase();
              if ("beforebegin" === h3) {
                var l5 = this.previousSibling;
                f2.call(this, h3, k2);
                g2(l5 || this.parentNode.firstChild, this);
              } else if ("afterbegin" === h3)
                l5 = this.firstChild, f2.call(this, h3, k2), g2(this.firstChild, l5);
              else if ("beforeend" === h3)
                l5 = this.lastChild, f2.call(this, h3, k2), g2(l5 || this.firstChild, null);
              else if ("afterend" === h3)
                l5 = this.nextSibling, f2.call(this, h3, k2), g2(
                  this.nextSibling,
                  l5
                );
              else
                throw new SyntaxError("The value provided (" + String(h3) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
            };
          }
          og && (Element.prototype.attachShadow = function(e7) {
            e7 = og.call(this, e7);
            if (a3.W && !e7.__CE_patched) {
              e7.__CE_patched = true;
              for (var f2 = 0; f2 < a3.ca.length; f2++)
                a3.ca[f2](e7);
            }
            return this.__CE_shadowRoot = e7;
          });
          pg && pg.get ? b2(Element.prototype, pg) : Fg && Fg.get ? b2(HTMLElement.prototype, Fg) : Sg(a3, function(e7) {
            b2(e7, { enumerable: true, configurable: true, get: function() {
              return ig.call(this, true).innerHTML;
            }, set: function(f2) {
              var g2 = "template" === this.localName, h3 = g2 ? this.content : this, k2 = cg.call(document, this.namespaceURI, this.localName);
              for (k2.innerHTML = f2; 0 < h3.childNodes.length; )
                lg.call(h3, h3.childNodes[0]);
              for (f2 = g2 ? k2.content : k2; 0 < f2.childNodes.length; )
                jg.call(h3, f2.childNodes[0]);
            } });
          });
          Element.prototype.setAttribute = function(e7, f2) {
            if (1 !== this.__CE_state)
              return rg.call(this, e7, f2);
            var g2 = qg.call(this, e7);
            rg.call(this, e7, f2);
            f2 = qg.call(this, e7);
            a3.attributeChangedCallback(this, e7, g2, f2, null);
          };
          Element.prototype.setAttributeNS = function(e7, f2, g2) {
            if (1 !== this.__CE_state)
              return ug.call(
                this,
                e7,
                f2,
                g2
              );
            var h3 = tg.call(this, e7, f2);
            ug.call(this, e7, f2, g2);
            g2 = tg.call(this, e7, f2);
            a3.attributeChangedCallback(this, f2, h3, g2, e7);
          };
          Element.prototype.removeAttribute = function(e7) {
            if (1 !== this.__CE_state)
              return sg.call(this, e7);
            var f2 = qg.call(this, e7);
            sg.call(this, e7);
            null !== f2 && a3.attributeChangedCallback(this, e7, f2, null, null);
          };
          Element.prototype.removeAttributeNS = function(e7, f2) {
            if (1 !== this.__CE_state)
              return vg.call(this, e7, f2);
            var g2 = tg.call(this, e7, f2);
            vg.call(this, e7, f2);
            var h3 = tg.call(this, e7, f2);
            g2 !== h3 && a3.attributeChangedCallback(
              this,
              f2,
              g2,
              h3,
              e7
            );
          };
          Gg ? c3(HTMLElement.prototype, Gg) : wg && c3(Element.prototype, wg);
          Hg ? d3(HTMLElement.prototype, Hg) : xg && d3(Element.prototype, xg);
          hh(a3, Element.prototype, { prepend: yg, append: zg });
          jh(a3);
        }
        ;
        var lh = {};
        function mh(a3) {
          function b2() {
            var c3 = this.constructor;
            var d3 = document.__CE_registry.Fa.get(c3);
            if (!d3)
              throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
            var e7 = d3.constructionStack;
            if (0 === e7.length)
              return e7 = bg.call(document, d3.localName), Object.setPrototypeOf(e7, c3.prototype), e7.__CE_state = 1, e7.__CE_definition = d3, Ug(a3, e7), e7;
            var f2 = e7.length - 1, g2 = e7[f2];
            if (g2 === lh)
              throw Error("Failed to construct '" + d3.localName + "': This element was already constructed.");
            e7[f2] = lh;
            Object.setPrototypeOf(g2, c3.prototype);
            Ug(a3, g2);
            return g2;
          }
          b2.prototype = Eg.prototype;
          Object.defineProperty(HTMLElement.prototype, "constructor", { writable: true, configurable: true, enumerable: false, value: b2 });
          window.HTMLElement = b2;
        }
        ;
        function nh(a3) {
          function b2(c3, d3) {
            Object.defineProperty(c3, "textContent", { enumerable: d3.enumerable, configurable: true, get: d3.get, set: function(e7) {
              if (this.nodeType === Node.TEXT_NODE)
                d3.set.call(this, e7);
              else {
                var f2 = void 0;
                if (this.firstChild) {
                  var g2 = this.childNodes, h3 = g2.length;
                  if (0 < h3 && T2(this)) {
                    f2 = Array(h3);
                    for (var k2 = 0; k2 < h3; k2++)
                      f2[k2] = g2[k2];
                  }
                }
                d3.set.call(this, e7);
                if (f2)
                  for (e7 = 0; e7 < f2.length; e7++)
                    Xg(a3, f2[e7]);
              }
            } });
          }
          Node.prototype.insertBefore = function(c3, d3) {
            if (c3 instanceof DocumentFragment) {
              var e7 = Lg(c3);
              c3 = kg.call(this, c3, d3);
              if (T2(this))
                for (d3 = 0; d3 < e7.length; d3++)
                  Vg(a3, e7[d3]);
              return c3;
            }
            e7 = c3 instanceof Element && T2(c3);
            d3 = kg.call(this, c3, d3);
            e7 && Xg(a3, c3);
            T2(this) && Vg(a3, c3);
            return d3;
          };
          Node.prototype.appendChild = function(c3) {
            if (c3 instanceof DocumentFragment) {
              var d3 = Lg(c3);
              c3 = jg.call(this, c3);
              if (T2(this))
                for (var e7 = 0; e7 < d3.length; e7++)
                  Vg(a3, d3[e7]);
              return c3;
            }
            d3 = c3 instanceof Element && T2(c3);
            e7 = jg.call(this, c3);
            d3 && Xg(a3, c3);
            T2(this) && Vg(a3, c3);
            return e7;
          };
          Node.prototype.cloneNode = function(c3) {
            c3 = ig.call(this, !!c3);
            this.ownerDocument.__CE_registry ? Yg(a3, c3) : Tg(a3, c3);
            return c3;
          };
          Node.prototype.removeChild = function(c3) {
            var d3 = c3 instanceof Element && T2(c3), e7 = lg.call(this, c3);
            d3 && Xg(a3, c3);
            return e7;
          };
          Node.prototype.replaceChild = function(c3, d3) {
            if (c3 instanceof DocumentFragment) {
              var e7 = Lg(c3);
              c3 = mg.call(this, c3, d3);
              if (T2(this))
                for (Xg(a3, d3), d3 = 0; d3 < e7.length; d3++)
                  Vg(a3, e7[d3]);
              return c3;
            }
            e7 = c3 instanceof Element && T2(c3);
            var f2 = mg.call(this, c3, d3), g2 = T2(this);
            g2 && Xg(a3, d3);
            e7 && Xg(a3, c3);
            g2 && Vg(a3, c3);
            return f2;
          };
          ng && ng.get ? b2(Node.prototype, ng) : Rg(a3, function(c3) {
            b2(c3, { enumerable: true, configurable: true, get: function() {
              for (var d3 = [], e7 = this.firstChild; e7; e7 = e7.nextSibling)
                e7.nodeType !== Node.COMMENT_NODE && d3.push(e7.textContent);
              return d3.join("");
            }, set: function(d3) {
              for (; this.firstChild; )
                lg.call(this, this.firstChild);
              null != d3 && "" !== d3 && jg.call(this, document.createTextNode(d3));
            } });
          });
        }
        ;
        var Pg = window.customElements;
        function oh() {
          var a3 = new Og();
          mh(a3);
          ih(a3);
          hh(a3, DocumentFragment.prototype, { prepend: gg, append: hg });
          nh(a3);
          kh(a3);
          window.CustomElementRegistry = U;
          a3 = new U(a3);
          document.__CE_registry = a3;
          Object.defineProperty(window, "customElements", { configurable: true, enumerable: true, value: a3 });
        }
        Pg && !Pg.forcePolyfill && "function" == typeof Pg.define && "function" == typeof Pg.get || oh();
        window.__CE_installPolyfill = oh;
        function ph() {
          this.end = this.start = 0;
          this.rules = this.parent = this.previous = null;
          this.cssText = this.parsedCssText = "";
          this.atRule = false;
          this.type = 0;
          this.parsedSelector = this.selector = this.keyframesName = "";
        }
        function qh(a3) {
          var b2 = a3 = a3.replace(rh, "").replace(sh, ""), c3 = new ph();
          c3.start = 0;
          c3.end = b2.length;
          for (var d3 = c3, e7 = 0, f2 = b2.length; e7 < f2; e7++)
            if ("{" === b2[e7]) {
              d3.rules || (d3.rules = []);
              var g2 = d3, h3 = g2.rules[g2.rules.length - 1] || null;
              d3 = new ph();
              d3.start = e7 + 1;
              d3.parent = g2;
              d3.previous = h3;
              g2.rules.push(d3);
            } else
              "}" === b2[e7] && (d3.end = e7 + 1, d3 = d3.parent || c3);
          return th(c3, a3);
        }
        function th(a3, b2) {
          var c3 = b2.substring(a3.start, a3.end - 1);
          a3.parsedCssText = a3.cssText = c3.trim();
          a3.parent && (c3 = b2.substring(a3.previous ? a3.previous.end : a3.parent.start, a3.start - 1), c3 = uh(c3), c3 = c3.replace(vh, " "), c3 = c3.substring(c3.lastIndexOf(";") + 1), c3 = a3.parsedSelector = a3.selector = c3.trim(), a3.atRule = 0 === c3.indexOf("@"), a3.atRule ? 0 === c3.indexOf("@media") ? a3.type = wh : c3.match(xh) && (a3.type = yh, a3.keyframesName = a3.selector.split(vh).pop()) : a3.type = 0 === c3.indexOf("--") ? zh : Ah);
          if (c3 = a3.rules)
            for (var d3 = 0, e7 = c3.length, f2 = void 0; d3 < e7 && (f2 = c3[d3]); d3++)
              th(
                f2,
                b2
              );
          return a3;
        }
        function uh(a3) {
          return a3.replace(/\\([0-9a-f]{1,6})\s/gi, function(b2, c3) {
            b2 = c3;
            for (c3 = 6 - b2.length; c3--; )
              b2 = "0" + b2;
            return "\\" + b2;
          });
        }
        function Bh(a3, b2, c3) {
          c3 = void 0 === c3 ? "" : c3;
          var d3 = "";
          if (a3.cssText || a3.rules) {
            var e7 = a3.rules, f2;
            if (f2 = e7)
              f2 = e7[0], f2 = !(f2 && f2.selector && 0 === f2.selector.indexOf("--"));
            if (f2) {
              f2 = 0;
              for (var g2 = e7.length, h3 = void 0; f2 < g2 && (h3 = e7[f2]); f2++)
                d3 = Bh(h3, b2, d3);
            } else
              b2 ? b2 = a3.cssText : (b2 = a3.cssText, b2 = b2.replace(Ch, "").replace(Dh, ""), b2 = b2.replace(Eh, "").replace(Fh, "")), (d3 = b2.trim()) && (d3 = "  " + d3 + "\n");
          }
          d3 && (a3.selector && (c3 += a3.selector + " {\n"), c3 += d3, a3.selector && (c3 += "}\n\n"));
          return c3;
        }
        var Ah = 1, yh = 7, wh = 4, zh = 1e3, rh = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, sh = /@import[^;]*;/gim, Ch = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim, Dh = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim, Eh = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, Fh = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim, xh = /^@[^\s]*keyframes/, vh = /\s+/g;
        var V2 = !(window.ShadyDOM && window.ShadyDOM.inUse), Gh;
        function Hh(a3) {
          Gh = a3 && a3.shimcssproperties ? false : V2 || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
        }
        var Ih;
        window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (Ih = window.ShadyCSS.cssBuild);
        var Jh = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
        window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? Gh = window.ShadyCSS.nativeCss : window.ShadyCSS ? (Hh(window.ShadyCSS), window.ShadyCSS = void 0) : Hh(window.WebComponents && window.WebComponents.flags);
        var W = Gh;
        var Kh = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi, Lh = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, Mh = /(--[\w-]+)\s*([:,;)]|$)/gi, Nh = /(animation\s*:)|(animation-name\s*:)/, Oh = /@media\s(.*)/, Ph = /\{[^}]*\}/g;
        var Qh = /* @__PURE__ */ new Set();
        function Rh(a3, b2) {
          if (!a3)
            return "";
          "string" === typeof a3 && (a3 = qh(a3));
          b2 && Sh(a3, b2);
          return Bh(a3, W);
        }
        function Th(a3) {
          !a3.__cssRules && a3.textContent && (a3.__cssRules = qh(a3.textContent));
          return a3.__cssRules || null;
        }
        function Vh(a3) {
          return !!a3.parent && a3.parent.type === yh;
        }
        function Sh(a3, b2, c3, d3) {
          if (a3) {
            var e7 = false, f2 = a3.type;
            if (d3 && f2 === wh) {
              var g2 = a3.selector.match(Oh);
              g2 && (window.matchMedia(g2[1]).matches || (e7 = true));
            }
            f2 === Ah ? b2(a3) : c3 && f2 === yh ? c3(a3) : f2 === zh && (e7 = true);
            if ((a3 = a3.rules) && !e7)
              for (e7 = 0, f2 = a3.length, g2 = void 0; e7 < f2 && (g2 = a3[e7]); e7++)
                Sh(g2, b2, c3, d3);
          }
        }
        function Wh(a3, b2, c3, d3) {
          var e7 = document.createElement("style");
          b2 && e7.setAttribute("scope", b2);
          e7.textContent = a3;
          Xh(e7, c3, d3);
          return e7;
        }
        var Yh = null;
        function Zh(a3) {
          a3 = document.createComment(" Shady DOM styles for " + a3 + " ");
          var b2 = document.head;
          b2.insertBefore(a3, (Yh ? Yh.nextSibling : null) || b2.firstChild);
          return Yh = a3;
        }
        function Xh(a3, b2, c3) {
          b2 = b2 || document.head;
          b2.insertBefore(a3, c3 && c3.nextSibling || b2.firstChild);
          Yh ? a3.compareDocumentPosition(Yh) === Node.DOCUMENT_POSITION_PRECEDING && (Yh = a3) : Yh = a3;
        }
        function $h(a3, b2) {
          for (var c3 = 0, d3 = a3.length; b2 < d3; b2++)
            if ("(" === a3[b2])
              c3++;
            else if (")" === a3[b2] && 0 === --c3)
              return b2;
          return -1;
        }
        function ai(a3, b2) {
          var c3 = a3.indexOf("var(");
          if (-1 === c3)
            return b2(a3, "", "", "");
          var d3 = $h(a3, c3 + 3), e7 = a3.substring(c3 + 4, d3);
          c3 = a3.substring(0, c3);
          a3 = ai(a3.substring(d3 + 1), b2);
          d3 = e7.indexOf(",");
          return -1 === d3 ? b2(c3, e7.trim(), "", a3) : b2(c3, e7.substring(0, d3).trim(), e7.substring(d3 + 1).trim(), a3);
        }
        function bi(a3, b2) {
          V2 ? a3.setAttribute("class", b2) : window.ShadyDOM.nativeMethods.setAttribute.call(a3, "class", b2);
        }
        var ci = window.ShadyDOM && window.ShadyDOM.wrap || function(a3) {
          return a3;
        };
        function di(a3) {
          var b2 = a3.localName, c3 = "";
          b2 ? -1 < b2.indexOf("-") || (c3 = b2, b2 = a3.getAttribute && a3.getAttribute("is") || "") : (b2 = a3.is, c3 = a3.extends);
          return { is: b2, ja: c3 };
        }
        function ei(a3) {
          for (var b2 = [], c3 = "", d3 = 0; 0 <= d3 && d3 < a3.length; d3++)
            if ("(" === a3[d3]) {
              var e7 = $h(a3, d3);
              c3 += a3.slice(d3, e7 + 1);
              d3 = e7;
            } else
              "," === a3[d3] ? (b2.push(c3), c3 = "") : c3 += a3[d3];
          c3 && b2.push(c3);
          return b2;
        }
        function fi(a3) {
          if (void 0 !== Ih)
            return Ih;
          if (void 0 === a3.__cssBuild) {
            var b2 = a3.getAttribute("css-build");
            if (b2)
              a3.__cssBuild = b2;
            else {
              a: {
                b2 = "template" === a3.localName ? a3.content.firstChild : a3.firstChild;
                if (b2 instanceof Comment && (b2 = b2.textContent.trim().split(":"), "css-build" === b2[0])) {
                  b2 = b2[1];
                  break a;
                }
                b2 = "";
              }
              if ("" !== b2) {
                var c3 = "template" === a3.localName ? a3.content.firstChild : a3.firstChild;
                c3.parentNode.removeChild(c3);
              }
              a3.__cssBuild = b2;
            }
          }
          return a3.__cssBuild || "";
        }
        function gi(a3) {
          a3 = void 0 === a3 ? "" : a3;
          return "" !== a3 && W ? V2 ? "shadow" === a3 : "shady" === a3 : false;
        }
        ;
        function hi() {
        }
        function ii(a3, b2) {
          ji(ki, a3, function(c3) {
            li(c3, b2 || "");
          });
        }
        function ji(a3, b2, c3) {
          b2.nodeType === Node.ELEMENT_NODE && c3(b2);
          var d3;
          "template" === b2.localName ? d3 = (b2.content || b2._content || b2).childNodes : d3 = b2.children || b2.childNodes;
          if (d3)
            for (b2 = 0; b2 < d3.length; b2++)
              ji(a3, d3[b2], c3);
        }
        function li(a3, b2, c3) {
          if (b2) {
            if (a3.classList)
              c3 ? (a3.classList.remove("style-scope"), a3.classList.remove(b2)) : (a3.classList.add("style-scope"), a3.classList.add(b2));
            else if (a3.getAttribute) {
              var d3 = a3.getAttribute("class");
              c3 ? d3 && (b2 = d3.replace("style-scope", "").replace(b2, ""), bi(a3, b2)) : bi(a3, (d3 ? d3 + " " : "") + "style-scope " + b2);
            }
          }
        }
        function mi(a3, b2, c3) {
          ji(ki, a3, function(d3) {
            li(d3, b2, true);
            li(d3, c3);
          });
        }
        function ni(a3, b2) {
          ji(ki, a3, function(c3) {
            li(c3, b2 || "", true);
          });
        }
        function oi(a3, b2, c3, d3, e7) {
          var f2 = ki;
          e7 = void 0 === e7 ? "" : e7;
          "" === e7 && (V2 || "shady" === (void 0 === d3 ? "" : d3) ? e7 = Rh(b2, c3) : (a3 = di(a3), e7 = pi(f2, b2, a3.is, a3.ja, c3) + "\n\n"));
          return e7.trim();
        }
        function pi(a3, b2, c3, d3, e7) {
          var f2 = qi(c3, d3);
          c3 = c3 ? "." + c3 : "";
          return Rh(b2, function(g2) {
            g2.i || (g2.selector = g2.G = ri(a3, g2, a3.h, c3, f2), g2.i = true);
            e7 && e7(g2, c3, f2);
          });
        }
        function qi(a3, b2) {
          return b2 ? "[is=" + a3 + "]" : a3;
        }
        function ri(a3, b2, c3, d3, e7) {
          var f2 = ei(b2.selector);
          if (!Vh(b2)) {
            b2 = 0;
            for (var g2 = f2.length, h3 = void 0; b2 < g2 && (h3 = f2[b2]); b2++)
              f2[b2] = c3.call(a3, h3, d3, e7);
          }
          return f2.filter(function(k2) {
            return !!k2;
          }).join(",");
        }
        function si(a3) {
          return a3.replace(ti, function(b2, c3, d3) {
            -1 < d3.indexOf("+") ? d3 = d3.replace(/\+/g, "___") : -1 < d3.indexOf("___") && (d3 = d3.replace(/___/g, "+"));
            return ":" + c3 + "(" + d3 + ")";
          });
        }
        function ui(a3) {
          for (var b2 = [], c3; c3 = a3.match(vi); ) {
            var d3 = c3.index, e7 = $h(a3, d3);
            if (-1 === e7)
              throw Error(c3.input + " selector missing ')'");
            c3 = a3.slice(d3, e7 + 1);
            a3 = a3.replace(c3, "\uE000");
            b2.push(c3);
          }
          return { Ea: a3, matches: b2 };
        }
        function wi(a3, b2) {
          var c3 = a3.split("\uE000");
          return b2.reduce(function(d3, e7, f2) {
            return d3 + e7 + c3[f2 + 1];
          }, c3[0]);
        }
        hi.prototype.h = function(a3, b2, c3) {
          var d3 = false;
          a3 = a3.trim();
          var e7 = ti.test(a3);
          e7 && (a3 = a3.replace(ti, function(h3, k2, l5) {
            return ":" + k2 + "(" + l5.replace(/\s/g, "") + ")";
          }), a3 = si(a3));
          var f2 = vi.test(a3);
          if (f2) {
            var g2 = ui(a3);
            a3 = g2.Ea;
            g2 = g2.matches;
          }
          a3 = a3.replace(xi, ":host $1");
          a3 = a3.replace(yi, function(h3, k2, l5) {
            d3 || (h3 = zi(l5, k2, b2, c3), d3 = d3 || h3.stop, k2 = h3.Ya, l5 = h3.value);
            return k2 + l5;
          });
          f2 && (a3 = wi(a3, g2));
          e7 && (a3 = si(a3));
          return a3 = a3.replace(Ai, function(h3, k2, l5, m2) {
            return '[dir="' + l5 + '"] ' + k2 + m2 + ", " + k2 + '[dir="' + l5 + '"]' + m2;
          });
        };
        function zi(a3, b2, c3, d3) {
          var e7 = a3.indexOf("::slotted");
          0 <= a3.indexOf(":host") ? a3 = Bi(a3, d3) : 0 !== e7 && (a3 = c3 ? Ci(a3, c3) : a3);
          c3 = false;
          0 <= e7 && (b2 = "", c3 = true);
          if (c3) {
            var f2 = true;
            c3 && (a3 = a3.replace(Di, function(g2, h3) {
              return " > " + h3;
            }));
          }
          return { value: a3, Ya: b2, stop: f2 };
        }
        function Ci(a3, b2) {
          a3 = a3.split(/(\[.+?\])/);
          for (var c3 = [], d3 = 0; d3 < a3.length; d3++)
            if (1 === d3 % 2)
              c3.push(a3[d3]);
            else {
              var e7 = a3[d3];
              if ("" !== e7 || d3 !== a3.length - 1)
                e7 = e7.split(":"), e7[0] += b2, c3.push(e7.join(":"));
            }
          return c3.join("");
        }
        function Bi(a3, b2) {
          var c3 = a3.match(Ei);
          return (c3 = c3 && c3[2].trim() || "") ? c3[0].match(Fi) ? a3.replace(Ei, function(d3, e7, f2) {
            return b2 + f2;
          }) : c3.split(Fi)[0] === b2 ? c3 : "should_not_match" : a3.replace(":host", b2);
        }
        function Gi(a3) {
          ":root" === a3.selector && (a3.selector = "html");
        }
        hi.prototype.i = function(a3) {
          return a3.match(":host") ? "" : a3.match("::slotted") ? this.h(a3, ":not(.style-scope)") : Ci(a3.trim(), ":not(.style-scope)");
        };
        ea.Object.defineProperties(hi.prototype, { g: { configurable: true, enumerable: true, get: function() {
          return "style-scope";
        } } });
        var ti = /:(nth[-\w]+)\(([^)]+)\)/, yi = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, Fi = /[[.:#*]/, xi = /^(::slotted)/, Ei = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Di = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Ai = /(.*):dir\((?:(ltr|rtl))\)(.*)/, vi = /:(?:matches|any|-(?:webkit|moz)-any)/, ki = new hi();
        function Hi(a3, b2, c3, d3, e7) {
          this.M = a3 || null;
          this.h = b2 || null;
          this.Ca = c3 || [];
          this.K = null;
          this.cssBuild = e7 || "";
          this.ja = d3 || "";
          this.g = this.L = this.R = null;
        }
        function Ii(a3) {
          return a3 ? a3.__styleInfo : null;
        }
        function Ji(a3, b2) {
          return a3.__styleInfo = b2;
        }
        Hi.prototype.i = function() {
          return this.M;
        };
        Hi.prototype._getStyleRules = Hi.prototype.i;
        function Ki(a3) {
          var b2 = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
          return b2 && b2.call(this, a3);
        }
        var Li = /:host\s*>\s*/, Mi = navigator.userAgent.match("Trident");
        function Ni() {
        }
        function Oi(a3) {
          var b2 = {}, c3 = [], d3 = 0;
          Sh(a3, function(f2) {
            Pi(f2);
            f2.index = d3++;
            f2 = f2.F.cssText;
            for (var g2; g2 = Mh.exec(f2); ) {
              var h3 = g2[1];
              ":" !== g2[2] && (b2[h3] = true);
            }
          }, function(f2) {
            c3.push(f2);
          });
          a3.h = c3;
          a3 = [];
          for (var e7 in b2)
            a3.push(e7);
          return a3;
        }
        function Pi(a3) {
          if (!a3.F) {
            var b2 = {}, c3 = {};
            Qi(a3, c3) && (b2.P = c3, a3.rules = null);
            b2.cssText = a3.parsedCssText.replace(Ph, "").replace(Kh, "");
            a3.F = b2;
          }
        }
        function Qi(a3, b2) {
          var c3 = a3.F;
          if (c3) {
            if (c3.P)
              return Object.assign(b2, c3.P), true;
          } else {
            c3 = a3.parsedCssText;
            for (var d3; a3 = Kh.exec(c3); ) {
              d3 = (a3[2] || a3[3]).trim();
              if ("inherit" !== d3 || "unset" !== d3)
                b2[a3[1].trim()] = d3;
              d3 = true;
            }
            return d3;
          }
        }
        function Ri(a3, b2, c3) {
          b2 && (b2 = 0 <= b2.indexOf(";") ? Si(a3, b2, c3) : ai(b2, function(d3, e7, f2, g2) {
            if (!e7)
              return d3 + g2;
            (e7 = Ri(a3, c3[e7], c3)) && "initial" !== e7 ? "apply-shim-inherit" === e7 && (e7 = "inherit") : e7 = Ri(a3, c3[f2] || f2, c3) || f2;
            return d3 + (e7 || "") + g2;
          }));
          return b2 && b2.trim() || "";
        }
        function Si(a3, b2, c3) {
          b2 = b2.split(";");
          for (var d3 = 0, e7, f2; d3 < b2.length; d3++)
            if (e7 = b2[d3]) {
              Lh.lastIndex = 0;
              if (f2 = Lh.exec(e7))
                e7 = Ri(a3, c3[f2[1]], c3);
              else if (f2 = e7.indexOf(":"), -1 !== f2) {
                var g2 = e7.substring(f2);
                g2 = g2.trim();
                g2 = Ri(a3, g2, c3) || g2;
                e7 = e7.substring(0, f2) + g2;
              }
              b2[d3] = e7 && e7.lastIndexOf(";") === e7.length - 1 ? e7.slice(0, -1) : e7 || "";
            }
          return b2.join(";");
        }
        function Ti(a3, b2) {
          var c3 = {}, d3 = [];
          Sh(a3, function(e7) {
            e7.F || Pi(e7);
            var f2 = e7.G || e7.parsedSelector;
            b2 && e7.F.P && f2 && Ki.call(b2, f2) && (Qi(e7, c3), e7 = e7.index, f2 = parseInt(e7 / 32, 10), d3[f2] = (d3[f2] || 0) | 1 << e7 % 32);
          }, null, true);
          return { P: c3, key: d3 };
        }
        function Ui(a3, b2, c3, d3) {
          b2.F || Pi(b2);
          if (b2.F.P) {
            var e7 = di(a3);
            a3 = e7.is;
            e7 = e7.ja;
            e7 = a3 ? qi(a3, e7) : "html";
            var f2 = b2.parsedSelector;
            var g2 = !!f2.match(Li) || "html" === e7 && -1 < f2.indexOf("html");
            var h3 = 0 === f2.indexOf(":host") && !g2;
            "shady" === c3 && (g2 = f2 === e7 + " > *." + e7 || -1 !== f2.indexOf("html"), h3 = !g2 && 0 === f2.indexOf(e7));
            if (g2 || h3)
              c3 = e7, h3 && (b2.G || (b2.G = ri(ki, b2, ki.h, a3 ? "." + a3 : "", e7)), c3 = b2.G || e7), g2 && "html" === e7 && (c3 = b2.G || b2.O), d3({ Ea: c3, gb: h3, vb: g2 });
          }
        }
        function Vi(a3, b2, c3) {
          var d3 = {}, e7 = {};
          Sh(b2, function(f2) {
            Ui(a3, f2, c3, function(g2) {
              Ki.call(a3._element || a3, g2.Ea) && (g2.gb ? Qi(f2, d3) : Qi(f2, e7));
            });
          }, null, true);
          return { mb: e7, eb: d3 };
        }
        function Wi(a3, b2, c3, d3) {
          var e7 = di(b2), f2 = qi(e7.is, e7.ja), g2 = new RegExp("(?:^|[^.#[:])" + (b2.extends ? "\\" + f2.slice(0, -1) + "\\]" : f2) + "($|[.:[\\s>+~])"), h3 = Ii(b2);
          e7 = h3.M;
          h3 = h3.cssBuild;
          var k2 = Xi(e7, d3);
          return oi(b2, e7, function(l5) {
            var m2 = "";
            l5.F || Pi(l5);
            l5.F.cssText && (m2 = Si(a3, l5.F.cssText, c3));
            l5.cssText = m2;
            if (!V2 && !Vh(l5) && l5.cssText) {
              var q = m2 = l5.cssText;
              null == l5.Ma && (l5.Ma = Nh.test(m2));
              if (l5.Ma)
                if (null == l5.ra) {
                  l5.ra = [];
                  for (var H2 in k2)
                    q = k2[H2], q = q(m2), m2 !== q && (m2 = q, l5.ra.push(H2));
                } else {
                  for (H2 = 0; H2 < l5.ra.length; ++H2)
                    q = k2[l5.ra[H2]], m2 = q(m2);
                  q = m2;
                }
              l5.cssText = q;
              l5.G = l5.G || l5.selector;
              m2 = "." + d3;
              H2 = ei(l5.G);
              q = 0;
              for (var C2 = H2.length, t3 = void 0; q < C2 && (t3 = H2[q]); q++)
                H2[q] = t3.match(g2) ? t3.replace(f2, m2) : m2 + " " + t3;
              l5.selector = H2.join(",");
            }
          }, h3);
        }
        function Xi(a3, b2) {
          a3 = a3.h;
          var c3 = {};
          if (!V2 && a3)
            for (var d3 = 0, e7 = a3[d3]; d3 < a3.length; e7 = a3[++d3]) {
              var f2 = e7, g2 = b2;
              f2.u = new RegExp("\\b" + f2.keyframesName + "(?!\\B|-)", "g");
              f2.g = f2.keyframesName + "-" + g2;
              f2.G = f2.G || f2.selector;
              f2.selector = f2.G.replace(f2.keyframesName, f2.g);
              c3[e7.keyframesName] = Yi(e7);
            }
          return c3;
        }
        function Yi(a3) {
          return function(b2) {
            return b2.replace(a3.u, a3.g);
          };
        }
        function Zi(a3, b2) {
          var c3 = $i, d3 = Th(a3);
          a3.textContent = Rh(d3, function(e7) {
            var f2 = e7.cssText = e7.parsedCssText;
            e7.F && e7.F.cssText && (f2 = f2.replace(Ch, "").replace(Dh, ""), e7.cssText = Si(c3, f2, b2));
          });
        }
        ea.Object.defineProperties(Ni.prototype, { g: { configurable: true, enumerable: true, get: function() {
          return "x-scope";
        } } });
        var $i = new Ni();
        var aj = {}, bj = window.customElements;
        if (bj && !V2 && !Jh) {
          var cj = bj.define;
          bj.define = function(a3, b2, c3) {
            aj[a3] || (aj[a3] = Zh(a3));
            cj.call(bj, a3, b2, c3);
          };
        }
        ;
        function dj() {
          this.cache = {};
        }
        dj.prototype.store = function(a3, b2, c3, d3) {
          var e7 = this.cache[a3] || [];
          e7.push({ P: b2, styleElement: c3, L: d3 });
          100 < e7.length && e7.shift();
          this.cache[a3] = e7;
        };
        function ej() {
        }
        var fj = new RegExp(ki.g + "\\s*([^\\s]*)");
        function gj(a3) {
          return (a3 = (a3.classList && a3.classList.value ? a3.classList.value : a3.getAttribute("class") || "").match(fj)) ? a3[1] : "";
        }
        function hj(a3) {
          var b2 = ci(a3).getRootNode();
          return b2 === a3 || b2 === a3.ownerDocument ? "" : (a3 = b2.host) ? di(a3).is : "";
        }
        function ij(a3) {
          for (var b2 = 0; b2 < a3.length; b2++) {
            var c3 = a3[b2];
            if (c3.target !== document.documentElement && c3.target !== document.head)
              for (var d3 = 0; d3 < c3.addedNodes.length; d3++) {
                var e7 = c3.addedNodes[d3];
                if (e7.nodeType === Node.ELEMENT_NODE) {
                  var f2 = e7.getRootNode(), g2 = gj(e7);
                  if (g2 && f2 === e7.ownerDocument && ("style" !== e7.localName && "template" !== e7.localName || "" === fi(e7)))
                    ni(e7, g2);
                  else if (f2 instanceof ShadowRoot)
                    for (f2 = hj(e7), f2 !== g2 && mi(e7, g2, f2), e7 = window.ShadyDOM.nativeMethods.querySelectorAll.call(e7, ":not(." + ki.g + ")"), g2 = 0; g2 < e7.length; g2++) {
                      f2 = e7[g2];
                      var h3 = hj(f2);
                      h3 && li(f2, h3);
                    }
                }
              }
          }
        }
        if (!(V2 || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
          var jj = new MutationObserver(ij), kj = function(a3) {
            jj.observe(a3, { childList: true, subtree: true });
          };
          if (window.customElements && !window.customElements.polyfillWrapFlushCallback)
            kj(document);
          else {
            var lj = function() {
              kj(document.body);
            };
            window.HTMLImports ? window.HTMLImports.whenReady(lj) : requestAnimationFrame(function() {
              if ("loading" === document.readyState) {
                var a3 = function() {
                  lj();
                  document.removeEventListener("readystatechange", a3);
                };
                document.addEventListener(
                  "readystatechange",
                  a3
                );
              } else
                lj();
            });
          }
          ej = function() {
            ij(jj.takeRecords());
          };
        }
        ;
        var mj = {};
        var nj = Promise.resolve();
        function oj(a3) {
          if (a3 = mj[a3])
            a3._applyShimCurrentVersion = a3._applyShimCurrentVersion || 0, a3._applyShimValidatingVersion = a3._applyShimValidatingVersion || 0, a3._applyShimNextVersion = (a3._applyShimNextVersion || 0) + 1;
        }
        function pj(a3) {
          return a3._applyShimCurrentVersion === a3._applyShimNextVersion;
        }
        function qj(a3) {
          a3._applyShimValidatingVersion = a3._applyShimNextVersion;
          a3._validating || (a3._validating = true, nj.then(function() {
            a3._applyShimCurrentVersion = a3._applyShimNextVersion;
            a3._validating = false;
          }));
        }
        ;
        var rj = {}, sj = new dj();
        function Y() {
          this.ea = {};
          this.i = document.documentElement;
          var a3 = new ph();
          a3.rules = [];
          this.u = Ji(this.i, new Hi(a3));
          this.O = false;
          this.g = this.h = null;
        }
        v2 = Y.prototype;
        v2.flush = function() {
          ej();
        };
        v2.bb = function(a3) {
          return Th(a3);
        };
        v2.qb = function(a3) {
          return Rh(a3);
        };
        v2.prepareTemplate = function(a3, b2, c3) {
          this.prepareTemplateDom(a3, b2);
          this.prepareTemplateStyles(a3, b2, c3);
        };
        v2.prepareTemplateStyles = function(a3, b2, c3) {
          if (!a3._prepared && !Jh) {
            V2 || aj[b2] || (aj[b2] = Zh(b2));
            a3._prepared = true;
            a3.name = b2;
            a3.extends = c3;
            mj[b2] = a3;
            var d3 = fi(a3), e7 = gi(d3);
            c3 = { is: b2, extends: c3 };
            for (var f2 = [], g2 = a3.content.querySelectorAll("style"), h3 = 0; h3 < g2.length; h3++) {
              var k2 = g2[h3];
              if (k2.hasAttribute("shady-unscoped")) {
                if (!V2) {
                  var l5 = k2.textContent;
                  if (!Qh.has(l5)) {
                    Qh.add(l5);
                    var m2 = document.createElement("style");
                    m2.setAttribute("shady-unscoped", "");
                    m2.textContent = l5;
                    document.head.appendChild(m2);
                  }
                  k2.parentNode.removeChild(k2);
                }
              } else
                f2.push(k2.textContent), k2.parentNode.removeChild(k2);
            }
            f2 = f2.join("").trim() + (rj[b2] || "");
            tj(this);
            if (!e7) {
              if (g2 = !d3)
                g2 = Lh.test(f2) || Kh.test(f2), Lh.lastIndex = 0, Kh.lastIndex = 0;
              h3 = qh(f2);
              g2 && W && this.h && this.h.transformRules(h3, b2);
              a3._styleAst = h3;
            }
            g2 = [];
            W || (g2 = Oi(a3._styleAst));
            if (!g2.length || W)
              h3 = V2 ? a3.content : null, b2 = aj[b2] || null, d3 = oi(c3, a3._styleAst, null, d3, e7 ? f2 : ""), d3 = d3.length ? Wh(d3, c3.is, h3, b2) : null, a3._style = d3;
            a3.g = g2;
          }
        };
        v2.kb = function(a3, b2) {
          rj[b2] = a3.join(" ");
        };
        v2.prepareTemplateDom = function(a3, b2) {
          if (!Jh) {
            var c3 = fi(a3);
            V2 || "shady" === c3 || a3._domPrepared || (a3._domPrepared = true, ii(a3.content, b2));
          }
        };
        function uj(a3) {
          var b2 = di(a3), c3 = b2.is;
          b2 = b2.ja;
          var d3 = aj[c3] || null, e7 = mj[c3];
          if (e7) {
            c3 = e7._styleAst;
            var f2 = e7.g;
            e7 = fi(e7);
            b2 = new Hi(c3, d3, f2, b2, e7);
            Ji(a3, b2);
            return b2;
          }
        }
        function vj(a3) {
          !a3.g && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a3.g = window.ShadyCSS.CustomStyleInterface, a3.g.transformCallback = function(b2) {
            a3.Qa(b2);
          }, a3.g.validateCallback = function() {
            requestAnimationFrame(function() {
              (a3.g.enqueued || a3.O) && a3.flushCustomStyles();
            });
          });
        }
        function tj(a3) {
          if (!a3.h && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
            a3.h = window.ShadyCSS.ApplyShim;
            a3.h.invalidCallback = oj;
            var b2 = true;
          } else
            b2 = false;
          vj(a3);
          return b2;
        }
        v2.flushCustomStyles = function() {
          if (!Jh) {
            var a3 = tj(this);
            if (this.g) {
              var b2 = this.g.processStyles();
              if ((a3 || this.g.enqueued) && !gi(this.u.cssBuild)) {
                if (W) {
                  if (!this.u.cssBuild)
                    for (a3 = 0; a3 < b2.length; a3++) {
                      var c3 = this.g.getStyleForCustomStyle(b2[a3]);
                      if (c3 && W && this.h) {
                        var d3 = Th(c3);
                        tj(this);
                        this.h.transformRules(d3);
                        c3.textContent = Rh(d3);
                      }
                    }
                } else {
                  wj(this, b2);
                  xj(this, this.i, this.u);
                  for (a3 = 0; a3 < b2.length; a3++)
                    (c3 = this.g.getStyleForCustomStyle(b2[a3])) && Zi(c3, this.u.R);
                  this.O && this.styleDocument();
                }
                this.g.enqueued = false;
              }
            }
          }
        };
        function wj(a3, b2) {
          b2 = b2.map(function(c3) {
            return a3.g.getStyleForCustomStyle(c3);
          }).filter(function(c3) {
            return !!c3;
          });
          b2.sort(function(c3, d3) {
            c3 = d3.compareDocumentPosition(c3);
            return c3 & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c3 & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
          });
          a3.u.M.rules = b2.map(function(c3) {
            return Th(c3);
          });
        }
        v2.styleElement = function(a3, b2) {
          if (Jh) {
            if (b2) {
              Ii(a3) || Ji(a3, new Hi(null));
              var c3 = Ii(a3);
              c3.K = c3.K || {};
              Object.assign(c3.K, b2);
              yj(this, a3, c3);
            }
          } else if (c3 = Ii(a3) || uj(a3)) {
            if (a3 !== this.i && (this.O = true), b2 && (c3.K = c3.K || {}, Object.assign(c3.K, b2)), W)
              yj(this, a3, c3);
            else if (this.flush(), xj(this, a3, c3), c3.Ca && c3.Ca.length) {
              b2 = di(a3).is;
              var d3;
              a: {
                if (d3 = sj.cache[b2])
                  for (var e7 = d3.length - 1; 0 <= e7; e7--) {
                    var f2 = d3[e7];
                    b: {
                      var g2 = c3.Ca;
                      for (var h3 = 0; h3 < g2.length; h3++) {
                        var k2 = g2[h3];
                        if (f2.P[k2] !== c3.R[k2]) {
                          g2 = false;
                          break b;
                        }
                      }
                      g2 = true;
                    }
                    if (g2) {
                      d3 = f2;
                      break a;
                    }
                  }
                d3 = void 0;
              }
              g2 = d3 ? d3.styleElement : null;
              e7 = c3.L;
              (f2 = d3 && d3.L) || (f2 = this.ea[b2] = (this.ea[b2] || 0) + 1, f2 = b2 + "-" + f2);
              c3.L = f2;
              f2 = c3.L;
              h3 = $i;
              h3 = g2 ? g2.textContent || "" : Wi(h3, a3, c3.R, f2);
              k2 = Ii(a3);
              var l5 = k2.g;
              l5 && !V2 && l5 !== g2 && (l5._useCount--, 0 >= l5._useCount && l5.parentNode && l5.parentNode.removeChild(l5));
              V2 ? k2.g ? (k2.g.textContent = h3, g2 = k2.g) : h3 && (g2 = Wh(h3, f2, a3.shadowRoot, k2.h)) : g2 ? g2.parentNode || (Mi && -1 < h3.indexOf("@media") && (g2.textContent = h3), Xh(g2, null, k2.h)) : h3 && (g2 = Wh(h3, f2, null, k2.h));
              g2 && (g2._useCount = g2._useCount || 0, k2.g != g2 && g2._useCount++, k2.g = g2);
              f2 = g2;
              V2 || (g2 = c3.L, k2 = h3 = a3.getAttribute("class") || "", e7 && (k2 = h3.replace(new RegExp("\\s*x-scope\\s*" + e7 + "\\s*", "g"), " ")), k2 += (k2 ? " " : "") + "x-scope " + g2, h3 !== k2 && bi(a3, k2));
              d3 || sj.store(b2, c3.R, f2, c3.L);
            }
          }
        };
        function yj(a3, b2, c3) {
          var d3 = di(b2).is;
          if (c3.K) {
            var e7 = c3.K, f2;
            for (f2 in e7)
              null === f2 ? b2.style.removeProperty(f2) : b2.style.setProperty(f2, e7[f2]);
          }
          e7 = mj[d3];
          if (!(!e7 && b2 !== a3.i || e7 && "" !== fi(e7)) && e7 && e7._style && !pj(e7)) {
            if (pj(e7) || e7._applyShimValidatingVersion !== e7._applyShimNextVersion)
              tj(a3), a3.h && a3.h.transformRules(e7._styleAst, d3), e7._style.textContent = oi(b2, c3.M), qj(e7);
            V2 && (a3 = b2.shadowRoot) && (a3 = a3.querySelector("style")) && (a3.textContent = oi(b2, c3.M));
            c3.M = e7._styleAst;
          }
        }
        function zj(a3, b2) {
          return (b2 = ci(b2).getRootNode().host) ? Ii(b2) || uj(b2) ? b2 : zj(a3, b2) : a3.i;
        }
        function xj(a3, b2, c3) {
          var d3 = zj(a3, b2), e7 = Ii(d3), f2 = e7.R;
          d3 === a3.i || f2 || (xj(a3, d3, e7), f2 = e7.R);
          a3 = Object.create(f2 || null);
          d3 = Vi(b2, c3.M, c3.cssBuild);
          b2 = Ti(e7.M, b2).P;
          Object.assign(a3, d3.eb, b2, d3.mb);
          b2 = c3.K;
          for (var g2 in b2)
            if ((e7 = b2[g2]) || 0 === e7)
              a3[g2] = e7;
          g2 = $i;
          b2 = Object.getOwnPropertyNames(a3);
          for (e7 = 0; e7 < b2.length; e7++)
            d3 = b2[e7], a3[d3] = Ri(g2, a3[d3], a3);
          c3.R = a3;
        }
        v2.styleDocument = function(a3) {
          this.styleSubtree(this.i, a3);
        };
        v2.styleSubtree = function(a3, b2) {
          var c3 = ci(a3), d3 = c3.shadowRoot, e7 = a3 === this.i;
          (d3 || e7) && this.styleElement(a3, b2);
          if (a3 = e7 ? c3 : d3)
            for (a3 = Array.from(a3.querySelectorAll("*")).filter(function(f2) {
              return ci(f2).shadowRoot;
            }), b2 = 0; b2 < a3.length; b2++)
              this.styleSubtree(a3[b2]);
        };
        v2.Qa = function(a3) {
          var b2 = this, c3 = fi(a3);
          c3 !== this.u.cssBuild && (this.u.cssBuild = c3);
          if (!gi(c3)) {
            var d3 = Th(a3);
            Sh(d3, function(e7) {
              if (V2)
                Gi(e7);
              else {
                var f2 = ki;
                e7.selector = e7.parsedSelector;
                Gi(e7);
                e7.selector = e7.G = ri(f2, e7, f2.i, void 0, void 0);
              }
              W && "" === c3 && (tj(b2), b2.h && b2.h.transformRule(e7));
            });
            W ? a3.textContent = Rh(d3) : this.u.M.rules.push(d3);
          }
        };
        v2.getComputedStyleValue = function(a3, b2) {
          var c3;
          W || (c3 = (Ii(a3) || Ii(zj(this, a3))).R[b2]);
          return (c3 = c3 || window.getComputedStyle(a3).getPropertyValue(b2)) ? c3.trim() : "";
        };
        v2.pb = function(a3, b2) {
          var c3 = ci(a3).getRootNode();
          b2 = b2 ? ("string" === typeof b2 ? b2 : String(b2)).split(/\s/) : [];
          c3 = c3.host && c3.host.localName;
          if (!c3) {
            var d3 = a3.getAttribute("class");
            if (d3) {
              d3 = d3.split(/\s/);
              for (var e7 = 0; e7 < d3.length; e7++)
                if (d3[e7] === ki.g) {
                  c3 = d3[e7 + 1];
                  break;
                }
            }
          }
          c3 && b2.push(ki.g, c3);
          W || (c3 = Ii(a3)) && c3.L && b2.push($i.g, c3.L);
          bi(a3, b2.join(" "));
        };
        v2.Xa = function(a3) {
          return Ii(a3);
        };
        v2.ob = function(a3, b2) {
          li(a3, b2);
        };
        v2.rb = function(a3, b2) {
          li(a3, b2, true);
        };
        v2.nb = function(a3) {
          return hj(a3);
        };
        v2.$a = function(a3) {
          return gj(a3);
        };
        Y.prototype.flush = Y.prototype.flush;
        Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;
        Y.prototype.styleElement = Y.prototype.styleElement;
        Y.prototype.styleDocument = Y.prototype.styleDocument;
        Y.prototype.styleSubtree = Y.prototype.styleSubtree;
        Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;
        Y.prototype.setElementClass = Y.prototype.pb;
        Y.prototype._styleInfoForNode = Y.prototype.Xa;
        Y.prototype.transformCustomStyleForDocument = Y.prototype.Qa;
        Y.prototype.getStyleAst = Y.prototype.bb;
        Y.prototype.styleAstToString = Y.prototype.qb;
        Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;
        Y.prototype.scopeNode = Y.prototype.ob;
        Y.prototype.unscopeNode = Y.prototype.rb;
        Y.prototype.scopeForNode = Y.prototype.nb;
        Y.prototype.currentScopeForNode = Y.prototype.$a;
        Y.prototype.prepareAdoptedCssText = Y.prototype.kb;
        Object.defineProperties(Y.prototype, { nativeShadow: { get: function() {
          return V2;
        } }, nativeCss: { get: function() {
          return W;
        } } });
        var Z2 = new Y(), Aj, Bj;
        window.ShadyCSS && (Aj = window.ShadyCSS.ApplyShim, Bj = window.ShadyCSS.CustomStyleInterface);
        window.ShadyCSS = {
          ScopingShim: Z2,
          prepareTemplate: function(a3, b2, c3) {
            Z2.flushCustomStyles();
            Z2.prepareTemplate(a3, b2, c3);
          },
          prepareTemplateDom: function(a3, b2) {
            Z2.prepareTemplateDom(a3, b2);
          },
          prepareTemplateStyles: function(a3, b2, c3) {
            Z2.flushCustomStyles();
            Z2.prepareTemplateStyles(a3, b2, c3);
          },
          styleSubtree: function(a3, b2) {
            Z2.flushCustomStyles();
            Z2.styleSubtree(a3, b2);
          },
          styleElement: function(a3) {
            Z2.flushCustomStyles();
            Z2.styleElement(a3);
          },
          styleDocument: function(a3) {
            Z2.flushCustomStyles();
            Z2.styleDocument(a3);
          },
          flushCustomStyles: function() {
            Z2.flushCustomStyles();
          },
          getComputedStyleValue: function(a3, b2) {
            return Z2.getComputedStyleValue(a3, b2);
          },
          nativeCss: W,
          nativeShadow: V2,
          cssBuild: Ih,
          disableRuntime: Jh
        };
        Aj && (window.ShadyCSS.ApplyShim = Aj);
        Bj && (window.ShadyCSS.CustomStyleInterface = Bj);
        (function(a3) {
          function b2(t3) {
            "" == t3 && (f2.call(this), this.m = true);
            return t3.toLowerCase();
          }
          function c3(t3) {
            var F = t3.charCodeAt(0);
            return 32 < F && 127 > F && -1 == [34, 35, 60, 62, 63, 96].indexOf(F) ? t3 : encodeURIComponent(t3);
          }
          function d3(t3) {
            var F = t3.charCodeAt(0);
            return 32 < F && 127 > F && -1 == [34, 35, 60, 62, 96].indexOf(F) ? t3 : encodeURIComponent(t3);
          }
          function e7(t3, F, E2) {
            function N2(ha) {
              sa.push(ha);
            }
            var y2 = F || "scheme start", X = 0, x2 = "", ta = false, ia = false, sa = [];
            a:
              for (; (void 0 != t3[X - 1] || 0 == X) && !this.m; ) {
                var n6 = t3[X];
                switch (y2) {
                  case "scheme start":
                    if (n6 && q.test(n6))
                      x2 += n6.toLowerCase(), y2 = "scheme";
                    else if (F) {
                      N2("Invalid scheme.");
                      break a;
                    } else {
                      x2 = "";
                      y2 = "no scheme";
                      continue;
                    }
                    break;
                  case "scheme":
                    if (n6 && H2.test(n6))
                      x2 += n6.toLowerCase();
                    else if (":" == n6) {
                      this.l = x2;
                      x2 = "";
                      if (F)
                        break a;
                      void 0 !== l5[this.l] && (this.H = true);
                      y2 = "file" == this.l ? "relative" : this.H && E2 && E2.l == this.l ? "relative or authority" : this.H ? "authority first slash" : "scheme data";
                    } else if (F) {
                      void 0 != n6 && N2("Code point not allowed in scheme: " + n6);
                      break a;
                    } else {
                      x2 = "";
                      X = 0;
                      y2 = "no scheme";
                      continue;
                    }
                    break;
                  case "scheme data":
                    "?" == n6 ? (this.A = "?", y2 = "query") : "#" == n6 ? (this.C = "#", y2 = "fragment") : void 0 != n6 && "	" != n6 && "\n" != n6 && "\r" != n6 && (this.ya += c3(n6));
                    break;
                  case "no scheme":
                    if (E2 && void 0 !== l5[E2.l]) {
                      y2 = "relative";
                      continue;
                    } else
                      N2("Missing scheme."), f2.call(this), this.m = true;
                    break;
                  case "relative or authority":
                    if ("/" == n6 && "/" == t3[X + 1])
                      y2 = "authority ignore slashes";
                    else {
                      N2("Expected /, got: " + n6);
                      y2 = "relative";
                      continue;
                    }
                    break;
                  case "relative":
                    this.H = true;
                    "file" != this.l && (this.l = E2.l);
                    if (void 0 == n6) {
                      this.o = E2.o;
                      this.v = E2.v;
                      this.s = E2.s.slice();
                      this.A = E2.A;
                      this.B = E2.B;
                      this.j = E2.j;
                      break a;
                    } else if ("/" == n6 || "\\" == n6)
                      "\\" == n6 && N2("\\ is an invalid code point."), y2 = "relative slash";
                    else if ("?" == n6)
                      this.o = E2.o, this.v = E2.v, this.s = E2.s.slice(), this.A = "?", this.B = E2.B, this.j = E2.j, y2 = "query";
                    else if ("#" == n6)
                      this.o = E2.o, this.v = E2.v, this.s = E2.s.slice(), this.A = E2.A, this.C = "#", this.B = E2.B, this.j = E2.j, y2 = "fragment";
                    else {
                      y2 = t3[X + 1];
                      var J = t3[X + 2];
                      if ("file" != this.l || !q.test(n6) || ":" != y2 && "|" != y2 || void 0 != J && "/" != J && "\\" != J && "?" != J && "#" != J)
                        this.o = E2.o, this.v = E2.v, this.B = E2.B, this.j = E2.j, this.s = E2.s.slice(), this.s.pop();
                      y2 = "relative path";
                      continue;
                    }
                    break;
                  case "relative slash":
                    if ("/" == n6 || "\\" == n6)
                      "\\" == n6 && N2("\\ is an invalid code point."), y2 = "file" == this.l ? "file host" : "authority ignore slashes";
                    else {
                      "file" != this.l && (this.o = E2.o, this.v = E2.v, this.B = E2.B, this.j = E2.j);
                      y2 = "relative path";
                      continue;
                    }
                    break;
                  case "authority first slash":
                    if ("/" == n6)
                      y2 = "authority second slash";
                    else {
                      N2("Expected '/', got: " + n6);
                      y2 = "authority ignore slashes";
                      continue;
                    }
                    break;
                  case "authority second slash":
                    y2 = "authority ignore slashes";
                    if ("/" != n6) {
                      N2("Expected '/', got: " + n6);
                      continue;
                    }
                    break;
                  case "authority ignore slashes":
                    if ("/" != n6 && "\\" != n6) {
                      y2 = "authority";
                      continue;
                    } else
                      N2("Expected authority, got: " + n6);
                    break;
                  case "authority":
                    if ("@" == n6) {
                      ta && (N2("@ already seen."), x2 += "%40");
                      ta = true;
                      for (n6 = 0; n6 < x2.length; n6++)
                        J = x2[n6], "	" == J || "\n" == J || "\r" == J ? N2("Invalid whitespace in authority.") : ":" == J && null === this.j ? this.j = "" : (J = c3(J), null !== this.j ? this.j += J : this.B += J);
                      x2 = "";
                    } else if (void 0 == n6 || "/" == n6 || "\\" == n6 || "?" == n6 || "#" == n6) {
                      X -= x2.length;
                      x2 = "";
                      y2 = "host";
                      continue;
                    } else
                      x2 += n6;
                    break;
                  case "file host":
                    if (void 0 == n6 || "/" == n6 || "\\" == n6 || "?" == n6 || "#" == n6) {
                      2 != x2.length || !q.test(x2[0]) || ":" != x2[1] && "|" != x2[1] ? (0 != x2.length && (this.o = b2.call(this, x2), x2 = ""), y2 = "relative path start") : y2 = "relative path";
                      continue;
                    } else
                      "	" == n6 || "\n" == n6 || "\r" == n6 ? N2("Invalid whitespace in file host.") : x2 += n6;
                    break;
                  case "host":
                  case "hostname":
                    if (":" != n6 || ia)
                      if (void 0 == n6 || "/" == n6 || "\\" == n6 || "?" == n6 || "#" == n6) {
                        this.o = b2.call(this, x2);
                        x2 = "";
                        y2 = "relative path start";
                        if (F)
                          break a;
                        continue;
                      } else
                        "	" != n6 && "\n" != n6 && "\r" != n6 ? ("[" == n6 ? ia = true : "]" == n6 && (ia = false), x2 += n6) : N2("Invalid code point in host/hostname: " + n6);
                    else if (this.o = b2.call(this, x2), x2 = "", y2 = "port", "hostname" == F)
                      break a;
                    break;
                  case "port":
                    if (/[0-9]/.test(n6))
                      x2 += n6;
                    else if (void 0 == n6 || "/" == n6 || "\\" == n6 || "?" == n6 || "#" == n6 || F) {
                      "" != x2 && (x2 = parseInt(x2, 10), x2 != l5[this.l] && (this.v = x2 + ""), x2 = "");
                      if (F)
                        break a;
                      y2 = "relative path start";
                      continue;
                    } else
                      "	" == n6 || "\n" == n6 || "\r" == n6 ? N2("Invalid code point in port: " + n6) : (f2.call(this), this.m = true);
                    break;
                  case "relative path start":
                    "\\" == n6 && N2("'\\' not allowed in path.");
                    y2 = "relative path";
                    if ("/" != n6 && "\\" != n6)
                      continue;
                    break;
                  case "relative path":
                    if (void 0 != n6 && "/" != n6 && "\\" != n6 && (F || "?" != n6 && "#" != n6))
                      "	" != n6 && "\n" != n6 && "\r" != n6 && (x2 += c3(n6));
                    else {
                      "\\" == n6 && N2("\\ not allowed in relative path.");
                      if (J = m2[x2.toLowerCase()])
                        x2 = J;
                      ".." == x2 ? (this.s.pop(), "/" != n6 && "\\" != n6 && this.s.push("")) : "." == x2 && "/" != n6 && "\\" != n6 ? this.s.push("") : "." != x2 && ("file" == this.l && 0 == this.s.length && 2 == x2.length && q.test(x2[0]) && "|" == x2[1] && (x2 = x2[0] + ":"), this.s.push(x2));
                      x2 = "";
                      "?" == n6 ? (this.A = "?", y2 = "query") : "#" == n6 && (this.C = "#", y2 = "fragment");
                    }
                    break;
                  case "query":
                    F || "#" != n6 ? void 0 != n6 && "	" != n6 && "\n" != n6 && "\r" != n6 && (this.A += d3(n6)) : (this.C = "#", y2 = "fragment");
                    break;
                  case "fragment":
                    void 0 != n6 && "	" != n6 && "\n" != n6 && "\r" != n6 && (this.C += n6);
                }
                X++;
              }
          }
          function f2() {
            this.B = this.ya = this.l = "";
            this.j = null;
            this.v = this.o = "";
            this.s = [];
            this.C = this.A = "";
            this.H = this.m = false;
          }
          function g2(t3, F) {
            void 0 === F || F instanceof g2 || (F = new g2(String(F)));
            this.g = t3;
            f2.call(this);
            e7.call(this, this.g.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""), null, F);
          }
          var h3 = false;
          try {
            var k2 = new URL("b", "http://a");
            k2.pathname = "c%20d";
            h3 = "http://a/c%20d" === k2.href;
          } catch (t3) {
          }
          if (!h3) {
            var l5 = /* @__PURE__ */ Object.create(null);
            l5.ftp = 21;
            l5.file = 0;
            l5.gopher = 70;
            l5.http = 80;
            l5.https = 443;
            l5.ws = 80;
            l5.wss = 443;
            var m2 = /* @__PURE__ */ Object.create(null);
            m2["%2e"] = ".";
            m2[".%2e"] = "..";
            m2["%2e."] = "..";
            m2["%2e%2e"] = "..";
            var q = /[a-zA-Z]/, H2 = /[a-zA-Z0-9+\-.]/;
            g2.prototype = { toString: function() {
              return this.href;
            }, get href() {
              if (this.m)
                return this.g;
              var t3 = "";
              if ("" != this.B || null != this.j)
                t3 = this.B + (null != this.j ? ":" + this.j : "") + "@";
              return this.protocol + (this.H ? "//" + t3 + this.host : "") + this.pathname + this.A + this.C;
            }, set href(t3) {
              f2.call(this);
              e7.call(this, t3);
            }, get protocol() {
              return this.l + ":";
            }, set protocol(t3) {
              this.m || e7.call(this, t3 + ":", "scheme start");
            }, get host() {
              return this.m ? "" : this.v ? this.o + ":" + this.v : this.o;
            }, set host(t3) {
              !this.m && this.H && e7.call(this, t3, "host");
            }, get hostname() {
              return this.o;
            }, set hostname(t3) {
              !this.m && this.H && e7.call(this, t3, "hostname");
            }, get port() {
              return this.v;
            }, set port(t3) {
              !this.m && this.H && e7.call(this, t3, "port");
            }, get pathname() {
              return this.m ? "" : this.H ? "/" + this.s.join("/") : this.ya;
            }, set pathname(t3) {
              !this.m && this.H && (this.s = [], e7.call(this, t3, "relative path start"));
            }, get search() {
              return this.m || !this.A || "?" == this.A ? "" : this.A;
            }, set search(t3) {
              !this.m && this.H && (this.A = "?", "?" == t3[0] && (t3 = t3.slice(1)), e7.call(this, t3, "query"));
            }, get hash() {
              return this.m || !this.C || "#" == this.C ? "" : this.C;
            }, set hash(t3) {
              this.m || (t3 ? (this.C = "#", "#" == t3[0] && (t3 = t3.slice(1)), e7.call(this, t3, "fragment")) : this.C = "");
            }, get origin() {
              var t3;
              if (this.m || !this.l)
                return "";
              switch (this.l) {
                case "data":
                case "file":
                case "javascript":
                case "mailto":
                  return "null";
              }
              return (t3 = this.host) ? this.l + "://" + t3 : "";
            } };
            var C2 = a3.URL;
            C2 && (g2.createObjectURL = function(t3) {
              return C2.createObjectURL.apply(
                C2,
                arguments
              );
            }, g2.revokeObjectURL = function(t3) {
              C2.revokeObjectURL(t3);
            });
            a3.URL = g2;
          }
        })(window);
        var Cj = window.customElements, Dj = false, Ej = null;
        Cj.polyfillWrapFlushCallback && Cj.polyfillWrapFlushCallback(function(a3) {
          Ej = a3;
          Dj && a3();
        });
        function Fj() {
          window.HTMLTemplateElement.bootstrap && window.HTMLTemplateElement.bootstrap(window.document);
          Ej && Ej();
          Dj = true;
          window.WebComponents.ready = true;
          document.dispatchEvent(new CustomEvent("WebComponentsReady", { bubbles: true }));
        }
        "complete" !== document.readyState ? (window.addEventListener("load", Fj), window.addEventListener("DOMContentLoaded", function() {
          window.removeEventListener("load", Fj);
          Fj();
        })) : Fj();
      }).call(exports);
    }
  });

  // src/utils/bootstrap.bundle.min.js
  var require_bootstrap_bundle_min = __commonJS({
    "src/utils/bootstrap.bundle.min.js"(exports, module) {
      !function(t3, e7) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e7() : "function" == typeof define && define.amd ? define(e7) : (t3 = "undefined" != typeof globalThis ? globalThis : t3 || self).bootstrap = e7();
      }(exports, function() {
        "use strict";
        const t3 = "transitionend", e7 = (t4) => {
          let e8 = t4.getAttribute("data-bs-target");
          if (!e8 || "#" === e8) {
            let i4 = t4.getAttribute("href");
            if (!i4 || !i4.includes("#") && !i4.startsWith("."))
              return null;
            i4.includes("#") && !i4.startsWith("#") && (i4 = `#${i4.split("#")[1]}`), e8 = i4 && "#" !== i4 ? i4.trim() : null;
          }
          return e8;
        }, i3 = (t4) => {
          const i4 = e7(t4);
          return i4 && document.querySelector(i4) ? i4 : null;
        }, n6 = (t4) => {
          const i4 = e7(t4);
          return i4 ? document.querySelector(i4) : null;
        }, s5 = (e8) => {
          e8.dispatchEvent(new Event(t3));
        }, o6 = (t4) => !(!t4 || "object" != typeof t4) && (void 0 !== t4.jquery && (t4 = t4[0]), void 0 !== t4.nodeType), r4 = (t4) => o6(t4) ? t4.jquery ? t4[0] : t4 : "string" == typeof t4 && t4.length > 0 ? document.querySelector(t4) : null, a3 = (t4) => {
          if (!o6(t4) || 0 === t4.getClientRects().length)
            return false;
          const e8 = "visible" === getComputedStyle(t4).getPropertyValue("visibility"), i4 = t4.closest("details:not([open])");
          if (!i4)
            return e8;
          if (i4 !== t4) {
            const e9 = t4.closest("summary");
            if (e9 && e9.parentNode !== i4)
              return false;
            if (null === e9)
              return false;
          }
          return e8;
        }, l5 = (t4) => !t4 || t4.nodeType !== Node.ELEMENT_NODE || !!t4.classList.contains("disabled") || (void 0 !== t4.disabled ? t4.disabled : t4.hasAttribute("disabled") && "false" !== t4.getAttribute("disabled")), c3 = (t4) => {
          if (!document.documentElement.attachShadow)
            return null;
          if ("function" == typeof t4.getRootNode) {
            const e8 = t4.getRootNode();
            return e8 instanceof ShadowRoot ? e8 : null;
          }
          return t4 instanceof ShadowRoot ? t4 : t4.parentNode ? c3(t4.parentNode) : null;
        }, h3 = () => {
        }, d3 = (t4) => {
          t4.offsetHeight;
        }, u2 = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f2 = [], p2 = () => "rtl" === document.documentElement.dir, g2 = (t4) => {
          var e8;
          e8 = () => {
            const e9 = u2();
            if (e9) {
              const i4 = t4.NAME, n7 = e9.fn[i4];
              e9.fn[i4] = t4.jQueryInterface, e9.fn[i4].Constructor = t4, e9.fn[i4].noConflict = () => (e9.fn[i4] = n7, t4.jQueryInterface);
            }
          }, "loading" === document.readyState ? (f2.length || document.addEventListener("DOMContentLoaded", () => {
            for (const t5 of f2)
              t5();
          }), f2.push(e8)) : e8();
        }, m2 = (t4) => {
          "function" == typeof t4 && t4();
        }, _2 = (e8, i4, n7 = true) => {
          if (!n7)
            return void m2(e8);
          const o7 = ((t4) => {
            if (!t4)
              return 0;
            let { transitionDuration: e9, transitionDelay: i5 } = window.getComputedStyle(t4);
            const n8 = Number.parseFloat(e9), s6 = Number.parseFloat(i5);
            return n8 || s6 ? (e9 = e9.split(",")[0], i5 = i5.split(",")[0], 1e3 * (Number.parseFloat(e9) + Number.parseFloat(i5))) : 0;
          })(i4) + 5;
          let r5 = false;
          const a4 = ({ target: n8 }) => {
            n8 === i4 && (r5 = true, i4.removeEventListener(t3, a4), m2(e8));
          };
          i4.addEventListener(t3, a4), setTimeout(() => {
            r5 || s5(i4);
          }, o7);
        }, b2 = (t4, e8, i4, n7) => {
          const s6 = t4.length;
          let o7 = t4.indexOf(e8);
          return -1 === o7 ? !i4 && n7 ? t4[s6 - 1] : t4[0] : (o7 += i4 ? 1 : -1, n7 && (o7 = (o7 + s6) % s6), t4[Math.max(0, Math.min(o7, s6 - 1))]);
        }, v2 = /[^.]*(?=\..*)\.|.*/, y2 = /\..*/, w2 = /::\d+$/, A2 = {};
        let E2 = 1;
        const T2 = { mouseenter: "mouseover", mouseleave: "mouseout" }, C2 = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function O(t4, e8) {
          return e8 && `${e8}::${E2++}` || t4.uidEvent || E2++;
        }
        function x2(t4) {
          const e8 = O(t4);
          return t4.uidEvent = e8, A2[e8] = A2[e8] || {}, A2[e8];
        }
        function k2(t4, e8, i4 = null) {
          return Object.values(t4).find((t5) => t5.callable === e8 && t5.delegationSelector === i4);
        }
        function L(t4, e8, i4) {
          const n7 = "string" == typeof e8, s6 = n7 ? i4 : e8 || i4;
          let o7 = N2(t4);
          return C2.has(o7) || (o7 = t4), [n7, s6, o7];
        }
        function D(t4, e8, i4, n7, s6) {
          if ("string" != typeof e8 || !t4)
            return;
          let [o7, r5, a4] = L(e8, i4, n7);
          if (e8 in T2) {
            const t5 = (t6) => function(e9) {
              if (!e9.relatedTarget || e9.relatedTarget !== e9.delegateTarget && !e9.delegateTarget.contains(e9.relatedTarget))
                return t6.call(this, e9);
            };
            r5 = t5(r5);
          }
          const l6 = x2(t4), c4 = l6[a4] || (l6[a4] = {}), h4 = k2(c4, r5, o7 ? i4 : null);
          if (h4)
            return void (h4.oneOff = h4.oneOff && s6);
          const d4 = O(r5, e8.replace(v2, "")), u3 = o7 ? function(t5, e9, i5) {
            return function n8(s7) {
              const o8 = t5.querySelectorAll(e9);
              for (let { target: r6 } = s7; r6 && r6 !== this; r6 = r6.parentNode)
                for (const a5 of o8)
                  if (a5 === r6)
                    return j(s7, { delegateTarget: r6 }), n8.oneOff && P2.off(t5, s7.type, e9, i5), i5.apply(r6, [s7]);
            };
          }(t4, i4, r5) : function(t5, e9) {
            return function i5(n8) {
              return j(n8, { delegateTarget: t5 }), i5.oneOff && P2.off(t5, n8.type, e9), e9.apply(t5, [n8]);
            };
          }(t4, r5);
          u3.delegationSelector = o7 ? i4 : null, u3.callable = r5, u3.oneOff = s6, u3.uidEvent = d4, c4[d4] = u3, t4.addEventListener(a4, u3, o7);
        }
        function S3(t4, e8, i4, n7, s6) {
          const o7 = k2(e8[i4], n7, s6);
          o7 && (t4.removeEventListener(i4, o7, Boolean(s6)), delete e8[i4][o7.uidEvent]);
        }
        function I2(t4, e8, i4, n7) {
          const s6 = e8[i4] || {};
          for (const o7 of Object.keys(s6))
            if (o7.includes(n7)) {
              const n8 = s6[o7];
              S3(t4, e8, i4, n8.callable, n8.delegationSelector);
            }
        }
        function N2(t4) {
          return t4 = t4.replace(y2, ""), T2[t4] || t4;
        }
        const P2 = { on(t4, e8, i4, n7) {
          D(t4, e8, i4, n7, false);
        }, one(t4, e8, i4, n7) {
          D(t4, e8, i4, n7, true);
        }, off(t4, e8, i4, n7) {
          if ("string" != typeof e8 || !t4)
            return;
          const [s6, o7, r5] = L(e8, i4, n7), a4 = r5 !== e8, l6 = x2(t4), c4 = l6[r5] || {}, h4 = e8.startsWith(".");
          if (void 0 === o7) {
            if (h4)
              for (const i5 of Object.keys(l6))
                I2(t4, l6, i5, e8.slice(1));
            for (const i5 of Object.keys(c4)) {
              const n8 = i5.replace(w2, "");
              if (!a4 || e8.includes(n8)) {
                const e9 = c4[i5];
                S3(t4, l6, r5, e9.callable, e9.delegationSelector);
              }
            }
          } else {
            if (!Object.keys(c4).length)
              return;
            S3(t4, l6, r5, o7, s6 ? i4 : null);
          }
        }, trigger(t4, e8, i4) {
          if ("string" != typeof e8 || !t4)
            return null;
          const n7 = u2();
          let s6 = null, o7 = true, r5 = true, a4 = false;
          e8 !== N2(e8) && n7 && (s6 = n7.Event(e8, i4), n7(t4).trigger(s6), o7 = !s6.isPropagationStopped(), r5 = !s6.isImmediatePropagationStopped(), a4 = s6.isDefaultPrevented());
          let l6 = new Event(e8, { bubbles: o7, cancelable: true });
          return l6 = j(l6, i4), a4 && l6.preventDefault(), r5 && t4.dispatchEvent(l6), l6.defaultPrevented && s6 && s6.preventDefault(), l6;
        } };
        function j(t4, e8) {
          for (const [i4, n7] of Object.entries(e8 || {}))
            try {
              t4[i4] = n7;
            } catch (e9) {
              Object.defineProperty(t4, i4, { configurable: true, get: () => n7 });
            }
          return t4;
        }
        const M2 = /* @__PURE__ */ new Map(), H2 = { set(t4, e8, i4) {
          M2.has(t4) || M2.set(t4, /* @__PURE__ */ new Map());
          const n7 = M2.get(t4);
          n7.has(e8) || 0 === n7.size ? n7.set(e8, i4) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n7.keys())[0]}.`);
        }, get: (t4, e8) => M2.has(t4) && M2.get(t4).get(e8) || null, remove(t4, e8) {
          if (!M2.has(t4))
            return;
          const i4 = M2.get(t4);
          i4.delete(e8), 0 === i4.size && M2.delete(t4);
        } };
        function $2(t4) {
          if ("true" === t4)
            return true;
          if ("false" === t4)
            return false;
          if (t4 === Number(t4).toString())
            return Number(t4);
          if ("" === t4 || "null" === t4)
            return null;
          if ("string" != typeof t4)
            return t4;
          try {
            return JSON.parse(decodeURIComponent(t4));
          } catch (e8) {
            return t4;
          }
        }
        function W(t4) {
          return t4.replace(/[A-Z]/g, (t5) => `-${t5.toLowerCase()}`);
        }
        const B = { setDataAttribute(t4, e8, i4) {
          t4.setAttribute(`data-bs-${W(e8)}`, i4);
        }, removeDataAttribute(t4, e8) {
          t4.removeAttribute(`data-bs-${W(e8)}`);
        }, getDataAttributes(t4) {
          if (!t4)
            return {};
          const e8 = {}, i4 = Object.keys(t4.dataset).filter((t5) => t5.startsWith("bs") && !t5.startsWith("bsConfig"));
          for (const n7 of i4) {
            let i5 = n7.replace(/^bs/, "");
            i5 = i5.charAt(0).toLowerCase() + i5.slice(1, i5.length), e8[i5] = $2(t4.dataset[n7]);
          }
          return e8;
        }, getDataAttribute: (t4, e8) => $2(t4.getAttribute(`data-bs-${W(e8)}`)) };
        class F {
          static get Default() {
            return {};
          }
          static get DefaultType() {
            return {};
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          _getConfig(t4) {
            return t4 = this._mergeConfigObj(t4), t4 = this._configAfterMerge(t4), this._typeCheckConfig(t4), t4;
          }
          _configAfterMerge(t4) {
            return t4;
          }
          _mergeConfigObj(t4, e8) {
            const i4 = o6(e8) ? B.getDataAttribute(e8, "config") : {};
            return { ...this.constructor.Default, ..."object" == typeof i4 ? i4 : {}, ...o6(e8) ? B.getDataAttributes(e8) : {}, ..."object" == typeof t4 ? t4 : {} };
          }
          _typeCheckConfig(t4, e8 = this.constructor.DefaultType) {
            for (const n7 of Object.keys(e8)) {
              const s6 = e8[n7], r5 = t4[n7], a4 = o6(r5) ? "element" : null == (i4 = r5) ? `${i4}` : Object.prototype.toString.call(i4).match(/\s([a-z]+)/i)[1].toLowerCase();
              if (!new RegExp(s6).test(a4))
                throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n7}" provided type "${a4}" but expected type "${s6}".`);
            }
            var i4;
          }
        }
        class z2 extends F {
          constructor(t4, e8) {
            super(), (t4 = r4(t4)) && (this._element = t4, this._config = this._getConfig(e8), H2.set(this._element, this.constructor.DATA_KEY, this));
          }
          dispose() {
            H2.remove(this._element, this.constructor.DATA_KEY), P2.off(this._element, this.constructor.EVENT_KEY);
            for (const t4 of Object.getOwnPropertyNames(this))
              this[t4] = null;
          }
          _queueCallback(t4, e8, i4 = true) {
            _2(t4, e8, i4);
          }
          _getConfig(t4) {
            return t4 = this._mergeConfigObj(t4, this._element), t4 = this._configAfterMerge(t4), this._typeCheckConfig(t4), t4;
          }
          static getInstance(t4) {
            return H2.get(r4(t4), this.DATA_KEY);
          }
          static getOrCreateInstance(t4, e8 = {}) {
            return this.getInstance(t4) || new this(t4, "object" == typeof e8 ? e8 : null);
          }
          static get VERSION() {
            return "5.2.3";
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
          static eventName(t4) {
            return `${t4}${this.EVENT_KEY}`;
          }
        }
        const q = (t4, e8 = "hide") => {
          const i4 = `click.dismiss${t4.EVENT_KEY}`, s6 = t4.NAME;
          P2.on(document, i4, `[data-bs-dismiss="${s6}"]`, function(i5) {
            if (["A", "AREA"].includes(this.tagName) && i5.preventDefault(), l5(this))
              return;
            const o7 = n6(this) || this.closest(`.${s6}`);
            t4.getOrCreateInstance(o7)[e8]();
          });
        };
        class R2 extends z2 {
          static get NAME() {
            return "alert";
          }
          close() {
            if (P2.trigger(this._element, "close.bs.alert").defaultPrevented)
              return;
            this._element.classList.remove("show");
            const t4 = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t4);
          }
          _destroyElement() {
            this._element.remove(), P2.trigger(this._element, "closed.bs.alert"), this.dispose();
          }
          static jQueryInterface(t4) {
            return this.each(function() {
              const e8 = R2.getOrCreateInstance(this);
              if ("string" == typeof t4) {
                if (void 0 === e8[t4] || t4.startsWith("_") || "constructor" === t4)
                  throw new TypeError(`No method named "${t4}"`);
                e8[t4](this);
              }
            });
          }
        }
        q(R2, "close"), g2(R2);
        const V2 = '[data-bs-toggle="button"]';
        class K extends z2 {
          static get NAME() {
            return "button";
          }
          toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
          }
          static jQueryInterface(t4) {
            return this.each(function() {
              const e8 = K.getOrCreateInstance(this);
              "toggle" === t4 && e8[t4]();
            });
          }
        }
        P2.on(document, "click.bs.button.data-api", V2, (t4) => {
          t4.preventDefault();
          const e8 = t4.target.closest(V2);
          K.getOrCreateInstance(e8).toggle();
        }), g2(K);
        const Q = { find: (t4, e8 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e8, t4)), findOne: (t4, e8 = document.documentElement) => Element.prototype.querySelector.call(e8, t4), children: (t4, e8) => [].concat(...t4.children).filter((t5) => t5.matches(e8)), parents(t4, e8) {
          const i4 = [];
          let n7 = t4.parentNode.closest(e8);
          for (; n7; )
            i4.push(n7), n7 = n7.parentNode.closest(e8);
          return i4;
        }, prev(t4, e8) {
          let i4 = t4.previousElementSibling;
          for (; i4; ) {
            if (i4.matches(e8))
              return [i4];
            i4 = i4.previousElementSibling;
          }
          return [];
        }, next(t4, e8) {
          let i4 = t4.nextElementSibling;
          for (; i4; ) {
            if (i4.matches(e8))
              return [i4];
            i4 = i4.nextElementSibling;
          }
          return [];
        }, focusableChildren(t4) {
          const e8 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t5) => `${t5}:not([tabindex^="-"])`).join(",");
          return this.find(e8, t4).filter((t5) => !l5(t5) && a3(t5));
        } }, X = { endCallback: null, leftCallback: null, rightCallback: null }, Y = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
        class U extends F {
          constructor(t4, e8) {
            super(), this._element = t4, t4 && U.isSupported() && (this._config = this._getConfig(e8), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
          }
          static get Default() {
            return X;
          }
          static get DefaultType() {
            return Y;
          }
          static get NAME() {
            return "swipe";
          }
          dispose() {
            P2.off(this._element, ".bs.swipe");
          }
          _start(t4) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t4) && (this._deltaX = t4.clientX) : this._deltaX = t4.touches[0].clientX;
          }
          _end(t4) {
            this._eventIsPointerPenTouch(t4) && (this._deltaX = t4.clientX - this._deltaX), this._handleSwipe(), m2(this._config.endCallback);
          }
          _move(t4) {
            this._deltaX = t4.touches && t4.touches.length > 1 ? 0 : t4.touches[0].clientX - this._deltaX;
          }
          _handleSwipe() {
            const t4 = Math.abs(this._deltaX);
            if (t4 <= 40)
              return;
            const e8 = t4 / this._deltaX;
            this._deltaX = 0, e8 && m2(e8 > 0 ? this._config.rightCallback : this._config.leftCallback);
          }
          _initEvents() {
            this._supportPointerEvents ? (P2.on(this._element, "pointerdown.bs.swipe", (t4) => this._start(t4)), P2.on(this._element, "pointerup.bs.swipe", (t4) => this._end(t4)), this._element.classList.add("pointer-event")) : (P2.on(this._element, "touchstart.bs.swipe", (t4) => this._start(t4)), P2.on(this._element, "touchmove.bs.swipe", (t4) => this._move(t4)), P2.on(this._element, "touchend.bs.swipe", (t4) => this._end(t4)));
          }
          _eventIsPointerPenTouch(t4) {
            return this._supportPointerEvents && ("pen" === t4.pointerType || "touch" === t4.pointerType);
          }
          static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
          }
        }
        const G = "next", J = "prev", Z2 = "left", tt = "right", et = "slid.bs.carousel", it = "carousel", nt = "active", st = { ArrowLeft: tt, ArrowRight: Z2 }, ot = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, rt = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
        class at extends z2 {
          constructor(t4, e8) {
            super(t4, e8), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Q.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === it && this.cycle();
          }
          static get Default() {
            return ot;
          }
          static get DefaultType() {
            return rt;
          }
          static get NAME() {
            return "carousel";
          }
          next() {
            this._slide(G);
          }
          nextWhenVisible() {
            !document.hidden && a3(this._element) && this.next();
          }
          prev() {
            this._slide(J);
          }
          pause() {
            this._isSliding && s5(this._element), this._clearInterval();
          }
          cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
          }
          _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? P2.one(this._element, et, () => this.cycle()) : this.cycle());
          }
          to(t4) {
            const e8 = this._getItems();
            if (t4 > e8.length - 1 || t4 < 0)
              return;
            if (this._isSliding)
              return void P2.one(this._element, et, () => this.to(t4));
            const i4 = this._getItemIndex(this._getActive());
            if (i4 === t4)
              return;
            const n7 = t4 > i4 ? G : J;
            this._slide(n7, e8[t4]);
          }
          dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
          }
          _configAfterMerge(t4) {
            return t4.defaultInterval = t4.interval, t4;
          }
          _addEventListeners() {
            this._config.keyboard && P2.on(this._element, "keydown.bs.carousel", (t4) => this._keydown(t4)), "hover" === this._config.pause && (P2.on(this._element, "mouseenter.bs.carousel", () => this.pause()), P2.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())), this._config.touch && U.isSupported() && this._addTouchEventListeners();
          }
          _addTouchEventListeners() {
            for (const t5 of Q.find(".carousel-item img", this._element))
              P2.on(t5, "dragstart.bs.carousel", (t6) => t6.preventDefault());
            const t4 = { leftCallback: () => this._slide(this._directionToOrder(Z2)), rightCallback: () => this._slide(this._directionToOrder(tt)), endCallback: () => {
              "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
            } };
            this._swipeHelper = new U(this._element, t4);
          }
          _keydown(t4) {
            if (/input|textarea/i.test(t4.target.tagName))
              return;
            const e8 = st[t4.key];
            e8 && (t4.preventDefault(), this._slide(this._directionToOrder(e8)));
          }
          _getItemIndex(t4) {
            return this._getItems().indexOf(t4);
          }
          _setActiveIndicatorElement(t4) {
            if (!this._indicatorsElement)
              return;
            const e8 = Q.findOne(".active", this._indicatorsElement);
            e8.classList.remove(nt), e8.removeAttribute("aria-current");
            const i4 = Q.findOne(`[data-bs-slide-to="${t4}"]`, this._indicatorsElement);
            i4 && (i4.classList.add(nt), i4.setAttribute("aria-current", "true"));
          }
          _updateInterval() {
            const t4 = this._activeElement || this._getActive();
            if (!t4)
              return;
            const e8 = Number.parseInt(t4.getAttribute("data-bs-interval"), 10);
            this._config.interval = e8 || this._config.defaultInterval;
          }
          _slide(t4, e8 = null) {
            if (this._isSliding)
              return;
            const i4 = this._getActive(), n7 = t4 === G, s6 = e8 || b2(this._getItems(), i4, n7, this._config.wrap);
            if (s6 === i4)
              return;
            const o7 = this._getItemIndex(s6), r5 = (e9) => P2.trigger(this._element, e9, { relatedTarget: s6, direction: this._orderToDirection(t4), from: this._getItemIndex(i4), to: o7 });
            if (r5("slide.bs.carousel").defaultPrevented)
              return;
            if (!i4 || !s6)
              return;
            const a4 = Boolean(this._interval);
            this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o7), this._activeElement = s6;
            const l6 = n7 ? "carousel-item-start" : "carousel-item-end", c4 = n7 ? "carousel-item-next" : "carousel-item-prev";
            s6.classList.add(c4), d3(s6), i4.classList.add(l6), s6.classList.add(l6), this._queueCallback(() => {
              s6.classList.remove(l6, c4), s6.classList.add(nt), i4.classList.remove(nt, c4, l6), this._isSliding = false, r5(et);
            }, i4, this._isAnimated()), a4 && this.cycle();
          }
          _isAnimated() {
            return this._element.classList.contains("slide");
          }
          _getActive() {
            return Q.findOne(".active.carousel-item", this._element);
          }
          _getItems() {
            return Q.find(".carousel-item", this._element);
          }
          _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null);
          }
          _directionToOrder(t4) {
            return p2() ? t4 === Z2 ? J : G : t4 === Z2 ? G : J;
          }
          _orderToDirection(t4) {
            return p2() ? t4 === J ? Z2 : tt : t4 === J ? tt : Z2;
          }
          static jQueryInterface(t4) {
            return this.each(function() {
              const e8 = at.getOrCreateInstance(this, t4);
              if ("number" != typeof t4) {
                if ("string" == typeof t4) {
                  if (void 0 === e8[t4] || t4.startsWith("_") || "constructor" === t4)
                    throw new TypeError(`No method named "${t4}"`);
                  e8[t4]();
                }
              } else
                e8.to(t4);
            });
          }
        }
        P2.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(t4) {
          const e8 = n6(this);
          if (!e8 || !e8.classList.contains(it))
            return;
          t4.preventDefault();
          const i4 = at.getOrCreateInstance(e8), s6 = this.getAttribute("data-bs-slide-to");
          return s6 ? (i4.to(s6), void i4._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i4.next(), void i4._maybeEnableCycle()) : (i4.prev(), void i4._maybeEnableCycle());
        }), P2.on(window, "load.bs.carousel.data-api", () => {
          const t4 = Q.find('[data-bs-ride="carousel"]');
          for (const e8 of t4)
            at.getOrCreateInstance(e8);
        }), g2(at);
        const lt = "show", ct = "collapse", ht = "collapsing", dt = '[data-bs-toggle="collapse"]', ut = { parent: null, toggle: true }, ft = { parent: "(null|element)", toggle: "boolean" };
        class pt extends z2 {
          constructor(t4, e8) {
            super(t4, e8), this._isTransitioning = false, this._triggerArray = [];
            const n7 = Q.find(dt);
            for (const t5 of n7) {
              const e9 = i3(t5), n8 = Q.find(e9).filter((t6) => t6 === this._element);
              null !== e9 && n8.length && this._triggerArray.push(t5);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
          }
          static get Default() {
            return ut;
          }
          static get DefaultType() {
            return ft;
          }
          static get NAME() {
            return "collapse";
          }
          toggle() {
            this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (this._isTransitioning || this._isShown())
              return;
            let t4 = [];
            if (this._config.parent && (t4 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t5) => t5 !== this._element).map((t5) => pt.getOrCreateInstance(t5, { toggle: false }))), t4.length && t4[0]._isTransitioning)
              return;
            if (P2.trigger(this._element, "show.bs.collapse").defaultPrevented)
              return;
            for (const e9 of t4)
              e9.hide();
            const e8 = this._getDimension();
            this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[e8] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
            const i4 = `scroll${e8[0].toUpperCase() + e8.slice(1)}`;
            this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove(ht), this._element.classList.add(ct, lt), this._element.style[e8] = "", P2.trigger(this._element, "shown.bs.collapse");
            }, this._element, true), this._element.style[e8] = `${this._element[i4]}px`;
          }
          hide() {
            if (this._isTransitioning || !this._isShown())
              return;
            if (P2.trigger(this._element, "hide.bs.collapse").defaultPrevented)
              return;
            const t4 = this._getDimension();
            this._element.style[t4] = `${this._element.getBoundingClientRect()[t4]}px`, d3(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
            for (const t5 of this._triggerArray) {
              const e8 = n6(t5);
              e8 && !this._isShown(e8) && this._addAriaAndCollapsedClass([t5], false);
            }
            this._isTransitioning = true, this._element.style[t4] = "", this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove(ht), this._element.classList.add(ct), P2.trigger(this._element, "hidden.bs.collapse");
            }, this._element, true);
          }
          _isShown(t4 = this._element) {
            return t4.classList.contains(lt);
          }
          _configAfterMerge(t4) {
            return t4.toggle = Boolean(t4.toggle), t4.parent = r4(t4.parent), t4;
          }
          _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
          }
          _initializeChildren() {
            if (!this._config.parent)
              return;
            const t4 = this._getFirstLevelChildren(dt);
            for (const e8 of t4) {
              const t5 = n6(e8);
              t5 && this._addAriaAndCollapsedClass([e8], this._isShown(t5));
            }
          }
          _getFirstLevelChildren(t4) {
            const e8 = Q.find(":scope .collapse .collapse", this._config.parent);
            return Q.find(t4, this._config.parent).filter((t5) => !e8.includes(t5));
          }
          _addAriaAndCollapsedClass(t4, e8) {
            if (t4.length)
              for (const i4 of t4)
                i4.classList.toggle("collapsed", !e8), i4.setAttribute("aria-expanded", e8);
          }
          static jQueryInterface(t4) {
            const e8 = {};
            return "string" == typeof t4 && /show|hide/.test(t4) && (e8.toggle = false), this.each(function() {
              const i4 = pt.getOrCreateInstance(this, e8);
              if ("string" == typeof t4) {
                if (void 0 === i4[t4])
                  throw new TypeError(`No method named "${t4}"`);
                i4[t4]();
              }
            });
          }
        }
        P2.on(document, "click.bs.collapse.data-api", dt, function(t4) {
          ("A" === t4.target.tagName || t4.delegateTarget && "A" === t4.delegateTarget.tagName) && t4.preventDefault();
          const e8 = i3(this), n7 = Q.find(e8);
          for (const t5 of n7)
            pt.getOrCreateInstance(t5, { toggle: false }).toggle();
        }), g2(pt);
        var gt = "top", mt = "bottom", _t = "right", bt = "left", vt = "auto", yt = [gt, mt, _t, bt], wt = "start", At = "end", Et = "clippingParents", Tt = "viewport", Ct = "popper", Ot = "reference", xt = yt.reduce(function(t4, e8) {
          return t4.concat([e8 + "-" + wt, e8 + "-" + At]);
        }, []), kt = [].concat(yt, [vt]).reduce(function(t4, e8) {
          return t4.concat([e8, e8 + "-" + wt, e8 + "-" + At]);
        }, []), Lt = "beforeRead", Dt = "read", St = "afterRead", It = "beforeMain", Nt = "main", Pt = "afterMain", jt = "beforeWrite", Mt = "write", Ht = "afterWrite", $t = [Lt, Dt, St, It, Nt, Pt, jt, Mt, Ht];
        function Wt(t4) {
          return t4 ? (t4.nodeName || "").toLowerCase() : null;
        }
        function Bt(t4) {
          if (null == t4)
            return window;
          if ("[object Window]" !== t4.toString()) {
            var e8 = t4.ownerDocument;
            return e8 && e8.defaultView || window;
          }
          return t4;
        }
        function Ft(t4) {
          return t4 instanceof Bt(t4).Element || t4 instanceof Element;
        }
        function zt(t4) {
          return t4 instanceof Bt(t4).HTMLElement || t4 instanceof HTMLElement;
        }
        function qt(t4) {
          return "undefined" != typeof ShadowRoot && (t4 instanceof Bt(t4).ShadowRoot || t4 instanceof ShadowRoot);
        }
        const Rt = { name: "applyStyles", enabled: true, phase: "write", fn: function(t4) {
          var e8 = t4.state;
          Object.keys(e8.elements).forEach(function(t5) {
            var i4 = e8.styles[t5] || {}, n7 = e8.attributes[t5] || {}, s6 = e8.elements[t5];
            zt(s6) && Wt(s6) && (Object.assign(s6.style, i4), Object.keys(n7).forEach(function(t6) {
              var e9 = n7[t6];
              false === e9 ? s6.removeAttribute(t6) : s6.setAttribute(t6, true === e9 ? "" : e9);
            }));
          });
        }, effect: function(t4) {
          var e8 = t4.state, i4 = { popper: { position: e8.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
          return Object.assign(e8.elements.popper.style, i4.popper), e8.styles = i4, e8.elements.arrow && Object.assign(e8.elements.arrow.style, i4.arrow), function() {
            Object.keys(e8.elements).forEach(function(t5) {
              var n7 = e8.elements[t5], s6 = e8.attributes[t5] || {}, o7 = Object.keys(e8.styles.hasOwnProperty(t5) ? e8.styles[t5] : i4[t5]).reduce(function(t6, e9) {
                return t6[e9] = "", t6;
              }, {});
              zt(n7) && Wt(n7) && (Object.assign(n7.style, o7), Object.keys(s6).forEach(function(t6) {
                n7.removeAttribute(t6);
              }));
            });
          };
        }, requires: ["computeStyles"] };
        function Vt(t4) {
          return t4.split("-")[0];
        }
        var Kt = Math.max, Qt = Math.min, Xt = Math.round;
        function Yt() {
          var t4 = navigator.userAgentData;
          return null != t4 && t4.brands ? t4.brands.map(function(t5) {
            return t5.brand + "/" + t5.version;
          }).join(" ") : navigator.userAgent;
        }
        function Ut() {
          return !/^((?!chrome|android).)*safari/i.test(Yt());
        }
        function Gt(t4, e8, i4) {
          void 0 === e8 && (e8 = false), void 0 === i4 && (i4 = false);
          var n7 = t4.getBoundingClientRect(), s6 = 1, o7 = 1;
          e8 && zt(t4) && (s6 = t4.offsetWidth > 0 && Xt(n7.width) / t4.offsetWidth || 1, o7 = t4.offsetHeight > 0 && Xt(n7.height) / t4.offsetHeight || 1);
          var r5 = (Ft(t4) ? Bt(t4) : window).visualViewport, a4 = !Ut() && i4, l6 = (n7.left + (a4 && r5 ? r5.offsetLeft : 0)) / s6, c4 = (n7.top + (a4 && r5 ? r5.offsetTop : 0)) / o7, h4 = n7.width / s6, d4 = n7.height / o7;
          return { width: h4, height: d4, top: c4, right: l6 + h4, bottom: c4 + d4, left: l6, x: l6, y: c4 };
        }
        function Jt(t4) {
          var e8 = Gt(t4), i4 = t4.offsetWidth, n7 = t4.offsetHeight;
          return Math.abs(e8.width - i4) <= 1 && (i4 = e8.width), Math.abs(e8.height - n7) <= 1 && (n7 = e8.height), { x: t4.offsetLeft, y: t4.offsetTop, width: i4, height: n7 };
        }
        function Zt(t4, e8) {
          var i4 = e8.getRootNode && e8.getRootNode();
          if (t4.contains(e8))
            return true;
          if (i4 && qt(i4)) {
            var n7 = e8;
            do {
              if (n7 && t4.isSameNode(n7))
                return true;
              n7 = n7.parentNode || n7.host;
            } while (n7);
          }
          return false;
        }
        function te(t4) {
          return Bt(t4).getComputedStyle(t4);
        }
        function ee(t4) {
          return ["table", "td", "th"].indexOf(Wt(t4)) >= 0;
        }
        function ie(t4) {
          return ((Ft(t4) ? t4.ownerDocument : t4.document) || window.document).documentElement;
        }
        function ne(t4) {
          return "html" === Wt(t4) ? t4 : t4.assignedSlot || t4.parentNode || (qt(t4) ? t4.host : null) || ie(t4);
        }
        function se(t4) {
          return zt(t4) && "fixed" !== te(t4).position ? t4.offsetParent : null;
        }
        function oe(t4) {
          for (var e8 = Bt(t4), i4 = se(t4); i4 && ee(i4) && "static" === te(i4).position; )
            i4 = se(i4);
          return i4 && ("html" === Wt(i4) || "body" === Wt(i4) && "static" === te(i4).position) ? e8 : i4 || function(t5) {
            var e9 = /firefox/i.test(Yt());
            if (/Trident/i.test(Yt()) && zt(t5) && "fixed" === te(t5).position)
              return null;
            var i5 = ne(t5);
            for (qt(i5) && (i5 = i5.host); zt(i5) && ["html", "body"].indexOf(Wt(i5)) < 0; ) {
              var n7 = te(i5);
              if ("none" !== n7.transform || "none" !== n7.perspective || "paint" === n7.contain || -1 !== ["transform", "perspective"].indexOf(n7.willChange) || e9 && "filter" === n7.willChange || e9 && n7.filter && "none" !== n7.filter)
                return i5;
              i5 = i5.parentNode;
            }
            return null;
          }(t4) || e8;
        }
        function re(t4) {
          return ["top", "bottom"].indexOf(t4) >= 0 ? "x" : "y";
        }
        function ae(t4, e8, i4) {
          return Kt(t4, Qt(e8, i4));
        }
        function le(t4) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t4);
        }
        function ce(t4, e8) {
          return e8.reduce(function(e9, i4) {
            return e9[i4] = t4, e9;
          }, {});
        }
        const he = { name: "arrow", enabled: true, phase: "main", fn: function(t4) {
          var e8, i4 = t4.state, n7 = t4.name, s6 = t4.options, o7 = i4.elements.arrow, r5 = i4.modifiersData.popperOffsets, a4 = Vt(i4.placement), l6 = re(a4), c4 = [bt, _t].indexOf(a4) >= 0 ? "height" : "width";
          if (o7 && r5) {
            var h4 = function(t5, e9) {
              return le("number" != typeof (t5 = "function" == typeof t5 ? t5(Object.assign({}, e9.rects, { placement: e9.placement })) : t5) ? t5 : ce(t5, yt));
            }(s6.padding, i4), d4 = Jt(o7), u3 = "y" === l6 ? gt : bt, f3 = "y" === l6 ? mt : _t, p3 = i4.rects.reference[c4] + i4.rects.reference[l6] - r5[l6] - i4.rects.popper[c4], g3 = r5[l6] - i4.rects.reference[l6], m3 = oe(o7), _3 = m3 ? "y" === l6 ? m3.clientHeight || 0 : m3.clientWidth || 0 : 0, b3 = p3 / 2 - g3 / 2, v3 = h4[u3], y3 = _3 - d4[c4] - h4[f3], w3 = _3 / 2 - d4[c4] / 2 + b3, A3 = ae(v3, w3, y3), E3 = l6;
            i4.modifiersData[n7] = ((e8 = {})[E3] = A3, e8.centerOffset = A3 - w3, e8);
          }
        }, effect: function(t4) {
          var e8 = t4.state, i4 = t4.options.element, n7 = void 0 === i4 ? "[data-popper-arrow]" : i4;
          null != n7 && ("string" != typeof n7 || (n7 = e8.elements.popper.querySelector(n7))) && Zt(e8.elements.popper, n7) && (e8.elements.arrow = n7);
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
        function de(t4) {
          return t4.split("-")[1];
        }
        var ue = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function fe(t4) {
          var e8, i4 = t4.popper, n7 = t4.popperRect, s6 = t4.placement, o7 = t4.variation, r5 = t4.offsets, a4 = t4.position, l6 = t4.gpuAcceleration, c4 = t4.adaptive, h4 = t4.roundOffsets, d4 = t4.isFixed, u3 = r5.x, f3 = void 0 === u3 ? 0 : u3, p3 = r5.y, g3 = void 0 === p3 ? 0 : p3, m3 = "function" == typeof h4 ? h4({ x: f3, y: g3 }) : { x: f3, y: g3 };
          f3 = m3.x, g3 = m3.y;
          var _3 = r5.hasOwnProperty("x"), b3 = r5.hasOwnProperty("y"), v3 = bt, y3 = gt, w3 = window;
          if (c4) {
            var A3 = oe(i4), E3 = "clientHeight", T3 = "clientWidth";
            A3 === Bt(i4) && "static" !== te(A3 = ie(i4)).position && "absolute" === a4 && (E3 = "scrollHeight", T3 = "scrollWidth"), (s6 === gt || (s6 === bt || s6 === _t) && o7 === At) && (y3 = mt, g3 -= (d4 && A3 === w3 && w3.visualViewport ? w3.visualViewport.height : A3[E3]) - n7.height, g3 *= l6 ? 1 : -1), s6 !== bt && (s6 !== gt && s6 !== mt || o7 !== At) || (v3 = _t, f3 -= (d4 && A3 === w3 && w3.visualViewport ? w3.visualViewport.width : A3[T3]) - n7.width, f3 *= l6 ? 1 : -1);
          }
          var C3, O2 = Object.assign({ position: a4 }, c4 && ue), x3 = true === h4 ? function(t5) {
            var e9 = t5.x, i5 = t5.y, n8 = window.devicePixelRatio || 1;
            return { x: Xt(e9 * n8) / n8 || 0, y: Xt(i5 * n8) / n8 || 0 };
          }({ x: f3, y: g3 }) : { x: f3, y: g3 };
          return f3 = x3.x, g3 = x3.y, l6 ? Object.assign({}, O2, ((C3 = {})[y3] = b3 ? "0" : "", C3[v3] = _3 ? "0" : "", C3.transform = (w3.devicePixelRatio || 1) <= 1 ? "translate(" + f3 + "px, " + g3 + "px)" : "translate3d(" + f3 + "px, " + g3 + "px, 0)", C3)) : Object.assign({}, O2, ((e8 = {})[y3] = b3 ? g3 + "px" : "", e8[v3] = _3 ? f3 + "px" : "", e8.transform = "", e8));
        }
        const pe = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t4) {
          var e8 = t4.state, i4 = t4.options, n7 = i4.gpuAcceleration, s6 = void 0 === n7 || n7, o7 = i4.adaptive, r5 = void 0 === o7 || o7, a4 = i4.roundOffsets, l6 = void 0 === a4 || a4, c4 = { placement: Vt(e8.placement), variation: de(e8.placement), popper: e8.elements.popper, popperRect: e8.rects.popper, gpuAcceleration: s6, isFixed: "fixed" === e8.options.strategy };
          null != e8.modifiersData.popperOffsets && (e8.styles.popper = Object.assign({}, e8.styles.popper, fe(Object.assign({}, c4, { offsets: e8.modifiersData.popperOffsets, position: e8.options.strategy, adaptive: r5, roundOffsets: l6 })))), null != e8.modifiersData.arrow && (e8.styles.arrow = Object.assign({}, e8.styles.arrow, fe(Object.assign({}, c4, { offsets: e8.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l6 })))), e8.attributes.popper = Object.assign({}, e8.attributes.popper, { "data-popper-placement": e8.placement });
        }, data: {} };
        var ge = { passive: true };
        const me = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
        }, effect: function(t4) {
          var e8 = t4.state, i4 = t4.instance, n7 = t4.options, s6 = n7.scroll, o7 = void 0 === s6 || s6, r5 = n7.resize, a4 = void 0 === r5 || r5, l6 = Bt(e8.elements.popper), c4 = [].concat(e8.scrollParents.reference, e8.scrollParents.popper);
          return o7 && c4.forEach(function(t5) {
            t5.addEventListener("scroll", i4.update, ge);
          }), a4 && l6.addEventListener("resize", i4.update, ge), function() {
            o7 && c4.forEach(function(t5) {
              t5.removeEventListener("scroll", i4.update, ge);
            }), a4 && l6.removeEventListener("resize", i4.update, ge);
          };
        }, data: {} };
        var _e = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function be(t4) {
          return t4.replace(/left|right|bottom|top/g, function(t5) {
            return _e[t5];
          });
        }
        var ve = { start: "end", end: "start" };
        function ye(t4) {
          return t4.replace(/start|end/g, function(t5) {
            return ve[t5];
          });
        }
        function we(t4) {
          var e8 = Bt(t4);
          return { scrollLeft: e8.pageXOffset, scrollTop: e8.pageYOffset };
        }
        function Ae(t4) {
          return Gt(ie(t4)).left + we(t4).scrollLeft;
        }
        function Ee(t4) {
          var e8 = te(t4), i4 = e8.overflow, n7 = e8.overflowX, s6 = e8.overflowY;
          return /auto|scroll|overlay|hidden/.test(i4 + s6 + n7);
        }
        function Te(t4) {
          return ["html", "body", "#document"].indexOf(Wt(t4)) >= 0 ? t4.ownerDocument.body : zt(t4) && Ee(t4) ? t4 : Te(ne(t4));
        }
        function Ce(t4, e8) {
          var i4;
          void 0 === e8 && (e8 = []);
          var n7 = Te(t4), s6 = n7 === (null == (i4 = t4.ownerDocument) ? void 0 : i4.body), o7 = Bt(n7), r5 = s6 ? [o7].concat(o7.visualViewport || [], Ee(n7) ? n7 : []) : n7, a4 = e8.concat(r5);
          return s6 ? a4 : a4.concat(Ce(ne(r5)));
        }
        function Oe(t4) {
          return Object.assign({}, t4, { left: t4.x, top: t4.y, right: t4.x + t4.width, bottom: t4.y + t4.height });
        }
        function xe(t4, e8, i4) {
          return e8 === Tt ? Oe(function(t5, e9) {
            var i5 = Bt(t5), n7 = ie(t5), s6 = i5.visualViewport, o7 = n7.clientWidth, r5 = n7.clientHeight, a4 = 0, l6 = 0;
            if (s6) {
              o7 = s6.width, r5 = s6.height;
              var c4 = Ut();
              (c4 || !c4 && "fixed" === e9) && (a4 = s6.offsetLeft, l6 = s6.offsetTop);
            }
            return { width: o7, height: r5, x: a4 + Ae(t5), y: l6 };
          }(t4, i4)) : Ft(e8) ? function(t5, e9) {
            var i5 = Gt(t5, false, "fixed" === e9);
            return i5.top = i5.top + t5.clientTop, i5.left = i5.left + t5.clientLeft, i5.bottom = i5.top + t5.clientHeight, i5.right = i5.left + t5.clientWidth, i5.width = t5.clientWidth, i5.height = t5.clientHeight, i5.x = i5.left, i5.y = i5.top, i5;
          }(e8, i4) : Oe(function(t5) {
            var e9, i5 = ie(t5), n7 = we(t5), s6 = null == (e9 = t5.ownerDocument) ? void 0 : e9.body, o7 = Kt(i5.scrollWidth, i5.clientWidth, s6 ? s6.scrollWidth : 0, s6 ? s6.clientWidth : 0), r5 = Kt(i5.scrollHeight, i5.clientHeight, s6 ? s6.scrollHeight : 0, s6 ? s6.clientHeight : 0), a4 = -n7.scrollLeft + Ae(t5), l6 = -n7.scrollTop;
            return "rtl" === te(s6 || i5).direction && (a4 += Kt(i5.clientWidth, s6 ? s6.clientWidth : 0) - o7), { width: o7, height: r5, x: a4, y: l6 };
          }(ie(t4)));
        }
        function ke(t4) {
          var e8, i4 = t4.reference, n7 = t4.element, s6 = t4.placement, o7 = s6 ? Vt(s6) : null, r5 = s6 ? de(s6) : null, a4 = i4.x + i4.width / 2 - n7.width / 2, l6 = i4.y + i4.height / 2 - n7.height / 2;
          switch (o7) {
            case gt:
              e8 = { x: a4, y: i4.y - n7.height };
              break;
            case mt:
              e8 = { x: a4, y: i4.y + i4.height };
              break;
            case _t:
              e8 = { x: i4.x + i4.width, y: l6 };
              break;
            case bt:
              e8 = { x: i4.x - n7.width, y: l6 };
              break;
            default:
              e8 = { x: i4.x, y: i4.y };
          }
          var c4 = o7 ? re(o7) : null;
          if (null != c4) {
            var h4 = "y" === c4 ? "height" : "width";
            switch (r5) {
              case wt:
                e8[c4] = e8[c4] - (i4[h4] / 2 - n7[h4] / 2);
                break;
              case At:
                e8[c4] = e8[c4] + (i4[h4] / 2 - n7[h4] / 2);
            }
          }
          return e8;
        }
        function Le(t4, e8) {
          void 0 === e8 && (e8 = {});
          var i4 = e8, n7 = i4.placement, s6 = void 0 === n7 ? t4.placement : n7, o7 = i4.strategy, r5 = void 0 === o7 ? t4.strategy : o7, a4 = i4.boundary, l6 = void 0 === a4 ? Et : a4, c4 = i4.rootBoundary, h4 = void 0 === c4 ? Tt : c4, d4 = i4.elementContext, u3 = void 0 === d4 ? Ct : d4, f3 = i4.altBoundary, p3 = void 0 !== f3 && f3, g3 = i4.padding, m3 = void 0 === g3 ? 0 : g3, _3 = le("number" != typeof m3 ? m3 : ce(m3, yt)), b3 = u3 === Ct ? Ot : Ct, v3 = t4.rects.popper, y3 = t4.elements[p3 ? b3 : u3], w3 = function(t5, e9, i5, n8) {
            var s7 = "clippingParents" === e9 ? function(t6) {
              var e10 = Ce(ne(t6)), i6 = ["absolute", "fixed"].indexOf(te(t6).position) >= 0 && zt(t6) ? oe(t6) : t6;
              return Ft(i6) ? e10.filter(function(t7) {
                return Ft(t7) && Zt(t7, i6) && "body" !== Wt(t7);
              }) : [];
            }(t5) : [].concat(e9), o8 = [].concat(s7, [i5]), r6 = o8[0], a5 = o8.reduce(function(e10, i6) {
              var s8 = xe(t5, i6, n8);
              return e10.top = Kt(s8.top, e10.top), e10.right = Qt(s8.right, e10.right), e10.bottom = Qt(s8.bottom, e10.bottom), e10.left = Kt(s8.left, e10.left), e10;
            }, xe(t5, r6, n8));
            return a5.width = a5.right - a5.left, a5.height = a5.bottom - a5.top, a5.x = a5.left, a5.y = a5.top, a5;
          }(Ft(y3) ? y3 : y3.contextElement || ie(t4.elements.popper), l6, h4, r5), A3 = Gt(t4.elements.reference), E3 = ke({ reference: A3, element: v3, strategy: "absolute", placement: s6 }), T3 = Oe(Object.assign({}, v3, E3)), C3 = u3 === Ct ? T3 : A3, O2 = { top: w3.top - C3.top + _3.top, bottom: C3.bottom - w3.bottom + _3.bottom, left: w3.left - C3.left + _3.left, right: C3.right - w3.right + _3.right }, x3 = t4.modifiersData.offset;
          if (u3 === Ct && x3) {
            var k3 = x3[s6];
            Object.keys(O2).forEach(function(t5) {
              var e9 = [_t, mt].indexOf(t5) >= 0 ? 1 : -1, i5 = [gt, mt].indexOf(t5) >= 0 ? "y" : "x";
              O2[t5] += k3[i5] * e9;
            });
          }
          return O2;
        }
        function De(t4, e8) {
          void 0 === e8 && (e8 = {});
          var i4 = e8, n7 = i4.placement, s6 = i4.boundary, o7 = i4.rootBoundary, r5 = i4.padding, a4 = i4.flipVariations, l6 = i4.allowedAutoPlacements, c4 = void 0 === l6 ? kt : l6, h4 = de(n7), d4 = h4 ? a4 ? xt : xt.filter(function(t5) {
            return de(t5) === h4;
          }) : yt, u3 = d4.filter(function(t5) {
            return c4.indexOf(t5) >= 0;
          });
          0 === u3.length && (u3 = d4);
          var f3 = u3.reduce(function(e9, i5) {
            return e9[i5] = Le(t4, { placement: i5, boundary: s6, rootBoundary: o7, padding: r5 })[Vt(i5)], e9;
          }, {});
          return Object.keys(f3).sort(function(t5, e9) {
            return f3[t5] - f3[e9];
          });
        }
        const Se = { name: "flip", enabled: true, phase: "main", fn: function(t4) {
          var e8 = t4.state, i4 = t4.options, n7 = t4.name;
          if (!e8.modifiersData[n7]._skip) {
            for (var s6 = i4.mainAxis, o7 = void 0 === s6 || s6, r5 = i4.altAxis, a4 = void 0 === r5 || r5, l6 = i4.fallbackPlacements, c4 = i4.padding, h4 = i4.boundary, d4 = i4.rootBoundary, u3 = i4.altBoundary, f3 = i4.flipVariations, p3 = void 0 === f3 || f3, g3 = i4.allowedAutoPlacements, m3 = e8.options.placement, _3 = Vt(m3), b3 = l6 || (_3 !== m3 && p3 ? function(t5) {
              if (Vt(t5) === vt)
                return [];
              var e9 = be(t5);
              return [ye(t5), e9, ye(e9)];
            }(m3) : [be(m3)]), v3 = [m3].concat(b3).reduce(function(t5, i5) {
              return t5.concat(Vt(i5) === vt ? De(e8, { placement: i5, boundary: h4, rootBoundary: d4, padding: c4, flipVariations: p3, allowedAutoPlacements: g3 }) : i5);
            }, []), y3 = e8.rects.reference, w3 = e8.rects.popper, A3 = /* @__PURE__ */ new Map(), E3 = true, T3 = v3[0], C3 = 0; C3 < v3.length; C3++) {
              var O2 = v3[C3], x3 = Vt(O2), k3 = de(O2) === wt, L2 = [gt, mt].indexOf(x3) >= 0, D2 = L2 ? "width" : "height", S4 = Le(e8, { placement: O2, boundary: h4, rootBoundary: d4, altBoundary: u3, padding: c4 }), I3 = L2 ? k3 ? _t : bt : k3 ? mt : gt;
              y3[D2] > w3[D2] && (I3 = be(I3));
              var N3 = be(I3), P3 = [];
              if (o7 && P3.push(S4[x3] <= 0), a4 && P3.push(S4[I3] <= 0, S4[N3] <= 0), P3.every(function(t5) {
                return t5;
              })) {
                T3 = O2, E3 = false;
                break;
              }
              A3.set(O2, P3);
            }
            if (E3)
              for (var j2 = function(t5) {
                var e9 = v3.find(function(e10) {
                  var i5 = A3.get(e10);
                  if (i5)
                    return i5.slice(0, t5).every(function(t6) {
                      return t6;
                    });
                });
                if (e9)
                  return T3 = e9, "break";
              }, M3 = p3 ? 3 : 1; M3 > 0 && "break" !== j2(M3); M3--)
                ;
            e8.placement !== T3 && (e8.modifiersData[n7]._skip = true, e8.placement = T3, e8.reset = true);
          }
        }, requiresIfExists: ["offset"], data: { _skip: false } };
        function Ie(t4, e8, i4) {
          return void 0 === i4 && (i4 = { x: 0, y: 0 }), { top: t4.top - e8.height - i4.y, right: t4.right - e8.width + i4.x, bottom: t4.bottom - e8.height + i4.y, left: t4.left - e8.width - i4.x };
        }
        function Ne(t4) {
          return [gt, _t, mt, bt].some(function(e8) {
            return t4[e8] >= 0;
          });
        }
        const Pe = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t4) {
          var e8 = t4.state, i4 = t4.name, n7 = e8.rects.reference, s6 = e8.rects.popper, o7 = e8.modifiersData.preventOverflow, r5 = Le(e8, { elementContext: "reference" }), a4 = Le(e8, { altBoundary: true }), l6 = Ie(r5, n7), c4 = Ie(a4, s6, o7), h4 = Ne(l6), d4 = Ne(c4);
          e8.modifiersData[i4] = { referenceClippingOffsets: l6, popperEscapeOffsets: c4, isReferenceHidden: h4, hasPopperEscaped: d4 }, e8.attributes.popper = Object.assign({}, e8.attributes.popper, { "data-popper-reference-hidden": h4, "data-popper-escaped": d4 });
        } }, je = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t4) {
          var e8 = t4.state, i4 = t4.options, n7 = t4.name, s6 = i4.offset, o7 = void 0 === s6 ? [0, 0] : s6, r5 = kt.reduce(function(t5, i5) {
            return t5[i5] = function(t6, e9, i6) {
              var n8 = Vt(t6), s7 = [bt, gt].indexOf(n8) >= 0 ? -1 : 1, o8 = "function" == typeof i6 ? i6(Object.assign({}, e9, { placement: t6 })) : i6, r6 = o8[0], a5 = o8[1];
              return r6 = r6 || 0, a5 = (a5 || 0) * s7, [bt, _t].indexOf(n8) >= 0 ? { x: a5, y: r6 } : { x: r6, y: a5 };
            }(i5, e8.rects, o7), t5;
          }, {}), a4 = r5[e8.placement], l6 = a4.x, c4 = a4.y;
          null != e8.modifiersData.popperOffsets && (e8.modifiersData.popperOffsets.x += l6, e8.modifiersData.popperOffsets.y += c4), e8.modifiersData[n7] = r5;
        } }, Me = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t4) {
          var e8 = t4.state, i4 = t4.name;
          e8.modifiersData[i4] = ke({ reference: e8.rects.reference, element: e8.rects.popper, strategy: "absolute", placement: e8.placement });
        }, data: {} }, He = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t4) {
          var e8 = t4.state, i4 = t4.options, n7 = t4.name, s6 = i4.mainAxis, o7 = void 0 === s6 || s6, r5 = i4.altAxis, a4 = void 0 !== r5 && r5, l6 = i4.boundary, c4 = i4.rootBoundary, h4 = i4.altBoundary, d4 = i4.padding, u3 = i4.tether, f3 = void 0 === u3 || u3, p3 = i4.tetherOffset, g3 = void 0 === p3 ? 0 : p3, m3 = Le(e8, { boundary: l6, rootBoundary: c4, padding: d4, altBoundary: h4 }), _3 = Vt(e8.placement), b3 = de(e8.placement), v3 = !b3, y3 = re(_3), w3 = "x" === y3 ? "y" : "x", A3 = e8.modifiersData.popperOffsets, E3 = e8.rects.reference, T3 = e8.rects.popper, C3 = "function" == typeof g3 ? g3(Object.assign({}, e8.rects, { placement: e8.placement })) : g3, O2 = "number" == typeof C3 ? { mainAxis: C3, altAxis: C3 } : Object.assign({ mainAxis: 0, altAxis: 0 }, C3), x3 = e8.modifiersData.offset ? e8.modifiersData.offset[e8.placement] : null, k3 = { x: 0, y: 0 };
          if (A3) {
            if (o7) {
              var L2, D2 = "y" === y3 ? gt : bt, S4 = "y" === y3 ? mt : _t, I3 = "y" === y3 ? "height" : "width", N3 = A3[y3], P3 = N3 + m3[D2], j2 = N3 - m3[S4], M3 = f3 ? -T3[I3] / 2 : 0, H3 = b3 === wt ? E3[I3] : T3[I3], $3 = b3 === wt ? -T3[I3] : -E3[I3], W2 = e8.elements.arrow, B2 = f3 && W2 ? Jt(W2) : { width: 0, height: 0 }, F2 = e8.modifiersData["arrow#persistent"] ? e8.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z3 = F2[D2], q2 = F2[S4], R3 = ae(0, E3[I3], B2[I3]), V3 = v3 ? E3[I3] / 2 - M3 - R3 - z3 - O2.mainAxis : H3 - R3 - z3 - O2.mainAxis, K2 = v3 ? -E3[I3] / 2 + M3 + R3 + q2 + O2.mainAxis : $3 + R3 + q2 + O2.mainAxis, Q2 = e8.elements.arrow && oe(e8.elements.arrow), X2 = Q2 ? "y" === y3 ? Q2.clientTop || 0 : Q2.clientLeft || 0 : 0, Y2 = null != (L2 = null == x3 ? void 0 : x3[y3]) ? L2 : 0, U2 = N3 + K2 - Y2, G2 = ae(f3 ? Qt(P3, N3 + V3 - Y2 - X2) : P3, N3, f3 ? Kt(j2, U2) : j2);
              A3[y3] = G2, k3[y3] = G2 - N3;
            }
            if (a4) {
              var J2, Z3 = "x" === y3 ? gt : bt, tt2 = "x" === y3 ? mt : _t, et2 = A3[w3], it2 = "y" === w3 ? "height" : "width", nt2 = et2 + m3[Z3], st2 = et2 - m3[tt2], ot2 = -1 !== [gt, bt].indexOf(_3), rt2 = null != (J2 = null == x3 ? void 0 : x3[w3]) ? J2 : 0, at2 = ot2 ? nt2 : et2 - E3[it2] - T3[it2] - rt2 + O2.altAxis, lt2 = ot2 ? et2 + E3[it2] + T3[it2] - rt2 - O2.altAxis : st2, ct2 = f3 && ot2 ? function(t5, e9, i5) {
                var n8 = ae(t5, e9, i5);
                return n8 > i5 ? i5 : n8;
              }(at2, et2, lt2) : ae(f3 ? at2 : nt2, et2, f3 ? lt2 : st2);
              A3[w3] = ct2, k3[w3] = ct2 - et2;
            }
            e8.modifiersData[n7] = k3;
          }
        }, requiresIfExists: ["offset"] };
        function $e(t4, e8, i4) {
          void 0 === i4 && (i4 = false);
          var n7, s6, o7 = zt(e8), r5 = zt(e8) && function(t5) {
            var e9 = t5.getBoundingClientRect(), i5 = Xt(e9.width) / t5.offsetWidth || 1, n8 = Xt(e9.height) / t5.offsetHeight || 1;
            return 1 !== i5 || 1 !== n8;
          }(e8), a4 = ie(e8), l6 = Gt(t4, r5, i4), c4 = { scrollLeft: 0, scrollTop: 0 }, h4 = { x: 0, y: 0 };
          return (o7 || !o7 && !i4) && (("body" !== Wt(e8) || Ee(a4)) && (c4 = (n7 = e8) !== Bt(n7) && zt(n7) ? { scrollLeft: (s6 = n7).scrollLeft, scrollTop: s6.scrollTop } : we(n7)), zt(e8) ? ((h4 = Gt(e8, true)).x += e8.clientLeft, h4.y += e8.clientTop) : a4 && (h4.x = Ae(a4))), { x: l6.left + c4.scrollLeft - h4.x, y: l6.top + c4.scrollTop - h4.y, width: l6.width, height: l6.height };
        }
        function We(t4) {
          var e8 = /* @__PURE__ */ new Map(), i4 = /* @__PURE__ */ new Set(), n7 = [];
          function s6(t5) {
            i4.add(t5.name), [].concat(t5.requires || [], t5.requiresIfExists || []).forEach(function(t6) {
              if (!i4.has(t6)) {
                var n8 = e8.get(t6);
                n8 && s6(n8);
              }
            }), n7.push(t5);
          }
          return t4.forEach(function(t5) {
            e8.set(t5.name, t5);
          }), t4.forEach(function(t5) {
            i4.has(t5.name) || s6(t5);
          }), n7;
        }
        var Be = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function Fe() {
          for (var t4 = arguments.length, e8 = new Array(t4), i4 = 0; i4 < t4; i4++)
            e8[i4] = arguments[i4];
          return !e8.some(function(t5) {
            return !(t5 && "function" == typeof t5.getBoundingClientRect);
          });
        }
        function ze(t4) {
          void 0 === t4 && (t4 = {});
          var e8 = t4, i4 = e8.defaultModifiers, n7 = void 0 === i4 ? [] : i4, s6 = e8.defaultOptions, o7 = void 0 === s6 ? Be : s6;
          return function(t5, e9, i5) {
            void 0 === i5 && (i5 = o7);
            var s7, r5, a4 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Be, o7), modifiersData: {}, elements: { reference: t5, popper: e9 }, attributes: {}, styles: {} }, l6 = [], c4 = false, h4 = { state: a4, setOptions: function(i6) {
              var s8 = "function" == typeof i6 ? i6(a4.options) : i6;
              d4(), a4.options = Object.assign({}, o7, a4.options, s8), a4.scrollParents = { reference: Ft(t5) ? Ce(t5) : t5.contextElement ? Ce(t5.contextElement) : [], popper: Ce(e9) };
              var r6, c5, u3 = function(t6) {
                var e10 = We(t6);
                return $t.reduce(function(t7, i7) {
                  return t7.concat(e10.filter(function(t8) {
                    return t8.phase === i7;
                  }));
                }, []);
              }((r6 = [].concat(n7, a4.options.modifiers), c5 = r6.reduce(function(t6, e10) {
                var i7 = t6[e10.name];
                return t6[e10.name] = i7 ? Object.assign({}, i7, e10, { options: Object.assign({}, i7.options, e10.options), data: Object.assign({}, i7.data, e10.data) }) : e10, t6;
              }, {}), Object.keys(c5).map(function(t6) {
                return c5[t6];
              })));
              return a4.orderedModifiers = u3.filter(function(t6) {
                return t6.enabled;
              }), a4.orderedModifiers.forEach(function(t6) {
                var e10 = t6.name, i7 = t6.options, n8 = void 0 === i7 ? {} : i7, s9 = t6.effect;
                if ("function" == typeof s9) {
                  var o8 = s9({ state: a4, name: e10, instance: h4, options: n8 });
                  l6.push(o8 || function() {
                  });
                }
              }), h4.update();
            }, forceUpdate: function() {
              if (!c4) {
                var t6 = a4.elements, e10 = t6.reference, i6 = t6.popper;
                if (Fe(e10, i6)) {
                  a4.rects = { reference: $e(e10, oe(i6), "fixed" === a4.options.strategy), popper: Jt(i6) }, a4.reset = false, a4.placement = a4.options.placement, a4.orderedModifiers.forEach(function(t7) {
                    return a4.modifiersData[t7.name] = Object.assign({}, t7.data);
                  });
                  for (var n8 = 0; n8 < a4.orderedModifiers.length; n8++)
                    if (true !== a4.reset) {
                      var s8 = a4.orderedModifiers[n8], o8 = s8.fn, r6 = s8.options, l7 = void 0 === r6 ? {} : r6, d5 = s8.name;
                      "function" == typeof o8 && (a4 = o8({ state: a4, options: l7, name: d5, instance: h4 }) || a4);
                    } else
                      a4.reset = false, n8 = -1;
                }
              }
            }, update: (s7 = function() {
              return new Promise(function(t6) {
                h4.forceUpdate(), t6(a4);
              });
            }, function() {
              return r5 || (r5 = new Promise(function(t6) {
                Promise.resolve().then(function() {
                  r5 = void 0, t6(s7());
                });
              })), r5;
            }), destroy: function() {
              d4(), c4 = true;
            } };
            if (!Fe(t5, e9))
              return h4;
            function d4() {
              l6.forEach(function(t6) {
                return t6();
              }), l6 = [];
            }
            return h4.setOptions(i5).then(function(t6) {
              !c4 && i5.onFirstUpdate && i5.onFirstUpdate(t6);
            }), h4;
          };
        }
        var qe = ze(), Re = ze({ defaultModifiers: [me, Me, pe, Rt] }), Ve = ze({ defaultModifiers: [me, Me, pe, Rt, je, Se, He, he, Pe] });
        const Ke = Object.freeze(Object.defineProperty({ __proto__: null, popperGenerator: ze, detectOverflow: Le, createPopperBase: qe, createPopper: Ve, createPopperLite: Re, top: gt, bottom: mt, right: _t, left: bt, auto: vt, basePlacements: yt, start: wt, end: At, clippingParents: Et, viewport: Tt, popper: Ct, reference: Ot, variationPlacements: xt, placements: kt, beforeRead: Lt, read: Dt, afterRead: St, beforeMain: It, main: Nt, afterMain: Pt, beforeWrite: jt, write: Mt, afterWrite: Ht, modifierPhases: $t, applyStyles: Rt, arrow: he, computeStyles: pe, eventListeners: me, flip: Se, hide: Pe, offset: je, popperOffsets: Me, preventOverflow: He }, Symbol.toStringTag, { value: "Module" })), Qe = "dropdown", Xe = "ArrowUp", Ye = "ArrowDown", Ue = "click.bs.dropdown.data-api", Ge = "keydown.bs.dropdown.data-api", Je = "show", Ze = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', ti = `${Ze}.show`, ei = ".dropdown-menu", ii = p2() ? "top-end" : "top-start", ni = p2() ? "top-start" : "top-end", si = p2() ? "bottom-end" : "bottom-start", oi = p2() ? "bottom-start" : "bottom-end", ri = p2() ? "left-start" : "right-start", ai = p2() ? "right-start" : "left-start", li = { autoClose: true, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, ci = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
        class hi extends z2 {
          constructor(t4, e8) {
            super(t4, e8), this._popper = null, this._parent = this._element.parentNode, this._menu = Q.next(this._element, ei)[0] || Q.prev(this._element, ei)[0] || Q.findOne(ei, this._parent), this._inNavbar = this._detectNavbar();
          }
          static get Default() {
            return li;
          }
          static get DefaultType() {
            return ci;
          }
          static get NAME() {
            return Qe;
          }
          toggle() {
            return this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (l5(this._element) || this._isShown())
              return;
            const t4 = { relatedTarget: this._element };
            if (!P2.trigger(this._element, "show.bs.dropdown", t4).defaultPrevented) {
              if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                for (const t5 of [].concat(...document.body.children))
                  P2.on(t5, "mouseover", h3);
              this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(Je), this._element.classList.add(Je), P2.trigger(this._element, "shown.bs.dropdown", t4);
            }
          }
          hide() {
            if (l5(this._element) || !this._isShown())
              return;
            const t4 = { relatedTarget: this._element };
            this._completeHide(t4);
          }
          dispose() {
            this._popper && this._popper.destroy(), super.dispose();
          }
          update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
          }
          _completeHide(t4) {
            if (!P2.trigger(this._element, "hide.bs.dropdown", t4).defaultPrevented) {
              if ("ontouchstart" in document.documentElement)
                for (const t5 of [].concat(...document.body.children))
                  P2.off(t5, "mouseover", h3);
              this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), P2.trigger(this._element, "hidden.bs.dropdown", t4);
            }
          }
          _getConfig(t4) {
            if ("object" == typeof (t4 = super._getConfig(t4)).reference && !o6(t4.reference) && "function" != typeof t4.reference.getBoundingClientRect)
              throw new TypeError(`${Qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t4;
          }
          _createPopper() {
            if (void 0 === Ke)
              throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t4 = this._element;
            "parent" === this._config.reference ? t4 = this._parent : o6(this._config.reference) ? t4 = r4(this._config.reference) : "object" == typeof this._config.reference && (t4 = this._config.reference);
            const e8 = this._getPopperConfig();
            this._popper = Ve(t4, this._menu, e8);
          }
          _isShown() {
            return this._menu.classList.contains(Je);
          }
          _getPlacement() {
            const t4 = this._parent;
            if (t4.classList.contains("dropend"))
              return ri;
            if (t4.classList.contains("dropstart"))
              return ai;
            if (t4.classList.contains("dropup-center"))
              return "top";
            if (t4.classList.contains("dropdown-center"))
              return "bottom";
            const e8 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t4.classList.contains("dropup") ? e8 ? ni : ii : e8 ? oi : si;
          }
          _detectNavbar() {
            return null !== this._element.closest(".navbar");
          }
          _getOffset() {
            const { offset: t4 } = this._config;
            return "string" == typeof t4 ? t4.split(",").map((t5) => Number.parseInt(t5, 10)) : "function" == typeof t4 ? (e8) => t4(e8, this._element) : t4;
          }
          _getPopperConfig() {
            const t4 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
            return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t4.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t4, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t4) : this._config.popperConfig };
          }
          _selectMenuItem({ key: t4, target: e8 }) {
            const i4 = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t5) => a3(t5));
            i4.length && b2(i4, e8, t4 === Ye, !i4.includes(e8)).focus();
          }
          static jQueryInterface(t4) {
            return this.each(function() {
              const e8 = hi.getOrCreateInstance(this, t4);
              if ("string" == typeof t4) {
                if (void 0 === e8[t4])
                  throw new TypeError(`No method named "${t4}"`);
                e8[t4]();
              }
            });
          }
          static clearMenus(t4) {
            if (2 === t4.button || "keyup" === t4.type && "Tab" !== t4.key)
              return;
            const e8 = Q.find(ti);
            for (const i4 of e8) {
              const e9 = hi.getInstance(i4);
              if (!e9 || false === e9._config.autoClose)
                continue;
              const n7 = t4.composedPath(), s6 = n7.includes(e9._menu);
              if (n7.includes(e9._element) || "inside" === e9._config.autoClose && !s6 || "outside" === e9._config.autoClose && s6)
                continue;
              if (e9._menu.contains(t4.target) && ("keyup" === t4.type && "Tab" === t4.key || /input|select|option|textarea|form/i.test(t4.target.tagName)))
                continue;
              const o7 = { relatedTarget: e9._element };
              "click" === t4.type && (o7.clickEvent = t4), e9._completeHide(o7);
            }
          }
          static dataApiKeydownHandler(t4) {
            const e8 = /input|textarea/i.test(t4.target.tagName), i4 = "Escape" === t4.key, n7 = [Xe, Ye].includes(t4.key);
            if (!n7 && !i4)
              return;
            if (e8 && !i4)
              return;
            t4.preventDefault();
            const s6 = this.matches(Ze) ? this : Q.prev(this, Ze)[0] || Q.next(this, Ze)[0] || Q.findOne(Ze, t4.delegateTarget.parentNode), o7 = hi.getOrCreateInstance(s6);
            if (n7)
              return t4.stopPropagation(), o7.show(), void o7._selectMenuItem(t4);
            o7._isShown() && (t4.stopPropagation(), o7.hide(), s6.focus());
          }
        }
        P2.on(document, Ge, Ze, hi.dataApiKeydownHandler), P2.on(document, Ge, ei, hi.dataApiKeydownHandler), P2.on(document, Ue, hi.clearMenus), P2.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), P2.on(document, Ue, Ze, function(t4) {
          t4.preventDefault(), hi.getOrCreateInstance(this).toggle();
        }), g2(hi);
        const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ui = ".sticky-top", fi = "padding-right", pi = "margin-right";
        class gi {
          constructor() {
            this._element = document.body;
          }
          getWidth() {
            const t4 = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t4);
          }
          hide() {
            const t4 = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, fi, (e8) => e8 + t4), this._setElementAttributes(di, fi, (e8) => e8 + t4), this._setElementAttributes(ui, pi, (e8) => e8 - t4);
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, fi), this._resetElementAttributes(di, fi), this._resetElementAttributes(ui, pi);
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
          }
          _setElementAttributes(t4, e8, i4) {
            const n7 = this.getWidth();
            this._applyManipulationCallback(t4, (t5) => {
              if (t5 !== this._element && window.innerWidth > t5.clientWidth + n7)
                return;
              this._saveInitialAttribute(t5, e8);
              const s6 = window.getComputedStyle(t5).getPropertyValue(e8);
              t5.style.setProperty(e8, `${i4(Number.parseFloat(s6))}px`);
            });
          }
          _saveInitialAttribute(t4, e8) {
            const i4 = t4.style.getPropertyValue(e8);
            i4 && B.setDataAttribute(t4, e8, i4);
          }
          _resetElementAttributes(t4, e8) {
            this._applyManipulationCallback(t4, (t5) => {
              const i4 = B.getDataAttribute(t5, e8);
              null !== i4 ? (B.removeDataAttribute(t5, e8), t5.style.setProperty(e8, i4)) : t5.style.removeProperty(e8);
            });
          }
          _applyManipulationCallback(t4, e8) {
            if (o6(t4))
              e8(t4);
            else
              for (const i4 of Q.find(t4, this._element))
                e8(i4);
          }
        }
        const mi = "show", _i = "mousedown.bs.backdrop", bi = { className: "modal-backdrop", clickCallback: null, isAnimated: false, isVisible: true, rootElement: "body" }, vi = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
        class yi extends F {
          constructor(t4) {
            super(), this._config = this._getConfig(t4), this._isAppended = false, this._element = null;
          }
          static get Default() {
            return bi;
          }
          static get DefaultType() {
            return vi;
          }
          static get NAME() {
            return "backdrop";
          }
          show(t4) {
            if (!this._config.isVisible)
              return void m2(t4);
            this._append();
            const e8 = this._getElement();
            this._config.isAnimated && d3(e8), e8.classList.add(mi), this._emulateAnimation(() => {
              m2(t4);
            });
          }
          hide(t4) {
            this._config.isVisible ? (this._getElement().classList.remove(mi), this._emulateAnimation(() => {
              this.dispose(), m2(t4);
            })) : m2(t4);
          }
          dispose() {
            this._isAppended && (P2.off(this._element, _i), this._element.remove(), this._isAppended = false);
          }
          _getElement() {
            if (!this._element) {
              const t4 = document.createElement("div");
              t4.className = this._config.className, this._config.isAnimated && t4.classList.add("fade"), this._element = t4;
            }
            return this._element;
          }
          _configAfterMerge(t4) {
            return t4.rootElement = r4(t4.rootElement), t4;
          }
          _append() {
            if (this._isAppended)
              return;
            const t4 = this._getElement();
            this._config.rootElement.append(t4), P2.on(t4, _i, () => {
              m2(this._config.clickCallback);
            }), this._isAppended = true;
          }
          _emulateAnimation(t4) {
            _2(t4, this._getElement(), this._config.isAnimated);
          }
        }
        const wi = ".bs.focustrap", Ai = "backward", Ei = { autofocus: true, trapElement: null }, Ti = { autofocus: "boolean", trapElement: "element" };
        class Ci extends F {
          constructor(t4) {
            super(), this._config = this._getConfig(t4), this._isActive = false, this._lastTabNavDirection = null;
          }
          static get Default() {
            return Ei;
          }
          static get DefaultType() {
            return Ti;
          }
          static get NAME() {
            return "focustrap";
          }
          activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P2.off(document, wi), P2.on(document, "focusin.bs.focustrap", (t4) => this._handleFocusin(t4)), P2.on(document, "keydown.tab.bs.focustrap", (t4) => this._handleKeydown(t4)), this._isActive = true);
          }
          deactivate() {
            this._isActive && (this._isActive = false, P2.off(document, wi));
          }
          _handleFocusin(t4) {
            const { trapElement: e8 } = this._config;
            if (t4.target === document || t4.target === e8 || e8.contains(t4.target))
              return;
            const i4 = Q.focusableChildren(e8);
            0 === i4.length ? e8.focus() : this._lastTabNavDirection === Ai ? i4[i4.length - 1].focus() : i4[0].focus();
          }
          _handleKeydown(t4) {
            "Tab" === t4.key && (this._lastTabNavDirection = t4.shiftKey ? Ai : "forward");
          }
        }
        const Oi = "hidden.bs.modal", xi = "show.bs.modal", ki = "modal-open", Li = "show", Di = "modal-static", Si = { backdrop: true, focus: true, keyboard: true }, Ii = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
        class Ni extends z2 {
          constructor(t4, e8) {
            super(t4, e8), this._dialog = Q.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new gi(), this._addEventListeners();
          }
          static get Default() {
            return Si;
          }
          static get DefaultType() {
            return Ii;
          }
          static get NAME() {
            return "modal";
          }
          toggle(t4) {
            return this._isShown ? this.hide() : this.show(t4);
          }
          show(t4) {
            this._isShown || this._isTransitioning || P2.trigger(this._element, xi, { relatedTarget: t4 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(ki), this._adjustDialog(), this._backdrop.show(() => this._showElement(t4)));
          }
          hide() {
            this._isShown && !this._isTransitioning && (P2.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(Li), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
          }
          dispose() {
            for (const t4 of [window, this._dialog])
              P2.off(t4, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          handleUpdate() {
            this._adjustDialog();
          }
          _initializeBackDrop() {
            return new yi({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
          }
          _initializeFocusTrap() {
            return new Ci({ trapElement: this._element });
          }
          _showElement(t4) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e8 = Q.findOne(".modal-body", this._dialog);
            e8 && (e8.scrollTop = 0), d3(this._element), this._element.classList.add(Li), this._queueCallback(() => {
              this._config.focus && this._focustrap.activate(), this._isTransitioning = false, P2.trigger(this._element, "shown.bs.modal", { relatedTarget: t4 });
            }, this._dialog, this._isAnimated());
          }
          _addEventListeners() {
            P2.on(this._element, "keydown.dismiss.bs.modal", (t4) => {
              if ("Escape" === t4.key)
                return this._config.keyboard ? (t4.preventDefault(), void this.hide()) : void this._triggerBackdropTransition();
            }), P2.on(window, "resize.bs.modal", () => {
              this._isShown && !this._isTransitioning && this._adjustDialog();
            }), P2.on(this._element, "mousedown.dismiss.bs.modal", (t4) => {
              P2.one(this._element, "click.dismiss.bs.modal", (e8) => {
                this._element === t4.target && this._element === e8.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
              });
            });
          }
          _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
              document.body.classList.remove(ki), this._resetAdjustments(), this._scrollBar.reset(), P2.trigger(this._element, Oi);
            });
          }
          _isAnimated() {
            return this._element.classList.contains("fade");
          }
          _triggerBackdropTransition() {
            if (P2.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
              return;
            const t4 = this._element.scrollHeight > document.documentElement.clientHeight, e8 = this._element.style.overflowY;
            "hidden" === e8 || this._element.classList.contains(Di) || (t4 || (this._element.style.overflowY = "hidden"), this._element.classList.add(Di), this._queueCallback(() => {
              this._element.classList.remove(Di), this._queueCallback(() => {
                this._element.style.overflowY = e8;
              }, this._dialog);
            }, this._dialog), this._element.focus());
          }
          _adjustDialog() {
            const t4 = this._element.scrollHeight > document.documentElement.clientHeight, e8 = this._scrollBar.getWidth(), i4 = e8 > 0;
            if (i4 && !t4) {
              const t5 = p2() ? "paddingLeft" : "paddingRight";
              this._element.style[t5] = `${e8}px`;
            }
            if (!i4 && t4) {
              const t5 = p2() ? "paddingRight" : "paddingLeft";
              this._element.style[t5] = `${e8}px`;
            }
          }
          _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
          }
          static jQueryInterface(t4, e8) {
            return this.each(function() {
              const i4 = Ni.getOrCreateInstance(this, t4);
              if ("string" == typeof t4) {
                if (void 0 === i4[t4])
                  throw new TypeError(`No method named "${t4}"`);
                i4[t4](e8);
              }
            });
          }
        }
        P2.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t4) {
          const e8 = n6(this);
          ["A", "AREA"].includes(this.tagName) && t4.preventDefault(), P2.one(e8, xi, (t5) => {
            t5.defaultPrevented || P2.one(e8, Oi, () => {
              a3(this) && this.focus();
            });
          });
          const i4 = Q.findOne(".modal.show");
          i4 && Ni.getInstance(i4).hide(), Ni.getOrCreateInstance(e8).toggle(this);
        }), q(Ni), g2(Ni);
        const Pi = "show", ji = "showing", Mi = "hiding", Hi = ".offcanvas.show", $i = "hidePrevented.bs.offcanvas", Wi = "hidden.bs.offcanvas", Bi = { backdrop: true, keyboard: true, scroll: false }, Fi = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
        class zi extends z2 {
          constructor(t4, e8) {
            super(t4, e8), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
          }
          static get Default() {
            return Bi;
          }
          static get DefaultType() {
            return Fi;
          }
          static get NAME() {
            return "offcanvas";
          }
          toggle(t4) {
            return this._isShown ? this.hide() : this.show(t4);
          }
          show(t4) {
            this._isShown || P2.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t4 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new gi().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(ji), this._queueCallback(() => {
              this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Pi), this._element.classList.remove(ji), P2.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t4 });
            }, this._element, true));
          }
          hide() {
            this._isShown && (P2.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add(Mi), this._backdrop.hide(), this._queueCallback(() => {
              this._element.classList.remove(Pi, Mi), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new gi().reset(), P2.trigger(this._element, Wi);
            }, this._element, true)));
          }
          dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          _initializeBackDrop() {
            const t4 = Boolean(this._config.backdrop);
            return new yi({ className: "offcanvas-backdrop", isVisible: t4, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t4 ? () => {
              "static" !== this._config.backdrop ? this.hide() : P2.trigger(this._element, $i);
            } : null });
          }
          _initializeFocusTrap() {
            return new Ci({ trapElement: this._element });
          }
          _addEventListeners() {
            P2.on(this._element, "keydown.dismiss.bs.offcanvas", (t4) => {
              "Escape" === t4.key && (this._config.keyboard ? this.hide() : P2.trigger(this._element, $i));
            });
          }
          static jQueryInterface(t4) {
            return this.each(function() {
              const e8 = zi.getOrCreateInstance(this, t4);
              if ("string" == typeof t4) {
                if (void 0 === e8[t4] || t4.startsWith("_") || "constructor" === t4)
                  throw new TypeError(`No method named "${t4}"`);
                e8[t4](this);
              }
            });
          }
        }
        P2.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t4) {
          const e8 = n6(this);
          if (["A", "AREA"].includes(this.tagName) && t4.preventDefault(), l5(this))
            return;
          P2.one(e8, Wi, () => {
            a3(this) && this.focus();
          });
          const i4 = Q.findOne(Hi);
          i4 && i4 !== e8 && zi.getInstance(i4).hide(), zi.getOrCreateInstance(e8).toggle(this);
        }), P2.on(window, "load.bs.offcanvas.data-api", () => {
          for (const t4 of Q.find(Hi))
            zi.getOrCreateInstance(t4).show();
        }), P2.on(window, "resize.bs.offcanvas", () => {
          for (const t4 of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(t4).position && zi.getOrCreateInstance(t4).hide();
        }), q(zi), g2(zi);
        const qi = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Ri = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Vi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ki = (t4, e8) => {
          const i4 = t4.nodeName.toLowerCase();
          return e8.includes(i4) ? !qi.has(i4) || Boolean(Ri.test(t4.nodeValue) || Vi.test(t4.nodeValue)) : e8.filter((t5) => t5 instanceof RegExp).some((t5) => t5.test(i4));
        }, Qi = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Xi = { allowList: Qi, content: {}, extraClass: "", html: false, sanitize: true, sanitizeFn: null, template: "<div></div>" }, Yi = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Ui = { entry: "(string|element|function|null)", selector: "(string|element)" };
        class Gi extends F {
          constructor(t4) {
            super(), this._config = this._getConfig(t4);
          }
          static get Default() {
            return Xi;
          }
          static get DefaultType() {
            return Yi;
          }
          static get NAME() {
            return "TemplateFactory";
          }
          getContent() {
            return Object.values(this._config.content).map((t4) => this._resolvePossibleFunction(t4)).filter(Boolean);
          }
          hasContent() {
            return this.getContent().length > 0;
          }
          changeContent(t4) {
            return this._checkContent(t4), this._config.content = { ...this._config.content, ...t4 }, this;
          }
          toHtml() {
            const t4 = document.createElement("div");
            t4.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e9, i5] of Object.entries(this._config.content))
              this._setContent(t4, i5, e9);
            const e8 = t4.children[0], i4 = this._resolvePossibleFunction(this._config.extraClass);
            return i4 && e8.classList.add(...i4.split(" ")), e8;
          }
          _typeCheckConfig(t4) {
            super._typeCheckConfig(t4), this._checkContent(t4.content);
          }
          _checkContent(t4) {
            for (const [e8, i4] of Object.entries(t4))
              super._typeCheckConfig({ selector: e8, entry: i4 }, Ui);
          }
          _setContent(t4, e8, i4) {
            const n7 = Q.findOne(i4, t4);
            n7 && ((e8 = this._resolvePossibleFunction(e8)) ? o6(e8) ? this._putElementInTemplate(r4(e8), n7) : this._config.html ? n7.innerHTML = this._maybeSanitize(e8) : n7.textContent = e8 : n7.remove());
          }
          _maybeSanitize(t4) {
            return this._config.sanitize ? function(t5, e8, i4) {
              if (!t5.length)
                return t5;
              if (i4 && "function" == typeof i4)
                return i4(t5);
              const n7 = new window.DOMParser().parseFromString(t5, "text/html"), s6 = [].concat(...n7.body.querySelectorAll("*"));
              for (const t6 of s6) {
                const i5 = t6.nodeName.toLowerCase();
                if (!Object.keys(e8).includes(i5)) {
                  t6.remove();
                  continue;
                }
                const n8 = [].concat(...t6.attributes), s7 = [].concat(e8["*"] || [], e8[i5] || []);
                for (const e9 of n8)
                  Ki(e9, s7) || t6.removeAttribute(e9.nodeName);
              }
              return n7.body.innerHTML;
            }(t4, this._config.allowList, this._config.sanitizeFn) : t4;
          }
          _resolvePossibleFunction(t4) {
            return "function" == typeof t4 ? t4(this) : t4;
          }
          _putElementInTemplate(t4, e8) {
            if (this._config.html)
              return e8.innerHTML = "", void e8.append(t4);
            e8.textContent = t4.textContent;
          }
        }
        const Ji = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Zi = "fade", tn = "show", en = ".modal", nn = "hide.bs.modal", sn = "hover", on = "focus", rn = { AUTO: "auto", TOP: "top", RIGHT: p2() ? "left" : "right", BOTTOM: "bottom", LEFT: p2() ? "right" : "left" }, an = { allowList: Qi, animation: true, boundary: "clippingParents", container: false, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: false, offset: [0, 0], placement: "top", popperConfig: null, sanitize: true, sanitizeFn: null, selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, ln = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
        class cn extends z2 {
          constructor(t4, e8) {
            if (void 0 === Ke)
              throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t4, e8), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
          }
          static get Default() {
            return an;
          }
          static get DefaultType() {
            return ln;
          }
          static get NAME() {
            return "tooltip";
          }
          enable() {
            this._isEnabled = true;
          }
          disable() {
            this._isEnabled = false;
          }
          toggleEnabled() {
            this._isEnabled = !this._isEnabled;
          }
          toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
          }
          dispose() {
            clearTimeout(this._timeout), P2.off(this._element.closest(en), nn, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
          }
          show() {
            if ("none" === this._element.style.display)
              throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled)
              return;
            const t4 = P2.trigger(this._element, this.constructor.eventName("show")), e8 = (c3(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t4.defaultPrevented || !e8)
              return;
            this._disposePopper();
            const i4 = this._getTipElement();
            this._element.setAttribute("aria-describedby", i4.getAttribute("id"));
            const { container: n7 } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n7.append(i4), P2.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i4), i4.classList.add(tn), "ontouchstart" in document.documentElement)
              for (const t5 of [].concat(...document.body.children))
                P2.on(t5, "mouseover", h3);
            this._queueCallback(() => {
              P2.trigger(this._element, this.constructor.eventName("shown")), false === this._isHovered && this._leave(), this._isHovered = false;
            }, this.tip, this._isAnimated());
          }
          hide() {
            if (this._isShown() && !P2.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
              if (this._getTipElement().classList.remove(tn), "ontouchstart" in document.documentElement)
                for (const t4 of [].concat(...document.body.children))
                  P2.off(t4, "mouseover", h3);
              this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false, this._isHovered = null, this._queueCallback(() => {
                this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), P2.trigger(this._element, this.constructor.eventName("hidden")));
              }, this.tip, this._isAnimated());
            }
          }
          update() {
            this._popper && this._popper.update();
          }
          _isWithContent() {
            return Boolean(this._getTitle());
          }
          _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
          }
          _createTipElement(t4) {
            const e8 = this._getTemplateFactory(t4).toHtml();
            if (!e8)
              return null;
            e8.classList.remove(Zi, tn), e8.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i4 = ((t5) => {
              do {
                t5 += Math.floor(1e6 * Math.random());
              } while (document.getElementById(t5));
              return t5;
            })(this.constructor.NAME).toString();
            return e8.setAttribute("id", i4), this._isAnimated() && e8.classList.add(Zi), e8;
          }
          setContent(t4) {
            this._newContent = t4, this._isShown() && (this._disposePopper(), this.show());
          }
          _getTemplateFactory(t4) {
            return this._templateFactory ? this._templateFactory.changeContent(t4) : this._templateFactory = new Gi({ ...this._config, content: t4, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
          }
          _getContentForTemplate() {
            return { ".tooltip-inner": this._getTitle() };
          }
          _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
          }
          _initializeOnDelegatedTarget(t4) {
            return this.constructor.getOrCreateInstance(t4.delegateTarget, this._getDelegateConfig());
          }
          _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Zi);
          }
          _isShown() {
            return this.tip && this.tip.classList.contains(tn);
          }
          _createPopper(t4) {
            const e8 = "function" == typeof this._config.placement ? this._config.placement.call(this, t4, this._element) : this._config.placement, i4 = rn[e8.toUpperCase()];
            return Ve(this._element, t4, this._getPopperConfig(i4));
          }
          _getOffset() {
            const { offset: t4 } = this._config;
            return "string" == typeof t4 ? t4.split(",").map((t5) => Number.parseInt(t5, 10)) : "function" == typeof t4 ? (e8) => t4(e8, this._element) : t4;
          }
          _resolvePossibleFunction(t4) {
            return "function" == typeof t4 ? t4.call(this._element) : t4;
          }
          _getPopperConfig(t4) {
            const e8 = { placement: t4, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t5) => {
              this._getTipElement().setAttribute("data-popper-placement", t5.state.placement);
            } }] };
            return { ...e8, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e8) : this._config.popperConfig };
          }
          _setListeners() {
            const t4 = this._config.trigger.split(" ");
            for (const e8 of t4)
              if ("click" === e8)
                P2.on(this._element, this.constructor.eventName("click"), this._config.selector, (t5) => {
                  this._initializeOnDelegatedTarget(t5).toggle();
                });
              else if ("manual" !== e8) {
                const t5 = e8 === sn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i4 = e8 === sn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                P2.on(this._element, t5, this._config.selector, (t6) => {
                  const e9 = this._initializeOnDelegatedTarget(t6);
                  e9._activeTrigger["focusin" === t6.type ? on : sn] = true, e9._enter();
                }), P2.on(this._element, i4, this._config.selector, (t6) => {
                  const e9 = this._initializeOnDelegatedTarget(t6);
                  e9._activeTrigger["focusout" === t6.type ? on : sn] = e9._element.contains(t6.relatedTarget), e9._leave();
                });
              }
            this._hideModalHandler = () => {
              this._element && this.hide();
            }, P2.on(this._element.closest(en), nn, this._hideModalHandler);
          }
          _fixTitle() {
            const t4 = this._element.getAttribute("title");
            t4 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t4), this._element.setAttribute("data-bs-original-title", t4), this._element.removeAttribute("title"));
          }
          _enter() {
            this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
          }
          _leave() {
            this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
          }
          _setTimeout(t4, e8) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t4, e8);
          }
          _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(true);
          }
          _getConfig(t4) {
            const e8 = B.getDataAttributes(this._element);
            for (const t5 of Object.keys(e8))
              Ji.has(t5) && delete e8[t5];
            return t4 = { ...e8, ..."object" == typeof t4 && t4 ? t4 : {} }, t4 = this._mergeConfigObj(t4), t4 = this._configAfterMerge(t4), this._typeCheckConfig(t4), t4;
          }
          _configAfterMerge(t4) {
            return t4.container = false === t4.container ? document.body : r4(t4.container), "number" == typeof t4.delay && (t4.delay = { show: t4.delay, hide: t4.delay }), "number" == typeof t4.title && (t4.title = t4.title.toString()), "number" == typeof t4.content && (t4.content = t4.content.toString()), t4;
          }
          _getDelegateConfig() {
            const t4 = {};
            for (const e8 in this._config)
              this.constructor.Default[e8] !== this._config[e8] && (t4[e8] = this._config[e8]);
            return t4.selector = false, t4.trigger = "manual", t4;
          }
          _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
          }
          static jQueryInterface(t4) {
            return this.each(function() {
              const e8 = cn.getOrCreateInstance(this, t4);
              if ("string" == typeof t4) {
                if (void 0 === e8[t4])
                  throw new TypeError(`No method named "${t4}"`);
                e8[t4]();
              }
            });
          }
        }
        g2(cn);
        const hn = { ...cn.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, dn = { ...cn.DefaultType, content: "(null|string|element|function)" };
        class un extends cn {
          static get Default() {
            return hn;
          }
          static get DefaultType() {
            return dn;
          }
          static get NAME() {
            return "popover";
          }
          _isWithContent() {
            return this._getTitle() || this._getContent();
          }
          _getContentForTemplate() {
            return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
          }
          _getContent() {
            return this._resolvePossibleFunction(this._config.content);
          }
          static jQueryInterface(t4) {
            return this.each(function() {
              const e8 = un.getOrCreateInstance(this, t4);
              if ("string" == typeof t4) {
                if (void 0 === e8[t4])
                  throw new TypeError(`No method named "${t4}"`);
                e8[t4]();
              }
            });
          }
        }
        g2(un);
        const fn = "click.bs.scrollspy", pn = "active", gn = "[href]", mn = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null, threshold: [0.1, 0.5, 1] }, _n = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
        class bn extends z2 {
          constructor(t4, e8) {
            super(t4, e8), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
          }
          static get Default() {
            return mn;
          }
          static get DefaultType() {
            return _n;
          }
          static get NAME() {
            return "scrollspy";
          }
          refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t4 of this._observableSections.values())
              this._observer.observe(t4);
          }
          dispose() {
            this._observer.disconnect(), super.dispose();
          }
          _configAfterMerge(t4) {
            return t4.target = r4(t4.target) || document.body, t4.rootMargin = t4.offset ? `${t4.offset}px 0px -30%` : t4.rootMargin, "string" == typeof t4.threshold && (t4.threshold = t4.threshold.split(",").map((t5) => Number.parseFloat(t5))), t4;
          }
          _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (P2.off(this._config.target, fn), P2.on(this._config.target, fn, gn, (t4) => {
              const e8 = this._observableSections.get(t4.target.hash);
              if (e8) {
                t4.preventDefault();
                const i4 = this._rootElement || window, n7 = e8.offsetTop - this._element.offsetTop;
                if (i4.scrollTo)
                  return void i4.scrollTo({ top: n7, behavior: "smooth" });
                i4.scrollTop = n7;
              }
            }));
          }
          _getNewObserver() {
            const t4 = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
            return new IntersectionObserver((t5) => this._observerCallback(t5), t4);
          }
          _observerCallback(t4) {
            const e8 = (t5) => this._targetLinks.get(`#${t5.target.id}`), i4 = (t5) => {
              this._previousScrollData.visibleEntryTop = t5.target.offsetTop, this._process(e8(t5));
            }, n7 = (this._rootElement || document.documentElement).scrollTop, s6 = n7 >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n7;
            for (const o7 of t4) {
              if (!o7.isIntersecting) {
                this._activeTarget = null, this._clearActiveClass(e8(o7));
                continue;
              }
              const t5 = o7.target.offsetTop >= this._previousScrollData.visibleEntryTop;
              if (s6 && t5) {
                if (i4(o7), !n7)
                  return;
              } else
                s6 || t5 || i4(o7);
            }
          }
          _initializeTargetsAndObservables() {
            this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
            const t4 = Q.find(gn, this._config.target);
            for (const e8 of t4) {
              if (!e8.hash || l5(e8))
                continue;
              const t5 = Q.findOne(e8.hash, this._element);
              a3(t5) && (this._targetLinks.set(e8.hash, e8), this._observableSections.set(e8.hash, t5));
            }
          }
          _process(t4) {
            this._activeTarget !== t4 && (this._clearActiveClass(this._config.target), this._activeTarget = t4, t4.classList.add(pn), this._activateParents(t4), P2.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: t4 }));
          }
          _activateParents(t4) {
            if (t4.classList.contains("dropdown-item"))
              Q.findOne(".dropdown-toggle", t4.closest(".dropdown")).classList.add(pn);
            else
              for (const e8 of Q.parents(t4, ".nav, .list-group"))
                for (const t5 of Q.prev(e8, ".nav-link, .nav-item > .nav-link, .list-group-item"))
                  t5.classList.add(pn);
          }
          _clearActiveClass(t4) {
            t4.classList.remove(pn);
            const e8 = Q.find("[href].active", t4);
            for (const t5 of e8)
              t5.classList.remove(pn);
          }
          static jQueryInterface(t4) {
            return this.each(function() {
              const e8 = bn.getOrCreateInstance(this, t4);
              if ("string" == typeof t4) {
                if (void 0 === e8[t4] || t4.startsWith("_") || "constructor" === t4)
                  throw new TypeError(`No method named "${t4}"`);
                e8[t4]();
              }
            });
          }
        }
        P2.on(window, "load.bs.scrollspy.data-api", () => {
          for (const t4 of Q.find('[data-bs-spy="scroll"]'))
            bn.getOrCreateInstance(t4);
        }), g2(bn);
        const vn = "ArrowLeft", yn = "ArrowRight", wn = "ArrowUp", An = "ArrowDown", En = "active", Tn = "fade", Cn = "show", On = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', xn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${On}`;
        class kn extends z2 {
          constructor(t4) {
            super(t4), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P2.on(this._element, "keydown.bs.tab", (t5) => this._keydown(t5)));
          }
          static get NAME() {
            return "tab";
          }
          show() {
            const t4 = this._element;
            if (this._elemIsActive(t4))
              return;
            const e8 = this._getActiveElem(), i4 = e8 ? P2.trigger(e8, "hide.bs.tab", { relatedTarget: t4 }) : null;
            P2.trigger(t4, "show.bs.tab", { relatedTarget: e8 }).defaultPrevented || i4 && i4.defaultPrevented || (this._deactivate(e8, t4), this._activate(t4, e8));
          }
          _activate(t4, e8) {
            t4 && (t4.classList.add(En), this._activate(n6(t4)), this._queueCallback(() => {
              "tab" === t4.getAttribute("role") ? (t4.removeAttribute("tabindex"), t4.setAttribute("aria-selected", true), this._toggleDropDown(t4, true), P2.trigger(t4, "shown.bs.tab", { relatedTarget: e8 })) : t4.classList.add(Cn);
            }, t4, t4.classList.contains(Tn)));
          }
          _deactivate(t4, e8) {
            t4 && (t4.classList.remove(En), t4.blur(), this._deactivate(n6(t4)), this._queueCallback(() => {
              "tab" === t4.getAttribute("role") ? (t4.setAttribute("aria-selected", false), t4.setAttribute("tabindex", "-1"), this._toggleDropDown(t4, false), P2.trigger(t4, "hidden.bs.tab", { relatedTarget: e8 })) : t4.classList.remove(Cn);
            }, t4, t4.classList.contains(Tn)));
          }
          _keydown(t4) {
            if (![vn, yn, wn, An].includes(t4.key))
              return;
            t4.stopPropagation(), t4.preventDefault();
            const e8 = [yn, An].includes(t4.key), i4 = b2(this._getChildren().filter((t5) => !l5(t5)), t4.target, e8, true);
            i4 && (i4.focus({ preventScroll: true }), kn.getOrCreateInstance(i4).show());
          }
          _getChildren() {
            return Q.find(xn, this._parent);
          }
          _getActiveElem() {
            return this._getChildren().find((t4) => this._elemIsActive(t4)) || null;
          }
          _setInitialAttributes(t4, e8) {
            this._setAttributeIfNotExists(t4, "role", "tablist");
            for (const t5 of e8)
              this._setInitialAttributesOnChild(t5);
          }
          _setInitialAttributesOnChild(t4) {
            t4 = this._getInnerElement(t4);
            const e8 = this._elemIsActive(t4), i4 = this._getOuterElement(t4);
            t4.setAttribute("aria-selected", e8), i4 !== t4 && this._setAttributeIfNotExists(i4, "role", "presentation"), e8 || t4.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t4, "role", "tab"), this._setInitialAttributesOnTargetPanel(t4);
          }
          _setInitialAttributesOnTargetPanel(t4) {
            const e8 = n6(t4);
            e8 && (this._setAttributeIfNotExists(e8, "role", "tabpanel"), t4.id && this._setAttributeIfNotExists(e8, "aria-labelledby", `#${t4.id}`));
          }
          _toggleDropDown(t4, e8) {
            const i4 = this._getOuterElement(t4);
            if (!i4.classList.contains("dropdown"))
              return;
            const n7 = (t5, n8) => {
              const s6 = Q.findOne(t5, i4);
              s6 && s6.classList.toggle(n8, e8);
            };
            n7(".dropdown-toggle", En), n7(".dropdown-menu", Cn), i4.setAttribute("aria-expanded", e8);
          }
          _setAttributeIfNotExists(t4, e8, i4) {
            t4.hasAttribute(e8) || t4.setAttribute(e8, i4);
          }
          _elemIsActive(t4) {
            return t4.classList.contains(En);
          }
          _getInnerElement(t4) {
            return t4.matches(xn) ? t4 : Q.findOne(xn, t4);
          }
          _getOuterElement(t4) {
            return t4.closest(".nav-item, .list-group-item") || t4;
          }
          static jQueryInterface(t4) {
            return this.each(function() {
              const e8 = kn.getOrCreateInstance(this);
              if ("string" == typeof t4) {
                if (void 0 === e8[t4] || t4.startsWith("_") || "constructor" === t4)
                  throw new TypeError(`No method named "${t4}"`);
                e8[t4]();
              }
            });
          }
        }
        P2.on(document, "click.bs.tab", On, function(t4) {
          ["A", "AREA"].includes(this.tagName) && t4.preventDefault(), l5(this) || kn.getOrCreateInstance(this).show();
        }), P2.on(window, "load.bs.tab", () => {
          for (const t4 of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))
            kn.getOrCreateInstance(t4);
        }), g2(kn);
        const Ln = "hide", Dn = "show", Sn = "showing", In = { animation: "boolean", autohide: "boolean", delay: "number" }, Nn = { animation: true, autohide: true, delay: 5e3 };
        class Pn extends z2 {
          constructor(t4, e8) {
            super(t4, e8), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
          }
          static get Default() {
            return Nn;
          }
          static get DefaultType() {
            return In;
          }
          static get NAME() {
            return "toast";
          }
          show() {
            P2.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Ln), d3(this._element), this._element.classList.add(Dn, Sn), this._queueCallback(() => {
              this._element.classList.remove(Sn), P2.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
            }, this._element, this._config.animation));
          }
          hide() {
            this.isShown() && (P2.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(Sn), this._queueCallback(() => {
              this._element.classList.add(Ln), this._element.classList.remove(Sn, Dn), P2.trigger(this._element, "hidden.bs.toast");
            }, this._element, this._config.animation)));
          }
          dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(Dn), super.dispose();
          }
          isShown() {
            return this._element.classList.contains(Dn);
          }
          _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
          }
          _onInteraction(t4, e8) {
            switch (t4.type) {
              case "mouseover":
              case "mouseout":
                this._hasMouseInteraction = e8;
                break;
              case "focusin":
              case "focusout":
                this._hasKeyboardInteraction = e8;
            }
            if (e8)
              return void this._clearTimeout();
            const i4 = t4.relatedTarget;
            this._element === i4 || this._element.contains(i4) || this._maybeScheduleHide();
          }
          _setListeners() {
            P2.on(this._element, "mouseover.bs.toast", (t4) => this._onInteraction(t4, true)), P2.on(this._element, "mouseout.bs.toast", (t4) => this._onInteraction(t4, false)), P2.on(this._element, "focusin.bs.toast", (t4) => this._onInteraction(t4, true)), P2.on(this._element, "focusout.bs.toast", (t4) => this._onInteraction(t4, false));
          }
          _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
          }
          static jQueryInterface(t4) {
            return this.each(function() {
              const e8 = Pn.getOrCreateInstance(this, t4);
              if ("string" == typeof t4) {
                if (void 0 === e8[t4])
                  throw new TypeError(`No method named "${t4}"`);
                e8[t4](this);
              }
            });
          }
        }
        return q(Pn), g2(Pn), { Alert: R2, Button: K, Carousel: at, Collapse: pt, Dropdown: hi, Modal: Ni, Offcanvas: zi, Popover: un, ScrollSpy: bn, Tab: kn, Toast: Pn, Tooltip: cn };
      });
    }
  });

  // src/utils/options-element.ts
  var import_webcomponentsjs = __toESM(require_webcomponents_bundle());

  // node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t3, e7, n6) {
      if (this._$cssResult$ = true, n6 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e7;
    }
    get styleSheet() {
      let t3 = this.o;
      const s5 = this.t;
      if (e && void 0 === t3) {
        const e7 = void 0 !== s5 && 1 === s5.length;
        e7 && (t3 = n.get(s5)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e7 && n.set(s5, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t3) => new o("string" == typeof t3 ? t3 : t3 + "", void 0, s);
  var i = (t3, ...e7) => {
    const n6 = 1 === t3.length ? t3[0] : e7.reduce((e8, s5, n7) => e8 + ((t4) => {
      if (true === t4._$cssResult$)
        return t4.cssText;
      if ("number" == typeof t4)
        return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s5) + t3[n7 + 1], t3[0]);
    return new o(n6, t3, s);
  };
  var S = (s5, n6) => {
    e ? s5.adoptedStyleSheets = n6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n6.forEach((e7) => {
      const n7 = document.createElement("style"), o6 = t.litNonce;
      void 0 !== o6 && n7.setAttribute("nonce", o6), n7.textContent = e7.cssText, s5.appendChild(n7);
    });
  };
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e7 = "";
    for (const s5 of t4.cssRules)
      e7 += s5.cssText;
    return r(e7);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t3, i3) {
    switch (i3) {
      case Boolean:
        t3 = t3 ? h : null;
        break;
      case Object:
      case Array:
        t3 = null == t3 ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, i3) {
    let s5 = t3;
    switch (i3) {
      case Boolean:
        s5 = null !== t3;
        break;
      case Number:
        s5 = null === t3 ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          s5 = JSON.parse(t3);
        } catch (t4) {
          s5 = null;
        }
    }
    return s5;
  } };
  var a = (t3, i3) => i3 !== t3 && (i3 == i3 || t3 == t3);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t3) {
      var i3;
      this.finalize(), (null !== (i3 = this.h) && void 0 !== i3 ? i3 : this.h = []).push(t3);
    }
    static get observedAttributes() {
      this.finalize();
      const t3 = [];
      return this.elementProperties.forEach((i3, s5) => {
        const e7 = this._$Ep(s5, i3);
        void 0 !== e7 && (this._$Ev.set(e7, s5), t3.push(e7));
      }), t3;
    }
    static createProperty(t3, i3 = l) {
      if (i3.state && (i3.attribute = false), this.finalize(), this.elementProperties.set(t3, i3), !i3.noAccessor && !this.prototype.hasOwnProperty(t3)) {
        const s5 = "symbol" == typeof t3 ? Symbol() : "__" + t3, e7 = this.getPropertyDescriptor(t3, s5, i3);
        void 0 !== e7 && Object.defineProperty(this.prototype, t3, e7);
      }
    }
    static getPropertyDescriptor(t3, i3, s5) {
      return { get() {
        return this[i3];
      }, set(e7) {
        const r4 = this[t3];
        this[i3] = e7, this.requestUpdate(t3, r4, s5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t3 = Object.getPrototypeOf(this);
      if (t3.finalize(), void 0 !== t3.h && (this.h = [...t3.h]), this.elementProperties = new Map(t3.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t4 = this.properties, i3 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
        for (const s5 of i3)
          this.createProperty(s5, t4[s5]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i3) {
      const s5 = [];
      if (Array.isArray(i3)) {
        const e7 = new Set(i3.flat(1 / 0).reverse());
        for (const i4 of e7)
          s5.unshift(c(i4));
      } else
        void 0 !== i3 && s5.push(c(i3));
      return s5;
    }
    static _$Ep(t3, i3) {
      const s5 = i3.attribute;
      return false === s5 ? void 0 : "string" == typeof s5 ? s5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    u() {
      var t3;
      this._$E_ = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t3 = this.constructor.h) || void 0 === t3 || t3.forEach((t4) => t4(this));
    }
    addController(t3) {
      var i3, s5;
      (null !== (i3 = this._$ES) && void 0 !== i3 ? i3 : this._$ES = []).push(t3), void 0 !== this.renderRoot && this.isConnected && (null === (s5 = t3.hostConnected) || void 0 === s5 || s5.call(t3));
    }
    removeController(t3) {
      var i3;
      null === (i3 = this._$ES) || void 0 === i3 || i3.splice(this._$ES.indexOf(t3) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t3, i3) => {
        this.hasOwnProperty(i3) && (this._$Ei.set(i3, this[i3]), delete this[i3]);
      });
    }
    createRenderRoot() {
      var t3;
      const s5 = null !== (t3 = this.shadowRoot) && void 0 !== t3 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s5, this.constructor.elementStyles), s5;
    }
    connectedCallback() {
      var t3;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
        var i3;
        return null === (i3 = t4.hostConnected) || void 0 === i3 ? void 0 : i3.call(t4);
      });
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      var t3;
      null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
        var i3;
        return null === (i3 = t4.hostDisconnected) || void 0 === i3 ? void 0 : i3.call(t4);
      });
    }
    attributeChangedCallback(t3, i3, s5) {
      this._$AK(t3, s5);
    }
    _$EO(t3, i3, s5 = l) {
      var e7;
      const r4 = this.constructor._$Ep(t3, s5);
      if (void 0 !== r4 && true === s5.reflect) {
        const h3 = (void 0 !== (null === (e7 = s5.converter) || void 0 === e7 ? void 0 : e7.toAttribute) ? s5.converter : n2).toAttribute(i3, s5.type);
        this._$El = t3, null == h3 ? this.removeAttribute(r4) : this.setAttribute(r4, h3), this._$El = null;
      }
    }
    _$AK(t3, i3) {
      var s5;
      const e7 = this.constructor, r4 = e7._$Ev.get(t3);
      if (void 0 !== r4 && this._$El !== r4) {
        const t4 = e7.getPropertyOptions(r4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== (null === (s5 = t4.converter) || void 0 === s5 ? void 0 : s5.fromAttribute) ? t4.converter : n2;
        this._$El = r4, this[r4] = h3.fromAttribute(i3, t4.type), this._$El = null;
      }
    }
    requestUpdate(t3, i3, s5) {
      let e7 = true;
      void 0 !== t3 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || a)(this[t3], i3) ? (this._$AL.has(t3) || this._$AL.set(t3, i3), true === s5.reflect && this._$El !== t3 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t3, s5))) : e7 = false), !this.isUpdatePending && e7 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return null != t3 && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t3;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t4, i4) => this[i4] = t4), this._$Ei = void 0);
      let i3 = false;
      const s5 = this._$AL;
      try {
        i3 = this.shouldUpdate(s5), i3 ? (this.willUpdate(s5), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
          var i4;
          return null === (i4 = t4.hostUpdate) || void 0 === i4 ? void 0 : i4.call(t4);
        }), this.update(s5)) : this._$Ek();
      } catch (t4) {
        throw i3 = false, this._$Ek(), t4;
      }
      i3 && this._$AE(s5);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      var i3;
      null === (i3 = this._$ES) || void 0 === i3 || i3.forEach((t4) => {
        var i4;
        return null === (i4 = t4.hostUpdated) || void 0 === i4 ? void 0 : i4.call(t4);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      void 0 !== this._$EC && (this._$EC.forEach((t4, i3) => this._$EO(i3, this[i3], t4)), this._$EC = void 0), this._$Ek();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  d.finalized = true, d.elementProperties = /* @__PURE__ */ new Map(), d.elementStyles = [], d.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: d }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.1");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var o3 = `lit$${(Math.random() + "").slice(9)}$`;
  var n3 = "?" + o3;
  var l2 = `<${n3}>`;
  var h2 = document;
  var r3 = (t3 = "") => h2.createComment(t3);
  var d2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
  var u = Array.isArray;
  var c2 = (t3) => u(t3) || "function" == typeof (null == t3 ? void 0 : t3[Symbol.iterator]);
  var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var a2 = /-->/g;
  var f = />/g;
  var _ = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var m = /'/g;
  var p = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var g = (t3) => (i3, ...s5) => ({ _$litType$: t3, strings: i3, values: s5 });
  var y = g(1);
  var w = g(2);
  var x = Symbol.for("lit-noChange");
  var b = Symbol.for("lit-nothing");
  var T = /* @__PURE__ */ new WeakMap();
  var A = h2.createTreeWalker(h2, 129, null, false);
  var E = (t3, i3) => {
    const s5 = t3.length - 1, n6 = [];
    let h3, r4 = 2 === i3 ? "<svg>" : "", d3 = v;
    for (let i4 = 0; i4 < s5; i4++) {
      const s6 = t3[i4];
      let e7, u3, c3 = -1, g2 = 0;
      for (; g2 < s6.length && (d3.lastIndex = g2, u3 = d3.exec(s6), null !== u3); )
        g2 = d3.lastIndex, d3 === v ? "!--" === u3[1] ? d3 = a2 : void 0 !== u3[1] ? d3 = f : void 0 !== u3[2] ? ($.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d3 = _) : void 0 !== u3[3] && (d3 = _) : d3 === _ ? ">" === u3[0] ? (d3 = null != h3 ? h3 : v, c3 = -1) : void 0 === u3[1] ? c3 = -2 : (c3 = d3.lastIndex - u3[2].length, e7 = u3[1], d3 = void 0 === u3[3] ? _ : '"' === u3[3] ? p : m) : d3 === p || d3 === m ? d3 = _ : d3 === a2 || d3 === f ? d3 = v : (d3 = _, h3 = void 0);
      const y2 = d3 === _ && t3[i4 + 1].startsWith("/>") ? " " : "";
      r4 += d3 === v ? s6 + l2 : c3 >= 0 ? (n6.push(e7), s6.slice(0, c3) + "$lit$" + s6.slice(c3) + o3 + y2) : s6 + o3 + (-2 === c3 ? (n6.push(void 0), i4) : y2);
    }
    const u2 = r4 + (t3[s5] || "<?>") + (2 === i3 ? "</svg>" : "");
    if (!Array.isArray(t3) || !t3.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== e3 ? e3.createHTML(u2) : u2, n6];
  };
  var C = class {
    constructor({ strings: t3, _$litType$: i3 }, e7) {
      let l5;
      this.parts = [];
      let h3 = 0, d3 = 0;
      const u2 = t3.length - 1, c3 = this.parts, [v2, a3] = E(t3, i3);
      if (this.el = C.createElement(v2, e7), A.currentNode = this.el.content, 2 === i3) {
        const t4 = this.el.content, i4 = t4.firstChild;
        i4.remove(), t4.append(...i4.childNodes);
      }
      for (; null !== (l5 = A.nextNode()) && c3.length < u2; ) {
        if (1 === l5.nodeType) {
          if (l5.hasAttributes()) {
            const t4 = [];
            for (const i4 of l5.getAttributeNames())
              if (i4.endsWith("$lit$") || i4.startsWith(o3)) {
                const s5 = a3[d3++];
                if (t4.push(i4), void 0 !== s5) {
                  const t5 = l5.getAttribute(s5.toLowerCase() + "$lit$").split(o3), i5 = /([.?@])?(.*)/.exec(s5);
                  c3.push({ type: 1, index: h3, name: i5[2], strings: t5, ctor: "." === i5[1] ? M : "?" === i5[1] ? k : "@" === i5[1] ? H : S2 });
                } else
                  c3.push({ type: 6, index: h3 });
              }
            for (const i4 of t4)
              l5.removeAttribute(i4);
          }
          if ($.test(l5.tagName)) {
            const t4 = l5.textContent.split(o3), i4 = t4.length - 1;
            if (i4 > 0) {
              l5.textContent = s3 ? s3.emptyScript : "";
              for (let s5 = 0; s5 < i4; s5++)
                l5.append(t4[s5], r3()), A.nextNode(), c3.push({ type: 2, index: ++h3 });
              l5.append(t4[i4], r3());
            }
          }
        } else if (8 === l5.nodeType)
          if (l5.data === n3)
            c3.push({ type: 2, index: h3 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = l5.data.indexOf(o3, t4 + 1)); )
              c3.push({ type: 7, index: h3 }), t4 += o3.length - 1;
          }
        h3++;
      }
    }
    static createElement(t3, i3) {
      const s5 = h2.createElement("template");
      return s5.innerHTML = t3, s5;
    }
  };
  function P(t3, i3, s5 = t3, e7) {
    var o6, n6, l5, h3;
    if (i3 === x)
      return i3;
    let r4 = void 0 !== e7 ? null === (o6 = s5._$Co) || void 0 === o6 ? void 0 : o6[e7] : s5._$Cl;
    const u2 = d2(i3) ? void 0 : i3._$litDirective$;
    return (null == r4 ? void 0 : r4.constructor) !== u2 && (null === (n6 = null == r4 ? void 0 : r4._$AO) || void 0 === n6 || n6.call(r4, false), void 0 === u2 ? r4 = void 0 : (r4 = new u2(t3), r4._$AT(t3, s5, e7)), void 0 !== e7 ? (null !== (l5 = (h3 = s5)._$Co) && void 0 !== l5 ? l5 : h3._$Co = [])[e7] = r4 : s5._$Cl = r4), void 0 !== r4 && (i3 = P(t3, r4._$AS(t3, i3.values), r4, e7)), i3;
  }
  var V = class {
    constructor(t3, i3) {
      this.u = [], this._$AN = void 0, this._$AD = t3, this._$AM = i3;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    v(t3) {
      var i3;
      const { el: { content: s5 }, parts: e7 } = this._$AD, o6 = (null !== (i3 = null == t3 ? void 0 : t3.creationScope) && void 0 !== i3 ? i3 : h2).importNode(s5, true);
      A.currentNode = o6;
      let n6 = A.nextNode(), l5 = 0, r4 = 0, d3 = e7[0];
      for (; void 0 !== d3; ) {
        if (l5 === d3.index) {
          let i4;
          2 === d3.type ? i4 = new N(n6, n6.nextSibling, this, t3) : 1 === d3.type ? i4 = new d3.ctor(n6, d3.name, d3.strings, this, t3) : 6 === d3.type && (i4 = new I(n6, this, t3)), this.u.push(i4), d3 = e7[++r4];
        }
        l5 !== (null == d3 ? void 0 : d3.index) && (n6 = A.nextNode(), l5++);
      }
      return o6;
    }
    p(t3) {
      let i3 = 0;
      for (const s5 of this.u)
        void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t3, s5, i3), i3 += s5.strings.length - 2) : s5._$AI(t3[i3])), i3++;
    }
  };
  var N = class {
    constructor(t3, i3, s5, e7) {
      var o6;
      this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t3, this._$AB = i3, this._$AM = s5, this.options = e7, this._$Cm = null === (o6 = null == e7 ? void 0 : e7.isConnected) || void 0 === o6 || o6;
    }
    get _$AU() {
      var t3, i3;
      return null !== (i3 = null === (t3 = this._$AM) || void 0 === t3 ? void 0 : t3._$AU) && void 0 !== i3 ? i3 : this._$Cm;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i3 = this._$AM;
      return void 0 !== i3 && 11 === t3.nodeType && (t3 = i3.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i3 = this) {
      t3 = P(this, t3, i3), d2(t3) ? t3 === b || null == t3 || "" === t3 ? (this._$AH !== b && this._$AR(), this._$AH = b) : t3 !== this._$AH && t3 !== x && this.g(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : c2(t3) ? this.k(t3) : this.g(t3);
    }
    O(t3, i3 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t3, i3);
    }
    T(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
    }
    g(t3) {
      this._$AH !== b && d2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(h2.createTextNode(t3)), this._$AH = t3;
    }
    $(t3) {
      var i3;
      const { values: s5, _$litType$: e7 } = t3, o6 = "number" == typeof e7 ? this._$AC(t3) : (void 0 === e7.el && (e7.el = C.createElement(e7.h, this.options)), e7);
      if ((null === (i3 = this._$AH) || void 0 === i3 ? void 0 : i3._$AD) === o6)
        this._$AH.p(s5);
      else {
        const t4 = new V(o6, this), i4 = t4.v(this.options);
        t4.p(s5), this.T(i4), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i3 = T.get(t3.strings);
      return void 0 === i3 && T.set(t3.strings, i3 = new C(t3)), i3;
    }
    k(t3) {
      u(this._$AH) || (this._$AH = [], this._$AR());
      const i3 = this._$AH;
      let s5, e7 = 0;
      for (const o6 of t3)
        e7 === i3.length ? i3.push(s5 = new N(this.O(r3()), this.O(r3()), this, this.options)) : s5 = i3[e7], s5._$AI(o6), e7++;
      e7 < i3.length && (this._$AR(s5 && s5._$AB.nextSibling, e7), i3.length = e7);
    }
    _$AR(t3 = this._$AA.nextSibling, i3) {
      var s5;
      for (null === (s5 = this._$AP) || void 0 === s5 || s5.call(this, false, true, i3); t3 && t3 !== this._$AB; ) {
        const i4 = t3.nextSibling;
        t3.remove(), t3 = i4;
      }
    }
    setConnected(t3) {
      var i3;
      void 0 === this._$AM && (this._$Cm = t3, null === (i3 = this._$AP) || void 0 === i3 || i3.call(this, t3));
    }
  };
  var S2 = class {
    constructor(t3, i3, s5, e7, o6) {
      this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t3, this.name = i3, this._$AM = e7, this.options = o6, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = b;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3, i3 = this, s5, e7) {
      const o6 = this.strings;
      let n6 = false;
      if (void 0 === o6)
        t3 = P(this, t3, i3, 0), n6 = !d2(t3) || t3 !== this._$AH && t3 !== x, n6 && (this._$AH = t3);
      else {
        const e8 = t3;
        let l5, h3;
        for (t3 = o6[0], l5 = 0; l5 < o6.length - 1; l5++)
          h3 = P(this, e8[s5 + l5], i3, l5), h3 === x && (h3 = this._$AH[l5]), n6 || (n6 = !d2(h3) || h3 !== this._$AH[l5]), h3 === b ? t3 = b : t3 !== b && (t3 += (null != h3 ? h3 : "") + o6[l5 + 1]), this._$AH[l5] = h3;
      }
      n6 && !e7 && this.j(t3);
    }
    j(t3) {
      t3 === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t3 ? t3 : "");
    }
  };
  var M = class extends S2 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t3) {
      this.element[this.name] = t3 === b ? void 0 : t3;
    }
  };
  var R = s3 ? s3.emptyScript : "";
  var k = class extends S2 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t3) {
      t3 && t3 !== b ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
    }
  };
  var H = class extends S2 {
    constructor(t3, i3, s5, e7, o6) {
      super(t3, i3, s5, e7, o6), this.type = 5;
    }
    _$AI(t3, i3 = this) {
      var s5;
      if ((t3 = null !== (s5 = P(this, t3, i3, 0)) && void 0 !== s5 ? s5 : b) === x)
        return;
      const e7 = this._$AH, o6 = t3 === b && e7 !== b || t3.capture !== e7.capture || t3.once !== e7.once || t3.passive !== e7.passive, n6 = t3 !== b && (e7 === b || o6);
      o6 && this.element.removeEventListener(this.name, this, e7), n6 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      var i3, s5;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s5 = null === (i3 = this.options) || void 0 === i3 ? void 0 : i3.host) && void 0 !== s5 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var I = class {
    constructor(t3, i3, s5) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      P(this, t3);
    }
  };
  var z = i2.litHtmlPolyfillSupport;
  null == z || z(C, N), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.6.1");
  var Z = (t3, i3, s5) => {
    var e7, o6;
    const n6 = null !== (e7 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== e7 ? e7 : i3;
    let l5 = n6._$litPart$;
    if (void 0 === l5) {
      const t4 = null !== (o6 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== o6 ? o6 : null;
      n6._$litPart$ = l5 = new N(i3.insertBefore(r3(), t4), t4, void 0, null != s5 ? s5 : {});
    }
    return l5._$AI(t3), l5;
  };

  // node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends d {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t3, e7;
      const i3 = super.createRenderRoot();
      return null !== (t3 = (e7 = this.renderOptions).renderBefore) && void 0 !== t3 || (e7.renderBefore = i3.firstChild), i3;
    }
    update(t3) {
      const i3 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = Z(i3, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t3;
      super.connectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(true);
    }
    disconnectedCallback() {
      var t3;
      super.disconnectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(false);
    }
    render() {
      return x;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.2.2");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var e4 = (e7) => (n6) => "function" == typeof n6 ? ((e8, n7) => (customElements.define(e8, n7), n7))(e7, n6) : ((e8, n7) => {
    const { kind: t3, elements: s5 } = n7;
    return { kind: t3, elements: s5, finisher(n8) {
      customElements.define(e8, n8);
    } };
  })(e7, n6);

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n5;
  var e6 = null != (null === (n5 = window.HTMLSlotElement) || void 0 === n5 ? void 0 : n5.prototype.assignedElements) ? (o6, n6) => o6.assignedElements(n6) : (o6, n6) => o6.assignedNodes(n6).filter((o7) => o7.nodeType === Node.ELEMENT_NODE);

  // src/utils/options-element.ts
  var import_bootstrap_bundle_min = __toESM(require_bootstrap_bundle_min());

  // src/utils/bootstrap5.css.js
  var bootstrapCSS = i`@charset "UTF-8";
/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
}

hr:not([size]) {
  height: 1px;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1, .h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 2.5rem;
  }
}

h2, .h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 2rem;
  }
}

h3, .h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 1.75rem;
  }
}

h4, .h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 1.5rem;
  }
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-bs-original-title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small, .small {
  font-size: 0.875em;
}

mark, .mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: #0d6efd;
  text-decoration: underline;
}
a:hover {
  color: #0a58ca;
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
  direction: ltr /* rtl:ignore */;
  unicode-bidi: bidi-override;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: #d63384;
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 0.875em;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]::-webkit-calendar-picker-indicator {
  display: none;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.blockquote > :last-child {
  margin-bottom: 0;
}

.blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875em;
  color: #6c757d;
}
.blockquote-footer::before {
  content: "— ";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 0.875em;
  color: #6c757d;
}

.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }

  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }

  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }

  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }

  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }

  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.33333333%;
  }

  .offset-sm-2 {
    margin-left: 16.66666667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.33333333%;
  }

  .offset-sm-5 {
    margin-left: 41.66666667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.33333333%;
  }

  .offset-sm-8 {
    margin-left: 66.66666667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.33333333%;
  }

  .offset-sm-11 {
    margin-left: 91.66666667%;
  }

  .g-sm-0,
.gx-sm-0 {
    --bs-gutter-x: 0;
  }

  .g-sm-0,
.gy-sm-0 {
    --bs-gutter-y: 0;
  }

  .g-sm-1,
.gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-sm-1,
.gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-sm-2,
.gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-sm-2,
.gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-sm-3,
.gx-sm-3 {
    --bs-gutter-x: 1rem;
  }

  .g-sm-3,
.gy-sm-3 {
    --bs-gutter-y: 1rem;
  }

  .g-sm-4,
.gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-sm-4,
.gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-sm-5,
.gx-sm-5 {
    --bs-gutter-x: 3rem;
  }

  .g-sm-5,
.gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.33333333%;
  }

  .offset-md-2 {
    margin-left: 16.66666667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.33333333%;
  }

  .offset-md-5 {
    margin-left: 41.66666667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.33333333%;
  }

  .offset-md-8 {
    margin-left: 66.66666667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.33333333%;
  }

  .offset-md-11 {
    margin-left: 91.66666667%;
  }

  .g-md-0,
.gx-md-0 {
    --bs-gutter-x: 0;
  }

  .g-md-0,
.gy-md-0 {
    --bs-gutter-y: 0;
  }

  .g-md-1,
.gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-md-1,
.gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-md-2,
.gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-md-2,
.gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-md-3,
.gx-md-3 {
    --bs-gutter-x: 1rem;
  }

  .g-md-3,
.gy-md-3 {
    --bs-gutter-y: 1rem;
  }

  .g-md-4,
.gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-md-4,
.gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-md-5,
.gx-md-5 {
    --bs-gutter-x: 3rem;
  }

  .g-md-5,
.gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.33333333%;
  }

  .offset-lg-2 {
    margin-left: 16.66666667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.33333333%;
  }

  .offset-lg-5 {
    margin-left: 41.66666667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.33333333%;
  }

  .offset-lg-8 {
    margin-left: 66.66666667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.33333333%;
  }

  .offset-lg-11 {
    margin-left: 91.66666667%;
  }

  .g-lg-0,
.gx-lg-0 {
    --bs-gutter-x: 0;
  }

  .g-lg-0,
.gy-lg-0 {
    --bs-gutter-y: 0;
  }

  .g-lg-1,
.gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-lg-1,
.gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-lg-2,
.gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-lg-2,
.gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-lg-3,
.gx-lg-3 {
    --bs-gutter-x: 1rem;
  }

  .g-lg-3,
.gy-lg-3 {
    --bs-gutter-y: 1rem;
  }

  .g-lg-4,
.gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-lg-4,
.gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-lg-5,
.gx-lg-5 {
    --bs-gutter-x: 3rem;
  }

  .g-lg-5,
.gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.33333333%;
  }

  .offset-xl-2 {
    margin-left: 16.66666667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.33333333%;
  }

  .offset-xl-5 {
    margin-left: 41.66666667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.33333333%;
  }

  .offset-xl-8 {
    margin-left: 66.66666667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.33333333%;
  }

  .offset-xl-11 {
    margin-left: 91.66666667%;
  }

  .g-xl-0,
.gx-xl-0 {
    --bs-gutter-x: 0;
  }

  .g-xl-0,
.gy-xl-0 {
    --bs-gutter-y: 0;
  }

  .g-xl-1,
.gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-xl-1,
.gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-xl-2,
.gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-xl-2,
.gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-xl-3,
.gx-xl-3 {
    --bs-gutter-x: 1rem;
  }

  .g-xl-3,
.gy-xl-3 {
    --bs-gutter-y: 1rem;
  }

  .g-xl-4,
.gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-xl-4,
.gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-xl-5,
.gx-xl-5 {
    --bs-gutter-x: 3rem;
  }

  .g-xl-5,
.gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xxl-0 {
    margin-left: 0;
  }

  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }

  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }

  .offset-xxl-3 {
    margin-left: 25%;
  }

  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }

  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }

  .offset-xxl-6 {
    margin-left: 50%;
  }

  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }

  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }

  .offset-xxl-9 {
    margin-left: 75%;
  }

  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }

  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }

  .g-xxl-0,
.gx-xxl-0 {
    --bs-gutter-x: 0;
  }

  .g-xxl-0,
.gy-xxl-0 {
    --bs-gutter-y: 0;
  }

  .g-xxl-1,
.gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-xxl-1,
.gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-xxl-2,
.gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-xxl-2,
.gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-xxl-3,
.gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }

  .g-xxl-3,
.gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }

  .g-xxl-4,
.gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-xxl-4,
.gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-xxl-5,
.gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }

  .g-xxl-5,
.gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.table {
  --bs-table-bg: transparent;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: #212529;
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: #212529;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212529;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  vertical-align: top;
  border-color: #dee2e6;
}
.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
.table > tbody {
  vertical-align: inherit;
}
.table > thead {
  vertical-align: bottom;
}
.table > :not(:last-child) > :last-child > * {
  border-bottom-color: currentColor;
}

.caption-top {
  caption-side: top;
}

.table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}

.table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) {
  --bs-table-accent-bg: var(--bs-table-striped-bg);
  color: var(--bs-table-striped-color);
}

.table-active {
  --bs-table-accent-bg: var(--bs-table-active-bg);
  color: var(--bs-table-active-color);
}

.table-hover > tbody > tr:hover {
  --bs-table-accent-bg: var(--bs-table-hover-bg);
  color: var(--bs-table-hover-color);
}

.table-primary {
  --bs-table-bg: #cfe2ff;
  --bs-table-striped-bg: #c5d7f2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bacbe6;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfd1ec;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bacbe6;
}

.table-secondary {
  --bs-table-bg: #e2e3e5;
  --bs-table-striped-bg: #d7d8da;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #cbccce;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #d1d2d4;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #cbccce;
}

.table-success {
  --bs-table-bg: #d1e7dd;
  --bs-table-striped-bg: #c7dbd2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bcd0c7;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c1d6cc;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bcd0c7;
}

.table-info {
  --bs-table-bg: #cff4fc;
  --bs-table-striped-bg: #c5e8ef;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #badce3;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfe2e9;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #badce3;
}

.table-warning {
  --bs-table-bg: #fff3cd;
  --bs-table-striped-bg: #f2e7c3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e6dbb9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #ece1be;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #e6dbb9;
}

.table-danger {
  --bs-table-bg: #f8d7da;
  --bs-table-striped-bg: #eccccf;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfc2c4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5c7ca;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dfc2c4;
}

.table-light {
  --bs-table-bg: #f8f9fa;
  --bs-table-striped-bg: #ecedee;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfe0e1;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5e6e7;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dfe0e1;
}

.table-dark {
  --bs-table-bg: #212529;
  --bs-table-striped-bg: #2c3034;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373b3e;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323539;
  --bs-table-hover-color: #fff;
  color: #fff;
  border-color: #373b3e;
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.form-label {
  margin-bottom: 0.5rem;
}

.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #6c757d;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-control::-webkit-date-and-time-value {
  height: 1.5em;
}
.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}
.form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #dde0e3;
}
.form-control::-webkit-file-upload-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #dde0e3;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  min-height: calc(1.5em + (0.5rem + 2px));
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}
.form-control-sm::-webkit-file-upload-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg {
  min-height: calc(1.5em + (1rem + 2px));
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}
.form-control-lg::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: calc(1.5em + (0.75rem + 2px));
}
textarea.form-control-sm {
  min-height: calc(1.5em + (0.5rem + 2px));
}
textarea.form-control-lg {
  min-height: calc(1.5em + (1rem + 2px));
}

.form-control-color {
  max-width: 3rem;
  height: auto;
  padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  height: 1.5em;
  border-radius: 0.25rem;
}
.form-control-color::-webkit-color-swatch {
  height: 1.5em;
  border-radius: 0.25rem;
}

.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-select {
    transition: none;
  }
}
.form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
.form-select:disabled {
  background-color: #e9ecef;
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #212529;
}

.form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
}

.form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: #0d6efd;
  border-color: #0d6efd;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  opacity: 0.5;
}

.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  width: 2em;
  margin-left: -2.5em;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

.form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-range:focus {
  outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}
.form-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 0.75rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control {
  padding: 1rem 0.75rem;
}
.form-floating > .form-control::-moz-placeholder {
  color: transparent;
}
.form-floating > .form-control::placeholder {
  color: transparent;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus {
  z-index: 3;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 3;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 3rem;
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #198754;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(25, 135, 84, 0.9);
  border-radius: 0.25rem;
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: #198754;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:valid, .form-select.is-valid {
  border-color: #198754;
}
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
  padding-right: 4.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: #198754;
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: #198754;
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: #198754;
}

.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group .form-control:valid, .input-group .form-control.is-valid,
.was-validated .input-group .form-select:valid,
.input-group .form-select.is-valid {
  z-index: 1;
}
.was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus,
.was-validated .input-group .form-select:valid:focus,
.input-group .form-select.is-valid:focus {
  z-index: 3;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 0.25rem;
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: #dc3545;
}
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
  padding-right: 4.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: #dc3545;
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: #dc3545;
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: #dc3545;
}

.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid,
.was-validated .input-group .form-select:invalid,
.input-group .form-select.is-invalid {
  z-index: 2;
}
.was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus,
.was-validated .input-group .form-select:invalid:focus,
.input-group .form-select.is-invalid:focus {
  z-index: 3;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212529;
}
.btn-check:focus + .btn, .btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  pointer-events: none;
  opacity: 0.65;
}

.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
.btn-check:focus + .btn-primary, .btn-primary:focus {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}
.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #0a58ca;
  border-color: #0a53be;
}
.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}
.btn-primary:disabled, .btn-primary.disabled {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-secondary:hover {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
}
.btn-check:focus + .btn-secondary, .btn-secondary:focus {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #565e64;
  border-color: #51585e;
}
.btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.btn-secondary:disabled, .btn-secondary.disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-success {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-success:hover {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
}
.btn-check:focus + .btn-success, .btn-success:focus {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #146c43;
  border-color: #13653f;
}
.btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-success:disabled, .btn-success.disabled {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}

.btn-info {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-info:hover {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
}
.btn-check:focus + .btn-info, .btn-info:focus {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {
  color: #000;
  background-color: #3dd5f3;
  border-color: #25cff2;
}
.btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-info:disabled, .btn-info.disabled {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}

.btn-warning {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-warning:hover {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
}
.btn-check:focus + .btn-warning, .btn-warning:focus {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {
  color: #000;
  background-color: #ffcd39;
  border-color: #ffc720;
}
.btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-warning:disabled, .btn-warning.disabled {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
}
.btn-check:focus + .btn-danger, .btn-danger:focus {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #b02a37;
  border-color: #a52834;
}
.btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-danger:disabled, .btn-danger.disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-light {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-light:hover {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
}
.btn-check:focus + .btn-light, .btn-light:focus {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
}
.btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.btn-light:disabled, .btn-light.disabled {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-dark {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-dark:hover {
  color: #fff;
  background-color: #1c1f23;
  border-color: #1a1e21;
}
.btn-check:focus + .btn-dark, .btn-dark:focus {
  color: #fff;
  background-color: #1c1f23;
  border-color: #1a1e21;
  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1a1e21;
  border-color: #191c1f;
}
.btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.btn-dark:disabled, .btn-dark.disabled {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}

.btn-outline-primary {
  color: #0d6efd;
  border-color: #0d6efd;
}
.btn-outline-primary:hover {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-outline-primary:disabled, .btn-outline-primary.disabled {
  color: #0d6efd;
  background-color: transparent;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}
.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {
  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-outline-secondary:disabled, .btn-outline-secondary.disabled {
  color: #6c757d;
  background-color: transparent;
}

.btn-outline-success {
  color: #198754;
  border-color: #198754;
}
.btn-outline-success:hover {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:focus + .btn-outline-success, .btn-outline-success:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-outline-success:disabled, .btn-outline-success.disabled {
  color: #198754;
  background-color: transparent;
}

.btn-outline-info {
  color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-outline-info:hover {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:focus + .btn-outline-info, .btn-outline-info:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-outline-info:disabled, .btn-outline-info.disabled {
  color: #0dcaf0;
  background-color: transparent;
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}
.btn-outline-warning:hover {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-outline-warning:disabled, .btn-outline-warning.disabled {
  color: #ffc107;
  background-color: transparent;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}
.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-outline-danger:disabled, .btn-outline-danger.disabled {
  color: #dc3545;
  background-color: transparent;
}

.btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-outline-light:hover {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-check:focus + .btn-outline-light, .btn-outline-light:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-outline-light:disabled, .btn-outline-light.disabled {
  color: #f8f9fa;
  background-color: transparent;
}

.btn-outline-dark {
  color: #212529;
  border-color: #212529;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-outline-dark:disabled, .btn-outline-dark.disabled {
  color: #212529;
  background-color: transparent;
}

.btn-link {
  font-weight: 400;
  color: #0d6efd;
  text-decoration: underline;
}
.btn-link:hover {
  color: #0a58ca;
}
.btn-link:disabled, .btn-link.disabled {
  color: #6c757d;
}

.btn-lg, .btn-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}

.dropup,
.dropend,
.dropdown,
.dropstart {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: 0.125rem;
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-item:hover, .dropdown-item:focus {
  color: #1e2125;
  background-color: #e9ecef;
}
.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #0d6efd;
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: #adb5bd;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1rem;
  color: #212529;
}

.dropdown-menu-dark {
  color: #dee2e6;
  background-color: #343a40;
  border-color: rgba(0, 0, 0, 0.15);
}
.dropdown-menu-dark .dropdown-item {
  color: #dee2e6;
}
.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
}
.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {
  color: #fff;
  background-color: #0d6efd;
}
.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {
  color: #adb5bd;
}
.dropdown-menu-dark .dropdown-divider {
  border-color: rgba(0, 0, 0, 0.15);
}
.dropdown-menu-dark .dropdown-item-text {
  color: #dee2e6;
}
.dropdown-menu-dark .dropdown-header {
  color: #adb5bd;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group > .btn-check:checked + .btn,
.btn-group > .btn-check:focus + .btn,
.btn-group > .btn:hover,
.btn-group > .btn:focus,
.btn-group > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn-check:checked + .btn,
.btn-group-vertical > .btn-check:focus + .btn,
.btn-group-vertical > .btn:hover,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) {
  margin-left: -1px;
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:nth-child(n+3),
.btn-group > :not(.btn-check) + .btn,
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: -1px;
}
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn ~ .btn,
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #0d6efd;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover, .nav-link:focus {
  color: #0a58ca;
}
.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}
.nav-tabs .nav-link {
  margin-bottom: -1px;
  background: none;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
  isolation: isolate;
}
.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  background: none;
  border: 0;
  border-radius: 0.25rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #0d6efd;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 0.25rem;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}
.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.55);
  border-color: rgba(0, 0, 0, 0.1);
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-text a,
.navbar-light .navbar-text a:hover,
.navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
  color: #fff;
}
.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
  color: #fff;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.55);
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}
.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .nav-link.active {
  color: #fff;
}
.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.55);
  border-color: rgba(255, 255, 255, 0.1);
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.55);
}
.navbar-dark .navbar-text a,
.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
  color: #fff;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
}

.card-subtitle {
  margin-top: -0.25rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}
.card-link + .card-link {
  margin-left: 1rem;
}

.card-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-footer {
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
  margin-left: -0.5rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card-group > .card {
  margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
.card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
.card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
.card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
.card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}
.accordion-button:not(.collapsed) {
  color: #0c63e4;
  background-color: #e7f1ff;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}
.accordion-button::after {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.accordion-item:first-of-type {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.accordion-body {
  padding: 1rem 1.25rem;
}

.accordion-flush .accordion-collapse {
  border-width: 0;
}
.accordion-flush .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush .accordion-item .accordion-button {
  border-radius: 0;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  margin-bottom: 1rem;
  list-style: none;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;
  color: #6c757d;
  content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
.breadcrumb-item.active {
  color: #6c757d;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.page-link {
  position: relative;
  display: block;
  color: #0d6efd;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #dee2e6;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .page-link {
    transition: none;
  }
}
.page-link:hover {
  z-index: 2;
  color: #0a58ca;
  background-color: #e9ecef;
  border-color: #dee2e6;
}
.page-link:focus {
  z-index: 3;
  color: #0a58ca;
  background-color: #e9ecef;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.page-item:not(:first-child) .page-link {
  margin-left: -1px;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}

.page-link {
  padding: 0.375rem 0.75rem;
}

.page-item:first-child .page-link {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}
.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.alert {
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 3rem;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
}

.alert-primary {
  color: #084298;
  background-color: #cfe2ff;
  border-color: #b6d4fe;
}
.alert-primary .alert-link {
  color: #06357a;
}

.alert-secondary {
  color: #41464b;
  background-color: #e2e3e5;
  border-color: #d3d6d8;
}
.alert-secondary .alert-link {
  color: #34383c;
}

.alert-success {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}
.alert-success .alert-link {
  color: #0c4128;
}

.alert-info {
  color: #055160;
  background-color: #cff4fc;
  border-color: #b6effb;
}
.alert-info .alert-link {
  color: #04414d;
}

.alert-warning {
  color: #664d03;
  background-color: #fff3cd;
  border-color: #ffecb5;
}
.alert-warning .alert-link {
  color: #523e02;
}

.alert-danger {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}
.alert-danger .alert-link {
  color: #6a1a21;
}

.alert-light {
  color: #636464;
  background-color: #fefefe;
  border-color: #fdfdfe;
}
.alert-light .alert-link {
  color: #4f5050;
}

.alert-dark {
  color: #141619;
  background-color: #d3d3d4;
  border-color: #bcbebf;
}
.alert-dark .alert-link {
  color: #101214;
}

@-webkit-keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #0d6efd;
  transition: width 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  -webkit-animation: 1s linear infinite progress-bar-stripes;
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    -webkit-animation: none;
    animation: none;
  }
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > li::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}
.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .list-group-horizontal-xxl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #084298;
  background-color: #cfe2ff;
}
.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
  color: #084298;
  background-color: #bacbe6;
}
.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #084298;
  border-color: #084298;
}

.list-group-item-secondary {
  color: #41464b;
  background-color: #e2e3e5;
}
.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
  color: #41464b;
  background-color: #cbccce;
}
.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #41464b;
  border-color: #41464b;
}

.list-group-item-success {
  color: #0f5132;
  background-color: #d1e7dd;
}
.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
  color: #0f5132;
  background-color: #bcd0c7;
}
.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #0f5132;
  border-color: #0f5132;
}

.list-group-item-info {
  color: #055160;
  background-color: #cff4fc;
}
.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
  color: #055160;
  background-color: #badce3;
}
.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #055160;
  border-color: #055160;
}

.list-group-item-warning {
  color: #664d03;
  background-color: #fff3cd;
}
.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
  color: #664d03;
  background-color: #e6dbb9;
}
.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #664d03;
  border-color: #664d03;
}

.list-group-item-danger {
  color: #842029;
  background-color: #f8d7da;
}
.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
  color: #842029;
  background-color: #dfc2c4;
}
.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #842029;
  border-color: #842029;
}

.list-group-item-light {
  color: #636464;
  background-color: #fefefe;
}
.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
  color: #636464;
  background-color: #e5e5e5;
}
.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #636464;
  border-color: #636464;
}

.list-group-item-dark {
  color: #141619;
  background-color: #d3d3d4;
}
.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
  color: #141619;
  background-color: #bebebf;
}
.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #141619;
  border-color: #141619;
}

.btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
}
.btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.btn-close:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  opacity: 1;
}
.btn-close:disabled, .btn-close.disabled {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  opacity: 0.25;
}

.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}

.toast {
  width: 350px;
  max-width: 100%;
  font-size: 0.875rem;
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.toast:not(.showing):not(.show) {
  opacity: 0;
}
.toast.hide {
  display: none;
}

.toast-container {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  pointer-events: none;
}
.toast-container > :not(:last-child) {
  margin-bottom: 0.75rem;
}

.toast-header {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  color: #6c757d;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.toast-header .btn-close {
  margin-right: -0.375rem;
  margin-left: 0.75rem;
}

.toast-body {
  padding: 0.75rem;
  word-wrap: break-word;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  height: calc(100% - 1rem);
}
.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.modal-footer > * {
  margin: 0.25rem;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-scrollable {
    height: calc(100% - 3.5rem);
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }

  .modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
.modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}
.modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.modal-fullscreen .modal-header {
  border-radius: 0;
}
.modal-fullscreen .modal-body {
  overflow-y: auto;
}
.modal-fullscreen .modal-footer {
  border-radius: 0;
}

@media (max-width: 575.98px) {
  .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 767.98px) {
  .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1199.98px) {
  .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1399.98px) {
  .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
}
.tooltip {
  position: absolute;
  z-index: 1080;
  display: block;
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: 0.9;
}
.tooltip .tooltip-arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}
.tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top] {
  padding: 0.4rem 0;
}
.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: 0;
}
.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right] {
  padding: 0 0.4rem;
}
.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom] {
  padding: 0.4rem 0;
}
.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: 0;
}
.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left] {
  padding: 0 0.4rem;
}
.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0 /* rtl:ignore */;
  z-index: 1070;
  display: block;
  max-width: 276px;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}
.popover .popover-arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
}
.popover .popover-arrow::before, .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-0.5rem - 1px);
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}

.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}

.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-0.5rem - 1px);
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f0f0f0;
}

.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}

.popover-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 1rem 1rem;
  color: #212529;
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

/* rtl:begin:ignore */
.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}

/* rtl:end:ignore */
.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
.carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

/* rtl:options: {
  "autoRename": true,
  "stringMap":[ {
    "name"    : "prev-next",
    "search"  : "prev",
    "replace" : "next"
  } ]
} */
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  list-style: none;
}
.carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators [data-bs-target] {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.carousel-dark .carousel-control-prev-icon,
.carousel-dark .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #000;
}
.carousel-dark .carousel-caption {
  color: #000;
}

@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: 0.75s linear infinite spinner-border;
  animation: 0.75s linear infinite spinner-border;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}

@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: 0.75s linear infinite spinner-grow;
  animation: 0.75s linear infinite spinner-grow;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .spinner-border,
.spinner-grow {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
  }
}
.offcanvas {
  position: fixed;
  bottom: 0;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  visibility: hidden;
  background-color: #fff;
  background-clip: padding-box;
  outline: 0;
  transition: transform 0.3s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .offcanvas {
    transition: none;
  }
}

.offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
}
.offcanvas-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin-top: -0.5rem;
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
}

.offcanvas-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.offcanvas-body {
  flex-grow: 1;
  padding: 1rem 1rem;
  overflow-y: auto;
}

.offcanvas-start {
  top: 0;
  left: 0;
  width: 400px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateX(-100%);
}

.offcanvas-end {
  top: 0;
  right: 0;
  width: 400px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
}

.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateY(-100%);
}

.offcanvas-bottom {
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateY(100%);
}

.offcanvas.show {
  transform: none;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.link-primary {
  color: #0d6efd;
}
.link-primary:hover, .link-primary:focus {
  color: #0a58ca;
}

.link-secondary {
  color: #6c757d;
}
.link-secondary:hover, .link-secondary:focus {
  color: #565e64;
}

.link-success {
  color: #198754;
}
.link-success:hover, .link-success:focus {
  color: #146c43;
}

.link-info {
  color: #0dcaf0;
}
.link-info:hover, .link-info:focus {
  color: #3dd5f3;
}

.link-warning {
  color: #ffc107;
}
.link-warning:hover, .link-warning:focus {
  color: #ffcd39;
}

.link-danger {
  color: #dc3545;
}
.link-danger:hover, .link-danger:focus {
  color: #b02a37;
}

.link-light {
  color: #f8f9fa;
}
.link-light:hover, .link-light:focus {
  color: #f9fafb;
}

.link-dark {
  color: #212529;
}
.link-dark:hover, .link-dark:focus {
  color: #1a1e21;
}

.ratio {
  position: relative;
  width: 100%;
}
.ratio::before {
  display: block;
  padding-top: var(--bs-aspect-ratio);
  content: "";
}
.ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ratio-1x1 {
  --bs-aspect-ratio: 100%;
}

.ratio-4x3 {
  --bs-aspect-ratio: calc(3 / 4 * 100%);
}

.ratio-16x9 {
  --bs-aspect-ratio: calc(9 / 16 * 100%);
}

.ratio-21x9 {
  --bs-aspect-ratio: calc(9 / 21 * 100%);
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1020;
}

@media (min-width: 576px) {
  .sticky-sm-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .sticky-md-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .sticky-lg-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1200px) {
  .sticky-xl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1400px) {
  .sticky-xxl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.float-start {
  float: left !important;
}

.float-end {
  float: right !important;
}

.float-none {
  float: none !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-visible {
  overflow: visible !important;
}

.overflow-scroll {
  overflow: scroll !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-grid {
  display: grid !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.d-none {
  display: none !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.top-0 {
  top: 0 !important;
}

.top-50 {
  top: 50% !important;
}

.top-100 {
  top: 100% !important;
}

.bottom-0 {
  bottom: 0 !important;
}

.bottom-50 {
  bottom: 50% !important;
}

.bottom-100 {
  bottom: 100% !important;
}

.start-0 {
  left: 0 !important;
}

.start-50 {
  left: 50% !important;
}

.start-100 {
  left: 100% !important;
}

.end-0 {
  right: 0 !important;
}

.end-50 {
  right: 50% !important;
}

.end-100 {
  right: 100% !important;
}

.translate-middle {
  transform: translate(-50%, -50%) !important;
}

.translate-middle-x {
  transform: translateX(-50%) !important;
}

.translate-middle-y {
  transform: translateY(-50%) !important;
}

.border {
  border: 1px solid #dee2e6 !important;
}

.border-0 {
  border: 0 !important;
}

.border-top {
  border-top: 1px solid #dee2e6 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-end {
  border-right: 1px solid #dee2e6 !important;
}

.border-end-0 {
  border-right: 0 !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-start {
  border-left: 1px solid #dee2e6 !important;
}

.border-start-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: #0d6efd !important;
}

.border-secondary {
  border-color: #6c757d !important;
}

.border-success {
  border-color: #198754 !important;
}

.border-info {
  border-color: #0dcaf0 !important;
}

.border-warning {
  border-color: #ffc107 !important;
}

.border-danger {
  border-color: #dc3545 !important;
}

.border-light {
  border-color: #f8f9fa !important;
}

.border-dark {
  border-color: #212529 !important;
}

.border-white {
  border-color: #fff !important;
}

.border-1 {
  border-width: 1px !important;
}

.border-2 {
  border-width: 2px !important;
}

.border-3 {
  border-width: 3px !important;
}

.border-4 {
  border-width: 4px !important;
}

.border-5 {
  border-width: 5px !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.vw-100 {
  width: 100vw !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mh-100 {
  max-height: 100% !important;
}

.vh-100 {
  height: 100vh !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.gap-0 {
  gap: 0 !important;
}

.gap-1 {
  gap: 0.25rem !important;
}

.gap-2 {
  gap: 0.5rem !important;
}

.gap-3 {
  gap: 1rem !important;
}

.gap-4 {
  gap: 1.5rem !important;
}

.gap-5 {
  gap: 3rem !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.justify-content-evenly {
  justify-content: space-evenly !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-last {
  order: 6 !important;
}

.m-0 {
  margin: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mt-auto {
  margin-top: auto !important;
}

.me-0 {
  margin-right: 0 !important;
}

.me-1 {
  margin-right: 0.25rem !important;
}

.me-2 {
  margin-right: 0.5rem !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.me-4 {
  margin-right: 1.5rem !important;
}

.me-5 {
  margin-right: 3rem !important;
}

.me-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ms-0 {
  margin-left: 0 !important;
}

.ms-1 {
  margin-left: 0.25rem !important;
}

.ms-2 {
  margin-left: 0.5rem !important;
}

.ms-3 {
  margin-left: 1rem !important;
}

.ms-4 {
  margin-left: 1.5rem !important;
}

.ms-5 {
  margin-left: 3rem !important;
}

.ms-auto {
  margin-left: auto !important;
}

.p-0 {
  padding: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pt-3 {
  padding-top: 1rem !important;
}

.pt-4 {
  padding-top: 1.5rem !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pe-0 {
  padding-right: 0 !important;
}

.pe-1 {
  padding-right: 0.25rem !important;
}

.pe-2 {
  padding-right: 0.5rem !important;
}

.pe-3 {
  padding-right: 1rem !important;
}

.pe-4 {
  padding-right: 1.5rem !important;
}

.pe-5 {
  padding-right: 3rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pb-3 {
  padding-bottom: 1rem !important;
}

.pb-4 {
  padding-bottom: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 3rem !important;
}

.ps-0 {
  padding-left: 0 !important;
}

.ps-1 {
  padding-left: 0.25rem !important;
}

.ps-2 {
  padding-left: 0.5rem !important;
}

.ps-3 {
  padding-left: 1rem !important;
}

.ps-4 {
  padding-left: 1.5rem !important;
}

.ps-5 {
  padding-left: 3rem !important;
}

.font-monospace {
  font-family: var(--bs-font-monospace) !important;
}

.fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}

.fs-2 {
  font-size: calc(1.325rem + 0.9vw) !important;
}

.fs-3 {
  font-size: calc(1.3rem + 0.6vw) !important;
}

.fs-4 {
  font-size: calc(1.275rem + 0.3vw) !important;
}

.fs-5 {
  font-size: 1.25rem !important;
}

.fs-6 {
  font-size: 1rem !important;
}

.fst-italic {
  font-style: italic !important;
}

.fst-normal {
  font-style: normal !important;
}

.fw-light {
  font-weight: 300 !important;
}

.fw-lighter {
  font-weight: lighter !important;
}

.fw-normal {
  font-weight: 400 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.fw-bolder {
  font-weight: bolder !important;
}

.lh-1 {
  line-height: 1 !important;
}

.lh-sm {
  line-height: 1.25 !important;
}

.lh-base {
  line-height: 1.5 !important;
}

.lh-lg {
  line-height: 2 !important;
}

.text-start {
  text-align: left !important;
}

.text-end {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-underline {
  text-decoration: underline !important;
}

.text-decoration-line-through {
  text-decoration: line-through !important;
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}

/* rtl:end:remove */
.text-primary {
  color: #0d6efd !important;
}

.text-secondary {
  color: #6c757d !important;
}

.text-success {
  color: #198754 !important;
}

.text-info {
  color: #0dcaf0 !important;
}

.text-warning {
  color: #ffc107 !important;
}

.text-danger {
  color: #dc3545 !important;
}

.text-light {
  color: #f8f9fa !important;
}

.text-dark {
  color: #212529 !important;
}

.text-white {
  color: #fff !important;
}

.text-body {
  color: #212529 !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-black-50 {
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-reset {
  color: inherit !important;
}

.bg-primary {
  background-color: #0d6efd !important;
}

.bg-secondary {
  background-color: #6c757d !important;
}

.bg-success {
  background-color: #198754 !important;
}

.bg-info {
  background-color: #0dcaf0 !important;
}

.bg-warning {
  background-color: #ffc107 !important;
}

.bg-danger {
  background-color: #dc3545 !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.bg-dark {
  background-color: #212529 !important;
}

.bg-body {
  background-color: #fff !important;
}

.bg-white {
  background-color: #fff !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.bg-gradient {
  background-image: var(--bs-gradient) !important;
}

.user-select-all {
  -webkit-user-select: all !important;
  -moz-user-select: all !important;
  user-select: all !important;
}

.user-select-auto {
  -webkit-user-select: auto !important;
  -moz-user-select: auto !important;
  user-select: auto !important;
}

.user-select-none {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  user-select: none !important;
}

.pe-none {
  pointer-events: none !important;
}

.pe-auto {
  pointer-events: auto !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-1 {
  border-radius: 0.2rem !important;
}

.rounded-2 {
  border-radius: 0.25rem !important;
}

.rounded-3 {
  border-radius: 0.3rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.rounded-end {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-start {
  border-bottom-left-radius: 0.25rem !important;
  border-top-left-radius: 0.25rem !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

@media (min-width: 576px) {
  .float-sm-start {
    float: left !important;
  }

  .float-sm-end {
    float: right !important;
  }

  .float-sm-none {
    float: none !important;
  }

  .d-sm-inline {
    display: inline !important;
  }

  .d-sm-inline-block {
    display: inline-block !important;
  }

  .d-sm-block {
    display: block !important;
  }

  .d-sm-grid {
    display: grid !important;
  }

  .d-sm-table {
    display: table !important;
  }

  .d-sm-table-row {
    display: table-row !important;
  }

  .d-sm-table-cell {
    display: table-cell !important;
  }

  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-inline-flex {
    display: inline-flex !important;
  }

  .d-sm-none {
    display: none !important;
  }

  .flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .flex-sm-row {
    flex-direction: row !important;
  }

  .flex-sm-column {
    flex-direction: column !important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-sm-0 {
    gap: 0 !important;
  }

  .gap-sm-1 {
    gap: 0.25rem !important;
  }

  .gap-sm-2 {
    gap: 0.5rem !important;
  }

  .gap-sm-3 {
    gap: 1rem !important;
  }

  .gap-sm-4 {
    gap: 1.5rem !important;
  }

  .gap-sm-5 {
    gap: 3rem !important;
  }

  .justify-content-sm-start {
    justify-content: flex-start !important;
  }

  .justify-content-sm-end {
    justify-content: flex-end !important;
  }

  .justify-content-sm-center {
    justify-content: center !important;
  }

  .justify-content-sm-between {
    justify-content: space-between !important;
  }

  .justify-content-sm-around {
    justify-content: space-around !important;
  }

  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-sm-start {
    align-items: flex-start !important;
  }

  .align-items-sm-end {
    align-items: flex-end !important;
  }

  .align-items-sm-center {
    align-items: center !important;
  }

  .align-items-sm-baseline {
    align-items: baseline !important;
  }

  .align-items-sm-stretch {
    align-items: stretch !important;
  }

  .align-content-sm-start {
    align-content: flex-start !important;
  }

  .align-content-sm-end {
    align-content: flex-end !important;
  }

  .align-content-sm-center {
    align-content: center !important;
  }

  .align-content-sm-between {
    align-content: space-between !important;
  }

  .align-content-sm-around {
    align-content: space-around !important;
  }

  .align-content-sm-stretch {
    align-content: stretch !important;
  }

  .align-self-sm-auto {
    align-self: auto !important;
  }

  .align-self-sm-start {
    align-self: flex-start !important;
  }

  .align-self-sm-end {
    align-self: flex-end !important;
  }

  .align-self-sm-center {
    align-self: center !important;
  }

  .align-self-sm-baseline {
    align-self: baseline !important;
  }

  .align-self-sm-stretch {
    align-self: stretch !important;
  }

  .order-sm-first {
    order: -1 !important;
  }

  .order-sm-0 {
    order: 0 !important;
  }

  .order-sm-1 {
    order: 1 !important;
  }

  .order-sm-2 {
    order: 2 !important;
  }

  .order-sm-3 {
    order: 3 !important;
  }

  .order-sm-4 {
    order: 4 !important;
  }

  .order-sm-5 {
    order: 5 !important;
  }

  .order-sm-last {
    order: 6 !important;
  }

  .m-sm-0 {
    margin: 0 !important;
  }

  .m-sm-1 {
    margin: 0.25rem !important;
  }

  .m-sm-2 {
    margin: 0.5rem !important;
  }

  .m-sm-3 {
    margin: 1rem !important;
  }

  .m-sm-4 {
    margin: 1.5rem !important;
  }

  .m-sm-5 {
    margin: 3rem !important;
  }

  .m-sm-auto {
    margin: auto !important;
  }

  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-sm-0 {
    margin-top: 0 !important;
  }

  .mt-sm-1 {
    margin-top: 0.25rem !important;
  }

  .mt-sm-2 {
    margin-top: 0.5rem !important;
  }

  .mt-sm-3 {
    margin-top: 1rem !important;
  }

  .mt-sm-4 {
    margin-top: 1.5rem !important;
  }

  .mt-sm-5 {
    margin-top: 3rem !important;
  }

  .mt-sm-auto {
    margin-top: auto !important;
  }

  .me-sm-0 {
    margin-right: 0 !important;
  }

  .me-sm-1 {
    margin-right: 0.25rem !important;
  }

  .me-sm-2 {
    margin-right: 0.5rem !important;
  }

  .me-sm-3 {
    margin-right: 1rem !important;
  }

  .me-sm-4 {
    margin-right: 1.5rem !important;
  }

  .me-sm-5 {
    margin-right: 3rem !important;
  }

  .me-sm-auto {
    margin-right: auto !important;
  }

  .mb-sm-0 {
    margin-bottom: 0 !important;
  }

  .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-sm-3 {
    margin-bottom: 1rem !important;
  }

  .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }

  .mb-sm-auto {
    margin-bottom: auto !important;
  }

  .ms-sm-0 {
    margin-left: 0 !important;
  }

  .ms-sm-1 {
    margin-left: 0.25rem !important;
  }

  .ms-sm-2 {
    margin-left: 0.5rem !important;
  }

  .ms-sm-3 {
    margin-left: 1rem !important;
  }

  .ms-sm-4 {
    margin-left: 1.5rem !important;
  }

  .ms-sm-5 {
    margin-left: 3rem !important;
  }

  .ms-sm-auto {
    margin-left: auto !important;
  }

  .p-sm-0 {
    padding: 0 !important;
  }

  .p-sm-1 {
    padding: 0.25rem !important;
  }

  .p-sm-2 {
    padding: 0.5rem !important;
  }

  .p-sm-3 {
    padding: 1rem !important;
  }

  .p-sm-4 {
    padding: 1.5rem !important;
  }

  .p-sm-5 {
    padding: 3rem !important;
  }

  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-sm-0 {
    padding-top: 0 !important;
  }

  .pt-sm-1 {
    padding-top: 0.25rem !important;
  }

  .pt-sm-2 {
    padding-top: 0.5rem !important;
  }

  .pt-sm-3 {
    padding-top: 1rem !important;
  }

  .pt-sm-4 {
    padding-top: 1.5rem !important;
  }

  .pt-sm-5 {
    padding-top: 3rem !important;
  }

  .pe-sm-0 {
    padding-right: 0 !important;
  }

  .pe-sm-1 {
    padding-right: 0.25rem !important;
  }

  .pe-sm-2 {
    padding-right: 0.5rem !important;
  }

  .pe-sm-3 {
    padding-right: 1rem !important;
  }

  .pe-sm-4 {
    padding-right: 1.5rem !important;
  }

  .pe-sm-5 {
    padding-right: 3rem !important;
  }

  .pb-sm-0 {
    padding-bottom: 0 !important;
  }

  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }

  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }

  .ps-sm-0 {
    padding-left: 0 !important;
  }

  .ps-sm-1 {
    padding-left: 0.25rem !important;
  }

  .ps-sm-2 {
    padding-left: 0.5rem !important;
  }

  .ps-sm-3 {
    padding-left: 1rem !important;
  }

  .ps-sm-4 {
    padding-left: 1.5rem !important;
  }

  .ps-sm-5 {
    padding-left: 3rem !important;
  }

  .text-sm-start {
    text-align: left !important;
  }

  .text-sm-end {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .float-md-start {
    float: left !important;
  }

  .float-md-end {
    float: right !important;
  }

  .float-md-none {
    float: none !important;
  }

  .d-md-inline {
    display: inline !important;
  }

  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }

  .d-md-grid {
    display: grid !important;
  }

  .d-md-table {
    display: table !important;
  }

  .d-md-table-row {
    display: table-row !important;
  }

  .d-md-table-cell {
    display: table-cell !important;
  }

  .d-md-flex {
    display: flex !important;
  }

  .d-md-inline-flex {
    display: inline-flex !important;
  }

  .d-md-none {
    display: none !important;
  }

  .flex-md-fill {
    flex: 1 1 auto !important;
  }

  .flex-md-row {
    flex-direction: row !important;
  }

  .flex-md-column {
    flex-direction: column !important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-md-0 {
    gap: 0 !important;
  }

  .gap-md-1 {
    gap: 0.25rem !important;
  }

  .gap-md-2 {
    gap: 0.5rem !important;
  }

  .gap-md-3 {
    gap: 1rem !important;
  }

  .gap-md-4 {
    gap: 1.5rem !important;
  }

  .gap-md-5 {
    gap: 3rem !important;
  }

  .justify-content-md-start {
    justify-content: flex-start !important;
  }

  .justify-content-md-end {
    justify-content: flex-end !important;
  }

  .justify-content-md-center {
    justify-content: center !important;
  }

  .justify-content-md-between {
    justify-content: space-between !important;
  }

  .justify-content-md-around {
    justify-content: space-around !important;
  }

  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-md-start {
    align-items: flex-start !important;
  }

  .align-items-md-end {
    align-items: flex-end !important;
  }

  .align-items-md-center {
    align-items: center !important;
  }

  .align-items-md-baseline {
    align-items: baseline !important;
  }

  .align-items-md-stretch {
    align-items: stretch !important;
  }

  .align-content-md-start {
    align-content: flex-start !important;
  }

  .align-content-md-end {
    align-content: flex-end !important;
  }

  .align-content-md-center {
    align-content: center !important;
  }

  .align-content-md-between {
    align-content: space-between !important;
  }

  .align-content-md-around {
    align-content: space-around !important;
  }

  .align-content-md-stretch {
    align-content: stretch !important;
  }

  .align-self-md-auto {
    align-self: auto !important;
  }

  .align-self-md-start {
    align-self: flex-start !important;
  }

  .align-self-md-end {
    align-self: flex-end !important;
  }

  .align-self-md-center {
    align-self: center !important;
  }

  .align-self-md-baseline {
    align-self: baseline !important;
  }

  .align-self-md-stretch {
    align-self: stretch !important;
  }

  .order-md-first {
    order: -1 !important;
  }

  .order-md-0 {
    order: 0 !important;
  }

  .order-md-1 {
    order: 1 !important;
  }

  .order-md-2 {
    order: 2 !important;
  }

  .order-md-3 {
    order: 3 !important;
  }

  .order-md-4 {
    order: 4 !important;
  }

  .order-md-5 {
    order: 5 !important;
  }

  .order-md-last {
    order: 6 !important;
  }

  .m-md-0 {
    margin: 0 !important;
  }

  .m-md-1 {
    margin: 0.25rem !important;
  }

  .m-md-2 {
    margin: 0.5rem !important;
  }

  .m-md-3 {
    margin: 1rem !important;
  }

  .m-md-4 {
    margin: 1.5rem !important;
  }

  .m-md-5 {
    margin: 3rem !important;
  }

  .m-md-auto {
    margin: auto !important;
  }

  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-md-0 {
    margin-top: 0 !important;
  }

  .mt-md-1 {
    margin-top: 0.25rem !important;
  }

  .mt-md-2 {
    margin-top: 0.5rem !important;
  }

  .mt-md-3 {
    margin-top: 1rem !important;
  }

  .mt-md-4 {
    margin-top: 1.5rem !important;
  }

  .mt-md-5 {
    margin-top: 3rem !important;
  }

  .mt-md-auto {
    margin-top: auto !important;
  }

  .me-md-0 {
    margin-right: 0 !important;
  }

  .me-md-1 {
    margin-right: 0.25rem !important;
  }

  .me-md-2 {
    margin-right: 0.5rem !important;
  }

  .me-md-3 {
    margin-right: 1rem !important;
  }

  .me-md-4 {
    margin-right: 1.5rem !important;
  }

  .me-md-5 {
    margin-right: 3rem !important;
  }

  .me-md-auto {
    margin-right: auto !important;
  }

  .mb-md-0 {
    margin-bottom: 0 !important;
  }

  .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-md-3 {
    margin-bottom: 1rem !important;
  }

  .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-md-5 {
    margin-bottom: 3rem !important;
  }

  .mb-md-auto {
    margin-bottom: auto !important;
  }

  .ms-md-0 {
    margin-left: 0 !important;
  }

  .ms-md-1 {
    margin-left: 0.25rem !important;
  }

  .ms-md-2 {
    margin-left: 0.5rem !important;
  }

  .ms-md-3 {
    margin-left: 1rem !important;
  }

  .ms-md-4 {
    margin-left: 1.5rem !important;
  }

  .ms-md-5 {
    margin-left: 3rem !important;
  }

  .ms-md-auto {
    margin-left: auto !important;
  }

  .p-md-0 {
    padding: 0 !important;
  }

  .p-md-1 {
    padding: 0.25rem !important;
  }

  .p-md-2 {
    padding: 0.5rem !important;
  }

  .p-md-3 {
    padding: 1rem !important;
  }

  .p-md-4 {
    padding: 1.5rem !important;
  }

  .p-md-5 {
    padding: 3rem !important;
  }

  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-md-0 {
    padding-top: 0 !important;
  }

  .pt-md-1 {
    padding-top: 0.25rem !important;
  }

  .pt-md-2 {
    padding-top: 0.5rem !important;
  }

  .pt-md-3 {
    padding-top: 1rem !important;
  }

  .pt-md-4 {
    padding-top: 1.5rem !important;
  }

  .pt-md-5 {
    padding-top: 3rem !important;
  }

  .pe-md-0 {
    padding-right: 0 !important;
  }

  .pe-md-1 {
    padding-right: 0.25rem !important;
  }

  .pe-md-2 {
    padding-right: 0.5rem !important;
  }

  .pe-md-3 {
    padding-right: 1rem !important;
  }

  .pe-md-4 {
    padding-right: 1.5rem !important;
  }

  .pe-md-5 {
    padding-right: 3rem !important;
  }

  .pb-md-0 {
    padding-bottom: 0 !important;
  }

  .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-md-3 {
    padding-bottom: 1rem !important;
  }

  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-md-5 {
    padding-bottom: 3rem !important;
  }

  .ps-md-0 {
    padding-left: 0 !important;
  }

  .ps-md-1 {
    padding-left: 0.25rem !important;
  }

  .ps-md-2 {
    padding-left: 0.5rem !important;
  }

  .ps-md-3 {
    padding-left: 1rem !important;
  }

  .ps-md-4 {
    padding-left: 1.5rem !important;
  }

  .ps-md-5 {
    padding-left: 3rem !important;
  }

  .text-md-start {
    text-align: left !important;
  }

  .text-md-end {
    text-align: right !important;
  }

  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .float-lg-start {
    float: left !important;
  }

  .float-lg-end {
    float: right !important;
  }

  .float-lg-none {
    float: none !important;
  }

  .d-lg-inline {
    display: inline !important;
  }

  .d-lg-inline-block {
    display: inline-block !important;
  }

  .d-lg-block {
    display: block !important;
  }

  .d-lg-grid {
    display: grid !important;
  }

  .d-lg-table {
    display: table !important;
  }

  .d-lg-table-row {
    display: table-row !important;
  }

  .d-lg-table-cell {
    display: table-cell !important;
  }

  .d-lg-flex {
    display: flex !important;
  }

  .d-lg-inline-flex {
    display: inline-flex !important;
  }

  .d-lg-none {
    display: none !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-lg-0 {
    gap: 0 !important;
  }

  .gap-lg-1 {
    gap: 0.25rem !important;
  }

  .gap-lg-2 {
    gap: 0.5rem !important;
  }

  .gap-lg-3 {
    gap: 1rem !important;
  }

  .gap-lg-4 {
    gap: 1.5rem !important;
  }

  .gap-lg-5 {
    gap: 3rem !important;
  }

  .justify-content-lg-start {
    justify-content: flex-start !important;
  }

  .justify-content-lg-end {
    justify-content: flex-end !important;
  }

  .justify-content-lg-center {
    justify-content: center !important;
  }

  .justify-content-lg-between {
    justify-content: space-between !important;
  }

  .justify-content-lg-around {
    justify-content: space-around !important;
  }

  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-lg-start {
    align-items: flex-start !important;
  }

  .align-items-lg-end {
    align-items: flex-end !important;
  }

  .align-items-lg-center {
    align-items: center !important;
  }

  .align-items-lg-baseline {
    align-items: baseline !important;
  }

  .align-items-lg-stretch {
    align-items: stretch !important;
  }

  .align-content-lg-start {
    align-content: flex-start !important;
  }

  .align-content-lg-end {
    align-content: flex-end !important;
  }

  .align-content-lg-center {
    align-content: center !important;
  }

  .align-content-lg-between {
    align-content: space-between !important;
  }

  .align-content-lg-around {
    align-content: space-around !important;
  }

  .align-content-lg-stretch {
    align-content: stretch !important;
  }

  .align-self-lg-auto {
    align-self: auto !important;
  }

  .align-self-lg-start {
    align-self: flex-start !important;
  }

  .align-self-lg-end {
    align-self: flex-end !important;
  }

  .align-self-lg-center {
    align-self: center !important;
  }

  .align-self-lg-baseline {
    align-self: baseline !important;
  }

  .align-self-lg-stretch {
    align-self: stretch !important;
  }

  .order-lg-first {
    order: -1 !important;
  }

  .order-lg-0 {
    order: 0 !important;
  }

  .order-lg-1 {
    order: 1 !important;
  }

  .order-lg-2 {
    order: 2 !important;
  }

  .order-lg-3 {
    order: 3 !important;
  }

  .order-lg-4 {
    order: 4 !important;
  }

  .order-lg-5 {
    order: 5 !important;
  }

  .order-lg-last {
    order: 6 !important;
  }

  .m-lg-0 {
    margin: 0 !important;
  }

  .m-lg-1 {
    margin: 0.25rem !important;
  }

  .m-lg-2 {
    margin: 0.5rem !important;
  }

  .m-lg-3 {
    margin: 1rem !important;
  }

  .m-lg-4 {
    margin: 1.5rem !important;
  }

  .m-lg-5 {
    margin: 3rem !important;
  }

  .m-lg-auto {
    margin: auto !important;
  }

  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-lg-0 {
    margin-top: 0 !important;
  }

  .mt-lg-1 {
    margin-top: 0.25rem !important;
  }

  .mt-lg-2 {
    margin-top: 0.5rem !important;
  }

  .mt-lg-3 {
    margin-top: 1rem !important;
  }

  .mt-lg-4 {
    margin-top: 1.5rem !important;
  }

  .mt-lg-5 {
    margin-top: 3rem !important;
  }

  .mt-lg-auto {
    margin-top: auto !important;
  }

  .me-lg-0 {
    margin-right: 0 !important;
  }

  .me-lg-1 {
    margin-right: 0.25rem !important;
  }

  .me-lg-2 {
    margin-right: 0.5rem !important;
  }

  .me-lg-3 {
    margin-right: 1rem !important;
  }

  .me-lg-4 {
    margin-right: 1.5rem !important;
  }

  .me-lg-5 {
    margin-right: 3rem !important;
  }

  .me-lg-auto {
    margin-right: auto !important;
  }

  .mb-lg-0 {
    margin-bottom: 0 !important;
  }

  .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-lg-3 {
    margin-bottom: 1rem !important;
  }

  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }

  .mb-lg-auto {
    margin-bottom: auto !important;
  }

  .ms-lg-0 {
    margin-left: 0 !important;
  }

  .ms-lg-1 {
    margin-left: 0.25rem !important;
  }

  .ms-lg-2 {
    margin-left: 0.5rem !important;
  }

  .ms-lg-3 {
    margin-left: 1rem !important;
  }

  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }

  .ms-lg-5 {
    margin-left: 3rem !important;
  }

  .ms-lg-auto {
    margin-left: auto !important;
  }

  .p-lg-0 {
    padding: 0 !important;
  }

  .p-lg-1 {
    padding: 0.25rem !important;
  }

  .p-lg-2 {
    padding: 0.5rem !important;
  }

  .p-lg-3 {
    padding: 1rem !important;
  }

  .p-lg-4 {
    padding: 1.5rem !important;
  }

  .p-lg-5 {
    padding: 3rem !important;
  }

  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-lg-0 {
    padding-top: 0 !important;
  }

  .pt-lg-1 {
    padding-top: 0.25rem !important;
  }

  .pt-lg-2 {
    padding-top: 0.5rem !important;
  }

  .pt-lg-3 {
    padding-top: 1rem !important;
  }

  .pt-lg-4 {
    padding-top: 1.5rem !important;
  }

  .pt-lg-5 {
    padding-top: 3rem !important;
  }

  .pe-lg-0 {
    padding-right: 0 !important;
  }

  .pe-lg-1 {
    padding-right: 0.25rem !important;
  }

  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }

  .pe-lg-3 {
    padding-right: 1rem !important;
  }

  .pe-lg-4 {
    padding-right: 1.5rem !important;
  }

  .pe-lg-5 {
    padding-right: 3rem !important;
  }

  .pb-lg-0 {
    padding-bottom: 0 !important;
  }

  .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-lg-3 {
    padding-bottom: 1rem !important;
  }

  .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }

  .ps-lg-0 {
    padding-left: 0 !important;
  }

  .ps-lg-1 {
    padding-left: 0.25rem !important;
  }

  .ps-lg-2 {
    padding-left: 0.5rem !important;
  }

  .ps-lg-3 {
    padding-left: 1rem !important;
  }

  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }

  .ps-lg-5 {
    padding-left: 3rem !important;
  }

  .text-lg-start {
    text-align: left !important;
  }

  .text-lg-end {
    text-align: right !important;
  }

  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-start {
    float: left !important;
  }

  .float-xl-end {
    float: right !important;
  }

  .float-xl-none {
    float: none !important;
  }

  .d-xl-inline {
    display: inline !important;
  }

  .d-xl-inline-block {
    display: inline-block !important;
  }

  .d-xl-block {
    display: block !important;
  }

  .d-xl-grid {
    display: grid !important;
  }

  .d-xl-table {
    display: table !important;
  }

  .d-xl-table-row {
    display: table-row !important;
  }

  .d-xl-table-cell {
    display: table-cell !important;
  }

  .d-xl-flex {
    display: flex !important;
  }

  .d-xl-inline-flex {
    display: inline-flex !important;
  }

  .d-xl-none {
    display: none !important;
  }

  .flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xl-row {
    flex-direction: row !important;
  }

  .flex-xl-column {
    flex-direction: column !important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-xl-0 {
    gap: 0 !important;
  }

  .gap-xl-1 {
    gap: 0.25rem !important;
  }

  .gap-xl-2 {
    gap: 0.5rem !important;
  }

  .gap-xl-3 {
    gap: 1rem !important;
  }

  .gap-xl-4 {
    gap: 1.5rem !important;
  }

  .gap-xl-5 {
    gap: 3rem !important;
  }

  .justify-content-xl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xl-center {
    justify-content: center !important;
  }

  .justify-content-xl-between {
    justify-content: space-between !important;
  }

  .justify-content-xl-around {
    justify-content: space-around !important;
  }

  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-xl-start {
    align-items: flex-start !important;
  }

  .align-items-xl-end {
    align-items: flex-end !important;
  }

  .align-items-xl-center {
    align-items: center !important;
  }

  .align-items-xl-baseline {
    align-items: baseline !important;
  }

  .align-items-xl-stretch {
    align-items: stretch !important;
  }

  .align-content-xl-start {
    align-content: flex-start !important;
  }

  .align-content-xl-end {
    align-content: flex-end !important;
  }

  .align-content-xl-center {
    align-content: center !important;
  }

  .align-content-xl-between {
    align-content: space-between !important;
  }

  .align-content-xl-around {
    align-content: space-around !important;
  }

  .align-content-xl-stretch {
    align-content: stretch !important;
  }

  .align-self-xl-auto {
    align-self: auto !important;
  }

  .align-self-xl-start {
    align-self: flex-start !important;
  }

  .align-self-xl-end {
    align-self: flex-end !important;
  }

  .align-self-xl-center {
    align-self: center !important;
  }

  .align-self-xl-baseline {
    align-self: baseline !important;
  }

  .align-self-xl-stretch {
    align-self: stretch !important;
  }

  .order-xl-first {
    order: -1 !important;
  }

  .order-xl-0 {
    order: 0 !important;
  }

  .order-xl-1 {
    order: 1 !important;
  }

  .order-xl-2 {
    order: 2 !important;
  }

  .order-xl-3 {
    order: 3 !important;
  }

  .order-xl-4 {
    order: 4 !important;
  }

  .order-xl-5 {
    order: 5 !important;
  }

  .order-xl-last {
    order: 6 !important;
  }

  .m-xl-0 {
    margin: 0 !important;
  }

  .m-xl-1 {
    margin: 0.25rem !important;
  }

  .m-xl-2 {
    margin: 0.5rem !important;
  }

  .m-xl-3 {
    margin: 1rem !important;
  }

  .m-xl-4 {
    margin: 1.5rem !important;
  }

  .m-xl-5 {
    margin: 3rem !important;
  }

  .m-xl-auto {
    margin: auto !important;
  }

  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xl-0 {
    margin-top: 0 !important;
  }

  .mt-xl-1 {
    margin-top: 0.25rem !important;
  }

  .mt-xl-2 {
    margin-top: 0.5rem !important;
  }

  .mt-xl-3 {
    margin-top: 1rem !important;
  }

  .mt-xl-4 {
    margin-top: 1.5rem !important;
  }

  .mt-xl-5 {
    margin-top: 3rem !important;
  }

  .mt-xl-auto {
    margin-top: auto !important;
  }

  .me-xl-0 {
    margin-right: 0 !important;
  }

  .me-xl-1 {
    margin-right: 0.25rem !important;
  }

  .me-xl-2 {
    margin-right: 0.5rem !important;
  }

  .me-xl-3 {
    margin-right: 1rem !important;
  }

  .me-xl-4 {
    margin-right: 1.5rem !important;
  }

  .me-xl-5 {
    margin-right: 3rem !important;
  }

  .me-xl-auto {
    margin-right: auto !important;
  }

  .mb-xl-0 {
    margin-bottom: 0 !important;
  }

  .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-xl-3 {
    margin-bottom: 1rem !important;
  }

  .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-xl-5 {
    margin-bottom: 3rem !important;
  }

  .mb-xl-auto {
    margin-bottom: auto !important;
  }

  .ms-xl-0 {
    margin-left: 0 !important;
  }

  .ms-xl-1 {
    margin-left: 0.25rem !important;
  }

  .ms-xl-2 {
    margin-left: 0.5rem !important;
  }

  .ms-xl-3 {
    margin-left: 1rem !important;
  }

  .ms-xl-4 {
    margin-left: 1.5rem !important;
  }

  .ms-xl-5 {
    margin-left: 3rem !important;
  }

  .ms-xl-auto {
    margin-left: auto !important;
  }

  .p-xl-0 {
    padding: 0 !important;
  }

  .p-xl-1 {
    padding: 0.25rem !important;
  }

  .p-xl-2 {
    padding: 0.5rem !important;
  }

  .p-xl-3 {
    padding: 1rem !important;
  }

  .p-xl-4 {
    padding: 1.5rem !important;
  }

  .p-xl-5 {
    padding: 3rem !important;
  }

  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-xl-0 {
    padding-top: 0 !important;
  }

  .pt-xl-1 {
    padding-top: 0.25rem !important;
  }

  .pt-xl-2 {
    padding-top: 0.5rem !important;
  }

  .pt-xl-3 {
    padding-top: 1rem !important;
  }

  .pt-xl-4 {
    padding-top: 1.5rem !important;
  }

  .pt-xl-5 {
    padding-top: 3rem !important;
  }

  .pe-xl-0 {
    padding-right: 0 !important;
  }

  .pe-xl-1 {
    padding-right: 0.25rem !important;
  }

  .pe-xl-2 {
    padding-right: 0.5rem !important;
  }

  .pe-xl-3 {
    padding-right: 1rem !important;
  }

  .pe-xl-4 {
    padding-right: 1.5rem !important;
  }

  .pe-xl-5 {
    padding-right: 3rem !important;
  }

  .pb-xl-0 {
    padding-bottom: 0 !important;
  }

  .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-xl-3 {
    padding-bottom: 1rem !important;
  }

  .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-xl-5 {
    padding-bottom: 3rem !important;
  }

  .ps-xl-0 {
    padding-left: 0 !important;
  }

  .ps-xl-1 {
    padding-left: 0.25rem !important;
  }

  .ps-xl-2 {
    padding-left: 0.5rem !important;
  }

  .ps-xl-3 {
    padding-left: 1rem !important;
  }

  .ps-xl-4 {
    padding-left: 1.5rem !important;
  }

  .ps-xl-5 {
    padding-left: 3rem !important;
  }

  .text-xl-start {
    text-align: left !important;
  }

  .text-xl-end {
    text-align: right !important;
  }

  .text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1400px) {
  .float-xxl-start {
    float: left !important;
  }

  .float-xxl-end {
    float: right !important;
  }

  .float-xxl-none {
    float: none !important;
  }

  .d-xxl-inline {
    display: inline !important;
  }

  .d-xxl-inline-block {
    display: inline-block !important;
  }

  .d-xxl-block {
    display: block !important;
  }

  .d-xxl-grid {
    display: grid !important;
  }

  .d-xxl-table {
    display: table !important;
  }

  .d-xxl-table-row {
    display: table-row !important;
  }

  .d-xxl-table-cell {
    display: table-cell !important;
  }

  .d-xxl-flex {
    display: flex !important;
  }

  .d-xxl-inline-flex {
    display: inline-flex !important;
  }

  .d-xxl-none {
    display: none !important;
  }

  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xxl-row {
    flex-direction: row !important;
  }

  .flex-xxl-column {
    flex-direction: column !important;
  }

  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-xxl-0 {
    gap: 0 !important;
  }

  .gap-xxl-1 {
    gap: 0.25rem !important;
  }

  .gap-xxl-2 {
    gap: 0.5rem !important;
  }

  .gap-xxl-3 {
    gap: 1rem !important;
  }

  .gap-xxl-4 {
    gap: 1.5rem !important;
  }

  .gap-xxl-5 {
    gap: 3rem !important;
  }

  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xxl-center {
    justify-content: center !important;
  }

  .justify-content-xxl-between {
    justify-content: space-between !important;
  }

  .justify-content-xxl-around {
    justify-content: space-around !important;
  }

  .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-xxl-start {
    align-items: flex-start !important;
  }

  .align-items-xxl-end {
    align-items: flex-end !important;
  }

  .align-items-xxl-center {
    align-items: center !important;
  }

  .align-items-xxl-baseline {
    align-items: baseline !important;
  }

  .align-items-xxl-stretch {
    align-items: stretch !important;
  }

  .align-content-xxl-start {
    align-content: flex-start !important;
  }

  .align-content-xxl-end {
    align-content: flex-end !important;
  }

  .align-content-xxl-center {
    align-content: center !important;
  }

  .align-content-xxl-between {
    align-content: space-between !important;
  }

  .align-content-xxl-around {
    align-content: space-around !important;
  }

  .align-content-xxl-stretch {
    align-content: stretch !important;
  }

  .align-self-xxl-auto {
    align-self: auto !important;
  }

  .align-self-xxl-start {
    align-self: flex-start !important;
  }

  .align-self-xxl-end {
    align-self: flex-end !important;
  }

  .align-self-xxl-center {
    align-self: center !important;
  }

  .align-self-xxl-baseline {
    align-self: baseline !important;
  }

  .align-self-xxl-stretch {
    align-self: stretch !important;
  }

  .order-xxl-first {
    order: -1 !important;
  }

  .order-xxl-0 {
    order: 0 !important;
  }

  .order-xxl-1 {
    order: 1 !important;
  }

  .order-xxl-2 {
    order: 2 !important;
  }

  .order-xxl-3 {
    order: 3 !important;
  }

  .order-xxl-4 {
    order: 4 !important;
  }

  .order-xxl-5 {
    order: 5 !important;
  }

  .order-xxl-last {
    order: 6 !important;
  }

  .m-xxl-0 {
    margin: 0 !important;
  }

  .m-xxl-1 {
    margin: 0.25rem !important;
  }

  .m-xxl-2 {
    margin: 0.5rem !important;
  }

  .m-xxl-3 {
    margin: 1rem !important;
  }

  .m-xxl-4 {
    margin: 1.5rem !important;
  }

  .m-xxl-5 {
    margin: 3rem !important;
  }

  .m-xxl-auto {
    margin: auto !important;
  }

  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xxl-0 {
    margin-top: 0 !important;
  }

  .mt-xxl-1 {
    margin-top: 0.25rem !important;
  }

  .mt-xxl-2 {
    margin-top: 0.5rem !important;
  }

  .mt-xxl-3 {
    margin-top: 1rem !important;
  }

  .mt-xxl-4 {
    margin-top: 1.5rem !important;
  }

  .mt-xxl-5 {
    margin-top: 3rem !important;
  }

  .mt-xxl-auto {
    margin-top: auto !important;
  }

  .me-xxl-0 {
    margin-right: 0 !important;
  }

  .me-xxl-1 {
    margin-right: 0.25rem !important;
  }

  .me-xxl-2 {
    margin-right: 0.5rem !important;
  }

  .me-xxl-3 {
    margin-right: 1rem !important;
  }

  .me-xxl-4 {
    margin-right: 1.5rem !important;
  }

  .me-xxl-5 {
    margin-right: 3rem !important;
  }

  .me-xxl-auto {
    margin-right: auto !important;
  }

  .mb-xxl-0 {
    margin-bottom: 0 !important;
  }

  .mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-xxl-3 {
    margin-bottom: 1rem !important;
  }

  .mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-xxl-5 {
    margin-bottom: 3rem !important;
  }

  .mb-xxl-auto {
    margin-bottom: auto !important;
  }

  .ms-xxl-0 {
    margin-left: 0 !important;
  }

  .ms-xxl-1 {
    margin-left: 0.25rem !important;
  }

  .ms-xxl-2 {
    margin-left: 0.5rem !important;
  }

  .ms-xxl-3 {
    margin-left: 1rem !important;
  }

  .ms-xxl-4 {
    margin-left: 1.5rem !important;
  }

  .ms-xxl-5 {
    margin-left: 3rem !important;
  }

  .ms-xxl-auto {
    margin-left: auto !important;
  }

  .p-xxl-0 {
    padding: 0 !important;
  }

  .p-xxl-1 {
    padding: 0.25rem !important;
  }

  .p-xxl-2 {
    padding: 0.5rem !important;
  }

  .p-xxl-3 {
    padding: 1rem !important;
  }

  .p-xxl-4 {
    padding: 1.5rem !important;
  }

  .p-xxl-5 {
    padding: 3rem !important;
  }

  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-xxl-0 {
    padding-top: 0 !important;
  }

  .pt-xxl-1 {
    padding-top: 0.25rem !important;
  }

  .pt-xxl-2 {
    padding-top: 0.5rem !important;
  }

  .pt-xxl-3 {
    padding-top: 1rem !important;
  }

  .pt-xxl-4 {
    padding-top: 1.5rem !important;
  }

  .pt-xxl-5 {
    padding-top: 3rem !important;
  }

  .pe-xxl-0 {
    padding-right: 0 !important;
  }

  .pe-xxl-1 {
    padding-right: 0.25rem !important;
  }

  .pe-xxl-2 {
    padding-right: 0.5rem !important;
  }

  .pe-xxl-3 {
    padding-right: 1rem !important;
  }

  .pe-xxl-4 {
    padding-right: 1.5rem !important;
  }

  .pe-xxl-5 {
    padding-right: 3rem !important;
  }

  .pb-xxl-0 {
    padding-bottom: 0 !important;
  }

  .pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-xxl-3 {
    padding-bottom: 1rem !important;
  }

  .pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-xxl-5 {
    padding-bottom: 3rem !important;
  }

  .ps-xxl-0 {
    padding-left: 0 !important;
  }

  .ps-xxl-1 {
    padding-left: 0.25rem !important;
  }

  .ps-xxl-2 {
    padding-left: 0.5rem !important;
  }

  .ps-xxl-3 {
    padding-left: 1rem !important;
  }

  .ps-xxl-4 {
    padding-left: 1.5rem !important;
  }

  .ps-xxl-5 {
    padding-left: 3rem !important;
  }

  .text-xxl-start {
    text-align: left !important;
  }

  .text-xxl-end {
    text-align: right !important;
  }

  .text-xxl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .fs-1 {
    font-size: 2.5rem !important;
  }

  .fs-2 {
    font-size: 2rem !important;
  }

  .fs-3 {
    font-size: 1.75rem !important;
  }

  .fs-4 {
    font-size: 1.5rem !important;
  }
}
@media print {
  .d-print-inline {
    display: inline !important;
  }

  .d-print-inline-block {
    display: inline-block !important;
  }

  .d-print-block {
    display: block !important;
  }

  .d-print-grid {
    display: grid !important;
  }

  .d-print-table {
    display: table !important;
  }

  .d-print-table-row {
    display: table-row !important;
  }

  .d-print-table-cell {
    display: table-cell !important;
  }

  .d-print-flex {
    display: flex !important;
  }

  .d-print-inline-flex {
    display: inline-flex !important;
  }

  .d-print-none {
    display: none !important;
  }
}
`;

  // src/utils/options-element.ts
  var OptionsElement = class extends s4 {
    constructor(configItems) {
      super();
      this.configItems = configItems;
    }
    checkboxTemplate(configItem) {
      return y`
      <li
        class="checkbox-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-5">
          <div class="fw-bold control-title">${configItem.title}</div>
          <small class="control-description disabled"
            >${configItem.description}</small
          >
        </div>
        <input
          @input="${(e7) => this.saveChange(configItem.id, e7)}"
          class="form-check-input me-1"
          type="checkbox"
          id="thirdCheckbox"
          ${configItem.value ? "checked" : ""}
        />
      </li>
    `;
    }
    switchTemplate(configItem) {
      return y`
      <li
        class="switch-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-auto">
          <div class="control-title fw-bold">${configItem.title}</div>
          <small class="control-description disabled"
            >${configItem.description}
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"            
          ${configItem.value ? "checked" : ""}
          />
        </div>
      </li>
    `;
    }
    radioTemplate(configItem) {
      return y`
      <li
        class="radio-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-5">
          <div class="control-title fw-bold">${configItem.title}</div>
          <small class="control-description disabled"
            >${configItem.description}</small
          >
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">Left</button>
          <button type="button" class="btn btn-primary">Middle</button>
          <button type="button" class="btn btn-primary">Right</button>
        </div>
      </li>
    `;
    }
    rangeTemplate(configItem) {
      return y`
      <li class="range-template list-group-item p-4">
        <div class="ms-2">
          <div class="control-title fw-bold">${configItem.title}</div>
          <small class="control-description disabled"
            >${configItem.description}>
          <input
            type="range"
            class="form-range"
            min="0"
            max="5"
            value="${configItem.value}"
            id="customRange2"
          />
        </div>
      </li>
    `;
    }
    textareaTemplate(configItem) {
      return y`
      <li class="textarea-template list-group-item p-4 ">
        <div class="d-flex justify-content-between align-items-center">
          <div class="ms-2 me-auto">
            <div class="control-title fw-bold">${configItem.title}</div>
            <small class="control-description disabled"
              >${configItem.description}
          </div>
          <div class="form-check form-switch">
          V
            <i
              class="bi-caret-down-fill"
              style="font-size: 1.5rem"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            ></i>
          </div>
        </div>
        <div class="collapse ms-2" id="collapseExample">
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value="${configItem.value}"
            ></textarea>
          </div>
        </div>
      </li>
    `;
    }
    selectTemplate(configItem) {
      return y`
      <li
        class="select-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-5">
          <div class="control-title fw-bold">${configItem.title}</div>
          <small class="control-description disabled"
            >${configItem.description}</small
          >
        </div>
        <select
          class="form-select form-select-md"
          aria-label="example"
          style="max-width: 200px"
          value="${configItem.value}"
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </li>
    `;
    }
    toastTemplate() {
      return y`
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <img
              src="../assets/logo-24x24.png"
              class="rounded me-2"
              alt="Logo"
            />
            <strong class="me-auto"
              >${chrome.i18n.getMessage("appName")}</strong
            >
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">Successfully updated settings</div>
        </div>
      </div>
    `;
    }
    render() {
      const configItemTemplates = [];
      this.configItems.forEach((o6) => {
        switch (o6.type) {
          case "checkbox":
            configItemTemplates.push(this.checkboxTemplate(o6));
            break;
          case "switch":
            configItemTemplates.push(this.switchTemplate(o6));
            break;
          case "radio":
            configItemTemplates.push(this.radioTemplate(o6));
            break;
          case "select":
            configItemTemplates.push(this.selectTemplate(o6));
            break;
          case "textarea":
            configItemTemplates.push(this.textareaTemplate(o6));
            break;
          case "range":
            configItemTemplates.push(this.rangeTemplate(o6));
            break;
        }
      });
      return y`
      <div class="container">
        <div class="row">
          <div class="col">
            <ul class="list-group">
              ${configItemTemplates}
            </ul>
          </div>
        </div>
        ${this.toastTemplate()}
      </div>
    `;
    }
    saveChange(fieldId, updatedValue) {
      console.log("saving: ", fieldId, updatedValue);
      this.showToast();
    }
    showToast() {
      const toastLiveExample = this.renderRoot.querySelector("#liveToast");
      const toast = new import_bootstrap_bundle_min.default.Toast(toastLiveExample);
      toast.show();
    }
  };
  OptionsElement.styles = i`
    ${bootstrapCSS}
    
    input[type="checkbox"] {
      /* Double-sized Checkboxes */
      -ms-transform: scale(1.4); /* IE */
      -moz-transform: scale(1.4); /* FF */
      -webkit-transform: scale(1.4); /* Safari and Chrome */
      -o-transform: scale(1.4); /* Opera */
      padding: 10px;
    }
    
    .collapse {
      margin-top: 15px;
    }
    .container {
      min-width: 400px;
      min-height: 400px;
    }
  `;
  OptionsElement = __decorateClass([
    e4("options-element")
  ], OptionsElement);

  // src/options-page/options.js
  var OptionsPage = class {
    render(options) {
      console.log("rendering options: ", options);
      const optionsEl = new OptionsElement(options);
      document.body.appendChild(optionsEl);
    }
  };
  var config = [
    {
      id: "disable-extension-on-site",
      type: "checkbox",
      title: "Temporarily disable extension",
      description: "Turns off the extension on all websites.",
      value: true
    },
    {
      id: "disable-sync",
      type: "checkbox",
      title: "Disable storage sync",
      description: "Your settings will not propagate to other browsers.",
      value: true
    },
    {
      id: "radio-id",
      type: "radio",
      title: "Sample radio title",
      description: "The detail information about the radio here.",
      value: 1
    },
    {
      id: "switch-id",
      type: "switch",
      title: "Sample switch title",
      description: "The detail information about the switch here.",
      value: true
    },
    {
      id: "select-id",
      type: "select",
      title: "Sample select title",
      description: "The detail information about the select here.",
      value: 2
    },
    {
      id: "range-id",
      type: "range",
      title: "Sample range title",
      description: "The detail information about the range here.",
      value: 0
    },
    {
      id: "textarea-id",
      type: "textarea",
      title: "Sample textarea title",
      description: "The detail information about the textarea here.",
      value: "hello world"
    }
  ];
  var op = new OptionsPage();
  op.render(config);
})();
//# sourceMappingURL=options.js.map

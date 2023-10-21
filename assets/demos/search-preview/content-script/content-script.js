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
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
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
    for (var i6 = decorators.length - 1, decorator; i6 >= 0; i6--)
      if (decorator = decorators[i6])
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
        var v4;
        function ba(a5) {
          var b4 = 0;
          return function() {
            return b4 < a5.length ? { done: false, value: a5[b4++] } : { done: true };
          };
        }
        var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a5, b4, c5) {
          if (a5 == Array.prototype || a5 == Object.prototype)
            return a5;
          a5[b4] = c5.value;
          return a5;
        };
        function da(a5) {
          a5 = ["object" == typeof globalThis && globalThis, a5, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
          for (var b4 = 0; b4 < a5.length; ++b4) {
            var c5 = a5[b4];
            if (c5 && c5.Math == Math)
              return c5;
          }
          throw Error("Cannot find global object");
        }
        var ea = da(this);
        function fa(a5, b4) {
          if (b4)
            a: {
              var c5 = ea;
              a5 = a5.split(".");
              for (var d5 = 0; d5 < a5.length - 1; d5++) {
                var e8 = a5[d5];
                if (!(e8 in c5))
                  break a;
                c5 = c5[e8];
              }
              a5 = a5[a5.length - 1];
              d5 = c5[a5];
              b4 = b4(d5);
              b4 != d5 && null != b4 && ca(c5, a5, { configurable: true, writable: true, value: b4 });
            }
        }
        fa("Symbol", function(a5) {
          function b4(e8) {
            if (this instanceof b4)
              throw new TypeError("Symbol is not a constructor");
            return new c5("jscomp_symbol_" + (e8 || "") + "_" + d5++, e8);
          }
          function c5(e8, f4) {
            this.g = e8;
            ca(this, "description", { configurable: true, writable: true, value: f4 });
          }
          if (a5)
            return a5;
          c5.prototype.toString = function() {
            return this.g;
          };
          var d5 = 0;
          return b4;
        });
        fa("Symbol.iterator", function(a5) {
          if (a5)
            return a5;
          a5 = Symbol("Symbol.iterator");
          for (var b4 = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c5 = 0; c5 < b4.length; c5++) {
            var d5 = ea[b4[c5]];
            "function" === typeof d5 && "function" != typeof d5.prototype[a5] && ca(d5.prototype, a5, { configurable: true, writable: true, value: function() {
              return ja(ba(this));
            } });
          }
          return a5;
        });
        function ja(a5) {
          a5 = { next: a5 };
          a5[Symbol.iterator] = function() {
            return this;
          };
          return a5;
        }
        function ka(a5) {
          var b4 = "undefined" != typeof Symbol && Symbol.iterator && a5[Symbol.iterator];
          return b4 ? b4.call(a5) : { next: ba(a5) };
        }
        function w4(a5) {
          if (!(a5 instanceof Array)) {
            a5 = ka(a5);
            for (var b4, c5 = []; !(b4 = a5.next()).done; )
              c5.push(b4.value);
            a5 = c5;
          }
          return a5;
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
            } catch (a5) {
            }
            na = false;
          }
          la = na ? function(a5, b4) {
            a5.__proto__ = b4;
            if (a5.__proto__ !== b4)
              throw new TypeError(a5 + " is not extensible");
            return a5;
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
        function ua(a5) {
          if (a5.u)
            throw new TypeError("Generator is already running");
          a5.u = true;
        }
        ra.prototype.O = function(a5) {
          this.Oa = a5;
        };
        function wa(a5, b4) {
          a5.i = { ab: b4, fb: true };
          a5.g = a5.ea;
        }
        ra.prototype.return = function(a5) {
          this.i = { return: a5 };
          this.g = this.ea;
        };
        function ya(a5, b4) {
          a5.g = 3;
          return { value: b4 };
        }
        function za(a5) {
          this.g = new ra();
          this.h = a5;
        }
        function Aa(a5, b4) {
          ua(a5.g);
          var c5 = a5.g.h;
          if (c5)
            return Ba(a5, "return" in c5 ? c5["return"] : function(d5) {
              return { value: d5, done: true };
            }, b4, a5.g.return);
          a5.g.return(b4);
          return Ca(a5);
        }
        function Ba(a5, b4, c5, d5) {
          try {
            var e8 = b4.call(a5.g.h, c5);
            if (!(e8 instanceof Object))
              throw new TypeError("Iterator result " + e8 + " is not an object");
            if (!e8.done)
              return a5.g.u = false, e8;
            var f4 = e8.value;
          } catch (g4) {
            return a5.g.h = null, wa(a5.g, g4), Ca(a5);
          }
          a5.g.h = null;
          d5.call(a5.g, f4);
          return Ca(a5);
        }
        function Ca(a5) {
          for (; a5.g.g; )
            try {
              var b4 = a5.h(a5.g);
              if (b4)
                return a5.g.u = false, { value: b4.value, done: false };
            } catch (c5) {
              a5.g.Oa = void 0, wa(a5.g, c5);
            }
          a5.g.u = false;
          if (a5.g.i) {
            b4 = a5.g.i;
            a5.g.i = null;
            if (b4.fb)
              throw b4.ab;
            return { value: b4.return, done: true };
          }
          return { value: void 0, done: true };
        }
        function Da(a5) {
          this.next = function(b4) {
            ua(a5.g);
            a5.g.h ? b4 = Ba(a5, a5.g.h.next, b4, a5.g.O) : (a5.g.O(b4), b4 = Ca(a5));
            return b4;
          };
          this.throw = function(b4) {
            ua(a5.g);
            a5.g.h ? b4 = Ba(a5, a5.g.h["throw"], b4, a5.g.O) : (wa(a5.g, b4), b4 = Ca(a5));
            return b4;
          };
          this.return = function(b4) {
            return Aa(a5, b4);
          };
          this[Symbol.iterator] = function() {
            return this;
          };
        }
        function Ea(a5, b4) {
          b4 = new Da(new za(b4));
          qa && a5.prototype && qa(b4, a5.prototype);
          return b4;
        }
        Array.from || (Array.from = function(a5) {
          return [].slice.call(a5);
        });
        Object.assign || (Object.assign = function(a5) {
          for (var b4 = [].slice.call(arguments, 1), c5 = 0, d5; c5 < b4.length; c5++)
            if (d5 = b4[c5])
              for (var e8 = a5, f4 = Object.keys(d5), g4 = 0; g4 < f4.length; g4++) {
                var h5 = f4[g4];
                e8[h5] = d5[h5];
              }
          return a5;
        });
        var Fa = setTimeout;
        function Ga() {
        }
        function Ha(a5, b4) {
          return function() {
            a5.apply(b4, arguments);
          };
        }
        function A3(a5) {
          if (!(this instanceof A3))
            throw new TypeError("Promises must be constructed via new");
          if ("function" !== typeof a5)
            throw new TypeError("not a function");
          this.N = 0;
          this.Ha = false;
          this.I = void 0;
          this.ba = [];
          Ia(a5, this);
        }
        function Ja(a5, b4) {
          for (; 3 === a5.N; )
            a5 = a5.I;
          0 === a5.N ? a5.ba.push(b4) : (a5.Ha = true, Ka(function() {
            var c5 = 1 === a5.N ? b4.hb : b4.ib;
            if (null === c5)
              (1 === a5.N ? La : Ma)(b4.promise, a5.I);
            else {
              try {
                var d5 = c5(a5.I);
              } catch (e8) {
                Ma(b4.promise, e8);
                return;
              }
              La(b4.promise, d5);
            }
          }));
        }
        function La(a5, b4) {
          try {
            if (b4 === a5)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (b4 && ("object" === typeof b4 || "function" === typeof b4)) {
              var c5 = b4.then;
              if (b4 instanceof A3) {
                a5.N = 3;
                a5.I = b4;
                Na(a5);
                return;
              }
              if ("function" === typeof c5) {
                Ia(Ha(c5, b4), a5);
                return;
              }
            }
            a5.N = 1;
            a5.I = b4;
            Na(a5);
          } catch (d5) {
            Ma(a5, d5);
          }
        }
        function Ma(a5, b4) {
          a5.N = 2;
          a5.I = b4;
          Na(a5);
        }
        function Na(a5) {
          2 === a5.N && 0 === a5.ba.length && Ka(function() {
            a5.Ha || "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a5.I);
          });
          for (var b4 = 0, c5 = a5.ba.length; b4 < c5; b4++)
            Ja(a5, a5.ba[b4]);
          a5.ba = null;
        }
        function Oa(a5, b4, c5) {
          this.hb = "function" === typeof a5 ? a5 : null;
          this.ib = "function" === typeof b4 ? b4 : null;
          this.promise = c5;
        }
        function Ia(a5, b4) {
          var c5 = false;
          try {
            a5(function(d5) {
              c5 || (c5 = true, La(b4, d5));
            }, function(d5) {
              c5 || (c5 = true, Ma(b4, d5));
            });
          } catch (d5) {
            c5 || (c5 = true, Ma(b4, d5));
          }
        }
        A3.prototype["catch"] = function(a5) {
          return this.then(null, a5);
        };
        A3.prototype.then = function(a5, b4) {
          var c5 = new this.constructor(Ga);
          Ja(this, new Oa(a5, b4, c5));
          return c5;
        };
        A3.prototype["finally"] = function(a5) {
          var b4 = this.constructor;
          return this.then(function(c5) {
            return b4.resolve(a5()).then(function() {
              return c5;
            });
          }, function(c5) {
            return b4.resolve(a5()).then(function() {
              return b4.reject(c5);
            });
          });
        };
        function Pa(a5) {
          return new A3(function(b4, c5) {
            function d5(h5, k3) {
              try {
                if (k3 && ("object" === typeof k3 || "function" === typeof k3)) {
                  var l7 = k3.then;
                  if ("function" === typeof l7) {
                    l7.call(k3, function(m4) {
                      d5(h5, m4);
                    }, c5);
                    return;
                  }
                }
                e8[h5] = k3;
                0 === --f4 && b4(e8);
              } catch (m4) {
                c5(m4);
              }
            }
            if (!a5 || "undefined" === typeof a5.length)
              return c5(new TypeError("Promise.all accepts an array"));
            var e8 = Array.prototype.slice.call(a5);
            if (0 === e8.length)
              return b4([]);
            for (var f4 = e8.length, g4 = 0; g4 < e8.length; g4++)
              d5(g4, e8[g4]);
          });
        }
        function Qa(a5) {
          return a5 && "object" === typeof a5 && a5.constructor === A3 ? a5 : new A3(function(b4) {
            b4(a5);
          });
        }
        function Ra(a5) {
          return new A3(function(b4, c5) {
            c5(a5);
          });
        }
        function Sa(a5) {
          return new A3(function(b4, c5) {
            if (!a5 || "undefined" === typeof a5.length)
              return c5(new TypeError("Promise.race accepts an array"));
            for (var d5 = 0, e8 = a5.length; d5 < e8; d5++)
              Qa(a5[d5]).then(b4, c5);
          });
        }
        var Ka = "function" === typeof setImmediate && function(a5) {
          setImmediate(a5);
        } || function(a5) {
          Fa(a5, 0);
        };
        if (!window.Promise) {
          window.Promise = A3;
          A3.prototype.then = A3.prototype.then;
          A3.all = Pa;
          A3.race = Sa;
          A3.resolve = Qa;
          A3.reject = Ra;
          var Ta = document.createTextNode(""), Ua = [];
          new MutationObserver(function() {
            for (var a5 = Ua.length, b4 = 0; b4 < a5; b4++)
              Ua[b4]();
            Ua.splice(0, a5);
          }).observe(Ta, { characterData: true });
          Ka = function(a5) {
            Ua.push(a5);
            Ta.textContent = 0 < Ta.textContent.length ? "" : "a";
          };
        }
        ;
        (function(a5, b4) {
          if (!(b4 in a5)) {
            var c5 = typeof global === typeof c5 ? window : global, d5 = 0, e8 = String(Math.random()), f4 = "__symbol@@" + e8, g4 = a5.getOwnPropertyNames, h5 = a5.getOwnPropertyDescriptor, k3 = a5.create, l7 = a5.keys, m4 = a5.freeze || a5, q = a5.defineProperty, H3 = a5.defineProperties, C3 = h5(a5, "getOwnPropertyNames"), t4 = a5.prototype, F2 = t4.hasOwnProperty, E4 = t4.propertyIsEnumerable, N2 = t4.toString, y4 = function(I2, u4, G) {
              F2.call(I2, f4) || q(I2, f4, { enumerable: false, configurable: false, writable: false, value: {} });
              I2[f4]["@@" + u4] = G;
            }, X = function(I2, u4) {
              var G = k3(I2);
              g4(u4).forEach(function(p4) {
                sa.call(
                  u4,
                  p4
                ) && Va(G, p4, u4[p4]);
              });
              return G;
            }, x4 = function() {
            }, ta = function(I2) {
              return I2 != f4 && !F2.call(ha, I2);
            }, ia = function(I2) {
              return I2 != f4 && F2.call(ha, I2);
            }, sa = function(I2) {
              var u4 = String(I2);
              return ia(u4) ? F2.call(this, u4) && !!this[f4] && this[f4]["@@" + u4] : E4.call(this, I2);
            }, n8 = function(I2) {
              q(t4, I2, { enumerable: false, configurable: true, get: x4, set: function(u4) {
                xa(this, I2, { enumerable: false, configurable: true, writable: true, value: u4 });
                y4(this, I2, true);
              } });
              ha[I2] = q(a5(I2), "constructor", jc);
              return m4(ha[I2]);
            }, J = function G(u4) {
              if (this instanceof G)
                throw new TypeError("Symbol is not a constructor");
              return n8("__symbol:".concat(u4 || "", e8, ++d5));
            }, ha = k3(null), jc = { value: J }, ib = function(u4) {
              return ha[u4];
            }, Va = function(u4, G, p4) {
              var r6 = String(G);
              if (ia(r6)) {
                G = xa;
                if (p4.enumerable) {
                  var B = k3(p4);
                  B.enumerable = false;
                } else
                  B = p4;
                G(u4, r6, B);
                y4(u4, r6, !!p4.enumerable);
              } else
                q(u4, G, p4);
              return u4;
            }, jb = function(u4) {
              return g4(u4).filter(ia).map(ib);
            };
            C3.value = Va;
            q(a5, "defineProperty", C3);
            C3.value = jb;
            q(a5, b4, C3);
            C3.value = function(u4) {
              return g4(u4).filter(ta);
            };
            q(a5, "getOwnPropertyNames", C3);
            C3.value = function(u4, G) {
              var p4 = jb(G);
              p4.length ? l7(G).concat(p4).forEach(function(r6) {
                sa.call(
                  G,
                  r6
                ) && Va(u4, r6, G[r6]);
              }) : H3(u4, G);
              return u4;
            };
            q(a5, "defineProperties", C3);
            C3.value = sa;
            q(t4, "propertyIsEnumerable", C3);
            C3.value = J;
            q(c5, "Symbol", C3);
            C3.value = function(u4) {
              u4 = "__symbol:".concat("__symbol:", u4, e8);
              return u4 in t4 ? ha[u4] : n8(u4);
            };
            q(J, "for", C3);
            C3.value = function(u4) {
              if (ta(u4))
                throw new TypeError(u4 + " is not a symbol");
              if (F2.call(ha, u4) && (u4 = u4.slice(10), "__symbol:" === u4.slice(0, 10) && (u4 = u4.slice(10), u4 !== e8)))
                return u4 = u4.slice(0, u4.length - e8.length), 0 < u4.length ? u4 : void 0;
            };
            q(J, "keyFor", C3);
            C3.value = function(u4, G) {
              var p4 = h5(u4, G);
              p4 && ia(G) && (p4.enumerable = sa.call(u4, G));
              return p4;
            };
            q(a5, "getOwnPropertyDescriptor", C3);
            C3.value = function(u4, G) {
              return 1 === arguments.length || "undefined" === typeof G ? k3(u4) : X(u4, G);
            };
            q(a5, "create", C3);
            C3.value = function() {
              var u4 = N2.call(this);
              return "[object String]" === u4 && ia(this) ? "[object Symbol]" : u4;
            };
            q(t4, "toString", C3);
            try {
              if (true === k3(q({}, "__symbol:", { get: function() {
                return q(this, "__symbol:", { value: true })["__symbol:"];
              } }))["__symbol:"])
                var xa = q;
              else
                throw "IE11";
            } catch (u4) {
              xa = function(G, p4, r6) {
                var B = h5(t4, p4);
                delete t4[p4];
                q(G, p4, r6);
                q(t4, p4, B);
              };
            }
          }
        })(Object, "getOwnPropertySymbols");
        (function(a5, b4) {
          var c5 = a5.defineProperty, d5 = a5.prototype, e8 = d5.toString, f4;
          "iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(g4) {
            g4 in b4 || (c5(b4, g4, { value: b4(g4) }), "toStringTag" === g4 && (f4 = a5.getOwnPropertyDescriptor(d5, "toString"), f4.value = function() {
              var h5 = e8.call(this), k3 = null == this ? this : this[b4.toStringTag];
              return null == k3 ? h5 : "[object " + k3 + "]";
            }, c5(d5, "toString", f4)));
          });
        })(Object, Symbol);
        (function(a5, b4, c5) {
          function d5() {
            return this;
          }
          b4[a5] || (b4[a5] = function() {
            var e8 = 0, f4 = this, g4 = { next: function() {
              var h5 = f4.length <= e8;
              return h5 ? { done: h5 } : { done: h5, value: f4[e8++] };
            } };
            g4[a5] = d5;
            return g4;
          });
          c5[a5] || (c5[a5] = function() {
            var e8 = String.fromCodePoint, f4 = this, g4 = 0, h5 = f4.length, k3 = { next: function() {
              var l7 = h5 <= g4, m4 = l7 ? "" : e8(f4.codePointAt(g4));
              g4 += m4.length;
              return l7 ? { done: l7 } : { done: l7, value: m4 };
            } };
            k3[a5] = d5;
            return k3;
          });
        })(Symbol.iterator, Array.prototype, String.prototype);
        var Wa = Object.prototype.toString;
        Object.prototype.toString = function() {
          return void 0 === this ? "[object Undefined]" : null === this ? "[object Null]" : Wa.call(this);
        };
        Object.keys = function(a5) {
          return Object.getOwnPropertyNames(a5).filter(function(b4) {
            return (b4 = Object.getOwnPropertyDescriptor(a5, b4)) && b4.enumerable;
          });
        };
        String.prototype[Symbol.iterator] && String.prototype.codePointAt || (String.prototype[Symbol.iterator] = function Xa() {
          var b4, c5 = this;
          return Ea(Xa, function(d5) {
            1 == d5.g && (b4 = 0);
            if (3 != d5.g)
              return b4 < c5.length ? d5 = ya(d5, c5[b4]) : (d5.g = 0, d5 = void 0), d5;
            b4++;
            d5.g = 2;
          });
        });
        Set.prototype[Symbol.iterator] || (Set.prototype[Symbol.iterator] = function Ya() {
          var b4, c5 = this, d5;
          return Ea(Ya, function(e8) {
            1 == e8.g && (b4 = [], c5.forEach(function(f4) {
              b4.push(f4);
            }), d5 = 0);
            if (3 != e8.g)
              return d5 < b4.length ? e8 = ya(e8, b4[d5]) : (e8.g = 0, e8 = void 0), e8;
            d5++;
            e8.g = 2;
          });
        });
        Map.prototype[Symbol.iterator] || (Map.prototype[Symbol.iterator] = function Za() {
          var b4, c5 = this, d5;
          return Ea(Za, function(e8) {
            1 == e8.g && (b4 = [], c5.forEach(function(f4, g4) {
              b4.push([g4, f4]);
            }), d5 = 0);
            if (3 != e8.g)
              return d5 < b4.length ? e8 = ya(e8, b4[d5]) : (e8.g = 0, e8 = void 0), e8;
            d5++;
            e8.g = 2;
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
          window.Event = function(a5, b4) {
            b4 = b4 || {};
            var c5 = document.createEvent("Event");
            c5.initEvent(a5, !!b4.bubbles, !!b4.cancelable);
            return c5;
          };
          if (cb) {
            for (var db in cb)
              window.Event[db] = cb[db];
            window.Event.prototype = cb.prototype;
          }
        }
        if (!window.CustomEvent || bb && "function" !== typeof window.CustomEvent)
          window.CustomEvent = function(a5, b4) {
            b4 = b4 || {};
            var c5 = document.createEvent("CustomEvent");
            c5.initCustomEvent(a5, !!b4.bubbles, !!b4.cancelable, b4.detail);
            return c5;
          }, window.CustomEvent.prototype = window.Event.prototype;
        if (!window.MouseEvent || bb && "function" !== typeof window.MouseEvent) {
          var eb = window.MouseEvent;
          window.MouseEvent = function(a5, b4) {
            b4 = b4 || {};
            var c5 = document.createEvent("MouseEvent");
            c5.initMouseEvent(a5, !!b4.bubbles, !!b4.cancelable, b4.view || window, b4.detail, b4.screenX, b4.screenY, b4.clientX, b4.clientY, b4.ctrlKey, b4.altKey, b4.shiftKey, b4.metaKey, b4.button, b4.relatedTarget);
            return c5;
          };
          if (eb)
            for (var fb in eb)
              window.MouseEvent[fb] = eb[fb];
          window.MouseEvent.prototype = eb.prototype;
        }
        ;
        var gb, hb = function() {
          function a5() {
            e8++;
          }
          var b4 = false, c5 = false, d5 = { get capture() {
            return b4 = true;
          }, get once() {
            return c5 = true;
          } }, e8 = 0, f4 = document.createElement("div");
          f4.addEventListener("click", a5, d5);
          var g4 = b4 && c5;
          g4 && (f4.dispatchEvent(new Event("click")), f4.dispatchEvent(new Event("click")), g4 = 1 == e8);
          f4.removeEventListener("click", a5, d5);
          return g4;
        }(), kb = null !== (gb = window.EventTarget) && void 0 !== gb ? gb : window.Node;
        if (!hb && "addEventListener" in kb.prototype) {
          var lb = function(a5) {
            if (!a5 || "object" !== typeof a5 && "function" !== typeof a5) {
              var b4 = !!a5;
              a5 = false;
            } else
              b4 = !!a5.capture, a5 = !!a5.once;
            return { capture: b4, once: a5 };
          }, mb = kb.prototype.addEventListener, nb = kb.prototype.removeEventListener, qb = /* @__PURE__ */ new WeakMap(), rb = /* @__PURE__ */ new WeakMap(), sb = function(a5, b4, c5) {
            var d5 = c5 ? qb : rb;
            c5 = d5.get(a5);
            void 0 === c5 && d5.set(a5, c5 = /* @__PURE__ */ new Map());
            a5 = c5.get(b4);
            void 0 === a5 && c5.set(b4, a5 = /* @__PURE__ */ new WeakMap());
            return a5;
          };
          kb.prototype.addEventListener = function(a5, b4, c5) {
            var d5 = this;
            if (null != b4) {
              c5 = lb(c5);
              var e8 = c5.capture;
              c5 = c5.once;
              var f4 = sb(this, a5, e8);
              if (!f4.has(b4)) {
                var g4 = c5 ? function(h5) {
                  f4.delete(b4);
                  nb.call(d5, a5, g4, e8);
                  if ("function" === typeof b4)
                    return b4.call(d5, h5);
                  if ("function" === typeof (null === b4 || void 0 === b4 ? void 0 : b4.handleEvent))
                    return b4.handleEvent(h5);
                } : null;
                f4.set(b4, g4);
                mb.call(this, a5, null !== g4 && void 0 !== g4 ? g4 : b4, e8);
              }
            }
          };
          kb.prototype.removeEventListener = function(a5, b4, c5) {
            if (null != b4) {
              c5 = lb(c5).capture;
              var d5 = sb(this, a5, c5), e8 = d5.get(b4);
              void 0 !== e8 && (d5.delete(b4), nb.call(this, a5, null !== e8 && void 0 !== e8 ? e8 : b4, c5));
            }
          };
        }
        ;
        Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") || Object.defineProperty(Node.prototype, "baseURI", { get: function() {
          var a5 = (this.ownerDocument || this).querySelector("base[href]");
          return a5 && a5.href || window.location.href;
        }, configurable: true, enumerable: true });
        var tb, ub, vb = Element.prototype, wb = null !== (tb = Object.getOwnPropertyDescriptor(vb, "attributes")) && void 0 !== tb ? tb : Object.getOwnPropertyDescriptor(Node.prototype, "attributes"), xb = null !== (ub = null === wb || void 0 === wb ? void 0 : wb.get) && void 0 !== ub ? ub : function() {
          return this.attributes;
        }, yb = Array.prototype.map;
        vb.hasOwnProperty("getAttributeNames") || (vb.getAttributeNames = function() {
          return yb.call(xb.call(this), function(a5) {
            return a5.name;
          });
        });
        var zb, Ab = Element.prototype;
        Ab.hasOwnProperty("matches") || (Ab.matches = null !== (zb = Ab.webkitMatchesSelector) && void 0 !== zb ? zb : Ab.msMatchesSelector);
        var Bb = Node.prototype.appendChild;
        function Cb(a5) {
          a5 = a5.prototype;
          a5.hasOwnProperty("append") || Object.defineProperty(a5, "append", { configurable: true, enumerable: true, writable: true, value: function(b4) {
            for (var c5 = [], d5 = 0; d5 < arguments.length; ++d5)
              c5[d5] = arguments[d5];
            c5 = ka(c5);
            for (d5 = c5.next(); !d5.done; d5 = c5.next())
              d5 = d5.value, Bb.call(this, "string" === typeof d5 ? document.createTextNode(d5) : d5);
          } });
        }
        Cb(Document);
        Cb(DocumentFragment);
        Cb(Element);
        var Db, Eb, Fb = Node.prototype.insertBefore, Gb = null !== (Eb = null === (Db = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) || void 0 === Db ? void 0 : Db.get) && void 0 !== Eb ? Eb : function() {
          return this.firstChild;
        };
        function Hb(a5) {
          a5 = a5.prototype;
          a5.hasOwnProperty("prepend") || Object.defineProperty(a5, "prepend", { configurable: true, enumerable: true, writable: true, value: function(b4) {
            for (var c5 = [], d5 = 0; d5 < arguments.length; ++d5)
              c5[d5] = arguments[d5];
            d5 = Gb.call(this);
            c5 = ka(c5);
            for (var e8 = c5.next(); !e8.done; e8 = c5.next())
              e8 = e8.value, Fb.call(this, "string" === typeof e8 ? document.createTextNode(e8) : e8, d5);
          } });
        }
        Hb(Document);
        Hb(DocumentFragment);
        Hb(Element);
        var Ib, Jb, Kb = Node.prototype.appendChild, Lb = Node.prototype.removeChild, Mb = null !== (Jb = null === (Ib = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) || void 0 === Ib ? void 0 : Ib.get) && void 0 !== Jb ? Jb : function() {
          return this.firstChild;
        };
        function Nb(a5) {
          a5 = a5.prototype;
          a5.hasOwnProperty("replaceChildren") || Object.defineProperty(a5, "replaceChildren", { configurable: true, enumerable: true, writable: true, value: function(b4) {
            for (var c5 = [], d5 = 0; d5 < arguments.length; ++d5)
              c5[d5] = arguments[d5];
            for (; null !== (d5 = Mb.call(this)); )
              Lb.call(this, d5);
            c5 = ka(c5);
            for (d5 = c5.next(); !d5.done; d5 = c5.next())
              d5 = d5.value, Kb.call(this, "string" === typeof d5 ? document.createTextNode(d5) : d5);
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
        function Vb(a5) {
          a5 = a5.prototype;
          a5.hasOwnProperty("after") || Object.defineProperty(a5, "after", { configurable: true, enumerable: true, writable: true, value: function(b4) {
            for (var c5 = [], d5 = 0; d5 < arguments.length; ++d5)
              c5[d5] = arguments[d5];
            d5 = Tb.call(this);
            if (null !== d5) {
              var e8 = Ub.call(this);
              c5 = ka(c5);
              for (var f4 = c5.next(); !f4.done; f4 = c5.next())
                f4 = f4.value, Sb.call(d5, "string" === typeof f4 ? document.createTextNode(f4) : f4, e8);
            }
          } });
        }
        Vb(CharacterData);
        Vb(Element);
        var Wb, Xb, Yb = Node.prototype.insertBefore, Zb = null !== (Xb = null === (Wb = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Wb ? void 0 : Wb.get) && void 0 !== Xb ? Xb : function() {
          return this.parentNode;
        };
        function $b(a5) {
          a5 = a5.prototype;
          a5.hasOwnProperty("before") || Object.defineProperty(a5, "before", { configurable: true, enumerable: true, writable: true, value: function(b4) {
            for (var c5 = [], d5 = 0; d5 < arguments.length; ++d5)
              c5[d5] = arguments[d5];
            d5 = Zb.call(this);
            if (null !== d5) {
              c5 = ka(c5);
              for (var e8 = c5.next(); !e8.done; e8 = c5.next())
                e8 = e8.value, Yb.call(d5, "string" === typeof e8 ? document.createTextNode(e8) : e8, this);
            }
          } });
        }
        $b(CharacterData);
        $b(Element);
        var ac, bc, cc = Node.prototype.removeChild, dc = null !== (bc = null === (ac = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === ac ? void 0 : ac.get) && void 0 !== bc ? bc : function() {
          return this.parentNode;
        };
        function ec(a5) {
          a5 = a5.prototype;
          a5.hasOwnProperty("remove") || Object.defineProperty(a5, "remove", { configurable: true, enumerable: true, writable: true, value: function() {
            var b4 = dc.call(this);
            b4 && cc.call(b4, this);
          } });
        }
        ec(CharacterData);
        ec(Element);
        var fc, gc, hc = Node.prototype.insertBefore, ic = Node.prototype.removeChild, kc = null !== (gc = null === (fc = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === fc ? void 0 : fc.get) && void 0 !== gc ? gc : function() {
          return this.parentNode;
        };
        function lc(a5) {
          a5 = a5.prototype;
          a5.hasOwnProperty("replaceWith") || Object.defineProperty(a5, "replaceWith", { configurable: true, enumerable: true, writable: true, value: function(b4) {
            for (var c5 = [], d5 = 0; d5 < arguments.length; ++d5)
              c5[d5] = arguments[d5];
            d5 = kc.call(this);
            if (null !== d5) {
              c5 = ka(c5);
              for (var e8 = c5.next(); !e8.done; e8 = c5.next())
                e8 = e8.value, hc.call(d5, "string" === typeof e8 ? document.createTextNode(e8) : e8, this);
              ic.call(d5, this);
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
          location.search.slice(1).split("&").forEach(function(a5) {
            a5 = a5.split("=");
            var b4;
            a5[0] && (b4 = a5[0].match(tc)) && (uc[b4[1]] = a5[1] || true);
          });
          if (sc)
            for (var vc = 0, wc = void 0; wc = sc.attributes[vc]; vc++)
              "src" !== wc.name && (uc[wc.name] = wc.value || true);
          var xc = {};
          uc.log && uc.log.split && uc.log.split(",").forEach(function(a5) {
            xc[a5] = true;
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
          function a5() {
          }
          function b4(p4, r6) {
            if (!p4.childNodes.length)
              return [];
            switch (p4.nodeType) {
              case Node.DOCUMENT_NODE:
                return F2.call(p4, r6);
              case Node.DOCUMENT_FRAGMENT_NODE:
                return E4.call(p4, r6);
              default:
                return t4.call(p4, r6);
            }
          }
          var c5 = "undefined" === typeof HTMLTemplateElement, d5 = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment), e8 = false;
          /Trident/.test(navigator.userAgent) && function() {
            function p4(z2, R3) {
              if (z2 instanceof DocumentFragment)
                for (var ob; ob = z2.firstChild; )
                  B.call(this, ob, R3);
              else
                B.call(
                  this,
                  z2,
                  R3
                );
              return z2;
            }
            e8 = true;
            var r6 = Node.prototype.cloneNode;
            Node.prototype.cloneNode = function(z2) {
              z2 = r6.call(this, z2);
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
            Node.prototype.insertBefore = p4;
            var K = Node.prototype.appendChild;
            Node.prototype.appendChild = function(z2) {
              z2 instanceof DocumentFragment ? p4.call(this, z2, null) : K.call(this, z2);
              return z2;
            };
            var aa = Node.prototype.removeChild, ma = Node.prototype.replaceChild;
            Node.prototype.replaceChild = function(z2, R3) {
              z2 instanceof DocumentFragment ? (p4.call(this, z2, R3), aa.call(this, R3)) : ma.call(this, z2, R3);
              return R3;
            };
            Document.prototype.createDocumentFragment = function() {
              var z2 = this.createElement("df");
              z2.__proto__ = DocumentFragment.prototype;
              return z2;
            };
            var va = Document.prototype.importNode;
            Document.prototype.importNode = function(z2, R3) {
              R3 = va.call(this, z2, R3 || false);
              z2 instanceof DocumentFragment && (R3.__proto__ = DocumentFragment.prototype);
              return R3;
            };
          }();
          var f4 = Node.prototype.cloneNode, g4 = Document.prototype.createElement, h5 = Document.prototype.importNode, k3 = Node.prototype.removeChild, l7 = Node.prototype.appendChild, m4 = Node.prototype.replaceChild, q = DOMParser.prototype.parseFromString, H3 = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML") || { get: function() {
            return this.innerHTML;
          }, set: function(p4) {
            this.innerHTML = p4;
          } }, C3 = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes") || { get: function() {
            return this.childNodes;
          } }, t4 = Element.prototype.querySelectorAll, F2 = Document.prototype.querySelectorAll, E4 = DocumentFragment.prototype.querySelectorAll, N2 = function() {
            if (!c5) {
              var p4 = document.createElement("template"), r6 = document.createElement("template");
              r6.content.appendChild(document.createElement("div"));
              p4.content.appendChild(r6);
              p4 = p4.cloneNode(true);
              return 0 === p4.content.childNodes.length || 0 === p4.content.firstChild.content.childNodes.length || d5;
            }
          }();
          if (c5) {
            var y4 = document.implementation.createHTMLDocument("template"), X = true, x4 = document.createElement("style");
            x4.textContent = "template{display:none;}";
            var ta = document.head;
            ta.insertBefore(x4, ta.firstElementChild);
            a5.prototype = Object.create(HTMLElement.prototype);
            var ia = !document.createElement("div").hasOwnProperty("innerHTML");
            a5.Z = function(p4) {
              if (!p4.content && p4.namespaceURI === document.documentElement.namespaceURI) {
                p4.content = y4.createDocumentFragment();
                for (var r6; r6 = p4.firstChild; )
                  l7.call(p4.content, r6);
                if (ia)
                  p4.__proto__ = a5.prototype;
                else if (p4.cloneNode = function(B) {
                  return a5.va(this, B);
                }, X)
                  try {
                    n8(p4), J(p4);
                  } catch (B) {
                    X = false;
                  }
                a5.bootstrap(p4.content);
              }
            };
            var sa = { option: ["select"], thead: ["table"], col: ["colgroup", "table"], tr: ["tbody", "table"], th: ["tr", "tbody", "table"], td: ["tr", "tbody", "table"] }, n8 = function(p4) {
              Object.defineProperty(p4, "innerHTML", { get: function() {
                return xa(this);
              }, set: function(r6) {
                var B = sa[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(r6) || ["", ""])[1].toLowerCase()];
                if (B)
                  for (var K = 0; K < B.length; K++)
                    r6 = "<" + B[K] + ">" + r6 + "</" + B[K] + ">";
                y4.body.innerHTML = r6;
                for (a5.bootstrap(y4); this.content.firstChild; )
                  k3.call(this.content, this.content.firstChild);
                r6 = y4.body;
                if (B)
                  for (K = 0; K < B.length; K++)
                    r6 = r6.lastChild;
                for (; r6.firstChild; )
                  l7.call(this.content, r6.firstChild);
              }, configurable: true });
            }, J = function(p4) {
              Object.defineProperty(p4, "outerHTML", { get: function() {
                return "<template>" + this.innerHTML + "</template>";
              }, set: function(r6) {
                if (this.parentNode) {
                  y4.body.innerHTML = r6;
                  for (r6 = this.ownerDocument.createDocumentFragment(); y4.body.firstChild; )
                    l7.call(r6, y4.body.firstChild);
                  m4.call(this.parentNode, r6, this);
                } else
                  throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
              }, configurable: true });
            };
            n8(a5.prototype);
            J(a5.prototype);
            a5.bootstrap = function(p4) {
              p4 = b4(p4, "template");
              for (var r6 = 0, B = p4.length, K; r6 < B && (K = p4[r6]); r6++)
                a5.Z(K);
            };
            document.addEventListener("DOMContentLoaded", function() {
              a5.bootstrap(document);
            });
            Document.prototype.createElement = function() {
              var p4 = g4.apply(this, arguments);
              "template" === p4.localName && a5.Z(p4);
              return p4;
            };
            DOMParser.prototype.parseFromString = function() {
              var p4 = q.apply(this, arguments);
              a5.bootstrap(p4);
              return p4;
            };
            Object.defineProperty(HTMLElement.prototype, "innerHTML", { get: function() {
              return xa(this);
            }, set: function(p4) {
              H3.set.call(this, p4);
              a5.bootstrap(this);
            }, configurable: true, enumerable: true });
            var ha = /[&\u00A0"]/g, jc = /[&\u00A0<>]/g, ib = function(p4) {
              switch (p4) {
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
            x4 = function(p4) {
              for (var r6 = {}, B = 0; B < p4.length; B++)
                r6[p4[B]] = true;
              return r6;
            };
            var Va = x4("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), jb = x4("style script xmp iframe noembed noframes plaintext noscript".split(" ")), xa = function(p4, r6) {
              "template" === p4.localName && (p4 = p4.content);
              for (var B = "", K = r6 ? r6(p4) : C3.get.call(p4), aa = 0, ma = K.length, va; aa < ma && (va = K[aa]); aa++) {
                a: {
                  var z2 = va;
                  var R3 = p4;
                  var ob = r6;
                  switch (z2.nodeType) {
                    case Node.ELEMENT_NODE:
                      for (var Jc = z2.localName, pb = "<" + Jc, Uh = z2.attributes, ze = 0; R3 = Uh[ze]; ze++)
                        pb += " " + R3.name + '="' + R3.value.replace(ha, ib) + '"';
                      pb += ">";
                      z2 = Va[Jc] ? pb : pb + xa(z2, ob) + "</" + Jc + ">";
                      break a;
                    case Node.TEXT_NODE:
                      z2 = z2.data;
                      z2 = R3 && jb[R3.localName] ? z2 : z2.replace(jc, ib);
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
          if (c5 || N2) {
            a5.va = function(p4, r6) {
              var B = f4.call(p4, false);
              this.Z && this.Z(B);
              r6 && (l7.call(B.content, f4.call(p4.content, true)), I2(B.content, p4.content));
              return B;
            };
            var I2 = function(p4, r6) {
              if (r6.querySelectorAll && (r6 = b4(r6, "template"), 0 !== r6.length)) {
                p4 = b4(p4, "template");
                for (var B = 0, K = p4.length, aa, ma; B < K; B++)
                  ma = r6[B], aa = p4[B], a5 && a5.Z && a5.Z(ma), m4.call(aa.parentNode, u4.call(ma, true), aa);
              }
            }, u4 = Node.prototype.cloneNode = function(p4) {
              if (!e8 && d5 && this instanceof DocumentFragment)
                if (p4)
                  var r6 = G.call(this.ownerDocument, this, true);
                else
                  return this.ownerDocument.createDocumentFragment();
              else
                this.nodeType === Node.ELEMENT_NODE && "template" === this.localName && this.namespaceURI == document.documentElement.namespaceURI ? r6 = a5.va(this, p4) : r6 = f4.call(
                  this,
                  p4
                );
              p4 && I2(r6, this);
              return r6;
            }, G = Document.prototype.importNode = function(p4, r6) {
              r6 = r6 || false;
              if ("template" === p4.localName)
                return a5.va(p4, r6);
              var B = h5.call(this, p4, r6);
              if (r6) {
                I2(B, p4);
                p4 = b4(B, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
                for (var K, aa = 0; aa < p4.length; aa++) {
                  K = p4[aa];
                  r6 = g4.call(document, "script");
                  r6.textContent = K.textContent;
                  for (var ma = K.attributes, va = 0, z2; va < ma.length; va++)
                    z2 = ma[va], r6.setAttribute(z2.name, z2.value);
                  m4.call(K.parentNode, r6, K);
                }
              }
              return B;
            };
          }
          c5 && (window.HTMLTemplateElement = a5);
        })();
        function Bc() {
        }
        Bc.prototype.toJSON = function() {
          return {};
        };
        function D3(a5) {
          a5.__shady || (a5.__shady = new Bc());
          return a5.__shady;
        }
        function L3(a5) {
          return a5 && a5.__shady;
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
        function Gc(a5) {
          return (a5 = L3(a5)) && void 0 !== a5.firstChild;
        }
        function O3(a5) {
          return a5 instanceof ShadowRoot;
        }
        function Hc(a5) {
          return (a5 = (a5 = L3(a5)) && a5.root) && Ic(a5);
        }
        var Kc = Element.prototype, Lc = Kc.matches || Kc.matchesSelector || Kc.mozMatchesSelector || Kc.msMatchesSelector || Kc.oMatchesSelector || Kc.webkitMatchesSelector, Mc = document.createTextNode(""), Nc = 0, Oc = [];
        new MutationObserver(function() {
          for (; Oc.length; )
            try {
              Oc.shift()();
            } catch (a5) {
              throw Mc.textContent = Nc++, a5;
            }
        }).observe(Mc, { characterData: true });
        function Pc(a5) {
          Oc.push(a5);
          Mc.textContent = Nc++;
        }
        var Qc = document.contains ? function(a5, b4) {
          return a5.__shady_native_contains(b4);
        } : function(a5, b4) {
          return a5 === b4 || a5.documentElement && a5.documentElement.__shady_native_contains(b4);
        };
        function Rc(a5, b4) {
          for (; b4; ) {
            if (b4 == a5)
              return true;
            b4 = b4.__shady_parentNode;
          }
          return false;
        }
        function Sc(a5) {
          for (var b4 = a5.length - 1; 0 <= b4; b4--) {
            var c5 = a5[b4], d5 = c5.getAttribute("id") || c5.getAttribute("name");
            d5 && "length" !== d5 && isNaN(d5) && (a5[d5] = c5);
          }
          a5.item = function(e8) {
            return a5[e8];
          };
          a5.namedItem = function(e8) {
            if ("length" !== e8 && isNaN(e8) && a5[e8])
              return a5[e8];
            for (var f4 = ka(a5), g4 = f4.next(); !g4.done; g4 = f4.next())
              if (g4 = g4.value, (g4.getAttribute("id") || g4.getAttribute("name")) == e8)
                return g4;
            return null;
          };
          return a5;
        }
        function Tc(a5) {
          var b4 = [];
          for (a5 = a5.__shady_native_firstChild; a5; a5 = a5.__shady_native_nextSibling)
            b4.push(a5);
          return b4;
        }
        function Uc(a5) {
          var b4 = [];
          for (a5 = a5.__shady_firstChild; a5; a5 = a5.__shady_nextSibling)
            b4.push(a5);
          return b4;
        }
        function Vc(a5, b4, c5) {
          c5.configurable = true;
          if (c5.value)
            a5[b4] = c5.value;
          else
            try {
              Object.defineProperty(a5, b4, c5);
            } catch (d5) {
            }
        }
        function P4(a5, b4, c5, d5) {
          c5 = void 0 === c5 ? "" : c5;
          for (var e8 in b4)
            d5 && 0 <= d5.indexOf(e8) || Vc(a5, c5 + e8, b4[e8]);
        }
        function Wc(a5, b4) {
          for (var c5 in b4)
            c5 in a5 && Vc(a5, c5, b4[c5]);
        }
        function Q(a5) {
          var b4 = {};
          Object.getOwnPropertyNames(a5).forEach(function(c5) {
            b4[c5] = Object.getOwnPropertyDescriptor(a5, c5);
          });
          return b4;
        }
        function Xc(a5, b4) {
          for (var c5 = Object.getOwnPropertyNames(b4), d5 = 0, e8; d5 < c5.length; d5++)
            e8 = c5[d5], a5[e8] = b4[e8];
        }
        function Yc(a5) {
          return a5 instanceof Node ? a5 : document.createTextNode("" + a5);
        }
        function Zc(a5) {
          for (var b4 = [], c5 = 0; c5 < arguments.length; ++c5)
            b4[c5] = arguments[c5];
          if (1 === b4.length)
            return Yc(b4[0]);
          c5 = document.createDocumentFragment();
          b4 = ka(b4);
          for (var d5 = b4.next(); !d5.done; d5 = b4.next())
            c5.appendChild(Yc(d5.value));
          return c5;
        }
        function $c(a5) {
          var b4;
          for (b4 = void 0 === b4 ? 1 : b4; 0 < b4; b4--)
            a5 = a5.reduce(function(c5, d5) {
              Array.isArray(d5) ? c5.push.apply(c5, w4(d5)) : c5.push(d5);
              return c5;
            }, []);
          return a5;
        }
        function ad(a5) {
          var b4 = [], c5 = /* @__PURE__ */ new Set();
          a5 = ka(a5);
          for (var d5 = a5.next(); !d5.done; d5 = a5.next())
            d5 = d5.value, c5.has(d5) || (b4.push(d5), c5.add(d5));
          return b4;
        }
        ;
        var bd = [], cd;
        function dd(a5) {
          cd || (cd = true, Pc(ed));
          bd.push(a5);
        }
        function ed() {
          cd = false;
          for (var a5 = !!bd.length; bd.length; )
            bd.shift()();
          return a5;
        }
        ed.list = bd;
        function fd() {
          this.g = false;
          this.addedNodes = [];
          this.removedNodes = [];
          this.qa = /* @__PURE__ */ new Set();
        }
        function gd(a5) {
          a5.g || (a5.g = true, Pc(function() {
            a5.flush();
          }));
        }
        fd.prototype.flush = function() {
          if (this.g) {
            this.g = false;
            var a5 = this.takeRecords();
            a5.length && this.qa.forEach(function(b4) {
              b4(a5);
            });
          }
        };
        fd.prototype.takeRecords = function() {
          if (this.addedNodes.length || this.removedNodes.length) {
            var a5 = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];
            this.addedNodes = [];
            this.removedNodes = [];
            return a5;
          }
          return [];
        };
        function hd(a5, b4) {
          var c5 = D3(a5);
          c5.ga || (c5.ga = new fd());
          c5.ga.qa.add(b4);
          var d5 = c5.ga;
          return { Va: b4, X: d5, Wa: a5, takeRecords: function() {
            return d5.takeRecords();
          } };
        }
        function id(a5) {
          var b4 = a5 && a5.X;
          b4 && (b4.qa.delete(a5.Va), b4.qa.size || (D3(a5.Wa).ga = null));
        }
        function jd(a5, b4) {
          var c5 = b4.getRootNode();
          return a5.map(function(d5) {
            var e8 = c5 === d5.target.getRootNode();
            if (e8 && d5.addedNodes) {
              if (e8 = [].slice.call(d5.addedNodes).filter(function(f4) {
                return c5 === f4.getRootNode();
              }), e8.length)
                return d5 = Object.create(d5), Object.defineProperty(d5, "addedNodes", { value: e8, configurable: true }), d5;
            } else if (e8)
              return d5;
          }).filter(function(d5) {
            return d5;
          });
        }
        ;
        var kd = /[&\u00A0"]/g, ld = /[&\u00A0<>]/g;
        function md(a5) {
          switch (a5) {
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
        function nd(a5) {
          for (var b4 = {}, c5 = 0; c5 < a5.length; c5++)
            b4[a5[c5]] = true;
          return b4;
        }
        var od = nd("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), pd = nd("style script xmp iframe noembed noframes plaintext noscript".split(" "));
        function qd(a5, b4) {
          "template" === a5.localName && (a5 = a5.content);
          for (var c5 = "", d5 = b4 ? b4(a5) : a5.childNodes, e8 = 0, f4 = d5.length, g4 = void 0; e8 < f4 && (g4 = d5[e8]); e8++) {
            a: {
              var h5 = g4;
              var k3 = a5, l7 = b4;
              switch (h5.nodeType) {
                case Node.ELEMENT_NODE:
                  k3 = h5.localName;
                  for (var m4 = "<" + k3, q = h5.attributes, H3 = 0, C3; C3 = q[H3]; H3++)
                    m4 += " " + C3.name + '="' + C3.value.replace(kd, md) + '"';
                  m4 += ">";
                  h5 = od[k3] ? m4 : m4 + qd(h5, l7) + "</" + k3 + ">";
                  break a;
                case Node.TEXT_NODE:
                  h5 = h5.data;
                  h5 = k3 && pd[k3.localName] ? h5 : h5.replace(ld, md);
                  break a;
                case Node.COMMENT_NODE:
                  h5 = "<!--" + h5.data + "-->";
                  break a;
                default:
                  throw window.console.error(h5), Error("not implemented");
              }
            }
            c5 += h5;
          }
          return c5;
        }
        ;
        var rd = M2.D, sd = { querySelector: function(a5) {
          return this.__shady_native_querySelector(a5);
        }, querySelectorAll: function(a5) {
          return this.__shady_native_querySelectorAll(a5);
        } }, td = {};
        function ud(a5) {
          td[a5] = function(b4) {
            return b4["__shady_native_" + a5];
          };
        }
        function vd(a5, b4) {
          P4(a5, b4, "__shady_native_");
          for (var c5 in b4)
            ud(c5);
        }
        function S4(a5, b4) {
          b4 = void 0 === b4 ? [] : b4;
          for (var c5 = 0; c5 < b4.length; c5++) {
            var d5 = b4[c5], e8 = Object.getOwnPropertyDescriptor(a5, d5);
            e8 && (Object.defineProperty(a5, "__shady_native_" + d5, e8), e8.value ? sd[d5] || (sd[d5] = e8.value) : ud(d5));
          }
        }
        var wd = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, false), xd = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, false), yd = document.implementation.createHTMLDocument("inert");
        function zd(a5) {
          for (var b4; b4 = a5.__shady_native_firstChild; )
            a5.__shady_native_removeChild(b4);
        }
        var Ad = ["firstElementChild", "lastElementChild", "children", "childElementCount"], Bd = ["querySelector", "querySelectorAll", "append", "prepend", "replaceChildren"];
        function Cd() {
          var a5 = ["dispatchEvent", "addEventListener", "removeEventListener"];
          window.EventTarget ? (S4(window.EventTarget.prototype, a5), void 0 === window.__shady_native_addEventListener && S4(Window.prototype, a5)) : (S4(Node.prototype, a5), S4(Window.prototype, a5), S4(XMLHttpRequest.prototype, a5));
          rd ? S4(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : vd(Node.prototype, {
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
              var b4 = [];
              wd.currentNode = this;
              for (var c5 = wd.firstChild(); c5; )
                b4.push(c5), c5 = wd.nextSibling();
              return b4;
            } },
            parentElement: { get: function() {
              xd.currentNode = this;
              return xd.parentNode();
            } },
            textContent: { get: function() {
              switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                  for (var b4 = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, false), c5 = "", d5; d5 = b4.nextNode(); )
                    c5 += d5.nodeValue;
                  return c5;
                default:
                  return this.nodeValue;
              }
            }, set: function(b4) {
              if ("undefined" === typeof b4 || null === b4)
                b4 = "";
              switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                  zd(this);
                  (0 < b4.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b4), void 0);
                  break;
                default:
                  this.nodeValue = b4;
              }
            } }
          });
          S4(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
          S4(HTMLElement.prototype, ["parentElement", "contains"]);
          a5 = { firstElementChild: { get: function() {
            xd.currentNode = this;
            return xd.firstChild();
          } }, lastElementChild: { get: function() {
            xd.currentNode = this;
            return xd.lastChild();
          } }, children: { get: function() {
            var b4 = [];
            xd.currentNode = this;
            for (var c5 = xd.firstChild(); c5; )
              b4.push(c5), c5 = xd.nextSibling();
            return Sc(b4);
          } }, childElementCount: { get: function() {
            return this.children ? this.children.length : 0;
          } } };
          rd ? (S4(Element.prototype, Ad), S4(Element.prototype, [
            "previousElementSibling",
            "nextElementSibling",
            "innerHTML",
            "className"
          ]), S4(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (vd(Element.prototype, a5), vd(Element.prototype, { previousElementSibling: { get: function() {
            xd.currentNode = this;
            return xd.previousSibling();
          } }, nextElementSibling: { get: function() {
            xd.currentNode = this;
            return xd.nextSibling();
          } }, innerHTML: { get: function() {
            return qd(this, Tc);
          }, set: function(b4) {
            var c5 = "template" === this.localName ? this.content : this;
            zd(c5);
            var d5 = this.localName || "div";
            d5 = this.namespaceURI && this.namespaceURI !== yd.namespaceURI ? yd.createElementNS(this.namespaceURI, d5) : yd.createElement(d5);
            d5.innerHTML = b4;
            for (b4 = "template" === this.localName ? d5.content : d5; d5 = b4.__shady_native_firstChild; )
              c5.__shady_native_insertBefore(d5, void 0);
          } }, className: { get: function() {
            return this.getAttribute("class") || "";
          }, set: function(b4) {
            this.setAttribute("class", b4);
          } } }));
          S4(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));
          S4(Element.prototype, Bd);
          S4(HTMLElement.prototype, ["focus", "blur"]);
          window.HTMLTemplateElement && S4(window.HTMLTemplateElement.prototype, ["innerHTML"]);
          rd ? S4(DocumentFragment.prototype, Ad) : vd(DocumentFragment.prototype, a5);
          S4(DocumentFragment.prototype, Bd);
          rd ? (S4(Document.prototype, Ad), S4(Document.prototype, ["activeElement"])) : vd(Document.prototype, a5);
          S4(Document.prototype, ["importNode", "getElementById", "elementFromPoint", Fc()]);
          S4(Document.prototype, Bd);
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
        }, set textContent(a5) {
          this.__shady_textContent = a5;
        }, get innerHTML() {
          return this.__shady_innerHTML;
        }, set innerHTML(a5) {
          this.__shady_innerHTML = a5;
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
        }, set className(a5) {
          this.__shady_className = a5;
        } });
        function Gd(a5) {
          for (var b4 in a5) {
            var c5 = a5[b4];
            c5 && (c5.enumerable = false);
          }
        }
        Gd(Dd);
        Gd(Ed);
        Gd(Fd);
        var Hd = M2.D || true === M2.J, Id = Hd ? function() {
        } : function(a5) {
          var b4 = D3(a5);
          b4.Ta || (b4.Ta = true, Wc(a5, Fd));
        }, Jd = Hd ? function() {
        } : function(a5) {
          var b4 = D3(a5);
          b4.Sa || (b4.Sa = true, Wc(a5, Dd), window.customElements && window.customElements.polyfillWrapFlushCallback && !M2.J || Wc(a5, Ed));
        };
        var Kd = "__eventWrappers" + Date.now(), Ld = function() {
          var a5 = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
          return a5 ? function(b4) {
            return a5.get.call(b4);
          } : null;
        }(), Md = function() {
          function a5() {
          }
          var b4 = false, c5 = { get capture() {
            b4 = true;
            return false;
          } };
          window.addEventListener("test", a5, c5);
          window.removeEventListener("test", a5, c5);
          return b4;
        }();
        function Nd(a5) {
          if (null === a5 || "object" !== typeof a5 && "function" !== typeof a5) {
            var b4 = !!a5;
            var c5 = false;
          } else {
            b4 = !!a5.capture;
            c5 = !!a5.once;
            var d5 = a5.U;
          }
          return { Pa: d5, capture: b4, once: c5, Na: Md ? a5 : b4 };
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
        function Qd(a5) {
          return a5 instanceof Node ? a5.__shady_getRootNode() : a5;
        }
        function Rd(a5, b4) {
          var c5 = [], d5 = a5;
          for (a5 = Qd(a5); d5; )
            c5.push(d5), d5 = d5.__shady_assignedSlot ? d5.__shady_assignedSlot : d5.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d5.host && (b4 || d5 !== a5) ? d5.host : d5.__shady_parentNode;
          c5[c5.length - 1] === document && c5.push(window);
          return c5;
        }
        function Sd(a5) {
          a5.__composedPath || (a5.__composedPath = Rd(a5.target, true));
          return a5.__composedPath;
        }
        function Td(a5, b4) {
          if (!O3)
            return a5;
          a5 = Rd(a5, true);
          for (var c5 = 0, d5, e8 = void 0, f4, g4 = void 0; c5 < b4.length; c5++)
            if (d5 = b4[c5], f4 = Qd(d5), f4 !== e8 && (g4 = a5.indexOf(f4), e8 = f4), !O3(f4) || -1 < g4)
              return d5;
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
        function Wd(a5) {
          function b4(c5, d5) {
            c5 = new a5(c5, d5);
            c5.__composed = d5 && !!d5.composed;
            return c5;
          }
          b4.__proto__ = a5;
          b4.prototype = a5.prototype;
          return b4;
        }
        var Xd = { focus: true, blur: true };
        function Yd(a5) {
          return a5.__target !== a5.target || a5.__relatedTarget !== a5.relatedTarget;
        }
        function Zd(a5, b4, c5) {
          if (c5 = b4.__handlers && b4.__handlers[a5.type] && b4.__handlers[a5.type][c5])
            for (var d5 = 0, e8; (e8 = c5[d5]) && (!Yd(a5) || a5.target !== a5.relatedTarget) && (e8.call(b4, a5), !a5.__immediatePropagationStopped); d5++)
              ;
        }
        var $d = new Event("e").hasOwnProperty("currentTarget");
        function ae(a5) {
          a5 = $d ? Object.create(a5) : a5;
          var b4 = a5.composedPath(), c5 = b4.map(function(m4) {
            return Td(m4, b4);
          }), d5 = a5.bubbles, e8 = Object.getOwnPropertyDescriptor(a5, "currentTarget");
          Object.defineProperty(a5, "currentTarget", { configurable: true, enumerable: true, get: function() {
            return k3;
          } });
          var f4 = Event.CAPTURING_PHASE, g4 = Object.getOwnPropertyDescriptor(a5, "eventPhase");
          Object.defineProperty(a5, "eventPhase", { configurable: true, enumerable: true, get: function() {
            return f4;
          } });
          try {
            for (var h5 = b4.length - 1; 0 <= h5; h5--) {
              var k3 = b4[h5];
              f4 = k3 === c5[h5] ? Event.AT_TARGET : Event.CAPTURING_PHASE;
              Zd(a5, k3, "capture");
              if (a5.ua)
                return;
            }
            for (h5 = 0; h5 < b4.length; h5++) {
              k3 = b4[h5];
              var l7 = k3 === c5[h5];
              if (l7 || d5) {
                if (f4 = l7 ? Event.AT_TARGET : Event.BUBBLING_PHASE, Zd(a5, k3, "bubble"), a5.ua)
                  break;
              }
            }
          } finally {
            $d || (e8 ? Object.defineProperty(a5, "currentTarget", e8) : delete a5.currentTarget, g4 ? Object.defineProperty(a5, "eventPhase", g4) : delete a5.eventPhase);
          }
        }
        function be(a5, b4, c5, d5) {
          for (var e8 = 0; e8 < a5.length; e8++) {
            var f4 = a5[e8], g4 = f4.type, h5 = f4.capture;
            if (b4 === f4.node && c5 === g4 && d5 === h5)
              return e8;
          }
          return -1;
        }
        function ce(a5) {
          ed();
          return !M2.ha && this instanceof Node && !Qc(document, this) ? (a5.__target || de(a5, this), ae(a5)) : this.__shady_native_dispatchEvent(a5);
        }
        function ee(a5, b4, c5) {
          var d5 = this, e8 = Nd(c5), f4 = e8.capture, g4 = e8.once, h5 = e8.Pa;
          e8 = e8.Na;
          if (b4) {
            var k3 = typeof b4;
            if ("function" === k3 || "object" === k3) {
              if ("object" !== k3 || b4.handleEvent && "function" === typeof b4.handleEvent) {
                if (Pd[a5])
                  return this.__shady_native_addEventListener(a5, b4, e8);
                var l7 = h5 || this;
                if (h5 = b4[Kd]) {
                  if (-1 < be(h5, l7, a5, f4))
                    return;
                } else
                  b4[Kd] = [];
                h5 = function(m4) {
                  g4 && d5.__shady_removeEventListener(a5, b4, c5);
                  m4.__target || de(m4);
                  if (l7 !== d5) {
                    var q = Object.getOwnPropertyDescriptor(m4, "currentTarget");
                    Object.defineProperty(m4, "currentTarget", {
                      get: function() {
                        return l7;
                      },
                      configurable: true
                    });
                    var H3 = Object.getOwnPropertyDescriptor(m4, "eventPhase");
                    Object.defineProperty(m4, "eventPhase", { configurable: true, enumerable: true, get: function() {
                      return f4 ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
                    } });
                  }
                  m4.__previousCurrentTarget = m4.currentTarget;
                  if (!O3(l7) && "slot" !== l7.localName || -1 != m4.composedPath().indexOf(l7)) {
                    if (m4.composed || -1 < m4.composedPath().indexOf(l7)) {
                      if (Yd(m4) && m4.target === m4.relatedTarget)
                        m4.eventPhase === Event.BUBBLING_PHASE && m4.stopImmediatePropagation();
                      else if (m4.eventPhase === Event.CAPTURING_PHASE || m4.bubbles || m4.target === l7 || l7 instanceof Window) {
                        var C3 = "function" === k3 ? b4.call(l7, m4) : b4.handleEvent && b4.handleEvent(m4);
                        l7 !== d5 && (q ? (Object.defineProperty(m4, "currentTarget", q), q = null) : delete m4.currentTarget, H3 ? (Object.defineProperty(m4, "eventPhase", H3), H3 = null) : delete m4.eventPhase);
                        return C3;
                      }
                    }
                  }
                };
                b4[Kd].push({ node: l7, type: a5, capture: f4, ub: h5 });
                this.__handlers = this.__handlers || {};
                this.__handlers[a5] = this.__handlers[a5] || { capture: [], bubble: [] };
                this.__handlers[a5][f4 ? "capture" : "bubble"].push(h5);
                Xd[a5] || this.__shady_native_addEventListener(
                  a5,
                  h5,
                  e8
                );
              }
            }
          }
        }
        function fe(a5, b4, c5) {
          if (b4) {
            var d5 = Nd(c5);
            c5 = d5.capture;
            var e8 = d5.Pa;
            d5 = d5.Na;
            if (Pd[a5])
              return this.__shady_native_removeEventListener(a5, b4, d5);
            var f4 = e8 || this;
            e8 = void 0;
            var g4 = null;
            try {
              g4 = b4[Kd];
            } catch (h5) {
            }
            g4 && (f4 = be(g4, f4, a5, c5), -1 < f4 && (e8 = g4.splice(f4, 1)[0].ub, g4.length || (b4[Kd] = void 0)));
            this.__shady_native_removeEventListener(a5, e8 || b4, d5);
            e8 && this.__handlers && this.__handlers[a5] && (a5 = this.__handlers[a5][c5 ? "capture" : "bubble"], b4 = a5.indexOf(e8), -1 < b4 && a5.splice(b4, 1));
          }
        }
        function ge() {
          for (var a5 in Xd)
            window.__shady_native_addEventListener(a5, function(b4) {
              b4.__target || (de(b4), ae(b4));
            }, true);
        }
        var he = Q(Ud);
        function de(a5, b4) {
          b4 = void 0 === b4 ? a5.target : b4;
          a5.__target = b4;
          a5.__relatedTarget = a5.relatedTarget;
          if (M2.D) {
            b4 = Object.getPrototypeOf(a5);
            if (!b4.hasOwnProperty("__shady_patchedProto")) {
              var c5 = Object.create(b4);
              c5.__shady_sourceProto = b4;
              P4(c5, he);
              b4.__shady_patchedProto = c5;
            }
            a5.__proto__ = b4.__shady_patchedProto;
          } else
            P4(a5, he);
        }
        var ie = Wd(Event), je = Wd(CustomEvent), ke = Wd(MouseEvent);
        function le() {
          if (!Ld && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
            var a5 = function() {
              var b4 = new MouseEvent("click", { bubbles: true, cancelable: true, composed: true });
              this.__shady_dispatchEvent(b4);
            };
            Element.prototype.click ? Element.prototype.click = a5 : HTMLElement.prototype.click && (HTMLElement.prototype.click = a5);
          }
        }
        var me = Object.getOwnPropertyNames(Element.prototype).filter(function(a5) {
          return "on" === a5.substring(0, 2);
        }), ne = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function(a5) {
          return "on" === a5.substring(0, 2);
        });
        function oe(a5) {
          return { set: function(b4) {
            var c5 = D3(this), d5 = a5.substring(2);
            c5.T || (c5.T = {});
            c5.T[a5] && this.removeEventListener(d5, c5.T[a5]);
            this.__shady_addEventListener(d5, b4);
            c5.T[a5] = b4;
          }, get: function() {
            var b4 = L3(this);
            return b4 && b4.T && b4.T[a5];
          }, configurable: true };
        }
        ;
        function pe(a5, b4) {
          return { index: a5, ia: [], pa: b4 };
        }
        function qe(a5, b4, c5, d5) {
          var e8 = 0, f4 = 0, g4 = 0, h5 = 0, k3 = Math.min(b4 - e8, d5 - f4);
          if (0 == e8 && 0 == f4)
            a: {
              for (g4 = 0; g4 < k3; g4++)
                if (a5[g4] !== c5[g4])
                  break a;
              g4 = k3;
            }
          if (b4 == a5.length && d5 == c5.length) {
            h5 = a5.length;
            for (var l7 = c5.length, m4 = 0; m4 < k3 - g4 && re(a5[--h5], c5[--l7]); )
              m4++;
            h5 = m4;
          }
          e8 += g4;
          f4 += g4;
          b4 -= h5;
          d5 -= h5;
          if (0 == b4 - e8 && 0 == d5 - f4)
            return [];
          if (e8 == b4) {
            for (b4 = pe(e8, 0); f4 < d5; )
              b4.ia.push(c5[f4++]);
            return [b4];
          }
          if (f4 == d5)
            return [pe(e8, b4 - e8)];
          k3 = e8;
          g4 = f4;
          d5 = d5 - g4 + 1;
          h5 = b4 - k3 + 1;
          b4 = Array(d5);
          for (l7 = 0; l7 < d5; l7++)
            b4[l7] = Array(h5), b4[l7][0] = l7;
          for (l7 = 0; l7 < h5; l7++)
            b4[0][l7] = l7;
          for (l7 = 1; l7 < d5; l7++)
            for (m4 = 1; m4 < h5; m4++)
              if (a5[k3 + m4 - 1] === c5[g4 + l7 - 1])
                b4[l7][m4] = b4[l7 - 1][m4 - 1];
              else {
                var q = b4[l7 - 1][m4] + 1, H3 = b4[l7][m4 - 1] + 1;
                b4[l7][m4] = q < H3 ? q : H3;
              }
          k3 = b4.length - 1;
          g4 = b4[0].length - 1;
          d5 = b4[k3][g4];
          for (a5 = []; 0 < k3 || 0 < g4; )
            0 == k3 ? (a5.push(2), g4--) : 0 == g4 ? (a5.push(3), k3--) : (h5 = b4[k3 - 1][g4 - 1], l7 = b4[k3 - 1][g4], m4 = b4[k3][g4 - 1], q = l7 < m4 ? l7 < h5 ? l7 : h5 : m4 < h5 ? m4 : h5, q == h5 ? (h5 == d5 ? a5.push(0) : (a5.push(1), d5 = h5), k3--, g4--) : q == l7 ? (a5.push(3), k3--, d5 = l7) : (a5.push(2), g4--, d5 = m4));
          a5.reverse();
          b4 = void 0;
          k3 = [];
          for (g4 = 0; g4 < a5.length; g4++)
            switch (a5[g4]) {
              case 0:
                b4 && (k3.push(b4), b4 = void 0);
                e8++;
                f4++;
                break;
              case 1:
                b4 || (b4 = pe(e8, 0));
                b4.pa++;
                e8++;
                b4.ia.push(c5[f4]);
                f4++;
                break;
              case 2:
                b4 || (b4 = pe(
                  e8,
                  0
                ));
                b4.pa++;
                e8++;
                break;
              case 3:
                b4 || (b4 = pe(e8, 0)), b4.ia.push(c5[f4]), f4++;
            }
          b4 && k3.push(b4);
          return k3;
        }
        function re(a5, b4) {
          return a5 === b4;
        }
        ;
        var se = Q({ dispatchEvent: ce, addEventListener: ee, removeEventListener: fe });
        var te = null;
        function ue() {
          te || (te = window.ShadyCSS && window.ShadyCSS.ScopingShim);
          return te || null;
        }
        function ve(a5, b4, c5) {
          var d5 = ue();
          return d5 && "class" === b4 ? (d5.setElementClass(a5, c5), true) : false;
        }
        function we(a5, b4) {
          var c5 = ue();
          c5 && c5.unscopeNode(a5, b4);
        }
        function xe(a5, b4) {
          var c5 = ue();
          if (!c5)
            return true;
          if (a5.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            c5 = true;
            for (a5 = a5.__shady_firstChild; a5; a5 = a5.__shady_nextSibling)
              c5 = c5 && xe(a5, b4);
            return c5;
          }
          return a5.nodeType !== Node.ELEMENT_NODE ? true : c5.currentScopeForNode(a5) === b4;
        }
        function ye(a5) {
          if (a5.nodeType !== Node.ELEMENT_NODE)
            return "";
          var b4 = ue();
          return b4 ? b4.currentScopeForNode(a5) : "";
        }
        function Ae(a5, b4) {
          if (a5)
            for (a5.nodeType === Node.ELEMENT_NODE && b4(a5), a5 = a5.__shady_firstChild; a5; a5 = a5.__shady_nextSibling)
              a5.nodeType === Node.ELEMENT_NODE && Ae(a5, b4);
        }
        ;
        var Be = window.document, Ce = M2.ha, De = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"), Ee = De && De.get;
        function Fe(a5) {
          for (var b4; b4 = a5.__shady_firstChild; )
            a5.__shady_removeChild(b4);
        }
        function Ge(a5) {
          var b4 = L3(a5);
          if (b4 && void 0 !== b4.ta)
            for (b4 = a5.__shady_firstChild; b4; b4 = b4.__shady_nextSibling)
              Ge(b4);
          if (a5 = L3(a5))
            a5.ta = void 0;
        }
        function He(a5) {
          var b4 = a5;
          if (a5 && "slot" === a5.localName) {
            var c5 = L3(a5);
            (c5 = c5 && c5.aa) && (b4 = c5.length ? c5[0] : He(a5.__shady_nextSibling));
          }
          return b4;
        }
        function Ie(a5, b4, c5) {
          if (a5 = (a5 = L3(a5)) && a5.ga) {
            if (b4)
              if (b4.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                for (var d5 = 0, e8 = b4.childNodes.length; d5 < e8; d5++)
                  a5.addedNodes.push(b4.childNodes[d5]);
              else
                a5.addedNodes.push(b4);
            c5 && a5.removedNodes.push(c5);
            gd(a5);
          }
        }
        var Pe = Q({
          get parentNode() {
            var a5 = L3(this);
            a5 = a5 && a5.parentNode;
            return void 0 !== a5 ? a5 : this.__shady_native_parentNode;
          },
          get firstChild() {
            var a5 = L3(this);
            a5 = a5 && a5.firstChild;
            return void 0 !== a5 ? a5 : this.__shady_native_firstChild;
          },
          get lastChild() {
            var a5 = L3(this);
            a5 = a5 && a5.lastChild;
            return void 0 !== a5 ? a5 : this.__shady_native_lastChild;
          },
          get nextSibling() {
            var a5 = L3(this);
            a5 = a5 && a5.nextSibling;
            return void 0 !== a5 ? a5 : this.__shady_native_nextSibling;
          },
          get previousSibling() {
            var a5 = L3(this);
            a5 = a5 && a5.previousSibling;
            return void 0 !== a5 ? a5 : this.__shady_native_previousSibling;
          },
          get childNodes() {
            if (Gc(this)) {
              var a5 = L3(this);
              if (!a5.childNodes) {
                a5.childNodes = [];
                for (var b4 = this.__shady_firstChild; b4; b4 = b4.__shady_nextSibling)
                  a5.childNodes.push(b4);
              }
              var c5 = a5.childNodes;
            } else
              c5 = this.__shady_native_childNodes;
            c5.item = function(d5) {
              return c5[d5];
            };
            return c5;
          },
          get parentElement() {
            var a5 = L3(this);
            (a5 = a5 && a5.parentNode) && a5.nodeType !== Node.ELEMENT_NODE && (a5 = null);
            return void 0 !== a5 ? a5 : this.__shady_native_parentElement;
          },
          get isConnected() {
            if (Ee && Ee.call(this))
              return true;
            if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE)
              return false;
            var a5 = this.ownerDocument;
            if (null === a5 || Qc(a5, this))
              return true;
            for (a5 = this; a5 && !(a5 instanceof Document); )
              a5 = a5.__shady_parentNode || (O3(a5) ? a5.host : void 0);
            return !!(a5 && a5 instanceof Document);
          },
          get textContent() {
            if (Gc(this)) {
              for (var a5 = [], b4 = this.__shady_firstChild; b4; b4 = b4.__shady_nextSibling)
                b4.nodeType !== Node.COMMENT_NODE && a5.push(b4.__shady_textContent);
              return a5.join("");
            }
            return this.__shady_native_textContent;
          },
          set textContent(a5) {
            if ("undefined" === typeof a5 || null === a5)
              a5 = "";
            switch (this.nodeType) {
              case Node.ELEMENT_NODE:
              case Node.DOCUMENT_FRAGMENT_NODE:
                if (!Gc(this) && M2.D) {
                  var b4 = this.__shady_firstChild;
                  (b4 != this.__shady_lastChild || b4 && b4.nodeType != Node.TEXT_NODE) && Fe(this);
                  this.__shady_native_textContent = a5;
                } else
                  Fe(this), (0 < a5.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a5));
                break;
              default:
                this.nodeValue = a5;
            }
          },
          insertBefore: function(a5, b4) {
            if (this.ownerDocument !== Be && a5.ownerDocument !== Be)
              return this.__shady_native_insertBefore(a5, b4), a5;
            if (a5 === this)
              throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
            if (b4) {
              var c5 = L3(b4);
              c5 = c5 && c5.parentNode;
              if (void 0 !== c5 && c5 !== this || void 0 === c5 && b4.__shady_native_parentNode !== this)
                throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
            }
            if (b4 === a5)
              return a5;
            Ie(this, a5);
            var d5 = [], e8 = (c5 = Je(this)) ? c5.host.localName : ye(this), f4 = a5.__shady_parentNode;
            if (f4) {
              var g4 = ye(a5);
              var h5 = !!c5 || !Je(a5) || Ce && void 0 !== this.__noInsertionPoint;
              f4.__shady_removeChild(a5, h5);
            }
            f4 = true;
            var k3 = (!Ce || void 0 === a5.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !xe(a5, e8), l7 = c5 && !a5.__noInsertionPoint && (!Ce || a5.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
            if (l7 || k3)
              k3 && (g4 = g4 || ye(a5)), Ae(a5, function(m4) {
                l7 && "slot" === m4.localName && d5.push(m4);
                if (k3) {
                  var q = g4;
                  ue() && (q && we(m4, q), (q = ue()) && q.scopeNode(m4, e8));
                }
              });
            d5.length && (Ke(c5), c5.i.push.apply(c5.i, w4(d5)), Le(c5));
            Gc(this) && (Me(a5, this, b4), h5 = L3(this), h5.root ? (f4 = false, Hc(this) && Le(h5.root)) : c5 && "slot" === this.localName && (f4 = false, Le(c5)));
            f4 ? (c5 = O3(this) ? this.host : this, b4 ? (b4 = He(b4), c5.__shady_native_insertBefore(a5, b4)) : c5.__shady_native_appendChild(a5)) : a5.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a5);
            return a5;
          },
          appendChild: function(a5) {
            if (this != a5 || !O3(a5))
              return this.__shady_insertBefore(a5);
          },
          removeChild: function(a5, b4) {
            b4 = void 0 === b4 ? false : b4;
            if (this.ownerDocument !== Be)
              return this.__shady_native_removeChild(a5);
            if (a5.__shady_parentNode !== this)
              throw Error("The node to be removed is not a child of this node: " + a5);
            Ie(this, null, a5);
            var c5 = Je(a5), d5 = c5 && Ne(c5, a5), e8 = L3(this);
            if (Gc(this) && (Oe(a5, this), Hc(this))) {
              Le(e8.root);
              var f4 = true;
            }
            if (ue() && !b4 && c5 && a5.nodeType !== Node.TEXT_NODE) {
              var g4 = ye(a5);
              Ae(a5, function(h5) {
                we(h5, g4);
              });
            }
            Ge(a5);
            c5 && ((b4 = "slot" === this.localName) && (f4 = true), (d5 || b4) && Le(c5));
            f4 || (f4 = O3(this) ? this.host : this, (!e8.root && "slot" !== a5.localName || f4 === a5.__shady_native_parentNode) && f4.__shady_native_removeChild(a5));
            return a5;
          },
          replaceChild: function(a5, b4) {
            this.__shady_insertBefore(a5, b4);
            this.__shady_removeChild(b4);
            return a5;
          },
          cloneNode: function(a5) {
            if ("template" == this.localName)
              return this.__shady_native_cloneNode(a5);
            var b4 = this.__shady_native_cloneNode(false);
            if (a5 && b4.nodeType !== Node.ATTRIBUTE_NODE) {
              a5 = this.__shady_firstChild;
              for (var c5; a5; a5 = a5.__shady_nextSibling)
                c5 = a5.__shady_cloneNode(true), b4.__shady_appendChild(c5);
            }
            return b4;
          },
          getRootNode: function(a5) {
            if (this && this.nodeType) {
              var b4 = D3(this), c5 = b4.ta;
              void 0 === c5 && (O3(this) ? (c5 = this, b4.ta = c5) : (c5 = (c5 = this.__shady_parentNode) ? c5.__shady_getRootNode(a5) : this, document.documentElement.__shady_native_contains(this) && (b4.ta = c5)));
              return c5;
            }
          },
          contains: function(a5) {
            return Rc(this, a5);
          }
        });
        var Re = Q({ get assignedSlot() {
          var a5 = this.__shady_parentNode;
          (a5 = a5 && a5.__shady_shadowRoot) && Qe(a5);
          return (a5 = L3(this)) && a5.assignedSlot || null;
        } });
        var Se = /* @__PURE__ */ new Map();
        [["(", { end: ")", sa: true }], ["[", { end: "]", sa: true }], ['"', { end: '"', sa: false }], ["'", { end: "'", sa: false }]].forEach(function(a5) {
          var b4 = ka(a5);
          a5 = b4.next().value;
          b4 = b4.next().value;
          Se.set(a5, b4);
        });
        function Te(a5, b4, c5, d5) {
          for (d5 = void 0 === d5 ? true : d5; b4 < a5.length; b4++)
            if ("\\" === a5[b4] && b4 < a5.length - 1 && "\n" !== a5[b4 + 1])
              b4++;
            else {
              if (-1 !== c5.indexOf(a5[b4]))
                return b4;
              if (d5 && Se.has(a5[b4])) {
                var e8 = Se.get(a5[b4]);
                b4 = Te(a5, b4 + 1, [e8.end], e8.sa);
              }
            }
          return a5.length;
        }
        function Ue(a5) {
          function b4() {
            if (0 < d5.length) {
              for (; " " === d5[d5.length - 1]; )
                d5.pop();
              c5.push({ La: d5.filter(function(k3, l7) {
                return 0 === l7 % 2;
              }), Za: d5.filter(function(k3, l7) {
                return 1 === l7 % 2;
              }) });
              d5.length = 0;
            }
          }
          for (var c5 = [], d5 = [], e8 = 0; e8 < a5.length; ) {
            var f4 = d5[d5.length - 1], g4 = Te(a5, e8, [",", " ", ">", "+", "~"]), h5 = g4 === e8 ? a5[e8] : a5.substring(e8, g4);
            if ("," === h5)
              b4();
            else if (-1 === [void 0, " ", ">", "+", "~"].indexOf(f4) || " " !== h5)
              " " === f4 && -1 !== [">", "+", "~"].indexOf(h5) ? d5[d5.length - 1] = h5 : d5.push(h5);
            e8 = g4 + (g4 === e8 ? 1 : 0);
          }
          b4();
          return c5;
        }
        ;
        function Ve(a5, b4, c5) {
          var d5 = [];
          We(a5, b4, c5, d5);
          return d5;
        }
        function We(a5, b4, c5, d5) {
          for (a5 = a5.__shady_firstChild; a5; a5 = a5.__shady_nextSibling) {
            var e8;
            if (e8 = a5.nodeType === Node.ELEMENT_NODE) {
              e8 = a5;
              var f4 = b4, g4 = c5, h5 = d5, k3 = f4(e8);
              k3 && h5.push(e8);
              g4 && g4(k3) ? e8 = k3 : (We(e8, f4, g4, h5), e8 = void 0);
            }
            if (e8)
              break;
          }
        }
        var Xe = { get firstElementChild() {
          var a5 = L3(this);
          if (a5 && void 0 !== a5.firstChild) {
            for (a5 = this.__shady_firstChild; a5 && a5.nodeType !== Node.ELEMENT_NODE; )
              a5 = a5.__shady_nextSibling;
            return a5;
          }
          return this.__shady_native_firstElementChild;
        }, get lastElementChild() {
          var a5 = L3(this);
          if (a5 && void 0 !== a5.lastChild) {
            for (a5 = this.__shady_lastChild; a5 && a5.nodeType !== Node.ELEMENT_NODE; )
              a5 = a5.__shady_previousSibling;
            return a5;
          }
          return this.__shady_native_lastElementChild;
        }, get children() {
          return Gc(this) ? Sc(Array.prototype.filter.call(
            Uc(this),
            function(a5) {
              return a5.nodeType === Node.ELEMENT_NODE;
            }
          )) : this.__shady_native_children;
        }, get childElementCount() {
          var a5 = this.__shady_children;
          return a5 ? a5.length : 0;
        } }, Ye = Q((Xe.append = function(a5) {
          for (var b4 = [], c5 = 0; c5 < arguments.length; ++c5)
            b4[c5] = arguments[c5];
          this.__shady_insertBefore(Zc.apply(null, w4(b4)), null);
        }, Xe.prepend = function(a5) {
          for (var b4 = [], c5 = 0; c5 < arguments.length; ++c5)
            b4[c5] = arguments[c5];
          this.__shady_insertBefore(Zc.apply(null, w4(b4)), this.__shady_firstChild);
        }, Xe.replaceChildren = function(a5) {
          for (var b4 = [], c5 = 0; c5 < arguments.length; ++c5)
            b4[c5] = arguments[c5];
          for (; null !== (c5 = this.__shady_firstChild); )
            this.__shady_removeChild(c5);
          this.__shady_insertBefore(Zc.apply(null, w4(b4)), null);
        }, Xe));
        function Ze(a5, b4) {
          function c5(e8, f4) {
            return (e8 === a5 || -1 === f4.indexOf(":scope")) && Lc.call(e8, f4);
          }
          var d5 = Ue(b4);
          if (1 > d5.length)
            return [];
          for (b4 = $c(Ve(a5, function() {
            return true;
          }).map(function(e8) {
            return $c(d5.map(function(f4) {
              var g4 = f4.La, h5 = g4.length - 1;
              return c5(e8, g4[h5]) ? { target: e8, da: f4, fa: e8, index: h5 } : [];
            }));
          })); b4.some(function(e8) {
            return 0 < e8.index;
          }); )
            b4 = $c(b4.map(function(e8) {
              if (0 >= e8.index)
                return e8;
              var f4 = e8.target, g4 = e8.fa, h5 = e8.da;
              e8 = e8.index - 1;
              var k3 = h5.Za[e8], l7 = h5.La[e8];
              if (" " === k3) {
                k3 = [];
                for (g4 = g4.__shady_parentElement; g4; g4 = g4.__shady_parentElement)
                  c5(
                    g4,
                    l7
                  ) && k3.push({ target: f4, da: h5, fa: g4, index: e8 });
                return k3;
              }
              if (">" === k3)
                return g4 = g4.__shady_parentElement, c5(g4, l7) ? { target: f4, da: h5, fa: g4, index: e8 } : [];
              if ("+" === k3)
                return (g4 = g4.__shady_previousElementSibling) && c5(g4, l7) ? { target: f4, da: h5, fa: g4, index: e8 } : [];
              if ("~" === k3) {
                k3 = [];
                for (g4 = g4.__shady_previousElementSibling; g4; g4 = g4.__shady_previousElementSibling)
                  c5(g4, l7) && k3.push({ target: f4, da: h5, fa: g4, index: e8 });
                return k3;
              }
              throw Error("Unrecognized combinator: '" + k3 + "'.");
            }));
          return ad(b4.map(function(e8) {
            return e8.target;
          }));
        }
        var $e = M2.querySelectorImplementation, af = Q({ querySelector: function(a5) {
          if ("native" === $e) {
            var b4 = Array.prototype.slice.call((this instanceof ShadowRoot ? this.host : this).__shady_native_querySelectorAll(a5)), c5 = this.__shady_getRootNode();
            b4 = ka(b4);
            for (var d5 = b4.next(); !d5.done; d5 = b4.next())
              if (d5 = d5.value, d5.__shady_getRootNode() == c5)
                return d5;
            return null;
          }
          if ("selectorEngine" === $e)
            return Ze(this, a5)[0] || null;
          if (void 0 === $e)
            return Ve(this, function(e8) {
              return Lc.call(e8, a5);
            }, function(e8) {
              return !!e8;
            })[0] || null;
          throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '" + ($e + "'"));
        }, querySelectorAll: function(a5, b4) {
          if (b4 || "native" === $e) {
            b4 = Array.prototype.slice.call((this instanceof ShadowRoot ? this.host : this).__shady_native_querySelectorAll(a5));
            var c5 = this.__shady_getRootNode();
            return Sc(b4.filter(function(d5) {
              return d5.__shady_getRootNode() == c5;
            }));
          }
          if ("selectorEngine" === $e)
            return Sc(Ze(this, a5));
          if (void 0 === $e)
            return Sc(Ve(this, function(d5) {
              return Lc.call(d5, a5);
            }));
          throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '" + ($e + "'"));
        } }), bf = M2.ha && !M2.J ? Xc({}, Ye) : Ye;
        Xc(Ye, af);
        var cf = Q({ after: function(a5) {
          for (var b4 = [], c5 = 0; c5 < arguments.length; ++c5)
            b4[c5] = arguments[c5];
          c5 = this.__shady_parentNode;
          if (null !== c5) {
            var d5 = this.__shady_nextSibling;
            c5.__shady_insertBefore(Zc.apply(null, w4(b4)), d5);
          }
        }, before: function(a5) {
          for (var b4 = [], c5 = 0; c5 < arguments.length; ++c5)
            b4[c5] = arguments[c5];
          c5 = this.__shady_parentNode;
          null !== c5 && c5.__shady_insertBefore(Zc.apply(null, w4(b4)), this);
        }, remove: function() {
          var a5 = this.__shady_parentNode;
          null !== a5 && a5.__shady_removeChild(this);
        }, replaceWith: function(a5) {
          for (var b4 = [], c5 = 0; c5 < arguments.length; ++c5)
            b4[c5] = arguments[c5];
          c5 = this.__shady_parentNode;
          if (null !== c5) {
            var d5 = this.__shady_nextSibling;
            c5.__shady_removeChild(this);
            c5.__shady_insertBefore(Zc.apply(null, w4(b4)), d5);
          }
        } });
        var df = window.document;
        function ef(a5, b4) {
          if ("slot" === b4)
            a5 = a5.__shady_parentNode, Hc(a5) && Le(L3(a5).root);
          else if ("slot" === a5.localName && "name" === b4 && (b4 = Je(a5))) {
            if (b4.g) {
              ff(b4);
              var c5 = a5.Ua, d5 = gf(a5);
              if (d5 !== c5) {
                c5 = b4.h[c5];
                var e8 = c5.indexOf(a5);
                0 <= e8 && c5.splice(e8, 1);
                c5 = b4.h[d5] || (b4.h[d5] = []);
                c5.push(a5);
                1 < c5.length && (b4.h[d5] = hf(c5));
              }
            }
            Le(b4);
          }
        }
        var jf = Q({
          get previousElementSibling() {
            var a5 = L3(this);
            if (a5 && void 0 !== a5.previousSibling) {
              for (a5 = this.__shady_previousSibling; a5 && a5.nodeType !== Node.ELEMENT_NODE; )
                a5 = a5.__shady_previousSibling;
              return a5;
            }
            return this.__shady_native_previousElementSibling;
          },
          get nextElementSibling() {
            var a5 = L3(this);
            if (a5 && void 0 !== a5.nextSibling) {
              for (a5 = this.__shady_nextSibling; a5 && a5.nodeType !== Node.ELEMENT_NODE; )
                a5 = a5.__shady_nextSibling;
              return a5;
            }
            return this.__shady_native_nextElementSibling;
          },
          get slot() {
            return this.getAttribute("slot");
          },
          set slot(a5) {
            this.__shady_setAttribute("slot", a5);
          },
          get className() {
            return this.getAttribute("class") || "";
          },
          set className(a5) {
            this.__shady_setAttribute("class", a5);
          },
          setAttribute: function(a5, b4) {
            this.ownerDocument !== df ? this.__shady_native_setAttribute(a5, b4) : ve(this, a5, b4) || (this.__shady_native_setAttribute(a5, b4), ef(this, a5));
          },
          removeAttribute: function(a5) {
            this.ownerDocument !== df ? this.__shady_native_removeAttribute(a5) : ve(this, a5, "") ? "" === this.getAttribute(a5) && this.__shady_native_removeAttribute(a5) : (this.__shady_native_removeAttribute(a5), ef(this, a5));
          }
        });
        M2.ha || me.forEach(function(a5) {
          jf[a5] = oe(a5);
        });
        var of = Q({ attachShadow: function(a5) {
          if (!this)
            throw Error("Must provide a host.");
          if (!a5)
            throw Error("Not enough arguments.");
          if (a5.shadyUpgradeFragment && !M2.Ra) {
            var b4 = a5.shadyUpgradeFragment;
            b4.__proto__ = ShadowRoot.prototype;
            kf(b4, this, a5);
            lf(b4, b4);
            a5 = b4.__noInsertionPoint ? null : b4.querySelectorAll("slot");
            b4.__noInsertionPoint = void 0;
            if (a5 && a5.length) {
              var c5 = b4;
              Ke(c5);
              c5.i.push.apply(c5.i, w4(a5));
              Le(b4);
            }
            b4.host.__shady_native_appendChild(b4);
          } else
            b4 = new mf(nf, this, a5);
          return this.__CE_shadowRoot = b4;
        }, get shadowRoot() {
          var a5 = L3(this);
          return a5 && a5.lb || null;
        } });
        Xc(jf, of);
        var pf = document.implementation.createHTMLDocument("inert"), qf = Q({ get innerHTML() {
          return Gc(this) ? qd("template" === this.localName ? this.content : this, Uc) : this.__shady_native_innerHTML;
        }, set innerHTML(a5) {
          if ("template" === this.localName)
            this.__shady_native_innerHTML = a5;
          else {
            Fe(this);
            var b4 = this.localName || "div";
            b4 = this.namespaceURI && this.namespaceURI !== pf.namespaceURI ? pf.createElementNS(this.namespaceURI, b4) : pf.createElement(b4);
            for (M2.D ? b4.__shady_native_innerHTML = a5 : b4.innerHTML = a5; a5 = b4.__shady_firstChild; )
              this.__shady_insertBefore(a5);
          }
        } });
        var rf = Q({ blur: function() {
          var a5 = L3(this);
          (a5 = (a5 = a5 && a5.root) && a5.activeElement) ? a5.__shady_blur() : this.__shady_native_blur();
        } });
        M2.ha || ne.forEach(function(a5) {
          rf[a5] = oe(a5);
        });
        var sf = Q({ assignedNodes: function(a5) {
          if ("slot" === this.localName) {
            var b4 = this.__shady_getRootNode();
            b4 && O3(b4) && Qe(b4);
            return (b4 = L3(this)) ? (a5 && a5.flatten ? b4.aa : b4.assignedNodes) || [] : [];
          }
        }, addEventListener: function(a5, b4, c5) {
          if ("slot" !== this.localName || "slotchange" === a5)
            ee.call(this, a5, b4, c5);
          else {
            "object" !== typeof c5 && (c5 = { capture: !!c5 });
            var d5 = this.__shady_parentNode;
            if (!d5)
              throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
            c5.U = this;
            d5.__shady_addEventListener(a5, b4, c5);
          }
        }, removeEventListener: function(a5, b4, c5) {
          if ("slot" !== this.localName || "slotchange" === a5)
            fe.call(this, a5, b4, c5);
          else {
            "object" !== typeof c5 && (c5 = { capture: !!c5 });
            var d5 = this.__shady_parentNode;
            if (!d5)
              throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
            c5.U = this;
            d5.__shady_removeEventListener(a5, b4, c5);
          }
        } });
        var tf = Q({ getElementById: function(a5) {
          return "" === a5 ? null : Ve(this, function(b4) {
            return b4.id == a5;
          }, function(b4) {
            return !!b4;
          })[0] || null;
        } });
        function uf(a5, b4) {
          for (var c5; b4 && !a5.has(c5 = b4.__shady_getRootNode()); )
            b4 = c5.host;
          return b4;
        }
        function vf(a5) {
          var b4 = /* @__PURE__ */ new Set();
          for (b4.add(a5); O3(a5) && a5.host; )
            a5 = a5.host.__shady_getRootNode(), b4.add(a5);
          return b4;
        }
        var wf = "__shady_native_" + Fc(), xf = Q({ get activeElement() {
          var a5 = M2.D ? document.__shady_native_activeElement : document.activeElement;
          if (!a5 || !a5.nodeType)
            return null;
          var b4 = !!O3(this);
          if (!(this === document || b4 && this.host !== a5 && this.host.__shady_native_contains(a5)))
            return null;
          for (b4 = Je(a5); b4 && b4 !== this; )
            a5 = b4.host, b4 = Je(a5);
          return this === document ? b4 ? null : a5 : b4 === this ? a5 : null;
        }, elementsFromPoint: function(a5, b4) {
          a5 = document[wf](a5, b4);
          if (this === document && M2.useNativeDocumentEFP)
            return a5;
          a5 = [].slice.call(a5);
          b4 = vf(this);
          for (var c5 = /* @__PURE__ */ new Set(), d5 = 0; d5 < a5.length; d5++)
            c5.add(uf(b4, a5[d5]));
          var e8 = [];
          c5.forEach(function(f4) {
            return e8.push(f4);
          });
          return e8;
        }, elementFromPoint: function(a5, b4) {
          return this === document && M2.useNativeDocumentEFP ? this.__shady_native_elementFromPoint(a5, b4) : this.__shady_elementsFromPoint(a5, b4)[0] || null;
        } });
        var yf = window.document, zf = Q({ importNode: function(a5, b4) {
          if (a5.ownerDocument !== yf || "template" === a5.localName)
            return this.__shady_native_importNode(a5, b4);
          var c5 = this.__shady_native_importNode(a5, false);
          if (b4)
            for (a5 = a5.__shady_firstChild; a5; a5 = a5.__shady_nextSibling)
              b4 = this.__shady_importNode(a5, true), c5.__shady_appendChild(b4);
          return c5;
        } });
        var Af = Q({ dispatchEvent: ce, addEventListener: ee.bind(window), removeEventListener: fe.bind(window) });
        var Bf = {};
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Bf.parentElement = Pe.parentElement);
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Bf.contains = Pe.contains);
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Bf.children = Ye.children);
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Bf.innerHTML = qf.innerHTML);
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Bf.className = jf.className);
        var Cf = { EventTarget: [se], Node: [Pe, window.EventTarget ? null : se], Text: [Re], Comment: [Re], CDATASection: [Re], ProcessingInstruction: [Re], Element: [jf, Ye, cf, Re, !M2.D || "innerHTML" in Element.prototype ? qf : null, window.HTMLSlotElement ? null : sf], HTMLElement: [rf, Bf], HTMLSlotElement: [sf], DocumentFragment: [bf, tf], Document: [zf, bf, tf, xf], Window: [Af], CharacterData: [cf], XMLHttpRequest: [window.EventTarget ? null : se] }, Df = M2.D ? null : ["innerHTML", "textContent"];
        function Ef(a5, b4, c5, d5) {
          b4.forEach(function(e8) {
            return a5 && e8 && P4(a5, e8, c5, d5);
          });
        }
        function Ff(a5) {
          var b4 = a5 ? null : Df, c5;
          for (c5 in Cf)
            Ef(window[c5] && window[c5].prototype, Cf[c5], a5, b4);
        }
        ["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function(a5) {
          var b4 = window[a5], c5 = Object.create(b4.prototype);
          c5.__shady_protoIsPatched = true;
          Ef(c5, Cf.EventTarget);
          Ef(c5, Cf.Node);
          Cf[a5] && Ef(c5, Cf[a5]);
          b4.prototype.__shady_patchedProto = c5;
        });
        function Gf(a5) {
          a5.__shady_protoIsPatched = true;
          Ef(a5, Cf.EventTarget);
          Ef(a5, Cf.Node);
          Ef(a5, Cf.Element);
          Ef(a5, Cf.HTMLElement);
          Ef(a5, Cf.HTMLSlotElement);
          return a5;
        }
        ;
        var Hf = M2.Da, If = M2.D;
        function Jf(a5, b4) {
          if (Hf && !a5.__shady_protoIsPatched && !O3(a5)) {
            var c5 = Object.getPrototypeOf(a5), d5 = c5.hasOwnProperty("__shady_patchedProto") && c5.__shady_patchedProto;
            d5 || (d5 = Object.create(c5), Gf(d5), c5.__shady_patchedProto = d5);
            Object.setPrototypeOf(a5, d5);
          }
          If || (1 === b4 ? Id(a5) : 2 === b4 && Jd(a5));
        }
        function Kf(a5, b4, c5, d5) {
          Jf(a5, 1);
          d5 = d5 || null;
          var e8 = D3(a5), f4 = d5 ? D3(d5) : null;
          e8.previousSibling = d5 ? f4.previousSibling : b4.__shady_lastChild;
          if (f4 = L3(e8.previousSibling))
            f4.nextSibling = a5;
          if (f4 = L3(e8.nextSibling = d5))
            f4.previousSibling = a5;
          e8.parentNode = b4;
          d5 ? d5 === c5.firstChild && (c5.firstChild = a5) : (c5.lastChild = a5, c5.firstChild || (c5.firstChild = a5));
          c5.childNodes = null;
        }
        function Me(a5, b4, c5) {
          Jf(b4, 2);
          var d5 = D3(b4);
          void 0 !== d5.firstChild && (d5.childNodes = null);
          if (a5.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
            for (a5 = a5.__shady_native_firstChild; a5; a5 = a5.__shady_native_nextSibling)
              Kf(a5, b4, d5, c5);
          else
            Kf(a5, b4, d5, c5);
        }
        function Oe(a5, b4) {
          var c5 = D3(a5);
          b4 = D3(b4);
          a5 === b4.firstChild && (b4.firstChild = c5.nextSibling);
          a5 === b4.lastChild && (b4.lastChild = c5.previousSibling);
          a5 = c5.previousSibling;
          var d5 = c5.nextSibling;
          a5 && (D3(a5).nextSibling = d5);
          d5 && (D3(d5).previousSibling = a5);
          c5.parentNode = c5.previousSibling = c5.nextSibling = void 0;
          void 0 !== b4.childNodes && (b4.childNodes = null);
        }
        function lf(a5, b4) {
          var c5 = D3(a5);
          if (b4 || void 0 === c5.firstChild) {
            c5.childNodes = null;
            var d5 = c5.firstChild = a5.__shady_native_firstChild;
            c5.lastChild = a5.__shady_native_lastChild;
            Jf(a5, 2);
            c5 = d5;
            for (d5 = void 0; c5; c5 = c5.__shady_native_nextSibling) {
              var e8 = D3(c5);
              e8.parentNode = b4 || a5;
              e8.nextSibling = c5.__shady_native_nextSibling;
              e8.previousSibling = d5 || null;
              d5 = c5;
              Jf(c5, 1);
            }
          }
        }
        ;
        var Lf = Q({ addEventListener: function(a5, b4, c5) {
          "object" !== typeof c5 && (c5 = { capture: !!c5 });
          c5.U = c5.U || this;
          this.host.__shady_addEventListener(a5, b4, c5);
        }, removeEventListener: function(a5, b4, c5) {
          "object" !== typeof c5 && (c5 = { capture: !!c5 });
          c5.U = c5.U || this;
          this.host.__shady_removeEventListener(a5, b4, c5);
        } });
        function Mf(a5, b4) {
          P4(a5, Lf, b4);
          P4(a5, xf, b4);
          P4(a5, qf, b4);
          P4(a5, Ye, b4);
          M2.J && !b4 ? (P4(a5, Pe, b4), P4(a5, tf, b4)) : M2.D || (P4(a5, Fd), P4(a5, Dd), P4(a5, Ed));
        }
        ;
        var nf = {}, Nf = M2.deferConnectionCallbacks && "loading" === document.readyState, Of;
        function Pf(a5) {
          var b4 = [];
          do
            b4.unshift(a5);
          while (a5 = a5.__shady_parentNode);
          return b4;
        }
        function mf(a5, b4, c5) {
          if (a5 !== nf)
            throw new TypeError("Illegal constructor");
          this.g = null;
          kf(this, b4, c5);
        }
        function kf(a5, b4, c5) {
          a5.host = b4;
          a5.mode = c5 && c5.mode;
          lf(a5.host);
          b4 = D3(a5.host);
          b4.root = a5;
          b4.lb = "closed" !== a5.mode ? a5 : null;
          b4 = D3(a5);
          b4.firstChild = b4.lastChild = b4.parentNode = b4.nextSibling = b4.previousSibling = null;
          if (M2.preferPerformance)
            for (; b4 = a5.host.__shady_native_firstChild; )
              a5.host.__shady_native_removeChild(b4);
          else
            Le(a5);
        }
        function Le(a5) {
          a5.Y || (a5.Y = true, dd(function() {
            return Qe(a5);
          }));
        }
        function Qe(a5) {
          var b4;
          if (b4 = a5.Y) {
            for (var c5; a5; )
              a: {
                a5.Y && (c5 = a5), b4 = a5;
                a5 = b4.host.__shady_getRootNode();
                if (O3(a5) && (b4 = L3(b4.host)) && 0 < b4.ka)
                  break a;
                a5 = void 0;
              }
            b4 = c5;
          }
          (c5 = b4) && c5._renderSelf();
        }
        mf.prototype._renderSelf = function() {
          var a5 = Nf;
          Nf = true;
          this.Y = false;
          if (this.g) {
            ff(this);
            for (var b4 = 0, c5; b4 < this.g.length; b4++) {
              c5 = this.g[b4];
              var d5 = L3(c5), e8 = d5.assignedNodes;
              d5.assignedNodes = [];
              d5.aa = [];
              if (d5.Ja = e8)
                for (d5 = 0; d5 < e8.length; d5++) {
                  var f4 = L3(e8[d5]);
                  f4.xa = f4.assignedSlot;
                  f4.assignedSlot === c5 && (f4.assignedSlot = null);
                }
            }
            for (b4 = this.host.__shady_firstChild; b4; b4 = b4.__shady_nextSibling)
              Qf(this, b4);
            for (b4 = 0; b4 < this.g.length; b4++) {
              c5 = this.g[b4];
              e8 = L3(c5);
              if (!e8.assignedNodes.length)
                for (d5 = c5.__shady_firstChild; d5; d5 = d5.__shady_nextSibling)
                  Qf(
                    this,
                    d5,
                    c5
                  );
              (d5 = (d5 = L3(c5.__shady_parentNode)) && d5.root) && (Ic(d5) || d5.Y) && d5._renderSelf();
              Rf(this, e8.aa, e8.assignedNodes);
              if (d5 = e8.Ja) {
                for (f4 = 0; f4 < d5.length; f4++)
                  L3(d5[f4]).xa = null;
                e8.Ja = null;
                d5.length > e8.assignedNodes.length && (e8.Aa = true);
              }
              e8.Aa && (e8.Aa = false, Sf(this, c5));
            }
            c5 = this.g;
            b4 = [];
            for (e8 = 0; e8 < c5.length; e8++)
              d5 = c5[e8].__shady_parentNode, (f4 = L3(d5)) && f4.root || !(0 > b4.indexOf(d5)) || b4.push(d5);
            for (c5 = 0; c5 < b4.length; c5++) {
              f4 = b4[c5];
              e8 = f4 === this ? this.host : f4;
              d5 = [];
              for (f4 = f4.__shady_firstChild; f4; f4 = f4.__shady_nextSibling)
                if ("slot" == f4.localName)
                  for (var g4 = L3(f4).aa, h5 = 0; h5 < g4.length; h5++)
                    d5.push(g4[h5]);
                else
                  d5.push(f4);
              f4 = Tc(e8);
              g4 = qe(d5, d5.length, f4, f4.length);
              for (var k3 = h5 = 0, l7 = void 0; h5 < g4.length && (l7 = g4[h5]); h5++) {
                for (var m4 = 0, q = void 0; m4 < l7.ia.length && (q = l7.ia[m4]); m4++)
                  q.__shady_native_parentNode === e8 && e8.__shady_native_removeChild(q), f4.splice(l7.index + k3, 1);
                k3 -= l7.pa;
              }
              k3 = 0;
              for (l7 = void 0; k3 < g4.length && (l7 = g4[k3]); k3++)
                for (h5 = f4[l7.index], m4 = l7.index; m4 < l7.index + l7.pa; m4++)
                  q = d5[m4], e8.__shady_native_insertBefore(q, h5), f4.splice(m4, 0, q);
            }
          }
          if (!M2.preferPerformance && !this.Ia)
            for (b4 = this.host.__shady_firstChild; b4; b4 = b4.__shady_nextSibling)
              c5 = L3(b4), b4.__shady_native_parentNode !== this.host || "slot" !== b4.localName && c5.assignedSlot || this.host.__shady_native_removeChild(b4);
          this.Ia = true;
          Nf = a5;
          Of && Of();
        };
        function Qf(a5, b4, c5) {
          var d5 = D3(b4), e8 = d5.xa;
          d5.xa = null;
          c5 || (c5 = (a5 = a5.h[b4.__shady_slot || "__catchall"]) && a5[0]);
          c5 ? (D3(c5).assignedNodes.push(b4), d5.assignedSlot = c5) : d5.assignedSlot = void 0;
          e8 !== d5.assignedSlot && d5.assignedSlot && (D3(d5.assignedSlot).Aa = true);
        }
        function Rf(a5, b4, c5) {
          for (var d5 = 0, e8 = void 0; d5 < c5.length && (e8 = c5[d5]); d5++)
            if ("slot" == e8.localName) {
              var f4 = L3(e8).assignedNodes;
              f4 && f4.length && Rf(a5, b4, f4);
            } else
              b4.push(c5[d5]);
        }
        function Sf(a5, b4) {
          b4.__shady_native_dispatchEvent(new Event("slotchange"));
          b4 = L3(b4);
          b4.assignedSlot && Sf(a5, b4.assignedSlot);
        }
        function Ke(a5) {
          a5.i = a5.i || [];
          a5.g = a5.g || [];
          a5.h = a5.h || {};
        }
        function ff(a5) {
          if (a5.i && a5.i.length) {
            for (var b4 = a5.i, c5, d5 = 0; d5 < b4.length; d5++) {
              var e8 = b4[d5];
              lf(e8);
              var f4 = e8.__shady_parentNode;
              lf(f4);
              f4 = L3(f4);
              f4.ka = (f4.ka || 0) + 1;
              f4 = gf(e8);
              a5.h[f4] ? (c5 = c5 || {}, c5[f4] = true, a5.h[f4].push(e8)) : a5.h[f4] = [e8];
              a5.g.push(e8);
            }
            if (c5)
              for (var g4 in c5)
                a5.h[g4] = hf(a5.h[g4]);
            a5.i = [];
          }
        }
        function gf(a5) {
          var b4 = a5.name || a5.getAttribute("name") || "__catchall";
          return a5.Ua = b4;
        }
        function hf(a5) {
          return a5.sort(function(b4, c5) {
            b4 = Pf(b4);
            for (var d5 = Pf(c5), e8 = 0; e8 < b4.length; e8++) {
              c5 = b4[e8];
              var f4 = d5[e8];
              if (c5 !== f4)
                return b4 = Uc(c5.__shady_parentNode), b4.indexOf(c5) - b4.indexOf(f4);
            }
          });
        }
        function Ne(a5, b4) {
          if (a5.g) {
            ff(a5);
            var c5 = a5.h, d5;
            for (d5 in c5)
              for (var e8 = c5[d5], f4 = 0; f4 < e8.length; f4++) {
                var g4 = e8[f4];
                if (Rc(b4, g4)) {
                  e8.splice(f4, 1);
                  var h5 = a5.g.indexOf(g4);
                  0 <= h5 && (a5.g.splice(h5, 1), (h5 = L3(g4.__shady_parentNode)) && h5.ka && h5.ka--);
                  f4--;
                  g4 = L3(g4);
                  if (h5 = g4.aa)
                    for (var k3 = 0; k3 < h5.length; k3++) {
                      var l7 = h5[k3], m4 = l7.__shady_native_parentNode;
                      m4 && m4.__shady_native_removeChild(l7);
                    }
                  g4.aa = [];
                  g4.assignedNodes = [];
                  h5 = true;
                }
              }
            return h5;
          }
        }
        function Ic(a5) {
          ff(a5);
          return !(!a5.g || !a5.g.length);
        }
        (function(a5) {
          a5.__proto__ = DocumentFragment.prototype;
          Mf(a5, "__shady_");
          Mf(a5);
          Object.defineProperties(a5, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: true }, nodeName: { value: "#document-fragment", configurable: true }, nodeValue: { value: null, configurable: true } });
          ["localName", "namespaceURI", "prefix"].forEach(function(b4) {
            Object.defineProperty(a5, b4, { value: void 0, configurable: true });
          });
          ["ownerDocument", "baseURI", "isConnected"].forEach(function(b4) {
            Object.defineProperty(a5, b4, {
              get: function() {
                return this.host[b4];
              },
              configurable: true
            });
          });
        })(mf.prototype);
        if (window.customElements && window.customElements.define && M2.Ba && !M2.preferPerformance) {
          var Tf = /* @__PURE__ */ new Map();
          Of = function() {
            var a5 = [];
            Tf.forEach(function(d5, e8) {
              a5.push([e8, d5]);
            });
            Tf.clear();
            for (var b4 = 0; b4 < a5.length; b4++) {
              var c5 = a5[b4][0];
              a5[b4][1] ? c5.__shadydom_connectedCallback() : c5.__shadydom_disconnectedCallback();
            }
          };
          Nf && document.addEventListener("readystatechange", function() {
            Nf = false;
            Of();
          }, { once: true });
          var Uf = function(a5, b4, c5) {
            var d5 = 0, e8 = "__isConnected" + d5++;
            if (b4 || c5)
              a5.prototype.connectedCallback = a5.prototype.__shadydom_connectedCallback = function() {
                Nf ? Tf.set(this, true) : this[e8] || (this[e8] = true, b4 && b4.call(this));
              }, a5.prototype.disconnectedCallback = a5.prototype.__shadydom_disconnectedCallback = function() {
                Nf ? this.isConnected || Tf.set(this, false) : this[e8] && (this[e8] = false, c5 && c5.call(this));
              };
            return a5;
          }, Vf = window.customElements.define, Wf = function(a5, b4) {
            var c5 = b4.prototype.connectedCallback, d5 = b4.prototype.disconnectedCallback;
            Vf.call(window.customElements, a5, Uf(b4, c5, d5));
            b4.prototype.connectedCallback = c5;
            b4.prototype.disconnectedCallback = d5;
          };
          window.customElements.define = Wf;
          Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: Wf, configurable: true });
        }
        function Je(a5) {
          a5 = a5.__shady_getRootNode();
          if (O3(a5))
            return a5;
        }
        ;
        function Xf(a5) {
          this.node = a5;
        }
        v4 = Xf.prototype;
        v4.addEventListener = function(a5, b4, c5) {
          return this.node.__shady_addEventListener(a5, b4, c5);
        };
        v4.removeEventListener = function(a5, b4, c5) {
          return this.node.__shady_removeEventListener(a5, b4, c5);
        };
        v4.appendChild = function(a5) {
          return this.node.__shady_appendChild(a5);
        };
        v4.insertBefore = function(a5, b4) {
          return this.node.__shady_insertBefore(a5, b4);
        };
        v4.removeChild = function(a5) {
          return this.node.__shady_removeChild(a5);
        };
        v4.replaceChild = function(a5, b4) {
          return this.node.__shady_replaceChild(a5, b4);
        };
        v4.cloneNode = function(a5) {
          return this.node.__shady_cloneNode(a5);
        };
        v4.getRootNode = function(a5) {
          return this.node.__shady_getRootNode(a5);
        };
        v4.contains = function(a5) {
          return this.node.__shady_contains(a5);
        };
        v4.dispatchEvent = function(a5) {
          return this.node.__shady_dispatchEvent(a5);
        };
        v4.setAttribute = function(a5, b4) {
          this.node.__shady_setAttribute(a5, b4);
        };
        v4.getAttribute = function(a5) {
          return this.node.__shady_native_getAttribute(a5);
        };
        v4.hasAttribute = function(a5) {
          return this.node.__shady_native_hasAttribute(a5);
        };
        v4.removeAttribute = function(a5) {
          this.node.__shady_removeAttribute(a5);
        };
        v4.attachShadow = function(a5) {
          return this.node.__shady_attachShadow(a5);
        };
        v4.focus = function() {
          this.node.__shady_native_focus();
        };
        v4.blur = function() {
          this.node.__shady_blur();
        };
        v4.importNode = function(a5, b4) {
          if (this.node.nodeType === Node.DOCUMENT_NODE)
            return this.node.__shady_importNode(a5, b4);
        };
        v4.getElementById = function(a5) {
          if (this.node.nodeType === Node.DOCUMENT_NODE)
            return this.node.__shady_getElementById(a5);
        };
        v4.elementsFromPoint = function(a5, b4) {
          return this.node.__shady_elementsFromPoint(a5, b4);
        };
        v4.elementFromPoint = function(a5, b4) {
          return this.node.__shady_elementFromPoint(a5, b4);
        };
        v4.querySelector = function(a5) {
          return this.node.__shady_querySelector(a5);
        };
        v4.querySelectorAll = function(a5, b4) {
          return this.node.__shady_querySelectorAll(a5, b4);
        };
        v4.assignedNodes = function(a5) {
          if ("slot" === this.node.localName)
            return this.node.__shady_assignedNodes(a5);
        };
        v4.append = function(a5) {
          for (var b4 = [], c5 = 0; c5 < arguments.length; ++c5)
            b4[c5] = arguments[c5];
          return this.node.__shady_append.apply(this.node, w4(b4));
        };
        v4.prepend = function(a5) {
          for (var b4 = [], c5 = 0; c5 < arguments.length; ++c5)
            b4[c5] = arguments[c5];
          return this.node.__shady_prepend.apply(this.node, w4(b4));
        };
        v4.after = function(a5) {
          for (var b4 = [], c5 = 0; c5 < arguments.length; ++c5)
            b4[c5] = arguments[c5];
          return this.node.__shady_after.apply(this.node, w4(b4));
        };
        v4.before = function(a5) {
          for (var b4 = [], c5 = 0; c5 < arguments.length; ++c5)
            b4[c5] = arguments[c5];
          return this.node.__shady_before.apply(this.node, w4(b4));
        };
        v4.remove = function() {
          return this.node.__shady_remove();
        };
        v4.replaceWith = function(a5) {
          for (var b4 = [], c5 = 0; c5 < arguments.length; ++c5)
            b4[c5] = arguments[c5];
          return this.node.__shady_replaceWith.apply(this.node, w4(b4));
        };
        ea.Object.defineProperties(Xf.prototype, {
          activeElement: { configurable: true, enumerable: true, get: function() {
            if (O3(this.node) || this.node.nodeType === Node.DOCUMENT_NODE)
              return this.node.__shady_activeElement;
          } },
          _activeElement: { configurable: true, enumerable: true, get: function() {
            return this.activeElement;
          } },
          host: { configurable: true, enumerable: true, get: function() {
            if (O3(this.node))
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
            set: function(a5) {
              this.node.__shady_innerHTML = a5;
            }
          },
          textContent: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_textContent;
          }, set: function(a5) {
            this.node.__shady_textContent = a5;
          } },
          slot: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_slot;
          }, set: function(a5) {
            this.node.__shady_slot = a5;
          } },
          className: { configurable: true, enumerable: true, get: function() {
            return this.node.__shady_className;
          }, set: function(a5) {
            this.node.__shady_className = a5;
          } }
        });
        function Yf(a5) {
          Object.defineProperty(Xf.prototype, a5, { get: function() {
            return this.node["__shady_" + a5];
          }, set: function(b4) {
            this.node["__shady_" + a5] = b4;
          }, configurable: true });
        }
        me.forEach(function(a5) {
          return Yf(a5);
        });
        ne.forEach(function(a5) {
          return Yf(a5);
        });
        var Zf = /* @__PURE__ */ new WeakMap();
        function $f(a5) {
          if (O3(a5) || a5 instanceof Xf)
            return a5;
          var b4 = Zf.get(a5);
          b4 || (b4 = new Xf(a5), Zf.set(a5, b4));
          return b4;
        }
        ;
        if (M2.Ba) {
          var ag = M2.D ? function(a5) {
            return a5;
          } : function(a5) {
            Jd(a5);
            Id(a5);
            return a5;
          }, ShadyDOM = {
            inUse: M2.Ba,
            patch: ag,
            isShadyRoot: O3,
            enqueue: dd,
            flush: ed,
            flushInitial: function(a5) {
              !a5.Ia && a5.Y && Qe(a5);
            },
            settings: M2,
            filterMutations: jd,
            observeChildren: hd,
            unobserveChildren: id,
            deferConnectionCallbacks: M2.deferConnectionCallbacks,
            preferPerformance: M2.preferPerformance,
            handlesDynamicScoping: true,
            wrap: M2.J ? $f : ag,
            wrapIfNeeded: true === M2.J ? $f : function(a5) {
              return a5;
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
          P4(Window.prototype, Af, "__shady_");
          M2.J ? M2.Da && P4(Element.prototype, of) : (Ff(), le());
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
        "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a5) {
          return Ig.add(a5);
        });
        function Jg(a5) {
          var b4 = Ig.has(a5);
          a5 = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a5);
          return !b4 && a5;
        }
        var Kg = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
        function T4(a5) {
          var b4 = a5.isConnected;
          if (void 0 !== b4)
            return b4;
          if (Kg(a5))
            return true;
          for (; a5 && !(a5.__CE_isImportDocument || a5 instanceof Document); )
            a5 = a5.parentNode || (window.ShadowRoot && a5 instanceof ShadowRoot ? a5.host : void 0);
          return !(!a5 || !(a5.__CE_isImportDocument || a5 instanceof Document));
        }
        function Lg(a5) {
          var b4 = a5.children;
          if (b4)
            return Array.prototype.slice.call(b4);
          b4 = [];
          for (a5 = a5.firstChild; a5; a5 = a5.nextSibling)
            a5.nodeType === Node.ELEMENT_NODE && b4.push(a5);
          return b4;
        }
        function Mg(a5, b4) {
          for (; b4 && b4 !== a5 && !b4.nextSibling; )
            b4 = b4.parentNode;
          return b4 && b4 !== a5 ? b4.nextSibling : null;
        }
        function Ng(a5, b4, c5) {
          for (var d5 = a5; d5; ) {
            if (d5.nodeType === Node.ELEMENT_NODE) {
              var e8 = d5;
              b4(e8);
              var f4 = e8.localName;
              if ("link" === f4 && "import" === e8.getAttribute("rel")) {
                d5 = e8.import;
                void 0 === c5 && (c5 = /* @__PURE__ */ new Set());
                if (d5 instanceof Node && !c5.has(d5))
                  for (c5.add(d5), d5 = d5.firstChild; d5; d5 = d5.nextSibling)
                    Ng(d5, b4, c5);
                d5 = Mg(a5, e8);
                continue;
              } else if ("template" === f4) {
                d5 = Mg(a5, e8);
                continue;
              }
              if (e8 = e8.__CE_shadowRoot)
                for (e8 = e8.firstChild; e8; e8 = e8.nextSibling)
                  Ng(e8, b4, c5);
            }
            d5 = d5.firstChild ? d5.firstChild : Mg(a5, d5);
          }
        }
        ;
        function Og() {
          var a5 = !(null === Pg || void 0 === Pg || !Pg.noDocumentConstructionObserver), b4 = !(null === Pg || void 0 === Pg || !Pg.shadyDomFastWalk);
          this.ca = [];
          this.g = [];
          this.W = false;
          this.shadyDomFastWalk = b4;
          this.sb = !a5;
        }
        function Qg(a5, b4, c5, d5) {
          var e8 = window.ShadyDOM;
          if (a5.shadyDomFastWalk && e8 && e8.inUse) {
            if (b4.nodeType === Node.ELEMENT_NODE && c5(b4), b4.querySelectorAll)
              for (a5 = e8.nativeMethods.querySelectorAll.call(b4, "*"), b4 = 0; b4 < a5.length; b4++)
                c5(a5[b4]);
          } else
            Ng(b4, c5, d5);
        }
        function Rg(a5, b4) {
          a5.W = true;
          a5.ca.push(b4);
        }
        function Sg(a5, b4) {
          a5.W = true;
          a5.g.push(b4);
        }
        function Tg(a5, b4) {
          a5.W && Qg(a5, b4, function(c5) {
            return Ug(a5, c5);
          });
        }
        function Ug(a5, b4) {
          if (a5.W && !b4.__CE_patched) {
            b4.__CE_patched = true;
            for (var c5 = 0; c5 < a5.ca.length; c5++)
              a5.ca[c5](b4);
            for (c5 = 0; c5 < a5.g.length; c5++)
              a5.g[c5](b4);
          }
        }
        function Vg(a5, b4) {
          var c5 = [];
          Qg(a5, b4, function(e8) {
            return c5.push(e8);
          });
          for (b4 = 0; b4 < c5.length; b4++) {
            var d5 = c5[b4];
            1 === d5.__CE_state ? a5.connectedCallback(d5) : Wg(a5, d5);
          }
        }
        function Xg(a5, b4) {
          var c5 = [];
          Qg(a5, b4, function(e8) {
            return c5.push(e8);
          });
          for (b4 = 0; b4 < c5.length; b4++) {
            var d5 = c5[b4];
            1 === d5.__CE_state && a5.disconnectedCallback(d5);
          }
        }
        function Yg(a5, b4, c5) {
          c5 = void 0 === c5 ? {} : c5;
          var d5 = c5.tb, e8 = c5.upgrade || function(g4) {
            return Wg(a5, g4);
          }, f4 = [];
          Qg(a5, b4, function(g4) {
            a5.W && Ug(a5, g4);
            if ("link" === g4.localName && "import" === g4.getAttribute("rel")) {
              var h5 = g4.import;
              h5 instanceof Node && (h5.__CE_isImportDocument = true, h5.__CE_registry = document.__CE_registry);
              h5 && "complete" === h5.readyState ? h5.__CE_documentLoadHandled = true : g4.addEventListener("load", function() {
                var k3 = g4.import;
                if (!k3.__CE_documentLoadHandled) {
                  k3.__CE_documentLoadHandled = true;
                  var l7 = /* @__PURE__ */ new Set();
                  d5 && (d5.forEach(function(m4) {
                    return l7.add(m4);
                  }), l7.delete(k3));
                  Yg(a5, k3, { tb: l7, upgrade: e8 });
                }
              });
            } else
              f4.push(g4);
          }, d5);
          for (b4 = 0; b4 < f4.length; b4++)
            e8(f4[b4]);
        }
        function Wg(a5, b4) {
          try {
            var c5 = b4.ownerDocument, d5 = c5.__CE_registry;
            var e8 = d5 && (c5.defaultView || c5.__CE_isImportDocument) ? Zg(d5, b4.localName) : void 0;
            if (e8 && void 0 === b4.__CE_state) {
              e8.constructionStack.push(b4);
              try {
                try {
                  if (new e8.constructorFunction() !== b4)
                    throw Error("The custom element constructor did not produce the element being upgraded.");
                } finally {
                  e8.constructionStack.pop();
                }
              } catch (k3) {
                throw b4.__CE_state = 2, k3;
              }
              b4.__CE_state = 1;
              b4.__CE_definition = e8;
              if (e8.attributeChangedCallback && b4.hasAttributes()) {
                var f4 = e8.observedAttributes;
                for (e8 = 0; e8 < f4.length; e8++) {
                  var g4 = f4[e8], h5 = b4.getAttribute(g4);
                  null !== h5 && a5.attributeChangedCallback(b4, g4, null, h5, null);
                }
              }
              T4(b4) && a5.connectedCallback(b4);
            }
          } catch (k3) {
            $g(k3);
          }
        }
        Og.prototype.connectedCallback = function(a5) {
          var b4 = a5.__CE_definition;
          if (b4.connectedCallback)
            try {
              b4.connectedCallback.call(a5);
            } catch (c5) {
              $g(c5);
            }
        };
        Og.prototype.disconnectedCallback = function(a5) {
          var b4 = a5.__CE_definition;
          if (b4.disconnectedCallback)
            try {
              b4.disconnectedCallback.call(a5);
            } catch (c5) {
              $g(c5);
            }
        };
        Og.prototype.attributeChangedCallback = function(a5, b4, c5, d5, e8) {
          var f4 = a5.__CE_definition;
          if (f4.attributeChangedCallback && -1 < f4.observedAttributes.indexOf(b4))
            try {
              f4.attributeChangedCallback.call(a5, b4, c5, d5, e8);
            } catch (g4) {
              $g(g4);
            }
        };
        function ah(a5, b4, c5, d5) {
          var e8 = b4.__CE_registry;
          if (e8 && (null === d5 || "http://www.w3.org/1999/xhtml" === d5) && (e8 = Zg(e8, c5)))
            try {
              var f4 = new e8.constructorFunction();
              if (void 0 === f4.__CE_state || void 0 === f4.__CE_definition)
                throw Error("Failed to construct '" + c5 + "': The returned value was not constructed with the HTMLElement constructor.");
              if ("http://www.w3.org/1999/xhtml" !== f4.namespaceURI)
                throw Error("Failed to construct '" + c5 + "': The constructed element's namespace must be the HTML namespace.");
              if (f4.hasAttributes())
                throw Error("Failed to construct '" + c5 + "': The constructed element must not have any attributes.");
              if (null !== f4.firstChild)
                throw Error("Failed to construct '" + c5 + "': The constructed element must not have any children.");
              if (null !== f4.parentNode)
                throw Error("Failed to construct '" + c5 + "': The constructed element must not have a parent node.");
              if (f4.ownerDocument !== b4)
                throw Error("Failed to construct '" + c5 + "': The constructed element's owner document is incorrect.");
              if (f4.localName !== c5)
                throw Error("Failed to construct '" + c5 + "': The constructed element's local name is incorrect.");
              return f4;
            } catch (g4) {
              return $g(g4), b4 = null === d5 ? bg.call(b4, c5) : cg.call(b4, d5, c5), Object.setPrototypeOf(b4, HTMLUnknownElement.prototype), b4.__CE_state = 2, b4.__CE_definition = void 0, Ug(a5, b4), b4;
            }
          b4 = null === d5 ? bg.call(b4, c5) : cg.call(b4, d5, c5);
          Ug(a5, b4);
          return b4;
        }
        function $g(a5) {
          var b4 = "", c5 = "", d5 = 0, e8 = 0;
          a5 instanceof Error ? (b4 = a5.message, c5 = a5.sourceURL || a5.fileName || "", d5 = a5.line || a5.lineNumber || 0, e8 = a5.column || a5.columnNumber || 0) : b4 = "Uncaught " + String(a5);
          var f4 = void 0;
          void 0 === ErrorEvent.prototype.initErrorEvent ? f4 = new ErrorEvent("error", { cancelable: true, message: b4, filename: c5, lineno: d5, colno: e8, error: a5 }) : (f4 = document.createEvent("ErrorEvent"), f4.initErrorEvent("error", false, true, b4, c5, d5), f4.preventDefault = function() {
            Object.defineProperty(this, "defaultPrevented", { configurable: true, get: function() {
              return true;
            } });
          });
          void 0 === f4.error && Object.defineProperty(f4, "error", { configurable: true, enumerable: true, get: function() {
            return a5;
          } });
          window.dispatchEvent(f4);
          f4.defaultPrevented || console.error(a5);
        }
        ;
        function bh() {
          var a5 = this;
          this.I = void 0;
          this.Ka = new Promise(function(b4) {
            a5.g = b4;
          });
        }
        bh.prototype.resolve = function(a5) {
          if (this.I)
            throw Error("Already resolved.");
          this.I = a5;
          this.g(a5);
        };
        function ch(a5) {
          var b4 = document;
          this.X = void 0;
          this.S = a5;
          this.g = b4;
          Yg(this.S, this.g);
          "loading" === this.g.readyState && (this.X = new MutationObserver(this.h.bind(this)), this.X.observe(this.g, { childList: true, subtree: true }));
        }
        function dh(a5) {
          a5.X && a5.X.disconnect();
        }
        ch.prototype.h = function(a5) {
          var b4 = this.g.readyState;
          "interactive" !== b4 && "complete" !== b4 || dh(this);
          for (b4 = 0; b4 < a5.length; b4++)
            for (var c5 = a5[b4].addedNodes, d5 = 0; d5 < c5.length; d5++)
              Yg(this.S, c5[d5]);
        };
        function U(a5) {
          this.ma = /* @__PURE__ */ new Map();
          this.na = /* @__PURE__ */ new Map();
          this.Fa = /* @__PURE__ */ new Map();
          this.wa = false;
          this.za = /* @__PURE__ */ new Map();
          this.la = function(b4) {
            return b4();
          };
          this.V = false;
          this.oa = [];
          this.S = a5;
          this.Ga = a5.sb ? new ch(a5) : void 0;
        }
        v4 = U.prototype;
        v4.jb = function(a5, b4) {
          var c5 = this;
          if (!(b4 instanceof Function))
            throw new TypeError("Custom element constructor getters must be functions.");
          eh(this, a5);
          this.ma.set(a5, b4);
          this.oa.push(a5);
          this.V || (this.V = true, this.la(function() {
            return fh(c5);
          }));
        };
        v4.define = function(a5, b4) {
          var c5 = this;
          if (!(b4 instanceof Function))
            throw new TypeError("Custom element constructors must be functions.");
          eh(this, a5);
          gh(this, a5, b4);
          this.oa.push(a5);
          this.V || (this.V = true, this.la(function() {
            return fh(c5);
          }));
        };
        function eh(a5, b4) {
          if (!Jg(b4))
            throw new SyntaxError("The element name '" + b4 + "' is not valid.");
          if (Zg(a5, b4))
            throw Error("A custom element with name '" + (b4 + "' has already been defined."));
          if (a5.wa)
            throw Error("A custom element is already being defined.");
        }
        function gh(a5, b4, c5) {
          a5.wa = true;
          var d5;
          try {
            var e8 = c5.prototype;
            if (!(e8 instanceof Object))
              throw new TypeError("The custom element constructor's prototype is not an object.");
            var f4 = function(m4) {
              var q = e8[m4];
              if (void 0 !== q && !(q instanceof Function))
                throw Error("The '" + m4 + "' callback must be a function.");
              return q;
            };
            var g4 = f4("connectedCallback");
            var h5 = f4("disconnectedCallback");
            var k3 = f4("adoptedCallback");
            var l7 = (d5 = f4("attributeChangedCallback")) && c5.observedAttributes || [];
          } catch (m4) {
            throw m4;
          } finally {
            a5.wa = false;
          }
          c5 = {
            localName: b4,
            constructorFunction: c5,
            connectedCallback: g4,
            disconnectedCallback: h5,
            adoptedCallback: k3,
            attributeChangedCallback: d5,
            observedAttributes: l7,
            constructionStack: []
          };
          a5.na.set(b4, c5);
          a5.Fa.set(c5.constructorFunction, c5);
          return c5;
        }
        v4.upgrade = function(a5) {
          Yg(this.S, a5);
        };
        function fh(a5) {
          if (false !== a5.V) {
            a5.V = false;
            for (var b4 = [], c5 = a5.oa, d5 = /* @__PURE__ */ new Map(), e8 = 0; e8 < c5.length; e8++)
              d5.set(c5[e8], []);
            Yg(a5.S, document, { upgrade: function(k3) {
              if (void 0 === k3.__CE_state) {
                var l7 = k3.localName, m4 = d5.get(l7);
                m4 ? m4.push(k3) : a5.na.has(l7) && b4.push(k3);
              }
            } });
            for (e8 = 0; e8 < b4.length; e8++)
              Wg(a5.S, b4[e8]);
            for (e8 = 0; e8 < c5.length; e8++) {
              for (var f4 = c5[e8], g4 = d5.get(f4), h5 = 0; h5 < g4.length; h5++)
                Wg(a5.S, g4[h5]);
              (f4 = a5.za.get(f4)) && f4.resolve(void 0);
            }
            c5.length = 0;
          }
        }
        v4.get = function(a5) {
          if (a5 = Zg(this, a5))
            return a5.constructorFunction;
        };
        v4.whenDefined = function(a5) {
          if (!Jg(a5))
            return Promise.reject(new SyntaxError("'" + a5 + "' is not a valid custom element name."));
          var b4 = this.za.get(a5);
          if (b4)
            return b4.Ka;
          b4 = new bh();
          this.za.set(a5, b4);
          var c5 = this.na.has(a5) || this.ma.has(a5);
          a5 = -1 === this.oa.indexOf(a5);
          c5 && a5 && b4.resolve(void 0);
          return b4.Ka;
        };
        v4.polyfillWrapFlushCallback = function(a5) {
          this.Ga && dh(this.Ga);
          var b4 = this.la;
          this.la = function(c5) {
            return a5(function() {
              return b4(c5);
            });
          };
        };
        function Zg(a5, b4) {
          var c5 = a5.na.get(b4);
          if (c5)
            return c5;
          if (c5 = a5.ma.get(b4)) {
            a5.ma.delete(b4);
            try {
              return gh(a5, b4, c5());
            } catch (d5) {
              $g(d5);
            }
          }
        }
        U.prototype.define = U.prototype.define;
        U.prototype.upgrade = U.prototype.upgrade;
        U.prototype.get = U.prototype.get;
        U.prototype.whenDefined = U.prototype.whenDefined;
        U.prototype.polyfillDefineLazy = U.prototype.jb;
        U.prototype.polyfillWrapFlushCallback = U.prototype.polyfillWrapFlushCallback;
        function hh(a5, b4, c5) {
          function d5(e8) {
            return function(f4) {
              for (var g4 = [], h5 = 0; h5 < arguments.length; ++h5)
                g4[h5] = arguments[h5];
              h5 = [];
              for (var k3 = [], l7 = 0; l7 < g4.length; l7++) {
                var m4 = g4[l7];
                m4 instanceof Element && T4(m4) && k3.push(m4);
                if (m4 instanceof DocumentFragment)
                  for (m4 = m4.firstChild; m4; m4 = m4.nextSibling)
                    h5.push(m4);
                else
                  h5.push(m4);
              }
              e8.apply(this, g4);
              for (g4 = 0; g4 < k3.length; g4++)
                Xg(a5, k3[g4]);
              if (T4(this))
                for (g4 = 0; g4 < h5.length; g4++)
                  k3 = h5[g4], k3 instanceof Element && Vg(a5, k3);
            };
          }
          void 0 !== c5.prepend && (b4.prepend = d5(c5.prepend));
          void 0 !== c5.append && (b4.append = d5(c5.append));
        }
        ;
        function ih(a5) {
          Document.prototype.createElement = function(b4) {
            return ah(a5, this, b4, null);
          };
          Document.prototype.importNode = function(b4, c5) {
            b4 = dg.call(this, b4, !!c5);
            this.__CE_registry ? Yg(a5, b4) : Tg(a5, b4);
            return b4;
          };
          Document.prototype.createElementNS = function(b4, c5) {
            return ah(a5, this, c5, b4);
          };
          hh(a5, Document.prototype, { prepend: eg, append: fg });
        }
        ;
        function jh(a5) {
          function b4(d5) {
            return function(e8) {
              for (var f4 = [], g4 = 0; g4 < arguments.length; ++g4)
                f4[g4] = arguments[g4];
              g4 = [];
              for (var h5 = [], k3 = 0; k3 < f4.length; k3++) {
                var l7 = f4[k3];
                l7 instanceof Element && T4(l7) && h5.push(l7);
                if (l7 instanceof DocumentFragment)
                  for (l7 = l7.firstChild; l7; l7 = l7.nextSibling)
                    g4.push(l7);
                else
                  g4.push(l7);
              }
              d5.apply(this, f4);
              for (f4 = 0; f4 < h5.length; f4++)
                Xg(a5, h5[f4]);
              if (T4(this))
                for (f4 = 0; f4 < g4.length; f4++)
                  h5 = g4[f4], h5 instanceof Element && Vg(a5, h5);
            };
          }
          var c5 = Element.prototype;
          void 0 !== Ag && (c5.before = b4(Ag));
          void 0 !== Bg && (c5.after = b4(Bg));
          void 0 !== Cg && (c5.replaceWith = function(d5) {
            for (var e8 = [], f4 = 0; f4 < arguments.length; ++f4)
              e8[f4] = arguments[f4];
            f4 = [];
            for (var g4 = [], h5 = 0; h5 < e8.length; h5++) {
              var k3 = e8[h5];
              k3 instanceof Element && T4(k3) && g4.push(k3);
              if (k3 instanceof DocumentFragment)
                for (k3 = k3.firstChild; k3; k3 = k3.nextSibling)
                  f4.push(k3);
              else
                f4.push(k3);
            }
            h5 = T4(this);
            Cg.apply(this, e8);
            for (e8 = 0; e8 < g4.length; e8++)
              Xg(a5, g4[e8]);
            if (h5)
              for (Xg(a5, this), e8 = 0; e8 < f4.length; e8++)
                g4 = f4[e8], g4 instanceof Element && Vg(a5, g4);
          });
          void 0 !== Dg && (c5.remove = function() {
            var d5 = T4(this);
            Dg.call(this);
            d5 && Xg(a5, this);
          });
        }
        ;
        function kh(a5) {
          function b4(e8, f4) {
            Object.defineProperty(e8, "innerHTML", { enumerable: f4.enumerable, configurable: true, get: f4.get, set: function(g4) {
              var h5 = this, k3 = void 0;
              T4(this) && (k3 = [], Qg(a5, this, function(q) {
                q !== h5 && k3.push(q);
              }));
              f4.set.call(this, g4);
              if (k3)
                for (var l7 = 0; l7 < k3.length; l7++) {
                  var m4 = k3[l7];
                  1 === m4.__CE_state && a5.disconnectedCallback(m4);
                }
              this.ownerDocument.__CE_registry ? Yg(a5, this) : Tg(a5, this);
              return g4;
            } });
          }
          function c5(e8, f4) {
            e8.insertAdjacentElement = function(g4, h5) {
              var k3 = T4(h5);
              g4 = f4.call(this, g4, h5);
              k3 && Xg(a5, h5);
              T4(g4) && Vg(a5, h5);
              return g4;
            };
          }
          function d5(e8, f4) {
            function g4(h5, k3) {
              for (var l7 = []; h5 !== k3; h5 = h5.nextSibling)
                l7.push(h5);
              for (k3 = 0; k3 < l7.length; k3++)
                Yg(a5, l7[k3]);
            }
            e8.insertAdjacentHTML = function(h5, k3) {
              h5 = h5.toLowerCase();
              if ("beforebegin" === h5) {
                var l7 = this.previousSibling;
                f4.call(this, h5, k3);
                g4(l7 || this.parentNode.firstChild, this);
              } else if ("afterbegin" === h5)
                l7 = this.firstChild, f4.call(this, h5, k3), g4(this.firstChild, l7);
              else if ("beforeend" === h5)
                l7 = this.lastChild, f4.call(this, h5, k3), g4(l7 || this.firstChild, null);
              else if ("afterend" === h5)
                l7 = this.nextSibling, f4.call(this, h5, k3), g4(
                  this.nextSibling,
                  l7
                );
              else
                throw new SyntaxError("The value provided (" + String(h5) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
            };
          }
          og && (Element.prototype.attachShadow = function(e8) {
            e8 = og.call(this, e8);
            if (a5.W && !e8.__CE_patched) {
              e8.__CE_patched = true;
              for (var f4 = 0; f4 < a5.ca.length; f4++)
                a5.ca[f4](e8);
            }
            return this.__CE_shadowRoot = e8;
          });
          pg && pg.get ? b4(Element.prototype, pg) : Fg && Fg.get ? b4(HTMLElement.prototype, Fg) : Sg(a5, function(e8) {
            b4(e8, { enumerable: true, configurable: true, get: function() {
              return ig.call(this, true).innerHTML;
            }, set: function(f4) {
              var g4 = "template" === this.localName, h5 = g4 ? this.content : this, k3 = cg.call(document, this.namespaceURI, this.localName);
              for (k3.innerHTML = f4; 0 < h5.childNodes.length; )
                lg.call(h5, h5.childNodes[0]);
              for (f4 = g4 ? k3.content : k3; 0 < f4.childNodes.length; )
                jg.call(h5, f4.childNodes[0]);
            } });
          });
          Element.prototype.setAttribute = function(e8, f4) {
            if (1 !== this.__CE_state)
              return rg.call(this, e8, f4);
            var g4 = qg.call(this, e8);
            rg.call(this, e8, f4);
            f4 = qg.call(this, e8);
            a5.attributeChangedCallback(this, e8, g4, f4, null);
          };
          Element.prototype.setAttributeNS = function(e8, f4, g4) {
            if (1 !== this.__CE_state)
              return ug.call(
                this,
                e8,
                f4,
                g4
              );
            var h5 = tg.call(this, e8, f4);
            ug.call(this, e8, f4, g4);
            g4 = tg.call(this, e8, f4);
            a5.attributeChangedCallback(this, f4, h5, g4, e8);
          };
          Element.prototype.removeAttribute = function(e8) {
            if (1 !== this.__CE_state)
              return sg.call(this, e8);
            var f4 = qg.call(this, e8);
            sg.call(this, e8);
            null !== f4 && a5.attributeChangedCallback(this, e8, f4, null, null);
          };
          Element.prototype.removeAttributeNS = function(e8, f4) {
            if (1 !== this.__CE_state)
              return vg.call(this, e8, f4);
            var g4 = tg.call(this, e8, f4);
            vg.call(this, e8, f4);
            var h5 = tg.call(this, e8, f4);
            g4 !== h5 && a5.attributeChangedCallback(
              this,
              f4,
              g4,
              h5,
              e8
            );
          };
          Gg ? c5(HTMLElement.prototype, Gg) : wg && c5(Element.prototype, wg);
          Hg ? d5(HTMLElement.prototype, Hg) : xg && d5(Element.prototype, xg);
          hh(a5, Element.prototype, { prepend: yg, append: zg });
          jh(a5);
        }
        ;
        var lh = {};
        function mh(a5) {
          function b4() {
            var c5 = this.constructor;
            var d5 = document.__CE_registry.Fa.get(c5);
            if (!d5)
              throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
            var e8 = d5.constructionStack;
            if (0 === e8.length)
              return e8 = bg.call(document, d5.localName), Object.setPrototypeOf(e8, c5.prototype), e8.__CE_state = 1, e8.__CE_definition = d5, Ug(a5, e8), e8;
            var f4 = e8.length - 1, g4 = e8[f4];
            if (g4 === lh)
              throw Error("Failed to construct '" + d5.localName + "': This element was already constructed.");
            e8[f4] = lh;
            Object.setPrototypeOf(g4, c5.prototype);
            Ug(a5, g4);
            return g4;
          }
          b4.prototype = Eg.prototype;
          Object.defineProperty(HTMLElement.prototype, "constructor", { writable: true, configurable: true, enumerable: false, value: b4 });
          window.HTMLElement = b4;
        }
        ;
        function nh(a5) {
          function b4(c5, d5) {
            Object.defineProperty(c5, "textContent", { enumerable: d5.enumerable, configurable: true, get: d5.get, set: function(e8) {
              if (this.nodeType === Node.TEXT_NODE)
                d5.set.call(this, e8);
              else {
                var f4 = void 0;
                if (this.firstChild) {
                  var g4 = this.childNodes, h5 = g4.length;
                  if (0 < h5 && T4(this)) {
                    f4 = Array(h5);
                    for (var k3 = 0; k3 < h5; k3++)
                      f4[k3] = g4[k3];
                  }
                }
                d5.set.call(this, e8);
                if (f4)
                  for (e8 = 0; e8 < f4.length; e8++)
                    Xg(a5, f4[e8]);
              }
            } });
          }
          Node.prototype.insertBefore = function(c5, d5) {
            if (c5 instanceof DocumentFragment) {
              var e8 = Lg(c5);
              c5 = kg.call(this, c5, d5);
              if (T4(this))
                for (d5 = 0; d5 < e8.length; d5++)
                  Vg(a5, e8[d5]);
              return c5;
            }
            e8 = c5 instanceof Element && T4(c5);
            d5 = kg.call(this, c5, d5);
            e8 && Xg(a5, c5);
            T4(this) && Vg(a5, c5);
            return d5;
          };
          Node.prototype.appendChild = function(c5) {
            if (c5 instanceof DocumentFragment) {
              var d5 = Lg(c5);
              c5 = jg.call(this, c5);
              if (T4(this))
                for (var e8 = 0; e8 < d5.length; e8++)
                  Vg(a5, d5[e8]);
              return c5;
            }
            d5 = c5 instanceof Element && T4(c5);
            e8 = jg.call(this, c5);
            d5 && Xg(a5, c5);
            T4(this) && Vg(a5, c5);
            return e8;
          };
          Node.prototype.cloneNode = function(c5) {
            c5 = ig.call(this, !!c5);
            this.ownerDocument.__CE_registry ? Yg(a5, c5) : Tg(a5, c5);
            return c5;
          };
          Node.prototype.removeChild = function(c5) {
            var d5 = c5 instanceof Element && T4(c5), e8 = lg.call(this, c5);
            d5 && Xg(a5, c5);
            return e8;
          };
          Node.prototype.replaceChild = function(c5, d5) {
            if (c5 instanceof DocumentFragment) {
              var e8 = Lg(c5);
              c5 = mg.call(this, c5, d5);
              if (T4(this))
                for (Xg(a5, d5), d5 = 0; d5 < e8.length; d5++)
                  Vg(a5, e8[d5]);
              return c5;
            }
            e8 = c5 instanceof Element && T4(c5);
            var f4 = mg.call(this, c5, d5), g4 = T4(this);
            g4 && Xg(a5, d5);
            e8 && Xg(a5, c5);
            g4 && Vg(a5, c5);
            return f4;
          };
          ng && ng.get ? b4(Node.prototype, ng) : Rg(a5, function(c5) {
            b4(c5, { enumerable: true, configurable: true, get: function() {
              for (var d5 = [], e8 = this.firstChild; e8; e8 = e8.nextSibling)
                e8.nodeType !== Node.COMMENT_NODE && d5.push(e8.textContent);
              return d5.join("");
            }, set: function(d5) {
              for (; this.firstChild; )
                lg.call(this, this.firstChild);
              null != d5 && "" !== d5 && jg.call(this, document.createTextNode(d5));
            } });
          });
        }
        ;
        var Pg = window.customElements;
        function oh() {
          var a5 = new Og();
          mh(a5);
          ih(a5);
          hh(a5, DocumentFragment.prototype, { prepend: gg, append: hg });
          nh(a5);
          kh(a5);
          window.CustomElementRegistry = U;
          a5 = new U(a5);
          document.__CE_registry = a5;
          Object.defineProperty(window, "customElements", { configurable: true, enumerable: true, value: a5 });
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
        function qh(a5) {
          var b4 = a5 = a5.replace(rh, "").replace(sh, ""), c5 = new ph();
          c5.start = 0;
          c5.end = b4.length;
          for (var d5 = c5, e8 = 0, f4 = b4.length; e8 < f4; e8++)
            if ("{" === b4[e8]) {
              d5.rules || (d5.rules = []);
              var g4 = d5, h5 = g4.rules[g4.rules.length - 1] || null;
              d5 = new ph();
              d5.start = e8 + 1;
              d5.parent = g4;
              d5.previous = h5;
              g4.rules.push(d5);
            } else
              "}" === b4[e8] && (d5.end = e8 + 1, d5 = d5.parent || c5);
          return th(c5, a5);
        }
        function th(a5, b4) {
          var c5 = b4.substring(a5.start, a5.end - 1);
          a5.parsedCssText = a5.cssText = c5.trim();
          a5.parent && (c5 = b4.substring(a5.previous ? a5.previous.end : a5.parent.start, a5.start - 1), c5 = uh(c5), c5 = c5.replace(vh, " "), c5 = c5.substring(c5.lastIndexOf(";") + 1), c5 = a5.parsedSelector = a5.selector = c5.trim(), a5.atRule = 0 === c5.indexOf("@"), a5.atRule ? 0 === c5.indexOf("@media") ? a5.type = wh : c5.match(xh) && (a5.type = yh, a5.keyframesName = a5.selector.split(vh).pop()) : a5.type = 0 === c5.indexOf("--") ? zh : Ah);
          if (c5 = a5.rules)
            for (var d5 = 0, e8 = c5.length, f4 = void 0; d5 < e8 && (f4 = c5[d5]); d5++)
              th(
                f4,
                b4
              );
          return a5;
        }
        function uh(a5) {
          return a5.replace(/\\([0-9a-f]{1,6})\s/gi, function(b4, c5) {
            b4 = c5;
            for (c5 = 6 - b4.length; c5--; )
              b4 = "0" + b4;
            return "\\" + b4;
          });
        }
        function Bh(a5, b4, c5) {
          c5 = void 0 === c5 ? "" : c5;
          var d5 = "";
          if (a5.cssText || a5.rules) {
            var e8 = a5.rules, f4;
            if (f4 = e8)
              f4 = e8[0], f4 = !(f4 && f4.selector && 0 === f4.selector.indexOf("--"));
            if (f4) {
              f4 = 0;
              for (var g4 = e8.length, h5 = void 0; f4 < g4 && (h5 = e8[f4]); f4++)
                d5 = Bh(h5, b4, d5);
            } else
              b4 ? b4 = a5.cssText : (b4 = a5.cssText, b4 = b4.replace(Ch, "").replace(Dh, ""), b4 = b4.replace(Eh, "").replace(Fh, "")), (d5 = b4.trim()) && (d5 = "  " + d5 + "\n");
          }
          d5 && (a5.selector && (c5 += a5.selector + " {\n"), c5 += d5, a5.selector && (c5 += "}\n\n"));
          return c5;
        }
        var Ah = 1, yh = 7, wh = 4, zh = 1e3, rh = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, sh = /@import[^;]*;/gim, Ch = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim, Dh = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim, Eh = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, Fh = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim, xh = /^@[^\s]*keyframes/, vh = /\s+/g;
        var V3 = !(window.ShadyDOM && window.ShadyDOM.inUse), Gh;
        function Hh(a5) {
          Gh = a5 && a5.shimcssproperties ? false : V3 || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
        }
        var Ih;
        window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (Ih = window.ShadyCSS.cssBuild);
        var Jh = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
        window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? Gh = window.ShadyCSS.nativeCss : window.ShadyCSS ? (Hh(window.ShadyCSS), window.ShadyCSS = void 0) : Hh(window.WebComponents && window.WebComponents.flags);
        var W2 = Gh;
        var Kh = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi, Lh = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, Mh = /(--[\w-]+)\s*([:,;)]|$)/gi, Nh = /(animation\s*:)|(animation-name\s*:)/, Oh = /@media\s(.*)/, Ph = /\{[^}]*\}/g;
        var Qh = /* @__PURE__ */ new Set();
        function Rh(a5, b4) {
          if (!a5)
            return "";
          "string" === typeof a5 && (a5 = qh(a5));
          b4 && Sh(a5, b4);
          return Bh(a5, W2);
        }
        function Th(a5) {
          !a5.__cssRules && a5.textContent && (a5.__cssRules = qh(a5.textContent));
          return a5.__cssRules || null;
        }
        function Vh(a5) {
          return !!a5.parent && a5.parent.type === yh;
        }
        function Sh(a5, b4, c5, d5) {
          if (a5) {
            var e8 = false, f4 = a5.type;
            if (d5 && f4 === wh) {
              var g4 = a5.selector.match(Oh);
              g4 && (window.matchMedia(g4[1]).matches || (e8 = true));
            }
            f4 === Ah ? b4(a5) : c5 && f4 === yh ? c5(a5) : f4 === zh && (e8 = true);
            if ((a5 = a5.rules) && !e8)
              for (e8 = 0, f4 = a5.length, g4 = void 0; e8 < f4 && (g4 = a5[e8]); e8++)
                Sh(g4, b4, c5, d5);
          }
        }
        function Wh(a5, b4, c5, d5) {
          var e8 = document.createElement("style");
          b4 && e8.setAttribute("scope", b4);
          e8.textContent = a5;
          Xh(e8, c5, d5);
          return e8;
        }
        var Yh = null;
        function Zh(a5) {
          a5 = document.createComment(" Shady DOM styles for " + a5 + " ");
          var b4 = document.head;
          b4.insertBefore(a5, (Yh ? Yh.nextSibling : null) || b4.firstChild);
          return Yh = a5;
        }
        function Xh(a5, b4, c5) {
          b4 = b4 || document.head;
          b4.insertBefore(a5, c5 && c5.nextSibling || b4.firstChild);
          Yh ? a5.compareDocumentPosition(Yh) === Node.DOCUMENT_POSITION_PRECEDING && (Yh = a5) : Yh = a5;
        }
        function $h(a5, b4) {
          for (var c5 = 0, d5 = a5.length; b4 < d5; b4++)
            if ("(" === a5[b4])
              c5++;
            else if (")" === a5[b4] && 0 === --c5)
              return b4;
          return -1;
        }
        function ai(a5, b4) {
          var c5 = a5.indexOf("var(");
          if (-1 === c5)
            return b4(a5, "", "", "");
          var d5 = $h(a5, c5 + 3), e8 = a5.substring(c5 + 4, d5);
          c5 = a5.substring(0, c5);
          a5 = ai(a5.substring(d5 + 1), b4);
          d5 = e8.indexOf(",");
          return -1 === d5 ? b4(c5, e8.trim(), "", a5) : b4(c5, e8.substring(0, d5).trim(), e8.substring(d5 + 1).trim(), a5);
        }
        function bi(a5, b4) {
          V3 ? a5.setAttribute("class", b4) : window.ShadyDOM.nativeMethods.setAttribute.call(a5, "class", b4);
        }
        var ci = window.ShadyDOM && window.ShadyDOM.wrap || function(a5) {
          return a5;
        };
        function di(a5) {
          var b4 = a5.localName, c5 = "";
          b4 ? -1 < b4.indexOf("-") || (c5 = b4, b4 = a5.getAttribute && a5.getAttribute("is") || "") : (b4 = a5.is, c5 = a5.extends);
          return { is: b4, ja: c5 };
        }
        function ei(a5) {
          for (var b4 = [], c5 = "", d5 = 0; 0 <= d5 && d5 < a5.length; d5++)
            if ("(" === a5[d5]) {
              var e8 = $h(a5, d5);
              c5 += a5.slice(d5, e8 + 1);
              d5 = e8;
            } else
              "," === a5[d5] ? (b4.push(c5), c5 = "") : c5 += a5[d5];
          c5 && b4.push(c5);
          return b4;
        }
        function fi(a5) {
          if (void 0 !== Ih)
            return Ih;
          if (void 0 === a5.__cssBuild) {
            var b4 = a5.getAttribute("css-build");
            if (b4)
              a5.__cssBuild = b4;
            else {
              a: {
                b4 = "template" === a5.localName ? a5.content.firstChild : a5.firstChild;
                if (b4 instanceof Comment && (b4 = b4.textContent.trim().split(":"), "css-build" === b4[0])) {
                  b4 = b4[1];
                  break a;
                }
                b4 = "";
              }
              if ("" !== b4) {
                var c5 = "template" === a5.localName ? a5.content.firstChild : a5.firstChild;
                c5.parentNode.removeChild(c5);
              }
              a5.__cssBuild = b4;
            }
          }
          return a5.__cssBuild || "";
        }
        function gi(a5) {
          a5 = void 0 === a5 ? "" : a5;
          return "" !== a5 && W2 ? V3 ? "shadow" === a5 : "shady" === a5 : false;
        }
        ;
        function hi() {
        }
        function ii(a5, b4) {
          ji(ki, a5, function(c5) {
            li(c5, b4 || "");
          });
        }
        function ji(a5, b4, c5) {
          b4.nodeType === Node.ELEMENT_NODE && c5(b4);
          var d5;
          "template" === b4.localName ? d5 = (b4.content || b4._content || b4).childNodes : d5 = b4.children || b4.childNodes;
          if (d5)
            for (b4 = 0; b4 < d5.length; b4++)
              ji(a5, d5[b4], c5);
        }
        function li(a5, b4, c5) {
          if (b4) {
            if (a5.classList)
              c5 ? (a5.classList.remove("style-scope"), a5.classList.remove(b4)) : (a5.classList.add("style-scope"), a5.classList.add(b4));
            else if (a5.getAttribute) {
              var d5 = a5.getAttribute("class");
              c5 ? d5 && (b4 = d5.replace("style-scope", "").replace(b4, ""), bi(a5, b4)) : bi(a5, (d5 ? d5 + " " : "") + "style-scope " + b4);
            }
          }
        }
        function mi(a5, b4, c5) {
          ji(ki, a5, function(d5) {
            li(d5, b4, true);
            li(d5, c5);
          });
        }
        function ni(a5, b4) {
          ji(ki, a5, function(c5) {
            li(c5, b4 || "", true);
          });
        }
        function oi(a5, b4, c5, d5, e8) {
          var f4 = ki;
          e8 = void 0 === e8 ? "" : e8;
          "" === e8 && (V3 || "shady" === (void 0 === d5 ? "" : d5) ? e8 = Rh(b4, c5) : (a5 = di(a5), e8 = pi(f4, b4, a5.is, a5.ja, c5) + "\n\n"));
          return e8.trim();
        }
        function pi(a5, b4, c5, d5, e8) {
          var f4 = qi(c5, d5);
          c5 = c5 ? "." + c5 : "";
          return Rh(b4, function(g4) {
            g4.i || (g4.selector = g4.G = ri(a5, g4, a5.h, c5, f4), g4.i = true);
            e8 && e8(g4, c5, f4);
          });
        }
        function qi(a5, b4) {
          return b4 ? "[is=" + a5 + "]" : a5;
        }
        function ri(a5, b4, c5, d5, e8) {
          var f4 = ei(b4.selector);
          if (!Vh(b4)) {
            b4 = 0;
            for (var g4 = f4.length, h5 = void 0; b4 < g4 && (h5 = f4[b4]); b4++)
              f4[b4] = c5.call(a5, h5, d5, e8);
          }
          return f4.filter(function(k3) {
            return !!k3;
          }).join(",");
        }
        function si(a5) {
          return a5.replace(ti, function(b4, c5, d5) {
            -1 < d5.indexOf("+") ? d5 = d5.replace(/\+/g, "___") : -1 < d5.indexOf("___") && (d5 = d5.replace(/___/g, "+"));
            return ":" + c5 + "(" + d5 + ")";
          });
        }
        function ui(a5) {
          for (var b4 = [], c5; c5 = a5.match(vi); ) {
            var d5 = c5.index, e8 = $h(a5, d5);
            if (-1 === e8)
              throw Error(c5.input + " selector missing ')'");
            c5 = a5.slice(d5, e8 + 1);
            a5 = a5.replace(c5, "\uE000");
            b4.push(c5);
          }
          return { Ea: a5, matches: b4 };
        }
        function wi(a5, b4) {
          var c5 = a5.split("\uE000");
          return b4.reduce(function(d5, e8, f4) {
            return d5 + e8 + c5[f4 + 1];
          }, c5[0]);
        }
        hi.prototype.h = function(a5, b4, c5) {
          var d5 = false;
          a5 = a5.trim();
          var e8 = ti.test(a5);
          e8 && (a5 = a5.replace(ti, function(h5, k3, l7) {
            return ":" + k3 + "(" + l7.replace(/\s/g, "") + ")";
          }), a5 = si(a5));
          var f4 = vi.test(a5);
          if (f4) {
            var g4 = ui(a5);
            a5 = g4.Ea;
            g4 = g4.matches;
          }
          a5 = a5.replace(xi, ":host $1");
          a5 = a5.replace(yi, function(h5, k3, l7) {
            d5 || (h5 = zi(l7, k3, b4, c5), d5 = d5 || h5.stop, k3 = h5.Ya, l7 = h5.value);
            return k3 + l7;
          });
          f4 && (a5 = wi(a5, g4));
          e8 && (a5 = si(a5));
          return a5 = a5.replace(Ai, function(h5, k3, l7, m4) {
            return '[dir="' + l7 + '"] ' + k3 + m4 + ", " + k3 + '[dir="' + l7 + '"]' + m4;
          });
        };
        function zi(a5, b4, c5, d5) {
          var e8 = a5.indexOf("::slotted");
          0 <= a5.indexOf(":host") ? a5 = Bi(a5, d5) : 0 !== e8 && (a5 = c5 ? Ci(a5, c5) : a5);
          c5 = false;
          0 <= e8 && (b4 = "", c5 = true);
          if (c5) {
            var f4 = true;
            c5 && (a5 = a5.replace(Di, function(g4, h5) {
              return " > " + h5;
            }));
          }
          return { value: a5, Ya: b4, stop: f4 };
        }
        function Ci(a5, b4) {
          a5 = a5.split(/(\[.+?\])/);
          for (var c5 = [], d5 = 0; d5 < a5.length; d5++)
            if (1 === d5 % 2)
              c5.push(a5[d5]);
            else {
              var e8 = a5[d5];
              if ("" !== e8 || d5 !== a5.length - 1)
                e8 = e8.split(":"), e8[0] += b4, c5.push(e8.join(":"));
            }
          return c5.join("");
        }
        function Bi(a5, b4) {
          var c5 = a5.match(Ei);
          return (c5 = c5 && c5[2].trim() || "") ? c5[0].match(Fi) ? a5.replace(Ei, function(d5, e8, f4) {
            return b4 + f4;
          }) : c5.split(Fi)[0] === b4 ? c5 : "should_not_match" : a5.replace(":host", b4);
        }
        function Gi(a5) {
          ":root" === a5.selector && (a5.selector = "html");
        }
        hi.prototype.i = function(a5) {
          return a5.match(":host") ? "" : a5.match("::slotted") ? this.h(a5, ":not(.style-scope)") : Ci(a5.trim(), ":not(.style-scope)");
        };
        ea.Object.defineProperties(hi.prototype, { g: { configurable: true, enumerable: true, get: function() {
          return "style-scope";
        } } });
        var ti = /:(nth[-\w]+)\(([^)]+)\)/, yi = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, Fi = /[[.:#*]/, xi = /^(::slotted)/, Ei = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Di = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Ai = /(.*):dir\((?:(ltr|rtl))\)(.*)/, vi = /:(?:matches|any|-(?:webkit|moz)-any)/, ki = new hi();
        function Hi(a5, b4, c5, d5, e8) {
          this.M = a5 || null;
          this.h = b4 || null;
          this.Ca = c5 || [];
          this.K = null;
          this.cssBuild = e8 || "";
          this.ja = d5 || "";
          this.g = this.L = this.R = null;
        }
        function Ii(a5) {
          return a5 ? a5.__styleInfo : null;
        }
        function Ji(a5, b4) {
          return a5.__styleInfo = b4;
        }
        Hi.prototype.i = function() {
          return this.M;
        };
        Hi.prototype._getStyleRules = Hi.prototype.i;
        function Ki(a5) {
          var b4 = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
          return b4 && b4.call(this, a5);
        }
        var Li = /:host\s*>\s*/, Mi = navigator.userAgent.match("Trident");
        function Ni() {
        }
        function Oi(a5) {
          var b4 = {}, c5 = [], d5 = 0;
          Sh(a5, function(f4) {
            Pi(f4);
            f4.index = d5++;
            f4 = f4.F.cssText;
            for (var g4; g4 = Mh.exec(f4); ) {
              var h5 = g4[1];
              ":" !== g4[2] && (b4[h5] = true);
            }
          }, function(f4) {
            c5.push(f4);
          });
          a5.h = c5;
          a5 = [];
          for (var e8 in b4)
            a5.push(e8);
          return a5;
        }
        function Pi(a5) {
          if (!a5.F) {
            var b4 = {}, c5 = {};
            Qi(a5, c5) && (b4.P = c5, a5.rules = null);
            b4.cssText = a5.parsedCssText.replace(Ph, "").replace(Kh, "");
            a5.F = b4;
          }
        }
        function Qi(a5, b4) {
          var c5 = a5.F;
          if (c5) {
            if (c5.P)
              return Object.assign(b4, c5.P), true;
          } else {
            c5 = a5.parsedCssText;
            for (var d5; a5 = Kh.exec(c5); ) {
              d5 = (a5[2] || a5[3]).trim();
              if ("inherit" !== d5 || "unset" !== d5)
                b4[a5[1].trim()] = d5;
              d5 = true;
            }
            return d5;
          }
        }
        function Ri(a5, b4, c5) {
          b4 && (b4 = 0 <= b4.indexOf(";") ? Si(a5, b4, c5) : ai(b4, function(d5, e8, f4, g4) {
            if (!e8)
              return d5 + g4;
            (e8 = Ri(a5, c5[e8], c5)) && "initial" !== e8 ? "apply-shim-inherit" === e8 && (e8 = "inherit") : e8 = Ri(a5, c5[f4] || f4, c5) || f4;
            return d5 + (e8 || "") + g4;
          }));
          return b4 && b4.trim() || "";
        }
        function Si(a5, b4, c5) {
          b4 = b4.split(";");
          for (var d5 = 0, e8, f4; d5 < b4.length; d5++)
            if (e8 = b4[d5]) {
              Lh.lastIndex = 0;
              if (f4 = Lh.exec(e8))
                e8 = Ri(a5, c5[f4[1]], c5);
              else if (f4 = e8.indexOf(":"), -1 !== f4) {
                var g4 = e8.substring(f4);
                g4 = g4.trim();
                g4 = Ri(a5, g4, c5) || g4;
                e8 = e8.substring(0, f4) + g4;
              }
              b4[d5] = e8 && e8.lastIndexOf(";") === e8.length - 1 ? e8.slice(0, -1) : e8 || "";
            }
          return b4.join(";");
        }
        function Ti(a5, b4) {
          var c5 = {}, d5 = [];
          Sh(a5, function(e8) {
            e8.F || Pi(e8);
            var f4 = e8.G || e8.parsedSelector;
            b4 && e8.F.P && f4 && Ki.call(b4, f4) && (Qi(e8, c5), e8 = e8.index, f4 = parseInt(e8 / 32, 10), d5[f4] = (d5[f4] || 0) | 1 << e8 % 32);
          }, null, true);
          return { P: c5, key: d5 };
        }
        function Ui(a5, b4, c5, d5) {
          b4.F || Pi(b4);
          if (b4.F.P) {
            var e8 = di(a5);
            a5 = e8.is;
            e8 = e8.ja;
            e8 = a5 ? qi(a5, e8) : "html";
            var f4 = b4.parsedSelector;
            var g4 = !!f4.match(Li) || "html" === e8 && -1 < f4.indexOf("html");
            var h5 = 0 === f4.indexOf(":host") && !g4;
            "shady" === c5 && (g4 = f4 === e8 + " > *." + e8 || -1 !== f4.indexOf("html"), h5 = !g4 && 0 === f4.indexOf(e8));
            if (g4 || h5)
              c5 = e8, h5 && (b4.G || (b4.G = ri(ki, b4, ki.h, a5 ? "." + a5 : "", e8)), c5 = b4.G || e8), g4 && "html" === e8 && (c5 = b4.G || b4.O), d5({ Ea: c5, gb: h5, vb: g4 });
          }
        }
        function Vi(a5, b4, c5) {
          var d5 = {}, e8 = {};
          Sh(b4, function(f4) {
            Ui(a5, f4, c5, function(g4) {
              Ki.call(a5._element || a5, g4.Ea) && (g4.gb ? Qi(f4, d5) : Qi(f4, e8));
            });
          }, null, true);
          return { mb: e8, eb: d5 };
        }
        function Wi(a5, b4, c5, d5) {
          var e8 = di(b4), f4 = qi(e8.is, e8.ja), g4 = new RegExp("(?:^|[^.#[:])" + (b4.extends ? "\\" + f4.slice(0, -1) + "\\]" : f4) + "($|[.:[\\s>+~])"), h5 = Ii(b4);
          e8 = h5.M;
          h5 = h5.cssBuild;
          var k3 = Xi(e8, d5);
          return oi(b4, e8, function(l7) {
            var m4 = "";
            l7.F || Pi(l7);
            l7.F.cssText && (m4 = Si(a5, l7.F.cssText, c5));
            l7.cssText = m4;
            if (!V3 && !Vh(l7) && l7.cssText) {
              var q = m4 = l7.cssText;
              null == l7.Ma && (l7.Ma = Nh.test(m4));
              if (l7.Ma)
                if (null == l7.ra) {
                  l7.ra = [];
                  for (var H3 in k3)
                    q = k3[H3], q = q(m4), m4 !== q && (m4 = q, l7.ra.push(H3));
                } else {
                  for (H3 = 0; H3 < l7.ra.length; ++H3)
                    q = k3[l7.ra[H3]], m4 = q(m4);
                  q = m4;
                }
              l7.cssText = q;
              l7.G = l7.G || l7.selector;
              m4 = "." + d5;
              H3 = ei(l7.G);
              q = 0;
              for (var C3 = H3.length, t4 = void 0; q < C3 && (t4 = H3[q]); q++)
                H3[q] = t4.match(g4) ? t4.replace(f4, m4) : m4 + " " + t4;
              l7.selector = H3.join(",");
            }
          }, h5);
        }
        function Xi(a5, b4) {
          a5 = a5.h;
          var c5 = {};
          if (!V3 && a5)
            for (var d5 = 0, e8 = a5[d5]; d5 < a5.length; e8 = a5[++d5]) {
              var f4 = e8, g4 = b4;
              f4.u = new RegExp("\\b" + f4.keyframesName + "(?!\\B|-)", "g");
              f4.g = f4.keyframesName + "-" + g4;
              f4.G = f4.G || f4.selector;
              f4.selector = f4.G.replace(f4.keyframesName, f4.g);
              c5[e8.keyframesName] = Yi(e8);
            }
          return c5;
        }
        function Yi(a5) {
          return function(b4) {
            return b4.replace(a5.u, a5.g);
          };
        }
        function Zi(a5, b4) {
          var c5 = $i, d5 = Th(a5);
          a5.textContent = Rh(d5, function(e8) {
            var f4 = e8.cssText = e8.parsedCssText;
            e8.F && e8.F.cssText && (f4 = f4.replace(Ch, "").replace(Dh, ""), e8.cssText = Si(c5, f4, b4));
          });
        }
        ea.Object.defineProperties(Ni.prototype, { g: { configurable: true, enumerable: true, get: function() {
          return "x-scope";
        } } });
        var $i = new Ni();
        var aj = {}, bj = window.customElements;
        if (bj && !V3 && !Jh) {
          var cj = bj.define;
          bj.define = function(a5, b4, c5) {
            aj[a5] || (aj[a5] = Zh(a5));
            cj.call(bj, a5, b4, c5);
          };
        }
        ;
        function dj() {
          this.cache = {};
        }
        dj.prototype.store = function(a5, b4, c5, d5) {
          var e8 = this.cache[a5] || [];
          e8.push({ P: b4, styleElement: c5, L: d5 });
          100 < e8.length && e8.shift();
          this.cache[a5] = e8;
        };
        function ej() {
        }
        var fj = new RegExp(ki.g + "\\s*([^\\s]*)");
        function gj(a5) {
          return (a5 = (a5.classList && a5.classList.value ? a5.classList.value : a5.getAttribute("class") || "").match(fj)) ? a5[1] : "";
        }
        function hj(a5) {
          var b4 = ci(a5).getRootNode();
          return b4 === a5 || b4 === a5.ownerDocument ? "" : (a5 = b4.host) ? di(a5).is : "";
        }
        function ij(a5) {
          for (var b4 = 0; b4 < a5.length; b4++) {
            var c5 = a5[b4];
            if (c5.target !== document.documentElement && c5.target !== document.head)
              for (var d5 = 0; d5 < c5.addedNodes.length; d5++) {
                var e8 = c5.addedNodes[d5];
                if (e8.nodeType === Node.ELEMENT_NODE) {
                  var f4 = e8.getRootNode(), g4 = gj(e8);
                  if (g4 && f4 === e8.ownerDocument && ("style" !== e8.localName && "template" !== e8.localName || "" === fi(e8)))
                    ni(e8, g4);
                  else if (f4 instanceof ShadowRoot)
                    for (f4 = hj(e8), f4 !== g4 && mi(e8, g4, f4), e8 = window.ShadyDOM.nativeMethods.querySelectorAll.call(e8, ":not(." + ki.g + ")"), g4 = 0; g4 < e8.length; g4++) {
                      f4 = e8[g4];
                      var h5 = hj(f4);
                      h5 && li(f4, h5);
                    }
                }
              }
          }
        }
        if (!(V3 || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
          var jj = new MutationObserver(ij), kj = function(a5) {
            jj.observe(a5, { childList: true, subtree: true });
          };
          if (window.customElements && !window.customElements.polyfillWrapFlushCallback)
            kj(document);
          else {
            var lj = function() {
              kj(document.body);
            };
            window.HTMLImports ? window.HTMLImports.whenReady(lj) : requestAnimationFrame(function() {
              if ("loading" === document.readyState) {
                var a5 = function() {
                  lj();
                  document.removeEventListener("readystatechange", a5);
                };
                document.addEventListener(
                  "readystatechange",
                  a5
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
        function oj(a5) {
          if (a5 = mj[a5])
            a5._applyShimCurrentVersion = a5._applyShimCurrentVersion || 0, a5._applyShimValidatingVersion = a5._applyShimValidatingVersion || 0, a5._applyShimNextVersion = (a5._applyShimNextVersion || 0) + 1;
        }
        function pj(a5) {
          return a5._applyShimCurrentVersion === a5._applyShimNextVersion;
        }
        function qj(a5) {
          a5._applyShimValidatingVersion = a5._applyShimNextVersion;
          a5._validating || (a5._validating = true, nj.then(function() {
            a5._applyShimCurrentVersion = a5._applyShimNextVersion;
            a5._validating = false;
          }));
        }
        ;
        var rj = {}, sj = new dj();
        function Y() {
          this.ea = {};
          this.i = document.documentElement;
          var a5 = new ph();
          a5.rules = [];
          this.u = Ji(this.i, new Hi(a5));
          this.O = false;
          this.g = this.h = null;
        }
        v4 = Y.prototype;
        v4.flush = function() {
          ej();
        };
        v4.bb = function(a5) {
          return Th(a5);
        };
        v4.qb = function(a5) {
          return Rh(a5);
        };
        v4.prepareTemplate = function(a5, b4, c5) {
          this.prepareTemplateDom(a5, b4);
          this.prepareTemplateStyles(a5, b4, c5);
        };
        v4.prepareTemplateStyles = function(a5, b4, c5) {
          if (!a5._prepared && !Jh) {
            V3 || aj[b4] || (aj[b4] = Zh(b4));
            a5._prepared = true;
            a5.name = b4;
            a5.extends = c5;
            mj[b4] = a5;
            var d5 = fi(a5), e8 = gi(d5);
            c5 = { is: b4, extends: c5 };
            for (var f4 = [], g4 = a5.content.querySelectorAll("style"), h5 = 0; h5 < g4.length; h5++) {
              var k3 = g4[h5];
              if (k3.hasAttribute("shady-unscoped")) {
                if (!V3) {
                  var l7 = k3.textContent;
                  if (!Qh.has(l7)) {
                    Qh.add(l7);
                    var m4 = document.createElement("style");
                    m4.setAttribute("shady-unscoped", "");
                    m4.textContent = l7;
                    document.head.appendChild(m4);
                  }
                  k3.parentNode.removeChild(k3);
                }
              } else
                f4.push(k3.textContent), k3.parentNode.removeChild(k3);
            }
            f4 = f4.join("").trim() + (rj[b4] || "");
            tj(this);
            if (!e8) {
              if (g4 = !d5)
                g4 = Lh.test(f4) || Kh.test(f4), Lh.lastIndex = 0, Kh.lastIndex = 0;
              h5 = qh(f4);
              g4 && W2 && this.h && this.h.transformRules(h5, b4);
              a5._styleAst = h5;
            }
            g4 = [];
            W2 || (g4 = Oi(a5._styleAst));
            if (!g4.length || W2)
              h5 = V3 ? a5.content : null, b4 = aj[b4] || null, d5 = oi(c5, a5._styleAst, null, d5, e8 ? f4 : ""), d5 = d5.length ? Wh(d5, c5.is, h5, b4) : null, a5._style = d5;
            a5.g = g4;
          }
        };
        v4.kb = function(a5, b4) {
          rj[b4] = a5.join(" ");
        };
        v4.prepareTemplateDom = function(a5, b4) {
          if (!Jh) {
            var c5 = fi(a5);
            V3 || "shady" === c5 || a5._domPrepared || (a5._domPrepared = true, ii(a5.content, b4));
          }
        };
        function uj(a5) {
          var b4 = di(a5), c5 = b4.is;
          b4 = b4.ja;
          var d5 = aj[c5] || null, e8 = mj[c5];
          if (e8) {
            c5 = e8._styleAst;
            var f4 = e8.g;
            e8 = fi(e8);
            b4 = new Hi(c5, d5, f4, b4, e8);
            Ji(a5, b4);
            return b4;
          }
        }
        function vj(a5) {
          !a5.g && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a5.g = window.ShadyCSS.CustomStyleInterface, a5.g.transformCallback = function(b4) {
            a5.Qa(b4);
          }, a5.g.validateCallback = function() {
            requestAnimationFrame(function() {
              (a5.g.enqueued || a5.O) && a5.flushCustomStyles();
            });
          });
        }
        function tj(a5) {
          if (!a5.h && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
            a5.h = window.ShadyCSS.ApplyShim;
            a5.h.invalidCallback = oj;
            var b4 = true;
          } else
            b4 = false;
          vj(a5);
          return b4;
        }
        v4.flushCustomStyles = function() {
          if (!Jh) {
            var a5 = tj(this);
            if (this.g) {
              var b4 = this.g.processStyles();
              if ((a5 || this.g.enqueued) && !gi(this.u.cssBuild)) {
                if (W2) {
                  if (!this.u.cssBuild)
                    for (a5 = 0; a5 < b4.length; a5++) {
                      var c5 = this.g.getStyleForCustomStyle(b4[a5]);
                      if (c5 && W2 && this.h) {
                        var d5 = Th(c5);
                        tj(this);
                        this.h.transformRules(d5);
                        c5.textContent = Rh(d5);
                      }
                    }
                } else {
                  wj(this, b4);
                  xj(this, this.i, this.u);
                  for (a5 = 0; a5 < b4.length; a5++)
                    (c5 = this.g.getStyleForCustomStyle(b4[a5])) && Zi(c5, this.u.R);
                  this.O && this.styleDocument();
                }
                this.g.enqueued = false;
              }
            }
          }
        };
        function wj(a5, b4) {
          b4 = b4.map(function(c5) {
            return a5.g.getStyleForCustomStyle(c5);
          }).filter(function(c5) {
            return !!c5;
          });
          b4.sort(function(c5, d5) {
            c5 = d5.compareDocumentPosition(c5);
            return c5 & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c5 & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
          });
          a5.u.M.rules = b4.map(function(c5) {
            return Th(c5);
          });
        }
        v4.styleElement = function(a5, b4) {
          if (Jh) {
            if (b4) {
              Ii(a5) || Ji(a5, new Hi(null));
              var c5 = Ii(a5);
              c5.K = c5.K || {};
              Object.assign(c5.K, b4);
              yj(this, a5, c5);
            }
          } else if (c5 = Ii(a5) || uj(a5)) {
            if (a5 !== this.i && (this.O = true), b4 && (c5.K = c5.K || {}, Object.assign(c5.K, b4)), W2)
              yj(this, a5, c5);
            else if (this.flush(), xj(this, a5, c5), c5.Ca && c5.Ca.length) {
              b4 = di(a5).is;
              var d5;
              a: {
                if (d5 = sj.cache[b4])
                  for (var e8 = d5.length - 1; 0 <= e8; e8--) {
                    var f4 = d5[e8];
                    b: {
                      var g4 = c5.Ca;
                      for (var h5 = 0; h5 < g4.length; h5++) {
                        var k3 = g4[h5];
                        if (f4.P[k3] !== c5.R[k3]) {
                          g4 = false;
                          break b;
                        }
                      }
                      g4 = true;
                    }
                    if (g4) {
                      d5 = f4;
                      break a;
                    }
                  }
                d5 = void 0;
              }
              g4 = d5 ? d5.styleElement : null;
              e8 = c5.L;
              (f4 = d5 && d5.L) || (f4 = this.ea[b4] = (this.ea[b4] || 0) + 1, f4 = b4 + "-" + f4);
              c5.L = f4;
              f4 = c5.L;
              h5 = $i;
              h5 = g4 ? g4.textContent || "" : Wi(h5, a5, c5.R, f4);
              k3 = Ii(a5);
              var l7 = k3.g;
              l7 && !V3 && l7 !== g4 && (l7._useCount--, 0 >= l7._useCount && l7.parentNode && l7.parentNode.removeChild(l7));
              V3 ? k3.g ? (k3.g.textContent = h5, g4 = k3.g) : h5 && (g4 = Wh(h5, f4, a5.shadowRoot, k3.h)) : g4 ? g4.parentNode || (Mi && -1 < h5.indexOf("@media") && (g4.textContent = h5), Xh(g4, null, k3.h)) : h5 && (g4 = Wh(h5, f4, null, k3.h));
              g4 && (g4._useCount = g4._useCount || 0, k3.g != g4 && g4._useCount++, k3.g = g4);
              f4 = g4;
              V3 || (g4 = c5.L, k3 = h5 = a5.getAttribute("class") || "", e8 && (k3 = h5.replace(new RegExp("\\s*x-scope\\s*" + e8 + "\\s*", "g"), " ")), k3 += (k3 ? " " : "") + "x-scope " + g4, h5 !== k3 && bi(a5, k3));
              d5 || sj.store(b4, c5.R, f4, c5.L);
            }
          }
        };
        function yj(a5, b4, c5) {
          var d5 = di(b4).is;
          if (c5.K) {
            var e8 = c5.K, f4;
            for (f4 in e8)
              null === f4 ? b4.style.removeProperty(f4) : b4.style.setProperty(f4, e8[f4]);
          }
          e8 = mj[d5];
          if (!(!e8 && b4 !== a5.i || e8 && "" !== fi(e8)) && e8 && e8._style && !pj(e8)) {
            if (pj(e8) || e8._applyShimValidatingVersion !== e8._applyShimNextVersion)
              tj(a5), a5.h && a5.h.transformRules(e8._styleAst, d5), e8._style.textContent = oi(b4, c5.M), qj(e8);
            V3 && (a5 = b4.shadowRoot) && (a5 = a5.querySelector("style")) && (a5.textContent = oi(b4, c5.M));
            c5.M = e8._styleAst;
          }
        }
        function zj(a5, b4) {
          return (b4 = ci(b4).getRootNode().host) ? Ii(b4) || uj(b4) ? b4 : zj(a5, b4) : a5.i;
        }
        function xj(a5, b4, c5) {
          var d5 = zj(a5, b4), e8 = Ii(d5), f4 = e8.R;
          d5 === a5.i || f4 || (xj(a5, d5, e8), f4 = e8.R);
          a5 = Object.create(f4 || null);
          d5 = Vi(b4, c5.M, c5.cssBuild);
          b4 = Ti(e8.M, b4).P;
          Object.assign(a5, d5.eb, b4, d5.mb);
          b4 = c5.K;
          for (var g4 in b4)
            if ((e8 = b4[g4]) || 0 === e8)
              a5[g4] = e8;
          g4 = $i;
          b4 = Object.getOwnPropertyNames(a5);
          for (e8 = 0; e8 < b4.length; e8++)
            d5 = b4[e8], a5[d5] = Ri(g4, a5[d5], a5);
          c5.R = a5;
        }
        v4.styleDocument = function(a5) {
          this.styleSubtree(this.i, a5);
        };
        v4.styleSubtree = function(a5, b4) {
          var c5 = ci(a5), d5 = c5.shadowRoot, e8 = a5 === this.i;
          (d5 || e8) && this.styleElement(a5, b4);
          if (a5 = e8 ? c5 : d5)
            for (a5 = Array.from(a5.querySelectorAll("*")).filter(function(f4) {
              return ci(f4).shadowRoot;
            }), b4 = 0; b4 < a5.length; b4++)
              this.styleSubtree(a5[b4]);
        };
        v4.Qa = function(a5) {
          var b4 = this, c5 = fi(a5);
          c5 !== this.u.cssBuild && (this.u.cssBuild = c5);
          if (!gi(c5)) {
            var d5 = Th(a5);
            Sh(d5, function(e8) {
              if (V3)
                Gi(e8);
              else {
                var f4 = ki;
                e8.selector = e8.parsedSelector;
                Gi(e8);
                e8.selector = e8.G = ri(f4, e8, f4.i, void 0, void 0);
              }
              W2 && "" === c5 && (tj(b4), b4.h && b4.h.transformRule(e8));
            });
            W2 ? a5.textContent = Rh(d5) : this.u.M.rules.push(d5);
          }
        };
        v4.getComputedStyleValue = function(a5, b4) {
          var c5;
          W2 || (c5 = (Ii(a5) || Ii(zj(this, a5))).R[b4]);
          return (c5 = c5 || window.getComputedStyle(a5).getPropertyValue(b4)) ? c5.trim() : "";
        };
        v4.pb = function(a5, b4) {
          var c5 = ci(a5).getRootNode();
          b4 = b4 ? ("string" === typeof b4 ? b4 : String(b4)).split(/\s/) : [];
          c5 = c5.host && c5.host.localName;
          if (!c5) {
            var d5 = a5.getAttribute("class");
            if (d5) {
              d5 = d5.split(/\s/);
              for (var e8 = 0; e8 < d5.length; e8++)
                if (d5[e8] === ki.g) {
                  c5 = d5[e8 + 1];
                  break;
                }
            }
          }
          c5 && b4.push(ki.g, c5);
          W2 || (c5 = Ii(a5)) && c5.L && b4.push($i.g, c5.L);
          bi(a5, b4.join(" "));
        };
        v4.Xa = function(a5) {
          return Ii(a5);
        };
        v4.ob = function(a5, b4) {
          li(a5, b4);
        };
        v4.rb = function(a5, b4) {
          li(a5, b4, true);
        };
        v4.nb = function(a5) {
          return hj(a5);
        };
        v4.$a = function(a5) {
          return gj(a5);
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
          return V3;
        } }, nativeCss: { get: function() {
          return W2;
        } } });
        var Z2 = new Y(), Aj, Bj;
        window.ShadyCSS && (Aj = window.ShadyCSS.ApplyShim, Bj = window.ShadyCSS.CustomStyleInterface);
        window.ShadyCSS = {
          ScopingShim: Z2,
          prepareTemplate: function(a5, b4, c5) {
            Z2.flushCustomStyles();
            Z2.prepareTemplate(a5, b4, c5);
          },
          prepareTemplateDom: function(a5, b4) {
            Z2.prepareTemplateDom(a5, b4);
          },
          prepareTemplateStyles: function(a5, b4, c5) {
            Z2.flushCustomStyles();
            Z2.prepareTemplateStyles(a5, b4, c5);
          },
          styleSubtree: function(a5, b4) {
            Z2.flushCustomStyles();
            Z2.styleSubtree(a5, b4);
          },
          styleElement: function(a5) {
            Z2.flushCustomStyles();
            Z2.styleElement(a5);
          },
          styleDocument: function(a5) {
            Z2.flushCustomStyles();
            Z2.styleDocument(a5);
          },
          flushCustomStyles: function() {
            Z2.flushCustomStyles();
          },
          getComputedStyleValue: function(a5, b4) {
            return Z2.getComputedStyleValue(a5, b4);
          },
          nativeCss: W2,
          nativeShadow: V3,
          cssBuild: Ih,
          disableRuntime: Jh
        };
        Aj && (window.ShadyCSS.ApplyShim = Aj);
        Bj && (window.ShadyCSS.CustomStyleInterface = Bj);
        (function(a5) {
          function b4(t4) {
            "" == t4 && (f4.call(this), this.m = true);
            return t4.toLowerCase();
          }
          function c5(t4) {
            var F2 = t4.charCodeAt(0);
            return 32 < F2 && 127 > F2 && -1 == [34, 35, 60, 62, 63, 96].indexOf(F2) ? t4 : encodeURIComponent(t4);
          }
          function d5(t4) {
            var F2 = t4.charCodeAt(0);
            return 32 < F2 && 127 > F2 && -1 == [34, 35, 60, 62, 96].indexOf(F2) ? t4 : encodeURIComponent(t4);
          }
          function e8(t4, F2, E4) {
            function N2(ha) {
              sa.push(ha);
            }
            var y4 = F2 || "scheme start", X = 0, x4 = "", ta = false, ia = false, sa = [];
            a:
              for (; (void 0 != t4[X - 1] || 0 == X) && !this.m; ) {
                var n8 = t4[X];
                switch (y4) {
                  case "scheme start":
                    if (n8 && q.test(n8))
                      x4 += n8.toLowerCase(), y4 = "scheme";
                    else if (F2) {
                      N2("Invalid scheme.");
                      break a;
                    } else {
                      x4 = "";
                      y4 = "no scheme";
                      continue;
                    }
                    break;
                  case "scheme":
                    if (n8 && H3.test(n8))
                      x4 += n8.toLowerCase();
                    else if (":" == n8) {
                      this.l = x4;
                      x4 = "";
                      if (F2)
                        break a;
                      void 0 !== l7[this.l] && (this.H = true);
                      y4 = "file" == this.l ? "relative" : this.H && E4 && E4.l == this.l ? "relative or authority" : this.H ? "authority first slash" : "scheme data";
                    } else if (F2) {
                      void 0 != n8 && N2("Code point not allowed in scheme: " + n8);
                      break a;
                    } else {
                      x4 = "";
                      X = 0;
                      y4 = "no scheme";
                      continue;
                    }
                    break;
                  case "scheme data":
                    "?" == n8 ? (this.A = "?", y4 = "query") : "#" == n8 ? (this.C = "#", y4 = "fragment") : void 0 != n8 && "	" != n8 && "\n" != n8 && "\r" != n8 && (this.ya += c5(n8));
                    break;
                  case "no scheme":
                    if (E4 && void 0 !== l7[E4.l]) {
                      y4 = "relative";
                      continue;
                    } else
                      N2("Missing scheme."), f4.call(this), this.m = true;
                    break;
                  case "relative or authority":
                    if ("/" == n8 && "/" == t4[X + 1])
                      y4 = "authority ignore slashes";
                    else {
                      N2("Expected /, got: " + n8);
                      y4 = "relative";
                      continue;
                    }
                    break;
                  case "relative":
                    this.H = true;
                    "file" != this.l && (this.l = E4.l);
                    if (void 0 == n8) {
                      this.o = E4.o;
                      this.v = E4.v;
                      this.s = E4.s.slice();
                      this.A = E4.A;
                      this.B = E4.B;
                      this.j = E4.j;
                      break a;
                    } else if ("/" == n8 || "\\" == n8)
                      "\\" == n8 && N2("\\ is an invalid code point."), y4 = "relative slash";
                    else if ("?" == n8)
                      this.o = E4.o, this.v = E4.v, this.s = E4.s.slice(), this.A = "?", this.B = E4.B, this.j = E4.j, y4 = "query";
                    else if ("#" == n8)
                      this.o = E4.o, this.v = E4.v, this.s = E4.s.slice(), this.A = E4.A, this.C = "#", this.B = E4.B, this.j = E4.j, y4 = "fragment";
                    else {
                      y4 = t4[X + 1];
                      var J = t4[X + 2];
                      if ("file" != this.l || !q.test(n8) || ":" != y4 && "|" != y4 || void 0 != J && "/" != J && "\\" != J && "?" != J && "#" != J)
                        this.o = E4.o, this.v = E4.v, this.B = E4.B, this.j = E4.j, this.s = E4.s.slice(), this.s.pop();
                      y4 = "relative path";
                      continue;
                    }
                    break;
                  case "relative slash":
                    if ("/" == n8 || "\\" == n8)
                      "\\" == n8 && N2("\\ is an invalid code point."), y4 = "file" == this.l ? "file host" : "authority ignore slashes";
                    else {
                      "file" != this.l && (this.o = E4.o, this.v = E4.v, this.B = E4.B, this.j = E4.j);
                      y4 = "relative path";
                      continue;
                    }
                    break;
                  case "authority first slash":
                    if ("/" == n8)
                      y4 = "authority second slash";
                    else {
                      N2("Expected '/', got: " + n8);
                      y4 = "authority ignore slashes";
                      continue;
                    }
                    break;
                  case "authority second slash":
                    y4 = "authority ignore slashes";
                    if ("/" != n8) {
                      N2("Expected '/', got: " + n8);
                      continue;
                    }
                    break;
                  case "authority ignore slashes":
                    if ("/" != n8 && "\\" != n8) {
                      y4 = "authority";
                      continue;
                    } else
                      N2("Expected authority, got: " + n8);
                    break;
                  case "authority":
                    if ("@" == n8) {
                      ta && (N2("@ already seen."), x4 += "%40");
                      ta = true;
                      for (n8 = 0; n8 < x4.length; n8++)
                        J = x4[n8], "	" == J || "\n" == J || "\r" == J ? N2("Invalid whitespace in authority.") : ":" == J && null === this.j ? this.j = "" : (J = c5(J), null !== this.j ? this.j += J : this.B += J);
                      x4 = "";
                    } else if (void 0 == n8 || "/" == n8 || "\\" == n8 || "?" == n8 || "#" == n8) {
                      X -= x4.length;
                      x4 = "";
                      y4 = "host";
                      continue;
                    } else
                      x4 += n8;
                    break;
                  case "file host":
                    if (void 0 == n8 || "/" == n8 || "\\" == n8 || "?" == n8 || "#" == n8) {
                      2 != x4.length || !q.test(x4[0]) || ":" != x4[1] && "|" != x4[1] ? (0 != x4.length && (this.o = b4.call(this, x4), x4 = ""), y4 = "relative path start") : y4 = "relative path";
                      continue;
                    } else
                      "	" == n8 || "\n" == n8 || "\r" == n8 ? N2("Invalid whitespace in file host.") : x4 += n8;
                    break;
                  case "host":
                  case "hostname":
                    if (":" != n8 || ia)
                      if (void 0 == n8 || "/" == n8 || "\\" == n8 || "?" == n8 || "#" == n8) {
                        this.o = b4.call(this, x4);
                        x4 = "";
                        y4 = "relative path start";
                        if (F2)
                          break a;
                        continue;
                      } else
                        "	" != n8 && "\n" != n8 && "\r" != n8 ? ("[" == n8 ? ia = true : "]" == n8 && (ia = false), x4 += n8) : N2("Invalid code point in host/hostname: " + n8);
                    else if (this.o = b4.call(this, x4), x4 = "", y4 = "port", "hostname" == F2)
                      break a;
                    break;
                  case "port":
                    if (/[0-9]/.test(n8))
                      x4 += n8;
                    else if (void 0 == n8 || "/" == n8 || "\\" == n8 || "?" == n8 || "#" == n8 || F2) {
                      "" != x4 && (x4 = parseInt(x4, 10), x4 != l7[this.l] && (this.v = x4 + ""), x4 = "");
                      if (F2)
                        break a;
                      y4 = "relative path start";
                      continue;
                    } else
                      "	" == n8 || "\n" == n8 || "\r" == n8 ? N2("Invalid code point in port: " + n8) : (f4.call(this), this.m = true);
                    break;
                  case "relative path start":
                    "\\" == n8 && N2("'\\' not allowed in path.");
                    y4 = "relative path";
                    if ("/" != n8 && "\\" != n8)
                      continue;
                    break;
                  case "relative path":
                    if (void 0 != n8 && "/" != n8 && "\\" != n8 && (F2 || "?" != n8 && "#" != n8))
                      "	" != n8 && "\n" != n8 && "\r" != n8 && (x4 += c5(n8));
                    else {
                      "\\" == n8 && N2("\\ not allowed in relative path.");
                      if (J = m4[x4.toLowerCase()])
                        x4 = J;
                      ".." == x4 ? (this.s.pop(), "/" != n8 && "\\" != n8 && this.s.push("")) : "." == x4 && "/" != n8 && "\\" != n8 ? this.s.push("") : "." != x4 && ("file" == this.l && 0 == this.s.length && 2 == x4.length && q.test(x4[0]) && "|" == x4[1] && (x4 = x4[0] + ":"), this.s.push(x4));
                      x4 = "";
                      "?" == n8 ? (this.A = "?", y4 = "query") : "#" == n8 && (this.C = "#", y4 = "fragment");
                    }
                    break;
                  case "query":
                    F2 || "#" != n8 ? void 0 != n8 && "	" != n8 && "\n" != n8 && "\r" != n8 && (this.A += d5(n8)) : (this.C = "#", y4 = "fragment");
                    break;
                  case "fragment":
                    void 0 != n8 && "	" != n8 && "\n" != n8 && "\r" != n8 && (this.C += n8);
                }
                X++;
              }
          }
          function f4() {
            this.B = this.ya = this.l = "";
            this.j = null;
            this.v = this.o = "";
            this.s = [];
            this.C = this.A = "";
            this.H = this.m = false;
          }
          function g4(t4, F2) {
            void 0 === F2 || F2 instanceof g4 || (F2 = new g4(String(F2)));
            this.g = t4;
            f4.call(this);
            e8.call(this, this.g.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""), null, F2);
          }
          var h5 = false;
          try {
            var k3 = new URL("b", "http://a");
            k3.pathname = "c%20d";
            h5 = "http://a/c%20d" === k3.href;
          } catch (t4) {
          }
          if (!h5) {
            var l7 = /* @__PURE__ */ Object.create(null);
            l7.ftp = 21;
            l7.file = 0;
            l7.gopher = 70;
            l7.http = 80;
            l7.https = 443;
            l7.ws = 80;
            l7.wss = 443;
            var m4 = /* @__PURE__ */ Object.create(null);
            m4["%2e"] = ".";
            m4[".%2e"] = "..";
            m4["%2e."] = "..";
            m4["%2e%2e"] = "..";
            var q = /[a-zA-Z]/, H3 = /[a-zA-Z0-9+\-.]/;
            g4.prototype = { toString: function() {
              return this.href;
            }, get href() {
              if (this.m)
                return this.g;
              var t4 = "";
              if ("" != this.B || null != this.j)
                t4 = this.B + (null != this.j ? ":" + this.j : "") + "@";
              return this.protocol + (this.H ? "//" + t4 + this.host : "") + this.pathname + this.A + this.C;
            }, set href(t4) {
              f4.call(this);
              e8.call(this, t4);
            }, get protocol() {
              return this.l + ":";
            }, set protocol(t4) {
              this.m || e8.call(this, t4 + ":", "scheme start");
            }, get host() {
              return this.m ? "" : this.v ? this.o + ":" + this.v : this.o;
            }, set host(t4) {
              !this.m && this.H && e8.call(this, t4, "host");
            }, get hostname() {
              return this.o;
            }, set hostname(t4) {
              !this.m && this.H && e8.call(this, t4, "hostname");
            }, get port() {
              return this.v;
            }, set port(t4) {
              !this.m && this.H && e8.call(this, t4, "port");
            }, get pathname() {
              return this.m ? "" : this.H ? "/" + this.s.join("/") : this.ya;
            }, set pathname(t4) {
              !this.m && this.H && (this.s = [], e8.call(this, t4, "relative path start"));
            }, get search() {
              return this.m || !this.A || "?" == this.A ? "" : this.A;
            }, set search(t4) {
              !this.m && this.H && (this.A = "?", "?" == t4[0] && (t4 = t4.slice(1)), e8.call(this, t4, "query"));
            }, get hash() {
              return this.m || !this.C || "#" == this.C ? "" : this.C;
            }, set hash(t4) {
              this.m || (t4 ? (this.C = "#", "#" == t4[0] && (t4 = t4.slice(1)), e8.call(this, t4, "fragment")) : this.C = "");
            }, get origin() {
              var t4;
              if (this.m || !this.l)
                return "";
              switch (this.l) {
                case "data":
                case "file":
                case "javascript":
                case "mailto":
                  return "null";
              }
              return (t4 = this.host) ? this.l + "://" + t4 : "";
            } };
            var C3 = a5.URL;
            C3 && (g4.createObjectURL = function(t4) {
              return C3.createObjectURL.apply(
                C3,
                arguments
              );
            }, g4.revokeObjectURL = function(t4) {
              C3.revokeObjectURL(t4);
            });
            a5.URL = g4;
          }
        })(window);
        var Cj = window.customElements, Dj = false, Ej = null;
        Cj.polyfillWrapFlushCallback && Cj.polyfillWrapFlushCallback(function(a5) {
          Ej = a5;
          Dj && a5();
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

  // node_modules/@braintree/sanitize-url/dist/index.js
  var require_dist = __commonJS({
    "node_modules/@braintree/sanitize-url/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.sanitizeUrl = void 0;
      var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
      var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
      var htmlCtrlEntityRegex = /&(newline|tab);/gi;
      var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
      var urlSchemeRegex = /^.+(:|&colon;)/gim;
      var relativeFirstCharacters = [".", "/"];
      function isRelativeUrlWithoutProtocol(url) {
        return relativeFirstCharacters.indexOf(url[0]) > -1;
      }
      function decodeHtmlCharacters(str) {
        return str.replace(htmlEntitiesRegex, function(match, dec) {
          return String.fromCharCode(dec);
        });
      }
      function sanitizeUrl2(url) {
        var sanitizedUrl = decodeHtmlCharacters(url || "").replace(htmlCtrlEntityRegex, "").replace(ctrlCharactersRegex, "").trim();
        if (!sanitizedUrl) {
          return "about:blank";
        }
        if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
          return sanitizedUrl;
        }
        var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
        if (!urlSchemeParseResults) {
          return sanitizedUrl;
        }
        var urlScheme = urlSchemeParseResults[0];
        if (invalidProtocolRegex.test(urlScheme)) {
          return "about:blank";
        }
        return sanitizedUrl;
      }
      exports.sanitizeUrl = sanitizeUrl2;
    }
  });

  // node_modules/@mozilla/readability/Readability.js
  var require_Readability = __commonJS({
    "node_modules/@mozilla/readability/Readability.js"(exports, module2) {
      function Readability2(doc, options) {
        if (options && options.documentElement) {
          doc = options;
          options = arguments[2];
        } else if (!doc || !doc.documentElement) {
          throw new Error("First argument to Readability constructor should be a document object.");
        }
        options = options || {};
        this._doc = doc;
        this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__;
        this._articleTitle = null;
        this._articleByline = null;
        this._articleDir = null;
        this._articleSiteName = null;
        this._attempts = [];
        this._debug = !!options.debug;
        this._maxElemsToParse = options.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE;
        this._nbTopCandidates = options.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES;
        this._charThreshold = options.charThreshold || this.DEFAULT_CHAR_THRESHOLD;
        this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(options.classesToPreserve || []);
        this._keepClasses = !!options.keepClasses;
        this._serializer = options.serializer || function(el) {
          return el.innerHTML;
        };
        this._disableJSONLD = !!options.disableJSONLD;
        this._flags = this.FLAG_STRIP_UNLIKELYS | this.FLAG_WEIGHT_CLASSES | this.FLAG_CLEAN_CONDITIONALLY;
        if (this._debug) {
          let logNode = function(node) {
            if (node.nodeType == node.TEXT_NODE) {
              return `${node.nodeName} ("${node.textContent}")`;
            }
            let attrPairs = Array.from(node.attributes || [], function(attr) {
              return `${attr.name}="${attr.value}"`;
            }).join(" ");
            return `<${node.localName} ${attrPairs}>`;
          };
          this.log = function() {
            if (typeof dump !== "undefined") {
              var msg = Array.prototype.map.call(arguments, function(x4) {
                return x4 && x4.nodeName ? logNode(x4) : x4;
              }).join(" ");
              dump("Reader: (Readability) " + msg + "\n");
            } else if (typeof console !== "undefined") {
              let args = Array.from(arguments, (arg) => {
                if (arg && arg.nodeType == this.ELEMENT_NODE) {
                  return logNode(arg);
                }
                return arg;
              });
              args.unshift("Reader: (Readability)");
              console.log.apply(console, args);
            }
          };
        } else {
          this.log = function() {
          };
        }
      }
      Readability2.prototype = {
        FLAG_STRIP_UNLIKELYS: 1,
        FLAG_WEIGHT_CLASSES: 2,
        FLAG_CLEAN_CONDITIONALLY: 4,
        ELEMENT_NODE: 1,
        TEXT_NODE: 3,
        DEFAULT_MAX_ELEMS_TO_PARSE: 0,
        DEFAULT_N_TOP_CANDIDATES: 5,
        DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),
        DEFAULT_CHAR_THRESHOLD: 500,
        REGEXPS: {
          unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
          okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
          positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
          negative: /-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
          extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
          byline: /byline|author|dateline|writtenby|p-author/i,
          replaceFonts: /<(\/?)font[^>]*>/gi,
          normalize: /\s{2,}/g,
          videos: /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
          shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
          nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
          prevLink: /(prev|earl|old|new|<|«)/i,
          tokenize: /\W+/g,
          whitespace: /^\s*$/,
          hasContent: /\S$/,
          hashUrl: /^#.+/,
          srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
          b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,
          jsonLdArticleTypes: /^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/
        },
        UNLIKELY_ROLES: ["menu", "menubar", "complementary", "navigation", "alert", "alertdialog", "dialog"],
        DIV_TO_P_ELEMS: /* @__PURE__ */ new Set(["BLOCKQUOTE", "DL", "DIV", "IMG", "OL", "P", "PRE", "TABLE", "UL"]),
        ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],
        PRESENTATIONAL_ATTRIBUTES: ["align", "background", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "hspace", "rules", "style", "valign", "vspace"],
        DEPRECATED_SIZE_ATTRIBUTE_ELEMS: ["TABLE", "TH", "TD", "HR", "PRE"],
        PHRASING_ELEMS: [
          "ABBR",
          "AUDIO",
          "B",
          "BDO",
          "BR",
          "BUTTON",
          "CITE",
          "CODE",
          "DATA",
          "DATALIST",
          "DFN",
          "EM",
          "EMBED",
          "I",
          "IMG",
          "INPUT",
          "KBD",
          "LABEL",
          "MARK",
          "MATH",
          "METER",
          "NOSCRIPT",
          "OBJECT",
          "OUTPUT",
          "PROGRESS",
          "Q",
          "RUBY",
          "SAMP",
          "SCRIPT",
          "SELECT",
          "SMALL",
          "SPAN",
          "STRONG",
          "SUB",
          "SUP",
          "TEXTAREA",
          "TIME",
          "VAR",
          "WBR"
        ],
        CLASSES_TO_PRESERVE: ["page"],
        HTML_ESCAPE_MAP: {
          "lt": "<",
          "gt": ">",
          "amp": "&",
          "quot": '"',
          "apos": "'"
        },
        _postProcessContent: function(articleContent) {
          this._fixRelativeUris(articleContent);
          this._simplifyNestedElements(articleContent);
          if (!this._keepClasses) {
            this._cleanClasses(articleContent);
          }
        },
        _removeNodes: function(nodeList, filterFn) {
          if (this._docJSDOMParser && nodeList._isLiveNodeList) {
            throw new Error("Do not pass live node lists to _removeNodes");
          }
          for (var i6 = nodeList.length - 1; i6 >= 0; i6--) {
            var node = nodeList[i6];
            var parentNode = node.parentNode;
            if (parentNode) {
              if (!filterFn || filterFn.call(this, node, i6, nodeList)) {
                parentNode.removeChild(node);
              }
            }
          }
        },
        _replaceNodeTags: function(nodeList, newTagName) {
          if (this._docJSDOMParser && nodeList._isLiveNodeList) {
            throw new Error("Do not pass live node lists to _replaceNodeTags");
          }
          for (const node of nodeList) {
            this._setNodeTag(node, newTagName);
          }
        },
        _forEachNode: function(nodeList, fn) {
          Array.prototype.forEach.call(nodeList, fn, this);
        },
        _findNode: function(nodeList, fn) {
          return Array.prototype.find.call(nodeList, fn, this);
        },
        _someNode: function(nodeList, fn) {
          return Array.prototype.some.call(nodeList, fn, this);
        },
        _everyNode: function(nodeList, fn) {
          return Array.prototype.every.call(nodeList, fn, this);
        },
        _concatNodeLists: function() {
          var slice = Array.prototype.slice;
          var args = slice.call(arguments);
          var nodeLists = args.map(function(list) {
            return slice.call(list);
          });
          return Array.prototype.concat.apply([], nodeLists);
        },
        _getAllNodesWithTag: function(node, tagNames) {
          if (node.querySelectorAll) {
            return node.querySelectorAll(tagNames.join(","));
          }
          return [].concat.apply([], tagNames.map(function(tag) {
            var collection = node.getElementsByTagName(tag);
            return Array.isArray(collection) ? collection : Array.from(collection);
          }));
        },
        _cleanClasses: function(node) {
          var classesToPreserve = this._classesToPreserve;
          var className = (node.getAttribute("class") || "").split(/\s+/).filter(function(cls) {
            return classesToPreserve.indexOf(cls) != -1;
          }).join(" ");
          if (className) {
            node.setAttribute("class", className);
          } else {
            node.removeAttribute("class");
          }
          for (node = node.firstElementChild; node; node = node.nextElementSibling) {
            this._cleanClasses(node);
          }
        },
        _fixRelativeUris: function(articleContent) {
          var baseURI = this._doc.baseURI;
          var documentURI = this._doc.documentURI;
          function toAbsoluteURI(uri) {
            if (baseURI == documentURI && uri.charAt(0) == "#") {
              return uri;
            }
            try {
              return new URL(uri, baseURI).href;
            } catch (ex) {
            }
            return uri;
          }
          var links = this._getAllNodesWithTag(articleContent, ["a"]);
          this._forEachNode(links, function(link) {
            var href = link.getAttribute("href");
            if (href) {
              if (href.indexOf("javascript:") === 0) {
                if (link.childNodes.length === 1 && link.childNodes[0].nodeType === this.TEXT_NODE) {
                  var text = this._doc.createTextNode(link.textContent);
                  link.parentNode.replaceChild(text, link);
                } else {
                  var container = this._doc.createElement("span");
                  while (link.firstChild) {
                    container.appendChild(link.firstChild);
                  }
                  link.parentNode.replaceChild(container, link);
                }
              } else {
                link.setAttribute("href", toAbsoluteURI(href));
              }
            }
          });
          var medias = this._getAllNodesWithTag(articleContent, [
            "img",
            "picture",
            "figure",
            "video",
            "audio",
            "source"
          ]);
          this._forEachNode(medias, function(media) {
            var src = media.getAttribute("src");
            var poster = media.getAttribute("poster");
            var srcset = media.getAttribute("srcset");
            if (src) {
              media.setAttribute("src", toAbsoluteURI(src));
            }
            if (poster) {
              media.setAttribute("poster", toAbsoluteURI(poster));
            }
            if (srcset) {
              var newSrcset = srcset.replace(this.REGEXPS.srcsetUrl, function(_2, p1, p22, p32) {
                return toAbsoluteURI(p1) + (p22 || "") + p32;
              });
              media.setAttribute("srcset", newSrcset);
            }
          });
        },
        _simplifyNestedElements: function(articleContent) {
          var node = articleContent;
          while (node) {
            if (node.parentNode && ["DIV", "SECTION"].includes(node.tagName) && !(node.id && node.id.startsWith("readability"))) {
              if (this._isElementWithoutContent(node)) {
                node = this._removeAndGetNext(node);
                continue;
              } else if (this._hasSingleTagInsideElement(node, "DIV") || this._hasSingleTagInsideElement(node, "SECTION")) {
                var child = node.children[0];
                for (var i6 = 0; i6 < node.attributes.length; i6++) {
                  child.setAttribute(node.attributes[i6].name, node.attributes[i6].value);
                }
                node.parentNode.replaceChild(child, node);
                node = child;
                continue;
              }
            }
            node = this._getNextNode(node);
          }
        },
        _getArticleTitle: function() {
          var doc = this._doc;
          var curTitle = "";
          var origTitle = "";
          try {
            curTitle = origTitle = doc.title.trim();
            if (typeof curTitle !== "string")
              curTitle = origTitle = this._getInnerText(doc.getElementsByTagName("title")[0]);
          } catch (e8) {
          }
          var titleHadHierarchicalSeparators = false;
          function wordCount(str) {
            return str.split(/\s+/).length;
          }
          if (/ [\|\-\\\/>»] /.test(curTitle)) {
            titleHadHierarchicalSeparators = / [\\\/>»] /.test(curTitle);
            curTitle = origTitle.replace(/(.*)[\|\-\\\/>»] .*/gi, "$1");
            if (wordCount(curTitle) < 3)
              curTitle = origTitle.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, "$1");
          } else if (curTitle.indexOf(": ") !== -1) {
            var headings = this._concatNodeLists(
              doc.getElementsByTagName("h1"),
              doc.getElementsByTagName("h2")
            );
            var trimmedTitle = curTitle.trim();
            var match = this._someNode(headings, function(heading) {
              return heading.textContent.trim() === trimmedTitle;
            });
            if (!match) {
              curTitle = origTitle.substring(origTitle.lastIndexOf(":") + 1);
              if (wordCount(curTitle) < 3) {
                curTitle = origTitle.substring(origTitle.indexOf(":") + 1);
              } else if (wordCount(origTitle.substr(0, origTitle.indexOf(":"))) > 5) {
                curTitle = origTitle;
              }
            }
          } else if (curTitle.length > 150 || curTitle.length < 15) {
            var hOnes = doc.getElementsByTagName("h1");
            if (hOnes.length === 1)
              curTitle = this._getInnerText(hOnes[0]);
          }
          curTitle = curTitle.trim().replace(this.REGEXPS.normalize, " ");
          var curTitleWordCount = wordCount(curTitle);
          if (curTitleWordCount <= 4 && (!titleHadHierarchicalSeparators || curTitleWordCount != wordCount(origTitle.replace(/[\|\-\\\/>»]+/g, "")) - 1)) {
            curTitle = origTitle;
          }
          return curTitle;
        },
        _prepDocument: function() {
          var doc = this._doc;
          this._removeNodes(this._getAllNodesWithTag(doc, ["style"]));
          if (doc.body) {
            this._replaceBrs(doc.body);
          }
          this._replaceNodeTags(this._getAllNodesWithTag(doc, ["font"]), "SPAN");
        },
        _nextNode: function(node) {
          var next = node;
          while (next && next.nodeType != this.ELEMENT_NODE && this.REGEXPS.whitespace.test(next.textContent)) {
            next = next.nextSibling;
          }
          return next;
        },
        _replaceBrs: function(elem) {
          this._forEachNode(this._getAllNodesWithTag(elem, ["br"]), function(br) {
            var next = br.nextSibling;
            var replaced = false;
            while ((next = this._nextNode(next)) && next.tagName == "BR") {
              replaced = true;
              var brSibling = next.nextSibling;
              next.parentNode.removeChild(next);
              next = brSibling;
            }
            if (replaced) {
              var p4 = this._doc.createElement("p");
              br.parentNode.replaceChild(p4, br);
              next = p4.nextSibling;
              while (next) {
                if (next.tagName == "BR") {
                  var nextElem = this._nextNode(next.nextSibling);
                  if (nextElem && nextElem.tagName == "BR")
                    break;
                }
                if (!this._isPhrasingContent(next))
                  break;
                var sibling = next.nextSibling;
                p4.appendChild(next);
                next = sibling;
              }
              while (p4.lastChild && this._isWhitespace(p4.lastChild)) {
                p4.removeChild(p4.lastChild);
              }
              if (p4.parentNode.tagName === "P")
                this._setNodeTag(p4.parentNode, "DIV");
            }
          });
        },
        _setNodeTag: function(node, tag) {
          this.log("_setNodeTag", node, tag);
          if (this._docJSDOMParser) {
            node.localName = tag.toLowerCase();
            node.tagName = tag.toUpperCase();
            return node;
          }
          var replacement = node.ownerDocument.createElement(tag);
          while (node.firstChild) {
            replacement.appendChild(node.firstChild);
          }
          node.parentNode.replaceChild(replacement, node);
          if (node.readability)
            replacement.readability = node.readability;
          for (var i6 = 0; i6 < node.attributes.length; i6++) {
            try {
              replacement.setAttribute(node.attributes[i6].name, node.attributes[i6].value);
            } catch (ex) {
            }
          }
          return replacement;
        },
        _prepArticle: function(articleContent) {
          this._cleanStyles(articleContent);
          this._markDataTables(articleContent);
          this._fixLazyImages(articleContent);
          this._cleanConditionally(articleContent, "form");
          this._cleanConditionally(articleContent, "fieldset");
          this._clean(articleContent, "object");
          this._clean(articleContent, "embed");
          this._clean(articleContent, "footer");
          this._clean(articleContent, "link");
          this._clean(articleContent, "aside");
          var shareElementThreshold = this.DEFAULT_CHAR_THRESHOLD;
          this._forEachNode(articleContent.children, function(topCandidate) {
            this._cleanMatchedNodes(topCandidate, function(node, matchString) {
              return this.REGEXPS.shareElements.test(matchString) && node.textContent.length < shareElementThreshold;
            });
          });
          this._clean(articleContent, "iframe");
          this._clean(articleContent, "input");
          this._clean(articleContent, "textarea");
          this._clean(articleContent, "select");
          this._clean(articleContent, "button");
          this._cleanHeaders(articleContent);
          this._cleanConditionally(articleContent, "table");
          this._cleanConditionally(articleContent, "ul");
          this._cleanConditionally(articleContent, "div");
          this._replaceNodeTags(this._getAllNodesWithTag(articleContent, ["h1"]), "h2");
          this._removeNodes(this._getAllNodesWithTag(articleContent, ["p"]), function(paragraph) {
            var imgCount = paragraph.getElementsByTagName("img").length;
            var embedCount = paragraph.getElementsByTagName("embed").length;
            var objectCount = paragraph.getElementsByTagName("object").length;
            var iframeCount = paragraph.getElementsByTagName("iframe").length;
            var totalCount = imgCount + embedCount + objectCount + iframeCount;
            return totalCount === 0 && !this._getInnerText(paragraph, false);
          });
          this._forEachNode(this._getAllNodesWithTag(articleContent, ["br"]), function(br) {
            var next = this._nextNode(br.nextSibling);
            if (next && next.tagName == "P")
              br.parentNode.removeChild(br);
          });
          this._forEachNode(this._getAllNodesWithTag(articleContent, ["table"]), function(table) {
            var tbody = this._hasSingleTagInsideElement(table, "TBODY") ? table.firstElementChild : table;
            if (this._hasSingleTagInsideElement(tbody, "TR")) {
              var row = tbody.firstElementChild;
              if (this._hasSingleTagInsideElement(row, "TD")) {
                var cell = row.firstElementChild;
                cell = this._setNodeTag(cell, this._everyNode(cell.childNodes, this._isPhrasingContent) ? "P" : "DIV");
                table.parentNode.replaceChild(cell, table);
              }
            }
          });
        },
        _initializeNode: function(node) {
          node.readability = { "contentScore": 0 };
          switch (node.tagName) {
            case "DIV":
              node.readability.contentScore += 5;
              break;
            case "PRE":
            case "TD":
            case "BLOCKQUOTE":
              node.readability.contentScore += 3;
              break;
            case "ADDRESS":
            case "OL":
            case "UL":
            case "DL":
            case "DD":
            case "DT":
            case "LI":
            case "FORM":
              node.readability.contentScore -= 3;
              break;
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
            case "TH":
              node.readability.contentScore -= 5;
              break;
          }
          node.readability.contentScore += this._getClassWeight(node);
        },
        _removeAndGetNext: function(node) {
          var nextNode = this._getNextNode(node, true);
          node.parentNode.removeChild(node);
          return nextNode;
        },
        _getNextNode: function(node, ignoreSelfAndKids) {
          if (!ignoreSelfAndKids && node.firstElementChild) {
            return node.firstElementChild;
          }
          if (node.nextElementSibling) {
            return node.nextElementSibling;
          }
          do {
            node = node.parentNode;
          } while (node && !node.nextElementSibling);
          return node && node.nextElementSibling;
        },
        _textSimilarity: function(textA, textB) {
          var tokensA = textA.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
          var tokensB = textB.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
          if (!tokensA.length || !tokensB.length) {
            return 0;
          }
          var uniqTokensB = tokensB.filter((token) => !tokensA.includes(token));
          var distanceB = uniqTokensB.join(" ").length / tokensB.join(" ").length;
          return 1 - distanceB;
        },
        _checkByline: function(node, matchString) {
          if (this._articleByline) {
            return false;
          }
          if (node.getAttribute !== void 0) {
            var rel = node.getAttribute("rel");
            var itemprop = node.getAttribute("itemprop");
          }
          if ((rel === "author" || itemprop && itemprop.indexOf("author") !== -1 || this.REGEXPS.byline.test(matchString)) && this._isValidByline(node.textContent)) {
            this._articleByline = node.textContent.trim();
            return true;
          }
          return false;
        },
        _getNodeAncestors: function(node, maxDepth) {
          maxDepth = maxDepth || 0;
          var i6 = 0, ancestors = [];
          while (node.parentNode) {
            ancestors.push(node.parentNode);
            if (maxDepth && ++i6 === maxDepth)
              break;
            node = node.parentNode;
          }
          return ancestors;
        },
        _grabArticle: function(page) {
          this.log("**** grabArticle ****");
          var doc = this._doc;
          var isPaging = page !== null;
          page = page ? page : this._doc.body;
          if (!page) {
            this.log("No body found in document. Abort.");
            return null;
          }
          var pageCacheHtml = page.innerHTML;
          while (true) {
            this.log("Starting grabArticle loop");
            var stripUnlikelyCandidates = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS);
            var elementsToScore = [];
            var node = this._doc.documentElement;
            let shouldRemoveTitleHeader = true;
            while (node) {
              if (node.tagName === "HTML") {
                this._articleLang = node.getAttribute("lang");
              }
              var matchString = node.className + " " + node.id;
              if (!this._isProbablyVisible(node)) {
                this.log("Removing hidden node - " + matchString);
                node = this._removeAndGetNext(node);
                continue;
              }
              if (this._checkByline(node, matchString)) {
                node = this._removeAndGetNext(node);
                continue;
              }
              if (shouldRemoveTitleHeader && this._headerDuplicatesTitle(node)) {
                this.log("Removing header: ", node.textContent.trim(), this._articleTitle.trim());
                shouldRemoveTitleHeader = false;
                node = this._removeAndGetNext(node);
                continue;
              }
              if (stripUnlikelyCandidates) {
                if (this.REGEXPS.unlikelyCandidates.test(matchString) && !this.REGEXPS.okMaybeItsACandidate.test(matchString) && !this._hasAncestorTag(node, "table") && !this._hasAncestorTag(node, "code") && node.tagName !== "BODY" && node.tagName !== "A") {
                  this.log("Removing unlikely candidate - " + matchString);
                  node = this._removeAndGetNext(node);
                  continue;
                }
                if (this.UNLIKELY_ROLES.includes(node.getAttribute("role"))) {
                  this.log("Removing content with role " + node.getAttribute("role") + " - " + matchString);
                  node = this._removeAndGetNext(node);
                  continue;
                }
              }
              if ((node.tagName === "DIV" || node.tagName === "SECTION" || node.tagName === "HEADER" || node.tagName === "H1" || node.tagName === "H2" || node.tagName === "H3" || node.tagName === "H4" || node.tagName === "H5" || node.tagName === "H6") && this._isElementWithoutContent(node)) {
                node = this._removeAndGetNext(node);
                continue;
              }
              if (this.DEFAULT_TAGS_TO_SCORE.indexOf(node.tagName) !== -1) {
                elementsToScore.push(node);
              }
              if (node.tagName === "DIV") {
                var p4 = null;
                var childNode = node.firstChild;
                while (childNode) {
                  var nextSibling = childNode.nextSibling;
                  if (this._isPhrasingContent(childNode)) {
                    if (p4 !== null) {
                      p4.appendChild(childNode);
                    } else if (!this._isWhitespace(childNode)) {
                      p4 = doc.createElement("p");
                      node.replaceChild(p4, childNode);
                      p4.appendChild(childNode);
                    }
                  } else if (p4 !== null) {
                    while (p4.lastChild && this._isWhitespace(p4.lastChild)) {
                      p4.removeChild(p4.lastChild);
                    }
                    p4 = null;
                  }
                  childNode = nextSibling;
                }
                if (this._hasSingleTagInsideElement(node, "P") && this._getLinkDensity(node) < 0.25) {
                  var newNode = node.children[0];
                  node.parentNode.replaceChild(newNode, node);
                  node = newNode;
                  elementsToScore.push(node);
                } else if (!this._hasChildBlockElement(node)) {
                  node = this._setNodeTag(node, "P");
                  elementsToScore.push(node);
                }
              }
              node = this._getNextNode(node);
            }
            var candidates = [];
            this._forEachNode(elementsToScore, function(elementToScore) {
              if (!elementToScore.parentNode || typeof elementToScore.parentNode.tagName === "undefined")
                return;
              var innerText = this._getInnerText(elementToScore);
              if (innerText.length < 25)
                return;
              var ancestors2 = this._getNodeAncestors(elementToScore, 5);
              if (ancestors2.length === 0)
                return;
              var contentScore = 0;
              contentScore += 1;
              contentScore += innerText.split(",").length;
              contentScore += Math.min(Math.floor(innerText.length / 100), 3);
              this._forEachNode(ancestors2, function(ancestor, level) {
                if (!ancestor.tagName || !ancestor.parentNode || typeof ancestor.parentNode.tagName === "undefined")
                  return;
                if (typeof ancestor.readability === "undefined") {
                  this._initializeNode(ancestor);
                  candidates.push(ancestor);
                }
                if (level === 0)
                  var scoreDivider = 1;
                else if (level === 1)
                  scoreDivider = 2;
                else
                  scoreDivider = level * 3;
                ancestor.readability.contentScore += contentScore / scoreDivider;
              });
            });
            var topCandidates = [];
            for (var c5 = 0, cl = candidates.length; c5 < cl; c5 += 1) {
              var candidate = candidates[c5];
              var candidateScore = candidate.readability.contentScore * (1 - this._getLinkDensity(candidate));
              candidate.readability.contentScore = candidateScore;
              this.log("Candidate:", candidate, "with score " + candidateScore);
              for (var t4 = 0; t4 < this._nbTopCandidates; t4++) {
                var aTopCandidate = topCandidates[t4];
                if (!aTopCandidate || candidateScore > aTopCandidate.readability.contentScore) {
                  topCandidates.splice(t4, 0, candidate);
                  if (topCandidates.length > this._nbTopCandidates)
                    topCandidates.pop();
                  break;
                }
              }
            }
            var topCandidate = topCandidates[0] || null;
            var neededToCreateTopCandidate = false;
            var parentOfTopCandidate;
            if (topCandidate === null || topCandidate.tagName === "BODY") {
              topCandidate = doc.createElement("DIV");
              neededToCreateTopCandidate = true;
              while (page.firstChild) {
                this.log("Moving child out:", page.firstChild);
                topCandidate.appendChild(page.firstChild);
              }
              page.appendChild(topCandidate);
              this._initializeNode(topCandidate);
            } else if (topCandidate) {
              var alternativeCandidateAncestors = [];
              for (var i6 = 1; i6 < topCandidates.length; i6++) {
                if (topCandidates[i6].readability.contentScore / topCandidate.readability.contentScore >= 0.75) {
                  alternativeCandidateAncestors.push(this._getNodeAncestors(topCandidates[i6]));
                }
              }
              var MINIMUM_TOPCANDIDATES = 3;
              if (alternativeCandidateAncestors.length >= MINIMUM_TOPCANDIDATES) {
                parentOfTopCandidate = topCandidate.parentNode;
                while (parentOfTopCandidate.tagName !== "BODY") {
                  var listsContainingThisAncestor = 0;
                  for (var ancestorIndex = 0; ancestorIndex < alternativeCandidateAncestors.length && listsContainingThisAncestor < MINIMUM_TOPCANDIDATES; ancestorIndex++) {
                    listsContainingThisAncestor += Number(alternativeCandidateAncestors[ancestorIndex].includes(parentOfTopCandidate));
                  }
                  if (listsContainingThisAncestor >= MINIMUM_TOPCANDIDATES) {
                    topCandidate = parentOfTopCandidate;
                    break;
                  }
                  parentOfTopCandidate = parentOfTopCandidate.parentNode;
                }
              }
              if (!topCandidate.readability) {
                this._initializeNode(topCandidate);
              }
              parentOfTopCandidate = topCandidate.parentNode;
              var lastScore = topCandidate.readability.contentScore;
              var scoreThreshold = lastScore / 3;
              while (parentOfTopCandidate.tagName !== "BODY") {
                if (!parentOfTopCandidate.readability) {
                  parentOfTopCandidate = parentOfTopCandidate.parentNode;
                  continue;
                }
                var parentScore = parentOfTopCandidate.readability.contentScore;
                if (parentScore < scoreThreshold)
                  break;
                if (parentScore > lastScore) {
                  topCandidate = parentOfTopCandidate;
                  break;
                }
                lastScore = parentOfTopCandidate.readability.contentScore;
                parentOfTopCandidate = parentOfTopCandidate.parentNode;
              }
              parentOfTopCandidate = topCandidate.parentNode;
              while (parentOfTopCandidate.tagName != "BODY" && parentOfTopCandidate.children.length == 1) {
                topCandidate = parentOfTopCandidate;
                parentOfTopCandidate = topCandidate.parentNode;
              }
              if (!topCandidate.readability) {
                this._initializeNode(topCandidate);
              }
            }
            var articleContent = doc.createElement("DIV");
            if (isPaging)
              articleContent.id = "readability-content";
            var siblingScoreThreshold = Math.max(10, topCandidate.readability.contentScore * 0.2);
            parentOfTopCandidate = topCandidate.parentNode;
            var siblings = parentOfTopCandidate.children;
            for (var s7 = 0, sl = siblings.length; s7 < sl; s7++) {
              var sibling = siblings[s7];
              var append = false;
              this.log("Looking at sibling node:", sibling, sibling.readability ? "with score " + sibling.readability.contentScore : "");
              this.log("Sibling has score", sibling.readability ? sibling.readability.contentScore : "Unknown");
              if (sibling === topCandidate) {
                append = true;
              } else {
                var contentBonus = 0;
                if (sibling.className === topCandidate.className && topCandidate.className !== "")
                  contentBonus += topCandidate.readability.contentScore * 0.2;
                if (sibling.readability && sibling.readability.contentScore + contentBonus >= siblingScoreThreshold) {
                  append = true;
                } else if (sibling.nodeName === "P") {
                  var linkDensity = this._getLinkDensity(sibling);
                  var nodeContent = this._getInnerText(sibling);
                  var nodeLength = nodeContent.length;
                  if (nodeLength > 80 && linkDensity < 0.25) {
                    append = true;
                  } else if (nodeLength < 80 && nodeLength > 0 && linkDensity === 0 && nodeContent.search(/\.( |$)/) !== -1) {
                    append = true;
                  }
                }
              }
              if (append) {
                this.log("Appending node:", sibling);
                if (this.ALTER_TO_DIV_EXCEPTIONS.indexOf(sibling.nodeName) === -1) {
                  this.log("Altering sibling:", sibling, "to div.");
                  sibling = this._setNodeTag(sibling, "DIV");
                }
                articleContent.appendChild(sibling);
                siblings = parentOfTopCandidate.children;
                s7 -= 1;
                sl -= 1;
              }
            }
            if (this._debug)
              this.log("Article content pre-prep: " + articleContent.innerHTML);
            this._prepArticle(articleContent);
            if (this._debug)
              this.log("Article content post-prep: " + articleContent.innerHTML);
            if (neededToCreateTopCandidate) {
              topCandidate.id = "readability-page-1";
              topCandidate.className = "page";
            } else {
              var div = doc.createElement("DIV");
              div.id = "readability-page-1";
              div.className = "page";
              while (articleContent.firstChild) {
                div.appendChild(articleContent.firstChild);
              }
              articleContent.appendChild(div);
            }
            if (this._debug)
              this.log("Article content after paging: " + articleContent.innerHTML);
            var parseSuccessful = true;
            var textLength = this._getInnerText(articleContent, true).length;
            if (textLength < this._charThreshold) {
              parseSuccessful = false;
              page.innerHTML = pageCacheHtml;
              if (this._flagIsActive(this.FLAG_STRIP_UNLIKELYS)) {
                this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
                this._attempts.push({ articleContent, textLength });
              } else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) {
                this._removeFlag(this.FLAG_WEIGHT_CLASSES);
                this._attempts.push({ articleContent, textLength });
              } else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) {
                this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
                this._attempts.push({ articleContent, textLength });
              } else {
                this._attempts.push({ articleContent, textLength });
                this._attempts.sort(function(a5, b4) {
                  return b4.textLength - a5.textLength;
                });
                if (!this._attempts[0].textLength) {
                  return null;
                }
                articleContent = this._attempts[0].articleContent;
                parseSuccessful = true;
              }
            }
            if (parseSuccessful) {
              var ancestors = [parentOfTopCandidate, topCandidate].concat(this._getNodeAncestors(parentOfTopCandidate));
              this._someNode(ancestors, function(ancestor) {
                if (!ancestor.tagName)
                  return false;
                var articleDir = ancestor.getAttribute("dir");
                if (articleDir) {
                  this._articleDir = articleDir;
                  return true;
                }
                return false;
              });
              return articleContent;
            }
          }
        },
        _isValidByline: function(byline) {
          if (typeof byline == "string" || byline instanceof String) {
            byline = byline.trim();
            return byline.length > 0 && byline.length < 100;
          }
          return false;
        },
        _unescapeHtmlEntities: function(str) {
          if (!str) {
            return str;
          }
          var htmlEscapeMap = this.HTML_ESCAPE_MAP;
          return str.replace(/&(quot|amp|apos|lt|gt);/g, function(_2, tag) {
            return htmlEscapeMap[tag];
          }).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi, function(_2, hex, numStr) {
            var num = parseInt(hex || numStr, hex ? 16 : 10);
            return String.fromCharCode(num);
          });
        },
        _getJSONLD: function(doc) {
          var scripts = this._getAllNodesWithTag(doc, ["script"]);
          var metadata;
          this._forEachNode(scripts, function(jsonLdElement) {
            if (!metadata && jsonLdElement.getAttribute("type") === "application/ld+json") {
              try {
                var content = jsonLdElement.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g, "");
                var parsed = JSON.parse(content);
                if (!parsed["@context"] || !parsed["@context"].match(/^https?\:\/\/schema\.org$/)) {
                  return;
                }
                if (!parsed["@type"] && Array.isArray(parsed["@graph"])) {
                  parsed = parsed["@graph"].find(function(it) {
                    return (it["@type"] || "").match(
                      this.REGEXPS.jsonLdArticleTypes
                    );
                  });
                }
                if (!parsed || !parsed["@type"] || !parsed["@type"].match(this.REGEXPS.jsonLdArticleTypes)) {
                  return;
                }
                metadata = {};
                if (typeof parsed.name === "string" && typeof parsed.headline === "string" && parsed.name !== parsed.headline) {
                  var title = this._getArticleTitle();
                  var nameMatches = this._textSimilarity(parsed.name, title) > 0.75;
                  var headlineMatches = this._textSimilarity(parsed.headline, title) > 0.75;
                  if (headlineMatches && !nameMatches) {
                    metadata.title = parsed.headline;
                  } else {
                    metadata.title = parsed.name;
                  }
                } else if (typeof parsed.name === "string") {
                  metadata.title = parsed.name.trim();
                } else if (typeof parsed.headline === "string") {
                  metadata.title = parsed.headline.trim();
                }
                if (parsed.author) {
                  if (typeof parsed.author.name === "string") {
                    metadata.byline = parsed.author.name.trim();
                  } else if (Array.isArray(parsed.author) && parsed.author[0] && typeof parsed.author[0].name === "string") {
                    metadata.byline = parsed.author.filter(function(author) {
                      return author && typeof author.name === "string";
                    }).map(function(author) {
                      return author.name.trim();
                    }).join(", ");
                  }
                }
                if (typeof parsed.description === "string") {
                  metadata.excerpt = parsed.description.trim();
                }
                if (parsed.publisher && typeof parsed.publisher.name === "string") {
                  metadata.siteName = parsed.publisher.name.trim();
                }
                return;
              } catch (err) {
                this.log(err.message);
              }
            }
          });
          return metadata ? metadata : {};
        },
        _getArticleMetadata: function(jsonld) {
          var metadata = {};
          var values = {};
          var metaElements = this._doc.getElementsByTagName("meta");
          var propertyPattern = /\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi;
          var namePattern = /^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;
          this._forEachNode(metaElements, function(element) {
            var elementName = element.getAttribute("name");
            var elementProperty = element.getAttribute("property");
            var content = element.getAttribute("content");
            if (!content) {
              return;
            }
            var matches = null;
            var name = null;
            if (elementProperty) {
              matches = elementProperty.match(propertyPattern);
              if (matches) {
                name = matches[0].toLowerCase().replace(/\s/g, "");
                values[name] = content.trim();
              }
            }
            if (!matches && elementName && namePattern.test(elementName)) {
              name = elementName;
              if (content) {
                name = name.toLowerCase().replace(/\s/g, "").replace(/\./g, ":");
                values[name] = content.trim();
              }
            }
          });
          metadata.title = jsonld.title || values["dc:title"] || values["dcterm:title"] || values["og:title"] || values["weibo:article:title"] || values["weibo:webpage:title"] || values["title"] || values["twitter:title"];
          if (!metadata.title) {
            metadata.title = this._getArticleTitle();
          }
          metadata.byline = jsonld.byline || values["dc:creator"] || values["dcterm:creator"] || values["author"];
          metadata.excerpt = jsonld.excerpt || values["dc:description"] || values["dcterm:description"] || values["og:description"] || values["weibo:article:description"] || values["weibo:webpage:description"] || values["description"] || values["twitter:description"];
          metadata.siteName = jsonld.siteName || values["og:site_name"];
          metadata.title = this._unescapeHtmlEntities(metadata.title);
          metadata.byline = this._unescapeHtmlEntities(metadata.byline);
          metadata.excerpt = this._unescapeHtmlEntities(metadata.excerpt);
          metadata.siteName = this._unescapeHtmlEntities(metadata.siteName);
          return metadata;
        },
        _isSingleImage: function(node) {
          if (node.tagName === "IMG") {
            return true;
          }
          if (node.children.length !== 1 || node.textContent.trim() !== "") {
            return false;
          }
          return this._isSingleImage(node.children[0]);
        },
        _unwrapNoscriptImages: function(doc) {
          var imgs = Array.from(doc.getElementsByTagName("img"));
          this._forEachNode(imgs, function(img) {
            for (var i6 = 0; i6 < img.attributes.length; i6++) {
              var attr = img.attributes[i6];
              switch (attr.name) {
                case "src":
                case "srcset":
                case "data-src":
                case "data-srcset":
                  return;
              }
              if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
                return;
              }
            }
            img.parentNode.removeChild(img);
          });
          var noscripts = Array.from(doc.getElementsByTagName("noscript"));
          this._forEachNode(noscripts, function(noscript) {
            var tmp = doc.createElement("div");
            tmp.innerHTML = noscript.innerHTML;
            if (!this._isSingleImage(tmp)) {
              return;
            }
            var prevElement = noscript.previousElementSibling;
            if (prevElement && this._isSingleImage(prevElement)) {
              var prevImg = prevElement;
              if (prevImg.tagName !== "IMG") {
                prevImg = prevElement.getElementsByTagName("img")[0];
              }
              var newImg = tmp.getElementsByTagName("img")[0];
              for (var i6 = 0; i6 < prevImg.attributes.length; i6++) {
                var attr = prevImg.attributes[i6];
                if (attr.value === "") {
                  continue;
                }
                if (attr.name === "src" || attr.name === "srcset" || /\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
                  if (newImg.getAttribute(attr.name) === attr.value) {
                    continue;
                  }
                  var attrName = attr.name;
                  if (newImg.hasAttribute(attrName)) {
                    attrName = "data-old-" + attrName;
                  }
                  newImg.setAttribute(attrName, attr.value);
                }
              }
              noscript.parentNode.replaceChild(tmp.firstElementChild, prevElement);
            }
          });
        },
        _removeScripts: function(doc) {
          this._removeNodes(this._getAllNodesWithTag(doc, ["script"]), function(scriptNode) {
            scriptNode.nodeValue = "";
            scriptNode.removeAttribute("src");
            return true;
          });
          this._removeNodes(this._getAllNodesWithTag(doc, ["noscript"]));
        },
        _hasSingleTagInsideElement: function(element, tag) {
          if (element.children.length != 1 || element.children[0].tagName !== tag) {
            return false;
          }
          return !this._someNode(element.childNodes, function(node) {
            return node.nodeType === this.TEXT_NODE && this.REGEXPS.hasContent.test(node.textContent);
          });
        },
        _isElementWithoutContent: function(node) {
          return node.nodeType === this.ELEMENT_NODE && node.textContent.trim().length == 0 && (node.children.length == 0 || node.children.length == node.getElementsByTagName("br").length + node.getElementsByTagName("hr").length);
        },
        _hasChildBlockElement: function(element) {
          return this._someNode(element.childNodes, function(node) {
            return this.DIV_TO_P_ELEMS.has(node.tagName) || this._hasChildBlockElement(node);
          });
        },
        _isPhrasingContent: function(node) {
          return node.nodeType === this.TEXT_NODE || this.PHRASING_ELEMS.indexOf(node.tagName) !== -1 || (node.tagName === "A" || node.tagName === "DEL" || node.tagName === "INS") && this._everyNode(node.childNodes, this._isPhrasingContent);
        },
        _isWhitespace: function(node) {
          return node.nodeType === this.TEXT_NODE && node.textContent.trim().length === 0 || node.nodeType === this.ELEMENT_NODE && node.tagName === "BR";
        },
        _getInnerText: function(e8, normalizeSpaces) {
          normalizeSpaces = typeof normalizeSpaces === "undefined" ? true : normalizeSpaces;
          var textContent = e8.textContent.trim();
          if (normalizeSpaces) {
            return textContent.replace(this.REGEXPS.normalize, " ");
          }
          return textContent;
        },
        _getCharCount: function(e8, s7) {
          s7 = s7 || ",";
          return this._getInnerText(e8).split(s7).length - 1;
        },
        _cleanStyles: function(e8) {
          if (!e8 || e8.tagName.toLowerCase() === "svg")
            return;
          for (var i6 = 0; i6 < this.PRESENTATIONAL_ATTRIBUTES.length; i6++) {
            e8.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[i6]);
          }
          if (this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e8.tagName) !== -1) {
            e8.removeAttribute("width");
            e8.removeAttribute("height");
          }
          var cur = e8.firstElementChild;
          while (cur !== null) {
            this._cleanStyles(cur);
            cur = cur.nextElementSibling;
          }
        },
        _getLinkDensity: function(element) {
          var textLength = this._getInnerText(element).length;
          if (textLength === 0)
            return 0;
          var linkLength = 0;
          this._forEachNode(element.getElementsByTagName("a"), function(linkNode) {
            var href = linkNode.getAttribute("href");
            var coefficient = href && this.REGEXPS.hashUrl.test(href) ? 0.3 : 1;
            linkLength += this._getInnerText(linkNode).length * coefficient;
          });
          return linkLength / textLength;
        },
        _getClassWeight: function(e8) {
          if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
            return 0;
          var weight = 0;
          if (typeof e8.className === "string" && e8.className !== "") {
            if (this.REGEXPS.negative.test(e8.className))
              weight -= 25;
            if (this.REGEXPS.positive.test(e8.className))
              weight += 25;
          }
          if (typeof e8.id === "string" && e8.id !== "") {
            if (this.REGEXPS.negative.test(e8.id))
              weight -= 25;
            if (this.REGEXPS.positive.test(e8.id))
              weight += 25;
          }
          return weight;
        },
        _clean: function(e8, tag) {
          var isEmbed = ["object", "embed", "iframe"].indexOf(tag) !== -1;
          this._removeNodes(this._getAllNodesWithTag(e8, [tag]), function(element) {
            if (isEmbed) {
              for (var i6 = 0; i6 < element.attributes.length; i6++) {
                if (this.REGEXPS.videos.test(element.attributes[i6].value)) {
                  return false;
                }
              }
              if (element.tagName === "object" && this.REGEXPS.videos.test(element.innerHTML)) {
                return false;
              }
            }
            return true;
          });
        },
        _hasAncestorTag: function(node, tagName, maxDepth, filterFn) {
          maxDepth = maxDepth || 3;
          tagName = tagName.toUpperCase();
          var depth = 0;
          while (node.parentNode) {
            if (maxDepth > 0 && depth > maxDepth)
              return false;
            if (node.parentNode.tagName === tagName && (!filterFn || filterFn(node.parentNode)))
              return true;
            node = node.parentNode;
            depth++;
          }
          return false;
        },
        _getRowAndColumnCount: function(table) {
          var rows = 0;
          var columns = 0;
          var trs = table.getElementsByTagName("tr");
          for (var i6 = 0; i6 < trs.length; i6++) {
            var rowspan = trs[i6].getAttribute("rowspan") || 0;
            if (rowspan) {
              rowspan = parseInt(rowspan, 10);
            }
            rows += rowspan || 1;
            var columnsInThisRow = 0;
            var cells = trs[i6].getElementsByTagName("td");
            for (var j = 0; j < cells.length; j++) {
              var colspan = cells[j].getAttribute("colspan") || 0;
              if (colspan) {
                colspan = parseInt(colspan, 10);
              }
              columnsInThisRow += colspan || 1;
            }
            columns = Math.max(columns, columnsInThisRow);
          }
          return { rows, columns };
        },
        _markDataTables: function(root) {
          var tables = root.getElementsByTagName("table");
          for (var i6 = 0; i6 < tables.length; i6++) {
            var table = tables[i6];
            var role = table.getAttribute("role");
            if (role == "presentation") {
              table._readabilityDataTable = false;
              continue;
            }
            var datatable = table.getAttribute("datatable");
            if (datatable == "0") {
              table._readabilityDataTable = false;
              continue;
            }
            var summary = table.getAttribute("summary");
            if (summary) {
              table._readabilityDataTable = true;
              continue;
            }
            var caption = table.getElementsByTagName("caption")[0];
            if (caption && caption.childNodes.length > 0) {
              table._readabilityDataTable = true;
              continue;
            }
            var dataTableDescendants = ["col", "colgroup", "tfoot", "thead", "th"];
            var descendantExists = function(tag) {
              return !!table.getElementsByTagName(tag)[0];
            };
            if (dataTableDescendants.some(descendantExists)) {
              this.log("Data table because found data-y descendant");
              table._readabilityDataTable = true;
              continue;
            }
            if (table.getElementsByTagName("table")[0]) {
              table._readabilityDataTable = false;
              continue;
            }
            var sizeInfo = this._getRowAndColumnCount(table);
            if (sizeInfo.rows >= 10 || sizeInfo.columns > 4) {
              table._readabilityDataTable = true;
              continue;
            }
            table._readabilityDataTable = sizeInfo.rows * sizeInfo.columns > 10;
          }
        },
        _fixLazyImages: function(root) {
          this._forEachNode(this._getAllNodesWithTag(root, ["img", "picture", "figure"]), function(elem) {
            if (elem.src && this.REGEXPS.b64DataUrl.test(elem.src)) {
              var parts = this.REGEXPS.b64DataUrl.exec(elem.src);
              if (parts[1] === "image/svg+xml") {
                return;
              }
              var srcCouldBeRemoved = false;
              for (var i6 = 0; i6 < elem.attributes.length; i6++) {
                var attr = elem.attributes[i6];
                if (attr.name === "src") {
                  continue;
                }
                if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
                  srcCouldBeRemoved = true;
                  break;
                }
              }
              if (srcCouldBeRemoved) {
                var b64starts = elem.src.search(/base64\s*/i) + 7;
                var b64length = elem.src.length - b64starts;
                if (b64length < 133) {
                  elem.removeAttribute("src");
                }
              }
            }
            if ((elem.src || elem.srcset && elem.srcset != "null") && elem.className.toLowerCase().indexOf("lazy") === -1) {
              return;
            }
            for (var j = 0; j < elem.attributes.length; j++) {
              attr = elem.attributes[j];
              if (attr.name === "src" || attr.name === "srcset" || attr.name === "alt") {
                continue;
              }
              var copyTo = null;
              if (/\.(jpg|jpeg|png|webp)\s+\d/.test(attr.value)) {
                copyTo = "srcset";
              } else if (/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(attr.value)) {
                copyTo = "src";
              }
              if (copyTo) {
                if (elem.tagName === "IMG" || elem.tagName === "PICTURE") {
                  elem.setAttribute(copyTo, attr.value);
                } else if (elem.tagName === "FIGURE" && !this._getAllNodesWithTag(elem, ["img", "picture"]).length) {
                  var img = this._doc.createElement("img");
                  img.setAttribute(copyTo, attr.value);
                  elem.appendChild(img);
                }
              }
            }
          });
        },
        _getTextDensity: function(e8, tags) {
          var textLength = this._getInnerText(e8, true).length;
          if (textLength === 0) {
            return 0;
          }
          var childrenLength = 0;
          var children = this._getAllNodesWithTag(e8, tags);
          this._forEachNode(children, (child) => childrenLength += this._getInnerText(child, true).length);
          return childrenLength / textLength;
        },
        _cleanConditionally: function(e8, tag) {
          if (!this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
            return;
          this._removeNodes(this._getAllNodesWithTag(e8, [tag]), function(node) {
            var isDataTable = function(t4) {
              return t4._readabilityDataTable;
            };
            var isList = tag === "ul" || tag === "ol";
            if (!isList) {
              var listLength = 0;
              var listNodes = this._getAllNodesWithTag(node, ["ul", "ol"]);
              this._forEachNode(listNodes, (list) => listLength += this._getInnerText(list).length);
              isList = listLength / this._getInnerText(node).length > 0.9;
            }
            if (tag === "table" && isDataTable(node)) {
              return false;
            }
            if (this._hasAncestorTag(node, "table", -1, isDataTable)) {
              return false;
            }
            if (this._hasAncestorTag(node, "code")) {
              return false;
            }
            var weight = this._getClassWeight(node);
            this.log("Cleaning Conditionally", node);
            var contentScore = 0;
            if (weight + contentScore < 0) {
              return true;
            }
            if (this._getCharCount(node, ",") < 10) {
              var p4 = node.getElementsByTagName("p").length;
              var img = node.getElementsByTagName("img").length;
              var li = node.getElementsByTagName("li").length - 100;
              var input = node.getElementsByTagName("input").length;
              var headingDensity = this._getTextDensity(node, ["h1", "h2", "h3", "h4", "h5", "h6"]);
              var embedCount = 0;
              var embeds = this._getAllNodesWithTag(node, ["object", "embed", "iframe"]);
              for (var i6 = 0; i6 < embeds.length; i6++) {
                for (var j = 0; j < embeds[i6].attributes.length; j++) {
                  if (this.REGEXPS.videos.test(embeds[i6].attributes[j].value)) {
                    return false;
                  }
                }
                if (embeds[i6].tagName === "object" && this.REGEXPS.videos.test(embeds[i6].innerHTML)) {
                  return false;
                }
                embedCount++;
              }
              var linkDensity = this._getLinkDensity(node);
              var contentLength = this._getInnerText(node).length;
              var haveToRemove = img > 1 && p4 / img < 0.5 && !this._hasAncestorTag(node, "figure") || !isList && li > p4 || input > Math.floor(p4 / 3) || !isList && headingDensity < 0.9 && contentLength < 25 && (img === 0 || img > 2) && !this._hasAncestorTag(node, "figure") || !isList && weight < 25 && linkDensity > 0.2 || weight >= 25 && linkDensity > 0.5 || (embedCount === 1 && contentLength < 75 || embedCount > 1);
              return haveToRemove;
            }
            return false;
          });
        },
        _cleanMatchedNodes: function(e8, filter) {
          var endOfSearchMarkerNode = this._getNextNode(e8, true);
          var next = this._getNextNode(e8);
          while (next && next != endOfSearchMarkerNode) {
            if (filter.call(this, next, next.className + " " + next.id)) {
              next = this._removeAndGetNext(next);
            } else {
              next = this._getNextNode(next);
            }
          }
        },
        _cleanHeaders: function(e8) {
          let headingNodes = this._getAllNodesWithTag(e8, ["h1", "h2"]);
          this._removeNodes(headingNodes, function(node) {
            let shouldRemove = this._getClassWeight(node) < 0;
            if (shouldRemove) {
              this.log("Removing header with low class weight:", node);
            }
            return shouldRemove;
          });
        },
        _headerDuplicatesTitle: function(node) {
          if (node.tagName != "H1" && node.tagName != "H2") {
            return false;
          }
          var heading = this._getInnerText(node, false);
          this.log("Evaluating similarity of header:", heading, this._articleTitle);
          return this._textSimilarity(this._articleTitle, heading) > 0.75;
        },
        _flagIsActive: function(flag) {
          return (this._flags & flag) > 0;
        },
        _removeFlag: function(flag) {
          this._flags = this._flags & ~flag;
        },
        _isProbablyVisible: function(node) {
          return (!node.style || node.style.display != "none") && !node.hasAttribute("hidden") && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1);
        },
        parse: function() {
          if (this._maxElemsToParse > 0) {
            var numTags = this._doc.getElementsByTagName("*").length;
            if (numTags > this._maxElemsToParse) {
              throw new Error("Aborting parsing document; " + numTags + " elements found");
            }
          }
          this._unwrapNoscriptImages(this._doc);
          var jsonLd = this._disableJSONLD ? {} : this._getJSONLD(this._doc);
          this._removeScripts(this._doc);
          this._prepDocument();
          var metadata = this._getArticleMetadata(jsonLd);
          this._articleTitle = metadata.title;
          var articleContent = this._grabArticle();
          if (!articleContent)
            return null;
          this.log("Grabbed: " + articleContent.innerHTML);
          this._postProcessContent(articleContent);
          if (!metadata.excerpt) {
            var paragraphs = articleContent.getElementsByTagName("p");
            if (paragraphs.length > 0) {
              metadata.excerpt = paragraphs[0].textContent.trim();
            }
          }
          var textContent = articleContent.textContent;
          return {
            title: this._articleTitle,
            byline: metadata.byline || this._articleByline,
            dir: this._articleDir,
            lang: this._articleLang,
            content: this._serializer(articleContent),
            textContent,
            length: textContent.length,
            excerpt: metadata.excerpt,
            siteName: metadata.siteName || this._articleSiteName
          };
        }
      };
      if (typeof module2 === "object") {
        module2.exports = Readability2;
      }
    }
  });

  // node_modules/@mozilla/readability/Readability-readerable.js
  var require_Readability_readerable = __commonJS({
    "node_modules/@mozilla/readability/Readability-readerable.js"(exports, module2) {
      var REGEXPS = {
        unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
        okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i
      };
      function isNodeVisible(node) {
        return (!node.style || node.style.display != "none") && !node.hasAttribute("hidden") && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1);
      }
      function isProbablyReaderable(doc, options = {}) {
        if (typeof options == "function") {
          options = { visibilityChecker: options };
        }
        var defaultOptions = { minScore: 20, minContentLength: 140, visibilityChecker: isNodeVisible };
        options = Object.assign(defaultOptions, options);
        var nodes = doc.querySelectorAll("p, pre, article");
        var brNodes = doc.querySelectorAll("div > br");
        if (brNodes.length) {
          var set = new Set(nodes);
          [].forEach.call(brNodes, function(node) {
            set.add(node.parentNode);
          });
          nodes = Array.from(set);
        }
        var score = 0;
        return [].some.call(nodes, function(node) {
          if (!options.visibilityChecker(node)) {
            return false;
          }
          var matchString = node.className + " " + node.id;
          if (REGEXPS.unlikelyCandidates.test(matchString) && !REGEXPS.okMaybeItsACandidate.test(matchString)) {
            return false;
          }
          if (node.matches("li p")) {
            return false;
          }
          var textContentLength = node.textContent.trim().length;
          if (textContentLength < options.minContentLength) {
            return false;
          }
          score += Math.sqrt(textContentLength - options.minContentLength);
          if (score > options.minScore) {
            return true;
          }
          return false;
        });
      }
      if (typeof module2 === "object") {
        module2.exports = isProbablyReaderable;
      }
    }
  });

  // node_modules/@mozilla/readability/index.js
  var require_readability = __commonJS({
    "node_modules/@mozilla/readability/index.js"(exports, module2) {
      var Readability2 = require_Readability();
      var isProbablyReaderable = require_Readability_readerable();
      module2.exports = {
        Readability: Readability2,
        isProbablyReaderable
      };
    }
  });

  // node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
  function t(t4) {
    return t4.split("-")[1];
  }
  function e(t4) {
    return "y" === t4 ? "height" : "width";
  }
  function n(t4) {
    return t4.split("-")[0];
  }
  function o(t4) {
    return ["top", "bottom"].includes(n(t4)) ? "x" : "y";
  }
  function i(i6, r6, a5) {
    let { reference: l7, floating: s7 } = i6;
    const c5 = l7.x + l7.width / 2 - s7.width / 2, f4 = l7.y + l7.height / 2 - s7.height / 2, u4 = o(r6), m4 = e(u4), g4 = l7[m4] / 2 - s7[m4] / 2, d5 = "x" === u4;
    let p4;
    switch (n(r6)) {
      case "top":
        p4 = { x: c5, y: l7.y - s7.height };
        break;
      case "bottom":
        p4 = { x: c5, y: l7.y + l7.height };
        break;
      case "right":
        p4 = { x: l7.x + l7.width, y: f4 };
        break;
      case "left":
        p4 = { x: l7.x - s7.width, y: f4 };
        break;
      default:
        p4 = { x: l7.x, y: l7.y };
    }
    switch (t(r6)) {
      case "start":
        p4[u4] -= g4 * (a5 && d5 ? -1 : 1);
        break;
      case "end":
        p4[u4] += g4 * (a5 && d5 ? -1 : 1);
    }
    return p4;
  }
  var r = async (t4, e8, n8) => {
    const { placement: o8 = "bottom", strategy: r6 = "absolute", middleware: a5 = [], platform: l7 } = n8, s7 = a5.filter(Boolean), c5 = await (null == l7.isRTL ? void 0 : l7.isRTL(e8));
    let f4 = await l7.getElementRects({ reference: t4, floating: e8, strategy: r6 }), { x: u4, y: m4 } = i(f4, o8, c5), g4 = o8, d5 = {}, p4 = 0;
    for (let n9 = 0; n9 < s7.length; n9++) {
      const { name: a6, fn: h5 } = s7[n9], { x: y4, y: x4, data: w4, reset: v4 } = await h5({ x: u4, y: m4, initialPlacement: o8, placement: g4, strategy: r6, middlewareData: d5, rects: f4, platform: l7, elements: { reference: t4, floating: e8 } });
      u4 = null != y4 ? y4 : u4, m4 = null != x4 ? x4 : m4, d5 = { ...d5, [a6]: { ...d5[a6], ...w4 } }, v4 && p4 <= 50 && (p4++, "object" == typeof v4 && (v4.placement && (g4 = v4.placement), v4.rects && (f4 = true === v4.rects ? await l7.getElementRects({ reference: t4, floating: e8, strategy: r6 }) : v4.rects), { x: u4, y: m4 } = i(f4, g4, c5)), n9 = -1);
    }
    return { x: u4, y: m4, placement: g4, strategy: r6, middlewareData: d5 };
  };
  function a(t4) {
    return "number" != typeof t4 ? function(t5) {
      return { top: 0, right: 0, bottom: 0, left: 0, ...t5 };
    }(t4) : { top: t4, right: t4, bottom: t4, left: t4 };
  }
  function l(t4) {
    return { ...t4, top: t4.y, left: t4.x, right: t4.x + t4.width, bottom: t4.y + t4.height };
  }
  async function s(t4, e8) {
    var n8;
    void 0 === e8 && (e8 = {});
    const { x: o8, y: i6, platform: r6, rects: s7, elements: c5, strategy: f4 } = t4, { boundary: u4 = "clippingAncestors", rootBoundary: m4 = "viewport", elementContext: g4 = "floating", altBoundary: d5 = false, padding: p4 = 0 } = e8, h5 = a(p4), y4 = c5[d5 ? "floating" === g4 ? "reference" : "floating" : g4], x4 = l(await r6.getClippingRect({ element: null == (n8 = await (null == r6.isElement ? void 0 : r6.isElement(y4))) || n8 ? y4 : y4.contextElement || await (null == r6.getDocumentElement ? void 0 : r6.getDocumentElement(c5.floating)), boundary: u4, rootBoundary: m4, strategy: f4 })), w4 = "floating" === g4 ? { ...s7.floating, x: o8, y: i6 } : s7.reference, v4 = await (null == r6.getOffsetParent ? void 0 : r6.getOffsetParent(c5.floating)), b4 = await (null == r6.isElement ? void 0 : r6.isElement(v4)) && await (null == r6.getScale ? void 0 : r6.getScale(v4)) || { x: 1, y: 1 }, R3 = l(r6.convertOffsetParentRelativeRectToViewportRelativeRect ? await r6.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w4, offsetParent: v4, strategy: f4 }) : w4);
    return { top: (x4.top - R3.top + h5.top) / b4.y, bottom: (R3.bottom - x4.bottom + h5.bottom) / b4.y, left: (x4.left - R3.left + h5.left) / b4.x, right: (R3.right - x4.right + h5.right) / b4.x };
  }
  var c = Math.min;
  var f = Math.max;
  function u(t4, e8, n8) {
    return f(t4, c(e8, n8));
  }
  var m = (n8) => ({ name: "arrow", options: n8, async fn(i6) {
    const { element: r6, padding: l7 = 0 } = n8 || {}, { x: s7, y: c5, placement: f4, rects: m4, platform: g4 } = i6;
    if (null == r6)
      return {};
    const d5 = a(l7), p4 = { x: s7, y: c5 }, h5 = o(f4), y4 = e(h5), x4 = await g4.getDimensions(r6), w4 = "y" === h5 ? "top" : "left", v4 = "y" === h5 ? "bottom" : "right", b4 = m4.reference[y4] + m4.reference[h5] - p4[h5] - m4.floating[y4], R3 = p4[h5] - m4.reference[h5], A3 = await (null == g4.getOffsetParent ? void 0 : g4.getOffsetParent(r6));
    let P4 = A3 ? "y" === h5 ? A3.clientHeight || 0 : A3.clientWidth || 0 : 0;
    0 === P4 && (P4 = m4.floating[y4]);
    const T4 = b4 / 2 - R3 / 2, O3 = d5[w4], D3 = P4 - x4[y4] - d5[v4], E4 = P4 / 2 - x4[y4] / 2 + T4, L3 = u(O3, E4, D3), k3 = null != t(f4) && E4 != L3 && m4.reference[y4] / 2 - (E4 < O3 ? d5[w4] : d5[v4]) - x4[y4] / 2 < 0;
    return { [h5]: p4[h5] - (k3 ? E4 < O3 ? O3 - E4 : D3 - E4 : 0), data: { [h5]: L3, centerOffset: E4 - L3 } };
  } });
  var g = ["top", "right", "bottom", "left"];
  var d = g.reduce((t4, e8) => t4.concat(e8, e8 + "-start", e8 + "-end"), []);
  var p = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function h(t4) {
    return t4.replace(/left|right|bottom|top/g, (t5) => p[t5]);
  }
  function y(n8, i6, r6) {
    void 0 === r6 && (r6 = false);
    const a5 = t(n8), l7 = o(n8), s7 = e(l7);
    let c5 = "x" === l7 ? a5 === (r6 ? "end" : "start") ? "right" : "left" : "start" === a5 ? "bottom" : "top";
    return i6.reference[s7] > i6.floating[s7] && (c5 = h(c5)), { main: c5, cross: h(c5) };
  }
  var x = { start: "end", end: "start" };
  function w(t4) {
    return t4.replace(/start|end/g, (t5) => x[t5]);
  }
  var b = function(e8) {
    return void 0 === e8 && (e8 = {}), { name: "flip", options: e8, async fn(o8) {
      var i6;
      const { placement: r6, middlewareData: a5, rects: l7, initialPlacement: c5, platform: f4, elements: u4 } = o8, { mainAxis: m4 = true, crossAxis: g4 = true, fallbackPlacements: d5, fallbackStrategy: p4 = "bestFit", fallbackAxisSideDirection: x4 = "none", flipAlignment: v4 = true, ...b4 } = e8, R3 = n(r6), A3 = n(c5) === c5, P4 = await (null == f4.isRTL ? void 0 : f4.isRTL(u4.floating)), T4 = d5 || (A3 || !v4 ? [h(c5)] : function(t4) {
        const e9 = h(t4);
        return [w(t4), e9, w(e9)];
      }(c5));
      d5 || "none" === x4 || T4.push(...function(e9, o9, i7, r7) {
        const a6 = t(e9);
        let l8 = function(t4, e10, n8) {
          const o10 = ["left", "right"], i8 = ["right", "left"], r8 = ["top", "bottom"], a7 = ["bottom", "top"];
          switch (t4) {
            case "top":
            case "bottom":
              return n8 ? e10 ? i8 : o10 : e10 ? o10 : i8;
            case "left":
            case "right":
              return e10 ? r8 : a7;
            default:
              return [];
          }
        }(n(e9), "start" === i7, r7);
        return a6 && (l8 = l8.map((t4) => t4 + "-" + a6), o9 && (l8 = l8.concat(l8.map(w)))), l8;
      }(c5, v4, x4, P4));
      const O3 = [c5, ...T4], D3 = await s(o8, b4), E4 = [];
      let L3 = (null == (i6 = a5.flip) ? void 0 : i6.overflows) || [];
      if (m4 && E4.push(D3[R3]), g4) {
        const { main: t4, cross: e9 } = y(r6, l7, P4);
        E4.push(D3[t4], D3[e9]);
      }
      if (L3 = [...L3, { placement: r6, overflows: E4 }], !E4.every((t4) => t4 <= 0)) {
        var k3;
        const t4 = ((null == (k3 = a5.flip) ? void 0 : k3.index) || 0) + 1, e9 = O3[t4];
        if (e9)
          return { data: { index: t4, overflows: L3 }, reset: { placement: e9 } };
        let n8 = "bottom";
        switch (p4) {
          case "bestFit": {
            var B;
            const t5 = null == (B = L3.map((t6) => [t6, t6.overflows.filter((t7) => t7 > 0).reduce((t7, e10) => t7 + e10, 0)]).sort((t6, e10) => t6[1] - e10[1])[0]) ? void 0 : B[0].placement;
            t5 && (n8 = t5);
            break;
          }
          case "initialPlacement":
            n8 = c5;
        }
        if (r6 !== n8)
          return { reset: { placement: n8 } };
      }
      return {};
    } };
  };
  var O = function(e8) {
    return void 0 === e8 && (e8 = 0), { name: "offset", options: e8, async fn(i6) {
      const { x: r6, y: a5 } = i6, l7 = await async function(e9, i7) {
        const { placement: r7, platform: a6, elements: l8 } = e9, s7 = await (null == a6.isRTL ? void 0 : a6.isRTL(l8.floating)), c5 = n(r7), f4 = t(r7), u4 = "x" === o(r7), m4 = ["left", "top"].includes(c5) ? -1 : 1, g4 = s7 && u4 ? -1 : 1, d5 = "function" == typeof i7 ? i7(e9) : i7;
        let { mainAxis: p4, crossAxis: h5, alignmentAxis: y4 } = "number" == typeof d5 ? { mainAxis: d5, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d5 };
        return f4 && "number" == typeof y4 && (h5 = "end" === f4 ? -1 * y4 : y4), u4 ? { x: h5 * g4, y: p4 * m4 } : { x: p4 * m4, y: h5 * g4 };
      }(i6, e8);
      return { x: r6 + l7.x, y: a5 + l7.y, data: l7 };
    } };
  };
  function D(t4) {
    return "x" === t4 ? "y" : "x";
  }
  var E = function(t4) {
    return void 0 === t4 && (t4 = {}), { name: "shift", options: t4, async fn(e8) {
      const { x: i6, y: r6, placement: a5 } = e8, { mainAxis: l7 = true, crossAxis: c5 = false, limiter: f4 = { fn: (t5) => {
        let { x: e9, y: n8 } = t5;
        return { x: e9, y: n8 };
      } }, ...m4 } = t4, g4 = { x: i6, y: r6 }, d5 = await s(e8, m4), p4 = o(n(a5)), h5 = D(p4);
      let y4 = g4[p4], x4 = g4[h5];
      if (l7) {
        const t5 = "y" === p4 ? "bottom" : "right";
        y4 = u(y4 + d5["y" === p4 ? "top" : "left"], y4, y4 - d5[t5]);
      }
      if (c5) {
        const t5 = "y" === h5 ? "bottom" : "right";
        x4 = u(x4 + d5["y" === h5 ? "top" : "left"], x4, x4 - d5[t5]);
      }
      const w4 = f4.fn({ ...e8, [p4]: y4, [h5]: x4 });
      return { ...w4, data: { x: w4.x - i6, y: w4.y - r6 } };
    } };
  };

  // node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
  function n2(t4) {
    var e8;
    return (null == (e8 = t4.ownerDocument) ? void 0 : e8.defaultView) || window;
  }
  function o2(t4) {
    return n2(t4).getComputedStyle(t4);
  }
  function i2(t4) {
    return f2(t4) ? (t4.nodeName || "").toLowerCase() : "";
  }
  var r2;
  function l2() {
    if (r2)
      return r2;
    const t4 = navigator.userAgentData;
    return t4 && Array.isArray(t4.brands) ? (r2 = t4.brands.map((t5) => t5.brand + "/" + t5.version).join(" "), r2) : navigator.userAgent;
  }
  function c2(t4) {
    return t4 instanceof n2(t4).HTMLElement;
  }
  function s2(t4) {
    return t4 instanceof n2(t4).Element;
  }
  function f2(t4) {
    return t4 instanceof n2(t4).Node;
  }
  function u2(t4) {
    if ("undefined" == typeof ShadowRoot)
      return false;
    return t4 instanceof n2(t4).ShadowRoot || t4 instanceof ShadowRoot;
  }
  function a2(t4) {
    const { overflow: e8, overflowX: n8, overflowY: i6, display: r6 } = o2(t4);
    return /auto|scroll|overlay|hidden|clip/.test(e8 + i6 + n8) && !["inline", "contents"].includes(r6);
  }
  function d2(t4) {
    return ["table", "td", "th"].includes(i2(t4));
  }
  function h2(t4) {
    const e8 = /firefox/i.test(l2()), n8 = o2(t4), i6 = n8.backdropFilter || n8.WebkitBackdropFilter;
    return "none" !== n8.transform || "none" !== n8.perspective || !!i6 && "none" !== i6 || e8 && "filter" === n8.willChange || e8 && !!n8.filter && "none" !== n8.filter || ["transform", "perspective"].some((t5) => n8.willChange.includes(t5)) || ["paint", "layout", "strict", "content"].some((t5) => {
      const e9 = n8.contain;
      return null != e9 && e9.includes(t5);
    });
  }
  function p2() {
    return !/^((?!chrome|android).)*safari/i.test(l2());
  }
  function g2(t4) {
    return ["html", "body", "#document"].includes(i2(t4));
  }
  var m2 = Math.min;
  var y2 = Math.max;
  var x2 = Math.round;
  function w2(t4) {
    const e8 = o2(t4);
    let n8 = parseFloat(e8.width), i6 = parseFloat(e8.height);
    const r6 = t4.offsetWidth, l7 = t4.offsetHeight, c5 = x2(n8) !== r6 || x2(i6) !== l7;
    return c5 && (n8 = r6, i6 = l7), { width: n8, height: i6, fallback: c5 };
  }
  function v2(t4) {
    return s2(t4) ? t4 : t4.contextElement;
  }
  var b2 = { x: 1, y: 1 };
  function L2(t4) {
    const e8 = v2(t4);
    if (!c2(e8))
      return b2;
    const n8 = e8.getBoundingClientRect(), { width: o8, height: i6, fallback: r6 } = w2(e8);
    let l7 = (r6 ? x2(n8.width) : n8.width) / o8, s7 = (r6 ? x2(n8.height) : n8.height) / i6;
    return l7 && Number.isFinite(l7) || (l7 = 1), s7 && Number.isFinite(s7) || (s7 = 1), { x: l7, y: s7 };
  }
  function E2(t4, e8, o8, i6) {
    var r6, l7;
    void 0 === e8 && (e8 = false), void 0 === o8 && (o8 = false);
    const c5 = t4.getBoundingClientRect(), f4 = v2(t4);
    let u4 = b2;
    e8 && (i6 ? s2(i6) && (u4 = L2(i6)) : u4 = L2(t4));
    const a5 = f4 ? n2(f4) : window, d5 = !p2() && o8;
    let h5 = (c5.left + (d5 && (null == (r6 = a5.visualViewport) ? void 0 : r6.offsetLeft) || 0)) / u4.x, g4 = (c5.top + (d5 && (null == (l7 = a5.visualViewport) ? void 0 : l7.offsetTop) || 0)) / u4.y, m4 = c5.width / u4.x, y4 = c5.height / u4.y;
    if (f4) {
      const t5 = n2(f4), e9 = i6 && s2(i6) ? n2(i6) : i6;
      let o9 = t5.frameElement;
      for (; o9 && i6 && e9 !== t5; ) {
        const t6 = L2(o9), e10 = o9.getBoundingClientRect(), i7 = getComputedStyle(o9);
        e10.x += (o9.clientLeft + parseFloat(i7.paddingLeft)) * t6.x, e10.y += (o9.clientTop + parseFloat(i7.paddingTop)) * t6.y, h5 *= t6.x, g4 *= t6.y, m4 *= t6.x, y4 *= t6.y, h5 += e10.x, g4 += e10.y, o9 = n2(o9).frameElement;
      }
    }
    return { width: m4, height: y4, top: g4, right: h5 + m4, bottom: g4 + y4, left: h5, x: h5, y: g4 };
  }
  function R(t4) {
    return ((f2(t4) ? t4.ownerDocument : t4.document) || window.document).documentElement;
  }
  function T2(t4) {
    return s2(t4) ? { scrollLeft: t4.scrollLeft, scrollTop: t4.scrollTop } : { scrollLeft: t4.pageXOffset, scrollTop: t4.pageYOffset };
  }
  function C(t4) {
    return E2(R(t4)).left + T2(t4).scrollLeft;
  }
  function F(t4, e8, n8) {
    const o8 = c2(e8), r6 = R(e8), l7 = E2(t4, true, "fixed" === n8, e8);
    let s7 = { scrollLeft: 0, scrollTop: 0 };
    const f4 = { x: 0, y: 0 };
    if (o8 || !o8 && "fixed" !== n8)
      if (("body" !== i2(e8) || a2(r6)) && (s7 = T2(e8)), c2(e8)) {
        const t5 = E2(e8, true);
        f4.x = t5.x + e8.clientLeft, f4.y = t5.y + e8.clientTop;
      } else
        r6 && (f4.x = C(r6));
    return { x: l7.left + s7.scrollLeft - f4.x, y: l7.top + s7.scrollTop - f4.y, width: l7.width, height: l7.height };
  }
  function W(t4) {
    if ("html" === i2(t4))
      return t4;
    const e8 = t4.assignedSlot || t4.parentNode || (u2(t4) ? t4.host : null) || R(t4);
    return u2(e8) ? e8.host : e8;
  }
  function D2(t4) {
    return c2(t4) && "fixed" !== o2(t4).position ? t4.offsetParent : null;
  }
  function S(t4) {
    const e8 = n2(t4);
    let r6 = D2(t4);
    for (; r6 && d2(r6) && "static" === o2(r6).position; )
      r6 = D2(r6);
    return r6 && ("html" === i2(r6) || "body" === i2(r6) && "static" === o2(r6).position && !h2(r6)) ? e8 : r6 || function(t5) {
      let e9 = W(t5);
      for (; c2(e9) && !g2(e9); ) {
        if (h2(e9))
          return e9;
        e9 = W(e9);
      }
      return null;
    }(t4) || e8;
  }
  function A(t4) {
    const e8 = W(t4);
    return g2(e8) ? t4.ownerDocument.body : c2(e8) && a2(e8) ? e8 : A(e8);
  }
  function H(t4, e8) {
    var o8;
    void 0 === e8 && (e8 = []);
    const i6 = A(t4), r6 = i6 === (null == (o8 = t4.ownerDocument) ? void 0 : o8.body), l7 = n2(i6);
    return r6 ? e8.concat(l7, l7.visualViewport || [], a2(i6) ? i6 : []) : e8.concat(i6, H(i6));
  }
  function O2(e8, i6, r6) {
    return "viewport" === i6 ? l(function(t4, e9) {
      const o8 = n2(t4), i7 = R(t4), r7 = o8.visualViewport;
      let l7 = i7.clientWidth, c5 = i7.clientHeight, s7 = 0, f4 = 0;
      if (r7) {
        l7 = r7.width, c5 = r7.height;
        const t5 = p2();
        (t5 || !t5 && "fixed" === e9) && (s7 = r7.offsetLeft, f4 = r7.offsetTop);
      }
      return { width: l7, height: c5, x: s7, y: f4 };
    }(e8, r6)) : s2(i6) ? function(t4, e9) {
      const n8 = E2(t4, true, "fixed" === e9), o8 = n8.top + t4.clientTop, i7 = n8.left + t4.clientLeft, r7 = c2(t4) ? L2(t4) : { x: 1, y: 1 }, l7 = t4.clientWidth * r7.x, s7 = t4.clientHeight * r7.y, f4 = i7 * r7.x, u4 = o8 * r7.y;
      return { top: u4, left: f4, right: f4 + l7, bottom: u4 + s7, x: f4, y: u4, width: l7, height: s7 };
    }(i6, r6) : l(function(t4) {
      var e9;
      const n8 = R(t4), i7 = T2(t4), r7 = null == (e9 = t4.ownerDocument) ? void 0 : e9.body, l7 = y2(n8.scrollWidth, n8.clientWidth, r7 ? r7.scrollWidth : 0, r7 ? r7.clientWidth : 0), c5 = y2(n8.scrollHeight, n8.clientHeight, r7 ? r7.scrollHeight : 0, r7 ? r7.clientHeight : 0);
      let s7 = -i7.scrollLeft + C(t4);
      const f4 = -i7.scrollTop;
      return "rtl" === o2(r7 || n8).direction && (s7 += y2(n8.clientWidth, r7 ? r7.clientWidth : 0) - l7), { width: l7, height: c5, x: s7, y: f4 };
    }(R(e8)));
  }
  var P2 = { getClippingRect: function(t4) {
    let { element: e8, boundary: n8, rootBoundary: r6, strategy: l7 } = t4;
    const c5 = "clippingAncestors" === n8 ? function(t5, e9) {
      const n9 = e9.get(t5);
      if (n9)
        return n9;
      let r7 = H(t5).filter((t6) => s2(t6) && "body" !== i2(t6)), l8 = null;
      const c6 = "fixed" === o2(t5).position;
      let f5 = c6 ? W(t5) : t5;
      for (; s2(f5) && !g2(f5); ) {
        const t6 = o2(f5), e10 = h2(f5);
        (c6 ? e10 || l8 : e10 || "static" !== t6.position || !l8 || !["absolute", "fixed"].includes(l8.position)) ? l8 = t6 : r7 = r7.filter((t7) => t7 !== f5), f5 = W(f5);
      }
      return e9.set(t5, r7), r7;
    }(e8, this._c) : [].concat(n8), f4 = [...c5, r6], u4 = f4[0], a5 = f4.reduce((t5, n9) => {
      const o8 = O2(e8, n9, l7);
      return t5.top = y2(o8.top, t5.top), t5.right = m2(o8.right, t5.right), t5.bottom = m2(o8.bottom, t5.bottom), t5.left = y2(o8.left, t5.left), t5;
    }, O2(e8, u4, l7));
    return { width: a5.right - a5.left, height: a5.bottom - a5.top, x: a5.left, y: a5.top };
  }, convertOffsetParentRelativeRectToViewportRelativeRect: function(t4) {
    let { rect: e8, offsetParent: n8, strategy: o8 } = t4;
    const r6 = c2(n8), l7 = R(n8);
    if (n8 === l7)
      return e8;
    let s7 = { scrollLeft: 0, scrollTop: 0 }, f4 = { x: 1, y: 1 };
    const u4 = { x: 0, y: 0 };
    if ((r6 || !r6 && "fixed" !== o8) && (("body" !== i2(n8) || a2(l7)) && (s7 = T2(n8)), c2(n8))) {
      const t5 = E2(n8);
      f4 = L2(n8), u4.x = t5.x + n8.clientLeft, u4.y = t5.y + n8.clientTop;
    }
    return { width: e8.width * f4.x, height: e8.height * f4.y, x: e8.x * f4.x - s7.scrollLeft * f4.x + u4.x, y: e8.y * f4.y - s7.scrollTop * f4.y + u4.y };
  }, isElement: s2, getDimensions: function(t4) {
    return w2(t4);
  }, getOffsetParent: S, getDocumentElement: R, getScale: L2, async getElementRects(t4) {
    let { reference: e8, floating: n8, strategy: o8 } = t4;
    const i6 = this.getOffsetParent || S, r6 = this.getDimensions;
    return { reference: F(e8, await i6(n8), o8), floating: { x: 0, y: 0, ...await r6(n8) } };
  }, getClientRects: (t4) => Array.from(t4.getClientRects()), isRTL: (t4) => "rtl" === o2(t4).direction };
  var V = (t4, n8, o8) => {
    const i6 = /* @__PURE__ */ new Map(), r6 = { platform: P2, ...o8 }, l7 = { ...r6.platform, _c: i6 };
    return r(t4, n8, { ...r6, platform: l7 });
  };

  // src/content-script/floatie/floatie.css.txt
  var floatie_css_default = "/* Floatie CSS */\n#sp-floatie-container {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #222222;\n  color: white;\n  border-radius: 4px;\n  padding: 2px;\n  font-size: 11px;\n  font-family: sans-serif;\n}\n\n#sp-floatie-arrow {\n  position: absolute;\n  background: rgb(255, 34, 34);\n  background: linear-gradient(\n    -45deg,\n    rgba(34, 34, 34, 1) 0%,\n    rgba(34, 34, 34, 1) 51%,\n    rgba(0, 0, 0, 0) 53%,\n    rgba(0, 0, 0, 0) 80%\n  );\n  width: 8px;\n  height: 8px;\n  transform: rotate(45deg);\n}\n\n.sp-floatie-action {\n  display: block;\n  background-color: #222222;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 8px;\n  padding-right: 8px;\n  margin: 0 0 !important;\n}\n\n.sp-floatie-action:hover {\n  background-color: #777;\n}\n";

  // src/content-script/floatie/tooltip.ts
  var import_webcomponentsjs = __toESM(require_webcomponents_bundle());

  // node_modules/@lit/reactive-element/css-tag.js
  var t2 = window;
  var e2 = t2.ShadowRoot && (void 0 === t2.ShadyCSS || t2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s3 = Symbol();
  var n3 = /* @__PURE__ */ new WeakMap();
  var o3 = class {
    constructor(t4, e8, n8) {
      if (this._$cssResult$ = true, n8 !== s3)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4, this.t = e8;
    }
    get styleSheet() {
      let t4 = this.o;
      const s7 = this.t;
      if (e2 && void 0 === t4) {
        const e8 = void 0 !== s7 && 1 === s7.length;
        e8 && (t4 = n3.get(s7)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e8 && n3.set(s7, t4));
      }
      return t4;
    }
    toString() {
      return this.cssText;
    }
  };
  var r3 = (t4) => new o3("string" == typeof t4 ? t4 : t4 + "", void 0, s3);
  var i3 = (t4, ...e8) => {
    const n8 = 1 === t4.length ? t4[0] : e8.reduce((e9, s7, n9) => e9 + ((t5) => {
      if (true === t5._$cssResult$)
        return t5.cssText;
      if ("number" == typeof t5)
        return t5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s7) + t4[n9 + 1], t4[0]);
    return new o3(n8, t4, s3);
  };
  var S2 = (s7, n8) => {
    e2 ? s7.adoptedStyleSheets = n8.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet) : n8.forEach((e8) => {
      const n9 = document.createElement("style"), o8 = t2.litNonce;
      void 0 !== o8 && n9.setAttribute("nonce", o8), n9.textContent = e8.cssText, s7.appendChild(n9);
    });
  };
  var c3 = e2 ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
    let e8 = "";
    for (const s7 of t5.cssRules)
      e8 += s7.cssText;
    return r3(e8);
  })(t4) : t4;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s4;
  var e3 = window;
  var r4 = e3.trustedTypes;
  var h3 = r4 ? r4.emptyScript : "";
  var o4 = e3.reactiveElementPolyfillSupport;
  var n4 = { toAttribute(t4, i6) {
    switch (i6) {
      case Boolean:
        t4 = t4 ? h3 : null;
        break;
      case Object:
      case Array:
        t4 = null == t4 ? t4 : JSON.stringify(t4);
    }
    return t4;
  }, fromAttribute(t4, i6) {
    let s7 = t4;
    switch (i6) {
      case Boolean:
        s7 = null !== t4;
        break;
      case Number:
        s7 = null === t4 ? null : Number(t4);
        break;
      case Object:
      case Array:
        try {
          s7 = JSON.parse(t4);
        } catch (t5) {
          s7 = null;
        }
    }
    return s7;
  } };
  var a3 = (t4, i6) => i6 !== t4 && (i6 == i6 || t4 == t4);
  var l3 = { attribute: true, type: String, converter: n4, reflect: false, hasChanged: a3 };
  var d3 = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t4) {
      var i6;
      this.finalize(), (null !== (i6 = this.h) && void 0 !== i6 ? i6 : this.h = []).push(t4);
    }
    static get observedAttributes() {
      this.finalize();
      const t4 = [];
      return this.elementProperties.forEach((i6, s7) => {
        const e8 = this._$Ep(s7, i6);
        void 0 !== e8 && (this._$Ev.set(e8, s7), t4.push(e8));
      }), t4;
    }
    static createProperty(t4, i6 = l3) {
      if (i6.state && (i6.attribute = false), this.finalize(), this.elementProperties.set(t4, i6), !i6.noAccessor && !this.prototype.hasOwnProperty(t4)) {
        const s7 = "symbol" == typeof t4 ? Symbol() : "__" + t4, e8 = this.getPropertyDescriptor(t4, s7, i6);
        void 0 !== e8 && Object.defineProperty(this.prototype, t4, e8);
      }
    }
    static getPropertyDescriptor(t4, i6, s7) {
      return { get() {
        return this[i6];
      }, set(e8) {
        const r6 = this[t4];
        this[i6] = e8, this.requestUpdate(t4, r6, s7);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      return this.elementProperties.get(t4) || l3;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t4 = Object.getPrototypeOf(this);
      if (t4.finalize(), void 0 !== t4.h && (this.h = [...t4.h]), this.elementProperties = new Map(t4.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t5 = this.properties, i6 = [...Object.getOwnPropertyNames(t5), ...Object.getOwnPropertySymbols(t5)];
        for (const s7 of i6)
          this.createProperty(s7, t5[s7]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i6) {
      const s7 = [];
      if (Array.isArray(i6)) {
        const e8 = new Set(i6.flat(1 / 0).reverse());
        for (const i7 of e8)
          s7.unshift(c3(i7));
      } else
        void 0 !== i6 && s7.push(c3(i6));
      return s7;
    }
    static _$Ep(t4, i6) {
      const s7 = i6.attribute;
      return false === s7 ? void 0 : "string" == typeof s7 ? s7 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
    }
    u() {
      var t4;
      this._$E_ = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t4 = this.constructor.h) || void 0 === t4 || t4.forEach((t5) => t5(this));
    }
    addController(t4) {
      var i6, s7;
      (null !== (i6 = this._$ES) && void 0 !== i6 ? i6 : this._$ES = []).push(t4), void 0 !== this.renderRoot && this.isConnected && (null === (s7 = t4.hostConnected) || void 0 === s7 || s7.call(t4));
    }
    removeController(t4) {
      var i6;
      null === (i6 = this._$ES) || void 0 === i6 || i6.splice(this._$ES.indexOf(t4) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t4, i6) => {
        this.hasOwnProperty(i6) && (this._$Ei.set(i6, this[i6]), delete this[i6]);
      });
    }
    createRenderRoot() {
      var t4;
      const s7 = null !== (t4 = this.shadowRoot) && void 0 !== t4 ? t4 : this.attachShadow(this.constructor.shadowRootOptions);
      return S2(s7, this.constructor.elementStyles), s7;
    }
    connectedCallback() {
      var t4;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t4 = this._$ES) || void 0 === t4 || t4.forEach((t5) => {
        var i6;
        return null === (i6 = t5.hostConnected) || void 0 === i6 ? void 0 : i6.call(t5);
      });
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      var t4;
      null === (t4 = this._$ES) || void 0 === t4 || t4.forEach((t5) => {
        var i6;
        return null === (i6 = t5.hostDisconnected) || void 0 === i6 ? void 0 : i6.call(t5);
      });
    }
    attributeChangedCallback(t4, i6, s7) {
      this._$AK(t4, s7);
    }
    _$EO(t4, i6, s7 = l3) {
      var e8;
      const r6 = this.constructor._$Ep(t4, s7);
      if (void 0 !== r6 && true === s7.reflect) {
        const h5 = (void 0 !== (null === (e8 = s7.converter) || void 0 === e8 ? void 0 : e8.toAttribute) ? s7.converter : n4).toAttribute(i6, s7.type);
        this._$El = t4, null == h5 ? this.removeAttribute(r6) : this.setAttribute(r6, h5), this._$El = null;
      }
    }
    _$AK(t4, i6) {
      var s7;
      const e8 = this.constructor, r6 = e8._$Ev.get(t4);
      if (void 0 !== r6 && this._$El !== r6) {
        const t5 = e8.getPropertyOptions(r6), h5 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== (null === (s7 = t5.converter) || void 0 === s7 ? void 0 : s7.fromAttribute) ? t5.converter : n4;
        this._$El = r6, this[r6] = h5.fromAttribute(i6, t5.type), this._$El = null;
      }
    }
    requestUpdate(t4, i6, s7) {
      let e8 = true;
      void 0 !== t4 && (((s7 = s7 || this.constructor.getPropertyOptions(t4)).hasChanged || a3)(this[t4], i6) ? (this._$AL.has(t4) || this._$AL.set(t4, i6), true === s7.reflect && this._$El !== t4 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t4, s7))) : e8 = false), !this.isUpdatePending && e8 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t5) {
        Promise.reject(t5);
      }
      const t4 = this.scheduleUpdate();
      return null != t4 && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t4;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t5, i7) => this[i7] = t5), this._$Ei = void 0);
      let i6 = false;
      const s7 = this._$AL;
      try {
        i6 = this.shouldUpdate(s7), i6 ? (this.willUpdate(s7), null === (t4 = this._$ES) || void 0 === t4 || t4.forEach((t5) => {
          var i7;
          return null === (i7 = t5.hostUpdate) || void 0 === i7 ? void 0 : i7.call(t5);
        }), this.update(s7)) : this._$Ek();
      } catch (t5) {
        throw i6 = false, this._$Ek(), t5;
      }
      i6 && this._$AE(s7);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      var i6;
      null === (i6 = this._$ES) || void 0 === i6 || i6.forEach((t5) => {
        var i7;
        return null === (i7 = t5.hostUpdated) || void 0 === i7 ? void 0 : i7.call(t5);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
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
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      void 0 !== this._$EC && (this._$EC.forEach((t5, i6) => this._$EO(i6, this[i6], t5)), this._$EC = void 0), this._$Ek();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  };
  d3.finalized = true, d3.elementProperties = /* @__PURE__ */ new Map(), d3.elementStyles = [], d3.shadowRootOptions = { mode: "open" }, null == o4 || o4({ ReactiveElement: d3 }), (null !== (s4 = e3.reactiveElementVersions) && void 0 !== s4 ? s4 : e3.reactiveElementVersions = []).push("1.6.1");

  // node_modules/lit-html/lit-html.js
  var t3;
  var i4 = window;
  var s5 = i4.trustedTypes;
  var e4 = s5 ? s5.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var o5 = `lit$${(Math.random() + "").slice(9)}$`;
  var n5 = "?" + o5;
  var l4 = `<${n5}>`;
  var h4 = document;
  var r5 = (t4 = "") => h4.createComment(t4);
  var d4 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
  var u3 = Array.isArray;
  var c4 = (t4) => u3(t4) || "function" == typeof (null == t4 ? void 0 : t4[Symbol.iterator]);
  var v3 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var a4 = /-->/g;
  var f3 = />/g;
  var _ = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var m3 = /'/g;
  var p3 = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var g3 = (t4) => (i6, ...s7) => ({ _$litType$: t4, strings: i6, values: s7 });
  var y3 = g3(1);
  var w3 = g3(2);
  var x3 = Symbol.for("lit-noChange");
  var b3 = Symbol.for("lit-nothing");
  var T3 = /* @__PURE__ */ new WeakMap();
  var A2 = h4.createTreeWalker(h4, 129, null, false);
  var E3 = (t4, i6) => {
    const s7 = t4.length - 1, n8 = [];
    let h5, r6 = 2 === i6 ? "<svg>" : "", d5 = v3;
    for (let i7 = 0; i7 < s7; i7++) {
      const s8 = t4[i7];
      let e8, u5, c5 = -1, g4 = 0;
      for (; g4 < s8.length && (d5.lastIndex = g4, u5 = d5.exec(s8), null !== u5); )
        g4 = d5.lastIndex, d5 === v3 ? "!--" === u5[1] ? d5 = a4 : void 0 !== u5[1] ? d5 = f3 : void 0 !== u5[2] ? ($.test(u5[2]) && (h5 = RegExp("</" + u5[2], "g")), d5 = _) : void 0 !== u5[3] && (d5 = _) : d5 === _ ? ">" === u5[0] ? (d5 = null != h5 ? h5 : v3, c5 = -1) : void 0 === u5[1] ? c5 = -2 : (c5 = d5.lastIndex - u5[2].length, e8 = u5[1], d5 = void 0 === u5[3] ? _ : '"' === u5[3] ? p3 : m3) : d5 === p3 || d5 === m3 ? d5 = _ : d5 === a4 || d5 === f3 ? d5 = v3 : (d5 = _, h5 = void 0);
      const y4 = d5 === _ && t4[i7 + 1].startsWith("/>") ? " " : "";
      r6 += d5 === v3 ? s8 + l4 : c5 >= 0 ? (n8.push(e8), s8.slice(0, c5) + "$lit$" + s8.slice(c5) + o5 + y4) : s8 + o5 + (-2 === c5 ? (n8.push(void 0), i7) : y4);
    }
    const u4 = r6 + (t4[s7] || "<?>") + (2 === i6 ? "</svg>" : "");
    if (!Array.isArray(t4) || !t4.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== e4 ? e4.createHTML(u4) : u4, n8];
  };
  var C2 = class {
    constructor({ strings: t4, _$litType$: i6 }, e8) {
      let l7;
      this.parts = [];
      let h5 = 0, d5 = 0;
      const u4 = t4.length - 1, c5 = this.parts, [v4, a5] = E3(t4, i6);
      if (this.el = C2.createElement(v4, e8), A2.currentNode = this.el.content, 2 === i6) {
        const t5 = this.el.content, i7 = t5.firstChild;
        i7.remove(), t5.append(...i7.childNodes);
      }
      for (; null !== (l7 = A2.nextNode()) && c5.length < u4; ) {
        if (1 === l7.nodeType) {
          if (l7.hasAttributes()) {
            const t5 = [];
            for (const i7 of l7.getAttributeNames())
              if (i7.endsWith("$lit$") || i7.startsWith(o5)) {
                const s7 = a5[d5++];
                if (t5.push(i7), void 0 !== s7) {
                  const t6 = l7.getAttribute(s7.toLowerCase() + "$lit$").split(o5), i8 = /([.?@])?(.*)/.exec(s7);
                  c5.push({ type: 1, index: h5, name: i8[2], strings: t6, ctor: "." === i8[1] ? M : "?" === i8[1] ? k2 : "@" === i8[1] ? H2 : S3 });
                } else
                  c5.push({ type: 6, index: h5 });
              }
            for (const i7 of t5)
              l7.removeAttribute(i7);
          }
          if ($.test(l7.tagName)) {
            const t5 = l7.textContent.split(o5), i7 = t5.length - 1;
            if (i7 > 0) {
              l7.textContent = s5 ? s5.emptyScript : "";
              for (let s7 = 0; s7 < i7; s7++)
                l7.append(t5[s7], r5()), A2.nextNode(), c5.push({ type: 2, index: ++h5 });
              l7.append(t5[i7], r5());
            }
          }
        } else if (8 === l7.nodeType)
          if (l7.data === n5)
            c5.push({ type: 2, index: h5 });
          else {
            let t5 = -1;
            for (; -1 !== (t5 = l7.data.indexOf(o5, t5 + 1)); )
              c5.push({ type: 7, index: h5 }), t5 += o5.length - 1;
          }
        h5++;
      }
    }
    static createElement(t4, i6) {
      const s7 = h4.createElement("template");
      return s7.innerHTML = t4, s7;
    }
  };
  function P3(t4, i6, s7 = t4, e8) {
    var o8, n8, l7, h5;
    if (i6 === x3)
      return i6;
    let r6 = void 0 !== e8 ? null === (o8 = s7._$Co) || void 0 === o8 ? void 0 : o8[e8] : s7._$Cl;
    const u4 = d4(i6) ? void 0 : i6._$litDirective$;
    return (null == r6 ? void 0 : r6.constructor) !== u4 && (null === (n8 = null == r6 ? void 0 : r6._$AO) || void 0 === n8 || n8.call(r6, false), void 0 === u4 ? r6 = void 0 : (r6 = new u4(t4), r6._$AT(t4, s7, e8)), void 0 !== e8 ? (null !== (l7 = (h5 = s7)._$Co) && void 0 !== l7 ? l7 : h5._$Co = [])[e8] = r6 : s7._$Cl = r6), void 0 !== r6 && (i6 = P3(t4, r6._$AS(t4, i6.values), r6, e8)), i6;
  }
  var V2 = class {
    constructor(t4, i6) {
      this.u = [], this._$AN = void 0, this._$AD = t4, this._$AM = i6;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    v(t4) {
      var i6;
      const { el: { content: s7 }, parts: e8 } = this._$AD, o8 = (null !== (i6 = null == t4 ? void 0 : t4.creationScope) && void 0 !== i6 ? i6 : h4).importNode(s7, true);
      A2.currentNode = o8;
      let n8 = A2.nextNode(), l7 = 0, r6 = 0, d5 = e8[0];
      for (; void 0 !== d5; ) {
        if (l7 === d5.index) {
          let i7;
          2 === d5.type ? i7 = new N(n8, n8.nextSibling, this, t4) : 1 === d5.type ? i7 = new d5.ctor(n8, d5.name, d5.strings, this, t4) : 6 === d5.type && (i7 = new I(n8, this, t4)), this.u.push(i7), d5 = e8[++r6];
        }
        l7 !== (null == d5 ? void 0 : d5.index) && (n8 = A2.nextNode(), l7++);
      }
      return o8;
    }
    p(t4) {
      let i6 = 0;
      for (const s7 of this.u)
        void 0 !== s7 && (void 0 !== s7.strings ? (s7._$AI(t4, s7, i6), i6 += s7.strings.length - 2) : s7._$AI(t4[i6])), i6++;
    }
  };
  var N = class {
    constructor(t4, i6, s7, e8) {
      var o8;
      this.type = 2, this._$AH = b3, this._$AN = void 0, this._$AA = t4, this._$AB = i6, this._$AM = s7, this.options = e8, this._$Cm = null === (o8 = null == e8 ? void 0 : e8.isConnected) || void 0 === o8 || o8;
    }
    get _$AU() {
      var t4, i6;
      return null !== (i6 = null === (t4 = this._$AM) || void 0 === t4 ? void 0 : t4._$AU) && void 0 !== i6 ? i6 : this._$Cm;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i6 = this._$AM;
      return void 0 !== i6 && 11 === t4.nodeType && (t4 = i6.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i6 = this) {
      t4 = P3(this, t4, i6), d4(t4) ? t4 === b3 || null == t4 || "" === t4 ? (this._$AH !== b3 && this._$AR(), this._$AH = b3) : t4 !== this._$AH && t4 !== x3 && this.g(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : c4(t4) ? this.k(t4) : this.g(t4);
    }
    O(t4, i6 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t4, i6);
    }
    T(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.O(t4));
    }
    g(t4) {
      this._$AH !== b3 && d4(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(h4.createTextNode(t4)), this._$AH = t4;
    }
    $(t4) {
      var i6;
      const { values: s7, _$litType$: e8 } = t4, o8 = "number" == typeof e8 ? this._$AC(t4) : (void 0 === e8.el && (e8.el = C2.createElement(e8.h, this.options)), e8);
      if ((null === (i6 = this._$AH) || void 0 === i6 ? void 0 : i6._$AD) === o8)
        this._$AH.p(s7);
      else {
        const t5 = new V2(o8, this), i7 = t5.v(this.options);
        t5.p(s7), this.T(i7), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i6 = T3.get(t4.strings);
      return void 0 === i6 && T3.set(t4.strings, i6 = new C2(t4)), i6;
    }
    k(t4) {
      u3(this._$AH) || (this._$AH = [], this._$AR());
      const i6 = this._$AH;
      let s7, e8 = 0;
      for (const o8 of t4)
        e8 === i6.length ? i6.push(s7 = new N(this.O(r5()), this.O(r5()), this, this.options)) : s7 = i6[e8], s7._$AI(o8), e8++;
      e8 < i6.length && (this._$AR(s7 && s7._$AB.nextSibling, e8), i6.length = e8);
    }
    _$AR(t4 = this._$AA.nextSibling, i6) {
      var s7;
      for (null === (s7 = this._$AP) || void 0 === s7 || s7.call(this, false, true, i6); t4 && t4 !== this._$AB; ) {
        const i7 = t4.nextSibling;
        t4.remove(), t4 = i7;
      }
    }
    setConnected(t4) {
      var i6;
      void 0 === this._$AM && (this._$Cm = t4, null === (i6 = this._$AP) || void 0 === i6 || i6.call(this, t4));
    }
  };
  var S3 = class {
    constructor(t4, i6, s7, e8, o8) {
      this.type = 1, this._$AH = b3, this._$AN = void 0, this.element = t4, this.name = i6, this._$AM = e8, this.options = o8, s7.length > 2 || "" !== s7[0] || "" !== s7[1] ? (this._$AH = Array(s7.length - 1).fill(new String()), this.strings = s7) : this._$AH = b3;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4, i6 = this, s7, e8) {
      const o8 = this.strings;
      let n8 = false;
      if (void 0 === o8)
        t4 = P3(this, t4, i6, 0), n8 = !d4(t4) || t4 !== this._$AH && t4 !== x3, n8 && (this._$AH = t4);
      else {
        const e9 = t4;
        let l7, h5;
        for (t4 = o8[0], l7 = 0; l7 < o8.length - 1; l7++)
          h5 = P3(this, e9[s7 + l7], i6, l7), h5 === x3 && (h5 = this._$AH[l7]), n8 || (n8 = !d4(h5) || h5 !== this._$AH[l7]), h5 === b3 ? t4 = b3 : t4 !== b3 && (t4 += (null != h5 ? h5 : "") + o8[l7 + 1]), this._$AH[l7] = h5;
      }
      n8 && !e8 && this.j(t4);
    }
    j(t4) {
      t4 === b3 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t4 ? t4 : "");
    }
  };
  var M = class extends S3 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t4) {
      this.element[this.name] = t4 === b3 ? void 0 : t4;
    }
  };
  var R2 = s5 ? s5.emptyScript : "";
  var k2 = class extends S3 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t4) {
      t4 && t4 !== b3 ? this.element.setAttribute(this.name, R2) : this.element.removeAttribute(this.name);
    }
  };
  var H2 = class extends S3 {
    constructor(t4, i6, s7, e8, o8) {
      super(t4, i6, s7, e8, o8), this.type = 5;
    }
    _$AI(t4, i6 = this) {
      var s7;
      if ((t4 = null !== (s7 = P3(this, t4, i6, 0)) && void 0 !== s7 ? s7 : b3) === x3)
        return;
      const e8 = this._$AH, o8 = t4 === b3 && e8 !== b3 || t4.capture !== e8.capture || t4.once !== e8.once || t4.passive !== e8.passive, n8 = t4 !== b3 && (e8 === b3 || o8);
      o8 && this.element.removeEventListener(this.name, this, e8), n8 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      var i6, s7;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s7 = null === (i6 = this.options) || void 0 === i6 ? void 0 : i6.host) && void 0 !== s7 ? s7 : this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  var I = class {
    constructor(t4, i6, s7) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i6, this.options = s7;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      P3(this, t4);
    }
  };
  var z = i4.litHtmlPolyfillSupport;
  null == z || z(C2, N), (null !== (t3 = i4.litHtmlVersions) && void 0 !== t3 ? t3 : i4.litHtmlVersions = []).push("2.6.1");
  var Z = (t4, i6, s7) => {
    var e8, o8;
    const n8 = null !== (e8 = null == s7 ? void 0 : s7.renderBefore) && void 0 !== e8 ? e8 : i6;
    let l7 = n8._$litPart$;
    if (void 0 === l7) {
      const t5 = null !== (o8 = null == s7 ? void 0 : s7.renderBefore) && void 0 !== o8 ? o8 : null;
      n8._$litPart$ = l7 = new N(i6.insertBefore(r5(), t5), t5, void 0, null != s7 ? s7 : {});
    }
    return l7._$AI(t4), l7;
  };

  // node_modules/lit-element/lit-element.js
  var l5;
  var o6;
  var s6 = class extends d3 {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t4, e8;
      const i6 = super.createRenderRoot();
      return null !== (t4 = (e8 = this.renderOptions).renderBefore) && void 0 !== t4 || (e8.renderBefore = i6.firstChild), i6;
    }
    update(t4) {
      const i6 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = Z(i6, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t4;
      super.connectedCallback(), null === (t4 = this._$Do) || void 0 === t4 || t4.setConnected(true);
    }
    disconnectedCallback() {
      var t4;
      super.disconnectedCallback(), null === (t4 = this._$Do) || void 0 === t4 || t4.setConnected(false);
    }
    render() {
      return x3;
    }
  };
  s6.finalized = true, s6._$litElement$ = true, null === (l5 = globalThis.litElementHydrateSupport) || void 0 === l5 || l5.call(globalThis, { LitElement: s6 });
  var n6 = globalThis.litElementPolyfillSupport;
  null == n6 || n6({ LitElement: s6 });
  (null !== (o6 = globalThis.litElementVersions) && void 0 !== o6 ? o6 : globalThis.litElementVersions = []).push("3.2.2");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var e5 = (e8) => (n8) => "function" == typeof n8 ? ((e9, n9) => (customElements.define(e9, n9), n9))(e8, n8) : ((e9, n9) => {
    const { kind: t4, elements: s7 } = n9;
    return { kind: t4, elements: s7, finisher(n10) {
      customElements.define(e9, n10);
    } };
  })(e8, n8);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i5 = (i6, e8) => "method" === e8.kind && e8.descriptor && !("value" in e8.descriptor) ? { ...e8, finisher(n8) {
    n8.createProperty(e8.key, i6);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e8.key, initializer() {
    "function" == typeof e8.initializer && (this[e8.key] = e8.initializer.call(this));
  }, finisher(n8) {
    n8.createProperty(e8.key, i6);
  } };
  function e6(e8) {
    return (n8, t4) => void 0 !== t4 ? ((i6, e9, n9) => {
      e9.constructor.createProperty(n9, i6);
    })(e8, n8, t4) : i5(e8, n8);
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n7;
  var e7 = null != (null === (n7 = window.HTMLSlotElement) || void 0 === n7 ? void 0 : n7.prototype.assignedElements) ? (o8, n8) => o8.assignedElements(n8) : (o8, n8) => o8.assignedNodes(n8).filter((o9) => o9.nodeType === Node.ELEMENT_NODE);

  // src/content-script/floatie/tooltip.ts
  var Tooltip = class extends s6 {
    constructor() {
      super(...arguments);
      this.isCopyActionEnabled = false;
    }
    render() {
      return y3`
      <div id="sp-floatie-container">
        <div id="sp-floatie-arrow"></div>
        <div
          id="sp-floatie-search"
          class="sp-floatie-action"
          data-action="search"
        >
          Search ${this.selectedText}
        </div>
        <div
          id="sp-floatie-preview"
          class="sp-floatie-action"
          data-action="preview"
        >
          Preview
        </div>
        <div id="sp-floatie-copy" class="sp-floatie-action" data-action="copy">
          Copy ${this.selectedText}
        </div>
      </div>
    `;
    }
    connectedCallback() {
      window.onscroll = () => this.hideAll();
      window.onresize = () => this.hideAll();
      window.oncontextmenu = () => this.hideAll();
      document.onmouseup = (e8) => this.deferredMaybeShow(e8);
      document.onkeydown = () => this.hideAll();
      this.setupLinkPreviews();
    }
    setupLinkPreviews() {
      const anchors = document.querySelectorAll("a");
      let showTimeout = null;
      let hideTimeout = null;
      anchors.forEach((a5) => {
        if (!this.isGoodUrl(a5.href)) {
          return;
        }
        if (!a5.innerText.trim()) {
          return;
        }
        a5.addEventListener("mouseover", (unused) => {
          if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
          }
          showTimeout = setTimeout(() => {
            this.showActions(a5.getBoundingClientRect(), a5.href, ["preview"]);
          }, 500);
        });
        a5.addEventListener("mouseout", () => {
          if (showTimeout) {
            clearTimeout(showTimeout);
            showTimeout = null;
          }
          hideTimeout = setTimeout(() => {
            this.hideAll();
          }, 2e3);
        });
      });
    }
    stopListening() {
      this.tooltipVisible = false;
      document.removeEventListener("onmouseup", () => {
      });
      window.removeEventListener("onscroll", () => {
      });
      window.removeEventListener("onresize", () => {
      });
    }
    deferredMaybeShow(e8) {
      this.showTimeout = window.setTimeout(() => this.maybeShow(e8), 100);
    }
    maybeShow(e8) {
      this.hideAll();
      if (typeof window.getSelection == "undefined") {
        return;
      }
      const selection = window.getSelection();
      if (selection.isCollapsed) {
        return;
      }
      const selectedText = selection.toString().trim();
      const range = selection.getRangeAt(0);
      const boundingRect = range.getBoundingClientRect();
      console.debug("Selected: ", selectedText);
      const actionsToShow = [];
      if (this.shouldShowPreview(e8, selectedText)) {
        actionsToShow.push("preview");
      } else if (this.shouldShowSearch(e8, selectedText)) {
        actionsToShow.push("search");
      }
      if (this.shouldShowCopy(selectedText)) {
        actionsToShow.push("copy");
      }
      this.showActions(boundingRect, selectedText, actionsToShow);
    }
    getAbsoluteUrl(urlStr) {
      const absoluteUrlMatcher = new RegExp("^(?:[a-z+]+:)?//", "i");
      let url;
      try {
        if (absoluteUrlMatcher.test(urlStr)) {
          url = new URL(urlStr);
        } else {
          url = new URL(urlStr, document.location.href);
        }
      } catch (e8) {
        return null;
      }
      return url;
    }
    isGoodUrl(urlStr) {
      if (!urlStr || !urlStr.trim()) {
        return false;
      }
      const url = this.getAbsoluteUrl(urlStr);
      if (url === null) {
        return false;
      }
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        return false;
      }
      if (url.hostname === window.location.hostname) {
        return false;
      }
      return true;
    }
    shouldShowCopy(selectedText) {
      return this.isCopyActionEnabled && selectedText.length > 0;
    }
    shouldShowPreview(e8, selectedText) {
      const isGoodHyperlink = (e9) => {
        var target = e9.target;
        do {
          if (target.nodeName.toUpperCase() === "A" && this.isGoodUrl(target.href)) {
            return true;
          }
        } while (target = target.parentElement);
        return false;
      };
      return this.isGoodUrl(selectedText) || isGoodHyperlink(e8);
    }
    shouldShowSearch(e8, selectedText) {
      const isQuerySize = (text) => {
        return text.length > 0 && text.length < 100;
      };
      const isEmail = (email) => {
        return String(email).toLowerCase().match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
      const isDate = (dataStr) => {
        return !isNaN(Date.parse(dataStr));
      };
      const hasLetters = (text) => {
        return /[a-zA-Z]/.test(text);
      };
      return isQuerySize(selectedText) && hasLetters(selectedText) && !isEmail(selectedText) && !isDate(selectedText) && !this.shouldShowPreview(e8, selectedText);
    }
    showActions(boundingRect, text, buttons) {
      console.log("#showActions:", boundingRect, text, buttons);
      this.hideAll();
      this.selectedText = text;
      this.showContainer(boundingRect);
      buttons.forEach((b4) => {
        switch (b4) {
          case "search":
            this.searchVisible = true;
            break;
          case "preview":
            this.previewVisible = true;
            break;
          case "copy":
            this.copyVisible = true;
        }
      });
    }
    sendMessage(action, data) {
      window.postMessage(
        { application: "better-previews", action, data },
        window.location.origin
      );
    }
    showContainer(boundingRect) {
      this.tooltipVisible = false;
      const getMaxZIndex = () => {
        return new Promise((resolve) => {
          const z2 = Math.max(
            ...Array.from(
              document.querySelectorAll("body *"),
              (el) => parseFloat(window.getComputedStyle(el).zIndex)
            ).filter((zIndex) => !Number.isNaN(zIndex)),
            0
          );
          resolve(z2);
        });
      };
      const virtualEl = {
        getBoundingClientRect() {
          return {
            width: boundingRect.width,
            height: boundingRect.height,
            x: boundingRect.x,
            y: boundingRect.y,
            top: boundingRect.top,
            left: boundingRect.left,
            right: boundingRect.right,
            bottom: boundingRect.bottom
          };
        }
      };
      V(virtualEl, this, {
        placement: "top",
        strategy: "absolute",
        middleware: [
          O(12),
          b(),
          E({ padding: 5 })
        ]
      }).then(({ x: x4, y: y4, placement, middlewareData }) => {
        Object.assign(this.style, {
          top: `${y4}px`,
          left: `${x4}px`
        });
        const coords = middlewareData.arrow;
        let staticSide = "bottom";
        switch (placement.split("-")[0]) {
          case "top":
            staticSide = "bottom";
            break;
          case "left":
            staticSide = "right";
            break;
          case "bottom":
            staticSide = "top";
            break;
          case "right":
            staticSide = "left";
            break;
        }
        getMaxZIndex().then((maxZ) => {
          this.style.zIndex = "" + (maxZ + 10);
        });
      });
    }
    hideAll() {
      clearTimeout(this.showTimeout);
      this.tooltipVisible = false;
      this.copyVisible = false;
      this.previewVisible = false;
      this.searchVisible = false;
    }
    inIframe() {
      try {
        return window.self !== window.top;
      } catch (e8) {
        return true;
      }
    }
  };
  Tooltip.styles = i3`
    // #sp-floatie-container {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   background: #222222;
    //   color: white;
    //   border-radius: 4px;
    //   padding: 2px;
    //   font-size: 11px;
    //   font-family: sans-serif;
    // }

    // #sp-floatie-arrow {
    //   position: absolute;
    //   background: rgb(255, 34, 34);
    //   background: linear-gradient(
    //     -45deg,
    //     rgba(34, 34, 34, 1) 0%,
    //     rgba(34, 34, 34, 1) 51%,
    //     rgba(0, 0, 0, 0) 53%,
    //     rgba(0, 0, 0, 0) 80%
    //   );
    //   width: 8px;
    //   height: 8px;
    //   transform: rotate(45deg);
    // }

    // .sp-floatie-action {
    //   display: block;
    //   background-color: #222222;
    //   padding-top: 5px;
    //   padding-bottom: 5px;
    //   padding-left: 8px;
    //   padding-right: 8px;
    //   margin: 0 0 !important;
    // }

    // .sp-floatie-action:hover {
    //   background-color: #777;
    // }
  `;
  __decorateClass([
    e6()
  ], Tooltip.prototype, "tooltipVisible", 2);
  __decorateClass([
    e6()
  ], Tooltip.prototype, "copyVisible", 2);
  __decorateClass([
    e6()
  ], Tooltip.prototype, "searchVisible", 2);
  __decorateClass([
    e6()
  ], Tooltip.prototype, "previewVisible", 2);
  __decorateClass([
    e6()
  ], Tooltip.prototype, "selectedText", 2);
  Tooltip = __decorateClass([
    e5("better-preview-tooltip")
  ], Tooltip);

  // src/content-script/floatie/floatie.ts
  var BFTooltip = class extends HTMLElement {
    constructor() {
      super();
    }
  };
  var Floatie = class {
    constructor() {
      this.isCopyActionEnabled = false;
      const markup = `
        <div id="sp-floatie-container">
            <div id="sp-floatie-arrow"></div>
            <div id="sp-floatie-search" class="sp-floatie-action" data-action="search">Search</div>
            <div id="sp-floatie-preview" class="sp-floatie-action" data-action="preview">Preview</div>
            <div id="sp-floatie-copy" class="sp-floatie-action" data-action="copy">Copy</div>
        </div>
        `;
      const range = document.createRange();
      range.selectNode(document.getElementsByTagName("body").item(0));
      this.documentFragment = range.createContextualFragment(markup);
      const container = this.documentFragment.getElementById(
        "sp-floatie-container"
      );
      const searchButton = this.documentFragment.getElementById("sp-floatie-search");
      const previewButton = this.documentFragment.getElementById("sp-floatie-preview");
      const copyButton = this.documentFragment.getElementById("sp-floatie-copy");
      const tooltipArrow = this.documentFragment.getElementById("sp-floatie-arrow");
      if (!container || !searchButton || !previewButton || !copyButton || !tooltipArrow) {
        throw new Error("Impossible error obtaining action buttons from DOM");
      }
      this.container = container;
      this.searchButton = searchButton;
      this.previewButton = previewButton;
      this.copyButton = copyButton;
      this.tooltipArrow = tooltipArrow;
      console.debug("Initialized floatie");
    }
    startListening() {
      if (this.inIframe()) {
        return;
      }
      const tooltip = new Tooltip();
      try {
        customElements.define("better-previews-tooltip", BFTooltip);
      } catch (e8) {
        console.warn("Error re-defining custom element");
      }
      const bft = document.createElement("better-previews-tooltip");
      const style = document.createElement("style");
      style.textContent = floatie_css_default;
      bft.appendChild(style);
      bft.appendChild(tooltip);
      bft.appendChild(this.documentFragment);
      bft.attachShadow({ mode: "open" }).innerHTML = "<slot></slot>";
      document.body.appendChild(bft);
      window.onscroll = () => this.hideAll();
      window.onresize = () => this.hideAll();
      window.oncontextmenu = () => this.hideAll();
      document.onmouseup = (e8) => this.deferredMaybeShow(e8);
      document.onkeydown = () => this.hideAll();
      this.setupLinkPreviews();
    }
    setupLinkPreviews() {
      const anchors = document.querySelectorAll("a");
      let showTimeout = null;
      let hideTimeout = null;
      anchors.forEach((a5) => {
        if (!this.isGoodUrl(a5.href)) {
          return;
        }
        if (!a5.innerText.trim()) {
          return;
        }
        a5.addEventListener("mouseover", (e8) => {
          if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
          }
          showTimeout = setTimeout(() => {
            this.showActions(a5.getBoundingClientRect(), e8, a5.href, [
              this.previewButton
            ]);
          }, 500);
        });
        a5.addEventListener("mouseout", () => {
          if (showTimeout) {
            clearTimeout(showTimeout);
            showTimeout = null;
          }
          hideTimeout = setTimeout(() => {
            this.hideAll();
          }, 2e3);
        });
      });
    }
    stopListening() {
      document.body.removeChild(this.documentFragment);
      document.removeEventListener("onmouseup", () => {
      });
      window.removeEventListener("onscroll", () => {
      });
      window.removeEventListener("onresize", () => {
      });
    }
    deferredMaybeShow(e8) {
      this.showTimeout = window.setTimeout(() => this.maybeShow(e8), 100);
    }
    maybeShow(e8) {
      this.hideAll();
      if (typeof window.getSelection == "undefined") {
        return;
      }
      const selection = window.getSelection();
      if (selection.isCollapsed) {
        return;
      }
      const selectedText = selection.toString().trim();
      const range = selection.getRangeAt(0);
      const boundingRect = range.getBoundingClientRect();
      console.debug("Selected: ", selectedText);
      const actionsToShow = [];
      if (this.shouldShowPreview(e8, selectedText)) {
        actionsToShow.push(this.previewButton);
      } else if (this.shouldShowSearch(e8, selectedText)) {
        actionsToShow.push(this.searchButton);
      }
      if (this.shouldShowCopy(selectedText)) {
        actionsToShow.push(this.copyButton);
      }
      this.showActions(boundingRect, e8, selectedText, actionsToShow);
    }
    getAbsoluteUrl(urlStr) {
      const absoluteUrlMatcher = new RegExp("^(?:[a-z+]+:)?//", "i");
      let url;
      try {
        if (absoluteUrlMatcher.test(urlStr)) {
          url = new URL(urlStr);
        } else {
          return null;
        }
      } catch (e8) {
        return null;
      }
      return url;
    }
    isGoodUrl(urlStr) {
      if (!urlStr || !urlStr.trim()) {
        return false;
      }
      const url = this.getAbsoluteUrl(urlStr);
      if (url === null) {
        return false;
      }
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        return false;
      }
      if (url.hostname === window.location.hostname) {
        return false;
      }
      return true;
    }
    shouldShowCopy(selectedText) {
      return this.isCopyActionEnabled && selectedText.length > 0;
    }
    shouldShowPreview(e8, selectedText) {
      const isGoodHyperlink = (e9) => {
        var target = e9.target;
        do {
          if (target.nodeName.toUpperCase() === "A" && this.isGoodUrl(target.href)) {
            return true;
          }
        } while (target = target.parentElement);
        return false;
      };
      return this.isGoodUrl(selectedText) || isGoodHyperlink(e8);
    }
    getPreviewUrl(e8, selectedText) {
      const isWrappedByLink = (e9) => {
        var target = e9.target;
        do {
          if (target.nodeName.toUpperCase() === "A" && this.isGoodUrl(target.href)) {
            return target.href;
          }
        } while (target = target.parentElement);
        return void 0;
      };
      if (this.isGoodUrl(selectedText)) {
        return this.getAbsoluteUrl(selectedText)?.href;
      }
      return isWrappedByLink(e8);
    }
    shouldShowSearch(e8, selectedText) {
      const isQuerySize = (text) => {
        return text.length > 0 && text.length < 100;
      };
      const isEmail = (email) => {
        return String(email).toLowerCase().match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
      const isDate = (dataStr) => {
        return !isNaN(Date.parse(dataStr));
      };
      const hasLetters = (text) => {
        return /[a-zA-Z]/.test(text);
      };
      return isQuerySize(selectedText) && hasLetters(selectedText) && !isEmail(selectedText) && !isDate(selectedText) && !this.shouldShowPreview(e8, selectedText);
    }
    showActions(boundingRect, e8, text, buttons) {
      this.hideAll();
      if (buttons.length === 0) {
        return;
      }
      this.showContainer(boundingRect);
      buttons.forEach((b4) => {
        b4.style.display = "inline-block";
        b4.onclick = () => {
          if (typeof window.getSelection != "undefined") {
            const selection = window.getSelection();
            if (!selection.isCollapsed) {
              text = selection.toString().trim();
            }
            if (b4.innerText == "Preview") {
              const href = this.getPreviewUrl(e8, text);
              if (href) {
                text = href;
              }
            }
          }
          this.sendMessage(
            b4.getAttribute("data-action") || "unknown-action",
            text
          );
          this.hideAll();
        };
      });
    }
    sendMessage(action, data) {
      window.postMessage(
        { application: "better-previews", action, data },
        window.location.origin
      );
    }
    showContainer(boundingRect) {
      this.container.style.display = "block";
      const getMaxZIndex = () => {
        return new Promise((resolve) => {
          const z2 = Math.max(
            ...Array.from(
              document.querySelectorAll("body *"),
              (el) => parseFloat(window.getComputedStyle(el).zIndex)
            ).filter((zIndex) => !Number.isNaN(zIndex)),
            0
          );
          resolve(z2);
        });
      };
      const virtualEl = {
        getBoundingClientRect() {
          return {
            width: boundingRect.width,
            height: boundingRect.height,
            x: boundingRect.x,
            y: boundingRect.y,
            top: boundingRect.top,
            left: boundingRect.left,
            right: boundingRect.right,
            bottom: boundingRect.bottom
          };
        }
      };
      V(virtualEl, this.container, {
        placement: "top",
        strategy: "absolute",
        middleware: [
          O(12),
          b(),
          E({ padding: 5 }),
          m({ element: this.tooltipArrow })
        ]
      }).then(({ x: x4, y: y4, placement, middlewareData }) => {
        Object.assign(this.container.style, {
          top: `${y4}px`,
          left: `${x4}px`
        });
        const coords = middlewareData.arrow;
        let staticSide = "bottom";
        switch (placement.split("-")[0]) {
          case "top":
            staticSide = "bottom";
            break;
          case "left":
            staticSide = "right";
            break;
          case "bottom":
            staticSide = "top";
            break;
          case "right":
            staticSide = "left";
            break;
        }
        Object.assign(this.tooltipArrow.style, {
          left: coords?.x != null ? `${coords.x}px` : "",
          top: coords?.y != null ? `${coords.y}px` : "",
          right: "",
          bottom: "",
          [staticSide]: "-4px"
        });
        getMaxZIndex().then((maxZ) => {
          this.container.style.zIndex = "" + (maxZ + 10);
          this.tooltipArrow.style.zIndex = "" + (maxZ - 1);
        });
      });
    }
    hideAll() {
      clearTimeout(this.showTimeout);
      this.container.style.display = "none";
      this.copyButton.style.display = "none";
      this.searchButton.style.display = "none";
      this.previewButton.style.display = "none";
    }
    inIframe() {
      try {
        return window.self !== window.top;
      } catch (e8) {
        return true;
      }
    }
  };

  // src/content-script/iframe-helper.ts
  var IFrameHelper = class {
    constructor() {
      this.iframeName = "betterpreviews.com/mainframe";
    }
    registerListeners() {
      if (!this.inIframe()) {
        return;
      }
      if (this.getFrameName() !== this.iframeName) {
        return;
      }
      document.addEventListener(
        "click",
        (e8) => {
          var targetEl = this.getLinkTarget(e8);
          if (!targetEl || !targetEl.href) {
            return;
          }
          if (targetEl.href.startsWith("#")) {
            return;
          }
          e8.stopImmediatePropagation();
          e8.preventDefault();
          console.debug("Prevented click propagation and posting navigate");
          this.sendMessage({
            action: "navigate",
            href: targetEl.href,
            source: window.location.href,
            sourceFrame: this.getFrameName()
          });
        },
        true
      );
      window.addEventListener("load", () => {
        this.sendMessage({
          action: "load",
          href: document.location.href,
          data: { title: this.getTitle() },
          sourceFrame: this.getFrameName()
        });
      });
      window.addEventListener("unload", () => {
        this.sendMessage({
          action: "unload",
          href: document.location.href,
          sourceFrame: this.getFrameName()
        });
      });
    }
    inIframe() {
      try {
        return window.self !== window.top;
      } catch (e8) {
        return true;
      }
    }
    getFrameName() {
      return window.name;
    }
    getLinkTarget(e8) {
      var target = e8.target;
      do {
        if (target.nodeName.toUpperCase() === "A" && target.href) {
          return target;
        }
      } while (target = target.parentElement);
      return null;
    }
    sendMessage(message) {
      console.debug("#sendMessage", message);
      chrome.runtime.sendMessage({ application: "better-previews", ...message });
    }
    getTitle() {
      if (document.title) {
        return document.title;
      }
      const metaSiteName = document.querySelector(
        "meta[property='og:site_name'][content]"
      );
      if (metaSiteName) {
        return metaSiteName.content;
      }
      return window.location.origin;
    }
  };

  // node_modules/@sentry/utils/esm/is.js
  var objectToString = Object.prototype.toString;
  function isError(wat) {
    switch (objectToString.call(wat)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return true;
      default:
        return isInstanceOf(wat, Error);
    }
  }
  function isBuiltin(wat, className) {
    return objectToString.call(wat) === `[object ${className}]`;
  }
  function isErrorEvent(wat) {
    return isBuiltin(wat, "ErrorEvent");
  }
  function isDOMError(wat) {
    return isBuiltin(wat, "DOMError");
  }
  function isDOMException(wat) {
    return isBuiltin(wat, "DOMException");
  }
  function isString(wat) {
    return isBuiltin(wat, "String");
  }
  function isPrimitive(wat) {
    return wat === null || typeof wat !== "object" && typeof wat !== "function";
  }
  function isPlainObject(wat) {
    return isBuiltin(wat, "Object");
  }
  function isEvent(wat) {
    return typeof Event !== "undefined" && isInstanceOf(wat, Event);
  }
  function isElement(wat) {
    return typeof Element !== "undefined" && isInstanceOf(wat, Element);
  }
  function isRegExp(wat) {
    return isBuiltin(wat, "RegExp");
  }
  function isThenable(wat) {
    return Boolean(wat && wat.then && typeof wat.then === "function");
  }
  function isSyntheticEvent(wat) {
    return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
  }
  function isNaN2(wat) {
    return typeof wat === "number" && wat !== wat;
  }
  function isInstanceOf(wat, base) {
    try {
      return wat instanceof base;
    } catch (_e) {
      return false;
    }
  }

  // node_modules/@sentry/utils/esm/worldwide.js
  function isGlobalObj(obj) {
    return obj && obj.Math == Math ? obj : void 0;
  }
  var GLOBAL_OBJ = typeof globalThis == "object" && isGlobalObj(globalThis) || typeof window == "object" && isGlobalObj(window) || typeof self == "object" && isGlobalObj(self) || typeof global == "object" && isGlobalObj(global) || function() {
    return this;
  }() || {};
  function getGlobalObject() {
    return GLOBAL_OBJ;
  }
  function getGlobalSingleton(name, creator, obj) {
    const gbl = obj || GLOBAL_OBJ;
    const __SENTRY__ = gbl.__SENTRY__ = gbl.__SENTRY__ || {};
    const singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
    return singleton;
  }

  // node_modules/@sentry/utils/esm/browser.js
  var WINDOW = getGlobalObject();
  var DEFAULT_MAX_STRING_LENGTH = 80;
  function htmlTreeAsString(elem, options = {}) {
    try {
      let currentElem = elem;
      const MAX_TRAVERSE_HEIGHT = 5;
      const out = [];
      let height = 0;
      let len = 0;
      const separator = " > ";
      const sepLength = separator.length;
      let nextStr;
      const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
      const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
      while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
        nextStr = _htmlElementAsString(currentElem, keyAttrs);
        if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) {
          break;
        }
        out.push(nextStr);
        len += nextStr.length;
        currentElem = currentElem.parentNode;
      }
      return out.reverse().join(separator);
    } catch (_oO) {
      return "<unknown>";
    }
  }
  function _htmlElementAsString(el, keyAttrs) {
    const elem = el;
    const out = [];
    let className;
    let classes;
    let key;
    let attr;
    let i6;
    if (!elem || !elem.tagName) {
      return "";
    }
    out.push(elem.tagName.toLowerCase());
    const keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter((keyAttr) => elem.getAttribute(keyAttr)).map((keyAttr) => [keyAttr, elem.getAttribute(keyAttr)]) : null;
    if (keyAttrPairs && keyAttrPairs.length) {
      keyAttrPairs.forEach((keyAttrPair) => {
        out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
      });
    } else {
      if (elem.id) {
        out.push(`#${elem.id}`);
      }
      className = elem.className;
      if (className && isString(className)) {
        classes = className.split(/\s+/);
        for (i6 = 0; i6 < classes.length; i6++) {
          out.push(`.${classes[i6]}`);
        }
      }
    }
    const allowedAttrs = ["type", "name", "title", "alt"];
    for (i6 = 0; i6 < allowedAttrs.length; i6++) {
      key = allowedAttrs[i6];
      attr = elem.getAttribute(key);
      if (attr) {
        out.push(`[${key}="${attr}"]`);
      }
    }
    return out.join("");
  }
  function getLocationHref() {
    try {
      return WINDOW.document.location.href;
    } catch (oO) {
      return "";
    }
  }
  function getDomElement(selector) {
    if (WINDOW.document && WINDOW.document.querySelector) {
      return WINDOW.document.querySelector(selector);
    }
    return null;
  }

  // node_modules/@sentry/utils/esm/error.js
  var SentryError = class extends Error {
    constructor(message, logLevel = "warn") {
      super(message);
      this.message = message;
      ;
      this.name = new.target.prototype.constructor.name;
      Object.setPrototypeOf(this, new.target.prototype);
      this.logLevel = logLevel;
    }
  };

  // node_modules/@sentry/utils/esm/dsn.js
  var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function isValidProtocol(protocol) {
    return protocol === "http" || protocol === "https";
  }
  function dsnToString(dsn, withPassword = false) {
    const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
    return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
  }
  function dsnFromString(str) {
    const match = DSN_REGEX.exec(str);
    if (!match) {
      throw new SentryError(`Invalid Sentry Dsn: ${str}`);
    }
    const [protocol, publicKey, pass = "", host, port = "", lastPath] = match.slice(1);
    let path = "";
    let projectId = lastPath;
    const split = projectId.split("/");
    if (split.length > 1) {
      path = split.slice(0, -1).join("/");
      projectId = split.pop();
    }
    if (projectId) {
      const projectMatch = projectId.match(/^\d+/);
      if (projectMatch) {
        projectId = projectMatch[0];
      }
    }
    return dsnFromComponents({ host, pass, path, projectId, port, protocol, publicKey });
  }
  function dsnFromComponents(components) {
    return {
      protocol: components.protocol,
      publicKey: components.publicKey || "",
      pass: components.pass || "",
      host: components.host,
      port: components.port || "",
      path: components.path || "",
      projectId: components.projectId
    };
  }
  function validateDsn(dsn) {
    if (!(typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__)) {
      return;
    }
    const { port, projectId, protocol } = dsn;
    const requiredComponents = ["protocol", "publicKey", "host", "projectId"];
    requiredComponents.forEach((component) => {
      if (!dsn[component]) {
        throw new SentryError(`Invalid Sentry Dsn: ${component} missing`);
      }
    });
    if (!projectId.match(/^\d+$/)) {
      throw new SentryError(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    }
    if (!isValidProtocol(protocol)) {
      throw new SentryError(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    }
    if (port && isNaN(parseInt(port, 10))) {
      throw new SentryError(`Invalid Sentry Dsn: Invalid port ${port}`);
    }
    return true;
  }
  function makeDsn(from) {
    const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
    validateDsn(components);
    return components;
  }

  // node_modules/@sentry/utils/esm/logger.js
  var PREFIX = "Sentry Logger ";
  var CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"];
  function consoleSandbox(callback) {
    if (!("console" in GLOBAL_OBJ)) {
      return callback();
    }
    const originalConsole = GLOBAL_OBJ.console;
    const wrappedLevels = {};
    CONSOLE_LEVELS.forEach((level) => {
      const originalWrappedFunc = originalConsole[level] && originalConsole[level].__sentry_original__;
      if (level in originalConsole && originalWrappedFunc) {
        wrappedLevels[level] = originalConsole[level];
        originalConsole[level] = originalWrappedFunc;
      }
    });
    try {
      return callback();
    } finally {
      Object.keys(wrappedLevels).forEach((level) => {
        originalConsole[level] = wrappedLevels[level];
      });
    }
  }
  function makeLogger() {
    let enabled = false;
    const logger2 = {
      enable: () => {
        enabled = true;
      },
      disable: () => {
        enabled = false;
      }
    };
    if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
      CONSOLE_LEVELS.forEach((name) => {
        logger2[name] = (...args) => {
          if (enabled) {
            consoleSandbox(() => {
              GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
            });
          }
        };
      });
    } else {
      CONSOLE_LEVELS.forEach((name) => {
        logger2[name] = () => void 0;
      });
    }
    return logger2;
  }
  var logger;
  if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
    logger = getGlobalSingleton("logger", makeLogger);
  } else {
    logger = makeLogger();
  }

  // node_modules/@sentry/utils/esm/string.js
  function truncate(str, max = 0) {
    if (typeof str !== "string" || max === 0) {
      return str;
    }
    return str.length <= max ? str : `${str.substr(0, max)}...`;
  }
  function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
      return "";
    }
    const output = [];
    for (let i6 = 0; i6 < input.length; i6++) {
      const value = input[i6];
      try {
        output.push(String(value));
      } catch (e8) {
        output.push("[value cannot be serialized]");
      }
    }
    return output.join(delimiter);
  }
  function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
    if (!isString(value)) {
      return false;
    }
    if (isRegExp(pattern)) {
      return pattern.test(value);
    }
    if (isString(pattern)) {
      return requireExactStringMatch ? value === pattern : value.includes(pattern);
    }
    return false;
  }
  function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
    return patterns.some((pattern) => isMatchingPattern(testString, pattern, requireExactStringMatch));
  }

  // node_modules/@sentry/utils/esm/object.js
  function fill(source, name, replacementFactory) {
    if (!(name in source)) {
      return;
    }
    const original = source[name];
    const wrapped = replacementFactory(original);
    if (typeof wrapped === "function") {
      try {
        markFunctionWrapped(wrapped, original);
      } catch (_Oo) {
      }
    }
    source[name] = wrapped;
  }
  function addNonEnumerableProperty(obj, name, value) {
    Object.defineProperty(obj, name, {
      value,
      writable: true,
      configurable: true
    });
  }
  function markFunctionWrapped(wrapped, original) {
    const proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, "__sentry_original__", original);
  }
  function getOriginalFunction(func) {
    return func.__sentry_original__;
  }
  function urlEncode(object) {
    return Object.keys(object).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`).join("&");
  }
  function convertToPlainObject(value) {
    if (isError(value)) {
      return {
        message: value.message,
        name: value.name,
        stack: value.stack,
        ...getOwnProperties(value)
      };
    } else if (isEvent(value)) {
      const newObj = {
        type: value.type,
        target: serializeEventTarget(value.target),
        currentTarget: serializeEventTarget(value.currentTarget),
        ...getOwnProperties(value)
      };
      if (typeof CustomEvent !== "undefined" && isInstanceOf(value, CustomEvent)) {
        newObj.detail = value.detail;
      }
      return newObj;
    } else {
      return value;
    }
  }
  function serializeEventTarget(target) {
    try {
      return isElement(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
    } catch (_oO) {
      return "<unknown>";
    }
  }
  function getOwnProperties(obj) {
    if (typeof obj === "object" && obj !== null) {
      const extractedProps = {};
      for (const property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
          extractedProps[property] = obj[property];
        }
      }
      return extractedProps;
    } else {
      return {};
    }
  }
  function extractExceptionKeysForMessage(exception, maxLength = 40) {
    const keys = Object.keys(convertToPlainObject(exception));
    keys.sort();
    if (!keys.length) {
      return "[object has no keys]";
    }
    if (keys[0].length >= maxLength) {
      return truncate(keys[0], maxLength);
    }
    for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
      const serialized = keys.slice(0, includedKeys).join(", ");
      if (serialized.length > maxLength) {
        continue;
      }
      if (includedKeys === keys.length) {
        return serialized;
      }
      return truncate(serialized, maxLength);
    }
    return "";
  }
  function dropUndefinedKeys(inputValue) {
    const memoizationMap = /* @__PURE__ */ new Map();
    return _dropUndefinedKeys(inputValue, memoizationMap);
  }
  function _dropUndefinedKeys(inputValue, memoizationMap) {
    if (isPlainObject(inputValue)) {
      const memoVal = memoizationMap.get(inputValue);
      if (memoVal !== void 0) {
        return memoVal;
      }
      const returnValue = {};
      memoizationMap.set(inputValue, returnValue);
      for (const key of Object.keys(inputValue)) {
        if (typeof inputValue[key] !== "undefined") {
          returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
        }
      }
      return returnValue;
    }
    if (Array.isArray(inputValue)) {
      const memoVal = memoizationMap.get(inputValue);
      if (memoVal !== void 0) {
        return memoVal;
      }
      const returnValue = [];
      memoizationMap.set(inputValue, returnValue);
      inputValue.forEach((item) => {
        returnValue.push(_dropUndefinedKeys(item, memoizationMap));
      });
      return returnValue;
    }
    return inputValue;
  }

  // node_modules/@sentry/utils/esm/buildPolyfills/_nullishCoalesce.js
  function _nullishCoalesce(lhs, rhsFn) {
    return lhs != null ? lhs : rhsFn();
  }

  // node_modules/@sentry/utils/esm/buildPolyfills/_optionalChain.js
  function _optionalChain(ops) {
    let lastAccessLHS = void 0;
    let value = ops[0];
    let i6 = 1;
    while (i6 < ops.length) {
      const op = ops[i6];
      const fn = ops[i6 + 1];
      i6 += 2;
      if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
        return;
      }
      if (op === "access" || op === "optionalAccess") {
        lastAccessLHS = value;
        value = fn(value);
      } else if (op === "call" || op === "optionalCall") {
        value = fn((...args) => value.call(lastAccessLHS, ...args));
        lastAccessLHS = void 0;
      }
    }
    return value;
  }

  // node_modules/@sentry/utils/esm/stacktrace.js
  var STACKTRACE_LIMIT = 50;
  function createStackParser(...parsers) {
    const sortedParsers = parsers.sort((a5, b4) => a5[0] - b4[0]).map((p4) => p4[1]);
    return (stack, skipFirst = 0) => {
      const frames = [];
      for (const line of stack.split("\n").slice(skipFirst)) {
        if (line.length > 1024) {
          continue;
        }
        const cleanedLine = line.replace(/\(error: (.*)\)/, "$1");
        for (const parser of sortedParsers) {
          const frame = parser(cleanedLine);
          if (frame) {
            frames.push(frame);
            break;
          }
        }
      }
      return stripSentryFramesAndReverse(frames);
    };
  }
  function stackParserFromStackParserOptions(stackParser) {
    if (Array.isArray(stackParser)) {
      return createStackParser(...stackParser);
    }
    return stackParser;
  }
  function stripSentryFramesAndReverse(stack) {
    if (!stack.length) {
      return [];
    }
    let localStack = stack;
    const firstFrameFunction = localStack[0].function || "";
    const lastFrameFunction = localStack[localStack.length - 1].function || "";
    if (firstFrameFunction.indexOf("captureMessage") !== -1 || firstFrameFunction.indexOf("captureException") !== -1) {
      localStack = localStack.slice(1);
    }
    if (lastFrameFunction.indexOf("sentryWrapped") !== -1) {
      localStack = localStack.slice(0, -1);
    }
    return localStack.slice(0, STACKTRACE_LIMIT).map((frame) => ({
      ...frame,
      filename: frame.filename || localStack[0].filename,
      function: frame.function || "?"
    })).reverse();
  }
  var defaultFunctionName = "<anonymous>";
  function getFunctionName(fn) {
    try {
      if (!fn || typeof fn !== "function") {
        return defaultFunctionName;
      }
      return fn.name || defaultFunctionName;
    } catch (e8) {
      return defaultFunctionName;
    }
  }

  // node_modules/@sentry/utils/esm/supports.js
  var WINDOW2 = getGlobalObject();
  function supportsFetch() {
    if (!("fetch" in WINDOW2)) {
      return false;
    }
    try {
      new Headers();
      new Request("http://www.example.com");
      new Response();
      return true;
    } catch (e8) {
      return false;
    }
  }
  function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
  }
  function supportsNativeFetch() {
    if (!supportsFetch()) {
      return false;
    }
    if (isNativeFetch(WINDOW2.fetch)) {
      return true;
    }
    let result = false;
    const doc = WINDOW2.document;
    if (doc && typeof doc.createElement === "function") {
      try {
        const sandbox = doc.createElement("iframe");
        sandbox.hidden = true;
        doc.head.appendChild(sandbox);
        if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
          result = isNativeFetch(sandbox.contentWindow.fetch);
        }
        doc.head.removeChild(sandbox);
      } catch (err) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
      }
    }
    return result;
  }
  function supportsHistory() {
    const chrome3 = WINDOW2.chrome;
    const isChromePackagedApp = chrome3 && chrome3.app && chrome3.app.runtime;
    const hasHistoryApi = "history" in WINDOW2 && !!WINDOW2.history.pushState && !!WINDOW2.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
  }

  // node_modules/@sentry/utils/esm/instrument.js
  var WINDOW3 = getGlobalObject();
  var handlers = {};
  var instrumented = {};
  function instrument(type) {
    if (instrumented[type]) {
      return;
    }
    instrumented[type] = true;
    switch (type) {
      case "console":
        instrumentConsole();
        break;
      case "dom":
        instrumentDOM();
        break;
      case "xhr":
        instrumentXHR();
        break;
      case "fetch":
        instrumentFetch();
        break;
      case "history":
        instrumentHistory();
        break;
      case "error":
        instrumentError();
        break;
      case "unhandledrejection":
        instrumentUnhandledRejection();
        break;
      default:
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("unknown instrumentation type:", type);
        return;
    }
  }
  function addInstrumentationHandler(type, callback) {
    handlers[type] = handlers[type] || [];
    handlers[type].push(callback);
    instrument(type);
  }
  function triggerHandlers(type, data) {
    if (!type || !handlers[type]) {
      return;
    }
    for (const handler of handlers[type] || []) {
      try {
        handler(data);
      } catch (e8) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(
          `Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`,
          e8
        );
      }
    }
  }
  function instrumentConsole() {
    if (!("console" in WINDOW3)) {
      return;
    }
    CONSOLE_LEVELS.forEach(function(level) {
      if (!(level in WINDOW3.console)) {
        return;
      }
      fill(WINDOW3.console, level, function(originalConsoleMethod) {
        return function(...args) {
          triggerHandlers("console", { args, level });
          if (originalConsoleMethod) {
            originalConsoleMethod.apply(WINDOW3.console, args);
          }
        };
      });
    });
  }
  function instrumentFetch() {
    if (!supportsNativeFetch()) {
      return;
    }
    fill(WINDOW3, "fetch", function(originalFetch) {
      return function(...args) {
        const handlerData = {
          args,
          fetchData: {
            method: getFetchMethod(args),
            url: getFetchUrl(args)
          },
          startTimestamp: Date.now()
        };
        triggerHandlers("fetch", {
          ...handlerData
        });
        return originalFetch.apply(WINDOW3, args).then(
          (response) => {
            triggerHandlers("fetch", {
              ...handlerData,
              endTimestamp: Date.now(),
              response
            });
            return response;
          },
          (error) => {
            triggerHandlers("fetch", {
              ...handlerData,
              endTimestamp: Date.now(),
              error
            });
            throw error;
          }
        );
      };
    });
  }
  function getFetchMethod(fetchArgs = []) {
    if ("Request" in WINDOW3 && isInstanceOf(fetchArgs[0], Request) && fetchArgs[0].method) {
      return String(fetchArgs[0].method).toUpperCase();
    }
    if (fetchArgs[1] && fetchArgs[1].method) {
      return String(fetchArgs[1].method).toUpperCase();
    }
    return "GET";
  }
  function getFetchUrl(fetchArgs = []) {
    if (typeof fetchArgs[0] === "string") {
      return fetchArgs[0];
    }
    if ("Request" in WINDOW3 && isInstanceOf(fetchArgs[0], Request)) {
      return fetchArgs[0].url;
    }
    return String(fetchArgs[0]);
  }
  function instrumentXHR() {
    if (!("XMLHttpRequest" in WINDOW3)) {
      return;
    }
    const xhrproto = XMLHttpRequest.prototype;
    fill(xhrproto, "open", function(originalOpen) {
      return function(...args) {
        const xhr = this;
        const url = args[1];
        const xhrInfo = xhr.__sentry_xhr__ = {
          method: isString(args[0]) ? args[0].toUpperCase() : args[0],
          url: args[1]
        };
        if (isString(url) && xhrInfo.method === "POST" && url.match(/sentry_key/)) {
          xhr.__sentry_own_request__ = true;
        }
        const onreadystatechangeHandler = function() {
          if (xhr.readyState === 4) {
            try {
              xhrInfo.status_code = xhr.status;
            } catch (e8) {
            }
            triggerHandlers("xhr", {
              args,
              endTimestamp: Date.now(),
              startTimestamp: Date.now(),
              xhr
            });
          }
        };
        if ("onreadystatechange" in xhr && typeof xhr.onreadystatechange === "function") {
          fill(xhr, "onreadystatechange", function(original) {
            return function(...readyStateArgs) {
              onreadystatechangeHandler();
              return original.apply(xhr, readyStateArgs);
            };
          });
        } else {
          xhr.addEventListener("readystatechange", onreadystatechangeHandler);
        }
        return originalOpen.apply(xhr, args);
      };
    });
    fill(xhrproto, "send", function(originalSend) {
      return function(...args) {
        if (this.__sentry_xhr__ && args[0] !== void 0) {
          this.__sentry_xhr__.body = args[0];
        }
        triggerHandlers("xhr", {
          args,
          startTimestamp: Date.now(),
          xhr: this
        });
        return originalSend.apply(this, args);
      };
    });
  }
  var lastHref;
  function instrumentHistory() {
    if (!supportsHistory()) {
      return;
    }
    const oldOnPopState = WINDOW3.onpopstate;
    WINDOW3.onpopstate = function(...args) {
      const to = WINDOW3.location.href;
      const from = lastHref;
      lastHref = to;
      triggerHandlers("history", {
        from,
        to
      });
      if (oldOnPopState) {
        try {
          return oldOnPopState.apply(this, args);
        } catch (_oO) {
        }
      }
    };
    function historyReplacementFunction(originalHistoryFunction) {
      return function(...args) {
        const url = args.length > 2 ? args[2] : void 0;
        if (url) {
          const from = lastHref;
          const to = String(url);
          lastHref = to;
          triggerHandlers("history", {
            from,
            to
          });
        }
        return originalHistoryFunction.apply(this, args);
      };
    }
    fill(WINDOW3.history, "pushState", historyReplacementFunction);
    fill(WINDOW3.history, "replaceState", historyReplacementFunction);
  }
  var debounceDuration = 1e3;
  var debounceTimerID;
  var lastCapturedEvent;
  function shouldShortcircuitPreviousDebounce(previous, current) {
    if (!previous) {
      return true;
    }
    if (previous.type !== current.type) {
      return true;
    }
    try {
      if (previous.target !== current.target) {
        return true;
      }
    } catch (e8) {
    }
    return false;
  }
  function shouldSkipDOMEvent(event) {
    if (event.type !== "keypress") {
      return false;
    }
    try {
      const target = event.target;
      if (!target || !target.tagName) {
        return true;
      }
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return false;
      }
    } catch (e8) {
    }
    return true;
  }
  function makeDOMEventHandler(handler, globalListener = false) {
    return (event) => {
      if (!event || lastCapturedEvent === event) {
        return;
      }
      if (shouldSkipDOMEvent(event)) {
        return;
      }
      const name = event.type === "keypress" ? "input" : event.type;
      if (debounceTimerID === void 0) {
        handler({
          event,
          name,
          global: globalListener
        });
        lastCapturedEvent = event;
      } else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
        handler({
          event,
          name,
          global: globalListener
        });
        lastCapturedEvent = event;
      }
      clearTimeout(debounceTimerID);
      debounceTimerID = WINDOW3.setTimeout(() => {
        debounceTimerID = void 0;
      }, debounceDuration);
    };
  }
  function instrumentDOM() {
    if (!("document" in WINDOW3)) {
      return;
    }
    const triggerDOMHandler = triggerHandlers.bind(null, "dom");
    const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    WINDOW3.document.addEventListener("click", globalDOMEventHandler, false);
    WINDOW3.document.addEventListener("keypress", globalDOMEventHandler, false);
    ["EventTarget", "Node"].forEach((target) => {
      const proto = WINDOW3[target] && WINDOW3[target].prototype;
      if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) {
        return;
      }
      fill(proto, "addEventListener", function(originalAddEventListener) {
        return function(type, listener, options) {
          if (type === "click" || type == "keypress") {
            try {
              const el = this;
              const handlers2 = el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {};
              const handlerForType = handlers2[type] = handlers2[type] || { refCount: 0 };
              if (!handlerForType.handler) {
                const handler = makeDOMEventHandler(triggerDOMHandler);
                handlerForType.handler = handler;
                originalAddEventListener.call(this, type, handler, options);
              }
              handlerForType.refCount++;
            } catch (e8) {
            }
          }
          return originalAddEventListener.call(this, type, listener, options);
        };
      });
      fill(
        proto,
        "removeEventListener",
        function(originalRemoveEventListener) {
          return function(type, listener, options) {
            if (type === "click" || type == "keypress") {
              try {
                const el = this;
                const handlers2 = el.__sentry_instrumentation_handlers__ || {};
                const handlerForType = handlers2[type];
                if (handlerForType) {
                  handlerForType.refCount--;
                  if (handlerForType.refCount <= 0) {
                    originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                    handlerForType.handler = void 0;
                    delete handlers2[type];
                  }
                  if (Object.keys(handlers2).length === 0) {
                    delete el.__sentry_instrumentation_handlers__;
                  }
                }
              } catch (e8) {
              }
            }
            return originalRemoveEventListener.call(this, type, listener, options);
          };
        }
      );
    });
  }
  var _oldOnErrorHandler = null;
  function instrumentError() {
    _oldOnErrorHandler = WINDOW3.onerror;
    WINDOW3.onerror = function(msg, url, line, column, error) {
      triggerHandlers("error", {
        column,
        error,
        line,
        msg,
        url
      });
      if (_oldOnErrorHandler) {
        return _oldOnErrorHandler.apply(this, arguments);
      }
      return false;
    };
  }
  var _oldOnUnhandledRejectionHandler = null;
  function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = WINDOW3.onunhandledrejection;
    WINDOW3.onunhandledrejection = function(e8) {
      triggerHandlers("unhandledrejection", e8);
      if (_oldOnUnhandledRejectionHandler) {
        return _oldOnUnhandledRejectionHandler.apply(this, arguments);
      }
      return true;
    };
  }

  // node_modules/@sentry/utils/esm/memo.js
  function memoBuilder() {
    const hasWeakSet = typeof WeakSet === "function";
    const inner = hasWeakSet ? /* @__PURE__ */ new WeakSet() : [];
    function memoize(obj) {
      if (hasWeakSet) {
        if (inner.has(obj)) {
          return true;
        }
        inner.add(obj);
        return false;
      }
      for (let i6 = 0; i6 < inner.length; i6++) {
        const value = inner[i6];
        if (value === obj) {
          return true;
        }
      }
      inner.push(obj);
      return false;
    }
    function unmemoize(obj) {
      if (hasWeakSet) {
        inner.delete(obj);
      } else {
        for (let i6 = 0; i6 < inner.length; i6++) {
          if (inner[i6] === obj) {
            inner.splice(i6, 1);
            break;
          }
        }
      }
    }
    return [memoize, unmemoize];
  }

  // node_modules/@sentry/utils/esm/misc.js
  function uuid4() {
    const gbl = GLOBAL_OBJ;
    const crypto = gbl.crypto || gbl.msCrypto;
    if (crypto && crypto.randomUUID) {
      return crypto.randomUUID().replace(/-/g, "");
    }
    const getRandomByte = crypto && crypto.getRandomValues ? () => crypto.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(
      /[018]/g,
      (c5) => (c5 ^ (getRandomByte() & 15) >> c5 / 4).toString(16)
    );
  }
  function getFirstException(event) {
    return event.exception && event.exception.values ? event.exception.values[0] : void 0;
  }
  function getEventDescription(event) {
    const { message, event_id: eventId } = event;
    if (message) {
      return message;
    }
    const firstException = getFirstException(event);
    if (firstException) {
      if (firstException.type && firstException.value) {
        return `${firstException.type}: ${firstException.value}`;
      }
      return firstException.type || firstException.value || eventId || "<unknown>";
    }
    return eventId || "<unknown>";
  }
  function addExceptionTypeValue(event, value, type) {
    const exception = event.exception = event.exception || {};
    const values = exception.values = exception.values || [];
    const firstException = values[0] = values[0] || {};
    if (!firstException.value) {
      firstException.value = value || "";
    }
    if (!firstException.type) {
      firstException.type = type || "Error";
    }
  }
  function addExceptionMechanism(event, newMechanism) {
    const firstException = getFirstException(event);
    if (!firstException) {
      return;
    }
    const defaultMechanism = { type: "generic", handled: true };
    const currentMechanism = firstException.mechanism;
    firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };
    if (newMechanism && "data" in newMechanism) {
      const mergedData = { ...currentMechanism && currentMechanism.data, ...newMechanism.data };
      firstException.mechanism.data = mergedData;
    }
  }
  function checkOrSetAlreadyCaught(exception) {
    if (exception && exception.__sentry_captured__) {
      return true;
    }
    try {
      addNonEnumerableProperty(exception, "__sentry_captured__", true);
    } catch (err) {
    }
    return false;
  }
  function arrayify(maybeArray) {
    return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
  }

  // node_modules/@sentry/utils/esm/env.js
  function isBrowserBundle() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
  }

  // node_modules/@sentry/utils/esm/node.js
  function isNodeEnv() {
    return !isBrowserBundle() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  }
  function dynamicRequire(mod, request) {
    return mod.require(request);
  }
  function loadModule(moduleName) {
    let mod;
    try {
      mod = dynamicRequire(module, moduleName);
    } catch (e8) {
    }
    try {
      const { cwd } = dynamicRequire(module, "process");
      mod = dynamicRequire(module, `${cwd()}/node_modules/${moduleName}`);
    } catch (e8) {
    }
    return mod;
  }

  // node_modules/@sentry/utils/esm/normalize.js
  function normalize(input, depth = Infinity, maxProperties = Infinity) {
    try {
      return visit("", input, depth, maxProperties);
    } catch (err) {
      return { ERROR: `**non-serializable** (${err})` };
    }
  }
  function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
    const normalized = normalize(object, depth);
    if (jsonSize(normalized) > maxSize) {
      return normalizeToSize(object, depth - 1, maxSize);
    }
    return normalized;
  }
  function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
    const [memoize, unmemoize] = memo;
    if (value === null || ["number", "boolean", "string"].includes(typeof value) && !isNaN2(value)) {
      return value;
    }
    const stringified = stringifyValue(key, value);
    if (!stringified.startsWith("[object ")) {
      return stringified;
    }
    if (value["__sentry_skip_normalization__"]) {
      return value;
    }
    if (depth === 0) {
      return stringified.replace("object ", "");
    }
    if (memoize(value)) {
      return "[Circular ~]";
    }
    const valueWithToJSON = value;
    if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
      try {
        const jsonValue = valueWithToJSON.toJSON();
        return visit("", jsonValue, depth - 1, maxProperties, memo);
      } catch (err) {
      }
    }
    const normalized = Array.isArray(value) ? [] : {};
    let numAdded = 0;
    const visitable = convertToPlainObject(value);
    for (const visitKey in visitable) {
      if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
        continue;
      }
      if (numAdded >= maxProperties) {
        normalized[visitKey] = "[MaxProperties ~]";
        break;
      }
      const visitValue = visitable[visitKey];
      normalized[visitKey] = visit(visitKey, visitValue, depth - 1, maxProperties, memo);
      numAdded++;
    }
    unmemoize(value);
    return normalized;
  }
  function stringifyValue(key, value) {
    try {
      if (key === "domain" && value && typeof value === "object" && value._events) {
        return "[Domain]";
      }
      if (key === "domainEmitter") {
        return "[DomainEmitter]";
      }
      if (typeof global !== "undefined" && value === global) {
        return "[Global]";
      }
      if (typeof window !== "undefined" && value === window) {
        return "[Window]";
      }
      if (typeof document !== "undefined" && value === document) {
        return "[Document]";
      }
      if (isSyntheticEvent(value)) {
        return "[SyntheticEvent]";
      }
      if (typeof value === "number" && value !== value) {
        return "[NaN]";
      }
      if (value === void 0) {
        return "[undefined]";
      }
      if (typeof value === "function") {
        return `[Function: ${getFunctionName(value)}]`;
      }
      if (typeof value === "symbol") {
        return `[${String(value)}]`;
      }
      if (typeof value === "bigint") {
        return `[BigInt: ${String(value)}]`;
      }
      return `[object ${Object.getPrototypeOf(value).constructor.name}]`;
    } catch (err) {
      return `**non-serializable** (${err})`;
    }
  }
  function utf8Length(value) {
    return ~-encodeURI(value).split(/%..|./).length;
  }
  function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
  }

  // node_modules/@sentry/utils/esm/syncpromise.js
  var States;
  (function(States2) {
    const PENDING = 0;
    States2[States2["PENDING"] = PENDING] = "PENDING";
    const RESOLVED = 1;
    States2[States2["RESOLVED"] = RESOLVED] = "RESOLVED";
    const REJECTED = 2;
    States2[States2["REJECTED"] = REJECTED] = "REJECTED";
  })(States || (States = {}));
  function resolvedSyncPromise(value) {
    return new SyncPromise((resolve) => {
      resolve(value);
    });
  }
  function rejectedSyncPromise(reason) {
    return new SyncPromise((_2, reject) => {
      reject(reason);
    });
  }
  var SyncPromise = class {
    __init() {
      this._state = States.PENDING;
    }
    __init2() {
      this._handlers = [];
    }
    constructor(executor) {
      ;
      SyncPromise.prototype.__init.call(this);
      SyncPromise.prototype.__init2.call(this);
      SyncPromise.prototype.__init3.call(this);
      SyncPromise.prototype.__init4.call(this);
      SyncPromise.prototype.__init5.call(this);
      SyncPromise.prototype.__init6.call(this);
      try {
        executor(this._resolve, this._reject);
      } catch (e8) {
        this._reject(e8);
      }
    }
    then(onfulfilled, onrejected) {
      return new SyncPromise((resolve, reject) => {
        this._handlers.push([
          false,
          (result) => {
            if (!onfulfilled) {
              resolve(result);
            } else {
              try {
                resolve(onfulfilled(result));
              } catch (e8) {
                reject(e8);
              }
            }
          },
          (reason) => {
            if (!onrejected) {
              reject(reason);
            } else {
              try {
                resolve(onrejected(reason));
              } catch (e8) {
                reject(e8);
              }
            }
          }
        ]);
        this._executeHandlers();
      });
    }
    catch(onrejected) {
      return this.then((val) => val, onrejected);
    }
    finally(onfinally) {
      return new SyncPromise((resolve, reject) => {
        let val;
        let isRejected;
        return this.then(
          (value) => {
            isRejected = false;
            val = value;
            if (onfinally) {
              onfinally();
            }
          },
          (reason) => {
            isRejected = true;
            val = reason;
            if (onfinally) {
              onfinally();
            }
          }
        ).then(() => {
          if (isRejected) {
            reject(val);
            return;
          }
          resolve(val);
        });
      });
    }
    __init3() {
      this._resolve = (value) => {
        this._setResult(States.RESOLVED, value);
      };
    }
    __init4() {
      this._reject = (reason) => {
        this._setResult(States.REJECTED, reason);
      };
    }
    __init5() {
      this._setResult = (state, value) => {
        if (this._state !== States.PENDING) {
          return;
        }
        if (isThenable(value)) {
          void value.then(this._resolve, this._reject);
          return;
        }
        this._state = state;
        this._value = value;
        this._executeHandlers();
      };
    }
    __init6() {
      this._executeHandlers = () => {
        if (this._state === States.PENDING) {
          return;
        }
        const cachedHandlers = this._handlers.slice();
        this._handlers = [];
        cachedHandlers.forEach((handler) => {
          if (handler[0]) {
            return;
          }
          if (this._state === States.RESOLVED) {
            handler[1](this._value);
          }
          if (this._state === States.REJECTED) {
            handler[2](this._value);
          }
          handler[0] = true;
        });
      };
    }
  };

  // node_modules/@sentry/utils/esm/promisebuffer.js
  function makePromiseBuffer(limit) {
    const buffer = [];
    function isReady() {
      return limit === void 0 || buffer.length < limit;
    }
    function remove(task) {
      return buffer.splice(buffer.indexOf(task), 1)[0];
    }
    function add(taskProducer) {
      if (!isReady()) {
        return rejectedSyncPromise(new SentryError("Not adding Promise because buffer limit was reached."));
      }
      const task = taskProducer();
      if (buffer.indexOf(task) === -1) {
        buffer.push(task);
      }
      void task.then(() => remove(task)).then(
        null,
        () => remove(task).then(null, () => {
        })
      );
      return task;
    }
    function drain(timeout) {
      return new SyncPromise((resolve, reject) => {
        let counter = buffer.length;
        if (!counter) {
          return resolve(true);
        }
        const capturedSetTimeout = setTimeout(() => {
          if (timeout && timeout > 0) {
            resolve(false);
          }
        }, timeout);
        buffer.forEach((item) => {
          void resolvedSyncPromise(item).then(() => {
            if (!--counter) {
              clearTimeout(capturedSetTimeout);
              resolve(true);
            }
          }, reject);
        });
      });
    }
    return {
      $: buffer,
      add,
      drain
    };
  }

  // node_modules/@sentry/utils/esm/url.js
  function parseUrl(url) {
    if (!url) {
      return {};
    }
    const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
      return {};
    }
    const query = match[6] || "";
    const fragment = match[8] || "";
    return {
      host: match[4],
      path: match[5],
      protocol: match[2],
      relative: match[5] + query + fragment
    };
  }

  // node_modules/@sentry/utils/esm/severity.js
  var validSeverityLevels = ["fatal", "error", "warning", "log", "info", "debug"];
  function severityLevelFromString(level) {
    return level === "warn" ? "warning" : validSeverityLevels.includes(level) ? level : "log";
  }

  // node_modules/@sentry/utils/esm/time.js
  var WINDOW4 = getGlobalObject();
  var dateTimestampSource = {
    nowSeconds: () => Date.now() / 1e3
  };
  function getBrowserPerformance() {
    const { performance: performance2 } = WINDOW4;
    if (!performance2 || !performance2.now) {
      return void 0;
    }
    const timeOrigin = Date.now() - performance2.now();
    return {
      now: () => performance2.now(),
      timeOrigin
    };
  }
  function getNodePerformance() {
    try {
      const perfHooks = dynamicRequire(module, "perf_hooks");
      return perfHooks.performance;
    } catch (_2) {
      return void 0;
    }
  }
  var platformPerformance = isNodeEnv() ? getNodePerformance() : getBrowserPerformance();
  var timestampSource = platformPerformance === void 0 ? dateTimestampSource : {
    nowSeconds: () => (platformPerformance.timeOrigin + platformPerformance.now()) / 1e3
  };
  var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
  var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
  var timestampWithMs = timestampInSeconds;
  var _browserPerformanceTimeOriginMode;
  var browserPerformanceTimeOrigin = (() => {
    const { performance: performance2 } = WINDOW4;
    if (!performance2 || !performance2.now) {
      _browserPerformanceTimeOriginMode = "none";
      return void 0;
    }
    const threshold = 3600 * 1e3;
    const performanceNow = performance2.now();
    const dateNow = Date.now();
    const timeOriginDelta = performance2.timeOrigin ? Math.abs(performance2.timeOrigin + performanceNow - dateNow) : threshold;
    const timeOriginIsReliable = timeOriginDelta < threshold;
    const navigationStart = performance2.timing && performance2.timing.navigationStart;
    const hasNavigationStart = typeof navigationStart === "number";
    const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    const navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
      if (timeOriginDelta <= navigationStartDelta) {
        _browserPerformanceTimeOriginMode = "timeOrigin";
        return performance2.timeOrigin;
      } else {
        _browserPerformanceTimeOriginMode = "navigationStart";
        return navigationStart;
      }
    }
    _browserPerformanceTimeOriginMode = "dateNow";
    return dateNow;
  })();

  // node_modules/@sentry/utils/esm/tracing.js
  var TRACEPARENT_REGEXP = new RegExp(
    "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
  );
  function extractTraceparentData(traceparent) {
    const matches = traceparent.match(TRACEPARENT_REGEXP);
    if (!traceparent || !matches) {
      return void 0;
    }
    let parentSampled;
    if (matches[3] === "1") {
      parentSampled = true;
    } else if (matches[3] === "0") {
      parentSampled = false;
    }
    return {
      traceId: matches[1],
      parentSampled,
      parentSpanId: matches[2]
    };
  }

  // node_modules/@sentry/utils/esm/envelope.js
  function createEnvelope(headers, items = []) {
    return [headers, items];
  }
  function addItemToEnvelope(envelope, newItem) {
    const [headers, items] = envelope;
    return [headers, [...items, newItem]];
  }
  function forEachEnvelopeItem(envelope, callback) {
    const envelopeItems = envelope[1];
    envelopeItems.forEach((envelopeItem) => {
      const envelopeItemType = envelopeItem[0].type;
      callback(envelopeItem, envelopeItemType);
    });
  }
  function encodeUTF8(input, textEncoder) {
    const utf8 = textEncoder || new TextEncoder();
    return utf8.encode(input);
  }
  function serializeEnvelope(envelope, textEncoder) {
    const [envHeaders, items] = envelope;
    let parts = JSON.stringify(envHeaders);
    function append(next) {
      if (typeof parts === "string") {
        parts = typeof next === "string" ? parts + next : [encodeUTF8(parts, textEncoder), next];
      } else {
        parts.push(typeof next === "string" ? encodeUTF8(next, textEncoder) : next);
      }
    }
    for (const item of items) {
      const [itemHeaders, payload] = item;
      append(`
${JSON.stringify(itemHeaders)}
`);
      if (typeof payload === "string" || payload instanceof Uint8Array) {
        append(payload);
      } else {
        let stringifiedPayload;
        try {
          stringifiedPayload = JSON.stringify(payload);
        } catch (e8) {
          stringifiedPayload = JSON.stringify(normalize(payload));
        }
        append(stringifiedPayload);
      }
    }
    return typeof parts === "string" ? parts : concatBuffers(parts);
  }
  function concatBuffers(buffers) {
    const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
    const merged = new Uint8Array(totalLength);
    let offset = 0;
    for (const buffer of buffers) {
      merged.set(buffer, offset);
      offset += buffer.length;
    }
    return merged;
  }
  function createAttachmentEnvelopeItem(attachment, textEncoder) {
    const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data, textEncoder) : attachment.data;
    return [
      dropUndefinedKeys({
        type: "attachment",
        length: buffer.length,
        filename: attachment.filename,
        content_type: attachment.contentType,
        attachment_type: attachment.attachmentType
      }),
      buffer
    ];
  }
  var ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    replay_event: "replay_event",
    replay_recording: "replay_recording"
  };
  function envelopeItemTypeToDataCategory(type) {
    return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
  }
  function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
    if (!metadataOrEvent || !metadataOrEvent.sdk) {
      return;
    }
    const { name, version } = metadataOrEvent.sdk;
    return { name, version };
  }
  function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
    const dynamicSamplingContext = event.sdkProcessingMetadata && event.sdkProcessingMetadata.dynamicSamplingContext;
    return {
      event_id: event.event_id,
      sent_at: new Date().toISOString(),
      ...sdkInfo && { sdk: sdkInfo },
      ...!!tunnel && { dsn: dsnToString(dsn) },
      ...event.type === "transaction" && dynamicSamplingContext && {
        trace: dropUndefinedKeys({ ...dynamicSamplingContext })
      }
    };
  }

  // node_modules/@sentry/utils/esm/clientreport.js
  function createClientReportEnvelope(discarded_events, dsn, timestamp) {
    const clientReportItem = [
      { type: "client_report" },
      {
        timestamp: timestamp || dateTimestampInSeconds(),
        discarded_events
      }
    ];
    return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
  }

  // node_modules/@sentry/utils/esm/ratelimit.js
  var DEFAULT_RETRY_AFTER = 60 * 1e3;
  function parseRetryAfterHeader(header, now = Date.now()) {
    const headerDelay = parseInt(`${header}`, 10);
    if (!isNaN(headerDelay)) {
      return headerDelay * 1e3;
    }
    const headerDate = Date.parse(`${header}`);
    if (!isNaN(headerDate)) {
      return headerDate - now;
    }
    return DEFAULT_RETRY_AFTER;
  }
  function disabledUntil(limits, category) {
    return limits[category] || limits.all || 0;
  }
  function isRateLimited(limits, category, now = Date.now()) {
    return disabledUntil(limits, category) > now;
  }
  function updateRateLimits(limits, { statusCode, headers }, now = Date.now()) {
    const updatedRateLimits = {
      ...limits
    };
    const rateLimitHeader = headers && headers["x-sentry-rate-limits"];
    const retryAfterHeader = headers && headers["retry-after"];
    if (rateLimitHeader) {
      for (const limit of rateLimitHeader.trim().split(",")) {
        const [retryAfter, categories] = limit.split(":", 2);
        const headerDelay = parseInt(retryAfter, 10);
        const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1e3;
        if (!categories) {
          updatedRateLimits.all = now + delay;
        } else {
          for (const category of categories.split(";")) {
            updatedRateLimits[category] = now + delay;
          }
        }
      }
    } else if (retryAfterHeader) {
      updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
    } else if (statusCode === 429) {
      updatedRateLimits.all = now + 60 * 1e3;
    }
    return updatedRateLimits;
  }

  // node_modules/@sentry/utils/esm/baggage.js
  var BAGGAGE_HEADER_NAME = "baggage";
  var SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
  var SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;
  var MAX_BAGGAGE_STRING_LENGTH = 8192;
  function baggageHeaderToDynamicSamplingContext(baggageHeader) {
    if (!isString(baggageHeader) && !Array.isArray(baggageHeader)) {
      return void 0;
    }
    let baggageObject = {};
    if (Array.isArray(baggageHeader)) {
      baggageObject = baggageHeader.reduce((acc, curr) => {
        const currBaggageObject = baggageHeaderToObject(curr);
        return {
          ...acc,
          ...currBaggageObject
        };
      }, {});
    } else {
      if (!baggageHeader) {
        return void 0;
      }
      baggageObject = baggageHeaderToObject(baggageHeader);
    }
    const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
      if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
        const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
        acc[nonPrefixedKey] = value;
      }
      return acc;
    }, {});
    if (Object.keys(dynamicSamplingContext).length > 0) {
      return dynamicSamplingContext;
    } else {
      return void 0;
    }
  }
  function dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext) {
    const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce(
      (acc, [dscKey, dscValue]) => {
        if (dscValue) {
          acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
        }
        return acc;
      },
      {}
    );
    return objectToBaggageHeader(sentryPrefixedDSC);
  }
  function baggageHeaderToObject(baggageHeader) {
    return baggageHeader.split(",").map((baggageEntry) => baggageEntry.split("=").map((keyOrValue) => decodeURIComponent(keyOrValue.trim()))).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  }
  function objectToBaggageHeader(object) {
    if (Object.keys(object).length === 0) {
      return void 0;
    }
    return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex) => {
      const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
      const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
      if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
          `Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`
        );
        return baggageHeader;
      } else {
        return newBaggageHeader;
      }
    }, "");
  }

  // node_modules/@sentry/core/esm/session.js
  function makeSession(context) {
    const startingTime = timestampInSeconds();
    const session = {
      sid: uuid4(),
      init: true,
      timestamp: startingTime,
      started: startingTime,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: false,
      toJSON: () => sessionToJSON(session)
    };
    if (context) {
      updateSession(session, context);
    }
    return session;
  }
  function updateSession(session, context = {}) {
    if (context.user) {
      if (!session.ipAddress && context.user.ip_address) {
        session.ipAddress = context.user.ip_address;
      }
      if (!session.did && !context.did) {
        session.did = context.user.id || context.user.email || context.user.username;
      }
    }
    session.timestamp = context.timestamp || timestampInSeconds();
    if (context.ignoreDuration) {
      session.ignoreDuration = context.ignoreDuration;
    }
    if (context.sid) {
      session.sid = context.sid.length === 32 ? context.sid : uuid4();
    }
    if (context.init !== void 0) {
      session.init = context.init;
    }
    if (!session.did && context.did) {
      session.did = `${context.did}`;
    }
    if (typeof context.started === "number") {
      session.started = context.started;
    }
    if (session.ignoreDuration) {
      session.duration = void 0;
    } else if (typeof context.duration === "number") {
      session.duration = context.duration;
    } else {
      const duration = session.timestamp - session.started;
      session.duration = duration >= 0 ? duration : 0;
    }
    if (context.release) {
      session.release = context.release;
    }
    if (context.environment) {
      session.environment = context.environment;
    }
    if (!session.ipAddress && context.ipAddress) {
      session.ipAddress = context.ipAddress;
    }
    if (!session.userAgent && context.userAgent) {
      session.userAgent = context.userAgent;
    }
    if (typeof context.errors === "number") {
      session.errors = context.errors;
    }
    if (context.status) {
      session.status = context.status;
    }
  }
  function closeSession(session, status) {
    let context = {};
    if (status) {
      context = { status };
    } else if (session.status === "ok") {
      context = { status: "exited" };
    }
    updateSession(session, context);
  }
  function sessionToJSON(session) {
    return dropUndefinedKeys({
      sid: `${session.sid}`,
      init: session.init,
      started: new Date(session.started * 1e3).toISOString(),
      timestamp: new Date(session.timestamp * 1e3).toISOString(),
      status: session.status,
      errors: session.errors,
      did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
      duration: session.duration,
      attrs: {
        release: session.release,
        environment: session.environment,
        ip_address: session.ipAddress,
        user_agent: session.userAgent
      }
    });
  }

  // node_modules/@sentry/core/esm/scope.js
  var DEFAULT_MAX_BREADCRUMBS = 100;
  var Scope = class {
    constructor() {
      this._notifyingListeners = false;
      this._scopeListeners = [];
      this._eventProcessors = [];
      this._breadcrumbs = [];
      this._attachments = [];
      this._user = {};
      this._tags = {};
      this._extra = {};
      this._contexts = {};
      this._sdkProcessingMetadata = {};
    }
    static clone(scope) {
      const newScope = new Scope();
      if (scope) {
        newScope._breadcrumbs = [...scope._breadcrumbs];
        newScope._tags = { ...scope._tags };
        newScope._extra = { ...scope._extra };
        newScope._contexts = { ...scope._contexts };
        newScope._user = scope._user;
        newScope._level = scope._level;
        newScope._span = scope._span;
        newScope._session = scope._session;
        newScope._transactionName = scope._transactionName;
        newScope._fingerprint = scope._fingerprint;
        newScope._eventProcessors = [...scope._eventProcessors];
        newScope._requestSession = scope._requestSession;
        newScope._attachments = [...scope._attachments];
        newScope._sdkProcessingMetadata = { ...scope._sdkProcessingMetadata };
      }
      return newScope;
    }
    addScopeListener(callback) {
      this._scopeListeners.push(callback);
    }
    addEventProcessor(callback) {
      this._eventProcessors.push(callback);
      return this;
    }
    setUser(user) {
      this._user = user || {};
      if (this._session) {
        updateSession(this._session, { user });
      }
      this._notifyScopeListeners();
      return this;
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(requestSession) {
      this._requestSession = requestSession;
      return this;
    }
    setTags(tags) {
      this._tags = {
        ...this._tags,
        ...tags
      };
      this._notifyScopeListeners();
      return this;
    }
    setTag(key, value) {
      this._tags = { ...this._tags, [key]: value };
      this._notifyScopeListeners();
      return this;
    }
    setExtras(extras) {
      this._extra = {
        ...this._extra,
        ...extras
      };
      this._notifyScopeListeners();
      return this;
    }
    setExtra(key, extra) {
      this._extra = { ...this._extra, [key]: extra };
      this._notifyScopeListeners();
      return this;
    }
    setFingerprint(fingerprint) {
      this._fingerprint = fingerprint;
      this._notifyScopeListeners();
      return this;
    }
    setLevel(level) {
      this._level = level;
      this._notifyScopeListeners();
      return this;
    }
    setTransactionName(name) {
      this._transactionName = name;
      this._notifyScopeListeners();
      return this;
    }
    setContext(key, context) {
      if (context === null) {
        delete this._contexts[key];
      } else {
        this._contexts[key] = context;
      }
      this._notifyScopeListeners();
      return this;
    }
    setSpan(span) {
      this._span = span;
      this._notifyScopeListeners();
      return this;
    }
    getSpan() {
      return this._span;
    }
    getTransaction() {
      const span = this.getSpan();
      return span && span.transaction;
    }
    setSession(session) {
      if (!session) {
        delete this._session;
      } else {
        this._session = session;
      }
      this._notifyScopeListeners();
      return this;
    }
    getSession() {
      return this._session;
    }
    update(captureContext) {
      if (!captureContext) {
        return this;
      }
      if (typeof captureContext === "function") {
        const updatedScope = captureContext(this);
        return updatedScope instanceof Scope ? updatedScope : this;
      }
      if (captureContext instanceof Scope) {
        this._tags = { ...this._tags, ...captureContext._tags };
        this._extra = { ...this._extra, ...captureContext._extra };
        this._contexts = { ...this._contexts, ...captureContext._contexts };
        if (captureContext._user && Object.keys(captureContext._user).length) {
          this._user = captureContext._user;
        }
        if (captureContext._level) {
          this._level = captureContext._level;
        }
        if (captureContext._fingerprint) {
          this._fingerprint = captureContext._fingerprint;
        }
        if (captureContext._requestSession) {
          this._requestSession = captureContext._requestSession;
        }
      } else if (isPlainObject(captureContext)) {
        captureContext = captureContext;
        this._tags = { ...this._tags, ...captureContext.tags };
        this._extra = { ...this._extra, ...captureContext.extra };
        this._contexts = { ...this._contexts, ...captureContext.contexts };
        if (captureContext.user) {
          this._user = captureContext.user;
        }
        if (captureContext.level) {
          this._level = captureContext.level;
        }
        if (captureContext.fingerprint) {
          this._fingerprint = captureContext.fingerprint;
        }
        if (captureContext.requestSession) {
          this._requestSession = captureContext.requestSession;
        }
      }
      return this;
    }
    clear() {
      this._breadcrumbs = [];
      this._tags = {};
      this._extra = {};
      this._user = {};
      this._contexts = {};
      this._level = void 0;
      this._transactionName = void 0;
      this._fingerprint = void 0;
      this._requestSession = void 0;
      this._span = void 0;
      this._session = void 0;
      this._notifyScopeListeners();
      this._attachments = [];
      return this;
    }
    addBreadcrumb(breadcrumb, maxBreadcrumbs) {
      const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
      if (maxCrumbs <= 0) {
        return this;
      }
      const mergedBreadcrumb = {
        timestamp: dateTimestampInSeconds(),
        ...breadcrumb
      };
      this._breadcrumbs = [...this._breadcrumbs, mergedBreadcrumb].slice(-maxCrumbs);
      this._notifyScopeListeners();
      return this;
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      this._breadcrumbs = [];
      this._notifyScopeListeners();
      return this;
    }
    addAttachment(attachment) {
      this._attachments.push(attachment);
      return this;
    }
    getAttachments() {
      return this._attachments;
    }
    clearAttachments() {
      this._attachments = [];
      return this;
    }
    applyToEvent(event, hint = {}) {
      if (this._extra && Object.keys(this._extra).length) {
        event.extra = { ...this._extra, ...event.extra };
      }
      if (this._tags && Object.keys(this._tags).length) {
        event.tags = { ...this._tags, ...event.tags };
      }
      if (this._user && Object.keys(this._user).length) {
        event.user = { ...this._user, ...event.user };
      }
      if (this._contexts && Object.keys(this._contexts).length) {
        event.contexts = { ...this._contexts, ...event.contexts };
      }
      if (this._level) {
        event.level = this._level;
      }
      if (this._transactionName) {
        event.transaction = this._transactionName;
      }
      if (this._span) {
        event.contexts = { trace: this._span.getTraceContext(), ...event.contexts };
        const transactionName = this._span.transaction && this._span.transaction.name;
        if (transactionName) {
          event.tags = { transaction: transactionName, ...event.tags };
        }
      }
      this._applyFingerprint(event);
      event.breadcrumbs = [...event.breadcrumbs || [], ...this._breadcrumbs];
      event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : void 0;
      event.sdkProcessingMetadata = { ...event.sdkProcessingMetadata, ...this._sdkProcessingMetadata };
      return this._notifyEventProcessors([...getGlobalEventProcessors(), ...this._eventProcessors], event, hint);
    }
    setSDKProcessingMetadata(newData) {
      this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...newData };
      return this;
    }
    _notifyEventProcessors(processors, event, hint, index = 0) {
      return new SyncPromise((resolve, reject) => {
        const processor = processors[index];
        if (event === null || typeof processor !== "function") {
          resolve(event);
        } else {
          const result = processor({ ...event }, hint);
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && processor.id && result === null && logger.log(`Event processor "${processor.id}" dropped event`);
          if (isThenable(result)) {
            void result.then((final) => this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve)).then(null, reject);
          } else {
            void this._notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
          }
        }
      });
    }
    _notifyScopeListeners() {
      if (!this._notifyingListeners) {
        this._notifyingListeners = true;
        this._scopeListeners.forEach((callback) => {
          callback(this);
        });
        this._notifyingListeners = false;
      }
    }
    _applyFingerprint(event) {
      event.fingerprint = event.fingerprint ? arrayify(event.fingerprint) : [];
      if (this._fingerprint) {
        event.fingerprint = event.fingerprint.concat(this._fingerprint);
      }
      if (event.fingerprint && !event.fingerprint.length) {
        delete event.fingerprint;
      }
    }
  };
  function getGlobalEventProcessors() {
    return getGlobalSingleton("globalEventProcessors", () => []);
  }
  function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
  }

  // node_modules/@sentry/core/esm/hub.js
  var API_VERSION = 4;
  var DEFAULT_BREADCRUMBS = 100;
  var Hub = class {
    __init() {
      this._stack = [{}];
    }
    constructor(client, scope = new Scope(), _version = API_VERSION) {
      ;
      this._version = _version;
      Hub.prototype.__init.call(this);
      this.getStackTop().scope = scope;
      if (client) {
        this.bindClient(client);
      }
    }
    isOlderThan(version) {
      return this._version < version;
    }
    bindClient(client) {
      const top = this.getStackTop();
      top.client = client;
      if (client && client.setupIntegrations) {
        client.setupIntegrations();
      }
    }
    pushScope() {
      const scope = Scope.clone(this.getScope());
      this.getStack().push({
        client: this.getClient(),
        scope
      });
      return scope;
    }
    popScope() {
      if (this.getStack().length <= 1)
        return false;
      return !!this.getStack().pop();
    }
    withScope(callback) {
      const scope = this.pushScope();
      try {
        callback(scope);
      } finally {
        this.popScope();
      }
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getStack() {
      return this._stack;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    captureException(exception, hint) {
      const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
      const syntheticException = new Error("Sentry syntheticException");
      this._withClient((client, scope) => {
        client.captureException(
          exception,
          {
            originalException: exception,
            syntheticException,
            ...hint,
            event_id: eventId
          },
          scope
        );
      });
      return eventId;
    }
    captureMessage(message, level, hint) {
      const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
      const syntheticException = new Error(message);
      this._withClient((client, scope) => {
        client.captureMessage(
          message,
          level,
          {
            originalException: message,
            syntheticException,
            ...hint,
            event_id: eventId
          },
          scope
        );
      });
      return eventId;
    }
    captureEvent(event, hint) {
      const eventId = hint && hint.event_id ? hint.event_id : uuid4();
      if (!event.type) {
        this._lastEventId = eventId;
      }
      this._withClient((client, scope) => {
        client.captureEvent(event, { ...hint, event_id: eventId }, scope);
      });
      return eventId;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addBreadcrumb(breadcrumb, hint) {
      const { scope, client } = this.getStackTop();
      if (!scope || !client)
        return;
      const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions && client.getOptions() || {};
      if (maxBreadcrumbs <= 0)
        return;
      const timestamp = dateTimestampInSeconds();
      const mergedBreadcrumb = { timestamp, ...breadcrumb };
      const finalBreadcrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
      if (finalBreadcrumb === null)
        return;
      scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    }
    setUser(user) {
      const scope = this.getScope();
      if (scope)
        scope.setUser(user);
    }
    setTags(tags) {
      const scope = this.getScope();
      if (scope)
        scope.setTags(tags);
    }
    setExtras(extras) {
      const scope = this.getScope();
      if (scope)
        scope.setExtras(extras);
    }
    setTag(key, value) {
      const scope = this.getScope();
      if (scope)
        scope.setTag(key, value);
    }
    setExtra(key, extra) {
      const scope = this.getScope();
      if (scope)
        scope.setExtra(key, extra);
    }
    setContext(name, context) {
      const scope = this.getScope();
      if (scope)
        scope.setContext(name, context);
    }
    configureScope(callback) {
      const { scope, client } = this.getStackTop();
      if (scope && client) {
        callback(scope);
      }
    }
    run(callback) {
      const oldHub = makeMain(this);
      try {
        callback(this);
      } finally {
        makeMain(oldHub);
      }
    }
    getIntegration(integration) {
      const client = this.getClient();
      if (!client)
        return null;
      try {
        return client.getIntegration(integration);
      } catch (_oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
        return null;
      }
    }
    startTransaction(context, customSamplingContext) {
      return this._callExtensionMethod("startTransaction", context, customSamplingContext);
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders");
    }
    captureSession(endSession = false) {
      if (endSession) {
        return this.endSession();
      }
      this._sendSessionUpdate();
    }
    endSession() {
      const layer = this.getStackTop();
      const scope = layer && layer.scope;
      const session = scope && scope.getSession();
      if (session) {
        closeSession(session);
      }
      this._sendSessionUpdate();
      if (scope) {
        scope.setSession();
      }
    }
    startSession(context) {
      const { scope, client } = this.getStackTop();
      const { release, environment } = client && client.getOptions() || {};
      const { userAgent } = GLOBAL_OBJ.navigator || {};
      const session = makeSession({
        release,
        environment,
        ...scope && { user: scope.getUser() },
        ...userAgent && { userAgent },
        ...context
      });
      if (scope) {
        const currentSession = scope.getSession && scope.getSession();
        if (currentSession && currentSession.status === "ok") {
          updateSession(currentSession, { status: "exited" });
        }
        this.endSession();
        scope.setSession(session);
      }
      return session;
    }
    shouldSendDefaultPii() {
      const client = this.getClient();
      const options = client && client.getOptions();
      return Boolean(options && options.sendDefaultPii);
    }
    _sendSessionUpdate() {
      const { scope, client } = this.getStackTop();
      if (!scope)
        return;
      const session = scope.getSession();
      if (session) {
        if (client && client.captureSession) {
          client.captureSession(session);
        }
      }
    }
    _withClient(callback) {
      const { scope, client } = this.getStackTop();
      if (client) {
        callback(client, scope);
      }
    }
    _callExtensionMethod(method, ...args) {
      const carrier = getMainCarrier();
      const sentry = carrier.__SENTRY__;
      if (sentry && sentry.extensions && typeof sentry.extensions[method] === "function") {
        return sentry.extensions[method].apply(this, args);
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Extension method ${method} couldn't be found, doing nothing.`);
    }
  };
  function getMainCarrier() {
    GLOBAL_OBJ.__SENTRY__ = GLOBAL_OBJ.__SENTRY__ || {
      extensions: {},
      hub: void 0
    };
    return GLOBAL_OBJ;
  }
  function makeMain(hub) {
    const registry = getMainCarrier();
    const oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
  }
  function getCurrentHub() {
    const registry = getMainCarrier();
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
      setHubOnCarrier(registry, new Hub());
    }
    if (isNodeEnv()) {
      return getHubFromActiveDomain(registry);
    }
    return getHubFromCarrier(registry);
  }
  function getHubFromActiveDomain(registry) {
    try {
      const sentry = getMainCarrier().__SENTRY__;
      const activeDomain = sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;
      if (!activeDomain) {
        return getHubFromCarrier(registry);
      }
      if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
        const registryHubTopStack = getHubFromCarrier(registry).getStackTop();
        setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, Scope.clone(registryHubTopStack.scope)));
      }
      return getHubFromCarrier(activeDomain);
    } catch (_Oo) {
      return getHubFromCarrier(registry);
    }
  }
  function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
  }
  function getHubFromCarrier(carrier) {
    return getGlobalSingleton("hub", () => new Hub(), carrier);
  }
  function setHubOnCarrier(carrier, hub) {
    if (!carrier)
      return false;
    const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    __SENTRY__.hub = hub;
    return true;
  }

  // node_modules/@sentry/core/esm/exports.js
  function captureException(exception, captureContext) {
    return getCurrentHub().captureException(exception, { captureContext });
  }
  function captureMessage(message, captureContext) {
    const level = typeof captureContext === "string" ? captureContext : void 0;
    const context = typeof captureContext !== "string" ? { captureContext } : void 0;
    return getCurrentHub().captureMessage(message, level, context);
  }
  function withScope(callback) {
    getCurrentHub().withScope(callback);
  }

  // node_modules/@sentry/core/esm/api.js
  var SENTRY_API_VERSION = "7";
  function getBaseApiEndpoint(dsn) {
    const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
    const port = dsn.port ? `:${dsn.port}` : "";
    return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
  }
  function _getIngestEndpoint(dsn) {
    return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
  }
  function _encodedAuth(dsn, sdkInfo) {
    return urlEncode({
      sentry_key: dsn.publicKey,
      sentry_version: SENTRY_API_VERSION,
      ...sdkInfo && { sentry_client: `${sdkInfo.name}/${sdkInfo.version}` }
    });
  }
  function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnelOrOptions = {}) {
    const tunnel = typeof tunnelOrOptions === "string" ? tunnelOrOptions : tunnelOrOptions.tunnel;
    const sdkInfo = typeof tunnelOrOptions === "string" || !tunnelOrOptions._metadata ? void 0 : tunnelOrOptions._metadata.sdk;
    return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
  }

  // node_modules/@sentry/core/esm/envelope.js
  function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) {
      return event;
    }
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = [...event.sdk.integrations || [], ...sdkInfo.integrations || []];
    event.sdk.packages = [...event.sdk.packages || [], ...sdkInfo.packages || []];
    return event;
  }
  function createSessionEnvelope(session, dsn, metadata, tunnel) {
    const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    const envelopeHeaders = {
      sent_at: new Date().toISOString(),
      ...sdkInfo && { sdk: sdkInfo },
      ...!!tunnel && { dsn: dsnToString(dsn) }
    };
    const envelopeItem = "aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session];
    return createEnvelope(envelopeHeaders, [envelopeItem]);
  }
  function createEventEnvelope(event, dsn, metadata, tunnel) {
    const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
    enhanceEventWithSdkInfo(event, metadata && metadata.sdk);
    const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
    delete event.sdkProcessingMetadata;
    const eventItem = [{ type: eventType }, event];
    return createEnvelope(envelopeHeaders, [eventItem]);
  }

  // node_modules/@sentry/core/esm/integration.js
  var installedIntegrations = [];
  function filterDuplicates(integrations) {
    const integrationsByName = {};
    integrations.forEach((currentInstance) => {
      const { name } = currentInstance;
      const existingInstance = integrationsByName[name];
      if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
        return;
      }
      integrationsByName[name] = currentInstance;
    });
    return Object.values(integrationsByName);
  }
  function getIntegrationsToSetup(options) {
    const defaultIntegrations2 = options.defaultIntegrations || [];
    const userIntegrations = options.integrations;
    defaultIntegrations2.forEach((integration) => {
      integration.isDefaultInstance = true;
    });
    let integrations;
    if (Array.isArray(userIntegrations)) {
      integrations = [...defaultIntegrations2, ...userIntegrations];
    } else if (typeof userIntegrations === "function") {
      integrations = arrayify(userIntegrations(defaultIntegrations2));
    } else {
      integrations = defaultIntegrations2;
    }
    const finalIntegrations = filterDuplicates(integrations);
    const debugIndex = finalIntegrations.findIndex((integration) => integration.name === "Debug");
    if (debugIndex !== -1) {
      const [debugInstance] = finalIntegrations.splice(debugIndex, 1);
      finalIntegrations.push(debugInstance);
    }
    return finalIntegrations;
  }
  function setupIntegrations(integrations) {
    const integrationIndex = {};
    integrations.forEach((integration) => {
      setupIntegration(integration, integrationIndex);
    });
    return integrationIndex;
  }
  function setupIntegration(integration, integrationIndex) {
    integrationIndex[integration.name] = integration;
    if (installedIntegrations.indexOf(integration.name) === -1) {
      integration.setupOnce(addGlobalEventProcessor, getCurrentHub);
      installedIntegrations.push(integration.name);
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Integration installed: ${integration.name}`);
    }
  }

  // node_modules/@sentry/core/esm/utils/prepareEvent.js
  function prepareEvent(options, event, hint, scope) {
    const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
    const prepared = {
      ...event,
      event_id: event.event_id || hint.event_id || uuid4(),
      timestamp: event.timestamp || dateTimestampInSeconds()
    };
    applyClientOptions(prepared, options);
    applyIntegrationsMetadata(
      prepared,
      options.integrations.map((i6) => i6.name)
    );
    let finalScope = scope;
    if (hint.captureContext) {
      finalScope = Scope.clone(finalScope).update(hint.captureContext);
    }
    let result = resolvedSyncPromise(prepared);
    if (finalScope) {
      if (finalScope.getAttachments) {
        const attachments = [...hint.attachments || [], ...finalScope.getAttachments()];
        if (attachments.length) {
          hint.attachments = attachments;
        }
      }
      result = finalScope.applyToEvent(prepared, hint);
    }
    return result.then((evt) => {
      if (typeof normalizeDepth === "number" && normalizeDepth > 0) {
        return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
      }
      return evt;
    });
  }
  function applyClientOptions(event, options) {
    const { environment, release, dist, maxValueLength = 250 } = options;
    if (!("environment" in event)) {
      event.environment = "environment" in options ? environment : "production";
    }
    if (event.release === void 0 && release !== void 0) {
      event.release = release;
    }
    if (event.dist === void 0 && dist !== void 0) {
      event.dist = dist;
    }
    if (event.message) {
      event.message = truncate(event.message, maxValueLength);
    }
    const exception = event.exception && event.exception.values && event.exception.values[0];
    if (exception && exception.value) {
      exception.value = truncate(exception.value, maxValueLength);
    }
    const request = event.request;
    if (request && request.url) {
      request.url = truncate(request.url, maxValueLength);
    }
  }
  function applyIntegrationsMetadata(event, integrationNames) {
    if (integrationNames.length > 0) {
      event.sdk = event.sdk || {};
      event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
    }
  }
  function normalizeEvent(event, depth, maxBreadth) {
    if (!event) {
      return null;
    }
    const normalized = {
      ...event,
      ...event.breadcrumbs && {
        breadcrumbs: event.breadcrumbs.map((b4) => ({
          ...b4,
          ...b4.data && {
            data: normalize(b4.data, depth, maxBreadth)
          }
        }))
      },
      ...event.user && {
        user: normalize(event.user, depth, maxBreadth)
      },
      ...event.contexts && {
        contexts: normalize(event.contexts, depth, maxBreadth)
      },
      ...event.extra && {
        extra: normalize(event.extra, depth, maxBreadth)
      }
    };
    if (event.contexts && event.contexts.trace && normalized.contexts) {
      normalized.contexts.trace = event.contexts.trace;
      if (event.contexts.trace.data) {
        normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
      }
    }
    if (event.spans) {
      normalized.spans = event.spans.map((span) => {
        if (span.data) {
          span.data = normalize(span.data, depth, maxBreadth);
        }
        return span;
      });
    }
    return normalized;
  }

  // node_modules/@sentry/core/esm/baseclient.js
  var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
  var BaseClient = class {
    __init() {
      this._integrations = {};
    }
    __init2() {
      this._integrationsInitialized = false;
    }
    __init3() {
      this._numProcessing = 0;
    }
    __init4() {
      this._outcomes = {};
    }
    constructor(options) {
      ;
      BaseClient.prototype.__init.call(this);
      BaseClient.prototype.__init2.call(this);
      BaseClient.prototype.__init3.call(this);
      BaseClient.prototype.__init4.call(this);
      this._options = options;
      if (options.dsn) {
        this._dsn = makeDsn(options.dsn);
        const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, options);
        this._transport = options.transport({
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...options.transportOptions,
          url
        });
      } else {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("No DSN provided, client will not do anything.");
      }
    }
    captureException(exception, hint, scope) {
      if (checkOrSetAlreadyCaught(exception)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(ALREADY_SEEN_ERROR);
        return;
      }
      let eventId = hint && hint.event_id;
      this._process(
        this.eventFromException(exception, hint).then((event) => this._captureEvent(event, hint, scope)).then((result) => {
          eventId = result;
        })
      );
      return eventId;
    }
    captureMessage(message, level, hint, scope) {
      let eventId = hint && hint.event_id;
      const promisedEvent = isPrimitive(message) ? this.eventFromMessage(String(message), level, hint) : this.eventFromException(message, hint);
      this._process(
        promisedEvent.then((event) => this._captureEvent(event, hint, scope)).then((result) => {
          eventId = result;
        })
      );
      return eventId;
    }
    captureEvent(event, hint, scope) {
      if (hint && hint.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(ALREADY_SEEN_ERROR);
        return;
      }
      let eventId = hint && hint.event_id;
      this._process(
        this._captureEvent(event, hint, scope).then((result) => {
          eventId = result;
        })
      );
      return eventId;
    }
    captureSession(session) {
      if (!this._isEnabled()) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("SDK not enabled, will not capture session.");
        return;
      }
      if (!(typeof session.release === "string")) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Discarded session because of missing or non-string release");
      } else {
        this.sendSession(session);
        updateSession(session, { init: false });
      }
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    flush(timeout) {
      const transport = this._transport;
      if (transport) {
        return this._isClientDoneProcessing(timeout).then((clientFinished) => {
          return transport.flush(timeout).then((transportFlushed) => clientFinished && transportFlushed);
        });
      } else {
        return resolvedSyncPromise(true);
      }
    }
    close(timeout) {
      return this.flush(timeout).then((result) => {
        this.getOptions().enabled = false;
        return result;
      });
    }
    setupIntegrations() {
      if (this._isEnabled() && !this._integrationsInitialized) {
        this._integrations = setupIntegrations(this._options.integrations);
        this._integrationsInitialized = true;
      }
    }
    getIntegrationById(integrationId) {
      return this._integrations[integrationId];
    }
    getIntegration(integration) {
      try {
        return this._integrations[integration.id] || null;
      } catch (_oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Client`);
        return null;
      }
    }
    addIntegration(integration) {
      setupIntegration(integration, this._integrations);
    }
    sendEvent(event, hint = {}) {
      if (this._dsn) {
        let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
        for (const attachment of hint.attachments || []) {
          env = addItemToEnvelope(
            env,
            createAttachmentEnvelopeItem(
              attachment,
              this._options.transportOptions && this._options.transportOptions.textEncoder
            )
          );
        }
        this._sendEnvelope(env);
      }
    }
    sendSession(session) {
      if (this._dsn) {
        const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
        this._sendEnvelope(env);
      }
    }
    recordDroppedEvent(reason, category, _event) {
      if (this._options.sendClientReports) {
        const key = `${reason}:${category}`;
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Adding outcome: "${key}"`);
        this._outcomes[key] = this._outcomes[key] + 1 || 1;
      }
    }
    _updateSessionFromEvent(session, event) {
      let crashed = false;
      let errored = false;
      const exceptions = event.exception && event.exception.values;
      if (exceptions) {
        errored = true;
        for (const ex of exceptions) {
          const mechanism = ex.mechanism;
          if (mechanism && mechanism.handled === false) {
            crashed = true;
            break;
          }
        }
      }
      const sessionNonTerminal = session.status === "ok";
      const shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
      if (shouldUpdateAndSend) {
        updateSession(session, {
          ...crashed && { status: "crashed" },
          errors: session.errors || Number(errored || crashed)
        });
        this.captureSession(session);
      }
    }
    _isClientDoneProcessing(timeout) {
      return new SyncPromise((resolve) => {
        let ticked = 0;
        const tick = 1;
        const interval = setInterval(() => {
          if (this._numProcessing == 0) {
            clearInterval(interval);
            resolve(true);
          } else {
            ticked += tick;
            if (timeout && ticked >= timeout) {
              clearInterval(interval);
              resolve(false);
            }
          }
        }, tick);
      });
    }
    _isEnabled() {
      return this.getOptions().enabled !== false && this._dsn !== void 0;
    }
    _prepareEvent(event, hint, scope) {
      const options = this.getOptions();
      return prepareEvent(options, event, hint, scope);
    }
    _captureEvent(event, hint = {}, scope) {
      return this._processEvent(event, hint, scope).then(
        (finalEvent) => {
          return finalEvent.event_id;
        },
        (reason) => {
          if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
            const sentryError = reason;
            if (sentryError.logLevel === "log") {
              logger.log(sentryError.message);
            } else {
              logger.warn(sentryError);
            }
          }
          return void 0;
        }
      );
    }
    _processEvent(event, hint, scope) {
      const options = this.getOptions();
      const { sampleRate } = options;
      if (!this._isEnabled()) {
        return rejectedSyncPromise(new SentryError("SDK not enabled, will not capture event.", "log"));
      }
      const isTransaction = isTransactionEvent(event);
      const isError2 = isErrorEvent2(event);
      const eventType = event.type || "error";
      const beforeSendLabel = `before send for type \`${eventType}\``;
      if (isError2 && typeof sampleRate === "number" && Math.random() > sampleRate) {
        this.recordDroppedEvent("sample_rate", "error", event);
        return rejectedSyncPromise(
          new SentryError(
            `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`,
            "log"
          )
        );
      }
      return this._prepareEvent(event, hint, scope).then((prepared) => {
        if (prepared === null) {
          this.recordDroppedEvent("event_processor", eventType, event);
          throw new SentryError("An event processor returned `null`, will not send event.", "log");
        }
        const isInternalException = hint.data && hint.data.__sentry__ === true;
        if (isInternalException) {
          return prepared;
        }
        const result = processBeforeSend(options, prepared, hint);
        return _validateBeforeSendResult(result, beforeSendLabel);
      }).then((processedEvent) => {
        if (processedEvent === null) {
          this.recordDroppedEvent("before_send", event.type || "error", event);
          throw new SentryError(`${beforeSendLabel} returned \`null\`, will not send event.`, "log");
        }
        const session = scope && scope.getSession();
        if (!isTransaction && session) {
          this._updateSessionFromEvent(session, processedEvent);
        }
        const transactionInfo = processedEvent.transaction_info;
        if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
          const source = "custom";
          processedEvent.transaction_info = {
            ...transactionInfo,
            source,
            changes: [
              ...transactionInfo.changes,
              {
                source,
                timestamp: processedEvent.timestamp,
                propagations: transactionInfo.propagations
              }
            ]
          };
        }
        this.sendEvent(processedEvent, hint);
        return processedEvent;
      }).then(null, (reason) => {
        if (reason instanceof SentryError) {
          throw reason;
        }
        this.captureException(reason, {
          data: {
            __sentry__: true
          },
          originalException: reason
        });
        throw new SentryError(
          `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${reason}`
        );
      });
    }
    _process(promise) {
      this._numProcessing++;
      void promise.then(
        (value) => {
          this._numProcessing--;
          return value;
        },
        (reason) => {
          this._numProcessing--;
          return reason;
        }
      );
    }
    _sendEnvelope(envelope) {
      if (this._transport && this._dsn) {
        this._transport.send(envelope).then(null, (reason) => {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Error while sending event:", reason);
        });
      } else {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Transport disabled");
      }
    }
    _clearOutcomes() {
      const outcomes = this._outcomes;
      this._outcomes = {};
      return Object.keys(outcomes).map((key) => {
        const [reason, category] = key.split(":");
        return {
          reason,
          category,
          quantity: outcomes[key]
        };
      });
    }
  };
  function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
    const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
    if (isThenable(beforeSendResult)) {
      return beforeSendResult.then(
        (event) => {
          if (!isPlainObject(event) && event !== null) {
            throw new SentryError(invalidValueError);
          }
          return event;
        },
        (e8) => {
          throw new SentryError(`${beforeSendLabel} rejected with ${e8}`);
        }
      );
    } else if (!isPlainObject(beforeSendResult) && beforeSendResult !== null) {
      throw new SentryError(invalidValueError);
    }
    return beforeSendResult;
  }
  function processBeforeSend(options, event, hint) {
    const { beforeSend, beforeSendTransaction } = options;
    if (isErrorEvent2(event) && beforeSend) {
      return beforeSend(event, hint);
    }
    if (isTransactionEvent(event) && beforeSendTransaction) {
      return beforeSendTransaction(event, hint);
    }
    return event;
  }
  function isErrorEvent2(event) {
    return event.type === void 0;
  }
  function isTransactionEvent(event) {
    return event.type === "transaction";
  }

  // node_modules/@sentry/core/esm/sdk.js
  function initAndBind(clientClass, options) {
    if (options.debug === true) {
      if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
        logger.enable();
      } else {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      }
    }
    const hub = getCurrentHub();
    const scope = hub.getScope();
    if (scope) {
      scope.update(options.initialScope);
    }
    const client = new clientClass(options);
    hub.bindClient(client);
  }

  // node_modules/@sentry/core/esm/transports/base.js
  var DEFAULT_TRANSPORT_BUFFER_SIZE = 30;
  function createTransport(options, makeRequest, buffer = makePromiseBuffer(
    options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE
  )) {
    let rateLimits = {};
    const flush2 = (timeout) => buffer.drain(timeout);
    function send(envelope) {
      const filteredEnvelopeItems = [];
      forEachEnvelopeItem(envelope, (item, type) => {
        const envelopeItemDataCategory = envelopeItemTypeToDataCategory(type);
        if (isRateLimited(rateLimits, envelopeItemDataCategory)) {
          const event = getEventForEnvelopeItem(item, type);
          options.recordDroppedEvent("ratelimit_backoff", envelopeItemDataCategory, event);
        } else {
          filteredEnvelopeItems.push(item);
        }
      });
      if (filteredEnvelopeItems.length === 0) {
        return resolvedSyncPromise();
      }
      const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
      const recordEnvelopeLoss = (reason) => {
        forEachEnvelopeItem(filteredEnvelope, (item, type) => {
          const event = getEventForEnvelopeItem(item, type);
          options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type), event);
        });
      };
      const requestTask = () => makeRequest({ body: serializeEnvelope(filteredEnvelope, options.textEncoder) }).then(
        (response) => {
          if (response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
          }
          rateLimits = updateRateLimits(rateLimits, response);
          return response;
        },
        (error) => {
          recordEnvelopeLoss("network_error");
          throw error;
        }
      );
      return buffer.add(requestTask).then(
        (result) => result,
        (error) => {
          if (error instanceof SentryError) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Skipped sending event because buffer is full.");
            recordEnvelopeLoss("queue_overflow");
            return resolvedSyncPromise();
          } else {
            throw error;
          }
        }
      );
    }
    return {
      send,
      flush: flush2
    };
  }
  function getEventForEnvelopeItem(item, type) {
    if (type !== "event" && type !== "transaction") {
      return void 0;
    }
    return Array.isArray(item) ? item[1] : void 0;
  }

  // node_modules/@sentry/core/esm/version.js
  var SDK_VERSION = "7.30.0";

  // node_modules/@sentry/core/esm/integrations/index.js
  var integrations_exports = {};
  __export(integrations_exports, {
    FunctionToString: () => FunctionToString,
    InboundFilters: () => InboundFilters
  });

  // node_modules/@sentry/core/esm/integrations/functiontostring.js
  var originalFunctionToString;
  var FunctionToString = class {
    constructor() {
      FunctionToString.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "FunctionToString";
    }
    __init() {
      this.name = FunctionToString.id;
    }
    setupOnce() {
      originalFunctionToString = Function.prototype.toString;
      Function.prototype.toString = function(...args) {
        const context = getOriginalFunction(this) || this;
        return originalFunctionToString.apply(context, args);
      };
    }
  };
  FunctionToString.__initStatic();

  // node_modules/@sentry/core/esm/integrations/inboundfilters.js
  var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
  var InboundFilters = class {
    static __initStatic() {
      this.id = "InboundFilters";
    }
    __init() {
      this.name = InboundFilters.id;
    }
    constructor(_options = {}) {
      ;
      this._options = _options;
      InboundFilters.prototype.__init.call(this);
    }
    setupOnce(addGlobalEventProcessor2, getCurrentHub2) {
      const eventProcess = (event) => {
        const hub = getCurrentHub2();
        if (hub) {
          const self2 = hub.getIntegration(InboundFilters);
          if (self2) {
            const client = hub.getClient();
            const clientOptions = client ? client.getOptions() : {};
            const options = _mergeOptions(self2._options, clientOptions);
            return _shouldDropEvent(event, options) ? null : event;
          }
        }
        return event;
      };
      eventProcess.id = this.name;
      addGlobalEventProcessor2(eventProcess);
    }
  };
  InboundFilters.__initStatic();
  function _mergeOptions(internalOptions = {}, clientOptions = {}) {
    return {
      allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
      denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
      ignoreErrors: [
        ...internalOptions.ignoreErrors || [],
        ...clientOptions.ignoreErrors || [],
        ...DEFAULT_IGNORE_ERRORS
      ],
      ignoreInternal: internalOptions.ignoreInternal !== void 0 ? internalOptions.ignoreInternal : true
    };
  }
  function _shouldDropEvent(event, options) {
    if (options.ignoreInternal && _isSentryError(event)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${getEventDescription(event)}`);
      return true;
    }
    if (_isIgnoredError(event, options.ignoreErrors)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${getEventDescription(event)}`
      );
      return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to being matched by \`denyUrls\` option.
Event: ${getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
    return false;
  }
  function _isIgnoredError(event, ignoreErrors) {
    if (!ignoreErrors || !ignoreErrors.length) {
      return false;
    }
    return _getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
  }
  function _isDeniedUrl(event, denyUrls) {
    if (!denyUrls || !denyUrls.length) {
      return false;
    }
    const url = _getEventFilterUrl(event);
    return !url ? false : stringMatchesSomePattern(url, denyUrls);
  }
  function _isAllowedUrl(event, allowUrls) {
    if (!allowUrls || !allowUrls.length) {
      return true;
    }
    const url = _getEventFilterUrl(event);
    return !url ? true : stringMatchesSomePattern(url, allowUrls);
  }
  function _getPossibleEventMessages(event) {
    if (event.message) {
      return [event.message];
    }
    if (event.exception) {
      try {
        const { type = "", value = "" } = event.exception.values && event.exception.values[0] || {};
        return [`${value}`, `${type}: ${value}`];
      } catch (oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(`Cannot extract message for event ${getEventDescription(event)}`);
        return [];
      }
    }
    return [];
  }
  function _isSentryError(event) {
    try {
      return event.exception.values[0].type === "SentryError";
    } catch (e8) {
    }
    return false;
  }
  function _getLastValidUrl(frames = []) {
    for (let i6 = frames.length - 1; i6 >= 0; i6--) {
      const frame = frames[i6];
      if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") {
        return frame.filename || null;
      }
    }
    return null;
  }
  function _getEventFilterUrl(event) {
    try {
      let frames;
      try {
        frames = event.exception.values[0].stacktrace.frames;
      } catch (e8) {
      }
      return frames ? _getLastValidUrl(frames) : null;
    } catch (oO) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(`Cannot extract url for event ${getEventDescription(event)}`);
      return null;
    }
  }

  // node_modules/@sentry/browser/esm/helpers.js
  var WINDOW5 = GLOBAL_OBJ;
  var ignoreOnError = 0;
  function shouldIgnoreOnError() {
    return ignoreOnError > 0;
  }
  function ignoreNextOnError() {
    ignoreOnError++;
    setTimeout(() => {
      ignoreOnError--;
    });
  }
  function wrap(fn, options = {}, before) {
    if (typeof fn !== "function") {
      return fn;
    }
    try {
      const wrapper = fn.__sentry_wrapped__;
      if (wrapper) {
        return wrapper;
      }
      if (getOriginalFunction(fn)) {
        return fn;
      }
    } catch (e8) {
      return fn;
    }
    const sentryWrapped = function() {
      const args = Array.prototype.slice.call(arguments);
      try {
        if (before && typeof before === "function") {
          before.apply(this, arguments);
        }
        const wrappedArguments = args.map((arg) => wrap(arg, options));
        return fn.apply(this, wrappedArguments);
      } catch (ex) {
        ignoreNextOnError();
        withScope((scope) => {
          scope.addEventProcessor((event) => {
            if (options.mechanism) {
              addExceptionTypeValue(event, void 0, void 0);
              addExceptionMechanism(event, options.mechanism);
            }
            event.extra = {
              ...event.extra,
              arguments: args
            };
            return event;
          });
          captureException(ex);
        });
        throw ex;
      }
    };
    try {
      for (const property in fn) {
        if (Object.prototype.hasOwnProperty.call(fn, property)) {
          sentryWrapped[property] = fn[property];
        }
      }
    } catch (_oO) {
    }
    markFunctionWrapped(sentryWrapped, fn);
    addNonEnumerableProperty(fn, "__sentry_wrapped__", sentryWrapped);
    try {
      const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
      if (descriptor.configurable) {
        Object.defineProperty(sentryWrapped, "name", {
          get() {
            return fn.name;
          }
        });
      }
    } catch (_oO) {
    }
    return sentryWrapped;
  }

  // node_modules/@sentry/browser/esm/eventbuilder.js
  function exceptionFromError(stackParser, ex) {
    const frames = parseStackFrames(stackParser, ex);
    const exception = {
      type: ex && ex.name,
      value: extractMessage(ex)
    };
    if (frames.length) {
      exception.stacktrace = { frames };
    }
    if (exception.type === void 0 && exception.value === "") {
      exception.value = "Unrecoverable error caught";
    }
    return exception;
  }
  function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
    const hub = getCurrentHub();
    const client = hub.getClient();
    const normalizeDepth = client && client.getOptions().normalizeDepth;
    const event = {
      exception: {
        values: [
          {
            type: isEvent(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
            value: `Non-Error ${isUnhandledRejection ? "promise rejection" : "exception"} captured with keys: ${extractExceptionKeysForMessage(exception)}`
          }
        ]
      },
      extra: {
        __serialized__: normalizeToSize(exception, normalizeDepth)
      }
    };
    if (syntheticException) {
      const frames = parseStackFrames(stackParser, syntheticException);
      if (frames.length) {
        event.exception.values[0].stacktrace = { frames };
      }
    }
    return event;
  }
  function eventFromError(stackParser, ex) {
    return {
      exception: {
        values: [exceptionFromError(stackParser, ex)]
      }
    };
  }
  function parseStackFrames(stackParser, ex) {
    const stacktrace = ex.stacktrace || ex.stack || "";
    const popSize = getPopSize(ex);
    try {
      return stackParser(stacktrace, popSize);
    } catch (e8) {
    }
    return [];
  }
  var reactMinifiedRegexp = /Minified React error #\d+;/i;
  function getPopSize(ex) {
    if (ex) {
      if (typeof ex.framesToPop === "number") {
        return ex.framesToPop;
      }
      if (reactMinifiedRegexp.test(ex.message)) {
        return 1;
      }
    }
    return 0;
  }
  function extractMessage(ex) {
    const message = ex && ex.message;
    if (!message) {
      return "No error message";
    }
    if (message.error && typeof message.error.message === "string") {
      return message.error.message;
    }
    return message;
  }
  function eventFromException(stackParser, exception, hint, attachStacktrace) {
    const syntheticException = hint && hint.syntheticException || void 0;
    const event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
    addExceptionMechanism(event);
    event.level = "error";
    if (hint && hint.event_id) {
      event.event_id = hint.event_id;
    }
    return resolvedSyncPromise(event);
  }
  function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
    const syntheticException = hint && hint.syntheticException || void 0;
    const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
    event.level = level;
    if (hint && hint.event_id) {
      event.event_id = hint.event_id;
    }
    return resolvedSyncPromise(event);
  }
  function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
    let event;
    if (isErrorEvent(exception) && exception.error) {
      const errorEvent = exception;
      return eventFromError(stackParser, errorEvent.error);
    }
    if (isDOMError(exception) || isDOMException(exception)) {
      const domException = exception;
      if ("stack" in exception) {
        event = eventFromError(stackParser, exception);
      } else {
        const name = domException.name || (isDOMError(domException) ? "DOMError" : "DOMException");
        const message = domException.message ? `${name}: ${domException.message}` : name;
        event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
        addExceptionTypeValue(event, message);
      }
      if ("code" in domException) {
        event.tags = { ...event.tags, "DOMException.code": `${domException.code}` };
      }
      return event;
    }
    if (isError(exception)) {
      return eventFromError(stackParser, exception);
    }
    if (isPlainObject(exception) || isEvent(exception)) {
      const objectException = exception;
      event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
      addExceptionMechanism(event, {
        synthetic: true
      });
      return event;
    }
    event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
    addExceptionTypeValue(event, `${exception}`, void 0);
    addExceptionMechanism(event, {
      synthetic: true
    });
    return event;
  }
  function eventFromString(stackParser, input, syntheticException, attachStacktrace) {
    const event = {
      message: input
    };
    if (attachStacktrace && syntheticException) {
      const frames = parseStackFrames(stackParser, syntheticException);
      if (frames.length) {
        event.exception = {
          values: [{ value: input, stacktrace: { frames } }]
        };
      }
    }
    return event;
  }

  // node_modules/@sentry/browser/esm/integrations/breadcrumbs.js
  var MAX_ALLOWED_STRING_LENGTH = 1024;
  var BREADCRUMB_INTEGRATION_ID = "Breadcrumbs";
  var Breadcrumbs = class {
    static __initStatic() {
      this.id = BREADCRUMB_INTEGRATION_ID;
    }
    __init() {
      this.name = Breadcrumbs.id;
    }
    constructor(options) {
      ;
      Breadcrumbs.prototype.__init.call(this);
      this.options = {
        console: true,
        dom: true,
        fetch: true,
        history: true,
        sentry: true,
        xhr: true,
        ...options
      };
    }
    setupOnce() {
      if (this.options.console) {
        addInstrumentationHandler("console", _consoleBreadcrumb);
      }
      if (this.options.dom) {
        addInstrumentationHandler("dom", _domBreadcrumb(this.options.dom));
      }
      if (this.options.xhr) {
        addInstrumentationHandler("xhr", _xhrBreadcrumb);
      }
      if (this.options.fetch) {
        addInstrumentationHandler("fetch", _fetchBreadcrumb);
      }
      if (this.options.history) {
        addInstrumentationHandler("history", _historyBreadcrumb);
      }
    }
    addSentryBreadcrumb(event) {
      if (this.options.sentry) {
        getCurrentHub().addBreadcrumb(
          {
            category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
            event_id: event.event_id,
            level: event.level,
            message: getEventDescription(event)
          },
          {
            event
          }
        );
      }
    }
  };
  Breadcrumbs.__initStatic();
  function _domBreadcrumb(dom) {
    function _innerDomBreadcrumb(handlerData) {
      let target;
      let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : void 0;
      let maxStringLength = typeof dom === "object" && typeof dom.maxStringLength === "number" ? dom.maxStringLength : void 0;
      if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
          `\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`
        );
        maxStringLength = MAX_ALLOWED_STRING_LENGTH;
      }
      if (typeof keyAttrs === "string") {
        keyAttrs = [keyAttrs];
      }
      try {
        target = handlerData.event.target ? htmlTreeAsString(handlerData.event.target, { keyAttrs, maxStringLength }) : htmlTreeAsString(handlerData.event, { keyAttrs, maxStringLength });
      } catch (e8) {
        target = "<unknown>";
      }
      if (target.length === 0) {
        return;
      }
      getCurrentHub().addBreadcrumb(
        {
          category: `ui.${handlerData.name}`,
          message: target
        },
        {
          event: handlerData.event,
          name: handlerData.name,
          global: handlerData.global
        }
      );
    }
    return _innerDomBreadcrumb;
  }
  function _consoleBreadcrumb(handlerData) {
    for (let i6 = 0; i6 < handlerData.args.length; i6++) {
      if (handlerData.args[i6] === "ref=Ref<") {
        handlerData.args[i6 + 1] = "viewRef";
        break;
      }
    }
    const breadcrumb = {
      category: "console",
      data: {
        arguments: handlerData.args,
        logger: "console"
      },
      level: severityLevelFromString(handlerData.level),
      message: safeJoin(handlerData.args, " ")
    };
    if (handlerData.level === "assert") {
      if (handlerData.args[0] === false) {
        breadcrumb.message = `Assertion failed: ${safeJoin(handlerData.args.slice(1), " ") || "console.assert"}`;
        breadcrumb.data.arguments = handlerData.args.slice(1);
      } else {
        return;
      }
    }
    getCurrentHub().addBreadcrumb(breadcrumb, {
      input: handlerData.args,
      level: handlerData.level
    });
  }
  function _xhrBreadcrumb(handlerData) {
    if (handlerData.endTimestamp) {
      if (handlerData.xhr.__sentry_own_request__) {
        return;
      }
      const { method, url, status_code, body: body2 } = handlerData.xhr.__sentry_xhr__ || {};
      getCurrentHub().addBreadcrumb(
        {
          category: "xhr",
          data: {
            method,
            url,
            status_code
          },
          type: "http"
        },
        {
          xhr: handlerData.xhr,
          input: body2
        }
      );
      return;
    }
  }
  function _fetchBreadcrumb(handlerData) {
    if (!handlerData.endTimestamp) {
      return;
    }
    if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") {
      return;
    }
    if (handlerData.error) {
      getCurrentHub().addBreadcrumb(
        {
          category: "fetch",
          data: handlerData.fetchData,
          level: "error",
          type: "http"
        },
        {
          data: handlerData.error,
          input: handlerData.args
        }
      );
    } else {
      getCurrentHub().addBreadcrumb(
        {
          category: "fetch",
          data: {
            ...handlerData.fetchData,
            status_code: handlerData.response.status
          },
          type: "http"
        },
        {
          input: handlerData.args,
          response: handlerData.response
        }
      );
    }
  }
  function _historyBreadcrumb(handlerData) {
    let from = handlerData.from;
    let to = handlerData.to;
    const parsedLoc = parseUrl(WINDOW5.location.href);
    let parsedFrom = parseUrl(from);
    const parsedTo = parseUrl(to);
    if (!parsedFrom.path) {
      parsedFrom = parsedLoc;
    }
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
      to = parsedTo.relative;
    }
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
      from = parsedFrom.relative;
    }
    getCurrentHub().addBreadcrumb({
      category: "navigation",
      data: {
        from,
        to
      }
    });
  }

  // node_modules/@sentry/browser/esm/client.js
  var BrowserClient = class extends BaseClient {
    constructor(options) {
      options._metadata = options._metadata || {};
      options._metadata.sdk = options._metadata.sdk || {
        name: "sentry.javascript.browser",
        packages: [
          {
            name: "npm:@sentry/browser",
            version: SDK_VERSION
          }
        ],
        version: SDK_VERSION
      };
      super(options);
      if (options.sendClientReports && WINDOW5.document) {
        WINDOW5.document.addEventListener("visibilitychange", () => {
          if (WINDOW5.document.visibilityState === "hidden") {
            this._flushOutcomes();
          }
        });
      }
    }
    eventFromException(exception, hint) {
      return eventFromException(this._options.stackParser, exception, hint, this._options.attachStacktrace);
    }
    eventFromMessage(message, level = "info", hint) {
      return eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
    }
    sendEvent(event, hint) {
      const breadcrumbIntegration = this.getIntegrationById(BREADCRUMB_INTEGRATION_ID);
      _optionalChain([breadcrumbIntegration, "optionalAccess", (_2) => _2.addSentryBreadcrumb, "optionalCall", (_2) => _2(event)]);
      super.sendEvent(event, hint);
    }
    _prepareEvent(event, hint, scope) {
      event.platform = event.platform || "javascript";
      return super._prepareEvent(event, hint, scope);
    }
    _flushOutcomes() {
      const outcomes = this._clearOutcomes();
      if (outcomes.length === 0) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("No outcomes to send");
        return;
      }
      if (!this._dsn) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("No dsn provided, will not send outcomes");
        return;
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("Sending outcomes:", outcomes);
      const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, this._options);
      const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));
      try {
        const isRealNavigator = Object.prototype.toString.call(WINDOW5 && WINDOW5.navigator) === "[object Navigator]";
        const hasSendBeacon = isRealNavigator && typeof WINDOW5.navigator.sendBeacon === "function";
        if (hasSendBeacon && !this._options.transportOptions) {
          const sendBeacon = WINDOW5.navigator.sendBeacon.bind(WINDOW5.navigator);
          sendBeacon(url, serializeEnvelope(envelope));
        } else {
          this._sendEnvelope(envelope);
        }
      } catch (e8) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(e8);
      }
    }
  };

  // node_modules/@sentry/browser/esm/transports/utils.js
  var cachedFetchImpl = void 0;
  function getNativeFetchImplementation() {
    if (cachedFetchImpl) {
      return cachedFetchImpl;
    }
    if (isNativeFetch(WINDOW5.fetch)) {
      return cachedFetchImpl = WINDOW5.fetch.bind(WINDOW5);
    }
    const document2 = WINDOW5.document;
    let fetchImpl = WINDOW5.fetch;
    if (document2 && typeof document2.createElement === "function") {
      try {
        const sandbox = document2.createElement("iframe");
        sandbox.hidden = true;
        document2.head.appendChild(sandbox);
        const contentWindow = sandbox.contentWindow;
        if (contentWindow && contentWindow.fetch) {
          fetchImpl = contentWindow.fetch;
        }
        document2.head.removeChild(sandbox);
      } catch (e8) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e8);
      }
    }
    return cachedFetchImpl = fetchImpl.bind(WINDOW5);
  }
  function clearCachedFetchImplementation() {
    cachedFetchImpl = void 0;
  }

  // node_modules/@sentry/browser/esm/transports/fetch.js
  function makeFetchTransport(options, nativeFetch = getNativeFetchImplementation()) {
    function makeRequest(request) {
      const requestOptions = {
        body: request.body,
        method: "POST",
        referrerPolicy: "origin",
        headers: options.headers,
        keepalive: request.body.length <= 65536,
        ...options.fetchOptions
      };
      try {
        return nativeFetch(options.url, requestOptions).then((response) => ({
          statusCode: response.status,
          headers: {
            "x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": response.headers.get("Retry-After")
          }
        }));
      } catch (e8) {
        clearCachedFetchImplementation();
        return rejectedSyncPromise(e8);
      }
    }
    return createTransport(options, makeRequest);
  }

  // node_modules/@sentry/browser/esm/transports/xhr.js
  var XHR_READYSTATE_DONE = 4;
  function makeXHRTransport(options) {
    function makeRequest(request) {
      return new SyncPromise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onerror = reject;
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XHR_READYSTATE_DONE) {
            resolve({
              statusCode: xhr.status,
              headers: {
                "x-sentry-rate-limits": xhr.getResponseHeader("X-Sentry-Rate-Limits"),
                "retry-after": xhr.getResponseHeader("Retry-After")
              }
            });
          }
        };
        xhr.open("POST", options.url);
        for (const header in options.headers) {
          if (Object.prototype.hasOwnProperty.call(options.headers, header)) {
            xhr.setRequestHeader(header, options.headers[header]);
          }
        }
        xhr.send(request.body);
      });
    }
    return createTransport(options, makeRequest);
  }

  // node_modules/@sentry/browser/esm/stack-parsers.js
  var UNKNOWN_FUNCTION = "?";
  var CHROME_PRIORITY = 30;
  var WINJS_PRIORITY = 40;
  var GECKO_PRIORITY = 50;
  function createFrame(filename, func, lineno, colno) {
    const frame = {
      filename,
      function: func,
      in_app: true
    };
    if (lineno !== void 0) {
      frame.lineno = lineno;
    }
    if (colno !== void 0) {
      frame.colno = colno;
    }
    return frame;
  }
  var chromeRegex = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
  var chrome2 = (line) => {
    const parts = chromeRegex.exec(line);
    if (parts) {
      const isEval = parts[2] && parts[2].indexOf("eval") === 0;
      if (isEval) {
        const subMatch = chromeEvalRegex.exec(parts[2]);
        if (subMatch) {
          parts[2] = subMatch[1];
          parts[3] = subMatch[2];
          parts[4] = subMatch[3];
        }
      }
      const [func, filename] = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]);
      return createFrame(filename, func, parts[3] ? +parts[3] : void 0, parts[4] ? +parts[4] : void 0);
    }
    return;
  };
  var chromeStackLineParser = [CHROME_PRIORITY, chrome2];
  var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
  var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  var gecko = (line) => {
    const parts = geckoREgex.exec(line);
    if (parts) {
      const isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
      if (isEval) {
        const subMatch = geckoEvalRegex.exec(parts[3]);
        if (subMatch) {
          parts[1] = parts[1] || "eval";
          parts[3] = subMatch[1];
          parts[4] = subMatch[2];
          parts[5] = "";
        }
      }
      let filename = parts[3];
      let func = parts[1] || UNKNOWN_FUNCTION;
      [func, filename] = extractSafariExtensionDetails(func, filename);
      return createFrame(filename, func, parts[4] ? +parts[4] : void 0, parts[5] ? +parts[5] : void 0);
    }
    return;
  };
  var geckoStackLineParser = [GECKO_PRIORITY, gecko];
  var winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var winjs = (line) => {
    const parts = winjsRegex.exec(line);
    return parts ? createFrame(parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : void 0) : void 0;
  };
  var winjsStackLineParser = [WINJS_PRIORITY, winjs];
  var defaultStackLineParsers = [chromeStackLineParser, geckoStackLineParser, winjsStackLineParser];
  var defaultStackParser = createStackParser(...defaultStackLineParsers);
  var extractSafariExtensionDetails = (func, filename) => {
    const isSafariExtension = func.indexOf("safari-extension") !== -1;
    const isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
    return isSafariExtension || isSafariWebExtension ? [
      func.indexOf("@") !== -1 ? func.split("@")[0] : UNKNOWN_FUNCTION,
      isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`
    ] : [func, filename];
  };

  // node_modules/@sentry/browser/esm/integrations/index.js
  var integrations_exports2 = {};
  __export(integrations_exports2, {
    Breadcrumbs: () => Breadcrumbs,
    Dedupe: () => Dedupe,
    GlobalHandlers: () => GlobalHandlers,
    HttpContext: () => HttpContext,
    LinkedErrors: () => LinkedErrors,
    TryCatch: () => TryCatch
  });

  // node_modules/@sentry/browser/esm/integrations/globalhandlers.js
  var GlobalHandlers = class {
    static __initStatic() {
      this.id = "GlobalHandlers";
    }
    __init() {
      this.name = GlobalHandlers.id;
    }
    __init2() {
      this._installFunc = {
        onerror: _installGlobalOnErrorHandler,
        onunhandledrejection: _installGlobalOnUnhandledRejectionHandler
      };
    }
    constructor(options) {
      ;
      GlobalHandlers.prototype.__init.call(this);
      GlobalHandlers.prototype.__init2.call(this);
      this._options = {
        onerror: true,
        onunhandledrejection: true,
        ...options
      };
    }
    setupOnce() {
      Error.stackTraceLimit = 50;
      const options = this._options;
      for (const key in options) {
        const installFunc = this._installFunc[key];
        if (installFunc && options[key]) {
          globalHandlerLog(key);
          installFunc();
          this._installFunc[key] = void 0;
        }
      }
    }
  };
  GlobalHandlers.__initStatic();
  function _installGlobalOnErrorHandler() {
    addInstrumentationHandler(
      "error",
      (data) => {
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) {
          return;
        }
        const { msg, url, line, column, error } = data;
        if (shouldIgnoreOnError() || error && error.__sentry_own_request__) {
          return;
        }
        const event = error === void 0 && isString(msg) ? _eventFromIncompleteOnError(msg, url, line, column) : _enhanceEventWithInitialFrame(
          eventFromUnknownInput(stackParser, error || msg, void 0, attachStacktrace, false),
          url,
          line,
          column
        );
        event.level = "error";
        addMechanismAndCapture(hub, error, event, "onerror");
      }
    );
  }
  function _installGlobalOnUnhandledRejectionHandler() {
    addInstrumentationHandler(
      "unhandledrejection",
      (e8) => {
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) {
          return;
        }
        let error = e8;
        try {
          if ("reason" in e8) {
            error = e8.reason;
          } else if ("detail" in e8 && "reason" in e8.detail) {
            error = e8.detail.reason;
          }
        } catch (_oO) {
        }
        if (shouldIgnoreOnError() || error && error.__sentry_own_request__) {
          return true;
        }
        const event = isPrimitive(error) ? _eventFromRejectionWithPrimitive(error) : eventFromUnknownInput(stackParser, error, void 0, attachStacktrace, true);
        event.level = "error";
        addMechanismAndCapture(hub, error, event, "onunhandledrejection");
        return;
      }
    );
  }
  function _eventFromRejectionWithPrimitive(reason) {
    return {
      exception: {
        values: [
          {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(reason)}`
          }
        ]
      }
    };
  }
  function _eventFromIncompleteOnError(msg, url, line, column) {
    const ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    let message = isErrorEvent(msg) ? msg.message : msg;
    let name = "Error";
    const groups = message.match(ERROR_TYPES_RE);
    if (groups) {
      name = groups[1];
      message = groups[2];
    }
    const event = {
      exception: {
        values: [
          {
            type: name,
            value: message
          }
        ]
      }
    };
    return _enhanceEventWithInitialFrame(event, url, line, column);
  }
  function _enhanceEventWithInitialFrame(event, url, line, column) {
    const e8 = event.exception = event.exception || {};
    const ev = e8.values = e8.values || [];
    const ev0 = ev[0] = ev[0] || {};
    const ev0s = ev0.stacktrace = ev0.stacktrace || {};
    const ev0sf = ev0s.frames = ev0s.frames || [];
    const colno = isNaN(parseInt(column, 10)) ? void 0 : column;
    const lineno = isNaN(parseInt(line, 10)) ? void 0 : line;
    const filename = isString(url) && url.length > 0 ? url : getLocationHref();
    if (ev0sf.length === 0) {
      ev0sf.push({
        colno,
        filename,
        function: "?",
        in_app: true,
        lineno
      });
    }
    return event;
  }
  function globalHandlerLog(type) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Global Handler attached: ${type}`);
  }
  function addMechanismAndCapture(hub, error, event, type) {
    addExceptionMechanism(event, {
      handled: false,
      type
    });
    hub.captureEvent(event, {
      originalException: error
    });
  }
  function getHubAndOptions() {
    const hub = getCurrentHub();
    const client = hub.getClient();
    const options = client && client.getOptions() || {
      stackParser: () => [],
      attachStacktrace: false
    };
    return [hub, options.stackParser, options.attachStacktrace];
  }

  // node_modules/@sentry/browser/esm/integrations/trycatch.js
  var DEFAULT_EVENT_TARGET = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload"
  ];
  var TryCatch = class {
    static __initStatic() {
      this.id = "TryCatch";
    }
    __init() {
      this.name = TryCatch.id;
    }
    constructor(options) {
      ;
      TryCatch.prototype.__init.call(this);
      this._options = {
        XMLHttpRequest: true,
        eventTarget: true,
        requestAnimationFrame: true,
        setInterval: true,
        setTimeout: true,
        ...options
      };
    }
    setupOnce() {
      if (this._options.setTimeout) {
        fill(WINDOW5, "setTimeout", _wrapTimeFunction);
      }
      if (this._options.setInterval) {
        fill(WINDOW5, "setInterval", _wrapTimeFunction);
      }
      if (this._options.requestAnimationFrame) {
        fill(WINDOW5, "requestAnimationFrame", _wrapRAF);
      }
      if (this._options.XMLHttpRequest && "XMLHttpRequest" in WINDOW5) {
        fill(XMLHttpRequest.prototype, "send", _wrapXHR);
      }
      const eventTargetOption = this._options.eventTarget;
      if (eventTargetOption) {
        const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
        eventTarget.forEach(_wrapEventTarget);
      }
    }
  };
  TryCatch.__initStatic();
  function _wrapTimeFunction(original) {
    return function(...args) {
      const originalCallback = args[0];
      args[0] = wrap(originalCallback, {
        mechanism: {
          data: { function: getFunctionName(original) },
          handled: true,
          type: "instrument"
        }
      });
      return original.apply(this, args);
    };
  }
  function _wrapRAF(original) {
    return function(callback) {
      return original.apply(this, [
        wrap(callback, {
          mechanism: {
            data: {
              function: "requestAnimationFrame",
              handler: getFunctionName(original)
            },
            handled: true,
            type: "instrument"
          }
        })
      ]);
    };
  }
  function _wrapXHR(originalSend) {
    return function(...args) {
      const xhr = this;
      const xmlHttpRequestProps = ["onload", "onerror", "onprogress", "onreadystatechange"];
      xmlHttpRequestProps.forEach((prop) => {
        if (prop in xhr && typeof xhr[prop] === "function") {
          fill(xhr, prop, function(original) {
            const wrapOptions = {
              mechanism: {
                data: {
                  function: prop,
                  handler: getFunctionName(original)
                },
                handled: true,
                type: "instrument"
              }
            };
            const originalFunction = getOriginalFunction(original);
            if (originalFunction) {
              wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
            }
            return wrap(original, wrapOptions);
          });
        }
      });
      return originalSend.apply(this, args);
    };
  }
  function _wrapEventTarget(target) {
    const globalObject = WINDOW5;
    const proto = globalObject[target] && globalObject[target].prototype;
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) {
      return;
    }
    fill(proto, "addEventListener", function(original) {
      return function(eventName, fn, options) {
        try {
          if (typeof fn.handleEvent === "function") {
            fn.handleEvent = wrap(fn.handleEvent, {
              mechanism: {
                data: {
                  function: "handleEvent",
                  handler: getFunctionName(fn),
                  target
                },
                handled: true,
                type: "instrument"
              }
            });
          }
        } catch (err) {
        }
        return original.apply(this, [
          eventName,
          wrap(fn, {
            mechanism: {
              data: {
                function: "addEventListener",
                handler: getFunctionName(fn),
                target
              },
              handled: true,
              type: "instrument"
            }
          }),
          options
        ]);
      };
    });
    fill(
      proto,
      "removeEventListener",
      function(originalRemoveEventListener) {
        return function(eventName, fn, options) {
          const wrappedEventHandler = fn;
          try {
            const originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
            if (originalEventHandler) {
              originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
            }
          } catch (e8) {
          }
          return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
        };
      }
    );
  }

  // node_modules/@sentry/browser/esm/integrations/linkederrors.js
  var DEFAULT_KEY = "cause";
  var DEFAULT_LIMIT = 5;
  var LinkedErrors = class {
    static __initStatic() {
      this.id = "LinkedErrors";
    }
    __init() {
      this.name = LinkedErrors.id;
    }
    constructor(options = {}) {
      ;
      LinkedErrors.prototype.__init.call(this);
      this._key = options.key || DEFAULT_KEY;
      this._limit = options.limit || DEFAULT_LIMIT;
    }
    setupOnce() {
      const client = getCurrentHub().getClient();
      if (!client) {
        return;
      }
      addGlobalEventProcessor((event, hint) => {
        const self2 = getCurrentHub().getIntegration(LinkedErrors);
        return self2 ? _handler(client.getOptions().stackParser, self2._key, self2._limit, event, hint) : event;
      });
    }
  };
  LinkedErrors.__initStatic();
  function _handler(parser, key, limit, event, hint) {
    if (!event.exception || !event.exception.values || !hint || !isInstanceOf(hint.originalException, Error)) {
      return event;
    }
    const linkedErrors = _walkErrorTree(parser, limit, hint.originalException, key);
    event.exception.values = [...linkedErrors, ...event.exception.values];
    return event;
  }
  function _walkErrorTree(parser, limit, error, key, stack = []) {
    if (!isInstanceOf(error[key], Error) || stack.length + 1 >= limit) {
      return stack;
    }
    const exception = exceptionFromError(parser, error[key]);
    return _walkErrorTree(parser, limit, error[key], key, [exception, ...stack]);
  }

  // node_modules/@sentry/browser/esm/integrations/httpcontext.js
  var HttpContext = class {
    constructor() {
      HttpContext.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "HttpContext";
    }
    __init() {
      this.name = HttpContext.id;
    }
    setupOnce() {
      addGlobalEventProcessor((event) => {
        if (getCurrentHub().getIntegration(HttpContext)) {
          if (!WINDOW5.navigator && !WINDOW5.location && !WINDOW5.document) {
            return event;
          }
          const url = event.request && event.request.url || WINDOW5.location && WINDOW5.location.href;
          const { referrer } = WINDOW5.document || {};
          const { userAgent } = WINDOW5.navigator || {};
          const headers = {
            ...event.request && event.request.headers,
            ...referrer && { Referer: referrer },
            ...userAgent && { "User-Agent": userAgent }
          };
          const request = { ...event.request, ...url && { url }, headers };
          return { ...event, request };
        }
        return event;
      });
    }
  };
  HttpContext.__initStatic();

  // node_modules/@sentry/browser/esm/integrations/dedupe.js
  var Dedupe = class {
    constructor() {
      Dedupe.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "Dedupe";
    }
    __init() {
      this.name = Dedupe.id;
    }
    setupOnce(addGlobalEventProcessor2, getCurrentHub2) {
      const eventProcessor = (currentEvent) => {
        const self2 = getCurrentHub2().getIntegration(Dedupe);
        if (self2) {
          try {
            if (_shouldDropEvent2(currentEvent, self2._previousEvent)) {
              (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Event dropped due to being a duplicate of previously captured event.");
              return null;
            }
          } catch (_oO) {
            return self2._previousEvent = currentEvent;
          }
          return self2._previousEvent = currentEvent;
        }
        return currentEvent;
      };
      eventProcessor.id = this.name;
      addGlobalEventProcessor2(eventProcessor);
    }
  };
  Dedupe.__initStatic();
  function _shouldDropEvent2(currentEvent, previousEvent) {
    if (!previousEvent) {
      return false;
    }
    if (_isSameMessageEvent(currentEvent, previousEvent)) {
      return true;
    }
    if (_isSameExceptionEvent(currentEvent, previousEvent)) {
      return true;
    }
    return false;
  }
  function _isSameMessageEvent(currentEvent, previousEvent) {
    const currentMessage = currentEvent.message;
    const previousMessage = previousEvent.message;
    if (!currentMessage && !previousMessage) {
      return false;
    }
    if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
      return false;
    }
    if (currentMessage !== previousMessage) {
      return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
      return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
      return false;
    }
    return true;
  }
  function _isSameExceptionEvent(currentEvent, previousEvent) {
    const previousException = _getExceptionFromEvent(previousEvent);
    const currentException = _getExceptionFromEvent(currentEvent);
    if (!previousException || !currentException) {
      return false;
    }
    if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
      return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
      return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
      return false;
    }
    return true;
  }
  function _isSameStacktrace(currentEvent, previousEvent) {
    let currentFrames = _getFramesFromEvent(currentEvent);
    let previousFrames = _getFramesFromEvent(previousEvent);
    if (!currentFrames && !previousFrames) {
      return true;
    }
    if (currentFrames && !previousFrames || !currentFrames && previousFrames) {
      return false;
    }
    currentFrames = currentFrames;
    previousFrames = previousFrames;
    if (previousFrames.length !== currentFrames.length) {
      return false;
    }
    for (let i6 = 0; i6 < previousFrames.length; i6++) {
      const frameA = previousFrames[i6];
      const frameB = currentFrames[i6];
      if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
        return false;
      }
    }
    return true;
  }
  function _isSameFingerprint(currentEvent, previousEvent) {
    let currentFingerprint = currentEvent.fingerprint;
    let previousFingerprint = previousEvent.fingerprint;
    if (!currentFingerprint && !previousFingerprint) {
      return true;
    }
    if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) {
      return false;
    }
    currentFingerprint = currentFingerprint;
    previousFingerprint = previousFingerprint;
    try {
      return !!(currentFingerprint.join("") === previousFingerprint.join(""));
    } catch (_oO) {
      return false;
    }
  }
  function _getExceptionFromEvent(event) {
    return event.exception && event.exception.values && event.exception.values[0];
  }
  function _getFramesFromEvent(event) {
    const exception = event.exception;
    if (exception) {
      try {
        return exception.values[0].stacktrace.frames;
      } catch (_oO) {
        return void 0;
      }
    }
    return void 0;
  }

  // node_modules/@sentry/browser/esm/sdk.js
  var defaultIntegrations = [
    new integrations_exports.InboundFilters(),
    new integrations_exports.FunctionToString(),
    new TryCatch(),
    new Breadcrumbs(),
    new GlobalHandlers(),
    new LinkedErrors(),
    new Dedupe(),
    new HttpContext()
  ];
  function init(options = {}) {
    if (options.defaultIntegrations === void 0) {
      options.defaultIntegrations = defaultIntegrations;
    }
    if (options.release === void 0) {
      if (typeof __SENTRY_RELEASE__ === "string") {
        options.release = __SENTRY_RELEASE__;
      }
      if (WINDOW5.SENTRY_RELEASE && WINDOW5.SENTRY_RELEASE.id) {
        options.release = WINDOW5.SENTRY_RELEASE.id;
      }
    }
    if (options.autoSessionTracking === void 0) {
      options.autoSessionTracking = true;
    }
    if (options.sendClientReports === void 0) {
      options.sendClientReports = true;
    }
    const clientOptions = {
      ...options,
      stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
      integrations: getIntegrationsToSetup(options),
      transport: options.transport || (supportsFetch() ? makeFetchTransport : makeXHRTransport)
    };
    initAndBind(BrowserClient, clientOptions);
    if (options.autoSessionTracking) {
      startSessionTracking();
    }
  }
  function startSessionOnHub(hub) {
    hub.startSession({ ignoreDuration: true });
    hub.captureSession();
  }
  function startSessionTracking() {
    if (typeof WINDOW5.document === "undefined") {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
      return;
    }
    const hub = getCurrentHub();
    if (!hub.captureSession) {
      return;
    }
    startSessionOnHub(hub);
    addInstrumentationHandler("history", ({ from, to }) => {
      if (!(from === void 0 || from === to)) {
        startSessionOnHub(getCurrentHub());
      }
    });
  }

  // node_modules/@sentry/browser/esm/index.js
  var windowIntegrations = {};
  if (WINDOW5.Sentry && WINDOW5.Sentry.Integrations) {
    windowIntegrations = WINDOW5.Sentry.Integrations;
  }
  var INTEGRATIONS = {
    ...windowIntegrations,
    ...integrations_exports,
    ...integrations_exports2
  };

  // src/logger.ts
  var _Logger = class {
    constructor(tag) {
      this.tag = "";
      this.tag = tag;
    }
    debug(...messages) {
      this.internalLog(3 /* DEBUG */, ...messages);
    }
    log(...messages) {
      this.internalLog(2 /* INFO */, ...messages);
    }
    warn(...messages) {
      this.internalLog(1 /* WARNING */, ...messages);
    }
    error(...messages) {
      this.internalLog(0 /* ERROR */, ...messages);
    }
    internalLog(level, ...messages) {
      const d5 = new Date(Date.now());
      const output = [
        "%c%s %s",
        "color: blue",
        `[${d5.getHours()}:${d5.getMinutes()}:${d5.getSeconds()}]`,
        this.tag,
        ...messages
      ];
      if (!_Logger.debugMode) {
        switch (level) {
          case 1 /* WARNING */:
          case 2 /* INFO */:
            captureMessage(messages.join(" "));
            break;
          case 0 /* ERROR */:
            captureException(messages);
            break;
        }
        return;
      } else {
        switch (level) {
          case 3 /* DEBUG */:
            console.debug(...output);
            break;
          case 1 /* WARNING */:
            console.warn(...output);
            break;
          case 2 /* INFO */:
            console.log(...output);
            break;
          case 0 /* ERROR */:
            console.error(...output);
            break;
        }
      }
    }
  };
  var Logger = _Logger;
  Logger.debugMode = false;
  if (!Logger.debugMode) {
    init({
      dsn: "https://bf0a1e40a1784502aad701a201efdf08@o526305.ingest.sentry.io/4504743520436224",
      tracesSampleRate: 0.1,
      release: "better-previews@23.2.25",
      environment: "PROD"
    });
  }

  // src/content-script/winbox.min.css.txt
  var winbox_min_css_default = '@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-control *,.wb-icon{background-repeat:no-repeat}body>.wb-body{position:relative;display:inline-block;visibility:hidden;contain:none}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-icon{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-size:100%;background-position:center}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e{position:absolute;right:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-nw,.wb-sw,.wb-w{left:-5px}.wb-w{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-se,.wb-sw{bottom:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-control{float:right;height:100%;max-width:100%;text-align:center}.wb-control *{display:inline-block;width:30px;height:100%;max-width:100%;background-position:center;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.max{box-shadow:none}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}body.wb-lock .winbox{will-change:left,top,width,height;transition:none}.winbox.modal:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:"";position:absolute;top:-50vh;left:-50vw;right:-50vw;bottom:-50vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}';

  // src/content-script/template.js
  var template = document.createElement("div");
  template.innerHTML = '<div class=wb-header><div class=wb-control><span title="Minimize" class=wb-min></span><span title="Maximize" class=wb-max></span><span title="Fullscreen" class=wb-full></span><span title="Close" class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>';
  function template_default(tpl) {
    return (tpl || template).cloneNode(true);
  }

  // node_modules/winbox/src/js/helper.js
  function addListener(node, event, fn, opt) {
    node && node.addEventListener(event, fn, opt || false);
  }
  function removeListener(node, event, fn, opt) {
    node && node.removeEventListener(event, fn, opt || false);
  }
  function preventEvent(event, prevent) {
    event.stopPropagation();
    event.cancelable && event.preventDefault();
  }
  function getByClass(root, name) {
    return root.getElementsByClassName(name)[0];
  }
  function addClass(node, classname) {
    node.classList.add(classname);
  }
  function hasClass(node, classname) {
    return node.classList.contains(classname);
  }
  function removeClass(node, classname) {
    node.classList.remove(classname);
  }
  function setStyle(node, style, value) {
    value = "" + value;
    if (node["_s_" + style] !== value) {
      node.style.setProperty(style, value);
      node["_s_" + style] = value;
    }
  }
  function setText(node, value) {
    const textnode = node.firstChild;
    textnode ? textnode.nodeValue = value : node.textContent = value;
  }

  // src/content-script/winbox.js
  var BFWindow = class extends HTMLElement {
    constructor() {
      super();
    }
  };
  var use_raf = false;
  var stack_min = [];
  var eventOptions = { "capture": true, "passive": true };
  var body;
  var id_counter = 0;
  var index_counter = 10;
  var is_fullscreen;
  var last_focus;
  var prefix_request;
  var prefix_exit;
  var root_w;
  var root_h;
  function WinBox(params, _title) {
    if (!(this instanceof WinBox)) {
      return new WinBox(params);
    }
    body || setup();
    let id, index, root, tpl, title, icon, mount, html, url, width, height, minwidth, minheight, maxwidth, maxheight, autosize, x4, y4, top, left, bottom, right, min, max, hidden, modal, background, border, header, classname, oncreate, onclose, onfocus, onblur, onmove, onresize, onfullscreen, onmaximize, onminimize, onrestore, onhide, onshow, onload;
    if (params) {
      if (_title) {
        title = params;
        params = _title;
      }
      if (typeof params === "string") {
        title = params;
      } else {
        id = params["id"];
        index = params["index"];
        root = params["root"];
        tpl = params["template"];
        title = title || params["title"];
        icon = params["icon"];
        mount = params["mount"];
        html = params["html"];
        url = params["url"];
        width = params["width"];
        height = params["height"];
        minwidth = params["minwidth"];
        minheight = params["minheight"];
        maxwidth = params["maxwidth"];
        maxheight = params["maxheight"];
        autosize = params["autosize"];
        min = params["min"];
        max = params["max"];
        hidden = params["hidden"];
        modal = params["modal"];
        x4 = params["x"] || (modal ? "center" : 0);
        y4 = params["y"] || (modal ? "center" : 0);
        top = params["top"];
        left = params["left"];
        bottom = params["bottom"];
        right = params["right"];
        background = params["background"];
        border = params["border"];
        header = params["header"];
        classname = params["class"];
        onclose = params["onclose"];
        onfocus = params["onfocus"];
        onblur = params["onblur"];
        onmove = params["onmove"];
        onresize = params["onresize"];
        onfullscreen = params["onfullscreen"];
        onmaximize = params["onmaximize"];
        onminimize = params["onminimize"];
        onrestore = params["onrestore"];
        onhide = params["onhide"];
        onshow = params["onshow"];
        onload = params["onload"];
      }
    }
    this.dom = template_default(tpl);
    this.dom.id = this.id = id || "winbox-" + ++id_counter;
    this.dom.className = "winbox" + (classname ? " " + (typeof classname === "string" ? classname : classname.join(" ")) : "") + (modal ? " modal" : "");
    this.dom["winbox"] = this;
    this.window = this.dom;
    this.body = getByClass(this.dom, "wb-body");
    this.header = header || 35;
    if (background) {
      this.setBackground(background);
    }
    if (border) {
      setStyle(this.body, "margin", border + (isNaN(border) ? "" : "px"));
    } else {
      border = 0;
    }
    if (header) {
      const node = getByClass(this.dom, "wb-header");
      setStyle(node, "height", header + "px");
      setStyle(node, "line-height", header + "px");
      setStyle(this.body, "top", header + "px");
    }
    if (title) {
      this.setTitle(title);
    }
    if (icon) {
      this.setIcon(icon);
    }
    if (mount) {
      this.mount(mount);
    } else if (html) {
      this.body.innerHTML = html;
    } else if (url) {
      this.setUrl(url, onload);
    }
    top = top ? parse(top, root_h) : 0;
    bottom = bottom ? parse(bottom, root_h) : 0;
    left = left ? parse(left, root_w) : 0;
    right = right ? parse(right, root_w) : 0;
    const viewport_w = root_w - left - right;
    const viewport_h = root_h - top - bottom;
    maxwidth = maxwidth ? parse(maxwidth, viewport_w) : viewport_w;
    maxheight = maxheight ? parse(maxheight, viewport_h) : viewport_h;
    minwidth = minwidth ? parse(minwidth, maxwidth) : 150;
    minheight = minheight ? parse(minheight, maxheight) : this.header;
    if (autosize) {
      (root || body).appendChild(this.body);
      width = Math.max(Math.min(this.body.clientWidth + border * 2 + 1, maxwidth), minwidth);
      height = Math.max(Math.min(this.body.clientHeight + this.header + border + 1, maxheight), minheight);
      this.dom.appendChild(this.body);
    } else {
      width = width ? parse(width, maxwidth) : Math.max(maxwidth / 2, minwidth) | 0;
      height = height ? parse(height, maxheight) : Math.max(maxheight / 2, minheight) | 0;
    }
    x4 = x4 ? parse(x4, viewport_w, width) : left;
    y4 = y4 ? parse(y4, viewport_h, height) : top;
    this.x = x4;
    this.y = y4;
    this.width = width;
    this.height = height;
    this.minwidth = minwidth;
    this.minheight = minheight;
    this.maxwidth = maxwidth;
    this.maxheight = maxheight;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.index = index;
    this.min = false;
    this.max = false;
    this.full = false;
    this.hidden = false;
    this.focused = false;
    this.onclose = onclose;
    this.onfocus = onfocus;
    this.onblur = onblur;
    this.onmove = onmove;
    this.onresize = onresize;
    this.onfullscreen = onfullscreen;
    this.onmaximize = onmaximize;
    this.onminimize = onminimize;
    this.onrestore = onrestore;
    this.onhide = onhide;
    this.onshow = onshow;
    if (max) {
      this.maximize();
    } else if (min) {
      this.minimize();
    } else {
      this.resize().move();
    }
    if (hidden) {
      this.hide();
    } else {
      this.focus();
      if (index || index === 0) {
        this.index = index;
        setStyle(this.dom, "z-index", index);
        if (index > index_counter)
          index_counter = index;
      }
    }
    register(this);
    try {
      customElements.define("better-preview-window", BFWindow);
    } catch (e8) {
      console.warn("Error re-defining custom element");
    }
    const bfw = document.createElement("better-preview-window");
    const style = document.createElement("style");
    style.textContent = winbox_min_css_default;
    bfw.appendChild(style);
    bfw.appendChild(this.dom);
    bfw.attachShadow({ mode: "open" }).innerHTML = "<slot></slot>";
    (root || body).appendChild(bfw);
    (oncreate = params["oncreate"]) && oncreate.call(this, params);
  }
  WinBox["new"] = function(params) {
    return new WinBox(params);
  };
  var winbox_default = WinBox;
  function parse(num, base, center) {
    if (typeof num === "string") {
      if (num === "center") {
        num = (base - center) / 2 | 0;
      } else if (num === "right" || num === "bottom") {
        num = base - center;
      } else {
        const value = parseFloat(num);
        const unit = "" + value !== num && num.substring(("" + value).length);
        if (unit === "%") {
          num = base / 100 * value | 0;
        } else {
          num = value;
        }
      }
    }
    return num;
  }
  function setup() {
    body = document.body;
    body[prefix_request = "requestFullscreen"] || body[prefix_request = "msRequestFullscreen"] || body[prefix_request = "webkitRequestFullscreen"] || body[prefix_request = "mozRequestFullscreen"] || (prefix_request = "");
    prefix_exit = prefix_request && prefix_request.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit");
    addListener(window, "resize", function() {
      init2();
      update_min_stack();
    });
    init2();
  }
  function register(self2) {
    addWindowListener(self2, "drag");
    addWindowListener(self2, "n");
    addWindowListener(self2, "s");
    addWindowListener(self2, "w");
    addWindowListener(self2, "e");
    addWindowListener(self2, "nw");
    addWindowListener(self2, "ne");
    addWindowListener(self2, "se");
    addWindowListener(self2, "sw");
    addListener(getByClass(self2.dom, "wb-min"), "click", function(event) {
      preventEvent(event);
      self2.min ? self2.focus().restore() : self2.blur().minimize();
    });
    addListener(getByClass(self2.dom, "wb-max"), "click", function(event) {
      self2.max ? self2.restore() : self2.maximize();
    });
    if (prefix_request) {
      addListener(getByClass(self2.dom, "wb-full"), "click", function(event) {
        self2.fullscreen();
      });
    } else {
      self2.addClass("no-full");
    }
    addListener(getByClass(self2.dom, "wb-close"), "click", function(event) {
      preventEvent(event);
      self2.close() || (self2 = null);
    });
    addListener(self2.dom, "click", function(event) {
      self2.focus();
    });
  }
  function remove_min_stack(self2) {
    stack_min.splice(stack_min.indexOf(self2), 1);
    update_min_stack();
    self2.removeClass("min");
    self2.min = false;
    self2.dom.title = "";
  }
  function update_min_stack() {
    const length = stack_min.length;
    const splitscreen_index = {};
    const splitscreen_length = {};
    for (let i6 = 0, self2, key; i6 < length; i6++) {
      self2 = stack_min[i6];
      key = (self2.left || self2.right) + ":" + (self2.top || self2.bottom);
      if (splitscreen_length[key]) {
        splitscreen_length[key]++;
      } else {
        splitscreen_index[key] = 0;
        splitscreen_length[key] = 1;
      }
    }
    for (let i6 = 0, self2, key, width; i6 < length; i6++) {
      self2 = stack_min[i6];
      key = (self2.left || self2.right) + ":" + (self2.top || self2.bottom);
      width = Math.min((root_w - self2.left - self2.right) / splitscreen_length[key], 250);
      self2.resize(width + 1 | 0, self2.header, true).move(self2.left + splitscreen_index[key] * width | 0, root_h - self2.bottom - self2.header, true);
      splitscreen_index[key]++;
    }
  }
  function addWindowListener(self2, dir) {
    const node = getByClass(self2.dom, "wb-" + dir);
    if (!node)
      return;
    let touch, x4, y4;
    let raf_timer, raf_move, raf_resize;
    let dblclick_timer = 0;
    addListener(node, "mousedown", mousedown);
    addListener(node, "touchstart", mousedown, eventOptions);
    function loop() {
      raf_timer = requestAnimationFrame(loop);
      if (raf_resize) {
        self2.resize();
        raf_resize = false;
      }
      if (raf_move) {
        self2.move();
        raf_move = false;
      }
    }
    function mousedown(event) {
      preventEvent(event);
      self2.focus();
      if (dir === "drag") {
        if (self2.min) {
          self2.restore();
          return;
        }
        const now = Date.now();
        const diff = now - dblclick_timer;
        dblclick_timer = now;
        if (diff < 300) {
          self2.max ? self2.restore() : self2.maximize();
          return;
        }
      }
      if (!self2.max && !self2.min) {
        addClass(body, "wb-lock");
        use_raf && loop();
        if ((touch = event.touches) && (touch = touch[0])) {
          event = touch;
          addListener(window, "touchmove", handler_mousemove, eventOptions);
          addListener(window, "touchend", handler_mouseup, eventOptions);
        } else {
          addListener(window, "mousemove", handler_mousemove);
          addListener(window, "mouseup", handler_mouseup);
        }
        x4 = event.pageX;
        y4 = event.pageY;
      }
    }
    function handler_mousemove(event) {
      preventEvent(event);
      if (touch) {
        event = event.touches[0];
      }
      const pageX = event.pageX;
      const pageY = event.pageY;
      const offsetX = pageX - x4;
      const offsetY = pageY - y4;
      const old_w = self2.width;
      const old_h = self2.height;
      const old_x = self2.x;
      const old_y = self2.y;
      let resize_w, resize_h, move_x, move_y;
      if (dir === "drag") {
        self2.x += offsetX;
        self2.y += offsetY;
        move_x = move_y = 1;
      } else {
        if (dir === "e" || dir === "se" || dir === "ne") {
          self2.width += offsetX;
          resize_w = 1;
        } else if (dir === "w" || dir === "sw" || dir === "nw") {
          self2.x += offsetX;
          self2.width -= offsetX;
          resize_w = 1;
          move_x = 1;
        }
        if (dir === "s" || dir === "se" || dir === "sw") {
          self2.height += offsetY;
          resize_h = 1;
        } else if (dir === "n" || dir === "ne" || dir === "nw") {
          self2.y += offsetY;
          self2.height -= offsetY;
          resize_h = 1;
          move_y = 1;
        }
      }
      if (resize_w) {
        self2.width = Math.max(Math.min(self2.width, self2.maxwidth, root_w - self2.x - self2.right), self2.minwidth);
        resize_w = self2.width !== old_w;
      }
      if (resize_h) {
        self2.height = Math.max(Math.min(self2.height, self2.maxheight, root_h - self2.y - self2.bottom), self2.minheight);
        resize_h = self2.height !== old_h;
      }
      if (resize_w || resize_h) {
        use_raf ? raf_resize = true : self2.resize();
      }
      if (move_x) {
        self2.x = Math.max(Math.min(self2.x, root_w - self2.width - self2.right), self2.left);
        move_x = self2.x !== old_x;
      }
      if (move_y) {
        self2.y = Math.max(Math.min(self2.y, root_h - self2.height - self2.bottom), self2.top);
        move_y = self2.y !== old_y;
      }
      if (move_x || move_y) {
        use_raf ? raf_move = true : self2.move();
      }
      if (resize_w || move_x) {
        x4 = pageX;
      }
      if (resize_h || move_y) {
        y4 = pageY;
      }
    }
    function handler_mouseup(event) {
      preventEvent(event);
      removeClass(body, "wb-lock");
      use_raf && cancelAnimationFrame(raf_timer);
      if (touch) {
        removeListener(window, "touchmove", handler_mousemove, eventOptions);
        removeListener(window, "touchend", handler_mouseup, eventOptions);
      } else {
        removeListener(window, "mousemove", handler_mousemove);
        removeListener(window, "mouseup", handler_mouseup);
      }
    }
  }
  function init2() {
    const doc = document.documentElement;
    root_w = doc.clientWidth;
    root_h = doc.clientHeight;
  }
  WinBox.prototype.mount = function(src) {
    this.unmount();
    src._backstore || (src._backstore = src.parentNode);
    this.body.textContent = "";
    this.body.appendChild(src);
    return this;
  };
  WinBox.prototype.unmount = function(dest) {
    const node = this.body.firstChild;
    if (node) {
      const root = dest || node._backstore;
      root && root.appendChild(node);
      node._backstore = dest;
    }
    return this;
  };
  WinBox.prototype.setTitle = function(title) {
    const node = getByClass(this.dom, "wb-title");
    setText(node, this.title = title);
    return this;
  };
  WinBox.prototype.setIcon = function(src) {
    const img = getByClass(this.dom, "wb-icon");
    setStyle(img, "background-image", "url(" + src + ")");
    setStyle(img, "display", "inline-block");
    return this;
  };
  WinBox.prototype.setBackground = function(background) {
    setStyle(this.dom, "background", background);
    return this;
  };
  WinBox.prototype.setUrl = function(url, onload) {
    const node = this.body.firstChild;
    if (node && node.tagName.toLowerCase() === "iframe") {
      node.src = url;
    } else {
      this.body.innerHTML = '<iframe src="' + url + '"></iframe>';
      onload && (this.body.firstChild.onload = onload);
    }
    return this;
  };
  WinBox.prototype.focus = function(state) {
    if (state === false) {
      return this.blur();
    }
    if (last_focus !== this && this.dom) {
      last_focus && last_focus.blur();
      setStyle(this.dom, "z-index", ++index_counter);
      this.index = index_counter;
      this.addClass("focus");
      last_focus = this;
      this.focused = true;
      this.onfocus && this.onfocus();
    }
    return this;
  };
  WinBox.prototype.blur = function(state) {
    if (state === false) {
      return this.focus();
    }
    if (last_focus === this) {
      this.removeClass("focus");
      this.focused = false;
      this.onblur && this.onblur();
      last_focus = null;
    }
    return this;
  };
  WinBox.prototype.hide = function(state) {
    if (state === false) {
      return this.show();
    }
    if (!this.hidden) {
      this.onhide && this.onhide();
      this.hidden = true;
      return this.addClass("hide");
    }
  };
  WinBox.prototype.show = function(state) {
    if (state === false) {
      return this.hide();
    }
    if (this.hidden) {
      this.onshow && this.onshow();
      this.hidden = false;
      return this.removeClass("hide");
    }
  };
  WinBox.prototype.minimize = function(state) {
    if (state === false) {
      return this.restore();
    }
    if (is_fullscreen) {
      cancel_fullscreen();
    }
    if (this.max) {
      this.removeClass("max");
      this.max = false;
    }
    if (!this.min) {
      stack_min.push(this);
      update_min_stack();
      this.dom.title = this.title;
      this.addClass("min");
      this.min = true;
      this.onminimize && this.onminimize();
    }
    return this;
  };
  WinBox.prototype.restore = function() {
    if (is_fullscreen) {
      cancel_fullscreen();
    }
    if (this.min) {
      remove_min_stack(this);
      this.resize().move();
      this.onrestore && this.onrestore();
    }
    if (this.max) {
      this.max = false;
      this.removeClass("max").resize().move();
      this.onrestore && this.onrestore();
    }
    return this;
  };
  WinBox.prototype.maximize = function(state) {
    if (state === false) {
      return this.restore();
    }
    if (is_fullscreen) {
      cancel_fullscreen();
    }
    if (this.min) {
      remove_min_stack(this);
    }
    if (!this.max) {
      this.addClass("max").resize(
        root_w - this.left - this.right,
        root_h - this.top - this.bottom,
        true
      ).move(
        this.left,
        this.top,
        true
      );
      this.max = true;
      this.onmaximize && this.onmaximize();
    }
    return this;
  };
  WinBox.prototype.fullscreen = function(state) {
    if (this.min) {
      remove_min_stack(this);
      this.resize().move();
    }
    if (!is_fullscreen || !cancel_fullscreen()) {
      this.body[prefix_request]();
      is_fullscreen = this;
      this.full = true;
      this.onfullscreen && this.onfullscreen();
    } else if (state === false) {
      return this.restore();
    }
    return this;
  };
  function has_fullscreen() {
    return document["fullscreen"] || document["fullscreenElement"] || document["webkitFullscreenElement"] || document["mozFullScreenElement"];
  }
  function cancel_fullscreen() {
    is_fullscreen.full = false;
    if (has_fullscreen()) {
      document[prefix_exit]();
      return true;
    }
  }
  WinBox.prototype.close = function(force) {
    if (this.onclose && this.onclose(force)) {
      return true;
    }
    if (this.min) {
      remove_min_stack(this);
    }
    this.unmount();
    this.dom.remove();
    this.dom.textContent = "";
    this.dom["winbox"] = null;
    this.body = null;
    this.dom = null;
    if (last_focus === this) {
      last_focus = null;
    }
  };
  WinBox.prototype.move = function(x4, y4, _skip_update) {
    if (!x4 && x4 !== 0) {
      x4 = this.x;
      y4 = this.y;
    } else if (!_skip_update) {
      this.x = x4 ? x4 = parse(x4, root_w - this.left - this.right, this.width) : 0;
      this.y = y4 ? y4 = parse(y4, root_h - this.top - this.bottom, this.height) : 0;
    }
    setStyle(this.dom, "left", x4 + "px");
    setStyle(this.dom, "top", y4 + "px");
    this.onmove && this.onmove(x4, y4);
    return this;
  };
  WinBox.prototype.resize = function(w4, h5, _skip_update) {
    if (!w4 && w4 !== 0) {
      w4 = this.width;
      h5 = this.height;
    } else if (!_skip_update) {
      this.width = w4 ? w4 = parse(w4, this.maxwidth) : 0;
      this.height = h5 ? h5 = parse(h5, this.maxheight) : 0;
      w4 = Math.max(w4, this.minwidth);
      h5 = Math.max(h5, this.minheight);
    }
    setStyle(this.dom, "width", w4 + "px");
    setStyle(this.dom, "height", h5 + "px");
    this.onresize && this.onresize(w4, h5);
    return this;
  };
  WinBox.prototype.addControl = function(control) {
    const classname = control["class"];
    const image = control.image;
    const click = control.click;
    const index = control.index;
    const title = control.title;
    const node = document.createElement("span");
    const icons = getByClass(this.dom, "wb-control");
    const self2 = this;
    if (classname)
      node.className = classname;
    if (image)
      setStyle(node, "background-image", "url(" + image + ")");
    if (click)
      node.onclick = function(event) {
        click.call(this, event, self2);
      };
    if (title)
      node.title = title;
    icons.insertBefore(node, icons.childNodes[index || 0]);
    return this;
  };
  WinBox.prototype.removeControl = function(control) {
    control = getByClass(this.dom, control);
    control && control.remove();
    return this;
  };
  WinBox.prototype.addClass = function(classname) {
    addClass(this.dom, classname);
    return this;
  };
  WinBox.prototype.removeClass = function(classname) {
    removeClass(this.dom, classname);
    return this;
  };
  WinBox.prototype.hasClass = function(classname) {
    return hasClass(this.dom, classname);
  };
  WinBox.prototype.toggleClass = function(classname) {
    return this.hasClass(classname) ? this.removeClass(classname) : this.addClass(classname);
  };

  // src/content-script/previewr.ts
  var import_sanitize_url = __toESM(require_dist());
  var import_readability = __toESM(require_readability());

  // src/assets/images/reply-arrow.png
  var reply_arrow_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAASv0lEQVR4nO3da8xlZXkG4HuGQaAWOVigkFoBjTSW2lI51BqgCGL9wQ+DIpaikCYNaaGJ1UbTYiumoOkRSpoC1kRBkWIRKtqgYiKeEJr+QeRUhNp2hKIgw0A5D82Oe1KcDsPe3177W+9az3Ulzz8S5nvf513Pvdc+rAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAWeyY5JslpSc5M8qEkf5jknUnekeSgJNtbSgAYvsOSnJvktiTPzFCPJbk+ybuS7NP3Px4AmN12SU5KctOMQ/+56qkk/5zkUIsPAG07Ism3Fxz8W9amJP+QZP++/zgA4MftkOT86bB+Zkn1UJK3WXgAaMNeSW5Y4uDfsi7wYUEA6NdLk9yxisN/c30qyTqbDwCr72eTfKeH4S8EAEDR4b+5ztYBAFBr+E/q6emPCwEAS7RvkrsbGPzPrvVJdrXrADD+V/5b1lk2HQBqDf9JbZw+awAAGPFt/63Vn9pxAKjxyv/ZdVeSNTYeAOoM/811iE0HgPHf9t+yzrHpAFDnlf/m+rxNB4Baw39S37PpAFDjtv+WtbuNB4Aar/yfXfvZdACoNfwndYBNB4Aat/2fXQfadACo88p/c+1j0wGg1vB/LMlamw4AdYb/pG634QBQa/hP6hM2HQBqDf9Jvd2mA0Ct4b8pyd42HQDG+1W/rdUXbDgA1Hnlv7neYNMBoM4r/0ndnGSNTQegukqv/L36B4CCw/9jdh2A6ird9p/U+iQv7nvRAaBP1V75P5TkIC0HQGXVhv8TPvUPQHXVbvs/leTEvhcdAPpU7ZX/ZPj/ppYDoDLDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCKMfwBoBjDHwCK2TfJ3UmeUdZAD4ymBx5O8sC0vjOtW5J8NclVST6S5ENJ3p3k1CS/nuSAJDv0fUECVofh3/+FWlmDlnpgU5L1Sb6W5JIkZyV5c5JXJNnOhRnGwfDv/2KrrMGQeuCRJDcm+XCSM5IcmmRd3xcyYD7V3vNX1kAPLC8UfG36dsJxSXZ3MYZ2eeVvGBqGemBZPfB0khuSvD/JYUnW9n3BA37E8HfhN/z1wGr2wPeTfDzJSUl2cyGGfuyT5C4XPwNQD+iBnnrg8SRXJzk5yYsMAlgduya5yYXfhV8P6IFGeuDRJFcmOTHJTgYBLM+nGzjwyhroAT2wtR54MMmFSQ4yBKBbp7noGDx6QA8MpAe+meS3krzQIIDF7Jnkhw0camUN9IAemKcHNiT5iyQvMQRgZS5w0TF49IAeGHAPPDH9FoG3B2AOeyd5rIEDrKyBHtADXfTAtUmONQXg+U1+iMOF1xroAT0wth6YPNDo1wwBeG53NHBQlTXQA3pgWT0w+QniIw0B+HGvctExePSAHijSA59NcqAhAD9yRgOHUlkDPaAHVvMZBBcn2cMQoLrJp2ZdfK2BHtAD1Xrg/iSne0wxld3QwEFU1kAP6IG+euDmJEf1fSGGPtzrwmP46AE9ULwHNiX5e08hpJpHGjh8yhroAT3QQg9MXhC9ve+LMqyWJxs4dMoa6AE90FIPXDl9LDqM2oYGDpuyBnpAD7T45MHf6PsCDcv07w0cNGUN9IAeaLUHPpLkJ40hxuhLDRwwZQ30gB5ouQfuTvLavi/W0LXzGzhcyhroAT0whKcNvifJGmOIsXhrAwdLWQM9oAeG0gNXJ9m17ws3dGGvJE81cKiUNdADemAoPXBbklcaQYzBtQ0cKGUN9IAeGFIPbExyQt8Xb1jUyQ0cJmUN9IAeGOIvCJ7tcwEM2fZJvtvAYVLWQA/ogSH2wKeS7NT3hRxW6rQGDpGyBnpADwy1B76S5MVGEEO0Nsm/NHCIlDXQA3pgqD1wZ5ID+r6Yw0oclOSxBg6RsgZ6QA8MtQfuS/JqI4gh+r0GDpCyBnpADwz9OQJ+OZBBOreBA6SsgR7QA0Pugcmj1o/t+2IOK/k8wKUNHCBlDfSAHhhyDzya5DgjiKHZLsknGzhAyhroAT0w9GcIvKXvCzqsJARc0sABUtZAD+iBoYcAdwIYHCGg/4uHsgZ6YPg98HiSN/Z9QYd5CQH9XzyUNdAD4/hg4BFGEEMjBPR/8VDWQA8Mvwc2JDm47ws6zKviBwOfTHJFksuVNRhpD3wuyRendWOSO5Lc38DZG/uPBb3MCGJoKoaAS6d/N1Qy6fk9pr8Q+qYk70xyXpJrkvxXA+dy6HWbZwcwREIAsHuSo6bBYPI0vPUNDNUhPkBoB63E0AgBwJb2TXJyko9Pb3P3PWCHcodxjVZiaIQAYFu/KHpIkj9J8q0GBm3LdbY2YoiEAGAWr5yGgVsbGLit1aYkb9ZGDFHFrwhOPj29ru+Fh4GaPC73wiQbGzjLrdRkLX6+742BlXAnAJjXLklOT/JvDQzgFmpyd2RnbcQQuRMArPTzAsdNf4vgmeJ1lQ8FMlTuBACLODzJlxsYxH3WH2ghhkoIABb1uiRfb2AY9/X0QD8XzGB5OwDowuStgTsbGMqrXZPPRfg8AIPlTgDQhR2TvDfJQw0M5tWsD2sfhsydAKAreyf5xwYG82rWCdqHIXMnAOjSW5Lc08BwXo36wTT4wGAJAUCXdktyWQMDejVqctcDBs3bAcAy7gY80MCQXnZNHskMg+ZOANC1/ZLc0MCQXmZNHre8q9Zh6NwJALq2Q5LzGhjUy6zJ8xNg8NwJAJbh1CSPNjCsl/XUwCO1DWMgBADLcFiS/25gYC+jbppeO2HwvB0ALOtzAbc0MLCXUb+jZRgLdwKAZX1VcIwPFvr+9G+DUXAnAFjWhwOvbGBod12TDzzCaAgBwDK8IMnlDQztLuvJJAdqF8bE2wHAsq4tlzQwuLusz2gVxmaMB/X5avLqZF3fCw8Fri1j+/ngyTceYFSEAGAZtk9ydQODu6u6RpswRhXfDpj8vb7jC8u1U5LrGjjvXdXhGoYxcicAWIZdknyrgeHdRX1VizBW7gQAy7D/iH4x8GgtwlgJAcAyHDaSZwd8QXswZt4OAJbh5AYGeBd1kPZgzIQAYBkuamCAL1oXaw3GztsBwDJ+MvjGBob4IvVEkp/RGoydOwHAMj4UuKGBQb5I/Zm2oAJ3AoCundLAEF+kHkzyQm1BBe4EAF0b+g+QnaolqMKdAKBLuye5t4FBvtL6hnagEncCgC69tYFBvkj9onagEiEA6NI/NTDIV1rnagWq8XYA0JWXJNnYwDBfSd0/fegRlCIEAF35owaG+UrrBG1ARd4OALqwY5K7GxjmK6krtABVCQFAF05oYJivpCYPOXqRFqAqbwcAi1qT5PoGBvpK6iTbT2XuBACLen0Dw3wl9RlbT3VCALCoLzcw0Oetx6c/bASleTsAWMSRDQz0ldTbbDvUDAGXJllr86ET32jgTM9bF9t7qPt2wN/ZfOjE8Q2c53nrPi8CoPadgDM1AHRy7bizgfM8bx1i76FuCHg6yeEaABZ2RgPned56n32H2m8H3JVkZ00AC9klySMNnOd5yiOCYSuq3Qk4RxfAwj7WwFmep54S/mHrKt0JeDjJnhoBFnJEA2d53jrWnsPWVboT8EFNAAv/PPDtDZzleeosew7PrcqdgPXTvxVYuQ80cJbnqWttNmxblRDwOo0ACzmwgXM879t/6+w5bFuFtwPO0wSwsFsaOMvz1MH2HJ7f2EPA5PGmwGLOauAsz1On23CYzZhDwKNJXqARYCG/0sBZnqcust8wuzF/JmBfjQALXx9+0MBZnrXc+YM5jTUEeD8QFvfJgX0QcK1Nh/lDwJAO+iz1Bk0ACzulgbM8T73cnsP8xnYn4ChNAAt7WQNneZ56kz2HlRnTnQBvAUA37mngPM9a77PpsHJjCQH7awLoxBUNnOdZ66P2HGqHAB8Ggu78fgNneta6zsZD7c8EfF0DQGde18CZnrX+w75D7TsBf60BoDN7NHCmZ62n/QgY1L4T8KsaAMp+EPDl9h5q3gn4Tz8GAp37fANne9Y61v5DzRDwxzYeOnd+A2d71nqH/Yd6bwdsSLKbjYfOvbuB8z1rvcv+Q707Ae+36bAUxzdwvmetc/QA1LoTcGuSHW06LMXBDZzxWesiPQB17gQ8meRQGw5Ls1cD53zWukIfQJ07AWfYbFiqdUk2NXDWZ6nr9AKsXgi4tMfD/uc2GlbFDxsY7rPUTfoBVs/aJH/b0/Cf/L+B5buzgeE+S92hGWD1nTn9Kc7VeM//d20wrKobGxjus9R39QX04zXTBL6sw/1tH/iDXnylgeE+S92jP6A/O0+/i7uxw0P94PR7/r7qB/34YgPDfZZ6QINAG08R+2CS9Qv+tv/k53137fuPgeI+28Bwn6Ue6XuhgP+zdvpM8fOSXJ/ksW0c3oen/81fJXmtD/lBMz7dwHCfpZ7qe6GA57Z9kpcmOSTJMUmOTvLqJPsb+NCsyxsY7rMWANARAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChIAAKAgAQAAChpKANjU90IBwJh8tIHhPktt7HuhAGBMzm9guM9S3+t7oQBgTD7QwHCfpW7ue6EAYExOaGC4z1KX9b1QADAmr2hguM9S7+17oQBgTNYmua+BAf98dWTfCwUAY3NhAwN+W3VfknV9LxIAjM3rGxjy26oL+l4gABij7ZLc1sCgf6765b4XCADG6pQGBv3W6uq+FwYAxmz7JLc3MPCfXU8nObjvhQGAsXvNdOg+00j9Zd8LAgBV/E0Dg39SdyT5ib4XAwAqvRXwpZ6H/4Ykv9D3QgBANbv3+K2AJ5Ic3fcCAEBVP53kX1d5+D+c5I19/+EAUN3OSa5ZpeG/3vf9AaAda5L89vTV+bKG/+VJfqrvPxQA+P8OSHJVkk0dDv5bkhxvsQGgfb+U5LIk/7PCoT8JEN9McuL0SYQAwMA+H3BSkk8kufV5fkDo3iSfS/KeJPv1/Q8HALoNBD83/TXBY5IcmeRV028TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQZv0vvQZwWP4YLmMAAAAASUVORK5CYII=";

  // src/content-script/previewr.ts
  var iframeName = "betterpreviews.com/mainframe";
  winbox_default.prototype.setUrl = function(url, onload) {
    const node = this.body.firstChild;
    if (node && node.tagName.toLowerCase() === "iframe") {
      node.src = url;
    } else {
      this.body.innerHTML = '<iframe name="' + iframeName + '" src="' + url + '"></iframe>';
      onload && (this.body.firstChild.onload = onload);
    }
    return this;
  };
  winbox_default.prototype.getDom = function() {
    return this.dom;
  };
  var template2 = document.createElement("div");
  template2.innerHTML = `
<div class=wb-header>
<div class=wb-control>
    <span class=wb-min></span>
    <span class=wb-max></span>
    <span class=wb-full></span>
    <span class=wb-close></span>
</div>
<div class=wb-drag>
    <div class=wb-icon></div>
    <div class=wb-title></div>
</div>
</div>

<div class=wb-body></div>

<div class=wb-n></div>
<div class=wb-s></div>
<div class=wb-w></div>
<div class=wb-e></div>
<div class=wb-nw></div>
<div class=wb-ne></div>
<div class=wb-se></div>
<div class=wb-sw></div>
`;
  var Previewr = class {
    constructor() {
      this.logger = new Logger("previewr");
      this.headerIconUrlBase = "https://www.google.com/s2/favicons?domain=";
      this.isVisible = false;
      this.navStack = [];
      this.displayReaderMode = false;
      this.isDemo = false;
    }
    init() {
      if (this.inIframe()) {
        this.logger.log(
          "Not inserting previewr in iframe: ",
          window.location.href
        );
        return;
      }
      this.listenForCspError();
      this.listenForWindowMessages();
    }
    listenForCspError() {
      document.addEventListener("securitypolicyviolation", (e8) => {
        if (window.name !== iframeName) {
          return;
        }
        this.logger.error("CSP error", e8, e8.blockedURI);
      });
    }
    listenForWindowMessages() {
      window.addEventListener(
        "message",
        (event) => {
          if (event.origin !== window.location.origin) {
            this.logger.debug(
              "Ignoring message from different origin",
              event.origin,
              event.data
            );
            return;
          }
          if (event.data.application !== "better-previews") {
            this.logger.debug(
              "Ignoring origin messsage not initiated by Better Previews"
            );
            return;
          }
          this.logger.log("#WindowMessage: ", event);
          this.handleMessage(event.data);
        },
        false
      );
    }
    async handleMessage(message) {
      let urlStr;
      if (message.mode === "demo") {
        this.isDemo = true;
      }
      if (message.action === "copy") {
        navigator.clipboard.writeText(message.data);
        return;
      } else if (message.action === "preview") {
        urlStr = message.data;
      } else if (message.action === "search") {
        urlStr = "https://google.com/search?igu=1&q=" + message.data;
      } else if (message.action === "load") {
        if (message.sourceFrame === iframeName && this.dialog) {
          this.dialog.setTitle(message.data.title);
          this.dialog.setIcon(
            this.headerIconUrlBase + new URL(message.href).hostname
          );
        }
      } else if (message.action === "navigate") {
        urlStr = message.href;
      } else {
        this.logger.warn("Unhandled action", message);
      }
      if (!urlStr || (0, import_sanitize_url.sanitizeUrl)(urlStr) === "about:blank") {
        return;
      }
      let newUrl;
      try {
        newUrl = new URL(urlStr);
      } catch (e8) {
        this.logger.error(e8);
        return;
      }
      if (this.url && this.url.href !== newUrl.href) {
        this.navStack.push(this.url);
      }
      return this.previewUrl(newUrl);
    }
    async previewUrl(url) {
      this.logger.log("#previewUrl fake: ", url);
      this.url = url;
      const winboxOptions = {
        icon: this.headerIconUrlBase + url.hostname,
        x: "right",
        y: this.isDemo ? "500px" : "50px",
        right: 10,
        width: this.isDemo ? "45%" : "55%",
        height: this.isDemo ? "40%" : "80%",
        class: ["no-max", "no-full"],
        index: await this.getMaxZIndex(),
        onclose: () => {
          this.navStack = [];
          this.url = void 0;
          this.dialog = void 0;
        }
      };
      if (this.displayReaderMode) {
        let reader = new import_readability.Readability(window.document.cloneNode(true));
        let article = reader.parse();
        if (!article) {
          console.error("Article is null");
          winboxOptions.html = `<h1>Failed to parse article</h1>`;
        }
        winboxOptions.html = `<h1>${article.title}</h1> <p>${article.byline}</p> ${article.content}`;
      } else {
        winboxOptions.url = this.url;
      }
      if (!this.dialog) {
        this.logger.debug("creating new dialog");
        this.dialog = new winbox_default(url.hostname, winboxOptions);
        this.dialog.addControl({
          index: 2,
          class: "nav-away",
          title: "Open in New Tab",
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nO3de5gldX3n8c+vTncPw2VmEIYh3VVnmnG4KCLmIUFjIgJRY1ajbLKbVVk0blaEGNHEJCYm2SfPJm4eJdmNj6jIhjyueAlZ3fWaqPGGt6hZQiJgHGiG7lM17QUvzADKzPSp7/7BjA7DXLr7V1W/qvq9X39JT0/3Z+bxzOdTv1PntFNHnX322VP33Xff6WVZnpkkyRlmdqakVNIJko6TdLyk9fv+eyJgVGDZnHP3mdn9ku6VdIdzbltZlrc65z6Z5/li6Hx4SJZlj5b0VEmPk3SWc26LmW3QQ//uHBc0HDqr6ce/q/oL1iVN05kkSS42s4sk/YykLZIGgWMBjdn3j8H7kiR5+2g0+mroPLFJ0/R859xlZvYLzrnNofMgLnU8/ts8ACY2b978c2VZPlvSxZLOCB0IaJEvm9nriqJ4n6QydJi+Ou+88ya/9a1vXSbpVZIeGzoPsE8lj//WDYCZmZlzkyR5kaTnSzo1dB6g5W53zv3eaDT6YOggPeOyLPsVSX8kaRg2CnBYXo//VgyANE3XSvpV59xLJD0+dB6ggz4wMTFx1d13370QOkjXpWl6jnPuLZJ+OnQWYJlW9fgPOgA2btx4/Nq1a3/VzH5H0nTILEAP7JJ0eZ7nN4YO0lXD4fCFZnatpLWhswArtOLHf5ABMBwOT5T0CjN7uaRHhcgA9JWZvaEoildJGofO0hVpmq51zr1N0i+HzgL4WMnjv+kB4IbD4WVlWV7tnDul4e8NxOT9Zvb8oih+EDpI283Ozm4Yj8cfkPSU0FmAiizr8d/YAEjT9PHOuTeL59WApnx8zZo1z56bm9sdOkhbDYfDE83sU5LODZ0FqNhRH/9J3Qmmp6ePzbLsvzvnbhblDzTpaXv27HmneL+MQ5qenj7WzD4oyh/9dNTHf63/MAyHw8c65z4m6TlqYGwAeITHrl+/ft2uXbs+GjpIy7gNGzbcKOkZoYMANTri47+2AbDvbtr3SZqp63sAWJYnrVu37rZdu3b9a+ggbZFl2askvSJ0DqABh338V34PwKZNm46bmpp6k6QXVf21AazavePx+NzFxcVR6CChZVn2E5K+IGkydBagIYd8/Fd6LD8zM3PS1NTUx0X5A22zYTAYvCF0iBZIJL1JlD/icsjHf2VPAczOzs5KukncUAO01VkbNmy4eefOnXeEDhJKmqYv2/eOo0BsHvH4r+QEYDgcnj0ejz8r6fQqvh6AepjZ6xTpDbnT09PHSvrD0DmAUA5+/Hv/Q7B58+Ynm9lnJaW+XwtA7R6bpukloUOEMDExcTlvQIbIPezx7zUA0jQ9pyzLD0s60TsWgEY4534ndIYABmb2qtAhgNAOfPyvegBMT09nzrkPS9pQSSoATXnicDg8O3SIJqVp+nRxSglIBzz+VzUApqenT06S5GOSskpjAWiEmV0aOkOTnHOXhc4AtMX+x/+KB8D09PSxg8Hgb51zZ1UfC0BDYroPYELSs0OHAFrkEmkVA2AwGLxJ0k9WHgdAkx6TpmkU79I5MzPzE5LWhc4BtMhj0jSdWdEAGA6HL5T0K/XkAdCwp4YO0ITBYHBh6AxACz112QMgTdPTJV1TYxgAzTondIAmmNnjQ2cAWuicZQ2A2dnZY5Ik+RszO6HuRACaEct9PGYWxZ8TWAnn3FnLGgDj8fhPzOwJdQcC0Kgo3rkzSZKtoTMALXT6UQfAvtcLXtVAGADNiuENvCY4uQQO6cSjDQBnZteIn5wF9I5zrvfFODs7e3zoDEAbOedOOOIAGA6Hl0m6sJk4AJpkZseGzlA3M1sbOgPQRmZ2/GEHwOzs7AYze32TgQA06oHQAeo2OTnZ+z8jsErusANgaWnpFZI2NRgGQLN2hQ5Qt7m5uQckWegcQBsdcgBs3LjxeOfcy5sOA6BR3wkdoAFjSfeGDgG00SEHwDHHHHOFpJMazgKgWXeEDtCQO0MHANroEQNg69atayT9RoAsAJq1LXSAJphZFH9OYKUeMQB27979nyRNB8gCoEFmdkvoDE1IkuSfQmcA2uhQTwG8tPEUAJpWlmX5mdAhmjAejz8dOgPQRg8bAGmaniPp3EBZADTEzP5lcXHx26FzNGHHjh1fkRTFnxVYiYcNAOfcC0MFAdAc59x7QmdoUGlm/yd0CKBtkoP+9/NDBQHQGEuS5N2hQzQpSZIbQmcA2uaHAyDLsqdLmgmYBUAzPrGwsHB36BBNGo1Gn3fO8WoA4AAHngBcEiwFgMYkSfKnoTMEYLy1OfBwPxwAZnZhwBwAGmBmX1hYWPhk6BwhnHLKKTeY2ULoHEBbJJK0efPmH3POnRU6DIBa2WAw+O3QIUK5+eab9zrnfi90DqAtEkkaj8cXhw4CoF7OuesXFha+EDpHSHmev9vMPhE6B9AGiSQ55y4KHQRArXaMx+PfDR2iJa50zt0XOgQQ2v57AJ4SNAWAOi1JesGOHTti+Ol/R1UUxZ1lWV4ROgcQWrLvh/88OnQQAPUws9fkeR7F2/4uV1EU75L05tA5gJCSPXv2PFrSIHQQALV4S1EUV4cO0UZ5nl9lZjG9IyLwMElZlmeGDgGges65d+R5/uuhc7TYeGJi4jJJHw8dBAghSZKEAQD0jHPujaPR6EWSytBZ2mx+fv7BdevWPUvSjaGzAE1LzOyM0CEAVGavc+43RqPRVaL8l+X222/fk+f5C5xzV0uy0HmApiSS0tAhAPgzs4WyLC8YjUZ/ETpLB5Wj0eh3nHPPkcSrJRCFRNK60CEAeCnN7Lqpqalzd+zY8cXQYbpsNBp9aDAYPM7MbhCnAeg5l2XZbZLODh0EwKp8JEmS1ywsLNwSOkjfzMzMXDQYDF5rZj8VOgtQB5dl2YKkYeggAJZtt5l90Dn3ujzP/1/oMH03HA5/1sx+S9LTxUum0SMuy7LvSHpU6CAAjuj7kj4n6X1mdmNRFN8NHSg2WZZNS3qBpOdIeqKkqbCJAD8uy7I9kiZDB+mJsaRdknaKO7CxCma2Z9/71H9b0nZJ/yrpK+vWrfvS7bffvidsOuw3PT197MTExJPN7BxJZ0qalXSypBMkTYTM1hFO0mmhQ8TOZVnGjS4rt1vSl5xzn5Z0W1mW2yYmJu6Yn59/MHAuAGg7l6bptc65y0MHiR1Ldfn2SPqwpP81Ho//fnFx8fuhAwFAx1D+LcIAOLrvOefeuLS09MbFxcVvhw4DAB1F+bcMA+Dwdku6es2aNVfPzc3tCh0GADqM8m8hBsAhmNknJF1ZFMWdobMAQMdR/i3FAHi4Jefca/M8/6/iLn4A8OWyLLtGEuXfQgyAH/mupEtGo9FnQwcBgB5waZpeK8q/tRgAD/m6mT2zKIqvhA4CAD3AlX8HMACkYmJi4mfuvvvuhdBBAKAHuPLviNgHwL1m9izKHwAqwZV/h8Q8AJYkPZdjfwCoBFf+HZOEDhCKc+4P8zz/TOgcANADLsuya3ipX7dEeQJgZp/I8/z1oXMAQA9w5d9RMQ6APWVZvky8zh8AfPGcf4fFOABev7i4uC10CADoOK78Oy62AbBzcnLyz0KHAICO48q/B6K6CdA594bt27fvDJ0DADpsf/n/Wugg8BPTCcCepaWlN4YOAQAdxrF/j8Q0AD60uLj47dAhAKCjOPbvmZgGwA2hAwBAR3Hl30OxDIA94/H4Y6FDAEAHceXfU7HcBPgPi4uL3w8dAgA6hhv+eiyKEwDn3E2hMwBAx3Ds33NRDABJt4YOAAAdwrF/BKJ4CqAsS975DwCWh2P/SERxAlCW5V2hMwBAB3DsH5EYBsBebgAEgKPi2D8yMTwFcF/oAADQchz7RyiGE4AfhA4AAC3GsX+kYhgAFjoAALQUx/4Ri+EpAADAI3HsHzkGAADEh/IHAwAAIkP5QxIDAABiQvnjhxgAABAHyh8PwwAAgP6j/PEIDAAA6DfKH4fEAACA/qL8cVgMAADoJ8ofR8QAAID+ofxxVAwAAOgXyt/f9ZIWQ4eoGwMAAPqD8vd3fZ7nl0sqQwepGwMAAPqB8vcXTflLDAAA6APK319U5S8xAACg6yh/f9GVv8QAAIAuo/z9RVn+EgMAALqK8vcXbflLDAAA6CLK31/U5S8xAACgayh/f9GXv8QAAIAuofz9Uf77MAAAoBsof3+U/wEYAADQfpS/P8r/IAwAAGg3yt8f5X8IDAAAaC/K3x/lfxgMAABoJ8rfH+V/BAwAAGgfyt8f5X8UDAAAaBfK3x/lvwwMAABoD8rfH+W/TAwAAGgHyt8f5b8CDAAACI/y90f5rxADAADCovz9Uf6rwAAAgHAof3+U/yoxAAAgDMrfH+XvgQEAAM2j/P1R/p4YAADQLMrfH+VfAQYAADSH8vdH+VeEAQAAzaD8/VH+FWIAAED9KH9/lH/FGAAAUC/K3x/lXwMGAADUh/L3R/nXhAEAAPWg/P1R/jViAABA9Sh/f5R/zRgAAFAtyt8f5d8ABgAAVIfy90f5N4QBAADVoPz9Uf4NYgAAgD/K3x/l3zAGAAD4ofz9Uf4BMAAAYPUof3+UfyAMAABYHcrfH+UfEAMAAFaO8vdH+QfGAACAlaH8/VH+LcAAAIDlo/z9Uf4twQAAgOWh/P1R/i3CAACAo6P8/VH+LcMAAIAjo/z9Uf4txAAAgMOj/P1R/i3FAACAQ6P8/VH+LcYAAIBHovz9Uf4txwAAgIej/P1R/h3AAACAH6H8/VH+HcEAAICHUP7+KP8OYQAAAOVfBcq/YxgAAGJH+fuj/DuIAQAgZpS/P8q/oxgAAGJF+fuj/DuMAQAgRpS/P8q/4xgAAGJD+fuj/HuAAQAgJpS/P8q/JxgAAGJB+fuj/HuEAQAgBpS/P8q/ZxgAAPqO8vdH+fcQAwBAn1H+/ij/nmIAAOgryt8f5d9jDAAAfUT5+6P8e44BAKBvKH9/lH8EGAAA+oTy90f5R4IBAKAvKH9/lH9EGAAA+oDy90f5R4YBAKDrKH9/lH+EGAAAuozy90f5R4oBAKCrKH9/lH/EGAAAuojy90f5R44BAKBrKH9/lD80EToAAKyAS9P0WkmXhw7SVWZ2XVEUV0iy0Flaru9/P8YAANAV+6/8Kf/Vu74oiivV/3Krwg9CB6jZ93kKAEAXcOzvj2P/lbkvdICa7eIEAEDbcezviWP/lTOze51zoWPU6V5OAAC0mcuy7BrnHOW/ehz7r0KSJNtDZ6iTmd3FAADQVhz7++PYf5XMbFvoDHVyzn2NpwAAtBHH/p449vd2a+gAdXLO3cYJAIC24djfH8f+nsbj8eck7Qmdoy5JktzEAADQJhz7++PYvwKLi4vfl/SPoXPU5K75+fl5BgCAtth/7E/5r5KZXZfn+UtE+VfCzD4QOkNNPijxVsAA2oFjf38c+1fMOfcOSePQOaqWJMkNEgMAQHhc+Xviyr8eeZ4vSvp46BwVu3VhYeGfJAYAgLC48vfHlX+NnHN/HjpDlZxzV+//3wwAAKFww58/bvir2Wg0+nsz+0LoHBXZPhqN3r3/PxgAAELg2N8Tx/7NSZLkv4TOUAUz+0NJS/v/mwEAoGkc+/vj2L9Bo9HoE5L+OnQOT58piuLdB36AAQCgSVz5e+LKP4wkSX5T0ndD51ilHwwGg5fqoMHIAADQFK78/XHlH8jCwsLXkyR5oTr4d29mV83Pz3/t4I8zAAA0gSt/T1z5h7ewsPBhSZ16VYBz7h1FUfzloX6NAQCgblz5++PKvyXyPH+1pP8dOscyfTpJkpcc7hcZAADqxJW/J678W6dcs2bNZWb2idBBjsTMbpmcnLxkfn7+wcN9DgMAQF248vfHlX8Lzc3N7T7mmGOeZWbvCZ3lML5oZk/fvn37ziN9EgMAQB248vfElX+7zc3N7S6K4nmS3hw6y0H+ZjAYXLRjx47vHO0TGQAAqsaVvz+u/LthnOf5y8zs30k64tV2A3Y7516Z5/nzjnTsfyAGAIAqceXviSv/7imK4r1m9pMK94ODvlSW5ZNGo9EbtILRyAAAUBWXpum1XPmvnpldVxTFFeLKv3OKorgzz/OnS3q+pPmGvu3XzezyPM+fvGPHjn9e6W9mAACoAuXvifLvhzzP//qUU045Q9KLzewRb75TBTNbMLOXDwaDLUVR/E+t8rTIZVnW9/+zFXmeZ6FDAD1G+Xui/HvLDYfDJ5vZZZJ+UdJGj6/1PUkfdM69fTQafUoVPEXEAADgg/L3RPlHw6Vp+rgkSS42sydIeoykrZJOOsTn3itpzjm3zcz+WdKn8zy/RdK4ykATVX4xAFGh/D1R/lGxoihulXTrwb+wZcuW9WZ2zHg83jMajb7XVCAGAIDVcFmWXSOJ8l89XuoHSdK+N+xp/GWE3AQIYKX2lz8v9Vu96/M8v1y81A8BMQAArATl74/yRyswAAAsF+Xvj/JHazAAACwH5e+P8kerMAAAHA3l74/yR+swAAAcCeXvj/JHKzEAABwO5e+P8kdrMQAAHArl74/yR6sxAAAcjPL3R/mj9RgAAA5E+fuj/NEJDAAA+1H+/ih/dAYDAIBE+VeB8kenMAAAUP7+KH90DgMAiBvl74/yRycxAIB4Uf7+KH90FgMAiBPl74/yR6cxAID4UP7+KH90HgMAiAvl74/yRy8wAIB4UP7+KH/0BgMAiAPl74/yR68wAID+o/z9Uf7oHQYA0G+Uvz/KH73EAAD6i/L3R/mjtxgAQD9R/v4of/QaAwDoH8rfH+WP3mMAAP1C+fuj/BEFBgDQH5S/P8of0WAAAP1A+fuj/BEVBgDQfZS/P8of0WEAAN1G+fuj/BElBgDQXZS/P8of0WIAAN1E+fuj/BE1BgDQPZS/P8of0WMAAN1C+fuj/AExAIAuofz9Uf7APgwAoBsof3+UP3AABgDQfpS/P8ofOAgDAGg3yt8f5Q8cAgMAaC/K3x/lDxwGAwBoJ8rfH+UPHAEDAGgfyt8f5Q8cBQMAaBfK3x/lDywDAwBoD8rfH+UPLBMDAGgHyt8f5Q+sAAMACI/y90f5AyvEAADCovz9Uf7AKjAAgHAof3+UP7BKDAAgDMrfH+UPeGAAAM2j/P1R/oAnBgDQLMrfH+UPVIABADSH8vdH+QMVYQAAzaD8/VH+QIUYAED9KH9/lD9QMQYAUC/K3x/lD9SAAQDUh/L3R/kDNZkIHQDoKZem6bWSLg8dpKvM7LqiKK6QZKGzAFU49dRTN05NTV1oZj8u6UxJZ0h6lKTjJK13zt1nZvdLulfSHc65bWVZ3uqc+2Se54tV52EAANVzaZpe65yj/FeJ8kdfDIfDLWVZXuac+yVJjzMzd7jPNbMTJJ0g6cckPcbM5Jzb/3W2lWX5viRJ3j4ajb5aRTaXZVnfH2BFnudZ6BCIBuXvifJHH2RZ9nPOuVeb2YWSDlv6q/RlM3tdURTvk8fTY9wDAFSH8vdE+aPr0jS9MMuyf5T0ETO7SNWXvySd75x7b5ZlXxkOh7+w2i/CAACqQfl7ovzRZaeddtqm4XB4g3Puk5J+oqFve7aZfSDLsvefdtppm1f6mxkAgD+XZdk1lL+X64uiuFKUPzpoZmbmoqWlpVvM7D+qniv+o3nO0tLSV7Is+w8r+U0MAMDP/rv9eanfKpnZdXmev0S81A8dlGXZHyRJ8nE9dONeSOsk/XWapn8habCc38AAAFaPK39/XPmjqwZZlr1F0h+rRV3qnHtFlmXvTdN07dE+tzWhgY7hyt8TV/7osCTLsndIuiJ0kMN4rnPuA1u3bl1zpE9iAAArx5W/P6780Vlpmv4PSc8LneMonrZ79+6/0RHe74cBAKwMV/6euPJHlw2Hw1c7564KnWOZnpNl2dWH+0UGALB8XPn748ofnZVl2QVm9iehc6zQK9M0/aVD/QIDAFgervw9ceWPLkvT9FGS3qUOvoW+c+4vp6enhwd/nAEAHB1X/v648kenOef+m6SZ0DlWacNgMHjDwR9kAABHxpW/J6780XVpmp4v6SWhc3i6ZDgcPvvADzAAgMPjyt8fV/7ogz9VD/rSzF6nA/4cnf8DATVxWZZdI678fVyf5/nl4sofHZam6ROdcxeHzlGRx6Zp+tz9/8EAAB6JY39PHPujL5xzrw6doUoH/nkYAMDDcezvj2N/9MLMzMxJkp4VOkfFnjgcDs+WGADAgTj298exP3pjMBhcKmkqdI6qmdmlEgMA2I/y90f5o1fKsnzu0T+rky6RGACARPlXgfJHr8zOzh7jnPup0Dlq8pg0TWc6945GQMX23/DHc/6rZGbXFUVxhXjOHz2ytLT0JOfcUX+kboc9lRMAxIwb/vxxwx96KUmSc0NnqNk5DADEimN/fxz7o7fM7MzQGerknDuLpwAQI479PXHsjwhsDR2gZqczABCb/Vf+lP/qceyPGJwYOkDNTuQpAMSEY39/HPsjCs65E0JnqJNz7gROABALjv09ceyPmJjZsaEz1MnMjmcAIAYc+/vj2B+xcaED1MzxFAD6jmN/fxz7Az3EAECfUf7+KH+gpxgA6CvK3x/lD/QYAwB9RPn7o/yBnmMAoG8of3+UPxABBgD6hPL3R/kDkWAAoC8of3+UPxARBgD6gPL3R/kDkWEAoOsof3+UPxAhBgC6jPL3R/kDkWIAoKsof3+UPxAxBgC6iPL3R/kDkWMAoGsof3+UPwAGADqF8vdH+QOQxABAd1D+/ih/AD/EAEAXUP7+KH8AD8MAQNtR/v4ofwCPwABAm1H+/ih/AIfEAEBbUf7+KH8Ah8UAQBtR/v4ofwBHxABA21D+/ih/AEfFAECbUP7+KH8Ay8IAQFtQ/v4ofwDLxgBAG1D+/ih/ACvCAEBolL8/yh/AijEAEBLl74/yB7AqDACEQvn7o/wBrBoDACFQ/v4ofwBeGABoGuXvj/IH4I0BgCZR/v4ofwCVmAgdANFwWZa9RdJLQwfpKjO7riiKKyRZ6CwAuo8TADQiy7LXivL3cX1RFFeK8gdQEU4AULs0TV8u6fdC5+gqrvwB1IETANQqTdPznXN/HjpHh3HlD6AWDADUZnZ2doNz7kZJk6GzdBQ3/AGoDU8BoDbj8fjPJM2GztFFHPsDqBsnAKjFcDg8T9KLQ+foKI79AdSOEwDU5Y1iYK4YV/4AmsI/0KjczMzMRWb2U6FzdBBX/gAawwBA5ZIkeXXoDB3EDX8AGsUAQKVOO+20zZKeETpHx1D+ABrHAECllpaWLpXkQufoEMofQBDcBIiq/XLoAF3BDX8AQuIEAJWZnp4+WdLjQ+foCG74AxAUAwCVSZLkAnH8vxwc+wMIjqcAUKXzQwdoO479AbQFJwCojHPujNAZWo5jfwCtwQkAqrQ1dIC24sofQNtwAoDKmNmm0Blaiit/AK3DAEBlnHPHh87QQtzwB6CVeAoAVXGS1oYO0SYc+wNoM04AUBWTtCd0iBbh2B9AqzEAUKX7QwdoCY79AbQeAwBV+m7oAKGZ2XV5nr9ElD+AlmMAoErbQwcIjGN/AJ3BAECV7gwdICCO/QF0Cq8CQJVuCR0gBO72B9BFnACgMmb2mdAZAuDYH0AnMQBQmaIo5iQVoXM0hRv+AHQZAwCVMrP3hs7QEK78AXQaAwBVe3foAA3ghj8AnccAQKWKoviypK+GzlEXjv0B9AUDAFUzSVeHDlETjv0B9AYDAJVbt27duyTloXNUiSt/AH3DAEDlbr/99j1m9prQOSrElT+A3mEAoBZFUbxTUh/eF4Ab/gD0EgMAdTFJL5P0g9BBVotjfwB9xgBAbfI8v03Sb4bOsUoc+wPoNQYAapXn+bWS3hU6x0pw5Q8gBgwA1G7dunUvlvSx0DmWiSt/AFFgAKB2t99++541a9b8e0k3h85yFG/lyh9ALBgAaMTc3NyuBx988EK19CTAzF6X5zlX/gCiwQBAY+65557716xZ8xy1656AvZKuLIrid0X5A4gIAwCNmpub253n+aXOuRdJ+n7ILGa2kCTJhftuVASAqDAAEMRoNHq7pCdK+lyAb19KeuvU1NS5CwsLXwjw/QEgOAYAgsnz/LY8zy8ws8vU3M8O+GySJD+Z5/kV27dv39nQ9wSA1mEAIDQriuId69at2yrpxarnRwmbmX1Y0gV5nl+wsLDwTzV8DwDolInQAQDpoZcKSnqbpLelaXq+c+75kn5R0nCVX7KUdIuZ3ViW5Y2Li4ujiqICQC8wANA6RVF8WdKXJf3GcDjcYmYXmNmPO+dON7PTnHMbJR0n6Rjn3H1m9oBz7htlWc455+6U9EXn3GdHo9H3gv5BAKDFGABotdFotF3Sdj10OgAAqAj3AAAAECEGAAAAEWIAAAAQIQYAAAARYgAAABAhBgAAABFiAAAAECEGAAAAEWIAAAAQIQYAAAARYgAAABAhBgAAABFiAAAAECEGAAAAEWIAAAAQIQYAAAARYgAAABAhBgAAABFiAAAAECEGAAAAEWIAAAAQIQYAAAARYgAAABAhBgAAABFiAAAAECEGAAAAEWIAAAAQIQYAAAARYgAAABAhBgAAABFiAAAAECEGAAAAEWIAAAAQIQYAAAARYgAAABAhBgAAABFiAAAAECEGAAAAEWIAAAAQIQYAAAARYgAAABAhBgAAABFiAAAAECEGAAAAEWIAAAAQIQYAAAARYgAAABAhBgAAABFiAAAAECEGAAAAEWIAAAAQIQYAAAARYgAAABAhBgAAABFiAAAAECEGAAAAEWIAAAAQIQYAAAARYgAAABAhBgAAABGKYQC40AEAAJ3T++6IYQAcGzoAAKBzjgsdoG4xDIATQgcAAHTO8aED1C2GATCxadOm3i85AEA1Tj755BMkTYTOUbcYBoAmJye3hM4AAOiGNWvWPDp0hiZEMQCSJDkrdAYAQDfE0hlRDAAzOyd0BgBAZzwudIAmRDEAJD01dAAAQGdcGDpAE2IZAE/iRkAAwNFs3LjxeEnnh87RhFgGwNTk5OQzQocAALTb2owqwNIAAAhQSURBVLVrnylpMnSOJsQyAOScuyx0BgBAu5lZNF0RzQCQ9KxTTz11Y+gQAIB22rRp0ymSfj50jqbENACmJicnXx46BACgnaampl6pSI7/JcllWWahQzRo52AwmJ2fn783dBAAQHts2bJl/d69e+clbQidpSkxnQBI0vrxePzboUMAANplaWnpNYqo/KX4TgAkac9gMDh3fn7+a6GDAADCm5mZOSNJkq9IWhM6S5NiOwGQpKmyLN+sOP/sAICHS5IkuU6Rlb8UaQma2UVZlv1u6BwAgLDSNP0DRfpusTE+BbDfkpk9rSiKm0IHAQA0b/PmzReXZfkxSYPQWUKI8gRgnwnn3PtnZmbODR0EANCs4XB4dlmW71Gk5S/FPQAkaX2SJB+anZ2dDR0EANCM2dnZWTP7qKQTQ2cJKfYBIEnpeDz+AicBANB/w+Hw7PF4/BlJM6GzhMYAeMiPJUnyqTRNLwwdBABQj82bN19sZp+TlIXO0gYMgB850Tn38eFw+Efi7wUA+sQNh8NXlGX5UUX2Zj9HEvOrAI7k04PB4EreLAgAum3z5s2PKcvyLYr0pX5HwgA4vD2S/nwwGLyenx0AAN0yHA5PLMvy1c6531REP+BnJRgAR7dT0jV79+59wze+8Y17QocBABzepk2bTpmamnqFpF+XtC50njZjACzfXkl/a2Zv37t370e/+c1vPhA6EABA2rhx4/Fr1659ppldJunnxRX/sjAAVmevpC9J+rSk28qy3La0tHQnowAA6rVx48bjp6amtiZJcqakcyRdKOl8Ufor5rIs2yP+4qpSStppZrucc+PQYQCgD8xs4JxbJ2m9eJVWVcYTku5X5O+GVKFED72ckL9PAKiIcy50hD7anUi6L3QKAADQqD0MAAAA4rOLAQAAQHy+nUjaFToFAABo1HcSSUXoFAAAoDnOufnEzLaFDgIAAJpjZtsS5xwDAACAiDjntiWDwYABAABARMqy3JacdNJJd+mht7YFAAD9t6coiruTm2++ea+kO0OnAQAAjbhD0tL+91T+bMgkAACgMTdJP/qhCp8KGAQAADTEzD4l7RsAe/bs+ZQkfiwwAAD9VpZl+aMTgG9+85vfknRr0EgAAKBu/7y4uPht6eE/V/mTgcIAAIBm/LDrfzgAzOx9YbIAAIAmOOd+2PXuwI9nWTYnaUvzkQAAQM3uyvP8dO275+/ApwBM0juDRAIAALUysxt0wA3/yUG/+HbxagAAAPrGnHPvOPADDxsARVHMmdk/NJsJAADU7HN5nt914AeSgz8jSZJrm8sDAADqZmZvPfhj7hCfN8iy7GuSttYfCQAA1OyuPM/PkrR04AcfcQIgaeyc+7NmMgEAgDqZ2Z/qoPKXDj0AtHHjxr+SNKo7FAAAqFW+fv36Gw71C4NDffDrX/96uWHDBpP0zFpjAQCAOr1mbm7ui4f6hUOeAEhSWZbXSbq7tkgAAKBOc4PB4K8O94uHHQBFUfzAzH6tnkwAAKBOSZK8cn5+/sHD/vqRfnNRFB+R9P7KUwEAgNqY2XsWFhY+fKTPOeIAkKTxeHyVpAcqSwUAAOr0/cnJyd862icd8ibAA9133307N2zYUEp6WiWxAABAnV6zsLDwd0f7pEO9EdChDNI0/Zhz7mLPUAAAoD435Xn+s5LGR/vEoz4FsM94YmLiUknf8IoFAABqYWbfkvQCLaP8peUPAM3Pz38jSZJLl/uFAQBAY0rn3GV5ni8u9zcc9R6AA+3cufPu9evXr5H0lBVHAwAAtXDO/XGe59ev6Pes4vtMZFn2AUk/v4rfCwAAKmRmHyqK4hKt8IR+2U8BHGDJzH5J0udX8XsBAEB1vrR3797naRVPz6/mBECSNDMzc1KSJJ+R9NjVfg0AALBqXzWzpxRF8d3V/ObVnABIknbs2PEdM3uGmS2s9msAAIBV2TExMfFvVlv+kscAkKSiKHZMTEw8U1Lu83UAAMCy5YPB4Gl333231wX4qp8COFCWZdOSPiLpnCq+HgAAOKR/HY/Hz1xcXBz5fiGvE4D98jxfdM49VdwYCABAXb48Ho8vqKL8pRW+D8CR7Ny588G1a9feODEx8QRJp1f1dQEAiJ2Zfagsy2cvLi7urOprVjYAJOmBBx7Yu3Pnzhs3bNhgki5QRU8xAAAQKTOzN27atOlX77jjjt1VfuHaCnrz5s0Xl2X5Tkmn1vU9AADosXvM7IVFUXykji9e6xX6pk2bTpmamnqHpKfX+X0AAOiZmyS9YCXv7b9SlT4FcLAHHnjggV27dr1r3bp1Dzjnnixpqs7vBwBAx90v6ffzPL9y165du+r8RrUOgH1s165dn1+/fv3bzOwU59y5DXxPAAA6xcw+NDk5+eyFhYW/k2R1f7/Gb9IbDoc/K+lNZnZm098bAIAWusvMriqK4m+b/KaVvA/ASoxGo08kSfIEM3u5eAdBAEC8RpJ+fTAYPK7p8pcCv0zvvPPOm7znnnueb2a/L+mMkFkAAGjIvHPuL5Ikeev8/PyDoUK05XX6E2maPs8591JJP6325AIAoAom6fNmdm1RFDdKWgodqHVFOz09nU1MTLzAzP6zpK2h8wAA4GFkZu+W9JdFUcyFDnOg1g2AA7jhcPjTZvZvnXMXm9njFeCeBQAAVqA0s39xzn3SOfd/R6PRF9TAHf2r0eYB8DDT09MnT0xMXGhmF+uhtxk+Q9Jk4FgAgLjtlXSHpJvM7JNm9ukdO3Z8J3So5ejMADiEiZmZmS2DweDMsizPSpLkDDPb7JzbaGYnSTpeD73x0HGBcwIAuukBSXsk3e+c+46Z3eOcWzCzbc65bWVZfq0oirvVgufzV+P/AxjwxC3i6e9OAAAAAElFTkSuQmCC",
          click: (event, winbox) => {
            this.logger.log("#onOpenInNewTab: url", this.url);
            window.open(this.url, "_blank");
          }
        });
      } else {
        this.logger.debug("restoring dialog");
        this.dialog.restore();
        this.dialog.setUrl(url.href);
        this.dialog.setTitle(url.hostname);
        this.dialog.setIcon(this.headerIconUrlBase + url.hostname);
      }
      this.dialog.removeControl("nav-back");
      if (this.navStack.length > 0) {
        this.dialog.addControl({
          index: 0,
          class: "nav-back",
          image: reply_arrow_default,
          title: "Go Back",
          click: (event, winbox) => {
            this.navBack();
          }
        });
      }
    }
    navBack() {
      const lastUrl = this.navStack.pop();
      if (lastUrl) {
        this.previewUrl(lastUrl);
      }
    }
    inIframe() {
      try {
        return window.self !== window.top;
      } catch (e8) {
        return true;
      }
    }
    getMaxZIndex() {
      return new Promise((resolve) => {
        const z2 = Math.max(
          ...Array.from(
            document.querySelectorAll("body *"),
            (el) => parseFloat(window.getComputedStyle(el).zIndex)
          ).filter((zIndex) => !Number.isNaN(zIndex)),
          0
        );
        resolve(z2);
      });
    }
  };

  // node_modules/@sentry/tracing/esm/utils.js
  function hasTracingEnabled(maybeOptions) {
    const client = getCurrentHub().getClient();
    const options = maybeOptions || client && client.getOptions();
    return !!options && ("tracesSampleRate" in options || "tracesSampler" in options);
  }
  function getActiveTransaction(maybeHub) {
    const hub = maybeHub || getCurrentHub();
    const scope = hub.getScope();
    return scope && scope.getTransaction();
  }
  function msToSec(time) {
    return time / 1e3;
  }

  // node_modules/@sentry/tracing/esm/errors.js
  function registerErrorInstrumentation() {
    addInstrumentationHandler("error", errorCallback);
    addInstrumentationHandler("unhandledrejection", errorCallback);
  }
  function errorCallback() {
    const activeTransaction = getActiveTransaction();
    if (activeTransaction) {
      const status = "internal_error";
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Transaction: ${status} -> Global error occured`);
      activeTransaction.setStatus(status);
    }
  }

  // node_modules/@sentry/tracing/esm/span.js
  var SpanRecorder = class {
    __init() {
      this.spans = [];
    }
    constructor(maxlen = 1e3) {
      ;
      SpanRecorder.prototype.__init.call(this);
      this._maxlen = maxlen;
    }
    add(span) {
      if (this.spans.length > this._maxlen) {
        span.spanRecorder = void 0;
      } else {
        this.spans.push(span);
      }
    }
  };
  var Span = class {
    __init2() {
      this.traceId = uuid4();
    }
    __init3() {
      this.spanId = uuid4().substring(16);
    }
    __init4() {
      this.startTimestamp = timestampWithMs();
    }
    __init5() {
      this.tags = {};
    }
    __init6() {
      this.data = {};
    }
    __init7() {
      this.instrumenter = "sentry";
    }
    constructor(spanContext) {
      ;
      Span.prototype.__init2.call(this);
      Span.prototype.__init3.call(this);
      Span.prototype.__init4.call(this);
      Span.prototype.__init5.call(this);
      Span.prototype.__init6.call(this);
      Span.prototype.__init7.call(this);
      if (!spanContext) {
        return this;
      }
      if (spanContext.traceId) {
        this.traceId = spanContext.traceId;
      }
      if (spanContext.spanId) {
        this.spanId = spanContext.spanId;
      }
      if (spanContext.parentSpanId) {
        this.parentSpanId = spanContext.parentSpanId;
      }
      if ("sampled" in spanContext) {
        this.sampled = spanContext.sampled;
      }
      if (spanContext.op) {
        this.op = spanContext.op;
      }
      if (spanContext.description) {
        this.description = spanContext.description;
      }
      if (spanContext.data) {
        this.data = spanContext.data;
      }
      if (spanContext.tags) {
        this.tags = spanContext.tags;
      }
      if (spanContext.status) {
        this.status = spanContext.status;
      }
      if (spanContext.startTimestamp) {
        this.startTimestamp = spanContext.startTimestamp;
      }
      if (spanContext.endTimestamp) {
        this.endTimestamp = spanContext.endTimestamp;
      }
      if (spanContext.instrumenter) {
        this.instrumenter = spanContext.instrumenter;
      }
    }
    startChild(spanContext) {
      const childSpan = new Span({
        ...spanContext,
        parentSpanId: this.spanId,
        sampled: this.sampled,
        traceId: this.traceId
      });
      childSpan.spanRecorder = this.spanRecorder;
      if (childSpan.spanRecorder) {
        childSpan.spanRecorder.add(childSpan);
      }
      childSpan.transaction = this.transaction;
      if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && childSpan.transaction) {
        const opStr = spanContext && spanContext.op || "< unknown op >";
        const nameStr = childSpan.transaction.name || "< unknown name >";
        const idStr = childSpan.transaction.spanId;
        const logMessage = `[Tracing] Starting '${opStr}' span on transaction '${nameStr}' (${idStr}).`;
        childSpan.transaction.metadata.spanMetadata[childSpan.spanId] = { logMessage };
        logger.log(logMessage);
      }
      return childSpan;
    }
    setTag(key, value) {
      this.tags = { ...this.tags, [key]: value };
      return this;
    }
    setData(key, value) {
      this.data = { ...this.data, [key]: value };
      return this;
    }
    setStatus(value) {
      this.status = value;
      return this;
    }
    setHttpStatus(httpStatus) {
      this.setTag("http.status_code", String(httpStatus));
      const spanStatus = spanStatusfromHttpCode(httpStatus);
      if (spanStatus !== "unknown_error") {
        this.setStatus(spanStatus);
      }
      return this;
    }
    isSuccess() {
      return this.status === "ok";
    }
    finish(endTimestamp) {
      if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
        const { logMessage } = this.transaction.metadata.spanMetadata[this.spanId];
        if (logMessage) {
          logger.log(logMessage.replace("Starting", "Finishing"));
        }
      }
      this.endTimestamp = typeof endTimestamp === "number" ? endTimestamp : timestampWithMs();
    }
    toTraceparent() {
      let sampledString = "";
      if (this.sampled !== void 0) {
        sampledString = this.sampled ? "-1" : "-0";
      }
      return `${this.traceId}-${this.spanId}${sampledString}`;
    }
    toContext() {
      return dropUndefinedKeys({
        data: this.data,
        description: this.description,
        endTimestamp: this.endTimestamp,
        op: this.op,
        parentSpanId: this.parentSpanId,
        sampled: this.sampled,
        spanId: this.spanId,
        startTimestamp: this.startTimestamp,
        status: this.status,
        tags: this.tags,
        traceId: this.traceId
      });
    }
    updateWithContext(spanContext) {
      this.data = _nullishCoalesce(spanContext.data, () => ({}));
      this.description = spanContext.description;
      this.endTimestamp = spanContext.endTimestamp;
      this.op = spanContext.op;
      this.parentSpanId = spanContext.parentSpanId;
      this.sampled = spanContext.sampled;
      this.spanId = _nullishCoalesce(spanContext.spanId, () => this.spanId);
      this.startTimestamp = _nullishCoalesce(spanContext.startTimestamp, () => this.startTimestamp);
      this.status = spanContext.status;
      this.tags = _nullishCoalesce(spanContext.tags, () => ({}));
      this.traceId = _nullishCoalesce(spanContext.traceId, () => this.traceId);
      return this;
    }
    getTraceContext() {
      return dropUndefinedKeys({
        data: Object.keys(this.data).length > 0 ? this.data : void 0,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        trace_id: this.traceId
      });
    }
    toJSON() {
      return dropUndefinedKeys({
        data: Object.keys(this.data).length > 0 ? this.data : void 0,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        start_timestamp: this.startTimestamp,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        timestamp: this.endTimestamp,
        trace_id: this.traceId
      });
    }
  };
  function spanStatusfromHttpCode(httpStatus) {
    if (httpStatus < 400 && httpStatus >= 100) {
      return "ok";
    }
    if (httpStatus >= 400 && httpStatus < 500) {
      switch (httpStatus) {
        case 401:
          return "unauthenticated";
        case 403:
          return "permission_denied";
        case 404:
          return "not_found";
        case 409:
          return "already_exists";
        case 413:
          return "failed_precondition";
        case 429:
          return "resource_exhausted";
        default:
          return "invalid_argument";
      }
    }
    if (httpStatus >= 500 && httpStatus < 600) {
      switch (httpStatus) {
        case 501:
          return "unimplemented";
        case 503:
          return "unavailable";
        case 504:
          return "deadline_exceeded";
        default:
          return "internal_error";
      }
    }
    return "unknown_error";
  }

  // node_modules/@sentry/tracing/esm/transaction.js
  var Transaction = class extends Span {
    __init() {
      this._measurements = {};
    }
    __init2() {
      this._contexts = {};
    }
    __init3() {
      this._frozenDynamicSamplingContext = void 0;
    }
    constructor(transactionContext, hub) {
      super(transactionContext);
      Transaction.prototype.__init.call(this);
      Transaction.prototype.__init2.call(this);
      Transaction.prototype.__init3.call(this);
      ;
      this._hub = hub || getCurrentHub();
      this._name = transactionContext.name || "";
      this.metadata = {
        source: "custom",
        ...transactionContext.metadata,
        spanMetadata: {},
        changes: [],
        propagations: 0
      };
      this._trimEnd = transactionContext.trimEnd;
      this.transaction = this;
      const incomingDynamicSamplingContext = this.metadata.dynamicSamplingContext;
      if (incomingDynamicSamplingContext) {
        this._frozenDynamicSamplingContext = { ...incomingDynamicSamplingContext };
      }
    }
    get name() {
      return this._name;
    }
    set name(newName) {
      this.setName(newName);
    }
    setName(name, source = "custom") {
      if (name !== this.name || source !== this.metadata.source) {
        this.metadata.changes.push({
          source: this.metadata.source,
          timestamp: timestampInSeconds(),
          propagations: this.metadata.propagations
        });
      }
      this._name = name;
      this.metadata.source = source;
    }
    initSpanRecorder(maxlen = 1e3) {
      if (!this.spanRecorder) {
        this.spanRecorder = new SpanRecorder(maxlen);
      }
      this.spanRecorder.add(this);
    }
    setContext(key, context) {
      if (context === null) {
        delete this._contexts[key];
      } else {
        this._contexts[key] = context;
      }
    }
    setMeasurement(name, value, unit = "") {
      this._measurements[name] = { value, unit };
    }
    setMetadata(newMetadata) {
      this.metadata = { ...this.metadata, ...newMetadata };
    }
    finish(endTimestamp) {
      if (this.endTimestamp !== void 0) {
        return void 0;
      }
      if (!this.name) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
        this.name = "<unlabeled transaction>";
      }
      super.finish(endTimestamp);
      if (this.sampled !== true) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
        const client = this._hub.getClient();
        if (client) {
          client.recordDroppedEvent("sample_rate", "transaction");
        }
        return void 0;
      }
      const finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter((s7) => s7 !== this && s7.endTimestamp) : [];
      if (this._trimEnd && finishedSpans.length > 0) {
        this.endTimestamp = finishedSpans.reduce((prev, current) => {
          if (prev.endTimestamp && current.endTimestamp) {
            return prev.endTimestamp > current.endTimestamp ? prev : current;
          }
          return prev;
        }).endTimestamp;
      }
      const metadata = this.metadata;
      const transaction = {
        contexts: {
          ...this._contexts,
          trace: this.getTraceContext()
        },
        spans: finishedSpans,
        start_timestamp: this.startTimestamp,
        tags: this.tags,
        timestamp: this.endTimestamp,
        transaction: this.name,
        type: "transaction",
        sdkProcessingMetadata: {
          ...metadata,
          dynamicSamplingContext: this.getDynamicSamplingContext()
        },
        ...metadata.source && {
          transaction_info: {
            source: metadata.source,
            changes: metadata.changes,
            propagations: metadata.propagations
          }
        }
      };
      const hasMeasurements = Object.keys(this._measurements).length > 0;
      if (hasMeasurements) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
          "[Measurements] Adding measurements to transaction",
          JSON.stringify(this._measurements, void 0, 2)
        );
        transaction.measurements = this._measurements;
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`);
      return this._hub.captureEvent(transaction);
    }
    toContext() {
      const spanContext = super.toContext();
      return dropUndefinedKeys({
        ...spanContext,
        name: this.name,
        trimEnd: this._trimEnd
      });
    }
    updateWithContext(transactionContext) {
      super.updateWithContext(transactionContext);
      this.name = _nullishCoalesce(transactionContext.name, () => "");
      this._trimEnd = transactionContext.trimEnd;
      return this;
    }
    getDynamicSamplingContext() {
      if (this._frozenDynamicSamplingContext) {
        return this._frozenDynamicSamplingContext;
      }
      const hub = this._hub || getCurrentHub();
      const client = hub && hub.getClient();
      if (!client)
        return {};
      const { environment, release } = client.getOptions() || {};
      const { publicKey: public_key } = client.getDsn() || {};
      const maybeSampleRate = this.metadata.sampleRate;
      const sample_rate = maybeSampleRate !== void 0 ? maybeSampleRate.toString() : void 0;
      const scope = hub.getScope();
      const { segment: user_segment } = scope && scope.getUser() || {};
      const source = this.metadata.source;
      const transaction = source && source !== "url" ? this.name : void 0;
      const dsc = dropUndefinedKeys({
        environment,
        release,
        transaction,
        user_segment,
        public_key,
        trace_id: this.traceId,
        sample_rate
      });
      return dsc;
    }
  };

  // node_modules/@sentry/tracing/esm/idletransaction.js
  var DEFAULT_IDLE_TIMEOUT = 1e3;
  var DEFAULT_FINAL_TIMEOUT = 3e4;
  var DEFAULT_HEARTBEAT_INTERVAL = 5e3;
  var IdleTransactionSpanRecorder = class extends SpanRecorder {
    constructor(_pushActivity, _popActivity, transactionSpanId, maxlen) {
      super(maxlen);
      this._pushActivity = _pushActivity;
      this._popActivity = _popActivity;
      this.transactionSpanId = transactionSpanId;
      ;
    }
    add(span) {
      if (span.spanId !== this.transactionSpanId) {
        span.finish = (endTimestamp) => {
          span.endTimestamp = typeof endTimestamp === "number" ? endTimestamp : timestampWithMs();
          this._popActivity(span.spanId);
        };
        if (span.endTimestamp === void 0) {
          this._pushActivity(span.spanId);
        }
      }
      super.add(span);
    }
  };
  var IdleTransaction = class extends Transaction {
    __init() {
      this.activities = {};
    }
    __init2() {
      this._heartbeatCounter = 0;
    }
    __init3() {
      this._finished = false;
    }
    __init4() {
      this._beforeFinishCallbacks = [];
    }
    constructor(transactionContext, _idleHub, _idleTimeout = DEFAULT_IDLE_TIMEOUT, _finalTimeout = DEFAULT_FINAL_TIMEOUT, _heartbeatInterval = DEFAULT_HEARTBEAT_INTERVAL, _onScope = false) {
      super(transactionContext, _idleHub);
      this._idleHub = _idleHub;
      this._idleTimeout = _idleTimeout;
      this._finalTimeout = _finalTimeout;
      this._heartbeatInterval = _heartbeatInterval;
      this._onScope = _onScope;
      IdleTransaction.prototype.__init.call(this);
      IdleTransaction.prototype.__init2.call(this);
      IdleTransaction.prototype.__init3.call(this);
      IdleTransaction.prototype.__init4.call(this);
      ;
      if (_onScope) {
        clearActiveTransaction(_idleHub);
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`);
        _idleHub.configureScope((scope) => scope.setSpan(this));
      }
      this._startIdleTimeout();
      setTimeout(() => {
        if (!this._finished) {
          this.setStatus("deadline_exceeded");
          this.finish();
        }
      }, this._finalTimeout);
    }
    finish(endTimestamp = timestampWithMs()) {
      this._finished = true;
      this.activities = {};
      if (this.spanRecorder) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] finishing IdleTransaction", new Date(endTimestamp * 1e3).toISOString(), this.op);
        for (const callback of this._beforeFinishCallbacks) {
          callback(this, endTimestamp);
        }
        this.spanRecorder.spans = this.spanRecorder.spans.filter((span) => {
          if (span.spanId === this.spanId) {
            return true;
          }
          if (!span.endTimestamp) {
            span.endTimestamp = endTimestamp;
            span.setStatus("cancelled");
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(span, void 0, 2));
          }
          const keepSpan = span.startTimestamp < endTimestamp;
          if (!keepSpan) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
              "[Tracing] discarding Span since it happened after Transaction was finished",
              JSON.stringify(span, void 0, 2)
            );
          }
          return keepSpan;
        });
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] flushing IdleTransaction");
      } else {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] No active IdleTransaction");
      }
      if (this._onScope) {
        clearActiveTransaction(this._idleHub);
      }
      return super.finish(endTimestamp);
    }
    registerBeforeFinishCallback(callback) {
      this._beforeFinishCallbacks.push(callback);
    }
    initSpanRecorder(maxlen) {
      if (!this.spanRecorder) {
        const pushActivity = (id) => {
          if (this._finished) {
            return;
          }
          this._pushActivity(id);
        };
        const popActivity = (id) => {
          if (this._finished) {
            return;
          }
          this._popActivity(id);
        };
        this.spanRecorder = new IdleTransactionSpanRecorder(pushActivity, popActivity, this.spanId, maxlen);
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("Starting heartbeat");
        this._pingHeartbeat();
      }
      this.spanRecorder.add(this);
    }
    _cancelIdleTimeout() {
      if (this._idleTimeoutID) {
        clearTimeout(this._idleTimeoutID);
        this._idleTimeoutID = void 0;
      }
    }
    _startIdleTimeout(endTimestamp) {
      this._cancelIdleTimeout();
      this._idleTimeoutID = setTimeout(() => {
        if (!this._finished && Object.keys(this.activities).length === 0) {
          this.finish(endTimestamp);
        }
      }, this._idleTimeout);
    }
    _pushActivity(spanId) {
      this._cancelIdleTimeout();
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] pushActivity: ${spanId}`);
      this.activities[spanId] = true;
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
    }
    _popActivity(spanId) {
      if (this.activities[spanId]) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] popActivity ${spanId}`);
        delete this.activities[spanId];
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
      }
      if (Object.keys(this.activities).length === 0) {
        const endTimestamp = timestampWithMs() + this._idleTimeout / 1e3;
        this._startIdleTimeout(endTimestamp);
      }
    }
    _beat() {
      if (this._finished) {
        return;
      }
      const heartbeatString = Object.keys(this.activities).join("");
      if (heartbeatString === this._prevHeartbeatString) {
        this._heartbeatCounter++;
      } else {
        this._heartbeatCounter = 1;
      }
      this._prevHeartbeatString = heartbeatString;
      if (this._heartbeatCounter >= 3) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] Transaction finished because of no change for 3 heart beats");
        this.setStatus("deadline_exceeded");
        this.finish();
      } else {
        this._pingHeartbeat();
      }
    }
    _pingHeartbeat() {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`);
      setTimeout(() => {
        this._beat();
      }, this._heartbeatInterval);
    }
  };
  function clearActiveTransaction(hub) {
    const scope = hub.getScope();
    if (scope) {
      const transaction = scope.getTransaction();
      if (transaction) {
        scope.setSpan(void 0);
      }
    }
  }

  // node_modules/@sentry/tracing/esm/hubextensions.js
  function traceHeaders() {
    const scope = this.getScope();
    if (scope) {
      const span = scope.getSpan();
      if (span) {
        return {
          "sentry-trace": span.toTraceparent()
        };
      }
    }
    return {};
  }
  function sample(transaction, options, samplingContext) {
    if (!hasTracingEnabled(options)) {
      transaction.sampled = false;
      return transaction;
    }
    if (transaction.sampled !== void 0) {
      transaction.setMetadata({
        sampleRate: Number(transaction.sampled)
      });
      return transaction;
    }
    let sampleRate;
    if (typeof options.tracesSampler === "function") {
      sampleRate = options.tracesSampler(samplingContext);
      transaction.setMetadata({
        sampleRate: Number(sampleRate)
      });
    } else if (samplingContext.parentSampled !== void 0) {
      sampleRate = samplingContext.parentSampled;
    } else {
      sampleRate = options.tracesSampleRate;
      transaction.setMetadata({
        sampleRate: Number(sampleRate)
      });
    }
    if (!isValidSampleRate(sampleRate)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("[Tracing] Discarding transaction because of invalid sample rate.");
      transaction.sampled = false;
      return transaction;
    }
    if (!sampleRate) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
        `[Tracing] Discarding transaction because ${typeof options.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`
      );
      transaction.sampled = false;
      return transaction;
    }
    transaction.sampled = Math.random() < sampleRate;
    if (!transaction.sampled) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
        `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
          sampleRate
        )})`
      );
      return transaction;
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] starting ${transaction.op} transaction - ${transaction.name}`);
    return transaction;
  }
  function isValidSampleRate(rate) {
    if (isNaN2(rate) || !(typeof rate === "number" || typeof rate === "boolean")) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
          rate
        )} of type ${JSON.stringify(typeof rate)}.`
      );
      return false;
    }
    if (rate < 0 || rate > 1) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${rate}.`);
      return false;
    }
    return true;
  }
  function _startTransaction(transactionContext, customSamplingContext) {
    const client = this.getClient();
    const options = client && client.getOptions() || {};
    const configInstrumenter = options.instrumenter || "sentry";
    const transactionInstrumenter = transactionContext.instrumenter || "sentry";
    if (configInstrumenter !== transactionInstrumenter) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(
        `A transaction was started with instrumenter=\`${transactionInstrumenter}\`, but the SDK is configured with the \`${configInstrumenter}\` instrumenter.
The transaction will not be sampled. Please use the ${configInstrumenter} instrumentation to start transactions.`
      );
      transactionContext.sampled = false;
    }
    let transaction = new Transaction(transactionContext, this);
    transaction = sample(transaction, options, {
      parentSampled: transactionContext.parentSampled,
      transactionContext,
      ...customSamplingContext
    });
    if (transaction.sampled) {
      transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
    }
    return transaction;
  }
  function startIdleTransaction(hub, transactionContext, idleTimeout, finalTimeout, onScope, customSamplingContext, heartbeatInterval) {
    const client = hub.getClient();
    const options = client && client.getOptions() || {};
    let transaction = new IdleTransaction(transactionContext, hub, idleTimeout, finalTimeout, heartbeatInterval, onScope);
    transaction = sample(transaction, options, {
      parentSampled: transactionContext.parentSampled,
      transactionContext,
      ...customSamplingContext
    });
    if (transaction.sampled) {
      transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
    }
    return transaction;
  }
  function _addTracingExtensions() {
    const carrier = getMainCarrier();
    if (!carrier.__SENTRY__) {
      return;
    }
    carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
    if (!carrier.__SENTRY__.extensions.startTransaction) {
      carrier.__SENTRY__.extensions.startTransaction = _startTransaction;
    }
    if (!carrier.__SENTRY__.extensions.traceHeaders) {
      carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
    }
  }
  function _autoloadDatabaseIntegrations() {
    const carrier = getMainCarrier();
    if (!carrier.__SENTRY__) {
      return;
    }
    const packageToIntegrationMapping = {
      mongodb() {
        const integration = dynamicRequire(module, "./integrations/node/mongo");
        return new integration.Mongo();
      },
      mongoose() {
        const integration = dynamicRequire(module, "./integrations/node/mongo");
        return new integration.Mongo({ mongoose: true });
      },
      mysql() {
        const integration = dynamicRequire(module, "./integrations/node/mysql");
        return new integration.Mysql();
      },
      pg() {
        const integration = dynamicRequire(module, "./integrations/node/postgres");
        return new integration.Postgres();
      }
    };
    const mappedPackages = Object.keys(packageToIntegrationMapping).filter((moduleName) => !!loadModule(moduleName)).map((pkg) => {
      try {
        return packageToIntegrationMapping[pkg]();
      } catch (e8) {
        return void 0;
      }
    }).filter((p4) => p4);
    if (mappedPackages.length > 0) {
      carrier.__SENTRY__.integrations = [...carrier.__SENTRY__.integrations || [], ...mappedPackages];
    }
  }
  function addExtensionMethods() {
    _addTracingExtensions();
    if (isNodeEnv()) {
      _autoloadDatabaseIntegrations();
    }
    registerErrorInstrumentation();
  }

  // node_modules/@sentry/tracing/esm/browser/types.js
  var WINDOW6 = GLOBAL_OBJ;

  // node_modules/@sentry/tracing/esm/browser/backgroundtab.js
  function registerBackgroundTabDetection() {
    if (WINDOW6 && WINDOW6.document) {
      WINDOW6.document.addEventListener("visibilitychange", () => {
        const activeTransaction = getActiveTransaction();
        if (WINDOW6.document.hidden && activeTransaction) {
          const statusType = "cancelled";
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
            `[Tracing] Transaction: ${statusType} -> since tab moved to the background, op: ${activeTransaction.op}`
          );
          if (!activeTransaction.status) {
            activeTransaction.setStatus(statusType);
          }
          activeTransaction.setTag("visibilitychange", "document.hidden");
          activeTransaction.finish();
        }
      });
    } else {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("[Tracing] Could not set up background tab detection due to lack of global document");
    }
  }

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/bindReporter.js
  var bindReporter = (callback, metric, reportAllChanges) => {
    let prevValue;
    let delta;
    return (forceReport) => {
      if (metric.value >= 0) {
        if (forceReport || reportAllChanges) {
          delta = metric.value - (prevValue || 0);
          if (delta || prevValue === void 0) {
            prevValue = metric.value;
            metric.delta = delta;
            callback(metric);
          }
        }
      }
    };
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/generateUniqueID.js
  var generateUniqueID = () => {
    return `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getNavigationEntry.js
  var getNavigationEntryFromPerformanceTiming = () => {
    const timing = WINDOW6.performance.timing;
    const type = WINDOW6.performance.navigation.type;
    const navigationEntry = {
      entryType: "navigation",
      startTime: 0,
      type: type == 2 ? "back_forward" : type === 1 ? "reload" : "navigate"
    };
    for (const key in timing) {
      if (key !== "navigationStart" && key !== "toJSON") {
        navigationEntry[key] = Math.max(timing[key] - timing.navigationStart, 0);
      }
    }
    return navigationEntry;
  };
  var getNavigationEntry = () => {
    if (WINDOW6.__WEB_VITALS_POLYFILL__) {
      return WINDOW6.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || getNavigationEntryFromPerformanceTiming());
    } else {
      return WINDOW6.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    }
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getActivationStart.js
  var getActivationStart = () => {
    const navEntry = getNavigationEntry();
    return navEntry && navEntry.activationStart || 0;
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/initMetric.js
  var initMetric = (name, value) => {
    const navEntry = getNavigationEntry();
    let navigationType = "navigate";
    if (navEntry) {
      if (WINDOW6.document.prerendering || getActivationStart() > 0) {
        navigationType = "prerender";
      } else {
        navigationType = navEntry.type.replace(/_/g, "-");
      }
    }
    return {
      name,
      value: typeof value === "undefined" ? -1 : value,
      rating: "good",
      delta: 0,
      entries: [],
      id: generateUniqueID(),
      navigationType
    };
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js
  var observe = (type, callback, opts) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(type)) {
        const po = new PerformanceObserver((list) => {
          callback(list.getEntries());
        });
        po.observe(
          Object.assign(
            {
              type,
              buffered: true
            },
            opts || {}
          )
        );
        return po;
      }
    } catch (e8) {
    }
    return;
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js
  var onHidden = (cb, once) => {
    const onHiddenOrPageHide = (event) => {
      if (event.type === "pagehide" || WINDOW6.document.visibilityState === "hidden") {
        cb(event);
        if (once) {
          removeEventListener("visibilitychange", onHiddenOrPageHide, true);
          removeEventListener("pagehide", onHiddenOrPageHide, true);
        }
      }
    };
    addEventListener("visibilitychange", onHiddenOrPageHide, true);
    addEventListener("pagehide", onHiddenOrPageHide, true);
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/getCLS.js
  var onCLS = (onReport) => {
    const metric = initMetric("CLS", 0);
    let report;
    let sessionValue = 0;
    let sessionEntries = [];
    const handleEntries = (entries) => {
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
          if (sessionValue && sessionEntries.length !== 0 && entry.startTime - lastSessionEntry.startTime < 1e3 && entry.startTime - firstSessionEntry.startTime < 5e3) {
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }
          if (sessionValue > metric.value) {
            metric.value = sessionValue;
            metric.entries = sessionEntries;
            if (report) {
              report();
            }
          }
        }
      });
    };
    const po = observe("layout-shift", handleEntries);
    if (po) {
      report = bindReporter(onReport, metric);
      onHidden(() => {
        handleEntries(po.takeRecords());
        report(true);
      });
    }
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js
  var firstHiddenTime = -1;
  var initHiddenTime = () => {
    return WINDOW6.document.visibilityState === "hidden" && !WINDOW6.document.prerendering ? 0 : Infinity;
  };
  var trackChanges = () => {
    onHidden(({ timeStamp }) => {
      firstHiddenTime = timeStamp;
    }, true);
  };
  var getVisibilityWatcher = () => {
    if (firstHiddenTime < 0) {
      firstHiddenTime = initHiddenTime();
      trackChanges();
    }
    return {
      get firstHiddenTime() {
        return firstHiddenTime;
      }
    };
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/getFID.js
  var onFID = (onReport) => {
    const visibilityWatcher = getVisibilityWatcher();
    const metric = initMetric("FID");
    let report;
    const handleEntry = (entry) => {
      if (entry.startTime < visibilityWatcher.firstHiddenTime) {
        metric.value = entry.processingStart - entry.startTime;
        metric.entries.push(entry);
        report(true);
      }
    };
    const handleEntries = (entries) => {
      entries.forEach(handleEntry);
    };
    const po = observe("first-input", handleEntries);
    report = bindReporter(onReport, metric);
    if (po) {
      onHidden(() => {
        handleEntries(po.takeRecords());
        po.disconnect();
      }, true);
    }
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/getLCP.js
  var reportedMetricIDs = {};
  var onLCP = (onReport) => {
    const visibilityWatcher = getVisibilityWatcher();
    const metric = initMetric("LCP");
    let report;
    const handleEntries = (entries) => {
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        const value = Math.max(lastEntry.startTime - getActivationStart(), 0);
        if (value < visibilityWatcher.firstHiddenTime) {
          metric.value = value;
          metric.entries = [lastEntry];
          report();
        }
      }
    };
    const po = observe("largest-contentful-paint", handleEntries);
    if (po) {
      report = bindReporter(onReport, metric);
      const stopListening = () => {
        if (!reportedMetricIDs[metric.id]) {
          handleEntries(po.takeRecords());
          po.disconnect();
          reportedMetricIDs[metric.id] = true;
          report(true);
        }
      };
      ["keydown", "click"].forEach((type) => {
        addEventListener(type, stopListening, { once: true, capture: true });
      });
      onHidden(stopListening, true);
    }
  };

  // node_modules/@sentry/tracing/esm/browser/metrics/utils.js
  function isMeasurementValue(value) {
    return typeof value === "number" && isFinite(value);
  }
  function _startChild(transaction, { startTimestamp, ...ctx }) {
    if (startTimestamp && transaction.startTimestamp > startTimestamp) {
      transaction.startTimestamp = startTimestamp;
    }
    return transaction.startChild({
      startTimestamp,
      ...ctx
    });
  }

  // node_modules/@sentry/tracing/esm/browser/metrics/index.js
  function getBrowserPerformanceAPI() {
    return WINDOW6 && WINDOW6.addEventListener && WINDOW6.performance;
  }
  var _performanceCursor = 0;
  var _measurements = {};
  var _lcpEntry;
  var _clsEntry;
  function startTrackingWebVitals() {
    const performance2 = getBrowserPerformanceAPI();
    if (performance2 && browserPerformanceTimeOrigin) {
      if (performance2.mark) {
        WINDOW6.performance.mark("sentry-tracing-init");
      }
      _trackCLS();
      _trackLCP();
      _trackFID();
    }
  }
  function startTrackingLongTasks() {
    const entryHandler = (entries) => {
      for (const entry of entries) {
        const transaction = getActiveTransaction();
        if (!transaction) {
          return;
        }
        const startTime = msToSec(browserPerformanceTimeOrigin + entry.startTime);
        const duration = msToSec(entry.duration);
        transaction.startChild({
          description: "Main UI thread blocked",
          op: "ui.long-task",
          startTimestamp: startTime,
          endTimestamp: startTime + duration
        });
      }
    };
    observe("longtask", entryHandler);
  }
  function _trackCLS() {
    onCLS((metric) => {
      const entry = metric.entries.pop();
      if (!entry) {
        return;
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding CLS");
      _measurements["cls"] = { value: metric.value, unit: "" };
      _clsEntry = entry;
    });
  }
  function _trackLCP() {
    onLCP((metric) => {
      const entry = metric.entries.pop();
      if (!entry) {
        return;
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding LCP");
      _measurements["lcp"] = { value: metric.value, unit: "millisecond" };
      _lcpEntry = entry;
    });
  }
  function _trackFID() {
    onFID((metric) => {
      const entry = metric.entries.pop();
      if (!entry) {
        return;
      }
      const timeOrigin = msToSec(browserPerformanceTimeOrigin);
      const startTime = msToSec(entry.startTime);
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding FID");
      _measurements["fid"] = { value: metric.value, unit: "millisecond" };
      _measurements["mark.fid"] = { value: timeOrigin + startTime, unit: "second" };
    });
  }
  function addPerformanceEntries(transaction) {
    const performance2 = getBrowserPerformanceAPI();
    if (!performance2 || !WINDOW6.performance.getEntries || !browserPerformanceTimeOrigin) {
      return;
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] Adding & adjusting spans using Performance API");
    const timeOrigin = msToSec(browserPerformanceTimeOrigin);
    const performanceEntries = performance2.getEntries();
    let responseStartTimestamp;
    let requestStartTimestamp;
    performanceEntries.slice(_performanceCursor).forEach((entry) => {
      const startTime = msToSec(entry.startTime);
      const duration = msToSec(entry.duration);
      if (transaction.op === "navigation" && timeOrigin + startTime < transaction.startTimestamp) {
        return;
      }
      switch (entry.entryType) {
        case "navigation": {
          _addNavigationSpans(transaction, entry, timeOrigin);
          responseStartTimestamp = timeOrigin + msToSec(entry.responseStart);
          requestStartTimestamp = timeOrigin + msToSec(entry.requestStart);
          break;
        }
        case "mark":
        case "paint":
        case "measure": {
          _addMeasureSpans(transaction, entry, startTime, duration, timeOrigin);
          const firstHidden = getVisibilityWatcher();
          const shouldRecord = entry.startTime < firstHidden.firstHiddenTime;
          if (entry.name === "first-paint" && shouldRecord) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding FP");
            _measurements["fp"] = { value: entry.startTime, unit: "millisecond" };
          }
          if (entry.name === "first-contentful-paint" && shouldRecord) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding FCP");
            _measurements["fcp"] = { value: entry.startTime, unit: "millisecond" };
          }
          break;
        }
        case "resource": {
          const resourceName = entry.name.replace(WINDOW6.location.origin, "");
          _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin);
          break;
        }
        default:
      }
    });
    _performanceCursor = Math.max(performanceEntries.length - 1, 0);
    _trackNavigator(transaction);
    if (transaction.op === "pageload") {
      if (typeof responseStartTimestamp === "number") {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding TTFB");
        _measurements["ttfb"] = {
          value: (responseStartTimestamp - transaction.startTimestamp) * 1e3,
          unit: "millisecond"
        };
        if (typeof requestStartTimestamp === "number" && requestStartTimestamp <= responseStartTimestamp) {
          _measurements["ttfb.requestTime"] = {
            value: (responseStartTimestamp - requestStartTimestamp) * 1e3,
            unit: "millisecond"
          };
        }
      }
      ["fcp", "fp", "lcp"].forEach((name) => {
        if (!_measurements[name] || timeOrigin >= transaction.startTimestamp) {
          return;
        }
        const oldValue = _measurements[name].value;
        const measurementTimestamp = timeOrigin + msToSec(oldValue);
        const normalizedValue = Math.abs((measurementTimestamp - transaction.startTimestamp) * 1e3);
        const delta = normalizedValue - oldValue;
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Measurements] Normalized ${name} from ${oldValue} to ${normalizedValue} (${delta})`);
        _measurements[name].value = normalizedValue;
      });
      const fidMark = _measurements["mark.fid"];
      if (fidMark && _measurements["fid"]) {
        _startChild(transaction, {
          description: "first input delay",
          endTimestamp: fidMark.value + msToSec(_measurements["fid"].value),
          op: "ui.action",
          startTimestamp: fidMark.value
        });
        delete _measurements["mark.fid"];
      }
      if (!("fcp" in _measurements)) {
        delete _measurements.cls;
      }
      Object.keys(_measurements).forEach((measurementName) => {
        transaction.setMeasurement(
          measurementName,
          _measurements[measurementName].value,
          _measurements[measurementName].unit
        );
      });
      _tagMetricInfo(transaction);
    }
    _lcpEntry = void 0;
    _clsEntry = void 0;
    _measurements = {};
  }
  function _addMeasureSpans(transaction, entry, startTime, duration, timeOrigin) {
    const measureStartTimestamp = timeOrigin + startTime;
    const measureEndTimestamp = measureStartTimestamp + duration;
    _startChild(transaction, {
      description: entry.name,
      endTimestamp: measureEndTimestamp,
      op: entry.entryType,
      startTimestamp: measureStartTimestamp
    });
    return measureStartTimestamp;
  }
  function _addNavigationSpans(transaction, entry, timeOrigin) {
    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((event) => {
      _addPerformanceNavigationTiming(transaction, entry, event, timeOrigin);
    });
    _addPerformanceNavigationTiming(transaction, entry, "secureConnection", timeOrigin, "TLS/SSL", "connectEnd");
    _addPerformanceNavigationTiming(transaction, entry, "fetch", timeOrigin, "cache", "domainLookupStart");
    _addPerformanceNavigationTiming(transaction, entry, "domainLookup", timeOrigin, "DNS");
    _addRequest(transaction, entry, timeOrigin);
  }
  function _addPerformanceNavigationTiming(transaction, entry, event, timeOrigin, description, eventEnd) {
    const end = eventEnd ? entry[eventEnd] : entry[`${event}End`];
    const start = entry[`${event}Start`];
    if (!start || !end) {
      return;
    }
    _startChild(transaction, {
      op: "browser",
      description: _nullishCoalesce(description, () => event),
      startTimestamp: timeOrigin + msToSec(start),
      endTimestamp: timeOrigin + msToSec(end)
    });
  }
  function _addRequest(transaction, entry, timeOrigin) {
    _startChild(transaction, {
      op: "browser",
      description: "request",
      startTimestamp: timeOrigin + msToSec(entry.requestStart),
      endTimestamp: timeOrigin + msToSec(entry.responseEnd)
    });
    _startChild(transaction, {
      op: "browser",
      description: "response",
      startTimestamp: timeOrigin + msToSec(entry.responseStart),
      endTimestamp: timeOrigin + msToSec(entry.responseEnd)
    });
  }
  function _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin) {
    if (entry.initiatorType === "xmlhttprequest" || entry.initiatorType === "fetch") {
      return;
    }
    const data = {};
    if ("transferSize" in entry) {
      data["Transfer Size"] = entry.transferSize;
    }
    if ("encodedBodySize" in entry) {
      data["Encoded Body Size"] = entry.encodedBodySize;
    }
    if ("decodedBodySize" in entry) {
      data["Decoded Body Size"] = entry.decodedBodySize;
    }
    const startTimestamp = timeOrigin + startTime;
    const endTimestamp = startTimestamp + duration;
    _startChild(transaction, {
      description: resourceName,
      endTimestamp,
      op: entry.initiatorType ? `resource.${entry.initiatorType}` : "resource.other",
      startTimestamp,
      data
    });
  }
  function _trackNavigator(transaction) {
    const navigator2 = WINDOW6.navigator;
    if (!navigator2) {
      return;
    }
    const connection = navigator2.connection;
    if (connection) {
      if (connection.effectiveType) {
        transaction.setTag("effectiveConnectionType", connection.effectiveType);
      }
      if (connection.type) {
        transaction.setTag("connectionType", connection.type);
      }
      if (isMeasurementValue(connection.rtt)) {
        _measurements["connection.rtt"] = { value: connection.rtt, unit: "millisecond" };
      }
    }
    if (isMeasurementValue(navigator2.deviceMemory)) {
      transaction.setTag("deviceMemory", `${navigator2.deviceMemory} GB`);
    }
    if (isMeasurementValue(navigator2.hardwareConcurrency)) {
      transaction.setTag("hardwareConcurrency", String(navigator2.hardwareConcurrency));
    }
  }
  function _tagMetricInfo(transaction) {
    if (_lcpEntry) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding LCP Data");
      if (_lcpEntry.element) {
        transaction.setTag("lcp.element", htmlTreeAsString(_lcpEntry.element));
      }
      if (_lcpEntry.id) {
        transaction.setTag("lcp.id", _lcpEntry.id);
      }
      if (_lcpEntry.url) {
        transaction.setTag("lcp.url", _lcpEntry.url.trim().slice(0, 200));
      }
      transaction.setTag("lcp.size", _lcpEntry.size);
    }
    if (_clsEntry && _clsEntry.sources) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding CLS Data");
      _clsEntry.sources.forEach(
        (source, index) => transaction.setTag(`cls.source.${index + 1}`, htmlTreeAsString(source.node))
      );
    }
  }

  // node_modules/@sentry/tracing/esm/browser/request.js
  var DEFAULT_TRACE_PROPAGATION_TARGETS = ["localhost", /^\//];
  var defaultRequestInstrumentationOptions = {
    traceFetch: true,
    traceXHR: true,
    tracingOrigins: DEFAULT_TRACE_PROPAGATION_TARGETS,
    tracePropagationTargets: DEFAULT_TRACE_PROPAGATION_TARGETS
  };
  function instrumentOutgoingRequests(_options) {
    const { traceFetch, traceXHR, tracePropagationTargets, tracingOrigins, shouldCreateSpanForRequest } = {
      traceFetch: defaultRequestInstrumentationOptions.traceFetch,
      traceXHR: defaultRequestInstrumentationOptions.traceXHR,
      ..._options
    };
    const shouldCreateSpan = typeof shouldCreateSpanForRequest === "function" ? shouldCreateSpanForRequest : (_2) => true;
    const shouldAttachHeadersWithTargets = (url) => shouldAttachHeaders(url, tracePropagationTargets || tracingOrigins);
    const spans = {};
    if (traceFetch) {
      addInstrumentationHandler("fetch", (handlerData) => {
        fetchCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      });
    }
    if (traceXHR) {
      addInstrumentationHandler("xhr", (handlerData) => {
        xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      });
    }
  }
  function shouldAttachHeaders(url, tracePropagationTargets) {
    return stringMatchesSomePattern(url, tracePropagationTargets || DEFAULT_TRACE_PROPAGATION_TARGETS);
  }
  function fetchCallback(handlerData, shouldCreateSpan, shouldAttachHeaders2, spans) {
    if (!hasTracingEnabled() || !(handlerData.fetchData && shouldCreateSpan(handlerData.fetchData.url))) {
      return;
    }
    if (handlerData.endTimestamp) {
      const spanId = handlerData.fetchData.__span;
      if (!spanId)
        return;
      const span = spans[spanId];
      if (span) {
        if (handlerData.response) {
          span.setHttpStatus(handlerData.response.status);
        } else if (handlerData.error) {
          span.setStatus("internal_error");
        }
        span.finish();
        delete spans[spanId];
      }
      return;
    }
    const activeTransaction = getActiveTransaction();
    if (activeTransaction) {
      const span = activeTransaction.startChild({
        data: {
          ...handlerData.fetchData,
          type: "fetch"
        },
        description: `${handlerData.fetchData.method} ${handlerData.fetchData.url}`,
        op: "http.client"
      });
      handlerData.fetchData.__span = span.spanId;
      spans[span.spanId] = span;
      const request = handlerData.args[0];
      handlerData.args[1] = handlerData.args[1] || {};
      const options = handlerData.args[1];
      if (shouldAttachHeaders2(handlerData.fetchData.url)) {
        options.headers = addTracingHeadersToFetchRequest(
          request,
          activeTransaction.getDynamicSamplingContext(),
          span,
          options
        );
        activeTransaction.metadata.propagations++;
      }
    }
  }
  function addTracingHeadersToFetchRequest(request, dynamicSamplingContext, span, options) {
    const sentryBaggageHeader = dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext);
    const sentryTraceHeader = span.toTraceparent();
    const headers = typeof Request !== "undefined" && isInstanceOf(request, Request) ? request.headers : options.headers;
    if (!headers) {
      return { "sentry-trace": sentryTraceHeader, baggage: sentryBaggageHeader };
    } else if (typeof Headers !== "undefined" && isInstanceOf(headers, Headers)) {
      const newHeaders = new Headers(headers);
      newHeaders.append("sentry-trace", sentryTraceHeader);
      if (sentryBaggageHeader) {
        newHeaders.append(BAGGAGE_HEADER_NAME, sentryBaggageHeader);
      }
      return newHeaders;
    } else if (Array.isArray(headers)) {
      const newHeaders = [...headers, ["sentry-trace", sentryTraceHeader]];
      if (sentryBaggageHeader) {
        newHeaders.push([BAGGAGE_HEADER_NAME, sentryBaggageHeader]);
      }
      return newHeaders;
    } else {
      const existingBaggageHeader = "baggage" in headers ? headers.baggage : void 0;
      const newBaggageHeaders = [];
      if (Array.isArray(existingBaggageHeader)) {
        newBaggageHeaders.push(...existingBaggageHeader);
      } else if (existingBaggageHeader) {
        newBaggageHeaders.push(existingBaggageHeader);
      }
      if (sentryBaggageHeader) {
        newBaggageHeaders.push(sentryBaggageHeader);
      }
      return {
        ...headers,
        "sentry-trace": sentryTraceHeader,
        baggage: newBaggageHeaders.length > 0 ? newBaggageHeaders.join(",") : void 0
      };
    }
  }
  function xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeaders2, spans) {
    if (!hasTracingEnabled() || handlerData.xhr && handlerData.xhr.__sentry_own_request__ || !(handlerData.xhr && handlerData.xhr.__sentry_xhr__ && shouldCreateSpan(handlerData.xhr.__sentry_xhr__.url))) {
      return;
    }
    const xhr = handlerData.xhr.__sentry_xhr__;
    if (handlerData.endTimestamp) {
      const spanId = handlerData.xhr.__sentry_xhr_span_id__;
      if (!spanId)
        return;
      const span = spans[spanId];
      if (span) {
        span.setHttpStatus(xhr.status_code);
        span.finish();
        delete spans[spanId];
      }
      return;
    }
    const activeTransaction = getActiveTransaction();
    if (activeTransaction) {
      const span = activeTransaction.startChild({
        data: {
          ...xhr.data,
          type: "xhr",
          method: xhr.method,
          url: xhr.url
        },
        description: `${xhr.method} ${xhr.url}`,
        op: "http.client"
      });
      handlerData.xhr.__sentry_xhr_span_id__ = span.spanId;
      spans[handlerData.xhr.__sentry_xhr_span_id__] = span;
      if (handlerData.xhr.setRequestHeader && shouldAttachHeaders2(handlerData.xhr.__sentry_xhr__.url)) {
        try {
          handlerData.xhr.setRequestHeader("sentry-trace", span.toTraceparent());
          const dynamicSamplingContext = activeTransaction.getDynamicSamplingContext();
          const sentryBaggageHeader = dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext);
          if (sentryBaggageHeader) {
            handlerData.xhr.setRequestHeader(BAGGAGE_HEADER_NAME, sentryBaggageHeader);
          }
          activeTransaction.metadata.propagations++;
        } catch (_2) {
        }
      }
    }
  }

  // node_modules/@sentry/tracing/esm/browser/router.js
  function instrumentRoutingWithDefaults(customStartTransaction, startTransactionOnPageLoad = true, startTransactionOnLocationChange = true) {
    if (!WINDOW6 || !WINDOW6.location) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not initialize routing instrumentation due to invalid location");
      return;
    }
    let startingUrl = WINDOW6.location.href;
    let activeTransaction;
    if (startTransactionOnPageLoad) {
      activeTransaction = customStartTransaction({
        name: WINDOW6.location.pathname,
        op: "pageload",
        metadata: { source: "url" }
      });
    }
    if (startTransactionOnLocationChange) {
      addInstrumentationHandler("history", ({ to, from }) => {
        if (from === void 0 && startingUrl && startingUrl.indexOf(to) !== -1) {
          startingUrl = void 0;
          return;
        }
        if (from !== to) {
          startingUrl = void 0;
          if (activeTransaction) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Finishing current transaction with op: ${activeTransaction.op}`);
            activeTransaction.finish();
          }
          activeTransaction = customStartTransaction({
            name: WINDOW6.location.pathname,
            op: "navigation",
            metadata: { source: "url" }
          });
        }
      });
    }
  }

  // node_modules/@sentry/tracing/esm/browser/browsertracing.js
  var BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing";
  var DEFAULT_BROWSER_TRACING_OPTIONS = {
    idleTimeout: DEFAULT_IDLE_TIMEOUT,
    finalTimeout: DEFAULT_FINAL_TIMEOUT,
    heartbeatInterval: DEFAULT_HEARTBEAT_INTERVAL,
    markBackgroundTransactions: true,
    routingInstrumentation: instrumentRoutingWithDefaults,
    startTransactionOnLocationChange: true,
    startTransactionOnPageLoad: true,
    _experiments: { enableLongTask: true, enableInteractions: false },
    ...defaultRequestInstrumentationOptions
  };
  var BrowserTracing = class {
    __init() {
      this.name = BROWSER_TRACING_INTEGRATION_ID;
    }
    constructor(_options) {
      ;
      BrowserTracing.prototype.__init.call(this);
      this.options = {
        ...DEFAULT_BROWSER_TRACING_OPTIONS,
        ..._options
      };
      if (_options && !_options.tracePropagationTargets && _options.tracingOrigins) {
        this.options.tracePropagationTargets = _options.tracingOrigins;
      }
      startTrackingWebVitals();
      if (_optionalChain([this, "access", (_2) => _2.options, "access", (_3) => _3._experiments, "optionalAccess", (_4) => _4.enableLongTask])) {
        startTrackingLongTasks();
      }
    }
    setupOnce(_2, getCurrentHub2) {
      this._getCurrentHub = getCurrentHub2;
      const {
        routingInstrumentation: instrumentRouting,
        startTransactionOnLocationChange,
        startTransactionOnPageLoad,
        markBackgroundTransactions,
        traceFetch,
        traceXHR,
        tracePropagationTargets,
        shouldCreateSpanForRequest,
        _experiments
      } = this.options;
      instrumentRouting(
        (context) => this._createRouteTransaction(context),
        startTransactionOnPageLoad,
        startTransactionOnLocationChange
      );
      if (markBackgroundTransactions) {
        registerBackgroundTabDetection();
      }
      if (_optionalChain([_experiments, "optionalAccess", (_5) => _5.enableInteractions])) {
        this._registerInteractionListener();
      }
      instrumentOutgoingRequests({
        traceFetch,
        traceXHR,
        tracePropagationTargets,
        shouldCreateSpanForRequest
      });
    }
    _createRouteTransaction(context) {
      if (!this._getCurrentHub) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Did not create ${context.op} transaction because _getCurrentHub is invalid.`);
        return void 0;
      }
      const { beforeNavigate, idleTimeout, finalTimeout, heartbeatInterval } = this.options;
      const isPageloadTransaction = context.op === "pageload";
      const sentryTraceMetaTagValue = isPageloadTransaction ? getMetaContent("sentry-trace") : null;
      const baggageMetaTagValue = isPageloadTransaction ? getMetaContent("baggage") : null;
      const traceParentData = sentryTraceMetaTagValue ? extractTraceparentData(sentryTraceMetaTagValue) : void 0;
      const dynamicSamplingContext = baggageMetaTagValue ? baggageHeaderToDynamicSamplingContext(baggageMetaTagValue) : void 0;
      const expandedContext = {
        ...context,
        ...traceParentData,
        metadata: {
          ...context.metadata,
          dynamicSamplingContext: traceParentData && !dynamicSamplingContext ? {} : dynamicSamplingContext
        },
        trimEnd: true
      };
      const modifiedContext = typeof beforeNavigate === "function" ? beforeNavigate(expandedContext) : expandedContext;
      const finalContext = modifiedContext === void 0 ? { ...expandedContext, sampled: false } : modifiedContext;
      finalContext.metadata = finalContext.name !== expandedContext.name ? { ...finalContext.metadata, source: "custom" } : finalContext.metadata;
      this._latestRouteName = finalContext.name;
      this._latestRouteSource = _optionalChain([finalContext, "access", (_6) => _6.metadata, "optionalAccess", (_7) => _7.source]);
      if (finalContext.sampled === false) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Will not send ${finalContext.op} transaction because of beforeNavigate.`);
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Starting ${finalContext.op} transaction on scope`);
      const hub = this._getCurrentHub();
      const { location: location2 } = WINDOW6;
      const idleTransaction = startIdleTransaction(
        hub,
        finalContext,
        idleTimeout,
        finalTimeout,
        true,
        { location: location2 },
        heartbeatInterval
      );
      idleTransaction.registerBeforeFinishCallback((transaction) => {
        addPerformanceEntries(transaction);
      });
      return idleTransaction;
    }
    _registerInteractionListener() {
      let inflightInteractionTransaction;
      const registerInteractionTransaction = () => {
        const { idleTimeout, finalTimeout, heartbeatInterval } = this.options;
        const op = "ui.action.click";
        if (inflightInteractionTransaction) {
          inflightInteractionTransaction.finish();
          inflightInteractionTransaction = void 0;
        }
        if (!this._getCurrentHub) {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Did not create ${op} transaction because _getCurrentHub is invalid.`);
          return void 0;
        }
        if (!this._latestRouteName) {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Did not create ${op} transaction because _latestRouteName is missing.`);
          return void 0;
        }
        const hub = this._getCurrentHub();
        const { location: location2 } = WINDOW6;
        const context = {
          name: this._latestRouteName,
          op,
          trimEnd: true,
          metadata: {
            source: _nullishCoalesce(this._latestRouteSource, () => "url")
          }
        };
        inflightInteractionTransaction = startIdleTransaction(
          hub,
          context,
          idleTimeout,
          finalTimeout,
          true,
          { location: location2 },
          heartbeatInterval
        );
      };
      ["click"].forEach((type) => {
        addEventListener(type, registerInteractionTransaction, { once: false, capture: true });
      });
    }
  };
  function getMetaContent(metaName) {
    const metaTag = getDomElement(`meta[name=${metaName}]`);
    return metaTag ? metaTag.getAttribute("content") : null;
  }

  // node_modules/@sentry/tracing/esm/index.js
  if (typeof __SENTRY_TRACING__ === "undefined" || __SENTRY_TRACING__) {
    addExtensionMethods();
  }

  // src/content-script/content-script.ts
  init({
    dsn: "https://59000502bf014222a97c0b8d3ff7495e@o526305.ingest.sentry.io/4504220162719744",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 0.1,
    release: "better-previews@23.01.13",
    environment: "PROD"
  });
  var ContentScript = class {
    constructor() {
      this.floatie = new Floatie();
      this.iframeHelper = new IFrameHelper();
      this.previewr = new Previewr();
      this.unsupportedHosts = ["mail.google.com"];
    }
    start() {
      if (this.isDisabledDomain()) {
        console.warn("Better Previews is disabled on ", window.location.host);
        return;
      }
      this.floatie.startListening();
      this.previewr.init();
      this.iframeHelper.registerListeners();
    }
    stop() {
      this.floatie.stopListening();
    }
    isDisabledDomain() {
      return this.unsupportedHosts.indexOf(window.location.host) >= 0;
    }
  };
  var cs = new ContentScript();
  cs.start();
})();
//# sourceMappingURL=content-script.js.map

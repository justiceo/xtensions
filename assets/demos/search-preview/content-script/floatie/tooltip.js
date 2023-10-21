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
})();
//# sourceMappingURL=tooltip.js.map

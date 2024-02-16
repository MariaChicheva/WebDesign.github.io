"use strict";
(self.webpackChunkficbook = self.webpackChunkficbook || []).push([[87], {
    3087: (t,s,e)=>{
        e.r(s),
        e.d(s, {
            default: ()=>f
        });
        var n = e(1690)
          , i = e(2425)
          , o = e(6580);
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(t) {
                for (var s = 1; s < arguments.length; s++) {
                    var e = arguments[s];
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var a = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onBegin: function(t) {},
            onComplete: function(t) {},
            preStringTyped: function(t, s) {},
            onStringTyped: function(t, s) {},
            onLastStringBackspaced: function(t) {},
            onTypingPaused: function(t, s) {},
            onTypingResumed: function(t, s) {},
            onReset: function(t) {},
            onStop: function(t, s) {},
            onStart: function(t, s) {},
            onDestroy: function(t) {}
        }
          , u = new (function() {
            function t() {}
            var s = t.prototype;
            return s.load = function(t, s, e) {
                if (t.el = "string" == typeof e ? document.querySelector(e) : e,
                t.options = r({}, a, s),
                t.isInput = "input" === t.el.tagName.toLowerCase(),
                t.attr = t.options.attr,
                t.bindInputFocusEvents = t.options.bindInputFocusEvents,
                t.showCursor = !t.isInput && t.options.showCursor,
                t.cursorChar = t.options.cursorChar,
                t.cursorBlinking = !0,
                t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent,
                t.contentType = t.options.contentType,
                t.typeSpeed = t.options.typeSpeed,
                t.startDelay = t.options.startDelay,
                t.backSpeed = t.options.backSpeed,
                t.smartBackspace = t.options.smartBackspace,
                t.backDelay = t.options.backDelay,
                t.fadeOut = t.options.fadeOut,
                t.fadeOutClass = t.options.fadeOutClass,
                t.fadeOutDelay = t.options.fadeOutDelay,
                t.isPaused = !1,
                t.strings = t.options.strings.map(function(t) {
                    return t.trim()
                }),
                t.stringsElement = "string" == typeof t.options.stringsElement ? document.querySelector(t.options.stringsElement) : t.options.stringsElement,
                t.stringsElement) {
                    t.strings = [],
                    t.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
                    var n = Array.prototype.slice.apply(t.stringsElement.children)
                      , i = n.length;
                    if (i)
                        for (var o = 0; o < i; o += 1)
                            t.strings.push(n[o].innerHTML.trim())
                }
                for (var u in t.strPos = 0,
                t.arrayPos = 0,
                t.stopNum = 0,
                t.loop = t.options.loop,
                t.loopCount = t.options.loopCount,
                t.curLoop = 0,
                t.shuffle = t.options.shuffle,
                t.sequence = [],
                t.pause = {
                    status: !1,
                    typewrite: !0,
                    curString: "",
                    curStrPos: 0
                },
                t.typingComplete = !1,
                t.strings)
                    t.sequence[u] = u;
                t.currentElContent = this.getCurrentElContent(t),
                t.autoInsertCss = t.options.autoInsertCss,
                this.appendAnimationCss(t)
            }
            ,
            s.getCurrentElContent = function(t) {
                return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
            }
            ,
            s.appendAnimationCss = function(t) {
                var s = "data-typed-js-css";
                if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + s + "]")) {
                    var e = document.createElement("style");
                    e.type = "text/css",
                    e.setAttribute(s, !0);
                    var n = "";
                    t.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                    t.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                    0 !== e.length && (e.innerHTML = n,
                    document.body.appendChild(e))
                }
            }
            ,
            t
        }())
          , p = new (function() {
            function t() {}
            var s = t.prototype;
            return s.typeHtmlChars = function(t, s, e) {
                if ("html" !== e.contentType)
                    return s;
                var n, i = t.substr(s).charAt(0);
                if ("<" === i || "&" === i) {
                    for (n = "<" === i ? ">" : ";"; t.substr(s + 1).charAt(0) !== n && !(1 + ++s > t.length); )
                        ;
                    s++
                }
                return s
            }
            ,
            s.backSpaceHtmlChars = function(t, s, e) {
                if ("html" !== e.contentType)
                    return s;
                var n, i = t.substr(s).charAt(0);
                if (">" === i || ";" === i) {
                    for (n = ">" === i ? "<" : "&"; t.substr(s - 1).charAt(0) !== n && !(--s < 0); )
                        ;
                    s--
                }
                return s
            }
            ,
            t
        }())
          , c = function() {
            function t(t, s) {
                u.load(this, s, t),
                this.begin()
            }
            var s = t.prototype;
            return s.toggle = function() {
                this.pause.status ? this.start() : this.stop()
            }
            ,
            s.stop = function() {
                this.typingComplete || this.pause.status || (this.toggleBlinking(!0),
                this.pause.status = !0,
                this.options.onStop(this.arrayPos, this))
            }
            ,
            s.start = function() {
                this.typingComplete || this.pause.status && (this.pause.status = !1,
                this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos),
                this.options.onStart(this.arrayPos, this))
            }
            ,
            s.destroy = function() {
                this.reset(!1),
                this.options.onDestroy(this)
            }
            ,
            s.reset = function(t) {
                void 0 === t && (t = !0),
                clearInterval(this.timeout),
                this.replaceText(""),
                this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor),
                this.cursor = null),
                this.strPos = 0,
                this.arrayPos = 0,
                this.curLoop = 0,
                t && (this.insertCursor(),
                this.options.onReset(this),
                this.begin())
            }
            ,
            s.begin = function() {
                var t = this;
                this.options.onBegin(this),
                this.typingComplete = !1,
                this.shuffleStringsIfNeeded(this),
                this.insertCursor(),
                this.bindInputFocusEvents && this.bindFocusEvents(),
                this.timeout = setTimeout(function() {
                    t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                }, this.startDelay)
            }
            ,
            s.typewrite = function(t, s) {
                var e = this;
                this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass),
                this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                var n = this.humanizer(this.typeSpeed)
                  , i = 1;
                !0 !== this.pause.status ? this.timeout = setTimeout(function() {
                    s = p.typeHtmlChars(t, s, e);
                    var n, o = 0, r = t.substr(s);
                    if ("^" === r.charAt(0) && /^\^\d+/.test(r) && (n = 1 + (r = /\d+/.exec(r)[0]).length,
                    o = parseInt(r),
                    e.temporaryPause = !0,
                    e.options.onTypingPaused(e.arrayPos, e),
                    t = t.substring(0, s) + t.substring(s + n),
                    e.toggleBlinking(!0)),
                    "`" === r.charAt(0)) {
                        for (; "`" !== t.substr(s + i).charAt(0) && !(s + ++i > t.length); )
                            ;
                        var a = t.substring(0, s)
                          , u = t.substring(a.length + 1, s + i);
                        t = a + u + t.substring(s + i + 1),
                        i--
                    }
                    e.timeout = setTimeout(function() {
                        e.toggleBlinking(!1),
                        s >= t.length ? e.doneTyping(t, s) : e.keepTyping(t, s, i),
                        e.temporaryPause && (e.temporaryPause = !1,
                        e.options.onTypingResumed(e.arrayPos, e))
                    }, o)
                }, n) : this.setPauseStatus(t, s, !0)
            }
            ,
            s.keepTyping = function(t, s, e) {
                0 === s && (this.toggleBlinking(!1),
                this.options.preStringTyped(this.arrayPos, this));
                var n = t.substr(0, s += e);
                this.replaceText(n),
                this.typewrite(t, s)
            }
            ,
            s.doneTyping = function(t, s) {
                var e = this;
                this.options.onStringTyped(this.arrayPos, this),
                this.toggleBlinking(!0),
                this.arrayPos === this.strings.length - 1 && (this.complete(),
                !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                    e.backspace(t, s)
                }, this.backDelay))
            }
            ,
            s.backspace = function(t, s) {
                var e = this;
                if (!0 !== this.pause.status) {
                    if (this.fadeOut)
                        return this.initFadeOut();
                    this.toggleBlinking(!1);
                    var n = this.humanizer(this.backSpeed);
                    this.timeout = setTimeout(function() {
                        s = p.backSpaceHtmlChars(t, s, e);
                        var n = t.substr(0, s);
                        if (e.replaceText(n),
                        e.smartBackspace) {
                            var i = e.strings[e.arrayPos + 1];
                            e.stopNum = i && n === i.substr(0, s) ? s : 0
                        }
                        s > e.stopNum ? (s--,
                        e.backspace(t, s)) : s <= e.stopNum && (e.arrayPos++,
                        e.arrayPos === e.strings.length ? (e.arrayPos = 0,
                        e.options.onLastStringBackspaced(),
                        e.shuffleStringsIfNeeded(),
                        e.begin()) : e.typewrite(e.strings[e.sequence[e.arrayPos]], s))
                    }, n)
                } else
                    this.setPauseStatus(t, s, !1)
            }
            ,
            s.complete = function() {
                this.options.onComplete(this),
                this.loop ? this.curLoop++ : this.typingComplete = !0
            }
            ,
            s.setPauseStatus = function(t, s, e) {
                this.pause.typewrite = e,
                this.pause.curString = t,
                this.pause.curStrPos = s
            }
            ,
            s.toggleBlinking = function(t) {
                this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t,
                t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
            }
            ,
            s.humanizer = function(t) {
                return Math.round(Math.random() * t / 2) + t
            }
            ,
            s.shuffleStringsIfNeeded = function() {
                this.shuffle && (this.sequence = this.sequence.sort(function() {
                    return Math.random() - .5
                }))
            }
            ,
            s.initFadeOut = function() {
                var t = this;
                return this.el.className += " " + this.fadeOutClass,
                this.cursor && (this.cursor.className += " " + this.fadeOutClass),
                setTimeout(function() {
                    t.arrayPos++,
                    t.replaceText(""),
                    t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0),
                    t.arrayPos = 0)
                }, this.fadeOutDelay)
            }
            ,
            s.replaceText = function(t) {
                this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
            }
            ,
            s.bindFocusEvents = function() {
                var t = this;
                this.isInput && (this.el.addEventListener("focus", function(s) {
                    t.stop()
                }),
                this.el.addEventListener("blur", function(s) {
                    t.el.value && 0 !== t.el.value.length || t.start()
                }))
            }
            ,
            s.insertCursor = function() {
                this.showCursor && (this.cursor || (this.cursor = document.createElement("span"),
                this.cursor.className = "typed-cursor",
                this.cursor.setAttribute("aria-hidden", !0),
                this.cursor.innerHTML = this.cursorChar,
                this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
            }
            ,
            t
        }()
          , h = e(114);
        let l = (0,
        n.aZ)({
            components: {
                FandomDropdown: o.Z
            },
            data: ()=>({
                typed: null
            }),
            mounted() {
                let t = this.$el.querySelector("input");
                this.typed = new c(t,{
                    strings: [h.t("fandom-typed-dropdown.film"), h.t("fandom-typed-dropdown.book"), h.t("fandom-typed-dropdown.serial"), h.t("fandom-typed-dropdown.anime"), h.t("fandom-typed-dropdown.games")],
                    typeSpeed: 30,
                    backSpeed: 40,
                    backDelay: 1200,
                    bindInputFocusEvents: !1,
                    attr: "placeholder",
                    loop: !0
                }),
                this.typed.start()
            },
            unmounted() {
                this.typed.destroy()
            },
            methods: {
                onInput(t) {
                    window.location.href = `/fanfiction/${t.group_crazy_title}/${t.slug}`
                },
                yandexReachGoal() {
                    (0,
                    i.N)(i.O.SearchOnMainPage)
                }
            }
        });
        var d = e(4262);
        let y = (0,
        d.Z)(l, [["render", function(t, s, e, i, o, r) {
            let a = (0,
            n.up)("FandomDropdown");
            return (0,
            n.wg)(),
            (0,
            n.j4)(a, (0,
            n.dG)({
                class: "dropdown",
                ref: "dropdown"
            }, t.$attrs, {
                "onUpdate:modelValue": t.onInput,
                onOpen: t.yandexReachGoal
            }), null, 16, ["onUpdate:modelValue", "onOpen"])
        }
        ], ["__scopeId", "data-v-6f77def8"]])
          , f = y
    }
}]);

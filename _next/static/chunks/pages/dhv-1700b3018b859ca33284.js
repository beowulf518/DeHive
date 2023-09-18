_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [23], {
        12: function(e, t, n) {
            n("OAIh"), e.exports = n("c6kV")
        },
        "2mql": function(e, t, n) {
            "use strict";
            var i = n("TOwV"),
                r = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                o = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                s = {};

            function c(e) {
                return i.isMemo(e) ? o : s[e.$$typeof] || r
            }
            s[i.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, s[i.Memo] = o;
            var l = Object.defineProperty,
                u = Object.getOwnPropertyNames,
                d = Object.getOwnPropertySymbols,
                p = Object.getOwnPropertyDescriptor,
                f = Object.getPrototypeOf,
                v = Object.prototype;
            e.exports = function e(t, n, i) {
                if ("string" !== typeof n) {
                    if (v) {
                        var r = f(n);
                        r && r !== v && e(t, r, i)
                    }
                    var o = u(n);
                    d && (o = o.concat(d(n)));
                    for (var s = c(t), b = c(n), h = 0; h < o.length; ++h) {
                        var m = o[h];
                        if (!a[m] && (!i || !i[m]) && (!b || !b[m]) && (!s || !s[m])) {
                            var y = p(n, m);
                            try {
                                l(t, m, y)
                            } catch (j) {}
                        }
                    }
                }
                return t
            }
        },
        "4aRL": function(e, t, n) {
            e.exports = {
                green: "dhv_green__4X12D",
                head: "dhv_head__3lmDG",
                head__row: "dhv_head__row__1w_iU",
                items: "dhv_items__1Zf2b",
                item: "dhv_item__2eu08",
                description: "dhv_description__1T6mY",
                image: "dhv_image__wxdFd",
                head__btn: "dhv_head__btn__-Mm4M",
                utility: "dhv_utility__32Aqf",
                utility__row: "dhv_utility__row__1c7xt",
                utility__row__text: "dhv_utility__row__text__2XNMA",
                tokenomics: "dhv_tokenomics__3aLk-",
                tokenomics__row: "dhv_tokenomics__row__2SMWU",
                tabs: "dhv_tabs__97iSH",
                tab: "dhv_tab__OK5-N",
                benefits: "dhv_benefits__3PJRw",
                benefits__row: "dhv_benefits__row__38ZPJ",
                icon: "dhv_icon__27dDn"
            }
        },
        "4vQJ": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("nKUr"),
                r = (n("93XW"), n("d1El")),
                a = n.n(r),
                o = (n("Z8Mf"), n("j7zX")),
                s = n.n(o),
                c = n("q1tI"),
                l = n("AQSq"),
                u = n("F3zV"),
                d = n("rKCp"),
                p = n("RqDg"),
                f = n("6iYd"),
                v = n("TlOk"),
                b = n("1ZD8"),
                h = n("0lfv"),
                m = n("4aRL"),
                y = n.n(m),
                j = n("vJKn"),
                O = n.n(j),
                g = n("rg98"),
                x = n("vDqi"),
                C = n.n(x),
                M = function() {
                    var e = Object(g.a)(O.a.mark((function e() {
                        var t, n;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, C.a.get("https://api.dehive.finance/prices/token");
                                case 2:
                                    return t = e.sent, n = t.data, e.abrupt("return", n.find((function(e) {
                                        return "DHV" === e.symbol
                                    })));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var e = Object(g.a)(O.a.mark((function e() {
                        var t, n;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, C.a.get("https://dehive.finance/api/circulating-supply");
                                case 2:
                                    return t = e.sent, n = t.data, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function(e, t) {
                    var n = new Intl.NumberFormat(e, {
                            maximumFractionDigits: 6,
                            style: "decimal"
                        }),
                        i = Math.trunc(t * Math.pow(10, 6)) / Math.pow(10, 6);
                    return n.format(i < 1e-6 ? 0 : i)
                },
                N = s.a.TabPane,
                E = function(e) {
                    var t = e.setActiveInfo;
                    return Object(v.a)(992) ? Object(i.jsx)("button", {
                        type: "button",
                        onClick: function() {
                            t(!0)
                        },
                        children: Object(i.jsx)("img", {
                            src: "/assets/images/pages/dhv/question.svg",
                            alt: "i"
                        })
                    }) : Object(i.jsx)("i", {
                        children: Object(i.jsx)(a.a, {
                            title: "Circulation supply includes DC minted and not locked across all networks. DC locked in the vesting contract is not a part of the circulation supply.",
                            children: Object(i.jsx)("img", {
                                src: "/assets/images/pages/dhv/question.svg",
                                alt: "i"
                            })
                        })
                    })
                },
                _ = function() {
                    var e = Object(d.a)(),
                        t = e.chainId,
                        n = e.account,
                        r = Object(v.a)(992),
                        a = Object(c.useState)(!1),
                        o = a[0],
                        m = a[1],
                        j = Object(b.useQuery)("TokenPrice", M),
                        O = j.data,
                        g = j.isLoading,
                        x = Object(b.useQuery)("TotalSupply", k),
                        C = x.data,
                        _ = x.isLoading,
                        S = null === C || void 0 === C ? void 0 : C.toFixed(0);
                    console.log(O);
                    return Object(i.jsxs)(i.Fragment, {
                        children: [Object(i.jsx)(f.a, {
                            title: "DC Token - DeCell"
                        }), Object(i.jsx)("div", {
                            className: y.a.head,
                            children: Object(i.jsx)("div", {
                                className: "container",
                                children: Object(i.jsxs)("div", {
                                    className: y.a.head__row,
                                    children: [Object(i.jsxs)("div", {
                                        children: [Object(i.jsx)("h1", {
                                            children: r ? "What is DeCell Index?" : "DC token"
                                        }), Object(i.jsx)("p", {
                                            children: "Get DC, the native DeCell token, and enable full functionality of the system! Buy crypto indexes, access staking and yield farming opportunities, and maximize your income with this DeCell coin."
                                        }), Object(i.jsxs)("div", {
                                            className: y.a.items,
                                            children: [Object(i.jsxs)("div", {
                                                className: y.a.item,
                                                children: [Object(i.jsx)("h4", {
                                                    children: "Price"
                                                }), Object(i.jsx)("p", {
                                                    children: g ? Object(i.jsx)(f.b, {}) : Object(i.jsxs)("span", {
                                                        children: ["$", O.priceUSD]
                                                    })
                                                })]
                                            }), Object(i.jsxs)("div", {
                                                className: y.a.item,
                                                children: [Object(i.jsx)("h4", {
                                                    children: "Market cap"
                                                }), Object(i.jsx)("p", {
                                                    children: _ ? Object(i.jsx)(f.b, {}) : Object(h.h)(Number(C) * O.priceUSD, 0)
                                                })]
                                            }), Object(i.jsxs)("div", {
                                                className: y.a.item,
                                                children: [Object(i.jsx)("div", {
                                                    children: Object(i.jsxs)("h4", {
                                                        children: ["Circulating", " ", Object(i.jsxs)("span", {
                                                            children: ["supply ", Object(i.jsx)(E, {
                                                                setActiveInfo: function() {
                                                                    m((function(e) {
                                                                        return !e
                                                                    }))
                                                                }
                                                            })]
                                                        })]
                                                    })
                                                }), Object(i.jsx)("p", {
                                                    children: _ ? Object(i.jsx)(f.b, {}) : Object(i.jsxs)("span", {
                                                        children: [w("en", Number(S)), " DC"]
                                                    })
                                                }), o && Object(i.jsx)("div", {
                                                    className: y.a.description,
                                                    children: "Circulation supply includes DC minted and not locked across all networks. DC locked in the vesting contract is not a part of the circulation supply."
                                                })]
                                            })]
                                        }), Object(i.jsx)("div", {
                                            className: y.a.head__btn,
                                            children: Object(i.jsx)("a", {
                                                className: "btn big-btn gradient",
                                                onClick: function() {
                                                    l.b({
                                                        action: "click",
                                                        category: "buttons",
                                                        label: "Buy DC button (Head slide)"
                                                    }), Object(u.a)("Buy DC button (Head slide)", "", void 0, t, n)
                                                },
                                                href: "https://app.decell.finance/dhv",
                                                rel: "noreferrer",
                                                target: "_blank",
                                                children: Object(i.jsx)("span", {
                                                    children: "Buy DC"
                                                })
                                            })
                                        })]
                                    }), Object(i.jsx)("div", {
                                        className: y.a.image,
                                        children: Object(i.jsx)("img", {
                                            src: "/assets/images/pages/dhv/page_head.webp",
                                            alt: "What is DeCell Index?"
                                        })
                                    })]
                                })
                            })
                        }), Object(i.jsx)(p.c, {}), Object(i.jsx)("section", {
                            className: y.a.benefits,
                            children: Object(i.jsx)("div", {
                                className: "container",
                                children: Object(i.jsxs)("div", {
                                    className: y.a.benefits__row,
                                    children: [Object(i.jsxs)("div", {
                                        className: y.a.items,
                                        children: [Object(i.jsxs)("div", {
                                            className: y.a.item,
                                            children: [Object(i.jsx)("div", {
                                                className: y.a.icon,
                                                children: Object(i.jsx)("img", {
                                                    src: "/assets/images/pages/dhv/benefit_icon_1.svg",
                                                    alt: "icon"
                                                })
                                            }), Object(i.jsxs)("h4", {
                                                children: ["join and leave ", Object(i.jsx)("br", {}), "crypto indexes"]
                                            })]
                                        }), Object(i.jsxs)("div", {
                                            className: y.a.item,
                                            children: [Object(i.jsx)("div", {
                                                className: y.a.icon,
                                                children: Object(i.jsx)("img", {
                                                    src: "/assets/images/pages/dhv/benefit_icon_2.svg",
                                                    alt: "icon"
                                                })
                                            }), Object(i.jsxs)("h4", {
                                                children: ["stake assets", Object(i.jsx)("br", {}), "and get yield"]
                                            })]
                                        }), Object(i.jsxs)("div", {
                                            className: y.a.item,
                                            children: [Object(i.jsx)("div", {
                                                className: y.a.icon,
                                                children: Object(i.jsx)("img", {
                                                    src: "/assets/images/pages/dhv/benefit_icon_3.svg",
                                                    alt: "icon"
                                                })
                                            }), Object(i.jsxs)("h4", {
                                                children: ["create custom ", Object(i.jsx)("br", {}), "crypto indexes"]
                                            })]
                                        }), Object(i.jsxs)("div", {
                                            className: y.a.item,
                                            children: [Object(i.jsx)("div", {
                                                className: y.a.icon,
                                                children: Object(i.jsx)("img", {
                                                    src: "/assets/images/pages/dhv/benefit_icon_4.svg",
                                                    alt: "icon"
                                                })
                                            }), Object(i.jsxs)("h4", {
                                                children: ["Get profit from ", Object(i.jsx)("br", {}), "DC liquidity pairs"]
                                            })]
                                        }), Object(i.jsxs)("div", {
                                            className: y.a.item,
                                            children: [Object(i.jsx)("div", {
                                                className: y.a.icon,
                                                children: Object(i.jsx)("img", {
                                                    src: "/assets/images/pages/dhv/benefit_icon_5.svg",
                                                    alt: "icon"
                                                })
                                            }), Object(i.jsxs)("h4", {
                                                children: ["become a part ", Object(i.jsx)("br", {}), "of decell dao"]
                                            })]
                                        }), Object(i.jsxs)("div", {
                                            className: y.a.item,
                                            children: [Object(i.jsx)("div", {
                                                className: y.a.icon,
                                                children: Object(i.jsx)("img", {
                                                    src: "/assets/images/pages/dhv/benefit_icon_6.svg",
                                                    alt: "icon"
                                                })
                                            }), Object(i.jsxs)("h4", {
                                                children: ["get full access to ", Object(i.jsx)("br", {}), "decell features"]
                                            })]
                                        })]
                                    }), Object(i.jsxs)("div", {
                                        children: [Object(i.jsxs)("h2", {
                                            children: ["Benefit from ", Object(i.jsx)("br", {}), "DC coin"]
                                        }), Object(i.jsxs)("p", {
                                            children: ["DC is a native utility token of the DeCell platform. It is necessary to join and leave crypto indexes, benefit from staking and yield farming, and create custom crypto indexes of your own.", Object(i.jsx)("br", {}), Object(i.jsx)("br", {}), "Get your DC crypto token now and optimize your returns with DeCell! Learn more about DC."]
                                        })]
                                    })]
                                })
                            })
                        }), Object(i.jsx)(p.e, {}), Object(i.jsx)("section", {
                            className: y.a.tokenomics,
                            children: Object(i.jsxs)("div", {
                                className: "container",
                                children: [Object(i.jsx)("h2", {
                                    children: "Tokenomics"
                                }), r ? Object(i.jsxs)(s.a, {
                                    defaultActiveKey: "1",
                                    className: y.a.tabs,
                                    children: [Object(i.jsx)(N, {
                                        tab: "DAO",
                                        children: Object(i.jsx)("div", {
                                            className: y.a.tab,
                                            children: Object(i.jsx)("img", {
                                                src: "/assets/images/pages/dhv/tokenomics_mobile_1.svg",
                                                alt: ""
                                            })
                                        })
                                    }, "1"), Object(i.jsx)(N, {
                                        tab: "Earn",
                                        children: Object(i.jsx)("div", {
                                            className: y.a.tab,
                                            children: Object(i.jsx)("img", {
                                                src: "/assets/images/pages/dhv/tokenomics_mobile_2.svg",
                                                alt: ""
                                            })
                                        })
                                    }, "2"), Object(i.jsx)(N, {
                                        tab: "Yield",
                                        children: Object(i.jsx)("div", {
                                            className: y.a.tab,
                                            children: Object(i.jsx)("img", {
                                                src: "/assets/images/pages/dhv/tokenomics_mobile_3.svg",
                                                alt: ""
                                            })
                                        })
                                    }, "3")]
                                }) : Object(i.jsx)("div", {
                                    className: y.a.tokenomics__row,
                                    children: Object(i.jsx)("img", {
                                        src: "/assets/images/pages/dhv/tokenomics_desktop.svg",
                                        alt: ""
                                    })
                                })]
                            })
                        }), Object(i.jsx)("section", {
                            className: y.a.utility,
                            children: Object(i.jsx)("div", {
                                className: "container",
                                children: Object(i.jsxs)("div", {
                                    className: y.a.utility__row,
                                    children: [Object(i.jsxs)("div", {
                                        className: y.a.utility__row__text,
                                        children: [Object(i.jsxs)("h2", {
                                            children: ["DC token", Object(i.jsx)("span", {
                                                children: " utility"
                                            })]
                                        }), Object(i.jsxs)("p", {
                                            children: ["DC powers the DeCell platform and provides economic incentives that will be distributed to encourage users to take part in the ecosystem. We believe that everyone should be fairly compensated for their efforts, so we regularly allocate DC rewards according to users\u2019 contribution.", Object(i.jsx)("br", {}), Object(i.jsx)("br", {}), "DC does not represent DeCell shares or any other securities. The token is a utility token that can only be used within the DeCell platform."]
                                        })]
                                    }), Object(i.jsx)("div", {
                                        children: Object(i.jsxs)("div", {
                                            className: y.a.items,
                                            children: [Object(i.jsxs)("div", {
                                                className: y.a.item,
                                                children: [Object(i.jsx)("img", {
                                                    src: "/assets/images/pages/impulses/benefit_1.svg",
                                                    alt: "icon"
                                                }), Object(i.jsxs)("h4", {
                                                    children: ["Portfolio ", Object(i.jsx)("br", {}), " diversification"]
                                                })]
                                            }), Object(i.jsxs)("div", {
                                                className: y.a.item,
                                                children: [Object(i.jsx)("img", {
                                                    src: "/assets/images/pages/impulses/benefit_2.svg",
                                                    alt: "icon"
                                                }), Object(i.jsxs)("h4", {
                                                    children: ["Low risk, ", Object(i.jsx)("br", {}), "greater stability"]
                                                })]
                                            }), Object(i.jsxs)("div", {
                                                className: y.a.item,
                                                children: [Object(i.jsx)("img", {
                                                    src: "/assets/images/pages/impulses/benefit_3.svg",
                                                    alt: "icon"
                                                }), Object(i.jsxs)("h4", {
                                                    children: ["Low fees and ", Object(i.jsx)("br", {}), " taxes"]
                                                })]
                                            }), Object(i.jsxs)("div", {
                                                className: y.a.item,
                                                children: [Object(i.jsx)("img", {
                                                    src: "/assets/images/pages/impulses/benefit_4.svg",
                                                    alt: "icon"
                                                }), Object(i.jsxs)("h4", {
                                                    children: ["Better long-term ", Object(i.jsx)("br", {}), " returns"]
                                                })]
                                            }), Object(i.jsxs)("div", {
                                                className: y.a.item,
                                                children: [Object(i.jsx)("img", {
                                                    src: "/assets/images/pages/impulses/benefit_5.svg",
                                                    alt: "icon"
                                                }), Object(i.jsxs)("h4", {
                                                    children: ["Automatic asset ", Object(i.jsx)("br", {}), " selection"]
                                                })]
                                            }), Object(i.jsxs)("div", {
                                                className: y.a.item,
                                                children: [Object(i.jsx)("img", {
                                                    src: "/assets/images/pages/impulses/benefit_6.svg",
                                                    alt: "icon"
                                                }), Object(i.jsxs)("h4", {
                                                    children: ["Perfect for passive ", Object(i.jsx)("br", {}), " investors"]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), Object(i.jsx)(p.g, {
                            text: Object(i.jsxs)(i.Fragment, {
                                children: ["Benefit from highly", Object(i.jsx)("span", {
                                    children: "secure crypto indexes "
                                })]
                            })
                        })]
                    })
                };
            t.default = _
        },
        Gytx: function(e, t) {
            e.exports = function(e, t, n, i) {
                var r = n ? n.call(i, e, t) : void 0;
                if (void 0 !== r) return !!r;
                if (e === t) return !0;
                if ("object" !== typeof e || !e || "object" !== typeof t || !t) return !1;
                var a = Object.keys(e),
                    o = Object.keys(t);
                if (a.length !== o.length) return !1;
                for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < a.length; c++) {
                    var l = a[c];
                    if (!s(l)) return !1;
                    var u = e[l],
                        d = t[l];
                    if (!1 === (r = n ? n.call(i, u, d, l) : void 0) || void 0 === r && u !== d) return !1
                }
                return !0
            }
        },
        KBXm: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = {
                icon: {
                    tag: "svg",
                    attrs: {
                        viewBox: "64 64 896 896",
                        focusable: "false"
                    },
                    children: [{
                        tag: "path",
                        attrs: {
                            d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"
                        }
                    }]
                },
                name: "ellipsis",
                theme: "outlined"
            }
        },
        SRve: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = {
                icon: {
                    tag: "svg",
                    attrs: {
                        viewBox: "64 64 896 896",
                        focusable: "false"
                    },
                    children: [{
                        tag: "defs",
                        attrs: {},
                        children: [{
                            tag: "style",
                            attrs: {}
                        }]
                    }, {
                        tag: "path",
                        attrs: {
                            d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
                        }
                    }, {
                        tag: "path",
                        attrs: {
                            d: "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"
                        }
                    }]
                },
                name: "plus",
                theme: "outlined"
            }
        },
        Z8Mf: function(e, t, n) {
            "use strict";
            n("VEUW"), n("a6CB")
        },
        a6CB: function(e, t, n) {},
        c6kV: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/dhv", function() {
                return n("4vQJ")
            }])
        },
        cCPh: function(e, t, n) {
            "use strict";
            var i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = (i = n("jiSn")) && i.__esModule ? i : {
                default: i
            };
            t.default = r, e.exports = r
        },
        fNCr: function(e, t, n) {
            "use strict";
            var i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = (i = n("tSko")) && i.__esModule ? i : {
                default: i
            };
            t.default = r, e.exports = r
        },
        j7zX: function(e, t, n) {
            "use strict";
            var i = n("284h"),
                r = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("pVnL")),
                o = r(n("lSNA")),
                s = i(n("q1tI")),
                c = i(n("k3GJ")),
                l = r(n("TSYQ")),
                u = r(n("cCPh")),
                d = r(n("fNCr")),
                p = r(n("V/uB")),
                f = r(n("m4nH")),
                v = n("vgIT"),
                b = function(e, t) {
                    var n = {};
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                    }
                    return n
                };

            function h(e) {
                var t, n, i = e.type,
                    r = e.className,
                    h = e.size,
                    m = e.onEdit,
                    y = e.hideAdd,
                    j = e.centered,
                    O = e.addIcon,
                    g = b(e, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon"]),
                    x = g.prefixCls,
                    C = s.useContext(v.ConfigContext),
                    M = C.getPrefixCls,
                    k = C.direction,
                    w = M("tabs", x);
                "editable-card" === i && (n = {
                    onEdit: function(e, t) {
                        var n = t.key,
                            i = t.event;
                        null === m || void 0 === m || m("add" === e ? i : n, e)
                    },
                    removeIcon: s.createElement(p.default, null),
                    addIcon: O || s.createElement(d.default, null),
                    showAdd: !0 !== y
                });
                var N = M();
                return (0, f.default)(!("onPrevClick" in g) && !("onNextClick" in g), "Tabs", "`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."), s.createElement(c.default, (0, a.default)({
                    direction: k,
                    moreTransitionName: "".concat(N, "-slide-up")
                }, g, {
                    className: (0, l.default)((t = {}, (0, o.default)(t, "".concat(w, "-").concat(h), h), (0, o.default)(t, "".concat(w, "-card"), ["card", "editable-card"].includes(i)), (0, o.default)(t, "".concat(w, "-editable-card"), "editable-card" === i), (0, o.default)(t, "".concat(w, "-centered"), j), t), r),
                    editable: n,
                    moreIcon: s.createElement(u.default, null),
                    prefixCls: w
                }))
            }
            h.TabPane = c.TabPane;
            var m = h;
            t.default = m
        },
        jiSn: function(e, t, n) {
            "use strict";
            var i = n("TqRt"),
                r = n("284h");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("q1tI")),
                o = i(n("KBXm")),
                s = i(n("KQxl")),
                c = function(e, t) {
                    return a.createElement(s.default, Object.assign({}, e, {
                        ref: t,
                        icon: o.default
                    }))
                };
            c.displayName = "EllipsisOutlined";
            var l = a.forwardRef(c);
            t.default = l
        },
        k3GJ: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "TabPane", (function() {
                return ot
            }));
            var i = n("wx14"),
                r = n("rePB"),
                a = n("ODXe"),
                o = n("U8pU"),
                s = n("Ff2n"),
                c = n("VTBJ"),
                l = n("q1tI"),
                u = n("TSYQ"),
                d = n.n(u),
                p = n("Zm9Q"),
                f = n("5Z9U"),
                v = n("6cGi"),
                b = n("KQm4"),
                h = n("wgJM"),
                m = n("t23M");

            function y(e) {
                var t = Object(l.useRef)(),
                    n = Object(l.useRef)(!1);
                return Object(l.useEffect)((function() {
                        return function() {
                            n.current = !0, h.a.cancel(t.current)
                        }
                    }), []),
                    function() {
                        for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                        n.current || (h.a.cancel(t.current), t.current = Object(h.a)((function() {
                            e.apply(void 0, r)
                        })))
                    }
            }
            var j = n("4IlW");

            function O(e, t) {
                var n, i = e.prefixCls,
                    a = e.id,
                    o = e.active,
                    s = e.rtl,
                    c = e.tab,
                    u = c.key,
                    p = c.tab,
                    f = c.disabled,
                    v = c.closeIcon,
                    b = e.tabBarGutter,
                    h = e.tabPosition,
                    m = e.closable,
                    y = e.renderWrapper,
                    O = e.removeAriaLabel,
                    g = e.editable,
                    x = e.onClick,
                    C = e.onRemove,
                    M = e.onFocus,
                    k = "".concat(i, "-tab");
                l.useEffect((function() {
                    return C
                }), []);
                var w = {};
                "top" === h || "bottom" === h ? w[s ? "marginLeft" : "marginRight"] = b : w.marginBottom = b;
                var N = g && !1 !== m && !f;

                function E(e) {
                    f || x(e)
                }
                var _ = l.createElement("div", {
                    key: u,
                    ref: t,
                    className: d()(k, (n = {}, Object(r.a)(n, "".concat(k, "-with-remove"), N), Object(r.a)(n, "".concat(k, "-active"), o), Object(r.a)(n, "".concat(k, "-disabled"), f), n)),
                    style: w,
                    onClick: E
                }, l.createElement("div", {
                    role: "tab",
                    "aria-selected": o,
                    id: a && "".concat(a, "-tab-").concat(u),
                    className: "".concat(k, "-btn"),
                    "aria-controls": a && "".concat(a, "-panel-").concat(u),
                    "aria-disabled": f,
                    tabIndex: f ? null : 0,
                    onClick: function(e) {
                        e.stopPropagation(), E(e)
                    },
                    onKeyDown: function(e) {
                        [j.a.SPACE, j.a.ENTER].includes(e.which) && (e.preventDefault(), E(e))
                    },
                    onFocus: M
                }, p), N && l.createElement("button", {
                    type: "button",
                    "aria-label": O || "remove",
                    tabIndex: 0,
                    className: "".concat(k, "-remove"),
                    onClick: function(e) {
                        var t;
                        e.stopPropagation(), (t = e).preventDefault(), t.stopPropagation(), g.onEdit("remove", {
                            key: u,
                            event: t
                        })
                    }
                }, v || g.removeIcon || "\xd7"));
                return y && (_ = y(_)), _
            }
            var g = l.forwardRef(O),
                x = {
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                };
            var C = {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                right: 0
            };
            var M = n("1OyB"),
                k = n("vuIU"),
                w = n("JX7q"),
                N = n("Ji7U"),
                E = n("LK+K"),
                _ = function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(t, n)
                    };
                    return function(t, n) {
                        function i() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                    }
                }(),
                S = l.createContext(null),
                I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return _(t, e), t.prototype.render = function() {
                        return l.createElement(S.Provider, {
                            value: this.props.store
                        }, this.props.children)
                    }, t
                }(l.Component),
                K = n("Gytx"),
                P = n.n(K),
                D = n("2mql"),
                T = n.n(D),
                R = function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(t, n)
                    };
                    return function(t, n) {
                        function i() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                    }
                }(),
                A = function() {
                    return (A = Object.assign || function(e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                };
            var L = function() {
                return {}
            };

            function V(e, t) {
                void 0 === t && (t = {});
                var n = !!e,
                    i = e || L;
                return function(r) {
                    var a = function(t) {
                        function a(e, n) {
                            var r = t.call(this, e, n) || this;
                            return r.unsubscribe = null, r.handleChange = function() {
                                if (r.unsubscribe) {
                                    var e = i(r.store.getState(), r.props);
                                    r.setState({
                                        subscribed: e
                                    })
                                }
                            }, r.store = r.context, r.state = {
                                subscribed: i(r.store.getState(), e),
                                store: r.store,
                                props: e
                            }, r
                        }
                        return R(a, t), a.getDerivedStateFromProps = function(t, n) {
                            return e && 2 === e.length && t !== n.props ? {
                                subscribed: i(n.store.getState(), t),
                                props: t
                            } : {
                                props: t
                            }
                        }, a.prototype.componentDidMount = function() {
                            this.trySubscribe()
                        }, a.prototype.componentWillUnmount = function() {
                            this.tryUnsubscribe()
                        }, a.prototype.shouldComponentUpdate = function(e, t) {
                            return !P()(this.props, e) || !P()(this.state.subscribed, t.subscribed)
                        }, a.prototype.trySubscribe = function() {
                            n && (this.unsubscribe = this.store.subscribe(this.handleChange), this.handleChange())
                        }, a.prototype.tryUnsubscribe = function() {
                            this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null)
                        }, a.prototype.render = function() {
                            var e = A(A(A({}, this.props), this.state.subscribed), {
                                store: this.store
                            });
                            return l.createElement(r, A({}, e, {
                                ref: this.props.miniStoreForwardedRef
                            }))
                        }, a.displayName = "Connect(" + function(e) {
                            return e.displayName || e.name || "Component"
                        }(r) + ")", a.contextType = S, a
                    }(l.Component);
                    if (t.forwardRef) {
                        var o = l.forwardRef((function(e, t) {
                            return l.createElement(a, A({}, e, {
                                miniStoreForwardedRef: t
                            }))
                        }));
                        return T()(o, r)
                    }
                    return T()(a, r)
                }
            }
            var F = function() {
                return (F = Object.assign || function(e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            };
            var H = n("bT9E");

            function W() {
                var e = [].slice.call(arguments, 0);
                return 1 === e.length ? e[0] : function() {
                    for (var t = 0; t < e.length; t++) e[t] && e[t].apply && e[t].apply(this, arguments)
                }
            }
            var B = /iPhone/i,
                z = /iPod/i,
                U = /iPad/i,
                q = /\bAndroid(?:.+)Mobile\b/i,
                G = /Android/i,
                X = /\bAndroid(?:.+)SD4930UR\b/i,
                J = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
                Q = /Windows Phone/i,
                Y = /\bWindows(?:.+)ARM\b/i,
                $ = /BlackBerry/i,
                Z = /BB10/i,
                ee = /Opera Mini/i,
                te = /\b(CriOS|Chrome)(?:.+)Mobile/i,
                ne = /Mobile(?:.+)Firefox\b/i;

            function ie(e, t) {
                return e.test(t)
            }

            function re(e) {
                var t = e || ("undefined" !== typeof navigator ? navigator.userAgent : ""),
                    n = t.split("[FBAN");
                if ("undefined" !== typeof n[1]) {
                    var i = n;
                    t = Object(a.a)(i, 1)[0]
                }
                if ("undefined" !== typeof(n = t.split("Twitter"))[1]) {
                    var r = n;
                    t = Object(a.a)(r, 1)[0]
                }
                var o = {
                    apple: {
                        phone: ie(B, t) && !ie(Q, t),
                        ipod: ie(z, t),
                        tablet: !ie(B, t) && ie(U, t) && !ie(Q, t),
                        device: (ie(B, t) || ie(z, t) || ie(U, t)) && !ie(Q, t)
                    },
                    amazon: {
                        phone: ie(X, t),
                        tablet: !ie(X, t) && ie(J, t),
                        device: ie(X, t) || ie(J, t)
                    },
                    android: {
                        phone: !ie(Q, t) && ie(X, t) || !ie(Q, t) && ie(q, t),
                        tablet: !ie(Q, t) && !ie(X, t) && !ie(q, t) && (ie(J, t) || ie(G, t)),
                        device: !ie(Q, t) && (ie(X, t) || ie(J, t) || ie(q, t) || ie(G, t)) || ie(/\bokhttp\b/i, t)
                    },
                    windows: {
                        phone: ie(Q, t),
                        tablet: ie(Y, t),
                        device: ie(Q, t) || ie(Y, t)
                    },
                    other: {
                        blackberry: ie($, t),
                        blackberry10: ie(Z, t),
                        opera: ie(ee, t),
                        firefox: ie(ne, t),
                        chrome: ie(te, t),
                        device: ie($, t) || ie(Z, t) || ie(ee, t) || ie(ne, t) || ie(te, t)
                    },
                    any: null,
                    phone: null,
                    tablet: null
                };
                return o.any = o.apple.device || o.android.device || o.windows.device || o.other.device, o.phone = o.apple.phone || o.android.phone || o.windows.phone, o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet, o
            }
            var ae = Object(c.a)(Object(c.a)({}, re()), {}, {
                isMobile: re
            });

            function oe() {}

            function se(e, t, n) {
                var i = t || "";
                return e.key || "".concat(i, "item_").concat(n)
            }

            function ce(e) {
                return "".concat(e, "-menu-")
            }

            function le(e, t) {
                var n = -1;
                l.Children.forEach(e, (function(e) {
                    n += 1, e && e.type && e.type.isMenuItemGroup ? l.Children.forEach(e.props.children, (function(e) {
                        t(e, n += 1)
                    })) : t(e, n)
                }))
            }

            function ue(e, t, n) {
                e && !n.find && l.Children.forEach(e, (function(e) {
                    if (e) {
                        var i = e.type;
                        if (!i || !(i.isSubMenu || i.isMenuItem || i.isMenuItemGroup)) return; - 1 !== t.indexOf(e.key) ? n.find = !0 : e.props.children && ue(e.props.children, t, n)
                    }
                }))
            }
            var de = ["defaultSelectedKeys", "selectedKeys", "defaultOpenKeys", "openKeys", "mode", "getPopupContainer", "onSelect", "onDeselect", "onDestroy", "openTransitionName", "openAnimation", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "triggerSubMenuAction", "level", "selectable", "multiple", "onOpenChange", "visible", "focusable", "defaultActiveFirst", "prefixCls", "inlineIndent", "parentMenu", "title", "rootPrefixCls", "eventKey", "active", "onItemHover", "onTitleMouseEnter", "onTitleMouseLeave", "onTitleClick", "popupAlign", "popupOffset", "isOpen", "renderMenuItem", "manualRef", "subMenuKey", "disabled", "index", "isSelected", "store", "activeKey", "builtinPlacements", "overflowedIndicator", "motion", "attribute", "value", "popupClassName", "inlineCollapsed", "menu", "theme", "itemIcon", "expandIcon"],
                pe = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e && "function" === typeof e.getBoundingClientRect && e.getBoundingClientRect().width;
                    if (n) {
                        if (t) {
                            var i = getComputedStyle(e),
                                r = i.marginLeft,
                                a = i.marginRight;
                            n += +r.replace("px", "") + +a.replace("px", "")
                        }
                        n = +n.toFixed(6)
                    }
                    return n || 0
                },
                fe = function(e, t, n) {
                    e && "object" === Object(o.a)(e.style) && (e.style[t] = n)
                },
                ve = n("bdgK"),
                be = n("i8i4"),
                he = n("uciX"),
                me = n("8XRh"),
                ye = {
                    adjustX: 1,
                    adjustY: 1
                },
                je = {
                    topLeft: {
                        points: ["bl", "tl"],
                        overflow: ye,
                        offset: [0, -7]
                    },
                    bottomLeft: {
                        points: ["tl", "bl"],
                        overflow: ye,
                        offset: [0, 7]
                    },
                    leftTop: {
                        points: ["tr", "tl"],
                        overflow: ye,
                        offset: [-4, 0]
                    },
                    rightTop: {
                        points: ["tl", "tr"],
                        overflow: ye,
                        offset: [4, 0]
                    }
                },
                Oe = {
                    topLeft: {
                        points: ["bl", "tl"],
                        overflow: ye,
                        offset: [0, -7]
                    },
                    bottomLeft: {
                        points: ["tl", "bl"],
                        overflow: ye,
                        offset: [0, 7]
                    },
                    rightTop: {
                        points: ["tr", "tl"],
                        overflow: ye,
                        offset: [-4, 0]
                    },
                    leftTop: {
                        points: ["tl", "tr"],
                        overflow: ye,
                        offset: [4, 0]
                    }
                },
                ge = 0,
                xe = {
                    horizontal: "bottomLeft",
                    vertical: "rightTop",
                    "vertical-left": "rightTop",
                    "vertical-right": "leftTop"
                },
                Ce = function(e, t, n) {
                    var i = ce(t),
                        a = e.getState();
                    e.setState({
                        defaultActiveFirst: Object(c.a)(Object(c.a)({}, a.defaultActiveFirst), {}, Object(r.a)({}, i, n))
                    })
                },
                Me = function(e) {
                    Object(N.a)(n, e);
                    var t = Object(E.a)(n);

                    function n(e) {
                        var i;
                        Object(M.a)(this, n), (i = t.call(this, e)).onDestroy = function(e) {
                            i.props.onDestroy(e)
                        }, i.onKeyDown = function(e) {
                            var t = e.keyCode,
                                n = i.menuInstance,
                                r = i.props.store,
                                a = i.getVisible();
                            if (t === j.a.ENTER) return i.onTitleClick(e), Ce(r, i.props.eventKey, !0), !0;
                            if (t === j.a.RIGHT) return a ? n.onKeyDown(e) : (i.triggerOpenChange(!0), Ce(r, i.props.eventKey, !0)), !0;
                            if (t === j.a.LEFT) {
                                var o;
                                if (!a) return;
                                return (o = n.onKeyDown(e)) || (i.triggerOpenChange(!1), o = !0), o
                            }
                            return !a || t !== j.a.UP && t !== j.a.DOWN ? void 0 : n.onKeyDown(e)
                        }, i.onOpenChange = function(e) {
                            i.props.onOpenChange(e)
                        }, i.onPopupVisibleChange = function(e) {
                            i.triggerOpenChange(e, e ? "mouseenter" : "mouseleave")
                        }, i.onMouseEnter = function(e) {
                            var t = i.props,
                                n = t.eventKey,
                                r = t.onMouseEnter,
                                a = t.store;
                            Ce(a, i.props.eventKey, !1), r({
                                key: n,
                                domEvent: e
                            })
                        }, i.onMouseLeave = function(e) {
                            var t = i.props,
                                n = t.parentMenu,
                                r = t.eventKey,
                                a = t.onMouseLeave;
                            n.subMenuInstance = Object(w.a)(i), a({
                                key: r,
                                domEvent: e
                            })
                        }, i.onTitleMouseEnter = function(e) {
                            var t = i.props,
                                n = t.eventKey,
                                r = t.onItemHover,
                                a = t.onTitleMouseEnter;
                            r({
                                key: n,
                                hover: !0
                            }), a({
                                key: n,
                                domEvent: e
                            })
                        }, i.onTitleMouseLeave = function(e) {
                            var t = i.props,
                                n = t.parentMenu,
                                r = t.eventKey,
                                a = t.onItemHover,
                                o = t.onTitleMouseLeave;
                            n.subMenuInstance = Object(w.a)(i), a({
                                key: r,
                                hover: !1
                            }), o({
                                key: r,
                                domEvent: e
                            })
                        }, i.onTitleClick = function(e) {
                            var t = Object(w.a)(i).props;
                            t.onTitleClick({
                                key: t.eventKey,
                                domEvent: e
                            }), "hover" !== t.triggerSubMenuAction && (i.triggerOpenChange(!i.getVisible(), "click"), Ce(t.store, i.props.eventKey, !1))
                        }, i.onSubMenuClick = function(e) {
                            "function" === typeof i.props.onClick && i.props.onClick(i.addKeyPath(e))
                        }, i.onSelect = function(e) {
                            i.props.onSelect(e)
                        }, i.onDeselect = function(e) {
                            i.props.onDeselect(e)
                        }, i.getPrefixCls = function() {
                            return "".concat(i.props.rootPrefixCls, "-submenu")
                        }, i.getActiveClassName = function() {
                            return "".concat(i.getPrefixCls(), "-active")
                        }, i.getDisabledClassName = function() {
                            return "".concat(i.getPrefixCls(), "-disabled")
                        }, i.getSelectedClassName = function() {
                            return "".concat(i.getPrefixCls(), "-selected")
                        }, i.getOpenClassName = function() {
                            return "".concat(i.props.rootPrefixCls, "-submenu-open")
                        }, i.getVisible = function() {
                            return i.state.isOpen
                        }, i.getMode = function() {
                            return i.state.mode
                        }, i.saveMenuInstance = function(e) {
                            i.menuInstance = e
                        }, i.addKeyPath = function(e) {
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                keyPath: (e.keyPath || []).concat(i.props.eventKey)
                            })
                        }, i.triggerOpenChange = function(e, t) {
                            var n = i.props.eventKey,
                                r = function() {
                                    i.onOpenChange({
                                        key: n,
                                        item: Object(w.a)(i),
                                        trigger: t,
                                        open: e
                                    })
                                };
                            "mouseenter" === t ? i.mouseenterTimeout = setTimeout((function() {
                                r()
                            }), 0) : r()
                        }, i.isChildrenSelected = function() {
                            var e = {
                                find: !1
                            };
                            return ue(i.props.children, i.props.selectedKeys, e), e.find
                        }, i.isInlineMode = function() {
                            return "inline" === i.getMode()
                        }, i.adjustWidth = function() {
                            if (i.subMenuTitle && i.menuInstance) {
                                var e = be.findDOMNode(i.menuInstance);
                                e.offsetWidth >= i.subMenuTitle.offsetWidth || (e.style.minWidth = "".concat(i.subMenuTitle.offsetWidth, "px"))
                            }
                        }, i.saveSubMenuTitle = function(e) {
                            i.subMenuTitle = e
                        }, i.getBaseProps = function() {
                            var e = Object(w.a)(i).props,
                                t = i.getMode();
                            return {
                                mode: "horizontal" === t ? "vertical" : t,
                                visible: i.getVisible(),
                                level: e.level + 1,
                                inlineIndent: e.inlineIndent,
                                focusable: !1,
                                onClick: i.onSubMenuClick,
                                onSelect: i.onSelect,
                                onDeselect: i.onDeselect,
                                onDestroy: i.onDestroy,
                                selectedKeys: e.selectedKeys,
                                eventKey: "".concat(e.eventKey, "-menu-"),
                                openKeys: e.openKeys,
                                motion: e.motion,
                                onOpenChange: i.onOpenChange,
                                subMenuOpenDelay: e.subMenuOpenDelay,
                                parentMenu: Object(w.a)(i),
                                subMenuCloseDelay: e.subMenuCloseDelay,
                                forceSubMenuRender: e.forceSubMenuRender,
                                triggerSubMenuAction: e.triggerSubMenuAction,
                                builtinPlacements: e.builtinPlacements,
                                defaultActiveFirst: e.store.getState().defaultActiveFirst[ce(e.eventKey)],
                                multiple: e.multiple,
                                prefixCls: e.rootPrefixCls,
                                id: i.internalMenuId,
                                manualRef: i.saveMenuInstance,
                                itemIcon: e.itemIcon,
                                expandIcon: e.expandIcon,
                                direction: e.direction
                            }
                        }, i.getMotion = function(e, t) {
                            var n = Object(w.a)(i).haveRendered,
                                r = i.props,
                                a = r.motion,
                                o = r.rootPrefixCls;
                            return Object(c.a)(Object(c.a)({}, a), {}, {
                                leavedClassName: "".concat(o, "-hidden"),
                                removeOnLeave: !1,
                                motionAppear: n || !t || "inline" !== e
                            })
                        };
                        var r = e.store,
                            a = e.eventKey,
                            o = r.getState().defaultActiveFirst;
                        i.isRootMenu = !1;
                        var s = !1;
                        return o && (s = o[a]), Ce(r, a, s), i.state = {
                            mode: e.mode,
                            isOpen: e.isOpen
                        }, i
                    }
                    return Object(k.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.componentDidUpdate()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.mode,
                                i = t.parentMenu,
                                r = t.manualRef,
                                a = t.isOpen,
                                o = function() {
                                    e.setState({
                                        mode: n,
                                        isOpen: a
                                    })
                                },
                                s = a !== this.state.isOpen,
                                c = n !== this.state.mode;
                            (c || s) && (h.a.cancel(this.updateStateRaf), c ? this.updateStateRaf = Object(h.a)(o) : o()), r && r(this), "horizontal" === n && (null === i || void 0 === i ? void 0 : i.isRootMenu) && a && (this.minWidthTimeout = setTimeout((function() {
                                return e.adjustWidth()
                            }), 0))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props,
                                t = e.onDestroy,
                                n = e.eventKey;
                            t && t(n), this.minWidthTimeout && clearTimeout(this.minWidthTimeout), this.mouseenterTimeout && clearTimeout(this.mouseenterTimeout), h.a.cancel(this.updateStateRaf)
                        }
                    }, {
                        key: "renderPopupMenu",
                        value: function(e, t) {
                            var n = this.getBaseProps();
                            return l.createElement(Te, Object(i.a)({}, n, {
                                id: this.internalMenuId,
                                className: e,
                                style: t
                            }), this.props.children)
                        }
                    }, {
                        key: "renderChildren",
                        value: function() {
                            var e = this,
                                t = this.getBaseProps(),
                                n = t.mode,
                                a = t.visible,
                                o = t.forceSubMenuRender,
                                s = t.direction,
                                c = this.getMotion(n, a);
                            if (this.haveRendered = !0, this.haveOpened = this.haveOpened || a || o, !this.haveOpened) return l.createElement("div", null);
                            var u = d()("".concat(t.prefixCls, "-sub"), Object(r.a)({}, "".concat(t.prefixCls, "-rtl"), "rtl" === s));
                            return this.isInlineMode() ? l.createElement(me.default, Object(i.a)({
                                visible: t.visible
                            }, c), (function(t) {
                                var n = t.className,
                                    i = t.style,
                                    r = d()(u, n);
                                return e.renderPopupMenu(r, i)
                            })) : this.renderPopupMenu(u)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, n, a = Object(c.a)({}, this.props),
                                o = this.getVisible(),
                                s = this.getPrefixCls(),
                                u = this.isInlineMode(),
                                p = this.getMode(),
                                f = d()(s, "".concat(s, "-").concat(p), (e = {}, Object(r.a)(e, a.className, !!a.className), Object(r.a)(e, this.getOpenClassName(), o), Object(r.a)(e, this.getActiveClassName(), a.active || o && !u), Object(r.a)(e, this.getDisabledClassName(), a.disabled), Object(r.a)(e, this.getSelectedClassName(), this.isChildrenSelected()), e));
                            this.internalMenuId || (a.eventKey ? this.internalMenuId = "".concat(a.eventKey, "$Menu") : (ge += 1, this.internalMenuId = "$__$".concat(ge, "$Menu")));
                            var v = {},
                                b = {},
                                h = {};
                            a.disabled || (v = {
                                onMouseLeave: this.onMouseLeave,
                                onMouseEnter: this.onMouseEnter
                            }, b = {
                                onClick: this.onTitleClick
                            }, h = {
                                onMouseEnter: this.onTitleMouseEnter,
                                onMouseLeave: this.onTitleMouseLeave
                            });
                            var m = {},
                                y = "rtl" === a.direction;
                            u && (y ? m.paddingRight = a.inlineIndent * a.level : m.paddingLeft = a.inlineIndent * a.level);
                            var j = {};
                            this.getVisible() && (j = {
                                "aria-owns": this.internalMenuId
                            });
                            var O = null;
                            "horizontal" !== p && (O = this.props.expandIcon, "function" === typeof this.props.expandIcon && (O = l.createElement(this.props.expandIcon, Object(c.a)({}, this.props))));
                            var g = l.createElement("div", Object(i.a)({
                                    ref: this.saveSubMenuTitle,
                                    style: m,
                                    className: "".concat(s, "-title"),
                                    role: "button"
                                }, h, b, {
                                    "aria-expanded": o
                                }, j, {
                                    "aria-haspopup": "true",
                                    title: "string" === typeof a.title ? a.title : void 0
                                }), a.title, O || l.createElement("i", {
                                    className: "".concat(s, "-arrow")
                                })),
                                x = this.renderChildren(),
                                C = (null === (t = a.parentMenu) || void 0 === t ? void 0 : t.isRootMenu) ? a.parentMenu.props.getPopupContainer : function(e) {
                                    return e.parentNode
                                },
                                M = xe[p],
                                k = a.popupOffset ? {
                                    offset: a.popupOffset
                                } : {},
                                w = d()((n = {}, Object(r.a)(n, a.popupClassName, a.popupClassName && !u), Object(r.a)(n, "".concat(s, "-rtl"), y), n)),
                                N = a.disabled,
                                E = a.triggerSubMenuAction,
                                _ = a.subMenuOpenDelay,
                                S = a.forceSubMenuRender,
                                I = a.subMenuCloseDelay,
                                K = a.builtinPlacements;
                            de.forEach((function(e) {
                                return delete a[e]
                            })), delete a.onClick;
                            var P = y ? Object(c.a)(Object(c.a)({}, Oe), K) : Object(c.a)(Object(c.a)({}, je), K);
                            delete a.direction;
                            var D = this.getBaseProps(),
                                T = u ? null : this.getMotion(D.mode, D.visible);
                            return l.createElement("li", Object(i.a)({}, a, v, {
                                className: f,
                                role: "menuitem"
                            }), l.createElement(he.a, {
                                prefixCls: s,
                                popupClassName: d()("".concat(s, "-popup"), w),
                                getPopupContainer: C,
                                builtinPlacements: P,
                                popupPlacement: M,
                                popupVisible: !u && o,
                                popupAlign: k,
                                popup: u ? null : x,
                                action: N || u ? [] : [E],
                                mouseEnterDelay: _,
                                mouseLeaveDelay: I,
                                onPopupVisibleChange: this.onPopupVisibleChange,
                                forceRender: S,
                                popupMotion: T
                            }, g), u ? x : null)
                        }
                    }]), n
                }(l.Component);
            Me.defaultProps = {
                onMouseEnter: oe,
                onMouseLeave: oe,
                onTitleMouseEnter: oe,
                onTitleMouseLeave: oe,
                onTitleClick: oe,
                manualRef: oe,
                mode: "vertical",
                title: ""
            };
            var ke = V((function(e, t) {
                var n = e.openKeys,
                    i = e.activeKey,
                    r = e.selectedKeys,
                    a = t.eventKey,
                    o = t.subMenuKey;
                return {
                    isOpen: n.indexOf(a) > -1,
                    active: i[o] === a,
                    selectedKeys: r
                }
            }))(Me);
            ke.isSubMenu = !0;
            var we = ke,
                Ne = "menuitem-overflowed",
                Ee = function(e) {
                    Object(N.a)(n, e);
                    var t = Object(E.a)(n);

                    function n() {
                        var e;
                        return Object(M.a)(this, n), (e = t.apply(this, arguments)).resizeObserver = null, e.mutationObserver = null, e.originalTotalWidth = 0, e.overflowedItems = [], e.menuItemSizes = [], e.cancelFrameId = null, e.state = {
                            lastVisibleIndex: void 0
                        }, e.childRef = l.createRef(), e.getMenuItemNodes = function() {
                            var t = e.props.prefixCls,
                                n = e.childRef.current;
                            return n ? [].slice.call(n.children).filter((function(e) {
                                return e.className.split(" ").indexOf("".concat(t, "-overflowed-submenu")) < 0
                            })) : []
                        }, e.getOverflowedSubMenuItem = function(t, n, r) {
                            var a = e.props,
                                o = a.overflowedIndicator,
                                u = a.level,
                                d = a.mode,
                                p = a.prefixCls,
                                f = a.theme;
                            if (1 !== u || "horizontal" !== d) return null;
                            var v = e.props.children[0].props,
                                b = (v.children, v.title, v.style),
                                h = Object(s.a)(v, ["children", "title", "style"]),
                                m = Object(c.a)({}, b),
                                y = "".concat(t, "-overflowed-indicator"),
                                j = "".concat(t, "-overflowed-indicator");
                            0 === n.length && !0 !== r ? m = Object(c.a)(Object(c.a)({}, m), {}, {
                                display: "none"
                            }) : r && (m = Object(c.a)(Object(c.a)({}, m), {}, {
                                visibility: "hidden",
                                position: "absolute"
                            }), y = "".concat(y, "-placeholder"), j = "".concat(j, "-placeholder"));
                            var O = f ? "".concat(p, "-").concat(f) : "",
                                g = {};
                            return de.forEach((function(e) {
                                void 0 !== h[e] && (g[e] = h[e])
                            })), l.createElement(we, Object(i.a)({
                                title: o,
                                className: "".concat(p, "-overflowed-submenu"),
                                popupClassName: O
                            }, g, {
                                key: y,
                                eventKey: j,
                                disabled: !1,
                                style: m
                            }), n)
                        }, e.setChildrenWidthAndResize = function() {
                            if ("horizontal" === e.props.mode) {
                                var t = e.childRef.current;
                                if (t) {
                                    var n = t.children;
                                    if (n && 0 !== n.length) {
                                        var i = t.children[n.length - 1];
                                        fe(i, "display", "inline-block");
                                        var r = e.getMenuItemNodes(),
                                            a = r.filter((function(e) {
                                                return e.className.split(" ").indexOf(Ne) >= 0
                                            }));
                                        a.forEach((function(e) {
                                            fe(e, "display", "inline-block")
                                        })), e.menuItemSizes = r.map((function(e) {
                                            return pe(e, !0)
                                        })), a.forEach((function(e) {
                                            fe(e, "display", "none")
                                        })), e.overflowedIndicatorWidth = pe(t.children[t.children.length - 1], !0), e.originalTotalWidth = e.menuItemSizes.reduce((function(e, t) {
                                            return e + t
                                        }), 0), e.handleResize(), fe(i, "display", "none")
                                    }
                                }
                            }
                        }, e.handleResize = function() {
                            if ("horizontal" === e.props.mode) {
                                var t = e.childRef.current;
                                if (t) {
                                    var n = pe(t);
                                    e.overflowedItems = [];
                                    var i, r = 0;
                                    e.originalTotalWidth > n + .5 && (i = -1, e.menuItemSizes.forEach((function(t) {
                                        (r += t) + e.overflowedIndicatorWidth <= n && (i += 1)
                                    }))), e.setState({
                                        lastVisibleIndex: i
                                    })
                                }
                            }
                        }, e
                    }
                    return Object(k.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.setChildrenWidthAndResize(), 1 === this.props.level && "horizontal" === this.props.mode) {
                                var t = this.childRef.current;
                                if (!t) return;
                                this.resizeObserver = new ve.a((function(t) {
                                    t.forEach((function() {
                                        var t = e.cancelFrameId;
                                        cancelAnimationFrame(t), e.cancelFrameId = requestAnimationFrame(e.setChildrenWidthAndResize)
                                    }))
                                })), [].slice.call(t.children).concat(t).forEach((function(t) {
                                    e.resizeObserver.observe(t)
                                })), "undefined" !== typeof MutationObserver && (this.mutationObserver = new MutationObserver((function() {
                                    e.resizeObserver.disconnect(), [].slice.call(t.children).concat(t).forEach((function(t) {
                                        e.resizeObserver.observe(t)
                                    })), e.setChildrenWidthAndResize()
                                })), this.mutationObserver.observe(t, {
                                    attributes: !1,
                                    childList: !0,
                                    subTree: !1
                                }))
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.resizeObserver && this.resizeObserver.disconnect(), this.mutationObserver && this.mutationObserver.disconnect(), cancelAnimationFrame(this.cancelFrameId)
                        }
                    }, {
                        key: "renderChildren",
                        value: function(e) {
                            var t = this,
                                n = this.state.lastVisibleIndex;
                            return (e || []).reduce((function(i, r, a) {
                                var o = r;
                                if ("horizontal" === t.props.mode) {
                                    var s = t.getOverflowedSubMenuItem(r.props.eventKey, []);
                                    void 0 !== n && -1 !== t.props.className.indexOf("".concat(t.props.prefixCls, "-root")) && (a > n && (o = l.cloneElement(r, {
                                        style: {
                                            display: "none"
                                        },
                                        eventKey: "".concat(r.props.eventKey, "-hidden"),
                                        className: "".concat(Ne)
                                    })), a === n + 1 && (t.overflowedItems = e.slice(n + 1).map((function(e) {
                                        return l.cloneElement(e, {
                                            key: e.props.eventKey,
                                            mode: "vertical-left"
                                        })
                                    })), s = t.getOverflowedSubMenuItem(r.props.eventKey, t.overflowedItems)));
                                    var c = [].concat(Object(b.a)(i), [s, o]);
                                    return a === e.length - 1 && c.push(t.getOverflowedSubMenuItem(r.props.eventKey, [], !0)), c
                                }
                                return [].concat(Object(b.a)(i), [o])
                            }), [])
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = (e.visible, e.prefixCls, e.overflowedIndicator, e.mode, e.level, e.tag),
                                n = e.children,
                                r = (e.theme, Object(s.a)(e, ["visible", "prefixCls", "overflowedIndicator", "mode", "level", "tag", "children", "theme"])),
                                a = t;
                            return l.createElement(a, Object(i.a)({
                                ref: this.childRef
                            }, r), this.renderChildren(n))
                        }
                    }]), n
                }(l.Component);
            Ee.defaultProps = {
                tag: "div",
                className: ""
            };
            var _e = Ee;

            function Se(e, t, n) {
                var i = e.getState();
                e.setState({
                    activeKey: Object(c.a)(Object(c.a)({}, i.activeKey), {}, Object(r.a)({}, t, n))
                })
            }

            function Ie(e) {
                return e.eventKey || "0-menu-"
            }

            function Ke(e, t) {
                var n, i = t,
                    r = e.children,
                    a = e.eventKey;
                if (i && (le(r, (function(e, t) {
                        e && e.props && !e.props.disabled && i === se(e, a, t) && (n = !0)
                    })), n)) return i;
                return i = null, e.defaultActiveFirst ? (le(r, (function(e, t) {
                    i || !e || e.props.disabled || (i = se(e, a, t))
                })), i) : i
            }

            function Pe(e) {
                if (e) {
                    var t = this.instanceArray.indexOf(e); - 1 !== t ? this.instanceArray[t] = e : this.instanceArray.push(e)
                }
            }
            var De = function(e) {
                Object(N.a)(n, e);
                var t = Object(E.a)(n);

                function n(e) {
                    var i;
                    return Object(M.a)(this, n), (i = t.call(this, e)).onKeyDown = function(e, t) {
                        var n, r = e.keyCode;
                        if (i.getFlatInstanceArray().forEach((function(t) {
                                t && t.props.active && t.onKeyDown && (n = t.onKeyDown(e))
                            })), n) return 1;
                        var a = null;
                        return r !== j.a.UP && r !== j.a.DOWN || (a = i.step(r === j.a.UP ? -1 : 1)), a ? (e.preventDefault(), Se(i.props.store, Ie(i.props), a.props.eventKey), "function" === typeof t && t(a), 1) : void 0
                    }, i.onItemHover = function(e) {
                        var t = e.key,
                            n = e.hover;
                        Se(i.props.store, Ie(i.props), n ? t : null)
                    }, i.onDeselect = function(e) {
                        i.props.onDeselect(e)
                    }, i.onSelect = function(e) {
                        i.props.onSelect(e)
                    }, i.onClick = function(e) {
                        i.props.onClick(e)
                    }, i.onOpenChange = function(e) {
                        i.props.onOpenChange(e)
                    }, i.onDestroy = function(e) {
                        i.props.onDestroy(e)
                    }, i.getFlatInstanceArray = function() {
                        return i.instanceArray
                    }, i.step = function(e) {
                        var t = i.getFlatInstanceArray(),
                            n = i.props.store.getState().activeKey[Ie(i.props)],
                            r = t.length;
                        if (!r) return null;
                        e < 0 && (t = t.concat().reverse());
                        var a = -1;
                        if (t.every((function(e, t) {
                                return !e || e.props.eventKey !== n || (a = t, !1)
                            })), i.props.defaultActiveFirst || -1 === a || (o = t.slice(a, r - 1)).length && !o.every((function(e) {
                                return !!e.props.disabled
                            }))) {
                            var o, s = (a + 1) % r,
                                c = s;
                            do {
                                var l = t[c];
                                if (l && !l.props.disabled) return l;
                                c = (c + 1) % r
                            } while (c !== s);
                            return null
                        }
                    }, i.renderCommonMenuItem = function(e, t, n) {
                        var r = i.props.store.getState(),
                            a = Object(w.a)(i).props,
                            o = se(e, a.eventKey, t),
                            s = e.props;
                        if (!s || "string" === typeof e.type) return e;
                        var u = o === r.activeKey,
                            d = Object(c.a)(Object(c.a)({
                                mode: s.mode || a.mode,
                                level: a.level,
                                inlineIndent: a.inlineIndent,
                                renderMenuItem: i.renderMenuItem,
                                rootPrefixCls: a.prefixCls,
                                index: t,
                                parentMenu: a.parentMenu,
                                manualRef: s.disabled ? void 0 : W(e.ref, Pe.bind(Object(w.a)(i))),
                                eventKey: o,
                                active: !s.disabled && u,
                                multiple: a.multiple,
                                onClick: function(e) {
                                    (s.onClick || oe)(e), i.onClick(e)
                                },
                                onItemHover: i.onItemHover,
                                motion: a.motion,
                                subMenuOpenDelay: a.subMenuOpenDelay,
                                subMenuCloseDelay: a.subMenuCloseDelay,
                                forceSubMenuRender: a.forceSubMenuRender,
                                onOpenChange: i.onOpenChange,
                                onDeselect: i.onDeselect,
                                onSelect: i.onSelect,
                                builtinPlacements: a.builtinPlacements,
                                itemIcon: s.itemIcon || i.props.itemIcon,
                                expandIcon: s.expandIcon || i.props.expandIcon
                            }, n), {}, {
                                direction: a.direction
                            });
                        return ("inline" === a.mode || ae.any) && (d.triggerSubMenuAction = "click"), l.cloneElement(e, Object(c.a)(Object(c.a)({}, d), {}, {
                            key: o || t
                        }))
                    }, i.renderMenuItem = function(e, t, n) {
                        if (!e) return null;
                        var r = i.props.store.getState(),
                            a = {
                                openKeys: r.openKeys,
                                selectedKeys: r.selectedKeys,
                                triggerSubMenuAction: i.props.triggerSubMenuAction,
                                subMenuKey: n
                            };
                        return i.renderCommonMenuItem(e, t, a)
                    }, e.store.setState({
                        activeKey: Object(c.a)(Object(c.a)({}, e.store.getState().activeKey), {}, Object(r.a)({}, e.eventKey, Ke(e, e.activeKey)))
                    }), i.instanceArray = [], i
                }
                return Object(k.a)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.manualRef && this.props.manualRef(this)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return this.props.visible || e.visible || this.props.className !== e.className || !P()(this.props.style, e.style)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.props,
                            n = "activeKey" in t ? t.activeKey : t.store.getState().activeKey[Ie(t)],
                            i = Ke(t, n);
                        if (i !== n) Se(t.store, Ie(t), i);
                        else if ("activeKey" in e) {
                            i !== Ke(e, e.activeKey) && Se(t.store, Ie(t), i)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = Object(i.a)({}, this.props);
                        this.instanceArray = [];
                        var n = {
                            className: d()(t.prefixCls, t.className, "".concat(t.prefixCls, "-").concat(t.mode)),
                            role: t.role || "menu"
                        };
                        t.id && (n.id = t.id), t.focusable && (n.tabIndex = 0, n.onKeyDown = this.onKeyDown);
                        var r = t.prefixCls,
                            a = t.eventKey,
                            o = t.visible,
                            s = t.level,
                            c = t.mode,
                            u = t.overflowedIndicator,
                            f = t.theme;
                        return de.forEach((function(e) {
                            return delete t[e]
                        })), delete t.onClick, l.createElement(_e, Object(i.a)({}, t, {
                            prefixCls: r,
                            mode: c,
                            tag: "ul",
                            level: s,
                            theme: f,
                            visible: o,
                            overflowedIndicator: u
                        }, n), Object(p.a)(t.children).map((function(t, n) {
                            return e.renderMenuItem(t, n, a || "0-menu-")
                        })))
                    }
                }]), n
            }(l.Component);
            De.defaultProps = {
                prefixCls: "rc-menu",
                className: "",
                mode: "vertical",
                level: 1,
                inlineIndent: 24,
                visible: !0,
                focusable: !0,
                style: {},
                manualRef: oe
            };
            var Te = V()(De),
                Re = n("Kwbf");

            function Ae(e, t, n) {
                var i = e.prefixCls,
                    r = e.motion,
                    a = e.defaultMotions,
                    s = void 0 === a ? {} : a,
                    c = e.openAnimation,
                    l = e.openTransitionName,
                    u = t.switchingModeFromInline;
                if (r) return r;
                if ("object" === Object(o.a)(c) && c) Object(Re.a)(!1, "Object type of `openAnimation` is removed. Please use `motion` instead.");
                else if ("string" === typeof c) return {
                    motionName: "".concat(i, "-open-").concat(c)
                };
                if (l) return {
                    motionName: l
                };
                var d = s[n];
                return d || (u ? null : s.other)
            }
            var Le = function(e) {
                Object(N.a)(n, e);
                var t = Object(E.a)(n);

                function n(e) {
                    var i;
                    Object(M.a)(this, n), (i = t.call(this, e)).onSelect = function(e) {
                        var t = Object(w.a)(i).props;
                        if (t.selectable) {
                            var n = i.store.getState().selectedKeys,
                                r = e.key;
                            n = t.multiple ? n.concat([r]) : [r], "selectedKeys" in t || i.store.setState({
                                selectedKeys: n
                            }), t.onSelect(Object(c.a)(Object(c.a)({}, e), {}, {
                                selectedKeys: n
                            }))
                        }
                    }, i.onClick = function(e) {
                        var t = i.getRealMenuMode(),
                            n = Object(w.a)(i),
                            r = n.store,
                            a = n.props.onOpenChange;
                        "inline" === t || "openKeys" in i.props || (r.setState({
                            openKeys: []
                        }), a([])), i.props.onClick(e)
                    }, i.onKeyDown = function(e, t) {
                        i.innerMenu.getWrappedInstance().onKeyDown(e, t)
                    }, i.onOpenChange = function(e) {
                        var t = Object(w.a)(i).props,
                            n = i.store.getState().openKeys.concat(),
                            r = !1,
                            a = function(e) {
                                var t = !1;
                                if (e.open)(t = -1 === n.indexOf(e.key)) && n.push(e.key);
                                else {
                                    var i = n.indexOf(e.key);
                                    (t = -1 !== i) && n.splice(i, 1)
                                }
                                r = r || t
                            };
                        Array.isArray(e) ? e.forEach(a) : a(e), r && ("openKeys" in i.props || i.store.setState({
                            openKeys: n
                        }), t.onOpenChange(n))
                    }, i.onDeselect = function(e) {
                        var t = Object(w.a)(i).props;
                        if (t.selectable) {
                            var n = i.store.getState().selectedKeys.concat(),
                                r = e.key,
                                a = n.indexOf(r); - 1 !== a && n.splice(a, 1), "selectedKeys" in t || i.store.setState({
                                selectedKeys: n
                            }), t.onDeselect(Object(c.a)(Object(c.a)({}, e), {}, {
                                selectedKeys: n
                            }))
                        }
                    }, i.onMouseEnter = function(e) {
                        i.restoreModeVerticalFromInline();
                        var t = i.props.onMouseEnter;
                        t && t(e)
                    }, i.onTransitionEnd = function(e) {
                        var t = "width" === e.propertyName && e.target === e.currentTarget,
                            n = e.target.className,
                            r = "[object SVGAnimatedString]" === Object.prototype.toString.call(n) ? n.animVal : n,
                            a = "font-size" === e.propertyName && r.indexOf("anticon") >= 0;
                        (t || a) && i.restoreModeVerticalFromInline()
                    }, i.setInnerMenu = function(e) {
                        i.innerMenu = e
                    }, i.isRootMenu = !0;
                    var r = e.defaultSelectedKeys,
                        a = e.defaultOpenKeys;
                    return "selectedKeys" in e && (r = e.selectedKeys || []), "openKeys" in e && (a = e.openKeys || []), i.store = function(e) {
                        var t = e,
                            n = [];
                        return {
                            setState: function(e) {
                                t = F(F({}, t), e);
                                for (var i = 0; i < n.length; i++) n[i]()
                            },
                            getState: function() {
                                return t
                            },
                            subscribe: function(e) {
                                return n.push(e),
                                    function() {
                                        var t = n.indexOf(e);
                                        n.splice(t, 1)
                                    }
                            }
                        }
                    }({
                        selectedKeys: r,
                        openKeys: a,
                        activeKey: {
                            "0-menu-": Ke(e, e.activeKey)
                        }
                    }), i.state = {
                        switchingModeFromInline: !1,
                        prevProps: e,
                        inlineOpenKeys: [],
                        store: i.store
                    }, i
                }
                return Object(k.a)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.updateMiniStore(), this.updateMenuDisplay()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.props,
                            n = t.siderCollapsed,
                            i = t.inlineCollapsed,
                            r = t.onOpenChange;
                        (!e.inlineCollapsed && i || !e.siderCollapsed && n) && r([]), this.updateMiniStore(), this.updateMenuDisplay()
                    }
                }, {
                    key: "updateMenuDisplay",
                    value: function() {
                        var e = this.props.collapsedWidth,
                            t = this.store,
                            n = this.prevOpenKeys;
                        this.getInlineCollapsed() && (0 === e || "0" === e || "0px" === e) ? (this.prevOpenKeys = t.getState().openKeys.concat(), this.store.setState({
                            openKeys: []
                        })) : n && (this.store.setState({
                            openKeys: n
                        }), this.prevOpenKeys = null)
                    }
                }, {
                    key: "getRealMenuMode",
                    value: function() {
                        var e = this.props.mode,
                            t = this.state.switchingModeFromInline,
                            n = this.getInlineCollapsed();
                        return t && n ? "inline" : n ? "vertical" : e
                    }
                }, {
                    key: "getInlineCollapsed",
                    value: function() {
                        var e = this.props,
                            t = e.inlineCollapsed,
                            n = e.siderCollapsed;
                        return void 0 !== n ? n : t
                    }
                }, {
                    key: "restoreModeVerticalFromInline",
                    value: function() {
                        this.state.switchingModeFromInline && this.setState({
                            switchingModeFromInline: !1
                        })
                    }
                }, {
                    key: "updateMiniStore",
                    value: function() {
                        "selectedKeys" in this.props && this.store.setState({
                            selectedKeys: this.props.selectedKeys || []
                        }), "openKeys" in this.props && this.store.setState({
                            openKeys: this.props.openKeys || []
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = Object(c.a)({}, Object(H.a)(this.props, ["collapsedWidth", "siderCollapsed", "defaultMotions"])),
                            t = this.getRealMenuMode();
                        return e.className += " ".concat(e.prefixCls, "-root"), "rtl" === e.direction && (e.className += " ".concat(e.prefixCls, "-rtl")), delete(e = Object(c.a)(Object(c.a)({}, e), {}, {
                            mode: t,
                            onClick: this.onClick,
                            onOpenChange: this.onOpenChange,
                            onDeselect: this.onDeselect,
                            onSelect: this.onSelect,
                            onMouseEnter: this.onMouseEnter,
                            onTransitionEnd: this.onTransitionEnd,
                            parentMenu: this,
                            motion: Ae(this.props, this.state, t)
                        })).openAnimation, delete e.openTransitionName, l.createElement(I, {
                            store: this.store
                        }, l.createElement(Te, Object(i.a)({}, e, {
                            ref: this.setInnerMenu
                        }), this.props.children))
                    }
                }], [{
                    key: "getDerivedStateFromProps",
                    value: function(e, t) {
                        var n = t.prevProps,
                            i = t.store,
                            r = i.getState(),
                            a = {},
                            o = {
                                prevProps: e
                            };
                        return "inline" === n.mode && "inline" !== e.mode && (o.switchingModeFromInline = !0), "openKeys" in e ? a.openKeys = e.openKeys || [] : ((e.inlineCollapsed && !n.inlineCollapsed || e.siderCollapsed && !n.siderCollapsed) && (o.switchingModeFromInline = !0, o.inlineOpenKeys = r.openKeys, a.openKeys = []), (!e.inlineCollapsed && n.inlineCollapsed || !e.siderCollapsed && n.siderCollapsed) && (a.openKeys = t.inlineOpenKeys, o.inlineOpenKeys = [])), Object.keys(a).length && i.setState(a), o
                    }
                }]), n
            }(l.Component);
            Le.defaultProps = {
                selectable: !0,
                onClick: oe,
                onSelect: oe,
                onOpenChange: oe,
                onDeselect: oe,
                defaultSelectedKeys: [],
                defaultOpenKeys: [],
                subMenuOpenDelay: .1,
                subMenuCloseDelay: .1,
                triggerSubMenuAction: "hover",
                prefixCls: "rc-menu",
                className: "",
                mode: "vertical",
                style: {},
                builtinPlacements: {},
                overflowedIndicator: l.createElement("span", null, "\xb7\xb7\xb7")
            };
            var Ve = Le,
                Fe = function(e) {
                    Object(N.a)(n, e);
                    var t = Object(E.a)(n);

                    function n() {
                        var e;
                        return Object(M.a)(this, n), (e = t.apply(this, arguments)).onKeyDown = function(t) {
                            if (t.keyCode === j.a.ENTER) return e.onClick(t), !0
                        }, e.onMouseLeave = function(t) {
                            var n = e.props,
                                i = n.eventKey,
                                r = n.onItemHover,
                                a = n.onMouseLeave;
                            r({
                                key: i,
                                hover: !1
                            }), a({
                                key: i,
                                domEvent: t
                            })
                        }, e.onMouseEnter = function(t) {
                            var n = e.props,
                                i = n.eventKey,
                                r = n.onItemHover,
                                a = n.onMouseEnter;
                            r({
                                key: i,
                                hover: !0
                            }), a({
                                key: i,
                                domEvent: t
                            })
                        }, e.onClick = function(t) {
                            var n = e.props,
                                i = n.eventKey,
                                r = n.multiple,
                                a = n.onClick,
                                o = n.onSelect,
                                s = n.onDeselect,
                                c = n.isSelected,
                                l = {
                                    key: i,
                                    keyPath: [i],
                                    item: Object(w.a)(e),
                                    domEvent: t
                                };
                            a(l), r ? c ? s(l) : o(l) : c || o(l)
                        }, e.saveNode = function(t) {
                            e.node = t
                        }, e
                    }
                    return Object(k.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.callRef()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.callRef()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props;
                            e.onDestroy && e.onDestroy(e.eventKey)
                        }
                    }, {
                        key: "getPrefixCls",
                        value: function() {
                            return "".concat(this.props.rootPrefixCls, "-item")
                        }
                    }, {
                        key: "getActiveClassName",
                        value: function() {
                            return "".concat(this.getPrefixCls(), "-active")
                        }
                    }, {
                        key: "getSelectedClassName",
                        value: function() {
                            return "".concat(this.getPrefixCls(), "-selected")
                        }
                    }, {
                        key: "getDisabledClassName",
                        value: function() {
                            return "".concat(this.getPrefixCls(), "-disabled")
                        }
                    }, {
                        key: "callRef",
                        value: function() {
                            this.props.manualRef && this.props.manualRef(this)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = Object(c.a)({}, this.props),
                                n = d()(this.getPrefixCls(), t.className, (e = {}, Object(r.a)(e, this.getActiveClassName(), !t.disabled && t.active), Object(r.a)(e, this.getSelectedClassName(), t.isSelected), Object(r.a)(e, this.getDisabledClassName(), t.disabled), e)),
                                a = Object(c.a)(Object(c.a)({}, t.attribute), {}, {
                                    title: "string" === typeof t.title ? t.title : void 0,
                                    className: n,
                                    role: t.role || "menuitem",
                                    "aria-disabled": t.disabled
                                });
                            "option" === t.role ? a = Object(c.a)(Object(c.a)({}, a), {}, {
                                role: "option",
                                "aria-selected": t.isSelected
                            }) : null !== t.role && "none" !== t.role || (a.role = "none");
                            var o = {
                                    onClick: t.disabled ? null : this.onClick,
                                    onMouseLeave: t.disabled ? null : this.onMouseLeave,
                                    onMouseEnter: t.disabled ? null : this.onMouseEnter
                                },
                                s = Object(c.a)({}, t.style);
                            "inline" === t.mode && ("rtl" === t.direction ? s.paddingRight = t.inlineIndent * t.level : s.paddingLeft = t.inlineIndent * t.level), de.forEach((function(e) {
                                return delete t[e]
                            })), delete t.direction;
                            var u = this.props.itemIcon;
                            return "function" === typeof this.props.itemIcon && (u = l.createElement(this.props.itemIcon, this.props)), l.createElement("li", Object(i.a)({}, Object(H.a)(t, ["onClick", "onMouseEnter", "onMouseLeave", "onSelect"]), a, o, {
                                style: s,
                                ref: this.saveNode
                            }), t.children, u)
                        }
                    }]), n
                }(l.Component);
            Fe.isMenuItem = !0, Fe.defaultProps = {
                onSelect: oe,
                onMouseEnter: oe,
                onMouseLeave: oe,
                manualRef: oe
            };
            var He = V((function(e, t) {
                    var n = e.activeKey,
                        i = e.selectedKeys,
                        r = t.eventKey;
                    return {
                        active: n[t.subMenuKey] === r,
                        isSelected: Array.isArray(i) ? -1 !== i.indexOf(r) : i === r
                    }
                }))(Fe),
                We = function(e) {
                    Object(N.a)(n, e);
                    var t = Object(E.a)(n);

                    function n() {
                        var e;
                        return Object(M.a)(this, n), (e = t.apply(this, arguments)).renderInnerMenuItem = function(t) {
                            var n = e.props;
                            return (0, n.renderMenuItem)(t, n.index, e.props.subMenuKey)
                        }, e
                    }
                    return Object(k.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = Object(i.a)({}, this.props),
                                t = e.className,
                                n = void 0 === t ? "" : t,
                                r = e.rootPrefixCls,
                                a = "".concat(r, "-item-group-title"),
                                o = "".concat(r, "-item-group-list"),
                                s = e.title,
                                c = e.children;
                            return de.forEach((function(t) {
                                return delete e[t]
                            })), delete e.onClick, delete e.direction, l.createElement("li", Object(i.a)({}, e, {
                                className: "".concat(n, " ").concat(r, "-item-group")
                            }), l.createElement("div", {
                                className: a,
                                title: "string" === typeof s ? s : void 0
                            }, s), l.createElement("ul", {
                                className: o
                            }, l.Children.map(c, this.renderInnerMenuItem)))
                        }
                    }]), n
                }(l.Component);
            We.isMenuItemGroup = !0, We.defaultProps = {
                disabled: !0
            };
            var Be = function(e) {
                var t = e.className,
                    n = e.rootPrefixCls,
                    i = e.style;
                return l.createElement("li", {
                    className: "".concat(t, " ").concat(n, "-item-divider"),
                    style: i
                })
            };
            Be.defaultProps = {
                disabled: !0,
                className: "",
                style: {}
            };
            var ze = Ve,
                Ue = {
                    adjustX: 1,
                    adjustY: 1
                },
                qe = [0, 0],
                Ge = {
                    topLeft: {
                        points: ["bl", "tl"],
                        overflow: Ue,
                        offset: [0, -4],
                        targetOffset: qe
                    },
                    topCenter: {
                        points: ["bc", "tc"],
                        overflow: Ue,
                        offset: [0, -4],
                        targetOffset: qe
                    },
                    topRight: {
                        points: ["br", "tr"],
                        overflow: Ue,
                        offset: [0, -4],
                        targetOffset: qe
                    },
                    bottomLeft: {
                        points: ["tl", "bl"],
                        overflow: Ue,
                        offset: [0, 4],
                        targetOffset: qe
                    },
                    bottomCenter: {
                        points: ["tc", "bc"],
                        overflow: Ue,
                        offset: [0, 4],
                        targetOffset: qe
                    },
                    bottomRight: {
                        points: ["tr", "br"],
                        overflow: Ue,
                        offset: [0, 4],
                        targetOffset: qe
                    }
                };
            var Xe = l.forwardRef((function(e, t) {
                var n = e.arrow,
                    i = void 0 !== n && n,
                    o = e.prefixCls,
                    c = void 0 === o ? "rc-dropdown" : o,
                    u = e.transitionName,
                    p = e.animation,
                    f = e.align,
                    v = e.placement,
                    b = void 0 === v ? "bottomLeft" : v,
                    h = e.placements,
                    m = void 0 === h ? Ge : h,
                    y = e.getPopupContainer,
                    j = e.showAction,
                    O = e.hideAction,
                    g = e.overlayClassName,
                    x = e.overlayStyle,
                    C = e.visible,
                    M = e.trigger,
                    k = void 0 === M ? ["hover"] : M,
                    w = Object(s.a)(e, ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger"]),
                    N = l.useState(),
                    E = Object(a.a)(N, 2),
                    _ = E[0],
                    S = E[1],
                    I = "visible" in e ? C : _,
                    K = l.useRef(null);
                l.useImperativeHandle(t, (function() {
                    return K.current
                }));
                var P = function() {
                        var t = e.overlay;
                        return "function" === typeof t ? t() : t
                    },
                    D = function(t) {
                        var n = e.onOverlayClick,
                            i = P().props;
                        S(!1), n && n(t), i.onClick && i.onClick(t)
                    },
                    T = function() {
                        var e = P(),
                            t = {
                                prefixCls: "".concat(c, "-menu"),
                                onClick: D
                            };
                        return "string" === typeof e.type && delete t.prefixCls, l.createElement(l.Fragment, null, i && l.createElement("div", {
                            className: "".concat(c, "-arrow")
                        }), l.cloneElement(e, t))
                    },
                    R = O;
                return R || -1 === k.indexOf("contextMenu") || (R = ["click"]), l.createElement(he.a, Object.assign({}, w, {
                    prefixCls: c,
                    ref: K,
                    popupClassName: d()(g, Object(r.a)({}, "".concat(c, "-show-arrow"), i)),
                    popupStyle: x,
                    builtinPlacements: m,
                    action: k,
                    showAction: j,
                    hideAction: R || [],
                    popupPlacement: b,
                    popupAlign: f,
                    popupTransitionName: u,
                    popupAnimation: p,
                    popupVisible: I,
                    stretch: function() {
                        var t = e.minOverlayWidthMatchTrigger,
                            n = e.alignPoint;
                        return "minOverlayWidthMatchTrigger" in e ? t : !n
                    }() ? "minWidth" : "",
                    popup: "function" === typeof e.overlay ? T : T(),
                    onPopupVisibleChange: function(t) {
                        var n = e.onVisibleChange;
                        S(t), "function" === typeof n && n(t)
                    },
                    getPopupContainer: y
                }), function() {
                    var t = e.children,
                        n = t.props ? t.props : {},
                        i = d()(n.className, function() {
                            var t = e.openClassName;
                            return void 0 !== t ? t : "".concat(c, "-open")
                        }());
                    return _ && t ? l.cloneElement(t, {
                        className: i
                    }) : t
                }())
            }));

            function Je(e, t) {
                var n = e.prefixCls,
                    i = e.editable,
                    r = e.locale,
                    a = e.style;
                return i && !1 !== i.showAdd ? l.createElement("button", {
                    ref: t,
                    type: "button",
                    className: "".concat(n, "-nav-add"),
                    style: a,
                    "aria-label": (null === r || void 0 === r ? void 0 : r.addAriaLabel) || "Add tab",
                    onClick: function(e) {
                        i.onEdit("add", {
                            event: e
                        })
                    }
                }, i.addIcon || "+") : null
            }
            var Qe = l.forwardRef(Je);

            function Ye(e, t) {
                var n = e.prefixCls,
                    i = e.id,
                    o = e.tabs,
                    s = e.locale,
                    c = e.mobile,
                    u = e.moreIcon,
                    p = void 0 === u ? "More" : u,
                    f = e.moreTransitionName,
                    v = e.style,
                    b = e.className,
                    h = e.editable,
                    m = e.tabBarGutter,
                    y = e.rtl,
                    O = e.onTabClick,
                    g = Object(l.useState)(!1),
                    x = Object(a.a)(g, 2),
                    C = x[0],
                    M = x[1],
                    k = Object(l.useState)(null),
                    w = Object(a.a)(k, 2),
                    N = w[0],
                    E = w[1],
                    _ = "".concat(i, "-more-popup"),
                    S = "".concat(n, "-dropdown"),
                    I = null !== N ? "".concat(_, "-").concat(N) : null,
                    K = null === s || void 0 === s ? void 0 : s.dropdownAriaLabel,
                    P = l.createElement(ze, {
                        onClick: function(e) {
                            var t = e.key,
                                n = e.domEvent;
                            O(t, n), M(!1)
                        },
                        id: _,
                        tabIndex: -1,
                        role: "listbox",
                        "aria-activedescendant": I,
                        selectedKeys: [N],
                        "aria-label": void 0 !== K ? K : "expanded dropdown"
                    }, o.map((function(e) {
                        return l.createElement(He, {
                            key: e.key,
                            id: "".concat(_, "-").concat(e.key),
                            role: "option",
                            "aria-controls": i && "".concat(i, "-panel-").concat(e.key),
                            disabled: e.disabled
                        }, e.tab)
                    })));

                function D(e) {
                    for (var t = o.filter((function(e) {
                            return !e.disabled
                        })), n = t.findIndex((function(e) {
                            return e.key === N
                        })) || 0, i = t.length, r = 0; r < i; r += 1) {
                        var a = t[n = (n + e + i) % i];
                        if (!a.disabled) return void E(a.key)
                    }
                }
                Object(l.useEffect)((function() {
                    var e = document.getElementById(I);
                    e && e.scrollIntoView && e.scrollIntoView(!1)
                }), [N]), Object(l.useEffect)((function() {
                    C || E(null)
                }), [C]);
                var T = Object(r.a)({}, y ? "marginLeft" : "marginRight", m);
                o.length || (T.visibility = "hidden", T.order = 1);
                var R = d()(Object(r.a)({}, "".concat(S, "-rtl"), y)),
                    A = c ? null : l.createElement(Xe, {
                        prefixCls: S,
                        overlay: P,
                        trigger: ["hover"],
                        visible: C,
                        transitionName: f,
                        onVisibleChange: M,
                        overlayClassName: R,
                        mouseEnterDelay: .1,
                        mouseLeaveDelay: .1
                    }, l.createElement("button", {
                        type: "button",
                        className: "".concat(n, "-nav-more"),
                        style: T,
                        tabIndex: -1,
                        "aria-hidden": "true",
                        "aria-haspopup": "listbox",
                        "aria-controls": _,
                        id: "".concat(i, "-more"),
                        "aria-expanded": C,
                        onKeyDown: function(e) {
                            var t = e.which;
                            if (C) switch (t) {
                                case j.a.UP:
                                    D(-1), e.preventDefault();
                                    break;
                                case j.a.DOWN:
                                    D(1), e.preventDefault();
                                    break;
                                case j.a.ESC:
                                    M(!1);
                                    break;
                                case j.a.SPACE:
                                case j.a.ENTER:
                                    null !== N && O(N, e)
                            } else [j.a.DOWN, j.a.SPACE, j.a.ENTER].includes(t) && (M(!0), e.preventDefault())
                        }
                    }, p));
                return l.createElement("div", {
                    className: d()("".concat(n, "-nav-operations"), b),
                    style: v,
                    ref: t
                }, A, l.createElement(Qe, {
                    prefixCls: n,
                    locale: s,
                    editable: h
                }))
            }
            var $e = l.forwardRef(Ye),
                Ze = Object(l.createContext)(null),
                et = Math.pow(.995, 20);

            function tt(e, t) {
                var n = l.useRef(e),
                    i = l.useState({}),
                    r = Object(a.a)(i, 2)[1];
                return [n.current, function(e) {
                    var i = "function" === typeof e ? e(n.current) : e;
                    i !== n.current && t(i, n.current), n.current = i, r({})
                }]
            }
            var nt = function(e) {
                var t, n = e.position,
                    i = e.prefixCls,
                    r = e.extra;
                if (!r) return null;
                var a = r;
                return "right" === n && (t = a.right || !a.left && a || null), "left" === n && (t = a.left || null), t ? l.createElement("div", {
                    className: "".concat(i, "-extra-content")
                }, t) : null
            };

            function it(e, t) {
                var n, o = l.useContext(Ze),
                    s = o.prefixCls,
                    u = o.tabs,
                    p = e.className,
                    f = e.style,
                    v = e.id,
                    j = e.animated,
                    O = e.activeKey,
                    M = e.rtl,
                    k = e.extra,
                    w = e.editable,
                    N = e.locale,
                    E = e.tabPosition,
                    _ = e.tabBarGutter,
                    S = e.children,
                    I = e.onTabClick,
                    K = e.onTabScroll,
                    P = Object(l.useRef)(),
                    D = Object(l.useRef)(),
                    T = Object(l.useRef)(),
                    R = Object(l.useRef)(),
                    A = function() {
                        var e = Object(l.useRef)(new Map);
                        return [function(t) {
                            return e.current.has(t) || e.current.set(t, l.createRef()), e.current.get(t)
                        }, function(t) {
                            e.current.delete(t)
                        }]
                    }(),
                    L = Object(a.a)(A, 2),
                    V = L[0],
                    F = L[1],
                    H = "top" === E || "bottom" === E,
                    W = tt(0, (function(e, t) {
                        H && K && K({
                            direction: e > t ? "left" : "right"
                        })
                    })),
                    B = Object(a.a)(W, 2),
                    z = B[0],
                    U = B[1],
                    q = tt(0, (function(e, t) {
                        !H && K && K({
                            direction: e > t ? "top" : "bottom"
                        })
                    })),
                    G = Object(a.a)(q, 2),
                    X = G[0],
                    J = G[1],
                    Q = Object(l.useState)(0),
                    Y = Object(a.a)(Q, 2),
                    $ = Y[0],
                    Z = Y[1],
                    ee = Object(l.useState)(0),
                    te = Object(a.a)(ee, 2),
                    ne = te[0],
                    ie = te[1],
                    re = Object(l.useState)(0),
                    ae = Object(a.a)(re, 2),
                    oe = ae[0],
                    se = ae[1],
                    ce = Object(l.useState)(0),
                    le = Object(a.a)(ce, 2),
                    ue = le[0],
                    de = le[1],
                    pe = Object(l.useState)(null),
                    fe = Object(a.a)(pe, 2),
                    ve = fe[0],
                    be = fe[1],
                    he = Object(l.useState)(null),
                    me = Object(a.a)(he, 2),
                    ye = me[0],
                    je = me[1],
                    Oe = Object(l.useState)(0),
                    ge = Object(a.a)(Oe, 2),
                    xe = ge[0],
                    Ce = ge[1],
                    Me = Object(l.useState)(0),
                    ke = Object(a.a)(Me, 2),
                    we = ke[0],
                    Ne = ke[1],
                    Ee = function(e) {
                        var t = Object(l.useRef)([]),
                            n = Object(l.useState)({}),
                            i = Object(a.a)(n, 2)[1],
                            r = Object(l.useRef)("function" === typeof e ? e() : e),
                            o = y((function() {
                                var e = r.current;
                                t.current.forEach((function(t) {
                                    e = t(e)
                                })), t.current = [], r.current = e, i({})
                            }));
                        return [r.current, function(e) {
                            t.current.push(e), o()
                        }]
                    }(new Map),
                    _e = Object(a.a)(Ee, 2),
                    Se = _e[0],
                    Ie = _e[1],
                    Ke = function(e, t, n) {
                        return Object(l.useMemo)((function() {
                            for (var n, i = new Map, r = t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) || x, a = r.left + r.width, o = 0; o < e.length; o += 1) {
                                var s, l = e[o].key,
                                    u = t.get(l);
                                u || (u = t.get(null === (s = e[o - 1]) || void 0 === s ? void 0 : s.key) || x);
                                var d = i.get(l) || Object(c.a)({}, u);
                                d.right = a - d.left - d.width, i.set(l, d)
                            }
                            return i
                        }), [e.map((function(e) {
                            return e.key
                        })).join("_"), t, n])
                    }(u, Se, $),
                    Pe = "".concat(s, "-nav-operations-hidden"),
                    De = 0,
                    Te = 0;

                function Re(e) {
                    return e < De ? De : e > Te ? Te : e
                }
                H ? M ? (De = 0, Te = Math.max(0, $ - ve)) : (De = Math.min(0, ve - $), Te = 0) : (De = Math.min(0, ye - ne), Te = 0);
                var Ae = Object(l.useRef)(),
                    Le = Object(l.useState)(),
                    Ve = Object(a.a)(Le, 2),
                    Fe = Ve[0],
                    He = Ve[1];

                function We() {
                    He(Date.now())
                }

                function Be() {
                    window.clearTimeout(Ae.current)
                }

                function ze() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                        t = Ke.get(e) || {
                            width: 0,
                            height: 0,
                            left: 0,
                            right: 0,
                            top: 0
                        };
                    if (H) {
                        var n = z;
                        M ? t.right < z ? n = t.right : t.right + t.width > z + ve && (n = t.right + t.width - ve) : t.left < -z ? n = -t.left : t.left + t.width > -z + ve && (n = -(t.left + t.width - ve)), J(0), U(Re(n))
                    } else {
                        var i = X;
                        t.top < -X ? i = -t.top : t.top + t.height > -X + ye && (i = -(t.top + t.height - ye)), U(0), J(Re(i))
                    }
                }! function(e, t) {
                    var n = Object(l.useState)(),
                        i = Object(a.a)(n, 2),
                        r = i[0],
                        o = i[1],
                        s = Object(l.useState)(0),
                        c = Object(a.a)(s, 2),
                        u = c[0],
                        d = c[1],
                        p = Object(l.useState)(0),
                        f = Object(a.a)(p, 2),
                        v = f[0],
                        b = f[1],
                        h = Object(l.useState)(),
                        m = Object(a.a)(h, 2),
                        y = m[0],
                        j = m[1],
                        O = Object(l.useRef)(),
                        g = Object(l.useRef)(),
                        x = Object(l.useRef)(null);
                    x.current = {
                        onTouchStart: function(e) {
                            var t = e.touches[0],
                                n = t.screenX,
                                i = t.screenY;
                            o({
                                x: n,
                                y: i
                            }), window.clearInterval(O.current)
                        },
                        onTouchMove: function(e) {
                            if (r) {
                                e.preventDefault();
                                var n = e.touches[0],
                                    i = n.screenX,
                                    a = n.screenY;
                                o({
                                    x: i,
                                    y: a
                                });
                                var s = i - r.x,
                                    c = a - r.y;
                                t(s, c);
                                var l = Date.now();
                                d(l), b(l - u), j({
                                    x: s,
                                    y: c
                                })
                            }
                        },
                        onTouchEnd: function() {
                            if (r && (o(null), j(null), y)) {
                                var e = y.x / v,
                                    n = y.y / v,
                                    i = Math.abs(e),
                                    a = Math.abs(n);
                                if (Math.max(i, a) < .1) return;
                                var s = e,
                                    c = n;
                                O.current = window.setInterval((function() {
                                    Math.abs(s) < .01 && Math.abs(c) < .01 ? window.clearInterval(O.current) : t(20 * (s *= et), 20 * (c *= et))
                                }), 20)
                            }
                        },
                        onWheel: function(e) {
                            var n = e.deltaX,
                                i = e.deltaY,
                                r = 0,
                                a = Math.abs(n),
                                o = Math.abs(i);
                            a === o ? r = "x" === g.current ? n : i : a > o ? (r = n, g.current = "x") : (r = i, g.current = "y"), t(-r, -r) && e.preventDefault()
                        }
                    }, l.useEffect((function() {
                        function t(e) {
                            x.current.onTouchMove(e)
                        }

                        function n(e) {
                            x.current.onTouchEnd(e)
                        }
                        return document.addEventListener("touchmove", t, {
                                passive: !1
                            }), document.addEventListener("touchend", n, {
                                passive: !1
                            }), e.current.addEventListener("touchstart", (function(e) {
                                x.current.onTouchStart(e)
                            }), {
                                passive: !1
                            }), e.current.addEventListener("wheel", (function(e) {
                                x.current.onWheel(e)
                            })),
                            function() {
                                document.removeEventListener("touchmove", t), document.removeEventListener("touchend", n)
                            }
                    }), [])
                }(P, (function(e, t) {
                    function n(e, t) {
                        e((function(e) {
                            return Re(e + t)
                        }))
                    }
                    if (H) {
                        if (ve >= $) return !1;
                        n(U, e)
                    } else {
                        if (ye >= ne) return !1;
                        n(J, t)
                    }
                    return Be(), We(), !0
                })), Object(l.useEffect)((function() {
                    return Be(), Fe && (Ae.current = window.setTimeout((function() {
                        He(0)
                    }), 100)), Be
                }), [Fe]);
                var Ue = function(e, t, n, i, r) {
                        var a, o, s, c = r.tabs,
                            u = r.tabPosition,
                            d = r.rtl;
                        ["top", "bottom"].includes(u) ? (a = "width", o = d ? "right" : "left", s = Math.abs(t.left)) : (a = "height", o = "top", s = -t.top);
                        var p = t[a],
                            f = n[a],
                            v = i[a],
                            b = p;
                        return f + v > p && (b = p - v), Object(l.useMemo)((function() {
                            if (!c.length) return [0, 0];
                            for (var t = c.length, n = t, i = 0; i < t; i += 1) {
                                var r = e.get(c[i].key) || C;
                                if (r[o] + r[a] > s + b) {
                                    n = i - 1;
                                    break
                                }
                            }
                            for (var l = 0, u = t - 1; u >= 0; u -= 1)
                                if ((e.get(c[u].key) || C)[o] < s) {
                                    l = u + 1;
                                    break
                                }
                            return [l, n]
                        }), [e, s, b, u, c.map((function(e) {
                            return e.key
                        })).join("_"), d])
                    }(Ke, {
                        width: ve,
                        height: ye,
                        left: z,
                        top: X
                    }, {
                        width: oe,
                        height: ue
                    }, {
                        width: xe,
                        height: we
                    }, Object(c.a)(Object(c.a)({}, e), {}, {
                        tabs: u
                    })),
                    qe = Object(a.a)(Ue, 2),
                    Ge = qe[0],
                    Xe = qe[1],
                    Je = u.map((function(e) {
                        var t = e.key;
                        return l.createElement(g, {
                            id: v,
                            prefixCls: s,
                            key: t,
                            rtl: M,
                            tab: e,
                            closable: e.closable,
                            editable: w,
                            active: t === O,
                            tabPosition: E,
                            tabBarGutter: _,
                            renderWrapper: S,
                            removeAriaLabel: null === N || void 0 === N ? void 0 : N.removeAriaLabel,
                            ref: V(t),
                            onClick: function(e) {
                                I(t, e)
                            },
                            onRemove: function() {
                                F(t)
                            },
                            onFocus: function() {
                                ze(t), We(), M || (P.current.scrollLeft = 0), P.current.scrollTop = 0
                            }
                        })
                    })),
                    Ye = y((function() {
                        var e, t, n, i, r, a, o, s, c, l = (null === (e = P.current) || void 0 === e ? void 0 : e.offsetWidth) || 0,
                            d = (null === (t = P.current) || void 0 === t ? void 0 : t.offsetHeight) || 0,
                            p = (null === (n = R.current) || void 0 === n ? void 0 : n.offsetWidth) || 0,
                            f = (null === (i = R.current) || void 0 === i ? void 0 : i.offsetHeight) || 0,
                            v = (null === (r = T.current) || void 0 === r ? void 0 : r.offsetWidth) || 0,
                            b = (null === (a = T.current) || void 0 === a ? void 0 : a.offsetHeight) || 0;
                        be(l), je(d), Ce(p), Ne(f);
                        var h = ((null === (o = D.current) || void 0 === o ? void 0 : o.offsetWidth) || 0) - p,
                            m = ((null === (s = D.current) || void 0 === s ? void 0 : s.offsetHeight) || 0) - f;
                        Z(h), ie(m);
                        var y = null === (c = T.current) || void 0 === c ? void 0 : c.className.includes(Pe);
                        se(h - (y ? 0 : v)), de(m - (y ? 0 : b)), Ie((function() {
                            var e = new Map;
                            return u.forEach((function(t) {
                                var n = t.key,
                                    i = V(n).current;
                                i && e.set(n, {
                                    width: i.offsetWidth,
                                    height: i.offsetHeight,
                                    left: i.offsetLeft,
                                    top: i.offsetTop
                                })
                            })), e
                        }))
                    })),
                    it = u.slice(0, Ge),
                    rt = u.slice(Xe + 1),
                    at = [].concat(Object(b.a)(it), Object(b.a)(rt)),
                    ot = Object(l.useState)(),
                    st = Object(a.a)(ot, 2),
                    ct = st[0],
                    lt = st[1],
                    ut = Ke.get(O),
                    dt = Object(l.useRef)();

                function pt() {
                    h.a.cancel(dt.current)
                }
                Object(l.useEffect)((function() {
                    var e = {};
                    return ut && (H ? (M ? e.right = ut.right : e.left = ut.left, e.width = ut.width) : (e.top = ut.top, e.height = ut.height)), pt(), dt.current = Object(h.a)((function() {
                        lt(e)
                    })), pt
                }), [ut, H, M]), Object(l.useEffect)((function() {
                    ze()
                }), [O, ut, Ke, H]), Object(l.useEffect)((function() {
                    Ye()
                }), [M, _, O, u.map((function(e) {
                    return e.key
                })).join("_")]);
                var ft, vt, bt, ht, mt = !!at.length,
                    yt = "".concat(s, "-nav-wrap");
                return H ? M ? (vt = z > 0, ft = z + ve < $) : (ft = z < 0, vt = -z + ve < $) : (bt = X < 0, ht = -X + ye < ne), l.createElement("div", {
                    ref: t,
                    role: "tablist",
                    className: d()("".concat(s, "-nav"), p),
                    style: f,
                    onKeyDown: function() {
                        We()
                    }
                }, l.createElement(nt, {
                    position: "left",
                    extra: k,
                    prefixCls: s
                }), l.createElement(m.a, {
                    onResize: Ye
                }, l.createElement("div", {
                    className: d()(yt, (n = {}, Object(r.a)(n, "".concat(yt, "-ping-left"), ft), Object(r.a)(n, "".concat(yt, "-ping-right"), vt), Object(r.a)(n, "".concat(yt, "-ping-top"), bt), Object(r.a)(n, "".concat(yt, "-ping-bottom"), ht), n)),
                    ref: P
                }, l.createElement(m.a, {
                    onResize: Ye
                }, l.createElement("div", {
                    ref: D,
                    className: "".concat(s, "-nav-list"),
                    style: {
                        transform: "translate(".concat(z, "px, ").concat(X, "px)"),
                        transition: Fe ? "none" : void 0
                    }
                }, Je, l.createElement(Qe, {
                    ref: R,
                    prefixCls: s,
                    locale: N,
                    editable: w,
                    style: {
                        visibility: mt ? "hidden" : null
                    }
                }), l.createElement("div", {
                    className: d()("".concat(s, "-ink-bar"), Object(r.a)({}, "".concat(s, "-ink-bar-animated"), j.inkBar)),
                    style: ct
                }))))), l.createElement($e, Object(i.a)({}, e, {
                    ref: T,
                    prefixCls: s,
                    tabs: at,
                    className: !mt && Pe
                })), l.createElement(nt, {
                    position: "right",
                    extra: k,
                    prefixCls: s
                }))
            }
            var rt = l.forwardRef(it);

            function at(e) {
                var t = e.id,
                    n = e.activeKey,
                    i = e.animated,
                    a = e.tabPosition,
                    o = e.rtl,
                    s = e.destroyInactiveTabPane,
                    c = l.useContext(Ze),
                    u = c.prefixCls,
                    p = c.tabs,
                    f = i.tabPane,
                    v = p.findIndex((function(e) {
                        return e.key === n
                    }));
                return l.createElement("div", {
                    className: d()("".concat(u, "-content-holder"))
                }, l.createElement("div", {
                    className: d()("".concat(u, "-content"), "".concat(u, "-content-").concat(a), Object(r.a)({}, "".concat(u, "-content-animated"), f)),
                    style: v && f ? Object(r.a)({}, o ? "marginRight" : "marginLeft", "-".concat(v, "00%")) : null
                }, p.map((function(e) {
                    return l.cloneElement(e.node, {
                        key: e.key,
                        prefixCls: u,
                        tabKey: e.key,
                        id: t,
                        animated: f,
                        active: e.key === n,
                        destroyInactiveTabPane: s
                    })
                }))))
            }

            function ot(e) {
                var t = e.prefixCls,
                    n = e.forceRender,
                    i = e.className,
                    r = e.style,
                    o = e.id,
                    s = e.active,
                    u = e.animated,
                    p = e.destroyInactiveTabPane,
                    f = e.tabKey,
                    v = e.children,
                    b = l.useState(n),
                    h = Object(a.a)(b, 2),
                    m = h[0],
                    y = h[1];
                l.useEffect((function() {
                    s ? y(!0) : p && y(!1)
                }), [s, p]);
                var j = {};
                return s || (u ? (j.visibility = "hidden", j.height = 0, j.overflowY = "hidden") : j.display = "none"), l.createElement("div", {
                    id: o && "".concat(o, "-panel-").concat(f),
                    role: "tabpanel",
                    tabIndex: s ? 0 : -1,
                    "aria-labelledby": o && "".concat(o, "-tab-").concat(f),
                    "aria-hidden": !s,
                    style: Object(c.a)(Object(c.a)({}, j), r),
                    className: d()("".concat(t, "-tabpane"), s && "".concat(t, "-tabpane-active"), i)
                }, (s || m || n) && v)
            }
            var st = 0;

            function ct(e, t) {
                var n, u, b = e.id,
                    h = e.prefixCls,
                    m = void 0 === h ? "rc-tabs" : h,
                    y = e.className,
                    j = e.children,
                    O = e.direction,
                    g = e.activeKey,
                    x = e.defaultActiveKey,
                    C = e.editable,
                    M = e.animated,
                    k = void 0 === M ? {
                        inkBar: !0,
                        tabPane: !1
                    } : M,
                    w = e.tabPosition,
                    N = void 0 === w ? "top" : w,
                    E = e.tabBarGutter,
                    _ = e.tabBarStyle,
                    S = e.tabBarExtraContent,
                    I = e.locale,
                    K = e.moreIcon,
                    P = e.moreTransitionName,
                    D = e.destroyInactiveTabPane,
                    T = e.renderTabBar,
                    R = e.onChange,
                    A = e.onTabClick,
                    L = e.onTabScroll,
                    V = Object(s.a)(e, ["id", "prefixCls", "className", "children", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll"]),
                    F = function(e) {
                        return Object(p.a)(e).map((function(e) {
                            if (l.isValidElement(e)) {
                                var t = void 0 !== e.key ? String(e.key) : void 0;
                                return Object(c.a)(Object(c.a)({
                                    key: t
                                }, e.props), {}, {
                                    node: e
                                })
                            }
                            return null
                        })).filter((function(e) {
                            return e
                        }))
                    }(j),
                    H = "rtl" === O;
                u = !1 === k ? {
                    inkBar: !1,
                    tabPane: !1
                } : !0 === k ? {
                    inkBar: !0,
                    tabPane: !0
                } : Object(c.a)({
                    inkBar: !0,
                    tabPane: !1
                }, "object" === Object(o.a)(k) ? k : {});
                var W = Object(l.useState)(!1),
                    B = Object(a.a)(W, 2),
                    z = B[0],
                    U = B[1];
                Object(l.useEffect)((function() {
                    U(Object(f.a)())
                }), []);
                var q = Object(v.a)((function() {
                        var e;
                        return null === (e = F[0]) || void 0 === e ? void 0 : e.key
                    }), {
                        value: g,
                        defaultValue: x
                    }),
                    G = Object(a.a)(q, 2),
                    X = G[0],
                    J = G[1],
                    Q = Object(l.useState)((function() {
                        return F.findIndex((function(e) {
                            return e.key === X
                        }))
                    })),
                    Y = Object(a.a)(Q, 2),
                    $ = Y[0],
                    Z = Y[1];
                Object(l.useEffect)((function() {
                    var e, t = F.findIndex((function(e) {
                        return e.key === X
                    })); - 1 === t && (t = Math.max(0, Math.min($, F.length - 1)), J(null === (e = F[t]) || void 0 === e ? void 0 : e.key));
                    Z(t)
                }), [F.map((function(e) {
                    return e.key
                })).join("_"), X, $]);
                var ee = Object(v.a)(null, {
                        value: b
                    }),
                    te = Object(a.a)(ee, 2),
                    ne = te[0],
                    ie = te[1],
                    re = N;
                z && !["left", "right"].includes(N) && (re = "top"), Object(l.useEffect)((function() {
                    b || (ie("rc-tabs-".concat(st)), st += 1)
                }), []);
                var ae, oe = {
                        id: ne,
                        activeKey: X,
                        animated: u,
                        tabPosition: re,
                        rtl: H,
                        mobile: z
                    },
                    se = Object(c.a)(Object(c.a)({}, oe), {}, {
                        editable: C,
                        locale: I,
                        moreIcon: K,
                        moreTransitionName: P,
                        tabBarGutter: E,
                        onTabClick: function(e, t) {
                            null === A || void 0 === A || A(e, t), J(e), null === R || void 0 === R || R(e)
                        },
                        onTabScroll: L,
                        extra: S,
                        style: _,
                        panes: j
                    });
                return ae = T ? T(se, rt) : l.createElement(rt, se), l.createElement(Ze.Provider, {
                    value: {
                        tabs: F,
                        prefixCls: m
                    }
                }, l.createElement("div", Object(i.a)({
                    ref: t,
                    id: b,
                    className: d()(m, "".concat(m, "-").concat(re), (n = {}, Object(r.a)(n, "".concat(m, "-mobile"), z), Object(r.a)(n, "".concat(m, "-editable"), C), Object(r.a)(n, "".concat(m, "-rtl"), H), n), y)
                }, V), ae, l.createElement(at, Object(i.a)({
                    destroyInactiveTabPane: D
                }, oe, {
                    animated: u
                }))))
            }
            var lt = l.forwardRef(ct);
            lt.TabPane = ot;
            var ut = lt;
            t.default = ut
        },
        tSko: function(e, t, n) {
            "use strict";
            var i = n("TqRt"),
                r = n("284h");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("q1tI")),
                o = i(n("SRve")),
                s = i(n("KQxl")),
                c = function(e, t) {
                    return a.createElement(s.default, Object.assign({}, e, {
                        ref: t,
                        icon: o.default
                    }))
                };
            c.displayName = "PlusOutlined";
            var l = a.forwardRef(c);
            t.default = l
        }
    },
    [
        [12, 1, 2, 0, 3, 4, 5, 6, 7, 8]
    ]
]);
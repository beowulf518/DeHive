_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [17], {
        6: function(e, t, i) {
            i("OAIh"), e.exports = i("m696")
        },
        "7/s4": function(e, t, i) {
            "use strict";
            var a, n = i("hKbo"),
                s = (a = n) && a.__esModule ? a : {
                    default: a
                };
            e.exports = s.default
        },
        CBmO: function(e, t, i) {
            e.exports = {
                green: "JoinSection_green__QXj40",
                join: "JoinSection_join__OfBMa",
                buttons: "JoinSection_buttons__3Gc4K",
                btn: "JoinSection_btn__2zmf_",
                join__container: "JoinSection_join__container__2ZayR"
            }
        },
        F3zV: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return o
            }));
            var a = i("7/s4"),
                n = i.n(a),
                s = i("0lfv"),
                o = function(e, t, i, a, o) {
                    n.a.dataLayer({
                        dataLayer: {
                            event: "event",
                            eventCategory: "".concat(i, " | ").concat(t),
                            eventAction: "".concat(a ? "(".concat(a, ") ").concat(s.f[a]) : a, " | ").concat(window.location.pathname, " | ").concat(e),
                            eventLabel: o
                        }
                    })
                }
        },
        Kacz: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                console.warn("[react-gtm]", e)
            }
        },
        NzLf: function(e, t, i) {
            e.exports = {
                green: "Team_green__3ZAwY",
                teamWrapper: "Team_teamWrapper__17R3_",
                team: "Team_team__QPm76",
                teamBox: "Team_teamBox__1BAOP",
                team__name: "Team_team__name__3bcl3",
                team__position: "Team_team__position__3HftH",
                team__image: "Team_team__image__IKrSM",
                team__social: "Team_team__social__28TFI"
            }
        },
        Olhu: function(e, t, i) {
            e.exports = {
                green: "Mission_green__BQlEQ",
                mission: "Mission_mission__2txP4",
                missionInfo: "Mission_missionInfo__2oehf",
                missionWrapper: "Mission_missionWrapper__FF0aI"
            }
        },
        TlOk: function(e, t, i) {
            "use strict";
            var a = i("q1tI");
            t.a = function(e) {
                var t = Object(a.useState)(!1),
                    i = t[0],
                    n = t[1],
                    s = Object(a.useCallback)((function(e) {
                        e.matches ? n(!0) : n(!1)
                    }), []);
                return Object(a.useEffect)((function() {
                    var t = window.matchMedia("(max-width: ".concat(e, "px)"));
                    return t.addListener(s), t.matches && n(!0),
                        function() {
                            return t.removeListener(s)
                        }
                }), []), i
            }
        },
        U9PK: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i("nKUr"),
                n = (i("q1tI"), i("6iYd")),
                s = i("AQSq"),
                o = i("F3zV"),
                c = i("rKCp"),
                r = i("TSYQ"),
                l = i.n(r),
                d = i("CBmO"),
                m = i.n(d),
                h = function() {
                    var e = Object(c.a)(),
                        t = e.chainId,
                        i = e.account;
                    return Object(a.jsx)("section", {
                        className: m.a.join,
                        children: Object(a.jsxs)("div", {
                            className: m.a.join__container,
                            children: [Object(a.jsx)("h3", {
                                children: "Join the Cell"
                            }), Object(a.jsx)("p", {
                                children: "to learn more about our DeFi index fund and stay on top of the news"
                            }), Object(a.jsxs)("div", {
                                children: [Object(a.jsxs)("a", {
                                    href: "https://t.me/DeCell_chat",
                                    className: l()("btn", m.a.btn),
                                    rel: "noreferrer",
                                    target: "_blank",
                                    onClick: function() {
                                        s.b({
                                            action: "click",
                                            category: "buttons",
                                            label: "Join Telegram"
                                        }), Object(o.a)("Join Telegram", "", void 0, t, i)
                                    },
                                    children: [Object(a.jsx)("img", {
                                        src: "/assets/images/telegram.svg"
                                    }), "Join Telegram"]
                                }), Object(a.jsxs)("a", {
                                    href: "https://twitter.com/decell_finance",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    className: l()("btn", m.a.btn),
                                    children: [Object(a.jsx)("img", {
                                        src: "/assets/images/twitter-about.svg"
                                    }), "Join Twitter"]
                                })]
                            })]
                        })
                    })
                },
                u = i("Olhu"),
                _ = i.n(u),
                p = function() {
                    return Object(a.jsx)("section", {
                        className: _.a.missionWrapper,
                        children: Object(a.jsx)("div", {
                            className: "container",
                            children: Object(a.jsxs)("div", {
                                className: _.a.mission,
                                children: [Object(a.jsx)("img", {
                                    src: "/assets/images/mission.webp",
                                    alt: "Mike Morhulets"
                                }), Object(a.jsxs)("div", {
                                    className: _.a.missionInfo,
                                    children: [Object(a.jsx)("h2", {
                                        children: "Our mission"
                                    }), Object(a.jsx)("p", {
                                        children: "DeCell supports the idea of a decentralized financial system and wants to contribute by building economically justified and authentic crypto indexes."
                                    }), Object(a.jsx)("p", {
                                        children: "Our mission is to facilitate global DeFi adoption by creating simple and efficient instruments for crypto traders. We believe that only with highly secure and easy-to-use tools that bring stable passive profit, we can make DeFi available to the mass audience."
                                    })]
                                })]
                            })
                        })
                    })
                },
                b = i("YFqc"),
                j = i.n(b),
                g = i("czxv"),
                f = i.n(g),
                v = function() {
                    return Object(a.jsx)("section", {
                        children: Object(a.jsx)("div", {
                            className: "container",
                            children: Object(a.jsxs)("div", {
                                className: f.a.support,
                                children: [Object(a.jsx)("h3", {
                                    children: "Our marketing activities supported by:"
                                }), Object(a.jsxs)("div", {
                                    className: f.a.supportInfo,
                                    children: [Object(a.jsx)("img", {
                                        src: "/assets/images/support.png",
                                        alt: "Majinx"
                                    }), Object(a.jsx)("p", {
                                        children: "Full support in Marketing & PR for Blockchain & Startups companies"
                                    }), Object(a.jsxs)("div", {
                                        children: [Object(a.jsx)(j.a, {
                                            href: "https://twitter.com/Majinx_agency",
                                            as: "https://twitter.com/Majinx_agency",
                                            children: Object(a.jsx)("a", {
                                                target: "_blank",
                                                children: Object(a.jsx)("img", {
                                                    src: "/assets/images/twitter.svg",
                                                    alt: "twitter"
                                                })
                                            })
                                        }), Object(a.jsx)(j.a, {
                                            href: "https://majinx.io",
                                            as: "https://majinx.io",
                                            children: Object(a.jsx)("a", {
                                                target: "_blank",
                                                children: Object(a.jsx)("img", {
                                                    src: "/assets/images/support/global.svg",
                                                    alt: "global"
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                x = i("TlOk"),
                O = i("NzLf"),
                w = i.n(O),
                y = [{
                    id: "1",
                    name: "Sergey Onyshchenko",
                    position: "Co-Founder",
                    image: "/assets/images/team/serhii_o.png",
                    linkedIn: "https://www.linkedin.com/in/sergeyonishenko/",
                    twitter: "https://twitter.com/S_Onishchenko",
                    description: "Sergey is a blockchain enthusiast contributing and engaging heavily in building a decentralized society. Co-Founder and current CEO of Blaize, an outsourcing blockchain development company. Former CBDO of GEO Protocol. "
                }, {
                    id: "2",
                    name: "Mike Morhulets",
                    position: "Chief Executive Officer (CEO)",
                    image: "/assets/images/team/mike_m.png",
                    linkedIn: "https://www.linkedin.com/in/mykhailo-morhulets-3b1644109/",
                    twitter: "https://twitter.com/MikhailoMorgul",
                    description: "Mike was offered the CEO position due to his outstanding career achievements and explicit knowledge of the DeFi and crypto market. He has overseen operational and marketing departments for multiple projects, including GeoProtocol and Innovecs."
                }, {
                    id: "3",
                    name: "Pavel Horbonos ",
                    position: "Chief Technology Officer (CTO)",
                    image: "/assets/images/team/pavel_h.png",
                    linkedIn: "https://www.linkedin.com/in/pavelmidvel/",
                    twitter: "https://twitter.com/MidvelCorp",
                    description: "Pavel is a Blockchain Solutions Architect with 5+ years of experience in C++, Solidity, and Rust. He is a current lead of DeFi analytics and blockchain security teams at Blaize and a blockchain solution architect at Zokyo."
                }, {
                    id: "4",
                    name: "Alex Korobeinikov",
                    position: "Head of Product",
                    image: "/assets/images/team/alex_k.png",
                    linkedIn: "https://www.linkedin.com/in/aleksei-korobeinikov/",
                    twitter: "https://twitter.com/kaykorobey",
                    description: "Alex is a Blockchain Solutions Architect and R&D Engineer focused on complex blockchain technologies. He has worked on 11 blockchains and built and successfully delivered 70+ projects with DLT as the core component."
                }, {
                    id: "5",
                    name: "Pasha Bergman",
                    position: "Chief Business Development Officer (CBDO)",
                    image: "/assets/images/team/pasha_b.png",
                    linkedIn: "https://www.linkedin.com/in/pasha-bergman/",
                    description: "Pasha is a current CBDO at DeCell with more than four years of experience with creating and promoting blockchain projects. Former CCO at Lab3M, TRON. Pasha connects people, combining his technical and business background in order to push ideas to success."
                }],
                k = function() {
                    var e = Object(x.a)(992);
                    return Object(a.jsx)("section", {
                        className: w.a.teamWrapper,
                        children: Object(a.jsxs)("div", {
                            className: "container",
                            children: [Object(a.jsx)("h2", {
                                children: "Our Team"
                            }), Object(a.jsx)("div", {
                                className: w.a.team,
                                children: y.map((function(t) {
                                    return Object(a.jsxs)("div", {
                                        className: w.a.teamBox,
                                        children: [Object(a.jsx)("div", {
                                            className: w.a.team__image,
                                            children: Object(a.jsx)("img", {
                                                src: t.image,
                                                alt: t.name
                                            })
                                        }), Object(a.jsxs)("div", {
                                            className: w.a.teamInfo,
                                            children: [Object(a.jsx)("div", {
                                                className: w.a.team__name,
                                                children: t.name
                                            }), Object(a.jsx)("div", {
                                                className: w.a.team__position,
                                                children: t.position
                                            }), Object(a.jsxs)("div", {
                                                className: w.a.team__social,
                                                children: [t.linkedIn && Object(a.jsx)("a", {
                                                    href: t.linkedIn,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: Object(a.jsx)("img", {
                                                        src: "/assets/images/linkedin.svg"
                                                    })
                                                }), t.twitter && Object(a.jsx)("a", {
                                                    href: t.twitter,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: Object(a.jsx)("img", {
                                                        src: "/assets/images/twitter.svg"
                                                    })
                                                })]
                                            }), !e && Object(a.jsx)("p", {
                                                children: t.description
                                            })]
                                        }), e && Object(a.jsx)("p", {
                                            children: t.description
                                        })]
                                    }, t.id)
                                }))
                            })]
                        })
                    })
                },
                N = i("gEeH"),
                B = i.n(N),
                M = function() {
                    var e = Object(x.a)(992);
                    return Object(a.jsx)("section", {
                        className: B.a.welcome,
                        children: Object(a.jsxs)("div", {
                            className: "container",
                            children: [Object(a.jsxs)("div", {
                                className: B.a.welcome__content,
                                children: [Object(a.jsx)("h1", {
                                    children: "Who builds DeCell?"
                                }), Object(a.jsxs)("div", {
                                    className: B.a.welcome__content__foot,
                                    children: [Object(a.jsx)("p", {
                                        children: "DeCell is a DeFi asset management platform that provides yield-generating crypto indexes and staking pools that enable automatic compound interest. With these DeFi tools, the platform allows users to maximize their profit with minimum effort."
                                    }), Object(a.jsx)("p", {
                                        children: "DeCell is built and fully maintained by Blaize, a blockchain development company and a smart contract auditing firm with 5+ years of experience in the market."
                                    })]
                                }), Object(a.jsx)(j.a, {
                                    href: "https://blaize.tech/",
                                    as: "https://blaize.tech/",
                                    children: Object(a.jsxs)("a", {
                                        className: "btn border",
                                        target: "_blank",
                                        children: [
                                        //     Object(a.jsx)("i", {
                                        //     className: "icon-blaize_logo"
                                        // }), 
                                        Object(a.jsx)("span", {
                                            children: "Visit Blaize"
                                        })]
                                    })
                                })]
                            }), Object(a.jsx)("div", {
                                className: B.a.welcome__image,
                                children: Object(a.jsx)("img", {
                                    src: "/assets/images/who_build.svg",
                                    alt: "Who builds DeCell"
                                })
                            }), e && Object(a.jsx)("div", {
                                className: B.a.build__image_mobile,
                                children: Object(a.jsx)("img", {
                                    src: "/assets/images/mike_m.webp",
                                    alt: "Mike Morhulets"
                                })
                            }), Object(a.jsxs)("div", {
                                className: B.a.build,
                                children: [!e && Object(a.jsx)("div", {
                                    className: B.a.build__image,
                                    children: Object(a.jsx)("img", {
                                        src: "/assets/images/mike_m.webp",
                                        alt: "Mike Morhulets"
                                    })
                                }), Object(a.jsxs)("div", {
                                    className: B.a.buildInfo,
                                    children: [Object(a.jsx)("p", {
                                        children: "At DeCell, we believe that anyone should benefit from DeFi regardless of their age, experience, or location. That\u2019s why we\u2019ve created the platform with multiple financial instruments to help you get stable passive income. It\u2019s not about spending hours on DEXes DEXes anymore \u2014 it\u2019s all about choosing the right tool. So let DeCell be this right tool you."
                                    }), Object(a.jsxs)("div", {
                                        className: B.a.buildInfoHuman,
                                        children: [Object(a.jsx)("span", {
                                            children: "Mike Morhulets"
                                        }), Object(a.jsx)("span", {
                                            children: "DeCell Chief Executive Officer"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                I = function() {
                    return Object(a.jsxs)(a.Fragment, {
                        children: [Object(a.jsx)(n.a, {
                            title: "About us - DeCell"
                        }), Object(a.jsx)(M, {}), Object(a.jsx)(p, {}), Object(a.jsx)(k, {}), Object(a.jsx)(v, {}), Object(a.jsx)(h, {})]
                    })
                };
            t.default = I
        },
        czxv: function(e, t, i) {
            e.exports = {
                green: "Support_green__1FLu_",
                support: "Support_support__1dffh",
                supportInfo: "Support_supportInfo__1oZrl"
            }
        },
        gEeH: function(e, t, i) {
            e.exports = {
                green: "WhoBuild_green__32Vq_",
                welcome: "WhoBuild_welcome__17SzC",
                welcome__image: "WhoBuild_welcome__image__1HUuG",
                welcome__content: "WhoBuild_welcome__content__1NJg9",
                welcome__content__foot: "WhoBuild_welcome__content__foot__YiWSZ",
                build: "WhoBuild_build__30vsg",
                build__image: "WhoBuild_build__image__3oceu",
                buildInfo: "WhoBuild_buildInfo__1vxEm",
                build__image_mobile: "WhoBuild_build__image_mobile__1DCLj",
                buildInfoHuman: "WhoBuild_buildInfoHuman__J2wa3"
            }
        },
        hKbo: function(e, t, i) {
            "use strict";
            var a, n = i("wWlz"),
                s = (a = n) && a.__esModule ? a : {
                    default: a
                };
            var o = {
                dataScript: function(e) {
                    var t = document.createElement("script");
                    return t.innerHTML = e, t
                },
                gtm: function(e) {
                    var t = s.default.tags(e);
                    return {
                        noScript: function() {
                            var e = document.createElement("noscript");
                            return e.innerHTML = t.iframe, e
                        },
                        script: function() {
                            var e = document.createElement("script");
                            return e.innerHTML = t.script, e
                        },
                        dataScript: this.dataScript(t.dataLayerVar)
                    }
                },
                initialize: function(e) {
                    var t = e.gtmId,
                        i = e.events,
                        a = void 0 === i ? {} : i,
                        n = e.dataLayer,
                        s = e.dataLayerName,
                        o = void 0 === s ? "dataLayer" : s,
                        c = e.auth,
                        r = void 0 === c ? "" : c,
                        l = e.preview,
                        d = void 0 === l ? "" : l,
                        m = this.gtm({
                            id: t,
                            events: a,
                            dataLayer: n || void 0,
                            dataLayerName: o,
                            auth: r,
                            preview: d
                        });
                    n && document.head.appendChild(m.dataScript), document.head.insertBefore(m.script(), document.head.childNodes[0]), document.body.insertBefore(m.noScript(), document.body.childNodes[0])
                },
                dataLayer: function(e) {
                    var t = e.dataLayer,
                        i = e.dataLayerName,
                        a = void 0 === i ? "dataLayer" : i;
                    if (window[a]) return window[a].push(t);
                    var n = s.default.dataLayer(t, a),
                        o = this.dataScript(n);
                    document.head.insertBefore(o, document.head.childNodes[0])
                }
            };
            e.exports = o
        },
        m696: function(e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about-us", function() {
                return i("U9PK")
            }])
        },
        wWlz: function(e, t, i) {
            "use strict";
            var a, n = i("Kacz"),
                s = (a = n) && a.__esModule ? a : {
                    default: a
                };
            var o = {
                tags: function(e) {
                    var t = e.id,
                        i = e.events,
                        a = e.dataLayer,
                        n = e.dataLayerName,
                        o = e.preview,
                        c = "&gtm_auth=" + e.auth,
                        r = "&gtm_preview=" + o;
                    return t || (0, s.default)("GTM Id is required"), {
                        iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + c + r + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
                        script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(i).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + c + r + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + n + "','" + t + "');",
                        dataLayerVar: this.dataLayer(a, n)
                    }
                },
                dataLayer: function(e, t) {
                    return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
                }
            };
            e.exports = o
        }
    },
    [
        [6, 1, 2, 0, 3, 4, 5, 6]
    ]
]);
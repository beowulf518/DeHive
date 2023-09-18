_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [20], {
        9: function(e, t, c) {
            c("OAIh"), e.exports = c("epkn")
        },
        PJKM: function(e, t, c) {
            "use strict";
            var a;
            c.d(t, "a", (function() {
                    return a
                })),
                function(e) {
                    e.NUXTokenPool = "NUXTokenPool", e.NUXTMaxPool = "NUXTMaxPool", e.preSaleTokenPool = "preSaleTokenPool", e.purchasedPublicSale = "purchasedPublicSale", e.preSaleMaxPool = "preSaleMaxPool", e.publicMaxPool = "publicMaxPool", e.rateForToken = "rateForToken", e.getDecimal = "getDecimal", e.getPurchased = "getPurchased", e.purchasedPublicQuery = "purchasedPublicQuery", e.getBalanceOf = "getBalanceOf", e.maxTokensAmount = "maxTokensAmount", e.getClaimed = "getClaimed", e.getClaimable = "getClaimable"
                }(a || (a = {}))
        },
        W8Sr: function(e, t, c) {
            e.exports = {
                green: "TokenClaimInstructions_green__1GbpE",
                token_description: "TokenClaimInstructions_token_description__3wOsZ"
            }
        },
        bPf6: function(e, t, c) {
            e.exports = {
                green: "claim_green__1imlO",
                claim: "claim_claim__kfmo7",
                loading: "claim_loading__1niAg",
                blocks: "claim_blocks__1HoHX",
                block: "claim_block__2-VQO",
                swing: "claim_swing__21tpR",
                claim_form: "claim_claim_form__lmjCN",
                claim_form_head: "claim_claim_form_head__3Z1k5",
                address: "claim_address__2pvrC",
                claim_connect: "claim_claim_connect__3F5Np",
                claim_content: "claim_claim_content__jwQAv",
                claim_content_weekly: "claim_claim_content_weekly__3cEc4",
                claim_content_item: "claim_claim_content_item__3t0yq",
                claim_content_item_currency: "claim_claim_content_item_currency__3OwxK",
                description: "claim_description__3diQT",
                claim_mobile: "claim_claim_mobile__2BRIb",
                claim_desktop: "claim_claim_desktop__TB_Vt"
            }
        },
        dVhw: function(e, t, c) {},
        epkn: function(e, t, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/claim", function() {
                return c("oYfJ")
            }])
        },
        oYfJ: function(e, t, c) {
            "use strict";
            c.r(t);
            c("MaXC");
            var a = c("4IMT"),
                n = c.n(a),
                i = c("nKUr"),
                s = c("vJKn"),
                r = c.n(s),
                l = c("rg98"),
                o = (c("pjuD"), c("rR1Q")),
                d = c.n(o),
                m = (c("nTym"), c("qu0K")),
                u = c.n(m),
                j = c("xvhg"),
                _ = c("q1tI"),
                b = c("1ZD8"),
                h = c("kB5k"),
                O = c.n(h),
                f = c("6iYd"),
                x = c("rKCp"),
                p = c("0lfv"),
                g = c("A0RV"),
                k = c("PJKM"),
                v = c("W8Sr"),
                w = c.n(v),
                N = function() {
                    return Object(i.jsx)("section", {
                        className: w.a.token_description,
                        children: Object(i.jsxs)("div", {
                            className: "container",
                            children: [Object(i.jsx)("h4", {
                                children: "DC TOKEN CLAIM INSTRUCTIONS "
                            }), Object(i.jsxs)("ol", {
                                children: [Object(i.jsx)("li", {
                                    children: "Press connect MetaMask on the top of the \u2018claim page\u2019 The button will start to display your address as soon as it\u2019s connected."
                                }), Object(i.jsx)("li", {
                                    children: "Make sure you have a sufficient amount of ETH to cover the gas fee."
                                }), Object(i.jsx)("li", {
                                    children: "Find the \u2018available for claim\u2019 field in the 'claim form' and consider claiming."
                                }), Object(i.jsxs)("li", {
                                    children: ["Press [Claim DC] if you want to proceed. 5.Sign the transaction in the MetaMask pop-up window. Wait until the transaction will be confirmed. Please, wait until the system notifies you that it\u2019s done. Check more details about", " ", Object(i.jsx)("a", {
                                        href: "https://medium.com/decell/how-to-claim-dhv-6b721b56b289",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        children: "HOW TO CLAIM DC"
                                    }), " ", "here and", " ", Object(i.jsx)("a", {
                                        href: "https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-view-see-your-tokens-custom-tokens-in-Metamask",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        children: "HOW TO ADD DC TO MM"
                                    }), " ", "to be able to see them in your wallet."]
                                })]
                            })]
                        })
                    })
                },
                y = c("bPf6"),
                T = c.n(y),
                C = function() {
                    var e = u.a.useForm(),
                        t = Object(j.a)(e, 1)[0],
                        c = Object(_.useState)(!1),
                        a = c[0],
                        s = c[1],
                        o = Object(x.a)().account,
                        m = Object(x.g)(),
                        h = m.purchased,
                        v = m.claim,
                        w = m.claimed,
                        y = m.claimable,
                        C = m.estimateGas.claim,
                        M = Object(b.useQuery)([k.a.getPurchased, o, a], (function() {
                            return Object(g.a)(h, [o])
                        })).data,
                        P = Object(b.useQuery)([k.a.getClaimed, o, a], (function() {
                            return Object(g.a)(w, [o])
                        })).data,
                        V = Object(b.useQuery)([k.a.getClaimable, o, a], (function() {
                            return Object(g.a)(y, [o])
                        })).data,
                        D = Object(b.useMutation)((function() {
                            return Object(g.a)(v, [], C)
                        })),
                        A = D.mutate,
                        S = D.data,
                        H = D.error,
                        E = Object(_.useMemo)((function() {
                            return M && P ? new O.a(M.toString()).minus(new O.a(P.toString())) : new O.a(0)
                        }), [M, P]),
                        F = Object(_.useMemo)((function() {
                            return M ? new O.a(Number(M.toString()) / p.b) : new O.a(0)
                        }), [M]);
                    Object(_.useEffect)((function() {
                        H && d.a.error({
                            className: "notificationError",
                            message: null === H || void 0 === H ? void 0 : H.message
                        })
                    }), [H]);
                    var I = function() {
                        var e = Object(l.a)(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, null === S || void 0 === S ? void 0 : S.wait();
                                    case 2:
                                        d.a.error({
                                            message: "Claim Success",
                                            className: "notificationSuccess"
                                        }), s(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    Object(_.useEffect)((function() {
                        S && (s(!0), I())
                    }), [S]);
                    var K = function() {
                        var e = Object(l.a)(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        A();
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return Object(i.jsxs)(i.Fragment, {
                        children: [Object(i.jsx)(f.a, {
                            title: "Claim DC"
                        }), Object(i.jsx)("div", {
                            className: T.a.claim,
                            children: Object(i.jsx)("div", {
                                className: T.a.claim_form,
                                children: Object(i.jsxs)("div", {
                                    className: "container",
                                    children: [Object(i.jsxs)("div", {
                                        className: T.a.claim_form_head,
                                        children: [Object(i.jsx)("h1", {
                                            children: "Claim your DC"
                                        }), Object(i.jsx)("div", {
                                            children: "Vesting finished Sat Feb 19 2022 17:00:00 GMT+0000"
                                        }), Object(i.jsxs)("div", {
                                            className: T.a.address,
                                            children: [Object(i.jsx)("h5", {
                                                children: "Vesting contract address"
                                            }), Object(i.jsx)("p", {
                                                children: Object(i.jsx)("a", {
                                                    href: "https://etherscan.io/address/0x06383178F7F8A8a0066d367A3020a2007dE6C522",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: g.b.DHVTokensale
                                                })
                                            }), Object(i.jsx)("h5", {
                                                children: "DC contract address"
                                            }), Object(i.jsx)("p", {
                                                children: Object(i.jsx)("a", {
                                                    href: "https://etherscan.io/address/0x62Dc4817588d53a056cBbD18231d91ffCcd34b2A",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: g.b.DHV
                                                })
                                            })]
                                        })]
                                    }), Object(i.jsxs)("div", {
                                        className: T.a.claim_content,
                                        children: [Object(i.jsxs)(u.a, {
                                            layout: "vertical",
                                            onFinish: K,
                                            form: t,
                                            children: [Object(i.jsxs)("div", {
                                                className: T.a.claim_content_item,
                                                children: [Object(i.jsx)("div", {
                                                    children: "YOUR TOKENS IN CONTRACT:"
                                                }), Object(i.jsx)("div", {
                                                    className: T.a.claim_content_item_currency,
                                                    children: Object(i.jsxs)("div", {
                                                        children: [Object(i.jsxs)("span", {
                                                            children: [o && E ? Object(p.i)(E.toString()).toFixed(4) : 0, " ", "DC"]
                                                        }), Object(i.jsx)("img", {
                                                            src: "/assets/images/currency/dhv_icon.svg",
                                                            alt: "DC"
                                                        })]
                                                    })
                                                })]
                                            }), Object(i.jsxs)("div", {
                                                className: T.a.claim_content_item,
                                                children: [Object(i.jsx)("div", {
                                                    children: "AVAILABLE FOR CLAIM:"
                                                }), Object(i.jsx)("div", {
                                                    className: T.a.claim_content_item_currency,
                                                    children: Object(i.jsxs)("div", {
                                                        children: [Object(i.jsxs)("span", {
                                                            children: [o && V ? Object(p.i)(V.toString()).toFixed(4) : 0, " ", "DC"]
                                                        }), Object(i.jsx)("img", {
                                                            src: "/assets/images/currency/dhv_icon.svg",
                                                            alt: "DC"
                                                        })]
                                                    })
                                                })]
                                            }), Object(i.jsxs)("div", {
                                                className: T.a.claim_content_weekly,
                                                children: [Object(i.jsx)("p", {
                                                    children: "AVAILABLE FOR CLAIM WEEKLY: "
                                                }), Object(i.jsxs)("p", {
                                                    children: [o && E ? Object(p.i)(F.toString()).toFixed(4) : 0, " ", "DC/week"]
                                                })]
                                            }), Object(i.jsx)(n.a, {
                                                type: "primary",
                                                htmlType: "submit",
                                                className: "btn gradient",
                                                disabled: !o || a || !V,
                                                children: o ? Object(i.jsx)(i.Fragment, {
                                                    children: a ? Object(i.jsxs)("span", {
                                                        className: T.a.loading,
                                                        children: [Object(i.jsx)("img", {
                                                            src: "/assets/images/loading.svg",
                                                            alt: ""
                                                        }), "Claim in progress"]
                                                    }) : Object(i.jsxs)(i.Fragment, {
                                                        children: ["CLAIM", " ", V ? Object(p.i)(V.toString()).toFixed(4) : 0, " DC"]
                                                    })
                                                }) : Object(i.jsx)(i.Fragment, {
                                                    children: "Wallet is not connected"
                                                })
                                            })]
                                        }), Object(i.jsx)("div", {
                                            className: T.a.description,
                                            children: "*As soon as you claim, your tokens will be transferred to the connected wallet. Make sure you have added DC token there"
                                        })]
                                    }), Object(i.jsx)(N, {})]
                                })
                            })
                        })]
                    })
                };
            t.default = C
        },
        pjuD: function(e, t, c) {
            "use strict";
            c("VEUW"), c("dVhw")
        }
    },
    [
        [9, 1, 2, 0, 3, 4, 5, 6]
    ]
]);
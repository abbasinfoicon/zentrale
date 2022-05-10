! function(h) {
    "use strict";
    h(window).on("load", function() {
        h(".preloader").fadeOut()
    }), 0 < h(".preloader").length && h(".preloaderCls").each(function() {
        h(this).on("click", function(e) {
            e.preventDefault(), h(".preloader").css("display", "none")
        })
    }), h.fn.vsmobilemenu = function(e) {
        var s = h.extend({
            menuToggleBtn: ".vs-menu-toggle",
            bodyToggleClass: "vs-body-visible",
            subMenuClass: "vs-submenu",
            subMenuParent: "vs-item-has-children",
            subMenuParentToggle: "vs-active",
            meanExpandClass: "vs-mean-expand",
            subMenuToggleClass: "vs-open",
            toggleSpeed: 400
        }, e);
        return this.each(function() {
            var t = h(this);

            function n() {
                t.toggleClass(s.bodyToggleClass);
                var e = "." + s.subMenuClass;
                h(e).each(function() {
                    h(this).hasClass(s.subMenuToggleClass) && (h(this).removeClass(s.subMenuToggleClass), h(this).css("display", "none"), h(this).parent().removeClass(s.subMenuParentToggle))
                })
            }
            t.find("li").each(function() {
                var e = h(this).find("ul");
                e.addClass(s.subMenuClass), e.css("display", "none"), e.parent().addClass(s.subMenuParent), e.prev("a").addClass(s.meanExpandClass), e.next("a").addClass(s.meanExpandClass)
            });
            var e = "." + s.meanExpandClass;
            h(e).each(function() {
                h(this).on("click", function(e) {
                    var t;
                    e.preventDefault(), 0 < h(t = this).next("ul").length ? (h(t).parent().toggleClass(s.subMenuParentToggle), h(t).next("ul").slideToggle(s.toggleSpeed), h(t).next("ul").toggleClass(s.subMenuToggleClass), childSubMenu(t)) : 0 < h(t).prev("ul").length && (h(t).parent().toggleClass(s.subMenuParentToggle), h(t).prev("ul").slideToggle(s.toggleSpeed), h(t).prev("ul").toggleClass(s.subMenuToggleClass), childSubMenu(t))
                })
            }), h(s.menuToggleBtn).each(function() {
                h(this).on("click", function() {
                    n()
                })
            }), t.on("click", function(e) {
                e.stopPropagation(), n()
            }), t.find("div").on("click", function(e) {
                e.stopPropagation()
            })
        })
    }, h(".vs-menu-wrapper").vsmobilemenu();
    var t, e, n, s, a, i, o, l, r = "",
        c = ".scrollToTop";
    h(window).on("scroll", function() {
        ! function(e, t, n) {
            var s = h(window).scrollTop();
            if (600 < h(window).scrollTop()) {
                var a = e.css("height");
                e.parent().css("min-height", a).addClass(n), r < s ? e.removeClass(t) : e.addClass(t)
            } else e.parent().css("min-height", "").removeClass(n), e.removeClass(t);
            r = s
        }(h(".sticky-active"), "active", "will-sticky"), 500 < h(this).scrollTop() ? h(c).addClass("show") : h(c).removeClass("show")
    }), h(c).each(function() {
        h(this).on("click", function(e) {
            return e.preventDefault(), h("html, body").animate({
                scrollTop: 0
            }, r / 3), !1
        })
    }), 0 < h("[data-bg-src]").length && h("[data-bg-src]").each(function() {
        var e = h(this).attr("data-bg-src");
        h(this).css({
            "background-image": "url(" + e + ")"
        })
    }), 0 < h("[data-bg-color]").length && h("[data-bg-color]").each(function() {
        var e = h(this).attr("data-bg-color");
        h(this).css({
            "background-color": e
        })
    }), t = ".sidemenu-wrapper", e = ".sideMenuCls", n = "show", h(".sideMenuToggler").on("click", function(e) {
        e.preventDefault(), h(t).addClass(n)
    }), h(t).on("click", function(e) {
        e.stopPropagation(), h(t).removeClass(n)
    }), h(t + " > div").on("click", function(e) {
        e.stopPropagation(), h(t).addClass(n)
    }), h(e).on("click", function(e) {
        e.preventDefault(), e.stopPropagation(), h(t).removeClass(n)
    }), s = ".popup-search-box", a = ".searchClose", i = "show", h(".searchBoxTggler").on("click", function(e) {
        e.preventDefault(), h(s).addClass(i)
    }), h(s).on("click", function(e) {
        e.stopPropagation(), h(s).removeClass(i)
    }), h(s).find("form").on("click", function(e) {
        e.stopPropagation(), h(s).addClass(i)
    }), h(a).on("click", function(e) {
        e.preventDefault(), e.stopPropagation(), h(s).removeClass(i)
    }), h(".vs-hero-carousel").each(function() {
        var n = h(this);

        function e(e) {
            return n.data(e)
        }
        n.on("sliderWillLoad", function(e, t) {
            var n = jQuery(this).find(".ls-responsive"),
                a = "ls-desktop",
                i = "ls-mobile",
                o = "ls-tablet",
                l = jQuery(window).width();
            n.each(function() {
                var t = jQuery(this);

                function e(e) {
                    return "" == t.data(e) ? t.data(null) : t.data(e)
                }
                var n = l < 768 ? e(i) ? e(i) : e(o) : l < 1025 && e(o) ? e(o) : e(a),
                    s = void 0 !== t.attr("style") ? t.attr("style") : " ";
                t.attr("style", s + n)
            })
        }), n.find("[data-ls-go]").each(function() {
            h(this).on("click", function(e) {
                e.preventDefault();
                var t = h(this).data("ls-go");
                n.layerSlider(t)
            })
        }), n.layerSlider({
            allowRestartOnResize: !0,
            maxRatio: e("maxratio") ? e("maxratio") : 1,
            type: e("slidertype") ? e("slidertype") : "responsive",
            pauseOnHover: !!e("pauseonhover"),
            navPrevNext: !!e("navprevnext"),
            hoverPrevNext: !!e("hoverprevnext"),
            hoverBottomNav: !!e("hoverbottomnav"),
            navStartStop: !!e("navstartstop"),
            navButtons: !!e("navbuttons"),
            loop: 0 != e("loop"),
            autostart: !!e("autostart"),
            height: e("height") ? e("height") : 1080,
            responsiveUnder: e("responsiveunder") ? e("responsiveunder") : 1220,
            layersContainer: e("container") ? e("container") : 1220,
            showCircleTimer: !!e("showcircletimer"),
            skinsPath: "layerslider/skins/",
            thumbnailNavigation: 0 != e("thumbnailnavigation")
        })
    }), h(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    }), h(".popup-video").magnificPopup({
        type: "iframe"
    }), h(".filter-active").imagesLoaded(function() {
        var e = ".filter-active",
            t = ".filter-item",
            n = ".filter-menu-active";
        if (0 < h(e).length) {
            var s = h(e).isotope({
                itemSelector: t,
                filter: "*",
                masonry: {
                    columnWidth: t
                }
            });
            h(n).on("click", "button", function() {
                var e = h(this).attr("data-filter");
                s.isotope({
                    filter: e
                })
            }), h(n).on("click", "button", function(e) {
                e.preventDefault(), h(this).addClass("active"), h(this).siblings(".active").removeClass("active")
            })
        }
    }), h.fn.indicator = function() {
        var i = h(this),
            e = i.find("a"),
            t = i.find("button");
        i.append('<span class="indicator"></span>');
        var o = i.find(".indicator");
        if (e.length) var n = e;
        else if (t.length) n = t;

        function s() {
            var e = i.find(".active"),
                t = e.css("height"),
                n = e.css("width"),
                s = e.position().top + "px",
                a = e.position().left + "px";
            o.css({
                top: s,
                left: a,
                width: n,
                height: t
            })
        }
        n.on("click", function(e) {
            e.preventDefault(), h(this).addClass("active"), h(this).siblings(".active").removeClass("active"), s()
        }), s()
    }, h(".filter-menu").length && h(".filter-menu").indicator(), h(".product-tab").length && h(".product-tab").indicator(), h.fn.vsSteping = function() {
        h(this).each(function() {
            var t = h(this),
                n = ".steps-wrap",
                s = ".steps",
                a = ".step-dots .dot",
                i = ".step-prev",
                o = ".step-next",
                l = ".step-submit",
                r = "complete",
                c = "active",
                u = 0;

            function d(e) {
                return t.find(e)
            }

            function p() {
                var e, t = d(s).eq(u);
                t.addClass(c), t.prevAll(s).removeClass(c).addClass(r), t.nextAll(s).removeClass(c).removeClass(r), d(n).css("height", t.css("height")), t.prev(s).length ? d(i).css("display", "") : d(i).css("display", "none"), t.next(s).length ? d(o).css("display", "") : d(o).css("display", "none"), t.next(s).length ? d(l).css("display", "none") : d(l).css("display", ""), (e = d(a).eq(u)).siblings().removeClass(c), e.addClass(c)
            }
            d(s).each(function() {
                var e = h(this);
                e.hasClass(c) ? u = e.index() : e.index() == u && (e.addClass(c), u = e.index())
            }), d(o).on("click", function(e) {
                e.preventDefault();
                var t = d(s).eq(u).next(s);
                t.length && (u = t.index(), p())
            }), d(i).on("click", function(e) {
                e.preventDefault();
                var t = d(s).eq(u).prev(s);
                t.length && (u = t.index(), p())
            }), d(a).on("click", function(e) {
                e.preventDefault(), u = h(this).index(), p()
            }), p()
        })
    }, h(".steps-active").length && h(".steps-active").vsSteping(), h(".quantity-plus").each(function() {
        h(this).on("click", function(e) {
            e.preventDefault();
            var t = h(this).siblings(".qty-input"),
                n = parseInt(t.val());
            isNaN(n) || t.val(n + 1)
        })
    }), h(".quantity-minus").each(function() {
        h(this).on("click", function(e) {
            e.preventDefault();
            var t = h(this).siblings(".qty-input"),
                n = parseInt(t.val());
            !isNaN(n) && 1 < n && t.val(n - 1)
        })
    }), h(".rating-select .stars a").each(function() {
        h(this).on("click", function(e) {
            e.preventDefault(), h(this).siblings().removeClass("active"), h(this).parent().parent().addClass("selected"), h(this).addClass("active")
        })
    }), h(".product-thumb").length && h(".product-thumb").each(function() {
        h(this).on("click", function() {
            var e = h(this).find("img").data("big-img");
            h(".img-fullsize img").attr("src", e), h(".img-fullsize .popup-image").attr("href", e)
        })
    }), h.fn.countdown = function() {
        h(this).each(function() {
            var i = h(this),
                o = new Date(i.data("offer-date")).getTime(),
                e = '<span class="number"></span>';

            function l(e) {
                return i.find(e)
            }
            l(".day").prepend(e), l(".hour").prepend(e), l(".minute").prepend(e);
            var r = setInterval(function() {
                var e = (new Date).getTime(),
                    t = o - e,
                    n = Math.floor(t / 864e5),
                    s = Math.floor(t % 864e5 / 36e5),
                    a = Math.floor(t % 36e5 / 6e4);
                Math.floor(t % 6e4 / 1e3);
                t < 0 ? (clearInterval(r), i.addClass("expired"), i.find(".message").css("display", "block")) : (l(".day .number").html(n + " "), l(".hour .number").html(s + " "), l(".minute .number").html(a + " "))
            }, 1e3)
        })
    }, h(".offer-counter").length && h(".offer-counter").countdown(), h(".vs-color-plate button").each(function() {
        l = h(this).attr("data-color"), h(this).css({
            "background-color": l
        }), h(this).on("click", function() {
            o = h(this).data("url"), h("#themeColor").attr("href", o)
        })
    }), h(".togglebtn").on("click", function(e) {
        return e.preventDefault(), h(".vs-color-plate").toggleClass("open"), !1
    })
}(jQuery);

$('.main-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:true,
    animateOut: 'slideOutUp',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
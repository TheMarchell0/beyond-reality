export function CarouselModule({swiper: e, on: s, extendParams: t}) {
    t({
        carouselEffect: {
            opacityStep: 0.4,
            scaleStep: .52,
            sideSlides: 1,
        }
    }),
        s("beforeInit", (() => {
                if ("carousel" !== e.params.effect)
                    return;
                e.classNames.push(`${e.params.containerModifierClass}carousel`);
                const s = {
                    watchSlidesProgress: !0,
                    centeredSlides: !0
                };
                Object.assign(e.params, s),
                    Object.assign(e.originalParams, s)
            }
        )),
        s("progress", (() => {
                if ("carousel" !== e.params.effect)
                    return;
                const {scaleStep: s, opacityStep: t} = e.params.carouselEffect
                    , r = Math.max(Math.min(e.params.carouselEffect.sideSlides, 3), 1)
                    , a = {
                    1: 2,
                    2: 1,
                    3: .2
                }[r]
                    , o = {
                    1: 50,
                    2: 50,
                    3: 67
                }[r]
                    , i = e.slides.length;
                for (let l = 0; l < e.slides.length; l += 1) {
                    const n = e.slides[l]
                        , c = e.slides[l].progress
                        , p = Math.abs(c);
                    let d = 1;
                    p > 1 && (d = .3 * (p - 1) * a + 1);
                    const u = n.querySelectorAll(".swiper-carousel-animate-opacity")
                        , f = c * d * o * (e.rtlTranslate ? -1 : 1) + "%"
                        , m = 1 - p * s
                        , y = i - Math.abs(Math.round(c));
                    n.style.transform = `translateX(${f}) scale(${m})`,
                        n.style.zIndex = y,
                        n.style.opacity = p > r + 1 ? 0 : 1,
                        u.forEach((e => {
                                e.style.opacity = 1 - p * t
                            }
                        ))
                }
            }
        )),
        s("resize", (() => {
                e.virtual && e.params.virtual && e.params.virtual.enabled && requestAnimationFrame((() => {
                        e.destroyed || (e.updateSlides(),
                            e.updateProgress())
                    }
                ))
            }
        )),
        s("setTransition", ((s, t) => {
                if ("carousel" === e.params.effect)
                    for (let r = 0; r < e.slides.length; r += 1) {
                        const s = e.slides[r]
                            , a = s.querySelectorAll(".swiper-carousel-animate-opacity");
                        s.style.transitionDuration = `${t}ms`,
                            a.forEach((e => {
                                    e.style.transitionDuration = `${t}ms`
                                }
                            ))
                    }
            }
        ))
}

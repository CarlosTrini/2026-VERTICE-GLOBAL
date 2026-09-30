// MySwiperOptions.ts
export interface SwiperI {
    // Slides
    slidesPerView?: number | 'auto';
    spaceBetween?: number;
    centeredSlides?: boolean;
    initialSlide?: number;
    direction?: 'horizontal' | 'vertical';
    loop?: boolean;
    loopedSlides?: number;
    grabCursor?: boolean;
    watchOverflow?: boolean;
    allowTouchMove?: boolean;
    slideToClickedSlide?: boolean;
    preloadImages?: boolean;
    resizeObserver?: boolean;
    speed?: number;

    // Autoplay
    autoplay?: {
        delay?: number;
        disableOnInteraction?: boolean;
        pauseOnMouseEnter?: boolean;
        stopOnLastSlide?: boolean;
        waitForTransition?: boolean;
    };

    // Navigation (flechas)
    navigation?: {
        nextEl?: string | HTMLElement;
        prevEl?: string | HTMLElement;
        disabledClass?: string;
        hiddenClass?: string;
    };

    // Modules
    modules?: any[];
    // Pagination (puntos´/bullets)
    pagination?: {
        el?: string;
        type?: 'bullets' | 'fraction' | 'progressbar' | 'custom';
        clickable?: boolean;
        dynamicBullets?: boolean;
        renderBullet?: (index: number, className: string) => string;
        renderFraction?: (currentClass: string, totalClass: string) => string;
        renderProgressbar?: (progressbarFillClass: string) => string;
        renderCustom?: (swiper: any, current: number, total: number) => string;
    };

    // Lazy loading
    lazy?: boolean | {
        loadOnTransitionStart?: boolean;
        loadPrevNext?: boolean;
    };

    // Effects
    effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';

    // Breakpoints
    breakpoints?: {
        [width: number]: {
            slidesPerView: number,
            spaceBetween: number,
        };
    };

    // Scrollbar (opcional)
    scrollbar?: {
        el?: string | HTMLElement;
        hide?: boolean;
        draggable?: boolean;
        snapOnRelease?: boolean;
    };

    // Mousewheel
    mousewheel?: {
        forceToAxis?: boolean;
        invert?: boolean;
        sensitivity?: number;
        thresholdDelta?: number;
        thresholdTime?: number;
    };

    // Keyboard navigation
    keyboard?: {
        enabled?: boolean;
        onlyInViewport?: boolean;
        pageUpDown?: boolean;
    };

    // Virtual slides
    virtual?: {
        slides?: any[];
        cache?: boolean;
        renderSlide?: (slide: any, index: number) => HTMLElement;
        renderExternal?: (data: {
            offset: number;
            from: number;
            to: number;
            slides: any[];
        }) => void;
        addSlidesBefore?: number;
        addSlidesAfter?: number;
    };
}
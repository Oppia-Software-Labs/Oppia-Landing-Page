'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

let Observer: any;
let ScrollTrigger: any;

if (typeof window !== 'undefined') {
  Observer = require('gsap/Observer').Observer;
  ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
  gsap.registerPlugin(Observer, ScrollTrigger);
}

interface UseDraggableMarqueeOptions {
  direction?: 'left' | 'right';
  duration?: number;
  multiplier?: number;
  sensitivity?: number;
}

export function useDraggableMarquee(options: UseDraggableMarqueeOptions = {}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const collectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const marqueeLoopRef = useRef<gsap.core.Tween | null>(null);
  const observerRef = useRef<Observer | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const collection = collectionRef.current;
    const list = listRef.current;

    if (!wrapper || !collection || !list) return;

    const duration = options.duration || 20;
    const multiplier = options.multiplier || 35;
    const sensitivity = options.sensitivity || 0.01;

    const wrapperWidth = wrapper.getBoundingClientRect().width;
    const listWidth = list.scrollWidth || list.getBoundingClientRect().width;

    if (!wrapperWidth || !listWidth) return;

    const minRequiredWidth = wrapperWidth + listWidth + 2;
    while (collection.scrollWidth < minRequiredWidth) {
      const listClone = list.cloneNode(true) as HTMLElement;
      listClone.setAttribute('data-draggable-marquee-clone', '');
      listClone.setAttribute('aria-hidden', 'true');
      collection.appendChild(listClone);
    }

    const wrapX = gsap.utils.wrap(-listWidth, 0);

    gsap.set(collection, { x: 0 });

    const marqueeLoop = gsap.to(collection, {
      x: -listWidth,
      duration,
      ease: 'none',
      repeat: -1,
      onReverseComplete: () => marqueeLoop.progress(1),
      modifiers: {
        x: (x) => wrapX(parseFloat(x)) + 'px',
      },
    });

    marqueeLoopRef.current = marqueeLoop;

    const initialDirection = (options.direction || 'left').toLowerCase();
    const baseDirection = initialDirection === 'right' ? -1 : 1;

    const timeScale = { value: 1 };

    timeScale.value = baseDirection;
    wrapper.setAttribute('data-direction', baseDirection < 0 ? 'right' : 'left');

    if (baseDirection < 0) marqueeLoop.progress(1);

    function applyTimeScale() {
      marqueeLoop.timeScale(timeScale.value);
      wrapper.setAttribute('data-direction', timeScale.value < 0 ? 'right' : 'left');
    }

    applyTimeScale();

    const marqueeObserver = Observer.create({
      target: wrapper,
      type: 'pointer,touch',
      preventDefault: true,
      debounce: false,
      onChangeX: (observerEvent) => {
        let velocityTimeScale = observerEvent.velocityX * -sensitivity;
        velocityTimeScale = gsap.utils.clamp(-multiplier, multiplier, velocityTimeScale);

        gsap.killTweensOf(timeScale);

        const restingDirection = velocityTimeScale < 0 ? -1 : 1;

        gsap.timeline({ onUpdate: applyTimeScale })
          .to(timeScale, { value: velocityTimeScale, duration: 0.1, overwrite: true })
          .to(timeScale, { value: restingDirection, duration: 1.0 });
      },
    });

    observerRef.current = marqueeObserver;

    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapper,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => {
        marqueeLoop.resume();
        applyTimeScale();
        marqueeObserver.enable();
      },
      onEnterBack: () => {
        marqueeLoop.resume();
        applyTimeScale();
        marqueeObserver.enable();
      },
      onLeave: () => {
        marqueeLoop.pause();
        marqueeObserver.disable();
      },
      onLeaveBack: () => {
        marqueeLoop.pause();
        marqueeObserver.disable();
      },
    });

    scrollTriggerRef.current = scrollTrigger;

    return () => {
      marqueeLoop.kill();
      marqueeObserver.kill();
      scrollTrigger.kill();
    };
  }, [options.direction, options.duration, options.multiplier, options.sensitivity]);

  return {
    wrapperRef,
    collectionRef,
    listRef,
  };
}


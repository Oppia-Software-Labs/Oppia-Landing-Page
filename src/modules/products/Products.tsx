'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { GekoCard } from './GekoCard';
import { NekoCard } from './NekoCard';
import { DekoCard } from './DekoCard';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

type ProductId = 'neko' | 'geko' | 'coming-soon';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable);
}

export function Products() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  const sliderRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const draggersRef = useRef<Draggable[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const products: ProductId[] = ['neko', 'geko', 'coming-soon'];
  const total = products.length;

  const renderCard = (id: ProductId, index: number) => {
    const cardProps = {
      'data-flick-cards-item': '',
      'data-flick-cards-item-status': '',
    } as const;

    const ref = (el: HTMLDivElement | null) => {
      if (el) cardsRef.current[index] = el;
    };

    switch (id) {
      case 'neko':
        return <NekoCard {...cardProps} ref={ref} />;
      case 'geko':
        return <GekoCard {...cardProps} ref={ref} />;
      case 'coming-soon':
        return <DekoCard {...cardProps} ref={ref} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !sliderRef.current || !listRef.current) return;

    const slider = sliderRef.current;
    const cards = cardsRef.current.filter(Boolean);
    
    if (cards.length === 0) return;

    let currentActiveIndex = activeIndex;
    const sliderWidth = slider.offsetWidth;
    const threshold = 0.1;

    // Generate draggers inside each card
    const draggers: HTMLDivElement[] = [];
    cards.forEach(card => {
      const dragger = document.createElement('div');
      dragger.setAttribute('data-flick-cards-dragger', '');
      dragger.style.cssText = 'position: absolute; inset: 0; z-index: 1; pointer-events: auto; touch-action: pan-y;';
      card.appendChild(dragger);
      draggers.push(dragger);
    });

    // Set initial drag status
    slider.setAttribute('data-flick-drag-status', 'grab');

    function getConfig(i: number, currentIndex: number) {
      let diff = i - currentIndex;
      if (diff > total / 2) diff -= total;
      else if (diff < -total / 2) diff += total;

      switch (diff) {
        case  0: return { x: 0,   y: 0,   rot: 0,  s: 1,   o: 1, z: 50 };
        case  1: return { x: 55,  y: 3,   rot: 25, s: 0.85, o: 0.9, z: 10 };
        case -1: return { x: -55, y: 3,   rot: -25,s: 0.85, o: 0.9, z: 10 };
        case  2: return { x: 80,  y: 8,   rot: 35, s: 0.7, o: 0.5, z: 5 };
        case -2: return { x: -80, y: 8,   rot: -35,s: 0.7, o: 0.5, z: 5 };
        default:
          const dir = diff > 0 ? 1 : -1;
          return { x: 100 * dir, y: 12, rot: 45 * dir, s: 0.5, o: 0, z: 1 };
      }
    }

    function renderCards(newIndex: number) {
      cards.forEach((card, i) => {
        const cfg = getConfig(i, newIndex);
        let status;

        if (cfg.x === 0)        status = 'active';
        else if (cfg.x === 55)  status = '2-after';
        else if (cfg.x === -55) status = '2-before';
        else if (cfg.x === 80)  status = '3-after';
        else if (cfg.x === -80) status = '3-before';
        else                    status = 'hidden';

        card.setAttribute('data-flick-cards-item-status', status);

        card.setAttribute('data-flick-cards-item-status', status);
        
        // Apply z-index to parent container
        const parent = card.parentElement;
        if (parent) {
          parent.style.zIndex = String(cfg.z);
        }

        gsap.to(card, {
          duration: 0.6,
          ease: 'elastic.out(1.2, 1)',
          xPercent: cfg.x,
          yPercent: cfg.y,
          rotation: cfg.rot,
          scale: cfg.s,
          opacity: cfg.o
        });
      });
    }

    renderCards(activeIndex);

    if (total < 3) {
      console.log('Need at least 3 cards for carousel');
      return;
    }

    let pressClientX = 0;
    let pressClientY = 0;

    const draggableInstances = Draggable.create(draggers, {
      type: 'x',
      edgeResistance: 0.8,
      bounds: { minX: -sliderWidth / 2, maxX: sliderWidth / 2 },
      inertia: false,

      onPress(this: Draggable) {
        pressClientX = this.pointerEvent.clientX;
        pressClientY = this.pointerEvent.clientY;
        slider.setAttribute('data-flick-drag-status', 'grabbing');
      },

      onDrag(this: Draggable) {
        const rawProgress = this.x / sliderWidth;
        const progress = Math.min(1, Math.abs(rawProgress));
        const direction = rawProgress > 0 ? -1 : 1;
        const nextIndex = (currentActiveIndex + direction + total) % total;

        cards.forEach((card, i) => {
          const from = getConfig(i, currentActiveIndex);
          const to = getConfig(i, nextIndex);
          const mix = (prop: keyof typeof from) => from[prop] + ((to[prop] as number) - (from[prop] as number)) * progress;

          gsap.set(card, {
            xPercent: mix('x'),
            yPercent: mix('y'),
            rotation: mix('rot'),
            scale: mix('s'),
            opacity: mix('o')
          });
        });
      },

      onRelease(this: Draggable) {
        slider.setAttribute('data-flick-drag-status', 'grab');

        const releaseClientX = this.pointerEvent.clientX;
        const releaseClientY = this.pointerEvent.clientY;
        const dragDistance = Math.hypot(releaseClientX - pressClientX, releaseClientY - pressClientY);

        const raw = this.x / sliderWidth;
        let shift = 0;
        if (raw > threshold) shift = -1;
        else if (raw < -threshold) shift = 1;

        if (shift !== 0) {
          currentActiveIndex = (currentActiveIndex + shift + total) % total;
          setActiveIndex(currentActiveIndex);
          renderCards(currentActiveIndex);
        }

        gsap.to(this.target, {
          x: 0,
          duration: 0.3,
          ease: 'power1.out'
        });

        if (dragDistance < 4) {
          // Temporarily allow clicks to pass through
          (this.target as HTMLElement).style.pointerEvents = 'none';

          // Allow the DOM to register pointer-through
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              const el = document.elementFromPoint(releaseClientX, releaseClientY);
              if (el) {
                const evt = new MouseEvent('click', {
                  view: window,
                  bubbles: true,
                  cancelable: true
                });
                el.dispatchEvent(evt);
              }

              // Restore pointer events
              (this.target as HTMLElement).style.pointerEvents = 'auto';
            });
          });
        }
      }
    });

    draggersRef.current = draggableInstances;

    // Cleanup
    return () => {
      draggableInstances.forEach(d => d.kill());
      draggers.forEach(d => d.remove());
    };
  }, [activeIndex]);

  return (
    <section className="bg-black pt-16 pb-8 overflow-x-hidden">
      <div className="w-full">
        <h2 className="mb-3 text-center text-2xl font-normal text-white sm:text-3xl md:text-4xl">
          {t('products.title')}
        </h2>
        <p className="mb-4 text-center text-sm font-normal leading-relaxed text-gray-300 sm:text-base md:text-lg md:mx-auto md:max-w-xl">
          {t('products.description')}
        </p>

        <div className="mb-4 flex justify-center gap-2.5">
          {products.map((productId, idx) => {
            const translationKey = productId === 'coming-soon' ? 'comingSoon' : productId;
            return (
              <button
                key={productId}
                onClick={() => {
                  if (activeIndex === idx) return;
                  setActiveIndex(idx);
                  
                  const cards = cardsRef.current.filter(Boolean);
                  cards.forEach((card, i) => {
                    let diff = i - idx;
                    if (diff > total / 2) diff -= total;
                    else if (diff < -total / 2) diff += total;

                    let targetCfg;
                    switch (diff) {
                      case  0: 
                        targetCfg = { x: 0,   y: 0,   rot: 0,  s: 1,   o: 1, z: 50 };
                        card.setAttribute('data-flick-cards-item-status', 'active');
                        break;
                      case  1: 
                        targetCfg = { x: 55,  y: 3,   rot: 25, s: 0.85, o: 0.9, z: 10 };
                        card.setAttribute('data-flick-cards-item-status', '2-after');
                        break;
                      case -1: 
                        targetCfg = { x: -55, y: 3,   rot: -25, s: 0.85, o: 0.9, z: 10 };
                        card.setAttribute('data-flick-cards-item-status', '2-before');
                        break;
                      default:
                        targetCfg = { x: 0, y: 0, rot: 0, s: 0.5, o: 0, z: 1 };
                        card.setAttribute('data-flick-cards-item-status', 'hidden');
                    }

                    // Apply z-index to parent container
                    const parent = card.parentElement;
                    if (parent) {
                      parent.style.zIndex = String(targetCfg.z);
                    }

                    if (typeof gsap !== 'undefined' && gsap.to) {
                      gsap.to(card, {
                        duration: 0.6,
                        ease: 'elastic.out(1.2, 1)',
                        xPercent: targetCfg.x,
                        yPercent: targetCfg.y,
                        rotation: targetCfg.rot,
                        scale: targetCfg.s,
                        opacity: targetCfg.o
                      });
                    }
                  });
                }}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                  idx === activeIndex
                    ? 'bg-white text-black'
                    : 'bg-white/4 text-white hover:bg-white/8'
                }`}
              >
                {t(`products.${translationKey}.name`)}
              </button>
            );
          })}
        </div>

        <div 
          ref={sliderRef} 
          data-flick-cards-init=""
          className="relative w-full"
          style={{ minHeight: '700px' }}
        >
          <div className="opacity-0 pointer-events-none relative" style={{ width: '47em', margin: '0 auto' }}>
            <div style={{ paddingTop: '75%' }}></div>
          </div>
          
          <div className="w-full h-full absolute top-0 left-0">
            <div 
              ref={listRef}
              data-flick-cards-list=""
              className="flex justify-center items-center w-full h-full relative"
            >
              {products.map((productId, index) => {
                // Set initial z-index based on position
                const diff = index - activeIndex;
                let initialZ = 10;
                if (diff === 0) initialZ = 50;
                
                return (
                  <div key={productId} className="absolute" style={{ zIndex: initialZ }}>
                    {renderCard(productId, index)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

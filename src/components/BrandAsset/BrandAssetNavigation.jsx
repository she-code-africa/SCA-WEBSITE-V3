import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// 👉 Your content side must give each section an element with the matching `id`.
// Example: <section id="logomark">...</section>
export const brandNavSections = [
  { id: "introduction", label: "Introduction" },
  {
    id: "trademarks",
    label: "Trademarks",
    items: [
      { id: "logotype", label: "Logotype" },
      { id: "lockup", label: "Lockup" },

      { id: "badge", label: "Badge" },
      { id: "clear-space", label: "Clear Space" },
      { id: "partnership-lockup", label: "Partnership Lockup" },
      { id: "color-interaction", label: "Color Interaction" },
      { id: "placement", label: "Placement" },
      { id: "trademark-misuse", label: "Trademark Misuse" },
    ],
  },
  {
    id: "colour",
    label: "Colour",
    items: [
      { id: "extended-palette", label: "Extended Palette" },
      { id: "primary-palette", label: "Primary Palette" },
      { id: "secondary-palette", label: "Secondary Palette" },
      { id: "colour-usage", label: "Colour Usage" },
      { id: "colour-contrast-system", label: "Contrast System" },
    ],
  },
  {
    id: "typography",
    label: "Typography",
    items: [
      { id: "primary-type", label: "Primary Type" },
      { id: "secondary-type", label: "Secondary Type" },
      { id: "type-scale", label: "Type Scale" },
      { id: "typography-colour-usage", label: "Colour Usage" },
      { id: "typography-contrast-system", label: "Contrast System" },
    ],
  },
  // No items yet, so it shows as a simple link without the +/- icon
  // { id: "device-patterns", label: "Device & Patterns" },
];

const SCROLL_OFFSET = 160; // how far from the top a section counts as "current"

// every id in page order, plus a lookup of which group each item belongs to
const allIds = brandNavSections.flatMap((s) => [
  s.id,
  ...(s.items ? s.items.map((i) => i.id) : []),
]);

const groupOf = {};
const labelOf = {};
brandNavSections.forEach((s) => {
  labelOf[s.id] = s.label;
  groupOf[s.id] = s.id;
  (s.items || []).forEach((i) => {
    labelOf[i.id] = i.label;
    groupOf[i.id] = s.id;
  });
});

// Watches the scroll position and tells us which section is current
const useScrollSpy = () => {
  const [active, setActive] = useState(allIds[0]);
  const locked = useRef(false); // pauses the spy while a click-scroll is running
  const lockTimer = useRef(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      if (locked.current) return;

      let current = allIds[0];
      let bestTop = -Infinity;

      allIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        // the section closest to the top line (but already past it) wins
        if (top <= SCROLL_OFFSET + 1 && top > bestTop) {
          bestTop = top;
          current = id;
        }
      });

      // at the very bottom of the page, pick the last section that exists
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) {
        const last = [...allIds]
          .reverse()
          .find((id) => document.getElementById(id));
        if (last) current = last;
      }

      setActive(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    locked.current = true;
    setActive(id);

    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });

    clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => {
      locked.current = false;
    }, 800);
  }, []);

  return { active, goTo };
};

// The nav is fixed, so it ignores the layout. This hook measures where the
// content row ends and returns how far (in px) the nav must move up so its
// bottom never goes past that point. 0 = no push needed.
const useStopAtContentEnd = (asideRef, navRef) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const check = () => {
      const nav = navRef.current;
      const row = asideRef.current?.parentElement; // the flex row holding nav + content
      if (!nav || !row) return;

      const navTop = parseFloat(getComputedStyle(nav).top) || 0;
      const navBottom = navTop + nav.offsetHeight;
      const rowBottom = row.getBoundingClientRect().bottom;

      setOffset(Math.min(0, rowBottom - navBottom));
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    // nav height changes when groups expand/collapse, so re-check then too
    let observer;
    if (navRef.current && "ResizeObserver" in window) {
      observer = new ResizeObserver(check);
      observer.observe(navRef.current);
    }

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      if (observer) observer.disconnect();
    };
  }, [asideRef, navRef]);

  return offset;
};

const ToggleIcon = ({ open }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8.5 14h11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {!open && (
      <path
        d="M14 8.5v11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    )}
  </svg>
);

const Chevron = ({ open }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
  >
    <path
      d="M5 7.5l5 5 5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// The list itself. Used by both the desktop sidebar and the mobile dropdown.
const NavList = ({ active, onSelect }) => {
  const [open, setOpen] = useState({});

  // when the active section changes, make sure its group is open
  useEffect(() => {
    const group = groupOf[active];
    if (group)
      setOpen((prev) => (prev[group] ? prev : { ...prev, [group]: true }));
  }, [active]);

  const toggle = (id) => setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <ul className="space-y-6">
      {brandNavSections.map((section) => {
        const hasItems = !!section.items;
        const isGroupActive = groupOf[active] === section.id;
        const isOpen = !!open[section.id];

        return (
          <li key={section.id}>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => onSelect(section.id)}
                className={`cursor-pointer text-left hero-text font-semibold uppercase  text-2xl xl:text-[32px] leading-none transition-colors duration-300 ${
                  isGroupActive ? "text-primary-main-pink" : "text-[#8E8E93]"
                }`}
              >
                {section.label}
              </button>

              {hasItems && (
                <button
                  type="button"
                  onClick={() => toggle(section.id)}
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? "Collapse" : "Expand"} ${section.label}`}
                  className={`cursor-pointer transition-colors duration-300 hover:text-primary-magenta ${
                    isGroupActive ? "text-primary-main-pink" : "text-[#8E8E93]"
                  }`}
                >
                  <ToggleIcon open={isOpen} />
                </button>
              )}
            </div>

            {hasItems && (
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {section.items.map((item) => (
                      <li key={item.id} className="pl-4 first:mt-4">
                        <button
                          type="button"
                          onClick={() => onSelect(item.id)}
                          className={`cursor-pointer text-left font-figtree text-lg xl:text-2xl py-3 transition-colors duration-300 ${
                            active === item.id
                              ? "text-primary-main-pink font-semibold"
                              : "text-[#8E8E93] hover:text-primary-magenta"
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const BrandAssetNavigation = () => {
  const { active, goTo } = useScrollSpy();
  const [mobileOpen, setMobileOpen] = useState(false);
  const asideRef = useRef(null);
  const navRef = useRef(null);
  const pushUp = useStopAtContentEnd(asideRef, navRef);

  const handleMobileSelect = (id) => {
    setMobileOpen(false);
    goTo(id);
  };

  return (
    // Mobile: sticky dropdown under the header.
    // xl: this is just an empty 300px column that holds the space,
    // while the nav inside it is fixed to the screen.
    <aside
      ref={asideRef}
      className="sticky top-21 z-30 w-full xl:static xl:w-[300px] xl:shrink-0"
    >
      {/* MOBILE: dropdown */}
      <div className="relative xl:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          className="w-full flex items-center justify-between gap-3 rounded-lg bg-white px-4 py-3.5 shadow-sm cursor-pointer"
        >
          <span className="font-display font-semibold uppercase text-lg sm:text-2xl leading-none text-primary-magenta">
            {labelOf[active]}
          </span>
          <span className="text-primary-magenta">
            <Chevron open={mobileOpen} />
          </span>
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full mt-2 max-h-[70vh] overflow-y-auto rounded-xl bg-white p-5 shadow-xl"
            >
              <NavList active={active} onSelect={handleMobileSelect} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* DESKTOP (xl): fixed sidebar, pushed up when the content row ends */}
      <nav
        ref={navRef}
        aria-label="Brand guidelines"
        style={{ transform: `translateY(${pushUp}px)` }}
        className="hidden xl:block xl:fixed xl:top-40 xl:w-[300px] xl:max-h-[calc(100vh-11rem)] xl:overflow-y-auto px-8 scrollbar-hidden"
      >
        <NavList active={active} onSelect={goTo} />
      </nav>
    </aside>
  );
};

export default BrandAssetNavigation;

"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export interface ExplorerCategory {
  id: string;
  name: string;
  note?: string;
  count: number;
}

export interface ExplorerItem {
  id: string;
  categoryId: string;
  name: string;
  price: string;
  size?: string;
  description?: string;
  featured: boolean;
}

interface Labels {
  searchPlaceholder: string;
  searchLabel: string;
  searchEmpty: string;
  clearSearch: string;
  featuredBadge: string;
  categoriesLabel: string;
  itemsCount: string;
}

function MenuRow({
  item,
  featuredBadge,
}: {
  item: ExplorerItem;
  featuredBadge: string;
}) {
  return (
    <li className="group flex items-baseline gap-3 rounded-xl px-4 py-3.5 transition-colors hover:bg-raydan-ivory">
      <div className="min-w-0">
        <p className="font-semibold text-raydan-text">
          {item.name}
          {item.featured && (
            <span className="ms-2 inline-block rounded-full bg-raydan-gold/15 px-2 py-0.5 align-middle text-[0.7rem] font-bold tracking-wide text-raydan-deep-gold uppercase">
              {featuredBadge}
            </span>
          )}
        </p>
        {(item.size || item.description) && (
          <p className="mt-0.5 text-sm text-raydan-muted">
            {[item.description, item.size].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
      <span aria-hidden="true" className="price-leader" />
      <span className="ltr-nums shrink-0 font-bold whitespace-nowrap text-raydan-text tabular-nums">
        {item.price}
      </span>
    </li>
  );
}

export default function MenuExplorer({
  categories,
  items,
  labels,
}: {
  categories: ExplorerCategory[];
  items: ExplorerItem[];
  labels: Labels;
}) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();

  const trimmedQuery = query.trim().toLowerCase();
  const searching = trimmedQuery.length > 0;

  const visible = useMemo(() => {
    if (searching) {
      return items.filter((item) =>
        item.name.toLowerCase().includes(trimmedQuery),
      );
    }
    return items.filter((item) => item.categoryId === activeCategory);
  }, [items, searching, trimmedQuery, activeCategory]);

  // While searching, group matches under their category headings.
  const groups = useMemo(() => {
    const source = searching
      ? categories
      : categories.filter((category) => category.id === activeCategory);
    return source
      .map((category) => ({
        category,
        items: visible.filter((item) => item.categoryId === category.id),
      }))
      .filter((group) => group.items.length > 0);
  }, [categories, visible, searching, activeCategory]);

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: [0.22, 0.61, 0.36, 1] as const };

  return (
    <div className="mt-10">
      {/* Search */}
      <div className="relative max-w-md">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={labels.searchPlaceholder}
          aria-label={labels.searchLabel}
          className="min-h-12 w-full rounded-full border border-raydan-muted/40 bg-white px-5 pe-12 text-base text-raydan-text placeholder:text-raydan-muted focus:border-raydan-gold"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label={labels.clearSearch}
            className="absolute end-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-raydan-muted hover:text-raydan-text"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute end-4 top-1/2 h-5 w-5 -translate-y-1/2 text-raydan-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
        )}
      </div>

      {/* Category tabs (horizontal scroller on small screens) */}
      {!searching && (
        <div
          role="tablist"
          aria-label={labels.categoriesLabel}
          className="no-scrollbar -mx-5 mt-6 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {categories.map((category) => {
            const selected = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveCategory(category.id)}
                className={`flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                  selected
                    ? "border-raydan-gold bg-raydan-black text-raydan-ivory"
                    : "border-raydan-muted/35 bg-white text-raydan-text hover:border-raydan-gold/70"
                }`}
              >
                {category.name}
                <span
                  className={`text-xs font-bold ${
                    selected ? "text-raydan-light-gold" : "text-raydan-muted"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Items */}
      <div className="mt-6 min-h-64">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={searching ? `search-${trimmedQuery}` : activeCategory}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={transition}
          >
            {groups.length === 0 ? (
              <p className="rounded-2xl border border-raydan-muted/25 bg-white px-6 py-10 text-center text-raydan-muted">
                {labels.searchEmpty}
              </p>
            ) : (
              groups.map((group) => (
                <div key={group.category.id} className="mb-8 last:mb-0">
                  <div className="mb-2 flex items-baseline gap-3 px-4">
                    <h3 className="font-display text-xl font-bold text-raydan-text">
                      {group.category.name}
                    </h3>
                    <span className="text-sm text-raydan-muted">
                      {group.items.length} {labels.itemsCount}
                    </span>
                  </div>
                  <ul className="grid gap-x-8 rounded-2xl border border-raydan-muted/20 bg-white/70 p-2 lg:grid-cols-2">
                    {group.items.map((item) => (
                      <MenuRow
                        key={item.id}
                        item={item}
                        featuredBadge={labels.featuredBadge}
                      />
                    ))}
                  </ul>
                  {group.category.note && (
                    <p className="mt-3 px-4 text-sm text-raydan-muted italic">
                      {group.category.note}
                    </p>
                  )}
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

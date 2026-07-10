"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const SIZES = ["S", "M", "L", "XL"];

const COLORS = [
  "#E8695A", // red
  "#E8863A", // orange
  "#F2D24B", // yellow
  "#9BDB6E", // light green
  "#5FCB6B", // green
  "#8BE8D0", // mint
  "#6FA8F0", // blue
  "#5BC8E8", // cyan
  "#5C8EE0", // steel blue
  "#6E6EDB", // indigo
  "#8B6EDB", // purple
  "#D66EDB", // orchid
  "#E05C5C", // red
];

const PRICES = ["$0-$50", "$50-$100", "$100-$150", "$150-$200", "$300-$400"];

const BRANDS = ["Minimog", "Retrolie", "Brook", "Learts", "Vagabond", "Abby"];

const COLLECTIONS = ["All products", "Best sellers", "New arrivals", "Accessories"];

const TAGS = [
  "Fashion",
  "Hats",
  "Sandal",
  "Belt",
  "Bags",
  "Snacker",
  "Denim",
  "Minimog",
  "Vagabond",
  "Sunglasses",
  "Beachwear",
];

function SectionHeader({
  title,
  collapsible = false,
  open,
  onToggle,
}) {
  return (
    <button
      type="button"
      onClick={collapsible ? onToggle : undefined}
      className={`flex w-full items-center justify-between ${
        collapsible ? "cursor-pointer" : "cursor-default"
      }`}
      aria-expanded={collapsible ? open : undefined}
    >
      <h3 className="font-display text-[19px] font-medium tracking-tight text-[var(--color-ink)]">
        {title}
      </h3>

      {collapsible &&
        (open ? (
          <ChevronUp
            size={16}
            strokeWidth={1.75}
            className="text-[var(--color-ink)]"
          />
        ) : (
          <ChevronDown
            size={16}
            strokeWidth={1.75}
            className="text-[var(--color-ink)]"
          />
        ))}
    </button>
  );
}


export default function FiltersSidebar() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(null);
  const [brandsOpen, setBrandsOpen] = useState(true);
  const [collectionsOpen, setCollectionsOpen] = useState(true);

  return (
    <aside className="w-full max-w-[280px]  py-2">
      <h1 className="font-display text-[32px] font-medium tracking-tight text-[var(--color-ink)] mb-8">
        Filters
      </h1>

      {/* Size */}
      <section className="mb-8">
        <SectionHeader title="Size" />
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {SIZES.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`flex h-11 items-center justify-center rounded-full border text-[14px] transition-colors ${
                selectedSize === size
                  ? "border-[var(--color-ink)] text-[var(--color-ink)]"
                  : "border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-ink)]/50"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </section>

      {/* Colors */}
      <section className="mb-8">
        <SectionHeader title="Colors" />
        <div className="mt-4 flex flex-wrap gap-3">
          {COLORS.map((hex, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedColor(i)}
              aria-label={`Color ${i + 1}`}
              className="h-8 w-8 rounded-full transition-transform"
              style={{
                backgroundColor: hex,
                outline: selectedColor === i ? `2px solid ${hex}` : "none",
                outlineOffset: selectedColor === i ? "2px" : "0",
              }}
            />
          ))}
        </div>
      </section>

      {/* Prices */}
      <section className="mb-8">
        <SectionHeader title="Prices" />
        <ul className="mt-4 space-y-3">
          {PRICES.map((range) => (
            <li key={range}>
              <button
                type="button"
                className="text-[15px] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
              >
                {range}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Brands */}
      <section className="mb-8">
        <SectionHeader
          title="Brands"
          collapsible
          open={brandsOpen}
          onToggle={() => setBrandsOpen((v) => !v)}
        />
        {brandsOpen && (
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-3">
            {BRANDS.map((brand) => (
              <button
                key={brand}
                type="button"
                className="text-[15px] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
              >
                {brand}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Collections */}
      <section className="mb-8">
        <SectionHeader
          title="Collections"
          collapsible
          open={collectionsOpen}
          onToggle={() => setCollectionsOpen((v) => !v)}
        />
        {collectionsOpen && (
          <ul className="mt-4 space-y-3">
            {COLLECTIONS.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="text-[15px] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Tags */}
      <section>
        <SectionHeader title="Tags" />
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-3">
          {TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              className="text-[15px] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
}

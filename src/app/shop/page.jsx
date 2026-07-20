"use client";
import React, { useState } from "react";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Container from "@/components/global/Container";
import Section from "@/components/global/Section";
import FiltersSidebar from "@/components/shop/FiltersSidebar";
import ShopCard from "@/components/shop/ShopCard";
import Slide from "@/components/Slide";
import Subscribe from "@/components/Subscribe";
import {
  ChevronDown,
  List,
  Columns2,
  Columns3,
  Columns4,
  LayoutGrid,
} from "lucide-react";

export default function ShopPage() {
  const [sortOpen, setSortOpen] = useState(false);
  const [activeView, setActiveView] = useState(3); // default: 3-column grid active

  const views = [
    { id: 0, label: "List view", Icon: List },
    { id: 1, label: "2 columns", Icon: Columns2 },
    { id: 2, label: "3 columns", Icon: Columns3 },
    { id: 3, label: "4 columns", Icon: Columns4 },
    { id: 4, label: "5 columns", Icon: LayoutGrid },
  ];
  return (
    <>
      <Section className="bg-white">
        <Container className="py-12">
          <div className="flex  gap-5">
            <FiltersSidebar />

            <div className="hidden flex-1 md:block">
              <div className="w-full bg-white">
                <div className="flex items-center justify-between px-6 py-4">
                  {/* Sort dropdown */}
                  <button
                    onClick={() => setSortOpen((v) => !v)}
                    className="flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    <span>Best selling</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Dashed divider + view toggles */}
                  <div className="flex items-center">
                    <div className="h-6 w-px border-l border-dashed border-neutral-300 mr-6" />

                    <div className="flex items-center gap-1">
                      {views.map(({ id, label, Icon }) => (
                        <button
                          key={id}
                          onClick={() => setActiveView(id)}
                          aria-label={label}
                          aria-pressed={activeView === id}
                          className={`p-2 rounded-md transition-colors ${
                            activeView === id
                              ? "text-neutral-900 bg-neutral-100"
                              : "text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50"
                          }`}
                        >
                          <Icon size={16} strokeWidth={1.75} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Product grid would go here */}
              <ShopCard />
            </div>
          </div>
        </Container>
      </Section>

      <Slide />
      <Features />
      <Gallery />
    </>
  );
}

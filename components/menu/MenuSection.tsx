import type { Locale, Messages } from "@/lib/i18n";
import { categories, menuItems } from "@/data/menu";
import { formatPrice } from "@/lib/format";
import SectionReveal from "@/components/ui/SectionReveal";
import MenuExplorer, {
  type ExplorerCategory,
  type ExplorerItem,
} from "@/components/menu/MenuExplorer";

/**
 * Server wrapper: localizes the typed menu data once, then hands a compact
 * serializable payload to the interactive client explorer.
 */
export default function MenuSection({
  locale,
  t,
}: {
  locale: Locale;
  t: Messages;
}) {
  const explorerCategories: ExplorerCategory[] = categories.map((category) => ({
    id: category.id,
    name: category.name[locale],
    note: category.note?.[locale],
    count: menuItems.filter((item) => item.categoryId === category.id).length,
  }));

  const explorerItems: ExplorerItem[] = menuItems.map((item) => ({
    id: item.id,
    categoryId: item.categoryId,
    name: item.name[locale],
    price: formatPrice(item.price),
    size: item.size?.[locale],
    description: item.description?.[locale],
    featured: item.featured ?? false,
  }));

  return (
    <section id="menu" className="bg-raydan-paper py-20 sm:py-28">
      <div className="container-site">
        <SectionReveal className="max-w-2xl">
          <p className="section-label">{t.menu.label}</p>
          <h2 className="font-display mt-5 text-3xl leading-tight font-bold text-balance sm:text-4xl xl:text-5xl">
            {t.menu.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-raydan-muted sm:text-lg">
            {t.menu.sub}
          </p>
        </SectionReveal>

        <MenuExplorer
          categories={explorerCategories}
          items={explorerItems}
          labels={{
            searchPlaceholder: t.menu.searchPlaceholder,
            searchLabel: t.menu.searchLabel,
            searchEmpty: t.menu.searchEmpty,
            clearSearch: t.menu.clearSearch,
            featuredBadge: t.menu.featuredBadge,
            categoriesLabel: t.menu.categoriesLabel,
            itemsCount: t.menu.itemsCount,
          }}
        />

        <p className="mt-10 text-sm text-raydan-muted">{t.menu.disclaimer}</p>
      </div>
    </section>
  );
}

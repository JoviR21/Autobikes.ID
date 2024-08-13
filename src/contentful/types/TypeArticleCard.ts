import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeArticleCardFields {
    thumbnail?: EntryFieldTypes.AssetLink;
    nameProduct: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    shortDesc: EntryFieldTypes.Symbol;
    imageSection: EntryFieldTypes.AssetLink;
    paragraph: EntryFieldTypes.RichText;
}

export type TypeArticleCardSkeleton = EntrySkeletonType<TypeArticleCardFields, string>;
export type TypeArticleCard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeArticleCardSkeleton, Modifiers, Locales>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProductCardFields {
    thumbnail: EntryFieldTypes.AssetLink;
    nameProduct: EntryFieldTypes.Symbol;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    shortDesc: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    featuredImage: EntryFieldTypes.AssetLink;
    desc: EntryFieldTypes.Text;
    specEngine: EntryFieldTypes.RichText;
    specChassisAndSuspension: EntryFieldTypes.RichText;
    specDimensionAndWeight: EntryFieldTypes.RichText;
    specCapacity: EntryFieldTypes.RichText;
    specElectrical: EntryFieldTypes.RichText;
}

export type TypeProductCardSkeleton = EntrySkeletonType<TypeProductCardFields, string>;
export type TypeProductCard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductCardSkeleton, Modifiers, Locales>;

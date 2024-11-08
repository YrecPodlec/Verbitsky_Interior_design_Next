import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { localePrefix, locales, pathnames } from "@/config";
export const { Link } = createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
});

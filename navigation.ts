import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import { locales } from './i18n';

// export const localePrefix = 'as-needed';
// add localePrefix to createSharedPathnamesNavigation({ locales, localePrefix });

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales });
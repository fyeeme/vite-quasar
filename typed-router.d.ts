
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  NavigationGuard,
  UseLinkFnTyped,
} from 'unplugin-vue-router'

declare module '@vue-router/routes' {
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '//': RouteRecordInfo<'//', '/', Record<never, never>, Record<never, never>>,
    '//blank': RouteRecordInfo<'//blank', '/blank', Record<never, never>, Record<never, never>>,
    '//examples/asset': RouteRecordInfo<'//examples/asset', '/examples/asset', Record<never, never>, Record<never, never>>,
    '//examples/avatar': RouteRecordInfo<'//examples/avatar', '/examples/avatar', Record<never, never>, Record<never, never>>,
    '//examples/axios': RouteRecordInfo<'//examples/axios', '/examples/axios', Record<never, never>, Record<never, never>>,
    '//examples/badge': RouteRecordInfo<'//examples/badge', '/examples/badge', Record<never, never>, Record<never, never>>,
    '//examples/dialog': RouteRecordInfo<'//examples/dialog', '/examples/dialog', Record<never, never>, Record<never, never>>,
    '//examples/directive': RouteRecordInfo<'//examples/directive', '/examples/directive', Record<never, never>, Record<never, never>>,
    '//examples/drawer': RouteRecordInfo<'//examples/drawer', '/examples/drawer', Record<never, never>, Record<never, never>>,
    '//examples/event': RouteRecordInfo<'//examples/event', '/examples/event', Record<never, never>, Record<never, never>>,
    '//examples/event-ts': RouteRecordInfo<'//examples/event-ts', '/examples/event-ts', Record<never, never>, Record<never, never>>,
    '//examples/flex': RouteRecordInfo<'//examples/flex', '/examples/flex', Record<never, never>, Record<never, never>>,
    '//examples/form': RouteRecordInfo<'//examples/form', '/examples/form', Record<never, never>, Record<never, never>>,
    '//examples/icon': RouteRecordInfo<'//examples/icon', '/examples/icon', Record<never, never>, Record<never, never>>,
    '//examples/keyframework': RouteRecordInfo<'//examples/keyframework', '/examples/keyframework', Record<never, never>, Record<never, never>>,
    '//examples/row': RouteRecordInfo<'//examples/row', '/examples/row', Record<never, never>, Record<never, never>>,
    '//examples/spacing': RouteRecordInfo<'//examples/spacing', '/examples/spacing', Record<never, never>, Record<never, never>>,
    '//examples/static': RouteRecordInfo<'//examples/static', '/examples/static', Record<never, never>, Record<never, never>>,
    '//examples/table': RouteRecordInfo<'//examples/table', '/examples/table', Record<never, never>, Record<never, never>>,
    '//examples/typography': RouteRecordInfo<'//examples/typography', '/examples/typography', Record<never, never>, Record<never, never>>,
    '//examples/watermark': RouteRecordInfo<'//examples/watermark', '/examples/watermark', Record<never, never>, Record<never, never>>,
    '//examples/windicss': RouteRecordInfo<'//examples/windicss', '/examples/windicss', Record<never, never>, Record<never, never>>,
    '//oauth2/authorized': RouteRecordInfo<'//oauth2/authorized', '/oauth2/authorized', Record<never, never>, Record<never, never>>,
    '//oauth2/login': RouteRecordInfo<'//oauth2/login', '/oauth2/login', Record<never, never>, Record<never, never>>,
    '//user/': RouteRecordInfo<'//user/', '/user/', Record<never, never>, Record<never, never>>,
    '//user/_id/detail': RouteRecordInfo<'//user/_id/detail', '/user/_id/detail', Record<never, never>, Record<never, never>>,
    '//user/list': RouteRecordInfo<'//user/list', '/user/list', Record<never, never>, Record<never, never>>,
    '//user/profile': RouteRecordInfo<'//user/profile', '/user/profile', Record<never, never>, Record<never, never>>,
    '/blank': RouteRecordInfo<'/blank', '/blank', Record<never, never>, Record<never, never>>,
    '/blank/_': RouteRecordInfo<'/blank/_', '/blank/_', Record<never, never>, Record<never, never>>,
    '/blank/403': RouteRecordInfo<'/blank/403', '/blank/403', Record<never, never>, Record<never, never>>,
    '/blank/login': RouteRecordInfo<'/blank/login', '/blank/login', Record<never, never>, Record<never, never>>,
    '/blank/register': RouteRecordInfo<'/blank/register', '/blank/register', Record<never, never>, Record<never, never>>,
  }
}

declare module '@vue-router' {
  import type { RouteNamedMap } from '@vue-router/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void
}

declare module 'vue-router' {
  import type { RouteNamedMap } from '@vue-router/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}

// Taken from https://github.com/angular/components/blob/master/src/cdk/drag-drop/drag-utils.ts

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Clamps a number between zero and a maximum. */
function clamp(value: number, max: number): number {
  return Math.max(0, Math.min(max, value))
}

/**
 * Moves an item one index in an array to another.
 * @param array Array in which to move the item.
 * @param fromIndex Starting index of the item.
 * @param toIndex Index to which the item should be moved.
 */
export function moveItemInArray<T = unknown>(array: T[], fromIndex: number, toIndex: number): void {
  const from = clamp(fromIndex, array.length - 1)
  const to = clamp(toIndex, array.length - 1)

  if (from === to) {
    return
  }

  const target = array[from]
  const delta = to < from ? -1 : 1

  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta]
  }

  array[to] = target
}

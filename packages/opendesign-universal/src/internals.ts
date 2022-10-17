export const __internals = Symbol();

/**
 * similar to rust's todo! macro or java's and C#'s NotImplemented Exception
 * just throws an error
 */
export function todo(what?: string): never {
  throw new Error("TODO" + (what ? ": " + what : ""));
}

export type ToDo = unknown;

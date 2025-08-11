import Userinfo from "src/api/models/Userinfo";

import GlobalPermissions from "src/api/models/GlobalPermissions";
import { BACKEND_BASENAME } from "src/constants";

/**
 * Uses the /auth endpoint of Oauth2 proxy, which
 * returns a 202 if authenticated or 401 if not.
 * @param abort Optional AbortSignal
 * @returns whether the user is authenticated or not
 */
export async function checkAuth(abort?: AbortSignal) {
  const res = await fetch(`${BACKEND_BASENAME}/oauth2/auth`, {
    headers: {
      accept: "application/json",
    },
    signal: abort,
  });

  if (res.ok) return true;

  if (res.status !== 401) throw Error(res.statusText); // server error

  return false;
}

/**
 *
 * @param abort Optional AbortSignal
 * @returns
 */
export async function getUserinfo(abort?: AbortSignal) {
  const res = await fetch(`${BACKEND_BASENAME}/api/v1/userinfo/`, {
    headers: {
      accept: "application/json",
    },
    signal: abort,
  });

  if (res.ok) return (await res.json()) as Userinfo;

  if (res.status !== 401) throw Error(res.statusText); // server error

  return undefined;
}

export async function getUserPermissions(abort?: AbortSignal) {
  const res = await fetch(`${BACKEND_BASENAME}/api/v1/access-allowed`, {
    headers: {
      accept: "application/json",
    },
    signal: abort,
  });

  if (res.ok) return (await res.json()) as GlobalPermissions;

  if (res.status !== 401) throw Error(res.statusText); // server error

  return undefined;
}

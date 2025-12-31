type RouteParams = Record<string, string | string[] | undefined>;

export function getRouteParam(
  params: RouteParams | null | undefined,
  key: string,
): string | undefined {
  if (!params) return undefined;
  const value = params[key];

  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

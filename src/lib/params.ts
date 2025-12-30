export function getRouteParam(
  params: Record<string, string | string[]> | null | undefined,
  key: string,
): string | undefined {
  if (!params) return undefined;
  const value = params[key];

  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

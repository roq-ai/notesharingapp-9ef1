const mapping: Record<string, string> = {
  companies: 'company',
  notes: 'note',
  shares: 'share',
  tags: 'tag',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'NoteSharingApp',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage notes', 'Manage tags'],
  getQuoteUrl: 'https://app.roq.ai/proposal/4565a356-3ae4-4d8c-80d8-f63d94f49f22',
};

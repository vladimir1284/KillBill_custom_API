import { Router } from 'express';

import account_route from './account/account.routes.js';
import admin_route from './admin/admin.routes.js';
import bundle_route from './bundle/bundle.routes.js';
import catalog_route from './catalog/catalog.routes.js';
import credit_route from './credit/credit.routes.js';
import custom_field_route from './custom_field/custom_field.routes.js';
import export_route from './export/export.routes.js';
import invoice_route from './invoice/invoice.routes.js';
import invoice_item_route from './invoice_item/invoice_item.routes.js';
import invoice_payment_route from './invoice_payment/invoice_payment.routes.js';
import payment_route from './payment/payment.routes.js';
import payment_gateway_route from './payment_gateway/payment_gateway.routes.js';
import payment_method_route from './payment_method/payment_method.routes.js';
import payment_transaction_route from './payment_transaction/payment_transaction.routes.js';
import plugin_info_route from './plugin_info/plugin_info.routes.js';
import security_route from './security/security.routes.js';
import subscription_route from './subscription/subscription.routes.js';
import tag_route from './tag/tag.routes.js';
import tag_definition_route from './tag_definition/tag_definition.routes.js';
import tenant_route from './tenat/tenant.routes.js';
import usage_route from './usage/usage.routes.js';

const router = Router();

router.use('/accounts', account_route);
router.use('/admin', admin_route);
router.use('/bundles', bundle_route);
router.use('/catalog', catalog_route);
router.use('/credits', credit_route);
router.use('/customFields', custom_field_route);
router.use('/export', export_route);
router.use('/invoices', invoice_route);
router.use('/invoiceItems', invoice_item_route);
router.use('/invoicePayments', invoice_payment_route);
router.use('/payments', payment_route);
router.use('/paymentGateways', payment_gateway_route);
router.use('/paymentMethods', payment_method_route);
router.use('/paymentTransactions', payment_transaction_route);
router.use('/pluginsInfo', plugin_info_route);
router.use('/security', security_route);
router.use('/subscriptions', subscription_route);
router.use('/tags', tag_route);
router.use('/tagDefinitions', tag_definition_route);
router.use('/tenants', tenant_route);
router.use('/usages', usage_route);

export default router;

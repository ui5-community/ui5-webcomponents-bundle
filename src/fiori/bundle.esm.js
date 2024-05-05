import testAssets from "../main/bundle.esm.js";
import * as defaultFioriTexts from "@ui5/webcomponents-fiori/dist/generated/i18n/i18n-defaults.js";

// FIORI assets
import "@ui5/webcomponents-fiori/dist/Assets.js";

import "./bundle.common.js";
import BarcodeScannerDialog from "@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js";

testAssets.defaultTexts = {...testAssets.defaultTexts, ...defaultFioriTexts };
export default testAssets;

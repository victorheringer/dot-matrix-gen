import useLocalStorageState from "use-local-storage-state";

const STORAGE_KEY = "settings";

export enum EXPORT_FORMAT {
  BOOLEAN = "boolean",
  HEX = "hex",
}

const DEFAULT_SETTINGS_VALUE = {
  exportFormat: EXPORT_FORMAT.HEX,
};

export function useSettings() {
  const [settings, setSettings]: any = useLocalStorageState(STORAGE_KEY, {
    defaultValue: DEFAULT_SETTINGS_VALUE,
  });

  function updateExportFormat(exportFormat: EXPORT_FORMAT) {
    setSettings({ ...setSettings, exportFormat });
  }

  return { settings, updateExportFormat };
}

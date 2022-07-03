import { useParams } from "react-router-dom";

export function useParsedParams(parsers: any) {
  const params = useParams();

  return Object.keys(parsers).reduce((acc, key: string) => {
    const value = parsers[key](params[key] || "");
    return { ...acc, [key]: value };
  }, {});
}

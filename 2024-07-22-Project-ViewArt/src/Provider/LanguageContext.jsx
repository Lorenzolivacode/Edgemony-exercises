import { useState, useEffect, createContext } from "react";

import { labelsEn, labelsIt } from "../data/labels";

export const LanguageContext = createContext();
export const SetLanguageContext = createContext();
export const LanguageObjUsedContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [languageObjUsed, setLanguageObjUsed] = useState(labelsEn);
  useEffect(() => {
    const selectedLanguage = language === "en" ? labelsEn : labelsIt;
    setLanguageObjUsed(selectedLanguage);
  }, [language]);
  return (
    <LanguageContext.Provider value={language}>
      <SetLanguageContext.Provider value={setLanguage}>
        <LanguageObjUsedContext.Provider value={languageObjUsed}>
          {children}
        </LanguageObjUsedContext.Provider>
      </SetLanguageContext.Provider>
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;

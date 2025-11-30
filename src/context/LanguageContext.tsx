import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "np";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const translations = {
  en: {
    dashboard: "Dashboard",
    myDocuments: "My Documents",
    services: "Services",
    transactions: "Transactions",
    aiSupport: "AI Support",
    settings: "Settings",
    welcome: "Welcome",
    searchServices: "Search services...",
    startApplication: "Start Application",
    requirements: "Requirements",
    fees: "Fees",
    timeEstimate: "Time Estimate",
    apply: "Apply",
    status: "Status",
    logout: "Logout",
    nepali: "Nepali",
    english: "English",
  },
  np: {
    dashboard: "ड्यासबोर्ड",
    myDocuments: "मेरा कागजातहरू",
    services: "सेवाहरू",
    transactions: "कारोबारहरू",
    aiSupport: "AI सहयोग",
    settings: "सेटिङहरू",
    welcome: "स्वागत छ",
    searchServices: "सेवा खोज्नुहोस्...",
    startApplication: "आवेदन सुरु गर्नुहोस्",
    requirements: "आवश्यकताहरू",
    fees: "शुल्क",
    timeEstimate: "समय अनुमान",
    apply: "निवेदन दिनुहोस्",
    status: "स्थिति",
    logout: "लगआउट",
    nepali: "नेपाली",
    english: "अंग्रेजी",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
    if (language === "np") {
      document.body.classList.add("font-nepali");
      document.body.classList.remove("font-sans");
    } else {
      document.body.classList.add("font-sans");
      document.body.classList.remove("font-nepali");
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

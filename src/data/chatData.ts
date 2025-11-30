export interface ChatResponse {
  keywords: string[];
  response: {
    en: string;
    np: string;
  };
  actions?: {
    label: { en: string; np: string };
    link: string;
  }[];
}

export const chatData: ChatResponse[] = [
  {
    keywords: ["hello", "hi", "namaste", "greeting", "start"],
    response: {
      en: "Namaste! I am Nagarik Sathi, your AI assistant. How can I help you today? You can ask me about passports, licenses, PAN cards, or other government services.",
      np: "नमस्ते! म नागरिक साथी, तपाईंको AI सहायक हुँ। म तपाईंलाई कसरी सहयोग गर्न सक्छु? तपाईं मलाई राहदानी, लाइसेन्स, प्यान कार्ड, वा अन्य सरकारी सेवाहरूको बारेमा सोध्न सक्नुहुन्छ।",
    },
  },
  {
    keywords: ["passport", "rahadani"],
    response: {
      en: "To apply for a passport, you need your Citizenship Certificate and National ID number. The process takes 3-30 days depending on urgency. Would you like to start the application?",
      np: "राहदानीको लागि आवेदन दिन, तपाईंलाई नागरिकता प्रमाणपत्र र राष्ट्रिय परिचयपत्र नम्बर चाहिन्छ। यो प्रक्रिया जरुरीता अनुसार ३-३० दिन लाग्छ। के तपाईं आवेदन सुरु गर्न चाहनुहुन्छ?",
    },
    actions: [
      {
        label: {
          en: "Start Passport Application",
          np: "राहदानी आवेदन सुरु गर्नुहोस्",
        },
        link: "/services/passport/apply",
      },
      {
        label: { en: "View Details", np: "विवरण हेर्नुहोस्" },
        link: "/services/passport",
      },
    ],
  },
  {
    keywords: ["license", "driving", "sawari"],
    response: {
      en: "For a driving license, you need to pass a written exam and a trial. You can register for the exam here. Do you want to see the exam schedule or apply?",
      np: "सवारी चालक अनुमति पत्रको लागि, तपाईंले लिखित परीक्षा र ट्रायल पास गर्नुपर्छ। तपाईं यहाँ परीक्षाको लागि दर्ता गर्न सक्नुहुन्छ। के तपाईं परीक्षा तालिका हेर्न वा आवेदन दिन चाहनुहुन्छ?",
    },
    actions: [
      {
        label: {
          en: "Apply for License",
          np: "लाइसेन्सको लागि आवेदन दिनुहोस्",
        },
        link: "/services/license/apply",
      },
    ],
  },
  {
    keywords: ["pan", "tax", "kar"],
    response: {
      en: "You can get a PAN card instantly for free. It is mandatory for tax purposes. Do you want to register for a Personal PAN?",
      np: "तपाईंले तुरुन्तै नि:शुल्क प्यान कार्ड प्राप्त गर्न सक्नुहुन्छ। यो कर प्रयोजनका लागि अनिवार्य छ। के तपाईं व्यक्तिगत प्यानको लागि दर्ता गर्न चाहनुहुन्छ?",
    },
    actions: [
      {
        label: { en: "Register PAN", np: "प्यान दर्ता गर्नुहोस्" },
        link: "/services/pan/apply",
      },
    ],
  },
  {
    keywords: ["citizenship", "nagarikta"],
    response: {
      en: "Citizenship is the primary identity document. You need to apply at your local ward office with your father's or mother's citizenship. We can help you prepare the forms.",
      np: "नागरिकता मुख्य परिचय पत्र हो। तपाईंले आफ्नो बुबा वा आमाको नागरिकता सहित आफ्नो स्थानीय वडा कार्यालयमा आवेदन दिनुपर्छ। हामी तपाईंलाई फारमहरू तयार गर्न मद्दत गर्न सक्छौं।",
    },
  },
  {
    keywords: ["voter", "vote", "matadata"],
    response: {
      en: "You can register for the voter roll at the District Election Office. You need your citizenship certificate.",
      np: "तपाईं जिल्ला निर्वाचन कार्यालयमा मतदाता नामावलीको लागि दर्ता गर्न सक्नुहुन्छ। तपाईंलाई आफ्नो नागरिकता प्रमाणपत्र चाहिन्छ।",
    },
  },
  {
    keywords: ["marriage", "bibaha"],
    response: {
      en: "Marriage registration should be done at the local ward office within 35 days of marriage. You need citizenship of both spouses and photos.",
      np: "विवाह दर्ता विवाह भएको ३५ दिन भित्र स्थानीय वडा कार्यालयमा गरिसक्नुपर्छ। दुबै दम्पतीको नागरिकता र फोटोहरू आवश्यक पर्दछ।",
    },
  },
  {
    keywords: ["birth", "janma"],
    response: {
      en: "Birth registration must be done within 35 days of birth at the local ward office. You need the hospital birth certificate and parents' citizenship.",
      np: "जन्म दर्ता जन्म भएको ३५ दिन भित्र स्थानीय वडा कार्यालयमा गरिसक्नुपर्छ। तपाईंलाई अस्पतालको जन्म प्रमाणपत्र र आमाबाबुको नागरिकता चाहिन्छ।",
    },
  },
  {
    keywords: ["company", "business"],
    response: {
      en: "Company registration is done at the Office of the Company Registrar (OCR). You need to reserve a company name first.",
      np: "कम्पनी दर्ता कम्पनी रजिस्ट्रारको कार्यालय (OCR) मा गरिन्छ। तपाईंले पहिले कम्पनीको नाम आरक्षित गर्नुपर्छ।",
    },
  },
  {
    keywords: ["thank", "dhanyabad"],
    response: {
      en: "You're welcome! Is there anything else I can help you with?",
      np: "स्वागत छ! के म तपाईंलाई अरू केही सहयोग गर्न सक्छु?",
    },
  },
  {
    keywords: ["bye", "goodbye", "bida"],
    response: {
      en: "Goodbye! Have a nice day.",
      np: "बिदा! शुभ दिन।",
    },
  },
];

export const suggestionPills = [
  { en: "How to get a Passport?", np: "राहदानी कसरी बनाउने?" },
  { en: "Apply for License", np: "लाइसेन्सको लागि आवेदन" },
  { en: "PAN Registration", np: "प्यान दर्ता" },
  { en: "Tax Information", np: "कर जानकारी" },
];

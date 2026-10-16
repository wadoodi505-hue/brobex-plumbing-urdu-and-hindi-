import { createContext, useContext, useState, type ReactNode } from "react";
export type Language = "ur" | "hi";
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (english: string) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);
const translations: Record<string, {ur:string;hi:string}> = {
"Home":{ur:"صفحۂ اول",hi:"मुखपृष्ठ"},"Services":{ur:"خدمات",hi:"सेवाएँ"},"About":{ur:"ہمارے بارے میں",hi:"हमारे बारे में"},"Why BroBax":{ur:"بروبیکس ہی کیوں؟",hi:"ब्रोबैक्स ही क्यों?"},"Reviews":{ur:"آراء",hi:"समीक्षाएँ"},"FAQ":{ur:"عام سوالات",hi:"अक्सर पूछे जाने वाले प्रश्न"},"Contact":{ur:"رابطہ",hi:"संपर्क"},"Request Service":{ur:"سروس کی درخواست دیں",hi:"सेवा का अनुरोध करें"},"Request a Service":{ur:"سروس کی درخواست دیں",hi:"सेवा का अनुरोध करें"},"Our Services":{ur:"ہماری خدمات",hi:"हमारी सेवाएँ"},"Plumbing & Water Services":{ur:"پلمبنگ اور پانی کی خدمات",hi:"प्लंबिंग और जल सेवाएँ"},"View Details":{ur:"تفصیلات دیکھیں",hi:"विवरण देखें"},"Emergency Plumbing":{ur:"ہنگامی پلمبنگ خدمات",hi:"आपातकालीन प्लंबिंग सेवाएँ"},"Drain Cleaning":{ur:"نالیوں کی صفائی",hi:"नाली की सफ़ाई"},"Leak Detection & Repair":{ur:"رساؤ کی نشاندہی اور مرمت",hi:"रिसाव का पता लगाना और मरम्मत"},"Water Heater Services":{ur:"واٹر ہیٹر کی خدمات",hi:"वॉटर हीटर सेवाएँ"},"Boiler & Heating Services":{ur:"بوائلر اور ہیٹنگ کی خدمات",hi:"बॉयलर और हीटिंग सेवाएँ"},"Pipe Repair & Replacement":{ur:"پائپ کی مرمت اور تبدیلی",hi:"पाइप की मरम्मत और बदलना"},"Reliable Plumbing Across Pakistan.":{ur:"پاکستان بھر میں قابلِ اعتماد پلمبنگ خدمات",hi:"पूरे पाकिस्तान में भरोसेमंद प्लंबिंग सेवाएँ"},"Call BroBax":{ur:"بروبیکس کو کال کریں",hi:"ब्रोबैक्स को कॉल करें"},"Priority same-day attendance whenever the situation is unsafe or actively causing damage.":{ur:"خطرے یا نقصان کی صورت میں ترجیحی بنیاد پر اسی دن سروس۔",hi:"खतरे या नुकसान की स्थिति में उसी दिन प्राथमिकता से सेवा।"}
};
export function LanguageProvider({children}:{children:ReactNode}) {
 const [language,setLanguage]=useState<Language>("ur");
 const t=(english:string)=>translations[english]?.[language] ?? english;
 return <LanguageContext.Provider value={{language,setLanguage,t}}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){const value=useContext(LanguageContext); if(!value) throw new Error("useLanguage must be used inside LanguageProvider"); return value;}

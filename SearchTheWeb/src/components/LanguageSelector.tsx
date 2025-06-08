import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  US,
  BR,
  BD,
  CN,
  CZ,
  DE,
  ES,
  FR,
  GR,
  ID,
  IL,
  IN,
  JP,
  KE,
  KR,
  PK,
  RU,
  SA,
  TR,
} from "country-flag-icons/react/3x2";

const dictionary = [
  { lang: "ar", text: "العربية", flag: <SA /> }, // Saudi Arabia
  { lang: "bn", text: "বাংলা", flag: <BD /> }, // Bangladesh
  { lang: "cs", text: "Čeština", flag: <CZ /> }, // Czech Republic
  { lang: "de", text: "Deutsch", flag: <DE /> }, // Germany
  { lang: "el", text: "Ελληνικά", flag: <GR /> }, // Greece
  { lang: "en", text: "English", flag: <US /> }, // United States
  { lang: "es", text: "Español", flag: <ES /> }, // Spain (generic Spanish)
  { lang: "fr", text: "Français", flag: <FR /> }, // France
  { lang: "he", text: "עברית", flag: <IL /> }, // Israel
  { lang: "hi", text: "हिन्दी", flag: <IN /> }, // India
  { lang: "id", text: "Bahasa Indonesia", flag: <ID /> }, // Indonesia
  { lang: "ja", text: "日本語", flag: <JP /> }, // Japan
  { lang: "ko", text: "한국어", flag: <KR /> }, // South Korea
  { lang: "mr", text: "मराठी", flag: <IN /> }, // India (Marathi)
  { lang: "pt", text: "Português (Brasil)", flag: <BR /> }, // Brazil
  { lang: "ru", text: "Русский", flag: <RU /> }, // Russia
  { lang: "sw", text: "Kiswahili", flag: <KE /> }, // Kenya (Swahili)
  { lang: "tr", text: "Türkçe", flag: <TR /> }, // Turkey
  { lang: "ur", text: "اردو", flag: <PK /> }, // Pakistan
  { lang: "zh", text: "中文", flag: <CN /> }, // China (Simplified)
];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  return (
    <Select
      value={selectedLanguage}
      onValueChange={(newValue) => {
        setSelectedLanguage(newValue);
      }}
    >
      <SelectTrigger className='border border-zinc-600 rounded-full select-none !h-5 px-1 m-2 mr-0 gap-1'>
        <SelectValue>
          <div className='size-4 flex items-center bg-background transition-colors duration-500 rounded-full'>
            {dictionary.find((item) => item.lang === selectedLanguage)?.flag}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {dictionary.map((item) => (
          <SelectItem value={item.lang} key={item.lang}>
            {item.flag}
            {item.text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

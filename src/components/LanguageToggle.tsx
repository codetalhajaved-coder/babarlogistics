import { useAppDispatch, useAppSelector } from '@/hooks/useAppSelector';
import { toggleLanguage } from '@/store/languageSlice';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const dispatch = useAppDispatch();
  const { currentLanguage } = useAppSelector((state) => state.language);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => dispatch(toggleLanguage())}
      className="gap-2 font-medium"
    >
      <Globe className="h-4 w-4" />
      {currentLanguage === "en" ? "العربية" : "English"}
    </Button>
  );
};

export default LanguageToggle;

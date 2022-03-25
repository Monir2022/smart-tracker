import ErrorImage from "../assets/images/error.jpg";
import { useContext } from "react";
import { LanguageContext } from "../state/LanguageContext";
export default function Error() {
  const { language } = useContext(LanguageContext);
  
  return (
    <div className="error">
      <img src={ErrorImage} alt="Error" className="error-image" />
      <p className="error-text">{ language.error_message}</p>
    </div>
  );
}

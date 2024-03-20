/* eslint-disable react/no-unescaped-entities */
import { useTranslation } from "react-i18next";

const Instructions = () => {

  const { t } = useTranslation("global");

  return (
    <div className="instructions-container">
      <h3 className="subtitle">{t("userPage.instructions.title")}</h3>

      <ol className="instructions">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            {t(`userPage.instructions.${index + 1}`)}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;


import "../assets/styles/rankingPage.css";
import Table from "../components/ranking/Table";
import { useTranslation } from "react-i18next";


const RankingPage = () => {
  const { t } = useTranslation("global");

  return (
    <div className="rankingPage container">
      <h1 className="title">{t("RankingPage.title")}</h1>

      <Table />
    </div>
  );
};

export default RankingPage;

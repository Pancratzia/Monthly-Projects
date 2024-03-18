
import "../assets/styles/rankingPage.css";
import Table from "../components/ranking/Table";


const RankingPage = () => {
  

  return (
    <div className="rankingPage container">
      <h1 className="title">Ranking</h1>

      <Table />
    </div>
  );
};

export default RankingPage;

import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/ui/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Rrezon",
    lastName: "Curraj",
    email: "rrezoncurraj10@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Acces and manage ur accoun and transactions "
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSATIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[]} />
    </section>
  );
};

export default Home;

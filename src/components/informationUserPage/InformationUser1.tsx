
import Footer from "../reusableComponents/Footer";
import UserInfoCard from "../informationUserPage/UserInfoCard";
import Header from "../reusableComponents/Header";

export default function MoreInformation() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Header />

      <main className="flex-1 flex justify-center items-center mb-10">
        <UserInfoCard />
      </main>

      <Footer />

    </div>
  );
}
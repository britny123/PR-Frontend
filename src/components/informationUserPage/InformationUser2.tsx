
import Footer from "../reusableComponents/Footer";
import Header from "../reusableComponents/Header";
import UserInfoCard2 from "../informationUserPage/UserInfoCard2";


export default function InformationUser2() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Header />

      <main className="flex-1 flex justify-center items-center mb-10">
        <UserInfoCard2 />
      </main>

      <Footer />

    </div>
  );
}
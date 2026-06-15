import Footer from "../reusableComponents/Footer";
import UserInfoEdit from "../informationUserPage/UserInfoEdit";
import Header from "../reusableComponents/Header";

export default function EditPersonalInfo() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Header />

      <main className="flex-1 flex justify-center items-center mb-10">
        <UserInfoEdit />
      </main>

      <Footer />

    </div>
  );
}
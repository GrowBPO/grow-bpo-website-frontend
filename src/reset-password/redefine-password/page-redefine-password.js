import Footer from "../../footer/footer";
import Header from "../../header/header";
import useAuth from "../../utils/check-auth";
import FormRedefinePassword from "./redefine-password";

function RedefinePassword() {

  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser && (
        <Header />
      )}
      <FormRedefinePassword />
      <Footer />
    </div>
  );
}

export default RedefinePassword;
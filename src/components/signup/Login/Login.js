import "./signupLogin.css";
import { useFormik } from "formik";
import { Link, withRouter } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../../common/Input";
import { useAuthAction } from "../../../providers/AuthProvider";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("نام کامل خود را وارد کنید"),
  email: Yup.string()
    .required("ايميل خود را وارد كنيد")
    .email("ايميل نامعتبر است"),
  password: Yup.string().required("رمز عبور خود را وارد كنيد").min(3),
});

function Login({ history }) {
  const setAuth = useAuthAction();

  const onSubmit = async (values) => {
    const { password, email, name } = values;
    const userdata = {
      password,
      email,
      name,
    };

    try {
      setAuth(userdata);
      history.push("/");
    } catch (error) {}
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="Form-container">
      <form onSubmit={formik.handleSubmit} className="Form">
        <Input formik={formik} label="نام " name="name" />
        <Input formik={formik} label="ايميل" name="email" />
        <Input
          formik={formik}
          label="رمز عبور"
          name="password"
          type="password"
        />
        <button
          style={{ marginTop: "3rem" }}
          type="submit"
          className="btn btn-primary"
          disabled={!formik.isValid}
        >
          ورود
        </button>
        <Link to="/signup">ثبت نام </Link>
      </form>
    </div>
  );
}

export default withRouter(Login);

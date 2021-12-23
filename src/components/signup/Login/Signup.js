import "./signupLogin.css";
import { useFormik } from "formik";
import { Link, withRouter } from "react-router-dom";
import * as Yup from "yup";
import signupUser from "../../../services/signupUser";
import Input from "../../../common/Input";
import { useAuth, useAuthAction } from "../../../providers/AuthProvider";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  phoneNumber: "",
  address: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("لطفا نام خود را وارد كنيد"),
  email: Yup.string()
    .required("ايميل خود را وارد كنيد")
    .email("ايميل نامعتبر است"),
  password: Yup.string().required("رمز عبور خود را وارد كنيد"),
  passwordConfirm: Yup.string()
    .required("رمز عبور خود را مجددا وارد كنيد")
    .oneOf([Yup.ref("password"), null], "با رمز شما مطابقت ندارد"),
  phoneNumber: Yup.string().required("شماره همراه خود را وارد كنيد"),
  address: Yup.string().required("لطفا آدرس دقيق خود را وارد كنيد"),
});

function Signup({ history }) {
    const Auth=useAuth();
    const setAuth=useAuthAction();
  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password, address } = values;
    const userdata = {
      name,
      email,
      password,
      phoneNumber,
      address,
    };
    try {
      const { data } = await signupUser(userdata);
      setAuth(data)
      console.log(data);
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
    <div style={{ minHeight: "60vh" }} className="Form-container">
      <form onSubmit={formik.handleSubmit} className="Form">
        <Input formik={formik} label="نام و نام خانوادگی" name="name" />
        <Input formik={formik} label="ايميل" name="email" />
        <Input formik={formik} label="تلفن همراه" name="phoneNumber" />

        <Input
          formik={formik}
          label="رمز عبور"
          name="password"
          type="password"
        />
        <Input
          formik={formik}
          label="رمز عبور مجدد"
          name="passwordConfirm"
          type="password"
        />
        <Input formik={formik} label="آدرس" name="address" type="text" />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formik.isValid}
        >
          ثبت نام
        </button>
        
        <Link to="/login">ورود به حساب كاربری</Link>
      </form>
    </div>
  );
}

export default withRouter(Signup);

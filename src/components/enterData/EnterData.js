import "../signup/Login/signupLogin.css";
import { useFormik } from "formik";
import { Link, withRouter } from "react-router-dom";
import * as Yup from "yup";
import { useAuthAction } from "../../providers/AuthProvider";
import Input from "../../common/Input";

const initialValues = {
  name: "",
  phoneNumber: "",
  city: "",
  address: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("لطفا نام خود را وارد كنيد"),
  phoneNumber: Yup.string().required("شماره همراه خود را وارد كنيد"),
  city: Yup.string().required("لطفا شهر خود را وارد كنيد"),
  address: Yup.string().required("لطفا آدرس دقيق خود را وارد كنيد"),
});

function EnterData({ history }) {
  const setAuth = useAuthAction();
  const onSubmit = async (values) => {
    const { name, phoneNumber, city, address } = values;
    const userdata = {
      name,
      phoneNumber,
      city,
      address,
    };
    try {
      setAuth(userdata);
      history.push("/checkout");
    } catch (error) {}
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div style={{ minHeight: "50vh" }} className="Form-container">
      <form onSubmit={formik.handleSubmit} className="Form">
        <Input formik={formik} label="نام و نام خانوادگی" name="name" />
        <Input formik={formik} label="تلفن همراه" name="phoneNumber" />
        <Input formik={formik} label="شهر" name="city" />
        <Input formik={formik} label="آدرس" name="address" type="text" />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formik.isValid}
        >
          ثبت
        </button>

        <Link to="/login">ورود به حساب كاربری</Link>
      </form>
    </div>
  );
}

export default withRouter(EnterData);

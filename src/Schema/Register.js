import * as yup from "yup";

const RegisterSchema = yup.object().shape({
 name :yup.string().required("Name field is required").min(3),
email: yup.string().required("Email field is reaquired").email(),
// start phone schma
phone:yup.number().required("phone field is required").min(11).typeError("That doesn't look like a phone number")
.positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point"),
// End phone schema
password : yup.string().required("Password field is required").min(8).max(35),
conpassword: yup.string().required("confirm Password field is required").oneOf([yup.ref('password')] , "Passwords does not match")
})

export default RegisterSchema;
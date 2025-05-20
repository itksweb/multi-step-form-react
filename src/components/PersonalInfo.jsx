import { useEffect, useState } from "react";
import ContentHead from "./ContentHead";
import TextInput from "./TextInput";
import StepContainer from "./StepContainer";

const formin = [
  ["Name", "e.g. Stephen King", "text", "name"],
  ["Email Address", "e.g. stephenking@lorem.com", "email", "email"],
  ["Phone", "e.g. +1 234 567 890", "number", "phone"],
];

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const PersonalInfo = ({
  userInfo,
  setUserInfo,
  inputErr,
  setInputErr,
}) => {
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });

  useEffect(() => {
    if (touched.name) {
      if (userInfo.name.trim() && inputErr.name) {
        setInputErr((prev) => {
          return { ...prev, name: false };
        });
      } else if (!userInfo.name.trim() && !inputErr.name) {
        setInputErr((prev) => {
          return { ...prev, name: true };
        });
      }
    }
  }, [userInfo.name]);

  useEffect(() => {
    if (touched.email) {
      if (emailRegex.test(userInfo.email) && inputErr.email) {
        setInputErr((prev) => {
          return { ...prev, email: false };
        });
      } else if (!emailRegex.test(userInfo.email) && !inputErr.email) {
        setInputErr((prev) => {
          return { ...prev, email: true };
        });
      }
    }
  }, [userInfo.email]);

  useEffect(() => {
    if (touched.phone) {
      if (userInfo.phone.trim() && inputErr.phone) {
        setInputErr((prev) => {
          return { ...prev, phone: false };
        });
      } else if (!userInfo.phone.trim() && !inputErr.phone) {
        setInputErr((prev) => {
          return { ...prev, phone: true };
        });
      }
    }
  }, [userInfo.phone]);


  const onInputChange = (id, value) => {
    if (!touched[id]) {
      setTouched((prev) => {
        return { ...prev, [id]: true };
      });
    }
    setUserInfo((prev) => {
      return { ...prev, [id]: value };
    });
    // switch (id) {
    //   case "name":
    //     setName(value);
    //     break;
    //   case "email":
    //     setEmail(value);
    //     break;
    //   case "phone":
    //     setPhone(value);
    //     break;

    //   default:
    //     break;
    // }
  };

  return (
    <StepContainer
      title="Personal info"
      descr="Please provide your name, email address, and phone number."
    >
      <div className="fields ">
        <TextInput
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          value={userInfo.name}
          onChange={onInputChange}
          label="Name"
          err={inputErr.name}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={userInfo.email}
          onChange={onInputChange}
          label="Email Address"
          err={inputErr.email}
          errTxt="Please enter a valid email"
        />
        <TextInput
          type="number"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          value={userInfo.phone}
          onChange={onInputChange}
          label="Phone Number"
          err={inputErr.phone}
        />
      </div>
    </StepContainer>
  );
};

export default PersonalInfo;

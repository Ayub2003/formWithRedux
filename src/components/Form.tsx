import { Switch, Radio, DatePicker, Input, Button } from "antd";
import type { RadioChangeEvent } from "antd";
import { useState } from "react";
import { setFormState } from "../store/slices/inputsSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";
import {
  InputAgeNumber,
  InputCheckboxWithInherit,
  InputColor,
  InputDate,
  InputMaleFemale,
  InputName,
  InputRangeAge,
  InputSurname,
  InputYesNo,
} from "./Inputs/Inputs";

export const Form = () => {
  const [data, setData] = useState(useSelector((state: any) => state.inputs));
  const [valid, setValid] = useState<boolean>(false);
  const dispatch = useDispatch();

  const getForm = (e: any) => {
    try {
      let isValidAddress = true;

      for (let el of data.address) {
        console.log(el.city, el.address);
        if (el.city == "" || el.address == "") {
          isValidAddress = false;
        }
      }
      console.log(isValidAddress);
      if (
        data.name !== "" &&
        data.surname !== "" &&
        data.age !== 0 &&
        data.age2 !== 0 &&
        data.color !== "" &&
        data.date !== "" &&
        isValidAddress === true
      ) {
        dispatch(setFormState(data));
        setValid(true);
      } else {
        setValid(false);
      }
    } catch (error) {
      setValid(false);
    }
  };

  return (
    <>
      <form onSubmit={getForm} className="form">
        <InputName data={data} setData={setData} />
        <InputSurname data={data} setData={setData} />
        <InputYesNo data={data} setData={setData} />
        <InputMaleFemale data={data} setData={setData} />
        <InputRangeAge data={data} setData={setData} />
        <InputAgeNumber data={data} setData={setData} />
        <InputDate data={data} setData={setData} />
        <InputColor data={data} setData={setData} />
        <InputCheckboxWithInherit data={data} setData={setData} />
        {valid ? null : <label>Не все поля зваолнены</label>}
        <Button className="btn" type="primary" onClick={getForm}>
          Отправить
        </Button>
      </form>
    </>
  );
};

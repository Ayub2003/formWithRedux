import {
  Button,
  DatePicker,
  Input,
  Radio,
  RadioChangeEvent,
  Switch,
} from "antd";
import { useState } from "react";
import "../Form.css";

//Ввод имени
export const InputName = (props: { data: any; setData: any }) => {
  const { data, setData } = props;
  const [error, setError] = useState(false);

  const onChangeName = (e: any) => {
    const name = e.target.value;
    if (name.length > 2) {
      setData({ ...data, name });
      setError(false);
    } else {
      setError(true);
    }
    console.log(data);
  };

  return (
    <div>
      <label style={{ display: "flex", justifyContent: "space-between" }}>
        <label>Имя:</label>
        {error ? <p style={{ color: "red" }}>Имя слишком короткое</p> : null}
      </label>

      <Input type="text" onChange={onChangeName} className="input-c" />
    </div>
  );
};

//ввод фамилии
export const InputSurname = (props: { data: any; setData: any }) => {
  const { data, setData } = props;
  const [error, setError] = useState(false);

  const onChangeSurname = (e: any) => {
    const surname = e.target.value;
    if (surname.length > 5) {
      setData({ ...data, surname });
      setError(false);
    } else {
      setError(true);
    }
    console.log(data);
  };

  return (
    <>
      <label style={{ display: "flex", justifyContent: "space-between" }}>
        <label>Фамилии</label>
        {error ? (
          <p style={{ color: "red" }}>Фамилия слишком короткая</p>
        ) : null}
      </label>
      <Input type="text" onChange={onChangeSurname} className="input-c" />
    </>
  );
};

//Ввод Да/Нет radio
export const InputYesNo = (props: { data: any; setData: any }) => {
  const { data, setData } = props;
  const [valueRadio, setValueRadio] = useState(1);
  const changeRadio = (e: RadioChangeEvent) => {
    if (e.target.value === 1) {
      let isGood = true;
      setData({ ...data, isGood });
    } else {
      let isGood = false;
      setData({ ...data, isGood });
    }
    setValueRadio(e.target.value);
  };
  return (
    <div>
      <label>Все нормально?</label>
      <Radio.Group className="radio" onChange={changeRadio} value={valueRadio}>
        <Radio value={1}>Да</Radio>
        <Radio value={2}>нет</Radio>
      </Radio.Group>
    </div>
  );
};

//Ввод male/female radio
export const InputMaleFemale = (props: { data: any; setData: any }) => {
  const { data, setData } = props;
  const [valueRadio2, setValueRadio2] = useState(1);

  const changeRadio2 = (e: RadioChangeEvent) => {
    if (e.target.value === 1) {
      let sex = "male";
      setData({ ...data, sex });
    } else {
      let sex = "female";
      setData({ ...data, sex });
    }
    setValueRadio2(e.target.value);
  };
  return (
    <div>
      <label>Все нормально?</label>
      <Radio.Group
        className="radio"
        onChange={changeRadio2}
        value={valueRadio2}
      >
        <Radio value={1}>Мужчина</Radio>
        <Radio value={2}>Женщина</Radio>
      </Radio.Group>
    </div>
  );
};

export const InputRangeAge = (props: { data: any; setData: any }) => {
  const [rangeAge, setRangeAge] = useState(0);
  const { data, setData } = props;
  const onChangeRange = (e: any) => {
    const age = Number(e.target.value);
    setRangeAge(age);
    setData({ ...data, age });
  };
  return (
    <>
      <label style={{ display: "flex", alignItems: "center" }}>
        Сколько тебе лет?{" "}
        <p style={{ paddingLeft: "5px", color: "#004DFF" }}>{rangeAge}</p>
      </label>

      <Input
        type="range"
        name="age"
        min={16}
        max={100}
        onChange={onChangeRange}
        className="input-c"
      />
    </>
  );
};

export const InputAgeNumber = (props: { data: any; setData: any }) => {
  const { data, setData } = props;
  const [error, setError] = useState([false, ""]);
  const onChangeNumber = (e: any) => {
    const age2: number = Number(e.target.value);
    if (age2 > 15 && age2 < 101) {
      setData({ ...data, age2 });
      setError([false, ""]);
    } else if (age2 < 16) {
      setError([true, "Вам меньше 16 лет, вам нельзя"]);
    } else if (age2 > 100) {
      setError([true, "Больше 100 вам быть не может"]);
    }
  };
  return (
    <div>
      <label style={{ display: "flex", justifyContent: "space-between" }}>
        <label>Сколько тебе лет?</label>
        {error ? <label style={{ color: "red" }}>{error[1]}</label> : null}
      </label>
      <Input type="number" onChange={onChangeNumber} className="input-c" />
    </div>
  );
};

//Ввод даты
export const InputDate = (props: { data: any; setData: any }) => {
  const { data, setData } = props;
  const onChangeDate = (some: any, dateString: any) => {
    const date = dateString;
    setData({ ...data, date });
  };
  return (
    <>
      <label>Указать дату:</label>
      <div className="input-date">
        <DatePicker onChange={onChangeDate} />
      </div>
    </>
  );
};

///Ввод цвета
export const InputColor = (props: { data: any; setData: any }) => {
  const { data, setData } = props;
  const onChangeColor = (e: any) => {
    const color = e.target.value;
    setData({ ...data, color });
  };
  return (
    <Input type="color" onChange={onChangeColor} className="input-color" />
  );
};

const miniFormData = { city: "", address: "" };
export const InputCheckboxWithInherit = (props: {
  data: any;
  setData: any;
}) => {
  const [checkbox, setCheckbox] = useState(true);
  const [address, setAddress] = useState<Array<object>>([miniFormData]);
  const { data, setData } = props;
  const onChangeCheckBox = (checked: boolean) => {
    setCheckbox(!checkbox);
  };
  return (
    <>
      <div className="input-chekcbox">
        <Switch defaultChecked onChange={onChangeCheckBox} />
        <label> Указать адрес</label>
      </div>
      <div>
        {checkbox ? (
          <div>
            {address
              ? address.map((e, i) => (
                  <div
                    style={{
                      margin: "5px",
                      borderBottom: "gray 1px solid",
                    }}
                  >
                    <label>Город: </label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        address[i].city = e.target.value;
                        console.log(address);

                        setData({ ...data, address: address });
                      }}
                      className="input-c"
                    ></Input>
                    <label>Адрес: </label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        address[i].address = e.target.value;
                        console.log(address);
                        setData({ ...data, address: address });
                      }}
                      className="input-c"
                    ></Input>
                  </div>
                ))
              : null}

            <Button
              className="btn"
              onClick={() => {
                address.length < 3
                  ? setAddress([...address, miniFormData])
                  : null;
              }}
            >
              Добавить адрес
            </Button>
            <Button
              className="btn"
              onClick={() => {
                address.length > 1
                  ? setAddress([...address.slice(0, -1)])
                  : null;
              }}
              danger
            >
              Убрать адрес
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
};

import React, { useEffect, useState } from "react";
import image1 from "../../mushromPictures/shape-regular.jpeg";
import image2 from "../../mushromPictures/shape-irregular.jpg";
// import mushroomsData from "../database/Data"
import { Select } from "./Elements";
import "./test.css";
import axiosWithAuth from "../../helpers/axiosWithAuth";

const Mushroom = () => {
  const [selected, setSelected] = useState({});
  const [mushroomsData, setMushroomsData] = useState([]);
  const [mushrooms, setMushrooms] = useState([]); // Your mushroom data here

  useEffect(() => {
    axiosWithAuth()
      .get("/mushrooms")
      .then((response) => {
        setMushroomsData(response.data);
      });
  }, []);

  useEffect(() => {
    const newSetMushroom = mushroomsData.filter((mushroom) => {
      let matchesAllCriteria = true;
      for (let key in selected) {
        if (selected[key] !== null) {
          if (
            key === "capColor" ||
            key === "capCondition" ||
            key === "viscos"
          ) {
            if (!mushroom["pileus"].includes(selected[key])) {
              matchesAllCriteria = false; // If color, condition, or viscos is missing, exclude mushroom
              break;
            }
          } else if (
            key === "undersideColor" ||
            key === "undersideCondition" ||
            key === "gillType"
          ) {
            if (!mushroom["lamellae"].includes(selected[key])) {
              matchesAllCriteria = false; // If color, condition, or viscos is missing, exclude mushroom
              break;
            }
          } else if (
            key === "stemGirth" ||
            key === "stemShape" ||
            key === "veilType"
          ) {
            if (key === "veilType" && selected[key] === "none") {
              if (
                mushroom["stipe"].includes("partial") &&
                mushroom["stipe"].includes("universal")
              ) {
                matchesAllCriteria = false; // If color, condition, or viscos is missing, exclude mushroom
                break;
              }
            }
            if (!mushroom["stipe"].includes(selected[key])) {
              matchesAllCriteria = false; // If color, condition, or viscos is missing, exclude mushroom
              break;
            }
          } else if (mushroom[key] !== selected[key]) {
            matchesAllCriteria = false; // If any other key does not match, exclude mushroom
            break;
          }
        }
      }
      return matchesAllCriteria; // Include mushroom if it matches all criteria
    });

    setMushrooms(newSetMushroom);
  }, [selected]);

  const handleRadioChange = (event) => {
    const value = event.target.value;
    if (value === "regular") {
      setSelected({ regular: true });
    } else {
      setSelected({ regular: false });
    }
  };

  const handleColorChange = (event) => {
    setSelected({ ...selected, color: event.target.value });
  };
  // const filterAccordingly = () => {
  //   const newSetMushroom = mushroomsData.filter((mushroom) => {
  //     let matchesAllCriteria = true;
  //     for (let key in selected) {
  //       if (selected[key] !== null) {
  //         if (
  //           key === "capColor" ||
  //           key === "capCondition" ||
  //           key === "viscos"
  //         ) {
  //           if (!mushroom["pileus"].includes(selected[key])) {
  //             matchesAllCriteria = false; // If color, condition, or viscos is missing, exclude mushroom
  //             break;
  //           }
  //         } else if (
  //           key === "undersideColor" ||
  //           key === "undersideCondition" ||
  //           key === "gillType"
  //         ) {
  //           if (!mushroom["lamellae"].includes(selected[key])) {
  //             matchesAllCriteria = false; // If color, condition, or viscos is missing, exclude mushroom
  //             break;
  //           }
  //         } else if (
  //           key === "stemGirth" ||
  //           key === "stemShape" ||
  //           key === "veilType"
  //         ) {
  //           if (key === "veilType" && selected[key] === "none") {
  //             if (
  //               mushroom["stipe"].includes("partial") &&
  //               mushroom["stipe"].includes("universal")
  //             ) {
  //               matchesAllCriteria = false; // If color, condition, or viscos is missing, exclude mushroom
  //               break;
  //             }
  //           }
  //           if (!mushroom["stipe"].includes(selected[key])) {
  //             matchesAllCriteria = false; // If color, condition, or viscos is missing, exclude mushroom
  //             break;
  //           }
  //         } else if (mushroom[key] !== selected[key]) {
  //           matchesAllCriteria = false; // If any other key does not match, exclude mushroom
  //           break;
  //         }
  //       }
  //     }
  //     return matchesAllCriteria; // Include mushroom if it matches all criteria
  //   });

  //   setMushrooms(newSetMushroom);
  // };

  const handleCapConditionChange = (event) => {
    const value = event.target.value;
    let next = { ...selected };
    if (value === "") {
      delete next["capCondition"];
    } else {
      next = { ...next, capCondition: value };
    }
    setSelected(next);
  };

  const handleCapColorChange = (event) => {
    const value = event.target.value;
    let next = { ...selected };
    if (value === "") {
      delete next["capColor"];
    } else {
      next = { ...next, capColor: value };
    }
    setSelected(next);
  };

  const handleViscosChange = (event) => {
    const checked = event.target.checked;
    let next = { ...selected };
    if (!checked) {
      delete next["viscos"];
    } else {
      next = { ...next, viscos: "wet" };
    }
    setSelected(next);
  };

  const handleUndersideConditionChange = (event) => {
    const value = event.target.value;
    let next = { ...selected };
    if (value === "") {
      delete next["undersideCondition"];
    } else {
      next = { ...next, undersideCondition: value };
    }
    setSelected(next);

    // setUndersideType(event.target.value);
    // if (event.target.value !== 'gills') {
    //   setGillsType('');
    // }
  };

  const handleGillsTypeChange = (event) => {
    const value = event.target.value;
    let next = { ...selected };
    if (value === "") {
      delete next["gillType"];
    } else {
      next = { ...next, gillType: value };
    }
    setSelected(next);
  };

  const handleColorSelectorChange = (event) => {
    const value = event.target.value;
    let next = { ...selected };
    if (value === "") {
      delete next["undersideColor"];
    } else {
      next = { ...next, undersideColor: value };
    }
    setSelected(next);
  };

  const handleStemGirthChange = (event) => {
    const value = event.target.value;
    let next = { ...selected };
    if (value === "") {
      delete next["stemGirth"];
    } else {
      next = { ...next, stemGirth: value };
    }
    setSelected(next);
  };

  const handleStemShapeChange = (event) => {
    const value = event.target.value;
    let next = { ...selected };
    if (value === "") {
      delete next["stemShape"];
    } else {
      next = { ...next, stemShape: value };
    }
    setSelected(next);
  };

  const handleVeilChange = (event) => {
    const value = event.target.value;
    let next = { ...selected };
    if (value === "") {
      delete next["veilType"];
    } else {
      next = { ...next, veilType: value };
    }
    setSelected(next);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        // backgroundColor: "#010101",
      }}
    >
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <RadioButton
            value="regular"
            image={image1}
            selected={selected["regular"] === true}
            onClick={handleRadioChange}
          />
          <RadioButton
            value="irregular"
            image={image2}
            selected={selected["regular"] === false}
            onClick={handleRadioChange}
          />
        </div>
        <div>
          <Select
            value={selected["color"]}
            onChange={handleColorChange}
            disabled={selected["regular"]}
          >
            <option value="">Select a color</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
            <option value="cream">Cream</option>
            <option value="black">black</option>
            <option value="brownpurple">Brown-purple</option>
          </Select>
          <p>You selected: {selected["color"]}</p>
        </div>
      </div>

      {selected["regular"] === false ? null : (
        <>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Select
              value={selected["capCondition"]}
              onChange={handleCapConditionChange}
              style={{ marginRight: "10px" }}
            >
              <option value="">Select cap condition</option>
              <option value="scales">Scales</option>
              <option value="cracked">Cracked</option>
              <option value="smooth">Smooth</option>
              <option value="warts">Warts</option>
              <option value="striations">Striations</option>
              <option value="zoning">Zoning</option>
            </Select>
            <Select
              value={selected["capColor"]}
              onChange={handleCapColorChange}
              style={{ marginRight: "10px" }}
            >
              <option value="">Select cap color</option>
              <option value="white">White</option>
              <option value="brown">Brown</option>
              <option value="black">Black</option>
              <option value="purple">Purple</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="orange">Orange</option>
              <option value="red">Red</option>
              <option value="cream">Cream</option>
              <option value="brownhazel">Brown-hazel</option>
              <option value="darkbrown">Dark-brown</option>
              <option value="lightbrown">Light-brown</option>
              <option value="grey">Grey</option>
              <option value="brownyellow">Brown-yellow</option>
              <option value="pink">Pink</option>
              <option value="brownblack">Brown-black</option>
              <option value="yellowgreen">Yellow-green</option>
              <option value="yellowred">Yellow-red</option>
            </Select>
            <label style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={selected["viscos"] ? true : false}
                onChange={handleViscosChange}
              />
              Viscos
            </label>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Select
              value={selected["undersideCondition"]}
              onChange={handleUndersideConditionChange}
            >
              <option value="">Select underside type</option>
              <option value="gills">Gills</option>
              <option value="pores">Pores</option>
              <option value="teeth">Teeth</option>
            </Select>
            <Select
              value={selected["gillsType"]}
              onChange={handleGillsTypeChange}
              disabled={selected["undersideCondition"] !== "gills"}
            >
              <option value="">Select gills type</option>
              <option value="free">Free</option>
              <option value="notched">Notched</option>
              <option value="decurrent">Decurrent</option>
              <option value="adnate">Adnate</option>
              <option value="adnexed">Adnexed</option>
            </Select>
            <Select
              value={selected["undersideColor"]}
              onChange={handleColorSelectorChange}
              disabled={selected === "irregular"}
            >
              <option value="">Select color</option>
              <option value="white">White</option>
              <option value="cream">Cream</option>
              <option value="yellow">Yellow</option>
              <option value="pink">Pink</option>
              <option value="purple">Purple</option>
              <option value="yellowgreen">Yellow-green</option>
              <option value="brownpink">Brown-pink</option>
              <option value="lightpink">Light-pink</option>
              <option value="grey">Grey</option>
            </Select>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Select
              value={selected[`stemGirth`]}
              onChange={handleStemGirthChange}
              disabled={selected === "irregular"}
            >
              <option value="">Select stem girth</option>
              <option value="thick">Thick</option>
              <option value="thin">Thin</option>
            </Select>
            <Select
              value={selected[`stemShape`]}
              onChange={handleStemShapeChange}
              disabled={selected === "irregular"}
            >
              <option value="">Select stem shape</option>
              <option value="largertop">Larger top</option>
              <option value="largerbottom">Larger bottom</option>
              <option value="ventricose">Ventricose</option>
            </Select>
            <Select
              value={selected[`veil`]}
              onChange={handleVeilChange}
              disabled={selected === "irregular"}
            >
              <option value="">Select veil</option>
              <option value="partial">Partial</option>
              <option value="universal">Universal</option>
            </Select>
          </div>
        </>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {mushrooms.map((mushroom) => (
          <figure key={mushroom.name} className="snip1206">
            <img src={mushroom.img} alt="sample74" />
            <figcaption>
              <h2>{mushroom.name}</h2>
              <p>{mushroom.edibility}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

const RadioButton = ({ image, selected, onClick, value }) => (
  <label style={{ marginRight: "10px" }}>
    <input
      type="radio"
      value={value}
      checked={selected}
      onChange={onClick}
      style={{ marginRight: "5px" }}
    />
    <img
      className="radioImage"
      src={image}
      alt="mushroom"
      style={{ width: "100px", height: "100px" }}
    />
  </label>
);

export default Mushroom;

import React, { useState, useEffect } from "react";
import "./index.css";
import {
  Table,
  Spin,
  Input,
  Select,
  Button,
  message,
  Form,
  Modal,
  DatePicker,
  Radio,
} from "antd";
import moment from "moment";
import Chart from 'chart.js/auto';

const { Search } = Input;
const { Option } = Select;
/**
 * @description Component for user management tab
 *
 * @component
 */
const dummyData = [{
  id: 1,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 2,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 3,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 4,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 5,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 6,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 7,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 8,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 9,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 10,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 11,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 12,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 13,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 14,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
},
{
  id: 15,
  full_name: "Akhil Raj",
  job_title: "UI Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,00,000"
}]

const departmentList = [{
  value: "Backend Developer",
  key: "backend developer"
}, {
  value: "Designer",
  key: "designer"
}, {
  value: "Developer",
  key: "developer"
}, {
  value: "Tester",
  key: "tester"
}, {
  value: "UI Developer",
  key: "ui developer"
},]

const locationList = [{
  value: "Hyderabad",
  key: "hyderabad"
}, {
  value: "Nizamabad",
  key: "nizamabad"
}, {
  value: "Bangalore",
  key: "bangalore"
}, {
  value: "Pune",
  key: "pune"
}, {
  value: "Delhi",
  key: "delhi"
},]

const ageList = [{
  value: "22",
  key: 22
}, {
  value: "24",
  key: 24
}, {
  value: "26",
  key: 26
}, {
  value: "30",
  key: 30
}, {
  value: "35",
  key: 35
},]

const EmployeesTable = (props) => {
  const { } = props;
  const [mandiTableData, setMandiTableData] = useState(dummyData);
  const [searchText, setSearchText] = useState(null);
  const [isSpinnerOnLoad, setIsSpinnerOnLoad] = useState(false);
  const [departmentSelected, setDepartmentSelected] = useState();
  const [locationSelected, setLocationSelected] = useState();
  const [ageSelected, setAgeSelected] = useState();

  // state = {
  //   isModalVisible: false,
  //   isAdd: false,
  //   currentRecord: null,
  //   userBranches: null,
  //   searchText: null,
  //   searchUserType: 0,
  //   mandiTableData: [],
  //   primaryHubList: [],
  //   hubRegionList: [],
  //   mandiRegionList: [],
  //   mandiBranchList: [],
  //   isSpinnerOnLoad: false,
  //   isSubmitted: false,
  //   newData: {
  //     End_Effective_Date: null,
  //     Mandi_Min_Buying_MT: null,
  //     Start_Effective_Date: null,
  //     Surplus_Factor: null,
  //     branch_id: null,
  //     branch_name: "",
  //     branch_sap_code: "",
  //     hub_id: null,
  //     hub_latitude: null,
  //     hub_longitude: null,
  //     hub_name: "",
  //     hub_region_id: null,
  //     hub_sap_code: "",
  //     is_active: true,
  //     is_main_mandi: true,
  //     is_priority_mandi: true,
  //     mandi_latitude: null,
  //     mandi_longitude: null,
  //     mandi_name: "",
  //     mandi_sap_code: "",
  //     region_id: null,
  //     region_name: "",
  //     state_name: "",
  //   },
  //   rowData: undefined,
  //   selectedRegionValue: undefined,
  //   selectedRegionName: "",
  //   selectedBranchValue: undefined,
  //   selectedBranchname: "",
  //   selectedBranchList: [],
  //   selectedRegionList: [],
  //   recordCount: 0,
  // };
  const employeeDetails = [{
    department: "Backend Developer",
    value: 25
  }, {
    department: "Designer",
    value: 20
  }, {
    department: "Developer",
    value: 35
  }, {
    department: "Tester",
    value: 20
  }, {
    department: "UI Developer",
    value: 20
  }]
  const setTableData = () => {
    // console.log("mandi table data ", mandiTableData);
    if (
      mandiTableData !== undefined ||
      mandiTableData.length >= 0
    ) {
      // setIsSpinnerOnLoad(true);
      let employeeTableData = mandiTableData.map((employee, index) => {
        return {
          key: employee.id,
          full_name: employee.full_name,
          job_title: employee.job_title,
          department: employee.department,
          location: employee.location,
          age: employee.age,
          salary: employee.salary
        };
      });

      let dataAfterSearch = employeeTableData;

      if (searchText) {
        dataAfterSearch = dataAfterSearch.filter(
          (item) =>
            (item.full_name !== null &&
              item.full_name
                .toLowerCase()
                .includes(searchText.toLowerCase())) ||
            (item.job_title !== null &&
              item.job_title
                .toLowerCase()
                .includes(searchText.toLowerCase())) ||
            (item.department !== null &&
              item.department
                .toLowerCase()
                .includes(searchText.toLowerCase())) ||
            (item.location !== null &&
              item.location
                .toLowerCase()
                .includes(searchText.toLowerCase())) ||
            (item.salary !== null &&
              item.salary
                .toLowerCase()
                .includes(searchText.toLowerCase()))
        );
      }

      // setIsSpinnerOnLoad(false);
      return dataAfterSearch;
    } else {
      return mandiTableData;
    }
  };

  const TableColumnHeader = (props) => {
    const { title, subtitle } = props;
    return (
      <div className="column-header-container">
        <div
          style={{
            color: "white",
            fontSize: "12px",
            whiteSpace: "nowrap",
            fontWeight: "normal",
            textAlign: "left",
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#cbdfff",
            fontSize: "11px",
            fontWeight: "normal",
            textAlign: "left",
            // subtitle && title.length < subtitle.length ? "left" : "center"
          }}
        >
          {subtitle}
        </div>
      </div>
    );
  };

  const createFilters = (label) => {
    let filterData = mandiTableData;
    //#region remove duplicate objects
    let uniqueFilterData = [];

    filterData.map((mainItem) =>
      uniqueFilterData.filter((item) => item[label] === mainItem[label])
        .length > 0
        ? null
        : uniqueFilterData.push(mainItem)
    );

    uniqueFilterData = uniqueFilterData.map((item) => {
      return {
        text: item[label],
        value: item[label],
      };
    });

    //#endregion

    return uniqueFilterData;
  };

  const submitTableRowData = (row) => {
    if (this.validate(row)) {
      this.setState({ isSubmitted: true });

      this.setState({ isSpinnerOnLoad: true });
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      };
      let params = {
        mandi_id: row.mandi_id,
        mandi_name: row.mandi_name,
        mandi_latitude:
          row.mandi_latitude === "" || row.mandi_latitude === undefined
            ? null
            : row.mandi_latitude,
        mandi_longitude:
          row.mandi_longitude === "" || row.mandi_longitude === undefined
            ? null
            : row.mandi_longitude,
        is_main_mandi: row.is_main_mandi,
        is_priority_mandi: row.is_priority_mandi,
        is_active: row.is_active,
        mandi_sap_code: row.mandi_sap_code === "" ? null : row.mandi_sap_code,
        region_id: row.region_id,
        branch_id: row.branch_id,
        primary_hub_id: row.hub_id,
        hub_name: row.hub_name,
        main_mandi:
          row.main_mandi !== "" || row.main_mandi !== undefined
            ? row.main_mandi
            : null,
        Mandi_Min_Buying_MT:
          row.Mandi_Min_Buying_MT === "" ||
            row.Mandi_Min_Buying_MT === undefined
            ? null
            : row.Mandi_Min_Buying_MT,
        Surplus_Factor:
          row.Surplus_Factor === "" || row.Surplus_Factor === undefined
            ? null
            : row.Surplus_Factor,
        Start_Effective_Date:
          row.Start_Effective_Date === null ||
            row.Start_Effective_Date === undefined ||
            row.Start_Effective_Date === ""
            ? null
            : moment(row.Start_Effective_Date).format("YYYY-MM-DD"),
        End_Effective_Date:
          row.End_Effective_Date === null ||
            row.End_Effective_Date === undefined ||
            row.End_Effective_Date === ""
            ? null
            : moment(row.End_Effective_Date).format("YYYY-MM-DD"),
      };
      // console.log("row on submit ", params);
      // API.put("/master_mandi", params, {
      //   headers: headers,
      // })
      //   .then((response) => {
      //     console.log("err Msg", response);
      //     if (response.status === 200 && response.data.status) {
      //       message.success(response.data.message, 5);
      //       this.setModalVisibility(false);
      //       this.getMasterMandi();
      //       this.setState({ isSpinnerOnLoad: false, isSubmitted: false });
      //     } else if (!response.data.status) {
      //       this.setState({ isSpinnerOnLoad: false, isSubmitted: false });
      //       message.error(response.data.message, 5);
      //       // this.setModalVisibility(false);
      //     } else {
      //       this.setState({ isSpinnerOnLoad: false, isSubmitted: false });
      //       message.error("Please try again", 5);
      //     }
      //   })
      //   .catch((err) => {
      //     if (err) {
      //       console.log("err Msg 400", err.response);
      //       if (err.response && err.response.status === 400)
      //         message.error("Something went wrong. Please try again later.", 5);
      //       else {
      //         message.error(
      //           "Something went wrong.. Please try again later.",
      //           5
      //         );
      //       }
      //     } else {
      //       message.error("Something went wrong... Please try again later.", 5);
      //     }
      //     this.setState({ isSpinnerOnLoad: false, isSubmitted: false });
      //     // this.setModalVisibility(false);
      //   });
    }
  };
  const validate = (rowData) => {
    // console.log("ITem For VAlidation ----------------------------> ", rowData);

    // if (rowData.Mandi_Min_Buying_MT === null || rowData.Mandi_Min_Buying_MT === undefined || rowData.Mandi_Min_Buying_MT === "") {
    //   message.error(`Please enter the Minimum buying price for ${rowData.mandi_name},${rowData.hub_name}, ${rowData.region_name} and ${rowData.hub_region_name} !`,5);
    //   return false;
    // }
    var alphaNumericRegex = /^[a-zA-Z0-9]*$/;
    var numberRegex = /^[0-9.]+$/;

    // if (!rowData.Mandi_Min_Buying_MT.match(numberRegex)) {
    //   message.error(`Please enter valid Minimum buying price for ${rowData.mandi_name},${rowData.hub_name}, ${rowData.region_name} and ${rowData.hub_region_name} !`, 5);
    //   return false;
    // }

    if (
      rowData.mandi_name === null ||
      rowData.mandi_name === undefined ||
      rowData.mandi_name === ""
    ) {
      message.error(`Please enter Mandi Name !`, 5);
      return false;
    } else if (rowData.Mandi_Min_Buying_MT < 0) {
      message.error(
        `Minimum buying price cannot be less than 0 for ${rowData.mandi_name},${rowData.hub_name}, ${rowData.region_name} and ${rowData.hub_region_name} !`,
        5
      );
      return false;
    } else if (
      rowData.hub_name === null ||
      rowData.hub_name === undefined ||
      rowData.hub_name === ""
    ) {
      message.error(`Please Select Primary Hub !`, 5);
      return false;
    } else if (
      rowData.region_name === null ||
      rowData.region_name === undefined ||
      rowData.region_name === ""
    ) {
      message.error(`Please Select Mandi region !`, 5);
      return false;
    }
    // else if (rowData.mandi_sap_code === null || rowData.mandi_sap_code === undefined || rowData.mandi_sap_code === "") {
    //   message.error(`Please enter the SAP code`, 5);
    //   return false;
    // }
    // else if (rowData.Surplus_Factor === null || rowData.Surplus_Factor === undefined || rowData.Surplus_Factor === "") {
    //   message.error(`Please enter the Surplus Factor for ${rowData.mandi_name},${rowData.hub_name}, ${rowData.region_name} and ${rowData.hub_region_name} !`,5);
    //   return false;
    // }

    // else if (!rowData.Surplus_Factor.match(numberRegex)) {
    //   message.error(`Please enter valid Surplus Factor for ${rowData.mandi_name},${rowData.hub_name}, ${rowData.region_name} and ${rowData.hub_region_name} !`, 5);
    //   return false;
    // }
    else if (rowData.Surplus_Factor < 0) {
      message.error(
        `Surplus Factor cannot be less than 0 for ${rowData.mandi_name},${rowData.hub_name}, ${rowData.region_name} and ${rowData.hub_region_name} !`,
        5
      );
      return false;
    }

    // else if (rowData.mandi_sap_code === null || rowData.mandi_sap_code === undefined || rowData.mandi_sap_code === "") {
    //   message.error(`Please enter the SAP code for ${rowData.mandi_name},${rowData.hub_name}, ${rowData.region_name} and ${rowData.hub_region_name} !`, 5);
    //   return false;
    // }

    // else if (!rowData.mandi_sap_code.match(alphaNumericRegex)) {
    //   message.error(`Please enter Alpha Numeric SAP code for ${rowData.mandi_name},${rowData.hub_name}, ${rowData.region_name} and ${rowData.hub_region_name} !`, 5);
    //   return false;
    // }

    // else if (!rowData.mandi_latitude.match(numberRegex)) {
    //   message.error(`Please enter valid Mandi Latitude for ${rowData.mandi_name},${rowData.hub_name}, ${rowData.region_name} and ${rowData.hub_region_name} !`, 5);
    //   return false;
    // }
    else if (rowData.mandi_latitude < 0) {
      message.error(
        `Mandi Latitude cannot be less than 0 for ${rowData.mandi_name},${rowData.hub_name}, ${rowData.region_name} and ${rowData.hub_region_name} !`,
        5
      );
      return false;
    }

    // else if (!rowData.mandi_longitude.match(numberRegex)) {
    //   message.error(`Please enter valid Mandi Longitude for ${rowData.mandi_name},${rowData.hub_name}, ${rowData.region_name} and ${rowData.hub_region_name} !`, 5);
    //   return false;
    // }
    else if (rowData.mandi_longitude < 0) {
      message.error(
        `Mandi Longitude cannot be less than 0 for ${rowData.mandi_name},${rowData.hub_name}, ${rowData.region_name} and ${rowData.hub_region_name} !`,
        5
      );
      return false;
    }

    // else if (
    //   rowData.revised_min_price >= rowData.revised_max_price
    // ) {
    //   message.error(
    //     `The maximum price must be greater than the minimum price for ${rowData.hub_name}, ${rowData.variety_name}, ${rowData.claim_name} and ${rowData.division_name} !`
    //   ,5);
    //   return false;
    // }
    return true;
  };

  const setModalVisibility = (status) => {
    if (status) {
      const nData = {
        End_Effective_Date: null,
        Mandi_Min_Buying_MT: null,
        Start_Effective_Date: null,
        Surplus_Factor: null,
        branch_id: null,
        branch_name: "",
        branch_sap_code: "",
        hub_id: null,
        hub_latitude: null,
        hub_longitude: null,
        hub_name: "",
        hub_region: "",
        hub_region_id: null,
        hub_sap_code: "",
        is_active: true,
        is_main_mandi: true,
        is_priority_mandi: true,
        mandi_latitude: null,
        mandi_longitude: null,
        mandi_name: "",
        mandi_sap_code: "",
        region_id: null,
        region_name: "",
        state_name: "",
        isEdit: false,
      };

      this.setState({ newData: nData });
    }

    this.setState({ isModalVisible: status });
  };

  const handleDropdownChange = (value, row, target, index, optionlabel, isPopup) => {
    console.log(
      "row on handlechange ",
      row,
      value,
      index,
      target,
      optionlabel,
      isPopup
    );
    // const specificHub = this.state.primaryHubList.filter((item) => {
    //   if (item.territory_id === value) {
    //     return item;
    //   }
    // });
    // // console.log("Specified OBJ", specificHub);
    // let a;

    // if (isPopup === false) {
    //   // console.log("region ame ", value, optionlabel)
    //   a = mandiTableData;

    //   if (target === "is_active") {
    //     a[row.key].is_active = Boolean(value);
    //   } else if (target === "is_priority_mandi") {
    //     a[row.key].is_priority_mandi = Boolean(value);
    //   } else if (target === "is_main_mandi") {
    //     a[row.key].is_main_mandi = Boolean(value);
    //   } else if (target === "hub_name") {
    //     a[row.key].hub_name = specificHub[0].territory_name;
    //     a[row.key].hub_id = specificHub[0].territory_id;
    //     a[row.key].hub_region = specificHub[0].hub_region_name;
    //     a[row.key].hub_region_id = specificHub[0].hub_region_id;
    //     a[row.key].branch_name = specificHub[0].parent_name;
    //     a[row.key].branch_id = specificHub[0].parent_id;
    //   } else if (target === "region_name") {
    //     // console.log("region ame ", value, optionlabel)
    //     a[row.key].region_name = optionlabel;
    //     a[row.key].region_id = value;
    //     row.region_name = optionlabel;
    //     row.region_id = value;
    //   }
    //   // else if (target === "branch_name") {
    //   //   a[row.key].branch_name = optionlabel;
    //   //   a[row.key].branch_id = value;
    //   // }
    //   console.log(" check value of a ", a);
    //   this.setState({ mandiTableData: a });
    // } else {
    //   // console.log("region ame1 ", value, optionlabel)
    //   a = this.state.newData;

    //   if (target === "is_active") {
    //     a.is_active = Boolean(value);
    //   } else if (target === "is_priority_mandi") {
    //     a.is_priority_mandi = Boolean(value);
    //   } else if (target === "is_main_mandi") {
    //     a.is_main_mandi = Boolean(value);
    //   } else if (target === "hub_name") {
    //     a.hub_name = specificHub[0].territory_name;
    //     a.hub_id = specificHub[0].territory_id;
    //     a.hub_region = specificHub[0].hub_region_name;
    //     a.hub_region_id = specificHub[0].hub_region_id;
    //     a.branch_name = specificHub[0].parent_name;
    //     a.branch_id = specificHub[0].parent_id;
    //   } else if (target === "region_name") {
    //     a.region_name = optionlabel;
    //     a.region_id = value;
    //   }
    //   // else if (target === "branch_name") {
    //   //   a.branch_name = optionlabel;
    //   //   a.branch_id = value;
    //   // }
    //   // console.log("a data ---->", a);
    //   this.setState({ newData: a });
    // }
  };

  const handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  const handleChange = (e, row, index, name, isPopup) => {
    console.log("row on handlechange running", e, name, index, row);
    // let name = name;

    // console.log(
    //   "row on handlechange ",
    //   row,
    //   e.target.value,
    //   name,
    //   index
    // );
    let a;
    var alphaNumericRegex = /^[a-zA-Z0-9]*$/;
    var numberRegex = /^[0-9.]+$/;
    if (isPopup === false) {
      // console.log("hub table data");
      a = mandiTableData;

      switch (name) {
        case "mandi_name":
          a[row.key].mandi_name = e.target.value;
          this.setState({ mandiTableData: a });
          return;
        case "Mandi_Min_Buying_MT":
          if (e.target.value === "") {
            a[row.key].Mandi_Min_Buying_MT = "";
          } else if (e.target.value.match(numberRegex)) {
            a[row.key].Mandi_Min_Buying_MT = e.target.value;
          }

          this.setState({ mandiTableData: a });
          return;
        case "Surplus_Factor":
          if (e.target.value === "") {
            a[row.key].Surplus_Factor = "";
          } else if (e.target.value.match(numberRegex)) {
            a[row.key].Surplus_Factor = e.target.value;
          }

          this.setState({ mandiTableData: a });
          return;
        case "mandi_sap_code":
          if (e.target.value === "") {
            a[row.key].mandi_sap_code = "";
          } else if (e.target.value.match(alphaNumericRegex)) {
            a[row.key].mandi_sap_code = e.target.value.toUpperCase();
          }

          this.setState({ mandiTableData: a });
          return;
        case "mandi_latitude":
          if (e.target.value === "") {
            a[row.key].mandi_latitude = "";
          } else if (e.target.value.match(numberRegex)) {
            a[row.key].mandi_latitude = e.target.value;
          }

          this.setState({ mandiTableData: a });
          return;
        case "mandi_longitude":
          if (e.target.value === "") {
            a[row.key].mandi_longitude = "";
          } else if (e.target.value.match(numberRegex)) {
            a[row.key].mandi_longitude = e.target.value;
          }

          this.setState({ mandiTableData: a });
          return;
        case "Start_Effective_Date":
          if (
            !moment(e, "YYYY-MM-DD").isSameOrBefore(
              moment(a[row.key].End_Effective_Date)
            ) &&
            e !== ""
          ) {
            a[row.key].Start_Effective_Date = e;
            a[row.key].End_Effective_Date = e;
          } else {
            a[row.key].Start_Effective_Date = undefined;
          }

          this.setState({ mandiTableData: a });
          return;
        case "End_Effective_Date":
          if (e === "") {
            a[row.key].End_Effective_Date = undefined;
          } else {
            a[row.key].End_Effective_Date = e;
          }

          this.setState({ mandiTableData: a });
          return;
        default:
          return "";
      }

      // if (name === "mandi_name") {
      //   a[row.key].mandi_name = e.target.value;
      // }
      // else if (name === "Mandi_Min_Buying_MT") {
      //   if (e.target.value === "") {
      //     a[row.key].Mandi_Min_Buying_MT = "";
      //   }
      //   else if (e.target.value.match(numberRegex)) {
      //     a[row.key].Mandi_Min_Buying_MT = e.target.value;
      //   }
      // }
      // else if (name === "Surplus_Factor") {
      //   if (e.target.value === "") {
      //     a[row.key].Surplus_Factor = "";
      //   }
      //   else if (e.target.value.match(numberRegex)) {
      //     a[row.key].Surplus_Factor = e.target.value;
      //   }
      // }
      // else if (name === "mandi_sap_code") {
      //   if (e.target.value === "") {
      //     a[row.key].mandi_sap_code = "";
      //   }
      //   else if (e.target.value.match(alphaNumericRegex)) {
      //     a[row.key].mandi_sap_code = e.target.value.toUpperCase();
      //   }
      // }
      // else if (name === "mandi_latitude") {
      //   if (e.target.value === "") {
      //     a[row.key].mandi_latitude = "";
      //   }
      //   else if (e.target.value.match(numberRegex)) {
      //     a[row.key].mandi_latitude = e.target.value;
      //   }
      // }
      // else if (name === "mandi_longitude") {
      //   if (e.target.value === "") {
      //     a[row.key].mandi_longitude = "";
      //   }
      //   else if (e.target.value.match(numberRegex)) {
      //     a[row.key].mandi_longitude = e.target.value;
      //   }
      // }
      // else if (name === "Start_Effective_Date") {
      //   // console.log("moment(e, YYYY-MM-DD).isSameOrBefore(moment(a[row.key].End_Effective_Date))", moment(e, "YYYY-MM-DD").isSameOrBefore(moment(a[row.key].End_Effective_Date)), "NOT ", !moment(e, "YYYY-MM-DD").isSameOrBefore(moment(a[row.key].End_Effective_Date)));
      //   if (!moment(e, "YYYY-MM-DD").isSameOrBefore(moment(a[row.key].End_Effective_Date)) && e !== "") {
      //     a[row.key].Start_Effective_Date = e;
      //     a[row.key].End_Effective_Date = e;
      //   }
      //   else {
      //     a[row.key].Start_Effective_Date = undefined;
      //   }
      // }
      // else if (name === "End_Effective_Date") {
      //   if (e === "") {
      //     a[row.key].End_Effective_Date = undefined;
      //   }
      //   else {
      //     a[row.key].End_Effective_Date = e;
      //   }
      // }
      // console.log("Data modified", a, a[row.key].Start_Effective_Date, a[row.key].End_Effective_Date);
      // this.setState({ mandiTableData: a });
    } else {
      // console.log("new data ");
      a = this.state.newData;

      // if (name === "mandi_name") {
      //   a.mandi_name = e.target.value;
      // }
      // else if (name === "Mandi_Min_Buying_MT") {
      //   if (e.target.value === "") {
      //     a.Mandi_Min_Buying_MT = "";
      //   }
      //   else if (e.target.value.match(numberRegex)) {
      //     a.Mandi_Min_Buying_MT = e.target.value;
      //   }
      // }
      // else if (name === "Surplus_Factor") {
      //   if (e.target.value === "") {
      //     a.Surplus_Factor = "";
      //   }
      //   else if (e.target.value.match(numberRegex)) {
      //     a.Surplus_Factor = e.target.value;
      //   }
      // }
      // else if (name === "mandi_sap_code") {
      //   if (e.target.value === "") {
      //     a.mandi_sap_code = "";
      //   }
      //   else if (e.target.value.match(alphaNumericRegex)) {
      //     a.mandi_sap_code = e.target.value;
      //   }
      // }
      // else if (name === "mandi_latitude") {
      //   if (e.target.value === "") {
      //     a.mandi_latitude = "";
      //   }
      //   else if (e.target.value.match(numberRegex)) {
      //     a.mandi_latitude = e.target.value;
      //   }
      // }
      // else if (name === "mandi_longitude") {
      //   if (e.target.value === "") {
      //     a.mandi_longitude = "";
      //   }
      //   else if (e.target.value.match(numberRegex)) {
      //     a.mandi_longitude = e.target.value;
      //   }
      // }
      // else if (name === "Start_Effective_Date") {
      //   console.log("moment(e, YYYY-MM-DD).isSameOrBefore(moment(a.End_Effective_Date))", moment(e, "YYYY-MM-DD").isSameOrBefore(moment(a.End_Effective_Date)));
      //   if (!moment(e, "YYYY-MM-DD").isSameOrBefore(moment(a.End_Effective_Date))) {
      //     a.Start_Effective_Date = e;
      //     a.End_Effective_Date = e;
      //   }
      //   else {
      //     a.Start_Effective_Date = e;
      //   }
      // }
      // else if (name === "End_Effective_Date") {
      //   // if (e.target.value === "") {
      //   //   a.mandi_longitude = "";
      //   // }
      //   // else if (e.target.value.match(numberRegex)) {
      //   a.End_Effective_Date = e;
      //   // }
      // }

      switch (name) {
        case "mandi_name":
          a.mandi_name = e.target.value;
          this.setState({ newData: a });
          return;
        case "Mandi_Min_Buying_MT":
          if (e.target.value === "") {
            a.Mandi_Min_Buying_MT = "";
          } else if (e.target.value.match(numberRegex)) {
            a.Mandi_Min_Buying_MT = e.target.value;
          }

          this.setState({ newData: a });
          return;
        case "Surplus_Factor":
          if (e.target.value === "") {
            a.Surplus_Factor = "";
          } else if (e.target.value.match(numberRegex)) {
            a.Surplus_Factor = e.target.value;
          }

          this.setState({ newData: a });
          return;
        case "mandi_sap_code":
          if (e.target.value === "") {
            a.mandi_sap_code = "";
          } else if (e.target.value.match(alphaNumericRegex)) {
            a.mandi_sap_code = e.target.value.toUpperCase();
          }

          this.setState({ newData: a });
          return;
        case "mandi_latitude":
          if (e.target.value === "") {
            a.mandi_latitude = "";
          } else if (e.target.value.match(numberRegex)) {
            a.mandi_latitude = e.target.value;
          }

          this.setState({ newData: a });
          return;
        case "mandi_longitude":
          if (e.target.value === "") {
            a.mandi_longitude = "";
          } else if (e.target.value.match(numberRegex)) {
            a.mandi_longitude = e.target.value;
          }

          this.setState({ newData: a });
          return;
        case "Start_Effective_Date":
          if (
            !moment(e, "YYYY-MM-DD").isSameOrBefore(
              moment(a[row.key].End_Effective_Date)
            ) &&
            e !== ""
          ) {
            a.Start_Effective_Date = e;
            a.End_Effective_Date = e;
          } else {
            a.Start_Effective_Date = undefined;
          }

          this.setState({ newData: a });
          return;
        case "End_Effective_Date":
          if (e === "") {
            a.End_Effective_Date = undefined;
          } else {
            a.End_Effective_Date = e;
          }

          this.setState({ newData: a });
          return;
        default:
          return "";
      }
      // this.setState({ newData: a });
    }
  };

  const disabledDate = (current, rowData, text) => {
    // Can not select days before today and today
    // return current && current > moment().endOf("day");
    console.log("Current", current, rowData, text);
    // if (text !== "new")
    return (
      current && current > moment(rowData.Start_Effective_Date, "YYYY-MM-DD")
    );
    // else
    //   return current && current > newData.Start_Effective_Date;
  };

  const handleEditClick = (rowData, index) => {
    // console.log("RowData", rowData, index);

    // let temp = mandiTableData;

    // temp[rowData.key].isEdit = true;

    let tempData = mandiTableData.map((item) => {
      if (item.mandi_id === rowData.mandi_id) {
        return {
          ...item,
          isEdit: true
        }
      } else {
        return {
          ...item,
          isEdit: false
        };
      }
    })
    // console.log("Temp DAta", tempData);
    this.setState({ mandiTableData: tempData });
    // this.setState({ mandiTableData: temp });
    this.setState({ rowData: rowData });
  };

  const handleCancelClick = (rowData, index) => {
    let tempData = mandiTableData.map((item) => {
      if (item.mandi_id === rowData.mandi_id) {
        return this.state.rowData;
      } else {
        return item;
      }
    });
    this.setState({ mandiTableData: tempData });
  };

  const handleDepartmentSelect = (value, props) => {
    console.log("handle branch ", value, props, props.key);
    // this.setState(
    //   { selectedBranchName: props.key, selectedBranchValue: value },
    //   () => this.getMasterMandi()
    // );
  };

  const handleLocationSelect = (value, props) => {
    console.log("handle Region ", value, props, props.key);
    // this.setState(
    //   { selectedRegionName: props.key, selectedRegionValue: value },
    //   () => this.getMasterMandi()
    // );
  };

  const handleAgeSelect = (value, props) => {
    console.log("handle Region ", value, props, props.key);
    // this.setState(
    //   { selectedRegionName: props.key, selectedRegionValue: value },
    //   () => this.getMasterMandi()
    // );
  };

  const userTableProps = {
    pagination: true,
    size: "default",
    bordered: true,
    scroll: { x: 200, y: window.innerHeight - 450 },
  };

  useEffect(() => {
    buildChart();
  }, [])

  /**
   * @function
   * @description Function to create a chart.
   * @memberof CombinedChart
   */
  const buildChart = () => {
    let myChartPie;
    console.log("Cahrt ID", myChartPie, typeof myChartPie);
    if (typeof myChartPie !== "undefined" && typeof myChartPie !== undefined) console.log("Cahrt ID", myChartPie, typeof myChartPie);
    // else myChartPie.destroy();

    let ctx = document.getElementById('myChartPie').getContext("2d");
    myChartPie = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: employeeDetails && employeeDetails.length && employeeDetails.map(item => item.department),
        datasets: [{
          // label: 'My First Dataset',
          data: employeeDetails && employeeDetails.length && employeeDetails.map(item => item.value),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255,140,0)',
            'rgb(124,252,0)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            // text: 'Chart.js Doughnut Chart'
          }
        }
      }
    });

  };

  return (
    <div
      className="employee-table"
      style={{ height: window.innerHeight - 85, marginTop: "0px" }}
    >
      <div className="info-container">
        <div className="piechart-info">
          <div className="title">Departments</div>
          <div className="details">
            <canvas id="myChartPie" width="320" height="320"></canvas>
          </div>
        </div>
        <div className="department-info">
          <div className="title">Employees</div>
          <div className="details">
            {employeeDetails && employeeDetails.length && employeeDetails.map(item => {
              return <div className="info-wrapper">
                <div className="employees-number">{item.value}</div>
                <div className="employees-department">{item.department}</div>
              </div>
            })}
          </div>
        </div>
      </div>
      <div className="top-container">
        <div className="hub-region-filter">
          <span
            style={{
              fontSize: "18px",
              marginTop: "-10px",
              fontWeight: "600",
            }}
          >
            List of Employees&nbsp;
            </span>{" "}
          <Select
            // disabled={!this.state.isAdd}
            showSearch
            optionFilterProp="children"
            className={"select-master-region"}
            mode="single"
            placeholder="Department"
            value={departmentSelected}
            onChange={(value, props) => handleDepartmentSelect(value, props)}
          >
            {departmentList !== null &&
              departmentList.length &&
              departmentList.map((item, idx) => (
                <Option value={item.value} key={item.key}>
                  {item.value}
                </Option>
              ))}
          </Select>
          <Select
            // disabled={!this.state.isAdd}
            showSearch
            optionFilterProp="children"
            className={"select-master-region"}
            mode="single"
            placeholder="Location"
            value={locationSelected}
            onChange={(value, props) => handleLocationSelect(value, props)}
          >
            {locationList !== null &&
              locationList.length &&
              locationList.map((item, idx) => (
                <Option value={item.value} key={item.key}>
                  {item.value}
                </Option>
              ))}
          </Select>
          <Select
            // disabled={!this.state.isAdd}
            showSearch
            optionFilterProp="children"
            className={"select-master-region"}
            mode="single"
            placeholder="Age"
            value={ageSelected}
            onChange={(value, props) => handleAgeSelect(value, props)}
          >
            {ageList !== null &&
              ageList.length &&
              ageList.map((item, idx) => (
                <Option value={item.value} key={item.key}>
                  {item.value}
                </Option>
              ))}
          </Select>

        </div>

        <div
          style={{
            width: "30%",
            display: "inline-flex",
            // flexDirection: "row-reverse",
            // placeItems: "flex-end",
            // marginRight: "25px",
            // marginBottom: "10px",
          }}
        >
          <Search
            // disabled={!this.state.isAdd}
            placeholder="Search"
            allowClear
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: "45%", borderRadius: 10 }}
          />
          <Button
            className="add-master-button"
            style={{
              height: "32px",
              width: "70px",
              backgroundColor: "#0b133d",
              borderRadius: 10,
              color: "white",
              marginLeft: 5
            }}
            // disabled={!this.state.isAdd}
            onClick={() => this.setModalVisibility(true)}
          >
            &#10010; Add
            </Button>
        </div>
      </div>

      <Spin
        spinning={isSpinnerOnLoad}
        size={"large"}
        tip="Loading..."
        style={{ alignSelf: "center", zIndex: 9999, marginTop: "20px" }}
      >
        <> {/* <Modal
          className="add-master-modal"
          title={"Add Mandi"}
          footer={false}
          // style={{
          //   textAlign: "center",
          //   height: "400px",
          // }}
          // visible={true}
          visible={this.state.isModalVisible}
          destroyOnClose={true}
          onCancel={this.handleCancel}
        >
          <div className="master-form-container">
            <Form
              layout="horizontal"
              //   onValuesChange={onFormLayoutChange}
              size={"small"}
            // onSubmit={submitTableRowData(this.state.newData)}
            >
              <div>
                <div
                  className="checkbox-group1"
                  style={{
                    display: "inline-block",
                    width: "30%",
                    marginRight: 7,
                  }}
                >
                  <Form.Item label="Mandi Name">
                    <Input
                      style={{ marginRight: "2px" }}
                      maxLength={100}
                      required
                      value={this.state.newData.mandi_name}
                      name="mandi_name"
                      onChange={(e) =>
                        this.handleChange(
                          e,
                          this.state.newData,
                          -0,
                          "mandi_name",
                          true
                        )
                      }
                    />
                  </Form.Item>
                </div>

                <div
                  className="form-top-container"
                  style={{
                    display: "inline-block",
                    width: "33%",
                    marginRight: 7,
                  }}
                >
                  <Form.Item label="Select Primary Hub">
                    <Select
                      // className="remarks-select"
                      showSearch
                      optionFilterProp="children"
                      name="hub_name"
                      required
                      value={this.state.newData.hub_name}
                      onSelect={(value, option) =>
                        this.handleDropdownChange(
                          value,
                          this.state.newData,
                          "hub_name",
                          -0,
                          option.props.children,
                          true
                        )
                      }
                    >
                      {this.state.primaryHubList &&
                        this.state.primaryHubList.length &&
                        this.state.primaryHubList.map((hubItem, idx) => (
                          <Option
                            key={hubItem.territory_id}
                            value={hubItem.territory_id}
                          >
                            {hubItem.territory_name}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                </div>
                <div
                  className="checkbox-group1"
                  style={{ display: "inline-block", width: "33%" }}
                >
                  <Form.Item label="Select Mandi Region">
                    <Select
                      // className="remarks-select"
                      showSearch
                      optionFilterProp="children"
                      name="region_name"
                      required
                      value={this.state.newData.region_name}
                      onSelect={(value, option) =>
                        this.handleDropdownChange(
                          value,
                          this.state.newData,
                          "region_name",
                          -0,
                          option.props.children,
                          true
                        )
                      }
                    >
                      {this.state.mandiRegionList &&
                        this.state.mandiRegionList.length &&
                        this.state.mandiRegionList.map(
                          (mandiRegionItem, idx) => (
                            <Option
                              key={mandiRegionItem.region_id}
                              value={mandiRegionItem.region_id}
                            >
                              {mandiRegionItem.region_name}
                            </Option>
                          )
                        )}
                    </Select>
                  </Form.Item>
                </div>
              </div>
              {this.state.newData.hub_region !== "" &&
                this.state.newData.branch_name !== "" ? (
                  <div>
                    <div
                      className="left"
                      style={{
                        display: "inline-block",
                        marginRight: 10,
                        width: "45%",
                      }}
                    >
                      <span style={{ color: "black" }}>Hub Region:</span>{" "}
                      <b>{this.state.newData.hub_region}</b>
                    </div>
                    <div
                      className="right"
                      style={{ display: "inline-block", width: "45%" }}
                    >
                      <span style={{ color: "black" }}>Hub Branch:</span>{" "}
                      <b>{this.state.newData.branch_name}</b>
                    </div>
                  </div>
                ) : null}
              <hr />
              <div>
                <div
                  className="checkbox-group1"
                  style={{
                    display: "inline-block",
                    width: "30%",
                    marginRight: 10,
                  }}
                >
                  <Form.Item label="Minimum Buying (MT)">
                    <Input
                      style={{ marginRight: "2px" }}
                      maxLength={100}
                      value={this.state.newData.Mandi_Min_Buying_MT}
                      name="Mandi_Min_Buying_MT"
                      onChange={(e) =>
                        this.handleChange(
                          e,
                          this.state.newData,
                          -0,
                          "Mandi_Min_Buying_MT"
                        )
                      }
                    />
                  </Form.Item>
                </div>

                <div
                  className="checkbox-group1"
                  style={{
                    display: "inline-block",
                    width: "30%",
                    marginRight: 10,
                  }}
                >
                  <Form.Item label="Surplus Factor">
                    <Input
                      style={{ marginRight: "2px" }}
                      maxLength={100}
                      value={this.state.newData.Surplus_Factor}
                      name="Surplus_Factor"
                      onChange={(e) =>
                        this.handleChange(
                          e,
                          this.state.newData,
                          -0,
                          "Surplus_Factor",
                          true
                        )
                      }
                    />
                  </Form.Item>
                </div>

                <div
                  className="checkbox-group1"
                  style={{ display: "inline-block", width: "30%" }}
                >
                  <Form.Item label="SAP Code">
                    <Input
                      style={{ marginRight: "2px" }}
                      maxLength={100}
                      value={this.state.newData.mandi_sap_code}
                      name="mandi_sap_code"
                      onChange={(e) =>
                        this.handleChange(
                          e,
                          this.state.newData,
                          -0,
                          "mandi_sap_code",
                          true
                        )
                      }
                    />
                  </Form.Item>
                </div>
              </div>
              <div>
                <div
                  className="checkbox-group1"
                  style={{ display: "inline-block", marginRight: 40 }}
                >
                  <Form.Item
                    label="Mandi Latitude"
                    style={{ display: "inline-block", marginRight: 10 }}
                  >
                    <Input
                      style={{ marginRight: "2px" }}
                      maxLength={100}
                      value={this.state.newData.mandi_latitude}
                      name="mandi_latitude"
                      onChange={(e) =>
                        this.handleChange(
                          e,
                          this.state.newData,
                          -0,
                          "mandi_latitude",
                          true
                        )
                      }
                    />
                  </Form.Item>
                </div>

                <div
                  className="checkbox-group1"
                  style={{ display: "inline-block" }}
                >
                  <Form.Item
                    label="Mandi Longitude"
                    style={{ display: "inline-block" }}
                  >
                    <Input
                      style={{ marginRight: "2px" }}
                      maxLength={100}
                      value={this.state.newData.mandi_longitude}
                      name="mandi_longitude"
                      onChange={(e) =>
                        this.handleChange(
                          e,
                          this.state.newData,
                          -0,
                          "mandi_longitude",
                          true
                        )
                      }
                    />
                  </Form.Item>
                </div>
              </div>
              {/*<div>
                //   <div className="checkbox-group1" style={{ display: "inline-block", marginRight: 10 }}>
                    Start Effective Date : <DatePicker
                //       name="Start_Effective_Date"
                //       allowClear={true}
                //       // disabled={
                //       //   !canEnableTextBox("1", statutoryDetails.registered_VAT)
                //       // }
                //       format="YYYY-MM-DD"
                //       placeholder="Start Date"
                //       defaultValue={this.state.newData.Start_Effective_Date === null || this.state.newData.Start_Effective_Date === undefined ? undefined : moment(this.state.newData.Start_Effective_Date, "YYYY-MM-DD")}
                //       // value={
                //       //   this.state.newData.Start_Effective_Date !== null || this.state.newData.Start_Effective_Date !== "" || this.state.newData.Start_Effective_Date !== undefined
                //       //     ? moment(this.state.newData.Start_Effective_Date, "YYYY-MM-DD")
                //       //     : undefined
                //       // }
                //       onChange={(value, date) => this.handleChange(date, this.state.newData, -0, "Start_Effective_Date", true)
                //       }
                //     // disabledDate={disabledDate}
                //     />
                //   </div>
                //   <div className="checkbox-group1" style={{ display: "inline-block", }}>
                //     End Effective Date: <DatePicker
                //       name="End_Effective_Date"
                //       allowClear={true}
                //       placeholder="End Date"
                //       // disabled={
                //       //   !canEnableTextBox("1", statutoryDetails.registered_VAT)
                //       // }
                //       defaultValue={this.state.newData.End_Effective_Date === null || this.state.newData.End_Effective_Date === undefined ? undefined : moment(this.state.newData.End_Effective_Date, "YYYY-MM-DD")}
                //       // value={
                //       //   this.state.newData.End_Effective_Date !== null || this.state.newData.End_Effective_Date !== "" || this.state.newData.End_Effective_Date !== undefined
                //       //     ? moment(this.state.newData.End_Effective_Date, "YYYY-MM-DD")
                //       //     : undefined
                //       // }
                //       onChange={(value, date) => this.handleChange(date, this.state.newData, -0, "End_Effective_Date", true)
                //       }
                //       // disabledDate={this.disabledDate(this.state.newData, "new")}
                //       disabledDate={d => !d || d.isSameOrBefore(this.state.newData.Start_Effective_Date)}
                //     />
                //   </div>
              // </div> //================
              <div
                className="checkbox-group1"
                style={{ display: "inline-block", marginRight: 40 }}
              >
                <Form.Item label="Mandi Priority">
                  {/* <Select
                      value={
                        this.state.newData.is_priority_mandi === true ? "Yes" : "No"
                      }
                      showSearch
                    optionFilterProp="children"
                      onChange={(value, option) =>
                        this.handleDropdownChange(
                          value,
                          this.state.newData,
                          "is_priority_mandi",
                          -0,
                          option.props.children,
                          true
                        )
                      }
                      style={{
                        width: "100px", background: "white",
                        borderColor: "gray",
                        borderWidth: "thin",
                        fontWeight: "400",
                        fontSize: "medium"
                      }}
                    >
                      <Option key={1} value={1} style={{
                        fontWeight: "400",
                        fontSize: "medium"
                      }}>
                        {"Yes"}
                      </Option>
                      <Option key={0} value={0}>
                        {"No"}
                      </Option>
                    </Select> //================
                  <Radio.Group
                    name="is_priority_mandi"
                    value={this.state.newData.is_priority_mandi ? 1 : 0}
                    required
                    onChange={(e, option) =>
                      this.handleDropdownChange(
                        e.target.value,
                        this.state.newData,
                        "is_priority_mandi",
                        -0,
                        "",
                        true
                      )
                    }
                  >
                    <Radio value={1}>Yes</Radio>
                    <Radio value={0}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>

              <div
                className="checkbox-group1"
                style={{ display: "inline-block", marginRight: 40 }}
              >
                <Form.Item label="Main Mandi">
                  {/* <Select
                      value={
                        this.state.newData.is_main_mandi === true ? "Yes" : "No"
                      }
                      showSearch
                    optionFilterProp="children"
                      onChange={(value, option) =>
                        this.handleDropdownChange(
                          value,
                          this.state.newData,
                          "is_main_mandi",
                          -0,
                          option.props.children,
                          true
                        )
                      }
                      style={{
                        width: "100px", background: "white",
                        borderColor: "gray",
                        borderWidth: "thin",
                        fontWeight: "400",
                        fontSize: "medium"
                      }}
                    >
                      <Option key={1} value={1}>
                        {"Yes"}
                      </Option>
                      <Option key={0} value={0}>
                        {"No"}
                      </Option>
                    </Select> //================
                  <Radio.Group
                    name="is_main_mandi"
                    value={this.state.newData.is_main_mandi ? 1 : 0}
                    required
                    onChange={(e, option) =>
                      this.handleDropdownChange(
                        e.target.value,
                        this.state.newData,
                        "is_main_mandi",
                        -0,
                        "",
                        true
                      )
                    }
                  >
                    <Radio value={1}>Yes</Radio>
                    <Radio value={0}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>

              <div
                className="checkbox-group1"
                style={{ display: "inline-block" }}
              >
                <Form.Item label="Active">
                  {/* <Select
                      value={
                        this.state.newData.is_active === true ? "Yes" : "No"
                      }
                      showSearch
                    optionFilterProp="children"
                      onChange={(value, option) =>
                        this.handleDropdownChange(
                          value,
                          this.state.newData,
                          "is_active",
                          -0,
                          option.props.children,
                          true
                        )
                      }
                      style={{
                        width: "100px", background: "white",
                        borderColor: "gray",
                        borderWidth: "thin",
                        fontWeight: "400",
                        fontSize: "medium"
                      }}
                    >
                      <Option key={1} value={1}>
                        {"Yes"}
                      </Option>
                      <Option key={0} value={0}>
                        {"No"}
                      </Option>
                    </Select> //=====================
                  <Radio.Group
                    name="is_active"
                    required
                    value={this.state.newData.is_active ? 1 : 0}
                    onChange={(e, option) =>
                      this.handleDropdownChange(
                        e.target.value,
                        this.state.newData,
                        "is_active",
                        -0,
                        "",
                        true
                      )
                    }
                  >
                    <Radio value={1}>Yes</Radio>
                    <Radio value={0}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>

              <div className="form-bottom-container">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={this.state.isSubmitted}
                    onClick={() => {
                      // this.setState({isSubmitted:false})
                      this.submitTableRowData(this.state.newData);
                    }}
                  >
                    Submit
                    </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </Modal> */}
        </>
        <div
          className="table-container1"
          style={{ width: "100%", margin: "10px 0px" }}
        >
          <Table
            {...userTableProps}
            columns={[
              {
                key: "full_name",
                title: "Full Name",
                dataIndex: "full_name",
                width: 155,
                // filters: this.createFilters("mandi_name"),
                // onFilter: (value, record) =>
                //   record.mandi_name.includes(value),
                // sortDirections: ["descend", "ascend"],
                // sorter: (a, b) => a.mandi_name.localeCompare(b.mandi_name),
                render: (record, rowRecord, index) => {
                  return (
                    <>
                      <div style={{ marginLeft: "0px" }}>
                        <Input
                          style={{ marginRight: "2px" }}
                          maxLength={100}
                          disabled={!rowRecord.isEdit}
                          // disabled={true}
                          value={rowRecord.full_name}
                          name="full_name"
                          onChange={(e) =>
                            this.handleChange(
                              e,
                              rowRecord,
                              index,
                              "full_name",
                              false
                            )
                          }
                        />
                      </div>
                    </>
                  );
                },
              },
              {
                title: "Job title",
                dataIndex: "job_title",
                key: "job_title",
                width: 160,
                // filters: this.createFilters("job_title"),
                // onFilter: (value, record) => record.job_title.includes(value),
                // sortDirections: ["descend", "ascend"],
                // sorter: (a, b) => a.job_title.localeCompare(b.job_title),
                render: (record, rowRecord, index) => {
                  return (
                    <>
                      <div style={{ marginLeft: "0px" }}>
                        <Input
                          style={{ marginRight: "2px" }}
                          maxLength={100}
                          disabled={!rowRecord.isEdit}
                          // disabled={true}
                          value={rowRecord.job_title}
                          name="job_title"
                          onChange={(e) =>
                            this.handleChange(
                              e,
                              rowRecord,
                              index,
                              "job_title",
                              false
                            )
                          }
                        />
                      </div>
                      {/* <div
                        style={{ marginLeft: "-15px", marginRight: "-10px" }}
                      >
                        <Select
                          className="remarks-select"
                          showSearch
                          optionFilterProp="children"
                          disabled={!rowRecord.isEdit}
                          name="job_title"
                          defaultValue={rowRecord.job_title}
                          value={rowRecord.job_title}
                          onSelect={(value, option) =>
                            this.handleDropdownChange(
                              value,
                              rowRecord,
                              "job_title",
                              index,
                              option.props.children,
                              false
                            )
                          }
                        >
                          {this.state.primaryHubList &&
                            this.state.primaryHubList.length &&
                            this.state.primaryHubList.map((hubItem, idx) => (
                              <Option
                                key={hubItem.territory_id}
                                value={hubItem.territory_id}
                              >
                                {hubItem.territory_name}
                              </Option>
                            ))}
                        </Select>
                      </div> */}
                    </>
                  );
                },
              },
              {
                title: "Department",
                dataIndex: "department",
                key: "department",
                width: 160,
                // filters: this.createFilters("region_name"),
                // onFilter: (value, record) =>
                //   record.region_name.includes(value),
                // sortDirections: ["descend", "ascend"],
                // sorter: (a, b) => a.region_name.localeCompare(b.region_name),
                render: (record, rowRecord, index) => {
                  return (
                    <>
                      <div style={{ marginLeft: "0px" }}>
                        <Input
                          style={{ marginRight: "2px" }}
                          maxLength={100}
                          disabled={!rowRecord.isEdit}
                          // disabled={true}
                          value={rowRecord.department}
                          name="department"
                          onChange={(e) =>
                            this.handleChange(
                              e,
                              rowRecord,
                              index,
                              "department",
                              false
                            )
                          }
                        />
                      </div>
                    </>
                  );
                },
              },
              {
                title: "Location",
                dataIndex: "location",
                key: "location",
                width: 140,
                // filters: this.createFilters("hub_region"),
                // onFilter: (value, record) =>
                //   record.hub_region.includes(value),
                // sortDirections: ["descend", "ascend"],
                // sorter: (a, b) => a.hub_region.localeCompare(b.hub_region),
                render: (record, rowRecord, index) => {
                  return (
                    <>
                      <div style={{ marginLeft: "0px" }}>
                        <Input
                          style={{ marginRight: "2px" }}
                          maxLength={100}
                          disabled={!rowRecord.isEdit}
                          // disabled={true}
                          value={rowRecord.location}
                          name="location"
                          onChange={(e) =>
                            this.handleChange(
                              e,
                              rowRecord,
                              index,
                              "location",
                              false
                            )
                          }
                        />
                      </div>
                    </>
                  );
                },
              },
              {
                title: "Age",
                dataIndex: "age",
                key: "age",
                width: 130,
                // filters: this.createFilters("branch_name"),
                // onFilter: (value, record) =>
                //   record.branch_name.includes(value),
                // sortDirections: ["descend", "ascend"],
                // sorter: (a, b) => a.branch_name.localeCompare(b.branch_name),
                render: (record, rowRecord, index) => {
                  return (
                    <>
                      <div style={{ marginLeft: "0px" }}>
                        <Input
                          style={{ marginRight: "2px" }}
                          maxLength={100}
                          disabled={!rowRecord.isEdit}
                          // disabled={true}
                          value={rowRecord.age}
                          name="age"
                          onChange={(e) =>
                            this.handleChange(
                              e,
                              rowRecord,
                              index,
                              "age",
                              false
                            )
                          }
                        />
                      </div>
                    </>
                  );
                },
              },
              {
                key: "salary",
                title: "Salary",
                dataIndex: "salary",
                width: 140,
                // sortDirections: ["descend", "ascend"],
                // sorter: (a, b) =>
                //   a.Mandi_Min_Buying_MT - b.Mandi_Min_Buying_MT,
                render: (record, rowRecord, index) => {
                  return (
                    <>
                      <div style={{ marginLeft: "0px" }}>
                        <Input
                          style={{ marginRight: "2px" }}
                          disabled={!rowRecord.isEdit}
                          maxLength={100}
                          value={rowRecord.salary}
                          name="salary"
                          onChange={(e) =>
                            this.handleChange(
                              e,
                              rowRecord,
                              index,
                              "salary",
                              false
                            )
                          }
                        />
                      </div>
                    </>
                  );
                },
              },
              {
                title: "Action",
                dataIndex: "Submit",
                key: "Submit",
                width: 140,
                render: (record, rowRecord, index) => {
                  return (
                    <>
                      <div style={{ display: "inline-flex", width: "100%" }}>
                        <Button
                          className={
                            rowRecord.surplus_deficit <= 0
                              ? "disable-edit-btn"
                              : "edit-btn"
                          }
                          type="primary"
                          size={"small"}
                          style={{
                            marginLeft: 5,
                            alignSelf: "center",
                            color: "white",
                            borderRadius: 15,
                            padding: "0px 0px 2px",
                            height: 31,
                            backgroundColor: "#20346a",
                          }}
                          block
                          htmlType="submit"
                          // disabled={this.state.isSubmitted}
                          onClick={() =>
                            rowRecord.isEdit
                              ? this.submitTableRowData(rowRecord)
                              : this.handleEditClick(rowRecord, index)
                          }
                        >
                          {rowRecord.isEdit ? "Submit" : "Edit"}
                        </Button>

                        <Button
                          className={
                            !rowRecord.isEdit
                              ? "disabledBtnClass"
                              : "btnClass"
                          }
                          type="primary"
                          size={"small"}
                          style={{
                            marginLeft: 5,
                            alignSelf: "center",
                            color: "white",
                            borderRadius: 15,
                            padding: "0px 0px 2px",
                            height: 31,
                            backgroundColor: "#20346a",
                          }}
                          block
                          htmlType="submit"
                          disabled={!rowRecord.isEdit}
                          onClick={() =>
                            this.handleCancelClick(rowRecord, index)
                          }
                        >
                          {rowRecord.isEdit ? "Cancel" : "Delete"}
                        </Button>
                      </div>
                    </>
                  );
                },
              },
            ]}
            // dataSource={[]}
            dataSource={setTableData()}
          />
        </div>
      </Spin>
    </div>
  );
}

export default EmployeesTable;

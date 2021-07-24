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

import {
  ExclamationCircleOutlined
} from '@ant-design/icons';
import moment from "moment";
import Chart from 'chart.js/auto';
import { withRouter } from "react-router-dom";

const { Search } = Input;
const { Option } = Select;
const { confirm } = Modal;

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
  full_name: "Anil Raj",
  job_title: "Backend Developer",
  department: "Developer",
  location: "Hyderabad",
  age: 26,
  salary: "4,00,000"
},
{
  id: 3,
  full_name: "Aklesh",
  job_title: "Tester",
  department: "Tester",
  location: "Banglore",
  age: 31,
  salary: "4,50,000"
},
{
  id: 4,
  full_name: "Balu",
  job_title: "Designer",
  department: "Designer",
  location: "Pune",
  age: 35,
  salary: "8,00,000"
},
{
  id: 5,
  full_name: "Uday",
  job_title: "UI Developer",
  department: "Developer",
  location: "Delhi",
  age: 30,
  salary: "15,00,000"
},
{
  id: 6,
  full_name: "Yogesh",
  job_title: "Developer",
  department: "Developer",
  location: "Nizamabad",
  age: 24,
  salary: "5,50,000"
},
{
  id: 7,
  full_name: "Akhil",
  job_title: "Designer",
  department: "Designer",
  location: "Nizamabad",
  age: 26,
  salary: "5,00,000"
},
{
  id: 8,
  full_name: "Raj",
  job_title: "Tester",
  department: "Tester",
  location: "Hyderabad",
  age: 26,
  salary: "9,00,000"
},
{
  id: 9,
  full_name: "Ravi",
  job_title: "UI Developer",
  department: "Developer",
  location: "Pune",
  age: 30,
  salary: "12,00,000"
},
{
  id: 10,
  full_name: "Jasmine",
  job_title: "Backend Developer",
  department: "Backend Developer",
  location: "Banglore",
  age: 26,
  salary: "4,50,000"
},
{
  id: 11,
  full_name: "Chethan",
  job_title: "Tester",
  department: "Tester",
  location: "Delhi",
  age: 35,
  salary: "5,00,000"
},
{
  id: 12,
  full_name: "Ashwanth",
  job_title: "Designer",
  department: "Designer",
  location: "Nizamabad",
  age: 24,
  salary: "8,00,000"
},
{
  id: 13,
  full_name: "Akhila",
  job_title: "Designer",
  department: "Designer",
  location: "Nizamabad",
  age: 22,
  salary: "7,00,000"
},
{
  id: 14,
  full_name: "Srujan",
  job_title: "Backend Developer",
  department: "Backend Developer",
  location: "Hyderabad",
  age: 28,
  salary: "11,00,000"
},
{
  id: 15,
  full_name: "Ashley",
  job_title: "UI Developer",
  department: "Developer",
  location: "Delhi",
  age: 28,
  salary: "15,00,000"
}]

const departmentList = [{
  text: "Backend Developer",
  value: "backend developer"
}, {
  text: "Designer",
  value: "designer"
}, {
  text: "Developer",
  value: "developer"
}, {
  text: "Tester",
  value: "tester"
}, {
  text: "UI Developer",
  value: "ui developer"
},]

const locationList = [{
  text: "Hyderabad",
  value: "hyderabad"
}, {
  text: "Nizamabad",
  value: "nizamabad"
}, {
  text: "Bangalore",
  value: "bangalore"
}, {
  text: "Pune",
  value: "pune"
}, {
  text: "Delhi",
  value: "delhi"
},]

const ageList = [{
  text: "22",
  value: 22
}, {
  text: "24",
  value: 24
}, {
  text: "26",
  value: 26
}, {
  text: "30",
  value: 30
}, {
  text: "35",
  value: 35
},]

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

const EmployeesTable = (props) => {
  const { history, isTable } = props;
  const [employeesTableData, setEmployeesTableData] = useState(dummyData);
  const [rowData, setRowData] = useState();
  const [searchText, setSearchText] = useState(null);
  const [isSpinnerOnLoad, setIsSpinnerOnLoad] = useState(false);
  const [departmentSelected, setDepartmentSelected] = useState();
  const [locationSelected, setLocationSelected] = useState();
  const [ageSelected, setAgeSelected] = useState();
  const [newFormData, setNewFormData] = useState(
    {
      id: null,
      full_name: null,
      job_title: null,
      department: null,
      location: null,
      age: null,
      salary: null
    }
  )
  // state = {
  //   isModalVisible: false,
  //   isAdd: false,
  //   currentRecord: null,
  //   userBranches: null,
  //   searchText: null,
  //   searchUserType: 0,
  //   employeesTableData: [],
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

  const setTableData = () => {
    console.log("mandi table data ", employeesTableData);
    if (
      employeesTableData !== undefined ||
      employeesTableData.length >= 0
    ) {
      // setIsSpinnerOnLoad(true);
      let modifiedEmployeeTableData = employeesTableData.map((employee, index) => {
        return {
          key: index,
          id: employee.id,
          full_name: employee.full_name,
          job_title: employee.job_title,
          department: employee.department,
          location: employee.location,
          age: employee.age,
          salary: employee.salary,
          isEdit: employee.isEdit === undefined || employee.isEdit === null ? false : employee.isEdit
        };
      });

      // setEmployeesTableData(modifiedEmployeeTableData)
      // setIsSpinnerOnLoad(false);
      console.log("Modified => ", modifiedEmployeeTableData);
      return modifiedEmployeeTableData;
    } else {
      // setEmployeesTableData(dummyData);
      return dummyData;
    }
  };

  useEffect(() => {
    if (departmentSelected || locationSelected || ageSelected) {
      // console.log("departmentSelected Text", departmentSelected, locationSelected, ageSelected)
      let dataAfterFilter = dummyData.filter(
        (item) =>
          (item.department !== null && item.department !== undefined && departmentSelected !== undefined &&
            item.department
              .toLowerCase()
              .includes(departmentSelected.toLowerCase())) ||
          (item.location !== null && item.location !== undefined && locationSelected !== undefined &&
            item.location
              .toLowerCase()
              .includes(locationSelected.toLowerCase())) ||
          (item.age !== null && item.age !== undefined && ageSelected !== undefined &&
            item.age.toString()
              .toLowerCase()
              .includes(ageSelected.toString().toLowerCase()))
      );
      setEmployeesTableData(dataAfterFilter);
    }
    else {
      setEmployeesTableData(dummyData)
    }
  }, [departmentSelected, locationSelected, ageSelected])

  useEffect(() => {

    if (searchText) { // && (!departmentSelected && !locationSelected && !ageSelected)
      // console.log("Search Text", searchText)
      let dataAfterSearch = dummyData.filter(
        (item) =>
          (item.full_name !== null &&
            item.full_name.replaceAll(" ", "")
              .toLowerCase()
              .includes(searchText.replaceAll(" ", "").toLowerCase())) ||
          (item.job_title !== null &&
            item.job_title.replaceAll(" ", "")
              .toLowerCase()
              .includes(searchText.replaceAll(" ", "").toLowerCase())) ||
          (item.department !== null &&
            item.department
              .toLowerCase()
              .includes(searchText.toLowerCase())) ||
          (item.age !== null &&
            item.age.toString()
              .toLowerCase()
              .includes(searchText.toLowerCase())) ||
          (item.location !== null &&
            item.location
              .toLowerCase()
              .includes(searchText.toLowerCase())) ||
          (item.salary !== null &&
            item.salary.replaceAll(",", "")
              .toLowerCase()
              .includes(searchText.replaceAll(",", "").toLowerCase()))
      );
      setEmployeesTableData(dataAfterSearch);
    }
    else {
      setEmployeesTableData(dummyData)
    }
  }, [searchText])

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
    let filterData = employeesTableData;
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
    console.log("Submit Row DAta", row);
    if (validate(row)) {
      let newData = setTableData();
      newData[row.key] = row;
      newData[row.key].isEdit = false;
      setEmployeesTableData(newData);
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
      rowData.full_name === null ||
      rowData.full_name === undefined ||
      rowData.full_name === ""
    ) {
      message.error(`Please enter Full Name !`, 5);
      return false;
    } else if (
      rowData.job_title === null ||
      rowData.job_title === undefined ||
      rowData.job_title === ""
    ) {
      message.error(`Please enter Job Title !`, 5);
      return false;
    } else if (
      rowData.department === null ||
      rowData.department === undefined ||
      rowData.department === ""
    ) {
      message.error(`Please enter Department !`, 5);
      return false;
    } else if (
      rowData.location === null ||
      rowData.location === undefined ||
      rowData.location === ""
    ) {
      message.error(`Please enter Location !`, 5);
      return false;
    } else if (
      rowData.age === null ||
      rowData.age === undefined ||
      rowData.age === ""
    ) {
      message.error(`Please enter Age !`, 5);
      return false;
    } else if (
      rowData.salary === null ||
      rowData.salary === undefined ||
      rowData.salary === "") {
      message.error(`Please enter Salary !`, 5);
      return false;
    }
    else if (rowData.salary < 0) {
      message.error(`Salary cannot be less than 0 !`, 5);
      return false;
    }

    return true;
  };

  // const setModalVisibility = (status) => {
  //   if (status) {
  //     const nData = {
  //       End_Effective_Date: null,
  //       Mandi_Min_Buying_MT: null,
  //       Start_Effective_Date: null,
  //       Surplus_Factor: null,
  //       branch_id: null,
  //       branch_name: "",
  //       branch_sap_code: "",
  //       hub_id: null,
  //       hub_latitude: null,
  //       hub_longitude: null,
  //       hub_name: "",
  //       hub_region: "",
  //       hub_region_id: null,
  //       hub_sap_code: "",
  //       is_active: true,
  //       is_main_mandi: true,
  //       is_priority_mandi: true,
  //       mandi_latitude: null,
  //       mandi_longitude: null,
  //       mandi_name: "",
  //       mandi_sap_code: "",
  //       region_id: null,
  //       region_name: "",
  //       state_name: "",
  //       isEdit: false,
  //     };

  //     setState({ newData: nData });
  //   }

  //   setState({ isModalVisible: status });
  // };

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
    // const specificHub = state.primaryHubList.filter((item) => {
    //   if (item.territory_id === value) {
    //     return item;
    //   }
    // });
    // // console.log("Specified OBJ", specificHub);
    // let a;

    // if (isPopup === false) {
    //   // console.log("region ame ", value, optionlabel)
    //   a = employeesTableData;

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
    //   setState({ employeesTableData: a });
    // } else {
    //   // console.log("region ame1 ", value, optionlabel)
    //   a = state.newData;

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
    //   setState({ newData: a });
    // }
  };

  // const handleCancel = () => {
  //   setState({ isModalVisible: false });
  // };

  const handleChange = (e, row, index, name, isPopup) => {
    console.log("row on handlechange running", e, name, index, row);

    let a;
    var alphaNumericRegex = /^[a-zA-Z0-9]*$/;
    var alphabetsRegex = /^[a-zA-Z ]*$/;
    var numberRegex = /^[0-9.]+$/;
    var salaryRegex = /^[0-9,]+$/;

    if (isPopup === false) {
      // console.log("hub table data");
      a = setTableData();

      switch (name) {
        case "full_name":
          if (e.target.value === "") {
            a[row.key].full_name = "";
          } else if (e.target.value.match(alphabetsRegex)) {
            a[row.key].full_name = e.target.value;
          }
          setEmployeesTableData(a);
          return;
        case "job_title":
          if (e.target.value === "") {
            a[row.key].job_title = "";
          } else if (e.target.value.match(alphabetsRegex)) {
            a[row.key].job_title = e.target.value;
          }
          a[row.key].job_title = e.target.value;
          setEmployeesTableData(a);
          return;
        case "department":
          if (e.target.value === "") {
            a[row.key].department = "";
          } else if (e.target.value.match(alphabetsRegex)) {
            a[row.key].department = e.target.value;
          }

          setEmployeesTableData(a);
          return;
        case "location":
          if (e.target.value === "") {
            a[row.key].location = "";
          } else if (e.target.value.match(alphabetsRegex)) {
            a[row.key].location = e.target.value;
          }

          setEmployeesTableData(a);
          return;
        case "age":
          if (e.target.value === "") {
            a[row.key].age = "";
          } else if (e.target.value.match(numberRegex)) {
            a[row.key].age = e.target.value;
          }

          setEmployeesTableData(a);
          return;
        case "salary":
          if (e.target.value === "") {
            a[row.key].salary = "";
          } else if (e.target.value.match(salaryRegex)) {
            a[row.key].salary = e.target.value;
          }
          setEmployeesTableData(a);
          return;

        default:
          return "";
      }

    }
    else {
      console.log("new data ", newFormData);
      a = newFormData;

      <>
        {/* // if (name === "mandi_name") { 
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
      */}
      </>

      switch (name) {
        case "full_name":
          if (e.target.value === "") {
            setNewFormData({
              ...newFormData,
              full_name: ""
            })
          } else if (e.target.value.match(alphabetsRegex)) {
            setNewFormData({
              ...newFormData,
              full_name: e.target.value
            })
          }
          return;
        case "job_title":
          if (e.target.value === "") {
            setNewFormData({
              ...newFormData,
              job_title: ""
            })
          } else if (e.target.value.match(alphabetsRegex)) {
            setNewFormData({
              ...newFormData,
              job_title: e.target.value
            })
          }
          return;
        case "department":
          if (e.target.value === "") {
            setNewFormData({
              ...newFormData,
              department: ""
            })
          } else if (e.target.value.match(alphabetsRegex)) {
            setNewFormData({
              ...newFormData,
              department: e.target.value
            })
          }
          return;
        case "location":
          if (e.target.value === "") {
            setNewFormData({
              ...newFormData,
              location: ""
            })
          } else if (e.target.value.match(alphabetsRegex)) {
            setNewFormData({
              ...newFormData,
              location: e.target.value
            })
          }
          return;
        case "age":
          if (e.target.value === "") {
            setNewFormData({
              ...newFormData,
              age: ""
            })
          } else if (e.target.value.match(numberRegex)) {
            setNewFormData({
              ...newFormData,
              age: e.target.value
            })
          }
          return;
        case "salary":
          if (e.target.value === "") {
            setNewFormData({
              ...newFormData,
              salary: ""
            })
          } else if (e.target.value.match(salaryRegex)) {
            setNewFormData({
              ...newFormData,
              salary: e.target.value
            })
          }
          return;
        default:
          return "";
      }
    }
  };

  const handleEditClick = (row, index) => {
    // console.log("RowData", row, index);
    let tempData = setTableData().map((item) => {
      if (item.id === row.id) {
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
    setEmployeesTableData(tempData);
    setRowData(row)
  };

  const handleCancelClick = (row, index) => {
    let tempData = setTableData().map((item) => {
      if (item.id === row.id) {
        return rowData;
      } else {
        return item;
      }
    });
    setEmployeesTableData(tempData);
  };

  function showPromiseConfirm(row, index) {
    confirm({
      title: "Delete Employee Details",
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure you want to delete ${row.full_name} Data?`,
      okText: "Yes",
      cancelText: "No",
      onOk() {
        handleDeleteClick(row, index);
      },
      onCancel() { },
    });
  }

  const handleDeleteClick = (row, index) => {
    let tempData = setTableData().filter((item) => item.id !== row.id);
    setEmployeesTableData(tempData);
  }

  const handleDepartmentSelect = (value, props) => {
    setDepartmentSelected(value);
  };

  const handleLocationSelect = (value, props) => {
    setLocationSelected(value);
  };

  const handleAgeSelect = (value, props) => {
    setAgeSelected(value);
  };

  const userTableProps = {
    pagination: true,
    size: "default",
    bordered: true,
    scroll: { x: 200, y: window.innerHeight - 450 },
  };

  useEffect(() => {
    isTable && buildChart();
  }, [])

  /**
   * @function
   * @description Function to create a chart.
   * @memberof CombinedChart
   */
  const buildChart = () => {
    let myChartPie = "0";
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
      {isTable ?
        <>
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
                // disabled={!state.isAdd}
                allowClear
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
                    <Option value={item.value} key={item.value}>
                      {item.text}
                    </Option>
                  ))}
              </Select>
              <Select
                // disabled={!state.isAdd}
                allowClear
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
                    <Option value={item.value} key={item.value}>
                      {item.text}
                    </Option>
                  ))}
              </Select>
              <Select
                // disabled={!state.isAdd}
                allowClear
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
                    <Option value={item.value} key={item.value}>
                      {item.text}
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
                onClick={() => history.push("/createemployee")}
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
                    // filters: createFilters("mandi_name"),
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
                                handleChange(
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
                    // filters: createFilters("job_title"),
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
                                handleChange(
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
                            handleDropdownChange(
                              value,
                              rowRecord,
                              "job_title",
                              index,
                              option.props.children,
                              false
                            )
                          }
                        >
                          {state.primaryHubList &&
                            state.primaryHubList.length &&
                            state.primaryHubList.map((hubItem, idx) => (
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
                    // filters: createFilters("region_name"),
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
                                handleChange(
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
                    // filters: createFilters("hub_region"),
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
                                handleChange(
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
                    // filters: createFilters("branch_name"),
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
                                handleChange(
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
                                handleChange(
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
                              // disabled={state.isSubmitted}
                              onClick={() =>
                                rowRecord.isEdit
                                  ? submitTableRowData(rowRecord)
                                  : handleEditClick(rowRecord, index)
                              }
                            >
                              {rowRecord.isEdit ? "Submit" : "Edit"}
                            </Button>

                            <Button
                              className={
                                !rowRecord.isEdit
                                  ? "deleteBtnClass"
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
                              // disabled={!rowRecord.isEdit}
                              onClick={() =>
                                rowRecord.isEdit
                                  ? handleCancelClick(rowRecord, index)
                                  : showPromiseConfirm(rowRecord, index)
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
                dataSource={setTableData()}
              // dataSource={employeesTableData}
              />
            </div>
          </Spin>
        </>
        : <div>
          <div className="form-header">
            <div className="title"> Create Employee </div>
            <div className="save"> Save </div>
            <div className="create-submit">
              <Button
                className={"btnClass"}
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
                // disabled={!rowRecord.isEdit}
                onClick={() => submitTableRowData(newFormData)}
              >
                CREATE EMPLOYEES
              </Button>
            </div>
          </div>
          <div className="form">
            <> {/* <Modal
          className="add-master-modal"
          title={"Add Mandi"}
          footer={false}
          // style={{
          //   textAlign: "center",
          //   height: "400px",
          // }}
          // visible={true}
          visible={state.isModalVisible}
          destroyOnClose={true}
          onCancel={handleCancel}
        >
          <div className="master-form-container">
            <Form
              layout="horizontal"
              //   onValuesChange={onFormLayoutChange}
              size={"small"}
            // onSubmit={submitTableRowData(state.newData)}
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
                      value={state.newData.mandi_name}
                      name="mandi_name"
                      onChange={(e) =>
                        handleChange(
                          e,
                          state.newData,
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
                      value={state.newData.hub_name}
                      onSelect={(value, option) =>
                        handleDropdownChange(
                          value,
                          state.newData,
                          "hub_name",
                          -0,
                          option.props.children,
                          true
                        )
                      }
                    >
                      {state.primaryHubList &&
                        state.primaryHubList.length &&
                        state.primaryHubList.map((hubItem, idx) => (
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
                      value={state.newData.region_name}
                      onSelect={(value, option) =>
                        handleDropdownChange(
                          value,
                          state.newData,
                          "region_name",
                          -0,
                          option.props.children,
                          true
                        )
                      }
                    >
                      {state.mandiRegionList &&
                        state.mandiRegionList.length &&
                        state.mandiRegionList.map(
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
              {state.newData.hub_region !== "" &&
                state.newData.branch_name !== "" ? (
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
                      <b>{state.newData.hub_region}</b>
                    </div>
                    <div
                      className="right"
                      style={{ display: "inline-block", width: "45%" }}
                    >
                      <span style={{ color: "black" }}>Hub Branch:</span>{" "}
                      <b>{state.newData.branch_name}</b>
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
                      value={state.newData.Mandi_Min_Buying_MT}
                      name="Mandi_Min_Buying_MT"
                      onChange={(e) =>
                        handleChange(
                          e,
                          state.newData,
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
                      value={state.newData.Surplus_Factor}
                      name="Surplus_Factor"
                      onChange={(e) =>
                        handleChange(
                          e,
                          state.newData,
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
                      value={state.newData.mandi_sap_code}
                      name="mandi_sap_code"
                      onChange={(e) =>
                        handleChange(
                          e,
                          state.newData,
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
                      value={state.newData.mandi_latitude}
                      name="mandi_latitude"
                      onChange={(e) =>
                        handleChange(
                          e,
                          state.newData,
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
                      value={state.newData.mandi_longitude}
                      name="mandi_longitude"
                      onChange={(e) =>
                        handleChange(
                          e,
                          state.newData,
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
                //       defaultValue={state.newData.Start_Effective_Date === null || state.newData.Start_Effective_Date === undefined ? undefined : moment(state.newData.Start_Effective_Date, "YYYY-MM-DD")}
                //       // value={
                //       //   state.newData.Start_Effective_Date !== null || state.newData.Start_Effective_Date !== "" || state.newData.Start_Effective_Date !== undefined
                //       //     ? moment(state.newData.Start_Effective_Date, "YYYY-MM-DD")
                //       //     : undefined
                //       // }
                //       onChange={(value, date) => handleChange(date, state.newData, -0, "Start_Effective_Date", true)
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
                //       defaultValue={state.newData.End_Effective_Date === null || state.newData.End_Effective_Date === undefined ? undefined : moment(state.newData.End_Effective_Date, "YYYY-MM-DD")}
                //       // value={
                //       //   state.newData.End_Effective_Date !== null || state.newData.End_Effective_Date !== "" || state.newData.End_Effective_Date !== undefined
                //       //     ? moment(state.newData.End_Effective_Date, "YYYY-MM-DD")
                //       //     : undefined
                //       // }
                //       onChange={(value, date) => handleChange(date, state.newData, -0, "End_Effective_Date", true)
                //       }
                //       // disabledDate={disabledDate(state.newData, "new")}
                //       disabledDate={d => !d || d.isSameOrBefore(state.newData.Start_Effective_Date)}
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
                        state.newData.is_priority_mandi === true ? "Yes" : "No"
                      }
                      showSearch
                    optionFilterProp="children"
                      onChange={(value, option) =>
                        handleDropdownChange(
                          value,
                          state.newData,
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
                    value={state.newData.is_priority_mandi ? 1 : 0}
                    required
                    onChange={(e, option) =>
                      handleDropdownChange(
                        e.target.value,
                        state.newData,
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
                        state.newData.is_main_mandi === true ? "Yes" : "No"
                      }
                      showSearch
                    optionFilterProp="children"
                      onChange={(value, option) =>
                        handleDropdownChange(
                          value,
                          state.newData,
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
                    value={state.newData.is_main_mandi ? 1 : 0}
                    required
                    onChange={(e, option) =>
                      handleDropdownChange(
                        e.target.value,
                        state.newData,
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
                        state.newData.is_active === true ? "Yes" : "No"
                      }
                      showSearch
                    optionFilterProp="children"
                      onChange={(value, option) =>
                        handleDropdownChange(
                          value,
                          state.newData,
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
                    value={state.newData.is_active ? 1 : 0}
                    onChange={(e, option) =>
                      handleDropdownChange(
                        e.target.value,
                        state.newData,
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
                    disabled={state.isSubmitted}
                    onClick={() => {
                      // setState({isSubmitted:false})
                      submitTableRowData(state.newData);
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
          </div>
          <div className="form-details">
            <div className="form-container">
              {/* <span style={{ fontSize: 18, fontWeight: 700, display: "block", marginTop: 10 }}>Bank Details</span> */}
              <div className="row" style={{ marginTop: 10 }}>
                <div
                  className="dualColumnRow"
                  style={{ display: "inline-flex" }}
                >
                  <div className="left"> Full Name </div>
                  <div className="right"> {newFormData.full_name} </div>

                  <div lassName="left" style={{ width: "230px", marginLeft: "15%" }} > Job Title </div>
                  <div className="right"> {newFormData.job_title} </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="dualColumnRow"
                  style={{ display: "inline-flex" }}
                >
                  <div className="left"> Department </div>
                  <div className="right"> {newFormData.department} </div>

                  <div className="left" style={{ width: "230px", marginLeft: "15%" }} > Location </div>
                  <div className="right"> {newFormData.location} </div>
                </div>
              </div>
              <div className="row">
                <div className="dualColumnRow" style={{ display: "inline-flex" }} >
                  <div className="left">Age</div>
                  <div className="right"> {newFormData.age} </div>

                  <div className="left" style={{ width: "230px", marginLeft: "15%" }} > Salary </div>
                  <div className="right"> {newFormData.salary} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div >
  );
}

export default withRouter(EmployeesTable);

import React from "react";
import "./index.css";

import { Input, message, Form, Icon, Checkbox, Button } from "antd";

import {
  UserOutlined,
  LockOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import Logo from "../../assets/logo.png";
import bg from "../../assets/Login_Bg_Pattern.png";

// import { SignOutAPI } from "../../auth/utils";
import { withRouter } from "react-router-dom";

// import {
//   setUserLoggedStatus,
//   setAccessToken,
//   setUserRBACDetails,
//   setAllUsers,
//   setAllBranches,
//   setReportData
// } from "../../redux/user/user.actions";

///////////////////////////////////////////////////////////
//#region arrival entry optimization actions and selectors.
// import {
//   saveAllVarietyInfo,
//   setArrivalData,
//   setAllMandis,
//   setBranches,
//   setRegions,
//   setHubs,
//   setMandis,
//   setVarieties,
//   setRemainingVarietyList,
//   setHubVarieties,
//   setRemainingHubVarietyList,
//   setBranchID,
//   setRegionID,
//   setHubID,
//   setMandiID,
// } from "../../redux/arrival-entry/arrival-entry.actions";
// import {
//   selectArrivalData,
//   selectSummaryScreenVisibility,
//   selectBranches,
//   selectRegions,
//   selectHubs,
//   selectMandis,
//   selectVarieties,
//   selectAllVarietyInfo,
//   selectHubVarieties,
//   selectBranchID,
//   selectRegionID,
//   selectHubID,
//   selectMandiID,
// } from "../../redux/arrival-entry/arrival-entry.selectors";
// import { setCurrentArrivalScreen } from "../../redux/map/map.actions";
// import { selectCurrentArrivalScreen } from "../../redux/map/map.selectors";
//#endregion
///////////////////////////////////////////////////////////

// import {
//   setRollUp,
//   setRemarks,
//   setHubTableData,
//   setHubDataPostFOR,
//   setDecisionBranches,
//   setDecisionRegions,
//   setDecisionVarieties,
//   setSelectedBranchID,
//   setSelectedRegionID,
//   setSelectedVarietyID,
// } from "../../redux/buying-decision/buying-decision.actions";

// import {
//   selectHubTableData,
//   selectDecisionBranches,
//   selectDecisionRegions,
//   selectDecisionVarieties,
//   selectSelectedBranchID,
//   selectSelectedRegionID,
//   selectSelectedVarietyID,
// } from "../../redux/buying-decision/buying-decision.selectors";

// import API from "../../api";


/**
 * @description The form component for logging in.
 * @component
 * @memberof App
 */
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() { }

  render() {
    const {
      setUserLoggedStatus,
      history,
      saveAllVarietyInfo,
      setUserRBACDetails,
      setRemarks,
    } = this.props;
    // const { getFieldDecorator } = this.props.form;

    localStorage.clear();

    const ConfigOptions = {
      maxCount: 1,
    };
    message.config(ConfigOptions);

    /**
     *function to submit the login credentials
     *
     * @param {Event} e the event from the form containing the form input values.
     * @memberof App.LoginForm
     */
    const handleSubmit = (e) => {
      e.preventDefault();

      // this.props.form.validateFields((err, values) => {
      //   //if validated, call the login post api
      //   if (!err) {
      //     const userPostData = {
      //       username: values.username,
      //       password: values.password,
      //     };

      //     const headers = {
      //       "Content-Type": "application/json",
      //     };

      //     API.post("/login", userPostData, {
      //       headers: headers,
      //     })
      //       .then((response) => {
      //         console.log("USER RESPONSE :", response.data);
      //         if (response.status) {
      //           // reset the input fields after successful login
      //           this.props.form.resetFields();

      //           //changing the state to rerender app.js to redirect. state is passed to app.js from redux.
      //           setUserLoggedStatus(true);
      //           localStorage.setItem(
      //             "percentage",
      //             response.data.data.min_max_range
      //           );
      //           // rerouting to home.
      //           localStorage.setItem("isLogged", true);
      //           this.props.history.push("/home");

      //           localStorage.setItem("userName", response.data.data.name);

      //           localStorage.setItem(
      //             "accessToken",
      //             response.data.data.access_token
      //           );
      //           this.props.setAccessToken(response.data.data.access_token);

      //           localStorage.setItem(
      //             "accessTokenExpiry",
      //             response.data.data.access_token_expiry
      //           );
      //           localStorage.setItem(
      //             "refreshToken",
      //             response.data.data.refresh_token
      //           );
      //           localStorage.setItem(
      //             "refreshTokenExpiry",
      //             response.data.data.refresh_token_expiry
      //           );

      //           localStorage.setItem(
      //             "logoutTimeStamp",
      //             Math.round(new Date().getTime() / 1000) +
      //             response.data.data.refresh_token_expiry
      //           );

      //           console.log(
      //             "date time at logout : ",
      //             new Date(
      //               (Math.round(new Date().getTime() / 1000) +
      //                 response.data.data.refresh_token_expiry) *
      //               1000
      //             )
      //           );

      //           //#region handling RBAC

      //           if (
      //             response.data.data.role_id &&
      //             response.data.data.user_territories
      //           ) {
      //             localStorage.setItem("roleID", response.data.data.role_id);
      //             localStorage.setItem(
      //               "userTerritories",
      //               response.data.data.user_territories
      //             );
      //             localStorage.setItem(
      //               "location_access",
      //               response.data.data.location_access.map(
      //                 (item) => item.feature_code
      //               )
      //             );
      //             localStorage.setItem(
      //               "non_location_access",
      //               response.data.data.non_location_access.map(
      //                 (item) => item.feature_code
      //               )
      //             );

      //             setUserRBACDetails(
      //               response.data.data.role_id,
      //               response.data.data.name,
      //               response.data.data.user_territories,
      //               response.data.data.location_access.map(
      //                 (item) => item.feature_code
      //               ),
      //               response.data.data.non_location_access.map(
      //                 (item) => item.feature_code
      //               )
      //             );
      //           } else {
      //             setUserRBACDetails(0, "", [], [], []);
      //           }
      //           //#endregion

      //           //#region api call to get all variety info and store it in redux
      //           const varietyHeader = {
      //             Authorization:
      //               "Bearer " + localStorage.getItem("accessToken"),
      //           };
      //           API.get("/varieties", { headers: varietyHeader })
      //             .then((varietyResponse) => {
      //               // console.log(
      //               //   "ALL VARIETY RESPONSE : ",
      //               //   varietyResponse.data.data
      //               // );
      //               saveAllVarietyInfo(varietyResponse.data.data);
      //             })
      //             .catch((err) => {
      //               console.log(
      //                 "ERROR GETTING ALL VARIETY INFO : ERROR : ",
      //                 err.response
      //               );
      //             });
      //           //#endregion

      //           //#region api call to get all remarks

      //           const remarksHeader = {
      //             Authorization:
      //               "Bearer " + localStorage.getItem("accessToken"),
      //           };
      //           API.get("/remarks", { headers: remarksHeader })
      //             .then((remarksResponse) => {
      //               if (remarksResponse.data.status) {
      //                 const remarksList =
      //                   remarksResponse.data.data.length !== 0
      //                     ? remarksResponse.data.data
      //                     : [];

      //                 setRemarks(remarksList);
      //               } else {
      //                 message.error("Error getting remarks");
      //                 console.log("Error getting remarks ");
      //               }
      //             })
      //             .catch((err) => {
      //               message.error("Error getting remarks");
      //               console.log(
      //                 "Error getting remarks ; ERROR : ",
      //                 err.response
      //               );
      //             });

      //           //#endregion

      //           //#region get all the branches and store to users redux store.
      //           const branchHeader = {
      //             Authorization:
      //               "Bearer " + localStorage.getItem("accessToken"),
      //           };

      //           API.get("/branches", { headers: branchHeader })
      //             .then((branchResponse) => {
      //               if (branchResponse.data.status) {
      //                 const allBranches = branchResponse.data.data.branches.map(
      //                   (branch) => {
      //                     return {
      //                       territory_name: branch.territory_name,
      //                       territory_id: branch.territory_id,
      //                     };
      //                   }
      //                 );
      //                 this.props.setAllBranches(allBranches);
      //               } else {
      //                 console.log("error getting branches");
      //               }
      //             })
      //             .catch((err) => {
      //               console.log("Error getting all branches : ERROR :", err);
      //             });

      //           //#endregion

      //           //#region api call to get all user data
      //           const userHeader = {
      //             Authorization:
      //               "Bearer " + localStorage.getItem("accessToken"),
      //           };

      //           API.get("/users", { headers: userHeader })
      //             .then((userResponse) => {
      //               console.log("USERDATA RESPONSE : ", userResponse);
      //               if (userResponse.data.status) {
      //                 this.props.setAllUsers(userResponse.data.data);
      //               } else {
      //                 console.log("error getting all user data");
      //               }
      //             })
      //             .catch((err) => {
      //               console.log(
      //                 "ERROR GETTING ALL USER DETAILS : ERROR :",
      //                 err
      //               );
      //             });
      //           //#endregion

      //           /////////////////////////////////////////////////
      //           //#region Arrival entry hierarchy API
      //           const arrivalHeader = {
      //             Authorization:
      //               "Bearer " + localStorage.getItem("accessToken"),
      //           };
      //           API.get("/territories", { headers: arrivalHeader })
      //             .then((arrivalResponse) => {
      //               if (arrivalResponse.data.status) {
      //                 console.log(
      //                   "Arrival Response : ",
      //                   arrivalResponse.data.data
      //                 );
      //                 this.props.setArrivalData(arrivalResponse.data.data);

      //                 //#region save all mandis into redux
      //                 let allMandiList = [];
      //                 arrivalResponse.data.data.branch_list.map((branch) => {
      //                   branch.hub_list.map((hub) => {
      //                     if (hub.mandi_list.length !== 0) {
      //                       hub.mandi_list.map((mandi) => {
      //                         let modifiedMandi = {
      //                           mandi_name: mandi.mandi_name,
      //                           mandi_id: mandi.mandi_id,
      //                         };
      //                         allMandiList.push(modifiedMandi);
      //                       });
      //                     }
      //                   });
      //                 });
      //                 console.log("ALL MANDIS : ", allMandiList);

      //                 this.props.setAllMandis(allMandiList);
      //                 //#endregion

      //                 //set all branches information & select first branch as default
      //                 this.props.setBranches(
      //                   arrivalResponse.data.data.branch_list
      //                 );
      //                 this.props.setBranchID(
      //                   arrivalResponse.data.data.branch_list[0].branch_id
      //                 );

      //                 //set all hubs under the first branch and set first hub as default.
      //                 // for mandis : hubs are the ones with mandi_list not empty.
      //                 // for FOR and Farmer, hubs include all items in hub_list.

      //                 let mandiHubList = arrivalResponse.data.data.branch_list[0].hub_list.filter(
      //                   (item) => item.mandi_list.length !== 0
      //                 );
      //                 console.log("Mandi hubs :", mandiHubList);
      //                 console.log(
      //                   "all hubs :",
      //                   arrivalResponse.data.data.branch_list[0].hub_list
      //                 );

      //                 if (this.props.currentScreen === "Mandi") {
      //                   this.props.setHubs(mandiHubList);
      //                   this.props.setHubID(mandiHubList[0].hub_id);
      //                 } else {
      //                   this.props.setHubs(
      //                     arrivalResponse.data.data.branch_list[0].hub_list
      //                   );
      //                   this.props.setHubID(
      //                     arrivalResponse.data.data.branch_list[0].hub_list[0]
      //                       .hub_id
      //                   );
      //                 }

      //                 // #region get and store previous card data for FOR and farmer and store into local states
      //                 // get previous card data for FOR
      //                 if (this.props.currentScreen === "FOR") {
      //                   getPreviousFarmerAndFORCardData(
      //                     arrivalResponse.data.data.branch_list[0].branch_id,
      //                     null,
      //                     arrivalResponse.data.data.branch_list[0].hub_list[0]
      //                       .hub_id,
      //                     true
      //                   );
      //                 }

      //                 // get previous card data for farmer
      //                 if (this.props.currentScreen === "Farmer") {
      //                   getPreviousFarmerAndFORCardData(
      //                     arrivalResponse.data.data.branch_list[0].branch_id,
      //                     null,
      //                     arrivalResponse.data.data.branch_list[0].hub_list[0]
      //                       .hub_id,
      //                     false
      //                   );
      //                 }
      //                 // #endregion

      //                 //set all mandis under the first hub and set the first mandi as default
      //                 this.props.setMandis(mandiHubList[0].mandi_list);
      //                 this.props.setMandiID(
      //                   mandiHubList[0].mandi_list[0].mandi_id
      //                 );

      //                 this.props.setVarieties(
      //                   mandiHubList[0].mandi_list[0].varieties
      //                 );

      //                 // region id is only for mandis. it's inside the current selected mandi item
      //                 this.props.setRegionID(
      //                   mandiHubList[0].mandi_list[0].region_id
      //                 );

      //                 //#region  resetting remainingvarietyNames in redux
      //                 let currentVarietyNames = mandiHubList[0].mandi_list[0].varieties.map(
      //                   (item) => item.variety_name
      //                 );
      //                 let allVarietyNames = this.props.allVarietyInfo.map(
      //                   (item) => item.variety_name
      //                 );
      //                 let remainingVarietyNames = allVarietyNames.filter(
      //                   (item) => !currentVarietyNames.includes(item)
      //                 );

      //                 this.props.setRemainingVarietyList(remainingVarietyNames);
      //                 //#endregion

      //                 // get previous card data in first mandi and store to state.
      //                 getPreviousMandiCardData(
      //                   arrivalResponse.data.data.branch_list[0].branch_id,
      //                   mandiHubList[0].mandi_list[0].region_id,
      //                   mandiHubList[0].mandi_list[0].mandi_id
      //                 );

      //                 //this can be removed after fixing the previous data getting function above.
      //               } else {
      //                 console.log("Error getting arrival response.");
      //               }
      //             })
      //             .catch((err) => {
      //               console.log(
      //                 "Error getting arrival response , ERROR : ",
      //                 err
      //               );
      //             });

      //           //#region arrival entry assistive functions

      //           // called after getting mandi data
      //           const getPreviousMandiCardData = (
      //             branch_id,
      //             region_id,
      //             mandi_id,
      //             screen
      //           ) => {
      //             //#region get all previous data in the cards

      //             const currentHeaders = {
      //               Authorization:
      //                 "Bearer " + localStorage.getItem("accessToken"),
      //             };

      //             const prevDataParams = {
      //               branch_id: branch_id,
      //               mandi_id: mandi_id,
      //               arrival_type: "Mandi",
      //             };

      //             API.get("/varieties/arrivals", {
      //               headers: currentHeaders,
      //               params: prevDataParams,
      //             })
      //               .then((previousDataResponse) => {
      //                 if (previousDataResponse.data) {
      //                   console.log(
      //                     "PREVIOUS DATA : MANDI : ",
      //                     previousDataResponse.data.data
      //                   );

      //                   // save previous card data in the local state.
      //                   this.setState(
      //                     {
      //                       previousCardDataMandi:
      //                         previousDataResponse.data.data.varieties,
      //                     },
      //                     () => {
      //                       if (screen)
      //                         this.props.setCurrentArrivalScreen(screen);
      //                     }
      //                   );

      //                   forceChanges();
      //                 } else {
      //                   console.log("error getting previous data in the cards");
      //                   message.error(
      //                     "Could not retrieve previous card data.Please try again"
      //                   );
      //                 }
      //               })
      //               .catch((err) => {
      //                 console.log(
      //                   "error getting previous data in the cards ; ERROR : ",
      //                   err.response
      //                 );
      //               });
      //             //#endregion
      //           };

      //           // called after getting hub data
      //           const getPreviousFarmerAndFORCardData = (
      //             branch_id,
      //             region_id,
      //             hub_id,
      //             isFOR,
      //             screen
      //           ) => {
      //             //#region get all previous data in the cards

      //             const currentHeaders = {
      //               Authorization:
      //                 "Bearer " + localStorage.getItem("accessToken"),
      //             };

      //             const prevDataParams = {
      //               branch_id: branch_id,
      //               hub_id: hub_id,
      //               arrival_type: isFOR ? "FOR" : "Farmer",
      //             };

      //             // this.setState({ isSpinnerOn: true });
      //             API.get(`/varieties/arrivals`, {
      //               headers: currentHeaders,
      //               params: prevDataParams,
      //             })
      //               .then((previousDataResponse) => {
      //                 if (previousDataResponse.data) {
      //                   console.log(
      //                     "PREVIOUS DATA : FOR/FARMER : ",
      //                     previousDataResponse.data.data
      //                   );

      //                   //#region get varieties from the list in a structured format and save it into hubVarieties.
      //                   //        this will handle adding variety cards into the FOR and Farmer screens.

      //                   let currentHubVarietyIDList = previousDataResponse.data.data.varieties.map(
      //                     (item) => item.variety_id
      //                   );

      //                   console.log(currentHubVarietyIDList);

      //                   let currentHubVarieties = currentHubVarietyIDList.map(
      //                     (id) =>
      //                       this.props.allVarietyInfo.find(
      //                         (item) => item.variety_id === id
      //                       )
      //                   );

      //                   console.log(
      //                     "current hub varieties gotten from previous data :",
      //                     currentHubVarieties
      //                   );

      //                   this.props.setHubVarieties(currentHubVarieties);

      //                   //#region  resetting remainingHubvarietyNames in redux
      //                   // this can be done easily as assigning all variety names directly to the remainingHubVarietyNames.
      //                   // but just in case the client would want to add a variety list for a hub in future,we keep a null array
      //                   // as the incoming varietylist for the hub. replace the null array with the varietylist names of the hub
      //                   // in case varietylist comes with hub in the future.
      //                   let currentHubVarietyNames = currentHubVarieties.map(
      //                     (item) => item.variety_name
      //                   );
      //                   let allHubVarietyNames = this.props.allVarietyInfo.map(
      //                     (item) => item.variety_name
      //                   );
      //                   let remainingHubVarietyNames = allHubVarietyNames.filter(
      //                     (item) => !currentHubVarietyNames.includes(item)
      //                   );

      //                   this.props.setRemainingHubVarietyList(
      //                     remainingHubVarietyNames
      //                   );
      //                   //#endregion

      //                   //#endregion

      //                   // save previous card data in the local state depending upon isFOR.
      //                   isFOR
      //                     ? this.setState(
      //                       {
      //                         previousCardDataFOR:
      //                           previousDataResponse.data.data.varieties,
      //                       },
      //                       () => {
      //                         if (screen)
      //                           this.props.setCurrentArrivalScreen(screen);
      //                       }
      //                     )
      //                     : this.setState(
      //                       {
      //                         previousCardDataFarmer:
      //                           previousDataResponse.data.data.varieties,
      //                       },
      //                       () => {
      //                         if (screen)
      //                           this.props.setCurrentArrivalScreen(screen);
      //                       }
      //                     );

      //                   forceChanges();

      //                   // this.setState({ isSpinnerOn: false });
      //                 } else {
      //                   //this.props.setHubVarieties([]);
      //                   console.log("error getting previous data in the cards");
      //                   message.error(
      //                     "Could not retrieve previous card data.Please try again"
      //                   );
      //                   // this.setState({ isSpinnerOn: false });
      //                 }
      //               })
      //               .catch((err) => {
      //                 //  this.props.setHubVarieties([]);

      //                 console.log(
      //                   "error getting previous data in the cards ; ERROR : ",
      //                   err.response
      //                 );

      //                 message.error(
      //                   "Could not retrieve previous card data.Please try again"
      //                 );
      //                 // this.setState({ isSpinnerOn: false });
      //               });
      //             //#endregion
      //           };

      //           const forceChanges = () => {
      //             const { currentScreen, setCurrentArrivalScreen } = this.props;

      //             switch (currentScreen) {
      //               case "Mandi":
      //                 const tempMandiScreen = currentScreen;
      //                 setCurrentArrivalScreen("FOR");
      //                 setCurrentArrivalScreen(tempMandiScreen);

      //                 break;
      //               case "FOR":
      //                 let tempFORScreen = currentScreen;
      //                 setCurrentArrivalScreen("Farmer");
      //                 setCurrentArrivalScreen(tempFORScreen);
      //                 break;
      //               case "Farmer":
      //                 const tempFarmerScreen = currentScreen;
      //                 setCurrentArrivalScreen("Mandi");
      //                 setCurrentArrivalScreen(tempFarmerScreen);
      //                 break;
      //               default:
      //                 break;
      //             }
      //             // this.setState({ isSpinnerOn: false });
      //           };

      //           //#endregion

      //           //#endregion
      //           /////////////////////////////////////////////////

      //           /////////////////////////////////////////////////
      //           //#region BUYING_DECISION_INITIALIZATION

      //           //#region  api sequential calls for buying decision

      //           const buyingDecisionHeaders = {
      //             "Content-Type": "application/json",
      //             Authorization:
      //               "Bearer " + localStorage.getItem("accessToken"),
      //           };
      //           const params = {
      //             table_type: "transaction",
      //           };

      //           API.get("/branches", {
      //             headers: buyingDecisionHeaders,
      //             params: params,
      //           })
      //             .then((branchResponse) => {
      //               if (branchResponse.data.status) {
      //                 this.props.setDecisionBranches(
      //                   branchResponse.data.data.branches
      //                 );
      //                 this.props.setSelectedBranchID(
      //                   branchResponse.data.data.branches[0].territory_id
      //                 );

      //                 console.log(
      //                   "selected branch id : ",
      //                   branchResponse.data.data.branches[0].territory_id
      //                 );

      //                 GetRegion(
      //                   branchResponse.data.data.branches[0].territory_id
      //                 );
      //               }
      //             })
      //             .catch((err) => console.log("Error from branch : ", err));
      //           /**********************************************************************************/

      //           API.get("/reports", { headers: branchHeader })
      //             .then((reportResponse) => {
      //               if (reportResponse.data.status) {
      //                 const allReports = reportResponse.data.data.map(
      //                   (report) => {
      //                     return {
      //                       param_display_value: report.param_display_value,
      //                       param_data_value: report.param_data_value,
      //                       param_type: report.param_type,
      //                     };
      //                   }
      //                 );
      //                 this.props.setReportData(allReports);
      //               } else {

      //                 console.log("error getting Reports");
      //               }
      //             })
      //             .catch((err) => {
      //               console.log("Error getting all reports : ERROR :", err);
      //             });

      //           /**********************************************************************************/


      //           //#endregion

      //           //#region buying decision assistive functions
      //           const GetRegion = (branchId) => {
      //             const params = {
      //               table_type: "transaction",
      //               branch_id: branchId,
      //               mapping: "mapped",
      //             };
      //             // API.get(`/branches/${branchId}/regions/`, {
      //             API.get(`/regions`, {
      //               headers: buyingDecisionHeaders,
      //               params: params,
      //             })
      //               .then((regionResponse) => {
      //                 console.log(
      //                   "REGION Response :",
      //                   regionResponse.data.data
      //                 );
      //                 this.props.setDecisionRegions(
      //                   regionResponse.data.data.regions
      //                 );
      //                 this.props.setSelectedRegionID(
      //                   regionResponse.data.data.regions[0].region_id
      //                 );

      //                 console.log(
      //                   "selected region id : ",
      //                   regionResponse.data.data.regions[0].region_id
      //                 );

      //                 GetVariety(
      //                   branchId,
      //                   regionResponse.data.data.regions[0].region_id
      //                 );
      //               })
      //               .catch((err) => console.log("Error from region : ", err));
      //           };

      //           const GetVariety = (branchId, regionId) => {
      //             // const VARIETY_END_POINT = `/branches/${branchId}/regions/${regionId}/`;
      //             const VARIETY_END_POINT = `/varieties`;
      //             const params = {
      //               table_type: "transaction",
      //               mapping: "mapped",
      //               region_id: regionId,
      //             };
      //             API.get(VARIETY_END_POINT, {
      //               headers: buyingDecisionHeaders,
      //               params: params,
      //             })
      //               .then((varietyResponse) => {
      //                 console.log("Variety response :", varietyResponse.data);
      //                 this.props.setDecisionVarieties(
      //                   varietyResponse.data.data
      //                     ? varietyResponse.data.data
      //                     : []
      //                 );

      //                 this.props.setSelectedVarietyID(
      //                   varietyResponse.data.data
      //                     ? varietyResponse.data.data[0].variety_id
      //                     : ""
      //                 );

      //                 console.log(
      //                   "selected variety id : ",
      //                   varietyResponse.data.data[0].variety_id
      //                 );

      //                 getHubTableData(
      //                   branchId,
      //                   regionId,
      //                   varietyResponse.data.data[0].variety_id
      //                 );
      //               })
      //               .catch((err) => console.log("Error from variety : ", err));
      //           };

      //           const getHubTableData = (branchId, regionId, varietyId) => {
      //             this.props.setHubTableData({});

      //             // this.props.setFORData([]);
      //             const params = {
      //               branch_id: branchId,
      //               regions: [regionId],
      //               varities: [varietyId],
      //             };
      //             //#region api call for getting buying decision data

      //             // const HUB_DATA_END_POINT = `/branches/${branchId}/regions/${regionId}/variety/${varietyId}`;
      //             // API.get(HUB_DATA_END_POINT, {
      //             //   headers: buyingDecisionHeaders,
      //             // })
      //             const HUB_DATA_END_POINT = `/buying_decision_planned`;
      //             API.get(HUB_DATA_END_POINT, { headers: buyingDecisionHeaders, params: params })
      //               .then((buyingResponse) => {
      //                 console.log(
      //                   "buying decision response ",
      //                   buyingResponse.data
      //                 );

      //                 if (buyingResponse.data) {
      //                   // console.log("saving buying decision data to store");
      //                   const modifiedHubDataStructure = {
      //                     region: {
      //                       hub_details: buyingResponse.data.data.hub_list.map(
      //                         (item) => {
      //                           return { ...item, edited: false };
      //                         }
      //                       ),
      //                     },
      //                   };
      //                   this.props.setHubTableData(modifiedHubDataStructure);

      //                   // this.props.setRollUp(
      //                   //   buyingResponse.data.data.mandi_roll_up,
      //                   //   buyingResponse.data.data.for_roll_up,
      //                   //   buyingResponse.data.data.farmer_roll_up
      //                   // );
      //                   this.props.setRollUp(
      //                     {},
      //                     buyingResponse.data.data.for_roll_up,
      //                     {}
      //                   );

      //                   //#region set hubFORdata in redux

      //                   const forData = buyingResponse.data.data.hub_list
      //                     .map((item, idx) => {
      //                       if (
      //                         buyingResponse.data.data.hub_list[idx]
      //                           .source_type !== "mandi"
      //                       ) {
      //                         return {
      //                           hub_id: item.hub_id,
      //                           buying_decision_id: item.buying_decision_id,
      //                           temp_bd_id: item.temp_bd_id,
      //                           revised_qty: item.revised_qty,
      //                           revised_buy_min_price:
      //                             item.revised_buy_min_price,
      //                           revised_buy_max_price:
      //                             item.revised_buy_max_price,
      //                           remark_id: item.remark_id
      //                             ? item.remark_id
      //                             : null,
      //                           source_type: item.source_type,
      //                           claim_type: item.claim_type,
      //                           division: item.division,
      //                           region_id: item.region_id,
      //                           variety_id: item.variety_id,
      //                           hub_name: item.hub_name,
      //                           variety_name: item.variety_name
      //                         };
      //                       }
      //                     })
      //                     .filter((item) => item !== undefined);

      //                   this.props.setHubDataPostFOR(forData);

      //                   //#endregion

      //                   //
      //                   // this.props.setFORData(this.props.hubTableData);
      //                   //
      //                 }
      //               })
      //               .catch((err) => {
      //                 console.log(
      //                   "error getting buying decision response : ERROR : ",
      //                   err
      //                 );
      //                 this.props.setHubTableData({});

      //                 //
      //                 // this.props.setFORData([]);
      //               });

      //             //#endregion
      //             //
      //           };
      //           //#endregion

      //           //#endregion
      //           //////////////////////////////////////////////////

      //           // get a new access token whenever the access-token expires as long as there is a refresh token
      //           const autoRefresh = setInterval(() => {
      //             if (localStorage.getItem("refreshToken") !== null) {
      //               console.log("getting new access token...");

      //               const refreshHeader = {
      //                 "Content-Type": "application/json",
      //                 Authorization:
      //                   "Bearer " + localStorage.getItem("refreshToken"),
      //               };

      //               API.post("/refresh", null, {
      //                 headers: refreshHeader,
      //               })
      //                 .then((response) => {
      //                   if (response.status) {
      //                     console.log("login page : access token aquired.");
      //                     localStorage.setItem(
      //                       "accessToken",
      //                       response.data.data.access_token
      //                     );
      //                     this.props.setAccessToken(
      //                       response.data.data.access_token
      //                     );

      //                     localStorage.setItem(
      //                       "accessTokenExpiry",
      //                       response.data.data.access_token_expiry
      //                     );
      //                   } else {
      //                     console.log(
      //                       "############################ loginpage: could not get access token.... ##################"
      //                     );
      //                   }
      //                 })
      //                 .catch((err) =>
      //                   console.log(
      //                     "login page :error fetching new access token",
      //                     err.response
      //                   )
      //                 );
      //             } else {
      //               console.log("refresh token expired");
      //             }
      //           }, localStorage.getItem("accessTokenExpiry") * 1000 - 60 * 1000); // 1 minute(60000ms) before expiry, access token will be refreshed.

      //           // logout when the refresh token expires.
      //           setTimeout(() => {
      //             console.log("logging out ....");
      //             SignOutAPI();
      //             this.props.setAccessToken(null);
      //             localStorage.setItem("isLogged", false);
      //             history.push("/login");
      //             clearInterval(autoRefresh);

      //             // setUserLoggedStatus(false);
      //           }, localStorage.getItem("refreshTokenExpiry") * 1000);
      //         }
      //       })
      //       .catch((err) => {
      //         if (err) {
      //           if (err.response) message.error(err.response.data.message);
      //           else {
      //             message.error("Server unavailable. Please try again later.");
      //           }
      //         } else {
      //           message.error("Server unavailable. Please try again later.");
      //         }
      //       });
      //   } else {
      //     message.error("Invalid Login Credentials !");
      //   }
      // });
    };

    return (
      <Form onSubmit={handleSubmit} className="login-form">
        <div
          className="login-main-container"
          style={{ height: window.innerHeight - 25 }}
        >
          <div
            className="background-tile"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          ></div>
          <div className="login-container">
            {/* <div className="login-div">
              <p>LOGIN</p>
            </div> */}

            <div className="login-logo">
              <img alt="logo" width={"100px"} height={"100px"} src={Logo} />
            </div>
            <div className="inputs">
              <div className="login-div">
                <p>LOGIN to the Dashboard</p>
              </div>
              <Form.Item>
                {/* {getFieldDecorator("username", {
                  // rules: [
                  //   { required: true, message: "Please input your username!" }
                  // ]
                })( */}
                <Input
                  className="textbox"
                  prefix={
                    <UserOutlined />
                  }
                  placeholder="Username"
                />
                {/* )} */}
              </Form.Item>
              <div className="dots">
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . .
              </div>
              {/* <div className="line"></div> */}
              <Form.Item>
                {/* {getFieldDecorator("password", {
                  // rules: [
                  //   { required: true, message: "Please input your Password!" }
                  // ]
                })( */}
                <Input
                  className="textbox"
                  prefix={
                    <LockOutlined />

                  }
                  type="password"
                  placeholder="Password"
                />
                {/* )} */}
              </Form.Item>
              {/* <div className="line"></div> */}
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button button"
              >
                LOGIN
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => {

  //////////////////////////////////////////////
  // //#region arrival entry optimization selectors
  // arrivalData: selectArrivalData,
  // currentScreen: selectCurrentArrivalScreen,
  // summaryIsEnabled: selectSummaryScreenVisibility,
  // branches: selectBranches,
  // regions: selectRegions,
  // hubs: selectHubs,
  // mandis: selectMandis,
  // allVarietyInfo: selectAllVarietyInfo,
  // branchID: selectBranchID,
  // regionID: selectRegionID,
  // hubID: selectHubID,
  // mandiID: selectMandiID,

  // varieties: selectVarieties,
  // hubVarieties: selectHubVarieties,

  // //#endregion
  // ///////////////////////////////////////////////

  // hubTableData: selectHubTableData,
  // decisionBranches: selectDecisionBranches,
  // decisionRegions: selectDecisionRegions,
  // decisionVarieties: selectDecisionVarieties,
  // selectedBranchID: selectSelectedBranchID,
  // selectedRegionID: selectSelectedRegionID,
  // selectedVarietyID: selectSelectedVarietyID,
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setUserLoggedStatus: (status) => dispatch(setUserLoggedStatus(status)),
    // setAccessToken: (token) => dispatch(setAccessToken(token)),
    // setUserRBACDetails: (
    //   id,
    //   name,
    //   territories,
    //   locationFeatures,
    //   nonLocationFeatures
    // ) =>
    //   dispatch(
    //     setUserRBACDetails(
    //       id,
    //       name,
    //       territories,
    //       locationFeatures,
    //       nonLocationFeatures
    //     )
    //   ),
    // setAllUsers: (data) => dispatch(setAllUsers(data)),
    // setAllBranches: (branches) => dispatch(setAllBranches(branches)),

    // saveAllVarietyInfo: (allVarietyInfo) =>
    //   dispatch(saveAllVarietyInfo(allVarietyInfo)),
    // setRemarks: (remarks) => dispatch(setRemarks(remarks)),

    // ////////////////////////////////////////////////////////
    // //#region Arrival entry optimization actions
    // setArrivalData: (data) => dispatch(setArrivalData(data)),
    // setAllMandis: (data) => dispatch(setAllMandis(data)),

    // setCurrentArrivalScreen: (screenName) =>
    //   dispatch(setCurrentArrivalScreen(screenName)),
    // setBranches: (branches) => dispatch(setBranches(branches)),
    // setReports: (reports)=> dispatch(setReportData(reports)),
    // setRegions: (regions) => dispatch(setRegions(regions)),
    // setHubs: (hubs) => dispatch(setHubs(hubs)),
    // setMandis: (mandis) => dispatch(setMandis(mandis)),

    // setVarieties: (varieties) => dispatch(setVarieties(varieties)),
    // setRemainingVarietyList: (data) => dispatch(setRemainingVarietyList(data)),

    // setHubVarieties: (data) => dispatch(setHubVarieties(data)),
    // setRemainingHubVarietyList: (data) =>
    //   dispatch(setRemainingHubVarietyList(data)),

    // setBranchID: (id) => dispatch(setBranchID(id)),
    // setRegionID: (id) => dispatch(setRegionID(id)),
    // setHubID: (id) => dispatch(setHubID(id)),
    // setMandiID: (id) => dispatch(setMandiID(id)),
    // //#endregion
    // /////////////////////////////////////////////////////

    // setRollUp: (mandiData, FORData, farmerData) =>
    //   dispatch(setRollUp(mandiData, FORData, farmerData)),

    // setHubTableData: (data) => dispatch(setHubTableData(data)),
    // setHubDataPostFOR: (data) => dispatch(setHubDataPostFOR(data)),
    // setDecisionBranches: (data) => dispatch(setDecisionBranches(data)),
    // setDecisionRegions: (data) => dispatch(setDecisionRegions(data)),
    // setDecisionVarieties: (data) => dispatch(setDecisionVarieties(data)),
    // setSelectedBranchID: (id) => dispatch(setSelectedBranchID(id)),
    // setSelectedRegionID: (id) => dispatch(setSelectedRegionID(id)),
    // setSelectedVarietyID: (id) => dispatch(setSelectedVarietyID(id)),
  };
};

// const Login = Form.create({ name: "normal_login" })(LoginForm);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

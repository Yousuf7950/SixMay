/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Invoices
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          view all
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2022" id="Car# ABC-415" price="PKR : 1180" />
          <Invoice date="February, 10, 2022" id="Car# ATB-115" price="PKR : 2250" />
          <Invoice date="April, 05, 2022" id="Car# YUC-015" price="PKR : 4120" />
          <Invoice date="Jan, 25, 2012" id="Car# MKC-715" price="PKR : 2180" />
          <Invoice date="March, 01, 2022" id="Car# ARC-425" price="PKR :12300" noGutter />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Invoices;

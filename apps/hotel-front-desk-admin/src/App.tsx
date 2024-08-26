import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StaffList } from "./staff/StaffList";
import { StaffCreate } from "./staff/StaffCreate";
import { StaffEdit } from "./staff/StaffEdit";
import { StaffShow } from "./staff/StaffShow";
import { ManagementList } from "./management/ManagementList";
import { ManagementCreate } from "./management/ManagementCreate";
import { ManagementEdit } from "./management/ManagementEdit";
import { ManagementShow } from "./management/ManagementShow";
import { GuestList } from "./guest/GuestList";
import { GuestCreate } from "./guest/GuestCreate";
import { GuestEdit } from "./guest/GuestEdit";
import { GuestShow } from "./guest/GuestShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HotelFrontDesk"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Staff"
          list={StaffList}
          edit={StaffEdit}
          create={StaffCreate}
          show={StaffShow}
        />
        <Resource
          name="Management"
          list={ManagementList}
          edit={ManagementEdit}
          create={ManagementCreate}
          show={ManagementShow}
        />
        <Resource
          name="Guest"
          list={GuestList}
          edit={GuestEdit}
          create={GuestCreate}
          show={GuestShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import {
  JobsAndInternshipsList,
  JobsAndInternshipsCreate,
  JobsAndInternshipsEdit,
} from './resources/JobsAndInternships';
import { gradesList, gradesCreate, gradesEdit } from './resources/grades';
import {
  subjectsList,
  subjectsCreate,
  subjectsEdit,
} from './resources/subjects';
import { notesList, notesCreate, notesEdit } from './resources/notes';
import {
  HealthAndMentalCareList,
  HealthAndMentalCareCreate,
  HealthAndMentalCareEdit,
} from './resources/HealthAndMentalCare';
import { newsList, newsCreate, newsEdit } from './resources/news';
import {
  LoanCalculatorList,
  LoanCalculatorCreate,
  LoanCalculatorEdit,
} from './resources/LoanCalculator';
import JobsAndInternshipsIcon from '@mui/icons-material/Work';
import gradesIcon from '@mui/icons-material/Grade';
import subjectsIcon from '@mui/icons-material/Subject';
import notesIcon from '@mui/icons-material/Note';
import HealthAndMentalCareIcon from '@mui/icons-material/HealthAndSafety';
import newsIcon from '@mui/icons-material/Announcement';
import LoanCalculatorIcon from '@mui/icons-material/Calculate';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/af564790b">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="JobsAndInternships"
          options={{ label: 'Jobs And Internships' }}
          list={JobsAndInternshipsList}
          create={JobsAndInternshipsCreate}
          edit={JobsAndInternshipsEdit}
          recordRepresentation="title"
          icon={JobsAndInternshipsIcon}
        />
        <Resource
          name="grades"
          options={{ label: 'Grades' }}
          list={gradesList}
          create={gradesCreate}
          edit={gradesEdit}
          recordRepresentation="cgpa"
          icon={gradesIcon}
        />
        <Resource
          name="subjects"
          options={{ label: 'Subjects' }}
          list={subjectsList}
          create={subjectsCreate}
          edit={subjectsEdit}
          recordRepresentation="subjectName"
          icon={subjectsIcon}
        />
        <Resource
          name="notes"
          options={{ label: 'Notes' }}
          list={notesList}
          create={notesCreate}
          edit={notesEdit}
          recordRepresentation="title"
          icon={notesIcon}
        />
        <Resource
          name="HealthAndMentalCare"
          options={{ label: 'Health And Mental Care' }}
          list={HealthAndMentalCareList}
          create={HealthAndMentalCareCreate}
          edit={HealthAndMentalCareEdit}
          recordRepresentation="serviceName"
          icon={HealthAndMentalCareIcon}
        />
        <Resource
          name="news"
          options={{ label: 'News' }}
          list={newsList}
          create={newsCreate}
          edit={newsEdit}
          recordRepresentation="title"
          icon={newsIcon}
        />
        <Resource
          name="LoanCalculator"
          options={{ label: 'Loan Calculator' }}
          list={LoanCalculatorList}
          create={LoanCalculatorCreate}
          edit={LoanCalculatorEdit}
          recordRepresentation="loanAmount"
          icon={LoanCalculatorIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;

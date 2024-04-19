//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const LoanCalculatorTitle = () => {
  const record = useRecordContext();
  return <span>LoanCalculator {record ? `"${record.loanAmount}"` : ''}</span>;
};

export const LoanCalculatorList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <NumberField source="loanAmount" />
      <NumberField source="interestRate" />
      <NumberField source="loanTerm" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const LoanCalculatorEdit = () => (
  <Edit title={<LoanCalculatorTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="loanAmount" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="interestRate" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="loanTerm" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const LoanCalculatorCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="loanAmount" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="interestRate" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="loanTerm" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
];

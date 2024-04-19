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
const HealthAndMentalCareTitle = () => {
  const record = useRecordContext();
  return (
    <span>HealthAndMentalCare {record ? `"${record.serviceName}"` : ''}</span>
  );
};

export const HealthAndMentalCareList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="serviceName" />
      <TextField source="description" />
      <TextField source="contactInformation" />
      <TextField source="availability" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const HealthAndMentalCareEdit = () => (
  <Edit title={<HealthAndMentalCareTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="serviceName" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="contactInformation" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="availability" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const HealthAndMentalCareCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="serviceName" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="contactInformation" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="availability" />
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
  ,
];
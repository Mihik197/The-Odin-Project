import './App.css'
import FormSection from './FormSection';

function App() {
  const generalInfoFields = [
      { name: 'name', label: 'Full Name:', placeholder: 'Enter full name' },
      { name: 'email', label: 'Email:', placeholder: 'Enter email address' },
      { name: 'phone', label: 'Phone number:', placeholder: 'Enter phone number' },
  ];

  const educationalExperienceFields = [
    { name: 'school', label: 'School Name:', placeholder: 'Enter school name' },
    { name: 'titleOfStudy', label: 'Title of Study:', placeholder: 'Enter title of study' },
    { name: 'dateOfStudy', label: 'Date of Study:', placeholder: 'Enter date of study' },
  ];

  const practicalExperienceFields = [
    { name: 'company', label: 'Company:', placeholder: 'Enter company name' },
    { name: 'role', label: 'Role:', placeholder: 'Enter role' },
    { name: 'responsibilities', label: 'Responsibilities:', placeholder: 'Enter main responsibilities' },
    { name: 'dateFromAndTill', label: 'Date from and Till:', placeholder: 'Enter date from and till' },
  ];

  return (
    <div>
      <FormSection sectionTitle="General Information" fields={generalInfoFields} />
      <FormSection sectionTitle="Education" fields={educationalExperienceFields} />
      <FormSection sectionTitle="Experience" fields={practicalExperienceFields} />
    </div>
  )
}

export default App

import { useState } from 'react'

function FormSection({ sectionTitle, fields }) {
    const initialEntry = fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {});
    const [ entries, setEntries ] = useState([initialEntry]);
    const [ submitted, setSubmitted ] = useState(false);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newEntries = [...entries];
        newEntries[index] = { ...newEntries[index], [name]: value };
        setEntries(newEntries);
    }

    const handleSubmit = () => {
        event.preventDefault(); // Prevents the form from reloading the page on submission
        setSubmitted(!submitted);
    }

    return (
        <section>
            <h2>{sectionTitle}</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <div key={field.name}>
                        <label>{field.label} </label>
                        <input 
                            name="name" 
                            onChange={(e) => handleChange(index, e)} 
                            value={entries[field.name]} 
                            placeholder={field.placeholder} 
                            disabled={submitted}
                        />
                        <br /><br />
                    </div>
                ))}
                <button type="submit">{submitted? "Edit" : "Submit"}</button>
            </form>
            <br /><br />
        </section>
    );
}

export default FormSection;
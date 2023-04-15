import React, {useState} from "react";

const NewColorForm = ({addColor}) => {
    const INITIAL_STATE = {color:''};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.prentDefault();
        addColor(formData);
        setFormData(INITIAL_STATE);
    };

    const handleChange = evt => {
        const { color, value }= evt.target;
        setFormData(fData => ({
            ...fData,
            [color]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color:</label>
            <input
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
        />

        <button>Add Color</button>
        </form>
    )
}

export default NewColorForm;
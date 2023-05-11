import React, { useState } from 'react';
import { Button, Input, Select, Title, Wrapper } from './styledForm';
import axios from 'axios';

export const Form = () => {

    const inttailFormData = {
        name: '',
        preparation_time: '',
        type: '',
        no_of_slices: '',
        spiciness_scale: '',
        slices_of_bread: '',
        diameter: '',
    };

    const [formData, setFormData] = useState(inttailFormData);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        for (const key in formData) {
            if (formData[key] !== '') {
                data[key] = formData[key];
            }
        };

        try {
            const response = await axios.post('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            setFormData(inttailFormData);
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <Wrapper onSubmit={handleSubmit} >
            <Title>Dish name *</Title>
            <Input
                name="name"
                minLength={3}
                value={formData.name}
                onChange={handleInputChange}
                type='text'
                placeholder='Enter dish name (at least 3 characters)'
                required
            />

            <Title>Preparation time *</Title>
            <Input
                name="preparation_time"
                value={formData.preparation_time}
                onChange={handleInputChange}
                type='time'
                required
                step="2"
            />


            <Title>Dish type *</Title>
            <Select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
                validate="xd"
            >
                <option disabled value=''>Select dish type</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="sandwich">Sandwich</option>
            </Select>

            {formData.type !== "" ?
                <>
                    <Title>
                        {formData.type === "pizza"
                            ? "Number of slices"
                            : formData.type === "soup"
                                ? "Spiciness scale"
                                : "Number of bread slice"
                        }
                        {""} * </Title>
                    <Input
                        name={formData.type === "pizza"
                            ? "no_of_slices"
                            : formData.type === "soup"
                                ? "spiciness_scale"
                                : "slices_of_bread"
                        }
                        value={formData[formData.type === "pizza"
                            ? "no_of_slices"
                            : formData.type === "soup"
                                ? "spiciness_scale"
                                : "slices_of_bread"
                        ]}
                        placeholder={formData.type === "pizza"
                            ? "Chose number of slices"
                            : formData.type === "soup"
                                ? "Chose spiciness scale (1- 10)"
                                : "Chose number of bread slice"
                        }
                        required
                        onChange={handleInputChange}
                        min={1}
                        type='number'
                        max={formData.type === "soup" ? 10 : undefined}
                    />
                </> : null}

            {formData.type === "pizza" ?
                <>
                    <Title>Diameter in cm *</Title>
                    <Input
                        required
                        name="diameter"
                        value={formData.diameter}
                        onChange={handleInputChange}
                        type='number'
                        placeholder='Chose size'
                        min={1}
                        step={0.1}
                    />
                </> : null
            }
            <Button>Submit Dish</Button>
        </Wrapper>
    );
};


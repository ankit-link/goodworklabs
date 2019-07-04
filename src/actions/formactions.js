export const UPDATE_FORM = 'UPDATE_FORM';

export const updateForm = (formData) => ({

    type: UPDATE_FORM,
    name: formData.person_name,
    lastname: formData.person_lastname,
    gender: formData.gender,
    states: formData.states
})
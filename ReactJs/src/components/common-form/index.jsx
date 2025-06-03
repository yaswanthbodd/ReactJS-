import CommonInput from "../common-input";

const formTypes = {
    INPUT : 'input',
    SELECT : 'select',
    TEXTAREA : 'textarea    '
}

function CommonForm({
    formControls = [], 
    formData, 
    setFormData, 
    buttonText,
    onHandleSubmit
    }) {

    function renderFormElement(getCurrentElement){
        let content = null;
        switch(getCurrentElement?.componentType){
            case formTypes.INPUT :
                content = <CommonInput 
                            label={getCurrentElement.label}
                            name={getCurrentElement.name}
                            id={getCurrentElement.id}
                            placeholder={getCurrentElement.placeholder}
                            type={getCurrentElement.type}
                            value={formData[getCurrentElement.name]}
                            onChange={(event)=> setFormData({
                                ...formData,
                                [event.target.name] : event.target.value,
                            })}
                            />
                break;
            default: 
                    content = <CommonInput 
                            label={getCurrentElement.label}
                            name={getCurrentElement.name}
                            id={getCurrentElement.id}
                            placeholder={getCurrentElement.placeholder}
                            type={getCurrentElement.type}
                            value={formData[getCurrentElement.name]}
                            onChange={(event)=> setFormData({
                                ...formData,
                                [event.target.name] : event.target.value,
                            })}
                            />
                break;
        }
        return content;
    }
    return <form onSubmit={onHandleSubmit}>
        {
            formControls?.length ?
            formControls.map(singleFormElementItem => renderFormElement(singleFormElementItem))
            : null
        }
        <div style={{margin : "12px"}}>
            <button type="submit">{buttonText || "Submit"}</button>
        </div>
    </form>
}

export default CommonForm;
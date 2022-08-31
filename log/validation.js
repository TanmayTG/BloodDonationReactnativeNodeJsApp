// const validate = values =>{
//     console.log(values)
//     const error = {};
//     error.Username='';
//     error.Password='';

//     var name=values.Username;
//     var pass=values.Password;

//     if(values.Username === undefined){
//         name = '';
//     }
//     if(values.Password === undefined){
//         name = '';
//     }

//     if(name.length < 8 && name !== ''){
//         error.Username='Too short';
//     }
//     if(name.length<8 && pass !==''){
//         error.Password='Too short'
//     }
//     if (name == ''){
//         error.Username='Fill Your Username';
//     }
//     if(pass==''){
//         error.Password='Fill Your Password'
//     }

//     return error
// };

// export default valida

// import React,{state} from "react"

// export default class App extends Components{
// state
// }

const Validate = values =>{
    console.log(values)
    const error = {};
    error.Hospitalname='';
    error.Mobile='';
    error.Email='';
    error.BloodGroup='';
    error.Street='';
    error.City='';
    error.Pincode='';
    error.State='';
    error.Password='';
    error.ConfirmPassword='';

    var hospital = values.Hospitalname;
    var mobile = values.Mobile;
    var email = values.Email;
    var blood = values.BloodGroup;
    var street = values.Street;
    var city = values.City;
    var pincode = values.Pincode;
    var state = values.State;
    var password = values.Password;
    var confirm = values.ConfirmPassword;

    if(values.Hospitalname === undefined){
        hospital = '';
    }
    if(hospital.length < 8 && hospital !== ''){
        error.Hospitalname='Too short';
    }
    if(hospital==''){
        error.Hospitalname='Fill hospital name'
    }

    return error;
}

export default Validate;
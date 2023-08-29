export const checkValidData=(email,password)=>{

    const isMailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/.test(password)
   
    if(!isMailValid) return "Mail is not valid"
    if(!isPasswordValid) return "Password not valid"
    return null
}
export const checkValidData=(name,email,password)=>{

    const isMailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/.test(password)
    if(!name) return "Name is required"
    if(!isMailValid) return "Mail is not valid"
    if(!isPasswordValid) return "Password not valid"
    return null
}
class Utils {
    static getDob = (dob) => {
        const userDob = dob;
        const date = new Date(userDob);
        return  date.getDate() + "." + (date.getMonth()+1)  + "." + date.getFullYear();
    }
    static emailHide = (email) => {
        const monkey = email.indexOf("@");
        const hidePart = email.substring(0,3) + "..." + email.substring(monkey - 3);
        return hidePart;
    }
    
}
export default Utils
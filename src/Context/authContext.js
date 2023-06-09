import React,{useContext,useEffect,useState}  from "react";

const AuthContext = React.createContext();
const AuthUpdateContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function useUpdateAuth(){
    return useContext(AuthUpdateContext)
}

export function AuthProvider({children})
{
    let initState = {}
    if(!localStorage.getItem('userDetail'))
    {
        initState = null
    }
    else
    {
        initState = JSON.parse(localStorage.getItem('userDetail'))
    }
    const [user,SetUser] = useState(initState);
    function login(data) {
        console.log('login:',data);
        localStorage.setItem('userDetail', JSON.stringify(data));
        SetUser(data)
    }
    function logout() {
        console.log("logout")
        localStorage.removeItem('userDetail');
        SetUser(null)
    }

    useEffect(()=>{
        // console.log('dataset',user)
        SetUser(JSON.parse(localStorage.getItem('userDetail')))
    },[])

    return(
        <AuthContext.Provider value={user}>
            <AuthUpdateContext.Provider value={{login,logout}}>
                {children}
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )
}
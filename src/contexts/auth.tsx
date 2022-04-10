import React, { createContext } from "react";
import Loading from "../components/loading";
import { IUser } from "../interfaces";

interface ISignInRequest {
    email: string;
    password: string;
}

interface ISignInResponse {
    user: IUser;
    token: string;
}

interface IAuthContextData {
    signed: boolean;
    user: IUser | null;
    loading: boolean;
    signIn({email, password}:ISignInRequest): Promise<ISignInResponse>;
    signOut(): void;
}

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider:React.FC = ({ children }) => {

    const [user, setUser] = React.useState<IUser | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function loadStorageData() {
            const storagedUser = localStorage.getItem('Auth:user');
            const storagedToken = localStorage.getItem('Auth:token');

            if(storagedUser && storagedToken) {
                const userData: any = {
                    user: JSON.parse(storagedUser),
                }
                setUser(userData.user);
                // api.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`;
            }
            setLoading(false)
        }

        loadStorageData();
    }, [])

    async function signIn({ email, password }: ISignInRequest): Promise<any> {
        try {
            // const response = await api.post('auth/signin', { email, password });

            // setUser(response.data.user);
            // api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            // localStorage.setItem('Auth:user', JSON.stringify(response.data.user));
            // localStorage.setItem('Auth:token', response.data.token);
            const simulatedUser = {
                _id: 'fddkhsfjkhfek',
                name: 'Alberto Telles',
                email:'teste@email.com'
            }
            if(email === simulatedUser.email && password === 'senha123') {
                setUser(simulatedUser);
                localStorage.setItem('Auth:user', JSON.stringify(simulatedUser));
                localStorage.setItem('Auth:token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsYmVydG8gVGVsbGVzIiwiaWF0IjoxNTE2MjM5MDIyfQ.5q7swWAq0ltz5fXNcd_zUxU70-kJwf009A6rvEDiOJk');
            } else {
                throw new Error('Email or password invalid.')
            }

        } catch (error) {
            alert('Opss, algo deu errado.');
            return;
        }
    }

    function signOut() {
        localStorage.clear();
        setUser(null);
    }

    if (loading) {
        return (
            <Loading/>
        )
    }

    return (
        <AuthContext.Provider value={ { signed: !!user, user, signIn, signOut, loading } }>
            { children }
        </AuthContext.Provider>
    )
}
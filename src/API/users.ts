import axios from "axios"

export const login = async (email: string, password: string)=> {
    const body = JSON.stringify({ email, password })
    const res =  await fetch('http://localhost:3000/auth/login', {
        method: 'post',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json()).then(res => console.log(res))
}

export const singUp:() =>  void=  () => {}

export async function googleLogin(): Promise<void> {
    const res = axios({
        method: 'get',
        url: 'http://localhost:3000/auth/google/login',
        headers: {
            'Content-Type': 'application/json'
        },
      }).then(function (response) {
        console.log(response.data)
      });
    // try {
    //   const response = await fetch('http://localhost:3000/auth/google/login', {
    //     method: 'get',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //   });
    //   if (response.ok) {
    //     console.log('API call successful', response.json());
    //     // Aquí puedes realizar las acciones necesarias con la respuesta de la API
    //   } else {
    //     console.error('API call failed');
    //   }
    // } catch (error) {
    //   console.error('Error in API call:', error);
    // }
  }
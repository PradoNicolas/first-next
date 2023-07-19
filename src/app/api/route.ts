import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
    const formData = await request.formData()
    const {username, password} = { username: formData.get('username'), password: formData.get('password') }

    if(username=='EPK' && password=='sugoma'){
        const cookieStore = cookies()
        cookieStore.set('sessionid', "EPKGOOD")
        redirect('.')
    }
    else{
        return new Response('Not found', {
            status: 404
        })
    }
    
}
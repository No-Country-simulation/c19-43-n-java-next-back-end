import { cookies } from 'next/headers'

export default function TestData() {
    const cookieStore = cookies();
    const allCookies = cookieStore.getAll();
  
    console.log('Cookies:', allCookies);
}
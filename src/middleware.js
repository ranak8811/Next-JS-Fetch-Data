import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });
  //   if (token) {
  //     console.log("From middleware: ", token);
  //   }

  const isTokenOk = Boolean(token);
  const isAdminUser = token?.role == "admin";
  const isAdminSpecificRoute = req.nextUrl.pathname.startsWith("/dashboard");

  if (!isAdminUser && isAdminSpecificRoute) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url)
    );
  }
  return NextResponse.next();
};

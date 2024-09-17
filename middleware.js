export { auth as middleware } from "@/auth";
export const config = {
  matcher: ["/"], // Protect only the specified routes
};

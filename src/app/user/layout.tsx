import FooterUser from "@/components/user/FooterUser";
import SideBarUser from "@/components/user/SideBarUser";
import TopBarUser from "@/components/user/TopBarUser";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBarUser />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <TopBarUser />
        {children}
        <FooterUser />
      </div>
    </div>
  );
}
import NavbarDashboard from "../components/NavbarDashboard";
import {
  User,
  Mail,
 FileText,
  ShieldCheck,
  Settings,
  LogOut,
} from "lucide-react";

function Profile() {
  const user = {
    name: "Sonal Sharma",
    email: "sonal@example.com",
    reports: 12,
    status: "Active",
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <NavbarDashboard />

      <div className="max-w-5xl mx-auto px-8 py-10">

        <h1 className="text-4xl font-bold">
          My Profile
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your account information.
        </p>

        <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

          <div className="flex items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
              S
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                {user.name}
              </h2>

              <p className="text-slate-500">
                AI Healthcare User
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="border rounded-2xl p-5 flex items-center gap-4">

              <User className="text-blue-600" />

              <div>

                <p className="text-slate-500 text-sm">
                  Name
                </p>

                <h3 className="font-semibold">
                  {user.name}
                </h3>

              </div>

            </div>

            <div className="border rounded-2xl p-5 flex items-center gap-4">

              <Mail className="text-blue-600" />

              <div>

                <p className="text-slate-500 text-sm">
                  Email
                </p>

                <h3 className="font-semibold">
                  {user.email}
                </h3>

              </div>

            </div>

            <div className="border rounded-2xl p-5 flex items-center gap-4">

              <FileText className="text-blue-600" />

              <div>

                <p className="text-slate-500 text-sm">
                  Reports
                </p>

                <h3 className="font-semibold">
                  {user.reports}
                </h3>

              </div>

            </div>

            <div className="border rounded-2xl p-5 flex items-center gap-4">

              <ShieldCheck className="text-green-600" />

              <div>

                <p className="text-slate-500 text-sm">
                  Status
                </p>

                <h3 className="font-semibold text-green-600">
                  {user.status}
                </h3>

              </div>

            </div>

          </div>

          <div className="flex gap-4 mt-10">

            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">

              <Settings size={18} />

              Settings

            </button>

            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl">

              <LogOut size={18} />

              Logout

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;
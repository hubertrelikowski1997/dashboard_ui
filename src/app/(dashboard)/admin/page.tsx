import UserCard from "@/components/UserCard";

const Admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="Staffs" />
        </div>
      </div>
      {/* RIGHT */}
      <div className="bg-red-400 w-full lg:w-1/3">r</div>
    </div>
  );
};

export default Admin;

async function userList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();

  return data.users;
}
export default async function tdt() {
  let users = await userList();
  console.log(users, "users");
  return (
    <div className="Container">
      
      <div className="Main ">
      <h1>User List</h1>
        <div className="Userlist">
          {users?.map((i, d) => {
            return (
              <>
              <div key={d} className="UserBox">
                <img src={i.image}></img>
                <h1>Name:{i.firstName}</h1>
                <h3>Address{i.address.address}</h3>
                {/* <h3>Mac address{i.macAddress}</h3> */}
                <h3>Blood Group:{i.bloodGroup}</h3>
                <h3>Company:{i.company.name}</h3>
                <h3>Degignation:{i.company.title}</h3>
                <h3>Email:{i.email}</h3>
                <h3>DOB:{i.birthDate}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

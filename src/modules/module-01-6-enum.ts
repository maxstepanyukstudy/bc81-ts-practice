// non erasable syntax

enum Status {
  Loading, // 0
  Success, // 1
  Error, // 2
}
console.log("🚀 ~ Status:", Status);

let requestStatus: Status = Status.Loading;
console.log("🚀 ~ requestStatus:", requestStatus); // 0

console.log(Status.Loading);
console.log(Status.Success);
console.log(Status.Error);

// ======================

enum Status2 {
  Loading = 1,
  Success, // 2
  Error = 500,
}

console.log(Status2.Success); // 2
console.log(Status2.Error); // 500

// =====================

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let userRole: Role = Role.Admin;
console.log(userRole); // "ADMIN"

enum Role2 {
  Admin, //0
  User = "USER", //"USER"
  Guest // "1USER" - not ideal
}

console.log(Role2.Admin);
console.log(Role2.User);
console.log(Role2.Guest);

// ========================

enum Role3 {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

const getRoleName = (role: Role3) => {
  return `Your role is: ${role}`;
}

console.log(getRoleName(Role3.Admin)); // "Your role is: ADMIN"

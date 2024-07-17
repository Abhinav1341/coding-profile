export async function fetchUserInfo(handle) {
  const res = await fetch(
    `https://codeforces.com/api/user.info?handles=${handle}`
  );
  const data = await res.json();
  return data.result;
}

export async function fetchUserStatus(handle) {
  const res = await fetch(
    `https://codeforces.com/api/user.status?handle=${handle}`
  );
  const data = await res.json();
  return data.result;
}

export async function authHandler(action, user) {
  const resp = await fetch(
    ` https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/${action}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const data = await resp.json();
  if (resp.ok) {
    return data;
  }
  throw new Error(data.msg);
}
